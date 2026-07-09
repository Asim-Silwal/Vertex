import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_APP_PASSWORD;
const receiver = process.env.CONTACT_RECEIVER ?? "digital.vertex26@gmail.com";
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Leads";
const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

const oauthClientId = process.env.GMAIL_OAUTH_CLIENT_ID;
const oauthClientSecret = process.env.GMAIL_OAUTH_CLIENT_SECRET;
const oauthRefreshToken = process.env.GMAIL_OAUTH_REFRESH_TOKEN;

type ContactSubmission = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  needs: string;
};

function isSheetsConfigured() {
  return Boolean(
    spreadsheetId && serviceAccountEmail && serviceAccountPrivateKey,
  );
}

function isEmailConfigured() {
  return Boolean(
    gmailUser &&
      (gmailPass ||
        (oauthClientId && oauthClientSecret && oauthRefreshToken)),
  );
}

async function appendToSheet(submission: ContactSubmission) {
  if (!isSheetsConfigured()) {
    return false;
  }

  const { google } = await import("googleapis");
  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: serviceAccountPrivateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:F`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          submission.name,
          submission.email,
          `${submission.countryCode} ${submission.phone}`,
          submission.needs,
          "Website form",
        ],
      ],
    },
  });

  return true;
}

async function getTransporter() {
  // Prefer OAuth2 when all OAuth environment variables are provided
  if (oauthClientId && oauthClientSecret && oauthRefreshToken && gmailUser) {
    try {
      const { google } = await import('googleapis');
      const oAuth2Client = new google.auth.OAuth2(oauthClientId, oauthClientSecret);
      oAuth2Client.setCredentials({ refresh_token: oauthRefreshToken });
      const accessTokenResponse = await oAuth2Client.getAccessToken();
      const accessToken = accessTokenResponse?.token || undefined;

      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: gmailUser,
          clientId: oauthClientId,
          clientSecret: oauthClientSecret,
          refreshToken: oauthRefreshToken,
          accessToken,
        },
      });
    } catch (err) {
      console.error('Failed to create OAuth2 transporter', err);
      // Fall through to try app-password if available
    }
  }

  // Fallback to app password if provided
  if (gmailUser && gmailPass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }

  throw new Error('Email credentials are not configured. Provide OAuth2 vars or GMAIL_APP_PASSWORD.');
}

async function sendEmailNotification(submission: ContactSubmission) {
  if (!isEmailConfigured()) {
    return false;
  }

  const transporter = await getTransporter();
  const message = `New contact inquiry:\n\nName: ${submission.name}\nEmail: ${submission.email}\nPhone: ${submission.countryCode} ${submission.phone}\nNeeds:\n${submission.needs}`;

  await transporter.sendMail({
    from: gmailUser,
    to: receiver,
    subject: "New Vertex Digital Inquiry",
    text: message,
    replyTo: submission.email,
  });

  return true;
}

router.post("/contact", async (req, res) => {
  const { name, email, countryCode, phone, needs } = req.body;

  if (!name || !email || !countryCode || !phone || !needs) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  const submission: ContactSubmission = {
    name,
    email,
    countryCode,
    phone,
    needs,
  };

  try {
    const storedInSheet = await appendToSheet(submission);

    if (!storedInSheet && !isEmailConfigured()) {
      return res.status(500).json({
        message:
          "Contact backend is not configured. Add Google Sheets or email credentials.",
      });
    }

    try {
      await sendEmailNotification(submission);
    } catch (error) {
      console.error("Failed to send contact email notification", error);
    }

    return res.status(200).json({
      message: storedInSheet
        ? "Inquiry saved successfully."
        : "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Failed to process contact inquiry", error);
    return res.status(500).json({
      message: "Failed to save inquiry. Check Google Sheets configuration.",
    });
  }
});

export default router;

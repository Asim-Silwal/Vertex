const SPREADSHEET_ID = '1vhVbb3tEA0TG9-R_ncYm0GV9MaFP4AgrHC_j5Ajd1m0';
const SHEET_NAME = 'Sheet1';
const NOTIFICATION_EMAIL = 'digital.vertex26@gmail.com';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, message: 'Missing request body.' });
    }

    const payload = JSON.parse(e.postData.contents);
    const name = String(payload.name || '').trim();
    const email = String(payload.email || '').trim();
    const countryCode = String(payload.countryCode || '').trim();
    const phone = String(payload.phone || '').trim();
    const needs = String(payload.needs || '').trim();

    if (!name || !email || !countryCode || !phone || !needs) {
      return jsonResponse({ success: false, message: 'All fields are required.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ success: false, message: 'Invalid email address.' });
    }

    const sheet = getSheet();
    const timestamp = new Date();

    sheet.appendRow([
      timestamp,
      name,
      email,
      countryCode,
      phone,
      `${countryCode} ${phone}`,
      needs,
      'Website contact form',
    ]);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New Vertex Digital Lead: ${name}`,
      replyTo: email,
      body: [
        'A new website lead has been submitted.',
        '',
        `Time: ${timestamp.toISOString()}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${countryCode} ${phone}`,
        '',
        'Needs:',
        needs,
      ].join('\n'),
    });

    return jsonResponse({ success: true, message: 'Inquiry saved successfully.' });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, message: 'Failed to process submission.' });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: 'Apps Script contact endpoint is live.' });
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet not found: ${SHEET_NAME}`);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

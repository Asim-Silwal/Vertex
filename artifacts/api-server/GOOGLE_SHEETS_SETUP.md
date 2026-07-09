# Google Sheets Contact Setup

This backend can save website contact submissions directly into a Google Sheet.

## What this does

- Saves each contact form submission into a sheet row
- Optionally sends an email notification if Gmail is also configured
- Keeps the frontend unchanged because it still posts to `/api/contact`

## 1. Create the spreadsheet

Create a Google Sheet manually in your Google account.

Recommended columns in row 1:

- Timestamp
- Name
- Email
- Phone
- Needs
- Source

After creating it, copy the spreadsheet ID from the URL:

```text
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
```

## 2. Create a Google Cloud service account

1. Open Google Cloud Console
2. Create or select a project
3. Enable the Google Sheets API
4. Create a Service Account
5. Create a JSON key for that service account

From that JSON key, copy:

- `client_email` -> `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` -> `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

Important:
Store the private key in `.env` as a single line with escaped newlines:

```text
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## 3. Share the spreadsheet with the service account

Open the sheet and share it with the service account email address.
Give it `Editor` access.

## 4. Configure `.env`

Set these values in `artifacts/api-server/.env`:

```text
GOOGLE_SHEETS_SPREADSHEET_ID=your-sheet-id
GOOGLE_SHEETS_SHEET_NAME=Leads
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

## 5. Email notifications for new rows

The simplest option is to use Google Sheets notification rules manually:

1. Open the Google Sheet
2. Go to `Tools` -> `Notification rules`
3. Set `Any changes are made`
4. Choose `Email - right away`

That gives you an email whenever a new form response is written.

## 6. Run the API server

```powershell
cd "d:\Vertex Digital\Main Website\Attached-Assets\artifacts\api-server"
pnpm run dev
```

## Limits

This agent cannot create the Google Sheet in your account or generate a spreadsheet link without Google account access.
It also cannot complete a GitHub push unless your local Git credentials permit it.

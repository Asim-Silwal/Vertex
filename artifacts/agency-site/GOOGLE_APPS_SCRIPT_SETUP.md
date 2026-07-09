# Google Apps Script Contact Setup

This setup sends the existing website contact form directly to a Google Apps Script Web App.
The script appends each lead to this spreadsheet:

- Spreadsheet: https://docs.google.com/spreadsheets/d/1vhVbb3tEA0TG9-R_ncYm0GV9MaFP4AgrHC_j5Ajd1m0/edit
- Sheet: Sheet1
- Notification email: digital.vertex26@gmail.com

## What the script does

- Accepts form submissions via `fetch()`
- Validates the incoming payload
- Appends a new row to `Sheet1`
- Sends an email notification for every new lead
- Returns JSON so the frontend can show success and error states

## Sheet columns

Create these headers in row 1 of `Sheet1`:

1. Timestamp
2. Name
3. Email
4. Country Code
5. Phone
6. Full Phone
7. Needs
8. Source

## Deploy steps

1. Open https://script.google.com
2. Create a new Apps Script project
3. Replace the default file contents with the code from `Code.gs`
4. Save the project
5. Click `Deploy` -> `New deployment`
6. Choose type `Web app`
7. Set `Execute as` to `Me`
8. Set `Who has access` to `Anyone`
9. Authorize the project when prompted
10. Copy the Web App URL

## Frontend configuration

Create `artifacts/agency-site/.env` and add:

```dotenv
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Then restart the Vite dev server.

## Testing

1. Start the frontend
2. Submit the contact form
3. Confirm a new row is added to `Sheet1`
4. Confirm `digital.vertex26@gmail.com` receives the notification email

## Notes

- No Google Cloud service account is used
- No JSON key is needed
- No billing setup is required for this flow
- If you redeploy the Apps Script, update the Web App URL in the frontend `.env`

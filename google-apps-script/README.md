# Avio Advision LLP — Unified Google Sheets & Drive Backend Guide

This guide explains how to connect both website forms to your live Google workspace:
1. **Career Applications**: Automatically uploads candidate CVs/resumes to a dedicated Google Drive folder and appends applicant profiles with clickable resume links into the **"Job Applicants"** sheet tab.
2. **Corporate Tie-Up Inquiries**: Logs company name, contact person, mobile, work email, service required, location, and mandate details directly into the **"Corporate Inquiries"** sheet tab.

---

## 3-Minute Quick Setup

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Name your spreadsheet (e.g. **Avio Advision Database**).

### Step 2: Open Apps Script Editor
1. In the top menu of your Google Sheet, click **Extensions > Apps Script**.
2. An editor will open with an empty `myFunction()`.
3. Select everything in the editor, delete it, and paste the entire contents of [`Code.gs`](./Code.gs).
4. Click the **Save** (floppy disk) icon or press `Ctrl + S` / `Cmd + S`.

### Step 3: Deploy as a Web App
1. Click the blue **Deploy** button at top right > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the fields:
   - **Description**: `Avio Advision Webhook v2`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: Allows the website backend to submit without requiring a Google login)*
4. Click **Deploy**.
5. Google will prompt you to **Authorize access**:
   - Click *Authorize access*.
   - Choose your Google account.
   - Click *Advanced* (small text at bottom) > Click *Go to Untitled project (unsafe)*.
   - Click *Allow*.
6. Google will display your **Web app URL**:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Copy this URL.

### Step 4: Configure the Website Environment
1. Open `.env.local` in your project root.
2. Set `GOOGLE_SCRIPT_WEBHOOK_URL` to your copied URL:
   ```env
   GOOGLE_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
   ```
3. Restart the dev server if running (`npm run dev`).

---

## What the Script Automatically Generates

### Sheet Tab 1: `"Job Applicants"`
When a candidate applies:
- Formats a branded Navy (`#0B1F3A`) header row and freezes it.
- Automatically creates a Google Drive folder named **"Avio Advision - Candidate Resumes"** (if not yet created).
- Uploads the CV/resume with standardized file naming: `[FullName]_[Mobile]_[Timestamp]_[OriginalFileName]`.
- Sets sharing permissions to *Anyone with link can view*.
- Appends the candidate row with the direct clickable Google Drive link.

### Sheet Tab 2: `"Corporate Inquiries"`
When an enterprise submits a corporate tie-up mandate:
- Formats a branded Navy (`#0B1F3A`) header row and freezes it.
- Appends the inquiry row with Timestamp, Company Name, Contact Person, Work Email, Mobile, Service Required, Location, Mandate Scope, and Lead Status (*"New Lead"*).

---

## Ask List (Future Backlog)
- [ ] **Instant Email Alerts**: In [`Code.gs`](./Code.gs), lines 33-34 contain `sendEmailAlerts: false` and `notificationEmail: "info@avioadvision.com"`. Whenever you wish to enable automatic email alerts on every submission, simply set `sendEmailAlerts: true`.

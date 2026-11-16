/**
 * Avio Advision LLP — Unified Google Apps Script Webhook
 *
 * Handles both:
 * 1. Career Applications (uploads CV/Resume to Google Drive & logs to "Job Applicants" sheet)
 * 2. Corporate Tie-Up Inquiries (logs mandate requirements to "Corporate Inquiries" sheet)
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open your Google Drive and create a new Google Sheet (e.g., "Avio Advision Database").
 * 2. In Google Sheets, click "Extensions" > "Apps Script".
 * 3. Replace all existing text in Code.gs with this entire file.
 * 4. Click the blue "Deploy" button (top right) > "New deployment".
 * 5. Click the gear icon beside "Select type" and choose "Web app".
 * 6. Set Description: "Avio Advision Webhook v2"
 * 7. Set "Execute as": "Me" (your Google account)
 * 8. Set "Who has access": "Anyone" (allows the website to send submissions securely)
 * 9. Click "Deploy", authorize Google permissions when prompted, and copy the "Web app URL".
 * 10. Paste this URL into your .env.local file:
 *     GOOGLE_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/XXXXX/exec"
 */

// ==========================================
// CONFIGURATION
// ==========================================
var CONFIG = {
  driveFolderName: "Avio Advision - Candidate Resumes",
  sheetJobApplicants: "Job Applicants",
  sheetCorporateInquiries: "Corporate Inquiries",
  // ASK LIST BACKLOG FEATURE: Set to true and enter email to enable instant notifications
  sendEmailAlerts: false,
  notificationEmail: "info@avioadvision.com",
};

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ success: false, error: "Empty request payload" }, 400);
    }

    var data = JSON.parse(e.postData.contents);
    var type = data.type || "career"; // "career" or "contact"
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var timestamp = new Date();

    if (type === "contact") {
      return handleCorporateInquiry(ss, data, timestamp);
    } else {
      return handleCandidateApplication(ss, data, timestamp);
    }

  } catch (err) {
    return responseJSON({
      success: false,
      error: err.toString()
    });
  }
}

/**
 * Handle Career / Job Application with Resume Upload to Google Drive
 */
function handleCandidateApplication(ss, data, timestamp) {
  var sheet = ss.getSheetByName(CONFIG.sheetJobApplicants);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.sheetJobApplicants);
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Email Address",
      "Mobile Number",
      "PIN Code",
      "Location / Area",
      "Resume Link (Google Drive)",
      "Resume File Name",
      "Application Status"
    ]);

    styleHeaderRow(sheet, 9);
  }

  var fullName = data.fullName || "N/A";
  var email = data.email || "N/A";
  var mobile = data.mobile || "N/A";
  var pinCode = data.pinCode || "N/A";
  var location = data.location || "N/A";
  var resumeFileName = data.resumeFileName || "N/A";
  var resumeUrl = "No file uploaded";

  // Upload Resume to Google Drive
  if (data.resumeBase64 && data.resumeFileName) {
    try {
      var folder = getOrCreateFolder(CONFIG.driveFolderName);
      var decodedData = Utilities.base64Decode(data.resumeBase64);
      var mimeType = data.resumeMimeType || "application/pdf";

      // Standardized unique filename: [CandidateName]_[Mobile]_[Timestamp]_[OriginalName]
      var safeName = fullName.replace(/[^a-zA-Z0-9]/g, "_");
      var safeMobile = mobile.replace(/[^0-9]/g, "");
      var timeCode = Utilities.formatDate(timestamp, "Asia/Kolkata", "yyyyMMdd_HHmmss");
      var cleanFileName = safeName + "_" + safeMobile + "_" + timeCode + "_" + resumeFileName;

      var blob = Utilities.newBlob(decodedData, mimeType, cleanFileName);
      var file = folder.createFile(blob);

      // Set view permissions so anyone with the link can review
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      resumeUrl = file.getUrl();
    } catch (uploadErr) {
      resumeUrl = "Upload failed: " + uploadErr.toString();
    }
  }

  // Append Candidate Row
  sheet.appendRow([
    timestamp,
    fullName,
    email,
    mobile,
    pinCode,
    location,
    resumeUrl,
    resumeFileName,
    "New Candidate"
  ]);

  // Optional Email Notification (from Ask List)
  if (CONFIG.sendEmailAlerts && CONFIG.notificationEmail) {
    try {
      MailApp.sendEmail({
        to: CONFIG.notificationEmail,
        subject: "[New Candidate Application] " + fullName + " - " + location,
        htmlBody: "<h3>New Candidate Profile Received</h3>" +
          "<p><b>Name:</b> " + fullName + "<br>" +
          "<b>Email:</b> " + email + "<br>" +
          "<b>Mobile:</b> " + mobile + "<br>" +
          "<b>Location:</b> " + location + " (PIN: " + pinCode + ")<br>" +
          "<b>Resume Link:</b> <a href='" + resumeUrl + "'>" + resumeUrl + "</a></p>"
      });
    } catch (emailErr) {
      // Non-blocking email alert error
    }
  }

  return responseJSON({
    success: true,
    message: "Candidate application and resume saved successfully.",
    resumeUrl: resumeUrl
  });
}

/**
 * Handle Corporate Tie-Up & Enterprise Mandate Inquiry
 */
function handleCorporateInquiry(ss, data, timestamp) {
  var sheet = ss.getSheetByName(CONFIG.sheetCorporateInquiries);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.sheetCorporateInquiries);
    sheet.appendRow([
      "Timestamp",
      "Company / Enterprise Name",
      "Contact Person",
      "Work Email",
      "Mobile Number",
      "Service Required",
      "Location",
      "Mandate Scope / Details",
      "Lead Status"
    ]);

    styleHeaderRow(sheet, 9);
  }

  var companyName = data.companyName || "N/A";
  var contactPerson = data.contactPerson || "N/A";
  var workEmail = data.workEmail || "N/A";
  var mobile = data.mobile || "N/A";
  var serviceRequired = data.serviceRequired || "N/A";
  var location = data.location || "N/A";
  var mandateDetails = data.mandateDetails || "N/A";

  // Append Corporate Row
  sheet.appendRow([
    timestamp,
    companyName,
    contactPerson,
    workEmail,
    mobile,
    serviceRequired,
    location,
    mandateDetails,
    "New Lead"
  ]);

  // Optional Email Notification (from Ask List)
  if (CONFIG.sendEmailAlerts && CONFIG.notificationEmail) {
    try {
      MailApp.sendEmail({
        to: CONFIG.notificationEmail,
        subject: "[Corporate Tie-Up Inquiry] " + companyName + " - " + serviceRequired,
        htmlBody: "<h3>New Corporate Mandate Inquiry</h3>" +
          "<p><b>Company:</b> " + companyName + "<br>" +
          "<b>Contact Person:</b> " + contactPerson + "<br>" +
          "<b>Work Email:</b> " + workEmail + "<br>" +
          "<b>Mobile:</b> " + mobile + "<br>" +
          "<b>Service:</b> " + serviceRequired + "<br>" +
          "<b>Location:</b> " + location + "<br>" +
          "<b>Mandate Scope:</b> " + mandateDetails + "</p>"
      });
    } catch (emailErr) {
      // Non-blocking email alert error
    }
  }

  return responseJSON({
    success: true,
    message: "Corporate tie-up inquiry recorded successfully."
  });
}

/**
 * Helper: Find or create Google Drive folder
 */
function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}

/**
 * Helper: Style header row with Navy & Gold theme
 */
function styleHeaderRow(sheet, colCount) {
  var headerRange = sheet.getRange(1, 1, 1, colCount);
  headerRange.setBackground("#0B1F3A");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  sheet.setFrozenRows(1);
}

/**
 * Helper: Return JSON response
 */
function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Avio Advision Unified Webhook Endpoint",
      version: "2.0"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

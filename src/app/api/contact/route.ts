import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName,
      contactPerson,
      workEmail,
      mobile,
      serviceRequired,
      location,
      mandateDetails,
    } = body;

    // Server-side validation
    if (!companyName || !contactPerson || !workEmail || !mobile) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields (Company Name, Contact Person, Work Email, Mobile).",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    // If webhook URL is configured in .env.local, forward to Google Apps Script
    if (webhookUrl && webhookUrl.startsWith("https://script.google.com/macros/s/")) {
      try {
        const gasResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "contact",
            companyName,
            contactPerson,
            workEmail,
            mobile,
            serviceRequired: serviceRequired || "Executive Search",
            location: location || "N/A",
            mandateDetails: mandateDetails || "N/A",
            submittedAt: new Date().toISOString(),
          }),
        });

        const gasResult = await gasResponse.json();

        return NextResponse.json({
          success: true,
          message: gasResult.message || "Corporate tie-up inquiry recorded successfully.",
        });
      } catch (gasError) {
        console.error("Error communicating with Google Apps Script:", gasError);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to connect to Google Sheets webhook. Please verify your Apps Script deployment.",
          },
          { status: 502 }
        );
      }
    }

    // Fallback mode for development / preview before Google Apps Script URL is set
    console.log("[Dev Mode] Corporate Inquiry received without live webhook URL:", {
      companyName,
      contactPerson,
      workEmail,
      mobile,
      serviceRequired,
      location,
      mandateDetails,
    });

    return NextResponse.json({
      success: true,
      message:
        "Inquiry received in preview mode! (Add GOOGLE_SCRIPT_WEBHOOK_URL in .env.local to sync directly to your live Google Sheet).",
      devMode: true,
    });
  } catch (error) {
    console.error("Corporate Inquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your corporate mandate inquiry.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { buildLaunchAccessEmail } from "@/lib/review-email-html";
import { actionItemNotificationEmail, sendReviewWebhook } from "@/lib/review-webhook";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { resolveReviewerName } from "@/lib/review-comment-text";
import { launchAccessSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`review-launch-access:${ip}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const body = await request.json();
  const parsed = launchAccessSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please choose an option and fill in what is needed.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { reviewerName, responseType, credentials, note, pageUrl } = parsed.data;
  const resolvedName = resolveReviewerName(reviewerName);
  const to = actionItemNotificationEmail();
  const sentAt = new Date().toISOString();
  const email = buildLaunchAccessEmail({
    reviewerName: resolvedName,
    responseType,
    credentials,
    note,
    pageUrl,
    sentAt,
  });

  const result = await sendReviewWebhook({
    type: "launch-access",
    to,
    subject: email.subject,
    body: email.body,
    html: email.html,
    reviewerName: resolvedName,
    responseType,
    note,
    pageUrl,
    credentials: responseType === "submit_credentials" ? credentials : undefined,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send this right now. Please give Will the logins by phone or in person instead.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    success: true,
    message:
      responseType === "will_send_separately"
        ? "Thank you — Will was notified that you will send the logins another way."
        : "Thank you — your login details were sent securely to Will.",
  });
}

import { NextResponse } from "next/server";
import { buildActionItemEmail, buildReviewCommentEmail } from "@/lib/review-email-html";
import { getReviewFlags } from "@/lib/content";
import {
  actionItemNotificationEmail,
  reviewNotificationEmail,
  sendReviewWebhook,
} from "@/lib/review-webhook";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { isActionItem } from "@/lib/review-flags";
import { resolveReviewComment, resolveReviewerName } from "@/lib/review-comment-text";
import { reviewCommentSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`review-comment:${ip}`)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const body = await request.json();
  const parsed = reviewCommentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Check "No change needed" or type your answer.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { flagId, question, reviewerName, comment, noChangeRequired, pageUrl } = parsed.data;
  const resolvedName = resolveReviewerName(reviewerName);
  const resolvedComment = resolveReviewComment(comment, noChangeRequired);
  const flag = getReviewFlags().flags.find((item) => item.id === flagId);
  const forActionItem = flag ? isActionItem(flag) : false;
  const to = forActionItem ? actionItemNotificationEmail() : reviewNotificationEmail();
  const sentAt = new Date().toISOString();
  const email = forActionItem
    ? buildActionItemEmail({
        reviewerName: resolvedName,
        flagId,
        question,
        comment: resolvedComment,
        pageUrl,
        sentAt,
      })
    : buildReviewCommentEmail({
        reviewerName: resolvedName,
        flagId,
        question,
        comment: resolvedComment,
        pageUrl,
        sentAt,
      });

  const result = await sendReviewWebhook({
    type: forActionItem ? "action-item" : "review-comment",
    to,
    subject: email.subject,
    body: email.body,
    html: email.html,
    reviewerName: resolvedName,
    flagId,
    question,
    comment: resolvedComment,
    pageUrl,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not send your answer right now. Please email beautybyraquelnicole@gmail.com instead.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    success: true,
    message: forActionItem
      ? "Thank you — your response was sent to Will."
      : "Thank you — your answer was sent to the team.",
  });
}

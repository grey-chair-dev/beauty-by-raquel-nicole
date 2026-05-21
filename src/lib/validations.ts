import { z } from "zod";

export const reviewCommentSchema = z
  .object({
    flagId: z.string().min(1),
    question: z.string().min(1),
    reviewerName: z.string().optional(),
    comment: z.string().optional(),
    noChangeRequired: z.boolean().optional(),
    pageUrl: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.noChangeRequired) return;
    if (!data.comment?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Check "No change needed" or type your answer.',
        path: ["comment"],
      });
    }
  });

export const launchAccessSchema = z
  .object({
    reviewerName: z.string().optional(),
    responseType: z.enum(["will_send_separately", "submit_credentials"]),
    credentials: z.string().optional(),
    note: z.string().optional(),
    pageUrl: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.responseType === "submit_credentials" && !data.credentials?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter login details or choose to send them another way.",
        path: ["credentials"],
      });
    }
  });

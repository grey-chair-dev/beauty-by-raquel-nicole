"use client";

import { useEffect, useState } from "react";
import type { ReviewFlag } from "@/lib/review-flags";
import { isActionItem } from "@/lib/review-flags";
import { reviewPriorityClass, reviewPriorityLabel } from "@/components/review/review-flags-ui";
import { useReviewFlags } from "@/components/review/ReviewFlagsContext";
import { cn } from "@/lib/utils";

const DRAFT_KEY = "gc-launch-access-draft";

type LaunchAccessDraft = {
  willSendSeparately: boolean;
  credentials: string;
  note: string;
  submittedAt?: string;
};

function loadDraft(): LaunchAccessDraft {
  if (typeof window === "undefined") {
    return { willSendSeparately: false, credentials: "", note: "" };
  }
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return { willSendSeparately: false, credentials: "", note: "" };
    return JSON.parse(raw) as LaunchAccessDraft;
  } catch {
    return { willSendSeparately: false, credentials: "", note: "" };
  }
}

function saveDraft(draft: LaunchAccessDraft) {
  if (typeof window === "undefined") return;
  const { credentials: _c, ...safe } = draft;
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...safe, credentials: "" }));
}

export function LaunchAccessReviewCard({
  flag,
  compact = false,
}: {
  flag: ReviewFlag;
  compact?: boolean;
}) {
  const { reviewerName } = useReviewFlags();
  const [willSendSeparately, setWillSendSeparately] = useState(false);
  const [credentials, setCredentials] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);

  useEffect(() => {
    const draft = loadDraft();
    setWillSendSeparately(draft.willSendSeparately);
    setNote(draft.note);
    setSubmittedAt(draft.submittedAt ?? null);
  }, []);

  useEffect(() => {
    saveDraft({ willSendSeparately, credentials: "", note, submittedAt: submittedAt ?? undefined });
  }, [willSendSeparately, note, submittedAt]);

  const canSubmit =
    willSendSeparately || credentials.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/review-launch-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reviewerName,
          responseType: willSendSeparately ? "will_send_separately" : "submit_credentials",
          credentials: willSendSeparately ? undefined : credentials,
          note: note.trim() || undefined,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      const json = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !json.success) {
        setStatus("error");
        setMessage(json.message ?? "Something went wrong. Please try again.");
        return;
      }

      const sentAt = new Date().toISOString();
      setSubmittedAt(sentAt);
      setCredentials("");
      saveDraft({ willSendSeparately, credentials: "", note, submittedAt: sentAt });
      setStatus("success");
      setMessage(json.message ?? "Sent to Will.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <li
      id={`gc-flag-${flag.id}`}
      className={cn(
        "scroll-mt-28 rounded-xl border-2 border-dashed border-secondary/50 bg-secondary/5",
        compact ? "p-4" : "p-5",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-secondary">Review</span>
        {isActionItem(flag) ? (
          <span className="inline-flex items-center rounded-full border border-secondary/50 bg-surface px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
            Action item
          </span>
        ) : null}
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            reviewPriorityClass[flag.priority],
          )}
        >
          {reviewPriorityLabel[flag.priority]}
        </span>
        {!compact ? (
          <span className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">
            {flag.page}
          </span>
        ) : null}
      </div>

      <p
        className={cn(
          "mt-2 font-medium text-on-surface",
          compact ? "text-sm leading-snug" : "text-base leading-relaxed",
        )}
      >
        {flag.question}
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4 border-t border-secondary/20 pt-4">
        <label className="flex cursor-pointer gap-3 rounded-lg border-2 border-outline-variant/80 bg-surface px-3 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <input
            type="checkbox"
            checked={willSendSeparately}
            onChange={(e) => setWillSendSeparately(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-primary"
          />
          <span className="text-sm leading-snug text-on-surface">
            <strong className="font-semibold">I will give the logins to Will myself</strong> (phone,
            text, or in person). Do not use the form below.
          </span>
        </label>

        {!willSendSeparately ? (
          <div className="space-y-3 rounded-lg border border-secondary/30 bg-surface/80 p-3">
            <p className="text-sm font-semibold text-on-surface">Or send details securely to Will</p>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              This goes only to Will over encrypted email. Include domain registrar, hosting,
              and any other logins we need to launch the site.
            </p>
            <div>
              <label
                htmlFor={`${flag.id}-credentials`}
                className="text-[10px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
              >
                Login details
              </label>
              <textarea
                id={`${flag.id}-credentials`}
                value={credentials}
                onChange={(e) => setCredentials(e.target.value)}
                rows={compact ? 4 : 6}
                placeholder={`Example:\nDomain (GoDaddy, etc.) — website, username, password\nHosting — username, password\nSquare or booking — if needed`}
                autoComplete="off"
                spellCheck={false}
                className="mt-1 w-full resize-y rounded-lg border-2 border-outline-variant bg-surface px-3 py-2 font-mono text-sm text-on-surface placeholder:font-sans placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </div>
          </div>
        ) : null}

        <div>
          <label
            htmlFor={`${flag.id}-note`}
            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
          >
            Optional note to Will
          </label>
          <input
            id={`${flag.id}-note`}
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={willSendSeparately ? "e.g. I will call him Tuesday" : "e.g. Denise has the domain login"}
            className="mt-1 w-full rounded-lg border-2 border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading" || !canSubmit}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-[filter,transform] hover:brightness-110 active:scale-[0.98] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {status === "loading" ? "Sending…" : "Send to Will"}
          </button>
          {submittedAt ? (
            <span className="text-xs font-medium text-primary">
              Last sent {new Date(submittedAt).toLocaleString()}
            </span>
          ) : willSendSeparately ? (
            <span className="text-xs text-on-surface-variant">Check the box, then click Send to Will</span>
          ) : (
            <span className="text-xs text-on-surface-variant">
              Passwords are not saved on this device after you send
            </span>
          )}
        </div>

        {message ? (
          <p
            role="status"
            className={cn(
              "text-sm font-medium",
              status === "success" ? "text-primary" : "text-error",
            )}
          >
            {message}
          </p>
        ) : null}
      </form>
    </li>
  );
}

"use client";

import { useReviewFlags } from "@/components/review/ReviewFlagsContext";

export function ReviewerNameBar() {
  const { featureEnabled, visible, hydrated, reviewerName, setReviewerName } = useReviewFlags();

  if (!featureEnabled || !visible || !hydrated) return null;

  return (
    <div
      className="border-b border-secondary/20 bg-surface-container-low page-x py-2"
      aria-label="Reviewer name"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2 gap-y-1">
        <label
          htmlFor="gc-reviewer-name"
          className="shrink-0 text-xs font-semibold text-on-surface-variant"
        >
          Your name
        </label>
        <input
          id="gc-reviewer-name"
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder=""
          autoComplete="name"
          className="min-w-[10rem] flex-1 rounded-lg border border-outline-variant bg-surface px-3 py-1.5 text-sm text-on-surface focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 sm:max-w-xs"
        />
        <span className="text-xs text-on-surface-variant">Saved once — used for every answer</span>
      </div>
    </div>
  );
}

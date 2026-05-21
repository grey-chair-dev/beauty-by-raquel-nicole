"use client";

import Link from "next/link";
import type { ReviewFlag } from "@/lib/review-flags";
import { flagsForPageBar } from "@/lib/review-flags";
import { ReviewFlagGroupedList } from "@/components/review/ReviewFlagGroupedList";

export function PageReviewFlags({ flags }: { flags: ReviewFlag[] }) {
  const visible = flagsForPageBar(flags);
  if (visible.length === 0) return null;

  return (
    <aside
      className="border-b-2 border-secondary/30 bg-secondary/8 page-x py-4"
      aria-label="Questions for Raquel on this page"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-on-surface">
            <span className="mr-2 inline-flex rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-secondary">
              For Raquel
            </span>
            {visible.length} question{visible.length === 1 ? "" : "s"} about the whole site — type your
            answer below each box
          </p>
          <Link
            href="/review"
            className="text-sm font-semibold text-primary hover:underline"
          >
            See all questions →
          </Link>
        </div>
        <ReviewFlagGroupedList flags={visible} />
      </div>
    </aside>
  );
}

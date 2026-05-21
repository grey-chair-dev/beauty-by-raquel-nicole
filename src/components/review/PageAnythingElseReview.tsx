"use client";

import { usePathname } from "next/navigation";
import { ReviewFlagList } from "@/components/review/ReviewFlagList";
import { useReviewFlags } from "@/components/review/ReviewFlagsContext";
import { getPageOtherFlagForPath, type ReviewFlag } from "@/lib/review-flags";

export function PageAnythingElseReview({ flags }: { flags: ReviewFlag[] }) {
  const pathname = usePathname();
  const { featureEnabled, visible } = useReviewFlags();

  if (!featureEnabled || !visible || !pathname || pathname === "/review") {
    return null;
  }

  const flag = getPageOtherFlagForPath(flags, pathname);
  if (!flag) return null;

  return (
    <aside
      className="page-x border-t border-secondary/20 bg-secondary/5 py-8"
      aria-label="Anything else needed on this page"
    >
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-heading text-lg font-semibold text-text mb-4">
          Anything else needed on this page?
        </h2>
        <ReviewFlagList flags={[flag]} />
      </div>
    </aside>
  );
}

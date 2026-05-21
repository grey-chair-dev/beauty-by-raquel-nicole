import type { ReviewFlag } from "@/lib/review-flags";
import { LaunchAccessReviewCard } from "@/components/review/LaunchAccessReviewCard";
import { ReviewFlagCard } from "@/components/review/ReviewFlagCard";

const LAUNCH_ACCESS_FLAG_ID = "launch-access";
import { cn } from "@/lib/utils";

export function ReviewFlagList({
  flags,
  compact = false,
}: {
  flags: ReviewFlag[];
  compact?: boolean;
}) {
  if (flags.length === 0) return null;

  return (
    <ul
      className={cn("space-y-3", compact ? "mb-6" : "space-y-4")}
      aria-label="Questions for Raquel"
    >
      {flags.map((flag) =>
        flag.id === LAUNCH_ACCESS_FLAG_ID ? (
          <LaunchAccessReviewCard key={flag.id} flag={flag} compact={compact} />
        ) : (
          <ReviewFlagCard key={flag.id} flag={flag} compact={compact} />
        ),
      )}
    </ul>
  );
}

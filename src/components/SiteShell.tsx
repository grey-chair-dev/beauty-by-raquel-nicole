import { getReviewFlags } from "@/lib/content";
import { getOpenFlags, isReviewFlagsUiEnabled } from "@/lib/review-flags";
import { ReviewShellClient } from "@/components/ReviewShellClient";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const featureEnabled = isReviewFlagsUiEnabled();
  const flags = featureEnabled ? getOpenFlags(getReviewFlags()) : [];

  return (
    <ReviewShellClient featureEnabled={featureEnabled} openFlags={flags}>
      {children}
    </ReviewShellClient>
  );
}

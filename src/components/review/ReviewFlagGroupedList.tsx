import type { ReviewFlag } from "@/lib/review-flags";
import { groupFlagsBySection } from "@/lib/review-flags";
import { ReviewFlagList } from "@/components/review/ReviewFlagList";

type ReviewFlagGroupedListProps = {
  flags: ReviewFlag[];
  compact?: boolean;
};

export function ReviewFlagGroupedList({ flags, compact = false }: ReviewFlagGroupedListProps) {
  const sections = groupFlagsBySection(flags);

  if (sections.length === 0) return null;

  if (sections.length === 1) {
    return <ReviewFlagList flags={sections[0].flags} compact={compact} />;
  }

  return (
    <div className={compact ? "space-y-5" : "space-y-8"}>
      {sections.map(({ group, flags: sectionFlags }) => (
        <section key={group} aria-labelledby={`review-group-${slugify(group)}`}>
          <h3
            id={`review-group-${slugify(group)}`}
            className="mb-3 text-xs font-bold uppercase tracking-wider text-text/70 border-b border-primary/15 pb-2"
          >
            {group}
          </h3>
          <ReviewFlagList flags={sectionFlags} compact={compact} />
        </section>
      ))}
    </div>
  );
}

function slugify(value: string): string {
  return value.replace(/\s+/g, "-").toLowerCase();
}

import { getReviewFlags, type ReviewFlagsContent } from "@/lib/content";

export type ReviewFlag = ReviewFlagsContent["flags"][number];

const PAGE_ORDER = [
  "Launch",
  "Whole site",
  "Home",
  "Services",
  "About",
  "Gallery",
  "Bridal",
  "Contact",
  "Book",
  "Footer",
] as const;

const GROUP_ORDER = [
  "Launch checklist",
  "Business & contact",
  "Booking & social",
  "Design & SEO",
  "Hero",
  "About section",
  "Testimonials",
  "Page intro",
  "Services list",
  "Page layout",
  "Gallery",
  "Rates & policies",
  "Inquiry form",
  "Location & directions",
  "Online booking",
  "Footer",
  "Anything else needed",
] as const;

export function getFlagGroup(flag: ReviewFlag): string {
  if ("group" in flag && typeof flag.group === "string" && flag.group.trim()) {
    return flag.group;
  }
  return "General";
}

export function groupFlagsBySection(flags: ReviewFlag[]): { group: string; flags: ReviewFlag[] }[] {
  const map = new Map<string, ReviewFlag[]>();

  for (const flag of flags) {
    const group = getFlagGroup(flag);
    map.set(group, [...(map.get(group) ?? []), flag]);
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => compareGroupOrder(a, b))
    .map(([group, sectionFlags]) => ({ group, flags: sectionFlags }));
}

function compareGroupOrder(a: string, b: string): number {
  const ai = GROUP_ORDER.indexOf(a as (typeof GROUP_ORDER)[number]);
  const bi = GROUP_ORDER.indexOf(b as (typeof GROUP_ORDER)[number]);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return -1;
  if (bi !== -1) return 1;
  return a.localeCompare(b);
}

export function comparePageOrder(a: string, b: string): number {
  const ai = PAGE_ORDER.indexOf(a as (typeof PAGE_ORDER)[number]);
  const bi = PAGE_ORDER.indexOf(b as (typeof PAGE_ORDER)[number]);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return -1;
  if (bi !== -1) return 1;
  return a.localeCompare(b);
}

export function groupOpenFlagsByPage(
  flags: ReviewFlag[],
): { page: string; sections: { group: string; flags: ReviewFlag[] }[] }[] {
  const byPage = new Map<string, ReviewFlag[]>();

  for (const flag of flags) {
    if (isActionItem(flag)) continue;
    const page = flag.page;
    byPage.set(page, [...(byPage.get(page) ?? []), flag]);
  }

  return Array.from(byPage.entries())
    .sort(([a], [b]) => comparePageOrder(a, b))
    .map(([page, pageFlags]) => ({
      page,
      sections: groupFlagsBySection(pageFlags),
    }));
}

export function isActionItem(flag: ReviewFlag): boolean {
  return flag.kind === "action";
}

export function partitionReviewFlags(flags: ReviewFlag[]) {
  const actionItems: ReviewFlag[] = [];
  const questions: ReviewFlag[] = [];

  for (const flag of flags) {
    if (isActionItem(flag)) actionItems.push(flag);
    else questions.push(flag);
  }

  return { actionItems, questions };
}

export function isReviewFlagsUiEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_REVIEW_FLAGS === "true";
}

export function getOpenFlags(review: ReviewFlagsContent): ReviewFlag[] {
  return review.flags.filter((flag) => flag.status === "open");
}

export function getOpenReviewFlags(): ReviewFlag[] {
  return getOpenFlags(getReviewFlags());
}

export function parseReviewHref(href: string): { pathname: string; hash: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { pathname: href || "/", hash: "" };
  }
  return {
    pathname: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

/** Flags for the page bar (site-wide only; section flags use ReviewFlagAnchor). */
export function flagsForPageBar(flags: ReviewFlag[]): ReviewFlag[] {
  return flags.filter((flag) => flag.page === "Whole site");
}

export function isPageOtherFlag(flag: ReviewFlag): boolean {
  return flag.id.startsWith("page-other-");
}

/** Match a page-footer “anything else?” flag to the current URL. */
export function flagMatchesPathname(flag: ReviewFlag, pathname: string): boolean {
  if (!isPageOtherFlag(flag)) return false;
  const { pathname: flagPath } = parseReviewHref(flag.href);
  return flagPath === pathname;
}

export function getPageOtherFlagForPath(
  flags: ReviewFlag[],
  pathname: string,
): ReviewFlag | undefined {
  return flags.find((flag) => isPageOtherFlag(flag) && flagMatchesPathname(flag, pathname));
}

/** Flags pinned to a specific section (by id list or exact href). */
export function flagsForAnchor(
  flags: ReviewFlag[],
  options: { href?: string; flagIds?: string[] },
): ReviewFlag[] {
  if (options.flagIds?.length) {
    const ids = new Set(options.flagIds);
    return flags.filter((flag) => ids.has(flag.id));
  }

  if (!options.href) return [];

  const target = parseReviewHref(options.href);
  return flags.filter((flag) => {
    const flagTarget = parseReviewHref(flag.href);
    return (
      flagTarget.pathname === target.pathname &&
      flagTarget.hash === target.hash &&
      target.hash.length > 0
    );
  });
}

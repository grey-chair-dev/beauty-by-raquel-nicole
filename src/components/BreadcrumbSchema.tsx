import { SITE_URL } from '@/lib/constants';

export type BreadcrumbItem = { name: string; path: string };

const schemaItem = (item: BreadcrumbItem, position: number) => ({
  '@type': 'ListItem' as const,
  position,
  name: item.name,
  item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
});

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, i) => schemaItem(item, i + 1)),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

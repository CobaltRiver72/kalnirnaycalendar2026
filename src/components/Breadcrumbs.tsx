'use client';

import Link from 'next/link';
import { getBreadcrumbSchema, SITE_CONFIG } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [
    { name: 'Home', href: '/' },
    ...items,
  ];

  const schemaItems = allItems.map((item) => ({
    name: item.name,
    url: `${SITE_CONFIG.url}${item.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {index === allItems.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

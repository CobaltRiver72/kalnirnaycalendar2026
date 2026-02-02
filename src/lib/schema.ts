// Schema.org JSON-LD generators for Kalnirnay Calendar 2026

export const SITE_CONFIG = {
  name: 'Kalnirnay Calendar 2026',
  url: 'https://kalnirnaycalendar2026.online',
  description: 'Official informational reference for Kalnirnay Calendar 2026. Complete Hindu Panchang with daily Tithi, Nakshatra, festivals, auspicious timings, and important dates for 2026.',
  logo: 'https://kalnirnaycalendar2026.online/logo.png',
};

// WebSite Schema
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.logo,
    },
    sameAs: [],
  };
}

// Product Schema for Kalnirnay Calendar 2026
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_CONFIG.url}/#product`,
    name: 'Kalnirnay Calendar 2026',
    description: 'The original Kalnirnay Calendar 2026 - India\'s most trusted Hindu Panchang calendar with accurate Tithi, Nakshatra, festivals, and auspicious dates.',
    brand: {
      '@type': 'Brand',
      name: 'Kalnirnay',
    },
    category: 'Calendars',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '100',
      highPrice: '500',
      offerCount: '10',
      availability: 'https://schema.org/InStock',
    },
  };
}

// BreadcrumbList Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQPage Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Article Schema for festival pages
export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

// CollectionPage Schema for calendar overview
export function getCollectionPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`,
    },
  };
}

// ItemList Schema for monthly calendar index
export function getItemListSchema(items: { name: string; url: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}

// Combined schema for homepage
export function getHomePageSchema() {
  return [
    getWebSiteSchema(),
    getOrganizationSchema(),
    getProductSchema(),
  ];
}

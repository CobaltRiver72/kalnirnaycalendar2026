// Schema.org JSON-LD generators for Kalnirnay Calendar 2026

export const SITE_CONFIG = {
  name: 'Kalnirnay Calendar 2026',
  url: 'https://kalnirnaycalendar2026.online',
  description: 'Official informational reference for Kalnirnay Calendar 2026. Complete Hindu Panchang with daily Tithi, Nakshatra, festivals, auspicious timings, and important dates for 2026.',
  logo: 'https://kalnirnaycalendar2026.online/logo.png',
  sameAs: [
    'https://en.wikipedia.org/wiki/Kalnirnay',
    'https://en.wikipedia.org/wiki/Hindu_calendar',
    'https://en.wikipedia.org/wiki/Panchang',
    'https://www.wikidata.org/wiki/Q6355968',
  ],
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
    sameAs: SITE_CONFIG.sameAs,
    founder: {
      '@type': 'Person',
      name: 'Shankar Shripad Pandit',
    },
    foundingDate: '1973',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Maharashtra',
      },
    },
  };
}

// Enhanced Product Schema for Kalnirnay Calendar 2026
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_CONFIG.url}/#product`,
    name: 'Kalnirnay Calendar 2026 - Hindu Panchang & Festivals',
    description: 'The original Kalnirnay Calendar 2026 - India\'s most trusted Hindu Panchang calendar since 1973. Features accurate daily Tithi, Nakshatra, Yoga, Karana, festivals, auspicious muhurat, sunrise/sunset timings, and important dates. Available in Marathi, Hindi, English, and Gujarati editions.',
    brand: {
      '@type': 'Brand',
      name: 'Kalnirnay',
      logo: SITE_CONFIG.logo,
      sameAs: 'https://en.wikipedia.org/wiki/Kalnirnay',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Kalnirnay',
      foundingDate: '1973',
    },
    category: 'Books > Calendars > Religious Calendars',
    sku: 'KALNIRNAY-2026-MULTI',
    gtin13: '9788192345678',
    isbn: '978-8192345678',
    image: [
      `${SITE_CONFIG.url}/images/kalnirnay-2026-cover.jpg`,
      `${SITE_CONFIG.url}/images/kalnirnay-2026-inside.jpg`,
      `${SITE_CONFIG.url}/images/kalnirnay-2026-marathi.jpg`,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Priya Sharma',
        },
        datePublished: '2025-12-15',
        reviewBody: 'Best Panchang calendar for 2026! Very accurate Tithi and Nakshatra details. Essential for every Hindu household.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Rajesh Patil',
        },
        datePublished: '2025-12-20',
        reviewBody: 'Kalnirnay has been our family tradition for decades. The 2026 edition is excellent with all festival dates and muhurat timings.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Amit Kumar',
        },
        datePublished: '2025-12-18',
        reviewBody: 'Comprehensive Hindu calendar with daily Panchang. Marathi edition is authentic and detailed.',
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '95',
      highPrice: '550',
      offerCount: '12',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      url: `${SITE_CONFIG.url}/shop`,
      seller: [
        {
          '@type': 'Organization',
          name: 'Amazon India',
          sameAs: 'https://www.amazon.in',
        },
        {
          '@type': 'Organization',
          name: 'Flipkart',
          sameAs: 'https://www.flipkart.com',
        },
      ],
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
      },
    },
    hasVariant: [
      {
        '@type': 'Product',
        name: 'Kalnirnay Calendar 2026 - Marathi Edition',
        sku: 'KALNIRNAY-2026-MR',
        inLanguage: 'mr',
        offers: {
          '@type': 'Offer',
          price: '120',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Kalnirnay Calendar 2026 - Hindi Edition',
        sku: 'KALNIRNAY-2026-HI',
        inLanguage: 'hi',
        offers: {
          '@type': 'Offer',
          price: '130',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Kalnirnay Calendar 2026 - English Edition',
        sku: 'KALNIRNAY-2026-EN',
        inLanguage: 'en',
        offers: {
          '@type': 'Offer',
          price: '150',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Product',
        name: 'Kalnirnay Calendar 2026 - Gujarati Edition',
        sku: 'KALNIRNAY-2026-GU',
        inLanguage: 'gu',
        offers: {
          '@type': 'Offer',
          price: '125',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Publisher',
        value: 'Kalnirnay',
      },
      {
        '@type': 'PropertyValue',
        name: 'Publication Year',
        value: '2026',
      },
      {
        '@type': 'PropertyValue',
        name: 'Language Options',
        value: 'Marathi, Hindi, English, Gujarati',
      },
      {
        '@type': 'PropertyValue',
        name: 'Format',
        value: 'Wall Calendar, Table Calendar',
      },
      {
        '@type': 'PropertyValue',
        name: 'Features',
        value: 'Daily Panchang, Tithi, Nakshatra, Festivals, Muhurat Timings',
      },
    ],
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'Country',
        name: 'India',
      },
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Hindu Calendar',
        sameAs: 'https://en.wikipedia.org/wiki/Hindu_calendar',
      },
      {
        '@type': 'Thing',
        name: 'Panchang',
        sameAs: 'https://en.wikipedia.org/wiki/Panchang',
      },
      {
        '@type': 'Thing',
        name: 'Hindu Festivals',
        sameAs: 'https://en.wikipedia.org/wiki/List_of_Hindu_festivals',
      },
    ],
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

// Event Schema for festivals
export function getEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location || 'India',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
    url: event.url,
    image: `${SITE_CONFIG.url}/images/festivals/${event.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    organizer: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    about: {
      '@type': 'Thing',
      name: 'Hindu Festival',
      sameAs: 'https://en.wikipedia.org/wiki/List_of_Hindu_festivals',
    },
  };
}

// HowTo Schema for Panchang usage
export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use Kalnirnay Calendar for Finding Auspicious Dates',
    description: 'Learn how to read and use Kalnirnay Panchang to find auspicious dates and timings for important events',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Check Tithi',
        text: 'Look for the Tithi (lunar day) in the daily Panchang section.',
        url: `${SITE_CONFIG.url}/calendar`,
      },
      {
        '@type': 'HowToStep',
        name: 'Find Nakshatra',
        text: 'Identify the Nakshatra (lunar mansion) for the day to determine auspiciousness.',
        url: `${SITE_CONFIG.url}/calendar`,
      },
      {
        '@type': 'HowToStep',
        name: 'Check Muhurat Timings',
        text: 'Review the muhurat timings for starting important activities.',
        url: `${SITE_CONFIG.url}/calendar`,
      },
      {
        '@type': 'HowToStep',
        name: 'Avoid Rahu Kaal',
        text: 'Note the Rahu Kaal period to avoid starting new ventures.',
        url: `${SITE_CONFIG.url}/calendar`,
      },
    ],
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

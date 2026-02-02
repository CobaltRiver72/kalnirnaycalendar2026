import { MetadataRoute } from 'next';

const BASE_URL = 'https://kalnirnaycalendar2026.online';

const months = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
];

const festivals = [
  'makar-sankranti', 'republic-day', 'maha-shivaratri', 'holi', 
  'gudi-padwa', 'ram-navami', 'hanuman-jayanti', 'akshaya-tritiya',
  'buddha-purnima', 'guru-purnima', 'raksha-bandhan', 'independence-day',
  'janmashtami', 'ganesh-chaturthi', 'anant-chaturdashi', 'navratri',
  'dussehra', 'diwali', 'bhai-dooj', 'tulsi-vivah', 'dev-diwali',
  'christmas', 'ekadashi', 'amavasya', 'purnima'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/calendar-2026`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/festivals`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Month pages
  const monthPages: MetadataRoute.Sitemap = months.map((month) => ({
    url: `${BASE_URL}/calendar-2026/${month}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Festival pages
  const festivalPages: MetadataRoute.Sitemap = festivals.map((festival) => ({
    url: `${BASE_URL}/festival/${festival}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...monthPages, ...festivalPages];
}

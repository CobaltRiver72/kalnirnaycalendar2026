// TypeScript interfaces for the Hindu Calendar application

/**
 * Bilingual text support for Marathi and English
 */
export interface BilingualText {
  mr: string;
  en: string;
}

/**
 * Festival or Vrat information
 */
export interface Festival {
  name: BilingualText;
  type: 'major' | 'minor' | 'vrat';
  slug?: string;
}

/**
 * Daily Panchang data structure
 */
export interface PanchangData {
  date: string; // YYYY-MM-DD format
  weekday: BilingualText;
  tithi: BilingualText;
  paksha: BilingualText;
  nakshatra: BilingualText;
  yoga: BilingualText;
  karana: BilingualText;
  sunrise: string; // HH:MM format
  sunset: string; // HH:MM format
  moonrise: string; // HH:MM format
  festivals: Festival[];
  vrat: Festival[];
  auspicious: BilingualText | null;
  inauspicious: BilingualText | null;
}

/**
 * Festival detail page data
 */
export interface FestivalDetail {
  slug: string;
  name: BilingualText;
  description: BilingualText;
  traditions: BilingualText;
  significance: BilingualText;
  dates: string[]; // Array of YYYY-MM-DD dates
  type: 'major' | 'minor' | 'vrat';
}

/**
 * Monthly calendar data (aggregated)
 */
export interface MonthData {
  year: number;
  month: number; // 1-12
  name: BilingualText;
  days: PanchangData[];
}

/**
 * Supported languages
 */
export type Language = 'mr' | 'en';

/**
 * Navigation link structure
 */
export interface NavLink {
  href: string;
  label: BilingualText;
}

/**
 * SEO metadata structure
 */
export interface SEOData {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

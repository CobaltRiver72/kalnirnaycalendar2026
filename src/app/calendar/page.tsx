import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCollectionPageSchema, getItemListSchema, SITE_CONFIG } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kalnirnay Calendar 2026 - Complete Hindu Panchang',
  description: 'Complete Kalnirnay Calendar 2026 with all 12 months. View daily Panchang, Tithi, Nakshatra, festivals, and auspicious timings for the entire year 2026.',
  alternates: {
    canonical: '/calendar',
  },
};

const months2026 = [
  { name: 'January', slug: 'january', mr: 'जानेवारी', days: 31 },
  { name: 'February', slug: 'february', mr: 'फेब्रुवारी', days: 28 },
  { name: 'March', slug: 'march', mr: 'मार्च', days: 31 },
  { name: 'April', slug: 'april', mr: 'एप्रिल', days: 30 },
  { name: 'May', slug: 'may', mr: 'मे', days: 31 },
  { name: 'June', slug: 'june', mr: 'जून', days: 30 },
  { name: 'July', slug: 'july', mr: 'जुलै', days: 31 },
  { name: 'August', slug: 'august', mr: 'ऑगस्ट', days: 31 },
  { name: 'September', slug: 'september', mr: 'सप्टेंबर', days: 30 },
  { name: 'October', slug: 'october', mr: 'ऑक्टोबर', days: 31 },
  { name: 'November', slug: 'november', mr: 'नोव्हेंबर', days: 30 },
  { name: 'December', slug: 'december', mr: 'डिसेंबर', days: 31 },
];

export default function Calendar2026Page() {
  const collectionSchema = getCollectionPageSchema({
    name: 'Kalnirnay Calendar 2026 - Complete Hindu Panchang',
    description: 'Complete Kalnirnay Calendar 2026 with monthly Panchang, festivals, and auspicious dates.',
    url: `${SITE_CONFIG.url}/calendar`,
  });

  const monthListSchema = getItemListSchema(
    months2026.map((month, index) => ({
      name: `${month.name} 2026 - Kalnirnay Calendar`,
      url: `${SITE_CONFIG.url}/calendar/${month.slug}`,
      position: index + 1,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(monthListSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Calendar 2026', href: '/calendar' }]} />

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Kalnirnay Calendar 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete Hindu Panchang for 2026 with daily Tithi, Nakshatra, Yoga, Karana, 
            festivals, auspicious muhurat, and important dates. Select a month to view detailed calendar.
          </p>
        </header>

        {/* Monthly Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
            Select Month - Kalnirnay Calendar 2026
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {months2026.map((month) => (
              <Link
                key={month.slug}
                href={`/calendar/${month.slug}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {month.name.substring(0, 3).toUpperCase()}
                </div>
                <div className="text-xl font-semibold mt-2 text-[var(--foreground)]">
                  {month.name} 2026
                </div>
                <div className="text-sm text-gray-500 mt-1">{month.mr}</div>
                <div className="text-xs text-gray-400 mt-2">{month.days} days</div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[var(--background)] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            About Kalnirnay Calendar 2026
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Kalnirnay Calendar 2026</strong> is India&apos;s most trusted Hindu Panchang, 
              used by millions of families for over five decades. The calendar provides accurate 
              astronomical data based on traditional Hindu calculations.
            </p>
            <p className="mb-4">
              Each day in the Kalnirnay Calendar 2026 includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Tithi</strong> - Lunar day in Hindu calendar</li>
              <li><strong>Nakshatra</strong> - Lunar mansion or constellation</li>
              <li><strong>Yoga</strong> - Auspicious or inauspicious period</li>
              <li><strong>Karana</strong> - Half of a Tithi</li>
              <li><strong>Sunrise & Sunset</strong> - Daily solar timings</li>
              <li><strong>Rahu Kalam</strong> - Inauspicious time period</li>
              <li><strong>Festivals & Vrat</strong> - Hindu festivals and fasting days</li>
            </ul>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/festivals"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">Festival List 2026</h3>
            <p className="opacity-90">View all Hindu festivals and important dates in Kalnirnay Calendar 2026</p>
          </Link>
          <Link
            href="/shop"
            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">Buy Original Calendar</h3>
            <p className="opacity-90">Purchase the authentic Kalnirnay Calendar 2026 print edition</p>
          </Link>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="text-[var(--color-primary)] hover:underline font-medium"
          >
            ← Back to Kalnirnay Calendar 2026 Home
          </Link>
        </div>
      </div>
    </>
  );
}

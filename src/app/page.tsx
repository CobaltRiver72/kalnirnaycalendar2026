import Link from 'next/link';
import { Metadata } from 'next';
import { getProductSchema, getFAQSchema, getItemListSchema, SITE_CONFIG } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kalnirnay Calendar 2026 - Official Hindu Panchang & Festivals',
  description: 'Kalnirnay Calendar 2026 is your complete guide to Hindu Panchang with daily Tithi, Nakshatra, festivals, auspicious muhurat, and important dates. Trusted by millions across India.',
  alternates: {
    canonical: '/',
  },
};

const months2026 = [
  { name: 'January', slug: 'january', mr: 'जानेवारी' },
  { name: 'February', slug: 'february', mr: 'फेब्रुवारी' },
  { name: 'March', slug: 'march', mr: 'मार्च' },
  { name: 'April', slug: 'april', mr: 'एप्रिल' },
  { name: 'May', slug: 'may', mr: 'मे' },
  { name: 'June', slug: 'june', mr: 'जून' },
  { name: 'July', slug: 'july', mr: 'जुलै' },
  { name: 'August', slug: 'august', mr: 'ऑगस्ट' },
  { name: 'September', slug: 'september', mr: 'सप्टेंबर' },
  { name: 'October', slug: 'october', mr: 'ऑक्टोबर' },
  { name: 'November', slug: 'november', mr: 'नोव्हेंबर' },
  { name: 'December', slug: 'december', mr: 'डिसेंबर' },
];

const majorFestivals2026 = [
  { name: 'Makar Sankranti', slug: 'makar-sankranti', date: 'January 14, 2026' },
  { name: 'Republic Day', slug: 'republic-day', date: 'January 26, 2026' },
  { name: 'Maha Shivaratri', slug: 'maha-shivaratri', date: 'February 15, 2026' },
  { name: 'Holi', slug: 'holi', date: 'March 3, 2026' },
  { name: 'Gudi Padwa', slug: 'gudi-padwa', date: 'March 19, 2026' },
  { name: 'Ram Navami', slug: 'ram-navami', date: 'March 27, 2026' },
  { name: 'Hanuman Jayanti', slug: 'hanuman-jayanti', date: 'April 14, 2026' },
  { name: 'Akshaya Tritiya', slug: 'akshaya-tritiya', date: 'May 3, 2026' },
  { name: 'Ganesh Chaturthi', slug: 'ganesh-chaturthi', date: 'August 27, 2026' },
  { name: 'Navratri', slug: 'navratri', date: 'September 28, 2026' },
  { name: 'Dussehra', slug: 'dussehra', date: 'October 7, 2026' },
  { name: 'Diwali', slug: 'diwali', date: 'October 20, 2026' },
];

const homepageFAQs = [
  {
    question: 'What is Kalnirnay Calendar 2026?',
    answer: 'Kalnirnay Calendar 2026 is the most trusted Hindu Panchang calendar in India, providing accurate daily Tithi, Nakshatra, Yoga, Karana, festivals, auspicious muhurat, and important dates for the year 2026.',
  },
  {
    question: 'How do I use Kalnirnay Calendar 2026?',
    answer: 'You can browse monthly calendars, check daily Panchang details, find festival dates, and identify auspicious timings for important events. Navigate using the monthly index or festival list.',
  },
  {
    question: 'Is Kalnirnay Calendar 2026 available online?',
    answer: 'Yes, Kalnirnay Calendar 2026 is available online at kalnirnaycalendar2026.online with complete Panchang data, festivals, and monthly calendars accessible from any device.',
  },
  {
    question: 'Where can I buy the original Kalnirnay Calendar 2026?',
    answer: 'You can purchase the original Kalnirnay Calendar 2026 from authorized sellers including Amazon, Flipkart, and local bookstores across India.',
  },
];

export default function HomePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(homepageFAQs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(monthListSchema) }}
      />

      {/* Hero Section - Above the Fold */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Kalnirnay Calendar 2026
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95">
            Your complete guide to Hindu Panchang 2026 with accurate daily Tithi, Nakshatra, 
            festivals, auspicious muhurat, and important dates. Trusted by millions across India.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link 
              href="/calendar" 
              className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Full Calendar 2026
            </Link>
            <Link 
              href="/festivals" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Festival List 2026
            </Link>
            <Link 
              href="/shop" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Buy Original Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* About Kalnirnay Calendar 2026 */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-[var(--foreground)]">
            About Kalnirnay Calendar 2026
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Kalnirnay Calendar 2026</strong> is India&apos;s most trusted and widely used Hindu Panchang calendar. 
              For over five decades, Kalnirnay has been the authoritative source for daily Panchang information, 
              festival dates, auspicious timings, and Hindu calendar data.
            </p>
            <p className="text-gray-600">
              The Kalnirnay Calendar 2026 provides comprehensive details including daily Tithi, Nakshatra, Yoga, Karana, 
              sunrise and sunset times, moonrise, Rahu Kalam, and Abhijit Muhurat. Whether you&apos;re planning a wedding, 
              housewarming, or any auspicious event, Kalnirnay Calendar 2026 is your essential reference.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Calendar Index - Jan to Dec 2026 */}
      <section className="py-12 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">
            Kalnirnay Calendar 2026 - Monthly Index
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {months2026.map((month) => (
              <Link
                key={month.slug}
                href={`/calendar/${month.slug}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="text-lg font-semibold text-[var(--color-primary)]">
                  {month.name} 2026
                </span>
                <span className="block text-sm text-gray-500 mt-1">{month.mr}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/calendar" 
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Complete Kalnirnay Calendar 2026 →
            </Link>
          </div>
        </div>
      </section>

      {/* Festival & Vrat Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">
            Major Festivals in Kalnirnay Calendar 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {majorFestivals2026.map((festival) => (
              <Link
                key={festival.slug}
                href={`/festival/${festival.slug}`}
                className="bg-[var(--background)] rounded-lg p-5 hover:shadow-md transition-shadow border border-gray-100 flex justify-between items-center"
              >
                <span className="font-medium text-[var(--foreground)]">{festival.name}</span>
                <span className="text-sm text-[var(--color-primary)]">{festival.date}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/festivals" 
              className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View All Festivals 2026 →
            </Link>
          </div>
        </div>
      </section>

      {/* Download / View Options */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">
            Access Kalnirnay Calendar 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">View Online</h3>
              <p className="text-gray-600 mb-4">Access the complete Kalnirnay Calendar 2026 online anytime, anywhere.</p>
              <Link href="/calendar" className="text-[var(--color-primary)] font-medium hover:underline">
                Browse Calendar →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Daily Panchang</h3>
              <p className="text-gray-600 mb-4">Check daily Tithi, Nakshatra, and auspicious timings.</p>
              <Link href="/calendar/january" className="text-[var(--color-primary)] font-medium hover:underline">
                Today&apos;s Panchang →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Buy Original</h3>
              <p className="text-gray-600 mb-4">Purchase the authentic Kalnirnay Calendar 2026 print edition.</p>
              <Link href="/shop" className="text-[var(--color-primary)] font-medium hover:underline">
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Original Kalnirnay Calendar 2026 - Shop Teaser */}
      <section className="py-12 bg-[var(--color-primary)] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Buy Original Kalnirnay Calendar 2026
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get the authentic Kalnirnay Calendar 2026 from authorized sellers. 
            Available in Marathi, Hindi, Gujarati, and English editions.
          </p>
          <Link 
            href="/shop" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Kalnirnay Calendar 2026 →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homepageFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer Links */}
      <section className="py-8 bg-[var(--background)] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-[var(--color-primary)]">
              About Kalnirnay Calendar 2026
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[var(--color-primary)]">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-[var(--color-primary)]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-600 hover:text-[var(--color-primary)]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getProductSchema, SITE_CONFIG } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Buy Original Kalnirnay Calendar 2026 - Authorized Sellers',
  description: 'Purchase the authentic Kalnirnay Calendar 2026 from authorized sellers. Available in Marathi, Hindi, Gujarati, and English editions. Buy online from Amazon, Flipkart, and local stores.',
  alternates: {
    canonical: '/shop',
  },
};

const sellers = [
  {
    name: 'Amazon India',
    description: 'Buy Kalnirnay Calendar 2026 on Amazon with fast delivery and secure payment.',
    url: 'https://www.amazon.in/s?k=kalnirnay+calendar+2026',
    type: 'Online',
  },
  {
    name: 'Flipkart',
    description: 'Order Kalnirnay Calendar 2026 on Flipkart with multiple payment options.',
    url: 'https://www.flipkart.com/search?q=kalnirnay+calendar+2026',
    type: 'Online',
  },
  {
    name: 'Kalnirnay Official Website',
    description: 'Visit the official Kalnirnay website for direct purchase and authentic products.',
    url: 'https://www.kalnirnay.com',
    type: 'Official',
  },
];

const editions = [
  { name: 'Marathi Edition', description: 'The original Marathi Kalnirnay Calendar 2026' },
  { name: 'Hindi Edition', description: 'Kalnirnay Calendar 2026 in Hindi' },
  { name: 'Gujarati Edition', description: 'Kalnirnay Calendar 2026 in Gujarati' },
  { name: 'English Edition', description: 'Kalnirnay Calendar 2026 in English' },
  { name: 'Desk Calendar', description: 'Compact desk version of Kalnirnay 2026' },
  { name: 'Wall Calendar', description: 'Large wall-mounted Kalnirnay 2026' },
];

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema()) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Shop', href: '/shop' }]} />

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Buy Original Kalnirnay Calendar 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purchase the authentic Kalnirnay Calendar 2026 from authorized sellers. 
            Available in multiple languages and formats.
          </p>
        </header>

        {/* Trust Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-3xl">✓</span>
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">
                Authenticity Guarantee
              </h2>
              <p className="text-green-700">
                We recommend purchasing Kalnirnay Calendar 2026 only from authorized sellers listed below. 
                The original Kalnirnay calendar contains accurate astronomical calculations and is trusted 
                by millions of families across India for over 50 years.
              </p>
            </div>
          </div>
        </div>

        {/* Authorized Sellers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
            Authorized Sellers - Kalnirnay Calendar 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellers.map((seller) => (
              <a
                key={seller.name}
                href={seller.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--color-primary)]">
                    {seller.name}
                  </h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{seller.type}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                <span className="text-[var(--color-primary)] font-medium text-sm">
                  Visit Store →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Available Editions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
            Available Editions - Kalnirnay Calendar 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {editions.map((edition) => (
              <div
                key={edition.name}
                className="bg-[var(--background)] rounded-lg p-5 border border-gray-100"
              >
                <h3 className="font-semibold text-[var(--foreground)] mb-1">{edition.name}</h3>
                <p className="text-sm text-gray-600">{edition.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[var(--foreground)] mb-3">
            Important Disclaimer
          </h2>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>kalnirnaycalendar2026.online</strong> is an informational website providing 
              Kalnirnay Calendar 2026 data online. We are not the official publisher of Kalnirnay.
            </p>
            <p>
              The links above direct you to third-party websites where you can purchase the original 
              Kalnirnay Calendar 2026. We do not process orders or payments directly.
            </p>
            <p>
              For the authentic experience and to support the original creators, we recommend 
              purchasing the official printed Kalnirnay Calendar 2026 from authorized sellers.
            </p>
          </div>
        </section>

        {/* Why Buy Original */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
            Why Buy Original Kalnirnay Calendar 2026?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">📊 Accurate Calculations</h3>
              <p className="text-gray-600">
                Original Kalnirnay uses precise astronomical calculations verified by experts.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">🏆 50+ Years of Trust</h3>
              <p className="text-gray-600">
                Trusted by millions of Indian families for over five decades.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">📅 Complete Information</h3>
              <p className="text-gray-600">
                Includes detailed Panchang, festivals, muhurat, and regional information.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">🎨 Beautiful Design</h3>
              <p className="text-gray-600">
                High-quality print with clear layout and easy-to-read format.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/calendar-2026"
            className="bg-[var(--color-primary)] text-white rounded-lg p-4 text-center hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            <span className="font-medium">View Kalnirnay Calendar 2026 Online →</span>
          </Link>
          <Link
            href="/festivals"
            className="bg-[var(--background)] rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-200"
          >
            <span className="font-medium text-[var(--foreground)]">View Festival List 2026 →</span>
          </Link>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-8">
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

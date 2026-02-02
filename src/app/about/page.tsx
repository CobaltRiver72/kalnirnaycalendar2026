import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Kalnirnay Calendar 2026',
  description: 'Learn about Kalnirnay Calendar 2026 - India\'s most trusted Hindu Panchang calendar. Providing accurate Tithi, Nakshatra, festivals, and auspicious timings for over 50 years.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          About Kalnirnay Calendar 2026
        </h1>
        <p className="text-lg text-gray-600">
          India&apos;s Most Trusted Hindu Panchang Calendar
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            What is Kalnirnay Calendar 2026?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Kalnirnay Calendar 2026</strong> is the leading Hindu Panchang calendar in India, 
            trusted by millions of families for accurate astronomical data, festival dates, and 
            auspicious timings. For over five decades, Kalnirnay has been the definitive reference 
            for Hindu calendar information.
          </p>
          <p className="text-gray-700">
            The name &quot;Kalnirnay&quot; comes from Sanskrit, meaning &quot;determination of time.&quot; 
            True to its name, the Kalnirnay Calendar 2026 helps users determine the most auspicious 
            times for important life events.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            About This Website
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>kalnirnaycalendar2026.online</strong> is an informational website that provides 
            Kalnirnay Calendar 2026 data in a convenient online format. Our mission is to make 
            Hindu Panchang information accessible to everyone, anywhere, anytime.
          </p>
          <p className="text-gray-700">
            This website is not affiliated with the official Kalnirnay publication. We provide 
            reference information and recommend purchasing the original printed calendar from 
            authorized sellers for the complete experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Features of Kalnirnay Calendar 2026
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Daily Panchang</strong> - Tithi, Nakshatra, Yoga, Karana for every day</li>
            <li><strong>Festival Calendar</strong> - All Hindu festivals and important dates</li>
            <li><strong>Auspicious Timings</strong> - Muhurat for weddings, ceremonies, and events</li>
            <li><strong>Sunrise & Sunset</strong> - Accurate solar timings</li>
            <li><strong>Rahu Kalam</strong> - Daily inauspicious time periods</li>
            <li><strong>Monthly View</strong> - Complete monthly calendar with all details</li>
            <li><strong>Vrat & Upvas</strong> - Fasting days and religious observances</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Why Trust Kalnirnay Calendar 2026?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="bg-[var(--background)] rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-2">50+ Years Legacy</h3>
              <p className="text-gray-600 text-sm">Trusted since 1973 by Indian families</p>
            </div>
            <div className="bg-[var(--background)] rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-2">Expert Calculations</h3>
              <p className="text-gray-600 text-sm">Verified astronomical data</p>
            </div>
            <div className="bg-[var(--background)] rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-2">Millions of Users</h3>
              <p className="text-gray-600 text-sm">Most popular calendar in Maharashtra</p>
            </div>
            <div className="bg-[var(--background)] rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-2">Regional Accuracy</h3>
              <p className="text-gray-600 text-sm">Timings specific to Indian cities</p>
            </div>
          </div>
        </section>
      </article>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <Link
          href="/calendar-2026"
          className="bg-[var(--color-primary)] text-white rounded-lg p-4 text-center hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          View Calendar 2026
        </Link>
        <Link
          href="/festivals"
          className="bg-[var(--background)] rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
        >
          Festival List
        </Link>
        <Link
          href="/shop"
          className="bg-[var(--background)] rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
        >
          Buy Original
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
  );
}

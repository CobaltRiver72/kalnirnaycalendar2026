import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us - Kalnirnay Calendar 2026',
  description: 'Contact the Kalnirnay Calendar 2026 website team. Get in touch for questions, feedback, or suggestions about our Hindu Panchang calendar resource.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Get in touch with the Kalnirnay Calendar 2026 team
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
            Website Inquiries
          </h2>
          <p className="text-gray-600 mb-4">
            For questions about this website, feedback, or suggestions regarding 
            Kalnirnay Calendar 2026 online, please reach out to us.
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> contact@kalnirnaycalendar2026.online
          </p>
        </div>

        <div className="bg-[var(--background)] rounded-xl p-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
            Official Kalnirnay
          </h2>
          <p className="text-gray-600 mb-4">
            For inquiries about the official Kalnirnay publication, purchase orders, 
            or distribution, please contact the official Kalnirnay team directly.
          </p>
          <a 
            href="https://www.kalnirnay.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            Visit Official Kalnirnay Website →
          </a>
        </div>
      </div>

      <section className="bg-gray-50 rounded-xl p-8 mb-10">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Important Notice
        </h2>
        <p className="text-gray-600">
          <strong>kalnirnaycalendar2026.online</strong> is an independent informational 
          website and is not affiliated with the official Kalnirnay publication. 
          We provide Kalnirnay Calendar 2026 data as an online reference. For official 
          products and authentic calendars, please purchase from authorized sellers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">
              How can I report an error in the calendar data?
            </h3>
            <p className="text-gray-600 text-sm">
              If you notice any discrepancy in the Kalnirnay Calendar 2026 data on our website, 
              please email us with details and we will verify and correct it promptly.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">
              Can I purchase the calendar through this website?
            </h3>
            <p className="text-gray-600 text-sm">
              We do not sell calendars directly. Please visit our Shop page for links to 
              authorized sellers where you can purchase the original Kalnirnay Calendar 2026.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 border border-gray-100">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">
              How do I request a feature or improvement?
            </h3>
            <p className="text-gray-600 text-sm">
              We welcome suggestions! Please email us your ideas for improving the 
              Kalnirnay Calendar 2026 online experience.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/calendar-2026"
          className="bg-[var(--color-primary)] text-white rounded-lg p-4 text-center hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          View Calendar 2026
        </Link>
        <Link
          href="/shop"
          className="bg-[var(--background)] rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
        >
          Buy Original Calendar
        </Link>
        <Link
          href="/about"
          className="bg-[var(--background)] rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
        >
          About Us
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

import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Kalnirnay Calendar 2026',
  description: 'Terms and Conditions for using the Kalnirnay Calendar 2026 website. Please read these terms carefully before using our service.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Terms and Conditions', href: '/terms-and-conditions' }]} />

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-600">
          Last updated: January 2026
        </p>
      </header>

      <article className="prose prose-lg max-w-none text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Agreement to Terms
          </h2>
          <p>
            By accessing and using Kalnirnay Calendar 2026 (kalnirnaycalendar2026.online), 
            you agree to be bound by these Terms and Conditions. If you do not agree with 
            any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Website Purpose
          </h2>
          <p>
            Kalnirnay Calendar 2026 is an informational website that provides Hindu Panchang 
            calendar data for reference purposes. The information provided includes daily 
            Tithi, Nakshatra, festivals, and auspicious timings for the year 2026.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Disclaimer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Not Official:</strong> This website is not affiliated with, endorsed by, 
              or connected to the official Kalnirnay publication or its publishers.
            </li>
            <li>
              <strong>Accuracy:</strong> While we strive to provide accurate information, 
              we do not guarantee the complete accuracy of all calendar data. For official 
              and verified information, please refer to the original printed Kalnirnay Calendar.
            </li>
            <li>
              <strong>No Liability:</strong> We are not liable for any decisions made based 
              on the information provided on this website.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Intellectual Property
          </h2>
          <p>
            The content on this website, including text, graphics, and design, is protected 
            by intellectual property laws. &quot;Kalnirnay&quot; is a trademark of its respective 
            owners. We use the name for informational purposes only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Third-Party Links
          </h2>
          <p>
            Our website contains links to third-party websites, including online stores 
            where you can purchase the Kalnirnay Calendar 2026. We are not responsible 
            for the content, products, or services offered by these external websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Permitted Use
          </h2>
          <p className="mb-4">You may use this website for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal reference of Kalnirnay Calendar 2026 information</li>
            <li>Checking festival dates and auspicious timings</li>
            <li>Viewing monthly calendar data</li>
          </ul>
          <p className="mt-4">You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reproduce or redistribute the content for commercial purposes</li>
            <li>Claim ownership of the calendar data</li>
            <li>Use the website to spread misinformation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. 
            Changes will be effective immediately upon posting on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Governing Law
          </h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance 
            with the laws of India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Contact
          </h2>
          <p>
            For questions about these Terms and Conditions, please contact us at 
            contact@kalnirnaycalendar2026.online
          </p>
        </section>
      </article>

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

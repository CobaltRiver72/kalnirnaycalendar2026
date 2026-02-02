import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy - Kalnirnay Calendar 2026',
  description: 'Privacy Policy for Kalnirnay Calendar 2026 website. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: January 2026
        </p>
      </header>

      <article className="prose prose-lg max-w-none text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Introduction
          </h2>
          <p>
            Welcome to Kalnirnay Calendar 2026 (kalnirnaycalendar2026.online). This Privacy Policy 
            explains how we collect, use, and protect information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including browser type, pages visited, and time spent on pages.</li>
            <li><strong>Device Information:</strong> Information about your device, including device type, operating system, and screen resolution.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            How We Use Information
          </h2>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our Kalnirnay Calendar 2026 website</li>
            <li>Improve and optimize user experience</li>
            <li>Analyze website usage and trends</li>
            <li>Detect and prevent technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Third-Party Services
          </h2>
          <p>
            Our website may contain links to third-party websites, including sellers of 
            Kalnirnay Calendar 2026. We are not responsible for the privacy practices of 
            these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Cookies
          </h2>
          <p>
            We use cookies to enhance your experience on our website. You can choose to 
            disable cookies through your browser settings, though this may affect some 
            website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your information. However, 
            no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not 
            knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be 
            posted on this page with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at 
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

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWebSiteSchema, getOrganizationSchema } from "@/lib/schema";

// Load Inter font from Next.js
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Kalnirnay Calendar 2026 - Official Hindu Panchang & Festivals",
    template: "%s | Kalnirnay Calendar 2026",
  },
  description: "Kalnirnay Calendar 2026 - Your complete guide to Hindu Panchang with daily Tithi, Nakshatra, festivals, auspicious muhurat, and important dates for 2026. Trusted by millions.",
  keywords: ["kalnirnay calendar 2026", "kalnirnay 2026", "hindu calendar 2026", "panchang 2026", "marathi calendar 2026", "indian festivals 2026", "tithi", "nakshatra", "muhurat 2026", "hindu panchang"],
  authors: [{ name: "Kalnirnay Calendar 2026" }],
  creator: "Kalnirnay Calendar 2026",
  publisher: "Kalnirnay Calendar 2026",
  metadataBase: new URL("https://kalnirnaycalendar2026.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kalnirnay Calendar 2026 - Official Hindu Panchang & Festivals",
    description: "Complete Kalnirnay Calendar 2026 with daily Panchang, festivals, Tithi, Nakshatra, and auspicious timings.",
    type: "website",
    locale: "en_IN",
    url: "https://kalnirnaycalendar2026.online",
    siteName: "Kalnirnay Calendar 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalnirnay Calendar 2026 - Official Hindu Panchang & Festivals",
    description: "Complete Kalnirnay Calendar 2026 with daily Panchang, festivals, and auspicious timings.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <I18nProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Kalnirnay Calendar 2026 | कालनिर्णय कॅलेंडर २०२६ - Daily Panchang & Festivals",
  description: "Kalnirnay Calendar 2026 - दररोजचे पंचांग, सण, शुभ मुहूर्त मराठी आणि इंग्रजी मध्ये. Daily Panchang, festivals, auspicious timings in Marathi and English.",
  keywords: ["kalnirnay calendar 2026", "kalnirnay 2026", "hindu calendar", "panchang", "marathi calendar", "indian festivals", "tithi", "nakshatra", "कालनिर्णय कॅलेंडर", "मराठी कॅलेंडर"],
  authors: [{ name: "Kalnirnay Calendar 2026" }],
  openGraph: {
    title: "Kalnirnay Calendar 2026 | कालनिर्णय कॅलेंडर २०२६",
    description: "Daily Panchang, festivals, auspicious timings in Marathi and English.",
    type: "website",
    locale: "mr_IN",
    alternateLocale: "en_IN",
    url: "https://kalnirnaycalendar2026.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalnirnay Calendar 2026 | कालनिर्णय कॅलेंडर २०२६",
    description: "Daily Panchang, festivals, auspicious timings in Marathi and English.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://kalnirnaycalendar2026.online" />
        {/* Mukta font for Marathi - loaded via CSS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&display=swap"
          rel="stylesheet"
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

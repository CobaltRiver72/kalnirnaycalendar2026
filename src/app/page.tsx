'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { formatDateString, getMonthName, parseDateString } from '@/lib/data';
import PanchangDisplay from '@/components/PanchangDisplay';
import FestivalBadge from '@/components/FestivalBadge';

// Import panchang data
import dec2024 from '@/data/panchang/2024-12.json';
import jan2025 from '@/data/panchang/2025-01.json';
import feb2025 from '@/data/panchang/2025-02.json';
import mar2025 from '@/data/panchang/2025-03.json';

export default function HomePage() {
  const { lang, getText } = useI18n();
  const [todayPanchang, setTodayPanchang] = useState<PanchangData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get today's date
    const today = formatDateString(new Date());
    const [year, month] = today.split('-');
    const monthKey = `${year}-${month}`;

    // Find today's panchang from available data
    const allData: Record<string, PanchangData[]> = {
      '2024-12': dec2024 as PanchangData[],
      '2025-01': jan2025 as PanchangData[],
      '2025-02': feb2025 as PanchangData[],
      '2025-03': mar2025 as PanchangData[],
    };

    const monthData = allData[monthKey];
    if (monthData) {
      const panchang = monthData.find(p => p.date === today);
      setTodayPanchang(panchang || null);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-[var(--color-primary)] text-xl">
          {lang === 'mr' ? 'लोड होत आहे...' : 'Loading...'}
        </div>
      </div>
    );
  }

  // Fallback to sample date if today not found
  const panchang = todayPanchang || (dec2024 as PanchangData[])[22]; // Dec 23, 2024
  const date = parseDateString(panchang.date);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm opacity-80 mb-2">
              {todayPanchang
                ? (lang === 'mr' ? 'आजचे पंचांग' : "Today's Panchang")
                : (lang === 'mr' ? 'नमुना पंचांग' : 'Sample Panchang')
              }
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {date.getDate()} {getMonthName(date.getMonth() + 1, lang)} {date.getFullYear()}
            </h1>
            <p className="text-xl opacity-90">
              {getText(panchang.weekday)}
            </p>
          </div>

          {/* Quick Panchang Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-xs opacity-70">{lang === 'mr' ? 'तिथी' : 'Tithi'}</p>
              <p className="font-semibold text-lg mt-1">{getText(panchang.tithi)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-xs opacity-70">{lang === 'mr' ? 'पक्ष' : 'Paksha'}</p>
              <p className="font-semibold text-lg mt-1">{getText(panchang.paksha)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-xs opacity-70">{lang === 'mr' ? 'नक्षत्र' : 'Nakshatra'}</p>
              <p className="font-semibold text-lg mt-1">{getText(panchang.nakshatra)}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="text-xs opacity-70">{lang === 'mr' ? 'योग' : 'Yoga'}</p>
              <p className="font-semibold text-lg mt-1">{getText(panchang.yoga)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Panchang Details */}
          <div className="lg:col-span-2">
            <PanchangDisplay panchang={panchang} />

            {/* Festivals & Vrat */}
            {(panchang.festivals.length > 0 || panchang.vrat.length > 0) && (
              <div className="card mt-6 p-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                  {lang === 'mr' ? 'सण आणि व्रत' : 'Festivals & Vrat'}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {panchang.festivals.map((festival, idx) => (
                    <FestivalBadge key={`festival-${idx}`} festival={festival} size="md" />
                  ))}
                  {panchang.vrat.map((vrat, idx) => (
                    <FestivalBadge key={`vrat-${idx}`} festival={vrat} size="md" />
                  ))}
                </div>
              </div>
            )}

            {/* No Festival Message */}
            {panchang.festivals.length === 0 && panchang.vrat.length === 0 && (
              <div className="card mt-6 p-6 text-center text-[var(--foreground-muted)]">
                <span className="text-3xl mb-2 block">📅</span>
                <p>{lang === 'mr' ? 'आज कोणताही सण किंवा व्रत नाही' : 'No festival or vrat today'}</p>
              </div>
            )}
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6">
            {/* View Calendar Card */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">
                {lang === 'mr' ? 'कॅलेंडर पहा' : 'View Calendar'}
              </h3>
              <Link
                href={`/calendar/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`}
                className="btn btn-primary w-full"
              >
                {lang === 'mr' ? 'मासिक कॅलेंडर' : 'Monthly Calendar'} →
              </Link>
            </div>

            {/* Upcoming Festivals */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">
                {lang === 'mr' ? 'आगामी सण' : 'Upcoming Festivals'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/festival/makar-sankranti" className="flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                    <span>{lang === 'mr' ? 'मकर संक्रांत' : 'Makar Sankranti'}</span>
                    <span className="text-sm text-[var(--foreground-muted)]">14 Jan</span>
                  </Link>
                </li>
                <li>
                  <Link href="/festival/holi" className="flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                    <span>{lang === 'mr' ? 'होळी' : 'Holi'}</span>
                    <span className="text-sm text-[var(--foreground-muted)]">14 Mar</span>
                  </Link>
                </li>
                <li>
                  <Link href="/festival/gudi-padwa" className="flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                    <span>{lang === 'mr' ? 'गुढी पाडवा' : 'Gudi Padwa'}</span>
                    <span className="text-sm text-[var(--foreground-muted)]">30 Mar</span>
                  </Link>
                </li>
                <li>
                  <Link href="/festival/ganesh-chaturthi" className="flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                    <span>{lang === 'mr' ? 'गणेश चतुर्थी' : 'Ganesh Chaturthi'}</span>
                    <span className="text-sm text-[var(--foreground-muted)]">7 Sep</span>
                  </Link>
                </li>
                <li>
                  <Link href="/festival/diwali" className="flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                    <span>{lang === 'mr' ? 'दिवाळी' : 'Diwali'}</span>
                    <span className="text-sm text-[var(--foreground-muted)]">20 Oct</span>
                  </Link>
                </li>
              </ul>
              <Link href="/festivals" className="btn btn-secondary w-full mt-4">
                {lang === 'mr' ? 'सर्व सण पहा' : 'View All Festivals'}
              </Link>
            </div>

            {/* Location Info */}
            <div className="card p-6 bg-gradient-to-br from-[var(--background)] to-[var(--background-card)]">
              <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {lang === 'mr' ? 'मुंबई, महाराष्ट्र' : 'Mumbai, Maharashtra'}
                  </p>
                  <p className="text-xs">
                    {lang === 'mr' ? 'वेळा या स्थानासाठी आहेत' : 'Times shown for this location'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

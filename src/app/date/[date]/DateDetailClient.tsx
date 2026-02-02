'use client';

import Link from 'next/link';
import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { parseDateString, getMonthName, getPreviousDate, getNextDate, formatDateString } from '@/lib/data';
import PanchangDisplay from '@/components/PanchangDisplay';
import FestivalBadge from '@/components/FestivalBadge';

interface Props {
    panchang: PanchangData;
}

export default function DateDetailClient({ panchang }: Props) {
    const { lang, getText } = useI18n();
    const date = parseDateString(panchang.date);
    const today = formatDateString(new Date());
    const isToday = panchang.date === today;

    const prevDate = getPreviousDate(panchang.date);
    const nextDate = getNextDate(panchang.date);

    // Share functionality
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `${date.getDate()} ${getMonthName(date.getMonth() + 1, lang)} ${date.getFullYear()} - ${getText(panchang.tithi)}`;

    const handleShare = (platform: 'whatsapp' | 'facebook' | 'copy') => {
        const url = encodeURIComponent(shareUrl);
        const text = encodeURIComponent(shareText);

        switch (platform) {
            case 'whatsapp':
                window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(shareUrl);
                alert(lang === 'mr' ? 'लिंक कॉपी केली!' : 'Link copied!');
                break;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
                <Link href={prevDate ? `/date/${prevDate}` : '#'} className="btn btn-secondary text-sm">
                    ← {lang === 'mr' ? 'मागील' : 'Previous'}
                </Link>
                <Link
                    href={`/calendar/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`}
                    className="text-[var(--color-primary)] font-medium hover:underline"
                >
                    {lang === 'mr' ? 'मासिक दृश्य' : 'Monthly View'}
                </Link>
                <Link href={nextDate ? `/date/${nextDate}` : '#'} className="btn btn-secondary text-sm">
                    {lang === 'mr' ? 'पुढील' : 'Next'} →
                </Link>
            </div>

            {/* Date Header */}
            <div className="card p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        {isToday && (
                            <span className="badge badge-major mb-2">
                                {lang === 'mr' ? 'आज' : 'Today'}
                            </span>
                        )}
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                            {date.getDate()} {getMonthName(date.getMonth() + 1, lang)} {date.getFullYear()}
                        </h1>
                        <p className="text-xl text-[var(--foreground-muted)] mt-1">
                            {getText(panchang.weekday)}
                        </p>
                    </div>

                    {/* Share Buttons */}
                    <div className="flex gap-2 mt-4 md:mt-0 no-print">
                        <button
                            onClick={() => handleShare('whatsapp')}
                            className="btn btn-secondary text-sm"
                            title={lang === 'mr' ? 'व्हॉट्सॲप वर शेअर करा' : 'Share on WhatsApp'}
                        >
                            📱 WhatsApp
                        </button>
                        <button
                            onClick={() => handleShare('copy')}
                            className="btn btn-secondary text-sm"
                            title={lang === 'mr' ? 'लिंक कॉपी करा' : 'Copy link'}
                        >
                            📋 {lang === 'mr' ? 'कॉपी' : 'Copy'}
                        </button>
                    </div>
                </div>

                {/* Festivals & Vrat */}
                {(panchang.festivals.length > 0 || panchang.vrat.length > 0) && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                        <h2 className="text-lg font-semibold mb-3">
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
            </div>

            {/* Panchang Details */}
            <PanchangDisplay panchang={panchang} />

            {/* Print Button */}
            <div className="mt-6 text-center no-print">
                <button onClick={() => window.print()} className="btn btn-secondary">
                    🖨️ {lang === 'mr' ? 'प्रिंट करा' : 'Print'}
                </button>
            </div>
        </div>
    );
}

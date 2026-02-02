'use client';

import Link from 'next/link';
import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { parseDateString, formatDateString } from '@/lib/data';
import FestivalBadge from './FestivalBadge';

interface DateCardProps {
    panchang: PanchangData;
    isToday?: boolean;
    compact?: boolean;
}

export default function DateCard({ panchang, isToday = false, compact = false }: DateCardProps) {
    const { getText, lang } = useI18n();
    const date = parseDateString(panchang.date);
    const day = date.getDate();
    const hasFestival = panchang.festivals.length > 0;
    const hasVrat = panchang.vrat.length > 0;
    const isSunday = date.getDay() === 0;

    if (compact) {
        return (
            <Link
                href={`/date/${panchang.date}`}
                className={`calendar-day ${isToday ? 'today' : ''} ${hasFestival ? 'festival' : ''} ${isSunday ? 'holiday' : ''}`}
            >
                <span className="text-lg font-semibold">{day}</span>
                {hasFestival && (
                    <span className="w-2 h-2 rounded-full bg-[var(--festival-major)] mt-1"></span>
                )}
                {hasVrat && !hasFestival && (
                    <span className="w-2 h-2 rounded-full bg-[var(--festival-vrat)] mt-1"></span>
                )}
            </Link>
        );
    }

    return (
        <Link href={`/date/${panchang.date}`} className="card card-hover p-4 block">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <span className={`text-3xl font-bold ${isSunday ? 'text-[var(--color-secondary)]' : 'text-[var(--foreground)]'}`}>
                        {day}
                    </span>
                    <p className="text-sm text-[var(--foreground-muted)]">
                        {getText(panchang.weekday)}
                    </p>
                </div>
                {isToday && (
                    <span className="badge badge-major">
                        {lang === 'mr' ? 'आज' : 'Today'}
                    </span>
                )}
            </div>

            {/* Tithi & Paksha */}
            <div className="space-y-1 mb-3">
                <p className="text-sm">
                    <span className="text-[var(--foreground-muted)]">
                        {lang === 'mr' ? 'तिथी: ' : 'Tithi: '}
                    </span>
                    <span className="font-medium">{getText(panchang.tithi)}</span>
                </p>
                <p className="text-sm">
                    <span className="text-[var(--foreground-muted)]">
                        {lang === 'mr' ? 'नक्षत्र: ' : 'Nakshatra: '}
                    </span>
                    <span className="font-medium">{getText(panchang.nakshatra)}</span>
                </p>
            </div>

            {/* Festivals */}
            {(hasFestival || hasVrat) && (
                <div className="flex flex-wrap gap-2">
                    {panchang.festivals.map((festival, idx) => (
                        <FestivalBadge key={`festival-${idx}`} festival={festival} />
                    ))}
                    {panchang.vrat.map((vrat, idx) => (
                        <FestivalBadge key={`vrat-${idx}`} festival={vrat} />
                    ))}
                </div>
            )}

            {/* Auspicious/Inauspicious */}
            {panchang.auspicious && (
                <p className="text-xs text-[var(--color-auspicious)] mt-2">
                    ✓ {getText(panchang.auspicious)}
                </p>
            )}
        </Link>
    );
}

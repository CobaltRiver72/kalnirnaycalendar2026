'use client';

import Link from 'next/link';
import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { getMonthName, formatDateString, parseDateString } from '@/lib/data';
import DateCard from './DateCard';

interface CalendarGridProps {
    year: number;
    month: number;
    panchangData: PanchangData[];
}

export default function CalendarGrid({ year, month, panchangData }: CalendarGridProps) {
    const { lang } = useI18n();
    const today = formatDateString(new Date());

    // Get first day of month and calculate empty cells
    const firstDay = new Date(year, month - 1, 1);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    // Create a map of panchang data by date
    const panchangMap = new Map<number, PanchangData>();
    panchangData.forEach(p => {
        const date = parseDateString(p.date);
        panchangMap.set(date.getDate(), p);
    });

    // Weekday headers
    const weekdays = lang === 'mr'
        ? ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि']
        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Navigation URLs
    const prevMonth = month === 1 ? { year: year - 1, month: 12 } : { year, month: month - 1 };
    const nextMonth = month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };

    // Generate calendar cells
    const cells: (PanchangData | null)[] = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
        cells.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(panchangMap.get(day) || null);
    }

    return (
        <div className="card">
            {/* Header with Month/Year and Navigation */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
                <Link
                    href={`/calendar/${prevMonth.year}/${String(prevMonth.month).padStart(2, '0')}`}
                    className="btn btn-secondary text-sm"
                >
                    ← {lang === 'mr' ? 'मागील' : 'Prev'}
                </Link>

                <h2 className="text-xl font-bold text-[var(--foreground)]">
                    {getMonthName(month, lang)} {year}
                </h2>

                <Link
                    href={`/calendar/${nextMonth.year}/${String(nextMonth.month).padStart(2, '0')}`}
                    className="btn btn-secondary text-sm"
                >
                    {lang === 'mr' ? 'पुढील' : 'Next'} →
                </Link>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
                {/* Weekday Headers */}
                <div className="calendar-grid mb-2">
                    {weekdays.map((day, idx) => (
                        <div
                            key={day}
                            className={`text-center text-sm font-semibold py-2 ${idx === 0 ? 'text-[var(--color-secondary)]' : 'text-[var(--foreground-muted)]'}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Date Cells */}
                <div className="calendar-grid">
                    {cells.map((panchang, idx) => {
                        if (!panchang) {
                            return <div key={`empty-${idx}`} className="calendar-day opacity-0"></div>;
                        }

                        const isToday = panchang.date === today;
                        return (
                            <DateCard
                                key={panchang.date}
                                panchang={panchang}
                                isToday={isToday}
                                compact={true}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="px-4 pb-4 flex flex-wrap gap-4 text-xs text-[var(--foreground-muted)]">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--festival-major)]"></span>
                    <span>{lang === 'mr' ? 'सण' : 'Festival'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--festival-vrat)]"></span>
                    <span>{lang === 'mr' ? 'व्रत' : 'Vrat'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded border-2 border-[var(--color-primary)]"></span>
                    <span>{lang === 'mr' ? 'आज' : 'Today'}</span>
                </div>
            </div>
        </div>
    );
}

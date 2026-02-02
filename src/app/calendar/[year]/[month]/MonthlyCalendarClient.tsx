'use client';

import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { getMonthName } from '@/lib/data';
import CalendarGrid from '@/components/CalendarGrid';
import DateCard from '@/components/DateCard';

interface Props {
    year: number;
    month: number;
    panchangData: PanchangData[];
}

export default function MonthlyCalendarClient({ year, month, panchangData }: Props) {
    const { lang } = useI18n();

    // Get festivals for this month
    const festivalsThisMonth = panchangData.filter(
        p => p.festivals.length > 0 || p.vrat.length > 0
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[var(--foreground)]">
                    {getMonthName(month, lang)} {year}
                </h1>
                <p className="text-[var(--foreground-muted)] mt-2">
                    {lang === 'mr'
                        ? 'मासिक कॅलेंडर आणि पंचांग'
                        : 'Monthly calendar with daily Panchang'}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Grid */}
                <div className="lg:col-span-2">
                    <CalendarGrid year={year} month={month} panchangData={panchangData} />
                </div>

                {/* Sidebar - Festivals this month */}
                <div>
                    <div className="card p-6">
                        <h2 className="text-lg font-semibold mb-4">
                            {lang === 'mr' ? 'या महिन्यातील सण' : 'Festivals This Month'}
                        </h2>

                        {festivalsThisMonth.length > 0 ? (
                            <div className="space-y-4">
                                {festivalsThisMonth.slice(0, 5).map(panchang => (
                                    <DateCard
                                        key={panchang.date}
                                        panchang={panchang}
                                        compact={false}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-[var(--foreground-muted)] text-sm">
                                {lang === 'mr'
                                    ? 'या महिन्यात कोणतेही प्रमुख सण नाहीत'
                                    : 'No major festivals this month'}
                            </p>
                        )}
                    </div>

                    {/* Print Button */}
                    <button
                        onClick={() => window.print()}
                        className="btn btn-secondary w-full mt-4 no-print"
                    >
                        🖨️ {lang === 'mr' ? 'प्रिंट करा' : 'Print Calendar'}
                    </button>
                </div>
            </div>
        </div>
    );
}

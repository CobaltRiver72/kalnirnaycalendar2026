'use client';

import Link from 'next/link';
import { FestivalDetail } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { parseDateString, getMonthName } from '@/lib/data';

interface Props {
    festivals: FestivalDetail[];
}

export default function FestivalsListClient({ festivals }: Props) {
    const { lang, getText } = useI18n();

    // Sort festivals by next upcoming date
    const sortedFestivals = [...festivals].sort((a, b) => {
        const dateA = a.dates[0] || '';
        const dateB = b.dates[0] || '';
        return dateA.localeCompare(dateB);
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                    {lang === 'mr' ? 'हिंदू सण' : 'Hindu Festivals'}
                </h1>
                <p className="text-[var(--foreground-muted)] mt-2 max-w-2xl mx-auto">
                    {lang === 'mr'
                        ? 'प्रमुख हिंदू सण, त्यांची तारीख, परंपरा आणि महत्त्व'
                        : 'Major Hindu festivals with dates, traditions, and significance'}
                </p>
            </div>

            {/* Festival Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedFestivals.map((festival) => {
                    const nextDate = festival.dates[0] ? parseDateString(festival.dates[0]) : null;

                    return (
                        <Link
                            key={festival.slug}
                            href={`/festival/${festival.slug}`}
                            className="card card-hover p-6 block"
                        >
                            {/* Festival Type Badge */}
                            <span className={`badge ${festival.type === 'major' ? 'badge-major' : 'badge-minor'} mb-3`}>
                                {festival.type === 'major'
                                    ? (lang === 'mr' ? 'प्रमुख सण' : 'Major Festival')
                                    : (lang === 'mr' ? 'सण' : 'Festival')
                                }
                            </span>

                            {/* Festival Name */}
                            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                                {getText(festival.name)}
                            </h2>

                            {/* Next Date */}
                            {nextDate && (
                                <p className="text-[var(--color-primary)] font-medium mb-3">
                                    📅 {nextDate.getDate()} {getMonthName(nextDate.getMonth() + 1, lang)} {nextDate.getFullYear()}
                                </p>
                            )}

                            {/* Short Description */}
                            <p className="text-sm text-[var(--foreground-muted)] line-clamp-3">
                                {getText(festival.description).substring(0, 150)}...
                            </p>

                            {/* View More Link */}
                            <span className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium mt-4">
                                {lang === 'mr' ? 'अधिक वाचा' : 'Read more'} →
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

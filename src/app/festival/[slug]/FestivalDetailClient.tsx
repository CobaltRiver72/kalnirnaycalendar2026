'use client';

import Link from 'next/link';
import { FestivalDetail } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { parseDateString, getMonthName } from '@/lib/data';

interface Props {
    festival: FestivalDetail;
}

export default function FestivalDetailClient({ festival }: Props) {
    const { lang, getText } = useI18n();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
            {/* Breadcrumb */}
            <nav className="text-sm text-[var(--foreground-muted)] mb-6">
                <Link href="/" className="hover:text-[var(--color-primary)]">
                    {lang === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}
                </Link>
                <span className="mx-2">›</span>
                <Link href="/festivals" className="hover:text-[var(--color-primary)]">
                    {lang === 'mr' ? 'सण' : 'Festivals'}
                </Link>
                <span className="mx-2">›</span>
                <span className="text-[var(--foreground)]">{getText(festival.name)}</span>
            </nav>

            {/* Festival Header */}
            <div className="card p-8 mb-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
                <span className={`badge ${festival.type === 'major' ? 'bg-white/20' : 'bg-white/10'} text-white mb-4`}>
                    {festival.type === 'major'
                        ? (lang === 'mr' ? 'प्रमुख सण' : 'Major Festival')
                        : (lang === 'mr' ? 'सण' : 'Festival')
                    }
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {getText(festival.name)}
                </h1>
                <p className="text-lg opacity-90">
                    {lang === 'mr' ? festival.name.en : festival.name.mr}
                </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
                {/* Description */}
                <section className="card p-6">
                    <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                        {lang === 'mr' ? 'सणाबद्दल' : 'About the Festival'}
                    </h2>
                    <p className="text-[var(--foreground)] leading-relaxed">
                        {getText(festival.description)}
                    </p>
                </section>

                {/* Traditions */}
                <section className="card p-6">
                    <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                        {lang === 'mr' ? 'परंपरा' : 'Traditions'}
                    </h2>
                    <p className="text-[var(--foreground)] leading-relaxed">
                        {getText(festival.traditions)}
                    </p>
                </section>

                {/* Significance */}
                <section className="card p-6">
                    <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                        {lang === 'mr' ? 'महत्त्व' : 'Significance'}
                    </h2>
                    <p className="text-[var(--foreground)] leading-relaxed">
                        {getText(festival.significance)}
                    </p>
                </section>

                {/* Upcoming Dates */}
                <section className="card p-6">
                    <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                        {lang === 'mr' ? 'आगामी तारखा' : 'Upcoming Dates'}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {festival.dates.map((dateStr) => {
                            const date = parseDateString(dateStr);
                            return (
                                <Link
                                    key={dateStr}
                                    href={`/date/${dateStr}`}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-[var(--background)] hover:bg-[var(--color-primary)]/10 transition-colors"
                                >
                                    <span className="text-2xl">📅</span>
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">
                                            {date.getDate()} {getMonthName(date.getMonth() + 1, lang)} {date.getFullYear()}
                                        </p>
                                        <p className="text-sm text-[var(--foreground-muted)]">
                                            {lang === 'mr' ? 'तारीख पहा' : 'View date'}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Back Link */}
            <div className="mt-8 text-center">
                <Link href="/festivals" className="btn btn-secondary">
                    ← {lang === 'mr' ? 'सर्व सण पहा' : 'View All Festivals'}
                </Link>
            </div>

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Event',
                        name: festival.name.en,
                        description: festival.description.en,
                        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                        eventStatus: 'https://schema.org/EventScheduled',
                        startDate: festival.dates[0],
                        location: {
                            '@type': 'Place',
                            name: 'India',
                        },
                    }),
                }}
            />
        </div>
    );
}

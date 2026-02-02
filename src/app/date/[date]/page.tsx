import { Metadata } from 'next';
import { getPanchangByDate, getAllDatePaths, getMonthName, parseDateString } from '@/lib/data';
import DateDetailClient from './DateDetailClient';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ date: string }>;
}

// Generate static params for all available dates
export async function generateStaticParams() {
    return getAllDatePaths().map(date => ({ date }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { date } = await params;
    const panchang = getPanchangByDate(date);

    if (!panchang) {
        return {
            title: 'Date Not Found - Hindu Panchang',
        };
    }

    const dateObj = parseDateString(date);
    const monthName = getMonthName(dateObj.getMonth() + 1, 'en');
    const festivals = panchang.festivals.map(f => f.name.en).join(', ');

    return {
        title: `${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()} - Panchang | Hindu Calendar`,
        description: `Panchang for ${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()}. Tithi: ${panchang.tithi.en}, Nakshatra: ${panchang.nakshatra.en}${festivals ? `. Festivals: ${festivals}` : ''}.`,
        openGraph: {
            title: `${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()} - Hindu Panchang`,
            description: `Daily Panchang with Tithi, Nakshatra, Yoga, Karana and festival information.`,
        },
    };
}

export default async function DateDetailPage({ params }: Props) {
    const { date } = await params;
    const panchang = getPanchangByDate(date);

    if (!panchang) {
        notFound();
    }

    return <DateDetailClient panchang={panchang} />;
}

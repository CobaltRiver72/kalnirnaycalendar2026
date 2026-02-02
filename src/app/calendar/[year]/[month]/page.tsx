import { Metadata } from 'next';
import { getMonthPanchang, getMonthName, getAllMonthPaths } from '@/lib/data';
import MonthlyCalendarClient from './MonthlyCalendarClient';

interface Props {
    params: Promise<{ year: string; month: string }>;
}

// Generate static params for all available months
export async function generateStaticParams() {
    return getAllMonthPaths();
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { year, month } = await params;
    const monthName = getMonthName(parseInt(month), 'en');
    const monthNameMr = getMonthName(parseInt(month), 'mr');

    return {
        title: `${monthNameMr} ${year} | ${monthName} ${year} - Hindu Calendar`,
        description: `${monthName} ${year} Hindu calendar with daily Panchang, festivals, and auspicious timings. ${monthNameMr} ${year} मासिक कॅलेंडर.`,
        openGraph: {
            title: `${monthName} ${year} - Hindu Panchang Calendar`,
            description: `View the Hindu calendar for ${monthName} ${year} with daily Tithi, Nakshatra, festivals and more.`,
        },
    };
}

export default async function MonthlyCalendarPage({ params }: Props) {
    const { year, month } = await params;
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);
    const panchangData = getMonthPanchang(yearNum, monthNum);

    return (
        <MonthlyCalendarClient
            year={yearNum}
            month={monthNum}
            panchangData={panchangData}
        />
    );
}

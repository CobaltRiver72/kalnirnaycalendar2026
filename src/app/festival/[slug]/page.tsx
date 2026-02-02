import { Metadata } from 'next';
import { getFestivalBySlug, getAllFestivals } from '@/lib/data';
import FestivalDetailClient from './FestivalDetailClient';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all festivals
export async function generateStaticParams() {
    const festivals = getAllFestivals();
    return festivals.map(festival => ({ slug: festival.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const festival = getFestivalBySlug(slug);

    if (!festival) {
        return {
            title: 'Festival Not Found - Kalnirnay Calendar 2026',
        };
    }

    return {
        title: `${festival.name.en} (${festival.name.mr}) - Kalnirnay Calendar 2026`,
        description: festival.description.en.substring(0, 160),
        openGraph: {
            title: `${festival.name.en} - Kalnirnay Calendar 2026`,
            description: festival.description.en.substring(0, 160),
        },
        other: {
            'schema:type': 'Event',
            'schema:name': festival.name.en,
        },
    };
}

export default async function FestivalDetailPage({ params }: Props) {
    const { slug } = await params;
    const festival = getFestivalBySlug(slug);

    if (!festival) {
        notFound();
    }

    return <FestivalDetailClient festival={festival} />;
}

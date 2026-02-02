import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCollectionPageSchema, SITE_CONFIG } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Hindu Festivals 2026 - Complete Festival List',
    description: 'Complete list of Hindu festivals in Kalnirnay Calendar 2026. Diwali, Holi, Ganesh Chaturthi, Navratri, Makar Sankranti and more with dates and significance.',
    alternates: {
        canonical: '/festivals',
    },
    openGraph: {
        title: 'Hindu Festivals 2026 - Kalnirnay Calendar',
        description: 'Explore all Hindu festivals in 2026 with dates, traditions, and significance.',
    },
};

const festivals2026 = [
    { name: 'Makar Sankranti', slug: 'makar-sankranti', date: 'January 14, 2026', category: 'Major' },
    { name: 'Republic Day', slug: 'republic-day', date: 'January 26, 2026', category: 'National' },
    { name: 'Vasant Panchami', slug: 'vasant-panchami', date: 'February 3, 2026', category: 'Festival' },
    { name: 'Maha Shivaratri', slug: 'maha-shivaratri', date: 'February 15, 2026', category: 'Major' },
    { name: 'Holi', slug: 'holi', date: 'March 3, 2026', category: 'Major' },
    { name: 'Gudi Padwa', slug: 'gudi-padwa', date: 'March 19, 2026', category: 'Major' },
    { name: 'Ugadi', slug: 'ugadi', date: 'March 19, 2026', category: 'Regional' },
    { name: 'Ram Navami', slug: 'ram-navami', date: 'March 27, 2026', category: 'Major' },
    { name: 'Hanuman Jayanti', slug: 'hanuman-jayanti', date: 'April 14, 2026', category: 'Major' },
    { name: 'Akshaya Tritiya', slug: 'akshaya-tritiya', date: 'May 3, 2026', category: 'Major' },
    { name: 'Buddha Purnima', slug: 'buddha-purnima', date: 'May 12, 2026', category: 'Festival' },
    { name: 'Guru Purnima', slug: 'guru-purnima', date: 'July 10, 2026', category: 'Festival' },
    { name: 'Raksha Bandhan', slug: 'raksha-bandhan', date: 'August 8, 2026', category: 'Major' },
    { name: 'Janmashtami', slug: 'janmashtami', date: 'August 14, 2026', category: 'Major' },
    { name: 'Independence Day', slug: 'independence-day', date: 'August 15, 2026', category: 'National' },
    { name: 'Ganesh Chaturthi', slug: 'ganesh-chaturthi', date: 'August 27, 2026', category: 'Major' },
    { name: 'Anant Chaturdashi', slug: 'anant-chaturdashi', date: 'September 6, 2026', category: 'Festival' },
    { name: 'Navratri', slug: 'navratri', date: 'September 28, 2026', category: 'Major' },
    { name: 'Dussehra', slug: 'dussehra', date: 'October 7, 2026', category: 'Major' },
    { name: 'Karva Chauth', slug: 'karva-chauth', date: 'October 11, 2026', category: 'Festival' },
    { name: 'Diwali', slug: 'diwali', date: 'October 20, 2026', category: 'Major' },
    { name: 'Bhai Dooj', slug: 'bhai-dooj', date: 'October 22, 2026', category: 'Major' },
    { name: 'Chhath Puja', slug: 'chhath-puja', date: 'October 26, 2026', category: 'Regional' },
    { name: 'Tulsi Vivah', slug: 'tulsi-vivah', date: 'November 8, 2026', category: 'Festival' },
    { name: 'Dev Diwali', slug: 'dev-diwali', date: 'November 15, 2026', category: 'Festival' },
    { name: 'Christmas', slug: 'christmas', date: 'December 25, 2026', category: 'Festival' },
];

export default function FestivalsPage() {
    const collectionSchema = getCollectionPageSchema({
        name: 'Hindu Festivals 2026 - Kalnirnay Calendar',
        description: 'Complete list of Hindu festivals in 2026 with dates and significance.',
        url: `${SITE_CONFIG.url}/festivals`,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'Festivals', href: '/festivals' }]} />

                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Hindu Festivals 2026
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Complete list of Hindu festivals in Kalnirnay Calendar 2026. 
                        Find dates, significance, and traditions for all major festivals.
                    </p>
                </header>

                {/* Festival List */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {festivals2026.map((festival) => (
                            <Link
                                key={festival.slug}
                                href={`/festival/${festival.slug}`}
                                className="bg-white rounded-lg p-5 border border-gray-100 hover:shadow-lg transition-shadow group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--color-primary)]">
                                        {festival.name}
                                    </h2>
                                    <span className={`text-xs px-2 py-1 rounded ${
                                        festival.category === 'Major' 
                                            ? 'bg-orange-100 text-orange-700'
                                            : festival.category === 'National'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {festival.category}
                                    </span>
                                </div>
                                <p className="text-[var(--color-primary)] font-medium">
                                    {festival.date}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Quick Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        href="/calendar"
                        className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-2">View Calendar 2026</h3>
                        <p className="opacity-90">Browse the complete Kalnirnay Calendar 2026 month by month</p>
                    </Link>
                    <Link
                        href="/shop"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-2">Buy Original Calendar</h3>
                        <p className="opacity-90">Purchase the authentic Kalnirnay Calendar 2026</p>
                    </Link>
                </section>

                {/* Back to Home */}
                <div className="text-center mt-8">
                    <Link 
                        href="/" 
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        ← Back to Kalnirnay Calendar 2026 Home
                    </Link>
                </div>
            </div>
        </>
    );
}

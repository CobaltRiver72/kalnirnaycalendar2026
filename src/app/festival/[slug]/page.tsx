import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getArticleSchema, SITE_CONFIG } from '@/lib/schema';

interface FestivalData {
    name: string;
    nameMarathi: string;
    date: string;
    description: string;
    significance: string;
    traditions: string[];
    category: string;
}

const festivalsData: Record<string, FestivalData> = {
    'makar-sankranti': {
        name: 'Makar Sankranti',
        nameMarathi: 'मकर संक्रांत',
        date: 'January 14, 2026',
        description: 'Makar Sankranti marks the transition of the Sun into Capricorn (Makara) and is celebrated as a harvest festival across India. It signifies the end of winter solstice and the beginning of longer days.',
        significance: 'This festival celebrates the sun\'s northward journey (Uttarayan) and is considered highly auspicious for new beginnings, charity, and spiritual practices.',
        traditions: ['Flying kites', 'Eating til-gul (sesame and jaggery sweets)', 'Taking holy dips in rivers', 'Bonfires and feasts'],
        category: 'Major Festival',
    },
    'holi': {
        name: 'Holi',
        nameMarathi: 'होळी',
        date: 'March 3, 2026',
        description: 'Holi is the festival of colors celebrating the victory of good over evil, the arrival of spring, and the end of winter. It commemorates the divine love of Radha and Krishna.',
        significance: 'Holi represents the triumph of good over evil, as celebrated through the legend of Prahlad and Holika. It marks the beginning of spring and is a time for forgiveness and new beginnings.',
        traditions: ['Playing with colors (gulal)', 'Holika Dahan bonfire', 'Drinking thandai and bhang', 'Family gatherings and feasts'],
        category: 'Major Festival',
    },
    'gudi-padwa': {
        name: 'Gudi Padwa',
        nameMarathi: 'गुढी पाडवा',
        date: 'March 19, 2026',
        description: 'Gudi Padwa marks the beginning of the Hindu New Year in Maharashtra. It celebrates the arrival of spring and is considered an auspicious day for new ventures.',
        significance: 'This day commemorates Lord Brahma\'s creation of the universe and Lord Rama\'s victory over Ravana. It marks the beginning of Chaitra month and the Hindu New Year.',
        traditions: ['Hoisting the Gudi (decorated pole)', 'Eating Shrikhand-Puri', 'Decorating homes with rangoli', 'Wearing new clothes'],
        category: 'Major Festival',
    },
    'ganesh-chaturthi': {
        name: 'Ganesh Chaturthi',
        nameMarathi: 'गणेश चतुर्थी',
        date: 'August 27, 2026',
        description: 'Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom, prosperity, and new beginnings. It is a 10-day festival culminating in Ganesh Visarjan.',
        significance: 'Lord Ganesha is worshipped as the remover of obstacles and the god of beginnings. The festival reinforces faith, devotion, and community bonding.',
        traditions: ['Installing Ganesh idols at home', 'Offering modak sweets', 'Aarti and prayers', 'Ganesh Visarjan procession'],
        category: 'Major Festival',
    },
    'diwali': {
        name: 'Diwali',
        nameMarathi: 'दिवाळी',
        date: 'October 20, 2026',
        description: 'Diwali, the festival of lights, is one of the most significant Hindu festivals celebrating the victory of light over darkness and good over evil. It marks Lord Rama\'s return to Ayodhya.',
        significance: 'Diwali celebrates Lord Rama\'s return after 14 years of exile and his victory over Ravana. It symbolizes the triumph of knowledge over ignorance and hope over despair.',
        traditions: ['Lighting diyas and candles', 'Bursting firecrackers', 'Lakshmi Puja for prosperity', 'Exchanging gifts and sweets'],
        category: 'Major Festival',
    },
    'dussehra': {
        name: 'Dussehra',
        nameMarathi: 'दसरा',
        date: 'October 7, 2026',
        description: 'Dussehra, also known as Vijayadashami, celebrates the victory of Lord Rama over Ravana and Goddess Durga over Mahishasura. It marks the triumph of good over evil.',
        significance: 'This day symbolizes the victory of dharma (righteousness) over adharma (evil). It concludes the nine-day Navratri festival.',
        traditions: ['Burning Ravana effigies', 'Weapon worship (Shastra Puja)', 'Ram Lila performances', 'Exchanging Apta leaves'],
        category: 'Major Festival',
    },
    'navratri': {
        name: 'Navratri',
        nameMarathi: 'नवरात्री',
        date: 'September 28, 2026',
        description: 'Navratri is a nine-night festival dedicated to Goddess Durga and her nine forms. It celebrates the divine feminine energy and the victory of good over evil.',
        significance: 'Each of the nine nights is dedicated to a different form of Goddess Durga, representing different aspects of divine feminine power.',
        traditions: ['Garba and Dandiya dancing', 'Fasting for nine days', 'Ghat installation', 'Worshipping nine forms of Durga'],
        category: 'Major Festival',
    },
    'maha-shivaratri': {
        name: 'Maha Shivaratri',
        nameMarathi: 'महाशिवरात्री',
        date: 'February 15, 2026',
        description: 'Maha Shivaratri is the great night of Lord Shiva, marking the convergence of Shiva and Shakti. It is observed with fasting, night-long vigils, and worship of Shiva Lingam.',
        significance: 'This night is believed to be when Lord Shiva performed the cosmic dance of creation, preservation, and destruction. It is highly auspicious for spiritual practices.',
        traditions: ['Night-long vigil and worship', 'Fasting', 'Abhishekam of Shiva Lingam', 'Chanting Om Namah Shivaya'],
        category: 'Major Festival',
    },
    'ram-navami': {
        name: 'Ram Navami',
        nameMarathi: 'राम नवमी',
        date: 'March 27, 2026',
        description: 'Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Lord Vishnu. It falls on the ninth day of Chaitra Navratri.',
        significance: 'Lord Rama is revered as the ideal man (Maryada Purushottam) and his life exemplifies dharma, virtue, and righteous conduct.',
        traditions: ['Reading Ramayana', 'Temple visits', 'Fasting', 'Decorating Ram idols'],
        category: 'Major Festival',
    },
    'janmashtami': {
        name: 'Janmashtami',
        nameMarathi: 'जन्माष्टमी',
        date: 'August 14, 2026',
        description: 'Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. It is observed with fasting, devotional songs, and midnight celebrations.',
        significance: 'Lord Krishna\'s birth at midnight in a prison cell to Devaki and Vasudeva marks the divine intervention to end evil and establish dharma.',
        traditions: ['Midnight celebrations', 'Dahi Handi (pot breaking)', 'Fasting until midnight', 'Krishna Leela performances'],
        category: 'Major Festival',
    },
    'raksha-bandhan': {
        name: 'Raksha Bandhan',
        nameMarathi: 'रक्षाबंधन',
        date: 'August 8, 2026',
        description: 'Raksha Bandhan celebrates the bond between brothers and sisters. Sisters tie a sacred thread (rakhi) on their brothers\' wrists, symbolizing protection and love.',
        significance: 'The festival reinforces the sacred bond of sibling love, with brothers promising to protect their sisters.',
        traditions: ['Tying rakhi on brother\'s wrist', 'Exchange of gifts', 'Family gatherings', 'Special meals'],
        category: 'Major Festival',
    },
    'hanuman-jayanti': {
        name: 'Hanuman Jayanti',
        nameMarathi: 'हनुमान जयंती',
        date: 'April 14, 2026',
        description: 'Hanuman Jayanti celebrates the birth of Lord Hanuman, the devoted servant of Lord Rama known for his strength, devotion, and selfless service.',
        significance: 'Lord Hanuman represents unwavering devotion, strength, and selfless service. His life teaches courage, humility, and dedication.',
        traditions: ['Visiting Hanuman temples', 'Reciting Hanuman Chalisa', 'Offering sindoor', 'Fasting'],
        category: 'Major Festival',
    },
    'akshaya-tritiya': {
        name: 'Akshaya Tritiya',
        nameMarathi: 'अक्षय तृतीया',
        date: 'May 3, 2026',
        description: 'Akshaya Tritiya is considered one of the most auspicious days in the Hindu calendar. It is believed that any venture started on this day will prosper.',
        significance: 'The word "Akshaya" means imperishable or eternal. Actions performed on this day are believed to bring lasting results and prosperity.',
        traditions: ['Buying gold', 'Starting new ventures', 'Charity and donations', 'Weddings and engagements'],
        category: 'Major Festival',
    },
};

const defaultFestival: FestivalData = {
    name: 'Festival',
    nameMarathi: 'सण',
    date: '2026',
    description: 'This is an important festival in the Hindu calendar celebrated across India with great devotion and enthusiasm.',
    significance: 'This festival holds great spiritual and cultural significance in Hindu tradition.',
    traditions: ['Temple visits', 'Special prayers', 'Family gatherings', 'Traditional foods'],
    category: 'Festival',
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = [
        'makar-sankranti', 'republic-day', 'maha-shivaratri', 'holi', 
        'gudi-padwa', 'ram-navami', 'hanuman-jayanti', 'akshaya-tritiya',
        'buddha-purnima', 'guru-purnima', 'raksha-bandhan', 'independence-day',
        'janmashtami', 'ganesh-chaturthi', 'anant-chaturdashi', 'navratri',
        'dussehra', 'diwali', 'bhai-dooj', 'tulsi-vivah', 'dev-diwali',
        'christmas', 'ekadashi', 'amavasya', 'purnima', 'vasant-panchami',
        'ugadi', 'karva-chauth', 'chhath-puja'
    ];
    return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const festival = festivalsData[slug] || { ...defaultFestival, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') };

    return {
        title: `${festival.name} 2026 - Date & Significance`,
        description: `${festival.name} in 2026 falls on ${festival.date}. ${festival.description.substring(0, 120)}`,
        alternates: {
            canonical: `/festival/${slug}`,
        },
        openGraph: {
            title: `${festival.name} 2026 - Kalnirnay Calendar`,
            description: festival.description.substring(0, 160),
        },
    };
}

export default async function FestivalDetailPage({ params }: Props) {
    const { slug } = await params;
    const festival = festivalsData[slug] || { 
        ...defaultFestival, 
        name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        date: '2026'
    };

    const articleSchema = getArticleSchema({
        title: `${festival.name} 2026 - Kalnirnay Calendar`,
        description: festival.description,
        url: `${SITE_CONFIG.url}/festival/${slug}`,
        datePublished: '2025-01-01',
        dateModified: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <Breadcrumbs 
                    items={[
                        { name: 'Festivals', href: '/festivals' },
                        { name: festival.name, href: `/festival/${slug}` },
                    ]} 
                />

                <article>
                    <header className="text-center mb-10">
                        <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {festival.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2">
                            {festival.name}
                        </h1>
                        <p className="text-xl text-gray-500 mb-4">{festival.nameMarathi}</p>
                        <p className="text-2xl font-semibold text-[var(--color-primary)]">
                            {festival.date}
                        </p>
                        <p className="text-gray-600 mt-2">Kalnirnay Calendar 2026</p>
                    </header>

                    <section className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                            About {festival.name}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {festival.description}
                        </p>
                    </section>

                    <section className="bg-[var(--background)] rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                            Significance
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {festival.significance}
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-8 border border-gray-100 mb-8">
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                            Traditions & Customs
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {festival.traditions.map((tradition, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-[var(--color-primary)]">•</span>
                                    {tradition}
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>

                {/* Quick Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    <Link
                        href="/festivals"
                        className="bg-[var(--background)] rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-200"
                    >
                        <span className="font-medium text-[var(--foreground)]">← All Festivals 2026</span>
                    </Link>
                    <Link
                        href="/calendar-2026"
                        className="bg-[var(--color-primary)] text-white rounded-lg p-4 text-center hover:bg-[var(--color-primary-dark)] transition-colors"
                    >
                        <span className="font-medium">View Calendar 2026 →</span>
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

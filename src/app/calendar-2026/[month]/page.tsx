import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCollectionPageSchema, SITE_CONFIG } from '@/lib/schema';

const months2026Data: Record<string, {
  name: string;
  mr: string;
  days: number;
  festivals: { name: string; date: number; slug: string }[];
}> = {
  january: {
    name: 'January',
    mr: 'जानेवारी',
    days: 31,
    festivals: [
      { name: 'Makar Sankranti', date: 14, slug: 'makar-sankranti' },
      { name: 'Republic Day', date: 26, slug: 'republic-day' },
    ],
  },
  february: {
    name: 'February',
    mr: 'फेब्रुवारी',
    days: 28,
    festivals: [
      { name: 'Maha Shivaratri', date: 15, slug: 'maha-shivaratri' },
    ],
  },
  march: {
    name: 'March',
    mr: 'मार्च',
    days: 31,
    festivals: [
      { name: 'Holi', date: 3, slug: 'holi' },
      { name: 'Gudi Padwa', date: 19, slug: 'gudi-padwa' },
      { name: 'Ram Navami', date: 27, slug: 'ram-navami' },
    ],
  },
  april: {
    name: 'April',
    mr: 'एप्रिल',
    days: 30,
    festivals: [
      { name: 'Hanuman Jayanti', date: 14, slug: 'hanuman-jayanti' },
    ],
  },
  may: {
    name: 'May',
    mr: 'मे',
    days: 31,
    festivals: [
      { name: 'Akshaya Tritiya', date: 3, slug: 'akshaya-tritiya' },
      { name: 'Buddha Purnima', date: 12, slug: 'buddha-purnima' },
    ],
  },
  june: {
    name: 'June',
    mr: 'जून',
    days: 30,
    festivals: [],
  },
  july: {
    name: 'July',
    mr: 'जुलै',
    days: 31,
    festivals: [
      { name: 'Guru Purnima', date: 10, slug: 'guru-purnima' },
    ],
  },
  august: {
    name: 'August',
    mr: 'ऑगस्ट',
    days: 31,
    festivals: [
      { name: 'Raksha Bandhan', date: 8, slug: 'raksha-bandhan' },
      { name: 'Independence Day', date: 15, slug: 'independence-day' },
      { name: 'Janmashtami', date: 14, slug: 'janmashtami' },
      { name: 'Ganesh Chaturthi', date: 27, slug: 'ganesh-chaturthi' },
    ],
  },
  september: {
    name: 'September',
    mr: 'सप्टेंबर',
    days: 30,
    festivals: [
      { name: 'Anant Chaturdashi', date: 6, slug: 'anant-chaturdashi' },
      { name: 'Navratri Begins', date: 28, slug: 'navratri' },
    ],
  },
  october: {
    name: 'October',
    mr: 'ऑक्टोबर',
    days: 31,
    festivals: [
      { name: 'Dussehra', date: 7, slug: 'dussehra' },
      { name: 'Diwali', date: 20, slug: 'diwali' },
      { name: 'Bhai Dooj', date: 22, slug: 'bhai-dooj' },
    ],
  },
  november: {
    name: 'November',
    mr: 'नोव्हेंबर',
    days: 30,
    festivals: [
      { name: 'Tulsi Vivah', date: 8, slug: 'tulsi-vivah' },
      { name: 'Dev Diwali', date: 15, slug: 'dev-diwali' },
    ],
  },
  december: {
    name: 'December',
    mr: 'डिसेंबर',
    days: 31,
    festivals: [
      { name: 'Christmas', date: 25, slug: 'christmas' },
    ],
  },
};

const monthOrder = ['january', 'february', 'march', 'april', 'may', 'june', 
                    'july', 'august', 'september', 'october', 'november', 'december'];

interface Props {
  params: Promise<{ month: string }>;
}

export async function generateStaticParams() {
  return Object.keys(months2026Data).map((month) => ({ month }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { month } = await params;
  const monthData = months2026Data[month.toLowerCase()];

  if (!monthData) {
    return { title: 'Month Not Found' };
  }

  return {
    title: `${monthData.name} 2026 - Kalnirnay Calendar`,
    description: `${monthData.name} 2026 Kalnirnay Calendar with daily Panchang, Tithi, Nakshatra, festivals, and auspicious timings. View the complete Hindu calendar for ${monthData.name} 2026.`,
    alternates: {
      canonical: `/calendar-2026/${month.toLowerCase()}`,
    },
  };
}

export default async function MonthPage({ params }: Props) {
  const { month } = await params;
  const monthSlug = month.toLowerCase();
  const monthData = months2026Data[monthSlug];

  if (!monthData) {
    notFound();
  }

  const currentIndex = monthOrder.indexOf(monthSlug);
  const prevMonth = currentIndex > 0 ? monthOrder[currentIndex - 1] : null;
  const nextMonth = currentIndex < 11 ? monthOrder[currentIndex + 1] : null;

  const collectionSchema = getCollectionPageSchema({
    name: `${monthData.name} 2026 - Kalnirnay Calendar`,
    description: `Complete Panchang for ${monthData.name} 2026 with daily Tithi, Nakshatra, and festivals.`,
    url: `${SITE_CONFIG.url}/calendar-2026/${monthSlug}`,
  });

  // Generate calendar grid
  const firstDay = new Date(2026, monthOrder.indexOf(monthSlug), 1).getDay();
  const daysArray = Array.from({ length: monthData.days }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => null);
  const calendarDays = [...emptyDays, ...daysArray];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { name: 'Calendar 2026', href: '/calendar-2026' },
            { name: `${monthData.name} 2026`, href: `/calendar-2026/${monthSlug}` },
          ]} 
        />

        {/* Month Navigation */}
        <div className="flex justify-between items-center mb-8">
          {prevMonth ? (
            <Link 
              href={`/calendar-2026/${prevMonth}`}
              className="text-[var(--color-primary)] hover:underline font-medium"
            >
              ← {months2026Data[prevMonth].name}
            </Link>
          ) : (
            <span></span>
          )}
          {nextMonth && (
            <Link 
              href={`/calendar-2026/${nextMonth}`}
              className="text-[var(--color-primary)] hover:underline font-medium"
            >
              {months2026Data[nextMonth].name} →
            </Link>
          )}
        </div>

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2">
            {monthData.name} 2026
          </h1>
          <p className="text-xl text-gray-500">{monthData.mr} २०२६</p>
          <p className="text-gray-600 mt-2">Kalnirnay Calendar 2026</p>
        </header>

        {/* Calendar Grid */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="grid grid-cols-7 bg-[var(--color-primary)] text-white">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-3 text-center font-semibold text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const festival = day ? monthData.festivals.find(f => f.date === day) : null;
              return (
                <div
                  key={index}
                  className={`min-h-[80px] p-2 border-b border-r border-gray-100 ${
                    day ? 'hover:bg-gray-50' : 'bg-gray-50'
                  } ${index % 7 === 0 ? 'text-red-600' : ''}`}
                >
                  {day && (
                    <>
                      <span className="font-semibold text-lg">{day}</span>
                      {festival && (
                        <Link 
                          href={`/festival/${festival.slug}`}
                          className="block text-xs mt-1 text-[var(--color-primary)] hover:underline truncate"
                        >
                          {festival.name}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Festivals this Month */}
        {monthData.festivals.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
              Festivals in {monthData.name} 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monthData.festivals.map((festival) => (
                <Link
                  key={festival.slug}
                  href={`/festival/${festival.slug}`}
                  className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow flex justify-between items-center"
                >
                  <span className="font-medium text-[var(--foreground)]">{festival.name}</span>
                  <span className="text-sm text-[var(--color-primary)]">
                    {monthData.name} {festival.date}, 2026
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Quick Links */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/calendar-2026"
            className="bg-[var(--background)] rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-[var(--foreground)]">View All Months</span>
          </Link>
          <Link
            href="/festivals"
            className="bg-[var(--background)] rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-[var(--foreground)]">All Festivals 2026</span>
          </Link>
          <Link
            href="/shop"
            className="bg-[var(--background)] rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-[var(--foreground)]">Buy Original Calendar</span>
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

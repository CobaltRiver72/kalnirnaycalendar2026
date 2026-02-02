import { Metadata } from 'next';
import { getAllFestivals } from '@/lib/data';
import FestivalsListClient from './FestivalsListClient';

export const metadata: Metadata = {
    title: 'सणांची यादी | Festival List - Kalnirnay Calendar 2026',
    description: 'Complete list of Hindu festivals with dates, traditions, and significance. Diwali, Holi, Ganesh Chaturthi, Navratri and more.',
    openGraph: {
        title: 'Hindu Festivals - Kalnirnay Calendar 2026',
        description: 'Explore Hindu festivals with dates, traditions, and significance in Marathi and English.',
    },
};

export default function FestivalsPage() {
    const festivals = getAllFestivals();
    return <FestivalsListClient festivals={festivals} />;
}

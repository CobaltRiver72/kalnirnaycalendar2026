'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, BilingualText } from './types';

// Translation messages
const messages = {
    mr: {
        siteName: 'हिंदू पंचांग',
        siteTagline: 'दैनिक पंचांग आणि सण',
        today: 'आज',
        calendar: 'कॅलेंडर',
        festivals: 'सण',
        tithi: 'तिथी',
        paksha: 'पक्ष',
        nakshatra: 'नक्षत्र',
        yoga: 'योग',
        karana: 'करण',
        sunrise: 'सूर्योदय',
        sunset: 'सूर्यास्त',
        moonrise: 'चंद्रोदय',
        auspicious: 'शुभ',
        inauspicious: 'अशुभ',
        festival: 'सण',
        vrat: 'व्रत',
        previousMonth: 'मागील महिना',
        nextMonth: 'पुढील महिना',
        previousDay: 'मागील दिवस',
        nextDay: 'पुढील दिवस',
        viewDetails: 'तपशील पहा',
        upcomingDates: 'आगामी तारखा',
        traditions: 'परंपरा',
        significance: 'महत्त्व',
        noFestival: 'आज कोणताही सण नाही',
        city: 'मुंबई',
        shareOnWhatsApp: 'व्हॉट्सॲप वर शेअर करा',
        shareOnFacebook: 'फेसबुक वर शेअर करा',
        print: 'प्रिंट करा',
    },
    en: {
        siteName: 'Hindu Panchang',
        siteTagline: 'Daily Panchang & Festivals',
        today: 'Today',
        calendar: 'Calendar',
        festivals: 'Festivals',
        tithi: 'Tithi',
        paksha: 'Paksha',
        nakshatra: 'Nakshatra',
        yoga: 'Yoga',
        karana: 'Karana',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        moonrise: 'Moonrise',
        auspicious: 'Auspicious',
        inauspicious: 'Inauspicious',
        festival: 'Festival',
        vrat: 'Vrat',
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        previousDay: 'Previous Day',
        nextDay: 'Next Day',
        viewDetails: 'View Details',
        upcomingDates: 'Upcoming Dates',
        traditions: 'Traditions',
        significance: 'Significance',
        noFestival: 'No festival today',
        city: 'Mumbai',
        shareOnWhatsApp: 'Share on WhatsApp',
        shareOnFacebook: 'Share on Facebook',
        print: 'Print',
    }
};

type MessageKey = keyof typeof messages['en'];

interface I18nContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: MessageKey) => string;
    getText: (text: BilingualText) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>('mr');

    // Load language preference from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('hindu-calendar-lang') as Language;
        if (savedLang && (savedLang === 'mr' || savedLang === 'en')) {
            setLang(savedLang);
        }
    }, []);

    // Save language preference to localStorage
    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('hindu-calendar-lang', newLang);
    };

    const t = (key: MessageKey): string => {
        return messages[lang][key] || messages['en'][key] || key;
    };

    const getText = (text: BilingualText): string => {
        return text[lang] || text['en'] || '';
    };

    return (
        <I18nContext.Provider value={{ lang, setLang: handleSetLang, t, getText }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

// Server-side helper (for static generation)
export function getServerText(text: BilingualText, lang: Language = 'mr'): string {
    return text[lang] || text['en'] || '';
}

export function getServerTranslation(key: MessageKey, lang: Language = 'mr'): string {
    return messages[lang][key] || messages['en'][key] || key;
}

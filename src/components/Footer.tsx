'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
    const { lang } = useI18n();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background-dark)] text-[var(--foreground-light)] py-8 mt-auto no-print">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {lang === 'mr' ? 'कालनिर्णय २०२६' : 'Kalnirnay Calendar 2026'}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {lang === 'mr'
                                ? 'दररोजचे पंचांग, सण, आणि शुभ मुहूर्त मराठी आणि इंग्रजी मध्ये.'
                                : 'Daily Panchang, festivals, and auspicious timings in Marathi and English.'}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {lang === 'mr' ? 'जलद दुवे' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'आजचे पंचांग' : "Today's Panchang"}
                                </Link>
                            </li>
                            <li>
                                <Link href="/calendar/2025/01" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'मासिक कॅलेंडर' : 'Monthly Calendar'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/festivals" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'सणांची यादी' : 'Festival List'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Location Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {lang === 'mr' ? 'स्थान' : 'Location'}
                        </h3>
                        <p className="text-sm text-gray-300">
                            {lang === 'mr'
                                ? 'सूर्योदय/सूर्यास्त वेळा मुंबई, महाराष्ट्र साठी आहेत.'
                                : 'Sunrise/Sunset times are for Mumbai, Maharashtra.'}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{lang === 'mr' ? 'मुंबई, महाराष्ट्र' : 'Mumbai, Maharashtra'}</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>
                        © {currentYear} {lang === 'mr' ? 'कालनिर्णय २०२६' : 'Kalnirnay Calendar 2026'}.
                        {lang === 'mr' ? ' सर्व हक्क राखीव.' : ' All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}

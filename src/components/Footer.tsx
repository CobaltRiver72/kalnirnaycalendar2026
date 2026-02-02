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
                                <Link href="/calendar-2026" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'कॅलेंडर २०२६' : 'Calendar 2026'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/festivals" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'सणांची यादी' : 'Festival List'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'खरेदी करा' : 'Buy Calendar'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {lang === 'mr' ? 'माहिती' : 'Information'}
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'संपर्क' : 'Contact'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'गोपनीयता धोरण' : 'Privacy Policy'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                                    {lang === 'mr' ? 'अटी व शर्ती' : 'Terms & Conditions'}
                                </Link>
                            </li>
                        </ul>
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

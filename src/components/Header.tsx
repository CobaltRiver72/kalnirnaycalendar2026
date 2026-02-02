'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

export default function Header() {
    const { t, lang } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: { mr: 'मुख्यपृष्ठ', en: 'Home' } },
        { href: '/calendar-2026', label: { mr: 'कॅलेंडर २०२६', en: 'Calendar 2026' } },
        { href: '/festivals', label: { mr: 'सण', en: 'Festivals' } },
        { href: '/shop', label: { mr: 'खरेदी', en: 'Shop' } },
    ];

    return (
        <header className="bg-white border-b border-[var(--border-color)] sticky top-0 z-50 no-print">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                            <span className="text-white text-xl">🙏</span>
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg leading-tight text-[var(--foreground)]">
                                {lang === 'mr' ? 'कालनिर्णय २०२६' : 'Kalnirnay Calendar 2026'}
                            </h1>
                            <p className="text-xs text-[var(--foreground-muted)]">
                                {lang === 'mr' ? 'दैनिक पंचांग' : 'Daily Panchang'}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors font-medium"
                            >
                                {link.label[lang]}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <LanguageToggle />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-[var(--foreground)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[var(--border-color)] animate-fadeIn">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-3 text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label[lang]}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}

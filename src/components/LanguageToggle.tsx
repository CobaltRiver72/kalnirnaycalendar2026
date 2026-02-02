'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageToggle() {
    const { lang, setLang } = useI18n();

    return (
        <div className="lang-toggle">
            <button
                onClick={() => setLang('mr')}
                className={`${lang === 'mr' ? 'active' : ''}`}
                aria-label="Switch to Marathi"
            >
                मराठी
            </button>
            <button
                onClick={() => setLang('en')}
                className={`${lang === 'en' ? 'active' : ''}`}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}

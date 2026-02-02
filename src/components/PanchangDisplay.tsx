'use client';

import { PanchangData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface PanchangDisplayProps {
    panchang: PanchangData;
}

export default function PanchangDisplay({ panchang }: PanchangDisplayProps) {
    const { getText, lang } = useI18n();

    const rows = [
        { label: { mr: 'तिथी', en: 'Tithi' }, value: panchang.tithi },
        { label: { mr: 'पक्ष', en: 'Paksha' }, value: panchang.paksha },
        { label: { mr: 'नक्षत्र', en: 'Nakshatra' }, value: panchang.nakshatra },
        { label: { mr: 'योग', en: 'Yoga' }, value: panchang.yoga },
        { label: { mr: 'करण', en: 'Karana' }, value: panchang.karana },
    ];

    return (
        <div className="card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white p-4">
                <h2 className="text-xl font-semibold">
                    {lang === 'mr' ? 'पंचांग' : 'Panchang Details'}
                </h2>
            </div>

            {/* Panchang Table */}
            <table className="panchang-table">
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={idx}>
                            <th className="w-1/3">{getText(row.label)}</th>
                            <td className="font-medium">{getText(row.value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Sun Times */}
            <div className="sun-times m-4">
                <div className="flex-1 flex items-center gap-3">
                    <span className="text-2xl">🌅</span>
                    <div>
                        <p className="text-xs text-[var(--foreground-muted)]">
                            {lang === 'mr' ? 'सूर्योदय' : 'Sunrise'}
                        </p>
                        <p className="font-semibold text-lg">{panchang.sunrise}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-center gap-3">
                    <span className="text-2xl">🌇</span>
                    <div>
                        <p className="text-xs text-[var(--foreground-muted)]">
                            {lang === 'mr' ? 'सूर्यास्त' : 'Sunset'}
                        </p>
                        <p className="font-semibold text-lg">{panchang.sunset}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-center gap-3">
                    <span className="text-2xl">🌙</span>
                    <div>
                        <p className="text-xs text-[var(--foreground-muted)]">
                            {lang === 'mr' ? 'चंद्रोदय' : 'Moonrise'}
                        </p>
                        <p className="font-semibold text-lg">{panchang.moonrise}</p>
                    </div>
                </div>
            </div>

            {/* Auspicious/Inauspicious Notes */}
            {(panchang.auspicious || panchang.inauspicious) && (
                <div className="p-4 border-t border-[var(--border-color)]">
                    {panchang.auspicious && (
                        <div className="flex items-center gap-2 text-[var(--color-auspicious)]">
                            <span className="text-lg">✓</span>
                            <span className="font-medium">{getText(panchang.auspicious)}</span>
                        </div>
                    )}
                    {panchang.inauspicious && (
                        <div className="flex items-center gap-2 text-[var(--color-inauspicious)] mt-2">
                            <span className="text-lg">✗</span>
                            <span className="font-medium">{getText(panchang.inauspicious)}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

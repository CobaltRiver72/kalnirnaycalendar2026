'use client';

import { Festival } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface FestivalBadgeProps {
    festival: Festival;
    size?: 'sm' | 'md';
}

export default function FestivalBadge({ festival, size = 'sm' }: FestivalBadgeProps) {
    const { getText } = useI18n();

    const sizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
    };

    const typeClasses = {
        major: 'badge-major',
        minor: 'badge-minor',
        vrat: 'badge-vrat',
    };

    return (
        <span className={`badge ${typeClasses[festival.type]} ${sizeClasses[size]}`}>
            {getText(festival.name)}
        </span>
    );
}

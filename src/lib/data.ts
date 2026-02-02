import { PanchangData, FestivalDetail, MonthData, Language } from './types';

// Import all panchang data
import dec2024 from '@/data/panchang/2024-12.json';
import jan2025 from '@/data/panchang/2025-01.json';
import feb2025 from '@/data/panchang/2025-02.json';
import mar2025 from '@/data/panchang/2025-03.json';
import apr2025 from '@/data/panchang/2025-04.json';
import may2025 from '@/data/panchang/2025-05.json';
import jun2025 from '@/data/panchang/2025-06.json';
import jul2025 from '@/data/panchang/2025-07.json';
import aug2025 from '@/data/panchang/2025-08.json';
import sep2025 from '@/data/panchang/2025-09.json';
import oct2025 from '@/data/panchang/2025-10.json';
import nov2025 from '@/data/panchang/2025-11.json';
import dec2025 from '@/data/panchang/2025-12.json';
import festivals from '@/data/festivals.json';

// Map of all panchang data by month key
const panchangDataMap: Record<string, PanchangData[]> = {
    '2024-12': dec2024 as PanchangData[],
    '2025-01': jan2025 as PanchangData[],
    '2025-02': feb2025 as PanchangData[],
    '2025-03': mar2025 as PanchangData[],
    '2025-04': apr2025 as PanchangData[],
    '2025-05': may2025 as PanchangData[],
    '2025-06': jun2025 as PanchangData[],
    '2025-07': jul2025 as PanchangData[],
    '2025-08': aug2025 as PanchangData[],
    '2025-09': sep2025 as PanchangData[],
    '2025-10': oct2025 as PanchangData[],
    '2025-11': nov2025 as PanchangData[],
    '2025-12': dec2025 as PanchangData[],
};

/**
 * Get panchang data for a specific date
 */
export function getPanchangByDate(dateStr: string): PanchangData | null {
    const [year, month] = dateStr.split('-');
    const monthKey = `${year}-${month}`;
    const monthData = panchangDataMap[monthKey];

    if (!monthData) return null;

    return monthData.find(d => d.date === dateStr) || null;
}

/**
 * Get today's panchang data
 */
export function getTodayPanchang(): PanchangData | null {
    const today = new Date();
    const dateStr = formatDateString(today);
    return getPanchangByDate(dateStr);
}

/**
 * Get panchang data for an entire month
 */
export function getMonthPanchang(year: number, month: number): PanchangData[] {
    const monthKey = `${year}-${month.toString().padStart(2, '0')}`;
    return panchangDataMap[monthKey] || [];
}

/**
 * Get all available months
 */
export function getAvailableMonths(): { year: number; month: number }[] {
    return Object.keys(panchangDataMap).map(key => {
        const [year, month] = key.split('-');
        return { year: parseInt(year), month: parseInt(month) };
    });
}

/**
 * Get festival details by slug
 */
export function getFestivalBySlug(slug: string): FestivalDetail | null {
    return (festivals as FestivalDetail[]).find(f => f.slug === slug) || null;
}

/**
 * Get all festivals
 */
export function getAllFestivals(): FestivalDetail[] {
    return festivals as FestivalDetail[];
}

/**
 * Format date as YYYY-MM-DD string
 */
export function formatDateString(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Parse YYYY-MM-DD string to Date
 */
export function parseDateString(dateStr: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
}

/**
 * Get month name in specified language
 */
export function getMonthName(month: number, lang: Language): string {
    const monthNames: Record<number, { mr: string; en: string }> = {
        1: { mr: 'जानेवारी', en: 'January' },
        2: { mr: 'फेब्रुवारी', en: 'February' },
        3: { mr: 'मार्च', en: 'March' },
        4: { mr: 'एप्रिल', en: 'April' },
        5: { mr: 'मे', en: 'May' },
        6: { mr: 'जून', en: 'June' },
        7: { mr: 'जुलै', en: 'July' },
        8: { mr: 'ऑगस्ट', en: 'August' },
        9: { mr: 'सप्टेंबर', en: 'September' },
        10: { mr: 'ऑक्टोबर', en: 'October' },
        11: { mr: 'नोव्हेंबर', en: 'November' },
        12: { mr: 'डिसेंबर', en: 'December' },
    };
    return monthNames[month]?.[lang] || '';
}

/**
 * Get weekday name in specified language
 */
export function getWeekdayName(dayIndex: number, lang: Language): string {
    const weekdays: Record<number, { mr: string; en: string }> = {
        0: { mr: 'रविवार', en: 'Sunday' },
        1: { mr: 'सोमवार', en: 'Monday' },
        2: { mr: 'मंगळवार', en: 'Tuesday' },
        3: { mr: 'बुधवार', en: 'Wednesday' },
        4: { mr: 'गुरुवार', en: 'Thursday' },
        5: { mr: 'शुक्रवार', en: 'Friday' },
        6: { mr: 'शनिवार', en: 'Saturday' },
    };
    return weekdays[dayIndex]?.[lang] || '';
}

/**
 * Check if a date has any festivals
 */
export function hasFestival(panchang: PanchangData): boolean {
    return panchang.festivals.length > 0;
}

/**
 * Check if a date has any vrat
 */
export function hasVrat(panchang: PanchangData): boolean {
    return panchang.vrat.length > 0;
}

/**
 * Get previous date string
 */
export function getPreviousDate(dateStr: string): string {
    const date = parseDateString(dateStr);
    date.setDate(date.getDate() - 1);
    return formatDateString(date);
}

/**
 * Get next date string
 */
export function getNextDate(dateStr: string): string {
    const date = parseDateString(dateStr);
    date.setDate(date.getDate() + 1);
    return formatDateString(date);
}

/**
 * Get all dates that need to be statically generated
 */
export function getAllDatePaths(): string[] {
    const allDates: string[] = [];
    Object.values(panchangDataMap).forEach(monthData => {
        monthData.forEach(day => {
            allDates.push(day.date);
        });
    });
    return allDates;
}

/**
 * Get all month paths for static generation
 */
export function getAllMonthPaths(): { year: string; month: string }[] {
    return Object.keys(panchangDataMap).map(key => {
        const [year, month] = key.split('-');
        return { year, month };
    });
}

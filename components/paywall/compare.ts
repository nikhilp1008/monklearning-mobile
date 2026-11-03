import type { TierLimits } from '@/lib/pass';

/**
 * PRO AND MAX SIDE BY SIDE (the table on the plans page). A number reads
 * against the other: 45 classes means little until the column beside it says 60.
 * Every figure comes from the server's own table (`usePlan`), so the page and
 * the limit a student meets can never disagree.
 *
 * THE UNIT IS IN THE ROW'S LABEL, NOT REPEATED IN EVERY CELL. "45 a month, 25 a
 * day, 100 a day" read like a stutter; "Live classes a month: 45" does not.
 */
export type CompareRow = { label: string; pro: string; max: string };

export function compareRows(pro: TierLimits, max: TierLimits): CompareRow[] {
  return [
    { label: classesLabel(pro), pro: `${pro.classes}`, max: `${max.classes}` },
    { label: 'Snapped questions a day', pro: `${pro.snap_questions}`, max: `${max.snap_questions}` },
    { label: 'Practice questions a day', pro: `${pro.practice_questions}`, max: `${max.practice_questions}` },
    { label: 'Follow-ups', pro: 'Unlimited', max: 'Unlimited' },
  ];
}

/** "Live classes a month": the window both plans share (they are both monthly). */
function classesLabel(t: TierLimits): string {
  return t.window_days >= 30 ? 'Live classes a month' : t.window_days === 7 ? 'Live classes a week' : 'Live classes a day';
}

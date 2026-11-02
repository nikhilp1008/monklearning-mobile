import type { TierLimits } from '@/lib/pass';

/**
 * FREE, PRO AND MAX SIDE BY SIDE (the table on the plans page). A number reads
 * against the others: 45 classes means little until the column beside it says
 * none, and the column beside that says 60. Every figure comes from the server's
 * own table (`usePlan`), so the page and the limit a student meets can never
 * disagree.
 */
type CompareRow = { label: string; free: string; pro: string; max: string };

export function compareRows(
  free: { snap_questions: number; practice_questions: number; followups: number; mocks: number },
  pro: TierLimits,
  max: TierLimits
): CompareRow[] {
  return [
    { label: 'Live classes', free: '—', pro: `${pro.classes} a month`, max: `${max.classes} a month` },
    { label: 'Snapped questions', free: `${free.snap_questions} a day`, pro: `${pro.snap_questions} a day`, max: `${max.snap_questions} a day` },
    { label: 'Practice questions', free: `${free.practice_questions} a day`, pro: `${pro.practice_questions} a day`, max: `${max.practice_questions} a day` },
    { label: 'Follow-ups', free: `${free.followups} a day`, pro: 'Unlimited', max: 'Unlimited' },
    { label: 'Mock exams', free: free.mocks === 1 ? '1 only' : `${free.mocks}`, pro: 'All', max: 'All' },
  ];
}

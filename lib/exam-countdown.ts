import type { ExamKey } from '@/constants/onboarding';
import type { ExamYear } from '@/lib/onboarding-answers';

/**
 * WHEN THE EXAM IS, AS BEST WE KNOW BEFORE NTA SAYS.
 *
 * NTA announces the dates each autumn, so until then these are the usual
 * windows: JEE Main Session 1 in the last week of January, NEET UG on the
 * first Sunday of May. The screens say "expected" and promise to update; when
 * the real dates are out, change them here.
 *
 * A student writing both is counted to JEE: it comes first.
 */
const DATES: Record<'jee' | 'neet', Record<'2027' | '2028', string>> = {
  jee: { '2027': '2027-01-22', '2028': '2028-01-21' },
  neet: { '2027': '2027-05-02', '2028': '2028-05-07' },
};

export interface ExamCountdown {
  /** "JEE Main 2027" */
  label: string;
  /** The line under the number. */
  note: string;
  date: Date;
  days: number;
  /** Saturdays from today until the exam. */
  weekends: number;
}

const DAY = 24 * 60 * 60 * 1000;

export function examCountdown(exam: ExamKey, year: ExamYear | undefined, now = new Date()): ExamCountdown | null {
  if (!year || year === 'unsure') return null;
  const which = exam === 'neet' ? 'neet' : 'jee';
  const date = new Date(`${DATES[which][year]}T09:00:00+05:30`);
  const days = Math.max(0, Math.ceil((date.getTime() - now.getTime()) / DAY));
  let weekends = 0;
  for (let t = now.getTime(); t < date.getTime(); t += DAY) {
    if (new Date(t).getDay() === 6) weekends += 1;
  }
  return which === 'jee'
    ? {
        label: `JEE Main ${year}`,
        note: 'Session 1, expected late January. We update it when NTA confirms.',
        date,
        days,
        weekends,
      }
    : {
        label: `NEET UG ${year}`,
        note: 'Expected early May. We update it when NTA confirms.',
        date,
        days,
        weekends,
      };
}

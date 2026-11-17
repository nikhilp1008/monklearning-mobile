import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-08/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-08/extras-a-e';
import { TOPICS as T_TOPICS_01_03 } from './math-12-08/topics-01-03';

/**
 * Application of Integrals. Mathematics, Class 12, Chapter 8: pp. 530–579 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    Subtopics 01–03 (pp. 530–559).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 560–573).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 573–579), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_EXTRAS_A_E, ...T_EXTRA_P];

export const ch12IntegralsApplications: Chapter = {
  chapter: '08',
  title: 'Application of Integrals',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12IntegralsApplications;

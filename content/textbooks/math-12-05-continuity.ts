import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-05/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-05/extras-a-e';
import { TOPICS as T_TOPICS_01_02 } from './math-12-05/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-12-05/topics-03-05';
import { TOPICS as T_TOPICS_06_07 } from './math-12-05/topics-06-07';

/**
 * Continuity and Differentiability. Mathematics, Class 12, Chapter 5: pp. 306–382 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–07    the chapter's numbered parts 1–7 (pp. 307–353).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 354–371).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 371–382), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_TOPICS_06_07, ...T_EXTRAS_A_E, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Continuity & Differentiability: The Foundations', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12Continuity: Chapter = {
  chapter: '05',
  title: 'Continuity and Differentiability',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12Continuity;

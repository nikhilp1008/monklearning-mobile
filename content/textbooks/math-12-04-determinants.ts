import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-04/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-04/extras-a-e';
import { TOPICS as T_TOPICS_01_03 } from './math-12-04/topics-01-03';
import { TOPICS as T_TOPICS_04_06 } from './math-12-04/topics-04-06';

/**
 * Determinants. Mathematics, Class 12, Chapter 4: pp. 243–305 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–06    the chapter's Parts 1–6 (pp. 244–281).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 282–296).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 297–305), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_TOPICS_04_06, ...T_EXTRAS_A_E, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Determinant: Meaning, Definition & Expansion', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12Determinants: Chapter = {
  chapter: '04',
  title: 'Determinants',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12Determinants;

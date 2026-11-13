import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-02/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-02/extras-a-e';
import { TOPICS as T_TOPICS_01_02 } from './math-12-02/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-12-02/topics-03-04';

/**
 * Inverse Trigonometric Functions. Mathematics, Class 12, Chapter 2: pp. 126–184 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–04    the chapter's four numbered parts (pp. 127–164).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 165–177).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 178–184), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_EXTRAS_A_E, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Principal Value Branches', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12InverseTrig: Chapter = {
  chapter: '02',
  title: 'Inverse Trigonometric Functions',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12InverseTrig;

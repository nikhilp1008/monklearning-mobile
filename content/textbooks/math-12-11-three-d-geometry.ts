import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-11/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-11/extras-a-e';
import { TOPICS as T_TOPICS_00_01 } from './math-12-11/topics-00-01';
import { TOPICS as T_TOPICS_02_03 } from './math-12-11/topics-02-03';
import { TOPICS as T_TOPICS_04_05 } from './math-12-11/topics-04-05';

/**
 * Three Dimensional Geometry. Mathematics, Class 12, Chapter 11: pp. 686–762 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 00–05    the book’s Parts 0–5 (pp. 686–742).
 *   Additional A–E  the Additional Topics part’s Addenda A–E (pp. 743–753).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 753–762), with the book’s letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_00_01, ...T_TOPICS_02_03, ...T_TOPICS_04_05, ...T_EXTRAS_A_E, ...T_EXTRA_P];

export const ch12ThreeDGeometry: Chapter = {
  chapter: '11',
  title: 'Three Dimensional Geometry',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12ThreeDGeometry;

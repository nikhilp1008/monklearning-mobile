import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-10/extra-p';
import { TOPICS as T_EXTRAS_A_D } from './math-12-10/extras-a-d';
import { TOPICS as T_TOPICS_01_03 } from './math-12-10/topics-01-03';

/**
 * Vector Algebra. Mathematics, Class 12, Chapter 10: pp. 638–684 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    Parts 1–3 (pp. 638–663).
 *   Additional A–D  the Additional Topics part's Addenda A–D (pp. 664–678).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 678–684), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_EXTRAS_A_D, ...T_EXTRA_P];

export const ch12VectorAlgebra: Chapter = {
  chapter: '10',
  title: 'Vector Algebra',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12VectorAlgebra;

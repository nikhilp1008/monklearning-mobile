import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-09/extra-p';
import { TOPICS as T_EXTRAS_A_D } from './math-12-09/extras-a-d';
import { TOPICS as T_TOPICS_01_02 } from './math-12-09/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-12-09/topics-03-05';

/**
 * Differential Equations. Mathematics, Class 12, Chapter 9: pp. 581–637 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–05    Parts 1–5 (pp. 581–619).
 *   Additional A–D  the Additional Topics part's Addenda A–D (pp. 620–630).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 630–637), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_EXTRAS_A_D, ...T_EXTRA_P];

export const ch12DifferentialEquations: Chapter = {
  chapter: '09',
  title: 'Differential Equations',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12DifferentialEquations;

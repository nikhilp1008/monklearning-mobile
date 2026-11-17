import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-13/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-13/extras-a-e';
import { TOPICS as T_TOPICS_01_02 } from './math-12-13/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-12-13/topics-03-04';

/**
 * Probability. Mathematics, Class 12, Chapter 13: pp. 814–875 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–04    the book’s Parts 1–4 (pp. 814–848).
 *   Additional A–E  the Additional Topics part’s Addenda A–E (pp. 849–865).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 866–875), with the book’s letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_EXTRAS_A_E, ...T_EXTRA_P];

export const ch12Probability: Chapter = {
  chapter: '13',
  title: 'Probability',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12Probability;

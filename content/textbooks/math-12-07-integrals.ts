import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-07/extra-p';
import { TOPICS as T_EXTRAS_A_F } from './math-12-07/extras-a-f';
import { TOPICS as T_TOPICS_01_03 } from './math-12-07/topics-01-03';
import { TOPICS as T_TOPICS_04_06 } from './math-12-07/topics-04-06';
import { TOPICS as T_TOPICS_07_09 } from './math-12-07/topics-07-09';

/**
 * Integrals. Mathematics, Class 12, Chapter 7: pp. 444–529 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–09    the book's nine subtopics in the order it prints them (01, 04, 05, 06, 07,
 *                   08, 02, 09, 03), numbered by position (pp. 448–504).
 *   Additional A–F  the Additional Topics part's Addenda A–F (pp. 505–522).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 522–529), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_TOPICS_04_06, ...T_TOPICS_07_09, ...T_EXTRAS_A_F, ...T_EXTRA_P];

export const ch12Integrals: Chapter = {
  chapter: '07',
  title: 'Integrals',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12Integrals;

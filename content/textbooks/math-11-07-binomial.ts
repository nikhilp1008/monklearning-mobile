import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './math-11-07/extras-a-c';
import { TOPICS as T_EXTRAS_D_G } from './math-11-07/extras-d-g';
import { TOPICS as T_TOPICS_01_02 } from './math-11-07/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-11-07/topics-03-05';
import { TOPICS as T_TOPICS_06_08 } from './math-11-07/topics-06-08';

/**
 * Binomial Theorem. Mathematics, Class 11, Chapter 7: pp. 580–674 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–07    the main chapter's Subtopics 01–07 (pp. 581–623).
 *   Topic 08        the supplement's new Subtopic 08 (pp. 645–657).
 *   Additional A–G  the supplement's Addenda A–C (pp. 624–644) and the
 *                   "Additional Topics" part's Addenda D–G (pp. 658–674),
 *                   with the book's letters (decision 29).
 *
 * Every fraction is drawn stacked (<frac>), every n over r as a stacked binomial (<binom>),
 * components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_TOPICS_06_08, ...T_EXTRAS_A_C, ...T_EXTRAS_D_G];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Binomial Expansion and Pascal’s Triangle', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch07Binomial: Chapter = {
  chapter: '07',
  title: 'Binomial Theorem',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch07Binomial;

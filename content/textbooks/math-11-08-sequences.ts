import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_G } from './math-11-08/extras-a-g';
import { TOPICS as T_TOPICS_01_02 } from './math-11-08/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-11-08/topics-03-04';
import { TOPICS as T_TOPICS_05_07 } from './math-11-08/topics-05-07';
import { TOPICS as T_TOPICS_08_09 } from './math-11-08/topics-08-09';

/**
 * Sequences and Series. Mathematics, Class 11, Chapter 8: pp. 675–788 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–08    the main chapter's Units 1–8 (pp. 677–741).
 *   Topic 09        the supplement's Unit 9 (pp. 742–757).
 *   Additional A–G  the supplement's Addenda A–E (pp. 758–771) and the
 *                   "Additional Topics" part's Addenda F–G (pp. 772–788),
 *                   with the book's letters (decision 29).
 *
 * Every fraction is drawn stacked (<frac>), every n over r as a stacked binomial (<binom>),
 * components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_TOPICS_05_07, ...T_TOPICS_08_09, ...T_EXTRAS_A_G];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Foundations: Sequences and Series', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch08Sequences: Chapter = {
  chapter: '08',
  title: 'Sequences and Series',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch08Sequences;

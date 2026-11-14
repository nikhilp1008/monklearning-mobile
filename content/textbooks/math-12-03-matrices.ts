import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-03/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-03/extras-a-e';
import { TOPICS as T_TOPICS_00_01 } from './math-12-03/topics-00-01';
import { TOPICS as T_TOPICS_02_04 } from './math-12-03/topics-02-04';

/**
 * Matrices. Mathematics, Class 12, Chapter 3: pp. 185–242 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topic 00        the chapter's Subtopic 00, Foundations & Representation (pp. 186–189), with the book's number.
 *   Topics 01–04    Subtopics 01–04 (pp. 190–221).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 222–235).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 236–242), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_00_01, ...T_TOPICS_02_04, ...T_EXTRAS_A_E, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '00', title: 'Foundations & Representation', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12Matrices: Chapter = {
  chapter: '03',
  title: 'Matrices',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12Matrices;

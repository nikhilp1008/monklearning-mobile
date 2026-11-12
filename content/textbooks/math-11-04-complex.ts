import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_TOPIC_07 } from './math-11-04/topic-07';
import { TOPICS as T_TOPICS_01_02 } from './math-11-04/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-11-04/topics-03-04';
import { TOPICS as T_TOPICS_05_06 } from './math-11-04/topics-05-06';
import { TOPICS as T_TOPICS_08_09 } from './math-11-04/topics-08-09';

/**
 * Complex Numbers and Quadratic Equations. Mathematics, Class 11, Chapter 4:
 * pp. 337–413 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word. Keyed by the catalogue's title, "Complex Numbers".
 *
 *   Topics 01–06    the main chapter's Subtopics 01–06 (pp. 337–378).
 *   Topic 07        the supplement's Subtopic 07 (pp. 379–396).
 *   Topics 08–09    "Chapter 4 — Additional Topics", its Subtopics 08–09 (pp. 397–413),
 *                   numbered as the book numbers them (as Chapter 3, decision 12).
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_TOPICS_05_06, ...T_TOPIC_07, ...T_TOPICS_08_09];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Algebra of Complex Numbers', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch04Complex: Chapter = {
  chapter: '04',
  title: 'Complex Numbers and Quadratic Equations',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch04Complex;

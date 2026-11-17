import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_A } from './math-11-00/extra-a';
import { TOPICS as T_TOPIC_01 } from './math-11-00/topic-01';

/**
 * Basic Mathematics: Indices, Surds and Logarithms. Mathematics, Class 11,
 * Chapter 0: pp. 10 to 24 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word.
 *
 *   Topic 01      the chapter's Sections 1 to 11 (pp. 10 to 22), as its parts.
 *   Additional A  the book's Addendum P (pp. 23 to 24).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPIC_01, ...T_EXTRA_A];

export const ch0BasicMathematics: Chapter = {
  chapter: '0',
  title: 'Basic Mathematics',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS,
};

export default ch0BasicMathematics;

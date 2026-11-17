import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_E } from './math-12-12/extras-a-e';
import { TOPICS as T_TOPIC_03 } from './math-12-12/topic-03';
import { TOPICS as T_TOPICS_01_02 } from './math-12-12/topics-01-02';

/**
 * Linear Programming. Mathematics, Class 12, Chapter 12: pp. 764–812 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    the book’s Parts 1–3 (pp. 764–798).
 *   Additional A–E  the Additional Topics part’s Addenda A–E (pp. 799–812). The book prints no Addendum P here.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPIC_03, ...T_EXTRAS_A_E];

export const ch12LinearProgramming: Chapter = {
  chapter: '12',
  title: 'Linear Programming',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS,
};

export default ch12LinearProgramming;

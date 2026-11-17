import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './math-11-12/extras-a-b';
import { TOPICS as T_TOPIC_06 } from './math-11-12/topic-06';
import { TOPICS as T_TOPIC_07 } from './math-11-12/topic-07';
import { TOPICS as T_TOPICS_01_02 } from './math-11-12/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-11-12/topics-03-05';

/**
 * Limits and Derivatives. Mathematics, Class 11, Chapter 12: pp. 1060–1137 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–05    the main chapter's Subtopics 01–05 (pp. 1062–1097).
 *   Topic 06        the supplement's Subtopic 06 (pp. 1098–1113).
 *   Topic 07        the Additional Topics part's Subtopic 07 (pp. 1124–1137).
 *   Additional A–B  the supplement's Addenda A–B (pp. 1114–1123).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_TOPIC_06, ...T_TOPIC_07, ...T_EXTRAS_A_B];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Limits: Concepts & Algebra', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12Limits: Chapter = {
  chapter: '12',
  title: 'Limits and Derivatives',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12Limits;

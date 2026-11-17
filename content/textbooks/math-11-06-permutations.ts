import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './math-11-06/extras-a-d';
import { TOPICS as T_TOPIC_06 } from './math-11-06/topic-06';
import { TOPICS as T_TOPICS_01_02 } from './math-11-06/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-11-06/topics-03-05';

/**
 * Permutations and Combinations. Mathematics, Class 11, Chapter 6: pp. 490–579
 * of the Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–05    the main chapter's Subtopics 01–05 (pp. 491–536).
 *   Topic 06        the supplement's Subtopic 06 (pp. 537–557).
 *   Additional A–D  the "Additional Topics" part's Addenda 07A–07D (pp. 558–579),
 *                   lettered A–D (decision 23).
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_TOPIC_06, ...T_EXTRAS_A_D];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Fundamental Principle of Counting and Factorial', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch06Permutations: Chapter = {
  chapter: '06',
  title: 'Permutations and Combinations',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch06Permutations;

import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_C } from './math-11-03/extra-c';
import { TOPICS as T_EXTRA_D } from './math-11-03/extra-d';
import { TOPICS as T_TOPIC_01 } from './math-11-03/topic-01';
import { TOPICS as T_TOPIC_04 } from './math-11-03/topic-04';
import { TOPICS as T_TOPIC_05 } from './math-11-03/topic-05';
import { TOPICS as T_TOPIC_06 } from './math-11-03/topic-06';
import { TOPICS as T_TOPIC_07 } from './math-11-03/topic-07';
import { TOPICS as T_TOPIC_08 } from './math-11-03/topic-08';
import { TOPICS as T_TOPIC_11 } from './math-11-03/topic-11';
import { TOPICS as T_TOPIC_12 } from './math-11-03/topic-12';
import { TOPICS as T_TOPICS_02_03 } from './math-11-03/topics-02-03';
import { TOPICS as T_TOPICS_09_10 } from './math-11-03/topics-09-10';

/**
 * Trigonometric Functions. Mathematics, Class 11, Chapter 3: pp. 177–336 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 * Keyed by the catalogue's title, "Trigonometry" (lib/textbooks.ts).
 *
 *   Topics 01–06    the main chapter's Subtopics 01–06 (pp. 178–242).
 *   Topics 07–08    the supplement's Subtopics 07–08 (pp. 243–276).
 *   Topics 09–12    "Chapter 3: Trigonometric Functions — Additional Topics",
 *                   its Subtopics 09–12 (pp. 277–329), numbered as the book numbers them.
 *   Additional C    the supplement's "Addendum: Exercises for Product-to-Sum and
 *                   Triple-Angle" (pp. 271–276), its examples lettered C1–C4.
 *   Additional D    that part's closing "Topic D", Boundedness Equations and
 *                   Simultaneous Trigonometric Equations (pp. 330–336), lettered as the book letters it.
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
const TOPICS: Topic[] = [
  ...T_TOPIC_01,
  ...T_TOPICS_02_03,
  ...T_TOPIC_04,
  ...T_TOPIC_05,
  ...T_TOPIC_06,
  ...T_TOPIC_07,
  ...T_TOPIC_08,
  ...T_TOPICS_09_10,
  ...T_TOPIC_11,
  ...T_TOPIC_12,
  ...T_EXTRA_C,
  ...T_EXTRA_D,
];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Angle Measurement and Radians', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch03Trigonometry: Chapter = {
  chapter: '03',
  title: 'Trigonometric Functions',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch03Trigonometry;

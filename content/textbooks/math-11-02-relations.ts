import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_F_H } from './math-11-02/extras-f-h';
import { TOPICS as T_EXTRAS_I_K } from './math-11-02/extras-i-k';
import { TOPICS as T_TOPIC_3 } from './math-11-02/topic-3';
import { TOPICS as T_TOPIC_4 } from './math-11-02/topic-4';
import { TOPICS as T_TOPICS_1_2 } from './math-11-02/topics-1-2';

/**
 * Relations and Functions. Mathematics, Class 11, Chapter 2: pp. 101–176 of
 * the Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    the main chapter's Subtopics 01–03 (pp. 102–129); Topic 03
 *                   takes the supplement's "Addendum to Subtopic 03: Finding the
 *                   Range" (pp. 146–152) where the book says to read it.
 *   Topic 04        the supplement's Subtopic 04 (pp. 130–145).
 *   Additional F–K  "Chapter 2: Relations and Functions — Additional Topics",
 *                   Addenda F–K, lettered as the book letters them (pp. 153–176).
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
const TOPICS: Topic[] = [...T_TOPICS_1_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_F_H, ...T_EXTRAS_I_K];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Cartesian Product of Sets', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch02Relations: Chapter = {
  chapter: '02',
  title: 'Relations and Functions',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch02Relations;

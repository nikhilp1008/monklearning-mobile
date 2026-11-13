import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_F } from './math-11-11/extras-a-f';
import { TOPICS as T_EXTRAS_G_H } from './math-11-11/extras-g-h';
import { TOPICS as T_TOPICS_01_03 } from './math-11-11/topics-01-03';

/**
 * Introduction to Three Dimensional Geometry. Mathematics, Class 11, Chapter 11:
 * pp. 1009–1059 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word.
 *
 *   Topics 01–03    the main chapter's Subtopics 01–03 (pp. 1010–1036).
 *   Additional A–H  the book's Patterns 1–8 (the supplement's Patterns 1–6,
 *                   pp. 1037–1051, and the Additional Topics part's Patterns 7–8,
 *                   pp. 1052–1059), as Chapter 9 (decision 37).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_EXTRAS_A_F, ...T_EXTRAS_G_H];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Coordinate Axes, Planes, and Octants', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch11ThreeD: Chapter = {
  chapter: '11',
  title: 'Introduction to Three Dimensional Geometry',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch11ThreeD;

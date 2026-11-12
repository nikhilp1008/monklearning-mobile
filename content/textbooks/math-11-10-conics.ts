import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './math-11-10/extras-a-d';
import { TOPICS as T_TOPICS_01_02 } from './math-11-10/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-11-10/topics-03-05';
import { TOPICS as T_TOPICS_06_07 } from './math-11-10/topics-06-07';
import { TOPICS as T_TOPICS_08_09 } from './math-11-10/topics-08-09';

/**
 * Conic Sections. Mathematics, Class 11, Chapter 10: pp. 895–1008 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–05    the main chapter's five sections (Introduction, Circle,
 *                   Parabola, Ellipse, Hyperbola; pp. 897–934).
 *   Topics 06–09    the supplement's four units (pp. 935–986).
 *   Additional A–D  the Additional Topics part's Addenda A–D (pp. 987–1008).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_TOPICS_06_07, ...T_TOPICS_08_09, ...T_EXTRAS_A_D];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Introduction: Sections of a Cone & the Conic Family', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch10Conics: Chapter = {
  chapter: '10',
  title: 'Conic Sections',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch10Conics;

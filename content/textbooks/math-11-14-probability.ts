import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './math-11-14/extras-a-d';
import { TOPICS as T_TOPICS_01_03 } from './math-11-14/topics-01-03';

/**
 * Probability. Mathematics, Class 11, Chapter 14: pp. 1188–1237 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    the main chapter's Subtopics 01–03 (pp. 1188–1214).
 *   Additional A–B  the supplement's Addenda 14.1–14.2 (pp. 1215–1226).
 *   Additional C–D  the Additional Topics part's Addenda 14.3–14.4 (pp. 1227–1237).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_EXTRAS_A_D];

export const ch14Probability: Chapter = {
  chapter: '14',
  title: 'Probability',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS,
};

export default ch14Probability;

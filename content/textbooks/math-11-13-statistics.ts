import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './math-11-13/extras-a-c';
import { TOPICS as T_TOPICS_01_03 } from './math-11-13/topics-01-03';

/**
 * Statistics. Mathematics, Class 11, Chapter 13: pp. 1138–1187 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    the main chapter's Subtopics 01–03 (pp. 1139–1167).
 *   Additional A–B  the supplement's Addenda 13.1–13.2 (pp. 1168–1179).
 *   Additional C    the Additional Topics part's Addendum 13.3 (pp. 1180–1187).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_03, ...T_EXTRAS_A_C];

export const ch13Statistics: Chapter = {
  chapter: '13',
  title: 'Statistics',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS,
};

export default ch13Statistics;

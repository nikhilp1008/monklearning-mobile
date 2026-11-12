import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_H } from './math-11-01/extras-a-h';
import { TOPICS as T_EXTRAS_I_M } from './math-11-01/extras-i-m';
import { TOPICS as T_TOPIC_5 } from './math-11-01/topic-5';
import { TOPICS as T_TOPICS_1_2 } from './math-11-01/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './math-11-01/topics-3-4';

/**
 * Sets. Mathematics, Class 11, Chapter 1: pp. 25–100 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–04    the main chapter's Subtopics 01–04 (pp. 26–56).
 *   Topic 05        the supplement's "Part 2 — New Subtopic", Subtopic 05 (pp. 73–86).
 *   Additional A–H  the supplement's Part 1, Addenda A–H (pp. 57–73).
 *   Additional I–M  "Chapter 1: Sets — Additional Topics", Addenda I–M and its cheat sheet (pp. 87–100).
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
export const ch01Sets: Chapter = {
  chapter: '01',
  title: 'Sets',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPIC_5, ...T_EXTRAS_A_H, ...T_EXTRAS_I_M],
};

export default ch01Sets;

import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_F } from './math-11-05/extras-a-f';
import { TOPICS as T_TOPIC_05 } from './math-11-05/topic-05';
import { TOPICS as T_TOPICS_01_02 } from './math-11-05/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-11-05/topics-03-04';

/**
 * Linear Inequalities. Mathematics, Class 11, Chapter 5: pp. 414–489 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–04    the main chapter's Units 1–4 (pp. 415–450).
 *   Topic 05        the supplement's Unit 5 (pp. 451–465); the supplement's
 *                   boundary re-test of Unit 3's Practice exercise 3 sits in Topic 03.
 *   Additional A–F  the supplement's Addenda A–C (pp. 466–475) and the
 *                   "Additional Topics" part's Addenda D–F (pp. 476–489),
 *                   with the book's letters (decision 21).
 *
 * Every fraction is drawn stacked (<frac>, components/textbook/markup.tsx).
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_TOPIC_05, ...T_EXTRAS_A_F];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Linear Inequalities in One Variable', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch05Inequalities: Chapter = {
  chapter: '05',
  title: 'Linear Inequalities',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch05Inequalities;

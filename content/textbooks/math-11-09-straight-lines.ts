import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_F } from './math-11-09/extras-a-f';
import { TOPICS as T_TOPIC_07 } from './math-11-09/topic-07';
import { TOPICS as T_TOPIC_08 } from './math-11-09/topic-08';
import { TOPICS as T_TOPICS_00_01 } from './math-11-09/topics-00-01';
import { TOPICS as T_TOPICS_02_03 } from './math-11-09/topics-02-03';
import { TOPICS as T_TOPICS_04_06 } from './math-11-09/topics-04-06';

/**
 * Straight Lines. Mathematics, Class 11, Chapter 9: pp. 788–894 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topic 00        "Coordinate Foundations", the book's Subtopic 00: the opening
 *                   topic ("Start here"), so Topics 01–08 keep the book's numbers.
 *   Topics 01–06    the main chapter's Subtopics 01–06 (pp. 798–845).
 *   Topic 07        the supplement's Subtopic 07 (pp. 846–859).
 *   Topic 08        the Additional Topics part's Subtopic 08 (pp. 876–894).
 *   Additional A–F  the book's Patterns 1–6 (pp. 860–875; decision 33).
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_00_01, ...T_TOPICS_02_03, ...T_TOPICS_04_06, ...T_TOPIC_07, ...T_TOPIC_08, ...T_EXTRAS_A_F];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Slope of a Line and Angles', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch09StraightLines: Chapter = {
  chapter: '09',
  title: 'Straight Lines',
  subject: 'Mathematics',
  klass: 'Class 11',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch09StraightLines;

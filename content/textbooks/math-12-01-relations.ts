import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-01/extra-p';
import { TOPICS as T_EXTRAS_A_F } from './math-12-01/extras-a-f';
import { TOPICS as T_TOPICS_01_02 } from './math-12-01/topics-01-02';
import { TOPICS as T_TOPICS_03_04 } from './math-12-01/topics-03-04';
import { TOPICS as T_TOPICS_05_07 } from './math-12-01/topics-05-07';

/**
 * Relations and Functions. Mathematics, Class 12, Chapter 1: pp. 43–125 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–07    the chapter's Subtopics 01–07 (pp. 45–101).
 *   Additional A–F  the Additional Topics part's Addenda A–F (pp. 102–118).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 119–125), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_04, ...T_TOPICS_05_07, ...T_EXTRAS_A_F, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Types of Relations', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12Relations: Chapter = {
  chapter: '01',
  title: 'Relations and Functions',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12Relations;

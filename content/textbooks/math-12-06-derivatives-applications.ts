import type { Chapter, Topic } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_P } from './math-12-06/extra-p';
import { TOPICS as T_EXTRAS_A_E } from './math-12-06/extras-a-e';
import { TOPICS as T_TOPICS_01_02 } from './math-12-06/topics-01-02';
import { TOPICS as T_TOPICS_03_05 } from './math-12-06/topics-03-05';

/**
 * Applications of Derivatives. Mathematics, Class 12, Chapter 6: pp. 383–443 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *
 *   Topics 01–03    Subtopics 01–03 (pp. 384–411).
 *   Topics 04–05    the book's Appendix A, Tangents and Normals, and Appendix B, Approximations
 *                   and Differentials (pp. 412–418), numbered on (their letters would clash with the addenda's).
 *   Additional A–E  the Additional Topics part's Addenda A–E (pp. 419–436).
 *   Additional P    its Addendum P, What JEE Actually Asks (pp. 436–443), with the book's letter.
 *
 * Every fraction is drawn stacked (<frac>), components/textbook/markup.tsx.
 */
const TOPICS: Topic[] = [...T_TOPICS_01_02, ...T_TOPICS_03_05, ...T_EXTRAS_A_E, ...T_EXTRA_P];

// While the chapter is being written, an empty chapter still opens.
const PLACEHOLDER: Topic[] = [
  { n: '01', title: 'Rate of Change of Quantities', blocks: [{ t: 'p', html: 'This chapter is being written.' }] },
];

export const ch12DerivativesApplications: Chapter = {
  chapter: '06',
  title: 'Applications of Derivatives',
  subject: 'Mathematics',
  klass: 'Class 12',
  topics: TOPICS.length ? TOPICS : PLACEHOLDER,
};

export default ch12DerivativesApplications;

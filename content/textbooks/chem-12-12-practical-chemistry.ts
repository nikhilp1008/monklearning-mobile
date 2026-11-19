import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_TOPICS_1_3 } from './chem-12-12/topics-1-3';
import { TOPICS as T_TOPICS_2_5 } from './chem-12-12/topics-2-5';
import { TOPICS as T_TOPIC_4 } from './chem-12-12/topic-4';

/**
 * Practical Chemistry. Chemistry, Class 12.
 *
 * ORIGINAL TEXT (no source book): written from the NCERT Chemistry Laboratory
 * Manual and GRB OP Tandon as reference, in our own words. Five topics for the
 * eleven concepts of the syllabus unit (JEE Main and NEET (UG) 2026 Unit 20).
 * The brief is docs/textbooks/workbench/BRIEF-CHEM12-CH12-PRACTICAL.md. The
 * topic files are written by different writers and listed here in teaching
 * order: 01 and 03 (topics-1-3), 02 and 05 (topics-2-5), 04 (topic-4).
 */
const pick = (list: Chapter['topics'], n: string) => list.filter((t) => t.n === n);

export const chem12PracticalChemistry: Chapter = {
  chapter: '12',
  title: 'Practical Chemistry',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [
    ...pick(T_TOPICS_1_3, '01'),
    ...pick(T_TOPICS_2_5, '02'),
    ...pick(T_TOPICS_1_3, '03'),
    ...T_TOPIC_4,
    ...pick(T_TOPICS_2_5, '05'),
  ],
};

export default chem12PracticalChemistry;

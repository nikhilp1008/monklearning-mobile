import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_TOPICS_0_4 } from './phy-12-15/topics-0-4';
import { TOPICS as T_TOPICS_1 } from './phy-12-15/topics-1';
import { TOPICS as T_TOPICS_2_3 } from './phy-12-15/topics-2-3';

/**
 * Chapter 15 · Experimental Skills. Physics, Class 12.
 *
 * ORIGINAL TEXT (no source book): written from the NCERT laboratory manual
 * material and standard texts, one experiment at a time, in our own words.
 * Sixteen experiments (the database's 16 concepts) in four topics plus an
 * opening Topic 00. The brief is docs/textbooks/workbench/BRIEF-PHY12-CH15-EXPSKILLS.md.
 * The topic files are listed in teaching order: 00 and 04 (topics-0-4 is
 * ordered below), 01, 02 and 03.
 */
const [T00, T04] = [T_TOPICS_0_4.filter((t) => t.n === '00'), T_TOPICS_0_4.filter((t) => t.n === '04')];
const [T02, T03] = [T_TOPICS_2_3.filter((t) => t.n === '02'), T_TOPICS_2_3.filter((t) => t.n === '03')];

export const phy12ExperimentalSkills: Chapter = {
  chapter: '15',
  title: 'Experimental Skills',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T00, ...T_TOPICS_1, ...T02, ...T03, ...T04],
};

export default phy12ExperimentalSkills;

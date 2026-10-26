import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-04/extras';
import { TOPICS as T_TOPICS_1_2 } from './chem-11-04/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './chem-11-04/topics-3-4';

/**
 * Chapter 4 · Chemical Bonding and Molecular Structure. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 163 to 212. Four topics, each split into parts at the
 * book's own sections, then the Additional Topics' addenda and "What JEE and
 * NEET Actually Ask" as the last Additional topic. The figures are redrawn
 * (lib/diagrams/chemistry-11-04*.ts).
 */
export const chem11ChemicalBonding: Chapter = {
  chapter: '04',
  title: 'Chemical Bonding and Molecular Structure',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_EXTRAS],
};

export default chem11ChemicalBonding;

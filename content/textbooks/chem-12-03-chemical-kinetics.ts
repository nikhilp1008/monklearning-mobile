import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-03/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './chem-12-03/extras-d-e';
import { TOPICS as T_TOPIC_1 } from './chem-12-03/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-03/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-03/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-03/topic-4';

/**
 * Chapter 3 · Chemical Kinetics. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 101 to 146. Its four sub-topics as Topics 01 to
 * 04, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to D and "What JEE and NEET Actually Ask" (E). The figures
 * are redrawn (lib/diagrams/chemistry-12-03.ts).
 */
export const chem12ChemicalKinetics: Chapter = {
  chapter: '03',
  title: 'Chemical Kinetics',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_C, ...T_EXTRAS_D_E],
};

export default chem12ChemicalKinetics;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-02/extras';
import { TOPICS as T_TOPICS_1_2 } from './chem-11-02/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './chem-11-02/topics-3-4';

/**
 * Chapter 2 · Structure of Atom. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 72 to 116. Four topics, each split into parts
 * at the book's own sections, then the Additional Topics' addenda (A to D)
 * and "What JEE and NEET Actually Ask" as the last Additional topic. The
 * figures are redrawn (lib/diagrams/chemistry-11-02.ts).
 */
export const chem11StructureOfAtom: Chapter = {
  chapter: '02',
  title: 'Structure of Atom',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_EXTRAS],
};

export default chem11StructureOfAtom;

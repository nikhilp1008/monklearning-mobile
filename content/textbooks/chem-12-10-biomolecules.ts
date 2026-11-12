import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './chem-12-10/extras-a-b';
import { TOPICS as T_EXTRAS_C_E } from './chem-12-10/extras-c-e';
import { TOPICS as T_EXTRAS_F } from './chem-12-10/extras-f';
import { TOPICS as T_TOPIC_1 } from './chem-12-10/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-10/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-10/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-10/topic-4';

/**
 * Chapter 10 · Biomolecules. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 478 to 529. Its four sub-topics as Topics 01 to
 * 04, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to D, the book's Summary Checklist (E, as in Amines) and
 * "What JEE and NEET Actually Ask" (F). The figures are redrawn
 * (lib/diagrams/chemistry-12-10.ts).
 */
export const chem12Biomolecules: Chapter = {
  chapter: '10',
  title: 'Biomolecules',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_B, ...T_EXTRAS_C_E, ...T_EXTRAS_F],
};

export default chem12Biomolecules;

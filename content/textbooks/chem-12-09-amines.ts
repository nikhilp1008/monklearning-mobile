import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './chem-12-09/extras-a-b';
import { TOPICS as T_EXTRAS_C_D } from './chem-12-09/extras-c-d';
import { TOPICS as T_EXTRAS_E } from './chem-12-09/extras-e';
import { TOPICS as T_TOPIC_1 } from './chem-12-09/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-09/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-09/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-09/topic-4';

/**
 * Chapter 9 · Amines. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 426 to 477. Its sub-topics 9.1 to 9.4 as Topics
 * 01 to 04 (9.4, the Master Revision & Reaction Compendium, kept as an ordinary
 * topic by the founder's decision), each split into parts at the book's own
 * sections; then the addenda as Additional Topics A to D, the Summary Checklist (E)
 * and "What JEE and NEET Actually Ask" (F). The figures are redrawn (lib/diagrams/chemistry-12-09.ts).
 */
export const chem12Amines: Chapter = {
  chapter: '09',
  title: 'Amines',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_B, ...T_EXTRAS_C_D, ...T_EXTRAS_E],
};

export default chem12Amines;

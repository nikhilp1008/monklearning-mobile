import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_C_E } from './chem-12-02/extras-c-e';
import { TOPICS as T_TOPIC_1 } from './chem-12-02/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-02/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-02/topic-3';
import { TOPICS as T_TOPIC_4_A_B } from './chem-12-02/topic-4-a-b';

/**
 * Chapter 2 · Electrochemistry. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 58 to 100. Its three sub-topics as Topics 01 to
 * 03; the book's Capstone as Topic 04 without its one-page formula sheet, which
 * the app's Formula sheet replaces (founder's decision, 2026-11-03); then the
 * addenda as Additional Topics A to D and "What JEE and NEET Actually Ask" (E).
 * The figures are redrawn (lib/diagrams/chemistry-12-02.ts).
 */
export const chem12Electrochemistry: Chapter = {
  chapter: '02',
  title: 'Electrochemistry',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4_A_B, ...T_EXTRAS_C_E],
};

export default chem12Electrochemistry;

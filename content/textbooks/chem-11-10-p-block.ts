import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './chem-11-10/extras-a-d';
import { TOPICS as T_EXTRAS_E_K } from './chem-11-10/extras-e-k';
import { TOPICS as T_TOPIC_6 } from './chem-11-10/topic-6';
import { TOPICS as T_TOPICS_1_2 } from './chem-11-10/topics-1-2';
import { TOPICS as T_TOPICS_3_5 } from './chem-11-10/topics-3-5';

/**
 * Chapter 10 · The p-Block Elements (Groups 13 and 14). Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 456 to 502. The book runs this chapter as
 * one block of nine sections; the app makes Sections 1–5 Topics 01 to 05 and
 * Sections 6–9 (worked examples, practice, pitfalls, what the papers ask) Topic
 * 06 (founder's decision, 2026-10-31). Then the addenda as Additional Topics A
 * to I, the Summary Checklist (J) and "What JEE and NEET Actually Ask" (K). The
 * figures are redrawn (lib/diagrams/chemistry-11-10.ts).
 */
export const chem11PBlock: Chapter = {
  chapter: '10',
  title: 'The p-Block Elements (Groups 13 and 14)',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_5, ...T_TOPIC_6, ...T_EXTRAS_A_D, ...T_EXTRAS_E_K],
};

export default chem11PBlock;

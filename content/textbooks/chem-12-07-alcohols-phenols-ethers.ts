import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-07/extras-a-c';
import { TOPICS as T_EXTRAS_D_G } from './chem-12-07/extras-d-g';
import { TOPICS as T_EXTRAS_H } from './chem-12-07/extras-h';
import { TOPICS as T_TOPIC_1 } from './chem-12-07/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-07/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-07/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-07/topic-4';

/**
 * Chapter 7 · Alcohols, Phenols and Ethers. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 311 to 366. Its four sub-topics as Topics 01 to
 * 04, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to G and "What JEE and NEET Actually Ask" (H). The figures
 * are redrawn (lib/diagrams/chemistry-12-07.ts).
 */
export const chem12AlcoholsPhenolsEthers: Chapter = {
  chapter: '07',
  title: 'Alcohols, Phenols and Ethers',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_C, ...T_EXTRAS_D_G, ...T_EXTRAS_H],
};

export default chem12AlcoholsPhenolsEthers;

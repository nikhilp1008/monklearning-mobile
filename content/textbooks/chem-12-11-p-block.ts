import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-11/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './chem-12-11/extras-d-e';
import { TOPICS as T_EXTRAS_F_I } from './chem-12-11/extras-f-i';
import { TOPICS as T_TOPICS_1_3 } from './chem-12-11/topics-1-3';
import { TOPICS as T_TOPICS_4_6 } from './chem-12-11/topics-4-6';
import { TOPICS as T_TOPIC_7 } from './chem-12-11/topic-7';

/**
 * Chapter 11 · The p-Block Elements (Groups 15 to 18). Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 530 to 583. The book runs this chapter as one
 * block of nine sections and a closing "What JEE & NEET Actually Ask", then a
 * supplement of addenda. As in Chemistry 11's p-Block (the founder's layout,
 * 2026-10-31), Sections 1–6 are Topics 01 to 06 and Sections 7–9 with the
 * closing exam section are Topic 07; the supplement's Addenda A to H are
 * Additional Topics A to H and its own "What JEE and NEET Actually Ask" is I.
 * The figures are redrawn (lib/diagrams/chemistry-12-11.ts). On the shelf this
 * chapter is the fourth (the server's "p-Block Elements").
 */
export const chem12PBlock: Chapter = {
  chapter: '11',
  title: 'The p-Block Elements (Groups 15 to 18)',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_3, ...T_TOPICS_4_6, ...T_TOPIC_7, ...T_EXTRAS_A_C, ...T_EXTRAS_D_E, ...T_EXTRAS_F_I],
};

export default chem12PBlock;

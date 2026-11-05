import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-05/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './chem-12-05/extras-d-e';
import { TOPICS as T_TOPIC_1 } from './chem-12-05/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-05/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-05/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-05/topic-4';
import { TOPICS as T_TOPIC_5 } from './chem-12-05/topic-5';
import { TOPICS as T_TOPIC_6 } from './chem-12-05/topic-6';

/**
 * Chapter 5 · Coordination Compounds. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 196 to 250. Its six sub-topics as Topics 01 to
 * 06, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to D and "What JEE and NEET Actually Ask" (E). The figures
 * are redrawn (lib/diagrams/chemistry-12-05.ts).
 */
export const chem12CoordinationCompounds: Chapter = {
  chapter: '05',
  title: 'Coordination Compounds',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_TOPIC_5, ...T_TOPIC_6, ...T_EXTRAS_A_C, ...T_EXTRAS_D_E],
};

export default chem12CoordinationCompounds;

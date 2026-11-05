import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-01/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './chem-12-01/extras-d-e';
import { TOPICS as T_TOPIC_3 } from './chem-12-01/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-01/topic-4';
import { TOPICS as T_TOPIC_5 } from './chem-12-01/topic-5';
import { TOPICS as T_TOPICS_1_2 } from './chem-12-01/topics-1-2';

/**
 * Chapter 1 · Solutions. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 7 to 57. Its five sub-topics as Topics 01 to 05,
 * each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to D and "What JEE and NEET Actually Ask" (E). The figures
 * are redrawn (lib/diagrams/chemistry-12-01.ts).
 */
export const chem12Solutions: Chapter = {
  chapter: '01',
  title: 'Solutions',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_TOPIC_5, ...T_EXTRAS_A_C, ...T_EXTRAS_D_E],
};

export default chem12Solutions;

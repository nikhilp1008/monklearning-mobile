import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-08/extras-a-c';
import { TOPICS as T_EXTRAS_D_F } from './chem-12-08/extras-d-f';
import { TOPICS as T_EXTRAS_G } from './chem-12-08/extras-g';
import { TOPICS as T_TOPIC_1 } from './chem-12-08/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-08/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-08/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-08/topic-4';

/**
 * Chapter 8 · Aldehydes, Ketones and Carboxylic Acids. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 367 to 425. Its four sub-topics as Topics 01 to
 * 04, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to F and "What JEE and NEET Actually Ask" (G). The figures
 * are redrawn (lib/diagrams/chemistry-12-08.ts).
 */
export const chem12AldehydesKetonesCarboxylicAcids: Chapter = {
  chapter: '08',
  title: 'Aldehydes, Ketones and Carboxylic Acids',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_C, ...T_EXTRAS_D_F, ...T_EXTRAS_G],
};

export default chem12AldehydesKetonesCarboxylicAcids;

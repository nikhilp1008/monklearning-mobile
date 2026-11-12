import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './chem-12-06/extras-a-c';
import { TOPICS as T_EXTRAS_D_F } from './chem-12-06/extras-d-f';
import { TOPICS as T_TOPIC_1 } from './chem-12-06/topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-12-06/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-12-06/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-12-06/topic-4';

/**
 * Chapter 6 · Haloalkanes and Haloarenes. Chemistry, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 251 to 310. Its four sub-topics as Topics 01 to
 * 04, each split into parts at the book's own sections; then the addenda as
 * Additional Topics A to E and "What JEE and NEET Actually Ask" (F). The figures
 * are redrawn (lib/diagrams/chemistry-12-06.ts).
 */
export const chem12HaloalkanesHaloarenes: Chapter = {
  chapter: '06',
  title: 'Haloalkanes and Haloarenes',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_C, ...T_EXTRAS_D_F],
};

export default chem12HaloalkanesHaloarenes;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './chem-11-09/extras-a-d';
import { TOPICS as T_EXTRAS_E_I } from './chem-11-09/extras-e-i';
import { TOPICS as T_GUIDE_TOPIC_1 } from './chem-11-09/guide-topic-1';
import { TOPICS as T_TOPIC_2 } from './chem-11-09/topic-2';
import { TOPICS as T_TOPIC_3 } from './chem-11-09/topic-3';
import { TOPICS as T_TOPIC_4 } from './chem-11-09/topic-4';

/**
 * Chapter 9 · Hydrocarbons. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 400 to 455. The book's "Classification of Hydrocarbons"
 * as the opening ("Start here"), then its four sub-topics (alkanes, alkenes,
 * alkynes, arenes) as Topics 01 to 04, each split into parts at the book's own
 * sections; then the addenda as Additional Topics A to G, the Summary Checklist
 * (H) and "What JEE and NEET Actually Ask" (I). The figures are redrawn
 * (lib/diagrams/chemistry-11-09.ts, chemistry-11-09b.ts).
 */
export const chem11Hydrocarbons: Chapter = {
  chapter: '09',
  title: 'Hydrocarbons',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_GUIDE_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_D, ...T_EXTRAS_E_I],
};

export default chem11Hydrocarbons;

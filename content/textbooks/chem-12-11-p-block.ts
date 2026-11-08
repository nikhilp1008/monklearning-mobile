import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T11_EXTRAS_A_D } from './chem-11-10/extras-a-d';
import { TOPICS as T11_EXTRAS_E_K } from './chem-11-10/extras-e-k';
import { TOPICS as T11_TOPIC_6 } from './chem-11-10/topic-6';
import { TOPICS as T11_TOPICS_1_2 } from './chem-11-10/topics-1-2';
import { TOPICS as T11_TOPICS_3_5 } from './chem-11-10/topics-3-5';
import { TOPICS as T_EXTRAS_A_C } from './chem-12-11/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './chem-12-11/extras-d-e';
import { TOPICS as T_EXTRAS_F_I } from './chem-12-11/extras-f-i';
import { TOPICS as T_TOPICS_1_3 } from './chem-12-11/topics-1-3';
import { TOPICS as T_TOPICS_4_6 } from './chem-12-11/topics-4-6';
import { TOPICS as T_TOPIC_7 } from './chem-12-11/topic-7';

/**
 * The p-Block Elements (Groups 13 to 18). Chemistry, Class 12, the shelf's
 * "p-Block Elements".
 *
 * ONE CHAPTER FROM TWO BOOKS (the founder's decision, 2026-11-07). The server's
 * catalogue has one p-Block chapter, Class 12, covering the whole block; the
 * Drona Master Reference splits it between the Class 11 book (Ch 10, Groups 13
 * and 14, pages 456–502) and the Class 12 book (Ch 11, Groups 15 to 18, pages
 * 530–583). Both are copied word for word and shown here as one chapter,
 * Groups 13–14 first:
 *
 *   Topics 01–06  Class 11 Ch 10, Sections 1–5 and its worked examples & exam
 *                 practice (chem-11-10/).
 *   Topics 07–13  Class 12 Ch 11, Sections 1–6 and its worked examples & exam
 *                 practice (chem-12-11/).
 *   Additional A–K  the Class 11 supplement (its Summary Checklist J and "What
 *                   JEE and NEET Actually Ask" K).
 *   Additional L–T  the Class 12 supplement (its Addenda A–H and "What JEE
 *                   and NEET Actually Ask"), re-lettered, with every reference
 *                   to them re-lettered too.
 *
 * The two "Worked examples & exam practice" topics and the two "What JEE and
 * NEET Actually Ask" topics carry ": Groups 13 and 14" / ": Groups 15 to 18".
 * Drawings and key points are filed under 'chemistry|12|11', each with its
 * topic index in this order (lib/diagrams/chemistry-11-10.ts and -12-11.ts,
 * lib/revise/keypoints-chemistry-11-10.ts and -12-11.ts).
 */
export const chem12PBlock: Chapter = {
  chapter: '11',
  title: 'The p-Block Elements (Groups 13 to 18)',
  subject: 'Chemistry',
  klass: 'Class 12',
  topics: [
    ...T11_TOPICS_1_2,
    ...T11_TOPICS_3_5,
    ...T11_TOPIC_6,
    ...T_TOPICS_1_3,
    ...T_TOPICS_4_6,
    ...T_TOPIC_7,
    ...T11_EXTRAS_A_D,
    ...T11_EXTRAS_E_K,
    ...T_EXTRAS_A_C,
    ...T_EXTRAS_D_E,
    ...T_EXTRAS_F_I,
  ],
};

export default chem12PBlock;

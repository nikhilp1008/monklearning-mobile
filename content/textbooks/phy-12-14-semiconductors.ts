import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './phy-12-14/extras-a-b';
import { TOPICS as T_EXTRAS_C_E } from './phy-12-14/extras-c-e';
import { TOPICS as T_GUIDE_TOPIC_1 } from './phy-12-14/guide-topic-1';
import { TOPICS as T_TOPIC_2 } from './phy-12-14/topic-2';
import { TOPICS as T_TOPIC_3 } from './phy-12-14/topic-3';
import { TOPICS as T_TOPIC_4 } from './phy-12-14/topic-4';

/**
 * Chapter 14 · Semiconductor Electronics. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 865 to 928. The book's syllabus-scope box as the
 * opening ("Start here"), four topics from its four sub-topics, each split into
 * parts at the book's own sections, then the five addenda as Additional Topics
 * (A to E). The figures are redrawn (lib/diagrams/physics-12-14.ts, physics-12-14b.ts).
 */
export const phy12Semiconductors: Chapter = {
  chapter: '14',
  title: 'Semiconductor Electronics',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_GUIDE_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_B, ...T_EXTRAS_C_E],
};

export default phy12Semiconductors;

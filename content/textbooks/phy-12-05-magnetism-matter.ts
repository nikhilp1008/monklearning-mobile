import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './phy-12-05/extras-a-b';
import { TOPICS as T_EXTRAS_C_E } from './phy-12-05/extras-c-e';
import { TOPICS as T_TOPIC_5 } from './phy-12-05/topic-5';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-05/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-05/topics-3-4';

/**
 * Chapter 5 · Magnetism and Matter. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 330 to 388. Five topics from the book's five
 * sub-topics, each split into parts at the book's own sections, then the
 * Supplement's five addenda as Additional Topics (A to E). The figures are
 * redrawn (lib/diagrams/physics-12-05.ts).
 */
export const phy12MagnetismMatter: Chapter = {
  chapter: '05',
  title: 'Magnetism and Matter',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPIC_5, ...T_EXTRAS_A_B, ...T_EXTRAS_C_E],
};

export default phy12MagnetismMatter;

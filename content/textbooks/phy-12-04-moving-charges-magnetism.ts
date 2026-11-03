import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_E } from './phy-12-04/extras-a-e';
import { TOPICS as T_TOPIC_1 } from './phy-12-04/topic-1';
import { TOPICS as T_TOPIC_2 } from './phy-12-04/topic-2';
import { TOPICS as T_TOPIC_3 } from './phy-12-04/topic-3';
import { TOPICS as T_TOPICS_4_5 } from './phy-12-04/topics-4-5';

/**
 * Chapter 4 · Moving Charges and Magnetism. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 256 to 329. Five topics from the book's five
 * sub-topics, each split into parts at the book's own sections, then the
 * Supplement's five addenda as Additional Topics (A to E). The figures are
 * redrawn (lib/diagrams/physics-12-04.ts).
 */
export const phy12MovingChargesMagnetism: Chapter = {
  chapter: '04',
  title: 'Moving Charges and Magnetism',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPICS_4_5, ...T_EXTRAS_A_E],
};

export default phy12MovingChargesMagnetism;

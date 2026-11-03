import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './phy-12-01/extras-a-c';
import { TOPICS as T_EXTRAS_D_F } from './phy-12-01/extras-d-f';
import { TOPICS as T_TOPIC_5 } from './phy-12-01/topic-5';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-01/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-01/topics-3-4';

/**
 * Chapter 1 · Electric Charges and Fields. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 8 to 79. Five topics from the book's five
 * sub-topics, each split into parts at the book's own sections, then the
 * Supplement's six addenda as Additional Topics (A to F). The figures are
 * redrawn (lib/diagrams/physics-12-01.ts).
 */
export const phy12ElectricCharges: Chapter = {
  chapter: '01',
  title: 'Electric Charges and Fields',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPIC_5, ...T_EXTRAS_A_C, ...T_EXTRAS_D_F],
};

export default phy12ElectricCharges;

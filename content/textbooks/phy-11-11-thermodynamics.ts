import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_C_E } from './phy-11-11/extras-c-e';
import { TOPICS as T_TOPIC_8_EXTRAS_A_B } from './phy-11-11/topic-8-extras-a-b';
import { TOPICS as T_TOPICS_1_2 } from './phy-11-11/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-11-11/topics-3-4';
import { TOPICS as T_TOPICS_5_7 } from './phy-11-11/topics-5-7';

/**
 * Chapter 11 · Thermodynamics. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 740 to 818. Eight topics from the book's eight sub-topics,
 * each split into parts at the book's own sections, then the book's five
 * Additional Topics (A to E). The figures are redrawn
 * (lib/diagrams/physics-11-11.ts).
 */
export const phy11Thermodynamics: Chapter = {
  chapter: '11',
  title: 'Thermodynamics',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPICS_5_7, ...T_TOPIC_8_EXTRAS_A_B, ...T_EXTRAS_C_E],
};

export default phy11Thermodynamics;

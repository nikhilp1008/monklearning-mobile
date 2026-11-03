import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_G } from './phy-12-03/extra-g';
import { TOPICS as T_EXTRAS_A_C } from './phy-12-03/extras-a-c';
import { TOPICS as T_EXTRAS_D_F } from './phy-12-03/extras-d-f';
import { TOPICS as T_TOPIC_6 } from './phy-12-03/topic-6';
import { TOPICS as T_TOPIC_7 } from './phy-12-03/topic-7';
import { TOPICS as T_TOPIC_8 } from './phy-12-03/topic-8';
import { TOPICS as T_TOPICS_0_1 } from './phy-12-03/topics-0-1';
import { TOPICS as T_TOPICS_2_3 } from './phy-12-03/topics-2-3';
import { TOPICS as T_TOPICS_4_5 } from './phy-12-03/topics-4-5';

/**
 * Chapter 3 · Current Electricity. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 139 to 255. The book's own "Chapter Guide, Map
 * & Exam Strategy" opens the chapter as its guide (n "00", before Topic 01; the
 * founder's choice, 2026-10-22), then eight topics from the book's eight
 * sub-topics, each split into parts at the book's own sections. The
 * Supplement's six addenda follow as Additional Topics A to F, and the Master
 * Appendix's integrated problem set as G; the appendix's formula sheet, units
 * table and revision facts are not copied (the app has its own Formula sheet
 * and Key points). The figures are redrawn (lib/diagrams/physics-12-03.ts).
 */
export const phy12CurrentElectricity: Chapter = {
  chapter: '03',
  title: 'Current Electricity',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_0_1, ...T_TOPICS_2_3, ...T_TOPICS_4_5, ...T_TOPIC_6, ...T_TOPIC_7, ...T_TOPIC_8, ...T_EXTRAS_A_C, ...T_EXTRAS_D_F, ...T_EXTRA_G],
};

export default phy12CurrentElectricity;

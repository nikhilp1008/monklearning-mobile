import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_E } from './phy-12-10/extras-a-e';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-10/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-10/topics-3-4';
import { TOPICS as T_TOPICS_5_6 } from './phy-12-10/topics-5-6';

/**
 * Chapter 10 · Wave Optics. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 634 to 713. Six topics from the book's six
 * sub-topics, each split into parts at the book's own sections, then the
 * Supplement's five addenda as Additional Topics (A to E). The figures are
 * redrawn (lib/diagrams/physics-12-10.ts, physics-12-10b.ts).
 */
export const phy12WaveOptics: Chapter = {
  chapter: '10',
  title: 'Wave Optics',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPICS_5_6, ...T_EXTRAS_A_E],
};

export default phy12WaveOptics;

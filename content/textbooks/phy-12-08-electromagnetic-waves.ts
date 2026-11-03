import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_D } from './phy-12-08/extras-a-d';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-08/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-08/topics-3-4';

/**
 * Chapter 8 · Electromagnetic Waves. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 517 to 554. Four topics from the book's four
 * sub-topics, each split into parts at the book's own sections, then the
 * Supplement's four addenda as Additional Topics (A to D). The figures are
 * redrawn (lib/diagrams/physics-12-08.ts).
 */
export const phy12ElectromagneticWaves: Chapter = {
  chapter: '08',
  title: 'Electromagnetic Waves',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_EXTRAS_A_D],
};

export default phy12ElectromagneticWaves;

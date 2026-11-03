import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './phy-11-14/extras';
import { TOPICS as T_TOPICS_1_2 } from './phy-11-14/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-11-14/topics-3-4';

/**
 * Chapter 14 · Waves. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 944 to 996. Four topics from the book's four sub-topics,
 * each split into parts at the book's own sections, then the book's four
 * Additional Topics (A to D). The figures are redrawn
 * (lib/diagrams/physics-11-14.ts).
 */
export const phy11Waves: Chapter = {
  chapter: '14',
  title: 'Waves',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_EXTRAS],
};

export default phy11Waves;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_F } from './phy-12-09/extras-a-f';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-09/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-09/topics-3-4';
import { TOPICS as T_TOPICS_5_6 } from './phy-12-09/topics-5-6';

/**
 * Chapter 9 · Ray Optics and Optical Instruments. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 555 to 633. Six topics from the book's six
 * sub-topics (9.1 to 9.6), each split into parts at the book's own sections,
 * then the six addenda as Additional Topics (A to F). The figures are
 * redrawn (lib/diagrams/physics-12-09.ts, physics-12-09b.ts).
 */
export const phy12RayOptics: Chapter = {
  chapter: '09',
  title: 'Ray Optics and Optical Instruments',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPICS_5_6, ...T_EXTRAS_A_F],
};

export default phy12RayOptics;

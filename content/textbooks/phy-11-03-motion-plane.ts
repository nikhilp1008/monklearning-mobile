import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-03/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-03/topics-1-3';
import { TOPICS as TOPICS_4_6 } from './phy-11-03/topics-4-6';

/**
 * Chapter 03 · Motion in a Plane. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 132 to 194. Six topics from its six sub-topics,
 * each split into parts at the book's own sections, then the book's four
 * Additional Topics (A to D). Mistakes in the book found in review are fixed
 * here; the figures are redrawn (lib/diagrams/physics-11-03.ts).
 */
export const phy11MotionPlane: Chapter = {
  chapter: '03',
  title: 'Motion in a Plane',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_6, ...EXTRAS],
};

export default phy11MotionPlane;

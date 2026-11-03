import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-08/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-08/topics-1-3';
import { TOPICS as TOPICS_4_5 } from './phy-11-08/topics-4-5';

/**
 * Chapter 08 · Mechanical Properties of Solids. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 545 to 598. Five topics from its five
 * subtopics, each split into parts at the book's own sections, then the
 * book's six Additional Topics (A to F). The figures are redrawn
 * (lib/diagrams/physics-11-08.ts).
 */
export const phy11MechSolids: Chapter = {
  chapter: '08',
  title: 'Mechanical Properties of Solids',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_5, ...EXTRAS],
};

export default phy11MechSolids;

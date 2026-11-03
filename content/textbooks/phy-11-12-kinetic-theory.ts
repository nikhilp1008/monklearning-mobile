import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './phy-11-12/extras-a-c';
import { TOPICS as T_EXTRAS_D_E } from './phy-11-12/extras-d-e';
import { TOPICS as T_TOPICS_1_2 } from './phy-11-12/topics-1-2';
import { TOPICS as T_TOPICS_3_5 } from './phy-11-12/topics-3-5';

/**
 * Chapter 12 · Kinetic Theory. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 819 to 882. Five topics from the book's Sub-topics 0 to 4,
 * each split into parts at the book's own sections (the closing master
 * formula sheet left out), then the book's five Additional Topics (A to E). The figures are redrawn
 * (lib/diagrams/physics-11-12.ts).
 */
export const phy11KineticTheory: Chapter = {
  chapter: '12',
  title: 'Kinetic Theory',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_5, ...T_EXTRAS_A_C, ...T_EXTRAS_D_E],
};

export default phy11KineticTheory;

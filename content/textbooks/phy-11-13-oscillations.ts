import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_C } from './phy-11-13/extras-a-c';
import { TOPICS as T_EXTRAS_D_F } from './phy-11-13/extras-d-f';
import { TOPICS as T_TOPICS_1_2 } from './phy-11-13/topics-1-2';
import { TOPICS as T_TOPICS_3_5 } from './phy-11-13/topics-3-5';

/**
 * Chapter 13 · Oscillations. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 883 to 943. Five topics from the book's five sub-topics,
 * each split into parts at the book's own sections, then the book's six
 * Additional Topics (A to F). The figures are redrawn
 * (lib/diagrams/physics-11-13.ts).
 */
export const phy11Oscillations: Chapter = {
  chapter: '13',
  title: 'Oscillations',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_5, ...T_EXTRAS_A_C, ...T_EXTRAS_D_F],
};

export default phy11Oscillations;

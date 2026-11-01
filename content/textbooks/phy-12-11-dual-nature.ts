import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_B_D } from './phy-12-11/extras-b-d';
import { TOPICS as T_TOPIC_3_EXTRA_A } from './phy-12-11/topic-3-extra-a';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-11/topics-1-2';

/**
 * Chapter 11 · Dual Nature of Radiation and Matter. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 714 to 759. Three topics from the book's three sub-topics
 * (numbered 00 to 02 in the book, 01 to 03 here), each split into parts at the
 * book's own sections, then the four addenda as Additional Topics (A to D). The
 * figures are redrawn (lib/diagrams/physics-12-11.ts).
 */
export const phy12DualNature: Chapter = {
  chapter: '11',
  title: 'Dual Nature of Radiation and Matter',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPIC_3_EXTRA_A, ...T_EXTRAS_B_D],
};

export default phy12DualNature;

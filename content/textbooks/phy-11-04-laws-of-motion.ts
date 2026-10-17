import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-04/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-04/topics-1-3';
import { TOPICS as TOPICS_4_5 } from './phy-11-04/topics-4-5';
import { TOPICS as TOPICS_6_8 } from './phy-11-04/topics-6-8';

/**
 * Chapter 04 · Laws of Motion. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 195 to 281. Eight topics from its eight
 * sub-topics, each split into parts at the book's own sections, then the
 * book's four Additional Topics (A to D). Mistakes in the book found in review
 * are fixed here; the figures are redrawn (lib/diagrams/physics-11-04.ts).
 */
export const phy11LawsOfMotion: Chapter = {
  chapter: '04',
  title: 'Laws of Motion',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_5, ...TOPICS_6_8, ...EXTRAS],
};

export default phy11LawsOfMotion;

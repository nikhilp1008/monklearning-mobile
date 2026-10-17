import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-01/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-01/topics-1-3';
import { TOPICS as TOPICS_4_6 } from './phy-11-01/topics-4-6';

/**
 * Chapter 01 · Units and Measurements. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15, books/master-references-2026-10-15 on the API's
 * books-snapshot branch), pages 8 to 74. Six topics from its six sub-topics,
 * each split into parts at the book's own sections, then the book's four
 * Additional Topics (A to D). The text is the book's; only where a sentence
 * points at the printed page ("the table below", "see p. 12") is it reworded
 * to fit a phone, and the figures are redrawn (lib/diagrams/physics-11-01.ts).
 */
export const phy11UnitsMeasurements: Chapter = {
  chapter: '01',
  title: 'Units and Measurements',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_6, ...EXTRAS],
};

export default phy11UnitsMeasurements;

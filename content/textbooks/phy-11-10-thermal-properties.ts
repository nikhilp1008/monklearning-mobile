import type { Chapter } from '@/lib/textbooks';

import { TOPICS as TOPICS_1_2 } from './phy-11-10/topics-1-2';
import { TOPICS as TOPICS_3_4 } from './phy-11-10/topics-3-4';
import { TOPICS as TOPICS_5_6 } from './phy-11-10/topics-5-6';
import { TOPICS as EXTRAS } from './phy-11-10/extras';

/**
 * Chapter 10 · Thermal Properties of Matter. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 675 to 739. Six topics from the book's six sub-topics,
 * each split into parts at the book's own sections, then the book's four
 * Additional Topics (A to D). The figures are redrawn
 * (lib/diagrams/physics-11-10.ts).
 */
export const phy11ThermalProperties: Chapter = {
  chapter: '10',
  title: 'Thermal Properties of Matter',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_2, ...TOPICS_3_4, ...TOPICS_5_6, ...EXTRAS],
};

export default phy11ThermalProperties;

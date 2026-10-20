import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-05/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-05/topics-1-3';
import { TOPICS as TOPICS_4_6 } from './phy-11-05/topics-4-6';
import { TOPICS as TOPICS_7_8 } from './phy-11-05/topics-7-8';

/**
 * Chapter 05 · Work, Energy and Power. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 282 to 363. Eight topics — the book's
 * Foundations section, its sub-topics 1, 2, 3, 3.5, 4 and 5, and its
 * Application section — each split into parts at the book's own sections,
 * then the book's five Additional Topics (A to E). The figures are redrawn
 * (lib/diagrams/physics-11-05.ts).
 */
export const phy11WorkEnergyPower: Chapter = {
  chapter: '05',
  title: 'Work, Energy and Power',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_6, ...TOPICS_7_8, ...EXTRAS],
};

export default phy11WorkEnergyPower;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as TOPICS_1_2 } from './phy-11-09/topics-1-2';
import { TOPICS as TOPICS_3_4 } from './phy-11-09/topics-3-4';
import { TOPICS as TOPICS_5_6 } from './phy-11-09/topics-5-6';
import { TOPICS as TOPIC_7_EXTRAS } from './phy-11-09/topic-7-extras';

/**
 * Chapter 09 · Mechanical Properties of Fluids. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 599 to 674. Seven topics from the book's seven sub-topics,
 * each split into parts at the book's own sections, then the book's four
 * Additional Topics (A to D). The figures are redrawn
 * (lib/diagrams/physics-11-09.ts).
 */
export const phy11MechFluids: Chapter = {
  chapter: '09',
  title: 'Mechanical Properties of Fluids',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_2, ...TOPICS_3_4, ...TOPICS_5_6, ...TOPIC_7_EXTRAS],
};

export default phy11MechFluids;

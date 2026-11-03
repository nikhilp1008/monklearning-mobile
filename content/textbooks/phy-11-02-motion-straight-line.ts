import type { Chapter } from '@/lib/textbooks';

import { TOPICS as EXTRAS } from './phy-11-02/extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-02/topics-1-3';
import { TOPICS as TOPICS_4_5 } from './phy-11-02/topics-4-5';

/**
 * Chapter 02 · Motion in a Straight Line. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15, books/master-references-2026-10-15 on the API's
 * books-snapshot branch), pages 75 to 131. Five topics from its five
 * sub-topics, each split into parts at the book's own sections, then the
 * book's five Additional Topics (A to E). The text is the book's; only where a
 * sentence points at the printed page is it reworded to fit a phone, and the
 * figures are redrawn (lib/diagrams/physics-11-02.ts).
 */
export const phy11MotionStraightLine: Chapter = {
  chapter: '02',
  title: 'Motion in a Straight Line',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_5, ...EXTRAS],
};

export default phy11MotionStraightLine;

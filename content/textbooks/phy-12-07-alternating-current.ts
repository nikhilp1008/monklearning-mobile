import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A } from './phy-12-07/extras-a';
import { TOPICS as T_EXTRAS_B_E } from './phy-12-07/extras-b-e';
import { TOPICS as T_TOPIC_5 } from './phy-12-07/topic-5';
import { TOPICS as T_TOPICS_1_2 } from './phy-12-07/topics-1-2';
import { TOPICS as T_TOPICS_3_4 } from './phy-12-07/topics-3-4';

/**
 * Chapter 7 · Alternating Current. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 459 to 516. The book prints its sub-topics in
 * the order 00, 01, 04, 02, 03; the app keeps that page order and numbers them
 * Topics 01 to 05, with the book's cross-references rewritten to match. Each
 * topic is split into parts at the book's own sections, then the
 * Supplement's five addenda as Additional Topics (A to E). The Supplement's
 * closing "Summary of Key Results" (p. 516), which only repeats the addenda's
 * formulas, is not copied. The figures are redrawn
 * (lib/diagrams/physics-12-07.ts).
 */
export const phy12AlternatingCurrent: Chapter = {
  chapter: '07',
  title: 'Alternating Current',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_1_2, ...T_TOPICS_3_4, ...T_TOPIC_5, ...T_EXTRAS_A, ...T_EXTRAS_B_E],
};

export default phy12AlternatingCurrent;

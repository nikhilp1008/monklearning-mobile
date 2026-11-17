import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_C_E } from './bio-11-01/extras-c-e';
import { TOPICS as T_TOPIC_2_EXTRAS_A_B } from './bio-11-01/topic-2-extras-a-b';
import { TOPICS as T_TOPICS_0_1 } from './bio-11-01/topics-0-1';

/**
 * Chapter 1 · The Living World. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 12 to 62. The book numbers its sub-topics 00, 01
 * and 02, and the app keeps those numbers (Topic 00 is the chapter's "Start
 * here", as in Chemistry 11 Chapter 8). Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics A to D and "What
 * NEET Actually Asks" (E, the book's Addendum P). The figures are redrawn
 * (lib/diagrams/biology-11-01.ts).
 */
export const bio11LivingWorld: Chapter = {
  chapter: '01',
  title: 'The Living World',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_TOPICS_0_1, ...T_TOPIC_2_EXTRAS_A_B, ...T_EXTRAS_C_E],
};

export default bio11LivingWorld;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_2 } from './bio-11-18/extras-c-h';
import { TOPICS as T_0 } from './bio-11-18/topics-0-2';
import { TOPICS as T_1 } from './bio-11-18/topics-3-4-extras-a-b';

/**
 * Chapter 18 · Neural Control and Coordination. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 1074 to 1134. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-18.ts).
 */
export const bio11Neural: Chapter = {
  chapter: '18',
  title: 'Neural Control and Coordination',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_0, ...T_1, ...T_2],
};

export default bio11Neural;

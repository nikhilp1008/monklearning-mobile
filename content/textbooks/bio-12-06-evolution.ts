import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-06/extras-b-d';
import { TOPICS as T_1 } from './bio-12-06/topics-1-2';
import { TOPICS as T_2 } from './bio-12-06/topics-3-4-extra-a';

/**
 * Chapter 6 · Evolution. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 295 to 350. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-06.ts).
 */
export const bio12Ch6: Chapter = {
  chapter: '6',
  title: 'Evolution',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch6;

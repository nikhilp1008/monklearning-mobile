import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-07/extras-e-h';
import { TOPICS as T_1 } from './bio-12-07/topic-4-extras-a-d';
import { TOPICS as T_2 } from './bio-12-07/topics-1-3';

/**
 * Chapter 7 · Human Health and Disease. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 352 to 407. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-07.ts).
 */
export const bio12Ch7: Chapter = {
  chapter: '7',
  title: 'Human Health and Disease',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_2, ...T_1, ...T_0],
};

export default bio12Ch7;

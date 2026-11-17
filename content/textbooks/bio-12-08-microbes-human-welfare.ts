import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-08/extras-a-g';
import { TOPICS as T_1 } from './bio-12-08/topics-0-2';
import { TOPICS as T_2 } from './bio-12-08/topics-3-5';

/**
 * Chapter 8 · Microbes in Human Welfare. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 408 to 478. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-08.ts).
 */
export const bio12Ch8: Chapter = {
  chapter: '8',
  title: 'Microbes in Human Welfare',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch8;

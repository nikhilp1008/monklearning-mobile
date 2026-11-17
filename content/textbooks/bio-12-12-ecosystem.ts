import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-12/extras-c-f';
import { TOPICS as T_1 } from './bio-12-12/topics-1-3';
import { TOPICS as T_2 } from './bio-12-12/topics-4-5-extras-a-b';

/**
 * Chapter 12 · Ecosystem. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 656 to 713. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-12.ts).
 */
export const bio12Ch12: Chapter = {
  chapter: '12',
  title: 'Ecosystem',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch12;

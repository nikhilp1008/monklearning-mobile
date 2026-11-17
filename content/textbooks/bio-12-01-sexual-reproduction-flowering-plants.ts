import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-01/extras-d-g';
import { TOPICS as T_1 } from './bio-12-01/topic-4-extras-a-c';
import { TOPICS as T_2 } from './bio-12-01/topics-1-3';

/**
 * Chapter 1 · Sexual Reproduction in Flowering Plants. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 8 to 62. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-01.ts).
 */
export const bio12Ch1: Chapter = {
  chapter: '1',
  title: 'Sexual Reproduction in Flowering Plants',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_2, ...T_1, ...T_0],
};

export default bio12Ch1;

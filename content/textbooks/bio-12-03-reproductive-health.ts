import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-03/extras-c-g';
import { TOPICS as T_1 } from './bio-12-03/topics-1-2';
import { TOPICS as T_2 } from './bio-12-03/topics-3-4-extras-a-b';

/**
 * Chapter 3 · Reproductive Health. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 112 to 161. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-03.ts).
 */
export const bio12Ch3: Chapter = {
  chapter: '3',
  title: 'Reproductive Health',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch3;

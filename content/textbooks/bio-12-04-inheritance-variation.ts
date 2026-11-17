import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-04/extras-d-g';
import { TOPICS as T_1 } from './bio-12-04/topics-1-3';
import { TOPICS as T_2 } from './bio-12-04/topics-4-5-extras-a-c';

/**
 * Chapter 4 · Principles of Inheritance and Variation. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 163 to 222. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-04.ts).
 */
export const bio12Ch4: Chapter = {
  chapter: '4',
  title: 'Principles of Inheritance and Variation',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch4;

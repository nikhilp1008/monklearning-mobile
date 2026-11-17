import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-10/extras-b-f';
import { TOPICS as T_1 } from './bio-12-10/topics-1-3';
import { TOPICS as T_2 } from './bio-12-10/topics-4-6-extra-a';

/**
 * Chapter 10 · Biotechnology and its Applications. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 535 to 599. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-10.ts).
 */
export const bio12Ch10: Chapter = {
  chapter: '10',
  title: 'Biotechnology and its Applications',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch10;

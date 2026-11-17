import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-13/extras-a-d';
import { TOPICS as T_1 } from './bio-12-13/extras-e-f';
import { TOPICS as T_2 } from './bio-12-13/topics-1-3';

/**
 * Chapter 13 · Biodiversity and Conservation. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 714 to 758. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-13.ts).
 */
export const bio12Ch13: Chapter = {
  chapter: '13',
  title: 'Biodiversity and Conservation',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_2, ...T_0, ...T_1],
};

export default bio12Ch13;

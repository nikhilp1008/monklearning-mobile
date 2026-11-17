import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-11/extras-d-f';
import { TOPICS as T_1 } from './bio-12-11/topic-4-extras-a-c';
import { TOPICS as T_2 } from './bio-12-11/topics-1-3';

/**
 * Chapter 11 · Organisms and Populations. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 601 to 655. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-11.ts).
 */
export const bio12Ch11: Chapter = {
  chapter: '11',
  title: 'Organisms and Populations',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_2, ...T_1, ...T_0],
};

export default bio12Ch11;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-02/extras-c-f';
import { TOPICS as T_1 } from './bio-12-02/topic-3-extras-a-b';
import { TOPICS as T_2 } from './bio-12-02/topics-1-2';

/**
 * Chapter 2 · Human Reproduction. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 63 to 111. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-02.ts).
 */
export const bio12Ch2: Chapter = {
  chapter: '2',
  title: 'Human Reproduction',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_2, ...T_1, ...T_0],
};

export default bio12Ch2;

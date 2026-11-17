import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-12-05/extras-a-g';
import { TOPICS as T_1 } from './bio-12-05/topics-1-3';
import { TOPICS as T_2 } from './bio-12-05/topics-4-6';

/**
 * Chapter 5 · Molecular Basis of Inheritance. Biology, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Biology Master Reference,
 * pages 224 to 293. Each topic is split into parts at the book's own sections; then
 * the addenda as Additional Topics and "What NEET Actually Asks" last. The
 * figures are redrawn (lib/diagrams/biology-12-05.ts).
 */
export const bio12Ch5: Chapter = {
  chapter: '5',
  title: 'Molecular Basis of Inheritance',
  subject: 'Biology',
  klass: 'Class 12',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio12Ch5;

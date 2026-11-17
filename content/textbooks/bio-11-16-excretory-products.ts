import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_2 } from './bio-11-16/extras-g-j';
import { TOPICS as T_1 } from './bio-11-16/topic-4-extras-a-f';
import { TOPICS as T_0 } from './bio-11-16/topics-1-3';

/**
 * Chapter 16 · Excretory Products and their Elimination. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 943 to 1011. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-16.ts).
 */
export const bio11Excretory: Chapter = {
  chapter: '16',
  title: 'Excretory Products and their Elimination',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_0, ...T_1, ...T_2],
};

export default bio11Excretory;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-14/extras-c-g';
import { TOPICS as T_1 } from './bio-11-14/topics-1-3';
import { TOPICS as T_2 } from './bio-11-14/topics-4-5-extras-a-b';

/**
 * Chapter 14 · Breathing and Exchange of Gases. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 819 to 885. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-14.ts).
 */
export const bio11Breathing: Chapter = {
  chapter: '14',
  title: 'Breathing and Exchange of Gases',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11Breathing;

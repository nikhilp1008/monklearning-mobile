import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-11/extras';
import { TOPICS as T_1 } from './bio-11-11/topics-1-2';
import { TOPICS as T_2 } from './bio-11-11/topics-3-4';

/**
 * Chapter 11 · Photosynthesis in Higher Plants. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 642 to 705. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-11.ts).
 */
export const bio11Photosynthesis: Chapter = {
  chapter: '11',
  title: 'Photosynthesis in Higher Plants',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11Photosynthesis;

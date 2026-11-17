import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-12/extras';
import { TOPICS as T_1 } from './bio-11-12/topics-0-1';
import { TOPICS as T_2 } from './bio-11-12/topics-2-3';

/**
 * Chapter 12 · Respiration in Plants. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 706 to 764. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-12.ts).
 */
export const bio11Respiration: Chapter = {
  chapter: '12',
  title: 'Respiration in Plants',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11Respiration;

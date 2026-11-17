import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-02/extras';
import { TOPICS as T_1 } from './bio-11-02/topics-0-2';
import { TOPICS as T_2 } from './bio-11-02/topics-3-5';

/**
 * Chapter 2 · Biological Classification. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 63 to 141. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-02.ts).
 */
export const bio11BiologicalClassification: Chapter = {
  chapter: '02',
  title: 'Biological Classification',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11BiologicalClassification;

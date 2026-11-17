import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_2 } from './bio-11-19/extra-h';
import { TOPICS as T_1 } from './bio-11-19/extras-b-g';
import { TOPICS as T_0 } from './bio-11-19/topics-1-12-extra-a';

/**
 * Chapter 19 · Chemical Coordination and Integration. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 1135 to 1170. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-19.ts).
 */
export const bio11Chemical: Chapter = {
  chapter: '19',
  title: 'Chemical Coordination and Integration',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_0, ...T_1, ...T_2],
};

export default bio11Chemical;

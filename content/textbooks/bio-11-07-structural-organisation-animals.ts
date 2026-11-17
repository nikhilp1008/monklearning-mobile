import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-07/extras-c-j';
import { TOPICS as T_1 } from './bio-11-07/topics-1-3';
import { TOPICS as T_2 } from './bio-11-07/topics-4-5-extras-a-b';

/**
 * Chapter 7 · Structural Organisation in Animals. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 407 to 469. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-07.ts).
 */
export const bio11StructuralOrganisation: Chapter = {
  chapter: '07',
  title: 'Structural Organisation in Animals',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11StructuralOrganisation;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-10/extras-c-f';
import { TOPICS as T_1 } from './bio-11-10/topics-1-2';
import { TOPICS as T_2 } from './bio-11-10/topics-3-4-extras-a-b';

/**
 * Chapter 10 · Cell Cycle and Cell Division. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 591 to 641. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-10.ts).
 */
export const bio11CellCycle: Chapter = {
  chapter: '10',
  title: 'Cell Cycle and Cell Division',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_1, ...T_2, ...T_0],
};

export default bio11CellCycle;

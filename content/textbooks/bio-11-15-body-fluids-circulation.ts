import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_2 } from './bio-11-15/extras-d-i';
import { TOPICS as T_0 } from './bio-11-15/topics-1-2';
import { TOPICS as T_1 } from './bio-11-15/topics-3-4-extras-a-c';

/**
 * Chapter 15 · Body Fluids and Circulation. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 886 to 942. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-15.ts).
 */
export const bio11BodyFluids: Chapter = {
  chapter: '15',
  title: 'Body Fluids and Circulation',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_0, ...T_1, ...T_2],
};

export default bio11BodyFluids;

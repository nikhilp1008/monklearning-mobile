import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_2 } from './bio-11-17/extras-c-g';
import { TOPICS as T_0 } from './bio-11-17/topics-0-2';
import { TOPICS as T_1 } from './bio-11-17/topics-3-4-extras-a-b';

/**
 * Chapter 17 · Locomotion and Movement. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 1012 to 1073. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-17.ts).
 */
export const bio11Locomotion: Chapter = {
  chapter: '17',
  title: 'Locomotion and Movement',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_0, ...T_1, ...T_2],
};

export default bio11Locomotion;

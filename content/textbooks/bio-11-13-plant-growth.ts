import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_0 } from './bio-11-13/extras-c-f';
import { TOPICS as T_1 } from './bio-11-13/topic-3-extras-a-b';
import { TOPICS as T_2 } from './bio-11-13/topics-1-2';

/**
 * Chapter 13 · Plant Growth and Development. Biology, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Biology Master Reference
 * (snapshot 2026-10-15), pages 765 to 818. Each topic is split into parts at the
 * book's own sections; then the addenda as Additional Topics and "What NEET
 * Actually Asks" last. The figures are redrawn (lib/diagrams/biology-11-13.ts).
 */
export const bio11PlantGrowth: Chapter = {
  chapter: '13',
  title: 'Plant Growth and Development',
  subject: 'Biology',
  klass: 'Class 11',
  topics: [...T_2, ...T_1, ...T_0],
};

export default bio11PlantGrowth;

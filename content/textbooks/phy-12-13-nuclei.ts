import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_A_B } from './phy-12-13/extras-a-b';
import { TOPICS as T_EXTRAS_C_E } from './phy-12-13/extras-c-e';
import { TOPICS as T_TOPIC_1 } from './phy-12-13/topic-1';
import { TOPICS as T_TOPIC_2 } from './phy-12-13/topic-2';
import { TOPICS as T_TOPIC_3 } from './phy-12-13/topic-3';
import { TOPICS as T_TOPIC_4 } from './phy-12-13/topic-4';

/**
 * Chapter 13 · Nuclei. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 815 to 864. Four topics from the book's four sub-topics,
 * each split into parts at the book's own sections, then the five addenda as
 * Additional Topics (A to E). The figures are redrawn (lib/diagrams/physics-12-13.ts).
 */
export const phy12Nuclei: Chapter = {
  chapter: '13',
  title: 'Nuclei',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_B, ...T_EXTRAS_C_E],
};

export default phy12Nuclei;

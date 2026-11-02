import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS_B_D } from './phy-12-12/extras-b-d';
import { TOPICS as T_EXTRAS_E_F } from './phy-12-12/extras-e-f';
import { TOPICS as T_TOPIC_1 } from './phy-12-12/topic-1';
import { TOPICS as T_TOPIC_2 } from './phy-12-12/topic-2';
import { TOPICS as T_TOPIC_3_EXTRA_A } from './phy-12-12/topic-3-extra-a';

/**
 * Chapter 12 · Atoms. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 760 to 814. Three topics from the book's three sub-topics
 * (01, 02a and 02b in the book, 01 to 03 here), each split into parts at the
 * book's own sections, then the six addenda as Additional Topics (A to F) and
 * the Supplement's closing "Comprehensive Practice" as Additional Topic G. The
 * figures are redrawn (lib/diagrams/physics-12-12.ts, physics-12-12b.ts).
 */
export const phy12Atoms: Chapter = {
  chapter: '12',
  title: 'Atoms',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPIC_1, ...T_TOPIC_2, ...T_TOPIC_3_EXTRA_A, ...T_EXTRAS_B_D, ...T_EXTRAS_E_F],
};

export default phy12Atoms;

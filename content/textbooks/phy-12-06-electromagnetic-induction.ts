import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRA_H } from './phy-12-06/extra-h';
import { TOPICS as T_EXTRAS_A_C } from './phy-12-06/extras-a-c';
import { TOPICS as T_EXTRAS_D_G } from './phy-12-06/extras-d-g';
import { TOPICS as T_TOPIC_2 } from './phy-12-06/topic-2';
import { TOPICS as T_TOPIC_3 } from './phy-12-06/topic-3';
import { TOPICS as T_TOPIC_4 } from './phy-12-06/topic-4';
import { TOPICS as T_TOPICS_0_1 } from './phy-12-06/topics-0-1';

/**
 * Chapter 6 · Electromagnetic Induction. Physics, Class 12.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 12 Physics Master Reference
 * (snapshot 2026-10-15), pages 389 to 458. The book's "Experimental
 * Foundations — The Faraday & Henry Experiments" opens the chapter (n "00",
 * before Topic 01; the founder's choice, 2026-10-22), then four topics from
 * the book's four sub-topics, each split into parts at the book's own
 * sections. The Supplement's seven addenda follow as Additional Topics A to G,
 * and the book's "Chapter Synthesis & Master Revision" as H, without its
 * master formula compendium (the app has its own Formula sheet). The figures
 * are redrawn (lib/diagrams/physics-12-06.ts).
 */
export const phy12ElectromagneticInduction: Chapter = {
  chapter: '06',
  title: 'Electromagnetic Induction',
  subject: 'Physics',
  klass: 'Class 12',
  topics: [...T_TOPICS_0_1, ...T_TOPIC_2, ...T_TOPIC_3, ...T_TOPIC_4, ...T_EXTRAS_A_C, ...T_EXTRAS_D_G, ...T_EXTRA_H],
};

export default phy12ElectromagneticInduction;

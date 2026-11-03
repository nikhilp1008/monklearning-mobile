import type { Chapter } from '@/lib/textbooks';

import { TOPICS as TOPIC_8_EXTRAS } from './phy-11-06/topic-8-extras';
import { TOPICS as TOPICS_1_3 } from './phy-11-06/topics-1-3';
import { TOPICS as TOPICS_4_5 } from './phy-11-06/topics-4-5';
import { TOPICS as TOPICS_6_7 } from './phy-11-06/topics-6-7';

/**
 * Chapter 06 · System of Particles and Rotational Motion. Physics, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Physics Master Reference
 * (snapshot 2026-10-15), pages 364 to 455. Eight topics — the book's Chapter
 * Foundations and its seven sections — each split into parts at the book's
 * own sections, then the book's six Additional Topics (A to F). The figures
 * are redrawn (lib/diagrams/physics-11-06.ts).
 */
export const phy11RotationalMotion: Chapter = {
  chapter: '06',
  title: 'System of Particles and Rotational Motion',
  subject: 'Physics',
  klass: 'Class 11',
  topics: [...TOPICS_1_3, ...TOPICS_4_5, ...TOPICS_6_7, ...TOPIC_8_EXTRAS],
};

export default phy11RotationalMotion;

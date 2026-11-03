import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-01/extras';
import { TOPICS as T_TOPICS_1_4 } from './chem-11-01/topics-1-4';
import { TOPICS as T_TOPICS_5_8 } from './chem-11-01/topics-5-8';

/**
 * Chapter 1 · Some Basic Concepts of Chemistry. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 7 to 71. Eight topics, each split into parts
 * at the book's own sections, then the Additional Topics' addenda (A to C)
 * and "What JEE and NEET Actually Ask" as the last Additional topic. The
 * figures are redrawn (lib/diagrams/chemistry-11-01.ts).
 */
export const chem11BasicConcepts: Chapter = {
  chapter: '01',
  title: 'Some Basic Concepts of Chemistry',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_4, ...T_TOPICS_5_8, ...T_EXTRAS],
};

export default chem11BasicConcepts;

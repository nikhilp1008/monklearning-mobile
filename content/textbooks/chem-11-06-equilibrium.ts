import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-06/extras';
import { TOPICS as T_TOPICS_1_3 } from './chem-11-06/topics-1-3';
import { TOPICS as T_TOPICS_4_5 } from './chem-11-06/topics-4-5';

/**
 * Chapter 6 · Equilibrium. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 251 to 294. The book prints its sub-topics in
 * the order 01, 04, 05, 02, 03; the app keeps that page order and numbers
 * them Topics 01 to 05, with the book's cross-references rewritten to match.
 * Then the Additional Topics' addenda (their answers, printed together on
 * p. 290, set with each question) and "What JEE and NEET Actually Ask". The
 * figures are redrawn (lib/diagrams/chemistry-11-06.ts).
 */
export const chem11Equilibrium: Chapter = {
  chapter: '06',
  title: 'Equilibrium',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS_1_3, ...T_TOPICS_4_5, ...T_EXTRAS],
};

export default chem11Equilibrium;

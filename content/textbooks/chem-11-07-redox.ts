import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-07/extras';
import { TOPICS as T_TOPICS } from './chem-11-07/topics';

/**
 * Chapter 7 · Redox Reactions. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 295 to 344. Four topics. Each topic is split into parts at the
 * book's own sections; then the Additional Topics' addenda, the Summary
 * Checklist (kept as its own Additional topic) and "What JEE and NEET
 * Actually Ask". The figures are redrawn (lib/diagrams/chemistry-11-07.ts).
 */
export const chem11Redox: Chapter = {
  chapter: '07',
  title: 'Redox Reactions',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS, ...T_EXTRAS],
};

export default chem11Redox;

import type { Chapter } from '@/lib/textbooks';

import { TOPICS as T_EXTRAS } from './chem-11-08/extras';
import { TOPICS as T_TOPICS } from './chem-11-08/topics';

/**
 * Chapter 8 · Organic Chemistry — Some Basic Principles and Techniques. Chemistry, Class 11.
 *
 * WORD FOR WORD FROM THE BOOK: the Drona Class 11 Chemistry Master Reference
 * (snapshot 2026-10-15), pages 345 to 399. The book's opening section (Subtopic 00) comes first as the chapter's "Start here", then four topics. Each topic is split into parts at the
 * book's own sections; then the Additional Topics' addenda, the Summary
 * Checklist (kept as its own Additional topic) and "What JEE and NEET
 * Actually Ask". The figures are redrawn (lib/diagrams/chemistry-11-08.ts).
 */
export const chem11OrganicBasics: Chapter = {
  chapter: '08',
  title: 'Organic Chemistry — Some Basic Principles and Techniques',
  subject: 'Chemistry',
  klass: 'Class 11',
  topics: [...T_TOPICS, ...T_EXTRAS],
};

export default chem11OrganicBasics;

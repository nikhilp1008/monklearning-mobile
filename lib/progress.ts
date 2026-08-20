import { apiFetch } from '@/lib/api';

/**
 * GET /progress — typed to the slice the app actually renders today.
 *
 * The endpoint returns the whole Progress page in one payload (~130KB with
 * the full chapter/concept tree). Home only needs the score and the ledger,
 * so the tree is typed loosely here and a fuller type can grow alongside the
 * Progress screen when that gets wired.
 */

export interface MonkScore {
  display: number;
  raw: number;
  ceiling: number;
  delta_week: number;
  flagged_concepts: number;
  climb: { date: string; score: number }[];
}

export interface ProgressLedger {
  doubts_solved: number;
  questions_attempted: number;
  concepts_mastered: number;
  chapters_strong: number;
}

/** Spec §8's presentation states, verbatim from the API. */
export type MasteryState = 'strong' | 'improving' | 'needs_revision' | 'not_started';

export interface ProgressConcept {
  concept_id: string;
  name: string;
  mastery: number;
  state: MasteryState;
}

export interface ProgressChapter {
  chapter_id: string;
  name: string;
  class_level: number;
  subject: string;
  mastery: number;
  /** Null until chapter_exam_weights is researched server-side. */
  weight_marks: number | null;
  state: MasteryState;
  headroom: number;
  concepts: ProgressConcept[];
  curated: boolean;
}

export interface ProgressSubject {
  /** Lowercase API name: 'physics' | 'chemistry' | 'mathematics' | 'biology'. */
  subject: string;
  score: number;
  chapters: ProgressChapter[];
}

export interface ProgressRecommendation {
  role: 'highest_lever' | 'clear_flag' | 'exam_craft';
  title: string;
  reason: string;
  subject?: string;
  chapter_id?: string;
  concept_id?: string;
}

export interface ProgressSummary {
  exam: string;
  entitlement: string;
  monk_score: MonkScore;
  ledger: ProgressLedger;
  subjects: ProgressSubject[];
  pace: { available: boolean; note?: string };
  recommendations: ProgressRecommendation[];
}

/**
 * Module-level cache so Home can paint the last-known numbers instantly on
 * focus and refresh them in the background — the payload is too heavy to
 * re-await on every tab switch, and a score that's 30 seconds stale is
 * indistinguishable from a fresh one to the student.
 */
let cached: ProgressSummary | null = null;

export function getCachedProgress(): ProgressSummary | null {
  return cached;
}

/**
 * Must be called on logout/account switch when one exists — the cache is
 * keyed to nothing, so without this the next account would briefly see the
 * previous student's score.
 */
export function clearProgressCache(): void {
  cached = null;
}

export async function getProgress(): Promise<ProgressSummary> {
  const fresh = await apiFetch<ProgressSummary>('/progress');
  cached = fresh;
  return fresh;
}

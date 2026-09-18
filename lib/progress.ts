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
  /**
   * Median seconds per question, by subject, against this exam's target.
   *
   * MEDIAN, not mean: the production distribution runs from under a second to
   * a row where the app was left open for two days, and a mean belongs to that
   * row. A subject is omitted rather than guessed at until it has enough
   * samples, so `rows` can be shorter than the student's subject list.
   */
  pace: {
    available: boolean;
    note?: string;
    rows?: {
      subject: string;
      actual_seconds: number;
      target_seconds: number;
      over: boolean;
      samples: number;
    }[];
  };
  recommendations: ProgressRecommendation[];
}

/**
 * Module-level cache so Home can paint the last-known numbers instantly on
 * focus and refresh them in the background — the payload is too heavy to
 * re-await on every tab switch, and a score that's 30 seconds stale is
 * indistinguishable from a fresh one to the student.
 */
let cached: ProgressSummary | null = null;
let cachedAt = 0;

/**
 * How long the cached payload counts as the answer rather than as a fallback.
 *
 * The comment above already claims a 30-second-old score is indistinguishable
 * from a fresh one; this is that sentence enforced. Home and Progress both
 * refetch on focus, so tabbing between them was fetching ~130KB a second time
 * to repaint identical numbers. Within the window `getProgress` resolves
 * without touching the network at all.
 */
const FRESH_MS = 30000;

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
  cachedAt = 0;
}

/**
 * `force` is for callers that need the truth rather than a fast repaint.
 *
 * The freshness window above is safe for anything that only *displays* the
 * score, but proof (lib/proof.ts) does not display it — it DIFFS it, baseline
 * against live, and a diff of a cached payload against itself is silently
 * empty. A student finishing a short class would simply be told they had
 * earned nothing. Same reasoning for the moment after an answer is graded:
 * the score has demonstrably moved, so the window's premise ("30 seconds stale
 * is indistinguishable from fresh") no longer holds.
 */
export async function getProgress(
  options?: { force?: boolean },
): Promise<ProgressSummary> {
  if (!options?.force && cached && Date.now() - cachedAt < FRESH_MS) return cached;
  const fresh = await apiFetch<ProgressSummary>('/progress');
  cached = fresh;
  cachedAt = Date.now();
  return fresh;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

import type { SubjectKey } from '@/constants/onboarding-chapters';

/**
 * WHAT A STUDENT TOLD US IN THE ONBOARDING QUESTIONS.
 *
 * Device-only, on purpose and for now: the `profiles` table has no columns
 * for any of this yet (the server is not ours to change from here). Name, exam, class and phone still go to the server
 * through lib/profile.ts as before. These stay on the phone until the server
 * grows somewhere to keep them, at which point `pushProfile` can send them.
 *
 * Every field is optional: each question has a Skip.
 */
export type ExamYear = '2027' | '2028' | 'unsure';
export type AiUse = 'often' | 'sometimes' | 'once' | 'never';

export interface OnboardingAnswers {
  examYear?: ExamYear;
  /** The goal row's id, e.g. 'iit', 'gov-mbbs'. */
  goal?: string;
  /** The band's id, e.g. '100-150', or 'none' for "Haven't taken one". */
  mockBand?: string;
  /** Asked only when there is no mock to report. */
  syllabus?: string;
  strongest?: SubjectKey;
  weakest?: SubjectKey;
  hardChapters?: string[];
  confidentChapter?: string;
  ai?: AiUse;
  aiFeelings?: string[];

  /** Set when the name is typed: this device is part-way through the
   *  questions, so a stored name no longer means "finished". */
  started?: boolean;
  /** The class screen was answered, so the profile's class is a real pick
   *  and not its default. */
  classPicked?: boolean;
  /** Set when the last question is answered or skipped: a student who signs
   *  in after this resumes at the pass, not at the name. */
  questionsDone?: boolean;
  /** Set once onboarding is finished (the profile reached the server, or an
   *  existing account was signed into). */
  finished?: boolean;
}

/** What a change of exam or class makes stale: every answer that was given
 *  in terms of the old one (Maths chapters for a NEET student, a mock band
 *  out of 300 for one now marked out of 720). */
export const ANSWERS_TIED_TO_EXAM: Partial<OnboardingAnswers> = {
  goal: undefined,
  mockBand: undefined,
  syllabus: undefined,
  strongest: undefined,
  weakest: undefined,
  hardChapters: undefined,
  confidentChapter: undefined,
};

const KEY = 'onboarding.answers';

let cached: OnboardingAnswers | null = null;

export async function getAnswers(): Promise<OnboardingAnswers> {
  if (cached) return cached;
  try {
    const raw = await AsyncStorage.getItem(KEY);
    cached = raw ? (JSON.parse(raw) as OnboardingAnswers) : {};
  } catch {
    cached = {};
  }
  return cached;
}

/** Merges, so each screen writes only its own answer. */
export async function saveAnswers(patch: Partial<OnboardingAnswers>): Promise<void> {
  const next = { ...(await getAnswers()), ...patch };
  cached = next;
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Kept in memory for this session; a lost answer is not worth an error.
  }
}

/** On sign-out, with the rest of the profile: the next student starts clean. */
export async function clearAnswers(): Promise<void> {
  cached = {};
  try {
    await AsyncStorage.removeItem(KEY);
  } catch {
    cached = null;
  }
}

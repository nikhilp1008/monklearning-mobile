import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * WHERE A STUDENT IS IN ONBOARDING, ON THIS DEVICE.
 *
 * The questionnaire (goal, last mock score, strongest and weakest subject,
 * hard chapters, AI use) was removed on 9 Nov 2026 (Nikhil): too many
 * questions before a student sees the app. What is left is the exam year,
 * asked with the exam, and the flags that let a student who closes the app
 * part-way resume at the right screen. Name, exam, class and phone go to the
 * server through lib/profile.ts.
 */
export type ExamYear = '2027' | '2028' | 'unsure';

export interface OnboardingAnswers {
  examYear?: ExamYear;

  /** Set when the name is typed: this device is part-way through the
   *  questions, so a stored name no longer means "finished". */
  started?: boolean;
  /** The class screen was answered, so the profile's class is a real pick
   *  and not its default. */
  classPicked?: boolean;
  /** Set when the class is picked, the last question: a student who signs
   *  in after this resumes at the pass, not at the name. */
  questionsDone?: boolean;
  /** Set once onboarding is finished (the profile reached the server, or an
   *  existing account was signed into). */
  finished?: boolean;
}

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

/** The answers if already in memory, else null (and a read is started so the
 *  next call has them). For synchronous callers that cannot await. */
export function getCachedAnswers(): OnboardingAnswers | null {
  if (!cached) void getAnswers();
  return cached;
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

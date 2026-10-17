import type { OnboardingAnswers } from '@/lib/onboarding-answers';
import { getAnswers } from '@/lib/onboarding-answers';
import { supabase } from '@/lib/supabase';

/**
 * Mirrors the onboarding answers into `student_self_report` (API migration
 * 0104) so the tutor can use them as a prior for the chapter it is teaching.
 *
 * Deliberately NOT sent: `aiFeelings` (how they feel about AI) and `mockBand`
 * (the starting-point paper measures that properly). The hard-chapters list is
 * sent as typed because students may add their own; the server only ever
 * compares it with real chapter names and never puts it in a prompt.
 *
 * Best-effort: a failure here must never block onboarding, so this never
 * throws. Until the table exists the upsert just returns an error.
 */
export function answersToRow(userId: string, a: OnboardingAnswers) {
  return {
    user_id: userId,
    exam_year: a.examYear && a.examYear !== 'unsure' ? a.examYear : null,
    goal: a.goal ?? null,
    syllabus: a.syllabus ?? null,
    strongest: a.strongest ?? null,
    weakest: a.weakest ?? null,
    hard_chapters: (a.hardChapters ?? []).map((c) => c.slice(0, 120)).slice(0, 5),
    confident_chapter: a.confidentChapter?.slice(0, 120) ?? null,
    ai_use: a.ai ?? null,
    updated_at: new Date().toISOString(),
  };
}

export async function pushSelfReport(): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user || user.is_anonymous) return;
    const answers = await getAnswers();
    if (!answers.questionsDone && !answers.finished) return;
    const { error } = await supabase.from('student_self_report').upsert(answersToRow(user.id, answers));
    if (error) console.warn('[self-report] not saved:', error.message);
  } catch (err) {
    console.warn('[self-report] not saved:', err);
  }
}

import type { FollowUpTurn } from '@/lib/doubt-followup';

/**
 * The history a follow-up is sent with, after one more question.
 *
 * `said` is what the teacher got out before the answer ended. It is empty when
 * the student asked again before any of it arrived: the question is still kept,
 * because "what was my last question" is something a student asks of a teacher
 * they have just interrupted. A blank question (a recording that never became
 * words) is not a turn at all.
 */
export function withTurn(turns: FollowUpTurn[], asked: string, said: string): FollowUpTurn[] {
  if (!asked.trim()) return turns;
  return [
    ...turns,
    { role: 'user', content: asked },
    ...(said ? [{ role: 'assistant' as const, content: said }] : []),
  ];
}

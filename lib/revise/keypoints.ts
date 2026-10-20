import { KEY_POINTS as P11_01 } from '@/lib/revise/keypoints-physics-11-01';
import { KEY_POINTS as P11_02 } from '@/lib/revise/keypoints-physics-11-02';
import { KEY_POINTS as P11_03 } from '@/lib/revise/keypoints-physics-11-03';
import { KEY_POINTS as P11_04 } from '@/lib/revise/keypoints-physics-11-04';
import { KEY_POINTS as P11_05 } from '@/lib/revise/keypoints-physics-11-05';
import { KEY_POINTS as P11_06 } from '@/lib/revise/keypoints-physics-11-06';

/**
 * KEY POINTS, by chapter ("physics|11|1").
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Memory lines (`say`) are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>.
 */
export type KeyPointKind = 'remember' | 'mixup' | 'mistake' | 'shortcut';
export type KeyPoint = { topic: number; kind: KeyPointKind; q: string; a: string; why: string | null; say: string | null };

/** The memory lines: the first two of each topic, in chapter order. */
export function memoryLines(points: KeyPoint[]): string[] {
  const per: Record<number, number> = {};
  return points.filter((p) => p.say && (per[p.topic] = (per[p.topic] ?? 0) + 1) <= 2).map((p) => p.say as string);
}

export const KEY_POINTS: Record<string, KeyPoint[]> = {
  'physics|11|1': P11_01,
  'physics|11|2': P11_02,
  'physics|11|3': P11_03,
  'physics|11|4': P11_04,
  'physics|11|5': P11_05,
  'physics|11|6': P11_06,
};

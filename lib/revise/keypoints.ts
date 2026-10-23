import { KEY_POINTS as P11_01 } from '@/lib/revise/keypoints-physics-11-01';
import { KEY_POINTS as P11_02 } from '@/lib/revise/keypoints-physics-11-02';
import { KEY_POINTS as P11_03 } from '@/lib/revise/keypoints-physics-11-03';
import { KEY_POINTS as P11_04 } from '@/lib/revise/keypoints-physics-11-04';
import { KEY_POINTS as P11_05 } from '@/lib/revise/keypoints-physics-11-05';
import { KEY_POINTS as P11_06 } from '@/lib/revise/keypoints-physics-11-06';
import { KEY_POINTS as P11_07 } from '@/lib/revise/keypoints-physics-11-07';
import { KEY_POINTS as P11_08 } from '@/lib/revise/keypoints-physics-11-08';
import { KEY_POINTS as P11_09 } from '@/lib/revise/keypoints-physics-11-09';
import { KEY_POINTS as P11_10 } from '@/lib/revise/keypoints-physics-11-10';
import { KEY_POINTS as P11_11 } from '@/lib/revise/keypoints-physics-11-11';
import { KEY_POINTS as P11_12 } from '@/lib/revise/keypoints-physics-11-12';
import { KEY_POINTS as P11_13 } from '@/lib/revise/keypoints-physics-11-13';
import { KEY_POINTS as P11_14 } from '@/lib/revise/keypoints-physics-11-14';
import { KEY_POINTS as P12_01 } from '@/lib/revise/keypoints-physics-12-01';
import { KEY_POINTS as P12_02 } from '@/lib/revise/keypoints-physics-12-02';
import { KEY_POINTS as P12_03 } from '@/lib/revise/keypoints-physics-12-03';
import { KEY_POINTS as P12_04 } from '@/lib/revise/keypoints-physics-12-04';
import { KEY_POINTS as P12_05 } from '@/lib/revise/keypoints-physics-12-05';
import { KEY_POINTS as P12_06 } from '@/lib/revise/keypoints-physics-12-06';
import { KEY_POINTS as P12_07 } from '@/lib/revise/keypoints-physics-12-07';
import { KEY_POINTS as P12_08 } from '@/lib/revise/keypoints-physics-12-08';

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
  'physics|11|7': P11_07,
  'physics|11|8': P11_08,
  'physics|11|9': P11_09,
  'physics|11|10': P11_10,
  'physics|11|11': P11_11,
  'physics|11|12': P11_12,
  'physics|11|13': P11_13,
  'physics|11|14': P11_14,
  'physics|12|1': P12_01,
  'physics|12|2': P12_02,
  'physics|12|3': P12_03,
  'physics|12|4': P12_04,
  'physics|12|5': P12_05,
  'physics|12|6': P12_06,
  'physics|12|7': P12_07,
  'physics|12|8': P12_08,
};

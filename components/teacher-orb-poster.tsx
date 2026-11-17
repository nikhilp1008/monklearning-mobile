import { type ViewStyle } from 'react-native';

import { TeacherOrbSeeds } from '@/components/teacher-orb-seeds';
import type { TeacherId } from '@/lib/preferences';

/** The living orb on the Ask buttons, exported here so screens import both orbs from one place. */
export { AskOrb, type AskOrbPhase } from '@/components/teacher-orb-seeds';

/**
 * THE TEACHER'S ORB WHERE IT IS SMALL: Home's teacher row, the Ask bars, the
 * live class and onboarding.
 *
 * Since 12 Nov 2026 this is the seeded orb at rest, drawn by
 * components/teacher-orb-seeds.tsx: the same lit sphere in today's colours
 * ("B · + Cleaner", Nikhil's pick), with 96 faint seeds of light inside it.
 * The 15% drifting light is gone: under the motion rules agreed the same day,
 * nothing moves until something happens.
 *
 * The name and props are kept so every caller picks it up unchanged.
 */
export function TeacherOrbPoster({
  teacher,
  size,
  style,
}: {
  teacher: TeacherId;
  size: number;
  style?: ViewStyle;
}) {
  return <TeacherOrbSeeds teacher={teacher} size={size} style={style} />;
}

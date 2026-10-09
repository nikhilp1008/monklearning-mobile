import type { TeacherId } from '@/lib/preferences';
import type { SkyTheme } from '@/components/night-sky';

/**
 * THE TWO TEACHERS, DESCRIBED ONCE.
 *
 * Profile carried this list and the post-payment screen copied it, which is
 * how the app ended up with two Snap icons — the same mistake, waiting to
 * happen in words. Anything that names a teacher reads it from here.
 *
 * TWO WORDS EACH, NOT THREE. They were "calm · measured · exacting" and
 * "warm · quick · encouraging": six adjectives for a choice between two
 * people, and by the third word a student is reading a personality test
 * rather than picking a teacher. Two holds the difference — one for the
 * manner, one for the method — and both halves survive being read at a
 * glance, which is the only way this line is ever read.
 *
 *   Drona   calm · thorough      "measured" and "exacting" were the same
 *                                promise twice, in words a seventeen year old
 *                                would not use. Thorough is what both meant.
 *   Vedha   warm · encouraging   "quick" was the odd one out: it described
 *                                pace where the other two describe manner,
 *                                and it reads as "rushed" beside a teacher
 *                                whose first word is "calm".
 */
export const TEACHERS: {
  id: TeacherId;
  name: string;
  /** The tag line under the orb, wherever the orbs are drawn. */
  trait: string;
  /** One sentence, for screens with room for it. */
  line: string;
}[] = [
  {
    id: 'drona',
    name: 'Drona',
    trait: 'calm · thorough',
    line: 'Takes it slowly, and will not move on until the step is proved.',
  },
  {
    id: 'vedha',
    name: 'Vedha',
    trait: 'warm · encouraging',
    line: 'Keeps the pace up, and talks you through the turns.',
  },
];

/**
 * WHAT EACH TEACHER IS MADE OF LIGHT.
 *
 * Six colours per teacher, dark to bright. They are the palette the Select
 * Teacher screen's shader mixes its field and its orb from, and the first,
 * middle and last of them are what the header's still orb is drawn with. One
 * list, so the small orb on Home and the full-screen one on the picker are
 * provably the same teacher rather than two things that look similar.
 *
 * THESE REPLACE AN EARLIER PAIR, and the replacement was a decision, not a
 * merge. The old orb (`components/teacher-orb.tsx`, now deleted) carried the
 * palettes the marketing site and the old Profile used: Drona overlapped on
 * two of six, Vedha on none at all. Keeping both would have meant a student
 * seeing one Vedha here and a different Vedha somewhere else, so the app has
 * one teacher orb now and it is drawn from these.
 */
export const TEACHER_PALETTES: Record<TeacherId, readonly string[]> = {
  drona: ['#6E2A06', '#B8481A', '#E2601C', '#F2A93B', '#8A3A0E', '#FFB85C'],
  vedha: ['#8A5E0C', '#EEA31F', '#FBDDA0', '#F2B23A', '#B06A0E', '#FFE9B8'],
};

/**
 * The still orb's gradient — `teacher.orbPoster` in the handoff's tokens.
 *
 * Bright at the lit shoulder, through the body colour, to the dark edge. The
 * stops differ between the two because the light does: Vedha's bright half
 * runs further before it turns, which is the whole visual difference between a
 * warm teacher and a deep one at 34 points.
 */
export const ORB_POSTERS: Record<TeacherId, { body: string[]; stops: number[] }> = {
  drona: { body: ['#F2A93B', '#E2601C', '#6E2A06'], stops: [0, 0.45, 0.9] },
  vedha: { body: ['#FBDDA0', '#EEA31F', '#8A5E0C'], stops: [0, 0.5, 0.92] },
};

/**
 * The teacher's colour where it has to sit on PAPER.
 *
 * `TEACHER_PALETTES` is built for light on a dark ground — six colours a
 * shader mixes, dark through bright. Dropped straight onto Profile's white
 * page it is far too hot, and Drona's deep browns go muddy against cream. This
 * is the same two teachers raised into a range that works on white: a three
 * stop ramp for the sliding thumb on the Speaks control, which is the one
 * place the teacher's colour appears outside their own screens.
 *
 * Verbatim from the Profile handoff's `languageThumb`.
 */
export const TEACHER_THUMB: Record<TeacherId, [string, string, string]> = {
  drona: ['#FFCB8E', '#F7B060', '#EE8A45'],
  vedha: ['#FFF1CF', '#FBDDA0', '#F4BE55'],
};

/**
 * "calm · thorough" → "Calm · Thorough".
 *
 * The list stays lower case — it reads as a fragment in body copy, which is
 * most of where it appears. Two places want capitals: the name under the orb
 * on Select Teacher, and the line under the name in Home's console. They ask
 * for them here rather than the data forking into two spellings.
 */
export function titleCaseTrait(trait: string): string {
  return trait.replace(/(^|· )([a-z])/g, (_, lead: string, c: string) => lead + c.toUpperCase());
}

/**
 * HOME TAKES ON THE CHOSEN TEACHER'S LIGHT. The header sky and the two tiles
 * under it are the brand's night with the teacher's warmth along its foot:
 * ember and saffron for Drona, honey and pale gold for Vedha — the colours of
 * their orbs. Home only, by decision: it is where the teacher is chosen and
 * named. See ThemedSky in components/night-sky.tsx.
 */
export const SKY_THEMES: Record<TeacherId, SkyTheme> = {
  drona: {
    gold: '#F2A93B',
    mari: '#E2601C',
    pale: '#FFB85C',
    ember: '#E2601C',
    rust: '#B8481A',
    bronze: '#8A3A0E',
  },
  vedha: {
    gold: '#F2B23A',
    mari: '#EEA31F',
    pale: '#FBDDA0',
    ember: '#F2B23A',
    rust: '#B06A0E',
    bronze: '#8A5E0C',
  },
};

/** The Start arrow's colour, the teacher's own marigold. */
export const START_ARROW: Record<TeacherId, string> = { drona: '#E2601C', vedha: '#EEA31F' };

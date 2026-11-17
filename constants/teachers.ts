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
 * "CLEANER" (Nikhil, 12 Nov 2026). Every teacher colour below was nudged the
 * same way: the same hue, 15% more saturation and 3% more light, so the orange
 * reads brighter and less dusty without becoming a different colour. The
 * darkest stops (the orb's edge and the bronze) kept their lightness, so the
 * deep end stays deep. Drona's orange went #E2601C -> #F3651B. The review,
 * with today's and the new colours side by side, is the "Drona's Orange" page.
 */
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
  drona: ['#742800', '#D2480F', '#F3651B', '#FFB23D', '#933705', '#FFBF6B'],
  // V1 "richer honey" (Nikhil, 9 Nov 2026): the dark end is a warm brown
  // now, not the olive that made Vedha read as dull beside Drona.
  vedha: ['#974A00', '#FFAE28', '#FFDE9E', '#FFBD47', '#DF7A01', '#FFF0D1'],
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
  drona: { body: ['#FFB23D', '#F3651B', '#742800'], stops: [0, 0.45, 0.9] },
  vedha: { body: ['#FFE7B5', '#FFAE28', '#A44D00'], stops: [0, 0.5, 0.92] },
};

/**
 * The colour of the seeds of light inside the orb (components/teacher-orb-seeds.tsx,
 * 12 Nov 2026): a pale tint of each teacher's own light.
 */
export const ORB_SEED: Record<TeacherId, string> = { drona: '#FFD9A8', vedha: '#FFF0D1' };

/**
 * THE ASK LIGHT'S COLOURS (components/dock-light.tsx; Nikhil, 12 Nov 2026,
 * "2b" on the Ask Glow page). The light is solid `floor` at the bottom edge,
 * then the four `drift` colours move across the width above it (led by the
 * teacher's own two, with a gold and a cream drifting through, as the old
 * light did), fading to `tail` at the top. Vedha's are her family's
 * equivalents; her look as a whole is on hold.
 */
export const ASK_LIGHT: Record<TeacherId, { floor: string; tail: string; drift: [string, string, string, string] }> = {
  drona: { floor: '#F3651B', tail: '#FFD9A8', drift: ['#F3651B', '#FFB23D', '#FBDDA0', '#FF8A3D'] },
  vedha: { floor: '#FFAE28', tail: '#FFF0D1', drift: ['#FFAE28', '#FFBD47', '#FFDE9E', '#DF7A01'] },
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
  drona: ['#FFD29D', '#FFB867', '#FB9147'],
  vedha: ['#FFF5DE', '#FFE3AB', '#FFC759'],
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
    gold: '#FFB23D',
    mari: '#F3651B',
    pale: '#FFBF6B',
    ember: '#F3651B',
    rust: '#D2480F',
    bronze: '#933705',
  },
  vedha: {
    gold: '#FFBD47',
    mari: '#FFAE28',
    pale: '#FFDE9E',
    ember: '#FFB12F',
    rust: '#DF7A01',
    bronze: '#974A00',
  },
};

/** The Start arrow's colour, the teacher's own marigold. */
export const START_ARROW: Record<TeacherId, string> = { drona: '#F3651B', vedha: '#FFAE28' };

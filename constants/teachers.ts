import type { TeacherId } from '@/lib/preferences';

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

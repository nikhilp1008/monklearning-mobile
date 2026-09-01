/**
 * What the loading card says while a class is being built.
 *
 * The card is on screen for the whole `session/start` → `scope` → socket →
 * first-spoken-word chain, which has been measured in tens of seconds. It used
 * to say one hardcoded line ("Drona is picking up the chalk…") for all of it.
 *
 * The phases below are real, observed events, not a timer — see
 * `app/entering-classroom.tsx` and `app/live-classroom.tsx` for where each is
 * raised. Only `planning` is opaque to the client: `POST /session/{id}/scope`
 * is a single blocking call whose four internal stages (db_reads → llm_scoping
 * → plan → done) are not visible until it returns. That one phase gets a
 * rotating set; every other phase is a single line that is true the whole time
 * it shows.
 *
 * The heading above these does NOT change. The design varies it between
 * `09 Entering classroom` and `09L Entering lesson`, i.e. by context rather
 * than over time, and a heading that rewrites itself every few seconds fights
 * the calm the screen is going for. All the progress lives in the status line.
 */

export type ClassroomPhase = 'opening' | 'planning' | 'joining' | 'writing';

/** Subject keys as the catalogue spells them (`lib/drona.ts`). */
export type StatusSubject = 'physics' | 'chemistry' | 'mathematics' | 'biology';

/**
 * The rotating set for `planning`, by subject.
 *
 * Clamped forward, never looped (see `hooks/use-staged-status.ts`), so the last
 * line of each set is the one a long wait rests on — it has to still be true
 * after a minute. None of them promise a time or claim a step that cannot be
 * checked.
 *
 * Deliberately about the work, not about the student: "Working through the
 * physics" is something Drona is doing. Progress copy that congratulates or
 * hypes ("Great choice!") reads as filler on the third viewing.
 */
const PLANNING_BY_SUBJECT: Record<StatusSubject, readonly string[]> = {
  physics: [
    'Planning your lesson…',
    'Choosing where to start…',
    'Working through the physics…',
    'Picking the examples…',
    'Setting up the board…',
  ],
  chemistry: [
    'Planning your lesson…',
    'Choosing where to start…',
    'Working through the chemistry…',
    'Picking the examples…',
    'Setting up the board…',
  ],
  mathematics: [
    'Planning your lesson…',
    'Choosing where to start…',
    'Working through the maths…',
    'Picking the worked examples…',
    'Setting up the board…',
  ],
  biology: [
    'Planning your lesson…',
    'Choosing where to start…',
    'Working through the biology…',
    'Picking the examples…',
    'Setting up the board…',
  ],
};

/**
 * Used whenever the subject is genuinely unknown, which is a real path rather
 * than a gap: the doubt of the day, a snapped doubt and a saved doubt all open
 * a class with no `chapterId` to resolve a subject from.
 */
const PLANNING_GENERIC: readonly string[] = [
  'Planning your lesson…',
  'Choosing where to start…',
  'Working through it…',
  'Picking the examples…',
  'Setting up the board…',
];

/** Single-line phases. Each is true for as long as it is shown. */
const SINGLE_LINE: Record<Exclude<ClassroomPhase, 'planning'>, string> = {
  opening: 'Opening your session…',
  joining: 'Joining the room…',
  // The design's own line, kept and moved to the moment it is literally true:
  // the board content has arrived and Drona is about to write it.
  writing: 'Drona is picking up the chalk…',
};

/**
 * Shown instead of the current line once the wait runs long.
 *
 * Same move as `components/snap-loading.tsx`'s swap from `ETA_TEXT` to
 * `LONG_WAIT_TEXT`: reassurance, never a promise the wait has already broken.
 * No number — the scope call has been seen anywhere from a few seconds to well
 * past twenty, so any figure here would be wrong often enough to matter.
 */
export const LONG_WAIT_TEXT = 'Still building it. A fresh topic takes a little longer.';

export function statusLinesFor(
  phase: ClassroomPhase,
  subject: StatusSubject | null
): readonly string[] {
  if (phase !== 'planning') return [SINGLE_LINE[phase]];
  if (!subject) return PLANNING_GENERIC;
  return PLANNING_BY_SUBJECT[subject] ?? PLANNING_GENERIC;
}

/** Narrows a catalogue subject string to one we have copy for. */
export function toStatusSubject(subject: string | null | undefined): StatusSubject | null {
  const key = (subject ?? '').trim().toLowerCase();
  if (key === 'physics' || key === 'chemistry' || key === 'mathematics' || key === 'biology') {
    return key;
  }
  // "Maths"/"Math" are the compact tab labels, not catalogue keys, but they
  // reach here from screens that pass a label through.
  if (key === 'maths' || key === 'math') return 'mathematics';
  return null;
}

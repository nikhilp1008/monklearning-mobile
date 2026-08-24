import AsyncStorage from '@react-native-async-storage/async-storage';

import { getProgress, type ProgressSummary } from '@/lib/progress';

/**
 * The proof diff — the engine behind every encouragement moment.
 *
 * See MOMENTS.md. The rule the whole feature hangs on is that we celebrate
 * what a student has *proven*, not what they clicked, and `/progress` already
 * carries every fact that qualifies: the score, the flag count, the ledger,
 * and each concept's mastery state. So a moment is never authored — it is the
 * difference between two snapshots.
 *
 * Three things are stored locally and nothing else:
 *  - the last snapshot, so a later fetch has something to compare against;
 *  - the ids of events already shown, so a moment never fires twice;
 *  - whether a class has ever been taken, which is the one fact `/progress`
 *    does not carry (the ledger counts doubts and questions, not classes).
 *
 * The *collection* of milestones is deliberately not stored: it is derivable
 * from the current payload at any time (`chapters_strong: 3` means three
 * chapter milestones exist), which keeps it correct across reinstalls and
 * devices. Only "have I already celebrated this" is local state.
 */

const SNAPSHOT_KEY = 'monklearning.proof.snapshot';
const SEEN_KEY = 'monklearning.proof.seen';
const CLASSES_KEY = 'monklearning.proof.classes';
const EARNED_KEY = 'monklearning.proof.earned';

/**
 * Bumped whenever the server changes how the Monk Score is *computed*, as
 * opposed to what the student has proved.
 *
 * A snapshot is only comparable to a later reading of the same scoring. When
 * the backend populated `chapter_exam_weights` — the table existed but was
 * empty, so every one of the 107 chapters had been taking a flat 1.0 fallback
 * — subject scores went from a plain mean to a mark-weighted one. The spread
 * between the lightest and heaviest chapter is roughly 21x, so a score can
 * move tens of points in either direction without a student doing anything.
 * Diffing across that boundary would credit a class for a reweighting.
 *
 * Only `score_up` consults this. The rest of the diff is built from the ledger
 * counters and the strong-concept id sets, which the change did not touch, and
 * throwing those away to fix a score line would cost a student the
 * `chapter_strong` moment they actually earned.
 *
 * Version 2: `chapter_exam_weights` populated, and off-syllabus chapters no
 * longer scored at 0 (both 2026-08-23).
 */
const SNAPSHOT_VERSION = 2;

/**
 * Ids of celebrated events kept before the oldest are dropped. Generous
 * enough that nothing a student is likely to re-earn falls out, and the
 * failure mode if one does is a repeated celebration, not a wrong one.
 */
const SEEN_LIMIT = 500;

/** The compact facts worth keeping — ids and numbers, never the ~130KB tree. */
export interface ProofSnapshot {
  /**
   * Epoch ms. Nothing reads it yet; it is here for MOMENTS.md's "your teacher
   * noticed" card, which needs local recency ("you haven't opened this chapter
   * this week") and would otherwise have to start collecting timestamps from
   * scratch the day it ships.
   */
  at: number;
  /**
   * The `SNAPSHOT_VERSION` this was captured under. Absent on anything written
   * before the field existed, which is exactly the case it has to catch.
   */
  v?: number;
  score: number;
  flagged: number;
  doubtsSolved: number;
  questionsAttempted: number;
  conceptsMastered: number;
  chaptersStrong: number;
  /** Concept ids currently `strong` — the unit the score is actually built on. */
  strongConcepts: string[];
  /** Chapter ids currently `strong`. */
  strongChapters: string[];
}

export type ProofEventKind =
  | 'first_question'
  | 'first_doubt'
  | 'first_class'
  | 'concept_strong'
  | 'chapter_strong'
  | 'flag_cleared'
  | 'all_flags_cleared'
  | 'score_up';

export interface ProofEvent {
  /** Stable across runs, so the seen-set can suppress a repeat. */
  id: string;
  kind: ProofEventKind;
  /** What moved — a concept or chapter name where there is one. */
  subject?: string;
  /** Numeric payload: points gained, flags cleared. */
  amount?: number;
}

export function snapshotOf(data: ProgressSummary): ProofSnapshot {
  const strongConcepts: string[] = [];
  const strongChapters: string[] = [];
  for (const subject of data.subjects) {
    for (const chapter of subject.chapters) {
      if (chapter.state === 'strong') strongChapters.push(chapter.chapter_id);
      for (const concept of chapter.concepts) {
        if (concept.state === 'strong') strongConcepts.push(concept.concept_id);
      }
    }
  }
  return {
    at: Date.now(),
    v: SNAPSHOT_VERSION,
    score: data.monk_score.display,
    flagged: data.monk_score.flagged_concepts,
    doubtsSolved: data.ledger.doubts_solved,
    questionsAttempted: data.ledger.questions_attempted,
    conceptsMastered: data.ledger.concepts_mastered,
    chaptersStrong: data.ledger.chapters_strong,
    strongConcepts,
    strongChapters,
  };
}

/** Names for concept/chapter ids, so an event can say what actually moved. */
function nameLookup(data: ProgressSummary) {
  const concepts = new Map<string, string>();
  const chapters = new Map<string, string>();
  for (const subject of data.subjects) {
    for (const chapter of subject.chapters) {
      chapters.set(chapter.chapter_id, chapter.name);
      for (const concept of chapter.concepts) {
        concepts.set(concept.concept_id, concept.name);
      }
    }
  }
  return { concepts, chapters };
}

/**
 * Did a counter genuinely cross zero?
 *
 * With a previous snapshot this is exact. Without one, a count of exactly 1
 * is the only safe evidence of a first — a reinstalled account arrives with
 * hundreds already logged, and congratulating that student on their "first
 * question" is precisely the kind of hollow praise rule 1 exists to prevent.
 */
function crossedZero(previous: number | undefined, now: number): boolean {
  if (previous === undefined) return now === 1;
  return previous === 0 && now > 0;
}

/**
 * What changed between two snapshots, as things worth saying.
 *
 * `previous` being null means this is the first time we have looked, so only
 * unambiguous firsts are reported — nothing is retro-celebrated.
 */
export function diffProof(
  previous: ProofSnapshot | null,
  current: ProgressSummary
): ProofEvent[] {
  const now = snapshotOf(current);
  const names = nameLookup(current);
  const events: ProofEvent[] = [];

  if (crossedZero(previous?.questionsAttempted, now.questionsAttempted)) {
    events.push({ id: 'first_question', kind: 'first_question' });
  }
  if (crossedZero(previous?.doubtsSolved, now.doubtsSolved)) {
    events.push({ id: 'first_doubt', kind: 'first_doubt' });
  }

  if (!previous) return events;

  const wasStrong = new Set(previous.strongConcepts);
  for (const id of now.strongConcepts) {
    if (!wasStrong.has(id)) {
      events.push({
        id: `concept_strong:${id}`,
        kind: 'concept_strong',
        subject: names.concepts.get(id),
      });
    }
  }

  const wasStrongChapter = new Set(previous.strongChapters);
  for (const id of now.strongChapters) {
    if (!wasStrongChapter.has(id)) {
      events.push({
        id: `chapter_strong:${id}`,
        kind: 'chapter_strong',
        subject: names.chapters.get(id),
      });
    }
  }

  // A cleared flag lifts the ceiling the score can climb to, which is the
  // rare case where a celebration states a mechanical fact rather than praise.
  if (now.flagged < previous.flagged) {
    events.push({
      // Keyed by the transition, not the destination, so a student who picks
      // up a new flag and clears it again gets a second, distinct moment.
      id: `flag_cleared:${previous.flagged}-${now.flagged}`,
      kind: now.flagged === 0 ? 'all_flags_cleared' : 'flag_cleared',
      amount: previous.flagged - now.flagged,
    });
  }

  // Only comparable within one scoring version — see SNAPSHOT_VERSION. A
  // baseline from before the change is skipped once and re-stamped on write,
  // so this costs at most one score line, on the first class after updating.
  if (previous.v === SNAPSHOT_VERSION && now.score > previous.score) {
    events.push({
      id: `score_up:${previous.score}-${now.score}`,
      kind: 'score_up',
      amount: now.score - previous.score,
    });
  }

  return events;
}

export async function readSnapshot(): Promise<ProofSnapshot | null> {
  try {
    const raw = await AsyncStorage.getItem(SNAPSHOT_KEY);
    return raw ? (JSON.parse(raw) as ProofSnapshot) : null;
  } catch {
    return null;
  }
}

async function writeSnapshot(data: ProgressSummary): Promise<void> {
  try {
    await AsyncStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshotOf(data)));
  } catch {
    // A snapshot that fails to persist costs one missed moment, which is not
    // worth interrupting a student for.
  }
}

/**
 * Mark the current state as the baseline. Called where a stretch of work
 * begins — entering a class, opening Practice, app foreground — so that
 * whatever is proven next has something to be measured against.
 */
export async function captureProof(data?: ProgressSummary): Promise<void> {
  try {
    await writeSnapshot(data ?? (await getProgress()));
  } catch {
    // Offline at the start of a class simply means no baseline, and the next
    // diff reports only firsts. Silence is a valid outcome here.
  }
}

async function readSeen(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(SEEN_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Drops events already celebrated, so a moment fires exactly once. */
export async function unseen(events: ProofEvent[]): Promise<ProofEvent[]> {
  if (!events.length) return [];
  const seen = new Set(await readSeen());
  return events.filter((e) => !seen.has(e.id));
}

export async function markSeen(events: ProofEvent[]): Promise<void> {
  if (!events.length) return;
  try {
    const seen = await readSeen();
    const next = Array.from(new Set([...seen, ...events.map((e) => e.id)]));
    await AsyncStorage.setItem(
      SEEN_KEY,
      JSON.stringify(next.slice(Math.max(0, next.length - SEEN_LIMIT)))
    );
    await recordUnrederivable(events);
  } catch {
    // Worst case a moment repeats once; not worth surfacing.
  }
}

/**
 * The one thing the milestone collection cannot re-derive.
 *
 * Everything else a student earns is still visible in `/progress` afterwards —
 * a Strong chapter stays Strong, a mastered concept stays mastered. Clearing
 * every flag is different: what's left behind is `flagged_concepts: 0`, which
 * is also what a student who has never studied a day looks like. Deriving the
 * milestone from that state would hand the rarest card in the app to someone
 * on their first launch.
 *
 * So this one is written down when it actually happens, and only this one.
 * The list is uncapped and never trimmed — it is permanent by definition,
 * unlike the seen-set, which only answers "have I said this already".
 */
async function recordUnrederivable(events: ProofEvent[]): Promise<void> {
  const keep = events.filter((e) => e.kind === 'all_flags_cleared').map((e) => e.id);
  if (!keep.length) return;
  const earned = await earnedEventIds();
  await AsyncStorage.setItem(EARNED_KEY, JSON.stringify(Array.from(new Set([...earned, ...keep]))));
}

export async function earnedEventIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(EARNED_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Records that a class was taken and reports whether it was the first.
 *
 * `/progress` counts doubts and questions but not classes, so this is the one
 * fact that has to be tracked locally. Call it when a class actually ends,
 * not when one is entered — a student who backs out of the classroom has not
 * taken a class.
 */
export async function noteClassTaken(): Promise<ProofEvent | null> {
  try {
    const raw = await AsyncStorage.getItem(CLASSES_KEY);
    const count = Number(raw ?? 0);
    const next = Number.isFinite(count) ? count + 1 : 1;
    await AsyncStorage.setItem(CLASSES_KEY, String(next));
    return next === 1 ? { id: 'first_class', kind: 'first_class' } : null;
  } catch {
    return null;
  }
}

export async function classesTaken(): Promise<number> {
  try {
    const count = Number((await AsyncStorage.getItem(CLASSES_KEY)) ?? 0);
    return Number.isFinite(count) ? count : 0;
  } catch {
    return 0;
  }
}

/**
 * Ranked highest-meaning first, so a screen with room for one line shows the
 * best one. Order follows MOMENTS.md's principle: proof outranks points, and
 * a first outranks a repeat.
 */
const RANK: Record<ProofEventKind, number> = {
  all_flags_cleared: 0,
  first_class: 1,
  first_doubt: 2,
  first_question: 3,
  chapter_strong: 4,
  concept_strong: 5,
  flag_cleared: 6,
  score_up: 7,
};

export function rankEvents(events: ProofEvent[]): ProofEvent[] {
  return events.slice().sort((a, b) => RANK[a.kind] - RANK[b.kind]);
}

/**
 * The whole cycle in one call, for a screen that just wants to know what to
 * say: diff the live payload against the baseline, drop anything already
 * celebrated, rank what's left, and re-baseline.
 *
 * Deliberately does *not* mark the events seen — the caller does that once it
 * has actually shown them, so a failed render doesn't burn the moment.
 */
export async function collectProof(): Promise<ProofEvent[]> {
  const previous = await readSnapshot();
  const current = await getProgress();
  const events = await unseen(diffProof(previous, current));
  await writeSnapshot(current);
  return rankEvents(events);
}

/** Every local trace of this student's proof history. See `clearProfile`. */
export async function clearProofState(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([SNAPSHOT_KEY, SEEN_KEY, CLASSES_KEY, EARNED_KEY]);
  } catch {
    // Nothing useful to do.
  }
}

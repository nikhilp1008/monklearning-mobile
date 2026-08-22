import AsyncStorage from '@react-native-async-storage/async-storage';

import type { ProgressSummary } from '@/lib/progress';
import { classesTaken, earnedEventIds } from '@/lib/proof';

/**
 * The collection a student keeps — see MOMENTS.md §3.
 *
 * The load-bearing idea is that the collection is **derived, not stored**.
 * `chapters_strong: 3` *means* three chapter milestones exist, so the list is
 * recomputed from `/progress` every time it is opened. Nothing to migrate,
 * nothing to back up, and it survives a lost phone or a reinstall intact.
 *
 * Two things are local, both for good reason:
 *  - the class count, because `/progress`'s ledger counts doubts and questions
 *    but not classes (see `lib/proof.ts`);
 *  - "every flag cleared", which is the one milestone whose evidence does not
 *    persist — the state it leaves behind is indistinguishable from a student
 *    who never started.
 *
 * **The price of deriving: no dates.** We know a chapter is Strong; we do not
 * know when it got there, and inventing a date would be worse than omitting
 * one. A notebook of undated entries is honest. A notebook where half the
 * entries are dated and half are not is broken.
 */

/** Its own key, deliberately not `proof.seen`. See `unseenIds` below. */
const SEEN_KEY = 'monklearning.milestones.seen';

/** Concepts per mastery milestone — MOMENTS.md's "every 10 concepts". */
const CONCEPTS_PER_STEP = 10;

export type MilestoneGroup = 'firsts' | 'chapters' | 'mastery';

export interface Milestone {
  /** Stable and derivable, so the seen-set survives a recompute. */
  id: string;
  group: MilestoneGroup;
  title: string;
  caption: string;
}

export const GROUP_LABEL: Record<MilestoneGroup, string> = {
  firsts: 'Firsts',
  chapters: 'Chapters',
  mastery: 'Mastery',
};

/**
 * Everything earned, in the order it should be read.
 *
 * Firsts lead because they are the hardest step and the least impressive
 * number — a student who has taken exactly one class should see something.
 * Only earned milestones are listed: a grid of locked cards would be the game
 * badge MOMENTS.md rules out, and it would also turn an empty first week into
 * a wall of things the student hasn't done.
 */
export function deriveMilestones(
  data: ProgressSummary,
  classCount: number,
  earnedIds: string[]
): Milestone[] {
  const out: Milestone[] = [];

  if (classCount > 0) {
    out.push({
      id: 'first_class',
      group: 'firsts',
      title: 'Your first class',
      caption: 'You sat down and started',
    });
  }
  if (data.ledger.doubts_solved > 0) {
    out.push({
      id: 'first_doubt',
      group: 'firsts',
      title: 'Your first doubt, solved',
      caption: 'You asked instead of skipping it',
    });
  }
  if (data.ledger.questions_attempted > 0) {
    out.push({
      id: 'first_question',
      group: 'firsts',
      title: 'Your first question',
      caption: 'You put it to the test',
    });
  }

  // Rare enough to sit with the firsts rather than get lost among chapters.
  if (earnedIds.some((id) => id.startsWith('flag_cleared:') && id.endsWith('-0'))) {
    out.push({
      id: 'all_flags_cleared',
      group: 'firsts',
      title: 'Every flag cleared',
      caption: 'Nothing capping your ceiling',
    });
  }

  for (const subject of data.subjects) {
    for (const chapter of subject.chapters) {
      if (chapter.state !== 'strong') continue;
      out.push({
        id: `chapter_strong:${chapter.chapter_id}`,
        group: 'chapters',
        title: chapter.name,
        // The API sends subjects lowercase ('physics'). Cased here rather
        // than with textTransform, which would also title-case the prose
        // captions the other milestones use.
        caption: `${titleCase(subject.subject)} · Class ${chapter.class_level}`,
      });
    }
  }

  // Descending, so the biggest number a student has reached reads first.
  const steps = Math.floor(data.ledger.concepts_mastered / CONCEPTS_PER_STEP);
  for (let n = steps; n >= 1; n--) {
    const count = n * CONCEPTS_PER_STEP;
    out.push({
      id: `concepts:${count}`,
      group: 'mastery',
      title: `${count} concepts mastered`,
      caption: 'Proven on questions you hadn’t seen',
    });
  }

  return out;
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function groupMilestones(milestones: Milestone[]) {
  const order: MilestoneGroup[] = ['firsts', 'chapters', 'mastery'];
  return order
    .map((group) => ({ group, items: milestones.filter((m) => m.group === group) }))
    .filter((section) => section.items.length > 0);
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

/**
 * Which of these the student hasn't seen *on this page*.
 *
 * Deliberately a separate record from `proof.seen`. That set means "already
 * said out loud", and `session-summary` empties it into the end-of-class
 * moment — so reusing it here would mean a chapter that was celebrated when
 * it went Strong arrives in the collection already stale, and almost nothing
 * would ever be marked new. Being told once and finding it in your notebook
 * are two different events.
 */
export async function unseenIds(milestones: Milestone[]): Promise<Set<string>> {
  if (!milestones.length) return new Set();
  const seen = new Set(await readSeen());
  return new Set(milestones.map((m) => m.id).filter((id) => !seen.has(id)));
}

export async function markMilestonesSeen(milestones: Milestone[]): Promise<void> {
  if (!milestones.length) return;
  try {
    const seen = await readSeen();
    const next = Array.from(new Set([...seen, ...milestones.map((m) => m.id)]));
    await AsyncStorage.setItem(SEEN_KEY, JSON.stringify(next));
  } catch {
    // A milestone stays marked new for one more visit. Harmless.
  }
}

/**
 * For the row on Progress: how many are waiting, without rendering the page.
 * Returns zero on any failure — an entry point that quietly shows no badge is
 * better than one that shows a wrong count.
 */
export async function countMilestones(
  data: ProgressSummary
): Promise<{ total: number; unseen: number }> {
  try {
    const [classCount, earned] = await Promise.all([classesTaken(), earnedEventIds()]);
    const all = deriveMilestones(data, classCount, earned);
    const fresh = await unseenIds(all);
    return { total: all.length, unseen: fresh.size };
  } catch {
    return { total: 0, unseen: 0 };
  }
}

/** The page's own loader, so the screen doesn't reassemble these three calls. */
export async function loadMilestones(
  data: ProgressSummary
): Promise<{ milestones: Milestone[]; unseen: Set<string> }> {
  const [classCount, earned] = await Promise.all([classesTaken(), earnedEventIds()]);
  const milestones = deriveMilestones(data, classCount, earned);
  return { milestones, unseen: await unseenIds(milestones) };
}

/** The seen-set only — the collection itself is derived, so there is nothing
 *  else here to forget. See `clearProfile`. */
export async function clearMilestoneState(): Promise<void> {
  try {
    await AsyncStorage.removeItem(SEEN_KEY);
  } catch {
    // Nothing useful to do.
  }
}

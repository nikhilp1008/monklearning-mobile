import { examSubjects } from '@/lib/drona';
import type { ExamKey } from '@/constants/onboarding';

/**
 * The block system every chapter is written in.
 *
 * The point of the schema is that the reader has no chapter-specific code in
 * it: a new chapter is a new data module and nothing else. See
 * design_handoff_textbooks/CONTENT_SPEC.md for the authoring rules.
 *
 * `html` fields carry a closed set of inline tags — b, i, sup, sub, br — and
 * nothing else. See components/textbook/markup.tsx.
 */
export type Block =
  | { t: 'hook'; html: string }
  | { t: 'p'; html: string }
  | { t: 'think'; html: string }
  | { t: 'def'; term: string; html: string }
  | { t: 'defgrid'; title: string; tag?: string | null; rows: { k: string; v: string }[] }
  | {
      t: 'formula';
      kicker: string;
      tag?: string | null;
      main: string;
      legend: string[];
      note?: string | null;
    }
  | { t: 'proc'; title: string; steps: string[] }
  | { t: 'deriv'; kicker: string; steps: { eq: string; why: string }[] }
  | { t: 'diagram'; kind: string; kicker: string }
  | { t: 'ex'; tag: string; q: string; steps: string[]; ans: string }
  // `nudge` is null, not absent, on the correct option: there is no trap to
  // name. The spec asks for one on every wrong option and nothing on the right
  // one, and null is how the content says "deliberately none".
  | {
      t: 'mcq';
      q: string;
      opts: { label: string; nudge?: string | null }[];
      correct: number;
      solution: string;
    }
  | { t: 'practice'; items: { q: string; a: string }[] }
  | { t: 'mistakes'; items: string[] }
  | { t: 'protip'; html: string }
  | { t: 'snapshot'; rows: { f: string; note: string }[]; aids: string[] };

export interface Topic {
  /** Two-digit display number. */
  n: string;
  title: string;
  /**
   * A short label for the topic ("01 REPRESENT"). Authored on every topic,
   * undocumented in the spec, and rendered by nothing — the prototype reader
   * never read it either. Kept because it is real editorial work and a compact
   * topic label is the sort of thing a future navigation control wants; delete
   * it if that never arrives.
   */
  chip?: string;
  /** Same story as `chip`: authored per topic, rendered by nothing. */
  kalam?: string;
  blocks: Block[];
}

export interface Chapter {
  chapter: string;
  title: string;
  subject: string;
  klass: string;
  topics: Topic[];
}

/**
 * Consecutive `ex` and `mcq` blocks are one swipeable carousel, not several
 * stacked cards. Grouping is a rendering concern rather than an authoring one:
 * the spec asks writers to place them adjacent and says nothing about wrapping
 * them, so the reader does it.
 */
export type RenderBlock = Block | { t: 'exGroup'; items: Extract<Block, { t: 'ex' }>[] } | { t: 'mcqGroup'; items: Extract<Block, { t: 'mcq' }>[] };

export function groupBlocks(blocks: Block[]): RenderBlock[] {
  const out: RenderBlock[] = [];
  for (const block of blocks) {
    const last = out[out.length - 1];
    if (block.t === 'ex') {
      if (last && last.t === 'exGroup') last.items.push(block);
      else out.push({ t: 'exGroup', items: [block] });
    } else if (block.t === 'mcq') {
      if (last && last.t === 'mcqGroup') last.items.push(block);
      else out.push({ t: 'mcqGroup', items: [block] });
    } else {
      out.push(block);
    }
  }
  return out;
}

/**
 * Which chapters have been written.
 *
 * Keyed by the subject and class the catalogue reports plus the chapter's own
 * name, because that is all the Chapters screen has to match on: chapter rows
 * come from `/drona/catalogue`, which is the same list Learn with Drona uses,
 * so a student is never offered a chapter here that does not exist there.
 *
 * Matching on the name rather than the catalogue's id on purpose. The id is a
 * database key that a content file has no business knowing, and the names are
 * the syllabus's own. `chapterKey` normalises the punctuation and casing that
 * differ between sources.
 */
const CHAPTERS: Record<string, () => Promise<{ default: Chapter }>> = {
  'mathematics|11|sets': () => import('@/content/textbooks/math-11-01-sets'),
};

export function chapterKey(subject: string, classLevel: number, title: string): string {
  const clean = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  return `${clean(subject)}|${classLevel}|${clean(title)}`;
}

export function isChapterReady(subject: string, classLevel: number, title: string): boolean {
  return chapterKey(subject, classLevel, title) in CHAPTERS;
}

export async function loadChapter(
  subject: string,
  classLevel: number,
  title: string
): Promise<Chapter | null> {
  const load = CHAPTERS[chapterKey(subject, classLevel, title)];
  if (!load) return null;
  return (await load()).default;
}

/**
 * The subject tiles, narrowed to the student's exam.
 *
 * A JEE student is never examined on Biology and a NEET student is never
 * examined on Mathematics, so neither is offered a textbook for it. This is
 * the same rule the Learn catalogue follows, from the same helper, so the two
 * surfaces cannot drift apart.
 */
export function textbookSubjects(exam: ExamKey): string[] {
  return examSubjects(exam);
}

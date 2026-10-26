import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Block, Chapter } from '@/lib/textbooks';

/**
 * A CHAPTER THAT OPENS ON WHAT STUDENTS WOULD OTHERWISE WRITE THEMSELVES.
 *
 * Students do not want to read a textbook; they make their own formula sheet,
 * diagrams page and key points after class. So a chapter opens on those three,
 * ready-made (app/textbook-chapter.tsx), with its topics below. Each topic is
 * split here into a few short parts, each with a book-style name, a quick check
 * at the end and a door to the next. No time is shown anywhere: minutes make a
 * chapter feel like a video course.
 *
 * Physics Class 11 Chapters 1 to 6 open this way, rewritten from the Master
 * Reference books. Every other chapter opens the reader exactly as before.
 */
const OPENS_ON_CHOICE: Record<string, number[]> = { 'physics|11': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'physics|12': [0, 1, 2, 3, 4, 5, 6, 7], 'chemistry|11': [0, 1, 2, 3, 4, 5] };
export function opensOnChoice(subject: string, classLevel: number, index: number): boolean {
  return OPENS_ON_CHOICE[`${subject.toLowerCase()}|${classLevel}`]?.includes(index) ?? false;
}

type ChapterId = Pick<Chapter, 'subject' | 'klass' | 'chapter'>;
type Mcq = Extract<Block, { t: 'mcq' }>;

/** The blocks that teach. Examples, questions and the wrap-up go elsewhere. */
const TEACH: Block['t'][] = ['hook', 'p', 'think', 'def', 'defgrid', 'formula', 'diagram', 'proc', 'deriv'];
/** About a screenful or three of reading. */
const PART_WORDS = 650;

export type ChapterPart = {
  index: number;
  topic: number;
  /** 1-based place inside its topic, and how many parts the topic has. */
  inTopic: number;
  ofTopic: number;
  title: string;
  kind: 'learn' | 'examples';
  blocks: Block[];
  /** The quick check at the end: the topic's own questions, matched to the part they test. */
  checks: Mcq[];
};

const strip = (html: string) => html.replace(/<\/?[a-zA-Z][^>]*>/g, ' ');
const wordCount = (b: Block) => strip(JSON.stringify(b)).split(/\s+/).filter(Boolean).length;
const keywords = (text: string) => new Set(strip(text).toLowerCase().match(/[a-z]{5,}/g) ?? []);
export const sentenceCase = (s: string) => {
  const t = strip(s).replace(/\s+/g, ' ').trim();
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
};
const shortTitle = (s: string) => s.split(',')[0];

/** A part's heading says what it teaches: its first named idea. */
function headingOf(blocks: Block[]): string | null {
  for (const b of blocks) {
    if (b.t === 'def') return sentenceCase(b.term);
    if (b.t === 'formula') return sentenceCase(b.kicker.replace(/^FORMULA\s*·\s*/i, ''));
    if (b.t === 'proc') return sentenceCase(b.title);
    if (b.t === 'defgrid') return sentenceCase(b.title);
  }
  return null;
}

export function buildParts(chapter: Chapter): ChapterPart[] {
  const parts: Omit<ChapterPart, 'index' | 'inTopic' | 'ofTopic'>[] = [];
  chapter.topics.forEach((topic, ti) => {
    // Written from the book: its own sections are the parts, everything in
    // them in the book's order, questions included.
    if (topic.blocks.some((b) => b.t === 'part')) {
      let current: { title: string; blocks: Block[] } | null = null;
      for (const b of topic.blocks) {
        if (b.t === 'part') {
          if (current) parts.push({ topic: ti, kind: 'learn', title: current.title, blocks: current.blocks, checks: [] });
          current = { title: b.title, blocks: [] };
        } else {
          current ??= { title: shortTitle(topic.title), blocks: [] };
          current.blocks.push(b);
        }
      }
      if (current) parts.push({ topic: ti, kind: 'learn', title: current.title, blocks: current.blocks, checks: [] });
      return;
    }
    // The exam briefing opens the chapter, not every topic. It still counts
    // towards the first part's length, as the part names were written to that
    // split, but the part page no longer shows it: the chapter opens on its
    // formulas now.
    const teach = topic.blocks.filter((b) => TEACH.includes(b.t) && (b.t !== 'hook' || ti === 0));
    const groups: Block[][] = [];
    let current: Block[] = [];
    let words = 0;
    for (const b of teach) {
      if (words >= PART_WORDS && current.length) {
        groups.push(current);
        current = [];
        words = 0;
      }
      current.push(b);
      words += wordCount(b);
    }
    if (current.length) groups.push(current);

    // Each question goes to the part whose words it shares most, two at most.
    const sets = groups.map((g) => keywords(JSON.stringify(g)));
    const checks: Mcq[][] = groups.map(() => []);
    topic.blocks
      .filter((b): b is Mcq => b.t === 'mcq')
      .forEach((q) => {
        const qk = [...keywords(q.q + ' ' + q.solution)];
        let best = -1;
        let bestScore = -1;
        sets.forEach((s, i) => {
          if (checks[i].length >= 2) return;
          const score = qk.filter((w) => s.has(w)).length;
          if (score > bestScore) {
            bestScore = score;
            best = i;
          }
        });
        if (best >= 0) checks[best].push(q);
      });

    groups.forEach((g, gi) =>
      parts.push({
        topic: ti,
        kind: 'learn',
        title: gi === 0 ? shortTitle(topic.title) : headingOf(g) ?? `${shortTitle(topic.title)}, continued`,
        blocks: g,
        checks: checks[gi],
      })
    );
    const examples = topic.blocks.filter((b) => b.t === 'ex' || b.t === 'mistakes' || b.t === 'snapshot');
    parts.push({
      topic: ti,
      kind: 'examples',
      title: 'Examples and practice',
      blocks: examples,
      checks: [],
    });
  });
  return parts.map((p, index) => {
    const same = parts.filter((q) => q.topic === p.topic);
    return { ...p, index, inTopic: same.indexOf(p) + 1, ofTopic: same.length };
  });
}

/* ---------------- on the phone: reading progress ---------------- */

const key = (kind: string, c: ChapterId) => `${kind}:${c.subject}:${c.klass}:${c.chapter}`.toLowerCase();

export type ChapterProgress = { done: number[]; last: number | null };

export async function readProgress(c: ChapterId): Promise<ChapterProgress> {
  try {
    const raw = await AsyncStorage.getItem(key('chapter-progress', c));
    return raw ? (JSON.parse(raw) as ChapterProgress) : { done: [], last: null };
  } catch {
    return { done: [], last: null };
  }
}

export async function saveProgress(c: ChapterId, update: (p: ChapterProgress) => ChapterProgress): Promise<void> {
  try {
    const next = update(await readProgress(c));
    await AsyncStorage.setItem(key('chapter-progress', c), JSON.stringify(next));
  } catch {
    // Losing a bookmark is not worth interrupting the reading over.
  }
}

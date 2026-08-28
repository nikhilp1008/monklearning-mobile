import { supabase } from '@/lib/supabase';

/**
 * Recorded lessons, read straight from Supabase the way the webpage's
 * `/lessons/[chapterId]` player reads them.
 *
 * This deliberately does NOT go through `monk-learning-api`. There is no
 * lesson endpoint to go through: `/drona/catalogue` returns chapter and
 * concept *names* only — no board content, no audio — which is why the
 * Lessons tab had nothing to open and tagged every chapter SOON. The content
 * has been sitting in `lesson_sections` all along (6,166 sections, 106 of the
 * 107 chapters, every one with board content, English + Hinglish narration
 * and reveal timings), keyed by the same `chapters.id` the catalogue already
 * hands us. Reading it here is the whole fix.
 *
 * `profiles` is already read this way in lib/profile.ts, so the client, the
 * key and the RLS path are all proven.
 */

export type Language = 'english' | 'hinglish';

/**
 * One thing appearing on the board. The webpage's authored scenes (2,027 React
 * components) are not portable to native, but they are only ever an *upgrade*
 * over this list — `board_content` is populated for all 6,166 sections, so
 * rendering these events covers every lesson without porting a single scene.
 */
export type BoardEvent = {
  seq?: number;
  /** Open on purpose: unknown kinds degrade to their text rather than vanish. */
  type: 'heading' | 'text' | 'formula' | 'note' | 'diagram' | (string & {});
  text?: string;
  latex?: string;
  /** Raw SVG markup, rendered by react-native-svg's SvgXml. */
  svg?: string;
  caption?: string;
  emphasis?: 'high' | 'key' | 'normal' | (string & {});
};

export type Caption = { seq?: number; text: string };

export type LessonSection = {
  id: string;
  /** 1-based, and the order the sections are taught in. */
  position: number;
  title: string;
  subtopic: string | null;
  part: number | null;
  events: BoardEvent[];
  /** Seconds into the narration at which each event lands; index-aligned to
   *  `events`. */
  revealAt: number[];
  captions: Caption[];
  audioUrl: string | null;
  durationSec: number | null;
};

/** The columns the player needs, named once so the two reads cannot drift. */
const SECTION_COLUMNS =
  'id, position, title, subtopic, part, board_content, ' +
  'board_reveal_at_english, board_reveal_at_hinglish, ' +
  'segments_english, segments_hinglish, ' +
  'audio_url_english, audio_url_hinglish, ' +
  'duration_sec_english, duration_sec_hinglish';

/**
 * `board_content` is stored as a bare array on every row we have seen, but the
 * webpage's own reader tolerates a `{ events: [...] }` wrapper, so this does
 * too rather than betting the screen on a shape it does not control.
 */
function parseEvents(raw: unknown): BoardEvent[] {
  const list = Array.isArray(raw)
    ? raw
    : raw && typeof raw === 'object' && Array.isArray((raw as { events?: unknown }).events)
      ? (raw as { events: unknown[] }).events
      : [];
  return list.filter((e): e is BoardEvent => !!e && typeof e === 'object');
}

function parseNumbers(raw: unknown): number[] {
  return Array.isArray(raw) ? raw.filter((n): n is number => typeof n === 'number') : [];
}

/**
 * Narration scripts carry inline delivery cues for the voice model —
 * `<curious>`, `<serious>` and friends — which are direction for the reader,
 * not words anyone says. They must not reach a caption.
 */
function cleanCaption(text: string): string {
  return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function parseCaptions(raw: unknown): Caption[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((s) => {
      if (typeof s === 'string') return { text: cleanCaption(s) };
      if (s && typeof s === 'object' && typeof (s as Caption).text === 'string') {
        return { seq: (s as Caption).seq, text: cleanCaption((s as Caption).text) };
      }
      return null;
    })
    .filter((c): c is Caption => !!c && c.text.length > 0);
}

type SectionRow = Record<string, unknown>;

function toSection(row: SectionRow, language: Language): LessonSection {
  const en = language === 'english';
  const str = (v: unknown) => (typeof v === 'string' ? v : null);
  const num = (v: unknown) => (typeof v === 'number' ? v : null);
  return {
    id: String(row.id),
    position: num(row.position) ?? 0,
    title: str(row.title) ?? 'Untitled section',
    subtopic: str(row.subtopic),
    part: num(row.part),
    events: parseEvents(row.board_content),
    revealAt: parseNumbers(en ? row.board_reveal_at_english : row.board_reveal_at_hinglish),
    captions: parseCaptions(en ? row.segments_english : row.segments_hinglish),
    audioUrl: str(en ? row.audio_url_english : row.audio_url_hinglish),
    durationSec: num(en ? row.duration_sec_english : row.duration_sec_hinglish),
  };
}

/**
 * PostgREST caps a response at 1,000 rows and says so only in the
 * `Content-Range` header, which supabase-js does not surface unless asked —
 * a plain `select('chapter_id')` over 6,166 sections therefore returns a
 * silently truncated 1,000 and looks like a complete answer. Counting those
 * marked most chapters as having no lesson at all. Pages are read explicitly
 * instead, in a fixed `id` order so no row is counted twice or skipped.
 */
const PAGE_SIZE = 1000;

/**
 * What the Lessons list needs to know about a chapter. The webpage shows the
 * SUBTOPIC count on its chapter cards ("12 subtopics") and gates on the
 * section count, so both are carried rather than conflated.
 */
export type ChapterLessonMeta = {
  sections: number;
  subtopics: number;
  /**
   * Sections that would not play properly: no board to draw, or no narration
   * to draw it against. See `fetchIncompleteCounts`.
   */
  incomplete: number;
};

/** The counts are identical for every student and change only when new content
 *  ships, so the whole map is fetched once per app run rather than on each
 *  visit to the tab. A failure clears the cache so the next visit retries. */
let countsCache: Promise<Map<string, ChapterLessonMeta>> | null = null;

/**
 * Sections that are recorded but not finished, counted per chapter.
 *
 * "Has a row in `lesson_sections`" is not the same as "plays". Two things are
 * genuinely missing in the data today, and each breaks a lesson in a way a
 * student would notice immediately:
 *
 *  - `board_content = []` — narration with nothing to draw. All 59 sections of
 *    Chemistry Class 11 "Some Basic Concepts" are in this state, so that whole
 *    chapter is a voice over a blank page.
 *  - `segments_english` null — a board that reveals in silence, with no
 *    captions either. 18 sections across eight Mathematics chapters, two or
 *    four at a time.
 *
 * Audio, durations and reveal timings are present on all 6,166 rows, so those
 * are not checked: a filter that can never fire is a filter that will quietly
 * rot. Add one here the day that stops being true.
 *
 * Cheap on purpose. This returns the ~77 broken rows rather than auditing all
 * 6,166, so it is one small request regardless of how the library grows.
 */
async function fetchIncompleteCounts(): Promise<Map<string, number>> {
  const out = new Map<string, number>();
  const bump = (rows: { chapter_id: string | null }[]) => {
    for (const row of rows) {
      if (!row.chapter_id) continue;
      out.set(row.chapter_id, (out.get(row.chapter_id) ?? 0) + 1);
    }
  };

  const blankBoard = await supabase
    .from('lesson_sections')
    .select('chapter_id')
    .eq('board_content', '[]');
  if (blankBoard.error) throw new Error(blankBoard.error.message);
  bump((blankBoard.data ?? []) as { chapter_id: string | null }[]);

  const noNarration = await supabase
    .from('lesson_sections')
    .select('chapter_id')
    .is('segments_english', null);
  if (noNarration.error) throw new Error(noNarration.error.message);
  bump((noNarration.data ?? []) as { chapter_id: string | null }[]);

  return out;
}

async function fetchSectionCounts(): Promise<Map<string, ChapterLessonMeta>> {
  const counts = new Map<string, { sections: number; subtopics: Set<string> }>();
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await supabase
      .from('lesson_sections')
      .select('chapter_id, subtopic')
      .order('id', { ascending: true })
      .range(from, from + PAGE_SIZE - 1);
    if (error) throw new Error(error.message);

    const rows = (data ?? []) as { chapter_id: string | null; subtopic: string | null }[];
    for (const row of rows) {
      if (!row.chapter_id) continue;
      let entry = counts.get(row.chapter_id);
      if (!entry) {
        entry = { sections: 0, subtopics: new Set<string>() };
        counts.set(row.chapter_id, entry);
      }
      entry.sections += 1;
      if (row.subtopic?.trim()) entry.subtopics.add(row.subtopic.trim());
    }
    if (rows.length < PAGE_SIZE) break;
  }

  const incomplete = await fetchIncompleteCounts();
  const out = new Map<string, ChapterLessonMeta>();
  for (const [id, entry] of counts) {
    // A chapter whose sections carry no subtopic still has to show a number;
    // the webpage falls back to the section count there, so this does too.
    out.set(id, {
      sections: entry.sections,
      subtopics: entry.subtopics.size > 0 ? entry.subtopics.size : entry.sections,
      incomplete: incomplete.get(id) ?? 0,
    });
  }
  return out;
}

/**
 * How many recorded sections each chapter has, and how many of them are not
 * finished, for the per-chapter gate on the Lessons list. A chapter missing
 * from the map simply has no lesson yet.
 *
 * Only `chapter_id` is selected: pulling board content to compute a count
 * would be megabytes for a number.
 */
export function getLessonSectionCounts(): Promise<Map<string, ChapterLessonMeta>> {
  if (!countsCache) {
    countsCache = fetchSectionCounts().catch((err) => {
      countsCache = null;
      throw err;
    });
  }
  return countsCache;
}

/**
 * Every section of one chapter, in teaching order, resolved to a single
 * language so the player never has to think about the other one.
 */
export async function getLessonSections(
  chapterId: string,
  language: Language
): Promise<LessonSection[]> {
  const { data, error } = await supabase
    .from('lesson_sections')
    .select(SECTION_COLUMNS)
    .eq('chapter_id', chapterId)
    .order('position', { ascending: true });
  if (error) throw new Error(error.message);

  // The client is untyped against this schema (no generated DB types in the
  // app), so a column list built from a constant infers as an error row.
  const rows = (data ?? []) as unknown as SectionRow[];
  return rows.map((row) => toSection(row, language));
}

/**
 * How many events of `section` have been reached by `seconds` of narration.
 *
 * Timings are index-aligned to events, so this is a count, not a lookup — the
 * player renders `events.slice(0, n)` and gets a board that builds up exactly
 * as the teacher speaks. An event with no timing (a short tail on a long list)
 * is treated as already shown rather than never shown, so nothing can become
 * permanently invisible because of a missing number.
 */
export function revealedCount(section: LessonSection, seconds: number): number {
  const { events, revealAt } = section;
  if (revealAt.length === 0) return events.length;
  let n = 0;
  for (let i = 0; i < events.length; i++) {
    const at = revealAt[i];
    if (at == null || at <= seconds) n = i + 1;
    else break;
  }
  return n;
}

/** The caption to show at `seconds` — the last one whose event has landed. */
export function captionAt(section: LessonSection, seconds: number): string | null {
  const n = revealedCount(section, seconds);
  if (n === 0) return null;
  return section.captions[n - 1]?.text ?? null;
}

/** Sections grouped under their subtopic, the way the webpage's sidebar lists them. */
export function groupBySubtopic(
  sections: LessonSection[]
): { subtopic: string; sections: LessonSection[] }[] {
  const groups: { subtopic: string; sections: LessonSection[] }[] = [];
  for (const section of sections) {
    const name = section.subtopic ?? 'Lesson';
    const last = groups[groups.length - 1];
    if (last && last.subtopic === name) last.sections.push(section);
    else groups.push({ subtopic: name, sections: [section] });
  }
  return groups;
}

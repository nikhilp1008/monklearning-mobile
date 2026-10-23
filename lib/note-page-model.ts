import { latexToText } from '@/lib/latex-text';

/**
 * A REAL SAVED NOTE, PARSED INTO A PAGE SOMEBODY COULD HAVE WRITTEN.
 *
 * THE SOURCE CHANGED, and that is the substance of this file rather than the
 * shapes below. The notes screen was reading `board_items` — the raw board
 * transcript, grouped by lesson segment — and only fell back to `content` when
 * there were none. But `content` is the note the SERVER ALREADY ORGANISED: a
 * whole gpt-4o-mini pass (`structure_note_content` in note_assembly.py) groups
 * the board, orders it for revision, pulls the formulas out onto their own
 * lines and ends with a QUICK REVISION summary. Every note that had board items
 * threw all of that away and printed the transcript instead.
 *
 * That is why a saved Chemistry class opened with "Hook: anhydrous TiCl3 is
 * colourless" under a heading printed twice: teaching scaffolding and a
 * duplicated segment title are what a transcript looks like. The organised
 * version was sitting in the same payload the whole time.
 *
 * It also happens to be the only source that CAN drive the handwritten page,
 * because the server's structured vocabulary is exactly what a page of notes
 * needs — headings, bullets, formulas on their own line, a summary block. A
 * transcript has none of that, so there would be nothing to draw.
 *
 * THE VOCABULARY IS A CONTRACT, documented in `structure_note_content`:
 *
 *   ALL-CAPS line            a section heading
 *   "• " prefix              a bullet
 *   a line that is only $…$  a formula, on its own
 *   short mixed-case line    a sub-heading inside a section
 *   QUICK REVISION           the 3-6 most exam-relevant points, always last
 *   FROM YOUR CLASS — …      what the student got wrong, woven in afterwards
 *   NOT COVERED IN CLASS YET the half of the lesson the class never reached
 *                            (older notes only: notes now hold what was taught)
 *
 * And four marks the handwritten notes (gpt-6-luna, note_assembly.py) put at
 * the start of a line. An app build from before them shows them as text,
 * which still reads; this one draws them:
 *
 *   "★ "   the line in a section most worth remembering — highlighted
 *   "⚠ "   an exam trap or common mistake — red pen, a drawn warning sign
 *   "✎ "   a margin tip (a memory trick, a unit) — a sticky note
 *   "→ "   one step of a chain or a worked example — a drawn arrow
 *
 * The three named sections are not styled like the rest, because they are not
 * the same kind of thing: a summary is a box, a mistake is flagged, and work
 * nobody has taught yet is separated from work that was.
 */

export type NoteLine =
  | { k: 'body'; t: string; r?: string }
  | { k: 'bullet'; t: string; r?: string }
  | { k: 'formula'; t: string; r?: string }
  /** A short line that introduces what follows — underlined, not coloured. */
  | { k: 'sub'; t: string; r?: string }
  | { k: 'key'; t: string; r?: string }
  | { k: 'trap'; t: string; r?: string }
  | { k: 'tip'; t: string; r?: string }
  | { k: 'step'; t: string; r?: string }
  /** A figure from the class, taped onto the page. `t` is its caption. */
  | { k: 'figure'; t: string; svg: string };

/** The marks at the start of a line, and what each one is. */
const MARKS: [string, 'key' | 'trap' | 'tip' | 'step'][] = [
  ['★', 'key'],
  ['⚠', 'trap'],
  ['✎', 'tip'],
  ['→', 'step'],
];

/** "★ text" -> ['key', 'text']; also takes the emoji variation selector a
 *  model sometimes writes after ⚠. */
function marked(line: string): ['key' | 'trap' | 'tip' | 'step', string] | null {
  for (const [mark, kind] of MARKS) {
    if (line.startsWith(mark)) {
      const rest = line.slice(mark.length).replace(/^\uFE0F/, '').trim();
      if (rest) return [kind, rest];
    }
  }
  return null;
}

export type NoteSectionKind =
  | 'normal'
  /** QUICK REVISION — becomes the blue box. */
  | 'revision'
  /** What to rework — every line flagged in red. */
  | 'rework'
  /** The rest of the lesson, past where the class stopped. */
  | 'selfstudy';

export type NoteSection = {
  /** The red number a student writes beside a heading. Null for the three
   *  named sections, which are not part of that count. */
  n: number | null;
  title: string;
  kind: NoteSectionKind;
  lines: NoteLine[];
};

const ALL_CAPS_LINE = /^[A-Z0-9 &,'’\-—():.]+$/;
const HAS_LETTER = /[A-Z]/;
const STANDALONE_FORMULA = /^\$\$?.+\$\$?$/;

/**
 * The divider the server writes where the class stopped.
 *
 * MATCHED LOOSELY ON PURPOSE. The exact string in the two client copies was
 * `class ended here: everything below…` while the server has always written
 * `class ended here — everything below…` — a colon against an em dash. Nothing
 * ever matched, so the marker line was printed as ordinary note text and the
 * self-study half was never separated from the class. Testing for the phrase
 * rather than the punctuation means the next rewording cannot break it again.
 */
function isClassEndMarker(line: string): boolean {
  return line.startsWith('———') && /class ended here/i.test(line);
}

/** A heading the server names, rather than one it generated from the lesson. */
function namedKind(caps: string): NoteSectionKind | null {
  if (/^QUICK REVISION/.test(caps)) return 'revision';
  if (/WHAT TO REWORK/.test(caps)) return 'rework';
  if (/SELF-STUDY|NOT COVERED IN CLASS/.test(caps)) return 'selfstudy';
  return null;
}

/**
 * ALL-CAPS to something a hand would write. Sentence case, not Title Case: a
 * student writes "Why complexes have colour", not "Why Complexes Have Colour".
 *
 * ACRONYMS ARE THE WHOLE DIFFICULTY, and there is no clean answer. The heading
 * arrives entirely upper case, so nothing in the text distinguishes a word that
 * is always capitals from a word that merely got shouted — lowercasing the lot
 * turned a real Chemistry note's "LIMITATIONS OF CFT" into "Limitations of
 * cft", which is wrong in a way a student notices at once.
 *
 * Length alone does not separate them either: the first attempt kept every
 * all-letter word of five or fewer, and "WHY COMPLEXES HAVE COLOUR" came back
 * as "WHY complexes HAVE colour".
 *
 * So the rule is narrow and deliberately dull: keep two- and three-letter words
 * unless they are one of the common English short words below. CFT, SI, MO, KE,
 * PE, AC and DC survive; OF, AND, THE and WHY do not. Longer acronyms —
 * NCERT, IUPAC — are lowercased and are the known cost. A list of domain
 * acronyms would fix those and would also need maintaining forever, which is a
 * worse trade for a heading than a lowercase NCERT.
 */
const COMMON_SHORT = new Set([
  'a', 'an', 'as', 'at', 'be', 'by', 'do', 'if', 'in', 'is', 'it', 'me', 'my',
  'no', 'of', 'on', 'or', 'so', 'to', 'up', 'us', 'we',
  'all', 'and', 'are', 'but', 'can', 'did', 'for', 'had', 'has', 'her', 'him',
  'his', 'how', 'its', 'new', 'non', 'not', 'one', 'out', 'per', 'pre', 'six',
  'sub', 'ten', 'the', 'too', 'two', 'via', 'was', 'way', 'why', 'you',
]);

export function sentenceCase(caps: string): string {
  const out = caps
    .trim()
    .split(/(\s+)/)
    .map((word) => {
      // Tested without punctuation, so "(CFT)" and "CFT." both count.
      const bare = word.replace(/[^A-Za-z]/g, '');
      const keep =
        bare.length >= 2 &&
        bare.length <= 3 &&
        bare === bare.toUpperCase() &&
        !COMMON_SHORT.has(bare.toLowerCase());
      return keep ? word : word.toLowerCase();
    })
    .join('');
  return out.charAt(0).toUpperCase() + out.slice(1);
}

/**
 * A sub-heading rather than a sentence.
 *
 * The contract calls these "short mixed-case sub-heading lines" and gives no
 * marker, so the test is their shape: short, and not punctuated like prose. A
 * sentence that happens to be brief will occasionally be underlined as a
 * heading — which is what a student's own underlining does anyway, and is why
 * this errs towards leaving a line alone.
 */
function looksLikeSubHeading(line: string): boolean {
  if (line.length > 46) return false;
  if (/[.,;:]$/.test(line)) return false;
  if (/^[•\-*]/.test(line)) return false;
  // A colon inside it means it is introducing something, which is the job.
  return !/\$/.test(line);
}

/** A figure the server sent with the note (board_items[].figure). */
export type NoteFigure = {
  svg: string;
  numbers: string[];
  caption: string;
  /** A figure the note's writer asked for: the line it goes after, as written. */
  after?: string;
  /** What its class part said (title and board lines): for a figure with no
   *  numbers to match, which section it belongs in. */
  context?: string;
};

/** Words that say what a passage is about: five letters or more, not filler. */
const FILLER = new Set([
  'about', 'after', 'again', 'along', 'because', 'before', 'being', 'between', 'every', 'their',
  'there', 'these', 'thing', 'things', 'those', 'through', 'under', 'where', 'which', 'while',
  'would', 'could', 'should', 'other', 'first', 'second', 'third', 'gives', 'given', 'makes',
]);
function topicWords(text: string): Set<string> {
  const out = new Set<string>();
  for (const w of text.toLowerCase().match(/[a-z]{5,}/g) ?? []) if (!FILLER.has(w)) out.add(w);
  return out;
}

/** The section a figure's class part is about, or -1: the most shared topic
 *  words, at least three. */
function sectionFor(sections: NoteSection[], context: string): number {
  const want = topicWords(context);
  let best = -1;
  let bestScore = 2;
  sections.forEach((sec, i) => {
    if (sec.kind === 'revision') return;
    const have = topicWords([sec.title, ...sec.lines.map((l) => (l.k === 'figure' ? '' : l.t))].join(' '));
    const score = [...want].filter((w) => have.has(w)).length;
    if (score > bestScore) {
      best = i;
      bestScore = score;
    }
  });
  return best;
}

const NUMBER = /(?<![\w.])\d+(?:\.\d+)?(?![\w])/g;
/** Numbers too common to say which example a line is about. */
const TRIVIAL = new Set(['0', '1', '2']);

/** The numbers in a line, as figure_anchor.py reads them ("0.250" -> "0.25"). */
export function lineNumbers(text: string): Set<string> {
  const out = new Set<string>();
  for (const m of text.match(NUMBER) ?? []) {
    const n = m.includes('.') ? m.replace(/0+$/, '').replace(/\.$/, '') : m;
    if (n && !TRIVIAL.has(n)) out.add(n);
  }
  return out;
}

/**
 * PUTS EACH FIGURE BESIDE THE LINE IT DRAWS — the rule the class uses
 * (figure_anchor.py): the first line sharing at least two of the numbers
 * printed in the figure, one of them distinctive (two digits or a decimal).
 * The figure goes after that line and the steps or formulas that follow it,
 * so a worked example is not cut in half. A figure with no numbers to match
 * (an idea, not an example) ends the section that is about what its class
 * part was about. Anything still unplaced goes in a "From the board" section
 * before QUICK REVISION, never dropped.
 */
export function placeFigures(sections: NoteSection[], figures: NoteFigure[]): NoteSection[] {
  if (!figures.length) return sections;
  const out = sections.map((s) => ({ ...s, lines: [...s.lines] }));
  const unplaced: NoteFigure[] = [];
  const textOf = (l: NoteLine) => (l.k === 'figure' ? '' : `${l.t} ${l.r ?? ''}`);

  for (const fig of figures) {
    const want = new Set(fig.numbers);
    const after = fig.after?.trim();
    let placed = false;
    // The line to go after: the one it was asked for, else the line sharing
    // the MOST of its numbers (two or more, one distinctive) — a quick check
    // that repeats two of a worked example's numbers is not that example.
    let target: { sec: NoteSection; at: number; score: number } | null = null;
    for (const sec of out) {
      if (sec.kind === 'revision') continue;
      sec.lines.forEach((l, at) => {
        if (l.k === 'figure') return;
        let score = 0;
        if (after) {
          score = (l.r ?? '').trim() === after || l.t.trim() === after ? 1 : 0;
        } else {
          const shared = [...lineNumbers(textOf(l))].filter((n) => want.has(n));
          score = shared.length >= 2 && shared.some((n) => n.length >= 2) ? shared.length : 0;
        }
        if (score > (target?.score ?? 0)) target = { sec, at, score };
      });
    }
    if (target) {
      const { sec, at } = target as { sec: NoteSection; at: number; score: number };
      let insertAt = at + 1;
      while (insertAt < sec.lines.length && ['step', 'formula', 'figure'].includes(sec.lines[insertAt].k)) {
        insertAt += 1;
      }
      sec.lines.splice(insertAt, 0, { k: 'figure', t: fig.caption, svg: fig.svg });
      placed = true;
    }
    if (!placed && fig.context) {
      const at = sectionFor(out, fig.context);
      if (at !== -1) {
        out[at].lines.push({ k: 'figure', t: fig.caption, svg: fig.svg });
        placed = true;
      }
    }
    if (!placed) unplaced.push(fig);
  }

  if (unplaced.length) {
    const board: NoteSection = {
      n: null,
      title: 'From the board',
      kind: 'normal',
      lines: unplaced.map((f) => ({ k: 'figure' as const, t: f.caption, svg: f.svg })),
    };
    const rev = out.findIndex((s) => s.kind === 'revision');
    out.splice(rev === -1 ? out.length : rev, 0, board);
  }
  return out;
}

/** The whole note, as sections. */
export function parseNotePage(content: string): NoteSection[] {
  const sections: NoteSection[] = [];
  let counter = 0;
  let current: NoteSection | null = null;
  /** Once the class-end marker is passed, everything after it is self-study
   *  whether or not the server also wrote its heading. */
  let pastClassEnd = false;

  const open = (title: string, kind: NoteSectionKind) => {
    current = { n: null, title, kind, lines: [] };
    sections.push(current);
  };

  for (const raw of content.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    if (isClassEndMarker(line)) {
      pastClassEnd = true;
      open('The rest of the lesson', 'selfstudy');
      continue;
    }

    if (ALL_CAPS_LINE.test(line) && HAS_LETTER.test(line) && line.length > 2) {
      const named = namedKind(line);
      open(sentenceCase(line), named ?? (pastClassEnd ? 'selfstudy' : 'normal'));
      continue;
    }

    if (!current) open('Class notes', 'normal');
    const sec = current!;

    const mark = marked(line);
    if (mark) {
      sec.lines.push({ k: mark[0], t: latexToText(mark[1]), r: mark[1] });
    } else if (STANDALONE_FORMULA.test(line)) {
      sec.lines.push({ k: 'formula', t: latexToText(line), r: line });
    } else if (line.startsWith('• ')) {
      sec.lines.push({ k: 'bullet', t: latexToText(line.slice(2).trim()), r: line.slice(2).trim() });
    } else if (looksLikeSubHeading(line)) {
      sec.lines.push({ k: 'sub', t: latexToText(line), r: line });
    } else {
      sec.lines.push({ k: 'body', t: latexToText(line), r: line });
    }
  }

  /**
   * Numbered AFTER the empty ones are dropped, which is the whole reason this
   * is a second pass. Numbering as sections opened meant a heading the server
   * wrote with nothing under it still took a number, and a real note then
   * started at "2." — a page that appears to be missing its own first section.
   */
  const kept = sections.filter((s) => s.lines.length > 0);
  for (const s of kept) {
    if (s.kind === 'normal') s.n = ++counter;
  }
  return kept;
}

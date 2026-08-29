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
/**
 * A curve the `plot` figure knows how to draw.
 *
 * A named vocabulary rather than an expression string: content stays compact
 * and declarative, and the reader never evaluates anything a chapter wrote.
 * `x` is the plot's own x, in the frame's units.
 */
export type PlotCurve =
  /** a·sin(b(x − c)) + d, and the same for cos/tan. */
  | { c: 'sin' | 'cos' | 'tan'; a?: number; b?: number; shift?: number; d?: number; dash?: boolean; soft?: boolean }
  /** y = m·x + k. */
  | { c: 'line'; m: number; k: number; dash?: boolean; soft?: boolean }
  /** A vertical line, which `line` cannot express. */
  | { c: 'vline'; x: number; dash?: boolean; soft?: boolean }
  /** Σ coeffs[i]·x^i, lowest power first. */
  | { c: 'poly'; coeffs: number[]; dash?: boolean; soft?: boolean }
  | { c: 'circle'; cx?: number; cy?: number; r: number; dash?: boolean; soft?: boolean }
  /** (x−cx)²/a² + (y−cy)²/b² = 1. */
  | { c: 'ellipse'; cx?: number; cy?: number; a: number; b: number; dash?: boolean; soft?: boolean }
  /**
   * (x−cx)²/a² − (y−cy)²/b² = 1, both branches. `vertical` gives the
   * conjugate orientation, (y−cy)²/a² − (x−cx)²/b² = 1, which opens up and
   * down: without it the conjugate hyperbola could not be drawn at all.
   */
  | {
      c: 'hyperbola';
      cx?: number;
      cy?: number;
      a: number;
      b: number;
      vertical?: boolean;
      dash?: boolean;
      soft?: boolean;
    }
  /** y² = 4ax when `horizontal`, else x² = 4ay, with its vertex at (cx, cy). */
  | {
      c: 'parabola';
      a: number;
      cx?: number;
      cy?: number;
      horizontal?: boolean;
      dash?: boolean;
      soft?: boolean;
    }
  | { c: 'abs' | 'exp' | 'log' | 'sqrt' | 'recip'; a?: number; dash?: boolean; soft?: boolean };

/** One drawing, matched by index to one chip. */
export interface DiagramFrame {
  /** Visible window. Defaults suit a unit-scale figure. */
  x?: [number, number];
  y?: [number, number];
  curves?: PlotCurve[];
  /** Dots, with optional labels. `open` draws a hollow point. */
  points?: { x: number; y: number; label?: string; open?: boolean; soft?: boolean }[];
  /** Straight segments, for radii, projections, chords, vectors. */
  segments?: { from: [number, number]; to: [number, number]; dash?: boolean; soft?: boolean; arrow?: boolean; label?: string }[];
  /** Free-floating text at a point in plot units. */
  labels?: { x: number; y: number; text: string; soft?: boolean }[];
  /** Shaded band between two x values, or above/below a line. */
  bands?: { x0?: number; x1?: number; y0?: number; y1?: number }[];
  /**
   * A filled region under a curve, or between two, over an x-range.
   *
   * The figure Class 12 leans on hardest: "area under" and "area between"
   * appear twenty-one times each in the reference, and a `band` cannot draw
   * either, because a band is a rectangle and the boundary here is a curve.
   * `under` fills down to the x-axis; give `and` to fill between two curves.
   */
  areas?: { under: PlotCurve; and?: PlotCurve; from: number; to: number; soft?: boolean }[];
  /**
   * A filled polygon, given its corners in plot units.
   *
   * A feasible region is named forty-eight times in the reference and its
   * corner points thirty-three, and it is a polygon, not a stack of bands. The
   * Class 11 Inequalities chapter had to approximate one with a staircase of
   * rectangles; this draws it.
   */
  polygons?: { points: [number, number][]; label?: string; corners?: boolean; soft?: boolean }[];
  /** `numberline` only: intervals on ℝ, with bracket ends. */
  intervals?: { from: number; to: number; openLeft?: boolean; openRight?: boolean; soft?: boolean; label?: string }[];
  /** `unitcircle` only: the angle to sweep, in degrees. */
  angle?: number;
  /** `unitcircle` only: which of the three ratios to draw. */
  show?: ('sin' | 'cos' | 'tan')[];
  /** Axis tick labels in multiples of π, for trig plots. */
  piTicks?: boolean;

  /**
   * `tree` only: a counting tree, drawn left to right.
   *
   * Level 1 fans out in full; level 2 expands from the first node only and the
   * rest carry a multiplier badge. That is how the multiplication principle is
   * drawn on a board, and a fully expanded 4 x 3 x 2 is 24 leaves, which does
   * not fit a phone and does not teach anything the collapsed form does not.
   */
  tree?: {
    root?: string;
    levels: { label: string; count: number; names?: string[] }[];
    /** The arithmetic the picture is making, e.g. "4 × 3 × 2 = 24". */
    total?: string;
  };

  /** `pascal` only: rows of the triangle, with cells to call out. */
  pascal?: {
    rows: number;
    /** [row, index] pairs, 0-based, drawn in amber. */
    highlight?: [number, number][];
    /** A second, softer set: the two cells that add to a highlighted one. */
    parents?: [number, number][];
  };

  /**
   * `axes3d` only: one point in an isometric frame.
   *
   * Isometric rather than perspective on purpose: equal foreshortening on all
   * three axes keeps a unit on x the same length as a unit on z, so a student
   * can read coordinates off the drawing instead of trusting it.
   */
  axes3d?: {
    point?: [number, number, number];
    label?: string;
    /** Dropped lines to the axes and the xy-plane. */
    projections?: boolean;
    /** The cuboid from the origin to the point. */
    box?: boolean;
    /**
     * Arrows from the origin, or between two points. Vector Algebra draws
     * projections and parallelograms; a single labelled dot cannot.
     */
    vectors?: { to: [number, number, number]; from?: [number, number, number]; label?: string; soft?: boolean }[];
    /**
     * A line through a point along a direction, drawn both ways. Three
     * Dimensional Geometry is 73 pages of lines and planes: "plane" appears
     * 623 times, "skew" 29, "shortest distance" 36.
     */
    lines?: { through: [number, number, number]; dir: [number, number, number]; label?: string; soft?: boolean; dash?: boolean }[];
    /** A plane, drawn as the quadrilateral its normal cuts out near the origin. */
    planes?: { normal: [number, number, number]; d?: number; label?: string; soft?: boolean }[];
  };
}

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
  | {
      t: 'diagram';
      kind: string;
      kicker: string;
      /**
       * Chip labels and their captions.
       *
       * These were built into the reader, one hardcoded block per figure, which
       * meant a chapter's editorial writing lived in a shared component and a
       * new figure could not be authored without editing it. They belong to the
       * chapter. Optional so the six original set-theory figures keep their
       * built-in text and nothing had to be migrated.
       */
      chips?: string[];
      captions?: string[];
      /** True when chip labels are maths notation and need the serif face. */
      mathChips?: boolean;
      /**
       * What to draw, one entry per chip. Only the parameterised kinds
       * (`plot`, `numberline`, `unitcircle`) read this; the bespoke set-theory
       * figures draw themselves from `selected` alone.
       */
      frames?: DiagramFrame[];
    }
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
  // Keyed by the CATALOGUE's title, not the source book's. The reference PDF
  // calls this chapter "Trigonometric Functions"; our catalogue calls it
  // "Trigonometry", and the catalogue is what the Chapters screen matches on.
  'mathematics|11|relations and functions': () =>
    import('@/content/textbooks/math-11-02-relations'),
  'mathematics|11|trigonometry': () => import('@/content/textbooks/math-11-03-trigonometry'),
  'mathematics|11|complex numbers': () => import('@/content/textbooks/math-11-04-complex'),
  'mathematics|11|linear inequalities': () =>
    import('@/content/textbooks/math-11-05-inequalities'),
  'mathematics|11|permutations and combinations': () =>
    import('@/content/textbooks/math-11-06-permutations'),
  'mathematics|11|binomial theorem': () => import('@/content/textbooks/math-11-07-binomial'),
  'mathematics|11|sequences and series': () =>
    import('@/content/textbooks/math-11-08-sequences'),
  'mathematics|11|straight lines': () =>
    import('@/content/textbooks/math-11-09-straight-lines'),
  'mathematics|11|conic sections': () => import('@/content/textbooks/math-11-10-conics'),
  'mathematics|11|introduction to three dimensional geometry': () =>
    import('@/content/textbooks/math-11-11-three-d'),
  'mathematics|11|limits and derivatives': () =>
    import('@/content/textbooks/math-11-12-limits'),
  'mathematics|11|statistics': () => import('@/content/textbooks/math-11-13-statistics'),
  'mathematics|11|probability': () => import('@/content/textbooks/math-11-14-probability'),

  // Class 12. Keys carry the class level, so "Relations and Functions" here
  // and in Class 11 are different chapters and cannot collide.
  'mathematics|12|relations and functions': () =>
    import('@/content/textbooks/math-12-01-relations'),
  'mathematics|12|inverse trigonometric functions': () =>
    import('@/content/textbooks/math-12-02-inverse-trig'),
  'mathematics|12|matrices': () => import('@/content/textbooks/math-12-03-matrices'),
  'mathematics|12|determinants': () => import('@/content/textbooks/math-12-04-determinants'),
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

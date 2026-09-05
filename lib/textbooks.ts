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
  /**
   * y = d + a·f(k(x − x0)).
   *
   * `k`, `x0` and `d` default to 1, 0 and 0, which is exactly the old
   * one-scale-factor behaviour. They exist because Newton's cooling law is
   * 25 + 75e^(−kt), and a Differential Equations figure was dropped for want
   * of the offset.
   */
  | {
      c: 'abs' | 'exp' | 'log' | 'sqrt' | 'recip';
      a?: number;
      k?: number;
      x0?: number;
      d?: number;
      dash?: boolean;
      soft?: boolean;
    }
  /**
   * A point list, drawn straight or smoothed through the points.
   *
   * The closed vocabulary above names curves it can evaluate. A stress-strain
   * curve, a hysteresis loop, a diode's I-V characteristic and a
   * binding-energy-per-nucleon curve are not any named function, and every one
   * of them is a figure physics asks for. Two chapters already fake this with
   * `segments` polylines.
   */
  | { c: 'pts'; pts: [number, number][]; smooth?: boolean; dash?: boolean; soft?: boolean }
  /** y = a·x^p. Adiabats are PV^γ; `recip` only covers the isotherm. */
  | { c: 'power'; a?: number; p: number; dash?: boolean; soft?: boolean };

/**
 * What an element MEANS, not what colour it is.
 *
 * A closed role vocabulary rather than raw colour, for the same reason
 * `PlotCurve` is a closed vocabulary: content stays declarative and the reader
 * decides how a role is painted. Every value maps to a token already in the
 * brand.
 *
 * Every figure must survive the greyscale test: a charge sign is a + or − mark
 * and a field through the page is ⊗ or ⊙, never a colour alone. Tone
 * reinforces meaning that the shape already carries.
 */
export type Tone = 'ink' | 'amber' | 'soft' | 'green' | 'red';

/** An arrow with a real head. `segments` draws a dot at the tip instead. */
export interface FigureArrow {
  from: [number, number];
  to: [number, number];
  /** Default 'end'. */
  head?: 'end' | 'start' | 'both' | 'none';
  dash?: boolean;
  tone?: Tone;
  label?: string;
  /** Where the label sits relative to the shaft. Default 'above'. */
  at?: 'above' | 'below' | 'start' | 'end' | 'mid';
  /** Set the label in the serif maths face. */
  math?: boolean;
}

/** An angle mark. Physics writes θ on a slope in almost every mechanics figure. */
export interface FigureArc {
  at: [number, number];
  r: number;
  /** Degrees, anticlockwise positive, measured from the +x axis. */
  from: number;
  to: number;
  /** Draw a square corner instead of an arc. */
  right?: boolean;
  label?: string;
  tone?: Tone;
  dash?: boolean;
}

/** An open or closed polyline, optionally smoothed and filled. */
export interface FigurePoly {
  pts: [number, number][];
  smooth?: boolean;
  close?: boolean;
  /** `hatch` is 45 degree ink hairlines, for ground and fixed supports. */
  fill?: 'none' | 'wash' | 'hatch';
  tone?: Tone;
  dash?: boolean;
  label?: string;
}

/**
 * A glyph at a point.
 *
 * `into` and `outof` are the crossed and dotted circles for a field through
 * the page, and `plus`/`minus` are charge signs. These carry meaning by SHAPE
 * so a figure still reads with colour removed.
 */
export interface FigureMark {
  x: number;
  y: number;
  glyph: 'dot' | 'open' | 'plus' | 'minus' | 'into' | 'outof' | 'cross' | 'square' | 'tick';
  label?: string;
  tone?: Tone;
}

/**
 * Mechanics furniture, as a closed set.
 *
 * Closed on purpose: a block, an incline and a pulley appear in hundreds of
 * problems, and an author should not be positioning the hatching on a ground
 * line by hand. Adding a kind requires a named source figure that needs it.
 */
export interface FigureBody {
  kind: 'block' | 'ground' | 'wall' | 'incline' | 'pulley' | 'spring' | 'rope';
  at: [number, number];
  w?: number;
  h?: number;
  /** Degrees anticlockwise. An incline is a rotated ground. */
  rot?: number;
  /** Far end, for `spring` and `rope`. */
  to?: [number, number];
  label?: string;
  tone?: Tone;
}

/**
 * A box-and-arrow schematic on a small grid.
 *
 * Both books reason in flow charts and reservoir schematics: the zeroth law
 * as three boxes through a diathermic wall, an engine drawing Q1 and rejecting
 * Q2, the eight-box map of current electricity. A Linear Programming figure
 * was already dropped for want of one.
 */
export interface FigureFlow {
  boxes: {
    id: string;
    col: number;
    row: number;
    text: string;
    shape?: 'box' | 'round' | 'diamond';
    tone?: Tone;
  }[];
  links: { from: string; to: string; label?: string; dash?: boolean; tone?: Tone }[];
}

/**
 * Horizontal energy levels with transitions between them.
 *
 * The same primitive draws the hydrogen ladder, its emission series, and the
 * conductor / semiconductor / insulator band pictures: a band is a level with
 * thickness. `scale: 'inverseSquare'` places rows at −1/n², which is what
 * makes the hydrogen levels crowd towards the top the way they really do.
 */
export interface FigureLevels {
  rows: { at: number; label?: string; right?: string; dash?: boolean; tone?: Tone }[];
  jumps?: { from: number; to: number; label?: string; tone?: Tone }[];
  bands?: { from: number; to: number; label?: string; fill?: 'wash' | 'hatch' }[];
  scale?: 'linear' | 'inverseSquare';
}

/**
 * A circuit on an integer grid, so an author never computes a pixel.
 *
 * The source's own briefs are rectilinear -- "three resistors in a line
 * between A and B", "series R along the top, shunt R down to the bottom rail"
 * -- which is exactly a grid netlist. Wires are orthogonal runs; a part sits
 * on the segment between two grid nodes and is drawn with its own symbol.
 */
export interface FigureCircuit {
  grid?: [number, number];
  wires?: { from: [number, number]; to: [number, number] }[];
  parts?: {
    at: [number, number];
    to: [number, number];
    kind: 'R' | 'C' | 'L' | 'cell' | 'battery' | 'lamp' | 'switch' | 'A' | 'V' | 'G' | 'diode';
    label?: string;
    tone?: Tone;
    /**
     * Which side the label sits on. Defaults to above a horizontal part and
     * right of a vertical one, which collides once four branches sit side by
     * side -- the case that made this necessary.
     */
    side?: 'above' | 'below' | 'left' | 'right';
  }[];
  nodes?: { at: [number, number]; label?: string; junction?: boolean }[];
  currents?: { at: [number, number]; to: [number, number]; label?: string }[];
  /**
   * A dashed box drawn around part of the circuit, for the cases where the
   * box IS the physics: a real cell as an EMF plus its internal resistance,
   * or the black box a question asks you to replace.
   */
  regions?: {
    from: [number, number];
    to: [number, number];
    label?: string;
    tone?: Tone;
  }[];
}

/**
 * A ray diagram whose image position the RENDERER solves.
 *
 * The one place real physics lives in the reader, and deliberately so. An
 * author gives the element, its focal length and where the object stands; the
 * mirror formula 1/v + 1/u = 1/f and the lens formula 1/v − 1/u = 1/f decide
 * the rest. A confidently wrong ray diagram is worse than no diagram, and an
 * author hand-placing an image will eventually place it wrongly.
 *
 * Distances follow the Cartesian convention: measured from the pole or optical
 * centre, against the incident light negative. So a real object is u < 0.
 */
export interface FigureOptics {
  element: 'convexLens' | 'concaveLens' | 'concaveMirror' | 'convexMirror';
  /**
   * Signed focal length, Cartesian.
   *
   * A convex lens is POSITIVE and a concave mirror is NEGATIVE. This comment
   * used to say a concave mirror was positive, which is wrong and was caught
   * by the first chapter to use this kind: fed a positive f, the solver draws
   * an erect virtual image for an object beyond the centre of curvature, which
   * is the opposite of what a concave mirror does.
   *
   * The convention behind it: incident light travels in +x, and distances
   * measured against it are negative. A concave mirror's focus sits on the
   * incoming side, so its f is negative -- and by the same rule a REAL image
   * is negative-v for a mirror and positive-v for a lens, which is worth
   * stating because the two look contradictory until you see they are one rule.
   */
  f: number;
  /** Object distance (negative for a real object) and height. */
  object?: { u: number; h: number; label?: string };
  /** Draw the two standard construction rays. Default true. */
  rays?: boolean;
  /** Mark F and 2F on both sides. Default true. */
  marks?: boolean;
}

/** One drawing, matched by index to one chip. */
export interface DiagramFrame {
  /** Visible window. Defaults suit a unit-scale figure. */
  x?: [number, number];
  y?: [number, number];
  curves?: PlotCurve[];
  /** Dots, with optional labels. `open` draws a hollow point. */
  /**
   * Dots, with optional labels. `open` draws a hollow point.
   *
   * `at` picks which corner the label sits in. It defaults to the old
   * north-east, which is wrong whenever a line LEAVES the point in that
   * direction -- a chord drawn from A put A's own label on the chord.
   */
  points?: {
    x: number;
    y: number;
    label?: string;
    open?: boolean;
    soft?: boolean;
    at?: 'ne' | 'nw' | 'se' | 'sw';
  }[];
  /** Straight segments, for radii, projections, chords, vectors. */
  /**
   * Straight segments, for radii, projections, chords, vectors.
   *
   * `at` slides the label along the segment, exactly as on `arrows`. Without
   * it every label sat at the midpoint, so the two diagonals of a
   * parallelogram -- which cross AT their midpoints -- put both labels in the
   * same place.
   */
  segments?: {
    from: [number, number];
    to: [number, number];
    dash?: boolean;
    soft?: boolean;
    arrow?: boolean;
    label?: string;
    at?: 'above' | 'below' | 'start' | 'end' | 'mid';
  }[];
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
   * Which axes to draw. Default 'auto' is exactly today's behaviour.
   *
   * A free-body diagram is not a graph: it lives in a coordinate space but has
   * no meaningful axes, and drawing a cross through the middle of a block on
   * an incline is noise. 'none' turns them off.
   */
  axes?: 'auto' | 'none' | 'cross' | 'box';
  /** Axis titles, e.g. "t (s)" and "v (m/s)". */
  axisX?: string;
  axisY?: string;
  /**
   * Numeric ticks. `every` spaces them; `at` places them exactly; `labels`
   * overrides the printed text so a tick can read "2F" or "λ/2".
   *
   * Until now the only tick systems were integers on `numberline` and
   * multiples of π, so a v-t graph in seconds got a bare rule with no numbers.
   */
  ticksX?: { every?: number; at?: number[]; labels?: string[] };
  ticksY?: { every?: number; at?: number[]; labels?: string[] };

  /** Arrows with real heads: force, field, velocity, current. */
  arrows?: FigureArrow[];
  /** Angle marks. */
  arcs?: FigureArc[];
  /** Polylines and filled regions the curve vocabulary cannot name. */
  polys?: FigurePoly[];
  /** Charge signs, into/out-of-page markers, labelled dots. */
  marks?: FigureMark[];
  /** Blocks, inclines, pulleys, springs, ground. */
  bodies?: FigureBody[];

  /** height / width. Default .72, or .34 for a numberline. */
  aspect?: number;

  /** `flow` only. */
  flow?: FigureFlow;
  /** `levels` only. */
  levels?: FigureLevels;
  /**
   * `circuit` only.
   *
   * `labels` and `marks` on this frame ALSO reach the circuit renderer, read
   * in grid units rather than plot units. Two chapters needed them and found
   * them silently ignored: a capacitor cannot carry both its capacitance and
   * its voltage from one part label, and plate charge signs have nowhere to
   * live at all.
   */
  circuit?: FigureCircuit;
  /** `optics` only. */
  optics?: FigureOptics;

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

  // Physics. Keys are the CATALOGUE's titles, read from the chapters table on
  // 2026-09-02, not the book's: the book calls chapter 6 "System of Particles
  // and Rotational Motion" where the catalogue says "Rotational Motion", and a
  // guessed title renders no row at all.
  'physics|11|motion in a straight line': () =>
    import('@/content/textbooks/phy-11-02-motion-straight-line'),
  'physics|11|gravitation': () => import('@/content/textbooks/phy-11-07-gravitation'),
  'physics|12|atoms': () => import('@/content/textbooks/phy-12-12-atoms'),
  'physics|12|nuclei': () => import('@/content/textbooks/phy-12-13-nuclei'),
  'physics|12|semiconductor electronics': () =>
    import('@/content/textbooks/phy-12-14-semiconductors'),
  'physics|12|ray optics and optical instruments': () =>
    import('@/content/textbooks/phy-12-09-ray-optics'),
  'physics|12|wave optics': () => import('@/content/textbooks/phy-12-10-wave-optics'),
  'physics|12|dual nature of radiation and matter': () =>
    import('@/content/textbooks/phy-12-11-dual-nature'),
  'physics|12|electromagnetic induction': () =>
    import('@/content/textbooks/phy-12-06-electromagnetic-induction'),
  'physics|12|alternating current': () =>
    import('@/content/textbooks/phy-12-07-alternating-current'),
  'physics|12|magnetism and matter': () =>
    import('@/content/textbooks/phy-12-05-magnetism-matter'),
  'physics|12|electromagnetic waves': () =>
    import('@/content/textbooks/phy-12-08-electromagnetic-waves'),
  'physics|12|moving charges and magnetism': () =>
    import('@/content/textbooks/phy-12-04-moving-charges-magnetism'),
  'physics|12|electric charges and fields': () =>
    import('@/content/textbooks/phy-12-01-electric-charges-fields'),
  'physics|12|electrostatic potential and capacitance': () =>
    import('@/content/textbooks/phy-12-02-potential-capacitance'),
  'physics|12|current electricity': () =>
    import('@/content/textbooks/phy-12-03-current-electricity'),
  'physics|11|units and measurements': () =>
    import('@/content/textbooks/phy-11-01-units-measurements'),
  'physics|11|waves': () => import('@/content/textbooks/phy-11-14-waves'),
  'physics|11|kinetic theory': () =>
    import('@/content/textbooks/phy-11-12-kinetic-theory'),
  'physics|11|oscillations': () =>
    import('@/content/textbooks/phy-11-13-oscillations'),
  'physics|11|thermodynamics': () =>
    import('@/content/textbooks/phy-11-11-thermodynamics'),
  'physics|11|thermal properties of matter': () =>
    import('@/content/textbooks/phy-11-10-thermal-properties'),
  'physics|11|mechanical properties of fluids': () =>
    import('@/content/textbooks/phy-11-09-mech-fluids'),
  'physics|11|mechanical properties of solids': () =>
    import('@/content/textbooks/phy-11-08-mech-solids'),
  'physics|11|motion in a plane': () =>
    import('@/content/textbooks/phy-11-03-motion-plane'),
  'physics|11|rotational motion': () =>
    import('@/content/textbooks/phy-11-06-rotational-motion'),
  'physics|11|laws of motion': () =>
    import('@/content/textbooks/phy-11-04-laws-of-motion'),
  // Catalogue says "Work, Energy & Power"; chapterKey turns & into "and".
  'physics|11|work energy and power': () =>
    import('@/content/textbooks/phy-11-05-work-energy-power'),

  // Class 12. Keys carry the class level, so "Relations and Functions" here
  // and in Class 11 are different chapters and cannot collide.
  'mathematics|12|relations and functions': () =>
    import('@/content/textbooks/math-12-01-relations'),
  'mathematics|12|inverse trigonometric functions': () =>
    import('@/content/textbooks/math-12-02-inverse-trig'),
  'mathematics|12|matrices': () => import('@/content/textbooks/math-12-03-matrices'),
  'mathematics|12|determinants': () => import('@/content/textbooks/math-12-04-determinants'),
  'mathematics|12|continuity and differentiability': () =>
    import('@/content/textbooks/math-12-05-continuity'),
  'mathematics|12|applications of derivatives': () =>
    import('@/content/textbooks/math-12-06-derivatives-applications'),
  'mathematics|12|integrals': () => import('@/content/textbooks/math-12-07-integrals'),
  'mathematics|12|application of integrals': () =>
    import('@/content/textbooks/math-12-08-integrals-applications'),
  'mathematics|12|probability': () => import('@/content/textbooks/math-12-13-probability'),
  'mathematics|12|differential equations': () =>
    import('@/content/textbooks/math-12-09-differential-equations'),
  'mathematics|12|vector algebra': () =>
    import('@/content/textbooks/math-12-10-vector-algebra'),
  'mathematics|12|three dimensional geometry': () =>
    import('@/content/textbooks/math-12-11-three-d-geometry'),
  // Written and registered, but no row renders for a JEE or NEET student: the
  // server's `?exam=` filter drops this chapter as board-only, which is why
  // the app lists twelve Class 12 chapters against the table's thirteen. It
  // appears the moment an exam scope carries it.
  'mathematics|12|linear programming': () =>
    import('@/content/textbooks/math-12-12-linear-programming'),
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

/**
 * How many chapters of a subject are actually written and readable.
 *
 * Counted from the registry, not from the catalogue: the catalogue lists the
 * whole syllabus, and for Chemistry and Biology none of it is written yet.
 * A card promising "19 chapters" that opens onto nineteen SOON rows is a
 * worse first impression than one that says the truth.
 */
export function readyChapterCount(subject: string): number {
  const prefix = `${subject.trim().toLowerCase()}|`;
  return Object.keys(CHAPTERS).filter((k) => k.startsWith(prefix)).length;
}

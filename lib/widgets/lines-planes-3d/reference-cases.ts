/**
 * The payloads this widget is verified against, in ONE place.
 *
 * `circuit_network` keeps its cases inline in render-trees.test.tsx, and its
 * maths suite keeps its own — which means two lists that must be kept in step
 * by hand. Two suites check this widget (the render harness that writes
 * build/trees, and __tests__/independent-routes.test.ts), and if they ever
 * disagree about which payloads matter, the one that matters is whichever
 * happened to be edited. So the list lives here instead and both import it:
 * drift is not caught, it is made impossible.
 *
 * Every case is either a worked example transcribed from
 * `Drona_Class12_Mathematics_Master_Reference.pdf` Chapter 11 — so its numbers
 * are checkable against a published answer — or a named risk this widget has.
 * None of them is here for variety.
 */
import type { LinesPlanes3dParams } from './space-math';

const BASE: LinesPlanes3dParams = {
  mode: 'two_lines',
  view: 'standard',
  point: [0, 0, 0],
  line1: { at: [1, 2, -1], dir: [2, 1, -2] },
  line2: { at: [3, -1, 1], dir: [1, 2, 2] },
  plane1: { normal: [0, 0, 1], d: 0 },
  plane2: { normal: [0, 1, 0], d: 0 },
  show_image: true,
  show_axes: false,
  caption: 'Shortest distance between two skew lines',
};

export const REFERENCE_CASES: Record<string, LinesPlanes3dParams> = {
  /** Subtopic 02 Example 3. d = 4 exactly, and b1·b2 = 0 so θ = 90°. */
  skew_lines: { ...BASE },

  /**
   * THE DEGENERATE-BUT-LEGAL CASE. The lines are coplanar and meet, so the
   * common perpendicular is a point rather than a segment and the widget
   * marks the crossing instead of drawing a zero-length "d". Coplanarity is
   * a whole JEE Advanced sub-topic (Subtopic 02 Example 4), so this is a real
   * payload, not a corner.
   */
  intersecting_lines: {
    ...BASE,
    line1: { at: [2, -1, 3], dir: [1, -1, 2] },
    line2: { at: [1, 0, 1], dir: [0, 1, 1] },
    caption: 'Coplanar lines meet, so d is zero',
  },

  /** Subtopic 04 Example 1. F = (0,3,2), PF = √6, P' = (−2,2,3). */
  point_line: {
    ...BASE,
    mode: 'point_line',
    point: [2, 4, 1],
    line1: { at: [1, 2, 3], dir: [1, -1, 1] },
    caption: 'Foot, distance and image of a point in a line',
  },

  /** Subtopic 03 Example 3. F = (11/3, 5/3, 7/3), d = 1, P' = (10/3, 7/3, 5/3). */
  point_plane: {
    ...BASE,
    mode: 'point_plane',
    point: [4, 1, 3],
    plane1: { normal: [1, -2, 2], d: 5 },
    caption: 'Foot, distance and image of a point in a plane',
  },

  /** Subtopic 05 Example 1. The line meets 2x + y − z = 1 at (1, 0, 1). */
  line_plane: {
    ...BASE,
    mode: 'line_plane',
    line1: { at: [2, -1, 3], dir: [1, -1, 2] },
    plane1: { normal: [2, 1, -1], d: 1 },
    caption: 'Where a line meets a plane',
  },

  /**
   * Subtopic 03, Practice Exercise 3: the angle between 2x − y + 2z = 5 and
   * 3x + 6y − 2z = 7. n1·n2 = 6 − 6 − 4 = −4, |n1| = 3, |n2| = 7, so
   * cos θ = 4/21 and θ = 79.0194…°. The acute convention is what turns the
   * −4 into a 4; without the modulus this reports 100.98°.
   */
  two_planes: {
    ...BASE,
    mode: 'two_planes',
    plane1: { normal: [2, -1, 2], d: 5 },
    plane2: { normal: [3, 6, -2], d: 7 },
    caption: 'Angle between two planes',
  },

  /**
   * THE ONLY CASE THAT DRAWS THE COORDINATE AXES, and it is the Class 11 row
   * this widget also serves: the foot of the perpendicular from a point onto
   * the XY-plane. The axes add three Lines, three arrowheads and three labels
   * that no other case has, which is three more collision opportunities.
   */
  axes_on: {
    ...BASE,
    mode: 'point_plane',
    point: [3, 2, 4],
    plane1: { normal: [0, 0, 1], d: 0 },
    show_axes: true,
    caption: 'Foot of the perpendicular on the XY-plane',
  },

  /**
   * THE CASE THAT ACTUALLY SHIPS: the default language, at the binding board.
   * Same payload as `skew_lines`, whose English caption is 43 characters; this
   * is the same sentence a Hinglish Drona says, at 44. Hinglish is romanised
   * Latin, not Devanagari, and LENGTH is the whole pressure — the readout is
   * width-fitted, so the two trees differ in the caption and nothing else.
   */
  hinglish_caption: {
    ...BASE,
    caption: 'Do skew lines ke beech ki sabse chhoti doori',
  },
};

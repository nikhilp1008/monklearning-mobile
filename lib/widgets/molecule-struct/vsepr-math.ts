/**
 * molecule_struct — one central atom, its ligands, and the SHAPE that follows
 * from counting electron domains. Group A only: a single centre with ligands
 * placed by electron-domain count. Backbone walks (Fischer/Haworth projections,
 * peptide chains) are a different widget; Newman projections are deferred.
 *
 * Nothing here is a worklet, deliberately. The one animatable param
 * (`highlight_site`) moves a single MARKER_R circle around the site ring, and
 * the only arithmetic that has to happen on the UI thread is one angle lerp
 * plus a cos/sin — small enough to live inside the component's own worklet.
 * So this file imports nothing but `../chrome` (which itself imports nothing),
 * which is what lets its assertions run before any React exists.
 *
 * ===========================================================================
 * THE MODEL EMITS NO GEOMETRY — AND NAMES NO SHAPE
 * ===========================================================================
 *
 * This is stronger than CLAUDE.md §3's "the model never emits coordinates".
 * The payload states only chemistry the model actually knows:
 *
 *     centre, bond_pairs, lone_pairs, ligands[], bond_orders[], charge
 *
 * It does NOT say "tetrahedral", does not say "sp3", does not say "109.5", and
 * does not say where anything goes. Shape, hybridisation, both angles and every
 * coordinate are looked up in the closed AXE table below from (bond_pairs,
 * lone_pairs) alone. A model that could name the shape could name the WRONG
 * shape — asking it for "trigonal pyramidal" and drawing what it said would be
 * the same class of defect as asking it for an SVG path.
 *
 * ===========================================================================
 * THE DRAWN ANGLE AND THE REPORTED ANGLE ARE DELIBERATELY DIFFERENT NUMBERS
 * ===========================================================================
 *
 * 109.5 degrees CANNOT BE DRAWN IN A PLANE. A tetrahedron has four bonds at
 * 109.5 to each other in three dimensions; every 2D depiction of methane ever
 * printed draws them 90 degrees apart on the page and writes "109.5" beside
 * them. That is not an approximation, it is a PROJECTION, and the two numbers
 * are different quantities:
 *
 *   `bondSites`  — a per-shape 2D DRAWING CONVENTION, in screen degrees. It is
 *                  chosen for legibility (labels that clear each other, lone
 *                  pairs where VSEPR puts them) and carries NO physical claim.
 *   `bondAngle`  — the PHYSICAL angle, from NCERT. It is what the readout and
 *                  the angle annotation print, and it is never computed from
 *                  the drawing.
 *
 * Nothing in this file derives one from the other, in either direction.
 * Conflating them — drawing the bonds 109.5 apart in the plane and calling it
 * methane, or measuring the drawn angle and reporting it — is exactly the
 * "approximately right" defect CLAUDE.md §1 exists to prevent. Our students
 * read values off these diagrams; the value they read must be the one from the
 * table, not the one the pixels happen to make.
 *
 * ===========================================================================
 * REFERENCE VALUES — computed by hand, cited, then asserted in
 * lib/widgets/__tests__/physics.test.ts.
 * ===========================================================================
 *
 * Sources: NCERT Class 11 Chemistry Unit 4 "Chemical Bonding and Molecular
 * Structure" (VSEPR, Table 4.6 and Fig. 4.7-4.8) and Class 12 Unit 5
 * "Coordination Compounds" (oxidation state, coordination number, EAN).
 *
 *   1. METHANE, CH4. bond_pairs 4, lone_pairs 0.
 *        steric_number 4 -> sp3, tetrahedral
 *        ideal_angle 109.5, bond_angle 109.5
 *        formal charge on C = V - 2*lp - sum(bond_orders) = 4 - 0 - 4 = 0
 *      DRAWN at 90 degrees apart (bondSites 135/45/225/315). Reported 109.5.
 *      This is the fixture for the paragraph above.
 *
 *   2. WATER, H2O. bond_pairs 2, lone_pairs 2.
 *        steric_number 4 -> sp3, BENT
 *        ideal_angle 109.5, bond_angle 109.5 - 2*2.5 = 104.5
 *        formal charge on O = 6 - 4 - 2 = 0
 *      THE -2.5-PER-LONE-PAIR CONSTANT IS READ OFF NCERT'S OWN SERIES, not
 *      tuned to fit: NCERT gives CH4 109.5, NH3 107, H2O 104.5 for the same
 *      sp3 parent. Three points, evenly spaced, 2.5 apart. NH3 at 107 is the
 *      middle point of that line and is entry "3-1" below.
 *
 *   3. PHOSPHORUS PENTACHLORIDE, PCl5. bond_pairs 5, lone_pairs 0.
 *        steric_number 5 -> sp3d, trigonal bipyramidal
 *        ideal_angle 120  (equatorial-equatorial)
 *        secondary_angle 90 (axial-equatorial)
 *        formal charge on P = 5 - 0 - 5 = 0
 *      THIS IS THE FIXTURE THAT PROVES `secondary_angle_deg` IS REAL. A TBP
 *      has TWO distinct bond angles and no single number describes it; a
 *      one-angle model is wrong for every SN-5 species, not just this one.
 *
 *   4. OZONE, O3, central atom. bond_pairs 2, bond_orders [2,1], lone_pairs 1.
 *        steric_number 3 -> sp2, bent, ideal 120, bond_angle 117.5
 *      NOTE the angle here is the table's IDEALISED AX2E1 value
 *      (120 - 1x2.5), not a measured one for ozone. NCERT gives O3 as
 *      117 and SO2 as ~119, and this table is keyed on (bond_pairs,
 *      lone_pairs) alone, so it CANNOT tell the two apart -- one row
 *      serves both. The formal-charge citation below is exact; the
 *      angle is a model output and is quoted as such. A per-species
 *      angle override is the only real fix and is deliberately not
 *      built: it would make the table a species lookup rather than a
 *      VSEPR derivation, which is a different widget.
 *        formal charge, centre  = 6 - 2*1 - (2+1) = +1
 *        formal charge, =O      = 6 + 2 - 8       =  0
 *        formal charge, -O      = 6 + 1 - 8       = -1
 *                                                  ----
 *                                          sum      0   = the species charge
 *      NCERT's own worked example (Unit 4, "Formal Charge"). The sum rule is
 *      what makes it a check rather than three unrelated numbers.
 *
 *   5. POTASSIUM HEXACYANOFERRATE(II), K4[Fe(CN)6] -> the ion [Fe(CN)6]4-.
 *        oxidation_state = charge - sum(ligand charges)
 *                        = (-4) - 6*(-1) = +2
 *        coordination_number = sum(denticity) = 6*1 = 6
 *        EAN = Z(Fe) - oxidation_state + 2*coordination_number
 *            = 26 - 2 + 12 = 36                       (= krypton)
 *      CROSS-CHECK, Ni(CO)4: charge 0, CO neutral -> oxidation_state 0;
 *        coordination_number 4; EAN = 28 - 0 + 8 = 36. Same noble gas from a
 *        completely different (Z, ox, CN) triple, which is the point of EAN.
 *
 *   6. THE COUNTER-FIXTURE — XENON DIFLUORIDE, XeF2.
 *        bond_pairs 2, lone_pairs 3 -> steric_number 5 -> sp3d
 *        shape LINEAR, bond_angle 180 EXACTLY.
 *      A naive "two bond pairs means bent, minus 2.5 per lone pair" gives
 *      120 - 7.5 = 112.5, or 180 - 7.5 = 172.5 — and both are wrong. The
 *      compression rule in reference 2 is a property of ONE parent geometry
 *      (sp3, where lone pairs and bond pairs compete for equivalent sites); in
 *      a trigonal bipyramid the three lone pairs all go EQUATORIAL and leave
 *      the two axial bonds exactly trans. A compression rule checked only
 *      against bent examples is a rule trusted for having been written, which
 *      is the failure mode docs/small-screen-rendering-rules.md names.
 *      Hence: the table below is a LOOKUP, not a formula. The -2.5 arithmetic
 *      appears only inside the three sp3 entries, where it is what NCERT
 *      measured.
 *
 * ===========================================================================
 * THE CAPS, and the arithmetic they come from.
 * ===========================================================================
 *
 * Every number is measured at 343x236 — docs/small-screen-rendering-rules.md's
 * `spec-small`, the SMALLEST board this app checks — because a floor derived
 * at 900x430 is not a floor. They are enforced in `validate()`, never by
 * thinning the render.
 *
 * At LIGAND_SIZE 12 and verify-render's own 0.58 char-width model:
 *     one character       = 12 * 0.58  =  6.96 pt
 *     a 4-char label box  = 4 * 6.96   = 27.84 pt wide
 *     one text line       = 12 * 1.15  = 13.80 pt tall
 *
 * THE BOX. innerW = 343 - 2*PAD_SIDE(12) = 319.
 *          innerH = 236 - READOUT_BAND(28.4) - PAD_EDGE(10) = 197.6.
 *          centre = (12 + 319/2, 28.4 + 197.6/2) = (171.5, 127.2).
 *
 * THE SITE RADIUS. R = min(R_width, R_height) where
 *          R_width  = (319   - 2*27.84)/2 = 263.32/2 = 131.66
 *          R_height = (197.6 - 2*13.80)/2 = 170.00/2 =  85.00
 *   -> R = 85, HEIGHT-BOUND, which is what a landscape board should be.
 *
 * INTERACTION MODE reserves a legend row for the bond-style key, bandFor(12,6)
 * = 25.2pt, so its innerH is 172.4 and
 *          R_height = (172.4 - 27.6)/2 = 72.40   -> R = 72.4.
 *   Interaction mode is therefore the BINDING case for every label cap below.
 *
 * bond_pairs <= 6, and SEVEN IS A HARD ERROR.
 *   Six sites at 60 degrees apart put the tightest adjacent pair at
 *       dx = R*(1 - cos 60) = 0.5*R
 *   Two 4-char label boxes need 27.84 of centre-to-centre separation plus the
 *   4pt clearance verify-render's own glyph rule uses, i.e. 31.84.
 *       R = 85.0 (electron_domain):  dx = 42.50  vs 31.84  -> clears by 10.66
 *       R = 72.4 (interaction):      dx = 36.20  vs 31.84  -> clears by  4.36
 *   Seven sites at 51.43 degrees:
 *       dx = R*(1 - cos 51.43) = 0.3765*R
 *       R = 72.4 (interaction):      dx = 27.26  vs 31.84  -> FAILS by 4.58
 *       R = 85.0 (electron_domain):  dx = 32.00  vs 31.84  -> clears by 0.16
 *   0.16pt is not a margin, it is a coincidence, and it evaporates in the mode
 *   the widget is most likely to be used in. Independently: NCERT's VSEPR table
 *   covers 2 to 6 electron domains and stops there, so a seventh site has no
 *   row in the table to look up either. Capped at 6 in the schema.
 *
 * MAX_LIGAND_CHARS = 4, derived at the interaction-mode R with six sites:
 *       4 chars: 27.84 + 4 = 31.84 <= 36.20   OK
 *       5 chars: 34.80 + 4 = 38.80 >  36.20   FAILS
 *   A 5-char ligand at six sites is legible at 900x430 and illegible on a
 *   phone, which is precisely the case the schema must refuse rather than the
 *   render thin.
 *
 * MAX_CENTRE_CHARS = 3 is the DECLARED ceiling, measured conservatively; the
 *   effective one is 2, because the longest symbol in ELEMENTS is two
 *   characters and validate() refuses anything not in that table. Recorded
 *   because a cap nothing can reach is worth knowing about rather than
 *   silently trusting. At CENTRE_SIZE 16 a 3-char centre has half-width
 *   3*16*0.58/2 = 13.92, and
 *   the angle annotation sits at ANGLE_LABEL_R = 47 along the arc bisector. The
 *   binding pair is the seesaw/TBP bisector at 180 degrees, where the angle
 *   label shares the centre atom's y exactly:
 *       47 vs 13.92 + half("120.0°")=20.88  = 34.80   -> clears by 12.20
 *
 * THE GEOMETRIC BACKSTOP. The arithmetic above names the caps; it does not
 * enumerate every pair of labels a 14-entry shape table can produce. So
 * `fitProblems()` lays the payload out at REF_W x REF_H IN ITS OWN MODE and
 * runs verify-render's exact box-overlap test over every label the component
 * will emit — readout and legend included. validate() refuses anything it
 * reports. That is CLAUDE.md §3's "the schema's legal range must be a SUBSET
 * of what renders correctly", enforced constructively.
 *
 * ===========================================================================
 * THREE RENDERING TRAPS, all measured.
 * ===========================================================================
 *
 * 1. A LONE PAIR DRAWN AS TWO <Circle>s IS A GUARANTEED HARD ERROR.
 *    verify-render assertion 8 fails any two circles of the same radius closer
 *    than 2r + 4. A lone pair is two dots about 6pt apart; at r = 2.4 the floor
 *    is 2(2.4) + 4 = 8.8 and 6.4 < 8.8, so EVERY payload carrying a lone pair
 *    would fail — NH3, H2O, SO2, XeF2, ozone, every amine and every alcohol.
 *    Both dots are therefore ONE <Path> with two closed polygon subpaths
 *    (`lonePairPath`). No arcs: verify-render's pathBounds pairs the numbers in
 *    `d` POSITIONALLY, so an `A` command's `rx ry rot laf sf` would be read as
 *    coordinates. Polygons and polylines only, everywhere in this file.
 *
 *    THE DESIGN RULE THAT FOLLOWS: at most ONE <Circle> of any given radius per
 *    render. This widget's Circle inventory is exactly one element —
 *    the highlight marker at r = MARKER_R (5). Nothing else in the tree is a
 *    Circle, so assertion 8 has no pair to compare and cannot fire.
 *
 * 2. INK COVERAGE FOR LINEAR SPECIES. CO2, BeCl2 and XeF2 drawn as two
 *    collinear bonds have a ZERO-HEIGHT bounding box. verify-render's boundsOf
 *    understands Path/Circle/Line/Rect and NOT text, so the whole diagram
 *    measures 0% of the board — assertion 2, a hard error. Two fixes, both
 *    needed:
 *      (a) `angleIsForced` returns true for every LINEAR shape, so the angle
 *          arc is always drawn for one; it is a semicircle of radius ARC_R and
 *          gives the molecule real 2D extent. Note this covers XeF2 (steric
 *          number 5, three lone pairs) as well as CO2 (steric number 2) —
 *          they are different rows of the table and the SAME drawn geometry,
 *          so keying the rule off "steric_number 2" alone would leave XeF2
 *          broken.
 *      (b) the component draws two full-width hairline rules bracketing the
 *          species band, which is what data_table_trend and reaction_scheme do
 *          for the same reason. Coverage at 343x236 is then 319*197.6/80948 =
 *          77.9% rather than a warn-band number.
 *
 * 3. BOND_GAP IS A DEVICE CONSTANT, NEVER A FRACTION OF R. The offset between
 *    the two lines of a double bond is 5 POINTS at every board size. Expressed
 *    as a fraction of R it would be, say, 0.06*R = 5.1pt at R = 85 and 4.3pt at
 *    the interaction-mode R = 72.4 — and 2.6pt at the 495x270 board's R if the
 *    legend grew — collapsing below 3pt and letting the second line drift into
 *    the ligand label. That is the identical defect class as field_lines' seed
 *    ring (docs/small-screen-rendering-rules.md): a chrome offset expressed as
 *    a world quantity. Every gap, inset, dot radius and font size in this file
 *    is in device points.
 */
import {
  CHAR_W, LABEL_SIZE, MARKER_R, PAD_EDGE, PAD_SIDE, READOUT_BAND, READOUT_SIZE,
  bandFor, fitReadout, maxChars, textWidth,
} from '../chrome';

/* --------------------------------------------------------------- the shape */

export type MoleculeMode = 'electron_domain' | 'coordination' | 'interaction';
export type BondStyle = 'plain' | 'wedge' | 'dash' | 'dative' | 'hbond';

export const MODES: readonly MoleculeMode[] = ['electron_domain', 'coordination', 'interaction'];
export const BOND_STYLES: readonly BondStyle[] = ['plain', 'wedge', 'dash', 'dative', 'hbond'];

export interface MoleculeStructParams {
  mode: MoleculeMode;
  /** Element symbol of the central atom. Must be in ELEMENTS. */
  centre: string;
  /** Sigma-bonded ligands, 2..6. */
  bond_pairs: number;
  /** Lone pairs ON THE CENTRE, 0..3, with bond_pairs + lone_pairs <= 6. */
  lone_pairs: number;
  /** Length === bond_pairs. Each at most MAX_LIGAND_CHARS. */
  ligands: readonly string[];
  /** Length === bond_pairs. 1 = single, 2 = double, 3 = triple. */
  bond_orders: readonly number[];
  /**
   * Length === bond_pairs.
   *
   * EVERY LIGAND ENTRY IS ONE ELECTRON DOMAIN, whatever its style. A hydrogen
   * bond or a dative bond drawn as a ligand therefore counts toward
   * steric_number and moves the reported shape — because it occupies a site on
   * the board, and the widget reports the geometry of what it drew. That is
   * the honest reading, and it means a payload must not add an H-bond partner
   * to a molecule whose own shape is the teaching point: draw [F-H...F]- with
   * the H as the centre, not water with a fourth site bolted on.
   */
  bond_styles: readonly BondStyle[];
  /** Overall charge on the species, -4..4. */
  charge: number;
  /** Square brackets round the species — the complex-ion convention. */
  bracket: boolean;
  show_lone_pairs: boolean;
  /** Forced true for a linear shape; see trap 2. */
  show_angle: boolean;
  label: string;
  /** Which site the marker rings. -1 = none. THE ONE ANIMATABLE PARAM. */
  highlight_site: number;
}

/**
 * Exactly ten numeric keys, THE SAME SET IN EVERY MODE, zeros where the mode
 * makes the quantity meaningless. A derived set whose shape changed with the
 * mode would let a caption reference a token that exists on one board and not
 * on the next, which is the one thing `derived` exists to prevent.
 *
 * `shape` and `hybridisation` are STRINGS and therefore cannot be derived keys
 * at all — `computeDerived` returns `Record<string, number>`. `steric_number`
 * is the key that stands for them: it fixes the hybridisation outright, and
 * together with `lone_pairs` (itself a param) it fixes the shape. The readout
 * renders the words from the table; a caption references the number.
 */
export interface MoleculeDerived {
  steric_number: number;
  ideal_angle_deg: number;
  bond_angle_deg: number;
  secondary_angle_deg: number;
  formal_charge_centre: number;
  oxidation_state: number;
  coordination_number: number;
  ean: number;
  ligand_count: number;
  valence_electrons_total: number;
  [key: string]: number;
}

export const DERIVED_KEYS: readonly string[] = [
  'steric_number', 'ideal_angle_deg', 'bond_angle_deg', 'secondary_angle_deg',
  'formal_charge_centre', 'oxidation_state', 'coordination_number', 'ean',
  'ligand_count', 'valence_electrons_total',
];

/* ------------------------------------------------------------------- caps */

export const MIN_BOND_PAIRS = 2;
export const MAX_BOND_PAIRS = 6;
export const MAX_LONE_PAIRS = 3;
export const MAX_DOMAINS = 6;
export const MAX_LIGAND_CHARS = 4;
export const MAX_CENTRE_CHARS = 3;
export const MAX_LABEL_CHARS = 24;
export const MAX_CHARGE = 4;
export const MAX_BOND_ORDER = 3;

/** The board every cap above is measured at, and the board validate() runs
 *  its geometric backstop at. Not the biggest board — the smallest one. */
export const REF_W = 343;
export const REF_H = 236;

/* -------------------------------------------------------- chrome constants
 *
 * Device points, every one of them. NEVER multiplied by a board dimension —
 * docs/small-screen-rendering-rules.md's one rule. What varies with the box is
 * R (a layout quantity computed from the MEASURED box in `layout()`), and
 * nothing else here.
 */

/** Ligand labels, the angle annotation, the style legend. */
export const LIGAND_SIZE = LABEL_SIZE;            // 12
/** The central atom reads as the subject of the diagram, so it is larger. */
export const CENTRE_SIZE = 16;
export const CHARGE_SIZE = LABEL_SIZE;            // 12
export const ANGLE_SIZE = LABEL_SIZE;             // 12
export const LEGEND_SIZE = LABEL_SIZE;            // 12

/** TRAP 3. Perpendicular offset between the lines of a multiple bond. */
export const BOND_GAP = 5;
/** Clear space between the centre atom's label box and where a bond starts. */
export const BOND_CLEAR_CENTRE = 4;
/** Clear space between a bond's far end and its ligand's label box. */
export const BOND_CLEAR_LIGAND = 3;

/** Where a lone pair's dot pair sits — ON the atom, not at bond length. */
export const LONE_R = 24;
export const LONE_DOT_R = 2.4;
export const LONE_DOT_SEP = 6.4;

export const ARC_R = 34;
export const ANGLE_LABEL_R = 47;

/** Bracket tick length, and how far the bracket stands off the content. */
export const BRACKET_TICK = 6;
export const BRACKET_PAD = 4;

/** verify-render's own text-box model, reused so the widget lays out to
 *  exactly what the checker measures. */
export const LABEL_BOX_H = LIGAND_SIZE * 1.15;    // 13.80
export const LABEL_HALF_H = LABEL_BOX_H / 2;      // 6.90
/** Baseline offset putting the CENTRE of a text box on a given y. */
export const BASELINE_DY = LIGAND_SIZE * 0.245;   // 2.94
export const CENTRE_BASELINE_DY = CENTRE_SIZE * 0.245;

/** The clearance two label boxes must have, matching verify-render's own
 *  2r + GLYPH_GAP arithmetic for glyphs. */
export const LABEL_CLEAR = 4;

/** The legend row interaction mode reserves. bandFor(12, 6) = 25.2. */
export const LEGEND_BAND = bandFor(LEGEND_SIZE, 6);

const DEG = Math.PI / 180;
const fmt = (v: number) => v.toFixed(2);

/* ------------------------------------------------------------- the elements
 *
 * V is the VALENCE-ELECTRON COUNT — the group number in the 1-18 convention
 * reduced to the outer shell (so N is 5, S is 6, Xe is 8), and for a d-block
 * metal the group number itself (Fe 8, Ni 10), which is what the EAN rule
 * wants. Z is the atomic number, needed by EAN and nothing else.
 *
 * Deliberately not exhaustive: this is the set a JEE/NEET structure question
 * actually centres on. A centre NOT in this table is REJECTED by validate()
 * rather than defaulted, because every one of formal charge, oxidation state
 * and EAN is silently wrong without V and Z.
 */
export const ELEMENTS: Readonly<Record<string, { V: number; Z: number }>> = {
  H: { V: 1, Z: 1 }, He: { V: 2, Z: 2 }, Li: { V: 1, Z: 3 }, Be: { V: 2, Z: 4 },
  B: { V: 3, Z: 5 }, C: { V: 4, Z: 6 }, N: { V: 5, Z: 7 }, O: { V: 6, Z: 8 },
  F: { V: 7, Z: 9 }, Ne: { V: 8, Z: 10 }, Na: { V: 1, Z: 11 }, Mg: { V: 2, Z: 12 },
  Al: { V: 3, Z: 13 }, Si: { V: 4, Z: 14 }, P: { V: 5, Z: 15 }, S: { V: 6, Z: 16 },
  Cl: { V: 7, Z: 17 }, Ar: { V: 8, Z: 18 }, K: { V: 1, Z: 19 }, Ca: { V: 2, Z: 20 },
  Sc: { V: 3, Z: 21 }, Ti: { V: 4, Z: 22 }, V: { V: 5, Z: 23 }, Cr: { V: 6, Z: 24 },
  Mn: { V: 7, Z: 25 }, Fe: { V: 8, Z: 26 }, Co: { V: 9, Z: 27 }, Ni: { V: 10, Z: 28 },
  Cu: { V: 11, Z: 29 }, Zn: { V: 12, Z: 30 }, Ga: { V: 3, Z: 31 }, Ge: { V: 4, Z: 32 },
  As: { V: 5, Z: 33 }, Se: { V: 6, Z: 34 }, Br: { V: 7, Z: 35 }, Kr: { V: 8, Z: 36 },
  Rb: { V: 1, Z: 37 }, Sr: { V: 2, Z: 38 }, Y: { V: 3, Z: 39 }, Zr: { V: 4, Z: 40 },
  Mo: { V: 6, Z: 42 }, Ru: { V: 8, Z: 44 }, Rh: { V: 9, Z: 45 }, Pd: { V: 10, Z: 46 },
  Ag: { V: 11, Z: 47 }, Cd: { V: 12, Z: 48 }, In: { V: 3, Z: 49 }, Sn: { V: 4, Z: 50 },
  Sb: { V: 5, Z: 51 }, Te: { V: 6, Z: 52 }, I: { V: 7, Z: 53 }, Xe: { V: 8, Z: 54 },
  Ba: { V: 2, Z: 56 }, W: { V: 6, Z: 74 }, Pt: { V: 10, Z: 78 }, Au: { V: 11, Z: 79 },
  Hg: { V: 12, Z: 80 }, Tl: { V: 3, Z: 81 }, Pb: { V: 4, Z: 82 }, Bi: { V: 5, Z: 83 },
};

/**
 * Ligands, with the CHARGE they carry as a free ligand and their DENTICITY —
 * how many donor atoms each one contributes.
 *
 * IN COORDINATION MODE EVERY LIGAND MUST BE IN THIS TABLE. Defaulting an
 * unknown ligand to neutral-monodentate would make oxidation_state and EAN
 * silently wrong — [Fe(CN)6]4- would report ox -4 instead of +2 — and those
 * three numbers are the entire point of that mode. In the other two modes the
 * ligand is only a label and any short string is fine.
 *
 * THE DENTICITY COLUMN EXISTS TO REFUSE CHELATES, not to inflate a number the
 * drawing does not show. This widget draws exactly ONE site per ligand entry,
 * so a bidentate ligand entered once would occupy one site while donating two
 * pairs: `bond_pairs` would then disagree with the electron-domain count and
 * every geometry number reported — steric_number, both angles, the shape —
 * would be wrong for the species on the board. A chelate also needs a BOND
 * BETWEEN TWO LIGAND SITES to close its ring, which is a backbone walk and
 * therefore out of this widget's scope by construction. So validate() refuses
 * a polydentate ligand in coordination mode and says why, and
 * `coordination_number` (the sum of denticities) equals `bond_pairs` for every
 * payload that is admitted — an invariant, asserted in physics.test.ts, rather
 * than a coincidence.
 */
export const LIGANDS: Readonly<Record<string, { charge: number; denticity: number }>> = {
  CN: { charge: -1, denticity: 1 },
  Cl: { charge: -1, denticity: 1 },
  Br: { charge: -1, denticity: 1 },
  I: { charge: -1, denticity: 1 },
  F: { charge: -1, denticity: 1 },
  OH: { charge: -1, denticity: 1 },
  NO2: { charge: -1, denticity: 1 },
  ONO: { charge: -1, denticity: 1 },
  SCN: { charge: -1, denticity: 1 },
  NCS: { charge: -1, denticity: 1 },
  H: { charge: -1, denticity: 1 },
  O: { charge: -2, denticity: 1 },
  NH3: { charge: 0, denticity: 1 },
  H2O: { charge: 0, denticity: 1 },
  CO: { charge: 0, denticity: 1 },
  NO: { charge: 0, denticity: 1 },
  py: { charge: 0, denticity: 1 },
  en: { charge: 0, denticity: 2 },
  bpy: { charge: 0, denticity: 2 },
  phen: { charge: 0, denticity: 2 },
  ox: { charge: -2, denticity: 2 },
  gly: { charge: -1, denticity: 2 },
};

/* -------------------------------------------------------------- AXE table */

export interface AxeEntry {
  shape: string;
  hybridisation: string;
  /** The parent geometry's angle, before any lone-pair compression. */
  idealAngle: number;
  /** THE PHYSICAL ANGLE. Never derived from `bondSites`. */
  bondAngle: number;
  /** The second distinct angle, 0 where the shape has only one. */
  secondaryAngle: number;
  /**
   * THE 2D DRAWING CONVENTION. Screen degrees, 0 = east, counter-clockwise
   * (the component negates the sine, since screen y grows downwards). Ligands
   * take these in order; `loneSites` are where the dot pairs go.
   *
   * These are legibility choices, not measurements. See the header.
   */
  bondSites: readonly number[];
  loneSites: readonly number[];
  /** [start, sweep] for the angle arc, CCW positive. Chosen so the arc's
   *  bisector — where the angle label sits — has no site on it. */
  arc: readonly [number, number];
}

const KEY = (bp: number, lp: number) => `${bp}-${lp}`;

/**
 * Every (bond_pairs, lone_pairs) the schema admits, and nothing else. Fourteen
 * rows: bond_pairs 2..6, lone_pairs 0..3, bond_pairs + lone_pairs <= 6.
 *
 * The table is TOTAL over the legal box by construction — `axeFor` returning
 * undefined would be a schema/table disagreement, and `AXE_KEYS` is asserted
 * against an enumeration of the legal box in physics.test.ts.
 */
export const AXE: Readonly<Record<string, AxeEntry>> = {
  /* ---- 2 electron domains ---- */
  [KEY(2, 0)]: {
    shape: 'linear', hybridisation: 'sp',
    idealAngle: 180, bondAngle: 180, secondaryAngle: 0,
    bondSites: [0, 180], loneSites: [], arc: [0, 180],
  },

  /* ---- 3 electron domains ---- */
  [KEY(3, 0)]: {
    shape: 'trigonal planar', hybridisation: 'sp2',
    idealAngle: 120, bondAngle: 120, secondaryAngle: 0,
    bondSites: [90, 210, 330], loneSites: [], arc: [90, 120],
  },
  // 120 - 1*2.5, the idealised AX2E1 value. Serves BOTH SO2 (~119) and
  // ozone (NCERT: 117) because the key is (bond_pairs, lone_pairs) and
  // cannot separate them. Within 1.5 of each; documented, not hidden.
  [KEY(2, 1)]: {
    shape: 'bent', hybridisation: 'sp2',
    idealAngle: 120, bondAngle: 117.5, secondaryAngle: 0,
    bondSites: [210, 330], loneSites: [90], arc: [210, 120],
  },

  /* ---- 4 electron domains: the -2.5 per lone pair series ---- */
  [KEY(4, 0)]: {
    shape: 'tetrahedral', hybridisation: 'sp3',
    idealAngle: 109.5, bondAngle: 109.5, secondaryAngle: 0,
    // DRAWN 90 apart. REPORTED 109.5. See the header.
    bondSites: [135, 45, 225, 315], loneSites: [], arc: [45, 90],
  },
  [KEY(3, 1)]: {
    shape: 'trigonal pyramidal', hybridisation: 'sp3',
    idealAngle: 109.5, bondAngle: 107, secondaryAngle: 0,   // 109.5 - 1*2.5
    bondSites: [210, 270, 330], loneSites: [90], arc: [210, 60],
  },
  [KEY(2, 2)]: {
    shape: 'bent', hybridisation: 'sp3',
    idealAngle: 109.5, bondAngle: 104.5, secondaryAngle: 0, // 109.5 - 2*2.5
    bondSites: [225, 315], loneSites: [120, 60], arc: [225, 90],
  },

  /* ---- 5 electron domains: lone pairs go EQUATORIAL, always ---- */
  [KEY(5, 0)]: {
    shape: 'trigonal bipyramidal', hybridisation: 'sp3d',
    idealAngle: 120, bondAngle: 120, secondaryAngle: 90,
    // 3 equatorial then 2 axial. The arc spans the two equatorial sites the
    // 120 actually belongs to.
    bondSites: [150, 210, 0, 90, 270], loneSites: [], arc: [150, 60],
  },
  [KEY(4, 1)]: {
    shape: 'see-saw', hybridisation: 'sp3d',
    idealAngle: 120, bondAngle: 117, secondaryAngle: 89,
    bondSites: [150, 210, 90, 270], loneSites: [0], arc: [150, 60],
  },
  [KEY(3, 2)]: {
    shape: 'T-shaped', hybridisation: 'sp3d',
    idealAngle: 90, bondAngle: 87.5, secondaryAngle: 175,
    bondSites: [0, 90, 270], loneSites: [150, 210], arc: [0, 90],
  },
  // THE COUNTER-FIXTURE. Three equatorial lone pairs, two axial bonds, trans.
  [KEY(2, 3)]: {
    shape: 'linear', hybridisation: 'sp3d',
    idealAngle: 180, bondAngle: 180, secondaryAngle: 0,
    // Bonds first so the arc sweeps CCW from 180 through 270 — the one
    // direction with no lone pair on it.
    bondSites: [180, 0], loneSites: [90, 210, 330], arc: [180, 180],
  },

  /* ---- 6 electron domains ---- */
  [KEY(6, 0)]: {
    shape: 'octahedral', hybridisation: 'sp3d2',
    idealAngle: 90, bondAngle: 90, secondaryAngle: 180,
    bondSites: [0, 60, 120, 180, 240, 300], loneSites: [], arc: [0, 60],
  },
  [KEY(5, 1)]: {
    shape: 'square pyramidal', hybridisation: 'sp3d2',
    // secondaryAngle was 0, meaning "this shape has no second angle". It has
    // one, and the widget DRAWS it: bondSites 0 and 180 are a trans basal
    // pair. The board showed a 180 pair the readout refused to name, while
    // every sibling 6-domain row (6-0, 4-2, 3-3) named theirs. BrF5's basal
    // F-Br-F trans angle is ~180 (slightly compressed by the lone pair at
    // 270, same direction as the 90 -> 89 apex-basal entry beside it).
    idealAngle: 90, bondAngle: 89, secondaryAngle: 180,
    bondSites: [0, 90, 180, 315, 225], loneSites: [270], arc: [0, 90],
  },
  [KEY(4, 2)]: {
    shape: 'square planar', hybridisation: 'sp3d2',
    idealAngle: 90, bondAngle: 90, secondaryAngle: 180,
    bondSites: [0, 90, 180, 270], loneSites: [135, 315], arc: [0, 90],
  },
  [KEY(3, 3)]: {
    shape: 'T-shaped', hybridisation: 'sp3d2',
    idealAngle: 90, bondAngle: 90, secondaryAngle: 180,
    bondSites: [0, 90, 270], loneSites: [120, 180, 240], arc: [0, 90],
  },
};

export const AXE_KEYS = Object.keys(AXE);

export function axeFor(bondPairs: number, lonePairs: number): AxeEntry | null {
  return AXE[KEY(bondPairs, lonePairs)] ?? null;
}

/** TRAP 2. A linear shape drawn without its angle arc has a zero-height
 *  bounding box. Keyed off the SHAPE, not the steric number, because both
 *  CO2 (SN 2) and XeF2 (SN 5) are drawn collinear. */
export function angleIsForced(bondPairs: number, lonePairs: number): boolean {
  const e = axeFor(bondPairs, lonePairs);
  return e !== null && e.shape === 'linear';
}

/* ---------------------------------------------------------------- derived */

export function formatAngle(a: number): string {
  return (Number.isInteger(a) ? String(a) : a.toFixed(1)) + '°';
}

export function formatCharge(c: number): string {
  if (c === 0) return '';
  const mag = Math.abs(c);
  return (mag === 1 ? '' : String(mag)) + (c > 0 ? '+' : '−');
}

export function formatSigned(v: number): string {
  return v > 0 ? `+${v}` : String(v);
}

/**
 * The formal charge a TERMINAL atom carries, assuming it completes its own
 * octet (or, for hydrogen, its duet) with lone pairs:
 *
 *     octet:  FC = V - (8 - 2b) - b = V + b - 8
 *     duet:   FC = V - (2 - 2b) - b = V + b - 2
 *
 * Returns null when the ligand is not a single element symbol — a polyatomic
 * ligand ("CN", "NH3") has no single V to use, and returning 0 there would be
 * a confident wrong number. NOT a derived key: it is per-ligand, and `derived`
 * is a flat numeric map. It exists so the SUM rule can be checked, which is
 * what turns reference 4 into a test rather than three unrelated numbers.
 */
export function terminalFormalCharge(symbol: string, bondOrder: number): number | null {
  const el = ELEMENTS[symbol];
  if (!el) return null;
  const shell = symbol === 'H' || symbol === 'He' ? 2 : 8;
  return el.V + bondOrder - shell;
}

/**
 * Sum of the formal charges over centre and every ligand, or null if any
 * ligand is polyatomic. For a correct payload it equals `charge`.
 */
export function formalChargeSum(p: MoleculeStructParams): number | null {
  let sum = formalChargeCentre(p);
  for (let i = 0; i < p.bond_pairs; i++) {
    const fc = terminalFormalCharge(p.ligands[i] ?? '', p.bond_orders[i] ?? 1);
    if (fc === null) return null;
    sum += fc;
  }
  return sum;
}

/**
 * Formal charge on the centre: V - (non-bonding electrons) - (bonding
 * electrons)/2, i.e. every bond split evenly regardless of which atom brought
 * the pair. That even split is the DEFINITION, so a dative bond is counted the
 * same as any other and H3O+ still comes out at +1.
 *
 * ZERO IN COORDINATION MODE, and that is a statement rather than a fallback.
 * Formal charge is a Lewis-structure bookkeeping device for main-group atoms;
 * applied to a d-block centre it returns a number nobody uses and NCERT never
 * asks for — Ni(CO)4 would report +6 on the nickel. The coordination-chemistry
 * equivalent of the question is `oxidation_state`, which splits every bond
 * HETEROLYTICALLY to the ligand instead, and that is the number the readout
 * shows in that mode.
 */
export function formalChargeCentre(p: MoleculeStructParams): number {
  if (p.mode === 'coordination') return 0;
  const el = ELEMENTS[p.centre];
  if (!el) return 0;
  let bonding = 0;
  for (let i = 0; i < p.bond_pairs; i++) bonding += p.bond_orders[i] ?? 1;
  return el.V - 2 * p.lone_pairs - bonding;
}

export function derive(p: MoleculeStructParams): MoleculeDerived {
  const entry = axeFor(p.bond_pairs, p.lone_pairs);
  const isCoord = p.mode === 'coordination';

  let bonding = 0;
  for (let i = 0; i < p.bond_pairs; i++) bonding += p.bond_orders[i] ?? 1;

  let ligandCharge = 0;
  let coordination = 0;
  let allKnown = true;
  for (let i = 0; i < p.bond_pairs; i++) {
    const l = LIGANDS[p.ligands[i] ?? ''];
    if (!l) { allKnown = false; coordination += 1; continue; }
    ligandCharge += l.charge;
    coordination += l.denticity;
  }

  const oxidation = isCoord && allKnown ? p.charge - ligandCharge : 0;
  const z = ELEMENTS[p.centre]?.Z ?? 0;

  return {
    steric_number: p.bond_pairs + p.lone_pairs,
    ideal_angle_deg: entry ? entry.idealAngle : 0,
    bond_angle_deg: entry ? entry.bondAngle : 0,
    secondary_angle_deg: entry ? entry.secondaryAngle : 0,
    formal_charge_centre: formalChargeCentre(p),
    oxidation_state: oxidation,
    coordination_number: isCoord ? coordination : 0,
    // EAN = Z - oxidation state + 2 * (donor pairs). NCERT Cl.12 Unit 5.
    ean: isCoord ? z - oxidation + 2 * coordination : 0,
    ligand_count: p.bond_pairs,
    // The central atom's own valence shell: two electrons per bond plus two
    // per lone pair. CH4 -> 8 (octet), PCl5 -> 10, SF6 -> 12, XeF2 -> 10.
    valence_electrons_total: 2 * bonding + 2 * p.lone_pairs,
  };
}

/* -------------------------------------------------------------- the strip */

/**
 * The readout line. Computed HERE rather than in the component so that
 * `labelBoxes` measures the string the board will actually show — the backstop
 * would otherwise be checking a payload the component does not render.
 */
export function readoutValue(p: MoleculeStructParams): string {
  const d = derive(p);
  const entry = axeFor(p.bond_pairs, p.lone_pairs);
  if (!entry) return '';
  if (p.mode === 'coordination') {
    return `ox ${formatSigned(d.oxidation_state)}   CN ${d.coordination_number}   EAN ${d.ean}`;
  }
  const angle = formatAngle(d.bond_angle_deg);
  const second = d.secondary_angle_deg > 0 ? ` / ${formatAngle(d.secondary_angle_deg)}` : '';
  if (p.mode === 'interaction') {
    return `${entry.shape}   ${angle}${second}`;
  }
  return `${entry.hybridisation}   ${entry.shape}   ${angle}${second}`;
}

export function readoutText(p: MoleculeStructParams, width: number): string {
  return fitReadout(p.label, readoutValue(p), width - 2 * PAD_SIDE, READOUT_SIZE);
}

const STYLE_WORDS: Readonly<Record<BondStyle, string>> = {
  plain: 'sigma',
  wedge: 'toward you',
  dash: 'away from you',
  dative: 'dative',
  hbond: 'hydrogen bond',
};

/**
 * The legend interaction mode reserves a row for: one entry per bond style
 * actually present, in the schema's own order so the string is a function of
 * the payload and not of iteration order. Sliced to the width rather than
 * shrunk — the font is chrome.
 */
export function legendText(p: MoleculeStructParams, width: number): string {
  if (p.mode !== 'interaction') return '';
  const seen: string[] = [];
  for (const s of BOND_STYLES) {
    if (p.bond_styles.includes(s)) seen.push(STYLE_WORDS[s]);
  }
  const legend = seen.join('   ·   ');
  const cap = maxChars(width - 2 * PAD_SIDE, LEGEND_SIZE, legend);
  return legend.slice(0, cap);
}

/* ----------------------------------------------------------------- layout */

export interface SiteGeom {
  index: number;
  angleDeg: number;
  /** Unit direction, in SCREEN coordinates (y already negated). */
  ux: number;
  uy: number;
  /** Shaft, from just outside the centre label to just short of the ligand. */
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  /** Ligand label box centre — at exactly radius R. */
  lx: number;
  ly: number;
  label: string;
  order: number;
  style: BondStyle;
}

export interface Box {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

export interface MoleculeLayout {
  cx: number;
  cy: number;
  R: number;
  bandTop: number;
  bandBottom: number;
  legendY: number;
  sites: SiteGeom[];
  lonePairs: { angleDeg: number; d: string }[];
  showAngle: boolean;
  arcFrom: number;
  arcSweep: number;
  arcD: string;
  angleLabel: string;
  angleX: number;
  angleY: number;
  /** Where the marker rides. A layout quantity, clamped by chrome. */
  markerR: number;
  /** Content bounding box, used to size the bracket and place the charge. */
  content: Box;
  bracket: Box;
  chargeText: string;
  chargeX: number;
  chargeY: number;
  centreHalfW: number;
  centreHalfH: number;
}

/**
 * Horizontal separation of the tightest ADJACENT pair of sites on a ring of
 * radius R with `domains` sites evenly spaced: R*(1 - cos(360/domains)).
 *
 * This is the measurement the bond_pairs cap comes from, exported so the cap is
 * asserted rather than only written down. See the header for the table.
 */
export function adjacentLabelDx(R: number, domains: number): number {
  return R * (1 - Math.cos((360 / domains) * DEG));
}

/** What two label boxes of `chars` characters need, centre to centre. */
export function labelSeparationNeeded(chars: number): number {
  return chars * LIGAND_SIZE * CHAR_W + LABEL_CLEAR;
}

/** Distance from a box centre to its boundary along a unit direction. */
export function boxInset(hw: number, hh: number, ux: number, uy: number): number {
  const ax = Math.abs(ux);
  const ay = Math.abs(uy);
  const tx = ax > 1e-6 ? hw / ax : Number.POSITIVE_INFINITY;
  const ty = ay > 1e-6 ? hh / ay : Number.POSITIVE_INFINITY;
  return Math.min(tx, ty);
}

/** A closed polygon standing in for a disc. NOT an `A` arc: verify-render's
 *  pathBounds pairs the numbers in `d` positionally and would read an arc's
 *  flags as coordinates. */
export function discSubpath(cx: number, cy: number, r: number, sides = 10): string {
  let d = '';
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * 2 * Math.PI;
    d += (i === 0 ? 'M' : 'L') + fmt(cx + r * Math.cos(a)) + ' ' + fmt(cy + r * Math.sin(a));
  }
  return d + 'Z';
}

/** TRAP 1. BOTH dots of a lone pair, as ONE path with two closed subpaths. */
export function lonePairPath(cx: number, cy: number, angleDeg: number, radius = LONE_R): string {
  const a = angleDeg * DEG;
  const ux = Math.cos(a);
  const uy = -Math.sin(a);
  const px = -uy;
  const py = ux;
  const mx = cx + ux * radius;
  const my = cy + uy * radius;
  const h = LONE_DOT_SEP / 2;
  return (
    discSubpath(mx + px * h, my + py * h, LONE_DOT_R) +
    discSubpath(mx - px * h, my - py * h, LONE_DOT_R)
  );
}

/** A polyline arc. M/L only, for the same reason as `discSubpath`. */
export function arcPath(
  cx: number, cy: number, r: number, fromDeg: number, sweepDeg: number, segs = 24
): string {
  let d = '';
  for (let i = 0; i <= segs; i++) {
    const a = (fromDeg + (sweepDeg * i) / segs) * DEG;
    d += (i === 0 ? 'M' : 'L') + fmt(cx + r * Math.cos(a)) + ' ' + fmt(cy - r * Math.sin(a));
  }
  return d;
}

/** One, two or three parallel shafts in ONE path. BOND_GAP is device points. */
export function bondPath(s: SiteGeom): string {
  const px = -(s.y1 - s.y0);
  const py = s.x1 - s.x0;
  const len = Math.hypot(px, py) || 1;
  const nx = px / len;
  const ny = py / len;
  const offsets =
    s.order >= 3 ? [-BOND_GAP, 0, BOND_GAP] : s.order === 2 ? [-BOND_GAP / 2, BOND_GAP / 2] : [0];
  let d = '';
  for (const o of offsets) {
    d +=
      'M' + fmt(s.x0 + nx * o) + ' ' + fmt(s.y0 + ny * o) +
      'L' + fmt(s.x1 + nx * o) + ' ' + fmt(s.y1 + ny * o);
  }
  return d;
}

/** A solid wedge: narrow at the centre, wide at the ligand. Fill only, so
 *  verify-render's stroke floor does not apply to it. */
export function wedgePath(s: SiteGeom, narrow = 0.9, wide = 3.4): string {
  const px = -(s.y1 - s.y0);
  const py = s.x1 - s.x0;
  const len = Math.hypot(px, py) || 1;
  const nx = px / len;
  const ny = py / len;
  return (
    'M' + fmt(s.x0 + nx * narrow) + ' ' + fmt(s.y0 + ny * narrow) +
    'L' + fmt(s.x1 + nx * wide) + ' ' + fmt(s.y1 + ny * wide) +
    'L' + fmt(s.x1 - nx * wide) + ' ' + fmt(s.y1 - ny * wide) +
    'L' + fmt(s.x0 - nx * narrow) + ' ' + fmt(s.y0 - ny * narrow) + 'Z'
  );
}

/** A hashed wedge: widening perpendicular ticks, all in ONE path. */
export function hashPath(s: SiteGeom, ticks = 5, narrow = 1.2, wide = 3.6): string {
  const dx = s.x1 - s.x0;
  const dy = s.y1 - s.y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  let d = '';
  for (let i = 0; i < ticks; i++) {
    const t = ticks === 1 ? 1 : i / (ticks - 1);
    const hw = narrow + (wide - narrow) * t;
    const mx = s.x0 + dx * t;
    const my = s.y0 + dy * t;
    d +=
      'M' + fmt(mx + nx * hw) + ' ' + fmt(my + ny * hw) +
      'L' + fmt(mx - nx * hw) + ' ' + fmt(my - ny * hw);
  }
  return d;
}

/** A dotted shaft — a hydrogen bond. Drawn as explicit segments rather than a
 *  strokeDasharray so the dashes are real geometry the checker can measure. */
export function dottedPath(s: SiteGeom, dash = 2.6, gap = 3.2): string {
  const dx = s.x1 - s.x0;
  const dy = s.y1 - s.y0;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const step = dash + gap;
  const n = Math.max(1, Math.floor(len / step));
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = i * step;
    const b = Math.min(len, a + dash);
    d +=
      'M' + fmt(s.x0 + ux * a) + ' ' + fmt(s.y0 + uy * a) +
      'L' + fmt(s.x0 + ux * b) + ' ' + fmt(s.y0 + uy * b);
  }
  return d;
}

export function bracketPaths(b: Box): [string, string] {
  const t = BRACKET_TICK;
  return [
    'M' + fmt(b.x0 + t) + ' ' + fmt(b.y0) + 'L' + fmt(b.x0) + ' ' + fmt(b.y0) +
      'L' + fmt(b.x0) + ' ' + fmt(b.y1) + 'L' + fmt(b.x0 + t) + ' ' + fmt(b.y1),
    'M' + fmt(b.x1 - t) + ' ' + fmt(b.y0) + 'L' + fmt(b.x1) + ' ' + fmt(b.y0) +
      'L' + fmt(b.x1) + ' ' + fmt(b.y1) + 'L' + fmt(b.x1 - t) + ' ' + fmt(b.y1),
  ];
}

/**
 * The whole geometry, from `params` and the MEASURED box only — never a
 * hardcoded canvas scaled down (the frame rule). R is the only quantity that
 * varies with the board; everything else is device points.
 */
export function layout(
  p: MoleculeStructParams, width: number, height: number
): MoleculeLayout {
  const entry = axeFor(p.bond_pairs, p.lone_pairs) ?? AXE[KEY(2, 0)];

  const bandTop = READOUT_BAND;
  const legend = p.mode === 'interaction' ? LEGEND_BAND : 0;
  const bandBottom = height - PAD_EDGE - legend;
  const innerW = width - 2 * PAD_SIDE;
  const innerH = bandBottom - bandTop;
  const cx = PAD_SIDE + innerW / 2;
  const cy = bandTop + innerH / 2;

  // The caps in the header are this formula at 343x236. Both terms use the
  // FULL 4-char label box rather than half of it — the label is middle
  // anchored, so half would suffice; the extra is margin, on purpose.
  const ligMarginW = MAX_LIGAND_CHARS * LIGAND_SIZE * CHAR_W;   // 27.84
  const R = Math.max(
    1,
    Math.min((innerW - 2 * ligMarginW) / 2, (innerH - 2 * LABEL_BOX_H) / 2)
  );

  const centreHalfW = textWidth(p.centre, CENTRE_SIZE) / 2;
  const centreHalfH = (CENTRE_SIZE * 1.15) / 2;

  const sites: SiteGeom[] = [];
  for (let i = 0; i < p.bond_pairs; i++) {
    const angleDeg = entry.bondSites[i];
    const a = angleDeg * DEG;
    const ux = Math.cos(a);
    const uy = -Math.sin(a);
    const label = p.ligands[i] ?? '';
    const ligHalfW = textWidth(label, LIGAND_SIZE) / 2;
    const start = boxInset(centreHalfW, centreHalfH, ux, uy) + BOND_CLEAR_CENTRE;
    const end = R - (boxInset(ligHalfW, LABEL_HALF_H, ux, uy) + BOND_CLEAR_LIGAND);
    sites.push({
      index: i,
      angleDeg,
      ux,
      uy,
      x0: cx + ux * start,
      y0: cy + uy * start,
      x1: cx + ux * Math.max(start + 1, end),
      y1: cy + uy * Math.max(start + 1, end),
      lx: cx + ux * R,
      ly: cy + uy * R,
      label,
      order: p.bond_orders[i] ?? 1,
      style: p.bond_styles[i] ?? 'plain',
    });
  }

  const lonePairs = p.show_lone_pairs
    ? entry.loneSites.map((angleDeg) => ({ angleDeg, d: lonePairPath(cx, cy, angleDeg) }))
    : [];

  const showAngle = p.show_angle || angleIsForced(p.bond_pairs, p.lone_pairs);
  const [arcFrom, arcSweep] = entry.arc;
  const bisect = (arcFrom + arcSweep / 2) * DEG;
  const angleLabel = formatAngle(entry.bondAngle);
  const angleX = cx + Math.cos(bisect) * ANGLE_LABEL_R;
  const angleY = cy - Math.sin(bisect) * ANGLE_LABEL_R;

  /* ------- content bounding box, in device points, for bracket + charge ---- */
  let bx0 = cx - centreHalfW;
  let bx1 = cx + centreHalfW;
  let by0 = cy - centreHalfH;
  let by1 = cy + centreHalfH;
  const grow = (x0: number, x1: number, y0: number, y1: number) => {
    bx0 = Math.min(bx0, x0); bx1 = Math.max(bx1, x1);
    by0 = Math.min(by0, y0); by1 = Math.max(by1, y1);
  };
  for (const s of sites) {
    const hw = textWidth(s.label, LIGAND_SIZE) / 2;
    grow(s.lx - hw, s.lx + hw, s.ly - LABEL_HALF_H, s.ly + LABEL_HALF_H);
  }
  for (const l of lonePairs) {
    const a = l.angleDeg * DEG;
    const mx = cx + Math.cos(a) * LONE_R;
    const my = cy - Math.sin(a) * LONE_R;
    const pad = LONE_DOT_SEP / 2 + LONE_DOT_R;
    grow(mx - pad, mx + pad, my - pad, my + pad);
  }
  if (showAngle) {
    grow(cx - ARC_R, cx + ARC_R, cy - ARC_R, cy + ARC_R);
    const hw = textWidth(angleLabel, ANGLE_SIZE) / 2;
    grow(angleX - hw, angleX + hw, angleY - LABEL_HALF_H, angleY + LABEL_HALF_H);
  }
  const content: Box = { x0: bx0, x1: bx1, y0: by0, y1: by1 };
  const bracket: Box = {
    x0: bx0 - BRACKET_PAD, x1: bx1 + BRACKET_PAD,
    y0: by0 - BRACKET_PAD, y1: by1 + BRACKET_PAD,
  };

  /**
   * The charge always rides at the TOP-RIGHT of the bracket box, whether or
   * not the bracket is drawn. One code path, and it is the only placement that
   * is collision-proof by construction: a superscript tucked beside the centre
   * atom lands on the lone-pair dots of H3O+ and of ozone, both of which put a
   * pair within 24pt of the centre in exactly that direction.
   */
  const chargeText = formatCharge(p.charge);
  const chargeX = bracket.x1 + 3;
  const chargeY = bracket.y0 + CHARGE_SIZE * 0.5;

  const markerR = Math.min(
    Math.max(R * 0.55, ARC_R + MARKER_R + 4),
    Math.max(ARC_R + MARKER_R + 4, R - 18)
  );

  return {
    cx, cy, R, bandTop, bandBottom,
    legendY: height - PAD_EDGE - LEGEND_SIZE * 0.5,
    sites, lonePairs,
    showAngle, arcFrom, arcSweep,
    arcD: arcPath(cx, cy, ARC_R, arcFrom, arcSweep),
    angleLabel, angleX, angleY,
    markerR,
    content, bracket,
    chargeText, chargeX, chargeY,
    centreHalfW, centreHalfH,
  };
}

/* ------------------------------------------------------ the fit checks */

export interface TextBox extends Box {
  s: string;
}

/**
 * Every label box the component will emit, in EXACTLY verify-render's own
 * model (width = len * size * 0.58, top = y - 0.82 * size, height = 1.15 *
 * size). Readout and legend included — unlike reaction_scheme, whose readout
 * was excluded because computing it meant duplicating the component's
 * formatting. Here `readoutText`/`legendText` live in this module and the
 * component calls them, so the backstop measures the real strings.
 */
export function labelBoxes(
  p: MoleculeStructParams, width: number, height: number
): TextBox[] {
  const l = layout(p, width, height);
  const boxes: TextBox[] = [];
  const push = (x: number, y: number, s: string, size: number, anchor: 'middle' | 'start') => {
    if (!s) return;
    const w = textWidth(s, size);
    const x0 = anchor === 'middle' ? x - w / 2 : x;
    boxes.push({ x0, x1: x0 + w, y0: y - size * 0.82, y1: y - size * 0.82 + size * 1.15, s });
  };

  push(PAD_SIDE, READOUT_BAND - READOUT_SIZE * 0.5, readoutText(p, width), READOUT_SIZE, 'start');
  push(l.cx, l.cy + CENTRE_BASELINE_DY, p.centre, CENTRE_SIZE, 'middle');
  push(l.chargeX, l.chargeY, l.chargeText, CHARGE_SIZE, 'start');
  for (const s of l.sites) push(s.lx, s.ly + BASELINE_DY, s.label, LIGAND_SIZE, 'middle');
  if (l.showAngle) push(l.angleX, l.angleY + BASELINE_DY, l.angleLabel, ANGLE_SIZE, 'middle');
  push(PAD_SIDE, l.legendY, legendText(p, width), LEGEND_SIZE, 'start');
  return boxes;
}

const overlaps = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/**
 * Every reason this payload cannot be drawn legibly at `width` x `height`.
 * Empty means it renders.
 *
 * Three arithmetic checks that name a cap and produce a message a payload
 * author can act on, then the GEOMETRIC BACKSTOP — verify-render's exact
 * overlap and bounds tests over every label the component emits. The
 * arithmetic states the rule; the backstop catches the combinations the rule
 * does not name, which across a 14-row shape table is most of them.
 */
export function fitProblems(
  p: MoleculeStructParams, width = REF_W, height = REF_H
): string[] {
  const problems: string[] = [];

  const entry = axeFor(p.bond_pairs, p.lone_pairs);
  if (!entry) {
    return [
      `no VSEPR geometry for ${p.bond_pairs} bond pairs and ${p.lone_pairs} lone pairs — ` +
      `the AXE table covers 2 to ${MAX_DOMAINS} electron domains`,
    ];
  }

  const l = layout(p, width, height);

  // 1. The site cap, restated as the measurement it came from. Six sites at
  //    60 degrees clear; seven at 51.43 do not at the interaction-mode R.
  const step = 360 / (p.bond_pairs + p.lone_pairs);
  const dxAdjacent = adjacentLabelDx(l.R, p.bond_pairs + p.lone_pairs);
  const need = labelSeparationNeeded(MAX_LIGAND_CHARS);
  if (p.bond_pairs + p.lone_pairs > MAX_DOMAINS) {
    problems.push(
      `${p.bond_pairs + p.lone_pairs} electron domains need sites ${step.toFixed(1)}° apart, ` +
      `giving ${dxAdjacent.toFixed(1)}pt between adjacent labels against the ${need.toFixed(1)}pt ` +
      `a ${MAX_LIGAND_CHARS}-char label needs at ${width}x${height}`
    );
  }

  // 2. Every bond must have visible shaft left after both label insets.
  for (const s of l.sites) {
    const shaft = Math.hypot(s.x1 - s.x0, s.y1 - s.y0);
    if (shaft < 8) {
      problems.push(
        `the bond to "${s.label}" is only ${shaft.toFixed(1)}pt long at ${width}x${height} — ` +
        'shorten the centre or ligand label'
      );
    }
  }

  // 3. Everything the component draws must be inside the board.
  for (const b of labelBoxes(p, width, height)) {
    if (b.x0 < -1 || b.x1 > width + 1 || b.y0 < -1 || b.y1 > height + 1) {
      problems.push(`label "${b.s}" runs off the ${width}x${height} board`);
    }
  }
  if (p.bracket) {
    const br = l.bracket;
    if (br.x0 < PAD_SIDE - 1 || br.x1 > width - PAD_SIDE + 1 ||
        br.y0 < l.bandTop - 1 || br.y1 > l.bandBottom + 1) {
      problems.push(`the bracket does not fit the species band at ${width}x${height}`);
    }
  }

  if (problems.length > 0) return problems;

  // 4. The geometric backstop.
  const boxes = labelBoxes(p, width, height);
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      if (overlaps(boxes[i], boxes[j])) {
        problems.push(`labels "${boxes[i].s}" and "${boxes[j].s}" collide at ${width}x${height}`);
      }
    }
  }
  return problems;
}

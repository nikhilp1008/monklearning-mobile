/**
 * M11 Ch11 · Section 18 — "Reading the octant sign table"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — directly follows Sec17 ("Eight rooms around the origin: octants").
 * HIGH-SCRUTINY section (octant/projection sweep, task brief secs 15-26) — every sign in the
 * table below is hand-checked against the canonical NCERT table before shipping (see verification
 * note at the bottom of this comment).
 *
 * No 3D diagram here (deliberate) — Sec15/17 already build the axes/room metaphor; this section's
 * whole job is the 2D sign TABLE plus one worked example, so all 1080×620 goes to that.
 *
 * ============================== CANONICAL TABLE ==============================
 * Octant:  I    II   III  IV   V    VI   VII  VIII
 * x sign:  +    −    −    +    +    −    −    +
 * y sign:  +    +    −    −    +    +    −    −
 * z sign:  +    +    +    +    −    −    −    −
 * (Matches the JSON's own embedded reference SVG column-by-column — cross-checked before coding:
 * I+++ II−++ III−−+ IV+−+ V++− VI−+− VII−−− VIII+−−. Worked example (−7,3,−2)→(−,+,−)→VI confirmed
 * against this table: VI is x−,y+,z− — exact match.)
 * ==============================================================================
 *
 * reveals_english = [0, 10.75, 21.93, 30.55, 42.92, 55.04, 68.52, 79.1] (8 values, beats 0-7).
 * reveals_hinglish = [0, 9.98, 20.39, 29.01, 40.36, 49.49, 61.78, 70.4].
 *
 * Beats:
 *  0(title, always-on) | "The octant sign table (NCERT convention)"
 *  1 | BUILD THE TABLE: grid draws, header row (INK bg + CREAM numerals) fades, then x/y/z sign
 *    rows fade in one row at a time (not all at once) — "eight columns... three rows... every
 *    octant is a column of three signs."
 *  2 | bracket + amber label "z > 0" under columns I-IV
 *  3 | amber tint wash over x-row+y-row cells I-IV (two-step) + caption "(x,y) pattern = the 4
 *    quadrants" — visualizes "their x,y cycle like the 2D quadrants" without any new stroke
 *    crossing the table (a Fade-only tint, precedented by Sec15 beat4's plane wedges).
 *  4 | bracket + amber label "z < 0" under columns V-VIII (mirrors beat2, opposite half)
 *  5 | red-margin guardrail: underline "I" and "VII" headers, red margin bar + caption
 *    "I = all +, VII = all −"
 *  6 | (transient, erased at beat7) abstract 3-chip flow: (x,y,z) → (±,±,±) → "find the column"
 *  7 | concrete worked example replaces beat6 in the SAME screen position: (−7,3,−2) → (−,+,−) →
 *    "octant VI" (green, boxed answer) + check + green box around column VI in the table above +
 *    note "the 7,3,2 don't matter — only the signs do."
 *
 * ============================== LAYOUT PLAN ==============================
 * Grid geometry (module-scope constants below): label col x70-170, 8 data cols x170-1018 (106px
 * each, centers 223/329/435/541/647/753/859/965). Rows: header y95-141, x-row 141-187, y-row
 * 187-233, z-row 233-279 (46px each). Table occupies x70-1018 (safe 36-1044, margins 34/26),
 * y95-279 (well clear of title band 30-80 and everything below).
 *
 * Text-box estimates (Anek non-script, top=y-0.78s, bottom=y+0.31s) used to size every row:
 * size-20 sign glyph at row-center+0.24*20 baseline → box height ~21.8px, fits inside the 46px
 * row with ~11-12px clearance to the grid line on both sides (>= the 10px stroke rule).
 *
 * beat0 | title (26,red,script,always-on)     | T mid   | x540 y58
 * beat1 | header bg rect (INK, no stroke)     | Fade    | x70 y95 w948 h46
 * beat1 | grid (10 verticals + 5 horizontals) | Draw    | box x70..1018 y95..279 (one path)
 * beat1 | "Oct" label                          | T start | x82 y122 size12 cream
 * beat1 | 8 header numerals I..VIII            | T mid   | y122 size16 cream, x=col centers
 * beat1 | row label "x" + 8 signs               | T       | y169 size20, label x90 start
 * beat1 | row label "y" + 8 signs               | T       | y215 size20, label x90 start
 * beat1 | row label "z" + 8 signs               | T       | y261 size20, label x90 start
 * beat2 | bracket (amber_dark) under I-IV       | Draw    | M186 282 L186 290 L578 290 L578 282
 * beat2 | "z > 0" label                         | T mid   | x382 y316 size16 amber_dark
 * beat3 | tint x-row I-IV (amber .16, no stroke)| Fade    | x170 y141 w424 h46 (BEHIND grid+text
 *       in JSX order, gated on its own beat — z-order trick, see render tree comment)
 * beat3 | tint y-row I-IV                       | Fade    | x170 y187 w424 h46
 * beat3 | caption "(x,y) pattern = quadrants"    | T mid   | x382 y347 size13 amber_dark
 * beat4 | bracket (amber_dark) under V-VIII      | Draw    | M610 282 L610 290 L1002 290 L1002 282
 * beat4 | "z < 0" label                          | T mid   | x806 y316 size16 amber_dark
 * beat5 | underline under "I" header             | Draw    | (205,138)-(241,138) red
 * beat5 | underline under "VII" header           | Draw    | (841,138)-(877,138) red
 * beat5 | red margin bar                          | Draw    | (460,387)-(460,403) red sw4
 * beat5 | caption "I = all +, VII = all −"         | T start | x476 y398 size14 red
 * beat6 | (transient, on={beat===6}) chip flow, all centered on x540, y438-482(h44), same span
 *       reused verbatim by beat7:
 *       Chip1 "(x,y,z)" x305 w110 · arrow 415-455 · Chip2 "(±,±,±)" x455 w110 · arrow 565-605 ·
 *       Chip3 "find the column" x605 w170
 * beat7 | concrete flow (erases beat6, same y438-482 band):
 *       Chip1 "(−7,3,−2)" x305 w130 · arrow 435-475 · Chip2 "(−,+,−)" x475 w110 (amber) ·
 *       arrow 585-625 · Chip3 "octant VI" x625 w150 (green/cream, size18) · check at (795,460)
 * beat7 | green box around column VI in table    | Draw    | M700 95 L806 95 L806 279 L700 279 Z
 * beat7 | note "7,3,2 don't matter..."            | T mid   | x540 y520 size14 muted
 *
 * Clearance spot-checks (the tight ones): beat2 label bottom(320.96) to beat3 caption top(336.86)
 * = 15.9px (>=14 text-text rule, and >=1.6*16=25.6 on baseline delta 31 either way). beat5 caption
 * bottom(402.34) to beat6/7 chip row top(438) = 35.66px (>=24 group-group). beat7 chip row
 * bottom(482) to note top(509.1) = 27.1px (>=24). Column-I/VII underlines sit at y138, well clear
 * of both the header numeral box above (bottom 126.65, gap 11.35) and the x-row sign box below
 * (top 153.4, gap 15.4) — chosen specifically over a full-column ring/box because a column-I box
 * reaching down to the table bottom would cross beat3's row-boundary region; underlines avoid any
 * stroke-crossing risk entirely. Beat7's column-VI box (x700-806) is spatially clear of the cycle
 * tint (x170-594) and both brackets (which sit >=3px below the table's y279 bottom, not overlapping
 * the box which stops exactly at 279).
 * ==========================================================================
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { checkD, lineD } from "./math-kit";

/* ---- table geometry ---- */
const LX0 = 70; // label column left
const LX1 = 170; // label column right / octant col 0 left
const COL_W = 106;
const TABLE_R = LX1 + 8 * COL_W; // 1018
const HEAD_Y0 = 95;
const HEAD_Y1 = 141;
const ROW_H = 46;
const X_ROW_Y0 = HEAD_Y1; // 141
const X_ROW_Y1 = X_ROW_Y0 + ROW_H; // 187
const Y_ROW_Y1 = X_ROW_Y1 + ROW_H; // 233
const Z_ROW_Y1 = Y_ROW_Y1 + ROW_H; // 279

const colCenter = (i: number) => LX1 + i * COL_W + COL_W / 2;
const COL_X = [0, 1, 2, 3, 4, 5, 6, 7].map(colCenter); // 223,329,435,541,647,753,859,965

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
// Canonical NCERT octant sign table — verified against the JSON's own reference SVG, column by
// column, before coding (see header comment). Do not edit without re-verifying all 8 columns.
const XSIGN = ["+", "−", "−", "+", "+", "−", "−", "+"];
const YSIGN = ["+", "+", "−", "−", "+", "+", "−", "−"];
const ZSIGN = ["+", "+", "+", "+", "−", "−", "−", "−"];

const V_X = [70, 170, 276, 382, 488, 594, 700, 806, 912, 1018];
const H_Y = [95, 141, 187, 233, 279];
const GRID_D =
  V_X.map((x) => `M ${x} ${HEAD_Y0} L ${x} ${Z_ROW_Y1}`).join(" ") +
  " " +
  H_Y.map((y) => `M ${LX0} ${y} L ${TABLE_R} ${y}`).join(" ");

export default function M11Ch11Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The octant sign table (NCERT convention)", "Octant sign table (NCERT ka convention)")}
        </T>
      </Fade>

      {/* ===== background layer (z-order: behind the grid+text drawn below) ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Rect x={LX0} y={HEAD_Y0} width={TABLE_R - LX0} height={ROW_H} fill={INK} stroke="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Rect x={LX1} y={X_ROW_Y0} width={4 * COL_W} height={ROW_H} fill={AMBER} fillOpacity={0.16} stroke="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Rect x={LX1} y={X_ROW_Y1} width={4 * COL_W} height={ROW_H} fill={AMBER} fillOpacity={0.16} stroke="none" />
      </Fade>

      {/* beat1 — the grid frame */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={GRID_D} stroke={INK} sw={1.5} dur={1.0} />

      {/* beat1 — header row: "Oct" label + roman numerals */}
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={82} y={122} size={12} fill={CREAM} anchor="start">
          Oct
        </T>
        {ROMAN.map((r, i) => (
          <T key={i} x={COL_X[i]} y={122} size={16} fill={CREAM} anchor="middle" weight={700}>
            {r}
          </T>
        ))}
      </Fade>

      {/* beat1 — x row */}
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={90} y={169} size={18} fill={INK} anchor="start" weight={700}>
          x
        </T>
        {XSIGN.map((s, i) => (
          <T key={i} x={COL_X[i]} y={169} size={20} fill={INK} anchor="middle">
            {s}
          </T>
        ))}
      </Fade>

      {/* beat1 — y row */}
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={90} y={215} size={18} fill={INK} anchor="start" weight={700}>
          y
        </T>
        {YSIGN.map((s, i) => (
          <T key={i} x={COL_X[i]} y={215} size={20} fill={INK} anchor="middle">
            {s}
          </T>
        ))}
      </Fade>

      {/* beat1 — z row */}
      <Fade on={beat >= 1} delay={dl(1, 5.0)}>
        <T x={90} y={261} size={18} fill={INK} anchor="start" weight={700}>
          z
        </T>
        {ZSIGN.map((s, i) => (
          <T key={i} x={COL_X[i]} y={261} size={20} fill={INK} anchor="middle">
            {s}
          </T>
        ))}
      </Fade>

      {/* beat5 — underline "I" and "VII" headers (single-sign columns) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={lineD(205, 138, 241, 138)} stroke={RED} sw={2.5} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={lineD(841, 138, 877, 138)} stroke={RED} sw={2.5} dur={0.3} />

      {/* beat2 — bracket + label under I-IV : z > 0 */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0)}
        d="M 186 282 L 186 290 L 578 290 L 578 282"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={382} y={316} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("z > 0", "z > 0")}
        </T>
      </Fade>

      {/* beat4 — bracket + label under V-VIII : z < 0 */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0)}
        d="M 610 282 L 610 290 L 1002 290 L 1002 282"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={806} y={316} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("z < 0", "z < 0")}
        </T>
      </Fade>

      {/* beat3 — caption for the amber tint wash */}
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={382} y={347} size={13} fill={AMBER_DARK} anchor="middle" weight={600}>
          {t("(x, y) pattern = the 4 quadrants", "(x, y) pattern = wahi 4 quadrants")}
        </T>
      </Fade>

      {/* beat5 — red-margin guardrail bar + caption */}
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={lineD(460, 387, 460, 403)} stroke={RED} sw={4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={476} y={398} size={14} fill={RED} anchor="start" weight={700}>
          {t("I = all +, VII = all −", "I = sab +, VII = sab −")}
        </T>
      </Fade>

      {/* beat6 — transient abstract flow (erased when beat7 fires) */}
      <Fade on={beat === 6} delay={dl(6, 0)}>
        <Chip x={305} y={438} w={110} h={44} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          {t("(x, y, z)", "(x, y, z)")}
        </Chip>
      </Fade>
      <Draw on={beat === 6} delay={dl(6, 0.5)} d={arrowD(415, 460, 455, 460)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat === 6} delay={dl(6, 0.9)}>
        <Chip x={455} y={438} w={110} h={44} fill={AMBER} textFill={INK} size={16} script={false}>
          {t("(±, ±, ±)", "(±, ±, ±)")}
        </Chip>
      </Fade>
      <Draw on={beat === 6} delay={dl(6, 1.4)} d={arrowD(565, 460, 605, 460)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat === 6} delay={dl(6, 1.8)}>
        <Chip x={605} y={438} w={170} h={44} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          {t("find the column", "column dhoondo")}
        </Chip>
      </Fade>

      {/* beat7 — concrete worked example, same screen band as beat6 */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={305} y={438} w={130} h={44} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          {t("(−7, 3, −2)", "(−7, 3, −2)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={arrowD(435, 460, 475, 460)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={475} y={438} w={110} h={44} fill={AMBER} textFill={INK} size={16} script={false}>
          {t("(−, +, −)", "(−, +, −)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={arrowD(585, 460, 625, 460)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <Chip x={625} y={438} w={150} h={44} fill={GREEN} textFill={CREAM} size={18} script={false}>
          {t("octant VI", "octant VI")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={checkD(795, 460, 16)} stroke={GREEN} sw={2.5} dur={0.3} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.9)}
        d="M 700 95 L 806 95 L 806 279 L 700 279 Z"
        stroke={GREEN}
        sw={2.5}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={540} y={520} size={14} fill={MUTED} anchor="middle">
          {t(
            "The 7, 3, 2 don't matter — only the signs do.",
            "7, 3, 2 matter nahi karte — sirf sign kaam karta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

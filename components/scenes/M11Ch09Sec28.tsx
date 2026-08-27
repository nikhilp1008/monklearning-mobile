/**
 * M11 Ch09 · Section 28 — "Proof: distance of a point from a line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (flagged "Proof:" — extra scrutiny). subtopic: Distance Formulas.
 * ALSO the one place in this chapter where the raw LaTeX has \hat{n} (unit normal) — per
 * SCENE_AUTHORING_MATHS.md, this is NEVER rendered as "n̂"/"n-hat": a real short arrow
 * (arrowD) of fixed pixel length is drawn from a point on the line and labeled with the
 * plain letter "n" only. Same treatment as \vec{RP} — drawn as an arrow, labeled "RP".
 *
 * board_content has 8 items. item[0] (heading) is the always-on title; items[1..7]
 * (seq2..seq8) gate at beat>=1..7. reveals_english=[0,6.91,24.66,36.86,53.5,62.12,73.13,85.5],
 * reveals_hinglish=[0,6.06,24.49,33.11,46.42,53.85,66.22,77.4] (8 values each).
 *
 * CONCRETE ILLUSTRATIVE EXAMPLE (not given by the JSON — grounds the symbolic proof,
 * script-verified below and again at the top of this file's companion node check):
 *   Line: 3x + 4y - 12 = 0  (A=3, B=4, C=-12).  R = (4, 0) on the line: 3(4)+4(0)-12=0 ✓.
 *   P = (1, 1).  norm = √(3²+4²) = 5.  unit normal n = (3,4)/5 = (0.6, 0.8).
 *   SIGNED_D = (A·Px+B·Py+C)/norm = (3+4-12)/5 = -5/5 = -1.0.  D = |SIGNED_D| = 1.0.
 *   FOOT of perpendicular from P = P - SIGNED_D·n = (1,1)-(-1)(0.6,0.8) = (1.6, 1.8),
 *   verified ON the line: 3(1.6)+4(1.8)-12 = 4.8+7.2-12 = 0 ✓.  |P-FOOT| = √(0.6²+0.8²) = 1.0
 *   — matches D exactly, and matches the direct formula |A(1)+B(1)+C|/5 = |-5|/5 = 1.0 ✓.
 *   SIGNED_D < 0 ⟹ P sits on the side OPPOSITE the direction the drawn normal arrow points
 *   (the arrow is drawn in the +n direction from R) — this is the beat-7 guardrail payoff.
 *
 *   toScreen(x,y) = {x: OX+SCALE*x, y: OY-SCALE*y}, OX=184, OY=396, SCALE=55 (node-verified):
 *     O=(184,396)  R=(404,396)  P=(239,341)  FOOT=(272,297)
 *     LINE_LEFT (math 0,3, the y-intercept) = (184,231)   LINE_RIGHT (math 5.6,-1.2) = (492,462)
 *     N_TIP = R + (0.6,-0.8)*46px = (431.6,359.2) — a FIXED 46px arrow, not scaled to 1.0 math
 *     units (same convention as Ch04's Argand unit-circle points at a fixed pixel radius).
 *     Screen perpendicularity confirmed: dot(lineDir, nDir) ≈ 0 (uniform scale preserves angles).
 *
 * Beats:
 *  0 (title, always-on) | "Proof: Distance of a Point from a Line"
 *  1 | text: every first-degree equation is a line (+ rewritten forms) | DIAGRAM: axes,
 *      the concrete line 3x+4y-12=0 drawn, equation labeled on it
 *  2 | text: unit normal n=(A,B)/√(A²+B²); pick R on the line | DIAGRAM: R marked + labeled,
 *      the "n" arrow (fixed 46px, plain letter, NO hat) drawn from R
 *  3 | formula (normal): Ax0+By0+C=0 ⇒ Ax0+By0=-C, built in two stages, right column;
 *      concrete check "3(4)+4(0)-12=0" + checkD
 *  4 | text: distance is the projection of RP onto n | DIAGRAM: P marked + labeled, the RP
 *      vector arrow drawn from R to P, labeled "RP" (plain letters, no combining arrow)
 *  5 | formula (normal): d=|RP·n|=|A(x1-x0)+B(y1-y0)|/√(A²+B²), two stages + concrete
 *      substitution, right column; DIAGRAM: the drop-line P→FOOT drawn (green, the actual
 *      perpendicular distance) + "d = 1.0" label — ties the projection formula to the picture
 *  6 | formula (HIGH, boxed): d=|Ax1+By1+C|/√(A²+B²), landed in a green Chip; concrete
 *      substitution "|3(1)+4(1)-12|/5 = 1.0" + checkD underneath, matching the diagram's d=1.0
 *  7 | guardrail (red-margin, HIGH): the signed value (no modulus) tells you which side of
 *      the line P is on — concretely, -5 < 0 here, so P is on the "-" side (opposite n)
 *
 * Layout plan (boxes estimated per SCENE_AUTHORING.md Step 3; all formula/coordinate text is
 * non-script Anek per the digit-superscript font-gap rule):
 *  b0 | title (24,red,script,ALWAYS ON)          | T mid | x540 y64
 *  b1 | text L1 (16,ink)                          | T mid | x540 y98
 *  b1 | text L2 (13,muted)                        | T mid | x540 y122
 *  b2 | text (15,ink)                             | T mid | x540 y150
 *  b4 | text (14,ink)                             | T mid | x540 y176
 *  --- diagram (x150..520, y195..480) ---
 *  b1 | axes origin(184,396) x150..520 y195..480  | CartesianAxes (no ticks)
 *  b1 | O dot + label                             | circle+T end | (184,396) label x170 y414
 *  b1 | line (ink) LINE_LEFT->LINE_RIGHT           | Draw | (184,231)->(492,462)
 *  b1 | line equation label                       | T st | x311 y304 "3x + 4y - 12 = 0"
 *  b2 | R dot + label "R (4, 0)"                  | circle+T mid | (404,396) label x404 y424
 *  b2 | n arrow (amber_dark, 46px) + label "n"     | Draw+T st | (404,396)->(431.6,359.2), lbl x439 y349
 *  b4 | P dot + label "P (1, 1)"                  | circle+T end | (239,341) label x206 y330
 *  b4 | RP arrow (ink) + label "RP"                | Draw+T mid | (404,396)->(239,341), lbl x310 y386
 *  b5 | drop-line P->FOOT (green) + FOOT dot        | Draw+circ | (239,341)->(272,297)
 *  b5 | "d = 1.0" label (green_dark)               | T st | x267 y327
 *  --- right working column (x565..1044) ---
 *  b3 | formula L1 (17,amber_dark) "Ax0 + By0 + C = 0"      | T st x565 y210 (dims beat>=6)
 *  b3 | formula L2 (17,amber_dark) "⇒ Ax0 + By0 = -C"       | T st x565 y240 (dims beat>=6)
 *  b3 | concrete check (13,muted) + checkD                  | T st x565 y266, check x760 y262
 *  b5 | formula L1 (16,amber_dark) "d = |RP · n|"            | T st x565 y308 (dims beat>=6)
 *  b5 | formula L2 (14,amber_dark) "= |A(x1-x0)+B(y1-y0)|/√(A²+B²)" | T st x565 y336 (dims beat>=6)
 *  b5 | concrete (12,muted) "= |3(-3)+4(1)|/5 = |-5|/5 = 1.0"| T st x565 y360 (dims beat>=6)
 *  b6 | Chip (green border, high emphasis) "d = |Ax1+By1+C|/√(A²+B²)" | Chip x565 y392 w380 h54
 *  b6 | concrete match (13,green_dark) + checkD              | T st x565 y470, check x890 y466
 *  --- guardrail (bottom, spans wide) ---
 *  b7 | red bar                                    | Draw | x100 y504..566
 *  b7 | L1 (16,red,w700) "The signed value..."      | T st x120 y524
 *  b7 | L2 (14,red,w700) concrete side test         | T st x120 y554
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

const A = 3;
const B = 4;
const C = -12;
const NORM = Math.sqrt(A * A + B * B); // 5
const NX = A / NORM; // 0.6
const NY = B / NORM; // 0.8

const R_MATH = { x: 4, y: 0 }; // on the line: 3(4)+4(0)-12=0
const P_MATH = { x: 1, y: 1 };
const SIGNED_D = (A * P_MATH.x + B * P_MATH.y + C) / NORM; // -1.0
const D = Math.abs(SIGNED_D); // 1.0
const FOOT_MATH = { x: P_MATH.x - SIGNED_D * NX, y: P_MATH.y - SIGNED_D * NY }; // (1.6, 1.8)
const LINE_LEFT_MATH = { x: 0, y: 3 }; // y-intercept
const LINE_RIGHT_MATH = { x: 5.6, y: -1.2 };

const SCALE = 55;
const OX = 184;
const OY = 396;
function toScreen(x: number, y: number) {
  return { x: OX + SCALE * x, y: OY - SCALE * y };
}

const O = toScreen(0, 0); // (184,396)
const R = toScreen(R_MATH.x, R_MATH.y); // (404,396)
const P = toScreen(P_MATH.x, P_MATH.y); // (239,341)
const FOOT = toScreen(FOOT_MATH.x, FOOT_MATH.y); // (272,297)
const LINE_LEFT = toScreen(LINE_LEFT_MATH.x, LINE_LEFT_MATH.y); // (184,231)
const LINE_RIGHT = toScreen(LINE_RIGHT_MATH.x, LINE_RIGHT_MATH.y); // (492,462)

const NLEN = 46; // fixed pixel length representing "the unit normal" — not scaled to 1.0 math units
const N_TIP = { x: R.x + NX * NLEN, y: R.y - NY * NLEN }; // (431.6, 359.2)

export default function M11Ch09Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const dimEarly = beat >= 6;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} anchor="middle" script>
          {t("Proof: Distance of a Point from a Line", "Proof: Point se Line ki Distance")}
        </T>
      </Fade>

      {/* beat 1 — lead-in text + DIAGRAM part A: axes + the concrete line */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={16} fill={INK} anchor="middle">
          {t(
            "Every first-degree equation Ax + By + C = 0 is a line.",
            "Har first-degree equation Ax + By + C = 0 ek line hai."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={122} size={13} fill={MUTED} anchor="middle">
          {t(
            "Rewrite as y = -A/B x - C/B (or x = -C/A when B = 0).",
            "Isko y = -A/B x - C/B likho (ya B = 0 ho to x = -C/A)."
          )}
        </T>
      </Fade>

      <CartesianAxes on={beat >= 1} delay={dl(1, 1.1)} originX={OX} originY={OY} xLeft={150} xRight={520} yTop={195} yBottom={480} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={170} y={414} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={lineD(LINE_LEFT.x, LINE_LEFT.y, LINE_RIGHT.x, LINE_RIGHT.y)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={311} y={304} size={13} fill={INK} anchor="start" weight={700}>3x + 4y - 12 = 0</T>
      </Fade>

      {/* beat 2 — text + DIAGRAM part B: R on the line, the unit-normal arrow "n" */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={150} size={15} fill={INK} anchor="middle">
          {t(
            "The unit normal is n = (A, B)/√(A² + B²); pick any point R(x0, y0) on the line.",
            "Unit normal hai n = (A, B)/√(A² + B²); line par koi bhi point R(x0, y0) chuno."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={R.x} cy={R.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={404} y={424} size={13} fill={INK} anchor="middle" weight={700}>R (4, 0)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(R.x, R.y, N_TIP.x, N_TIP.y)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={439} y={349} size={14} fill={AMBER_DARK} anchor="start" weight={700}>n</T>
      </Fade>

      {/* beat 3 — formula: R on line -> Ax0+By0=-C (right working column) */}
      <Fade on={beat >= 3} delay={dl(3, 0)} dim={dimEarly}>
        <T x={565} y={210} size={17} fill={AMBER_DARK} anchor="start" weight={700}>Ax0 + By0 + C = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)} dim={dimEarly}>
        <T x={565} y={240} size={17} fill={AMBER_DARK} anchor="start" weight={700}>{"⇒"} Ax0 + By0 = -C</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)} dim={dimEarly}>
        <T x={565} y={266} size={13} fill={MUTED} anchor="start">check: 3(4) + 4(0) - 12 = 0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d={checkD(760, 262, 14)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 4 — text + DIAGRAM part C: P off the line, the RP vector */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={176} size={14} fill={INK} anchor="middle">
          {t("The distance is the projection of RP onto n.", "Distance, RP vector ka n par projection hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={P.x} cy={P.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={206} y={330} size={13} fill={INK} anchor="end" weight={700}>P (1, 1)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(R.x, R.y, P.x, P.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={310} y={386} size={13} fill={INK} anchor="middle" weight={700}>RP</T>
      </Fade>

      {/* beat 5 — formula: the projection, built in stages (right column) + DIAGRAM: drop-line */}
      <Fade on={beat >= 5} delay={dl(5, 0)} dim={dimEarly}>
        <T x={565} y={308} size={16} fill={AMBER_DARK} anchor="start" weight={700}>d = |RP {"·"} n|</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)} dim={dimEarly}>
        <T x={565} y={336} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          = |A(x1-x0) + B(y1-y0)| / √(A² + B²)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)} dim={dimEarly}>
        <T x={565} y={360} size={12} fill={MUTED} anchor="start">
          = |3(-3) + 4(1)| / 5 = |-5| / 5 = 1.0
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={lineD(P.x, P.y, FOOT.x, FOOT.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Circle cx={FOOT.x} cy={FOOT.y} r={2.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <T x={267} y={327} size={12} fill={GREEN_DARK} anchor="start" weight={700}>{`d = ${D.toFixed(1)}`}</T>
      </Fade>

      {/* beat 6 — LAND: the boxed formula (HIGH emphasis) + concrete match */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={565} y={392} w={380} h={54} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={19} script={false}>
          d = |Ax1 + By1 + C| / √(A² + B²)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={565} y={470} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          = |3(1) + 4(1) - 12| / 5 = |-5| / 5 = 1.0
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={checkD(890, 466, 14)} stroke={GREEN} sw={2.4} dur={0.4} />

      {/* beat 7 — guardrail (red-margin, HIGH): signed value tells the side */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 100 504 L 100 566" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={120} y={524} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "The signed value (no modulus) tells you which side of the line P is on.",
            "Signed value (bina modulus) batati hai P line ke kis side hai."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={120} y={554} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Here 3(1) + 4(1) - 12 = -5 (negative) → P is on the '-' side.",
            "Yahan 3(1) + 4(1) - 12 = -5 (negative) → P '-' side par hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

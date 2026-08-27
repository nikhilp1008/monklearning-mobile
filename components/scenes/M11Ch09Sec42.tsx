/**
 * M11 Ch09 · Section 42 — "Worked: Concurrency with a Parameter (Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (Advanced). board_content has 8 items: seq1 heading -> always-on
 * title. seq2..seq8 gate at beat>=1..7. reveals_english=[0,7.68,22.1,26.2,45.48,56.66,63.23,85.67],
 * reveals_hinglish=[0,7.08,17.49,20.99,37.72,48.81,55.21,80.04].
 *
 * Arithmetic (verified independently):
 *  det|a 2 1; 2 a 2; 1 1 -1| expand top row = a(-a-2) - 2(-2-2) + (2-a)
 *    = -a²-2a - 2(-4) + 2-a = -a²-2a+8+2-a = -a²-3a+10. Set =0, ×(-1): a²+3a-10=0
 *    = (a+5)(a-2). Roots a=-5, a=2.
 *  a=2: L1=2x+2y+1=0, L2=2x+2y+2=0 — same (A,B)=(2,2), different C(1 vs 2) — PARALLEL, DISTINCT,
 *    never meet -> concurrency impossible, discard.
 *  a=-5: L1=-5x+2y+1=0, L2=2x-5y+2=0, L3=x+y-1=0. Slope checks: -5/2=-2.5 vs 2/-5=-0.4 (L1,L2 ok);
 *    -5/1=-5 vs 2/1=2 (L1,L3 ok); 2/1=2 vs -5/1=-5 (L2,L3 ok) — no two parallel. From L3, x=1-y.
 *    Sub L1: -5(1-y)+2y+1=0 -> -5+5y+2y+1=0 -> 7y=4 -> y=4/7, x=3/7. Check L2:
 *    2(3/7)-5(4/7)+2 = 6/7-20/7+14/7 = 0 ✓. Concurrent at (3/7,4/7)≈(0.43,0.57).
 *
 * Row-band deviation (documented per spec Step 3): heavy algebra needs a wider mid-band than the
 * default "story" strip, so:
 *  30-80   title (always-on)
 *  90-112  problem statement
 *  120-246 algebra: literal 3x3 determinant grid (left) + expansion/factor/roots stack (right)
 *  266-286 two-panel diagram headers ("a=2" red / "a=-5" green)
 *  310-460 two-panel diagram axes+lines (divider at x540)
 *  478-560 verdict: red guardrail note (left) / boxed answer + sanity check (right)
 *
 * Beats:
 *  0(title, always-on) | "Worked: Concurrency with a Parameter (Advanced)"
 *  1 | problem statement
 *  2 | THE OBJECT: literal 3x3 determinant grid (2 bars + 9 cells, row by row) + "= 0"
 *  3 | expansion: a(-a-2) - 2(-2-2) + (2-a) = -a² - 3a + 10 = 0
 *  4 | factor: a² + 3a - 10 = 0 ⇒ (a+5)(a-2) = 0
 *  5 | roots: a = -5 or a = 2
 *  6 | ADVANCED CHECK, rejected case: left panel — a=2 gives 2x+2y+1=0 & 2x+2y+2=0, drawn as two
 *      genuinely parallel lines (equal slope, never meet), same-slope tick marks, "a=2" header
 *      crossed out, red guardrail note stating the rejection
 *  7 | ADVANCED CHECK, accepted case: right panel — a=-5 gives three lines that visibly converge
 *      at one point; point ringed; boxed final answer "a = -5"; sanity-check coordinates (3/7,4/7)
 *
 * Layout plan:
 *  b0 | title (24,red,script)                    | T mid | x540 y60
 *  b1 | statement (15,ink)                        | T mid | x540 y100
 *  b2 | grid bars x2                              | Draw x2 | x130/x320 y136..244
 *  b2 | 9 cells (3 row-groups)                     | T mid x3 | cols160/225/290 rows150/190/230
 *  b2 | "= 0"                                      | T start | x365 y190
 *  b3 | expansion formula                          | T mid | x780 y155
 *  b4 | factored formula                           | T mid | x780 y193
 *  b5 | roots formula                              | T mid | x780 y231
 *  b6 | divider                                    | Draw | x540 y310..460 (muted)
 *  b6 | left header "a = 2" (red)                  | T mid | x285 y280
 *  b6 | left axes o(285,366) 170..410/310..460     | CartesianAxes (no ticks)
 *  b6 | L1 2x+2y+1=0 (ink) + label                 | Draw+T | (222.6,316.6)->(347.4,441.4)
 *  b6 | L2 2x+2y+2=0 (ink) + label                 | Draw+T | (222.6,329.6)->(347.4,454.4)
 *  b6 | same-slope tick marks x2 (red)             | Draw x2 | near line midpoints x285
 *  b6 | "never meet" (red)                         | T start | x440 y380
 *  b6 | cross-out on "a = 2" header (red)           | Draw | crossD over header box
 *  b6 | guardrail bar + 2-line note (red)           | Draw+T | x60 y486..536 / text x76 y505,529
 *  b7 | right header "a = -5" (green)               | T mid | x755 y280
 *  b7 | right axes o(755,386) 610..960/310..460     | CartesianAxes (no ticks)
 *  b7 | L1 -5x+2y+1=0 (ink)                         | Draw | (665,443)->(899,319.5)
 *  b7 | L2 2x-5y+2=0 (ink)                          | Draw | (665,386)->(899,366.24)
 *  b7 | L3 x+y-1=0 (ink)                            | Draw | (665,348)->(899,397.4)
 *  b7 | concurrency dot (green) + ring              | circle+Draw | (794,375)
 *  b7 | boxed answer chip "a = -5" (green)           | Chip | x770 y478 w140 h38
 *  b7 | checkD (green) + sanity text                | Draw+T | x785 y540 / text x805 y545
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
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

// ---- literal 3x3 determinant grid geometry ----
const GCX = 225;
const GCOLS = [GCX - 65, GCX, GCX + 65]; // 160, 225, 290
const GROWS = [150, 190, 230];
const GBAR_L = GCX - 95; // 130
const GBAR_R = GCX + 95; // 320
const GBAR_TOP = 136;
const GBAR_BOT = 244;
const GRID_VALUES = [
  ["a", "2", "1"],
  ["2", "a", "2"],
  ["1", "1", "-1"],
];

// ---- left panel (a=2, rejected) ----
const OX1 = 285;
const OY1 = 366;
const SCALE1 = 26;
function toScreen1(x: number, y: number) {
  return { x: OX1 + x * SCALE1, y: OY1 - y * SCALE1 };
}
const L1a = toScreen1(-2.4, 2.4 - 0.5); // (222.6, 316.6)
const L1b = toScreen1(2.4, -2.4 - 0.5); // (347.4, 441.4)
const L2a = toScreen1(-2.4, 2.4 - 1); // (222.6, 329.6)
const L2b = toScreen1(2.4, -2.4 - 1); // (347.4, 454.4)

// ---- right panel (a=-5, accepted) ----
const OX2 = 755;
const OY2 = 386;
const SCALEX2 = 90;
const SCALEY2 = 19;
function toScreen2(x: number, y: number) {
  return { x: OX2 + x * SCALEX2, y: OY2 - y * SCALEY2 };
}
const R1a = toScreen2(-1.0, 2.5 * -1.0 - 0.5); // (665, 443)
const R1b = toScreen2(1.6, 2.5 * 1.6 - 0.5); // (899, 319.5)
const R2a = toScreen2(-1.0, 0.4 * -1.0 + 0.4); // (665, 386)
const R2b = toScreen2(1.6, 0.4 * 1.6 + 0.4); // (899, 366.24)
const R3a = toScreen2(-1.0, 1 - -1.0); // (665, 348)
const R3b = toScreen2(1.6, 1 - 1.6); // (899, 397.4)
const CONCUR = toScreen2(3 / 7, 4 / 7); // (~794, ~375)

// header box for the "a = 2" cross-out
const HEAD2_BOX = { x: 285 - 22.5, y: 280 - 0.78 * 17, w: 45, h: 0.78 * 17 + 0.31 * 17 };

export default function M11Ch09Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Concurrency with a Parameter (Advanced)", "Worked: Parameter Wale Concurrency (Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={15} fill={INK} anchor="middle">
          {t(
            "For what a are ax+2y+1=0, 2x+ay+2=0, x+y-1=0 concurrent?",
            "Kis a ke liye ax+2y+1=0, 2x+ay+2=0, x+y-1=0 concurrent hain?"
          )}
        </T>
      </Fade>

      {/* beat 2 — literal 3x3 determinant grid + "= 0" */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={`M ${GBAR_L} ${GBAR_TOP} L ${GBAR_L} ${GBAR_BOT}`} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={`M ${GBAR_R} ${GBAR_TOP} L ${GBAR_R} ${GBAR_BOT}`} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        {GCOLS.map((cx, c) => (
          <T key={c} x={cx} y={GROWS[0]} size={19} fill={INK} anchor="middle">{GRID_VALUES[0][c]}</T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        {GCOLS.map((cx, c) => (
          <T key={c} x={cx} y={GROWS[1]} size={19} fill={INK} anchor="middle">{GRID_VALUES[1][c]}</T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        {GCOLS.map((cx, c) => (
          <T key={c} x={cx} y={GROWS[2]} size={19} fill={INK} anchor="middle">{GRID_VALUES[2][c]}</T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={365} y={190} size={20} fill={INK} anchor="start" weight={700}>= 0</T>
      </Fade>

      {/* beat 3 — expansion */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={780} y={155} size={16} fill={INK} anchor="middle">
          a(-a-2) - 2(-2-2) + (2-a) = -a² - 3a + 10 = 0
        </T>
      </Fade>

      {/* beat 4 — factor */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={780} y={193} size={16} fill={INK} anchor="middle">
          a² + 3a - 10 = 0  ⇒  (a+5)(a-2) = 0
        </T>
      </Fade>

      {/* beat 5 — roots */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={231} size={16} fill={INK} anchor="middle" weight={700}>
          a = -5   or   a = 2
        </T>
      </Fade>

      {/* beat 6 — LEFT PANEL: a=2 rejected (parallel, distinct) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={lineD(540, 310, 540, 460)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={285} y={280} size={17} fill={RED} anchor="middle" weight={700}>a = 2</T>
      </Fade>
      <CartesianAxes on={beat >= 6} delay={dl(6, 0.6)} originX={OX1} originY={OY1} xLeft={170} xRight={410} yTop={310} yBottom={460} showTicks={false} />
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={lineD(L1a.x, L1a.y, L1b.x, L1b.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={214} y={312} size={11} fill={INK} anchor="end">2x+2y+1=0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d={lineD(L2a.x, L2a.y, L2b.x, L2b.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={214} y={338} size={11} fill={INK} anchor="end">2x+2y+2=0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d="M 279 373 L 291 385" stroke={RED} sw={2} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d="M 279 386 L 291 398" stroke={RED} sw={2} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={440} y={380} size={13} fill={RED} anchor="start" weight={700}>
          {t("never meet", "kabhi nahi milti")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={crossD(HEAD2_BOX.x, HEAD2_BOX.y, HEAD2_BOX.w, HEAD2_BOX.h)} stroke={RED} sw={2.6} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 3.7)} d="M 60 486 L 60 536" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4.1)}>
        <T x={76} y={505} size={14} fill={RED} anchor="start" weight={700}>
          {t("At a=2 the first two lines become parallel —", "a=2 par pehli do lines parallel ban jaati hain —")}
        </T>
        <T x={76} y={529} size={14} fill={RED} anchor="start" weight={700}>
          {t("concurrency is impossible; discard it.", "concurrency impossible hai; ise discard karo.")}
        </T>
      </Fade>

      {/* beat 7 — RIGHT PANEL: a=-5 accepted (genuinely concurrent) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={755} y={280} size={17} fill={GREEN} anchor="middle" weight={700}>a = -5</T>
      </Fade>
      <CartesianAxes on={beat >= 7} delay={dl(7, 0.3)} originX={OX2} originY={OY2} xLeft={610} xRight={960} yTop={310} yBottom={460} showTicks={false} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={lineD(R1a.x, R1a.y, R1b.x, R1b.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={lineD(R2a.x, R2a.y, R2b.x, R2b.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={lineD(R3a.x, R3a.y, R3b.x, R3b.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Circle cx={CONCUR.x} cy={CONCUR.y} r={5} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={ringD(CONCUR.x, CONCUR.y, 18, 16)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <Chip x={770} y={478} w={140} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={20}>
          a = -5
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.2)} d={checkD(785, 540, 14)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={805} y={545} size={13} fill={GREEN} anchor="start" weight={600}>
          {t("(3/7, 4/7) — all three lines meet.", "(3/7, 4/7) — teeno lines milti hain.")}
        </T>
      </Fade>
    </Scene>
  );
}

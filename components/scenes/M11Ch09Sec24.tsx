/**
 * M11 Ch09 · Section 24 — "Worked: perpendicular line in intercept form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic "Equations of a Line". One worked example chaining
 * three ideas (reduction -> slope, flip-negate -> perpendicular, divide -> intercept form) onto
 * ONE diagram: left column = the derivation, right column = the diagram (both lines, same axes,
 * uniform x/y scale so the drawn angle is genuinely 90 degrees, not just claimed).
 *
 * Numbers verified from JSON (re-derived independently, all match):
 *  Given line 4x-3y+7=0: m1 = -A/B = -4/-3 = 4/3. ✓ matches JSON.
 *    Check (-1,1): 4(-1)-3(1)+7=-4-3+7=0 ✓. Check (2,5): 4(2)-3(5)+7=8-15+7=0 ✓.
 *  Perpendicular slope: m = -1/m1 = -1/(4/3) = -3/4. ✓ matches JSON.
 *  Through (2,3): y-3 = -3/4(x-2) -> ×4 -> 4y-12 = -3x+6 -> 3x+4y-18=0. ✓ matches JSON.
 *    Check (2,3): 3(2)+4(3)-18=6+12-18=0 ✓.
 *  Intercept form: 3x+4y=18, ÷18 -> x/6 + y/(18/4) = 1, 18/4=4.5=9/2 -> x/6 + y/(9/2) = 1.
 *    ✓ matches JSON's "9/2". x-intercept=6: check 3(6)+4(0)-18=0 ✓. y-intercept=4.5=9/2:
 *    check 3(0)+4(4.5)-18=18-18=0 ✓.
 *  Perpendicularity sanity check (screen space): with a UNIFORM scale (52px/unit on both axes,
 *    required — unequal x/y scales would visually distort the right angle even though the slopes
 *    are true negative reciprocals), the two drawn line vectors have dot product 0 and measured
 *    screen angle 90.00° (computed and verified by script before authoring) — the lines really do
 *    look perpendicular where they cross, not just algebraically.
 *
 * Screen mapping — single Cartesian system: toScreen(x,y) = {x: 670+52x, y: 460-52y}
 *   given line: (-1,1)->(618,408)  (2,5)->(774,200)
 *   perp line:  (2,3)->(774,304)  (6,0)->(982,460)  (0,4.5)->(670,226)
 *   origin O -> (670,460)
 *
 * Beats (board_content has 8 items; item[0]=heading is always-on title; items[1..7]=seq2..seq8
 * gate at beat>=1..7). reveals_english=[0,7.85,19.71,31.32,37.72,49.66,59.31,69.38].
 *  0(title, always-on) | "Worked: Perpendicular Line, Intercept Form"
 *  1 | set up: axes draw, plot & join given line's two points, problem statement
 *  2 | m1 = -A/B = -4/-3 = 4/3
 *  3 | m = -1/m1 = -3/4  (flip-negate)
 *  4 | land eq1: point-slope text, mark (2,3), box "3x + 4y - 18 = 0"
 *  5 | "divide by 18" text
 *  6 | land eq2: plot both intercepts, draw the perpendicular line through them, box intercept form
 *  7 | guardrail (red-margin, left column below the chips): the 3-idea chain, ringed with a red bar
 *
 * Layout plan (left column = derivation, x60-480, center x270; right column = diagram, x520-1044):
 *  b0 | title (24,red,script)                       | T mid | x540 y58
 *  b1 | R axes c(670,460) 576..1010/158..502          | CartesianAxes (no ticks)
 *  b1 | L problem text                                | T mid | x270 y100
 *  b1 | R O dot+label                                 | circle+T | (670,460) label x656 y480 end
 *  b1 | R (-1,1) dot+label                             | circle+T | (618,408) label x618 y372 mid
 *  b1 | R (2,5) dot+label                              | circle+T | (774,200) label x756 y190 end
 *  b1 | R given-line draw (extended, ink)               | Draw | (602.4,428.8)->(789.6,179.2)
 *  b2 | L m1 formula                                   | T mid | x270 y130
 *  b3 | L m formula                                    | T mid | x270 y156
 *  b4 | L point-slope text                              | T mid | x270 y182
 *  b4 | R (2,3) dot(ink)+label                          | circle+T | (774,304) label x786 y300 start
 *  b4 | L chip "3x + 4y - 18 = 0" (green)               | Chip | x175 y204 w190 h36
 *  b5 | L "divide by 18" text                           | T mid | x270 y270
 *  b6 | R (6,0) dot(green)+label                        | circle+T | (982,460) label x968 y480 end
 *  b6 | R (0,4.5) dot(green)+label                      | circle+T | (670,226) label x648 y226 end
 *  b6 | R perp-line draw (extended, green)               | Draw | (654.4,214.3)->(997.6,471.7)
 *  b6 | L chip "x/6 + y/(9/2) = 1" (green)              | Chip | x182 y296 w175 h36
 *  b7 | L red bar x60 y354..398 + 2-line guardrail text  | Draw+T | text x76 y368/390
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
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

const OX = 670;
const OY = 460;
const S = 52;
function ts(x: number, y: number) {
  return { x: OX + S * x, y: OY - S * y };
}

// given line 4x - 3y + 7 = 0
const G1 = ts(-1, 1); // (618,408)
const G2 = ts(2, 5); // (774,200)
const GEXT_A = ts(-1.3, (4 * -1.3 + 7) / 3); // (602.4,428.8)
const GEXT_B = ts(2.3, (4 * 2.3 + 7) / 3); // (789.6,179.2)

// perpendicular line 3x + 4y - 18 = 0
const P0 = ts(2, 3); // (774,304)
const PXI = ts(6, 0); // (982,460)
const PYI = ts(0, 4.5); // (670,226)
const PEXT_A = ts(-0.3, (18 - 3 * -0.3) / 4); // (654.4,214.3)
const PEXT_B = ts(6.3, (18 - 3 * 6.3) / 4); // (997.6,471.7)

export default function M11Ch09Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Perpendicular Line, Intercept Form", "Worked: Perpendicular Line, Intercept Form")}
        </T>
      </Fade>

      {/* ===================== RIGHT — diagram (uniform scale) ===================== */}

      {/* beat 1 — set up: axes, given line's two points, draw the given line */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={OX} originY={OY} xLeft={576} xRight={1010} yTop={158} yBottom={502} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={656} y={480} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={G1.x} cy={G1.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={618} y={372} size={12} fill={INK} anchor="middle" weight={700}>(-1, 1)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={G2.x} cy={G2.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={756} y={190} size={12} fill={INK} anchor="end" weight={700}>(2, 5)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={lineD(GEXT_A.x, GEXT_A.y, GEXT_B.x, GEXT_B.y)} stroke={INK} sw={2.2} dur={0.6} />

      {/* beat 4 — mark the construction point (2,3) */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Circle cx={P0.x} cy={P0.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={786} y={300} size={12} fill={INK} anchor="start" weight={700}>(2, 3)</T>
      </Fade>

      {/* beat 6 — land: plot both intercepts, draw the perpendicular line */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Circle cx={PXI.x} cy={PXI.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={968} y={480} size={12} fill={GREEN} anchor="end" weight={700}>(6, 0)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={PYI.x} cy={PYI.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={648} y={226} size={12} fill={GREEN} anchor="end" weight={700}>(0, 4.5)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={lineD(PEXT_A.x, PEXT_A.y, PEXT_B.x, PEXT_B.y)} stroke={GREEN} sw={2.4} dur={0.6} />

      {/* ===================== LEFT — derivation ===================== */}

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={270} y={100} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Through (2, 3), perp. to 4x - 3y + 7 = 0", "(2, 3) se, 4x - 3y + 7 = 0 ke perpendicular")}
        </T>
      </Fade>

      {/* beat 2 — slope of the given line */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={270} y={130} size={14} fill={INK} anchor="middle">
          m1 = -A/B = -4/-3 = 4/3
        </T>
      </Fade>

      {/* beat 3 — perpendicular slope: flip and negate */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={270} y={156} size={14} fill={INK} anchor="middle">
          m = -1/m1 = -3/4
        </T>
      </Fade>

      {/* beat 4 — point-slope, then boxed general form */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={270} y={182} size={14} fill={INK} anchor="middle">
          y - 3 = -3/4(x - 2)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={175} y={204} w={190} h={36} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          3x + 4y - 18 = 0
        </Chip>
      </Fade>

      {/* beat 5 — divide by 18 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={270} y={270} size={14} fill={INK} anchor="middle">
          {t("Divide 3x + 4y = 18 by 18", "3x + 4y = 18 ko 18 se divide karo")}
        </T>
      </Fade>

      {/* beat 6 — boxed intercept form */}
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <Chip x={182} y={296} w={175} h={36} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          x/6 + y/(9/2) = 1
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: the 3-idea chain */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 354 L 60 398" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={368} size={14} fill={RED} anchor="start" weight={700}>
          {t("Chain: reduction -> slope,", "Chain: reduction se slope,")}
        </T>
        <T x={76} y={390} size={14} fill={RED} anchor="start" weight={700}>
          {t("flip-negate -> perp, convert form.", "flip-negate se perp, phir form badlo.")}
        </T>
      </Fade>
    </Scene>
  );
}

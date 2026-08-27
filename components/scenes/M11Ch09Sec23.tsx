/**
 * M11 Ch09 · Section 23 — "Worked: two-point and general form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic "Equations of a Line". Two independent examples,
 * side by side (left = Example 1, right = Example 2), so both stay visible as the final
 * "notes photo" — neither supersedes the other, so neither is ever dimmed.
 *
 * Numbers verified from JSON (re-derived independently, all match):
 *  Example 1: through (-2,5) and (3,-1).
 *    m = (-1-5)/(3-(-2)) = -6/5 = -1.2. ✓ matches JSON.
 *    Point-slope: y-5 = -6/5(x+2) → ×5 → 5y-25 = -6x-12 → 6x+5y-13=0. ✓ matches JSON.
 *    y-intercept (x=0): 5y=13, y=13/5=2.6. Check A: 6(-2)+5(5)-13=-12+25-13=0 ✓.
 *    Check B: 6(3)+5(-1)-13=18-5-13=0 ✓. (0,2.6) lies between A and B on the segment,
 *    so drawing A→B already crosses the y-axis; the line is drawn slightly EXTENDED
 *    past both points purely so the y-axis crossing reads as a "line", not a segment.
 *  Example 2: 3x-4y+12=0.
 *    m = -A/B = -3/-4 = 3/4. ✓ matches JSON.
 *    x-intercept (y=0): 3x+12=0 → x=-4. y-intercept (x=0): -4y+12=0 → y=3. ✓ both match JSON.
 *    Check (-4,0): 3(-4)-4(0)+12=-12+12=0 ✓. Check (0,3): 3(0)-4(3)+12=-12+12=0 ✓.
 *    Drawn as the exact segment between the two intercepts (no extension needed — the
 *    two given/derived points ARE the line's defining points here).
 *  Speed trap (seq8, red-margin): the tempting wrong read is m = A/B = 3/-4 = -3/4 (forgetting
 *    the minus sign in the reduction formula) — staged at beat7 as a crossed-out red aside next
 *    to the correct +3/4 result already landed at beat5/beat6.
 *
 * Screen mapping — two independent local Cartesian systems, one per column:
 *   Left  (Example 1): toScreen1(x,y) = {x: 240+42x, y: 410-42y}
 *     A(-2,5)->(156,200)  B(3,-1)->(366,452)  y-intercept(0,2.6)->(240,300.8)
 *     extended line: data(-2.4, 5.48)->(139.2,179.84) .. data(3.3,-1.36)->(378.6,467.12)
 *   Right (Example 2): toScreen2(x,y) = {x: 870+60x, y: 404-60y}
 *     x-intercept(-4,0)->(630,404)  y-intercept(0,3)->(870,224)
 *
 * Beats (board_content has 8 items; item[0]=heading is always-on title; items[1..7]=seq2..seq8
 * gate at beat>=1..7). reveals_english=[0,6.66,15.79,23.55,39.34,50.43,60.33,69.97].
 *  0(title, always-on) | "Worked: Two-Point & General Form"
 *  1 | Ex1 setup: axes draw, plot A(-2,5) & B(3,-1), header
 *  2 | Ex1 slope: m = (-1-5)/(3-(-2)) = -6/5
 *  3 | Ex1 land: point-slope -> general form (boxed) -> draw line -> mark+label y-intercept
 *  4 | Ex2 setup: axes draw, header "3x-4y+12=0"
 *  5 | Ex2 slope: m = -A/B = -3/-4 = 3/4
 *  6 | Ex2 land: plot both intercepts, draw segment, box "x-intercept=-4, y-intercept=3"
 *  7 | speed trap (red-margin, right column, below Ex2): cross out the A/B sign-flip trap,
 *      reinforce the correct -A/B result beside it
 *
 * Layout plan (all columns share text rows y100/y130 for symmetry; L center x=260, R center x=765):
 *  b0 | title (24,red,script)                    | T mid | x540 y58
 *  b1 | L axes c(240,410) 130..390/176..468       | CartesianAxes (no ticks)
 *  b1 | L header "Example 1: (-2,5) and (3,-1)"   | T mid | x260 y100
 *  b1 | L O dot+label                             | circle+T | (240,410) label x226 y424 end
 *  b1 | L A dot + label "(-2, 5)"                 | circle+T | (156,200) label x170 y190 start
 *  b1 | L B dot + label "(3, -1)"                 | circle+T | (366,452) label x374 y444 start
 *  b2 | L slope formula                           | T mid | x260 y130
 *  b3 | L point-slope text                        | T mid | x260 y156
 *  b3 | L line draw (extended)                    | Draw | (139.2,179.84)->(378.6,467.12)
 *  b3 | L chip "6x + 5y - 13 = 0" (green)         | Chip | x160 y482 w200 h36
 *  b3 | L y-intercept dot(green) + label           | circle+T | (240,300.8) label x258 y296 start
 *  b4 | R axes c(870,404) 560..960/176..452        | CartesianAxes (no ticks)
 *  b4 | R header "Example 2: 3x - 4y + 12 = 0"     | T mid | x765 y100
 *  b5 | R slope formula                            | T mid | x765 y130
 *  b6 | R (-4,0) dot(green) + label                 | circle+T | (630,404) label x618 y430 end
 *  b6 | R (0,3) dot(green) + label                  | circle+T | (870,224) label x884 y210 start
 *  b6 | R segment draw (630,404)->(870,224)         | Draw
 *  b6 | R chip "x-intercept=-4, y-intercept=3"      | Chip | x605 y468 w320 h36
 *  b7 | R speed-trap label (red)                    | T mid | x765 y530
 *  b7 | R wrong "m = A/B = -3/4" + crossD (red)      | T st x650 y560 | crossD box(650,549.08,105,15.26)
 *  b7 | R correct "m = -A/B = 3/4" + checkD (green)  | T st x790 y560 | checkD (915,552,14)
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
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

// Left column (Example 1)
const OX1 = 240;
const OY1 = 410;
const S1 = 42;
function ts1(x: number, y: number) {
  return { x: OX1 + S1 * x, y: OY1 - S1 * y };
}
const A = ts1(-2, 5); // (156,200)
const B = ts1(3, -1); // (366,452)
const YI1 = ts1(0, 2.6); // (240,300.8)
const EXT1_START = ts1(-2.4, 2.6 - 1.2 * -2.4); // (139.2,179.84)
const EXT1_END = ts1(3.3, 2.6 - 1.2 * 3.3); // (378.6,467.12)

// Right column (Example 2)
const OX2 = 870;
const OY2 = 404;
const S2 = 60;
function ts2(x: number, y: number) {
  return { x: OX2 + S2 * x, y: OY2 - S2 * y };
}
const XI2 = ts2(-4, 0); // (630,404)
const YI2 = ts2(0, 3); // (870,224)

export default function M11Ch09Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Worked: Two-Point & General Form", "Worked: Two-Point aur General Form")}
        </T>
      </Fade>

      {/* ===================== LEFT — Example 1 ===================== */}

      {/* beat 1 — set up: axes, given points */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={OX1} originY={OY1} xLeft={130} xRight={390} yTop={176} yBottom={468} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={260} y={100} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Example 1: (-2, 5) and (3, -1)", "Example 1: (-2, 5) aur (3, -1)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={OX1} cy={OY1} r={3} fill={INK} />
        <T x={226} y={424} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={A.x} cy={A.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={170} y={190} size={12} fill={INK} anchor="start" weight={700}>(-2, 5)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={B.x} cy={B.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={374} y={444} size={12} fill={INK} anchor="start" weight={700}>(3, -1)</T>
      </Fade>

      {/* beat 2 — slope */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={260} y={130} size={14} fill={INK} anchor="middle">
          m = (-1-5)/(3-(-2)) = -6/5
        </T>
      </Fade>

      {/* beat 3 — land: point-slope -> general form (boxed) -> draw line -> y-intercept */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={260} y={156} size={14} fill={INK} anchor="middle">
          y - 5 = -6/5(x + 2)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={lineD(EXT1_START.x, EXT1_START.y, EXT1_END.x, EXT1_END.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Chip x={160} y={482} w={200} h={36} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          6x + 5y - 13 = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Circle cx={YI1.x} cy={YI1.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={258} y={296} size={12} fill={GREEN} anchor="start" weight={700}>13/5 = 2.6</T>
      </Fade>

      {/* ===================== RIGHT — Example 2 ===================== */}

      {/* beat 4 — set up: axes, given line restated */}
      <CartesianAxes on={beat >= 4} delay={dl(4, 0)} originX={OX2} originY={OY2} xLeft={560} xRight={960} yTop={176} yBottom={452} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={765} y={100} size={16} fill={INK} anchor="middle" weight={700}>
          Example 2: 3x - 4y + 12 = 0
        </T>
      </Fade>

      {/* beat 5 — slope by reduction */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={765} y={130} size={14} fill={INK} anchor="middle">
          m = -A/B = -3/-4 = 3/4
        </T>
      </Fade>

      {/* beat 6 — land: plot both intercepts, draw the line, box the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Circle cx={XI2.x} cy={XI2.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={618} y={430} size={12} fill={GREEN} anchor="end" weight={700}>(-4, 0)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={YI2.x} cy={YI2.y} r={4.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={884} y={210} size={12} fill={GREEN} anchor="start" weight={700}>(0, 3)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={lineD(XI2.x, XI2.y, YI2.x, YI2.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <Chip x={605} y={468} w={320} h={36} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          x-intercept = -4, y-intercept = 3
        </Chip>
      </Fade>

      {/* beat 7 — speed trap: stage the wrong A/B read, cross it out, reinforce the correct one */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={765} y={530} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Sign trap: it's -A/B, not A/B", "Sign trap: yeh -A/B hai, A/B nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={650} y={560} size={14} fill={RED} anchor="start" weight={700}>
          m = A/B = -3/4
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={crossD(650, 549.08, 105, 15.26)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={790} y={560} size={14} fill={GREEN} anchor="start" weight={700}>
          m = -A/B = 3/4
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={checkD(915, 552, 14)} stroke={GREEN} sw={2.4} dur={0.3} />
    </Scene>
  );
}

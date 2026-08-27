/**
 * M11 Ch09 · Section 25 — "Worked example: normal form (advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (Advanced) — subtopic 3 (Equations of a Line).
 *
 * Numbers verified from JSON: line x - √3y + 8 = 0 ⇒ A=1, B=-√3, C=8.
 * √(A²+B²) = √(1+3) = 2. C=8>0 ⇒ divide by -2 (opposite sign of C):
 * (x - √3y + 8)/(-2) = -x/2 + (√3/2)y - 4 = 0 ⇒ -x/2 + (√3/2)y = 4. ✓
 * cos ω = -1/2, sin ω = √3/2 ⇒ cos<0, sin>0 ⇒ Quadrant II ⇒ ω = 120°
 * (cos120°=-0.5 ✓, sin120°=√3/2≈0.866 ✓). p = 4.
 * Speed trap: dividing by +2 instead gives p = -4 — forbidden negative distance.
 * Final: x cos120° + y sin120° = 4.
 * Diagram points on the line: (-8,0) [-8-0+8=0 ✓] and (0, 8/√3≈4.619)
 * [0-√3(8/√3)+8=0 ✓]. N = (p cosω, p sinω) = (-2, 3.464); check on line:
 * -2 - √3(3.464) + 8 ≈ -2-6.0+8 = 0 ✓ (N is the foot of ⊥ from O, so it lies
 * on the line itself, 75% of the way from (-8,0) to (0,4.619)).
 * Screen mapping: scale=42px/unit, origin(760,440). toScreen(x,y) =
 * {x:760+42x, y:440-42y}. P1(-8,0)->(424,440). P2(0,8/√3)->(760,246.0).
 * N(-2,3.464)->(676,294.5). |ON| on screen = 4*42 = 168px (matches computed
 * distance O(760,440)-N(676,294.5) = √(84²+145.5²) = 168 ✓).
 *
 * Beat-index: board_content has 9 items (one more than usual 8). item[0]
 * heading -> always-on title. items[1..8] gate at beat>=1..8.
 * reveals_english = [0, 8.02, 19.88, 33.45, 43.35, 52.82, 62.12, 74.15, 89.43] (9 values).
 *
 * Beats:
 *  0(title, always-on) | "Worked: Normal Form (Advanced)"
 *  1 | problem text + THE DIAGRAM setup: axes, given line through 2 clean points, O
 *  2 | formula: √(A²+B²) = √(1+3) = 2
 *  3 | text: since C=8>0, divide by -2 so RHS positive
 *  4 | formula: -x/2 + (√3/2)y = 4
 *  5 | formula: cosω=-1/2, sinω=√3/2, p=4  + mark N, draw ON (muted), label p=4
 *  6 | guardrail (red-margin): cosω<0 & sinω>0 -> Q2 -> ω=120°  + angle arc + ω label
 *  7 | speed trap aside (crossed out): dividing by +2 gives p=-4 — forbidden
 *  8 | landed: boxed final normal form + p=4, ω=120° caption
 *
 * Layout plan:
 *  b0 | title (22,red,script)                 | T mid | x540 y62
 *  b1 | problem text (16,ink)                  | T mid | x540 y94
 *  b1 | axes c(760,440) 360..820/225..470      | CartesianAxes (no ticks)
 *  b1 | line P1(424,440)->P2(760,246)          | Draw (ink)
 *  b1 | P1,P2 dots + O dot                     | circle
 *  b1 | O label                                | T end | x748 y462
 *  b1 | line equation label "x-√3y+8=0"        | T end | x700 y232
 *  b2 | formula (17,ink)                       | T mid | x540 y124
 *  b3 | text (14,ink)                          | T mid | x540 y152
 *  b4 | formula (17,ink)                       | T mid | x540 y180
 *  b5 | formula (16,ink)                       | T mid | x540 y208
 *  b5 | N dot (amber_dark) + label "N(-2,3.46)"| circle+T | (676,294.5) label x684 y274 start
 *  b5 | ON segment (muted)                     | Draw | (760,440)->(676,294.5)
 *  b5 | "p = 4" label (amber_dark)             | T start | x737 y356
 *  b6 | red-margin bar x880 y316..372          | Draw
 *  b6 | 2-line guardrail text                  | T start | x896 y336 / y360
 *  b6 | angle arc r45 0->120°                  | Draw (amber_dark) | (760,440)
 *  b6 | "ω = 120°" label                       | T start | x790 y378
 *  b7 | "p = -4" crossed out (red, margin col)  | T start + crossD | x896 y404
 *  b7 | caption "(÷ by +2 → forbidden)"        | T start | x896 y428
 *  b8 | boxed final formula chip (green)       | Chip | x380 y498 w320 h44
 *  b8 | caption "p = 4, ω = 120°"              | T mid script | x540 y580
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD } from "./math-kit";

const SCALE = 42;
const OX = 760;
const OY = 440;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = { x: OX, y: OY };
const P1 = toScreen(-8, 0); // (424, 440)
const P2 = toScreen(0, 8 / Math.sqrt(3)); // (760, 246.0)
const P_DIST = 4;
const OMEGA_RAD = (120 * Math.PI) / 180;
const N = toScreen(P_DIST * Math.cos(OMEGA_RAD), P_DIST * Math.sin(OMEGA_RAD)); // (676, 294.5)
const ARC_R = 45;

export default function M11Ch09Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Normal Form (Advanced)", "Worked: Normal Form (Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — problem statement + set up the object: the given line */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={94} size={16} fill={INK} anchor="middle">
          {t(
            "Reduce x - √3y + 8 = 0 to normal form; find p and ω.",
            "x - √3y + 8 = 0 ko normal form mein reduce karo; p aur ω dhoondo."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.6)} originX={OX} originY={OY} xLeft={360} xRight={820} yTop={225} yBottom={470} showTicks={false} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={lineD(P1.x, P1.y, P2.x, P2.y)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Circle cx={P1.x} cy={P1.y} r={3} fill={INK} />
        <Circle cx={P2.x} cy={P2.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={O.x} cy={O.y} r={3.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={748} y={462} size={12} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={700} y={232} size={13} fill={INK} anchor="end" weight={700}>x - √3y + 8 = 0</T>
      </Fade>

      {/* beat 2 — √(A²+B²) = 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={124} size={17} fill={INK} anchor="middle">√(A² + B²) = √(1 + 3) = 2</T>
      </Fade>

      {/* beat 3 — since C=8>0, divide by -2 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={152} size={14} fill={INK} anchor="middle">
          {t(
            "Since C = 8 > 0, divide by -2 so the right side becomes positive.",
            "C = 8 > 0 hai, isliye right side positive banane ke liye -2 se divide karo."
          )}
        </T>
      </Fade>

      {/* beat 4 — -x/2 + (√3/2)y = 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={180} size={17} fill={INK} anchor="middle">-x/2 + (√3/2) y = 4</T>
      </Fade>

      {/* beat 5 — cosω, sinω, p=4 + mark N and ON on the diagram */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={208} size={16} fill={INK} anchor="middle">cos ω = -1/2,  sin ω = √3/2,  p = 4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={N.x} cy={N.y} r={4.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={684} y={274} size={11} fill={AMBER_DARK} anchor="start" weight={700}>N (-2, 3.46)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={lineD(O.x, O.y, N.x, N.y)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={737} y={356} size={12} fill={AMBER_DARK} anchor="start" weight={700}>p = 4</T>
      </Fade>

      {/* beat 6 — guardrail: read ω from BOTH signs -> Quadrant II -> 120°, + angle arc */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 880 316 L 880 372" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={896} y={336} size={12} fill={RED} anchor="start" weight={700}>cos ω&lt;0, sin ω&gt;0 →</T>
        <T x={896} y={360} size={12} fill={RED} anchor="start" weight={700}>ω in Q2: ω = 120°</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={angleArcD(O.x, O.y, ARC_R, 0, OMEGA_RAD)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={790} y={378} size={13} fill={AMBER_DARK} anchor="start" weight={700}>ω = 120°</T>
      </Fade>

      {/* beat 7 — speed trap: dividing by +2 gives p=-4, a forbidden negative distance.
          Placed in the same red-margin column as the beat-6 guardrail (clear of the
          angle arc, whose 120° endpoint lands near x737,y401 — right on top of where
          this aside sat originally; moved right to x896 to avoid crossing the arc
          and the y-axis stroke at x760). */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={896} y={404} size={13} fill={RED} anchor="start" weight={700}>p = -4</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={crossD(896, 393.86, 39, 14.17)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={896} y={428} size={11} fill={RED} anchor="start">
          {t("(÷ by +2 → forbidden)", "(+2 se ÷ → forbidden)")}
        </T>
      </Fade>

      {/* beat 8 — land the result: boxed normal form */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={380} y={498} w={320} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={20} script={false}>
          x cos 120° + y sin 120° = 4
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={540} y={580} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("p = 4, ω = 120°", "p = 4, ω = 120°")}
        </T>
      </Fade>
    </Scene>
  );
}

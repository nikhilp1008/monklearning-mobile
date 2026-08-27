/**
 * M11 Ch04 · Section 1 — "Why complex numbers exist, and what i really is"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — opens subtopic 1 (Algebra of Complex Numbers).
 *
 * Beats (board_reveal_at_english [0, 5.8, 19.71, 40.62, 51.63, 62.81, 79.02, 89.34]):
 *  0 subtitle: why do we need complex numbers?
 *  1 anchor: x²+1=0 has no real solution
 *  2 history: number system kept growing, N → Z → Q → R
 *  3 guardrail (red-margin): i is a quarter-turn, not a ghost
 *  4 THE DIAGRAM starts: Re/Im axes, point 1, point i, arc showing ×i = 90° turn
 *  5 second turn: point -1, arc i→-1, land i×i=i²=-1
 *  6 full cycle: point -i, arc -1→-i, dashed close-the-loop, land i⁴=1 repeats/4
 *  7 the address: generic point z=a+ib plotted, drop lines to both axes labeled a, b
 *
 * Layout plan (all beat 0-3 centered at x540, diagram is one built object beat 4-7):
 *  b0 | subtitle (15,amber,w700)         | T mid | x540  y90
 *  b1 | anchor line (16,ink)             | T mid | x540  y120
 *  b2 | growth line (15,ink)             | T mid | x540  y152
 *  b3 | red bar                          | Draw  | x60 y178..212
 *  b3 | guardrail text (18,red,w700)     | T st  | x76  y200
 *  b4 | axes c(540,390) 350..760/250..545| CartesianAxes (no ticks)
 *  b4 | Re/Im labels                     | T st  | (745,405) (552,258)
 *  b4 | O dot                            | circle| (540,390) r3.5
 *  b4 | arrow O→1, label "1"             | Draw/T| (540,390)→(625,390)
 *  b4 | arrow O→i, label "i"             | Draw/T| (540,390)→(540,305)
 *  b4 | arc 0→90° r50 + "×i" label       | Draw/T| r105 mid-angle .785
 *  b4 | caption (14,amber_dark,script)   | T mid | x540 y565
 *  b5 | arrow O→-1, label "-1"           | Draw/T| (540,390)→(455,390)
 *  b5 | arc 90°→180° r50 + "×i" label    | Draw/T| r105 mid-angle 2.356
 *  b5 | chip "i × i = i² = -1"           | Chip  | x370..560 y490..526
 *  b6 | arrow O→-i, label "-i"           | Draw/T| (540,390)→(540,475)
 *  b6 | arc 180°→270° r50                | Draw  |
 *  b6 | dashed close arc 270°→360° muted | Draw  |
 *  b6 | chip "i⁴ = 1 — repeats every 4"  | Chip  | x570..760 y490..526
 *  b7 | point z r145 theta.25 + dot      | Draw/circle | (680.5,354.1)
 *  b7 | drop lines to both axes (dashed) | Draw  |
 *  b7 | labels a, b, "z = a + ib"        | T     |
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, lineD } from "./math-kit";

const CX = 540;
const CY = 390;
const R1 = 85; // radius for 1, i, -1, -i
const P1 = pointOnCircle(CX, CY, R1, 0);
const PI = pointOnCircle(CX, CY, R1, Math.PI / 2);
const PM1 = pointOnCircle(CX, CY, R1, Math.PI);
const PMI = pointOnCircle(CX, CY, R1, -Math.PI / 2);
const ARC1_LABEL = pointOnCircle(CX, CY, 105, 0.785);
const ARC2_LABEL = pointOnCircle(CX, CY, 105, 2.356);

const RZ = 145;
const THETA_Z = 0.25;
const Z = pointOnCircle(CX, CY, RZ, THETA_Z);
const FOOT_X = { x: Z.x, y: CY };
const FOOT_Y = { x: CX, y: Z.y };

export default function M11Ch04Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Why Complex Numbers Exist, and What i Really Is", "Complex Numbers Kyun Bane, aur i Kya Hai")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Why do we need complex numbers?", "Complex numbers ki zaroorat kyun padi?")}
        </T>
      </Fade>

      {/* beat 1 — anchor: no real solution */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={16} fill={INK} anchor="middle">
          {t(
            "x² + 1 = 0 has no real solution: no real number squares to a negative.",
            "x² + 1 = 0 ka real solution nahi hai: koi bhi real number square hoke negative nahi banta."
          )}
        </T>
      </Fade>

      {/* beat 2 — history: the number system kept growing */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={15} fill={INK} anchor="middle">
          {t(
            "Every time an equation refused to solve, the number system grew: N → Z → Q → R",
            "Jab bhi equation atakti, number system bada hota gaya: N → Z → Q → R"
          )}
        </T>
      </Fade>

      {/* beat 3 — guardrail: i is a quarter-turn, not a ghost */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 60 178 L 60 212" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={200} size={18} fill={RED} anchor="start" weight={700}>
          {t("i is a quarter-turn, not a ghost.", "i ek quarter-turn hai, koi ghost nahi.")}
        </T>
      </Fade>

      {/* beat 4 — THE DIAGRAM begins: Argand axes + point 1 + point i + first turn */}
      <CartesianAxes on={beat >= 4} delay={dl(4, 0)} originX={CX} originY={CY} xLeft={350} xRight={760} yTop={250} yBottom={545} showTicks={false} />
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={745} y={405} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={258} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(CX, CY, P1.x, P1.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={P1.x + 12} y={P1.y + 20} size={14} fill={INK} anchor="start" weight={700}>1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(CX, CY, PI.x, PI.y)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={PI.x - 18} y={PI.y - 8} size={14} fill={GREEN} anchor="middle" weight={700}>i</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={angleArcD(CX, CY, 50, 0, Math.PI / 2)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={ARC1_LABEL.x} y={ARC1_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>×i</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={540} y={565} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Multiplying by i rotates 90° anticlockwise", "i se multiply karo, 90° anticlockwise ghoom jaata hai")}
        </T>
      </Fade>

      {/* beat 5 — second turn: i × i = -1 */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={arrowD(CX, CY, PM1.x, PM1.y)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={PM1.x - 16} y={PM1.y + 20} size={14} fill={RED} anchor="start" weight={700}>-1</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={angleArcD(CX, CY, 50, Math.PI / 2, Math.PI)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={ARC2_LABEL.x} y={ARC2_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>×i</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <Chip x={370} y={490} w={190} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16} script={false}>
          i × i = i² = -1
        </Chip>
      </Fade>

      {/* beat 6 — full cycle: i⁴ = 1 */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={arrowD(CX, CY, PMI.x, PMI.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={PMI.x + 16} y={PMI.y - 6} size={14} fill={INK} anchor="start" weight={700}>-i</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={angleArcD(CX, CY, 50, Math.PI, 1.5 * Math.PI)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={angleArcD(CX, CY, 50, 1.5 * Math.PI, 2 * Math.PI)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={570} y={490} w={190} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          {t("i⁴ = 1 — repeats every 4", "i⁴ = 1 — har 4 step pe repeat")}
        </Chip>
      </Fade>

      {/* beat 7 — the address: z = a + ib */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={lineD(CX, CY, Z.x, Z.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Circle cx={Z.x} cy={Z.y} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={lineD(Z.x, Z.y, FOOT_X.x, FOOT_X.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={lineD(Z.x, Z.y, FOOT_Y.x, FOOT_Y.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={FOOT_X.x - 18} y={(Z.y + CY) / 2 + 4} size={13} fill={INK} anchor="middle">a</T>
        <T x={(CX + Z.x) / 2} y={FOOT_Y.y - 10} size={13} fill={INK} anchor="middle">b</T>
        <T x={Z.x + 14} y={Z.y - 10} size={14} fill={INK} anchor="start" weight={700}>z = a + ib</T>
      </Fade>
    </Scene>
  );
}

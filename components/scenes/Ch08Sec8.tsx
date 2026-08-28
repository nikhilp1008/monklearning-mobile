/**
 * Ch08 · Section 8 — "Reading the stress-strain curve"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 0..3 and hi beats 4..6 are compressed to ~1s — short
 * delays there, elements settle near-instantly rather than stagger long.
 *
 * One diagram builds through the whole scene: the master stress-strain curve.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 15.03, 27.06, 42.0, 58.04]):
 *  0 axes (σ up, ε right)
 *  1 elastic/plastic shaded bands + the full curve shape
 *  2 dot at P + slope tick + "slope = Y"
 *  3 dot at E — elastic limit
 *  4 dot at Yield — permanent deformation begins
 *  5 dot at Ultimate (peak) + fracture mark
 *  6 red margin note + a short brittle curve/fracture for contrast
 *  7 shaded area under the curve = energy/volume
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | y-axis           | Draw | x150 y130..470
 *  b0 | x-axis            | Draw | x150..970 y470
 *  b0 | σ/ε labels (16)   | T    | x104..120 bl140 / x990..1006 bl475
 *  b1 | elastic band      | Fade | x150..270 y140..470
 *  b1 | plastic band      | Fade | x270..720 y140..470
 *  b1 | curve             | Draw | x150..720 y220..470
 *  b2 | P dot             | Fade | c(265,302) r4
 *  b2 | slope tick        | Draw | x210..240 y385..415
 *  b2 | slope label (12)  | T st | x245..380 bl390 (y379..394)
 *  b2 | P label (11)      | T end| x235..250 bl302 (y293..306)
 *  b3 | E dot             | Draw | c(281,290) r4
 *  b3 | E label (11)      | T st | x295..430 bl270 (y261..274)
 *  b4 | Yield dot         | Draw | c(330,260) r4
 *  b4 | Yield label (11)  | T st | x345..450 bl245 (y236..249)
 *  b5 | Ultimate dot      | Draw | c(650,220) r4
 *  b5 | Ultimate lbl (11) | T mid| x628..672 bl200 (y191..204)
 *  b5 | Fracture X        | Draw | x716..724+overhang c(720,290)
 *  b5 | Fracture lbl (11) | T st | x740..784 bl290 (y281..294)
 *  b6 | brittle curve     | Draw | (270,300)→(308,283)
 *  b6 | brittle X         | Draw | c(308,283) box16
 *  b6 | brittle lbl (10)  | T mid| x283..318 bl310 (y302..313)
 *  b6 | margin bar         | Draw | x60 y528..556
 *  b6 | note (14)          | T st | x76..476 bl548 (y528..556)
 *  b7 | area fill          | Fade | polygon under O..Yield
 *  b7 | underline          | Draw | x170..230 y444..452
 *  b7 | area label (10)    | T mid| x175..270 bl430 (y422..433)
 *  b7 | closing (13)       | T mid| x344..736 bl588 (y571..595)
 */

import React from "react";
import { Circle, Polygon, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const CURVE_D =
  "M150 470 L270 300 Q290 285 330 260 C 420 235, 560 218, 650 220 C 680 222, 705 240, 720 290";

export default function Ch08Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("reading the stress-strain curve, left to right", "stress-strain curve — left se right padhna")}
        </T>
      </Fade>

      {/* beat 0 — the axes */}
      <Draw on={beat >= 0} delay={dl(0, 0.15)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={120} y={140} size={16} fill={INK} weight={800} anchor="end">
          σ
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={arrowD(150, 470, 970, 470)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <T x={990} y={475} size={16} fill={INK} weight={800} anchor="start">
          ε
        </T>
      </Fade>

      {/* beat 1 — elastic/plastic bands + the full curve */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Rect x={150} y={140} width={120} height={330} fill={GREEN} opacity={0.12} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={270} y={140} width={450} height={330} fill={AMBER} opacity={0.12} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={CURVE_D} stroke={INK} sw={2.6} dur={0.9} />

      {/* beat 2 — O to P: straight line, slope = Y */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Circle cx={265} cy={302} r={4} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M210 415 L210 385 L240 385" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.65)}>
        <T x={245} y={390} size={12} fill={AMBER_DARK} weight={600} anchor="start">
          {t("slope = Y", "slope = Y")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={250} y={302} size={11} fill={AMBER_DARK} weight={700} anchor="end">
          P
        </T>
      </Fade>

      {/* beat 3 — E: elastic limit */}
      <Fade on={beat >= 3} delay={0}>
        <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M281 290 A4 4 0 1 1 280.9 290" stroke={AMBER_DARK} sw={1.8} dur={0.3} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={295} y={270} size={11} fill={AMBER_DARK} weight={700} anchor="start">
          {t("E: elastic limit", "E: elastic limit")}
        </T>
      </Fade>

      {/* beat 4 — Yield: permanent deformation begins */}
      <Fade on={beat >= 4} delay={0}>
        <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M330 260 A4 4 0 1 1 329.9 260" stroke={RED} sw={1.8} dur={0.3} fill={RED} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={345} y={245} size={11} fill={RED} weight={700} anchor="start">
          {t("Yield: strain jumps", "Yield: strain jump")}
        </T>
      </Fade>

      {/* beat 5 — Ultimate strength, then fracture */}
      <Fade on={beat >= 5} delay={0}>
        <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M650 220 A4 4 0 1 1 649.9 220" stroke={RED} sw={1.8} dur={0.3} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={650} y={200} size={11} fill={RED} weight={700}>
          {t("Ultimate", "Ultimate")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={crossD(712, 282, 16, 16)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={740} y={290} size={11} fill={RED} weight={700} anchor="start">
          {t("Fracture", "Fracture")}
        </T>
      </Fade>

      {/* beat 6 — ductile vs brittle */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M270 300 L308 283" stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={crossD(300, 275, 16, 16)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={300} y={310} size={10} fill={MUTED}>
          {t("brittle", "brittle")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={548} size={14} fill={RED} script anchor="start">
          {t("ductile: long plastic region · brittle: fractures fast", "ductile: lamba plastic region · brittle: turant fracture")}
        </T>
      </Fade>

      {/* beat 7 — area under the curve = energy per volume */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Polygon points="150,470 270,300 290,285 330,260 330,470" fill={GREEN} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M170 448 Q200 452 230 448" stroke={GREEN} sw={1.6} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={222} y={430} size={10} fill={GREEN} weight={700}>
          {t("energy / volume", "energy / volume")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={582} size={13} fill={GREEN} script>
          {t("area under the curve = energy absorbed per unit volume", "curve ke neeche ka area = energy per unit volume")}
        </T>
      </Fade>
    </Scene>
  );
}

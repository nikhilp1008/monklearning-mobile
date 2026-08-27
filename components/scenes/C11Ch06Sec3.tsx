/**
 * C11 Ch06 · Section 3 — "Reversible reactions reach one destination"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.97, 6.97, 7.97, 8.97, 9.97, 10.97]):
 *  0 title + underline
 *  1 LEFT: sealed-vessel box, H2 + I2 diatomic icons drawn
 *  2 LEFT: ⇌ appears, 2 HI icons form (both reactions running at once)
 *  3 LEFT: stamp H2(g) + I2(g) ⇌ 2HI(g)
 *  4 LEFT: guardrail — closed + reversible ⇒ always reaches equilibrium
 *  5 RIGHT: THE DEMO — twin curves (start from reactants / start from
 *    product) converge on the same equilibrium [H2]
 *  6 RIGHT: K (how far) vs rate (how fast) — independent, two chips
 *
 * Layout plan (two columns; longer language counts):
 *  b0 | title (script 26, red)     | T mid  | x210..870  y30..92  (bl 64)
 *  b1 | vessel box                 | Draw   | x90..460  y150..250
 *  b1 | H2 icon + "+" + I2 icon    | Fade   | x115..222 y189..201
 *  b1 | "H2"/"I2" labels           | T      | y217..228
 *  b2 | "⇌" + 2×HI icon + "2"      | Fade   | x260..411 y189..201
 *  b2 | "2 HI" label               | T mid  | x351..383 y217..228
 *  b3 | equation chip (18, ink)    | T mid  | x172..379 y275..294 (bl 290)
 *  b4 | guardrail (15, muted)      | T st   | x60..506  y309..328 (bl 325)
 *  b5 | axes + eq-line + 2 curves  | Draw   | x600..1031 y140..330
 *  b5 | curve/axis labels          | T      | size12-13, flanking
 *  b6 | "K → how FAR" chip         | Chip   | x600..740 y350..394
 *  b6 | "rate → how FAST" chip     | Chip   | x770..950 y350..394
 *  b6 | "independent!" (14, red)   | T mid  | x680..880 y410..432 (bl 428)
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
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

export default function C11Ch06Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t(
            "same equilibrium, whichever gate you enter",
            "same equilibrium, kisi bhi raste se"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — sealed vessel with H2 + I2 */}
      <Draw
        on={beat >= 1}
        d="M 90 150 H 460 V 250 H 90 Z"
        stroke={INK}
        sw={2.4}
        dur={beat > 1 ? 0.3 : 1}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Line x1={121} y1={195} x2={139} y2={195} stroke={INK} strokeWidth={2} />
        <Circle cx={121} cy={195} r={6} fill={INK} />
        <Circle cx={139} cy={195} r={6} fill={INK} />
        <T x={130} y={228} size={12} fill={MUTED}>H₂</T>

        <T x={170} y={200} size={20} fill={INK} anchor="middle">+</T>

        <Line x1={198} y1={195} x2={222} y2={195} stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={198} cy={195} r={7} fill={AMBER_DARK} />
        <Circle cx={222} cy={195} r={7} fill={AMBER_DARK} />
        <T x={210} y={228} size={12} fill={MUTED}>I₂</T>
      </Fade>

      {/* beat 2 — ⇌ both reactions running at once, 2 HI forms */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={270} y={202} size={26} fill={INK} anchor="middle">⇌</T>
        <T x={315} y={200} size={15} fill={INK} anchor="middle">2</T>
        <Line x1={331} y1={195} x2={349} y2={195} stroke={INK} strokeWidth={2} />
        <Circle cx={331} cy={195} r={6} fill={INK} />
        <Circle cx={349} cy={195} r={7} fill={AMBER_DARK} />
        <Line x1={386} y1={195} x2={404} y2={195} stroke={INK} strokeWidth={2} />
        <Circle cx={386} cy={195} r={6} fill={INK} />
        <Circle cx={404} cy={195} r={7} fill={AMBER_DARK} />
        <T x={367} y={228} size={12} fill={MUTED}>2 HI</T>
      </Fade>

      {/* beat 3 — stamp the equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={275} y={290} size={18} fill={INK} weight={700} anchor="middle">
          H₂(g) + I₂(g) ⇌ 2HI(g)
        </T>
      </Fade>

      {/* beat 4 — guardrail */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={60} y={325} size={15} fill={MUTED} script anchor="start">
          {t(
            "closed + reversible → always reaches equilibrium",
            "closed + reversible → hamesha equilibrium tak"
          )}
        </T>
      </Fade>

      {/* beat 5 — THE DEMO: same destination, either starting gate */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d={arrowD(600, 310, 1020, 310)}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={arrowD(600, 310, 600, 140)}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={1020} y={330} size={13} fill={MUTED} anchor="middle">
          {t("time", "time")}
        </T>
        <T x={590} y={145} size={13} fill={MUTED} anchor="end">
          [H₂]
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Line x1={600} y1={225} x2={1010} y2={225} stroke={AMBER} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.8)}
        d="M 620 155 C 700 160, 780 210, 820 225 L 1010 225"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.6)}
        d="M 620 300 C 700 290, 780 240, 820 225 L 1010 225"
        stroke={GREEN}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={625} y={145} size={12} fill={AMBER_DARK} anchor="start">
          {t("start: pure H2 + I2", "start: pure H2 + I2")}
        </T>
        <T x={625} y={308} size={12} fill={GREEN} anchor="start">
          {t("start: pure HI", "start: pure HI")}
        </T>
        <T x={915} y={210} size={12} fill={AMBER_DARK} anchor="middle">
          {t("same equilibrium value", "same equilibrium value")}
        </T>
      </Fade>

      {/* beat 6 — K (extent) vs rate (speed): independent */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={600} y={350} w={140} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("K → how FAR", "K → kitna aage")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={770} y={350} w={180} h={44} fill={CREAM} stroke={MUTED} textFill={INK} size={15} script={false}>
          {t("rate → how FAST", "rate → kitni fast")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={780} y={428} size={14} fill={RED} script anchor="middle">
          {t("independent of each other!", "dono ek dusre se independent!")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Chemistry Ch03 · Section 21 — "Electron gain enthalpy and the F versus Cl surprise"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.26, 19.97, 31.66, 47.02, 63.74, 77.91, 92.25]):
 *  0 title + underline
 *  1 definition, one line
 *  2 equation: X(g) + e⁻ → X⁻(g), ΔegH
 *  3 usually negative; more negative = stronger pull; units kJ/mol
 *  4 trend: more negative across period, less negative down group
 *  5 red-margin: SURPRISE — Cl releases MORE energy than F
 *  6 F: cramped 2p in a tight n=2 shell ⇒ repulsion (small circle)
 *  7 Cl: roomier n=3 shell ⇒ less repulsion ⇒ more negative EGE (big circle)
 *
 * Layout plan:
 *  b1 | definition (13, ink)        | T mid | x?..?    y93..106 (bl 100)
 *  b2 | equation (14,w700,ink)      | T mid | x?..?    y117..129 (bl 124)
 *  b3 | negative line (13, ink)     | T mid | x?..?    y141..153 (bl 148)
 *  b4 | trend (13,w700,amber_dark)  | T mid | x?..?    y165..177 (bl 172)
 *  b5 | red margin bar + line       | Draw  | x70 y190..222 (bl 210)
 *  b6 | F circle r28 + arrow        | Draw  | c(280,320); labels bl372/390
 *  b7 | Cl circle r42 + arrow       | Draw  | c(750,320); labels bl386/404
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("electron gain enthalpy: the F vs Cl surprise", "electron gain enthalpy: F vs Cl surprise")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("enthalpy change when 1 mole gaseous atoms each gain an electron", "1 mole gaseous atoms har ek electron paate hain, uski enthalpy change")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={124} size={14} weight={700} fill={INK}>
          {"X(g) + e⁻ → X⁻(g)   ΔegH"}
        </T>
      </Fade>

      {/* beat 3 — sign and units */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={148} size={13} fill={INK}>
          {t("usually negative (released); more negative = stronger pull; units kJ/mol", "aam taur pe negative (released); zyada negative = strong pull; kJ/mol")}
        </T>
      </Fade>

      {/* beat 4 — the trend */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={172} size={13} weight={700} fill={AMBER_DARK}>
          {t("across period: more negative · down group: less negative", "period ke across: zyada negative · group mein neeche: kam negative")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the surprise */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 190 L 70 222" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={210} size={16} weight={700} fill={RED} anchor="start">
          {t("SURPRISE: Cl releases MORE energy than F on gaining e⁻", "SURPRISE: Cl, F se zyada energy release karta e⁻ paane par")}
        </T>
      </Fade>

      {/* beat 6 — F: cramped, tight n=2 shell */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={280} y={254} size={13} weight={800} fill={INK}>
          {t("F: n=2 shell", "F: n=2 shell")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Circle cx={280} cy={320} r={28} fill={AMBER} fillOpacity={0.35} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={arrowD(210, 320, 248, 320)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={280} y={372} size={11} fill={RED}>
          {t("cramped ⇒ repulsion", "cramped ⇒ repulsion")}
        </T>
        <T x={280} y={390} size={11} fill={MUTED}>ΔegH ≈ −328 kJ/mol</T>
      </Fade>

      {/* beat 7 — Cl: roomier n=3 shell */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={750} y={254} size={13} weight={800} fill={INK}>
          {t("Cl: n=3 shell", "Cl: n=3 shell")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Circle cx={750} cy={320} r={42} fill={GREEN} fillOpacity={0.22} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d={arrowD(680, 320, 704, 320)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={750} y={386} size={11} fill={GREEN}>
          {t("roomier ⇒ less repulsion", "roomier ⇒ kam repulsion")}
        </T>
        <T x={750} y={404} size={11} weight={700} fill={GREEN}>ΔegH ≈ −349 kJ/mol</T>
      </Fade>
    </Scene>
  );
}

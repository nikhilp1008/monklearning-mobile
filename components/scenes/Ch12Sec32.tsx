/**
 * Ch12 · Section 32 — Worked example [CBSE]: rms speed of nitrogen
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.47, 27.39, 34.39, 47.19, 52.22, 67.84]):
 *  0 title + problem · 1 fix units: M=28×10⁻³kg/mol, T=300K · 2 formula
 *    vrms=√(3RT/M) · 3 substitute · 4 answer ≈517 m/s · 5 THE TRAP: g/mol not
 *    kg/mol inflates by √1000≈32× · 6 other two speeds via ratio + bars
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (14, ink, script)       | T mid | x540 y94
 *  b1 | fix-units (14, ink, script)     | T mid | x540 y126
 *  b2 | formula (16, ink)               | T mid | x540 y156
 *  b3 | substitute (14, ink)            | T mid | x540 y186
 *  b4 | answer (20, amber_dark, bold)   | T mid | x540 y220
 *  b5 | trap line (14, red) + strike    | T/Draw| x540 y258
 *  b6 | 3 bars (rms/avg/mp) + labels     | rect  | x150.. y322/350/378
 *  b6 | order caption (13, green)       | T mid | x540 y412
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("rms speed of nitrogen [CBSE]", "nitrogen ki rms speed [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} script>
          {t("N₂, M=28 g/mol, T=27°C ⇒ vrms? (R=8.314)", "N₂, M=28 g/mol, T=27°C ⇒ vrms? (R=8.314)")}
        </T>
      </Fade>

      {/* beat 1 — fix units */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={126} size={14} fill={INK} script>
          {t("fix units: M = 28×10⁻³ kg/mol, T = 300 K", "units fix karo: M = 28×10⁻³ kg/mol, T = 300 K")}
        </T>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={156} size={16} fill={INK} weight={700}>
          vrms = √(3RT/M)
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={186} size={14} fill={INK}>
          = √(3×8.314×300 / 28×10⁻³) = √(2.672×10⁵)
        </T>
      </Fade>

      {/* beat 4 — answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={220} size={20} fill={AMBER_DARK} weight={700}>
          ≈ 517 m/s
        </T>
      </Fade>

      {/* beat 5 — THE TRAP */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={258} size={14} fill={RED}>
          {t("g/mol not kg/mol ⇒ inflates answer by √1000 ≈ 32×!", "g/mol, kg/mol nahi ⇒ answer √1000 ≈ 32× bad jata!")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d={crossD(462, 240, 155, 22)} stroke={RED} sw={2.2} dur={0.5} />

      {/* beat 6 — the other two speeds, via ratio */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={150} y={322} width={400} height={14} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={562} y={333} size={13} fill={GREEN} anchor="start">
          vrms ≈ 517 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Rect x={150} y={350} width={368} height={14} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={530} y={361} size={13} fill={AMBER_DARK} anchor="start">
          v̄ ≈ 476 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Rect x={150} y={378} width={327} height={14} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={489} y={389} size={13} fill={MUTED} anchor="start">
          vₚ ≈ 422 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={412} size={13} fill={GREEN} script>
          {t("straight from the ratio — no recalculation needed", "seedha ratio se — recalculation ki zaroorat nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch10 · Section 52 — "The three gas laws"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,9.98,18.6,24.49,32.26,40.87,41.87] — beats 5-6 exactly 1s
 * apart, so those Fade delays stay ≤ ~0.3s):
 *  0 intro: the absolute scale starts with three experimental gas laws
 *  1 Boyle's law: fixed T, PV = constant — squeeze and pressure rises
 *  2 in symbols: PV = constant, T fixed
 *  3 Charles's law: fixed P, V/T = constant
 *  4 Gay-Lussac's law: fixed V, P/T = constant
 *  5 each law holds a DIFFERENT variable fixed — don't mix them up
 *  6 together, these build the road to absolute temperature
 *
 * Layout plan (thirds x=210/540/870, strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl90
 *  b1 | piston x170..230 y115..155 · label mid x210 bl175
 *  b2 | boyle formula mid x210 bl200
 *  b3 | balloon x520..560 y110..170 · label mid x540 bl175 ·
 *       charles formula mid x540 bl200
 *  b4 | box x840..900 y115..155 + gauge · label mid x870 bl175 ·
 *       gay-lussac formula mid x870 bl200
 *  b5 | discipline mid x540 bl240
 *  b6 | takeaway mid x540 bl280
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("the three gas laws", "teen gas laws")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("the absolute scale starts with three experimental gas laws", "absolute scale teen experimental gas laws se shuru hoti")}
        </T>
      </Fade>

      {/* beat 1 — Boyle's law, the piston */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M170 115 h60 v40 h-60 z M200 155 v15" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={210} y={175} size={12} fill={RED} weight={700} anchor="middle">{t("Boyle", "Boyle")}</T>
      </Fade>

      {/* beat 2 — Boyle in symbols */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={210} y={200} size={12} fill={INK} anchor="middle">
          PV=const (T {t("fixed", "fixed")})
        </T>
      </Fade>

      {/* beat 3 — Charles's law, the balloon */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M540 110 q-22 2 -22 27 q0 25 22 33 q22 -8 22 -33 q0 -25 -22 -27" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M540 170 v10" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={200} size={12} fill={AMBER_DARK} weight={700} anchor="middle">{t("Charles: V/T=const (P fixed)", "Charles: V/T=const (P fixed)")}</T>
      </Fade>

      {/* beat 4 — Gay-Lussac's law, sealed container */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M840 120 h60 v40 h-60 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M862 108 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 M870 108 v-4" stroke={GREEN} sw={1.6} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.75)}>
        <T x={870} y={200} size={12} fill={GREEN} weight={700} anchor="middle">{t("Gay-Lussac: P/T=const (V fixed)", "Gay-Lussac: P/T=const (V fixed)")}</T>
      </Fade>

      {/* beat 5 — the discipline */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={540} y={240} size={13} fill={RED} script weight={700} anchor="middle">
          {t("each law fixes a DIFFERENT variable — don't mix them up", "har law ek ALAG variable fix karta — mat ghulao")}
        </T>
      </Fade>

      {/* beat 6 — the road to absolute temperature */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={280} size={13} fill={INK} script weight={700} anchor="middle">
          {t(
            "together, these build the road to absolute temperature",
            "saath mein, yeh absolute temperature ka raasta banate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

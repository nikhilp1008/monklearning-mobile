/**
 * C11 Ch07 · Section 33 — "Competitive electron transfer, the reactivity series, and two cautions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.05, 25.51, 44.63, 58.28, 76.8, 85.76, 92.84]):
 *  0 heading: the tug-of-war for electrons
 *  1 Zn+CuSO₄: who wants e⁻ more? Cu wins → Cu deposits, Zn dissolves
 *  2 rank metals → REACTIVITY (ACTIVITY) SERIES
 *  3 same for non-metals: Cl₂ frees Br₂ from a bromide
 *  4 red-margin caution 1: not every combination/decomposition is redox — CaO+CO₂→CaCO₃
 *  5 red-margin caution 2: disproportionation needs an intermediate O.N.
 *  6 always assign O.N. and check for a change before classifying
 *  7 element at max/min (Mn in MnO₄⁻) cannot disproportionate
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | line (sans15)             | T mid | x540 bl134
 *  b2 | line (sans16)             | T mid | x540 bl168
 *  b3 | line (sans15)             | T mid | x540 bl202
 *  b4 | margin bar x64 y226..262, text (sans15 red) x80 bl244
 *  b5 | margin bar x64 y286..322, text (sans15 red) x80 bl304
 *  b6 | line (sans16)             | T mid | x540 bl356
 *  b7 | line (sans15)             | T mid | x540 bl390
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
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("who wants the electrons more? that decides everything", "electrons kaun zyada chahta hai? yahi sab decide karta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the tug-of-war for electrons", "electrons ke liye tug-of-war")}
        </T>
      </Fade>

      {/* ===== beat 1 — Zn/Cu example ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          {t(
            "Zn + CuSO₄: who wants the e⁻ more? Cu wins → Cu deposits, Zn dissolves",
            "Zn + CuSO₄: e⁻ kaun zyada chahta? Cu jeetta → Cu deposit, Zn dissolve"
          )}
        </T>
      </Fade>

      {/* ===== beat 2 — reactivity series ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={16} fill={INK} weight={700}>
          {t("rank by how easily metals give up e⁻ → the REACTIVITY SERIES", "kitni aasani se e⁻ dete hain rank karo → REACTIVITY SERIES")}
        </T>
      </Fade>

      {/* ===== beat 3 — non-metals too ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={15} fill={INK}>
          {t(
            "same for non-metals: Cl₂ frees Br₂ from a bromide (more reactive halogen wins)",
            "non-metals ke liye bhi: Cl₂, Br₂ ko bromide se free karta (zyada reactive halogen jeetta)"
          )}
        </T>
      </Fade>

      {/* ===== beat 4 — caution 1 ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 64 226 L 64 262" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={244} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "caution 1: not every combination/decomposition is redox — CaO+CO₂→CaCO₃, no O.N. change",
            "caution 1: har combination/decomposition redox nahi — CaO+CO₂→CaCO₃, O.N. change nahi"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — caution 2 ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 64 286 L 64 322" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={304} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "caution 2: disproportionation needs an INTERMEDIATE O.N. (higher AND lower both available)",
            "caution 2: disproportionation ko INTERMEDIATE O.N. chahiye (higher AND lower dono available)"
          )}
        </T>
      </Fade>

      {/* ===== beat 6 — the safe habit ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={356} size={16} fill={AMBER_DARK} weight={700}>
          {t("always assign O.N. and check for a change — before you classify", "hamesha O.N. assign karo, change check karo — classify se pehle")}
        </T>
      </Fade>

      {/* ===== beat 7 — max/min can't disproportionate ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={390} size={15} fill={MUTED}>
          {t(
            "an element at its max/min (Mn in MnO₄⁻) cannot disproportionate — nowhere to climb or fall",
            "max/min pe baitha element (MnO₄⁻ ka Mn) disproportionate nahi ho sakta — kahin jaana hi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

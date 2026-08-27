/**
 * Ch01 · Section 91 — "The whole chapter, in formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en, 10): [0, 10.9, 35.8, 51.6, 58.5, 82.9, 104.1, 121.2, 144.2, 166.8]
 *  0 title · 1 units/dims eq · 2 homogeneity · 3 errors header · 4 mean/Δā/% ·
 *  5 combination rules · 6 sig figs line · 7 instruments · 8 indirect lengths ·
 *  9 the units strip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  labels 11 muted st x60 · eqs 15 st x160
 *  b1 bl 96 · b2 bl 126 · b3+b4 bl 168 (sub 196) · b5 bl 234 · b6 bl 274 · b7 bl 314 · b8 bl 354
 *  b9 | box x60..1020 y384..556 · rows bl 416/444/472/500/528
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
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec91({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const label = (text: string, bl: number, k: number) => (
    <Fade on={beat >= k} delay={dl(k, 0.5)}>
      <T x={60} y={bl} size={11} fill={MUTED} anchor="start">{text}</T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "the whole chapter, in formulas — six subtopics, one board",
            "poora chapter, formulas mein — chhe subtopics, ek board"
          )}
        </T>
      </Fade>

      {/* beat 1 — units & dimensions */}
      {label(t("UNITS", "UNITS"), 96, 1)}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={160} y={96} size={15} fill={INK} weight={600} anchor="start">
          [Q] = Mᵃ Lᵇ Tᶜ   ·   n₁u₁ = n₂u₂ — {t("the ratios carry the powers a, b, c", "anupaat powers a, b, c saath le jaate")}
        </T>
      </Fade>

      {/* beat 2 — homogeneity */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={160} y={126} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "homogeneity: every term carries the same dimensions — check any formula, derive a few",
            "homogeneity: har term ke dimensions ek — koi bhi formula jaancho, kuchh derive bhi karo"
          )}
        </T>
      </Fade>

      {/* beats 3–4 — errors */}
      {label(t("ERRORS", "ERRORS"), 168, 3)}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={160} y={168} size={15} fill={INK} weight={600} anchor="start">
          ā = Σaᵢ ⁄ n   ·   Δā = Σ|aᵢ − ā| ⁄ n   ·   % = (Δā ⁄ ā) × 100
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={160} y={196} size={13} fill={GREEN} script anchor="start">
          {t("report a = ā ± Δā — both halves, always", "likho a = ā ± Δā — dono aadhe, hamesha")}
        </T>
      </Fade>

      {/* beat 5 — combination rules */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={160} y={234} size={15} fill={INK} weight={600} anchor="start">
          a ± b: {t("Δ's ADD (even for −)", "Δ JUDTE hain (− mein bhi)")}   ·   x = aᵖbᵠ⁄cʳ: Δx⁄x = pΔa⁄a + qΔb⁄b + rΔc⁄c
        </T>
      </Fade>

      {/* beat 6 — sig figs */}
      {label("SIG FIGS", 274, 6)}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={160} y={274} size={15} fill={INK} weight={600} anchor="start">
          ×÷ → {t("fewest sig figs", "sabse kam sig figs")}   ·   +− → {t("fewest decimal places", "sabse kam decimal places")}   ·   {t("round ONCE, at the end", "round EK baar, aakhir mein")}
        </T>
      </Fade>

      {/* beat 7 — instruments */}
      {label(t("INSTRUMENTS", "INSTRUMENTS"), 314, 7)}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={160} y={314} size={15} fill={INK} weight={600} anchor="start">
          LC = MSD ⁄ n   ·   LC = pitch ⁄ divisions ({t("pitch FIRST", "pitch PEHLE")})   ·   corrected = observed − zero error
        </T>
      </Fade>

      {/* beat 8 — indirect lengths */}
      {label(t("INDIRECT", "INDIRECT"), 354, 8)}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={160} y={354} size={15} fill={INK} weight={600} anchor="start">
          D = b ⁄ θ   ·   d = α D   ·   D = v t ⁄ 2   ·   t = V ⁄ A — {t("angles in RADIANS", "kon RADIANS mein")}
        </T>
      </Fade>

      {/* beat 9 — the units strip */}
      <Draw
        on={beat >= 9}
        delay={dl(9, 0.8)}
        d="M 72 384 h 936 q 12 0 12 12 v 148 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -148 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 9} delay={dl(9, 2.5)}>
        <T x={100} y={416} size={14} fill={INK} weight={600} anchor="start">
          1 AU = 1.496 × 10¹¹ m
        </T>
        <T x={560} y={416} size={14} fill={INK} weight={600} anchor="start">
          1 ly = 9.46 × 10¹⁵ m
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={100} y={452} size={14} fill={INK} weight={600} anchor="start">
          1 pc = 3.08 × 10¹⁶ m = 3.26 ly
        </T>
        <T x={560} y={452} size={13} fill={AMBER_DARK} script anchor="start">
          {t("biggest unit → fewest of them", "sabse badi unit → sabse kam sankhya")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 14)}>
        <T x={100} y={488} size={14} fill={INK} weight={600} anchor="start">
          1 Å = 10⁻¹⁰ m   ·   1 fermi = 10⁻¹⁵ m
        </T>
        <T x={560} y={488} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the fermi is the smaller one", "fermi chhoti waali hai")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 20)}>
        <T x={100} y={524} size={14} fill={INK} weight={600} anchor="start">
          1 amu = 1.66 × 10⁻²⁷ kg
        </T>
        <T x={560} y={524} size={13} fill={GREEN} script anchor="start">
          {t("pure marks — keep them straight", "shuddh marks — inhe seedha rakho")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch06 · Section 55 — "Traps and pro-tips for pH and ionization"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Closes subtopic 4 (Ionic Equilibrium — Acid-Base, pH,
 * Common-Ion Effect).
 *
 * Beats (board_reveal_at_english: [0, 8.6, 22.1, 39.1, 47.5, 60.6, 72.1]):
 *  0 title + underline
 *  1 pitfall 1: very dilute (<1e-6 M) — fold in water's H+
 *  2 pitfall 2: strong polyprotic — keep the stoichiometric factor
 *  3 pitfall 3: Ostwald α>5% — discard, solve the quadratic
 *  4 pitfall 4: conjugate rule — −H+/+H+, divide for Ka↔Kb
 *  5 pro-tip 1: [H+]=m×10^-n ⇒ pH = n − log m
 *  6 pro-tip 2: sanity check — acid<7, base>7, dilution→7 never crosses
 *
 * Layout plan (two stacked lists, left-aligned x=60/80; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x220..860  y30..90  (bl 64)
 *  b1 | "✗ PITFALLS" header (14)    | T st   | x60..170  y95..109 (bl 105)
 *  b1 | pitfall 1 (15, ink)         | T st   | x80..670  y121..137 (bl 132)
 *  b2 | pitfall 2 (15, ink)         | T st   | x80..680  y151..167 (bl 162)
 *  b3 | pitfall 3 (15, ink)         | T st   | x80..610  y181..197 (bl 192)
 *  b4 | pitfall 4 (15, ink)         | T st   | x80..650  y211..227 (bl 222)
 *  —  | divider line                | Draw   | x60..1020 y246
 *  b5 | "✓ PRO-TIPS" header (14)    | T st   | x60..175  y261..275 (bl 270)
 *  b5 | tip 1 (15, ink)             | T st   | x80..560  y286..302 (bl 297)
 *  b6 | tip 2 (15, ink)             | T st   | x80..660  y316..332 (bl 327)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("traps and pro-tips: pH and ionization", "traps aur pro-tips: pH aur ionization")}
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

      {/* pitfalls header */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={60} y={105} size={14} fill={RED} weight={700} anchor="start">
          ✗ PITFALLS
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={132} size={15} fill={INK} anchor="start">
          {t(
            "✗ very dilute (<10⁻⁶ M): fold in water's H⁺ — settles near 7",
            "✗ bahut dilute (<10⁻⁶ M): water ka H⁺ fold karo — 7 ke paas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={162} size={15} fill={INK} anchor="start">
          {t(
            "✗ strong polyprotic: keep the stoichiometric factor",
            "✗ strong polyprotic: stoichiometric factor mat bhoolo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={192} size={15} fill={INK} anchor="start">
          {t(
            "✗ Ostwald α > 5%: discard it, solve the full quadratic",
            "✗ Ostwald α > 5%: discard karo, full quadratic solve karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={222} size={15} fill={INK} anchor="start">
          {t(
            "✗ conjugate rule: −H⁺/+H⁺; convert Ka↔Kb by DIVIDING",
            "✗ conjugate rule: −H⁺/+H⁺; Ka↔Kb ke liye DIVIDE karo"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 60 246 H 1020" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* pro-tips header */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={60} y={270} size={14} fill={GREEN_DARK} weight={700} anchor="start">
          ✓ PRO-TIPS
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={297} size={15} fill={INK} anchor="start">
          {t("✓ [H⁺] = m×10⁻ⁿ ⇒ pH = n − log m", "✓ [H⁺] = m×10⁻ⁿ ⇒ pH = n − log m")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={80} y={327} size={15} fill={INK} anchor="start">
          {t(
            "✓ sanity check: acid < 7, base > 7, dilution → 7 never crosses",
            "✓ sanity check: acid < 7, base > 7, dilution → 7, cross nahi karta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

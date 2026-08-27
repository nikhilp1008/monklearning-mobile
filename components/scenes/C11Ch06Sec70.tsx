/**
 * C11 Ch06 · Section 70 — "Traps and pro-tips for buffers, Ksp and hydrolysis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Closes subtopic 5 (Buffers, Ksp & Salt Hydrolysis) and
 * the chapter's numerical heartland.
 *
 * Beats (board_reveal_at_english: [0, 7.3, 19.2, 33.5, 44.9, 54.4, 64.3]):
 *  0 title + underline
 *  1 pitfall 1: not every salt solution is neutral — only strong+strong is
 *  2 pitfall 2: no plain √ for non-1:1 salts — CaF2 needs 4s³, Fe(OH)3 needs 27s⁴
 *  3 pitfall 3: mixing equal volumes — HALVE concentrations before computing Q
 *  4 pitfall 4: plug the RATIO into Henderson, not absolute amounts
 *  5 pro-tip 1: pH = pKa at half-equivalence; dilution barely moves buffer pH
 *  6 pro-tip 2: for hydrolysis, classify the salt first, then the one-line formula
 *
 * Layout plan (two stacked lists, left-aligned x=60/80; longer language counts):
 *  b0 | title (script 23, red)      | T mid  | x210..870  y30..88  (bl 64)
 *  b1 | "✗ PITFALLS" header (14)    | T st   | x60..170  y95..109 (bl 105)
 *  b1 | pitfall 1 (15, ink)         | T st   | x80..600  y121..137 (bl 132)
 *  b2 | pitfall 2 (15, ink)         | T st   | x80..720  y151..167 (bl 162)
 *  b3 | pitfall 3 (15, ink)         | T st   | x80..650  y181..197 (bl 192)
 *  b4 | pitfall 4 (15, ink)         | T st   | x80..600  y211..227 (bl 222)
 *  —  | divider line                | Draw   | x60..1020 y246
 *  b5 | "✓ PRO-TIPS" header (14)    | T st   | x60..175  y261..275 (bl 270)
 *  b5 | tip 1 (15, ink)             | T st   | x80..680  y286..302 (bl 297)
 *  b6 | tip 2 (15, ink)             | T st   | x80..680  y316..332 (bl 327)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("traps and pro-tips: buffers, Ksp, hydrolysis", "traps aur pro-tips: buffers, Ksp, hydrolysis")}
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
            "✗ not every salt solution is neutral — only strong+strong is",
            "✗ har salt solution neutral nahi — sirf strong+strong hota"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={162} size={15} fill={INK} anchor="start">
          {t(
            "✗ no plain √ for non-1:1 salts — CaF2 needs 4s³, Fe(OH)3 needs 27s⁴",
            "✗ non-1:1 salts ke liye plain √ nahi — CaF2: 4s³, Fe(OH)3: 27s⁴"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={192} size={15} fill={INK} anchor="start">
          {t(
            "✗ mixing equal volumes: HALVE concentrations before computing Q",
            "✗ equal volumes mix: Q compute karne se pehle concentrations HALVE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={222} size={15} fill={INK} anchor="start">
          {t(
            "✗ plug the RATIO into Henderson, not absolute amounts",
            "✗ Henderson mein RATIO daalo, absolute amounts nahi"
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
          {t(
            "✓ pH = pKa at half-equivalence; dilution barely moves buffer pH",
            "✓ half-equivalence par pH = pKa; dilution buffer pH bamuskil hilata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={80} y={327} size={15} fill={INK} anchor="start">
          {t(
            "✓ hydrolysis: classify the salt first, then the one-line formula",
            "✓ hydrolysis: pehle salt classify karo, phir one-line formula"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

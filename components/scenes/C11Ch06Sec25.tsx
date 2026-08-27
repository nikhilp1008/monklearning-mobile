/**
 * C11 Ch06 · Section 25 — "Pitfalls and pro-tips for Gibbs energy and K"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Closes subtopic 2 (Equilibrium Constant, Q & Gibbs Energy).
 *
 * Beats (board_reveal_at_english: [0, 5.8, 17.5, 30.4, 42.2, 54.9, 62.9]):
 *  0 title + underline
 *  1 pitfall 1: convert kJ→J before dividing by R
 *  2 pitfall 2: never confuse ΔG with ΔG°
 *  3 pitfall 3: K=e^(-ΔG°/RT) always positive; negative K = sign error
 *  4 pitfall 4: never mix ln and log
 *  5 pro-tip 1: read sign of ΔG° first, place K relative to 1
 *  6 pro-tip 2: K↑ with T = endothermic; K↓ with T = exothermic
 *
 * Layout plan (two stacked lists, left-aligned x=60/80; longer language counts):
 *  b0 | title (script 25, red)      | T mid  | x225..855  y30..90  (bl 64)
 *  b1 | "✗ PITFALLS" header (14)    | T st   | x60..170  y95..109 (bl 105)
 *  b1 | pitfall 1 (15, ink)         | T st   | x80..600  y121..137 (bl 132)
 *  b2 | pitfall 2 (15, ink)         | T st   | x80..570  y151..167 (bl 162)
 *  b3 | pitfall 3 (15, ink)         | T st   | x80..590  y181..197 (bl 192)
 *  b4 | pitfall 4 (15, ink)         | T st   | x80..630  y211..227 (bl 222)
 *  —  | divider line                | Draw   | x60..1020 y246
 *  b5 | "✓ PRO-TIPS" header (14)    | T st   | x60..175  y261..275 (bl 270)
 *  b5 | tip 1 (15, ink)             | T st   | x80..610  y286..302 (bl 297)
 *  b6 | tip 2 (15, ink)             | T st   | x80..500  y316..332 (bl 327)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("pitfalls and pro-tips: Gibbs energy and K", "pitfalls aur pro-tips: Gibbs energy aur K")}
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
            "✗ convert kJ → J before dividing by R (mixing units = ×1000 error!)",
            "✗ R se divide karne se pehle kJ → J convert karo (nahi to ×1000 error!)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={162} size={15} fill={INK} anchor="start">
          {t(
            "✗ never confuse ΔG with ΔG° — only ΔG° goes into −RT ln K",
            "✗ ΔG aur ΔG° ko kabhi confuse mat karo — sirf ΔG° −RT ln K mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={192} size={15} fill={INK} anchor="start">
          {t(
            "✗ K = e^(−ΔG°/RT) is always positive — negative K = sign error",
            "✗ K = e^(−ΔG°/RT) hamesha positive — negative K matlab sign error"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={222} size={15} fill={INK} anchor="start">
          {t(
            "✗ never mix ln and log — −RT ln K or −2.303RT log K, never −RT log K",
            "✗ ln aur log mat mix karo — −RT ln K ya −2.303RT log K, kabhi −RT log K nahi"
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
            "✓ read the sign of ΔG° first, place K relative to 1 before any arithmetic",
            "✓ pehle ΔG° ka sign padho, arithmetic se pehle K ko 1 ke relative rakho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={80} y={327} size={15} fill={INK} anchor="start">
          {t(
            "✓ K↑ with T ⇒ endothermic;  K↓ with T ⇒ exothermic",
            "✓ K↑ with T ⇒ endothermic;  K↓ with T ⇒ exothermic"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

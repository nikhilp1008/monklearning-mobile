/**
 * C11 Ch06 · Section 39 — "Traps and pro-tips for Le Chatelier"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Closes subtopic 3 (Le Chatelier's Principle & Factors).
 *
 * Beats (board_reveal_at_english: [0, 6.6, 15.8, 25.2, 37.3, 47.2, 58.4]):
 *  0 title + underline
 *  1 pitfall 1: inert gas rule (const V no shift; const P more moles)
 *  2 pitfall 2: never credit catalyst with yield/K
 *  3 pitfall 3: apply pressure shift only if Δn(gas)≠0
 *  4 pitfall 4: temperature = the ONLY factor that changes K
 *  5 pro-tip 1: write heat as product/reactant, treat ΔT like concentration
 *  6 pro-tip 2: "maximize yield" — separate genuine levers from catalyst
 *
 * Layout plan (two stacked lists, left-aligned x=60/80; longer language counts):
 *  b0 | title (script 25, red)      | T mid  | x210..870  y30..90  (bl 64)
 *  b1 | "✗ PITFALLS" header (14)    | T st   | x60..170  y95..109 (bl 105)
 *  b1 | pitfall 1 (15, ink)         | T st   | x80..640  y121..137 (bl 132)
 *  b2 | pitfall 2 (15, ink)         | T st   | x80..600  y151..167 (bl 162)
 *  b3 | pitfall 3 (15, ink)         | T st   | x80..680  y181..197 (bl 192)
 *  b4 | pitfall 4 (15, ink)         | T st   | x80..560  y211..227 (bl 222)
 *  —  | divider line                | Draw   | x60..1020 y246
 *  b5 | "✓ PRO-TIPS" header (14)    | T st   | x60..175  y261..275 (bl 270)
 *  b5 | tip 1 (15, ink)             | T st   | x80..640  y286..302 (bl 297)
 *  b6 | tip 2 (15, ink)             | T st   | x80..650  y316..332 (bl 327)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("traps and pro-tips for Le Chatelier", "Le Chatelier ke traps aur pro-tips")}
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
            "✗ inert gas: const V → no shift; const P → shifts to MORE moles",
            "✗ inert gas: const V → no shift; const P → ZYADA moles ki taraf"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={162} size={15} fill={INK} anchor="start">
          {t(
            "✗ never credit catalyst with ↑yield or ↑K — only ↑rate",
            "✗ catalyst ko ↑yield ya ↑K ka credit mat do — sirf ↑rate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={192} size={15} fill={INK} anchor="start">
          {t(
            "✗ apply pressure shift only if Δn(gas)≠0 — H2+I2⇌2HI is insensitive",
            "✗ pressure shift sirf Δn(gas)≠0 par — H2+I2⇌2HI insensitive hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={222} size={15} fill={INK} anchor="start">
          {t(
            "✗ temperature = the ONLY factor that changes K",
            "✗ temperature = AKELA factor jo K badalta"
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
            "✓ write heat as product/reactant — treat ΔT like a concentration change",
            "✓ heat ko product/reactant likho — ΔT ko concentration change jaisa treat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={80} y={327} size={15} fill={INK} anchor="start">
          {t(
            "✓ 'maximise yield' Qs: separate genuine levers from the rate-only catalyst",
            "✓ 'maximise yield' Qs: genuine levers ko rate-only catalyst se alag karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

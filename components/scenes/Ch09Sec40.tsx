/**
 * Ch09 · Section 40 — "Deriving Bernoulli by work and energy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 10.06, 22.6, 30.03]):
 *  0 title (always-on)
 *  1 text: steady, incompressible, non-viscous, irrotational flow
 *  2 inclined pipe + slug at section 1 (solid) + slug at section 2 (dashed) + path
 *  3 text: pressure does net work on the slug
 *  4 formula W_pressure = (P1−P2)ΔV
 *  5 text: work-energy theorem, with gravity as the slug rises
 *  6 formula (P1−P2)ΔV − mg(h2−h1) = ½mv2² − ½mv1²
 *  7 formula (green) P1+½ρv1²+ρgh1 = P2+½ρv2²+ρgh2
 *
 * Layout plan:
 *  b2 | pipe walls (inclined)     | Draw  | (200,340)→(750,200) / (200,380)→(750,240)
 *  b2 | slug 1 (amber, solid)     | rect   | x220..280  y340..375
 *  b2 | "P₁,v₁" (12)              | T mid  | x250  bl 392
 *  b2 | slug 2 (dashed outline)   | rect   | x680..740  y205..240
 *  b2 | "P₂,v₂" (12)              | T mid  | x710  bl 195
 *  b2 | path (dashed, muted)      | Draw   | (280,357) Q (500,280) (680,222)
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 410
 *  b4 | formula (18, w700)        | T mid  | x540  bl 440
 *  b5 | text (13, script)         | T mid  | x540  bl 466
 *  b6 | formula (14, w700)        | T mid  | x540  bl 494
 *  b7 | formula (16, w800, grn)   | T mid  | x540  bl 526
 */

import React from "react";
import { Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving Bernoulli", "Bernoulli derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("steady, incompressible, non-viscous, irrotational flow", "steady, incompressible, non-viscous, irrotational flow")}
        </T>
      </Fade>

      {/* beat 2 — the rising slug */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 340 L 750 200" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 200 380 L 750 240" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Rect x={220} y={340} width={60} height={35} fill={AMBER} stroke={INK} strokeWidth={1.6} />
        <T x={250} y={392} size={12} fill={INK} anchor="middle">
          P₁, v₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Rect x={680} y={205} width={60} height={35} fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="5 4" />
        <T x={710} y={195} size={12} fill={MUTED} anchor="middle">
          P₂, v₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Draw on={beat >= 2} d="M 280 357 Q 500 280 680 222" stroke={MUTED} sw={1.8} dur={0.8} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={410} size={13} fill={MUTED} script anchor="middle">
          {t("pressure does net work on the slug", "slug pe pressure net work karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={440} size={18} fill={INK} weight={700} anchor="middle">
          W<TSpan fontSize={12} dy={4}>pressure</TSpan>
          <TSpan dy={-4}> = (P₁−P₂)ΔV</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={466} size={13} fill={MUTED} script anchor="middle">
          {t("work-energy theorem, with gravity as the slug rises", "work-energy theorem, gravity ke saath jab slug rises hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={494} size={14} fill={INK} weight={700} anchor="middle">
          (P₁−P₂)ΔV − mg(h₂−h₁) = ½mv₂² − ½mv₁²
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={526} size={16} fill={GREEN} weight={800} anchor="middle">
          P₁+½ρv₁²+ρgh₁ = P₂+½ρv₂²+ρgh₂
        </T>
      </Fade>
    </Scene>
  );
}

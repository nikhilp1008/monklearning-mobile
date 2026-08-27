/**
 * M11 Ch04 · Section 36 — "Vieta's relations and building a quadratic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 8.7, 21.25, 31.4, 40.96, 53.25, 65.02, 79.7]):
 *  0 heading: roots and coefficients — Vieta
 *  1 formula (landed, boxed): α+β = -b/a, αβ = c/a
 *  2 guardrail: mind the minus sign on the sum
 *  3 formula: x² - (α+β)x + αβ = 0
 *  4 text: to build a quadratic from roots
 *  5 text: from a real quadratic's complex root p+iq, the other is p-iq
 *  6 formula (landed, boxed): sum=2p, product=p²+q² ⇒ x²-2px+(p²+q²)=0
 *  7 text: a fully real quadratic falls out of a single complex root
 *
 * Layout plan (single derivation column, x=540):
 *  b0 | heading (15,amber_dark,w700)  | T mid | x540 y90  + underline y104
 *  b1 | boxed formula (18,ink,w700)   | Chip  | x419..661 y118..162
 *  b2 | red bar + guardrail (16,red)  | Draw/T| bar x60 y189..223, text x76 y205
 *  b3 | formula (18,ink,w700)         | T mid | x540 y263 + underline y280
 *  b4 | text (15,ink)                 | T mid | x540 y320 + underline y336
 *  b5 | text (15,ink)                 | T mid | x540 y376 + underline y392
 *  b6 | boxed formula (17,ink,w700)   | Chip  | x314.5..765.5 y420..464
 *  b7 | text (15,ink)                 | T mid | x540 y505 + underline y521
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Vieta's Relations and Building a Quadratic", "Vieta's Relations aur Quadratic Banana")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Roots and coefficients: Vieta", "Roots aur coefficients: Vieta")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(430, 104, 650, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — Vieta's relations, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={419} y={118} w={242} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          α + β = -b/a,   αβ = c/a
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: the minus sign */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 60 189 L 60 223" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={76} y={205} size={16} fill={RED} anchor="start" weight={700}>
          {t("Mind the minus sign on the sum: α+β = -b/a, not +b/a.", "Sum ka minus sign yaad rakho: α+β = -b/a, +b/a nahi.")}
        </T>
      </Fade>

      {/* beat 3 — building a quadratic from roots */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={263} size={18} fill={INK} anchor="middle" weight={700}>
          x² - (α+β)x + αβ = 0
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={lineD(446, 280, 634, 280)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 4 — the recipe in words */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={320} size={15} fill={INK} anchor="middle">
          {t("To build a quadratic: x² - (sum)x + (product) = 0.", "Quadratic banane ke liye: x² - (sum)x + (product) = 0.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(330, 336, 750, 336)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 5 — combine with the conjugate-root theorem */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={376} size={15} fill={INK} anchor="middle">
          {t(
            "From a real quadratic's complex root p+iq: the other is p-iq.",
            "Real quadratic ke complex root p+iq se: doosra hai p-iq."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(300, 392, 780, 392)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 6 — the resulting real quadratic, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={314.5} y={420} w={451} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          sum = 2p,  product = p²+q²  ⇒  x² - 2px + (p²+q²) = 0
        </Chip>
      </Fade>

      {/* beat 7 — the payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={505} size={15} fill={INK} anchor="middle">
          {t(
            "A neat, fully real quadratic falls straight out of a single complex root.",
            "Ek neat, poori real quadratic seedhe ek complex root se nikal aati hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(255, 521, 825, 521)} stroke={INK} sw={1.6} dur={0.6} />
    </Scene>
  );
}

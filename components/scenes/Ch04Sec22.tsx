/**
 * Ch04 · Section 22 — "Worked Example 4 [JEE Advanced]: a shell exploding in 2D"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 33.4, 47.8, 54.9, 66.1, 79.4, 98.8, 118.7]):
 *  0 title
 *  1 problem + find
 *  2 red margin: internal → per-axis accounts
 *  3 axes + incoming shell + frag-1 up arrow
 *  4 initial momenta line
 *  5 horizontal account → v₂ₓ = 15
 *  6 vertical account → v₂ᵧ = −10 + minus-is-physics note
 *  7 combine box + frag-2 arrow drawn down-right + label
 *  8 red margin: CM sails on
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..195 · lines st x84 bl 160 / 184
 *  fig | x-axis (140,340)→(430,340) "x"(440,345) · y-axis (210,340)→(210,245)
 *    "y"(222,240) · shell arr (120,340)→(180,340) lbl st x84 bl 318 ·
 *    frag1 arr (210,332)→(210,250) lbl st x222 bl 262 ·
 *    frag2 arr (216,346)→(330,422) lbl st x250 bl 452
 *  R col | b4 st x540 bl 250 · b5 st x540 bl 292 · b6 st x540 bl 334 ·
 *    note bl 360 · b7 box x540..1010 y390..436 bl 418
 *  b8 | bar x66 y490..560 · lines st x84 bl 510 / 536
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — a shell explodes in 2D",
            "Example 4 [JEE Advanced] — shell 2D mein phat'ta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "shell 3 kg at 10 m⁄s (horizontal) explodes → 1 kg goes straight UP at 20 m⁄s",
            "shell 3 kg, 10 m⁄s (horizontal) phat'ta hai → 1 kg seedha UPAR 20 m⁄s se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: velocity of the 2 kg fragment (magnitude + direction) · no gravity in the blast",
            "nikaalo: 2 kg fragment ki velocity (magnitude + direction) · blast mein gravity nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — two bank accounts */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "explosion = INTERNAL → momentum conserved on each axis SEPARATELY",
            "explosion = INTERNAL → momentum har axis par ALAG conserve hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "two axes = two bank accounts that never talk to each other",
            "do axes = do bank accounts jo aapas mein kabhi baat nahi karte"
          )}
        </T>
      </Fade>

      {/* beat 3 — axes and the knowns */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={`${arrowD(140, 340, 430, 340)} ${arrowD(210, 340, 210, 245)}`}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={440} y={345} size={13} fill={INK} weight={700} anchor="start">
          x
        </T>
        <T x={222} y={240} size={13} fill={INK} weight={700} anchor="start">
          y
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.4)}
        d={`${circleD(130, 340, 8)} ${arrowD(142, 340, 184, 340)}`}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={84} y={318} size={12} fill={AMBER_DARK} script anchor="start">
          {t("shell: 3 kg, 10 m⁄s →", "shell: 3 kg, 10 m⁄s →")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={arrowD(210, 332, 210, 252)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={222} y={262} size={12} fill={GREEN} script anchor="start">
          1 kg: 20 m⁄s ↑
        </T>
      </Fade>

      {/* beat 4 — the initial accounts */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={250} size={15} fill={INK} weight={700} anchor="start">
          p_x = 3 × 10 = 30 kg·m⁄s&nbsp;&nbsp;·&nbsp;&nbsp;p_y = 0
        </T>
      </Fade>

      {/* beat 5 — horizontal */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={292} size={15} fill={INK} weight={700} anchor="start">
          x:&nbsp;&nbsp;30 = 0 + 2·v₂ₓ&nbsp;&nbsp;⇒&nbsp;&nbsp;v₂ₓ = 15 m⁄s
        </T>
      </Fade>

      {/* beat 6 — vertical */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={334} size={15} fill={INK} weight={700} anchor="start">
          y:&nbsp;&nbsp;0 = 1(20) + 2·v₂ᵧ&nbsp;&nbsp;⇒&nbsp;&nbsp;v₂ᵧ = −10 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={540} y={360} size={12} fill={RED} script anchor="start">
          {t(
            "the minus IS the physics — the heavy piece is driven downward",
            "minus hi physics hai — bhaari tukda neeche dhakela gaya"
          )}
        </T>
      </Fade>

      {/* beat 7 — combine + draw the fragment */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d={arrowD(216, 346, 330, 422)}
        stroke={AMBER}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={250} y={452} size={12} fill={AMBER_DARK} script anchor="start">
          {t("2 kg: ≈18 m⁄s, 33.7° below", "2 kg: ≈18 m⁄s, 33.7° neeche")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 4)}
        d="M 552 390 h 446 q 12 0 12 12 v 22 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={775} y={418} size={15} fill={INK} weight={800}>
          |v₂| = √(15² + 10²) = 5√13 ≈ 18 m⁄s · θ ≈ 33.7°
        </T>
      </Fade>

      {/* beat 8 — the CM insight */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 490 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={510} size={14} fill={RED} script anchor="start">
          {t(
            "the CENTRE OF MASS sails on exactly as the un-exploded shell would",
            "CENTRE OF MASS bilkul waise hi chalta rehta hai jaise bina-phata shell chalta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={536} size={14} fill={GREEN} script anchor="start">
          {t(
            "the blast rearranges pieces — INTERNAL forces cannot shift the CM's motion",
            "blast tukde idhar-udhar karta hai — INTERNAL forces CM ki motion nahi hila sakti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

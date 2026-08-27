/**
 * M11 Ch03 · Section 38 — "The master solution formulas and the root-validity check"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — the central formula reference for solving trig equations,
 * single column, top to bottom.
 *
 * Beats (board_reveal_at_english [0, 6.91, 17.49, 22.27, 30.29, 44.97, 56.15, 60.42, 77.23]):
 *  0 heading: zero cases
 *  1 formula: sinθ=0⇔θ=nπ; cosθ=0⇔θ=(2n+1)π/2; tanθ=0⇔θ=nπ
 *  2 heading: the three master general solutions
 *  3 HERO (high): sinθ=sinα ⇔ θ=nπ+(-1)ⁿα
 *  4 formula: cosθ=cosα⇔θ=2nπ±α; tanθ=tanα⇔θ=nπ+α
 *  5 formula: squared cases ⇔ θ=nπ±α
 *  6 heading: linear form and solvability
 *  7 formula: acosθ+bsinθ=c ⇒ Rcos(θ-α)=c; solvable iff |c|≤√(a²+b²)
 *  8 red-margin (high): the root-validity checklist
 *
 * Layout plan — single column, left-aligned x60:
 *  b0 | "Zero cases" (15,amber,w700)     | T st | x60..200  y69..84 (bl 75)
 *  b1 | chip                              | Chip | x60..540   y92..122
 *  b2 | "Three master..." (15,amber,w700)| T st | x60..430  y149..164 (bl 155)
 *  b3 | HERO chip (amber)                 | Chip | x60..420   y172..210
 *  b4 | chip                              | Chip | x60..500   y218..250
 *  b5 | chip                              | Chip | x60..440   y258..290
 *  b6 | "Linear form..." (15,amber,w700) | T st | x60..350  y313..328 (bl 320)
 *  b7 | chip                              | Chip | x60..540   y336..372
 *  b8 | margin bar (red)                  | Draw | x60  y392..460
 *  b8 | 3 lines (13,red)                  | T st | x76..560   y412..456
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={17} fill={RED} anchor="middle" script>
          {t("The Master Solution Formulas and the Root-Validity Check", "Master Solution Formulas aur Root-Validity Check")}
        </T>
      </Fade>

      {/* beat 0 — zero cases heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={75} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Zero cases", "Zero cases")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 83 L 200 83" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the three zero-case formulas */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={92} w={540} h={30} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          sinθ=0⇔θ=nπ; cosθ=0⇔θ=(2n+1)π/2; tanθ=0⇔θ=nπ
        </Chip>
      </Fade>

      {/* beat 2 — the three master general solutions, heading */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={155} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("The three master general solutions", "Teen master general solutions")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M 60 163 L 430 163" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.4)} />

      {/* beat 3 — HERO: sine's master solution */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={172} w={340} h={38} fill={AMBER} textFill={INK} size={16} script={false}>
          sinθ=sinα ⇔ θ=nπ+(-1)ⁿα
        </Chip>
      </Fade>

      {/* beat 4 — cosine and tangent's master solutions */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={60} y={218} w={440} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          cosθ=cosα⇔θ=2nπ±α;  tanθ=tanα⇔θ=nπ+α
        </Chip>
      </Fade>

      {/* beat 5 — squared cases */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={258} w={380} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          squared: sin²θ=sin²α etc ⇔ θ=nπ±α
        </Chip>
      </Fade>

      {/* beat 6 — linear form heading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={320} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Linear form and solvability", "Linear form aur solvability")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M 60 328 L 350 328" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.4)} />

      {/* beat 7 — the solvability test */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={336} w={520} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={12} script={false}>
          acosθ+bsinθ=c ⇒ Rcos(θ-α)=c; solvable iff |c|≤√(a²+b²)
        </Chip>
      </Fade>

      {/* beat 8 — red-margin: the root-validity checklist */}
      <Draw on={beat >= 8} d="M 60 392 L 60 460" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={76} y={410} size={14} fill={RED} anchor="start" weight={700}>
          {t("Checklist:", "Checklist:")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={76} y={432} size={13} fill={RED} anchor="start">
          {t("keep n; restore roots lost to division;", "n rakho; division se khoye roots restore karo;")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.0)}>
        <T x={76} y={454} size={13} fill={RED} anchor="start">
          {t("back-check after squaring; drop out-of-domain roots.", "squaring ke baad back-check; out-of-domain roots hatao.")}
        </T>
      </Fade>
    </Scene>
  );
}

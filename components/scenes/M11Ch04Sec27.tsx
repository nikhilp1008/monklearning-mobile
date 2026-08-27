/**
 * M11 Ch04 · Section 27 — "Argument, polar and De Moivre toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a "notes page" recap of Sec21-26's own results
 * (formula_recap discipline: reveal each already-derived identity whole, in the
 * order it was taught, rather than re-deriving it term by term).
 * "z̄"/combining-overline avoided throughout (tofu in board fonts, see
 * SCENE_AUTHORING_MATHS.md) — conjugate written as the word "conj" in formulas.
 *
 * Beats (board_reveal_at_english [0, 6.14, 16.9, 34.05, 41.3, 48.9, 61.35, 70.83]):
 *  0 subtitle: consolidated polar-form toolkit
 *  1 chip: |z|=r=√(x²+y²),  arg z=θ ∈ (-π,π]
 *  2 chip: reference angle table, I..IV
 *  3 chip (HERO): z = r(cosθ+isinθ) = r cis θ
 *  4 chip: arg algebra — product/quotient/conjugate
 *  5 chip (HERO): zⁿ = rⁿ(cos nθ+i sin nθ), n∈Z
 *  6 chip: cube roots — 1,ω,ω²; ω³=1; 1+ω+ω²=0
 *  7 guardrail (red-margin): memorize 3 angle facts
 *
 * Layout plan (2-column grid, 3 rows, then a full-width guardrail bar):
 *  b0 | subtitle (15,amber,w700)  | T mid | x540 y88
 *  b1 | chip 1                    | Chip  | x60..520  y110..162
 *  b2 | chip 2                    | Chip  | x560..1020 y110..162
 *  b3 | chip 3 (hero)             | Chip  | x60..520  y192..244
 *  b4 | chip 4                    | Chip  | x560..1020 y192..244
 *  b5 | chip 5 (hero)             | Chip  | x60..520  y274..326
 *  b6 | chip 6                    | Chip  | x560..1020 y274..326
 *  b7 | red bar + guardrail text  | Draw/T| x60 y356..390, (76,378)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch04Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Argument, Polar and De Moivre Toolkit", "Argument, Polar aur De Moivre Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Consolidated: the polar-form toolkit", "Consolidated: polar-form toolkit")}
        </T>
      </Fade>

      {/* beat 1 — modulus & principal argument range */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={110} w={460} h={52} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          |z| = r = √(x²+y²)    arg z = θ ∈ (-π, π]
        </Chip>
      </Fade>

      {/* beat 2 — reference angle table */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={560} y={110} w={460} h={52} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          ref α=tan⁻¹|y/x|: I→α II→π-α III→α-π IV→-α
        </Chip>
      </Fade>

      {/* beat 3 — polar form, hero */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={60} y={192} w={460} h={52} fill="#EEA31F" textFill={INK} size={18} script={false}>
          z = r(cosθ + i sinθ) = r cis θ
        </Chip>
      </Fade>

      {/* beat 4 — argument algebra */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={560} y={192} w={460} h={52} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          arg(z₁z₂)=argz₁+argz₂  arg(z₁/z₂)=argz₁-argz₂  arg(conj)=-arg z
        </Chip>
      </Fade>

      {/* beat 5 — De Moivre, hero */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={274} w={460} h={52} fill="#EEA31F" textFill={INK} size={17} script={false}>
          zⁿ = rⁿ(cos nθ + i sin nθ),  n ∈ Z
        </Chip>
      </Fade>

      {/* beat 6 — cube roots of unity */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={560} y={274} w={460} h={52} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          1, ω, ω²    ω³ = 1    1 + ω + ω² = 0
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: memorize the three angles */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 60 356 L 60 390" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={378} size={15} fill={RED} anchor="start" weight={700}>
          {t("Memorize: 1+i = √2∠π/4,  1+i√3 = 2∠π/3,  √3+i = 2∠π/6.", "Yaad rakho: 1+i = √2∠π/4,  1+i√3 = 2∠π/3,  √3+i = 2∠π/6.")}
        </T>
      </Fade>
    </Scene>
  );
}

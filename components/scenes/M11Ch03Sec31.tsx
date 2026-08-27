/**
 * M11 Ch03 · Section 31 — "Product-to-sum, sum-to-product, amplitude and conditional identities"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — pure formula catalogue, three labeled groups, single column.
 * Closes the formula-building run of subtopic 5 (worked examples follow next).
 *
 * Beats (board_reveal_at_english [0, 7.0, 27.14, 35.33, 38.57, 54.19, 64.51, 67.33]):
 *  0 heading: Product ↔ Sum
 *  1 formula: 2sinAcosB=sin(A+B)+sin(A-B), 2cosAcosB=cos(A+B)+cos(A-B)
 *  2 formula: 2sinAsinB=cos(A-B)-cos(A+B)
 *  3 heading: Sum → Product
 *  4 formula: sinC+sinD=..., cosC+cosD=... (half-sum/half-diff)
 *  5 formula (high): cosC-cosD=-2sin(half-sum)sin(half-diff) - the one with a leading minus
 *  6 heading: Amplitude and conditional (A+B+C=π)
 *  7 formula: acosx+bsinx=Rcos(x-α); tanA+tanB+tanC=tanAtanBtanC
 *
 * Layout plan — single column, left-aligned x60:
 *  b0 | "Product ↔ Sum" (16,amber,w700)  | T st | x60..270  y104..119 (bl 110)
 *  b1 | chip                              | Chip | x60..520   y126..160
 *  b2 | chip                              | Chip | x60..360   y168..202
 *  b3 | "Sum → Product" (16,amber,w700)  | T st | x60..280  y234..249 (bl 240)
 *  b4 | chip                              | Chip | x60..380   y256..288
 *  b4 | chip                              | Chip | x60..380   y294..326
 *  b5 | chip (high, amber)                | Chip | x60..380   y332..366
 *  b6 | "Amplitude and cond..." (15,amber)| T st | x60..430  y398..413 (bl 405)
 *  b7 | chip                              | Chip | x60..420   y420..456
 *  b7 | chip                              | Chip | x60..360   y462..496
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={17} fill={RED} anchor="middle" script>
          {t("Product-Sum, Sum-Product, Amplitude and Conditional Identities", "Product-Sum, Sum-Product aur Conditional Identities")}
        </T>
      </Fade>

      {/* beat 0 — Product ↔ Sum heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          Product ↔ Sum
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 119 L 270 119" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the two product-to-sum forms */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={126} w={460} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          2sinAcosB=sin(A+B)+sin(A-B), 2cosAcosB=cos(A+B)+cos(A-B)
        </Chip>
      </Fade>

      {/* beat 2 — the third product-to-sum form */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={168} w={300} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          2sinAsinB=cos(A-B)-cos(A+B)
        </Chip>
      </Fade>

      {/* beat 3 — Sum → Product heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={60} y={240} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          Sum → Product
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 60 249 L 280 249" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — sinC+sinD, cosC+cosD */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={60} y={256} w={380} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={12} script={false}>
          sinC+sinD=2sin((C+D)/2)cos((C-D)/2)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={60} y={294} w={380} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={12} script={false}>
          cosC+cosD=2cos((C+D)/2)cos((C-D)/2)
        </Chip>
      </Fade>

      {/* beat 5 — cosC-cosD, high emphasis: watch the leading minus */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={60} y={332} w={380} h={34} fill={AMBER} textFill={INK} size={12} script={false}>
          cosC-cosD=-2sin((C+D)/2)sin((C-D)/2)
        </Chip>
      </Fade>

      {/* beat 6 — Amplitude and conditional heading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={405} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Amplitude and conditional (A+B+C=π)", "Amplitude aur conditional (A+B+C=π)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M 60 413 L 430 413" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.5)} />

      {/* beat 7 — the two headline results */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={60} y={420} w={420} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          acosx+bsinx=Rcos(x-α), R=√(a²+b²)
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={60} y={462} w={360} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          tanA+tanB+tanC=tanAtanBtanC
        </Chip>
      </Fade>
    </Scene>
  );
}

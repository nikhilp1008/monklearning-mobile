/**
 * M11 Ch03 · Section 30 — "Double, half, triple and the t-substitution"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — pure formula catalogue, 2×2 grid of labeled groups.
 *
 * Beats (board_reveal_at_english [0, 7.25, 16.04, 28.93, 34.3, 46.34, 52.57, 67.75, 74.07]):
 *  0 heading: double-angle
 *  1 formula: sin2A=2sinAcosA, tan2A=2tanA/(1-tan²A)
 *  2 formula (high): cos2A's three faces
 *  3 heading: half-angle / power reduction
 *  4 formula: 1+cosA=2cos²(A/2), 1-cosA=2sin²(A/2)
 *  5 heading: the t=tan(A/2) substitution
 *  6 formula: sinA,cosA,tanA in terms of t
 *  7 heading: triple-angle
 *  8 formula: sin3A=3sinA-4sin³A, cos3A=4cos³A-3cosA
 *
 * Layout plan — 2×2 grid: TL(double) x60-500, TR(half-angle) x560-1020,
 * BL(t-sub) x60-500, BR(triple) x560-1020:
 *  b0 | "Double-angle" (15,amber,w700)  | T st | x60..250  y104..119 (bl 110)
 *  b0 | underline                        | Draw | x60..250 y119
 *  b1 | chip                             | Chip | x60..500  y126..162
 *  b2 | chip (high, amber)               | Chip | x60..500  y170..208
 *  b3 | "Half-angle..." (15,amber,w700) | T st | x560..920 y104..119 (bl 110)
 *  b3 | underline                        | Draw | x560..920 y119
 *  b4 | chip                             | Chip | x560..1000  y126..164
 *  b5 | "t=tan(A/2)..." (15,amber,w700) | T st | x60..380  y244..259 (bl 250)
 *  b5 | underline                        | Draw | x60..380 y259
 *  b6 | chip                             | Chip | x60..500  y266..306
 *  b7 | "Triple-angle" (15,amber,w700)  | T st | x560..790 y244..259 (bl 250)
 *  b7 | underline                        | Draw | x560..790 y259
 *  b8 | chip                             | Chip | x560..1000  y266..302
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={22} fill={RED} anchor="middle" script>
          {t("Double, Half, Triple, and t-Substitution", "Double, Half, Triple, aur t-Substitution")}
        </T>
      </Fade>

      {/* beat 0 — double-angle heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Double-angle", "Double-angle")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 119 L 250 119" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — sin2A, tan2A */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={126} w={440} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          sin2A=2sinAcosA, tan2A=2tanA/(1-tan²A)
        </Chip>
      </Fade>

      {/* beat 2 — cos2A's three faces, high emphasis */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={170} w={440} h={38} fill={AMBER} textFill={INK} size={13} script={false}>
          cos2A=cos²A-sin²A=2cos²A-1=1-2sin²A
        </Chip>
      </Fade>

      {/* beat 3 — half-angle heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={560} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Half-angle / power reduction", "Half-angle / power reduction")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 560 119 L 920 119" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — 1±cosA */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={560} y={126} w={440} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          1+cosA=2cos²(A/2), 1-cosA=2sin²(A/2)
        </Chip>
      </Fade>

      {/* beat 5 — t-substitution heading */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={250} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("The t=tan(A/2) substitution", "t=tan(A/2) substitution")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M 60 259 L 400 259" stroke={AMBER_DARK} sw={1.6} delay={dl(5, 0.4)} />

      {/* beat 6 — sinA, cosA, tanA in terms of t */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={60} y={266} w={440} h={42} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          sinA=2t/(1+t²), cosA=(1-t²)/(1+t²), tanA=2t/(1-t²)
        </Chip>
      </Fade>

      {/* beat 7 — triple-angle heading */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={560} y={250} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Triple-angle", "Triple-angle")}
        </T>
      </Fade>
      <Draw on={beat >= 7} d="M 560 259 L 750 259" stroke={AMBER_DARK} sw={1.6} delay={dl(7, 0.4)} />

      {/* beat 8 — sin3A, cos3A */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={560} y={266} w={440} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          sin3A=3sinA-4sin³A, cos3A=4cos³A-3cosA
        </Chip>
      </Fade>
    </Scene>
  );
}

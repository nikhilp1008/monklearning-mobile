/**
 * M11 Ch03 · Section 33 — "Signs in a compound angle, a ratio proof, and max/min"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — FLAGGED (subtopic 5), three examples in three columns.
 *
 * Beats (board_reveal_at_english [0, 6.31, 23.55, 39.51, 44.8, 65.19, 78.76]):
 *  0 Ex4 heading: sin(A+B) with mixed quadrants
 *  1 given: sinA=3/5(acute)⇒cosA=4/5; cosB=-12/13(obtuse)⇒sinB=5/13
 *  2 formula: sin(A+B)=3/5(-12/13)+4/5(5/13) = -16/65
 *  3 Ex5 heading: prove (sin3A+sinA)/(cos3A+cosA)=tan2A
 *  4 formula: 2sin2AcosA/2cos2AcosA = tan2A
 *  5 Ex6 heading: max/min of 7cosx+24sinx+5
 *  6 formula: R=√(7²+24²)=25 ⇒ max=30, min=-20
 *
 * Layout plan — three columns: Ex4 x60-380, Ex5 x420-780, Ex6 x820-1020:
 *  b0 | "Example 4..." (14,amber,w700)  | T st | x60..350  y104..119 (bl 110)
 *  b1 | 2 lines (12)                    | T st | x60..340   y139..174
 *  b2 | chip + chip (green)             | Chip | x60..340   y185..255
 *  b3 | "Example 5..." (12,amber,w700)  | T st | x420..820 y104..119 (bl 110)
 *  b4 | chip + chip (green)             | Chip | x420..780   y145..219
 *  b5 | "Example 6..." (13,amber,w700)  | T st | x820..1020 y104..119 (bl 110)
 *  b6 | chip + chip (green)             | Chip | x820..1020   y145..215
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Signs, a Ratio Proof, and Max/Min", "Signs, Ratio Proof, aur Max/Min")}
        </T>
      </Fade>

      {/* beat 0 — Example 4 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — sin(A+B), mixed quadrants", "Example 4 — sin(A+B), mixed quadrants")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 350 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the given values */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={12} fill={INK} anchor="start">
          sinA=3/5(acute)⇒cosA=4/5;
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={12} fill={INK} anchor="start" weight={700}>
          cosB=-12/13(obtuse)⇒sinB=5/13
        </T>
      </Fade>

      {/* beat 2 — the computation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={185} w={320} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          sin(A+B)=3/5(-12/13)+4/5(5/13)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={60} y={223} w={280} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          =(-36+20)/65 = -16/65
        </Chip>
      </Fade>

      {/* beat 3 — Example 5 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={420} y={110} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — prove (sin3A+sinA)/(cos3A+cosA)=tan2A", "Example 5 — prove (sin3A+sinA)/(cos3A+cosA)=tan2A")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 420 118 L 820 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — sum-to-product, cancel, land tan2A */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={420} y={145} w={360} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          = 2sin2AcosA / 2cos2AcosA
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={420} y={183} w={280} h={36} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          = tan2A ✓
        </Chip>
      </Fade>

      {/* beat 5 — Example 6 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={104} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — max/min of", "Example 6 — max/min of")}
        </T>
        <T x={780} y={120} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          7cosx+24sinx+5
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M 780 128 L 1000 128" stroke={AMBER_DARK} sw={1.6} delay={dl(5, 0.4)} />

      {/* beat 6 — the amplitude, then max/min */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={780} y={140} w={200} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          R=√(7²+24²)=25
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={780} y={178} w={200} h={32} fill={GREEN} textFill="#FFFEFB" size={13} script={false}>
          max=30, min=-20
        </Chip>
      </Fade>
    </Scene>
  );
}

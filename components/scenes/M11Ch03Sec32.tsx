/**
 * M11 Ch03 · Section 32 — "Exact values and a clean identity proof"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — FLAGGED (subtopic 5), three examples in three columns.
 *
 * Beats (board_reveal_at_english [0, 5.12, 26.88, 43.52, 59.99, 63.91, 81.24]):
 *  0 Ex1 heading: exact value of cos15°
 *  1 formula: cos15°=cos(45°-30°)=...=(√6+√2)/4
 *  2 Ex2 heading: prove cos(A+B)cos(A-B)=cos²A-sin²B
 *  3 text: expand as difference of squares
 *  4 formula: substitute and simplify to cos²A-sin²B
 *  5 Ex3 heading: sin(7π/12)
 *  6 formula: split and compute to (√2+√6)/4
 *
 * Layout plan — three columns: Ex1 x60-380, Ex2 x420-780, Ex3 x820-1020:
 *  b0 | "Example 1..." (14,amber,w700)   | T st | x60..360  y104..119 (bl 110)
 *  b1 | 2 lines + chip                    | T/Chip | x60..320  y139..217
 *  b2 | "Example 2..." (13,amber,w700)   | T st | x420..870 y104..119 (bl 110)
 *  b3 | 2 lines                           | T st | x420..720  y139..174
 *  b4 | chip + chip (green)               | Chip | x420..750  y185..253
 *  b5 | "Example 3..." (14,amber,w700)   | T st | x820..1020 y104..119 (bl 110)
 *  b6 | 2 lines + chip                    | T/Chip | x820..1030  y139..217
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Exact Values and a Clean Identity Proof", "Exact Values aur Ek Clean Identity Proof")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — exact value of cos15°", "Example 1 — cos15° ki exact value")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 360 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the full derivation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">cos15°=cos(45°-30°)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={60} y={168} size={12} fill={INK} anchor="start">=1/√2·√3/2 + 1/√2·1/2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Chip x={60} y={185} w={200} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          = (√6+√2)/4
        </Chip>
      </Fade>

      {/* beat 2 — Example 2 heading */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={420} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — prove cos(A+B)cos(A-B)=cos²A-sin²B", "Example 2 — prove cos(A+B)cos(A-B)=cos²A-sin²B")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M 420 118 L 870 118" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.4)} />

      {/* beat 3 — expand as difference of squares */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={420} y={145} size={13} fill={INK} anchor="start">
          {t("Expand as difference of squares:", "Difference of squares ki tarah expand:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={420} y={168} size={13} fill={INK} anchor="start" weight={700}>
          cos²Acos²B - sin²Asin²B
        </T>
      </Fade>

      {/* beat 4 — substitute, simplify, land the proof */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={420} y={185} w={330} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={11} script={false}>
          =cos²A(1-sin²B)-(1-cos²A)sin²B
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={420} y={221} w={280} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          = cos²A - sin²B ✓
        </Chip>
      </Fade>

      {/* beat 5 — Example 3 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={820} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — sin(7π/12)", "Example 3 — sin(7π/12)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M 820 118 L 1020 118" stroke={AMBER_DARK} sw={1.6} delay={dl(5, 0.4)} />

      {/* beat 6 — split and compute */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={820} y={145} size={13} fill={INK} anchor="start">7π/12=π/4+π/3</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={820} y={168} size={11} fill={INK} anchor="start">sin=1/√2·1/2+1/√2·√3/2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Chip x={820} y={185} w={200} h={32} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          = (√2+√6)/4
        </Chip>
      </Fade>
    </Scene>
  );
}

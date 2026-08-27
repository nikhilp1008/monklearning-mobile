/**
 * M11 Ch10 · Section 6 — "Example 3 (JEE Main): opposite signs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 1 (The Conic Family), sec 6 of 7 (closes it).
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 5.38, 16.04, 24.32, 36.52, 49.32, 57.17,
 * 69.55, 84.05]; reveals_hinglish = [0, 6.14, 16.21, 23.38, 35.41, 47.96, 56.92,
 * 70.4, 84.74].
 *
 * Example 3 (top, y100-270): equation -> re-spans with A(4)/C(-9) highlighted
 * (same "erase, don't overlay" slot-replace as Sec5) -> discriminant computed
 * inline -> boxed HYPERBOLA tied to e>1, closing on "two tests agree."
 * Example 4 (bottom, y300-560): the chapter's first genuinely rotated conic
 * (real xy term) -> 2-line derivation -> boxed Δ=-144<0 (HIGH emphasis) ->
 * boxed ELLIPSE + the rotation-invariance punchline.
 *
 * Beats:
 *  0(title,always-on) | "Example 3 (JEE Main): opposite signs"
 *  1 | equation (plain, beat===1 only)
 *  2 | equation (A,C highlighted, beat>=2) + "-> opposite signs"
 *  3 | discriminant computed inline, result amber
 *  4 | boxed HYPERBOLA + "(e>1)" + "two tests agree" note
 *  5 | Example 4 header
 *  6 | equation (has real xy term)
 *  7 | 2-line derivation + boxed Δ=-144<0 (HIGH)
 *  8 | boxed ELLIPSE + rotation-invariance note
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Example 3 (JEE Main): opposite signs", "Example 3 (JEE Main): opposite-sign coefficients")}
        </T>
      </Fade>

      {/* beat 1 — equation, plain (only during beat 1) */}
      <Fade on={beat === 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={18} fill={INK} anchor="middle">4x² − 9y² + 8x + 36y − 68 = 0</T>
      </Fade>

      {/* beat 2 — equation, A/C highlighted (replaces beat 1's) */}
      <Fade on={beat >= 2} delay={0}>
        <T x={410} y={104} size={18} fill={AMBER_DARK} anchor="start" weight={700}>4</T>
        <T x={422} y={104} size={18} fill={INK} anchor="start">x² </T>
        <T x={452} y={104} size={18} fill={AMBER_DARK} anchor="start" weight={700}>− 9</T>
        <T x={483} y={104} size={18} fill={INK} anchor="start">y² + 8x + 36y − 68 = 0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={135} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("A = 4, C = −9 → opposite signs", "A = 4, C = −9 → opposite signs")}
        </T>
      </Fade>

      {/* beat 3 — discriminant computed inline */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={404} y={172} size={16} fill={INK} anchor="start">B² − 4AC = 0 − 4(4)(−9) = </T>
        <T x={624} y={172} size={16} fill={AMBER_DARK} anchor="start" weight={700}>144 &gt; 0</T>
      </Fade>

      {/* beat 4 — boxed HYPERBOLA */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={420} y={200} w={180} h={42} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={20} script={false}>
          {t("HYPERBOLA", "HYPERBOLA")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={660} y={227} size={15} fill={GREEN_DARK} anchor="start" weight={700}>(e &gt; 1)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={540} y={268} size={13} fill={MUTED} anchor="middle">
          {t("Two tests agree: discriminant AND eccentricity.", "Dono tests agree karte hain: discriminant AUR eccentricity.")}
        </T>
      </Fade>

      {/* beat 5 — Example 4 header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={310} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 4 (JEE Advanced): a rotated conic", "Example 4 (JEE Advanced): ek rotated conic")}
        </T>
      </Fade>

      {/* beat 6 — equation with a real xy term */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={345} size={18} fill={INK} anchor="middle">5x² − 4xy + 8y² − 16x − 14y + 5 = 0</T>
      </Fade>

      {/* beat 7 — 2-line derivation + boxed HIGH-emphasis result */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={380} y={385} size={16} fill={INK} anchor="start">Δ = (−4)² − 4(5)(8)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={380} y={409} size={16} fill={INK} anchor="start">= 16 − 160</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={380} y={430} w={240} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={19} script={false}>
          Δ = −144 &lt; 0
        </Chip>
      </Fade>

      {/* beat 8 — boxed ELLIPSE + rotation-invariance note */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={420} y={493} w={160} h={40} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={20} script={false}>
          {t("ELLIPSE", "ELLIPSE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={540} y={560} size={13} fill={MUTED} anchor="middle">
          {t(
            "The xy term only rotates it — Δ is rotation-invariant.",
            "xy term isko sirf rotate karta hai — Δ rotation-invariant hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

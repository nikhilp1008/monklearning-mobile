/**
 * P12Ch05 · Section 27 — "Advanced: equal components in the full dipole model"
 * Subtopic: Earth's Magnetism
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: part (a) only — B_H = B_V ⇒ δ = 45° ⇒ λ = 26.6°
 * — and then stopped. The voice spends its last three segments on part (b),
 * the magnitude, which had no board at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES, chained in this order:
 *     B_V = B_H  ⇒  B_V/B_H = 1 = tan δ  ⇒  δ = 45°
 *     tan δ = 2 tan λ  ⇒  tan λ = 0.5    ⇒  λ ≈ 26.6°
 *     at the equator λ = 0 so √(1+3sin²λ) = 1, i.e. B₀ is the prefactor
 *     tan λ = 0.5 ⇒ sin λ = 0.5/√1.25 = 0.447 ⇒ sin²λ = 0.20
 *     B = B₀√(1 + 3×0.20) = B₀√1.6 ≈ 1.26 B₀   — about 26% above equatorial
 * The B-versus-latitude curve is plotted from √(1+3sin²λ) at 10° steps, so the
 * marked point at 26.6° really does sit on the drawn curve.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "three results chained together"      title + underline
 *   1  "keep this curve in view"             B₀ → 2B₀ climb, plotted
 *   2  "the question says…"                  the two asks
 *   3  "part a step 1 — the ratio is tan δ"  equal-legs triangle, δ = 45°
 *   4  "feed that into dip and latitude"     λ ≈ 26.6°, marked on the axis
 *   5  "part b needs the magnitude relation" B = B₀√(1+3sin²λ)
 *   6  "so we need sin λ"                    sin λ = 0.447, sin²λ = 0.20
 *   7  "substitute"                          1.26 B₀, marked on the curve
 */

import React from "react";
import { Circle, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Three results chained — the order is the difficulty",
             "Three results chained — the order is the difficulty")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 60 C 480 56, 660 64, 830 58" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the climb from B₀ to 2B₀ ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={640} y={100} size={13.5} fill={RED} weight={800} anchor="start">
          {t("TOTAL FIELD, EQUATOR TO POLE", "TOTAL FIELD, EQUATOR TO POLE")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 640 300 L 1010 300" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 640 300 L 640 118" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Line x1={640} y1={270} x2={1010} y2={270} stroke={MUTED} strokeWidth={1.3} strokeDasharray="6 5" />
        <Line x1={640} y1={130} x2={1010} y2={130} stroke={MUTED} strokeWidth={1.3} strokeDasharray="6 5" />
        <T x={630} y={274} size={12.5} fill={MUTED} weight={800} anchor="end">B₀</T>
        <T x={630} y={134} size={12.5} fill={MUTED} weight={800} anchor="end">2B₀</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)}
        d="M 640 270 L 681 264 L 722 247 L 763 225 L 804 200 L 846 177 L 887 158 L 928 143 L 969 133 L 1010 130"
        stroke={INK} sw={2.6} dur={1.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={644} y={318} size={12.5} fill={MUTED} weight={700} anchor="start">equator</T>
        <T x={1010} y={318} size={12.5} fill={MUTED} weight={700} anchor="end">pole</T>
      </Fade>

      {/* ---------------- beat 2 — the question ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={50} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("THE QUESTION", "THE QUESTION")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={50} y={130} size={13.5} fill={INK} weight={700} anchor="start">
          {t("the horizontal and vertical components are equal here",
             "the horizontal and vertical components are equal here")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={50} y={156} size={13.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("find (a) the latitude λ   (b) the field in terms of B₀",
             "find (a) the latitude λ   (b) the field in terms of B₀")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — equal legs ⇒ 45° ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={50} y={196} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(a) step 1 — the ratio IS the tangent of the dip",
             "(a) step 1 — the ratio IS the tangent of the dip")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={50} y={224} size={14.5} fill={INK} weight={800} anchor="start">
          B_V / B_H = 1 = tan δ   ⇒   δ = 45°
        </T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 430 146 L 530 146" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 530 146 L 530 246" stroke={GREEN} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d="M 430 146 L 530 246" stroke={RED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 470 146 A 40 40 0 0 1 458.3 174.3" stroke={AMBER_DARK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Path d="M 518 146 L 518 158 L 530 158" fill="none" stroke={INK} strokeWidth={1.4} />
        <T x={480} y={138} size={12.5} fill={INK} weight={800}>B_H</T>
        <T x={538} y={200} size={12.5} fill={GREEN} weight={800} anchor="start">B_V</T>
        <T x={478} y={174} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">45°</T>
      </Fade>

      {/* ---------------- beat 4 — dip to latitude ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={50} y={262} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(a) step 2 — dip into latitude", "(a) step 2 — dip into latitude")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={50} y={290} size={14.5} fill={INK} weight={800} anchor="start">
          tan δ = 2 tan λ   ⇒   tan λ = ½ tan 45° = 0.5
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={50} y={318} size={15} fill={GREEN} weight={900} anchor="start">λ = tan⁻¹(0.5) ≈ 26.6°</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Line x1={749} y1={300} x2={749} y2={233} stroke={RED} strokeWidth={1.4} strokeDasharray="5 5" />
        <T x={752} y={318} size={12.5} fill={RED} weight={800} anchor="start">26.6°</T>
      </Fade>

      {/* ---------------- beat 5 — the magnitude relation ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={50} y={356} size={13.5} fill={RED} weight={800} anchor="start">
          {t("(b) THE MAGNITUDE RELATION", "(b) THE MAGNITUDE RELATION")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={50} y={384} size={13} fill={INK} weight={700} anchor="start">
          {t("at the equator λ = 0, the root collapses to 1 — so B₀ is the dipole prefactor",
             "at the equator λ = 0, the root collapses to 1 — so B₀ is the dipole prefactor")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={50} y={412} size={14.5} fill={INK} weight={800} anchor="start">
          at any latitude:   B = B₀ √(1 + 3 sin²λ)
        </T>
      </Fade>

      {/* ---------------- beat 6 — get sin λ ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={50} y={452} size={14} fill={INK} weight={800} anchor="start">
          tan λ = 0.5   ⇒   sin λ = 0.5 / √1.25 = 0.447
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={50} y={478} size={14} fill={INK} weight={800} anchor="start">
          so  sin²λ = 0.20
        </T>
      </Fade>

      {/* ---------------- beat 7 — substitute ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={50} y={516} size={17} fill={GREEN} weight={900} anchor="start">
          B = B₀ √(1 + 3×0.20) = B₀ √1.6 ≈ 1.26 B₀
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Circle cx={749} cy={233} r={6} fill={RED} />
        <Line x1={640} y1={233} x2={749} y2={233} stroke={RED} strokeWidth={1.4} strokeDasharray="5 5" />
        <T x={760} y={226} size={13} fill={RED} weight={900} anchor="start">1.26 B₀</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={640} y={498} size={13} fill={MUTED} weight={600} anchor="start">
          {t("the model must climb from B₀ at the equator to 2B₀ at the poles,",
             "the model must climb from B₀ at the equator to 2B₀ at the poles,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={640} y={522} size={13} fill={MUTED} weight={600} anchor="start">
          {t("and we are only about a quarter of the way up in latitude",
             "and we are only about a quarter of the way up in latitude")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <Chip x={40} y={552} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ δ = 45° · λ ≈ 26.6° · B ≈ 1.26 B₀ — roughly 26% stronger than at the equator",
             "★ δ = 45° · λ ≈ 26.6° · B ≈ 1.26 B₀ — roughly 26% stronger than at the equator")}
        </Chip>
      </Fade>
    </Scene>
  );
}

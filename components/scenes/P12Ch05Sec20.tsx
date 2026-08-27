/**
 * P12Ch05 · Section 20 — "Dipole model components, apparent dip and the locus lines"
 * Subtopic: Earth's Magnetism
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: apparent dip and nothing else. It omitted the
 * dipole-model components the voice opens with, and the whole isogonic /
 * agonic / isoclinic / aclinic section the voice closes with — five of the
 * nine segments had no board at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES, in order:
 *     B_V = 2M sin λ / r³ ,  B_H = M cos λ / r³   (2 rides on the vertical;
 *        sin ↔ vertical, cos ↔ horizontal, matched to LATITUDE not dip)
 *     B   = (M / r³) √(1 + 3 sin²λ)               (Pythagoras; = the earlier
 *        1 + 3cos²θ with θ = 90° − λ)
 *     equator: root = 1 (smallest) · poles: root = 2, so exactly twice
 *     apparent dip:  tan δ′ = tan δ / cos β ,  and since cos β ≤ 1, δ′ ≥ δ
 *     two ⊥ planes:  cot²δ₁ + cot²δ₂ = cot²δ  (β drops out)
 *     four locus families: isogonic / agonic (declination),
 *                          isoclinic / aclinic = magnetic equator (dip)
 *
 * BEAT MAP (n_reveals = 9, so valid gates are 0..8):
 *   0  "upgrade to the full dipole model"     title + Earth with λ, r, M
 *   1  "vertical carries 2M sinλ/r³…"         B_V / B_H arrows + formulas
 *   2  "combine them by Pythagoras"           B = (M/r³)√(1+3sin²λ)
 *   3  "read off the two extremes"            equator vs poles, factor 2
 *   4  "apparent dip"                         rotated-plane sketch + tan δ′
 *   5  "two mutually perpendicular planes"    cot²δ₁ + cot²δ₂ = cot²δ
 *   6  "four families of lines"               globe with N–S and wrap-around sets
 *   7  "isogonic… agonic…"                    the declination pair
 *   8  "isoclinic… aclinic…"                  the dip pair + memory hook chip
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title + the Earth ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The full dipole model — latitude drives everything",
             "The full dipole model — latitude drives everything")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 60 C 480 56, 660 64, 830 58" stroke={RED} sw={2.2} dur={0.7} />

      <G transform="translate(50, 72)">
        <Draw on={beat >= 0} delay={dl(0, 2.2)}
          d="M 32 122 A 78 78 0 1 1 188 122 A 78 78 0 1 1 32 122"
          stroke={INK} sw={2.2} dur={1.2} />
        <Fade on={beat >= 0} delay={dl(0, 3.2)}>
          <Line x1={110} y1={36} x2={110} y2={208} stroke={MUTED} strokeWidth={1.5} strokeDasharray="6 5" />
          <Line x1={32} y1={122} x2={188} y2={122} stroke={MUTED} strokeWidth={1.5} strokeDasharray="6 5" />
          <T x={30} y={140} size={12} fill={MUTED} weight={700} anchor="start">equator</T>
          <T x={118} y={30} size={12} fill={MUTED} weight={700} anchor="start">Earth&apos;s moment M</T>
        </Fade>
        <Fade on={beat >= 0} delay={dl(0, 3.8)}>
          <Line x1={110} y1={122} x2={168} y2={70} stroke={INK} strokeWidth={1.8} />
          <T x={128} y={90} size={12.5} fill={INK} weight={800}>r</T>
          <Circle cx={168} cy={70} r={5} fill={RED} />
        </Fade>
        <Draw on={beat >= 0} delay={dl(0, 4.2)} d="M 148 122 A 38 38 0 0 0 138.2 96.6" stroke={AMBER_DARK} sw={1.9} dur={0.4} />
        <Fade on={beat >= 0} delay={dl(0, 4.5)}>
          <T x={154} y={110} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">λ</T>
        </Fade>

        {/* beat 1 — the two components at that point */}
        <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(168, 70, 198, 43)} stroke={GREEN} sw={2.3} dur={0.4} />
        <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(168, 70, 141, 40)} stroke={AMBER_DARK} sw={2.3} dur={0.4} />
        <Fade on={beat >= 1} delay={dl(1, 0.6)}>
          <T x={204} y={38} size={12.5} fill={GREEN} weight={800} anchor="start">B_V</T>
          <T x={134} y={32} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">B_H</T>
        </Fade>
      </G>

      {/* ---------------- beats 1 & 2 — the algebra ---------------- */}
      <G transform="translate(300, 72)">
        <Fade on={beat >= 1} delay={dl(1, 1.0)}>
          <T x={0} y={48} size={15.5} fill={INK} weight={800} anchor="start">B_V = 2M sin λ / r³</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.4)}>
          <T x={0} y={80} size={15.5} fill={INK} weight={800} anchor="start">B_H = M cos λ / r³</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.9)}>
          <T x={0} y={108} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
            {t("note the factor of 2 riding on the vertical part",
               "note the factor of 2 riding on the vertical part")}
          </T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 2.4)}>
          <T x={0} y={130} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
            {t("sin ↔ vertical, cos ↔ horizontal — matched to LATITUDE, not dip",
               "sin ↔ vertical, cos ↔ horizontal — matched to LATITUDE, not dip")}
          </T>
        </Fade>

        <Fade on={beat >= 2} delay={dl(2, 0.3)}>
          <T x={0} y={168} size={15.5} fill={GREEN} weight={900} anchor="start">
            B = (M / r³) √(1 + 3 sin²λ)
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.8)}>
          <T x={0} y={194} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("Pythagoras — the same 1 + 3cos²θ as before, with θ = 90° − λ",
               "Pythagoras — the same 1 + 3cos²θ as before, with θ = 90° − λ")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 3 — the two extremes ---------------- */}
      <G transform="translate(740, 72)">
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={0} y={22} size={14} fill={RED} weight={800} anchor="start">
            {t("THE TWO EXTREMES", "THE TWO EXTREMES")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.6)}>
          <T x={0} y={56} size={13.5} fill={INK} weight={700} anchor="start">
            {t("equator:  sin λ = 0 → root = 1", "equator:  sin λ = 0 → root = 1")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.0)}>
          <T x={0} y={80} size={13.5} fill={INK} weight={700} anchor="start">
            {t("the field is at its smallest", "the field is at its smallest")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.5)}>
          <T x={0} y={114} size={13.5} fill={INK} weight={700} anchor="start">
            {t("poles:  sin λ = 1 → root = 2", "poles:  sin λ = 1 → root = 2")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 2.0)}>
          <T x={0} y={144} size={14.5} fill={GREEN} weight={900} anchor="start">
            B_pole = 2 × B_equator
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 4 & 5 — apparent dip ---------------- */}
      <G transform="translate(50, 272)">
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("APPARENT DIP — THE DIP CIRCLE MUST SIT IN THE MERIDIAN",
               "APPARENT DIP — THE DIP CIRCLE MUST SIT IN THE MERIDIAN")}
          </T>
        </Fade>

        <G transform="translate(10, 46)">
          <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 20 70 L 175 70" stroke={INK} sw={1.8} dur={0.5} />
          <Draw on={beat >= 4} delay={dl(4, 1.0)} d="M 20 70 L 150 0" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
          <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 68 70 A 48 48 0 0 0 62.3 47.2" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
          <Fade on={beat >= 4} delay={dl(4, 1.7)}>
            <T x={78} y={57} size={13} fill={AMBER_DARK} weight={800} anchor="start">β</T>
            <T x={98} y={90} size={12.5} fill={MUTED} weight={700}>magnetic meridian</T>
            <T x={158} y={6} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">dip-circle plane</T>
          </Fade>
        </G>

        <Fade on={beat >= 4} delay={dl(4, 2.1)}>
          <T x={300} y={90} size={15.5} fill={INK} weight={800} anchor="start">tan δ′ = tan δ / cos β</T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 2.6)}>
          <T x={300} y={118} size={13} fill={GREEN} weight={800} anchor="start">
            {t("cos β ≤ 1  ⇒  apparent dip ≥ true dip",
               "cos β ≤ 1  ⇒  apparent dip ≥ true dip")}
          </T>
        </Fade>

        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={590} y={32} size={14} fill={RED} weight={800} anchor="start">
            {t("TWO PERPENDICULAR VERTICAL PLANES", "TWO PERPENDICULAR VERTICAL PLANES")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.7)}>
          <T x={590} y={70} size={15.5} fill={INK} weight={800} anchor="start">
            cot²δ₁ + cot²δ₂ = cot²δ
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.2)}>
          <T x={590} y={100} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("square the cotangents of the two apparent dips and add —",
               "square the cotangents of the two apparent dips and add —")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.6)}>
          <T x={590} y={122} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("the orientation angle β disappears completely",
               "the orientation angle β disappears completely")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 6–8 — the four locus families ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)}
        d="M 78 478 A 52 52 0 1 1 182 478 A 52 52 0 1 1 78 478"
        stroke={INK} sw={2} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d="M 130 426 C 100 452, 100 504, 130 530" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 130 426 C 160 452, 160 504, 130 530" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 86 452 C 110 468, 150 468, 174 452" stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d="M 86 500 C 110 514, 150 514, 174 500" stroke={GREEN} sw={2} dur={0.5} />

      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={230} y={430} size={14} fill={RED} weight={800} anchor="start">
          {t("FOUR FAMILIES OF LINES ON THE GLOBE", "FOUR FAMILIES OF LINES ON THE GLOBE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={230} y={454} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("two families run roughly north–south · two wrap roughly around the other way",
             "two families run roughly north–south · two wrap roughly around the other way")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={230} y={486} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("isogonic — equal declination     ·     agonic — zero declination",
             "isogonic — equal declination     ·     agonic — zero declination")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={230} y={516} size={13.5} fill={GREEN} weight={800} anchor="start">
          {t("isoclinic — equal dip     ·     aclinic — zero dip, i.e. the magnetic equator",
             "isoclinic — equal dip     ·     aclinic — zero dip, i.e. the magnetic equator")}
        </T>
      </Fade>

      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <Chip x={40} y={548} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ hook: agonic = A Goose egg, a zero · isoGONIC = equal anGle, the declination one",
             "★ hook: agonic = A Goose egg, a zero · isoGONIC = equal anGle, the declination one")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch05 · Section 12 — "Speed trap: axial to equatorial in ten seconds"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: the same 2:1 structure but a different worked
 * instance — "B_axial = 0.4 T ⇒ B_eq = 0.2 T". Not one spoken number appeared
 * on the board, and the two field points were never drawn at equal distance,
 * which is the single fact the whole trick rests on.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: B_axial = 32 µT at r = 25 cm, find the
 * equatorial field at the SAME 25 cm. Form the ratio instead of either field:
 *     B_axial / B_eq = (2m/r³) ÷ (m/r³) = 2   (m, r³ and μ₀/4π all cancel)
 *     B_eq = ½ × 32 µT = 16 µT
 * with the two engineered distractors 32 µT (assumes the field is the same all
 * the way around) and 64 µT (doubled where it should have halved).
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "do not compute anything at all"        title + underline
 *   1  "one along the axis, one broadside"     geometry, both at 25 cm on one arc
 *   2  "axial is 32 µT, find the equatorial"   givens, "same distance" flagged
 *   3  "form the ratio"                        the cancellation → 2
 *   4  "half of thirty two is sixteen"         B_eq = 16 µT
 *   5  "the wrong answers are designed"        16 ✓ · 32 ✗ · 64 ✗
 *   6  "both points share the same r"          why everything cancels
 *   7  "lock in the rule"                      axial = 2 × equatorial + chip
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Same distance? Then never compute — just halve",
             "Same distance? Then never compute — just halve")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the geometry ---------------- */}
      <G transform="translate(50, 92)">
        {/* the equal-distance arc: both points really are the same r away */}
        <Draw on={beat >= 1} delay={dl(1, 1.8)}
          d="M 360 180 A 160 160 0 0 0 200 20" stroke={MUTED} sw={1.6} dur={0.9} />

        <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 200 180 L 352 180" stroke={INK} sw={1.7} dur={0.5} />
        <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M 200 180 L 200 28" stroke={INK} sw={1.7} dur={0.5} />

        {/* the magnet, drawn over the axis line */}
        <Fade on={beat >= 1} delay={dl(1, 0.25)}>
          <Rect x={130} y={166} width={70} height={28} fill={CREAM} stroke={INK} strokeWidth={2} />
          <Rect x={200} y={166} width={70} height={28} fill="#fdece9" stroke={INK} strokeWidth={2} />
          <T x={165} y={185} size={13} fill={INK} weight={800}>S</T>
          <T x={235} y={185} size={13} fill={RED} weight={800}>N</T>
          <Circle cx={200} cy={180} r={3.5} fill={INK} />
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 1.0)}>
          <Circle cx={360} cy={180} r={5} fill={RED} />
          <T x={374} y={176} size={13} fill={RED} weight={800} anchor="start">axial point</T>
          <T x={280} y={168} size={12.5} fill={MUTED} weight={700}>25 cm</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.6)}>
          <Circle cx={200} cy={20} r={5} fill={GREEN} />
          <T x={200} y={8} size={13} fill={GREEN} weight={800}>equatorial point</T>
          <T x={214} y={106} size={12.5} fill={MUTED} weight={700} anchor="start">25 cm</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 2.6)}>
          <T x={20} y={236} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("same distance, different direction — both points sit on one circle",
               "same distance, different direction — both points sit on one circle")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 2–4 — the ten-second route ---------------- */}
      <G transform="translate(560, 92)">
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("GIVEN", "GIVEN")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={0} y={46} size={14.5} fill={INK} weight={800} anchor="start">
            B_axial = 32 µT at r = 25 cm
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.0)}>
          <T x={0} y={72} size={14.5} fill={INK} weight={800} anchor="start">
            {t("find B_equatorial at the same r = 25 cm", "find B_equatorial at the same r = 25 cm")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.5)}>
          <T x={0} y={98} size={13} fill={AMBER_DARK} weight={700} anchor="start">
            {t("the words “same distance” are doing all the work",
               "the words “same distance” are doing all the work")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={0} y={140} size={14} fill={RED} weight={800} anchor="start">
            {t("FORM THE RATIO, NOT EITHER FIELD", "FORM THE RATIO, NOT EITHER FIELD")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.7)}>
          <T x={0} y={172} size={15} fill={INK} weight={800} anchor="start">
            B_axial / B_eq = (2m/r³) ÷ (m/r³) = 2
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={0} y={198} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("m cancels · r³ cancels · the constant cancels — only the 2 survives",
               "m cancels · r³ cancels · the constant cancels — only the 2 survives")}
          </T>
        </Fade>

        <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M 0 216 L 460 216" stroke={MUTED} sw={1.5} dur={0.5} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={0} y={250} size={19} fill={GREEN} weight={900} anchor="start">
            B_eq = ½ × 32 µT = 16 µT
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 5 — the engineered distractors ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={50} y={372} size={14} fill={RED} weight={800} anchor="start">
          {t("THE WRONG ANSWERS ARE ENGINEERED", "THE WRONG ANSWERS ARE ENGINEERED")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={50} y={388} w={300} h={42} fill={GREEN} textFill="#ffffff" size={13.5}>
          16 µT ✓ — half of 32
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Chip x={380} y={388} w={320} h={42} fill={CREAM} stroke={RED} textFill={RED} size={13.5}>
          {t("32 µT ✗ same all the way around", "32 µT ✗ same all the way around")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip x={730} y={388} w={310} h={42} fill={CREAM} stroke={RED} textFill={RED} size={13.5}>
          {t("64 µT ✗ doubled, not halved", "64 µT ✗ doubled, not halved")}
        </Chip>
      </Fade>

      {/* ---------------- beat 6 — why it works ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={50} y={464} size={13.5} fill={INK} weight={700} anchor="start">
          {t("it works because both points share the same r — every quantity that could have made this messy",
             "it works because both points share the same r — every quantity that could have made this messy")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={50} y={488} size={13.5} fill={INK} weight={700} anchor="start">
          {t("appears identically in both expressions and cancels, leaving pure structure behind",
             "appears identically in both expressions and cancels, leaving pure structure behind")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — the rule ---------------- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 66 506 v 34" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={84} y={530} size={14} fill={GREEN} weight={800} anchor="start">
          {t("the rule: at equal distance the axial field is exactly twice the equatorial — halve or double, and move on",
             "the rule: at equal distance the axial field is exactly twice the equatorial — halve or double, and move on")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={40} y={552} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ same r ⇒ B_axial : B_eq = 2 : 1 · so 32 µT axial gives 16 µT equatorial",
             "★ same r ⇒ B_axial : B_eq = 2 : 1 · so 32 µT axial gives 16 µT equatorial")}
        </Chip>
      </Fade>
    </Scene>
  );
}

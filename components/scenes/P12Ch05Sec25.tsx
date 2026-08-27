/**
 * P12Ch05 · Section 25 — "Speed trap: dip is not the same thing as latitude"
 * Subtopic: Earth's Magnetism
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: the same relation, but run FORWARDS from
 * λ = 30° to a dip of 49.1°, with the spoken problem demoted to a one-line
 * footnote. The student heard one question and watched another.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: run it BACKWARDS from the dip.
 *     tan δ = 2 tan λ  (tangents, never the angles)
 *     tan 45° = 1 = 2 tan λ   ⇒   tan λ = 0.5
 *     λ = tan⁻¹(0.5) ≈ 26.6°   — less than the dip, as it always must be
 *     distractor 45°   : assumed dip = latitude, factor of 2 forgotten
 *     distractor 22.5° : halved the ANGLE instead of the tangent
 * The two-ray sketch is drawn to scale (45° and 26.6° off the horizontal) so
 * the "dip is the steeper one" rule is visible, not just asserted.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "the whole thing turns on one word"   title + underline
 *   1  "look at the two panels"              trap panel (crossed out) + rule panel
 *   2  "the question tells us…"              given/asked strip
 *   3  "that relation… tangents, not angles" step 1
 *   4  "so substitute"                       step 2 → tan λ = 0.5
 *   5  "take the inverse tangent"            λ ≈ 26.6° + the to-scale ray sketch
 *   6  "forty five degrees is offered to…"   distractor 45°
 *   7  "and twenty two point five…"          distractor 22.5° + the rule chip
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Dip or latitude? The whole trap is one word",
             "Dip or latitude? The whole trap is one word")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 60 C 480 56, 660 64, 830 58" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the two panels ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={56} y={76} width={464} height={154} rx={12} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <T x={76} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("THE TRAP", "THE TRAP")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={288} y={152} size={17} fill={INK} weight={800}>dip = 45°   ⇒   latitude = 45°</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={crossD(163, 138, 250, 20)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={288} y={200} size={13} fill={RED} weight={800}>
          {t("it feels obvious — and it is wrong", "it feels obvious — and it is wrong")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Rect x={560} y={76} width={464} height={154} rx={12} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={580} y={104} size={14} fill={GREEN} weight={800} anchor="start">
          {t("THE ACTUAL RULE", "THE ACTUAL RULE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={792} y={158} size={20} fill={INK} weight={900}>tan δ = 2 tan λ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={792} y={200} size={13} fill={MUTED} weight={700}>
          {t("it relates the tangents, never the angles", "it relates the tangents, never the angles")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — given and asked ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={56} y={264} size={14} fill={INK} weight={800} anchor="start">
          {t("GIVEN: the angle of dip at a place is δ = 45°        ASKED: the magnetic latitude λ of that place",
             "GIVEN: the angle of dip at a place is δ = 45°        ASKED: the magnetic latitude λ of that place")}
        </T>
      </Fade>

      {/* ---------------- beats 3–5 — the three steps ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={56} y={300} size={13.5} fill={RED} weight={800} anchor="start">
          {t("step 1 — the relation from the dipole model", "step 1 — the relation from the dipole model")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={56} y={328} size={16} fill={INK} weight={800} anchor="start">tan δ = 2 tan λ</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={56} y={360} size={13.5} fill={RED} weight={800} anchor="start">
          {t("step 2 — substitute, and tan 45° is exactly 1", "step 2 — substitute, and tan 45° is exactly 1")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={56} y={388} size={16} fill={INK} weight={800} anchor="start">1 = 2 tan λ   ⇒   tan λ = 0.5</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={56} y={410} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("halve the TANGENT, not the angle", "halve the TANGENT, not the angle")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={56} y={442} size={13.5} fill={RED} weight={800} anchor="start">
          {t("step 3 — take the inverse tangent", "step 3 — take the inverse tangent")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={56} y={472} size={19} fill={GREEN} weight={900} anchor="start">λ = tan⁻¹(0.5) ≈ 26.6°</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={56} y={496} size={13} fill={INK} weight={700} anchor="start">
          {t("comfortably less than the dip we started from", "comfortably less than the dip we started from")}
        </T>
      </Fade>

      {/* the two angles, drawn to scale */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 680 462 L 1000 462" stroke={MUTED} sw={1.7} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.0)} d={arrowD(680, 462, 800, 342)} stroke={RED} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(680, 462, 868, 368)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 780 462 A 100 100 0 0 0 750.7 391.3" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.0)} d="M 735 462 A 55 55 0 0 0 729.2 437.4" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={808} y={336} size={13} fill={RED} weight={800} anchor="start">δ = 45°</T>
        <T x={876} y={364} size={13} fill={GREEN} weight={800} anchor="start">λ = 26.6°</T>
        <T x={1000} y={480} size={12.5} fill={MUTED} weight={700} anchor="end">horizontal</T>
      </Fade>

      {/* ---------------- beats 6 & 7 — the engineered distractors ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={56} y={512} w={470} h={40} fill={CREAM} stroke={RED} textFill={RED} size={13}>
          {t("45° ✗ — assumed dip = latitude, the factor of 2 forgotten",
             "45° ✗ — assumed dip = latitude, the factor of 2 forgotten")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={546} y={512} w={470} h={40} fill={CREAM} stroke={RED} textFill={RED} size={13}>
          {t("22.5° ✗ — halved the angle instead of the tangent",
             "22.5° ✗ — halved the angle instead of the tangent")}
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={40} y={560} w={1000} h={36} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ tan δ = 2 tan λ · dip is steeper than latitude, so the latitude is always the smaller number",
             "★ tan δ = 2 tan λ · dip is steeper than latitude, so the latitude is always the smaller number")}
        </Chip>
      </Fade>
    </Scene>
  );
}

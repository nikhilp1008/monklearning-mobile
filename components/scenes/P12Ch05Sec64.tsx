/**
 * P12Ch05 · Section 64 — "Board level: field inside a cored solenoid"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: a qualitative Alnico-versus-soft-iron
 * selection panel for lifting magnets, with no arithmetic anywhere on it.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: a worked CBSE numerical on the field
 * inside a cored solenoid. Every number on the board is now a spoken one:
 *      ℓ = 0.25 m, N = 500 turns, I = 2.0 A, μ_r = 600
 *      n = N/ℓ = 500 / 0.25 = 2000 m⁻¹
 *      B = μ₀ μ_r n I = (1.2566×10⁻⁶)(600)(2000)(2.0)
 *        = (1.2566×10⁻⁶)(2.4×10⁶) ≈ 3.0 T
 *      without the core: B₀ = μ₀ n I = (1.2566×10⁻⁶)(2000)(2.0) ≈ 5.0×10⁻³ T
 *      ratio 3.0 / 5.0×10⁻³ = 600, exactly μ_r
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "a clean CBSE question, one place to stumble"  title + underline
 *   1  "the picture has the given quantities on it"   the cored solenoid, drawn
 *   2  "0.25 m, 500 turns, 2.0 A, μ_r = 600"          the four givens as chips
 *   3  "divide 500 by 0.25 → 2000 per metre"          step 1 + the ×4 sanity check
 *   4  "the field is μ₀ μ_r n I"                      step 2, the substitution
 *   5  "their product is about three tesla"           the grouping and B ≈ 3.0 T
 *   6  "without the core it would be 5.0×10⁻³ T"      the comparison
 *   7  "multiplied by 600 — exactly its μ_r"          the ratio + closing chip
 */

import React from "react";
import { Ellipse, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const COILS = [130, 165, 200, 235, 270, 305, 340, 375, 410];

export default function P12Ch05Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Field inside a cored solenoid", "Core waale solenoid ke andar field")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 340 62 C 500 58, 650 66, 750 60" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the picture ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={48} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("THE SET-UP — FOUR NUMBERS, ONE FORMULA", "SET-UP — CHAAR NUMBERS, EK FORMULA")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Rect x={110} y={180} width={320} height={32} rx={3} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={270} y={202} size={12.5} fill={INK} weight={700}>
          {t("soft iron core, μ_r", "soft iron core, μ_r")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        {COILS.map((cx) => (
          <Ellipse key={cx} cx={cx} cy={196} rx={10} ry={40} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        ))}
        <T x={270} y={146} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("N turns", "N turns")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)}
        d={`M 130 156 V 138 ${arrowD(130, 138, 92, 138)}`} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={88} y={130} size={13} fill={INK} anchor="end" weight={800}>I</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)}
        d={`M 110 250 V 274 M 430 250 V 274 ${arrowD(270, 262, 110, 262)} ${arrowD(270, 262, 430, 262)}`}
        stroke={INK_LIGHT} sw={1.8} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={270} y={290} size={13} fill={INK_LIGHT} weight={800}>
          {t("ℓ  (length of the solenoid)", "ℓ  (solenoid ki lambai)")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the four givens ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={48} y={310} w={214} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ℓ = 0.25 m
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Chip x={274} y={310} w={214} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          N = 500 turns
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={48} y={356} w={214} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          I = 2.0 A
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={274} y={356} w={214} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          μ_r = 600
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={48} y={420} size={13.5} fill={RED} weight={800} anchor="start">
          {t("find: the field B inside the solenoid", "nikaalo: solenoid ke andar field B")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — step 1, turns per metre ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={538} y={116} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 1 · TURNS PER METRE — THE TRAP", "STEP 1 · TURNS PER METRE — YAHI TRAP HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={544} y={152} size={16} fill={INK} weight={800} anchor="start">
          n = N / ℓ = 500 / 0.25 m
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={544} y={182} size={18} fill={AMBER_DARK} weight={900} anchor="start">
          n = 2000 turns per metre
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={544} y={206} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("dividing by a quarter MULTIPLIES by four — sanity check passed",
             "chauthai se bhaag dena CHAAR GUNA karta hai — sanity check pass")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — step 2, the substitution ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={538} y={248} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 2 · SUBSTITUTE", "STEP 2 · SUBSTITUTE KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={544} y={282} size={17} fill={INK} weight={900} anchor="start">
          B = μ₀ μ_r n I
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={544} y={312} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          = 4π×10⁻⁷ × 600 × 2000 × 2.0
        </T>
      </Fade>

      {/* ---------------- beat 5 — group and evaluate ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={544} y={344} size={13.5} fill={INK} weight={700} anchor="start">
          μ₀ = 1.2566×10⁻⁶ · 600 × 2000 × 2.0 = 2.4×10⁶
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 544 358 L 1010 358" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={544} y={388} size={15} fill={INK} weight={800} anchor="start">
          B = (1.2566×10⁻⁶)(2.4×10⁶)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={544} y={424} size={24} fill={GREEN} weight={900} anchor="start">
          B ≈ 3.0 T
        </T>
      </Fade>

      {/* ---------------- beat 6 — strip the core away ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={48} y={464} size={14} fill={RED} weight={800} anchor="start">
          {t("PUT IT IN PERSPECTIVE — WITHOUT THE CORE", "PERSPECTIVE — AGAR CORE NA HO")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={48} y={494} size={15} fill={INK} weight={800} anchor="start">
          B₀ = μ₀ n I = (1.2566×10⁻⁶)(2000)(2.0) = 5.0×10⁻³ T
        </T>
      </Fade>

      {/* ---------------- beat 7 — the amplification ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={48} y={526} size={16} fill={GREEN} weight={900} anchor="start">
          3.0 T ÷ 5.0×10⁻³ T = 600 = μ_r
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={40} y={546} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ 3 tesla from a 2 A current in a coil you could hold in one hand — and soft iron drops it all the instant the switch opens",
             "★ 2 A current se 3 tesla, ek haath mein aane waali coil se — aur switch khulte hi soft iron sab chhod deta hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}

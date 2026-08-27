/**
 * P12Ch05 · Section 67 — "Advanced: designing an electromagnet backwards from the load"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: the demagnetising factor N_d and shape
 * anisotropy — H_d = −N_d M, needle N_d ≈ 0, sphere 1/3, plate 1. Never spoken.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: a JEE-Advanced design problem run
 * backwards, load → field → current. Every number below is spoken:
 *      spec: m = 200 kg, TWO pole faces of A = 10 cm² each, μ_r = 800,
 *            n = 4000 turns per metre
 *      link 1  F = m g = 200 × 9.8 = 1960 N
 *      link 2  F = B²A/μ₀  ⇒  B = √(F μ₀ / A),  A = 10 cm² = 1.0×10⁻³ m²
 *              F μ₀ = 1960 × 1.2566×10⁻⁶ = 2.463×10⁻³
 *              2.463×10⁻³ / 1.0×10⁻³ = 2.463 ;  √2.463 ≈ 1.57 T
 *      link 3  I = B / (μ₀ μ_r n);  μ₀ × 800 × 4000 = 4.021
 *              I = 1.57 / 4.021 ≈ 0.39 A
 *      no core: μ_r = 1 ⇒ 800 × 0.39 ≈ 310 A
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "the physics runs backwards here"        title + underline
 *   1  "the chain has three links"              the three-link chain across the top
 *   2  "the specification is this"              the horseshoe + block, and the four givens
 *   3  "the required holding force is mg"       link 1 worked
 *   4  "solve F = B²A/μ₀ for B instead"         link 2 rearranged + the area conversion
 *   5  "the square root of that is 1.57 T"      link 2 evaluated
 *   6  "invert the cored solenoid formula"      link 3 worked → 0.39 A
 *   7  "strip the core and you'd need 310 A"    the closing comparison
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const link = (k: number, x: number, w: number) => (
    <Fade on={beat >= k} delay={dl(k, 0.15)}>
      <Rect x={x} y={366} width={w} height={168} rx={10} fill={CREAM} stroke={MUTED} strokeWidth={1.4} />
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Designing an electromagnet backwards", "Electromagnet ko ulta design karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 320 60 C 490 56, 650 64, 770 58" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the three-link chain ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={44} y={76} width={300} height={66} rx={10} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <Rect x={390} y={76} width={300} height={66} rx={10} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <Rect x={736} y={76} width={300} height={66} rx={10} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)}
        d={`${arrowD(350, 109, 384, 109)} ${arrowD(696, 109, 730, 109)}`}
        stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={194} y={102} size={13} fill={RED} weight={800}>
          {t("① THE LOAD", "① THE LOAD")}
        </T>
        <T x={194} y={128} size={15} fill={INK} weight={900}>F = m g</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={540} y={102} size={13} fill={RED} weight={800}>
          {t("② THE FIELD", "② THE FIELD")}
        </T>
        <T x={540} y={128} size={15} fill={INK} weight={900}>B = √(F μ₀ / A)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={886} y={102} size={13} fill={RED} weight={800}>
          {t("③ THE CURRENT", "③ THE CURRENT")}
        </T>
        <T x={886} y={128} size={15} fill={INK} weight={900}>I = B / (μ₀ μ_r n)</T>
      </Fade>

      {/* ---------------- beat 2 — the specification ---------------- */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)}
        d="M 110 285 L 110 210 A 60 60 0 0 1 230 210 L 230 285"
        stroke={INK_LIGHT} sw={22} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Rect x={95} y={282} width={30} height={16} rx={3} fill={RED} />
        <Rect x={215} y={282} width={30} height={16} rx={3} fill={GREEN} />
        <Rect x={82} y={298} width={176} height={44} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={170} y={326} size={16} fill={INK} weight={900}>200 kg</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Chip x={330} y={172} w={344} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14.5} script={false}>
          m = 200 kg
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={686} y={172} w={344} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14.5} script={false}>
          {t("two pole faces, A = 10 cm² each", "do pole faces, A = 10 cm² har ek")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Chip x={330} y={220} w={344} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14.5} script={false}>
          μ_r = 800
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={686} y={220} w={344} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14.5} script={false}>
          n = 4000 turns / m
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={330} y={296} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("from what the device must ACHIEVE, to what you must BUILD",
             "device ko kya KARNA hai, usse — kya BANANA hai, tak")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={330} y={330} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          {t("a horseshoe grips the block with both pole faces at once",
             "horseshoe block ko dono pole faces se ek saath pakadta hai")}
        </T>
      </Fade>

      {/* ================= LINK 1 (beat 3) ================= */}
      {link(3, 44, 296)}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={58} y={394} size={13.5} fill={RED} weight={800} anchor="start">
          {t("LINK 1 · THE FORCE NEEDED", "LINK 1 · KITNA FORCE CHAHIYE")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={58} y={428} size={15} fill={INK} weight={800} anchor="start">
          F = m g = 200 × 9.8
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={58} y={464} size={20} fill={GREEN} weight={900} anchor="start">
          F = 1960 N
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={58} y={496} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the two faces must deliver this between them",
             "dono faces milkar itna force dein")}
        </T>
      </Fade>

      {/* ================= LINK 2 (beats 4 and 5) ================= */}
      {link(4, 366, 346)}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={380} y={394} size={13.5} fill={RED} weight={800} anchor="start">
          {t("LINK 2 · INVERT FOR B", "LINK 2 · B KE LIYE ULTA KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={380} y={422} size={14} fill={INK} weight={800} anchor="start">
          F = B²A / μ₀ ⇒ B = √(F μ₀ / A)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={380} y={446} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          A = 10 cm² = 1.0×10⁻³ m²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={380} y={474} size={13} fill={INK} weight={700} anchor="start">
          F μ₀ = 1960 × 1.2566×10⁻⁶ = 2.463×10⁻³
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={380} y={498} size={13} fill={INK} weight={700} anchor="start">
          B = √(2.463×10⁻³ / 1.0×10⁻³) = √2.463
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={380} y={524} size={19} fill={GREEN} weight={900} anchor="start">
          B ≈ 1.57 T
        </T>
      </Fade>

      {/* ================= LINK 3 (beat 6) ================= */}
      {link(6, 738, 302)}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={752} y={394} size={13.5} fill={RED} weight={800} anchor="start">
          {t("LINK 3 · INVERT FOR I", "LINK 3 · I KE LIYE ULTA KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={752} y={424} size={15} fill={INK} weight={800} anchor="start">
          I = B / (μ₀ μ_r n)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={752} y={452} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          μ₀ × 800 × 4000 = 4.021
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={752} y={478} size={13} fill={INK} weight={700} anchor="start">
          I = 1.57 / 4.021
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={752} y={510} size={20} fill={GREEN} weight={900} anchor="start">
          I ≈ 0.39 A
        </T>
      </Fade>

      {/* ---------------- beat 7 — strip the core away ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={40} y={548} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ μ_r = 800 lets 0.39 A hold 200 kg — set μ_r = 1 and you would need 800× that current, about 310 A",
             "★ μ_r = 800 ki wajah se 0.39 A se 200 kg — μ_r = 1 par 800 guna current chahiye, lagbhag 310 A")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * Ch05 · Section 13 — "Work, kinetic energy and the theorem — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.4, 33.3, 52.2, 71.3, 85.9, 106.5, 131.3, 143.7, 168.1] · dur 185.2;
 *        hi [0, 10.2, 32.3, 51.3, 70.5, 88.5, 107.2, 132.0, 147.3, 169.8] · dur 185.4):
 *  0 title + subtitle · 1 constant-force card · 2 general definition card
 *  3 one-dimension card · 4 kinetic energy card · 5 theorem card (wide)
 *  6 units & dimensions (right) · 7 conversions (left) · 8 the exam two (right)
 *  9 sign-rule green band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  rows: labels bl 118/232/346 (st x80 / x560) · chips y128..166 / 242..280 / 356..394
 *  notes bl 192/306/420
 *  S1 chip x80..380 · S2 chip x560..900 · S3 chip x80..420 · S4 chip x560..760
 *  S5 chip x80..500 (theorem) · b6 right lines bl356/382 + note bl408
 *  b7 label bl448 st x80 · lines st x90 bl474/498
 *  b8 label bl448 st x560 · lines st x570 bl474/498 · red note cx770 bl522
 *  b9 | bar x66 y535..585 · lines st x84 bl555 / bl578
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Work, KE & the Theorem — Key Formulas", "Work, KE & the Theorem — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "a clean page — the rest of the chapter keeps coming back here",
            "ek saaf page — baaqi chapter baar-baar yahin lautega"
          )}
        </T>
      </Fade>

      {/* beat 1 — constant force */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t("1 · constant force", "1 · constant force")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={128} w={300} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          W = F · S = F S cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={250} y={192} size={13} fill={RED} script>
          {t(
            "constant F, straight line — ONLY then",
            "constant F, seedhi line — SIRF tabhi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the general definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t("2 · general definition — always allowed", "2 · general definition — hamesha chalti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={560} y={128} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          W = ∫ F · dr (ri → rf)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={740} y={192} size={13} fill={MUTED} script>
          {t(
            "survives changing forces & curved paths",
            "badalte forces aur mude paths — sab jhel jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — one dimension */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={80} y={232} size={13} fill={AMBER_DARK} script anchor="start">
          {t("3 · one dimension", "3 · ek dimension mein")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={80} y={242} w={340} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          W = ∫ F dx = area under F-x
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={250} y={306} size={13} fill={MUTED} script>
          {t("the area version is usually faster", "area waala version aksar tez padta hai")}
        </T>
      </Fade>

      {/* beat 4 — kinetic energy */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={232} size={13} fill={AMBER_DARK} script anchor="start">
          {t("4 · kinetic energy", "4 · kinetic energy")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={560} y={242} w={200} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          K = ½ m v²
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={700} y={306} size={13} fill={MUTED} script>
          {t("always + · 2× speed → 4× K", "hamesha + · 2× speed → 4× K")}
        </T>
      </Fade>

      {/* beat 5 — the theorem */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={346} size={13} fill={AMBER_DARK} script anchor="start">
          {t("5 · the theorem — NET does the lifting", "5 · theorem — saara bojh NET par")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={80} y={356} w={420} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          W_net = ΔK = ½ m vf² − ½ m vi²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={290} y={420} size={13} fill={GREEN} script>
          {t("NET = the sum over EVERY force acting", "NET = HAR lagne waale force ka jod")}
        </T>
      </Fade>

      {/* beat 6 — units & dimensions */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={356} size={14} fill={INK} anchor="start" weight={700}>
          [W] = [E] = M L² T⁻² (joule)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={560} y={382} size={14} fill={INK} anchor="start" weight={700}>
          [F] = M L T⁻² (N) · [S] = m
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={745} y={408} size={12.5} fill={GREEN} script>
          {t(
            "same dimensions — the theorem demands it",
            "same dimensions — theorem ki maang hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — conversions */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={80} y={448} size={13} fill={AMBER_DARK} script anchor="start">
          {t("conversions", "conversions")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={90} y={474} size={14} fill={INK} anchor="start" weight={700}>
          1 J = 1 N·m = 1 kg m² s⁻²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={90} y={498} size={14} fill={INK} anchor="start" weight={700}>
          1 erg = 10⁻⁷ J
        </T>
      </Fade>

      {/* beat 8 — the exam two */}
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={560} y={448} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the two that appear in questions", "jo do sach mein sawaalon mein aate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={570} y={474} size={14} fill={INK} anchor="start" weight={700}>
          1 eV = 1.6 × 10⁻¹⁹ J
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={570} y={498} size={14} fill={INK} anchor="start" weight={700}>
          1 kWh = 3.6 × 10⁶ J
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={770} y={522} size={12.5} fill={RED} script>
          {t("energy, NOT power — the bill trap", "energy hai, power NAHI — bill waala trap")}
        </T>
      </Fade>

      {/* beat 9 — the sign rule */}
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 66 535 v 50" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.5)}>
        <T x={84} y={555} size={13} fill={GREEN} script anchor="start">
          {t(
            "cos θ + → +W · cos θ − → −W · θ = 90° → exactly 0",
            "cos θ + → +W · cos θ − → −W · θ = 90° → bilkul 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={84} y={578} size={13} fill={GREEN} script anchor="start">
          {t(
            "free one-mark answers, zero calculation",
            "muft ke one-mark jawab, calculation zero"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

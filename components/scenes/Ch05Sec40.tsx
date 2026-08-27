/**
 * Ch05 · Section 40 — "Nuclear mass defect, and the Sun's mass loss" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.5, 36.9, 61.7, 86.5, 98.1, 119.8, 144.6, 165.2] · dur 190.0;
 *        hi [0, 16.9, 32.0, 56.8, 78.0, 88.3, 109.4, 134.2, 157.9] · dur 182.7):
 *  0 title + subtitle
 *  1 Ex3 setup chip
 *  2 long road ✗ vs 931.5 shortcut
 *  3 18.63 MeV chip
 *  4 pivot to the Sun
 *  5 Ex4 setup chip
 *  6 dm/dt = P/c² → 4.2×10⁹ kg/s
 *  7 per day → 3.6×10¹⁴ kg
 *  8 sanity-check band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex3: lbl st x80 bl114 · chip x80..460 y124..160 · red st x90 bl205 · green bl233
 *   chip x90..400 y255..293 · script cx250 bl320 · amber cx250 bl360
 *  Ex4: lbl st x560 bl114 · chip x560..1010 y124..160 · st x570 bl205 / bl233
 *   chip x570..900 y255..293 · script cx760 bl320 · b7 st x570 bl360 / bl390
 *  b8 | bar x66 y430..530 · lines st x84 bl450 / bl476 / bl502
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

export default function Ch05Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Nuclear Mass Defect & the Sun's Mass Loss", "Nuclear Mass Defect & Sooraj ka Mass Loss")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "pure numerical substitution — clean handling of powers of ten",
            "shuddh numerical substitution — powers of ten ka saaf handling"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 3 — JEE Main: mass defect", "Ex 3 — JEE Main: mass defect")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={380} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13.5} script={false}>
          Δm = 0.02 u → E in MeV ?
        </Chip>
      </Fade>

      {/* beat 2 — the shortcut */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={205} size={12.5} fill={RED} script anchor="start">
          {t(
            "kg → ×c² → J → MeV — long and error-prone ✗",
            "kg → ×c² → J → MeV — lamba aur galti-bhara ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={90} y={233} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "shortcut: E = Δm × 931.5 MeV — mc² already baked in",
            "shortcut: E = Δm × 931.5 MeV — mc² pehle se andar hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the answer */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={90} y={255} w={310} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14.5} script={false}>
          0.02 × 931.5 ≈ 18.63 MeV
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={250} y={320} size={12.5} fill={MUTED} script>
          {t(
            "one multiplication — SI units never touched",
            "ek guna — SI units ko haath bhi nahi lagaya"
          )}
        </T>
      </Fade>

      {/* beat 4 — pivot */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={250} y={360} size={13} fill={AMBER_DARK} script>
          {t(
            "same equation — now point it at the Sun",
            "wahi equation — ab Sooraj ki taraf modo"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex4 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 4 — JEE Advanced: a rate", "Ex 4 — JEE Advanced: ek rate")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={124} w={450} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "Sun: P = 3.8×10²⁶ W · (a) mass-loss rate?",
            "Sooraj: P = 3.8×10²⁶ W · (a) mass-loss rate?"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the reasoning */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={570} y={205} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("P = E per second · m = E ⁄ c²", "P = E har second · m = E ⁄ c²")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={570} y={233} size={13.5} fill={INK} anchor="start" weight={700}>
          dm⁄dt = P ⁄ c² = 3.8×10²⁶ ⁄ 9×10¹⁶
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <Chip x={570} y={255} w={280} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14.5} script={false}>
          ≈ 4.2×10⁹ kg/s
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 20)}>
        <T x={760} y={320} size={12.5} fill={AMBER_DARK} script>
          {t(
            "four billion kg every second — just by shining",
            "chaar arab kg har second — sirf chamak kar"
          )}
        </T>
      </Fade>

      {/* beat 7 — per day */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={570} y={360} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("(b) per day: × 86400 = 8.64×10⁴ s", "(b) har din: × 86400 = 8.64×10⁴ s")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={570} y={390} size={13.5} fill={INK} anchor="start" weight={800}>
          4.2×10⁹ × 8.64×10⁴ ≈ 3.6×10¹⁴ kg
        </T>
      </Fade>

      {/* beat 8 — the sanity check */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 430 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={450} size={13} fill={INK} script anchor="start">
          {t(
            "sounds catastrophic — yet negligible over the Sun's lifetime",
            "vinashkari lagta hai — par Sooraj ke jeevan mein nagany hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={84} y={476} size={13} fill={GREEN} script anchor="start">
          {t(
            "the books balance — it will shine for billions of years",
            "kitaben barabar — wo arabon saal chamakta rahega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={84} y={502} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "Advanced in a nutshell: clean rates, powers of ten, then sanity-check the scale",
            "Advanced ka saar: saaf rates, powers of ten, phir scale ka sanity-check"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

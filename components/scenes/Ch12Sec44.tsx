/**
 * Ch12 · Section 44 — Worked example [JEE Main]: mean free path of nitrogen
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.22, 26.79, 32.85, 45.82, 59.56, 68.78, 79.02]):
 *  0 title + problem · 1 reach for P-T form directly · 2 formula λ=kT/(√2πd²P)
 *    · 3 numerator kT=4.14e-21 · 4 denominator ≈6.08e-14 · 5 λ≈6.8e-8 m ≈68nm
 *    · 6 ≈200 molecular diameters (mostly free picture) · 7 follow-on:
 *    collision freq ≈7e9/s
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 21, red)          | T mid | x270..810 y37..72 (bl60)
 *  b0 | problem (12, ink, script)       | T mid | x540 y88
 *  b1 | reasoning (13, ink, script)     | T mid | x540 y112
 *  b2 | formula (15, ink)               | T mid | x540 y138
 *  b3 | numerator (13, ink)             | T mid | x540 y162
 *  b4 | denominator (13, ink)           | T mid | x540 y186
 *  b5 | answer (19, amber_dark, bold)   | T mid | x540 y218
 *  b6 | verdict (14, green, script)     | T mid | x540 y250
 *  b7 | follow-on chip (green)           | Chip  | x220..860 y272..312
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("mean free path of nitrogen [JEE Main]", "nitrogen ki mean free path [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "N₂ @300K, P=1×10⁵Pa, d=3.7×10⁻¹⁰m, kʙ=1.38×10⁻²³ ⇒ λ?",
            "N₂ @300K, P=1×10⁵Pa, d=3.7×10⁻¹⁰m, kʙ=1.38×10⁻²³ ⇒ λ?"
          )}
        </T>
      </Fade>

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={13} fill={INK} script>
          {t("P and T given ⇒ reach for the P-T form directly", "P aur T diye ⇒ P-T form seedha uthao")}
        </T>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={15} fill={INK} weight={700}>
          λ = kʙT / (√2 πd²P)
        </T>
      </Fade>

      {/* beat 3 — numerator */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={162} size={13} fill={INK}>
          kʙT = 1.38×10⁻²³ × 300 = 4.14×10⁻²¹ J
        </T>
      </Fade>

      {/* beat 4 — denominator */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={186} size={13} fill={INK}>
          √2 π(3.7×10⁻¹⁰)²(10⁵) ≈ 6.08×10⁻¹⁴
        </T>
      </Fade>

      {/* beat 5 — answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={218} size={19} fill={AMBER_DARK} weight={700}>
          λ ≈ 6.8×10⁻⁸ m ≈ 68 nm
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={250} size={14} fill={GREEN} script>
          {t(
            "≈200 molecular diameters — mostly free, occasionally colliding",
            "≈200 molecular diameters — mostly free, kabhi kabhi colliding"
          )}
        </T>
      </Fade>

      {/* beat 7 — follow-on: collision frequency */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={220} y={272} w={640} h={40} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t(
            "v̄≈475 m/s ⇒ collision freq ≈7×10⁹/s (~7 billion times/sec)",
            "v̄≈475 m/s ⇒ collision freq ≈7×10⁹/s (~7 arab baar/sec)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

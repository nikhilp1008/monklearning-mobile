/**
 * Ch14 · Section 13 — "Superposition and beats: the toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.79, 8.76, 16.1, 24.14, 31.48, 38.11, 44.27]):
 *  0 framing: your complete reference for this subtopic
 *  1 y = y1 + y2 + y3 + ...
 *  2 A = √(A1²+A2²+2A1A2 cosφ)
 *  3 I = I1+I2+2√(I1I2) cosφ
 *  4 I_max = (√I1+√I2)², I_min = (√I1−√I2)²
 *  5 constructive: Δx=nλ · destructive: Δx=(n+½)λ
 *  6 f_beat=|f1−f2| · φ=2πΔx/λ
 *  7 tuning-fork rule: wax lowers f, filing raises f
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | "y=y1+y2+y3+..." (16)         | T st  | x60 bl300             y288..305
 *  b2 | "A=√(A1²+A2²+2A1A2cosφ)"(15)  | T st  | x60 bl335             y323..340
 *  b3 | "I=I1+I2+2√(I1I2)cosφ" (15)   | T st  | x60 bl370             y358..375
 *  b4 | I_max chip (h32)              | Chip  | x60..280  y400..432
 *  b4 | I_min chip (h32)              | Chip  | x300..520 y400..432
 *  b5 | "constructive: Δx=nλ" (15)    | T st  | x560 bl300            y288..305
 *  b5 | "destructive: Δx=(n+½)λ" (15) | T st  | x560 bl330            y318..335
 *  b6 | "f_beat=|f1-f2|" (15)         | T st  | x560 bl370            y358..375
 *  b6 | "φ=2πΔx/λ" (15)               | T st  | x560 bl400            y388..405
 *  b7 | tuning-fork chip (h56,s18)    | Chip  | x150..930 y500..556
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("superposition & beats: the toolkit", "superposition & beats: toolkit")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("your complete reference for this subtopic", "is poore subtopic ka complete reference")}
        </T>
      </Fade>

      {/* beat 1 — superposition */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={300} size={16} fill={INK} anchor="start">
          y = y₁ + y₂ + y₃ + ...
        </T>
      </Fade>

      {/* beat 2 — resultant amplitude */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={335} size={15} fill={INK} anchor="start">
          A = √(A₁² + A₂² + 2A₁A₂ cosφ)
        </T>
      </Fade>

      {/* beat 3 — resultant intensity */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={370} size={15} fill={INK} anchor="start">
          I = I₁+I₂+2√(I₁I₂) cosφ
        </T>
      </Fade>

      {/* beat 4 — the extremes */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={400} w={220} h={32} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          I_max = (√I₁+√I₂)²
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <Chip x={300} y={400} w={220} h={32} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          I_min = (√I₁−√I₂)²
        </Chip>
      </Fade>

      {/* beat 5 — path-difference conditions */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={300} size={15} fill={INK} anchor="start">
          {t("constructive: Δx = nλ", "constructive: Δx = nλ")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={560} y={330} size={15} fill={INK} anchor="start">
          {t("destructive: Δx = (n+½)λ", "destructive: Δx = (n+½)λ")}
        </T>
      </Fade>

      {/* beat 6 — beat frequency and phase relation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={560} y={370} size={15} fill={INK} anchor="start">
          f_beat = |f₁ − f₂|
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={560} y={400} size={15} fill={INK} anchor="start">
          φ = 2πΔx/λ
        </T>
      </Fade>

      {/* beat 7 — the tuning-fork rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={150} y={500} w={780} h={56} fill="#fff" stroke={AMBER} textFill={INK} size={18} script={false}>
          {t(
            "WAX → lowers f   |   FILE → raises f (master one, get the other!)",
            "WAX → f GHATAYE   |   FILE → f BADHAYE (ek yaad karo, dusra free!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * Ch14 · Section 12 — "Board derivation: why beats equal the difference"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.68, 17.07, 24.25, 33.9, 38.35, 48.99, 60.13]):
 *  0 hook badge: the factor of 2 everyone drops
 *  1 setup: 2 waves, equal A, f1≈f2, one point → time-dependence only
 *  2 y1 = A cos(2πf1t), y2 = A cos(2πf2t)
 *  3 sum-to-product: y1+y2 = 2A cos(2π·Δf/2·t) · cos(2π·f_avg·t)
 *  4 two very different rhythms, one expression
 *  5 slow factor = envelope (swell/fade); fast factor = the note you hear
 *  6 crucial: loudness ∝ |envelope| — max TWICE per cycle (cos=+1 AND −1)
 *  7 so throb rate = 2×(Δf/2) = Δf, the FULL difference
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..410  y100..132
 *  b0 | underline                     | Draw  | x100..390 y138
 *  b1 | setup (13)                    | T st  | x400 bl124            y113..127
 *  b2 | "y1=A cos(2πf1t)" (15)        | T st  | x60 bl290             y278..295
 *  b2 | "y2=A cos(2πf2t)" (15)        | T st  | x60 bl315             y303..320
 *  b3 | sum-product chip (h44,s15)    | Chip  | x330..750 y345..389
 *  b4 | "two rhythms..." (13,muted)   | T mid | x540 bl410            y401..414
 *  b5 | slow chip (h38,s13)           | Chip  | x60..520  y430..468
 *  b5 | fast chip (h38,s13)           | Chip  | x560..1020 y430..468
 *  b6 | mini cosine curve             | Draw  | x430..650 y487..523
 *  b6 | ring ×2 (peak + trough)       | Draw  | c(430,487)/(540,523) r10/8
 *  b6 | caption (12,green)            | T mid | x540 bl548            y536..550
 *  b7 | final (15,green)              | T mid | x540 bl575            y559..582
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function cosD(x1: number, baseline: number, amp: number, width: number): string {
  const N = 48;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = baseline - amp * Math.cos(2 * Math.PI * u);
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

export default function Ch14Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("deriving f_beat = |f₁ − f₂|", "f_beat = |f₁-f₂| derive karna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={270} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ the factor of 2 everyone drops!", "★ wo factor of 2 jo sab drop karte!")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 138 L 340 138" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={410} y={124} size={13} fill={INK} anchor="start">
          {t(
            "2 waves, equal A, f₁≈f₂, one point → time-dependence only",
            "2 waves, equal A, f₁≈f₂, ek point → sirf time-dependence"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two arrivals */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={290} size={15} fill={INK} anchor="start">
          y₁ = A cos(2πf₁t)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={60} y={315} size={15} fill={INK} anchor="start">
          y₂ = A cos(2πf₂t)
        </T>
      </Fade>

      {/* beat 3 — sum-to-product */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={330} y={345} w={420} h={44} fill="#fff" stroke={AMBER} textFill={INK} size={15} script={false}>
          y₁+y₂ = 2A cos(2π·Δf/2·t) · cos(2π·f_avg·t)
        </Chip>
      </Fade>

      {/* beat 4 — two rhythms in one expression */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={410} size={13} fill={MUTED} script>
          {t("→ two very different rhythms, one expression", "→ do bilkul alag rhythms, ek hi expression")}
        </T>
      </Fade>

      {/* beat 5 — slow envelope vs fast note */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={60} y={430} w={460} h={38} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("slow: cos(2π·Δf/2·t) → the ENVELOPE", "slow: cos(2π·Δf/2·t) → ENVELOPE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Chip x={560} y={430} w={460} h={38} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("fast: cos(2π·f_avg·t) → the NOTE you hear", "fast: cos(2π·f_avg·t) → jo NOTE sunayi deta")}
        </Chip>
      </Fade>

      {/* beat 6 — the crucial factor of 2 */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={cosD(430, 505, 18, 220)} stroke={INK} sw={1.8} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ringD(430, 487, 10, 8)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d={ringD(540, 523, 10, 8)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={540} y={548} size={12} fill={GREEN} script>
          {t("envelope hits MAX loudness TWICE per cycle!", "envelope apne cycle mein DO baar MAX loudness chhuta!")}
        </T>
      </Fade>

      {/* beat 7 — the punchline */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={575} size={15} fill={GREEN} script>
          {t(
            "throb rate = 2×(Δf/2) = Δf — the FULL difference, not half!",
            "throb rate = 2×(Δf/2) = Δf — POORA difference, aadha nahi!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch05 · Section 52 — "Board level: flux through a tilted coil"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork worked a different problem.
 *
 * WHAT THE BOARD USED TO TEACH: flux through a hemispherical bowl, using
 * Gauss's law to get Φ_bowl = −πR²B from the flat base. The voice never
 * mentions a bowl, a hemisphere or a projected base.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: a flat circular coil of radius
 * 5.0 cm tilted in a uniform 0.40 T field, with the NORMAL at 60° to the
 * field. Every number on the board is now the spoken one:
 *     r  = 5.0 cm = 0.050 m
 *     A  = π r² = π (0.050)² = 7.85 × 10⁻³ m²
 *     Φ  = B A cos θ = 0.40 × 7.85×10⁻³ × cos 60°
 *        = 0.40 × 7.85×10⁻³ × 0.5 = 1.5708×10⁻³ ≈ 1.6 × 10⁻³ Wb
 *   and the trap variant, 60° measured from the PLANE instead:
 *     θ_normal = 30°, cos 30° = 0.866
 *     Φ  = 0.40 × 7.85×10⁻³ × 0.866 = 2.72×10⁻³ ≈ 2.7 × 10⁻³ Wb
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "one place to go wrong"                   title + framing line
 *   1  "a coil tilted in a uniform field"        the diagram: coil, n̂, B, 60°
 *   2  "we are given…"                           the given data block
 *   3  "convert, then find the area"             r → 0.050 m · A = 7.85×10⁻³ m²
 *   4  "use the simple product form"             Φ = B A cos θ
 *   5  "cos 60° is exactly one half"             the substitution and 1.6×10⁻³ Wb
 *   6  "the 60° was already from the normal"     why no adjustment is needed
 *   7  "had it been the angle with the plane"    the 30° variant + chip
 */

import React from "react";
import { Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Board level: flux through a tilted coil", "Board level: tilted coil se flux")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 290 64 C 500 60, 650 68, 800 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("A straightforward CBSE question — with exactly one place to go wrong.",
             "Seedha CBSE sawaal — galti hone ki sirf ek jagah hai.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the set-up, drawn ---------------- */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(96, 180, 440, 180)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.45)} d={arrowD(96, 300, 440, 300)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 96 240 L 178 240" stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(336, 240, 440, 240)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={452} y={305} size={15} fill={AMBER_DARK} weight={800} anchor="start">B</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Ellipse cx={250} cy={240} rx={78} ry={22} transform="rotate(30 250 240)"
          fill={CREAM} stroke={INK} strokeWidth={2.6} />
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Line x1={250} y1={240} x2={296} y2={160} stroke={GREEN_DARK} strokeWidth={2.2} strokeDasharray="7 6" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(292, 168, 310, 138)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={320} y={132} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ — normal to the coil", "n̂ — coil ka normal")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Line x1={250} y1={240} x2={330} y2={240} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 296 240 A 46 46 0 0 0 273 200.2" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={306} y={216} size={14} fill={RED} weight={900}>60°</T>
        <T x={250} y={336} size={12.5} fill={INK_LIGHT} weight={700}>
          {t("flat circular coil", "flat circular coil")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the given data ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={378} size={14} fill={RED} weight={800} anchor="start">
          {t("GIVEN", "GIVEN")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={60} y={406} size={14} fill={INK} weight={800} anchor="start">r = 5.0 cm</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={60} y={432} size={14} fill={INK} weight={800} anchor="start">B = 0.40 T (uniform)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={60} y={458} size={14} fill={INK} weight={800} anchor="start">θ = 60° between n̂ and B</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={60} y={484} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("FIND: the magnetic flux Φ through the coil", "NIKAALO: coil se magnetic flux Φ")}
        </T>
      </Fade>

      {/* ---------------- RIGHT: the working ---------------- */}
      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={530} y={130} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 1 · CONVERT, THEN FIND THE AREA", "STEP 1 · CONVERT KARO, PHIR AREA")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={530} y={160} size={15} fill={INK} weight={800} anchor="start">r = 5.0 cm = 0.050 m</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={530} y={190} size={15} fill={INK} weight={800} anchor="start">
          A = π r² = π (0.050)² = 7.85 × 10⁻³ m²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={530} y={216} size={12.5} fill={RED} weight={700} anchor="start">
          {t("convert the radius BEFORE squaring — or the power of ten goes wrong",
             "square karne se PEHLE radius convert karo — warna power of ten galat")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={530} y={262} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 2 · FLAT COIL, UNIFORM FIELD", "STEP 2 · FLAT COIL, UNIFORM FIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={530} y={296} size={19} fill={INK} weight={900} anchor="start">Φ = B A cos θ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={530} y={320} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("everything is known — this is a single substitution",
             "sab kuch pata hai — bas ek substitution hai")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={530} y={362} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 3 · SUBSTITUTE", "STEP 3 · SUBSTITUTE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={530} y={390} size={14.5} fill={AMBER_DARK} weight={800} anchor="start">
          cos 60° = ½
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={530} y={418} size={14.5} fill={AMBER_DARK} weight={800} anchor="start">
          Φ = 0.40 × 7.85 × 10⁻³ × 0.5
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 530 434 L 900 434" stroke={INK} sw={1.7} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={530} y={466} size={20} fill={GREEN} weight={900} anchor="start">
          Φ ≈ 1.6 × 10⁻³ Wb
        </T>
      </Fade>

      {/* beat 6 — why no adjustment is needed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={60} y={516} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("The 60° was already measured FROM THE NORMAL, exactly as the definition requires — cos 60° stands, no adjustment.",
             "60° pehle se NORMAL se naapa gaya hai, jaisa definition maangti hai — cos 60° hi sahi hai, koi badlaav nahi.")}
        </T>
      </Fade>

      {/* beat 7 — the flip */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={60} y={536} size={13} fill={RED} weight={800} anchor="start">
          {t("Had it said 60° with the PLANE of the coil: angle from the normal = 30°, cos 30° = 0.866 ⇒ Φ ≈ 2.7 × 10⁻³ Wb.",
             "Agar likha hota 60° coil ke PLANE se: normal se angle = 30°, cos 30° = 0.866 ⇒ Φ ≈ 2.7 × 10⁻³ Wb.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={40} y={552} w={1000} h={40} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Φ ≈ 1.6 × 10⁻³ Wb · always read WHICH angle the question gave before you write the cosine",
             "★ Φ ≈ 1.6 × 10⁻³ Wb · cosine likhne se pehle dekho ki sawaal ne KAUNSA angle diya hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}

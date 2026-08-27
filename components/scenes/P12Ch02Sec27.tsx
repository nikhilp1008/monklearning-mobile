/**
 * P12Ch02 · Section 27 — "Capacitance is geometry alone — not charge, not voltage"
 * Subtopic: Capacitance, Dielectrics & Stored Energy
 *
 * BOARD (unchanged): left panel = the "more charge means more capacitance"
 * myth and why C = Q/V is untouched by it; right panel = C = ε₀A/d and the two
 * geometric handles (double A → 2C, double d → C/2).
 *
 * BEAT GATING FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The determinants badge, its heading, its two
 *    lines and the footer chip were gated on `beat >= 7`. This section has 7
 *    narration segments, so useBeat only ever returns 0..6 — none of it ever
 *    appeared in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,3,4,7}: beats 2, 5 and 6 were unused
 *    and the entire left panel dumped at once on beat 1, leaving the board
 *    frozen from 32s to the end.
 *
 * 3. THE TWO PANELS WERE IN THE WRONG ORDER. The voice opens with geometry
 *    ("plate area, plate separation, and whatever fills the gap — that is the
 *    complete list") and only THEN attacks the charge/voltage myth. The right
 *    panel is therefore now beat 1 and the left panel beat 2 onwards; the
 *    layout itself is untouched. Gates now map 1:1 onto the segments:
 *
 *      0  "the most counterintuitive fact"        title
 *      1  "geometry alone — the complete list"    C = ε₀A/d panel + A/d handles
 *      2  "not the charge, not the voltage"       the myth
 *      3  "pouring more water can't widen a tank" doubling Q doubles V
 *      4  "Q and V rise in perfect lockstep"      C = 2Q/2V = Q/V unchanged
 *      5  "if C changed, geometry must have"      R = V/I parallel + determinants
 *      6  "the farad, one coulomb per volt"       footer verdict
 *
 * No numbers were changed: every quantity drawn (A, d, ε₀, the 2× factors) is
 * exactly what the narration describes.
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Capacitance C = ε₀ A / d Depends ONLY on Geometry (Area A & Spacing d)", "Capacitance C = ε₀ A / d Depends ONLY on Geometry (Area A & Spacing d)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MISCONCEPTION VS REALITY */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE Q AND V INDEPENDENCE MISCONCEPTION", "THE Q AND V INDEPENDENCE MISCONCEPTION")}
          </T>
        </Fade>

        {/* beat 2 — not the charge you stored, not the voltage you applied */}
        <Fade on={beat >= 2} delay={dl(2, 0.9)}>
          <T x={45} y={80} size={15} fill={RED} weight={800} anchor="start">
            ✗ MYTH: "Increasing charge Q increases capacitance C"
          </T>
        </Fade>

        {/* beat 3 — pouring in more water does not widen the tank */}
        <Fade on={beat >= 3} delay={dl(3, 0.3)}>
          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            • FACT: Doubling Q automatically doubles voltage V (V = Q / C)!
          </T>
        </Fade>

        {/* beat 4 — Q and V rise in perfect lockstep, so the ratio holds */}
        <Fade on={beat >= 4} delay={dl(4, 0.3)}>
          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            • The ratio C = (2Q) / (2V) = Q / V remains 100% UNCHANGED!
          </T>
        </Fade>

        {/* beat 5 — the same diagnostic you already trust for resistance */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={45} y={268} anchor="start" size={13} fill={AMBER_DARK} weight={800}>
            Like Resistance R = V / I (depends on length & area, NOT V or I)!
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: GEOMETRICAL CONTROLS (A & d) */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("GEOMETRICAL DEPENDENCE FORMULA: C = ε₀ A / d", "GEOMETRICAL DEPENDENCE FORMULA: C = ε₀ A / d")}
          </T>
        </Fade>

        {/* beat 1 — area, separation, medium: that is the complete list */}
        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <Line x1="45" y1="90" x2="340" y2="90" stroke={RED} strokeWidth={4} />
          <T x={355} y={94} size={14} fill={RED} weight={800} anchor="start">Area A</T>

          <Line x1="45" y1="160" x2="340" y2="160" stroke={GREEN} strokeWidth={4} />
          <T x={355} y={164} size={14} fill={GREEN} weight={800} anchor="start">Spacing d</T>

          {/* Formula & Controls */}
          <T x={45} y={205} size={15} fill={GREEN} weight={800} anchor="start">
            C = ε₀ A / d   (Air / Vacuum Capacitor)
          </T>

          <T x={45} y={245} size={13} fill={GREEN} weight={800} anchor="start">
            • Double Area A → Double Capacitance 2C
          </T>

          <T x={45} y={268} size={13} fill={RED} weight={800} anchor="start">
            • Double Spacing d → Halve Capacitance C / 2
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.5)} />
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("SUMMARY OF CAPACITANCE DETERMINANTS", "SUMMARY OF CAPACITANCE DETERMINANTS")}
          </T>
        </Fade>

        <Fade on={beat >= 5} delay={dl(5, 1.1)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            1. Plate Surface Area A   |   2. Plate Separation Distance d   |   3. Dielectric Constant K of Medium!
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Charge Q and Potential V determine the operating point, NOT the physical capacity C!
          </T>
        </Fade>
      </G>

      {/* beat 6 — the unit, and the closing verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Geometry Rule Mastered: C = ε₀A/d is a fixed physical property set by shape, size & medium! ✓",
            "★ Geometry Rule Mastered: C = ε₀A/d is a fixed physical property set by shape, size & medium! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

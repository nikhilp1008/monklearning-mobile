/**
 * P12Ch04 · Section 38 — "Derivation B: The Far Field of a Current Loop"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   The interrupted-pass template: three "Badge + numbered prose" blocks and a
 *   full-width footer chip gated on beats 0, 1, 6 and 7 only, out of EIGHT
 *   narration segments. Beats 2, 3, 4 and 5 changed nothing at all, so the board
 *   stood still through the statement of the exact on-axis field (24 s), the
 *   whole far-field limit argument (49 s) and the recognition of the moment
 *   (24 s) — the three steps that ARE the derivation. Drawn elements on the
 *   whole board: the title underline plus two short rules. There was no loop,
 *   no axis, no field point, no distance — nothing geometric in a derivation
 *   whose entire content is "how big is x compared with R".
 *
 * WHAT THE NARRATION TEACHES
 *   The proof that a current loop really is a dipole from far away.
 *   ① Start from the exact on-axis field of a circular coil, derived in
 *      Subtopic One:  B = μ₀ N I R² / 2 (x² + R²)^(3/2)  — exact at every x.
 *   ② Take x ≫ R. Inside the bracket x² utterly dominates R², so
 *      (x² + R²)^(3/2) → (x²)^(3/2) = x³, giving B = μ₀ N I R² / 2x³ — a clean
 *      inverse cube, where a straight wire falls as 1/x and a point charge as
 *      1/x²; dipoles die away much faster than either.
 *   ③ N, I and R² are exactly what make the moment: m = N I A = N I π R², so
 *      N I R² = m/π. Substituting, B = (μ₀ / 2x³)(m/π) = (μ₀/4π)(2m/x³) — the
 *      electric dipole's axial field with p → m and 1/4πε₀ → μ₀/4π. The claim
 *      is proved rather than asserted; the equatorial field is exactly half,
 *      preserving the 2 : 1 ratio from electrostatics.
 *
 * ARITHMETIC CHECK (the tidy-up in ③)
 *   μ₀ N I R² / 2x³ with N I R² = m/π  →  μ₀ m / 2π x³.
 *   (μ₀/4π)(2m/x³) = 2 μ₀ m / 4π x³ = μ₀ m / 2π x³.  Identical. ✓
 *
 * THE FIGURE (left column, beats 1 and 3)
 *   The loop seen edge-on: the coil as a tall ellipse, ⊗ where the wire goes
 *   into the page at the top and ⊙ where it comes out at the bottom, the radius
 *   R drawn from the centre to the wire, the axis dashed out to the field point
 *   P, the field B drawn at P, and the distance x dimensioned underneath. At
 *   beat 3 the two lengths are pulled out and laid side by side as bars — a
 *   short red R against a long x — so "x ≫ R" is something you SEE.
 *
 * BEAT MAP (n_reveals = 8, gates 0…7 — every beat used)
 *   0  the promise         title + underline + subtitle
 *   1  the set-up          the figure: loop, ⊗/⊙, R, axis, P, B, x dimension
 *   2  the exact field     column rules + head ① + the exact chip + "exact at
 *                          every distance"
 *   3  the far-field limit head ② + "x² dominates R²" + the R-vs-x bars on the
 *                          figure + the bracket-collapse chip
 *   4  the inverse cube    B = μ₀ N I R² / 2x³ + the three decay mini-plots
 *                          (1/x, 1/x², 1/x³)
 *   5  spot the moment     head ③ + m = N I A, A = π R²
 *   6  substitute & tidy   N I R² = m/π  and  (μ₀/2x³)(m/π) = (μ₀/4π)(2m/x³)
 *   7  proved              bottom rule + the magnetic and electric axial chips
 *                          side by side + the two substitutions + the ½ note
 *
 * LAYOUT
 *   LEFT  x50..450  (b1, b3-annotation)   rule x456
 *   MID   x470..750 (b2, b3, b4)          rule x760
 *   RIGHT x772..1044 (b4-plots, b5, b6)
 *   BAND  y484..596 full width (b7)
 */

import React from "react";
import { Circle, Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Derivation B — The Far Field of a Current Loop",
             "Derivation B — The Far Field of a Current Loop")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 244 60 C 460 56, 656 64, 836 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t("we asserted a loop looks like a dipole from far away — here we prove it",
             "we asserted a loop looks like a dipole from far away — here we prove it")}
        </T>
      </Fade>

      {/* ══════════ LEFT — beat 1: the picture ══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={124} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE SET-UP, SEEN EDGE-ON", "THE SET-UP, SEEN EDGE-ON")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={50} y={146} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("coil of N turns, radius R · field point P on the axis",
             "coil of N turns, radius R · field point P on the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={130} y={178} size={11.5} fill={INK} weight={800}>
          {t("N turns", "N turns")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Ellipse cx={130} cy={260} rx={26} ry={66} fill="none" stroke={INK} strokeWidth={2.6} />
      </Fade>
      {/* current into the page at the top, out of the page at the bottom */}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={130} cy={194} r={8} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)}
        d="M 124.3 188.3 L 135.7 199.7 M 135.7 188.3 L 124.3 199.7" stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Circle cx={130} cy={326} r={8} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <Circle cx={130} cy={326} r={2.6} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={60} y={198} size={12} fill={GREEN_DARK} weight={800} anchor="start">I in</T>
        <T x={56} y={331} size={12} fill={GREEN_DARK} weight={800} anchor="start">I out</T>
      </Fade>
      {/* radius */}
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d="M 130 260 L 130 204" stroke={MUTED} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={144} y={234} size={13.5} fill={INK} script anchor="start">R</T>
      </Fade>
      {/* axis + field point */}
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <Line x1={130} y1={260} x2={344} y2={260} stroke={MUTED} strokeWidth={1.5} strokeDasharray="7 5" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <Circle cx={348} cy={260} r={5.5} fill={INK} />
        <T x={348} y={244} size={12.5} fill={INK} weight={800}>P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.7)} d={arrowD(348, 260, 408, 260)} stroke={GREEN} sw={2.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 6.0)}>
        <T x={416} y={265} size={13.5} fill={GREEN} script anchor="start">B</T>
      </Fade>
      {/* the distance x, dimensioned */}
      <Draw on={beat >= 1} delay={dl(1, 6.4)}
        d="M 130 346 V 358 M 348 346 V 358 M 130 352 H 348" stroke={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 6.9)}>
        <T x={239} y={342} size={13.5} fill={INK} script>x</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={50} y={392} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("exact geometry — nothing approximated yet", "exact geometry — nothing approximated yet")}
        </T>
      </Fade>

      {/* beat 3 — the two lengths pulled out and compared */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={50} y={412} size={12.5} fill={RED} weight={800} anchor="start">
          {t("x ≫ R ?  lay the two lengths side by side:", "x ≫ R ?  lay the two lengths side by side:")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d="M 130 432 H 196" stroke={RED} sw={7} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={206} y={437} size={12.5} fill={RED} weight={800} anchor="start">R</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 130 458 H 348" stroke={INK} sw={7} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={358} y={463} size={12.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>

      {/* column rules */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 456 106 V 470" stroke={MUTED} sw={1.2} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 760 106 V 470" stroke={MUTED} sw={1.2} dur={0.7} />

      {/* ══════════ MID — beats 2, 3, 4: the algebra ══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={470} y={124} size={13} fill={RED} weight={800} anchor="start">
          {t("① THE EXACT ON-AXIS FIELD", "① THE EXACT ON-AXIS FIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={470} y={146} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("derived back in Subtopic One", "derived back in Subtopic One")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Chip x={470} y={156} w={280} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5}>
          B = μ₀ N I R² / 2 (x² + R²)^(3/2)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={470} y={218} size={12.5} fill={INK} weight={700} anchor="start">
          {t("exact at every distance, near or far —", "exact at every distance, near or far —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={470} y={236} size={12.5} fill={INK} weight={700} anchor="start">
          {t("nothing is being approximated yet", "nothing is being approximated yet")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={470} y={268} size={13} fill={RED} weight={800} anchor="start">
          {t("② NOW LET x ≫ R", "② NOW LET x ≫ R")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={470} y={290} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("inside x² + R², the x² utterly", "inside x² + R², the x² utterly")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={470} y={308} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("dominates — drop the R²", "dominates — drop the R²")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <Chip x={470} y={318} w={280} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          (x² + R²)^(3/2) → x³
        </Chip>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={470} y={368} w={280} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={14}>
          B = μ₀ N I R² / 2 x³
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={470} y={428} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("a clean inverse cube —", "a clean inverse cube —")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={470} y={446} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the signature of a dipole", "the signature of a dipole")}
        </T>
      </Fade>

      {/* ══════════ RIGHT — beat 4 decay plots, beats 5–6 ══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={772} y={124} size={13} fill={RED} weight={800} anchor="start">
          {t("HOW FAST EACH DIES AWAY", "HOW FAST EACH DIES AWAY")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.0)} d="M 848 176 H 1010" stroke={INK} sw={1.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d="M 852 144 C 884 168, 920 170, 1010 172" stroke={MUTED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.7)}>
        <T x={772} y={176} size={11.5} fill={MUTED} weight={800} anchor="start">wire  1/x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.1)} d="M 848 220 H 1010" stroke={INK} sw={1.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d="M 852 188 C 872 214, 900 216, 1010 217" stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={772} y={220} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">charge  1/x²</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.2)} d="M 848 264 H 1010" stroke={INK} sw={1.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 5.5)} d="M 852 232 C 866 258, 890 260, 1010 261" stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 5.9)}>
        <T x={772} y={264} size={11.5} fill={GREEN} weight={800} anchor="start">dipole  1/x³</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <T x={772} y={292} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the dipole dies away fastest", "the dipole dies away fastest")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={772} y={322} size={13} fill={RED} weight={800} anchor="start">
          {t("③ THOSE THREE ARE THE MOMENT", "③ THOSE THREE ARE THE MOMENT")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={772} y={344} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("m = N I A   and   A = π R²", "m = N I A   and   A = π R²")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={772} y={356} w={272} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5}>
          m = N I π R²  ⇒  N I R² = m/π
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={772} y={412} size={12} fill={INK} weight={700} anchor="start">
          {t("substitute, then tidy the constants:", "substitute, then tidy the constants:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Chip x={772} y={422} w={272} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={12}>
          (μ₀ / 2x³)(m/π) = (μ₀/4π)(2m/x³)
        </Chip>
      </Fade>

      {/* ══════════ BOTTOM BAND — beat 7 ══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 50 484 H 1044" stroke={INK} sw={1.5} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={50} y={508} size={13.5} fill={RED} weight={800} anchor="start">
          {t("IDENTICAL IN STRUCTURE TO THE ELECTRIC DIPOLE — SO THE CLAIM IS PROVED, NOT ASSERTED",
             "IDENTICAL IN STRUCTURE TO THE ELECTRIC DIPOLE — SO THE CLAIM IS PROVED, NOT ASSERTED")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={50} y={518} w={340} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          B_axial = (μ₀/4π)(2m/x³)
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={412} y={546} size={20} fill={MUTED} weight={800}>↔</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Chip x={436} y={518} w={340} h={42} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          E_axial = (1/4πε₀)(2p/x³)
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={800} y={534} size={12.5} fill={INK} weight={800} anchor="start">
          {t("p → m", "p → m")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={800} y={556} size={12.5} fill={INK} weight={800} anchor="start">
          {t("1/4πε₀ → μ₀/4π", "1/4πε₀ → μ₀/4π")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <T x={50} y={588} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the equatorial field is exactly half of this — the same 2 : 1 ratio you know from electrostatics",
             "the equatorial field is exactly half of this — the same 2 : 1 ratio you know from electrostatics")}
        </T>
      </Fade>
    </Scene>
  );
}

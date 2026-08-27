/**
 * P12Ch02 · Section 46 — "Deriving the capacitance of an isolated spherical conductor"
 * Subtopic: Conductors & Spherical Capacitors Derivations
 *
 * DEFECTS FIXED (2026-08-21):
 *
 * 1. A WHOLE BLOCK NEVER RENDERED. The verdict badge, its heading, its two
 *    lines and the footer chip were all gated on `beat >= 7`. This section has
 *    7 narration segments, so useBeat only ever returns 0..6 — that content was
 *    invisible in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 drew nothing,
 *    so the board froze twice while the voice kept going.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 5.12, 17.24, 26.79, 36.69, 46.25, 59.48]):
 *
 *   0  "a short derivation…"                      title
 *   1  "sphere of radius R acts like a point       sphere diagram
 *       charge at its centre"
 *   2  "surface potential at r = R is Q/4πε₀R"     surface-potential line
 *   3  "the whole conductor is one equipotential,  equipotential note
 *       interior included"                         (NEW line — beat 3 had nothing)
 *   4  "divide Q by that potential, Q cancels"     C = Q/V substitution steps
 *   5  "depends only on the radius, pure geometry" numeric illustration + verdict head
 *   6  "the Q cancelled again — the signature of   the cancellation line + chip
 *       a genuinely geometric quantity"
 *
 * NUMBERS: the only quantity on the board is the Earth illustration,
 * C = 4πε₀R = (6.4×10⁶)/(9×10⁹) F = 711 µF — arithmetically correct. It is a
 * board-only extension: the narration never mentions Earth, so it is placed on
 * beat 5 where the voice is making exactly its point (capacitance from radius
 * alone). The old lower-block text (spherical capacitor with a shell at ∞,
 * U = Q²/8πε₀R) was replaced: neither claim is anywhere in this narration,
 * whereas segments 5 and 6 make two points the board was not stating at all.
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, AMBER_DARK, GREEN, RED,
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

export default function P12Ch02Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Derivation: Isolated Spherical Conductor Capacitance C = 4πε₀R", "Derivation: Isolated Spherical Conductor Capacitance C = 4πε₀R")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: ISOLATED SPHERE GEOMETRY */}
      <G transform="translate(40, 75)">
        {/* beat 1 — the sphere behaves like a point charge at its centre */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ISOLATED CONDUCTING SPHERE (RADIUS R, CHARGE Q)", "ISOLATED CONDUCTING SPHERE (RADIUS R, CHARGE Q)")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <Circle cx={212} cy={155} r={65} stroke={RED} strokeWidth={1.8} fill="none" />
          <Line x1="212" y1="155" x2="277" y2="155" stroke={INK} strokeWidth={1.8} />
          <T x={245} y={148} size={12} fill={INK} weight={800} anchor="middle">Radius R</T>
          <T x={212} y={185} size={14} fill={RED} weight={900} anchor="middle">Sphere (+Q)</T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={45} y={225} anchor="start" size={13} fill={INK_LIGHT} weight={700}>
            {t("Outside it, the field is exactly that of a point charge Q at the centre.",
               "Outside it, the field is exactly that of a point charge Q at the centre.")}
          </T>
        </Fade>

        {/* beat 2 — the surface potential */}
        <Fade on={beat >= 2} delay={dl(2, 0.3)}>
          <T x={45} y={252} anchor="start" size={13} fill={INK} weight={800}>
            Surface Potential (at r = R): V = k Q / R = Q / (4π ε₀ R)
          </T>
        </Fade>

        {/* beat 3 — one equipotential, interior included */}
        <Fade on={beat >= 3} delay={dl(3, 0.3)}>
          <T x={45} y={280} anchor="start" size={13} fill={AMBER_DARK} weight={800}>
            {t("A conductor is one equipotential — that is V of the whole sphere, interior included.",
               "A conductor is one equipotential — that is V of the whole sphere, interior included.")}
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: THE C = Q / V SUBSTITUTION */}
      <G transform="translate(540, 75)">
        {/* beat 4 — divide Q by that potential; Q cancels */}
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DIVIDE Q BY THAT POTENTIAL", "DIVIDE Q BY THAT POTENTIAL")}
          </T>
        </Fade>

        <Fade on={beat >= 4} delay={dl(4, 0.8)}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Definition: C = Q / V
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.1)}>
          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Substitute V: C = Q / [ Q / (4π ε₀ R) ]
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.5)}>
          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. The Q cancels completely: C = 4π ε₀ R
          </T>
        </Fade>

        {/* beat 5 — radius alone decides it */}
        <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} dur={0.5} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Earth (R = 6400 km): C = 4πε₀R = 711 µF
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (nothing but a radius went in — the whole planet is worth 711 microfarads)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: THE VERDICT */}
      <G transform="translate(40, 415)">
        {/* beat 5 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 1.1)} />
        <Fade on={beat >= 5} delay={dl(5, 1.4)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("DERIVATION VERDICT", "DERIVATION VERDICT")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.7)}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            {t("Look at what survived: the capacitance depends on the radius alone — pure geometry, exactly as for the parallel plate.",
               "Look at what survived: the capacitance depends on the radius alone — pure geometry, exactly as for the parallel plate.")}
          </T>
        </Fade>

        {/* beat 6 */}
        <Fade on={beat >= 6} delay={dl(6, 0.3)}>
          <T x={45} y={74} size={13} anchor="start" fill={INK} weight={700}>
            {t("And the Q cancelled again, just as it did for the parallel plate — that cancellation is the signature of a genuinely geometric quantity.",
               "And the Q cancelled again, just as it did for the parallel plate — that cancellation is the signature of a genuinely geometric quantity.")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ C = 4πε₀R — the charge cancels out, and only the radius is left standing",
            "★ C = 4πε₀R — the charge cancels out, and only the radius is left standing"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

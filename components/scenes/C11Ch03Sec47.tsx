/**
 * C11 Chemistry Ch03 · Section 47 — "The predictable exceptions: Cr, Cu, He, H"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.62, 22.7, 42.41, 60.42, 78.59, 96.0, 114.52]):
 *  0 title + underline
 *  1 a few d-block elements defy naive Aufbau: d⁵/d¹⁰ extra stable
 *  2 red-margin: Cr — expected 3d⁴4s² ✗, actual 3d⁵4s¹ (5 orbital boxes + shift arrow)
 *  3 red-margin: Cu — expected 3d⁹4s² ✗, actual 3d¹⁰4s¹ (5 paired boxes + shift arrow)
 *  4 stability: symmetry + min repulsion + exchange energy; block stays d
 *  5 He: 1s² but GROUP 18 (noble gas, property wins)
 *  6 H: 1s¹ resembles both alkali & halogen; group 1 = convenience
 *  7 closing green stamp: predictable exceptions, not failures
 *
 * Layout plan:
 *  b2 | Cr: 5 d-boxes + 4s box       | Draw | x170..343 y155..183
 *  b3 | Cu: 5 d-boxes + 4s box       | Draw | x690..863 y155..183
 *  b4-6 | 3 lines                    | T mid| x?..?     y214..270
 *  b7 | closing stamp (green)        | Chip | x200..880 y288..322
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
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { OrbitalBox, curvedArrowD } from "./chem-kit";

export default function C11Ch03Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("the predictable exceptions: Cr, Cu, He, H", "predictable exceptions: Cr, Cu, He, H")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the extra-stability idea */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("half-filled (d⁵) and full (d¹⁰) subshells are EXTRA stable", "half-filled (d⁵) aur full (d¹⁰) subshells EXTRA stable hain")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: chromium */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={280} y={122} size={11} fill={RED}>expected: 3d⁴4s² ✗</T>
        <T x={280} y={145} size={13} weight={800} fill={INK}>Cr actual: [Ar]3d⁵4s¹</T>
      </Fade>
      {[170, 197, 224, 251, 278].map((x, i) => (
        <OrbitalBox key={x} on={beat >= 2} delay={dl(2, 0.5 + i * 0.1)} x={x} y={155} w={24} h={28} up={1} down={0} />
      ))}
      <OrbitalBox on={beat >= 2} delay={dl(2, 1.1)} x={315} y={155} w={28} h={28} up={1} down={0} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={curvedArrowD(329, 155, 290, 155, -20)} stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 3 — red-margin: copper */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={800} y={122} size={11} fill={RED}>expected: 3d⁹4s² ✗</T>
        <T x={800} y={145} size={13} weight={800} fill={INK}>Cu actual: [Ar]3d¹⁰4s¹</T>
      </Fade>
      {[690, 717, 744, 771, 798].map((x, i) => (
        <OrbitalBox key={x} on={beat >= 3} delay={dl(3, 0.5 + i * 0.1)} x={x} y={155} w={24} h={28} up={1} down={1} />
      ))}
      <OrbitalBox on={beat >= 3} delay={dl(3, 1.1)} x={835} y={155} w={28} h={28} up={1} down={0} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={curvedArrowD(849, 155, 809, 155, -20)} stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 4 — where the stability comes from */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={218} size={12} fill={MUTED} script>
          {t("symmetry + min repulsion + exchange energy ⇒ block stays d", "symmetry + min repulsion + exchange energy ⇒ block d hi rehta")}
        </T>
      </Fade>

      {/* beat 5 — helium */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={245} size={13} weight={700} fill={INK}>
          {"He: 1s² but GROUP 18 (noble gas — property wins)"}
        </T>
      </Fade>

      {/* beat 6 — hydrogen */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={270} size={13} weight={700} fill={INK}>
          {t("H: 1s¹ — resembles BOTH alkali & halogen; group 1 = convenience", "H: 1s¹ — dono alkali aur halogen jaisa; group 1 = convenience")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={288} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("predictable exceptions, not failures", "predictable exceptions, failures nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}

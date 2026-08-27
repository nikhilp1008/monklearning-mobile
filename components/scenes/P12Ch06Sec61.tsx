/**
 * P12Ch06 · Section 61 — "The grand synthesis: how all six subtopics tie together"
 * Subtopic: Advanced EMI, Maxwell & Chapter Synthesis
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
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

export default function P12Ch06Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("The Grand EMI Synthesis: Interconnecting All Electromagnetic Principles", "The Grand EMI Synthesis: Interconnecting All Principles")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: FARADAY & MOTIONAL EMF: CHANGE IN FLUX CAUSES EMF */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("FARADAY & MOTIONAL EMF: CHANGE IN FLUX CAUSES EMF", "FARADAY & MOTIONAL EMF: CHANGE IN FLUX CAUSES EMF")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Fundamental Law: Faraday EMF ε = -N (dΦ_B / dt).
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Motional Mechanism: Moving conductor cuts flux ε = B l v.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Lenz's Conservation: Induced current opposes cause per energy conservation.
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Universal Equivalence: Flux change by motion or field change gives same EMF!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Special relativity unifies motional and induced electric fields)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: INDUCTANCE, GENERATORS & MAXWELL DISPLACEMENT */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INDUCTANCE, GENERATORS & MAXWELL DISPLACEMENT", "INDUCTANCE, GENERATORS & MAXWELL DISPLACEMENT")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Self & Mutual Inductance: Back EMF ε = -L (dI/dt) stores energy U_B = ½ L I².
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Rotational Generator: Rotation produces AC sinusoidal EMF ε(t) = ε_0 sin(ωt).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Maxwell Extension: Displacement current I_d = ε_0 (dΦ_E / dt).
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Complete Field Theory: Unifies electric and magnetic phenomena!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Forms theoretical foundation for electromagnetic wave propagation)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("UNIFIED ELECTROMAGNETIC FIELD DYNAMICS", "UNIFIED ELECTROMAGNETIC FIELD DYNAMICS")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Synthesis Rule: Mechanical kinetic energy (m, v) translates directly into magnetic field energy (L, I).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Master Equation: ∮ E · dr = -dΦ_B/dt and ∮ B · dr = μ_0 I_c + μ_0 ε_0 (dΦ_E/dt) govern classical electrodynamics!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Grand Synthesis: Faraday, Lenz, Motional EMF, Inductance, AC Generators, and Maxwell Equations form a single unified theory! ✓",
            "★ Grand Synthesis: Faraday, Lenz, Motional EMF, Inductance, AC Generators, and Maxwell Equations form a single unified theory! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

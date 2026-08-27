/**
 * P12Ch06 · Section 59 — "Induced electric fields: the non-conservative electric field"
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

export default function P12Ch06Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Induced Electric Field E_ind: Non-Conservative Closed Field Loops", "Induced Electric Field E_ind: Non-Conservative Closed Field Loops")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: MAXWELL-FARADAY LAW: ∮ E_ind · dr = − dΦ_B / dt */}
      <G transform="translate(40, 75)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("MAXWELL-FARADAY LAW: ∮ E_ind · dr = − dΦ_B / dt", "MAXWELL-FARADAY LAW: ∮ E_ind · dr = − dΦ_B / dt")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 1}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Fundamental Integral Law: ∮ E_ind · dr = - dΦ_B / dt.
          </T>

          <T x={45} y={125} size={14} fill={INK} weight={800} anchor="start">
            2. Time-Varying B Field: A changing magnetic field dB/dt creates electric field.
          </T>

          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Vacuum Existence: Induced electric field exists even in empty space!
          </T>

          <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={RED} weight={900} anchor="start">
            4. Charge Independent: No electric charges (charges q) needed!
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          <T x={45} y={268} anchor="start" size={13} fill={INK} weight={800}>
            (Conducting loop only detects pre-existing induced E field)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: ELECTROSTATIC VS INDUCED E FIELD COMPARISON */}
      <G transform="translate(540, 75)">
        <Badge n={2} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("ELECTROSTATIC VS INDUCED E FIELD COMPARISON", "ELECTROSTATIC VS INDUCED E FIELD COMPARISON")}
          </T>
        </Fade>

        {/* Floating Solution Steps */}
        <Fade on={beat >= 5}>
          <T x={45} y={80} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            1. Electrostatic E: Originates from static charges (q).
          </T>

          <T x={45} y={125} size={14} fill={GREEN} weight={800} anchor="start">
            2. Field Line Topography: Starts on +q, terminates on -q (open lines).
          </T>

          <T x={45} y={170} size={14} fill={RED} weight={800} anchor="start">
            3. Induced E Field: Forms continuous closed loops without start/end!
          </T>

          <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 45 195 L 450 195" stroke={INK} sw={1.8} />

          <T x={45} y={235} size={16} fill={GREEN} weight={900} anchor="start">
            4. Non-Conservative: Loop work ∮ E_ind · dr = ε ≠ 0!
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={268} anchor="start" size={13} fill={GREEN} weight={800}>
            (Work done per turn in a closed path equals EMF ε)
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS SUMMARY */}
      <G transform="translate(40, 415)">
        <Badge n={3} cx={20} cy={18} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("INAPPLICABILITY OF ELECTRIC POTENTIAL V", "INAPPLICABILITY OF ELECTRIC POTENTIAL V")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={45} y={50} size={14} anchor="start" fill={GREEN} weight={800}>
            Potential Concept: Electric potential V is ONLY defined for conservative fields (∮ E · dr = 0).
          </T>
          <T x={45} y={72} size={13} anchor="start" fill={INK} weight={700}>
            Induced Field Rule: For induced fields, V is undefined; work depends on exact path taken!
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Induced Electric Field E_ind is non-conservative with closed field lines (∮ E_ind · dr = − dΦ_B/dt) where potential V does not exist! ✓",
            "★ Induced Electric Field E_ind is non-conservative with closed field lines (∮ E_ind · dr = − dΦ_B/dt) where potential V does not exist! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

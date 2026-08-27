/**
 * C11 Chemistry Ch04 · Section 15 — "The ethane-ethene-ethyne ladder: three carbon hybridisations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 22.78, 40.53, 65.37, 90.2, 115.03, 139.86]):
 *  0 H2 energy well: dips to a minimum as atoms approach = the bond
 *  1 numbers: r=74pm, well depth=435.8 kJ/mol
 *  2 carbon promotion: 2 unpaired → promote → 4 unpaired → hybridise
 *  3 ethane row: sp3, single (sigma), 154pm, free rotation
 *  4 ethene row: sp2, double (sigma+pi), 134pm, planar locked
 *  5 ethyne row: sp, triple (sigma+2pi), ~120pm, shortest
 *  6 trend: s-character / length / strength, green chip
 *
 * Layout plan:
 *  b0-1 | H2 energy well        | Draw/T | x130..290 y100..182
 *  b2   | carbon promotion line | T mid  | y205
 *  b3-5 | ladder (3 rows)       | T/Draw | x150..330 (sketch) x440.. (facts) y230/305/380
 *  b6   | trend + chip          | T/Chip | y440..530
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, tripleBondD } from "./chem-kit";

export default function C11Ch04Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("The ethane-ethene-ethyne ladder", "Ethane-ethene-ethyne ladder")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — H2 energy well */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.2)}
        d="M 130 108 C 160 108, 175 145, 210 145 C 245 145, 260 108, 290 108"
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <T x={540} y={165} size={11.5} fill={INK}>
          {t(
            "H₂: energy dips to a MINIMUM as atoms approach = the bond",
            "H₂: atoms paas aate hain to energy MINIMUM tak dip karti = bond"
          )}
        </T>
      </Fade>

      {/* beat 1 — the numbers */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={210} y={140} size={9.5} fill={MUTED}>
          74 pm
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={187} size={11.5} fill={INK}>
          r = 74 pm · {t("well depth", "well depth")} = 435.8 kJ/mol
        </T>
      </Fade>

      {/* beat 2 — carbon promotion */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={210} size={11} fill={INK}>
          {t(
            "carbon: 2 unpaired e⁻ (ground state, ≠ CH₄) → promote 2s→2p → 4 unpaired → hybridise",
            "carbon: 2 unpaired e⁻ (ground state, ≠ CH₄) → promote 2s→2p → 4 unpaired → hybridise"
          )}
        </T>
      </Fade>

      {/* beat 3 — ethane */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={150} y={235} size={17} weight={700} fill={INK}>
          H₃C
        </T>
        <T x={330} y={235} size={17} weight={700} fill={INK}>
          CH₃
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={bondD(195, 231, 285, 231)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={440} y={235} size={12} fill={INK} anchor="start">
          {t("sp³ · single (σ) · 154 pm · free rotation", "sp³ · single (σ) · 154 pm · free rotation")}
        </T>
      </Fade>

      {/* beat 4 — ethene */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={150} y={310} size={17} weight={700} fill={INK}>
          H₂C
        </T>
        <T x={330} y={310} size={17} weight={700} fill={INK}>
          CH₂
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={doubleBondD(195, 306, 285, 306, 3)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={440} y={310} size={12} fill={INK} anchor="start">
          {t("sp² · double (σ+π) · 134 pm · planar, locked", "sp² · double (σ+π) · 134 pm · planar, locked")}
        </T>
      </Fade>

      {/* beat 5 — ethyne */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={150} y={385} size={17} weight={700} fill={INK}>
          HC
        </T>
        <T x={330} y={385} size={17} weight={700} fill={INK}>
          CH
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={tripleBondD(190, 381, 290, 381, 4)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={440} y={385} size={12} fill={INK} anchor="start">
          {t("sp · triple (σ+2π) · ~120 pm · shortest", "sp · triple (σ+2π) · ~120 pm · shortest")}
        </T>
      </Fade>

      {/* beat 6 — the trend */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={440} size={12.5} fill={INK}>
          {t("s-character: 25% → 33% → 50%", "s-character: 25% → 33% → 50%")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={462} size={12.5} fill={INK}>
          {t("bond length: 154 → 134 → ~120 pm (shrinking)", "bond length: 154 → 134 → ~120 pm (ghatta)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={484} size={12.5} weight={700} fill={RED}>
          {t("bond strength: rising ↑", "bond strength: rising ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={200} y={502} w={680} h={28} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "hybridisation, geometry & bond parameters — one story",
            "hybridisation, geometry aur bond parameters — ek hi kahani"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

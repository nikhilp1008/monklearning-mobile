/**
 * C11 Chemistry Ch05 · Section 34 — "Complete formula toolkit — Chemical
 * Thermodynamics" (chapter formula recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Four quadrants, one per subtopic.
 *
 * Beats (board_reveal_at, en [0,7.85,16.81,32.51,41.56,48.98,58.03,66.73,72.79]):
 *  0 subtitle (anchor)
 *  1 Q1 header + ΔU=q+w, w(rev), w=-PextΔV
 *  2 Q1 + H=U+PV, ΔH bridge, qV/qP
 *  3 Q1 + Cp-Cv=R
 *  4 Q2 header + ΔrH° from formation
 *  5 Q2 + ΔrH from bond enthalpies, Born-Haber ΔfH°
 *  6 Q3 header + ΔG=ΔH-TΔS, ΔG°=-RTlnK, Tcross
 *  7 Q3 + ΔSsurr; Q4 header + ΔsolH
 *  8 Q4 + Poisson/process formulas
 *
 * Layout: quadrants Q1(top-left, x60 anchor start), Q2(top-right, x570),
 * Q3(bottom-left, x60), Q4(bottom-right, x570). Headers + stacked lines.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, RED, INK, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("complete formula toolkit", "complete formula toolkit")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={105} size={15} weight={800} fill={INK}>
          {t("Your complete thermodynamics toolkit", "aapka complete thermodynamics toolkit")}
        </T>
      </Fade>

      {/* beat 1 — Q1 header + first law */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={60} y={130} size={13} weight={800} fill={AMBER_DARK} anchor="start">
          1 · FIRST LAW &amp; ENTHALPY
        </T>
        <T x={60} y={152} size={14} fill={INK} anchor="start">ΔU = q + w</T>
        <T x={60} y={174} size={14} fill={INK} anchor="start">
          w(rev) = −nRT ln(V2/V1)   ·   w = −PextΔV
        </T>
      </Fade>

      {/* beat 2 — Q1: enthalpy bridge */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={60} y={196} size={14} fill={INK} anchor="start">
          H = U+PV   ·   ΔH = ΔU + Δngas·RT
        </T>
        <T x={60} y={218} size={14} fill={INK} anchor="start">qV = ΔU   ·   qP = ΔH</T>
      </Fade>

      {/* beat 3 — Q1: Cp - Cv */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={60} y={240} size={14} fill={INK} anchor="start">Cp − Cv = R</T>
      </Fade>

      {/* beat 4 — Q2 header + formation formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={570} y={130} size={13} weight={800} fill={AMBER_DARK} anchor="start">
          2 · THERMOCHEMISTRY
        </T>
        <T x={570} y={152} size={14} fill={INK} anchor="start">
          ΔrH° = Σν·ΔfH°(prod) − Σν·ΔfH°(react)
        </T>
      </Fade>

      {/* beat 5 — Q2: bond enthalpy + Born-Haber */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={570} y={174} size={14} fill={INK} anchor="start">
          ΔrH = ΣBE(broken) − ΣBE(formed)
        </T>
        <T x={570} y={196} size={14} fill={INK} anchor="start">
          ΔfH° = ΔsubH+ΔiH+½ΔdissH+ΔegH+ΔlatticeH
        </T>
      </Fade>

      {/* beat 6 — Q3 header + Gibbs formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={60} y={310} size={13} weight={800} fill={AMBER_DARK} anchor="start">
          3 · ENTROPY &amp; GIBBS
        </T>
        <T x={60} y={336} size={14} fill={INK} anchor="start">
          ΔG = ΔH − TΔS   ·   ΔG° = −RT ln K
        </T>
        <T x={60} y={360} size={14} fill={INK} anchor="start">Tcross = ΔH/ΔS</T>
      </Fade>

      {/* beat 7 — Q3: ΔSsurr; Q4 header + ΔsolH */}
      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={60} y={384} size={14} fill={INK} anchor="start">ΔSsurr = −ΔHsys/T</T>
        <T x={570} y={310} size={13} weight={800} fill={AMBER_DARK} anchor="start">
          4 · CALORIMETRY &amp; PROCESSES
        </T>
        <T x={570} y={336} size={14} fill={INK} anchor="start">
          ΔsolH = ΔlatticeH + ΔhydH
        </T>
      </Fade>

      {/* beat 8 — Q4: Poisson + process formulas */}
      <Fade on={beat >= 8} delay={dl(8, 0.1)}>
        <T x={570} y={360} size={14} fill={INK} anchor="start">
          PVγ = const   ·   w(adia) = nCvΔT
        </T>
        <T x={570} y={384} size={14} fill={INK} anchor="start">
          ΔU = nCvΔT,  ΔH = nCpΔT
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Chemistry Ch04 · Section 14 — "Predicting molecular shape with VSEPR, step by step"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 17.15, 32.09, 42.84, 57.77, 77.4, 97.28]):
 *  0 anchor: electron-pair geometry (all pairs) vs molecular shape (atoms only)
 *  1 step card 1-2: Lewis structure + steric number
 *  2 step card 3: read electron-pair geometry
 *  3 step card 4: subtract lone pairs → shape
 *  4 step card 5: adjust angle via repulsion order
 *  5 NH3 worked: SN4, 1 LP, trigonal pyramidal, 107°
 *  6 H2O worked: SN4, 2 LP, bent, 104.5°
 *
 * Layout plan:
 *  b1-4 | 4 step cards | Draw/T | x58..1023 y110..186
 *  b5   | NH3 example  | Draw/T | x220..340 y238..400
 *  b6   | H2O example  | Draw/T | x745..855 y238..400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cards = [
    { n: 1, x: 58, l0: "STEPS 1-2", l1: t("Lewis + SN", "Lewis + SN"), l2: t("(σ bonds + LP)", "(σ bonds + LP)") },
    { n: 2, x: 303, l0: "STEP 3", l1: t("electron-pair", "electron-pair"), l2: t("geometry (table)", "geometry (table)") },
    { n: 3, x: 548, l0: "STEP 4", l1: t("− lone pairs", "− lone pairs"), l2: t("→ shape", "→ shape") },
    { n: 4, x: 793, l0: "STEP 5", l1: t("adjust angle", "adjust angle"), l2: t("(repulsion order)", "(repulsion order)") },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Predicting shape with VSEPR", "VSEPR se shape predict karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={11.5} fill={MUTED} script>
          {t(
            "electron-PAIR geometry (all pairs) vs molecular SHAPE (atoms only)",
            "electron-PAIR geometry (sab pairs) vs molecular SHAPE (sirf atoms)"
          )}
        </T>
      </Fade>

      {/* beats 1-4 — step cards */}
      {cards.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 110 h 230 v 76 h -230 z`} stroke={INK} sw={1.8} dur={0.4} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.5)}>
            <T x={c.x + 115} y={132} size={12.5} weight={800} fill={AMBER_DARK}>
              {c.l0}
            </T>
            <T x={c.x + 115} y={155} size={12.5} fill={INK}>
              {c.l1}
            </T>
            <T x={c.x + 115} y={172} size={11} fill={MUTED}>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — NH3 worked example */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={280} y={270} size={18} weight={700} fill={INK}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={220} y={330} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={280} y={350} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={340} y={330} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.0)} d={bondD(270.8, 279.2, 229.2, 320.8)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={bondD(280, 283, 280, 337)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={bondD(289.2, 279.2, 330.8, 320.8)} stroke={INK} sw={2} dur={0.35} />
      <LonePair on={beat >= 5} delay={dl(5, 1.8)} cx={280} cy={238} angle={0} spread={10} r={4} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={280} y={310} size={14} weight={700} fill={GREEN}>
          107°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={280} y={380} size={10.5} fill={MUTED}>
          {t("SN=4 → e-geom: tetrahedral", "SN=4 → e-geom: tetrahedral")}
        </T>
        <T x={280} y={398} size={11} weight={700} fill={GREEN}>
          {t("shape: trigonal pyramidal", "shape: trigonal pyramidal")}
        </T>
      </Fade>

      {/* beat 6 — H2O worked example */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={800} y={270} size={18} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={745} y={330} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={855} y={330} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={bondD(791.2, 279.6, 753.8, 320.4)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 1.0)} d={bondD(808.8, 279.6, 846.2, 320.4)} stroke={INK} sw={2} dur={0.35} />
      <LonePair on={beat >= 6} delay={dl(6, 1.4)} cx={775} cy={238} angle={Math.PI / 2} spread={9} r={4} />
      <LonePair on={beat >= 6} delay={dl(6, 1.6)} cx={825} cy={238} angle={Math.PI / 2} spread={9} r={4} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={800} y={310} size={14} weight={700} fill={GREEN}>
          104.5°
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={800} y={380} size={10.5} fill={MUTED}>
          {t("SN=4 → e-geom: tetrahedral", "SN=4 → e-geom: tetrahedral")}
        </T>
        <T x={800} y={398} size={11} weight={700} fill={GREEN}>
          {t("shape: bent", "shape: bent")}
        </T>
      </Fade>
    </Scene>
  );
}

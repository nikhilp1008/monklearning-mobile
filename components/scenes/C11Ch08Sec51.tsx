/**
 * C11 Ch08 · Section 51 — "Formula recap — the whole chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.7, 22.19, 28.25, 38.23, 46.59, 53.08, 67.67]):
 *  0 title (always-on, seq1) · 1 homologous formulas (alkane/ene/yne) · 2 ketone
 *  series · 3 DoU (high emphasis) · 4 max stereoisomers 2ⁿ · 5 Rf · 6 %C + %H
 *  (high emphasis) · 7 Kjeldahl N + Carius X + O-by-difference
 *
 * Two columns: LEFT (homologous & counting) x=270, RIGHT (quantitative) x=810.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={RED} script>
          {t("Formula recap — the whole chapter", "Formula recap — poora chapter")}
        </T>
      </Fade>

      {/* headers */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={270} y={95} size={11} fill={MUTED} weight={700}>
          {t("HOMOLOGOUS & COUNTING TOOLS", "HOMOLOGOUS & COUNTING TOOLS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={810} y={95} size={11} fill={MUTED} weight={700}>
          {t("QUANTITATIVE ANALYSIS", "QUANTITATIVE ANALYSIS")}
        </T>
      </Fade>

      {/* beat 1 — homologous general formulas */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={270} y={125} size={13} fill={INK} weight={700}>
          {t("alkanes: CnH2n+2", "alkanes: CnH2n+2")}
        </T>
        <T x={270} y={155} size={13} fill={INK} weight={700}>
          {t("alkenes: CnH2n", "alkenes: CnH2n")}
        </T>
        <T x={270} y={185} size={13} fill={INK} weight={700}>
          {t("alkynes: CnH2n-2", "alkynes: CnH2n-2")}
        </T>
      </Fade>

      {/* beat 2 — ketone series */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={270} y={215} size={13} fill={INK} weight={700}>
          {t("ketones/aldehydes: CnH2nO", "ketones/aldehydes: CnH2nO")}
        </T>
      </Fade>

      {/* beat 3 — DoU, high emphasis */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={270} y={245} size={14} fill={AMBER_DARK} weight={800}>
          DoU = (2n+2+q−m) / 2
        </T>
      </Fade>

      {/* beat 4 — max stereoisomers */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={270} y={275} size={13} fill={INK} weight={700}>
          {t("max stereoisomers = 2ⁿ", "max stereoisomers = 2ⁿ")}
        </T>
      </Fade>

      {/* beat 5 — Rf */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={270} y={305} size={13} fill={INK} weight={700}>
          Rf = {t("dist(component)/dist(solvent)", "dist(component)/dist(solvent)")}
        </T>
      </Fade>

      {/* beat 6 — %C and %H, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={810} y={125} size={13.5} fill={AMBER_DARK} weight={800}>
          %C = 12/44 × mCO₂/m × 100
        </T>
        <T x={810} y={155} size={13.5} fill={AMBER_DARK} weight={800}>
          %H = 2/18 × mH₂O/m × 100
        </T>
      </Fade>

      {/* beat 7 — Kjeldahl, Carius, oxygen by difference */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={810} y={185} size={12} fill={INK}>
          %N (Kjeldahl) = 1.4 × N × V / m
        </T>
        <T x={810} y={207} size={12} fill={INK}>
          %X (Carius) = at.mass/AgX × mAgX/m × 100
        </T>
        <T x={810} y={229} size={12} fill={INK} weight={700}>
          {t("%O = 100 − (sum of others)", "%O = 100 − (baaki sabka sum)")}
        </T>
      </Fade>
    </Scene>
  );
}

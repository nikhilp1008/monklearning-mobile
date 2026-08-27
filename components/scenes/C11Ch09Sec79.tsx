/**
 * C11 Ch09 · Section 79 — "Hydrocarbons: formula recap"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.68, 18.43, 30.98, 44.03, 55.64, 65.71, 80.47, 91.73]):
 *  0 heading · 1 alkane/cycloalkane formulas · 2 alkene/alkyne formulas ·
 *  3 combustion formula · 4 bond enthalpies · 5 acidity order · 6 arene
 *  formula + RE · 7 Huckel's rule · 8 RED: anchors the chapter
 *
 * Layout plan — dense list rows ~32px apart from y122 (matches Sec44/63
 * fact-sheet convention). General formulas written plain (no unicode
 * subscripts) per notation-safety rule.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec79({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("hydrocarbons: formula recap", "hydrocarbons: formula recap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={15} fill={INK} weight={700}>
          {t("the formulas that anchor the whole chapter", "formulas jo poore chapter ko anchor karte")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={120} size={14} fill={INK}>
          {t("alkane: CnH2n+2  ·  cycloalkane: CnH2n", "alkane: CnH2n+2  ·  cycloalkane: CnH2n")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={152} size={14} fill={INK}>
          {t("alkene: CnH2n  ·  alkyne: CnH2n-2", "alkene: CnH2n  ·  alkyne: CnH2n-2")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={184} size={13} fill={INK}>
          {t("combustion: CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O", "combustion: CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={216} size={13} fill={INK}>
          {t("bond enthalpies: C–C (348) < C=C (681) < C≡C (823) kJ/mol", "bond enthalpies: C–C (348) < C=C (681) < C≡C (823) kJ/mol")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={248} size={13} fill={INK}>
          {t("acidity: HC≡CH > H2C=CH2 > CH3CH3  (sp > sp² > sp³)", "acidity: HC≡CH > H2C=CH2 > CH3CH3  (sp > sp² > sp³)")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={280} size={14} fill={INK}>
          {t("arene: CnH2n-6 (n≥6); benzene C6H6, RE ≈ 150 kJ/mol", "arene: CnH2n-6 (n≥6); benzene C6H6, RE ≈ 150 kJ/mol")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={312} size={14} fill={INK} weight={700}>
          {t("Huckel's rule: aromatic ⇔ cyclic, planar, conjugated, (4n+2)π", "Huckel's rule: aromatic ⇔ cyclic, planar, conjugated, (4n+2)π")}
        </T>
      </Fade>

      {/* beat 8 — the guardrail */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d="M 60 350 L 60 400" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={76} y={370} size={15} fill={RED} weight={700} anchor="start">
          {t("these formulas anchor the whole chapter", "yeh formulas poore chapter ko anchor karte")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={76} y={394} size={14} fill={RED} script anchor="start">
          {t("the cheat sheet turns them into reactions you'll actually use", "cheat sheet inhe reactions mein badalta jo aap use karoge")}
        </T>
      </Fade>
    </Scene>
  );
}

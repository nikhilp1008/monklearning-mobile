/**
 * C11 Ch08 · Section 32 — "Two ways a bond can break"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.94, 16.3, 29.27, 39.77, 52.31, 71.59, 85.67]):
 *  0 title (always-on, seq1) · 1 diagram: Cl-Cl and CH3-Br bonds drawn · 2
 *  homolytic: Cl-Cl + fishhooks → 2 Cl• · 3 heterolytic: CH3-Br + double-barb →
 *  CH3⁺+Br⁻ · 4 arrow-grammar legend · 5 red note (fishhook↔radical,
 *  double-barb↔ionic) · 6 favoured conditions · 7 C-X specific case
 *
 * LEFT (homolytic) x~250, RIGHT (heterolytic) x~780.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD } from "./chem-kit";

export default function C11Ch08Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Two ways a bond can break", "Bond todne ke do tareeke")}
        </T>
      </Fade>

      {/* beat 1 — the two bonds, drawn */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={bondD(200, 150, 300, 150)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={185} y={155} size={16} fill={INK} weight={700} anchor="end">
          Cl
        </T>
        <T x={315} y={155} size={16} fill={INK} weight={700} anchor="start">
          Cl
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={bondD(720, 150, 840, 150)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={705} y={155} size={16} fill={INK} weight={700} anchor="end">
          CH₃
        </T>
        <T x={855} y={155} size={16} fill={INK} weight={700} anchor="start">
          Br
        </T>
      </Fade>

      {/* beat 2 — homolytic: fishhooks split the pair */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d={curvedArrowD(250, 150, 215, 128, -16, true)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={curvedArrowD(250, 150, 285, 128, 16, true)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={220} y={195} size={16} fill={INK} weight={700}>
          Cl•
        </T>
        <T x={280} y={195} size={16} fill={INK} weight={700}>
          •Cl
        </T>
        <T x={250} y={225} size={12} fill={MUTED}>
          {t("homolytic → 2 radicals", "homolytic → 2 radicals")}
        </T>
      </Fade>

      {/* beat 3 — heterolytic: the pair goes to Br */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d={curvedArrowD(780, 150, 825, 128, 20, false)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={735} y={195} size={16} fill={INK} weight={700}>
          CH₃⁺
        </T>
        <T x={845} y={195} size={16} fill={INK} weight={700}>
          Br⁻
        </T>
        <T x={790} y={225} size={12} fill={MUTED}>
          {t("heterolytic → cation + anion", "heterolytic → cation + anion")}
        </T>
      </Fade>

      {/* beat 4 — the arrow grammar */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={255} size={13} fill={INK}>
          {t("single-barb (fishhook) = 1 electron; double-barb = 1 pair", "single-barb (fishhook) = 1 electron; double-barb = 1 pair")}
        </T>
      </Fade>

      {/* beat 5 — matching arrows to steps */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 270 L 60 300" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={288} size={15} fill={RED} script anchor="start">
          {t(
            "fishhooks for radical (homolytic) steps; full double-barbed arrows for ionic (heterolytic) steps",
            "fishhooks radical (homolytic) steps ke liye; double-barb ionic (heterolytic) steps ke liye"
          )}
        </T>
      </Fade>

      {/* beat 6 — favoured conditions */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={330} size={13} fill={INK}>
          {t(
            "homolysis: nonpolar, heat/UV, peroxides · heterolysis: polar bonds, polar solvents",
            "homolysis: nonpolar, heat/UV, peroxides · heterolysis: polar bonds, polar solvents"
          )}
        </T>
      </Fade>

      {/* beat 7 — the C-X case */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={360} size={13} fill={INK} weight={700}>
          {t("C-X (X more EN): X leaves with the pair as X⁻ → carbocation left behind", "C-X (X zyada EN): X pair le jaata X⁻ ban ke → carbocation reh jaata")}
        </T>
      </Fade>
    </Scene>
  );
}

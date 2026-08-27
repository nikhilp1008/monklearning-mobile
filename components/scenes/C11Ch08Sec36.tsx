/**
 * C11 Ch08 · Section 36 — "Worked example — fission of CH3-Br (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.94, 17.07, 28.5, 36.69, 46.34, 59.73, 73.39]):
 *  0 title (always-on, seq1) · 1 task · 2 (i) homolytic: bond+fishhooks→CH3•+Br•
 *  · 3 species name: methyl free radical · 4 (ii) heterolytic setup: Br more EN
 *  · 5 double-barb arrow→CH3⁺+Br⁻, species name: methyl carbocation · 6 red note
 *  (board habit: state which atom + why) · 7 closer (marks for reasoning)
 *
 * LEFT (homolytic) x~270, RIGHT (heterolytic) x~810.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD } from "./chem-kit";

export default function C11Ch08Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — fission of CH3-Br (CBSE)", "Worked example — CH3-Br ki fission (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("show homolytic + heterolytic fission of C-Br; name the carbon species", "C-Br ki homolytic + heterolytic fission dikhao; carbon species naam do")}
        </T>
      </Fade>

      {/* beat 2 — (i) homolytic */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={270} y={128} size={12} fill={MUTED}>
          (i) {t("homolytic", "homolytic")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={bondD(220, 150, 320, 150)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={205} y={155} size={15} fill={INK} weight={700} anchor="end">
          CH₃
        </T>
        <T x={335} y={155} size={15} fill={INK} weight={700} anchor="start">
          Br
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={curvedArrowD(270, 150, 235, 128, -15, true)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={curvedArrowD(270, 150, 305, 128, 15, true)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={210} y={195} size={15} fill={INK} weight={700}>
          CH₃•
        </T>
        <T x={330} y={195} size={15} fill={INK} weight={700}>
          Br•
        </T>
      </Fade>

      {/* beat 3 — species name */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={270} y={230} size={12} fill={INK} weight={700}>
          {t("methyl free radical", "methyl free radical")}
        </T>
        <T x={270} y={246} size={11} fill={MUTED}>
          {t("(neutral, 1 unpaired e⁻)", "(neutral, 1 unpaired e⁻)")}
        </T>
      </Fade>

      {/* beat 4 — (ii) heterolytic setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={810} y={128} size={12} fill={MUTED}>
          (ii) {t("heterolytic", "heterolytic")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={bondD(760, 150, 860, 150)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={745} y={155} size={15} fill={INK} weight={700} anchor="end">
          CH₃
        </T>
        <T x={875} y={155} size={15} fill={INK} weight={700} anchor="start">
          Br
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={810} y={177} size={12} fill={INK}>
          {t("Br more electronegative → leaves with both e⁻", "Br zyada electronegative → dono e⁻ ke saath jaata")}
        </T>
      </Fade>

      {/* beat 5 — the fission + species name */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={curvedArrowD(810, 150, 845, 128, 20, false)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={775} y={205} size={15} fill={INK} weight={700}>
          CH₃⁺
        </T>
        <T x={880} y={205} size={15} fill={INK} weight={700}>
          Br⁻
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={810} y={238} size={12} fill={INK} weight={700}>
          {t("methyl carbocation", "methyl carbocation")}
        </T>
        <T x={810} y={254} size={11} fill={MUTED}>
          {t("(sp², trigonal planar, e⁻-deficient)", "(sp², trigonal planar, e⁻-deficient)")}
        </T>
      </Fade>

      {/* beat 6 — the board habit */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 280 L 60 310" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={298} size={15} fill={RED} script anchor="start">
          {t(
            "state WHICH atom keeps the electrons and WHY (electronegativity), then name the intermediate + charge",
            "batao KAUNSA atom electrons rakhta aur KYUN (electronegativity), phir intermediate + charge naam do"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={335} size={14} fill={INK} weight={700}>
          {t("marks are for the reasoning, not just the products", "marks reasoning ke liye hain, sirf products ke liye nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

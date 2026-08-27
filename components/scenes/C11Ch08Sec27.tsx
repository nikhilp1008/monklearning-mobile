/**
 * C11 Ch08 · Section 27 — "Worked example — which shows geometrical isomerism? (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.02, 14.25, 23.89, 37.29, 49.15, 61.61, 77.31]):
 *  0 title (always-on, seq1) · 1 candidates named · 2 the rule (2 different groups
 *  per C=C carbon) · 3 but-1-ene: terminal =CH2, 2 same H → NO · 4 but-2-ene: 1H+1CH3
 *  each → YES · 5 2-methylbut-2-ene: one C has 2 same CH3 → NO · 6 red trap
 *  (double bond ≠ geometrical isomers) · 7 closer (answer + quick scan)
 *
 * X2C=CY2 schematic, 3 columns, centers x=210/550/890.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Candidate = ({
    c1x,
    c2x,
    up1,
    down1,
    up2,
    down2,
    on,
    delay,
  }: {
    c1x: number;
    c2x: number;
    up1: string;
    down1: string;
    up2: string;
    down2: string;
    on: boolean;
    delay: number;
  }) => (
    <>
      <Draw on={on} delay={delay} d={doubleBondD(c1x, 190, c2x, 190, 3)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={on} delay={delay + 0.4} d={bondD(c1x, 190, c1x - 25, 165)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={on} delay={delay + 0.6} d={bondD(c1x, 190, c1x - 25, 215)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={on} delay={delay + 0.8} d={bondD(c2x, 190, c2x + 25, 165)} stroke={INK} sw={2} dur={0.25} />
      <Draw on={on} delay={delay + 1} d={bondD(c2x, 190, c2x + 25, 215)} stroke={INK} sw={2} dur={0.25} />
      <Fade on={on} delay={delay + 1.3}>
        <T x={c1x - 40} y={158} size={14} fill={INK} weight={700} anchor="end">
          {up1}
        </T>
        <T x={c1x - 40} y={223} size={14} fill={INK} weight={700} anchor="end">
          {down1}
        </T>
        <T x={c2x + 40} y={158} size={14} fill={INK} weight={700} anchor="start">
          {up2}
        </T>
        <T x={c2x + 40} y={223} size={14} fill={INK} weight={700} anchor="start">
          {down2}
        </T>
      </Fade>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example — which shows geometrical isomerism? (NEET)", "Worked example — kaunsa geometrical isomerism dikhata? (NEET)")}
        </T>
      </Fade>

      {/* beat 1 — candidates */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={INK}>
          {t("but-1-ene · but-2-ene · 2-methylbut-2-ene", "but-1-ene · but-2-ene · 2-methylbut-2-ene")}
        </T>
      </Fade>

      {/* beat 2 — the rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={120} size={14} fill={INK} weight={700}>
          {t("rule: each C=C carbon needs 2 DIFFERENT groups", "rule: har C=C carbon ko 2 ALAG groups chahiye")}
        </T>
      </Fade>

      {/* beat 3 — but-1-ene: fails */}
      <Candidate c1x={185} c2x={235} up1="H" down1="H" up2="H" down2="Et" on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={210} y={262} size={15} fill={INK} weight={700}>
          {t("but-1-ene", "but-1-ene")}
        </T>
        <T x={210} y={292} size={16} fill={RED} weight={800}>
          NO ✗
        </T>
      </Fade>

      {/* beat 4 — but-2-ene: passes */}
      <Candidate c1x={525} c2x={575} up1="H" down1="CH₃" up2="H" down2="CH₃" on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={550} y={262} size={15} fill={INK} weight={700}>
          {t("but-2-ene", "but-2-ene")}
        </T>
        <T x={550} y={292} size={16} fill={GREEN} weight={800}>
          YES ✓
        </T>
      </Fade>

      {/* beat 5 — 2-methylbut-2-ene: fails */}
      <Candidate c1x={865} c2x={915} up1="CH₃" down1="CH₃" up2="H" down2="CH₃" on={beat >= 5} delay={dl(5, 0.2)} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={890} y={262} size={15} fill={INK} weight={700}>
          {t("2-methylbut-2-ene", "2-methylbut-2-ene")}
        </T>
        <T x={890} y={292} size={16} fill={RED} weight={800}>
          NO ✗
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 320 L 60 350" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={338} size={15} fill={RED} script anchor="start">
          {t(
            "trap: 'has a double bond' ≠ 'has geometrical isomers' — terminal & gem-disubstituted fail",
            "trap: 'double bond hai' ≠ 'geometrical isomers hain' — terminal & gem-disubstituted fail"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer + quick scan */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={375} size={16} fill={GREEN} weight={700}>
          {t("answer: but-2-ene only — a repeated group on either C kills it instantly", "answer: sirf but-2-ene — kisi bhi C par repeated group turant kill kar deta")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch08 · Section 26 — "Worked example — chain isomers of C5H12 (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.34, 15.53, 32.17, 36.52, 41.13, 46.59, 53.76]):
 *  0 title (always-on, seq1) · 1 task · 2 DoU = 0 → saturated, acyclic only · 3
 *  diagram: 3 skeleton headers · 4 skeleton 1 (pentane) · 5 skeleton 2
 *  (2-methylbutane) · 6 skeleton 3 (2,2-dimethylpropane) · 7 red closer (lead
 *  with DoU, chain isomerism)
 *
 * Three columns, centers x=220/540/860.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch08Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — chain isomers of C5H12 (CBSE)", "Worked example — C5H12 ke chain isomers (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={INK}>
          {t("draw + name all chain isomers of C5H12; state the isomerism type", "C5H12 ke saare chain isomers banao + naam do; isomerism type batao")}
        </T>
      </Fade>

      {/* beat 2 — DoU proves saturated */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={120} size={14} fill={INK} weight={700}>
          DoU = (2·5+2−12)/2 = 0 → {t("saturated, acyclic only", "saturated, acyclic hi")}
        </T>
      </Fade>

      {/* beat 3 — the three skeletons (diagram) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={220} y={140} size={13} fill={MUTED}>
          {t("Skeleton 1", "Skeleton 1")}
        </T>
        <T x={540} y={140} size={13} fill={MUTED}>
          {t("Skeleton 2", "Skeleton 2")}
        </T>
        <T x={860} y={140} size={13} fill={MUTED}>
          {t("Skeleton 3", "Skeleton 3")}
        </T>
      </Fade>

      {/* beat 4 — pentane */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 160 220 L 200 190 L 240 220 L 280 190 L 320 220"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={240} y={245} size={15} fill={INK} weight={700}>
          {t("pentane", "pentane")}
        </T>
      </Fade>

      {/* beat 5 — 2-methylbutane */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 480 220 L 520 190 L 560 220 L 600 190"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={bondD(520, 190, 520, 155)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={540} y={245} size={15} fill={INK} weight={700}>
          {t("2-methylbutane", "2-methylbutane")}
        </T>
      </Fade>

      {/* beat 6 — 2,2-dimethylpropane (neopentane) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 860 195 L 886 169 M 860 195 L 834 169 M 860 195 L 886 221 M 860 195 L 834 221"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={860} y={245} size={15} fill={INK} weight={700}>
          {t("2,2-dimethylpropane", "2,2-dimethylpropane")}
        </T>
      </Fade>

      {/* beat 7 — the exam habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 280 L 60 310" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={298} size={15} fill={RED} script anchor="start">
          {t(
            "lead with DoU, then enumerate: longest chain first, then branch — chain isomerism",
            "pehle DoU do, phir enumerate karo: longest chain pehle, phir branch — chain isomerism"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

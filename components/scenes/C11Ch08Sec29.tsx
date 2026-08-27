/**
 * C11 Ch08 · Section 29 — "Worked example — count stereoisomers (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.83, 19.03, 35.07, 48.13, 59.82, 76.2, 87.55]):
 *  0 title (always-on, seq1) · 1 task (2,3-dichlorobutane) · 2 naive count n=2,
 *  2²=4 · 3 caution: centres constitutionally identical · 4 diagram: 3 form boxes
 *  (R,R)/(S,S)/(R,S) + mirror line · 5 (R,R)&(S,S) verdict: enantiomers, active ·
 *  6 (R,S) verdict: meso, inactive (+ internal symmetry line) · 7 red closer
 *  (answer=3, hunt for meso)
 *
 * Three boxes x=100-320/360-580/700-1000, y=170-260.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Box = ({
    x,
    title,
    sub,
    stroke,
  }: {
    x: number;
    title: string;
    sub: string;
    stroke: string;
  }) => (
    <>
      <Rect x={x} y={170} width={220} height={90} rx={9} fill={CREAM} stroke={stroke} strokeWidth={1.8} />
      <T x={x + 110} y={198} size={17} fill={INK} weight={800}>
        {title}
      </T>
      <T x={x + 110} y={220} size={12} fill={MUTED}>
        {sub}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example — count stereoisomers (JEE Advanced)", "Worked example — stereoisomers gino (JEE Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          2,3-dichlorobutane CH₃−CHCl−CHCl−CH₃ — {t("how many stereoisomers?", "kitne stereoisomers?")}
        </T>
      </Fade>

      {/* beat 2 — naive count */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={125} size={13} fill={INK}>
          {t("stereocentres C2, C3 each 4 different groups → n=2, naive 2² = 4", "stereocentres C2, C3 dono 4 alag groups → n=2, naive 2² = 4")}
        </T>
      </Fade>

      {/* beat 3 — the caution */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={155} size={13} fill={AMBER_DARK} weight={700}>
          {t("but centres are constitutionally identical → internal symmetry can intervene", "par centres constitutionally identical hain → internal symmetry aa sakti")}
        </T>
      </Fade>

      {/* beat 4 — the three forms, drawn */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Box x={100} title="(R,R)" sub={t("mirror of (S,S)", "mirror of (S,S)")} stroke={AMBER} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Box x={360} title="(S,S)" sub={t("mirror of (R,R)", "mirror of (R,R)")} stroke={AMBER} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d="M 340 170 L 340 260" stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Box x={700} title="(R,S)" sub={t("internal mirror plane", "internal mirror plane")} stroke={AMBER} />
      </Fade>

      {/* beat 5 — (R,R) and (S,S) are an enantiomeric pair */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={210} y={245} size={14} fill={GREEN} weight={700}>
          {t("active (d)", "active (d)")}
        </T>
        <T x={470} y={245} size={14} fill={GREEN} weight={700}>
          {t("active (l)", "active (l)")}
        </T>
      </Fade>

      {/* beat 6 — (R,S) is meso */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 705 215 L 915 215" stroke={RED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={850} y={245} size={14} fill={RED} weight={700}>
          {t("meso — inactive", "meso — inactive")}
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 300 L 60 330" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={318} size={15} fill={RED} script anchor="start">
          {t(
            "answer: 3 stereoisomers, not 4 — 2ⁿ is only an upper bound, always hunt for meso first",
            "answer: 3 stereoisomers, 4 nahi — 2ⁿ sirf upper bound hai, pehle meso dhoondo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

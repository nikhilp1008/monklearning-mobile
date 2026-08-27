/**
 * M11 Ch03 · Section 25 — "Counting solutions and reading an inequality off the graph"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — FLAGGED, real graph-reading geometry, extra eye-check.
 * Source board_content has no bundled diagram this section; both graphs below are authored
 * fresh since "reading it off the graph" is the whole pedagogical point.
 *
 * Beats (board_reveal_at_english [0, 4.52, 20.65, 30.29, 37.72, 49.24, 55.21]):
 *  0 Ex6 heading: how many solutions of |sinx|=|cosx| in [0,2π]?
 *  1 |sinx|=|cosx| ⟺ |tanx|=1: THE DIAGRAM, two "tent" curves overlaid
 *  2 formula: x=π/4,3π/4,5π/4,7π/4 ⇒ 4 solutions (crossing dots + boxed count)
 *  3 Ex7 heading: solve sinx ≥ 1/2 on [0,2π]
 *  4 draw y=1/2, shade where sine sits on/above it: THE DIAGRAM
 *  5 formula: x ∈ [π/6, 5π/6] (boxed)
 *  6 red-margin: general solution x∈[2nπ+π/6, 2nπ+5π/6]
 *
 * Layout plan — left column (Ex6) x60-520, right column (Ex7) x560-1020:
 *  b0 | "Example 6..." (14,amber,w700)   | T st | x60..470  y104..119 (bl 110)
 *  b1 | caption (12)                     | T st | x60..430   y131..143 (bl 137)
 *  b1 | baseline + 2 tent curves         | Draw | x90..455  y145..225
 *  b2 | 4 red dots at crossings          | Fade | y175.5
 *  b2 | chip "x=π/4..⇒4 solutions"       | Chip | x60..460   y240..276
 *  b3 | "Example 7..." (14,amber,w700)   | T st | x560..870 y104..119 (bl 110)
 *  b4 | caption (12)                     | T st | x560..980  y131..143 (bl 137)
 *  b4 | baseline + sinx curve + y=½ line | Draw | x610..995 y145..225
 *  b5 | highlighted segment + drop lines | Fade | y190..240
 *  b5 | chip "x∈[π/6,5π/6]"              | Chip | x610..830  y255..291
 *  b6 | margin bar (red)                 | Draw | x560  y325..370
 *  b6 | closer 2 lines (13,red)          | T st | x576..1000  y339..361
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { waveD, lineD } from "./math-kit";

const OX1 = 100;
const OY1 = 225;
const AMP1 = 70;
const PPR1 = 55;
const CX1 = OX1 + 2 * Math.PI * PPR1;

const CROSS_X = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map((r) => OX1 + r * PPR1);
const CROSS_Y1 = OY1 - AMP1 * Math.SQRT1_2;

const OX2 = 620;
const OY2 = 225;
const AMP2 = 70;
const PPR2 = 55;
const CX2 = OX2 + 2 * Math.PI * PPR2;
const LINE_Y = OY2 - AMP2 * 0.5;
const CROSS2_X1 = OX2 + (Math.PI / 6) * PPR2;
const CROSS2_X2 = OX2 + ((5 * Math.PI) / 6) * PPR2;

export default function M11Ch03Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Counting Solutions, Reading Inequalities off the Graph", "Solutions Ginna, Inequality Graph Se Padhna")}
        </T>
      </Fade>

      {/* beat 0 — Example 6 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — solutions of |sinx|=|cosx|", "Example 6 — |sinx|=|cosx| ke solutions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 470 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the two "tent" curves */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={137} size={12} fill={INK} anchor="start">
          {t("|sinx|=|cosx| ⟺ |tanx|=1 - tent graphs cross", "|sinx|=|cosx| ⟺ |tanx|=1 - tent graphs cross")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d={lineD(90, OY1, 455, OY1)} stroke={MUTED} sw={1.4} delay={dl(1, 0.3)} />
      <Draw on={beat >= 1} d={waveD(OX1, CX1, OY1, AMP1, PPR1, 0, (x) => Math.abs(Math.sin(x)))} stroke={INK} sw={2.2} delay={dl(1, 0.6)} dur={1.2} />
      <Draw on={beat >= 1} d={waveD(OX1, CX1, OY1, AMP1, PPR1, 0, (x) => Math.abs(Math.cos(x)))} stroke={GREEN_DARK} sw={2.2} delay={dl(1, 1.1)} dur={1.2} />

      {/* beat 2 — the four crossings, and the count */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        {CROSS_X.map((x, i) => (
          <Circle key={i} cx={x} cy={CROSS_Y1} r={4.5} fill={RED} />
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Chip x={60} y={240} w={400} h={36} fill={GREEN} textFill="#FFFEFB" size={13} script={false}>
          x=π/4,3π/4,5π/4,7π/4 ⇒ 4 solutions
        </Chip>
      </Fade>

      {/* beat 3 — Example 7 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={560} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 7 — solve sinx ≥ 1/2 on [0,2π]", "Example 7 — sinx ≥ 1/2 solve karo [0,2π] par")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 560 118 L 870 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — draw the sine curve and the y=1/2 line */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={560} y={137} size={12} fill={INK} anchor="start">
          {t("draw y=1/2, shade where sine sits above it", "y=1/2 draw karo, jahan sine oopar hai wahan shade")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={lineD(610, OY2, 995, OY2)} stroke={MUTED} sw={1.4} delay={dl(4, 0.3)} />
      <Draw on={beat >= 4} d={waveD(OX2, CX2, OY2, AMP2, PPR2, 0, Math.sin)} stroke={INK} sw={2.2} delay={dl(4, 0.6)} dur={1.2} />
      <Draw on={beat >= 4} d={lineD(610, LINE_Y, 995, LINE_Y)} stroke={RED} sw={1.4} delay={dl(4, 1.2)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={LINE_Y + 4} size={11} fill={RED} anchor="end">y=½</T>
      </Fade>

      {/* beat 5 — the crossings, highlighted interval, and the answer */}
      <Draw on={beat >= 5} d={lineD(CROSS2_X1, LINE_Y, CROSS2_X2, LINE_Y)} stroke={GREEN} sw={4} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Circle cx={CROSS2_X1} cy={LINE_Y} r={4} fill={GREEN_DARK} />
        <Circle cx={CROSS2_X2} cy={LINE_Y} r={4} fill={GREEN_DARK} />
        <T x={CROSS2_X1} y={245} size={11} fill={MUTED} anchor="middle">π/6</T>
        <T x={CROSS2_X2} y={245} size={11} fill={MUTED} anchor="middle">5π/6</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Chip x={610} y={262} w={220} h={36} fill={GREEN} textFill="#FFFEFB" size={15} script={false}>
          x ∈ [π/6, 5π/6]
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: the general solution */}
      <Draw on={beat >= 6} d="M 560 325 L 560 370" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={576} y={342} size={13} fill={RED} anchor="start">
          {t("General: x ∈ [2nπ+π/6, 2nπ+5π/6],", "General: x ∈ [2nπ+π/6, 2nπ+5π/6],")}
        </T>
        <T x={576} y={364} size={13} fill={RED} anchor="start" weight={700}>
          {t("n an integer.", "n ek integer hai.")}
        </T>
      </Fade>
    </Scene>
  );
}

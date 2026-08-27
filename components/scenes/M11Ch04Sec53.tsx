/**
 * M11 Ch04 · Section 53 — "Pitfalls & pro-tips: Euler form and roots"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid sequence of ringed/boxed pitfalls, one per beat, plus two
 * standing mini-diagrams (top-right: cube-roots triangle; below it: a pentagon) that get
 * annotated (ringed / arrows-cancel) as the relevant tips land.
 *
 * Beats (board_reveal_at_english [0, 4.78, 14.68, 28.42, 40.02, 49.49, 63.06, 75.52]):
 *  0 heading: root traps, exponential shortcuts (subtitle) — both mini-diagrams appear
 *  1 guardrail (red, high): nth root ⇒ exactly n values — never just one
 *  2 text: reduce ω exponent mod 3; roots-of-unity powers mod n — ring ω vertex
 *  3 guardrail (red): e^(iθ) ≠ e^θ — never mix degrees & radians
 *  4 text: ω²=conjugate(ω); ω, ω² are a conjugate pair — ring both ω, ω² (mirror pair)
 *  5 pro-tip (amber): powers multiply angle; roots divide over n branches — go Euler first
 *  6 guardrail (red, "instant simplifiers"): 1+ω=-ω², 1+ω²=-ω
 *  7 text: n roots of unity sum to zero — arrows-cancel demo on the pentagon
 *
 * Layout plan (left column list x70, rows 55px apart; mini-diagrams top-right):
 *  b0 | subtitle                | T mid | x540 y90
 *  b0 | triangle c(860,150) r48 | Draw/T
 *  b0 | pentagon c(860,300) r48 | Draw
 *  b1 | red chip row1           | Chip  | x70 y108..142
 *  b2 | text row2 + ring ω      | T st/Draw | x70 y163
 *  b3 | red chip row3           | Chip  | x70 y196..228
 *  b4 | text row4 + ring ω,ω²   | T st/Draw | x70 y257
 *  b5 | amber chip row5         | Chip  | x70 y292..326
 *  b6 | red chip row6           | Chip  | x70 y346..380
 *  b7 | text row7 + arrows-cancel on pentagon | T st/Draw
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD, Overline } from "./math-kit";

const TCX = 860, TCY = 150, TR = 48;
const triPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR + 20, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

const PCX = 860, PCY = 320, PR = 48;
const pentPts = [0, 1, 2, 3, 4].map((k) => pointOnCircle(PCX, PCY, PR, (Math.PI / 2) + k * ((2 * Math.PI) / 5)));

export default function M11Ch04Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls & Pro-Tips: Euler Form and Roots", "Pitfalls & Pro-Tips: Euler Form aur Roots")}
        </T>
      </Fade>

      {/* beat 0 — subtitle + the two standing reference diagrams */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Root traps, exponential shortcuts", "Root traps, exponential shortcuts")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={circleD(TCX, TCY, TR)} stroke={MUTED} sw={1.3} dur={0.5} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 0} delay={dl(0, 0.7 + i * 0.2)} d={arrowD(TCX, TCY, triPts[k].x, triPts[k].y)} stroke={k === 0 ? INK : AMBER_DARK} sw={1.6} dur={0.35} />
          <Fade on={beat >= 0} delay={dl(0, 0.9 + i * 0.2)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={12} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 0} delay={dl(0, 1.5)} d={circleD(PCX, PCY, PR)} stroke={MUTED} sw={1.3} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        {pentPts.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={3} fill={GREEN} />
        ))}
      </Fade>

      {/* beat 1 — nth root has exactly n values */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={70} y={108} w={640} h={34} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          {t("An nth root has exactly n values — never just one.", "Ek nth root ke theek n values hote hain — sirf ek nahi.")}
        </Chip>
      </Fade>

      {/* beat 2 — reduce mod n */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={70} y={165} size={14} fill={INK} anchor="start">
          {t("Reduce ω exponent mod 3; roots-of-unity powers mod n.", "ω exponent mod 3 reduce karo; roots-of-unity powers mod n.")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={ringD(triPts[1].x, triPts[1].y, 13, 11)} stroke={RED} sw={1.8} dur={0.5} />

      {/* beat 3 — don't mix degrees and radians */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={70} y={198} w={640} h={34} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("e^(iθ) ≠ e^θ — never mix degrees and radians.", "e^(iθ) ≠ e^θ — degrees aur radians kabhi mix mat karo.")}
        </Chip>
      </Fade>

      {/* beat 4 — omega conjugate pair */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={70} y={260} size={14} fill={INK} anchor="start">ω² = </T>
        <T x={130} y={260} size={14} fill={INK} anchor="start">ω</T>
        <Overline on={beat >= 4} delay={dl(4, 0)} x={130} y={260} size={14} textWidth={11} anchor="start" />
        <T x={148} y={260} size={14} fill={INK} anchor="start">
          {t(" — ω, ω² are a conjugate pair.", " — ω, ω² ek conjugate pair hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={ringD(triPts[1].x, triPts[1].y, 13, 11)} stroke={GREEN} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1)} d={ringD(triPts[2].x, triPts[2].y, 13, 11)} stroke={GREEN} sw={1.8} dur={0.4} />

      {/* beat 5 — pro-tip: powers multiply, roots divide */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={70} y={292} w={640} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t(
            "Pro-tip: powers multiply the angle, roots divide it — go Euler first.",
            "Pro-tip: powers angle multiply, roots divide karte — pehle Euler jao."
          )}
        </Chip>
      </Fade>

      {/* beat 6 — instant simplifiers */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={70} y={346} w={640} h={34} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          1+ω = -ω²,&nbsp;&nbsp; 1+ω² = -ω — {t("instant simplifiers", "instant simplifiers")}
        </Chip>
      </Fade>

      {/* beat 7 — n roots of unity sum to zero, arrows-cancel on the pentagon */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={70} y={400} size={14} fill={INK} anchor="start">
          {t(
            "n roots of unity sum to zero — use symmetry to kill sums fast.",
            "n roots of unity sum zero — symmetry use karke sums turant khatam karo."
          )}
        </T>
      </Fade>
      {pentPts.map((p, i) => (
        <Draw key={i} on={beat >= 7} delay={dl(7, 0.5 + i * 0.15)} d={arrowD(PCX, PCY, p.x, p.y)} stroke={GREEN} sw={1.6} dur={0.35} />
      ))}
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={PCX} y={PCY + PR + 24} size={11} fill={GREEN} anchor="middle" script>
          {t("sum → 0", "sum → 0")}
        </T>
      </Fade>
    </Scene>
  );
}

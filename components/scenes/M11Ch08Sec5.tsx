/**
 * M11 Ch08 · Section 5 — "Finding a general term from a pattern"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Beats (en [0, 9.47, 22.95, 32.34, 42.5, 51.37, 61.95]):
 *  0 title (always-on) — "Find the general term of 3, 8, 15, 24, 35, …"
 *  1 sequence row + first differences (5,7,9,11) — themselves an AP
 *  2 second differences (2,2,2 constant) ⇒ quadratic
 *  3 formula built: a_n = n² + 2n = n(n+2)
 *  4 verify: 1·3=3, 2·4=8, 3·5=15 (checkmarks)
 *  5 red-margin: always verify a 4th term
 *  6 boxed final answer
 *
 * Layout plan:
 *  b1 | terms bl120 cx140/300/460/620/780 · diff arcs y128..150 · diff labels bl150 cx220/380/540/700
 *  b2 | 2nd-diff labels bl180 cx300/460/620 · caption bl208 cx540
 *  b3 | formula line bl255 (two T's, x530 end / x550 start)
 *  b4 | 3 checks bl305 cx230/540/850 + checkD marks
 *  b5 | red bar x76 y345..401 · text bl365/391 x96
 *  b6 | chip x400 y425 w280 h44 (text bl~452)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

function diffArcD(x1: number, x2: number, y: number): string {
  return `M ${x1} ${y} Q ${(x1 + x2) / 2} ${y + 22} ${x2} ${y}`;
}

export default function M11Ch08Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const termCx = [140, 300, 460, 620, 780];
  const termVal = [3, 8, 15, 24, 35];
  const diffCx = [220, 380, 540, 700];
  const diffVal = [5, 7, 9, 11];
  const diff2Cx = [300, 460, 620];

  const checks = [
    { cx: 230, text: "1·3 = 3" },
    { cx: 540, text: "2·4 = 8" },
    { cx: 850, text: "3·5 = 15" },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} anchor="middle" script>
          {t("Find the general term of 3, 8, 15, 24, 35, …", "3, 8, 15, 24, 35, … ka general term nikalo")}
        </T>
      </Fade>

      {/* beat 1 — sequence + first differences */}
      {termCx.map((cx, i) => (
        <Fade key={`term${i}`} on={beat >= 1} delay={dl(1, 0.2 + i * 0.2)}>
          <T x={cx} y={120} size={18} fill={INK} anchor="middle">{termVal[i]}</T>
        </Fade>
      ))}
      {diffCx.map((cx, i) => (
        <Draw
          key={`arc${i}`}
          on={beat >= 1}
          delay={dl(1, 1.2 + i * 0.2)}
          d={diffArcD(termCx[i] + 16, termCx[i + 1] - 16, 128)}
          stroke={MUTED}
          sw={1.6}
          dur={0.5}
        />
      ))}
      {diffCx.map((cx, i) => (
        <Fade key={`dv${i}`} on={beat >= 1} delay={dl(1, 1.4 + i * 0.2)}>
          <T x={cx} y={158} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>{diffVal[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={460} y={182} size={13} fill={MUTED} anchor="middle" script>
          {t("differences 5, 7, 9, 11 — themselves an AP", "differences 5, 7, 9, 11 — khud ek AP hai")}
        </T>
      </Fade>

      {/* beat 2 — second differences, constant */}
      {diff2Cx.map((cx, i) => (
        <Fade key={`d2${i}`} on={beat >= 2} delay={dl(2, 0.3 + i * 0.3)}>
          <T x={cx} y={215} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>2</T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={540} y={243} size={15} fill={INK} anchor="middle" script>
          {t("constant SECOND differences ⇒ a_n is quadratic in n", "constant SECOND differences ⇒ a_n, n mein quadratic hai")}
        </T>
      </Fade>

      {/* beat 3 — formula built */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={530} y={285} size={19} fill={INK} anchor="end">{"a_n = n² + 2n"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={550} y={285} size={19} fill={AMBER_DARK} anchor="start" weight={700}>{"= n(n + 2)"}</T>
      </Fade>

      {/* beat 4 — verify the pattern */}
      {checks.map((c, i) => (
        <Fade key={`chk${i}`} on={beat >= 4} delay={dl(4, 0.3 + i * 0.4)}>
          <T x={c.cx} y={330} size={16} fill={INK} anchor="middle">{c.text}</T>
        </Fade>
      ))}
      {checks.map((c, i) => (
        <Draw
          key={`ck${i}`}
          on={beat >= 4}
          delay={dl(4, 0.6 + i * 0.4)}
          d={checkD(c.cx + 62, 325, 16)}
          stroke={GREEN_DARK}
          sw={2.4}
          dur={0.4}
        />
      ))}

      {/* beat 5 — red-margin: verify a 4th term */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 355 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={375} size={15} fill={RED} anchor="start" script>
          {t("always verify a 4th term —", "hamesha ek 4th term verify karo —")}
        </T>
        <T x={96} y={401} size={15} fill={RED} anchor="start" script>
          {t("a pattern is a conjecture until it holds", "pattern tab tak sirf conjecture hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed final answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={620} y={370} w={300} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={18}>
          {t("answer: a_n = n(n + 2)", "answer: a_n = n(n + 2)")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch08 · Section 2 — "Stop listing, start adding: the series"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0, 9.05, 21.16, 36.1, 45.48, 55.21, 66.13, 80.21]):
 *  0 title (always-on) — "A series is the running total of a sequence"
 *  1 4 term beads 1,2,3,4 building a running total S₁..S₄ one at a time
 *  2 formula: a_1+a_2+...+a_n = Σ a_k (bounds spelled out below, prefix-style)
 *  3 text: sequences = terms, series = total
 *  4 cricket demo: 4 overs' runs as bars, cumulative score chip
 *  5 finite vs infinite closer (2 lines)
 *  6 red-margin: index need not start at 1
 *  7 green pro-tip chip: golden habit
 *
 * Layout plan:
 *  b0 | title script26 cx540 bl58
 *  b1 | 4 beads r20 cy112 cx190/340/490/640 · plus signs cx265/415/565 y112 ·
 *       cumulative labels bl158 · caption bl182
 *  b2 | formula bl218 cx540 · bounds annotation bl238 cx540
 *  b3 | text bl268 cx540
 *  b4 | caption bl292 cx540 · 4 bars baseline y390 cx220/370/520/670 w46 ·
 *       run labels above bars · over labels bl406 · score chip x275..615 y418..452
 *  b5 | text line1 bl488 x76 · line2 bl516 x76
 *  b6 | red bar x560 y470..526 · text bl490/bl516 x580
 *  b7 | chip x260 y550 w560 h38 (text bl~575)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const beadCx = [190, 340, 490, 640];
  const beadVal = [1, 2, 3, 4];
  const cumVal = [1, 3, 6, 10];
  const plusCx = [265, 415, 565];

  const overCx = [220, 370, 520, 670];
  const runs = [6, 10, 4, 8];
  const barBottom = 390;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} anchor="middle" script>
          {t("A series is the running total of a sequence", "A series, ek sequence ka running total hai")}
        </T>
      </Fade>

      {/* beat 1 — 4 beads building the running total, one at a time */}
      {beadCx.map((cx, i) => (
        <Fade key={`bead${i}`} on={beat >= 1} delay={dl(1, 0.3 + i * 0.4)}>
          <Circle cx={cx} cy={112} r={20} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
          <T x={cx} y={118} size={17} fill={INK} anchor="middle">{beadVal[i]}</T>
        </Fade>
      ))}
      {plusCx.map((cx, i) => (
        <Fade key={`plus${i}`} on={beat >= 1} delay={dl(1, 0.5 + i * 0.4)}>
          <T x={cx} y={118} size={17} fill={MUTED} anchor="middle">+</T>
        </Fade>
      ))}
      {beadCx.map((cx, i) => (
        <Fade key={`cum${i}`} on={beat >= 1} delay={dl(1, 1.2 + i * 0.4)}>
          <T x={cx} y={158} size={14} fill={GREEN_DARK} anchor="middle">{`S${["₁", "₂", "₃", "₄"][i]}=${cumVal[i]}`}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={415} y={182} size={13} fill={MUTED} anchor="middle" script>
          {t("running total, one term at a time", "running total, ek ek term karke")}
        </T>
      </Fade>

      {/* beat 2 — the sigma formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={218} size={17} fill={INK} anchor="middle">
          {"a_1 + a_2 + ... + a_n = Σ a_k"}
        </T>
        <T x={540} y={238} size={12} fill={MUTED} anchor="middle">
          {t("(k = 1 to n)", "(k = 1 se n tak)")}
        </T>
      </Fade>

      {/* beat 3 — the terms vs total distinction */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={268} size={15} fill={INK} anchor="middle" script>
          {t(
            "Sequences are about the terms; series are about the total.",
            "Sequence terms ke baare mein hai; series total ke baare mein."
          )}
        </T>
      </Fade>

      {/* beat 4 — cricket running-score demo */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={292} size={14} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("cricket: runs per over → running score", "cricket: har over ke runs → running score")}
        </T>
      </Fade>
      {overCx.map((cx, i) => {
        const h = runs[i] * 4;
        return (
          <Fade key={`bar${i}`} on={beat >= 4} delay={dl(4, 0.6 + i * 0.35)}>
            <Rect x={cx - 23} y={barBottom - h} width={46} height={h} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} rx={4} />
            <T x={cx} y={barBottom - h - 8} size={13} fill={INK} anchor="middle">{runs[i]}</T>
            <T x={cx} y={barBottom + 20} size={12} fill={MUTED} anchor="middle" script>
              {t(`over ${i + 1}`, `over ${i + 1}`)}
            </T>
          </Fade>
        );
      })}
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <Chip x={275} y={418} w={340} h={34} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={14}>
          {t("score after 4 overs = 28", "4 overs ke baad score = 28")}
        </Chip>
      </Fade>

      {/* beat 5 — finite vs infinite */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={76} y={488} size={15} fill={INK} anchor="start" script>
          {t("finite series: finitely many terms.", "finite series: finitely many terms.")}
        </T>
        <T x={76} y={516} size={15} fill={INK} anchor="start" script>
          {t("infinite series: continued without end.", "infinite series: bina kisi end ke chalti hai.")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: index need not start at 1 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 560 470 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={580} y={490} size={14} fill={RED} anchor="start" script>
          {t("index need not start at 1:", "index 1 se hi shuru ho, zaroori nahi:")}
        </T>
        <T x={580} y={516} size={14} fill={RED} anchor="start">
          {"partial sum = S_n - S_(m-1)"}
        </T>
      </Fade>

      {/* beat 7 — golden habit */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={260} y={550} w={560} h={38} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={15}>
          {t("golden habit: position → general term a_n → then list or sum", "golden habit: position → general term a_n → phir list ya sum")}
        </Chip>
      </Fade>
    </Scene>
  );
}

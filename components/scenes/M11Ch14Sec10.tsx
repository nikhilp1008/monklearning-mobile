/**
 * M11 Ch14 · Section 10 — "Worked example: spinner sample space (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples.
 *
 * Beats (board_reveal_at_english [0,8.28,21.33,33.54,44.71,56.32,65.88]):
 *  0 heading
 *  1 problem: 8-sector spinner, find S, A = multiple of 3, B = greater than 5
 *  2 spinner diagram (8 spokes + numbers) + S = {1..8}, n(S) = 8
 *  3 A = {3, 6} — amber discs on sectors 3, 6
 *  4 B = {6, 7, 8} — green discs on sectors 6, 7, 8 (6 gets both)
 *  5 formula (HIGH): A ∩ B = {6} ≠ ∅, ringed on sector 6
 *  6 GUARDRAIL: NOT mutually exclusive
 *
 * Layout plan (spinner LEFT cx255 cy305 r115, formulas RIGHT x=560 anchor
 * start; longer language counts):
 *  b1 | problem statement, 2 lines (16, ink)      | T mid | x180..900 y128..164
 *  b2 | spinner circle + 8 spokes + numbers        | Draw/T| x140..370 y190..420
 *  b2 | "S = {1,...,8}, n(S) = 8" (17, ink)        | T st  | x560..940 y210..230
 *  b3 | amber discs on 3, 6 + "A = {3, 6}" (17)    | Fade/T| x560..760 y255..275
 *  b4 | green discs on 6,7,8 + "B = {6,7,8}" (17)  | Fade/T| x560..800 y300..320
 *  b5 | ring on sector 6 + boxed "A∩B={6}≠∅" (19)  | Draw/T| x560..860 y355..390
 *  b6 | guardrail chip (red, w420 h44)              | Chip  | x560..980 y415..459
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
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, pointOnCircle, roundRectD } from "./math-kit";

const CX = 255;
const CY = 300;
const R_RIM = 115;
const R_LABEL = 82;
const R_DISC = 24;

function angleFor(n: number): number {
  return Math.PI / 2 - (n - 0.5) * (Math.PI / 4);
}
function boundaryAngle(k: number): number {
  return Math.PI / 2 - k * (Math.PI / 4);
}

export default function M11Ch14Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const spokesD = Array.from({ length: 8 }, (_, k) => {
    const p = pointOnCircle(CX, CY, R_RIM, boundaryAngle(k));
    return `M ${CX} ${CY} L ${p.x} ${p.y}`;
  }).join(" ");

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("same order every time: S, then each event, then the overlap", "same order har baar: S, phir har event, phir overlap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Worked Example — spinner (CBSE, 1–2 marks)", "Worked Example — spinner (CBSE, 1–2 marks)")}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={15} fill={INK} weight={600}>
          {t("8 equal sectors numbered 1–8, spun once.", "8 equal sectors, 1–8 numbered, ek baar spin.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={540} y={156} size={15} fill={INK} weight={600}>
          {t('Find S, A = "multiple of 3", B = "greater than 5."', 'S nikaalo, A = "multiple of 3", B = "5 se zyada."')}
        </T>
      </Fade>

      {/* beat 2 — spinner + S */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={circleD(CX, CY, R_RIM)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={spokesD} stroke={MUTED} sw={1.4} dur={0.7} />
      {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => {
        const p = pointOnCircle(CX, CY, R_LABEL, angleFor(n));
        return (
          <Fade key={n} on={beat >= 2} delay={dl(2, 1.8 + n * 0.08)}>
            <T x={p.x} y={p.y + 6} size={17} fill={INK} weight={700}>
              {n}
            </T>
          </Fade>
        );
      })}
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={560} y={218} size={17} fill={INK} anchor="start" weight={800}>
          {"S = {1, 2, …, 8},  n(S) = 8"}
        </T>
      </Fade>

      {/* beat 3 — A = {3, 6} */}
      {[3, 6].map((n) => {
        const p = pointOnCircle(CX, CY, R_LABEL, angleFor(n));
        return (
          <Fade key={`a${n}`} on={beat >= 3} delay={dl(3, 0.3 + (n === 3 ? 0 : 0.5))}>
            <Circle cx={p.x} cy={p.y} r={R_DISC} fill={AMBER} opacity={0.45} />
          </Fade>
        );
      })}
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={560} y={264} size={17} fill={AMBER_DARK} anchor="start" weight={800}>
          {"A = {3, 6}"}
        </T>
      </Fade>

      {/* beat 4 — B = {6, 7, 8} */}
      {[6, 7, 8].map((n) => {
        const p = pointOnCircle(CX, CY, R_LABEL, angleFor(n));
        return (
          <Fade key={`b${n}`} on={beat >= 4} delay={dl(4, 0.3 + (n - 6) * 0.4)}>
            {n === 6 ? (
              <Circle cx={p.x} cy={p.y} r={R_DISC + 6} fill="none" stroke={GREEN} strokeWidth={3} />
            ) : (
              <Circle cx={p.x} cy={p.y} r={R_DISC} fill={GREEN} opacity={0.4} />
            )}
          </Fade>
        );
      })}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={310} size={17} fill={GREEN} anchor="start" weight={800}>
          {"B = {6, 7, 8}"}
        </T>
      </Fade>

      {/* beat 5 — intersection */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d={roundRectD(556, 345, 340, 46, 8)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={560} y={374} size={19} fill={GREEN} anchor="start" weight={800}>
          {"A ∩ B = {6} ≠ ∅"}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={556} y={418} w={420} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("NOT mutually exclusive", "mutually exclusive NAHI")}
        </Chip>
      </Fade>
    </Scene>
  );
}

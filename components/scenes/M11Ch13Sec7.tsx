/**
 * M11 Ch13 · Section 7 — "Procedure: mean deviation about the median of grouped data"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure).
 *
 * Real worked example: classes 0-10..40-50, f=5,8,12,6,4 → cf=5,13,25,31,35.
 * N=35, N/2=17.5. Median class = 20-30 (first cf ≥ 17.5): l=20, C=13, f=12, h=10.
 * M = 20 + ((17.5-13)/12)×10 = 20 + (4.5/12)×10 = 20 + 3.75 = 23.75.
 *
 * Beats (board_reveal_at_english [0, 12.63, 20.99, 32.94, 44.2, 60.25, 72.96]):
 *  0 anchor: heading + table skeleton (Class, f_i columns)
 *  1 represent: Step 1 — cumulative frequency (c.f.) column builds
 *  2 explain: Step 2 — median class = first c.f. reaching N/2 (ringed)
 *  3 land (boxed, high emphasis): interpolation formula M = l + Frac(N/2-C,f)×h,
 *    substituted to 23.75 (first real <Frac> use in this chapter)
 *  4 note (red-margin): ℓ, C, f, h defined with their actual values
 *  5 explain: interpolation assumes even spread across the median class
 *  6 land: Step 3 — proceed as before with |x_i - M| in place of |x_i - x̄|
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 16, amber_dark)  | T mid | x540 y92
 *  b0 | table header + Class/f_i cols    | T mid | x180..520 y140/164..270
 *  b1 | c.f. column (5 rows)             | T mid | col x450
 *  b2 | N/2 badge + ring median row      | T+Draw| x560 y140 · ring(450,222)
 *  b2 | "median class = 20-30" callout   | T st  | x560 y168
 *  b3 | boxed formula (Frac) + numeric   | Draw+Row/Frac | box x560..1000 y195..270
 *  b4 | red bar + 4 definitions (13)     | Draw+T| x560 y285..348
 *  b5 | interpolation note (13, muted)   | T st  | x560 y372
 *  b6 | closing step3 line (14)          | Row   | x560 y398
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { lineD, roundRectD, Overline, Frac } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

const COL_CLASS = 250;
const COL_FI = 360;
const COL_CF = 450;
const ROWS = [
  { y: 174, cls: "0-10", fi: "5", cf: "5" },
  { y: 198, cls: "10-20", fi: "8", cf: "13" },
  { y: 222, cls: "20-30", fi: "12", cf: "25" },
  { y: 246, cls: "30-40", fi: "6", cf: "31" },
  { y: 270, cls: "40-50", fi: "4", cf: "35" },
];

export default function M11Ch13Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} anchor="middle" script>
          {t("Procedure: M.D. About the Median of Grouped Data", "Procedure: Grouped Data ka Median M.D.")}
        </T>
      </Fade>

      {/* beat 0 — anchor + table skeleton */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" script>
          {t("You can't read the median off a grouped table", "Grouped table se median seedha nahi padh sakte")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={COL_CLASS} y={140} size={13} fill={MUTED} anchor="middle" weight={700}>Class</T>
        <T x={COL_FI} y={140} size={13} fill={MUTED} anchor="middle" weight={700}>f_i</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)} d={lineD(180, 150, 520, 150)} stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 0} delay={dl(0, 1.4 + i * 0.3)}>
          <T x={COL_CLASS} y={r.y} size={14} fill={INK} anchor="middle">{r.cls}</T>
          <T x={COL_FI} y={r.y} size={14} fill={INK} anchor="middle">{r.fi}</T>
        </Fade>
      ))}

      {/* beat 1 — step 1: cumulative frequency column */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_CF} y={140} size={13} fill={MUTED} anchor="middle" weight={700}>c.f.</T>
      </Fade>
      {ROWS.map((r, i) => (
        <Fade key={`cf${r.y}`} on={beat >= 1} delay={dl(1, 0.4 + i * 0.35)}>
          <T x={COL_CF} y={r.y} size={14} fill={INK} anchor="middle">{r.cf}</T>
        </Fade>
      ))}

      {/* beat 2 — step 2: the median class */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={560} y={140} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          N = 35,  N/2 = 17.5
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={ringD(COL_CF, 222, 22, 15)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={560} y={168} size={14} fill={AMBER_DARK} anchor="start">
          {t("median class = 20-30 (first c.f. ≥ 17.5)", "median class = 20-30 (pehli c.f. ≥ 17.5)")}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): interpolation formula */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(560, 195, 440, 78)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={580} y={232} size={18} fill={INK} anchor="start" weight={700}>M = l +</T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 1.6)} x={702} y={232} size={19} numerator="N/2 - C" denominator="f" width={82} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={752} y={232} size={18} fill={INK} anchor="start" weight={700}>{"× h"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={580} y={258} size={16} fill={GREEN} anchor="start" weight={800}>
          {"= 20 + (4.5/12)×10 = 23.75"}
        </T>
      </Fade>

      {/* beat 4 — note: define the pieces with real values */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 560 285 L 560 350" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={576} y={290} size={13} fill={RED} anchor="start">{t("ℓ = lower boundary of median class = 20", "ℓ = median class ki lower boundary = 20")}</T>
        <T x={576} y={309} size={13} fill={RED} anchor="start">{t("C = c.f. of the class before it = 13", "C = pichli class ki c.f. = 13")}</T>
        <T x={576} y={328} size={13} fill={RED} anchor="start">{t("f = frequency of median class = 12", "f = median class ki frequency = 12")}</T>
        <T x={576} y={347} size={13} fill={RED} anchor="start">{t("h = width of median class = 10", "h = median class ki width = 10")}</T>
      </Fade>

      {/* beat 5 — explain: interpolation assumes even spread */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={560} y={372} size={13} fill={MUTED} anchor="start">
          {t(
            "Assumes observations spread evenly across the median class.",
            "Maana jaata hai observations median class mein evenly spread hain."
          )}
        </T>
      </Fade>

      {/* beat 6 — land: step 3, swap in |x_i - M| (x̄ position differs per language) */}
      {en ? (
        <>
          <Fade on={beat >= 6} delay={dl(6, 0.2)}>
            <T x={560} y={398} size={14} fill={INK} anchor="start" weight={700}>
              {"Step 3: use |x_i - M| instead of |x_i - "}
            </T>
          </Fade>
          <XBar on={beat >= 6} delay={dl(6, 0.2)} x={850} y={398} size={14} anchor="start" />
          <Fade on={beat >= 6} delay={dl(6, 0.2)}>
            <T x={863} y={398} size={14} fill={INK} anchor="start" weight={700}>{"|."}</T>
          </Fade>
        </>
      ) : (
        <>
          <Fade on={beat >= 6} delay={dl(6, 0.2)}>
            <T x={560} y={398} size={14} fill={INK} anchor="start" weight={700}>{"Step 3: |x_i - "}</T>
          </Fade>
          <XBar on={beat >= 6} delay={dl(6, 0.2)} x={668} y={398} size={14} anchor="start" />
          <Fade on={beat >= 6} delay={dl(6, 0.2)}>
            <T x={681} y={398} size={14} fill={INK} anchor="start" weight={700}>
              {"| ki jagah |x_i - M| use karo."}
            </T>
          </Fade>
        </>
      )}
    </Scene>
  );
}

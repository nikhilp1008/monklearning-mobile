/**
 * M11 Ch13 · Section 6 — "Procedure: mean deviation of a frequency distribution"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure).
 *
 * A real worked table drives every beat: classes 0-10,10-20,20-30 with
 * f=2,5,3 (N=10). Midpoints 5,15,25 → x̄ = (2·5+5·15+3·25)/10 = 160/10 = 16.
 * f_i|x_i-x̄|: 2·11=22, 5·1=5, 3·9=27 → Σ=54 → M.D. = 54/10 = 5.4.
 *
 * Beats (board_reveal_at_english [0, 11.61, 25.34, 36.18, 51.29, 66.13, 82.09]):
 *  0 anchor: heading "when data comes with frequencies"
 *  1 represent: table skeleton, Class → x_i column (arrow shows the swap for row 1)
 *  2 represent: formula x_i = (lower+upper)/2, worked for row 1, ringed
 *  3 represent: f_i column fills in, N = Σf_i = 10 stated
 *  4 land (boxed, high emphasis): f_i|x_i-x̄| column fills, totals, boxed M.D. formula = 5.4
 *  5 guardrail (red-margin, HIGH emphasis): divide by N=10, NEVER by 3 classes
 *  6 explain: why the f_i weighting — an observation counted f_i times
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 22, red, always-on)     | T mid | x540 y58
 *  b0 | heading (script 17, amber_dark)  | T mid | x540 y92
 *  b1 | table header + underline         | T+Draw| x140..760 y158/168
 *  b1 | Class/x_i cols, 3 rows           | T mid | y188/214/240 · arrow row1
 *  b2 | callout "(0+10)/2 = 5" + ring    | T+Draw| x790 y188
 *  b3 | f_i column + N=10                | T mid | col x470
 *  b3 | underline before totals          | Draw  | y252
 *  b4 | f_i|x_i-x̄| column + totals row   | T mid | col x640 · y276
 *  b4 | boxed M.D. formula (2 lines)     | Draw+Row | box x140..820 y296..370
 *  b5 | red bar + guardrail text (16)    | Draw+T| x60 y392..412 · text y406
 *  b5 | wrong/right chips                | Chip  | x220..460 / x580..860 y422..454
 *  b6 | closing line (script 15)         | T mid | x540 y520
 */

import React from "react";
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
import { lineD, roundRectD, Overline } from "./math-kit";

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

function FormulaRow({
  on,
  delay = 0,
  x,
  y,
  size,
  parts,
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  parts: (string | "xbar")[];
  fill?: string;
  weight?: number;
}) {
  let cursor = x;
  const gap = size * 0.12;
  return (
    <>
      {parts.map((p, i) => {
        if (p === "xbar") {
          const w = size * 0.6;
          const el = (
            <XBar key={i} on={on} delay={delay} x={cursor} y={y} size={size} anchor="start" fill={fill} weight={weight} />
          );
          cursor += w + gap;
          return el;
        }
        const w = size * 0.52 * p.length;
        const el = (
          <Fade key={i} on={on} delay={delay}>
            <T x={cursor} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          </Fade>
        );
        cursor += w + gap;
        return el;
      })}
    </>
  );
}

const COL_CLASS = 220;
const COL_XI = 360;
const COL_FI = 470;
const COL_FID = 640;
const ROWS = [
  { y: 188, cls: "0-10", xi: "5", fi: "2", fid: "22" },
  { y: 214, cls: "10-20", xi: "15", fi: "5", fid: "5" },
  { y: 240, cls: "20-30", xi: "25", fi: "3", fid: "27" },
];

export default function M11Ch13Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Procedure: M.D. of a Frequency Distribution", "Procedure: Frequency Distribution ka M.D.")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={17} fill={AMBER_DARK} anchor="middle" script>
          {t("When data comes with frequencies", "Jab data frequencies ke saath aata hai")}
        </T>
      </Fade>

      {/* beat 1 — table header + Class/x_i columns */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={COL_CLASS} y={158} size={13} fill={MUTED} anchor="middle" weight={700}>Class</T>
        <T x={COL_XI} y={158} size={13} fill={MUTED} anchor="middle" weight={700}>x_i</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={lineD(140, 168, 500, 168)} stroke={INK} sw={1.6} dur={0.5} />
      {ROWS.map((r, i) => (
        <Fade key={r.y} on={beat >= 1} delay={dl(1, 0.9 + i * 0.4)}>
          <T x={COL_CLASS} y={r.y} size={14} fill={INK} anchor="middle">{r.cls}</T>
          <T x={COL_XI} y={r.y} size={14} fill={INK} anchor="middle">{r.xi}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(255, 188, 335, 188)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 2 — formula: x_i = (lower+upper)/2, worked for row 1 */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={ringD(COL_XI, 188, 24, 15)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={790} y={184} size={13} fill={AMBER_DARK} anchor="start">
          {t("x_i = (lower+upper)/2", "x_i = (lower+upper)/2")}
        </T>
        <T x={790} y={202} size={13} fill={AMBER_DARK} anchor="start">
          {"= (0+10)/2 = 5"}
        </T>
      </Fade>

      {/* beat 3 — f_i column, N = Σf_i */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={COL_FI} y={158} size={13} fill={MUTED} anchor="middle" weight={700}>f_i</T>
      </Fade>
      {ROWS.map((r, i) => (
        <Fade key={`fi${r.y}`} on={beat >= 3} delay={dl(3, 0.5 + i * 0.3)}>
          <T x={COL_FI} y={r.y} size={14} fill={INK} anchor="middle">{r.fi}</T>
        </Fade>
      ))}
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={lineD(140, 252, 760, 252)} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={COL_FI} y={276} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>N=10</T>
      </Fade>

      {/* beat 4 — land: f_i|x_i-x̄| column, totals, boxed M.D. formula */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={COL_FID} y={158} size={13} fill={MUTED} anchor="middle" weight={700}>{"f_i·|x_i - x_bar|"}</T>
      </Fade>
      {ROWS.map((r, i) => (
        <Fade key={`fid${r.y}`} on={beat >= 4} delay={dl(4, 0.5 + i * 0.3)}>
          <T x={COL_FID} y={r.y} size={14} fill={INK} anchor="middle">{r.fid}</T>
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={COL_FID} y={276} size={14} fill={GREEN} anchor="middle" weight={700}>{"Σ=54"}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={roundRectD(140, 296, 680, 74)} stroke={GREEN} sw={2.2} dur={0.8} />
      <FormulaRow
        on={beat >= 4}
        delay={dl(4, 3)}
        x={170}
        y={325}
        size={17}
        parts={["MD(", "xbar", ") = (1/N) Σ f_i |x_i - ", "xbar", "|"]}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={170} y={353} size={17} fill={GREEN} anchor="start" weight={800}>
          {"= 54 / 10 = 5.4"}
        </T>
      </Fade>

      {/* beat 5 — guardrail (high emphasis): divide by N, never by class count */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 392 L 60 412" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={406} size={16} fill={RED} anchor="start" weight={800}>
          {t(
            "N = Σf_i — NEVER the number of classes!",
            "N = Σf_i — classes ki ginti NAHI!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Chip x={220} y={422} w={240} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"54 ÷ 3 = 18  ✗"}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={580} y={422} w={280} h={32} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"54 ÷ 10 = 5.4  ✓"}
        </Chip>
      </Fade>

      {/* beat 6 — explain: why the f_i weighting */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={520} size={15} fill={INK} anchor="middle" script>
          {t(
            "An observation occurring 10 times contributes its distance 10 times.",
            "10 baar aane wali observation apni distance 10 baar contribute karti hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

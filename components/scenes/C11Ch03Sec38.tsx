/**
 * C11 Chemistry Ch03 · Section 38 — "Worked example: spot the diagonal pair"
 * Canvas 1080×620 · safe x36–1044, y30–596. NEET speed trap.
 *
 * Beats (en [0, 7.68, 18.86, 32.26, 39.34, 53.5, 64.0, 69.8]):
 *  0 title + underline
 *  1 4 option rows: (1) Na-Mg (2) Be-Al (3) Li-Na (4) B-C
 *  2 rule reminder: first element ~ its lower-right neighbour
 *  3 (1) Na-Mg struck through — same period, FALSE
 *  4 red-margin: (2) Be-Al — one down, one right, TRUE
 *  5 (3) Li-Na (same group) and (4) B-C (same period) — both FALSE
 *  6 red-margin: ANSWER = (2) Be-Al
 *  7 closing amber stamp: traps are same-row/same-column pairs
 *
 * Layout plan:
 *  b1 | 4 option rows                | T st  | x120..?   y96..264 (circles cx90)
 *  b2 | rule (script 13, muted)      | T mid | x?..?     y280..294 (bl 294)
 *  b3-5 | tags + reasons             | Chip  | x900..1000 per row
 *  b6 | red margin bar + answer      | Draw  | x70 y310..346 (bl 332)
 *  b7 | closing stamp (amber)        | Chip  | x230..850 y360..396
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
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  { n: "(1)", pair: "Na-Mg", reason: "same period", reasonHi: "same period", ok: false },
  { n: "(2)", pair: "Be-Al", reason: "one down, one right", reasonHi: "ek down, ek right", ok: true },
  { n: "(3)", pair: "Li-Na", reason: "same group", reasonHi: "same group", ok: false },
  { n: "(4)", pair: "B-C", reason: "same period", reasonHi: "same period", ok: false },
];

export default function C11Ch03Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("spot the diagonal pair (NEET)", "diagonal pair pehchaano (NEET)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the four options */}
      {ROWS.map((r, i) => {
        const y = 96 + i * 44;
        const cy = y + 18;
        return (
          <Fade key={r.pair} on={beat >= 1} delay={dl(1, 0.15 * i)}>
            <Circle cx={90} cy={cy} r={16} fill="none" stroke={INK} strokeWidth={1.6} />
            <T x={90} y={cy + 5} size={13} fill={INK} weight={700}>{i + 1}</T>
            <T x={120} y={y + 24} size={17} fill={INK} weight={700} anchor="start">{r.pair}</T>
          </Fade>
        );
      })}

      {/* beat 2 — the rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={294} size={13} fill={MUTED} script>
          {t("rule: first element ~ its lower-right neighbour", "rule: pehla element ~ apne lower-right neighbour jaisa")}
        </T>
      </Fade>

      {/* beat 3 — option 1 eliminated */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 200 121 L 300 121" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={320} y={126} size={12} fill={RED} anchor="start">{`(${en ? ROWS[0].reason : ROWS[0].reasonHi})`}</T>
        <Chip x={900} y={104} w={100} h={32} fill={RED} textFill="#fff" size={12} script={false}>FALSE</Chip>
      </Fade>

      {/* beat 4 — red-margin: option 2, the winner */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 148 L 70 180" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={320} y={170} size={12} fill={GREEN} weight={700} anchor="start">{`(${en ? ROWS[1].reason : ROWS[1].reasonHi})`}</T>
        <Chip x={900} y={148} w={100} h={32} fill={GREEN} textFill="#fff" size={12} script={false}>TRUE</Chip>
      </Fade>

      {/* beat 5 — options 3 and 4 eliminated */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 200 209 L 300 209" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={320} y={214} size={12} fill={RED} anchor="start">{`(${en ? ROWS[2].reason : ROWS[2].reasonHi})`}</T>
        <Chip x={900} y={192} w={100} h={32} fill={RED} textFill="#fff" size={12} script={false}>FALSE</Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 200 253 L 280 253" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={320} y={258} size={12} fill={RED} anchor="start">{`(${en ? ROWS[3].reason : ROWS[3].reasonHi})`}</T>
        <Chip x={900} y={236} w={100} h={32} fill={RED} textFill="#fff" size={12} script={false}>FALSE</Chip>
      </Fade>

      {/* beat 6 — red-margin: the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 70 310 L 70 346" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={94} y={332} size={16} weight={700} fill={GREEN} anchor="start">
          {t("ANSWER: (2) Be-Al", "ANSWER: (2) Be-Al")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={360} w={620} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("traps are all same-row or same-column pairs", "traps sab same-row ya same-column pairs hain")}
        </Chip>
      </Fade>
    </Scene>
  );
}

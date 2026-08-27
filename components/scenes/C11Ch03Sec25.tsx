/**
 * C11 Chemistry Ch03 · Section 25 — "Worked example: order isoelectronic species by radius"
 * Canvas 1080×620 · safe x36–1044, y30–596. CBSE worked example.
 *
 * Beats (en [0, 5.97, 19.8, 38.23, 50.35, 60.25, 74.24, 87.47]):
 *  0 title + underline
 *  1 given: Al³⁺, Mg²⁺, Na⁺, F⁻, O²⁻ chips
 *  2 red-margin: all 5 have 10 e⁻ — isoelectronic (neon-like)
 *  3 rule: isoelectronic ⇒ radius falls as Z rises
 *  4 Z values under each chip: 13, 12, 11, 9, 8
 *  5 higher Z grips tighter ⇒ highest-Z cation is smallest
 *  6 red-margin: increasing-size circles + the ordered inequality
 *  7 closing green stamp: one rule, instant ordering
 *
 * Layout plan:
 *  b1 | 5 species chips             | Chip  | x150..930 y100..140
 *  b2 | red margin bar + line       | Draw  | x70 y190..222 (bl 210)
 *  b3 | rule (14,w700,amber_dark)   | T mid | x?..?     y231..246 (bl 245)
 *  b4 | 5 Z labels under chips      | T mid | x?..?     y152..165 (bl 165)
 *  b5 | logic (13, ink)             | T mid | x?..?     y256..271 (bl 270)
 *  b6 | 5 circles, increasing size  | Draw  | x220..860 y290..374
 *  b6 | red margin bar + inequality | Draw  | x70 y390..422 (bl 410)
 *  b7 | closing stamp (green)       | Chip  | x280..800 y440..476
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const SPECIES = [
  { sym: "Al³⁺", z: 13, r: 18 },
  { sym: "Mg²⁺", z: 12, r: 24 },
  { sym: "Na⁺", z: 11, r: 30 },
  { sym: "F⁻", z: 9, r: 36 },
  { sym: "O²⁻", z: 8, r: 42 },
];
const CHIP_W = 140;
const CHIP_GAP = 20;
const CHIP_X0 = 150;
const CX = SPECIES.map((_, i) => CHIP_X0 + i * (CHIP_W + CHIP_GAP) + CHIP_W / 2);

export default function C11Ch03Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("order isoelectronic species by radius (CBSE)", "isoelectronic species ko radius se order karo (CBSE)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given species */}
      {SPECIES.map((s, i) => (
        <Fade key={s.sym} on={beat >= 1} delay={dl(1, 0.15 * i)}>
          <Chip x={CHIP_X0 + i * (CHIP_W + CHIP_GAP)} y={100} w={CHIP_W} h={40} fill="#FFFEFB" stroke={INK} textFill={INK} size={17} script={false}>
            {s.sym}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — red-margin: isoelectronic */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 190 L 70 222" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={210} size={15} weight={700} fill={INK} anchor="start">
          {t("all 5 have 10 e⁻ — isoelectronic (neon-like)", "sab 5 ke paas 10 e⁻ — isoelectronic (neon-like)")}
        </T>
      </Fade>

      {/* beat 3 — the rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={245} size={14} weight={700} fill={AMBER_DARK}>
          {t("isoelectronic ⇒ radius falls as Z rises", "isoelectronic ⇒ Z badhe toh radius girta")}
        </T>
      </Fade>

      {/* beat 4 — nuclear charges */}
      {SPECIES.map((s, i) => (
        <Fade key={s.sym} on={beat >= 4} delay={dl(4, 0.1 * i)}>
          <T x={CX[i]} y={165} size={13} fill={MUTED}>
            {`Z=${s.z}`}
          </T>
        </Fade>
      ))}

      {/* beat 5 — the logic */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={270} size={13} fill={INK}>
          {t("higher Z grips tighter ⇒ highest-Z cation is SMALLEST", "zyada Z tight pakadta ⇒ highest-Z cation SMALLEST hai")}
        </T>
      </Fade>

      {/* beat 6 — increasing-size circles + the answer */}
      {SPECIES.map((s, i) => (
        <Fade key={s.sym} on={beat >= 6} delay={dl(6, 0.15 * i)}>
          <Circle cx={CX[i]} cy={290 + s.r} r={s.r} fill={AMBER} fillOpacity={0.3} stroke={AMBER_DARK} strokeWidth={2} />
        </Fade>
      ))}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 70 390 L 70 422" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={94} y={410} size={15} weight={700} fill={GREEN} anchor="start">
          {"Al³⁺ < Mg²⁺ < Na⁺ < F⁻ < O²⁻ (increasing radius)"}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={280} y={440} w={520} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("one rule, instant ordering", "ek rule, instant ordering")}
        </Chip>
      </Fade>
    </Scene>
  );
}

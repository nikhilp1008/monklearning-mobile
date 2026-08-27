/**
 * C11 Chemistry Ch03 · Section 41 — "Common pitfalls and pro-tips" (subtopic 3 closer)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.17, 24.32, 42.92, 55.64, 70.66, 88.66, 104.45]):
 *  0 title + underline
 *  1 red-ring Pitfall 1: formula crossover — X3Y2, not XY
 *  2 Pitfall 2: diagonal ≠ group/period neighbours
 *  3 Pitfall 3: max OS = all valence s+p e-, not (8-N)
 *  4 Pitfall 4: no octet expansion for period 2
 *  5 red-margin: Reflex 1 — left gives / right grabs (2 lines)
 *  6 Reflex 2: period-2 no-d flag
 *  7 closing green stamp: diagonal? down-one, right-one
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows            | T st  | x120..?   y96..264 (circles cx90)
 *  b5 | red margin box, 2 lines     | Draw  | x140..940 y284..336 (bl 302/328)
 *  b6 | Reflex 2 line               | T mid | x?..?     y346..360 (bl 356)
 *  b7 | closing stamp (green)       | Chip  | x230..850 y372..406
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: { text: string; textHi: string; emph: boolean }[] = [
  {
    text: "formula crossover: group2+group15 → X₃Y₂, not XY",
    textHi: "formula crossover: group2+group15 → X₃Y₂, XY nahi",
    emph: true,
  },
  {
    text: "diagonal ≠ group/period neighbours (Li-Mg, Be-Al, B-Si)",
    textHi: "diagonal ≠ group/period neighbours (Li-Mg, Be-Al, B-Si)",
    emph: false,
  },
  {
    text: "max OS = all valence s+p e⁻, NOT (8−N)",
    textHi: "max OS = sab valence s+p e⁻, (8−N) NAHI",
    emph: false,
  },
  {
    text: "no octet expansion for period 2 — N,O,F have no d",
    textHi: "period 2 mein octet expansion nahi — N,O,F ke paas d nahi",
    emph: false,
  },
];

export default function C11Ch03Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("common pitfalls and pro-tips", "common pitfalls aur pro-tips")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {PITFALLS.map((p, i) => {
        const y = 96 + i * 44;
        const cy = y + 18;
        return (
          <Fade key={i} on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={90} cy={cy} r={16} fill="none" stroke={RED} strokeWidth={2} />
            <T x={90} y={cy + 5.5} size={14} fill={RED} weight={800}>{i + 1}</T>
            <T x={120} y={y + 24} size={15} fill={p.emph ? RED : INK} weight={p.emph ? 700 : 600} anchor="start">
              {t(p.text, p.textHi)}
            </T>
          </Fade>
        );
      })}

      {/* beat 5 — red-margin: Reflex 1 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 140 284 h 800 v 52 h -800 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={304} size={14} weight={700} fill={AMBER_DARK}>
          {t("REFLEX 1: left gives — metallic, basic, reducing", "REFLEX 1: left deta — metallic, basic, reducing")}
        </T>
        <T x={540} y={330} size={14} weight={700} fill={GREEN}>
          {t("right grabs — non-metallic, acidic, oxidising", "right grabta — non-metallic, acidic, oxidising")}
        </T>
      </Fade>

      {/* beat 6 — Reflex 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={356} size={13} weight={700} fill={AMBER_DARK}>
          {t("REFLEX 2: period-2 no-d flag ⇒ N/O/F pushed high = impossible", "REFLEX 2: period-2 no-d flag ⇒ N/O/F high push = impossible")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={372} w={620} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("diagonal? draw down-one, right-one, read the partner", "diagonal? down-one, right-one banao, partner padho")}
        </Chip>
      </Fade>
    </Scene>
  );
}

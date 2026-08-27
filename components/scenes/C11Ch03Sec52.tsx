/**
 * C11 Chemistry Ch03 · Section 52 — "Common pitfalls and pro-tips" (subtopic 4 closer)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.28, 32.85, 44.97, 57.51, 71.59, 81.24, 95.4]):
 *  0 title + underline
 *  1 red-margin Pitfall 1: period = highest n, not last d/f shell (Fe: period 4)
 *  2 Pitfall 2: group ≠ d-count alone — group = (n-1)d + ns
 *  3 Pitfall 3: not every d-block element is transition — Zn,Cd,Hg excluded
 *  4 Pitfall 4: He's 1s² looks s-block, property places it in group 18
 *  5 red-margin pro-tip: for block, jump to last subshell filled, ignore rest
 *  6 quick map: s = ns · p = 10+(outer s+p) · d = (n-1)d+ns
 *  7 closing green stamp: memorise staircase + Cr/Cu exception reflex
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows            | T st  | x120..?   y96..264 (circles cx90)
 *  b5 | red margin box, 2 lines     | Draw  | x140..940 y284..336 (bl 302/328)
 *  b6 | quick map line              | T mid | x?..?     y346..360 (bl 356)
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
    text: "period = highest n, NOT last d/f shell (Fe: period 4, not 3)",
    textHi: "period = sabse zyada n, last d/f shell NAHI (Fe: period 4, 3 nahi)",
    emph: true,
  },
  {
    text: "group ≠ d-count alone — group = (n-1)d + ns",
    textHi: "group ≠ sirf d-count — group = (n-1)d + ns",
    emph: false,
  },
  {
    text: "not every d-block element is transition — Zn, Cd, Hg (d¹⁰) excluded",
    textHi: "har d-block element transition nahi — Zn, Cd, Hg (d¹⁰) excluded",
    emph: false,
  },
  {
    text: "He's 1s² looks s-block, but property places it in group 18",
    textHi: "He ka 1s² s-block jaisa dikhta, par property group 18 mein rakhti",
    emph: false,
  },
];

export default function C11Ch03Sec52({ currentTime, reveals, language }: SceneProps) {
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

      {/* beat 5 — red-margin: pro-tip for the block */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 140 284 h 800 v 52 h -800 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={304} size={14} weight={700} fill={AMBER_DARK}>
          {t("PRO-TIP: for the block, jump straight to the last subshell filled", "PRO-TIP: block ke liye, seedha last subshell filled pe jao")}
        </T>
        <T x={540} y={330} size={14} weight={700} fill={GREEN}>
          {t("ignore everything before it — the block is decided there alone", "usse pehle sab ignore karo — block sirf wahin decide hota")}
        </T>
      </Fade>

      {/* beat 6 — quick map for the group */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={356} size={13} weight={700} fill={AMBER_DARK}>
          {"quick map: s = ns · p = 10+(outer s+p) · d = (n-1)d+ns"}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={372} w={620} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("memorise the staircase — and reach for Cr/Cu the instant they appear", "staircase yaad rakho — Cr/Cu dikhte hi turant yaad karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}

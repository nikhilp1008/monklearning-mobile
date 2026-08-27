/**
 * C11 Chemistry Ch03 · Section 29 — "Common pitfalls and pro-tips" (subtopic 2 closer)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.63, 21.5, 37.38, 56.15, 67.5, 90.37, 113.49]):
 *  0 title + underline
 *  1 red-ring Pitfall 1: isoelectronic ordering — only Z matters
 *  2 Pitfall 2: F ≠ most negative EGE, it's Cl
 *  3 Pitfall 3: forgetting the two IE reversals
 *  4 Pitfall 4: mixing units
 *  5 red-margin master box: the two-line trend arrow (across / down)
 *  6 four exception-flag chips
 *  7 closing green stamp: successive-IE trick
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows            | T st  | x120..?   y96..264 (circles cx90)
 *  b5 | master box, 2 lines         | Draw  | x140..940 y290..360 (bl 316/346)
 *  b6 | label + 4 exception chips   | Chip  | x285..795 y370..400 (bl 384)
 *  b7 | closing stamp (green)       | Chip  | x170..910 y410..448
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
    text: "isoelectronic: only Z matters — bigger Z = smaller ion",
    textHi: "isoelectronic: sirf Z matter karta — bada Z = chhota ion",
    emph: true,
  },
  {
    text: "F ≠ most negative EGE — it's Cl (tiny 2p over-repels)",
    textHi: "F ≠ sabse negative EGE — Cl hai (tiny 2p over-repels)",
    emph: false,
  },
  {
    text: "IE dips at filled-s (Be,Mg) and half-filled-p (N,P)",
    textHi: "IE dips filled-s (Be,Mg) aur half-filled-p (N,P) pe",
    emph: false,
  },
  {
    text: "units: EN/metallic unitless; IE/EGE in kJ/mol",
    textHi: "units: EN/metallic unitless; IE/EGE kJ/mol mein",
    emph: false,
  },
];

const FLAGS = ["Be/Mg", "N/P", "F vs Cl", "Ga<Al"];

export default function C11Ch03Sec29({ currentTime, reveals, language }: SceneProps) {
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

      {/* beat 5 — the master arrow */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 140 290 h 800 v 70 h -800 z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={316} size={15} weight={700} fill={AMBER_DARK}>
          {"across period: Zeff↑, size↓, IE↑, EGE more−, EN↑"}
        </T>
        <T x={540} y={346} size={15} weight={700} fill={GREEN}>
          {t("down a group: every one of these REVERSES", "group mein neeche: ye sab REVERSE ho jaate")}
        </T>
      </Fade>

      {/* beat 6 — the four exception flags */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={285} y={384} size={13} weight={700} fill={INK} anchor="start">
          {t("exception flags:", "exception flags:")}
        </T>
      </Fade>
      {FLAGS.map((f, i) => (
        <Fade key={f} on={beat >= 6} delay={dl(6, 0.3 + i * 0.15)}>
          <Chip x={405 + i * 100} y={370} w={90} h={30} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
            {f}
          </Chip>
        </Fade>
      ))}

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={170} y={410} w={740} h={38} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("biggest jump ⇒ electrons before it = the group (successive-IE trick)", "sabse bada jump ⇒ uske pehle electrons = group (successive-IE trick)")}
        </Chip>
      </Fade>
    </Scene>
  );
}

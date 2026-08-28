/**
 * Ch12 · Section 35 — Worked example [JEE Advanced]: why rms always beats the average
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.29, 27.65, 34.9, 46.76, 56.41, 57.41]):
 *  0 title + problem · 1 THE PICTURE: bar chart of 5 speeds (2,4,6,8,10) · 2
 *    vavg = 30/5 = 6.00 · 3 vrms: √44 ≈ 6.63 · 4 verdict: vrms > vavg · 5
 *    deeper reason: squaring weights the "10" bar disproportionately · 6 math
 *    statement: ⟨v²⟩ ≥ ⟨v⟩² always
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 21, red)          | T mid | x260..820 y33..70 (bl60)
 *  b0 | problem (13, ink, script)       | T mid | x540 y88
 *  b1 | 5 bars + value labels            | rect  | x160..480 y140..260
 *  b2 | vavg line (15, ink)             | T mid | x540 y288
 *  b3 | vrms line (15, ink)             | T mid | x540 y316
 *  b4 | verdict chip (green)             | Chip  | x350..730 y340..376
 *  b5 | arrow → "10" bar + label        | Draw  | (560,160)→(484,138) y160
 *  b6 | math statement (14, ink, bold)  | T mid | x540 y420
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const SPEEDS: [number, number, number][] = [
  [160, 2, 24],
  [230, 4, 48],
  [300, 6, 72],
  [370, 8, 96],
  [440, 10, 120],
];

export default function Ch12Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("why rms always beats the average [JEE Advanced]", "rms hamesha average se kyun bada [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t(
            "5 molecules: speeds 2,4,6,8,10 (units) ⇒ vavg? vrms? why vrms>vavg?",
            "5 molecules: speeds 2,4,6,8,10 (units) ⇒ vavg? vrms? kyun vrms>vavg?"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: bar chart of speeds */}
      {SPEEDS.map(([x, v, h], i) => (
        <G key={x}>
          <Fade on={beat >= 1} delay={dl(1, 0.2 + i * 0.25)}>
            <Rect x={x} y={260 - h} width={40} height={h} fill={AMBER_DARK} />
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 0.5 + i * 0.25)}>
            <T x={x + 20} y={260 - h - 8} size={12} fill={AMBER_DARK} anchor="middle">
              {v}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 2 — average */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={288} size={15} fill={INK}>
          vavg = (2+4+6+8+10)/5 = 6.00
        </T>
      </Fade>

      {/* beat 3 — rms */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={316} size={15} fill={INK}>
          vrms = √[(4+16+36+64+100)/5] = √44 ≈ 6.63
        </T>
      </Fade>

      {/* beat 4 — verdict */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={350} y={340} w={380} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          vrms (6.63) &gt; vavg (6.00)
        </Chip>
      </Fade>

      {/* beat 5 — deeper reason: squaring weights the "10" bar */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(560, 160, 484, 138)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={565} y={160} size={12} fill={RED} anchor="start">
          {t("10 → adds 100 (squared), only 10 (plain)", "10 → 100 (squared) deta, sirf 10 (plain)")}
        </T>
      </Fade>

      {/* beat 6 — the math statement */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={420} size={14} fill={INK} weight={700}>
          {t(
            "⟨v²⟩ ≥ ⟨v⟩² always — equality only if every speed is equal",
            "⟨v²⟩ ≥ ⟨v⟩² hamesha — equality sirf jab har speed equal ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

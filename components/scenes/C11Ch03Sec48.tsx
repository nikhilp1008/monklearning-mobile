/**
 * C11 Chemistry Ch03 · Section 48 — "Worked example: place the element with Z = 38"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0.0, 7.68, 15.1, 37.21, 46.17, 60.67, 69.8, 76.63]):
 *  0 title + underline
 *  1 task: write config, then state period, group, block
 *  2 config: full string, then compact [Kr]5s²
 *  3 red-margin (a): highest n = 5 ⇒ period 5
 *  4 (b) block & group: last e⁻ in 5s ⇒ s-block; group = ns electrons = 2
 *  5 (c) putting together: group 2, s-block, period 5 ⇒ alkaline earth metal
 *  6 red-margin reveal: element cell (38, Sr) + Z=38 is strontium
 *  7 closing green stamp: configuration first, then read off all three
 *
 * Layout plan:
 *  b2 | config lines                 | T mid | x?..?     y134..161 (bl134/161)
 *  b3 | red bar + (a) text           | Draw  | x70  y188..218 (bl 207)
 *  b4 | (b) label + text             | T st  | x70..?    y236..260 (bl236/260)
 *  b6 | red bar + element cell       | Draw  | x450 y320..410, box x470..610
 *  b6 | statement line               | T mid | x?..?     y438
 *  b7 | closing stamp (green)        | Chip  | x200..880 y462..496
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("worked example: placing atomic number 38", "worked example: atomic number 38 ko place karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 360 88 C 430 84, 650 84, 720 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the task */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={15} weight={700} fill={INK}>
          {t("write the configuration, then state its period, group, and block", "configuration likho, phir period, group, aur block batao")}
        </T>
      </Fade>

      {/* beat 2 — the configuration */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={134} size={12.5} fill={INK}>1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶5s²</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={540} y={161} size={17} weight={800} fill={INK}>{"= [Kr] 5s²"}</T>
      </Fade>

      {/* beat 3 — red-margin (a): period */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 188 L 70 218" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={207} size={15} weight={700} fill={INK} anchor="start">
          {t("(a) highest n = 5 ⇒ PERIOD 5", "(a) sabse zyada n = 5 ⇒ PERIOD 5")}
        </T>
      </Fade>

      {/* beat 4 — (b) block & group */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={70} y={236} size={13} weight={800} fill={AMBER_DARK} anchor="start">
          {t("(b) BLOCK & GROUP", "(b) BLOCK & GROUP")}
        </T>
        <T x={70} y={260} size={14} fill={INK} anchor="start">
          {t("last e⁻ enters 5s ⇒ s-block; group = ns electrons = 2", "last e⁻ 5s mein jata ⇒ s-block; group = ns electrons = 2")}
        </T>
      </Fade>

      {/* beat 5 — (c) putting it together */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={292} size={15} weight={700} fill={GREEN}>
          {t("GROUP 2 · s-BLOCK · PERIOD 5 ⇒ alkaline earth metal", "GROUP 2 · s-BLOCK · PERIOD 5 ⇒ alkaline earth metal")}
        </T>
      </Fade>

      {/* beat 6 — red-margin reveal: the element cell */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 450 320 L 450 410" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Rect x={470} y={320} width={140} height={90} fill="#FFFEFB" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={486} y={340} size={13} weight={700} fill={MUTED} anchor="start">38</T>
        <T x={540} y={385} size={36} weight={800} fill={INK}>Sr</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={438} size={15} weight={800} fill={RED}>
          {t("Z = 38 → this is STRONTIUM", "Z = 38 → yeh STRONTIUM hai")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={462} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("write configuration first, then read off all three", "pehle configuration likho, phir teeno seedhe padho")}
        </Chip>
      </Fade>
    </Scene>
  );
}

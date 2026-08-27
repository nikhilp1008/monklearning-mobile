/**
 * P12Ch02 · Section 60 — "Worked example: internal resistance from two readings"
 * Beats (en [0,1,3,4,5,6,7]): 7 beats
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch03Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("NEET Speed Trap: Internal Resistance from Two Readings", "NEET Speed Trap: Internal Resistance from Two Readings")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Problem Statement & Open Circuit EMF */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Open circuit voltage = 1.5 V. Connected to 4 Ω resistor, V falls to 1.2 V. Find r.",
            "Open circuit voltage = 1.5 V. 4 Ω resistor lagane par V गिर kar 1.2 V ho jata hai. r nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 4: Calculate Current I */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">CURRENT I = V / R</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            E = 1.5 V   |   I = 1.2 / 4 = 0.3 A
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Internal Resistance r */}
      <Badge n={2} cx={540} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">INTERNAL RESISTANCE r</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            E − V = I r  ⇒  1.5 − 1.2 = 0.3 r
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  r = 0.3 / 0.3 = 1 Ω
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Formula Shortcut Check */}
      <Badge n={3} cx={52} cy={290} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">SHORTCUT FORMULA CHECK</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            r = R (E/V − 1) = 4 × (1.5/1.2 − 1) = 4 × 0.25 = 1 Ω  (Confirms in 1 step! ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: Internal Resistance r = 1 Ω. Memory hook: Lost voltage (0.3V) / Current (0.3A) = 1 Ω! ✓",
            "★ Result: Internal Resistance r = 1 Ω. Memory hook: Lost voltage (0.3V) / Current (0.3A) = 1 Ω! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

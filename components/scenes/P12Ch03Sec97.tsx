/**
 * P12Ch02 · Section 97 — "Worked example: finding a resistance on the meter bridge"
 * Beats (en [0,1,3,4,6,7]): 6 beats
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

export default function P12Ch03Sec97({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("CBSE Level: Finding Resistance X on Meter Bridge", "CBSE Level: Finding Resistance X on Meter Bridge")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Known R = 5 Ω in left gap, unknown X in right gap. Null point l = 40 cm. Find X.",
            "R = 5 Ω left gap mein, unknown X right gap mein. Null point l = 40 cm. X nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 3 & 4: Formula & Calculation */}
      <Badge n={1} cx={52} cy={160} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">FORMULA & CALCULATION</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            X = R (100 − l) / l = 5 × (60 / 40)
          </T>
          <T x={225} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  X = 7.5 Ω
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Geometric Sanity Check */}
      <Badge n={2} cx={540} cy={160} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">GEOMETRIC SANITY CHECK</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            l = 40 cm &lt; 50 cm  ⇒  Left wire segment is shorter
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={GREEN} weight={800}>
            ⇒  Right resistance X &gt; R (7.5 Ω &gt; 5 Ω ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: Unknown Resistance X = 7.5 Ω! Geometrically verified (l < 50cm ⇒ X > R)! ✓",
            "★ Result: Unknown Resistance X = 7.5 Ω! Geometrically verified (l < 50cm ⇒ X > R)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

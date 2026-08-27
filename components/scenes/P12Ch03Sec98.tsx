/**
 * P12Ch02 · Section 98 — "Worked example: internal resistance from two lengths"
 * Beats (en [0,1,3,4,5,6]): 6 beats
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

export default function P12Ch03Sec98({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("NEET Speed Trap: Internal Resistance from Balance Lengths", "NEET Speed Trap: Internal Resistance from Balance Lengths")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Cell alone balances at l₁ = 300 cm. Shunted with R = 4 Ω, balance length drops to l₂ = 250 cm. Find r.",
            "Cell l₁ = 300 cm par balance hota hai. R = 4 Ω shunt ke sath l₂ = 250 cm par drop hota hai. r nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 3: Gradient Cancels Pro-Tip */}
      <Badge n={1} cx={52} cy={160} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">GRADIENT CANCELS IN RATIO</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 4}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "Do NOT search for gradient φ or driver voltage! φ cancels in ratio!",
              "Gradient φ ya driver voltage ki zaroorat nahi hai! φ cancel ho jaata hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 4 & 5: Calculation */}
      <Badge n={2} cx={540} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">INTERNAL RESISTANCE CALCULATION</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            r = R (l₁ − l₂) / l₂ = 4 × (50 / 250)
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  r = 0.8 Ω
          </T>
        </G>
      </Fade>

      {/* BEAT 6: Summary Chip */}
      <Fade on={beat >= 4}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: Internal Resistance r = 0.8 Ω! Solved in 5 seconds using ratio formula! ✓",
            "★ Result: Internal Resistance r = 0.8 Ω! Ratio formula se 5 sec mein solved! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

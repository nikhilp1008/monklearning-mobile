/**
 * P12Ch02 · Section 86 — "Worked example: Kirchhoff with a power balance check"
 * Beats (en [0,1,2,3,4,5,6,7]): 8 beats
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

export default function P12Ch03Sec86({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Main: Kirchhoff Circuit with Power Balance Check", "JEE Main: Kirchhoff Circuit with Power Balance Check")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Left: 8V cell, 1 Ω | Right: 7V cell, 1 Ω | Middle: 2 Ω. Find I₁, I₂, and verify Power_in = Power_out.",
            "Left: 8V cell, 1 Ω | Right: 7V cell, 1 Ω | Middle: 2 Ω. I₁, I₂ nikaalein aur P_in = P_out verify karein."
          )}
        </T>
      </Fade>

      {/* BEAT 2 & 3: Simultaneous Equations */}
      <Badge n={1} cx={52} cy={160} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">LOOP EQUATIONS</T>
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Loop 1: 3 I₁ + 2 I₂ = 8
          </T>
          <T x={225} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            Loop 2: 2 I₁ + 3 I₂ = 7
          </T>
        </G>
      </Fade>

      {/* BEAT 4: Solved Currents */}
      <Badge n={2} cx={540} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">SOLVED BRANCH CURRENTS</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            I₁ = 2 A   |   I₂ = 1 A
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  Middle Resistor I = I₁ + I₂ = 3 A
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Power Balance Check */}
      <Badge n={3} cx={52} cy={290} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">POWER BALANCE VERIFICATION</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            P_in = 8(2) + 7(1) = 23 W   |   P_out = 2²(1) + 1²(1) + 3²(2) = 4 + 1 + 18 = 23 W  (MATCH! ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: I₁ = 2 A, I₂ = 1 A, Middle I = 3 A! Power_in = Power_out = 23 W 100% verified! ✓",
            "★ Result: I₁ = 2 A, I₂ = 1 A, Middle I = 3 A! P_in = P_out = 23 W verified! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch02 · Section 100 — "Worked example: the sum-and-difference method"
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

export default function P12Ch03Sec100({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Advanced: Sum-and-Difference Potentiometer Method", "JEE Advanced: Sum-and-Difference Potentiometer Method")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Gradient φ = 0.050 V/cm. Series aiding l_s = 80 cm, Series opposing l_d = 20 cm. Find E₁, E₂, and E₁/E₂.",
            "Gradient φ = 0.050 V/cm. Aiding l_s = 80 cm, Opposing l_d = 20 cm. E₁, E₂ aur E₁/E₂ nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 4 & 5: Sum & Difference Equations */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">SUM & DIFFERENCE EQUATIONS</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            E₁ + E₂ = 0.050 × 80 = 4.0 V
          </T>
          <T x={225} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            E₁ − E₂ = 0.050 × 20 = 1.0 V
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Solved EMF Values */}
      <Badge n={2} cx={540} cy={160} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">SOLVED INDIVIDUAL EMFS & RATIO</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            E₁ = 2.5 V   |   E₂ = 1.5 V
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  Ratio E₁ / E₂ = 5 / 3
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: E₁ = 2.5 V, E₂ = 1.5 V ⇒ Ratio E₁/E₂ = 5/3! Complete JEE solution! ✓",
            "★ Result: E₁ = 2.5 V, E₂ = 1.5 V ⇒ Ratio E₁/E₂ = 5/3! Complete JEE solution! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

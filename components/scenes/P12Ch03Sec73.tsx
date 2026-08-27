/**
 * P12Ch02 · Section 73 — "Worked example: two unequal cells in parallel"
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

export default function P12Ch03Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Main: Two Unequal Cells in Parallel", "JEE Main: Two Unequal Cells in Parallel")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Cell 1 (4V, 1 Ω) and Cell 2 (2V, 1 Ω) in parallel across R = 2.5 Ω load. Find load current I.",
            "Cell 1 (4V, 1 Ω) aur Cell 2 (2V, 1 Ω) parallel mein load R = 2.5 Ω par jude hain. Current I nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 3: Calculate E_eq */}
      <Badge n={1} cx={52} cy={160} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">EQUIVALENT EMF E_eq</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 4}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            E_eq = (4×1 + 2×1) / (1 + 1) = 6 / 2 = 3 V
          </T>
        </G>
      </Fade>

      {/* BEAT 4: Calculate r_eq & I */}
      <Badge n={2} cx={540} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">r_eq AND LOAD CURRENT I</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            r_eq = (1×1)/(1+1) = 0.5 Ω
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  I = 3 / (2.5 + 0.5) = 3 / 3 = 1 A
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Physical Meaning */}
      <Badge n={3} cx={52} cy={290} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">PHYSICAL INTERPRETATION</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "E_eq = 3 V is the weighted average! Stronger cell (4V) drives back-current into weaker cell (2V).",
              "E_eq = 3 V weighted average hai! Stronger cell (4V) weaker cell (2V) mein back-current bhejta hai."
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: E_eq = 3 V, r_eq = 0.5 Ω ⇒ Load Current I = 1 A! Perfect solution! ✓",
            "★ Result: E_eq = 3 V, r_eq = 0.5 Ω ⇒ Load Current I = 1 A! Verified solution! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

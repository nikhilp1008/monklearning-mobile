/**
 * P12Ch02 · Section 62 — "Worked example: analysing a charging battery"
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

export default function P12Ch03Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Advanced: Analysing a Charging Battery", "JEE Advanced: Analysing a Charging Battery")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "6V battery (r = 0.5 Ω) charged by 10V supply via 2 Ω resistor. Find I, V, and chemical power stored.",
            "6V battery (r = 0.5 Ω) ko 10V supply se 2 Ω resistor dwara charge kiya. I, V, aur stored power nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 4: Charging Current I */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">CHARGING CURRENT I</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            I = (V_supply − E) / (R + r) = (10 − 6) / 2.5 = 1.6 A
          </T>
        </G>
      </Fade>

      {/* BEAT 5: Terminal Voltage V = E + Ir */}
      <Badge n={2} cx={540} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">TERMINAL VOLTAGE V</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            V = E + I r = 6 + (1.6)(0.5) = 6.8 V
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            (Notice V &gt; E when charging!)
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Power Stored & Energy Balance */}
      <Badge n={3} cx={52} cy={290} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">CHEMICAL POWER STORED & ENERGY BALANCE</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            P_stored = E I = 9.6 W   |   Total Input = VI = 10.88 W   |   Heat = I²r = 1.28 W  (10.88 − 1.28 = 9.6 W ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: Current I = 1.6 A, V = 6.8 V, Stored Power P = 9.6 W. Perfect energy conservation! ✓",
            "★ Result: Current I = 1.6 A, V = 6.8 V, Stored Power P = 9.6 W. Energy conserved! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

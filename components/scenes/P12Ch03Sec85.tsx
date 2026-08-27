/**
 * P12Ch02 · Section 85 — "Worked example: recognising a balanced bridge"
 * Beats (en [0,1,3,5,6,7]): 6 beats
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

export default function P12Ch03Sec85({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("NEET Speed Trap: Recognising a Balanced Bridge First", "NEET Speed Trap: Recognising a Balanced Bridge First")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Bridge has P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω with G across diagonal & 6V battery. Find R_eq.",
            "Bridge: P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω diagonal G aur 6V battery ke saath. R_eq nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 3: Check Balance Ratios */}
      <Badge n={1} cx={52} cy={160} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">CHECK BALANCE FIRST (ALWAYS!)</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            P / Q = 10/20 = 1/2   |   R / S = 15/30 = 1/2  (MATCH! ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Remove G Branch & Simplify */}
      <Badge n={2} cx={540} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">ERASE G BRANCH & REDUCE</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            Upper = 10 + 20 = 30 Ω   |   Lower = 15 + 30 = 45 Ω
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  R_eq = (30 × 45) / 75 = 18 Ω
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 5}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Saved 5 minutes of Kirchhoff equations! Bridge is balanced ⇒ R_eq = 18 Ω! ✓",
            "★ Kirchhoff equations ke 5 min bach gaye! Bridge balanced ⇒ R_eq = 18 Ω! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch02 · Section 99 — "Worked example: setting the potential gradient"
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

export default function P12Ch03Sec99({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Main: Setting Potential Gradient & Finding Balance Length", "JEE Main: Setting Potential Gradient & Finding Balance Length")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Wire L = 4m, R_wire = 8 Ω, Driver = 2V. Find Rheostat R_s for gradient φ = 0.40 V/m & balance for 1V cell.",
            "Wire L = 4m, R_wire = 8 Ω, Driver = 2V. Gradient φ = 0.40 V/m ke liye R_s aur 1V cell ka l nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 3, 4 & 5: Rheostat Resistance R_s */}
      <Badge n={1} cx={52} cy={160} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">RHEOSTAT RESISTANCE CALCULATION</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            φ = 2.0 × 8 / [(R_s + 8) × 4] = 0.40
          </T>
          <T x={225} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  R_s = 2 Ω
          </T>
        </G>
      </Fade>

      {/* BEAT 6: Balance Length calculation */}
      <Badge n={2} cx={540} cy={160} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">BALANCE LENGTH FOR 1V CELL</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            l = E / φ = 1.0 / 0.40
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  l = 2.5 m  (Valid! 2.5m &lt; 4m ✓)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: Rheostat R_s = 2 Ω, Balance Length l = 2.5 m! Fully verified solution! ✓",
            "★ Result: Rheostat R_s = 2 Ω, Balance Length l = 2.5 m! Verified solution! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

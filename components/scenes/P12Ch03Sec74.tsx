/**
 * P12Ch02 · Section 74 — "Worked example: optimising twenty four cells"
 * Beats (en [0,1,4,5,6,7]): 6 beats
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

export default function P12Ch03Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("JEE Advanced: Optimising 24 Cells for Max Current", "JEE Advanced: Optimising 24 Cells for Max Current")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "24 cells (1.5 V, r = 0.5 Ω each). Arrange in m rows of n series cells for max I into R = 3 Ω.",
            "24 cells (1.5 V, r = 0.5 Ω each). Load R = 3 Ω par max I ke liye m rows aur n series cells nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 4: Match Condition mR = nr */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">MATCH CONDITION (m R = n r)</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            m(3) = n(0.5)  ⇒  n / m = 6  ⇒  n = 6 m
          </T>
        </G>
      </Fade>

      {/* BEAT 5: Solve m and n */}
      <Badge n={2} cx={540} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">SOLVE FOR m AND n</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            m × (6m) = 24  ⇒  6 m² = 24
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  m = 2 rows, n = 12 cells/row
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: Maximum Current */}
      <Badge n={3} cx={52} cy={290} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">MAXIMUM CURRENT CALCULATION</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            E_eq = 18 V, r_eq = 3 Ω  ⇒  I_max = 18 / (3 + 3) = 3 A!
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: m = 2 rows, n = 12 cells per row ⇒ Maximum Current I_max = 3 A! ✓",
            "★ Result: m = 2 rows, n = 12 cells per row ⇒ Maximum Current I_max = 3 A! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

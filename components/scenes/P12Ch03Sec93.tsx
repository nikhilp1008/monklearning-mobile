/**
 * P12Ch02 · Section 93 — "Potential gradient and the ratio results"
 * Beats (en [0,1,3,5,8]): 5 beats
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

export default function P12Ch03Sec93({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Potentiometer Master Ratios: E1/E2 & Internal Resistance r", "Potentiometer Master Ratios: E1/E2 & Internal Resistance r")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: EMF Ratio Formula */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">EMF COMPARISON RATIO</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 3}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            E₁ / E₂ = l₁ / l₂  (Potential Gradient φ cancels!)
          </T>
        </G>
      </Fade>

      {/* BEAT 5: Internal Resistance Formula */}
      <Badge n={2} cx={540} cy={140} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">INTERNAL RESISTANCE FORMULA</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 4}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            r = R (l₁ / l₂ − 1) = R (l₁ − l₂) / l₂
          </T>
          <T x={240} y={52} anchor="middle" size={13} fill={GREEN} weight={700}>
            (l₁ = open circuit balance, l₂ = shunted balance)
          </T>
        </G>
      </Fade>

      {/* BEAT 8: Sum & Difference Method */}
      <Badge n={3} cx={52} cy={270} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">SUM & DIFFERENCE METHOD</T>
      </Fade>
      <Fade on={beat >= 4}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            E₁ / E₂ = (l_sum + l_diff) / (l_sum − l_diff)
          </T>
        </G>
      </Fade>

      {/* BEAT 8: Summary Chip */}
      <Fade on={beat >= 4}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ E1/E2 = l1/l2 | r = R(l1/l2 - 1) | Sum/Diff: E1/E2 = (l_s + l_d)/(l_s - l_d)! ✓",
            "★ E1/E2 = l1/l2 | r = R(l1/l2 - 1) | Sum/Diff: E1/E2 = (l_s + l_d)/(l_s - l_d)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

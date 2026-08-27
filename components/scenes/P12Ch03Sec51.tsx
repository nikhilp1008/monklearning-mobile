/**
 * P12Ch02 · Section 51 — "Pitfalls and pro-tips for energy and power"
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

export default function P12Ch03Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Pitfalls & Pro-Tips: Energy & Power", "Pitfalls & Pro-Tips: Energy & Power")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 230 70 C 440 66, 640 74, 850 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Power Formula & Voltage Square Trap */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">VOLTAGE SQUARE DEPENDENCE</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 4}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "P ∝ V²  ⇒  Halving voltage QUARTERS power (1/4th, not 1/2)!",
              "P ∝ V²  ⇒  Voltage aadha karne par power CHOUTHAI (1/4th) ho jaati hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 4: Max Power vs Max Efficiency */}
      <Badge n={2} cx={540} cy={140} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">POWER vs EFFICIENCY TRAP</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={240} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "Max Power occurs at R = r (50% efficiency)! Max Efficiency occurs as R → ∞.",
              "Max Power R = r par milti hai (50% efficiency)! Max Efficiency R → ∞ par milti hai."
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Formula Selection Guide */}
      <Badge n={3} cx={52} cy={270} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">SERIES vs PARALLEL CHOICE</T>
      </Fade>
      <Fade on={beat >= 5}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            Series (I constant) ⇒ P = I² R   |   Parallel (V constant) ⇒ P = V² / R
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 5}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Keep kW and hours directly from start to finish for billing questions! ✓",
            "★ Billing questions ke liye kW aur hours starting se last tak ready rakhein! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

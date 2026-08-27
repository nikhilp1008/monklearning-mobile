/**
 * P12Ch02 · Section 96 — "Potentiometer worked examples: EMF comparison & internal resistance"
 * Beats (en [0,1,2,4,6,7]): 6 beats
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

export default function P12Ch03Sec96({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Potentiometer Derivation: EMF Comparison & Internal Resistance", "Potentiometer Derivation: EMF Comparison & Internal Resistance")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 2: EMF Comparison */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">EMF COMPARISON FORMULA</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 4}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            E₁ = φ l₁   |   E₂ = φ l₂   ⇒   E₁ / E₂ = l₁ / l₂
          </T>
        </G>
      </Fade>

      {/* BEAT 4 & 6: Internal Resistance Derivation */}
      <Badge n={2} cx={540} cy={140} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">INTERNAL RESISTANCE DERIVATION</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            E / V = l₁ / l₂ = (R + r) / R
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  r = R (l₁ − l₂) / l₂
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Sanity Check */}
      <Badge n={3} cx={52} cy={270} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">BUILT-IN SANITY CHECK</T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={GREEN} weight={800} script>
            {t(
              "Loaded balance length l₂ is ALWAYS shorter than open length l₁ (l₁ > l₂)! Guarantees r > 0!",
              "Loaded balance length l₂ hamesha open length l₁ se choti hoti hai (l₁ > l₂)! Guarantees r > 0!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Derived! Potentiometer internal resistance r = R(l1 - l2)/l2! Built-in sanity check l1 > l2! ✓",
            "★ Derived! Potentiometer internal resistance r = R(l1 - l2)/l2! Built-in sanity check l1 > l2! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

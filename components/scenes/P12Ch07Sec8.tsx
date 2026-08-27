/**
 * P12Ch07 · Section 08 — "Worked example: peak, RMS and mean of a 311 V supply"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
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

export default function P12Ch07Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Worked Example: Peak 311 V AC Supply Analysis", "Worked Example: Peak 311 V AC Supply Analysis")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: RMS Voltage Calculation */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: RMS VOLTAGE V_rms = V₀ / √2 = 311 / 1.414 = 220 V", "STEP 1: RMS VOLTAGE V_rms = V₀ / √2 = 311 / 1.414 = 220 V")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Given V₀ = 311 V, f = 50 Hz
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            V_rms = 311 / 1.414 = 220 V (Indian Domestic Supply Standard!)
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Half-Cycle Mean & Period */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: V_mean = 198 V & PERIOD T = 20 ms", "STEP 2: V_mean = 198 V & PERIOD T = 20 ms")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={GREEN} weight={800}>
            V_mean = 2(311) / π = 198 V
          </T>
          <T x={240} y={52} anchor="middle" size={16} fill={INK} weight={800}>
            T = 1 / 50 = 20 ms (10 ms per half cycle!)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Step-by-Step Marking */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("CBSE STEP-BY-STEP MARKING RECAP", "CBSE STEP-BY-STEP MARKING RECAP")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            1. V_rms = 220 V (1 mark) → 2. V_mean = 198 V (1 mark) → 3. T = 20 ms & ω = 100π rad/s (1 mark)!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ CBSE Worked Example: Peak V₀ = 311 V yields RMS V_rms = 220 V, Mean V_mean = 198 V, and Period T = 20 ms! ✓",
            "★ CBSE Worked Example: Peak V₀ = 311 V yields RMS V_rms = 220 V, Mean V_mean = 198 V, aur Period T = 20 ms! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

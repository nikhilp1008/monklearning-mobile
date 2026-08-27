/**
 * P12Ch02 · Section 90 — "The meter bridge, and the potentiometer's ramp"
 * Beats (en [0,1,3,6,7,8]): 6 beats
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

export default function P12Ch03Sec90({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Introduction: The Meter Bridge & Potentiometer Ramp", "Introduction: The Meter Bridge & Potentiometer Ramp")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Meter Bridge */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">THE METER BRIDGE (SLIDING JOCKEY)</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 3}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "Uses 1m wire & sliding jockey to continuously tune Wheatstone ratio until null!",
              "1m wire aur sliding jockey se null point tak Wheatstone ratio tune karta hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 3: Potentiometer Ramp */}
      <Badge n={2} cx={540} cy={140} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">POTENTIOMETER POTENTIAL RAMP</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Uniform Potential Gradient φ = V / L
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={GREEN} weight={800}>
            (Even potential drop along long wire)
          </T>
        </G>
      </Fade>

      {/* BEAT 6 & 7: True EMF Measurement */}
      <Badge n={3} cx={52} cy={270} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">MEASURES TRUE EMF WITHOUT SAG</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={GREEN} weight={800} script>
            {t(
              "At balance point, cell draws ZERO current! Measures TRUE EMF E, not sagged terminal voltage V!",
              "Balance point par ZERO current draw hota hai! Sagged V nahi, True EMF E measure hota hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Potentiometer measures true open-circuit EMF E because no current is drawn at balance! ✓",
            "★ Potentiometer true open-circuit EMF E measure karta hai kyunki balance par zero current hota hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

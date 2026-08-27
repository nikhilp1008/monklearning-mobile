/**
 * P12Ch02 · Section 84 — "Worked example: two cells and a shared resistor"
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

export default function P12Ch03Sec84({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("CBSE Level: Two Cells & Shared Resistor Network", "CBSE Level: Two Cells & Shared Resistor Network")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: Problem Statement */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Left branch: 8V cell, 2 Ω | Right branch: 4V cell, 2 Ω | Middle resistor: 4 Ω. Find I₁, I₂, and middle I.",
            "Left: 8V cell, 2 Ω | Right: 4V cell, 2 Ω | Middle: 4 Ω. Currents I₁, I₂ aur middle I nikaalein."
          )}
        </T>
      </Fade>

      {/* BEAT 4 & 5: Simultaneous Loop Equations */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">LOOP EQUATIONS</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Loop 1: 6 I₁ + 4 I₂ = 8
          </T>
          <T x={225} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            Loop 2: 4 I₁ + 6 I₂ = 4
          </T>
        </G>
      </Fade>

      {/* BEAT 6: Solved Currents */}
      <Badge n={2} cx={540} cy={160} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">SOLVED CURRENTS</T>
      </Fade>
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            I₁ = 1.6 A   |   I₂ = −0.4 A
          </T>
          <T x={240} y={52} anchor="middle" size={18} fill={GREEN} weight={800}>
            ⇒  Middle Resistor I = I₁ + I₂ = 1.2 A
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Physical Meaning of Negative Current */}
      <Badge n={3} cx={52} cy={290} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={295} size={14} fill={RED} weight={700} anchor="start">PHYSICAL INTERPRETATION</T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 310)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            {t(
              "I₂ = -0.4 A means 8V cell is CHARGING the 4V cell! Current enters positive terminal of 4V cell.",
              "I₂ = -0.4 A ka matlab 8V cell 4V cell ko CHARGE kar raha hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Result: I₁ = 1.6 A, I₂ = -0.4 A, Middle Resistor Current = 1.2 A! Fully verified! ✓",
            "★ Result: I₁ = 1.6 A, I₂ = -0.4 A, Middle Resistor Current = 1.2 A! Fully verified! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

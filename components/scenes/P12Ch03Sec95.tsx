/**
 * P12Ch02 · Section 95 — "Derivation: the potentiometer principle"
 * Beats (en [0,1,3,4,6,7,8]): 7 beats
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

export default function P12Ch03Sec95({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Board Derivation: The Potentiometer Principle (V ∝ l)", "Board Derivation: The Potentiometer Principle (V ∝ l)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Voltage Drop along Length l */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">VOLTAGE DROP ALONG LENGTH l</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 4}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            V_l = I × (R_wire / L) × l = φ l
          </T>
        </G>
      </Fade>

      {/* BEAT 4 & 6: Proportionality Principle V ∝ l */}
      <Badge n={2} cx={540} cy={140} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">PROPORTIONALITY PRINCIPLE</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={18} fill={GREEN} weight={800}>
            V_l ∝ l   (since φ = V/L is constant!)
          </T>
          <T x={240} y={52} anchor="middle" size={13} fill={GREEN} weight={700}>
            (Wire length becomes a precise proxy for potential difference)
          </T>
        </G>
      </Fade>

      {/* BEAT 8: Ideal Voltmeter Behavior */}
      <Badge n={3} cx={52} cy={270} on={beat >= 8} delay={dl(8, 0.4)} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">IDEAL VOLTMETER ANALOGY</T>
      </Fade>
      <Fade on={beat >= 8}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            At balance, no current is drawn ⇒ Acts as an IDEAL VOLTMETER of INFINITE resistance!
          </T>
        </G>
      </Fade>

      {/* BEAT 8: Summary Chip */}
      <Fade on={beat >= 8}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Derived! Potentiometer V ∝ l operates as an ideal voltmeter with infinite resistance! ✓",
            "★ Derived! Potentiometer V ∝ l infinite resistance waale ideal voltmeter ki tarah kaam karta hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

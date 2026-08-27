/**
 * P12Ch02 · Section 103 — "Rapid-revision cheat sheet"
 * Beats (en [0,1,3,4,5,7,8,9]): 8 beats
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

export default function P12Ch03Sec103({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Rapid-Revision Cheat Sheet: The Night Before Exam", "Rapid-Revision Cheat Sheet: The Night Before Exam")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Current & Temperature */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">CURRENT & MATERIAL PROPERTIES</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 4}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            Current = Scalar | J = Vector | v_d ≈ 10⁻⁴ m/s
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={INK} weight={800}>
            Metals: ρ ↑ with T | Semiconductors: ρ ↓ with T
          </T>
        </G>
      </Fade>

      {/* BEAT 4 & 5: Bulbs, Cells & Power */}
      <Badge n={2} cx={540} cy={140} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">BULBS, CELLS & POWER RECAP</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            Series: Weaker bulb brighter | Parallel: Stronger brighter
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            Discharging: V &lt; E | Charging: V &gt; E | Short: I = E/r
          </T>
        </G>
      </Fade>

      {/* BEAT 7, 8 & 9: Laws & Instruments */}
      <Badge n={3} cx={52} cy={270} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">LAWS & INSTRUMENTS FINAL CHEAT SHEET</T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={14} fill={INK} weight={800} script>
            KCL (Charge) | KVL (Energy) | Potentiometer reads TRUE EMF E at null! 1 kWh = 3.6 MJ!
          </T>
        </G>
      </Fade>

      {/* BEAT 9: Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ CHAPTER 3 COMPLETELY FINISHED! (103 / 103 SECTIONS AUTHORED & REGISTERED!) 🎉✓",
            "★ CHAPTER 3 COMPLETELY FINISHED! (103 / 103 SECTIONS AUTHORED & REGISTERED!) 🎉✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

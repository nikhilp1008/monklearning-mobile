/**
 * P12Ch02 · Section 77 — "The loop rule, and why potential behaves like altitude"
 * Beats (en [0,1,3,4,5,7]): 6 beats
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

export default function P12Ch03Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Kirchhoff's Second Law: The Loop Rule (KVL)", "Kirchhoff's Second Law: The Loop Rule (KVL)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Potential as Altitude */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "Electric potential is single-valued like altitude: returning to start point gives net ΔV = 0.",
            "Electric potential altitude ki tarah single-valued hai: wapas starting point par aane par net ΔV = 0."
          )}
        </T>
      </Fade>

      {/* BEAT 4 & 5: Loop Rule Formula */}
      <Badge n={1} cx={52} cy={160} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">THE LOOP RULE (CONSERVATION OF ENERGY)</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={18} fill={INK} weight={800}>
            ∑ ΔV = 0   ⇔   ∑ E = ∑ I R
          </T>
        </G>
      </Fade>

      {/* BEAT 5: Contour Map Analogy */}
      <Badge n={2} cx={540} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">CONTOUR MAP ANALOGY</T>
      </Fade>
      <Fade on={beat >= 5}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Cells = Escalators (Gain Potential +E)
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={GREEN} weight={800}>
            Resistors = Slopes (Drop Potential -IR)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 5}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Kirchhoff's Loop Rule is Conservation of Energy! Net potential drop around any loop is ZERO! ✓",
            "★ Kirchhoff ka Loop Rule Conservation of Energy hai! Kisi bhi loop mein net potential drop ZERO hota hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

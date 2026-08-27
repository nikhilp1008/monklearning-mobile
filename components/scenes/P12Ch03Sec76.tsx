/**
 * P12Ch02 · Section 76 — "When series and parallel run out: the junction rule"
 * Beats (en [0,1,3,5,6,7]): 6 beats
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

export default function P12Ch03Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Kirchhoff's First Law: The Junction Rule (KCL)", "Kirchhoff's First Law: The Junction Rule (KCL)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Universal Circuit Rules */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={120} size={13} fill={MUTED} anchor="start" script>
          {t(
            "When series/parallel reductions fail, Kirchhoff's universal laws handle any complex network.",
            "Jab series/parallel reduction fail hoti hai, tab Kirchhoff ke niyam kisi bhi network ko solve karte hain."
          )}
        </T>
      </Fade>

      {/* BEAT 5 & 6: Junction Rule Formula */}
      <Badge n={1} cx={52} cy={160} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={74} y={165} size={14} fill={RED} weight={700} anchor="start">THE JUNCTION RULE (CONSERVATION OF CHARGE)</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(60, 180)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={18} fill={INK} weight={800}>
            ∑ I_in = ∑ I_out  (or ∑ I_junction = 0)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Numerical Illustration */}
      <Badge n={2} cx={540} cy={160} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={562} y={165} size={14} fill={RED} weight={700} anchor="start">CURRENT BALANCE AT A NODE</T>
      </Fade>
      <Fade on={beat >= 6}>
        <G transform="translate(540, 180)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={16} fill={INK} weight={800}>
            If 5A, 3A, 2A enter a node ⇒ 10A must leave!
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            (No charge storage at a junction in steady state)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 6}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Kirchhoff's Junction Rule is Conservation of Charge! Total Current In = Total Current Out! ✓",
            "★ Kirchhoff ka Junction Rule Conservation of Charge hai! Total Current In = Total Current Out! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

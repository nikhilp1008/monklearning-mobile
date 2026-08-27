/**
 * P12Ch02 · Section 55 — "EMF, terminal voltage and the load current"
 * Beats (en [0,1,3,5,6]): 5 beats
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

export default function P12Ch03Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Master Formulas: EMF, Terminal Voltage & Load Current", "Master Formulas: EMF, Terminal Voltage & Load Current")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1: EMF definition */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">ELECTROMOTIVE FORCE E</T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 3}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={50} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            E = W / q   (Volt, [M L² T⁻³ A⁻¹])
          </T>
        </G>
      </Fade>

      {/* BEAT 3: Terminal Voltages */}
      <Badge n={2} cx={540} cy={140} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">TERMINAL VOLTAGE V</T>
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            V = E − Ir (Discharging)   |   V = E + Ir (Charging)
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Load Current & Terminal Drop */}
      <Badge n={3} cx={52} cy={270} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">LOAD CURRENT & TERMINAL DROP</T>
      </Fade>
      <Fade on={beat >= 5}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={INK} weight={800}>
            I = E / (R + r)   ⇒   V = I R = E R / (R + r)
          </T>
        </G>
      </Fade>

      {/* BEAT 6: Summary Chip */}
      <Fade on={beat >= 5}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Mastered! I = E/(R+r) and V = IR = ER/(R+r). Standard cross-check for all cell circuits! ✓",
            "★ Mastered! I = E/(R+r) aur V = IR = ER/(R+r). Sabhi cell circuits ka cross-check! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

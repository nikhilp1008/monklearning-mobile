/**
 * P12Ch01 · Section 41 — "Pitfalls and Pro-Tips for Dipoles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Pitfall 1: Confusing vector direction of p̄ (Physics: -q → +q vs Chemistry: +q → -q)
 *  - Pitfall 2: Forgetting separation distance is 2a (NOT a!)
 *  - Pitfall 3: Inverse-cube 1/r³ decay vs point charge 1/r² decay
 *
 * Beats (en [0, 6, 20, 34, 48, 62, 76, 88]):
 *  0 Title "pitfalls & pro-tips for dipoles" + drawn underline
 *  1 Hook note: mastering dipole subtleties and avoiding exam traps!
 *  2 Badge 1 & Pitfall 1: Vector p̄ points strictly FROM (-q) TO (+q)!
 *  3 Badge 2 & Pitfall 2: Separation is 2a, so p = q(2a), NOT q(a)!
 *  4 Pitfall 3: Field E_dipole ∝ 1/r³, potential V_dipole ∝ 1/r²
 *  5 Summary cheat-sheet of dipole traps
 *  6 Grand Verdict: Vector p (-q → +q)  |  Distance = 2a  |  E ∝ 1/r³ !
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "pitfalls & pro-tips for dipoles",
            "pitfalls & pro-tips for dipoles"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 320 70 C 440 66, 640 74, 760 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "mastering dipole subtleties and avoiding exam traps!",
            "dipole subtleties aur exam traps se bachna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pitfall 1 (Vector Direction -q to +q) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 1: Dipole Moment Vector Direction", "PITFALL 1: Dipole Moment Vector Direction")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={18} fill={INK} weight={800}>
            Physics: Vector p̄ points FROM (-q) TO (+q)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Chemistry uses opposite (+ to -), stay sharp!", "Chemistry (+ se -) use karta hai, dhyan rakhein!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Pitfall 2 (Separation is 2a) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 2: Separation Distance is 2a, NOT a!", "PITFALL 2: Separation Distance 2a hai, a nahi!")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            If problem says "charges separated by 4 cm":
          </T>
          <T x={0} y={60} anchor="start" size={18} fill={RED} weight={800}>
            2a = 4 cm = 0.04 m  (DO NOT double it to 8 cm!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Vector p (-q → +q)  |  Distance = 2a  |  E ∝ 1/r³ !",
            "★ VERDICT: Vector p (-q → +q)  |  Distance = 2a  |  E ∝ 1/r³ !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

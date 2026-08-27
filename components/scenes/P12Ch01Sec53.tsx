/**
 * P12Ch01 · Section 53 — "Gauss's Law: Charge Controls the Net Flux"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Gauss's Law Statement: The total electric flux through any closed Gaussian surface equals Q_enclosed / ε₀.
 *  - Formula: ∮ Ē · dĀ = Q_enclosed / ε₀
 *  - Independence of shape & size: Flux depended ONLY on enclosed charge, NOT on radius or geometry!
 *  - Charges outside closed surface contribute ZERO net flux (lines enter and exit equally).
 *
 * Beats (en [0, 6, 18, 32, 46, 58, 68, 80, 90]):
 *  0 Title "gauss's law: charge controls the net flux" + drawn underline
 *  1 Hook note: total flux through any closed surface is determined solely by enclosed charge Q_enc!
 *  2 Badge 1 & Fundamental Equation: ∮ Ē · dĀ = Q_enclosed / ε₀
 *  3 Badge 2 & Shape & Size Independence: Sphere, cube, or irregular shape all give same flux Q/ε₀!
 *  4 Badge 3 & Outside Charges: Charges outside surface contribute 0 net flux
 *  5 Fundamental physical origin: Inverse-square 1/r² law creates cancellation!
 *  6 Grand Verdict: ∮ Ē · dĀ = Q_enclosed / ε₀  |  Independent of shape  |  Outside charges = 0!
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

export default function P12Ch01Sec53({ currentTime, reveals, language }: SceneProps) {
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
            "gauss's law: charge controls the net flux",
            "gauss ka niyam: enclosed charge hi total flux tay karta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 200 70 C 440 66, 640 74, 880 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "total flux through any closed surface is determined solely by enclosed charge Q_enc!",
            "kisi bhi closed surface se total flux sirf enclosed charge Q_enc par depend karta hai!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Fundamental Equation ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("GAUSS'S LAW EQUATION", "GAUSS'S LAW EQUATION")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            ∮ Ē · dĀ = Q_enclosed / ε₀
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Valid for ANY closed surface of arbitrary shape or size!", "Kishi bhi aakar ke closed surface ke liye sach!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Independence of Shape ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("INDEPENDENCE OF SHAPE & SIZE", "INDEPENDENCE OF SHAPE & SIZE")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Doubling sphere radius R → Area ×4, Field ÷4 ⇒ Flux UNCHANGED!
          </T>
          <T x={0} y={65} anchor="start" size={18} fill={GREEN} weight={800}>
            Flux depends ONLY on Q_enclosed!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
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
            "★ VERDICT: ∮ Ē · dĀ = Q_enclosed / ε₀  |  Independent of shape  |  Outside charges = 0!",
            "★ VERDICT: ∮ Ē · dĀ = Q_enclosed / ε₀  |  Independent of shape  |  Outside charges = 0!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

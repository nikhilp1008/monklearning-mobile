/**
 * P12Ch01 · Section 61 — "Worked Example: Two Parallel Sheets and the Capacitor Field"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Two parallel infinite plane sheets carrying uniform surface charge densities +σ and -σ.
 *  - Region I (Left of positive sheet): E_I = σ/2ε₀ - σ/2ε₀ = 0 (ZERO FIELD!)
 *  - Region II (Between plates): E_II = σ/2ε₀ + σ/2ε₀ = σ / ε₀ (UNIFORM CAPACITOR FIELD!)
 *  - Region III (Right of negative sheet): E_III = σ/2ε₀ - σ/2ε₀ = 0 (ZERO FIELD!)
 *  - Application: Foundation for parallel plate capacitors (Chapter 2 preview)!
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 68, 78, 88]):
 *  0 Title "worked example: two parallel sheets & capacitor field" + drawn underline
 *  1 Hook note: superposing fields of oppositely charged parallel sheets to create uniform capacitor field!
 *  2 Badge 1 & Region I (Left): E_I = 0 (fields cancel out)
 *  3 Badge 2 & Region II (Between): E_II = σ / ε₀ (fields reinforce, uniform field!)
 *  4 Badge 3 & Region III (Right): E_III = 0 (fields cancel out)
 *  5 Connection to capacitors: Energy and field confined strictly between plates!
 *  6 Grand Verdict: E_between = σ / ε₀  |  E_outside = 0  (Capacitor field foundation)!
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

export default function P12Ch01Sec61({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: two parallel sheets & capacitor field",
            "worked example: two parallel sheets & capacitor field"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 180 70 C 440 66, 640 74, 900 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "superposing fields of oppositely charged parallel sheets to create uniform capacitor field!",
            "oppositely charged parallel sheets ke fields superpose karke uniform capacitor field banaana!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Region I (Left) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("REGION I (LEFT OF +σ SHEET): E_I = 0", "REGION I (LEFT OF +σ SHEET): E_I = 0")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            E_I = (σ / 2ε₀) - (σ / 2ε₀) = 0
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Leftward field from +σ cancels rightward field from -σ!", "Leftward field from +σ rightward field from -σ ko cancel karta hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Region II (Between) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("REGION II (BETWEEN PLATES): E_II = σ / ε₀", "REGION II (BETWEEN PLATES): E_II = σ / ε₀")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Both fields point in SAME direction (rightward)!
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E_II = σ / ε₀  (UNIFORM CAPACITOR FIELD!)
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
            "★ VERDICT: E_between = σ / ε₀  |  E_outside = 0  (Capacitor field foundation)!",
            "★ VERDICT: E_between = σ / ε₀  |  E_outside = 0  (Capacitor field foundation)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

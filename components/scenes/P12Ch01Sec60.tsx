/**
 * P12Ch01 · Section 60 — "Worked Examples: Flux Through a Cube, and the Nothing-Changes Trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem 1: Point charge q at center of a cube of side a.
 *    Total flux through all 6 faces: Φ_total = q / ε₀
 *    Flux through ONE face: Φ_face = q / (6 ε₀) !
 *  - Problem 2 (Charge at corner of a cube):
 *    Charge q at one corner of a cube.
 *    Requires 8 identical cubes to enclose charge q at center.
 *    Total flux through original cube: Φ_cube = q / (8 ε₀)
 *    Flux through each of the 3 open faces not containing corner: Φ_face = q / (24 ε₀)!
 *  - Problem 3 (Nothing-Changes Speed Trap):
 *    If radius of Gaussian sphere is doubled, or shape changed from sphere to cube:
 *    Enclosed charge q remains UNCHANGED ⇒ Net flux Φ = q / ε₀ DOES NOT CHANGE!
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 66, 72, 86, 96]):
 *  0 Title "worked examples: flux through a cube & speed traps" + drawn underline
 *  1 Hook note: solving cube face symmetry and avoiding shape/size flux traps!
 *  2 Badge 1 & Charge at Cube Center: Total Φ = q/ε₀  ⇒  1 face Φ = q / (6 ε₀)
 *  3 Badge 2 & Charge at Cube Corner: 8 cubes to enclose  ⇒  Original cube Φ = q / (8 ε₀)
 *  4 Open face flux for corner charge: Φ_open_face = q / (24 ε₀)
 *  5 Badge 3 & Nothing-Changes Trap: Doubling radius or changing shape does NOT change flux!
 *  6 Grand Verdict: Center face: q / 6ε₀  |  Corner cube: q / 8ε₀  |  Doubling radius: Flux UNCHANGED!
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

export default function P12Ch01Sec60({ currentTime, reveals, language }: SceneProps) {
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
            "worked examples: flux through a cube & speed traps",
            "worked examples: cube flux & speed traps"
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
            "solving cube face symmetry and avoiding shape/size flux traps!",
            "cube face symmetry solve karna aur flux speed traps se bachna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Charge at Cube Center ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("CHARGE AT CUBE CENTER: 1 FACE FLUX", "CHARGE AT CUBE CENTER: 1 FACE FLUX")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            Φ_face = q / (6 ε₀)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("6 symmetrical faces share total flux q / ε₀ equally!", "6 symmetrical faces total flux ko barabar baatte hain!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Charge at Cube Corner ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("CHARGE AT CUBE CORNER: 8 CUBES SYMMETRY", "CHARGE AT CUBE CORNER: 8 CUBES SYMMETRY")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Original Cube: Φ_cube = q / (8 ε₀)
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            Open Face: Φ_face = q / (24 ε₀)
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
            "★ VERDICT: Center face: q / 6ε₀  |  Corner cube: q / 8ε₀  |  Doubling radius: Flux UNCHANGED!",
            "★ VERDICT: Center face: q / 6ε₀  |  Corner cube: q / 8ε₀  |  Doubling radius: Flux UNCHANGED!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

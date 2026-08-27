/**
 * P12Ch01 · Section 58 — "When Gauss's Law Actually Helps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Gauss's Law is ALWAYS true, but ONLY useful for calculating E when high symmetry exists!
 *  - 3 High-Symmetry Geometries:
 *    1. Spherical Symmetry (Point charge, thin shell, solid sphere) → Spherical surface 4π r²
 *    2. Cylindrical Symmetry (Infinite wire, infinite cylinder) → Coaxial cylinder 2π r l
 *    3. Planar Symmetry (Infinite sheet, parallel plates) → Pillbox cylinder 2A
 *  - Asymmetric objects (e.g. finite rod, dipole, cube of charge): Gauss's Law holds, but ∮ Ē · dĀ CANNOT extract E!
 *
 * Beats (en [0, 6, 18, 30, 42, 54, 66, 78, 90]):
 *  0 Title "when gauss's law actually helps" + drawn underline
 *  1 Hook note: understanding when high symmetry allows extracting electric field E from ∮ Ē · dĀ!
 *  2 Badge 1 & The 3 High-Symmetry Geometries: Spherical, Cylindrical, Planar
 *  3 Badge 2 & Why Symmetry is Essential: E must be constant magnitude and parallel/perp to dA!
 *  4 Badge 3 & Asymmetric Failure Trap: Finite rod or dipole → E varies across surface (Gauss unhelpful!)
 *  5 Summary rule of thumb: Gauss's Law calculates flux easily ALWAYS, but field E ONLY with symmetry!
 *  6 Grand Verdict: Gauss is ALWAYS true for flux, but extracts E ONLY for Spherical, Cylindrical, Planar!
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

export default function P12Ch01Sec58({ currentTime, reveals, language }: SceneProps) {
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
            "when gauss's law actually helps",
            "kab gauss's law sach me electric field nikaalne me help karta hai"
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
            "understanding when high symmetry allows extracting electric field E from ∮ Ē · dĀ!",
            "samajhna ki kab high symmetry se ∮ Ē · dĀ se electric field E nikalta hai!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & The 3 High-Symmetry Geometries ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THE 3 HIGH-SYMMETRY GEOMETRIES", "THE 3 HIGH-SYMMETRY GEOMETRIES")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={18} fill={INK} weight={800}>
            1. Spherical  |  2. Cylindrical  |  3. Planar
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Only these 3 allow taking E outside the integral ∮!", "Sirf yeh 3 hi E ko integral ∮ se bahar nikaalne dete hain!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Asymmetric Failure Trap ── */}
      <Badge n={3} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("ASYMMETRIC TRAP (FINITE ROD, DIPOLE)", "ASYMMETRIC TRAP (FINITE ROD, DIPOLE)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Gauss's law holds for flux, but E varies across surface!
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            Cannot extract E! Use Coulomb integration instead.
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
            "★ VERDICT: Gauss is ALWAYS true for flux, but extracts E ONLY for Spherical, Cylindrical, Planar!",
            "★ VERDICT: Gauss is ALWAYS true for flux, but extracts E ONLY for Spherical, Cylindrical, Planar!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

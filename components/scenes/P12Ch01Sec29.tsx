/**
 * P12Ch01 · Section 29 — "Worked Example: Field at a Point and Force on a Negative Charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: Source charge Q = +5 μC at origin O. Find field E at point P (r = 2 m).
 *  - Calculate field: E = 9×10⁹ × 5×10⁻⁶ / 2² = 1.125 × 10⁴ N/C = 11.25 kN/C (outward)
 *  - Part 2: Place an electron (q = -e = -1.6 × 10⁻¹⁹ C) at P. Find force F.
 *  - Force calculation: F = q E = (-1.6 × 10⁻¹⁹ C) × (1.125 × 10⁴ N/C) = -1.8 × 10⁻¹⁵ N (inward!)
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 80]):
 *  0 Title "worked example: field at a point & force on negative charge" + drawn underline
 *  1 Hook note: computing field intensity and negative charge force direction!
 *  2 Badge 1 & Step 1: Field at r = 2 m from Q = +5 μC: E = 11.25 kN/C (radially outward)
 *  3 Step 1 calculation details: E = 9×10⁹ × 5×10⁻⁶ / 4 = 11,250 N/C
 *  4 Badge 2 & Step 2: Force on electron at P: F = q E = (-1.6×10⁻¹⁹)(11,250) = -1.8 × 10⁻¹⁵ N
 *  5 Direction rule: negative charge experiences force OPPOSITE to field E vector!
 *  6 Distance conversion check: r already in metres (r = 2 m)
 *  7 Grand Verdict: E = 11.25 kN/C (Outward) ⇒ F_e = -1.8 × 10⁻¹⁵ N (Inward!)
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
  arrowD,
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

export default function P12Ch01Sec29({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: field at a point & force on negative charge",
            "worked example: field at a point & force on negative charge"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 220 70 C 440 66, 640 74, 860 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "computing field intensity and negative charge force direction!",
            "field intensity aur negative charge par force ki direction nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Step 1 (Calculate Field E) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: Field E at r = 2 m from Q = +5 μC", "STEP 1: Field E at r = 2 m from Q = +5 μC")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={13} fill={INK}>
            E = (9 × 10⁹) × (5 × 10⁻⁶) / 2² = 11,250 N/C = 11.25 kN/C
          </T>
          <T x={0} y={50} anchor="start" size={13} fill={GREEN} weight={700}>
            Direction: Radially OUTWARD (from positive source Q)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Step 2 (Force on Electron) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Force on Electron at Point P", "STEP 2: Force on Electron at Point P")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            F = (-1.6 × 10⁻¹⁹) × (11,250) = -1.8 × 10⁻¹⁵ N
          </T>
          <T x={225} y={78} anchor="middle" size={13} fill={RED} weight={700}>
            Direction: Radially INWARD (opposite to E vector!)
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 100 56 h 250 M 100 60 h 250" stroke={AMBER_DARK} sw={1.5} />
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
            "★ VERDICT: E = 11.25 kN/C (Outward) ⇒ F_e = -1.8 × 10⁻¹⁵ N (Inward!)",
            "★ VERDICT: E = 11.25 kN/C (Outward) ⇒ F_e = -1.8 × 10⁻¹⁵ N (Inward!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

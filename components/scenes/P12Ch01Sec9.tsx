/**
 * P12Ch01 · Section 9 — "Worked Example: Quantisation Feeding Into Coulomb's Law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: 2 identical spheres lose 10¹² electrons each, distance r = 10 cm
 *  - Step 1: q = n e = 10¹² × 1.6 × 10⁻¹⁹ C = 1.6 × 10⁻⁷ C
 *  - Step 2: F = k q² / r² = 9 × 10⁹ × (1.6 × 10⁻⁷)² / (0.1)² = 23.04 mN
 *  - Drawn force vector arrows on charged spheres
 *
 * Beats (en [0, 6, 18, 30, 40, 52, 64, 76]):
 *  0 Title "worked example: quantisation feeding into coulomb's law" + drawn underline
 *  1 Hook note: connecting electron count n directly to electrostatic force F
 *  2 Badge 1 & Problem statement: 10¹² electrons lost each, r = 10 cm apart
 *  3 Step 1: Charge q = n e = 1.6 × 10⁻⁷ C
 *  4 Badge 2 & Step 2: Coulomb's Law formula F = k q₁ q₂ / r²
 *  5 Calculation result: F = 23.04 mN (repulsive)
 *  6 Distance conversion tip: 10 cm = 0.1 m before squaring
 *  7 Grand Verdict: q = ne ⇒ F = kq²/r² = 23.04 mN (Repulsive force!)
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: quantisation feeding into coulomb's law",
            "worked example: quantisation feeding into coulomb's law"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 280 70 C 440 66, 640 74, 800 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "connecting electron count n directly to electrostatic force F!",
            "electron count n ko seedhe electrostatic force F se connect karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Problem Setup ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM STATEMENT", "PROBLEM STATEMENT")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={13} fill={INK}>
            {t(
              "2 identical spheres lose 10¹² e⁻ each. Distance r = 10 cm. Find repulsion force F.",
              "2 identical spheres 10¹² e⁻ lose karte hain. Distance r = 10 cm. Repulsion force F nikaalein."
            )}
          </T>

          {/* Spheres and distance drawing */}
          <Circle cx={60} cy={60} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={60} y={66} anchor="middle" size={11} fill={RED} weight={800}>+q</T>
          <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(35, 60, 5, 60)} stroke={RED} sw={2} />

          <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 85 60 H 215" stroke={INK} sw={1.5} />
          <T x={150} y={52} anchor="middle" size={11} fill={MUTED}>r = 10 cm = 0.1 m</T>

          <Circle cx={240} cy={60} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={240} y={66} anchor="middle" size={11} fill={RED} weight={800}>+q</T>
          <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(265, 60, 295, 60)} stroke={RED} sw={2} />
        </G>
      </Fade>

      {/* ── BEAT 3: Step 1 (Calculate Charge q = n e) ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            {t("STEP 1: Calculate Charge q = n e", "STEP 1: Charge q = n e Calculate karein")}
          </T>
          <T x={0} y={50} anchor="start" size={15} fill={INK} weight={800}>
            q = 10¹² × 1.6 × 10⁻¹⁹ C = 1.6 × 10⁻⁷ C
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Step 2 (Apply Coulomb's Law) ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Coulomb's Law F = k q₁ q₂ / r²", "STEP 2: Coulomb's Law F = k q₁ q₂ / r²")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 325)">
          <Rect x={0} y={10} width={430} height={90} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={40} anchor="middle" size={15} fill={INK} weight={700}>
            F = (9 × 10⁹) × (1.6 × 10⁻⁷)² / (0.1)²
          </T>
          <T x={215} y={78} anchor="middle" size={22} fill={RED} weight={800}>
            F = 23.04 mN (0.023 C)
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.8)} d={ringD(215, 74, 160, 16)} stroke={AMBER_DARK} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Distance Conversion Pro-Tip ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 325)">
          <T x={0} y={30} anchor="start" size={13.5} script={true} fill={AMBER_DARK}>
            {t(
              "Pro-Tip: Always convert r from cm to m (10 cm = 0.1 m) before squaring!",
              "Pro-Tip: Hamesha r ko cm se m (10 cm = 0.1 m) convert karein squaring se pehle!"
            )}
          </T>
          <T x={0} y={65} anchor="start" size={13.5} script={true} fill={GREEN}>
            {t(
              "Result: 23.04 mN repulsive force acting along line joining centers",
              "Result: 23.04 mN repulsive force line joining centers par act karta hai"
            )}
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
            "★ VERDICT: q = n e ⇒ F = k q² / r² = 23.04 mN (Repulsive force!)",
            "★ VERDICT: q = n e ⇒ F = k q² / r² = 23.04 mN (Repulsive force!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

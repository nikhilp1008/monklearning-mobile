/**
 * P12Ch01 · Section 31 — "Pitfalls and Pro-Tips for the Electric Field"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Pitfall 1: Confusing force F and field E (Field E exists independently of test charge q₀!)
 *  - Pitfall 2: Sign of force on negative charge — F = q E points OPPOSITE to E vector when q < 0!
 *  - Pitfall 3: Inverse-square distance scaling vs inverse-cube dipole field!
 *
 * Beats (en [0, 6, 20, 34, 46, 60, 76, 88]):
 *  0 Title "pitfalls & pro-tips: electric field" + drawn underline
 *  1 Hook note: avoiding common exam traps on field existence, negative charges, and distance power!
 *  2 Badge 1 & Pitfall 1: Field E exists independently of test charge q₀!
 *  3 Badge 2 & Pitfall 2: Force on negative charge (q < 0) points OPPOSITE to E vector!
 *  4 Pitfall 3: Point charge E ∝ 1/r² vs Dipole field E ∝ 1/r³
 *  5 Summary cheat-sheet table of field rules
 *  6 Exam Pro-Tip: Always check sign of test charge before determining acceleration direction!
 *  7 Grand Verdict: E exists without q₀  |  Negative charge accelerates OPPOSITE to E!
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

export default function P12Ch01Sec31({ currentTime, reveals, language }: SceneProps) {
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
            "pitfalls & pro-tips: electric field",
            "pitfalls & pro-tips: electric field"
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
            "avoiding common exam traps on field existence, negative charges, and distance power!",
            "field existence, negative charges aur distance power ke exam traps se bachein!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pitfall 1 (Field Existence) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 1: Field Exists Without Test Charge", "PITFALL 1: Field Test Charge ke bina bhi rehata hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={42} anchor="middle" size={15} fill={INK} weight={800}>
            Electric field E is an INTRINSIC property of source Q!
          </T>
          <T x={215} y={72} anchor="middle" size={12.5} fill={AMBER_DARK} script>
            {t(
              "Removing test charge q₀ does NOT destroy the field in surrounding space!",
              "Test charge q₀ hatane se surrounding space ka field destroy NAHI hota!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Pitfall 2 (Negative Charge Force Direction) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 2: Force Direction on Negative Charge", "PITFALL 2: Negative Charge par Force Direction")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={MUTED}>
            {t(
              "Positive charge (+q) accelerates ALONG field E vector",
              "Positive charge (+q) field E ke ALONG accelerate karta hai"
            )}
          </T>
          <T x={0} y={60} anchor="start" size={15} fill={RED} weight={800}>
            Negative charge (-q) accelerates OPPOSITE to E!
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d={ringD(170, 56, 170, 16)} stroke={RED} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 4: Pitfall 3 (Distance Power Comparison) ── */}
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 305)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("PITFALL 3: Distance Power Comparison", "PITFALL 3: Distance Power Comparison")}
          </T>
          <T x={0} y={48} anchor="start" size={13} script={true} fill={INK}>
            {t(
              "Point Charge: E ∝ 1/r²   |   Dipole Field: E ∝ 1/r³   |   Quadrupole: E ∝ 1/r⁴",
              "Point Charge: E ∝ 1/r²   |   Dipole Field: E ∝ 1/r³   |   Quadrupole: E ∝ 1/r⁴"
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
            "★ VERDICT: E exists without q₀  |  Negative charge accelerates OPPOSITE to E!",
            "★ VERDICT: E exists without q₀  |  Negative charge accelerates OPPOSITE to E!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

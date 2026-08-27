/**
 * P12Ch01 · Section 7 — "Formulas: Quantisation, Additivity, Conservation, and Sharing"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Quantisation formula Q = ± n e
 *  - Scalar additivity sum Q_total = Σ q_i with algebraic signs
 *  - Identical conductors touch charge sharing formula q_final = (q1 + q2) / 2
 *  - Worked numerical demo: +6 µC touches -2 µC → +2 µC each!
 *
 * Beats (en [0, 6, 16, 28, 38, 50, 60, 72]):
 *  0 Title "formulas: core properties & charge sharing" + drawn underline
 *  1 Hook note: four fundamental rules that govern electrostatic calculations
 *  2 Badge 1 & Quantisation: Q = ± n e (n = 1, 2, 3...)
 *  3 Badge 2 & Additivity: Q_total = q₁ + q₂ + ... + qₙ (algebraic sum with signs)
 *  4 Conservation: Σ Q_initial = Σ Q_final (isolated system constant)
 *  5 Identical conductor charge sharing: q_final = (q₁ + q₂) / 2
 *  6 Worked numerical demo: +6 µC touches -2 µC → +2 µC on each sphere!
 *  7 Grand Verdict: Q = ±ne | Q_tot = Σq_i | q_final = (q1 + q2)/2 !
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

export default function P12Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
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
            "formulas: core properties & charge sharing",
            "formulas: core properties aur charge sharing"
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
            "four fundamental rules that govern all electrostatic calculations!",
            "char fundamental rules jo saare electrostatic calculations control karte hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Quantisation Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("1. QUANTISATION FORMULA", "1. QUANTISATION FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            Q = ± n e
          </T>
          <T x={215} y={76} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("n = 1, 2, 3 ... | e = 1.6 × 10⁻¹⁹ C", "n = 1, 2, 3 ... | e = 1.6 × 10⁻¹⁹ C")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 130 55 h 170 M 130 59 h 170" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Additivity Property ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("2. ADDITIVITY PROPERTY (Scalar Sum)", "2. ADDITIVITY PROPERTY (Scalar Sum)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={35} anchor="start" size={20} fill={INK} weight={800}>
            Q_total = q₁ + q₂ + q₃ + ... + qₙ
          </T>
          <T x={0} y={70} anchor="start" size={13} fill={AMBER_DARK} script>
            {t(
              "Algebraic scalar sum — always include + and - signs!",
              "Algebraic scalar sum — + aur - signs ka dhyan rakhein!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Conservation Principle ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 300)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("3. CONSERVATION LAW:", "3. CONSERVATION LAW:")}
          </T>
          <T x={220} y={20} anchor="start" size={16} fill={RED} weight={800}>
            Σ Q_initial = Σ Q_final
          </T>
          <T x={0} y={48} anchor="start" size={13} script={true} fill={MUTED}>
            {t("Net charge of an isolated system remains strictly constant", "Isolated system ka net charge strictly constant rehta hai")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Identical Conductor Charge Sharing Rule & Numerical Demo ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 375)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("4. IDENTICAL CONDUCTOR SHARING RULE:", "4. IDENTICAL CONDUCTOR SHARING RULE:")}
          </T>

          <T x={340} y={20} anchor="start" size={18} fill={GREEN} weight={800}>
            q_final = (q₁ + q₂) / 2
          </T>

          {/* Spheres Touching Drawing */}
          <Circle cx={50} cy={70} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={50} y={76} anchor="middle" size={11} fill={RED} weight={800}>+6µC</T>

          <Circle cx={90} cy={70} r={18} fill="#dcfce7" stroke={GREEN} strokeWidth={1.8} />
          <T x={90} y={76} anchor="middle" size={11} fill={GREEN} weight={800}>-2µC</T>

          <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(130, 70, 190, 70)} stroke={GREEN} sw={2} />

          {/* Resulting Shared Charge Spheres */}
          <Circle cx={240} cy={70} r={18} fill="#fef3c7" stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={240} y={76} anchor="middle" size={11} fill={AMBER_DARK} weight={800}>+2µC</T>

          <Circle cx={280} cy={70} r={18} fill="#fef3c7" stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={280} y={76} anchor="middle" size={11} fill={AMBER_DARK} weight={800}>+2µC</T>

          <T x={340} y={76} anchor="start" size={13} script={true} fill={INK}>
            {t(
              "(+6 µC + (-2 µC)) / 2 = +4 / 2 = +2 µC each!",
              "(+6 µC + (-2 µC)) / 2 = +4 / 2 = +2 µC each!"
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
            "★ VERDICT: Q = ±ne | Q_tot = Σq_i | q_final = (q1 + q2)/2 for identical spheres!",
            "★ VERDICT: Q = ±ne | Q_tot = Σq_i | q_final = (q1 + q2)/2 for identical spheres!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch01 · Section 26 — "Field of a Point Charge, and Superposition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Point charge field: E = (k Q / r²) r̂
 *  - Superposition of fields: E_net = E₁ + E₂ + E₃ + ... + E_n = Σ E_i
 *  - Vector addition of field vectors at point P
 *  - Drawn charges Q₁ and Q₂ creating field vectors E₁ and E₂ at P
 *
 * Beats (en [0, 6, 18, 28, 42, 54, 68, 80, 92]):
 *  0 Title "field of a point charge & superposition" + drawn underline
 *  1 Hook note: extending superposition from electrostatic forces to electric fields!
 *  2 Point charge field vector form: E = (k Q / r²) r̂
 *  3 Badge 1 & Superposition of Electric Fields: E_net = Σ E_i
 *  4 Drawn field vector diagram at point P from charges Q₁ and Q₂
 *  5 Badge 2 & Parallelogram law for field vectors: E_net = √(E₁² + E₂² + 2 E₁ E₂ cos θ)
 *  6 Zero field point (null point) condition between like charges
 *  7 Continuous distribution field integral: E = ∫ k dq / r² r̂
 *  8 Grand Verdict: E_net = Σ E_i (Vector superposition of electric fields!)
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

export default function P12Ch01Sec26({ currentTime, reveals, language }: SceneProps) {
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
            "field of a point charge & superposition",
            "point charge ka field & superposition"
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
            "extending superposition from electrostatic forces to electric fields!",
            "forces se electric fields tak superposition ko extend karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Superposition Statement ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("SUPERPOSITION OF ELECTRIC FIELDS", "SUPERPOSITION OF ELECTRIC FIELDS")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            E_net = E₁ + E₂ + E₃ + ... + E_n
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Net field at any point is vector sum of individual fields!", "Kisi point par net field saare fields ka vector sum hota hai!")}
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Vector Addition at Point P ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          {/* Observation Point P */}
          <Circle cx={140} cy={60} r={5} fill={INK} />
          <T x={140} y={45} anchor="middle" size={12} fill={INK} weight={800}>Point P</T>

          {/* E₁ field vector arrow */}
          <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(140, 60, 240, 30)} stroke="#0284c7" sw={2.2} />
          <T x={200} y={25} anchor="middle" size={12} fill="#0284c7" weight={800}>E₁</T>

          {/* E₂ field vector arrow */}
          <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(140, 60, 220, 110)} stroke="#0284c7" sw={2.2} />
          <T x={190} y={105} anchor="middle" size={12} fill="#0284c7" weight={800}>E₂</T>

          {/* E_net vector arrow */}
          <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(140, 60, 310, 75)} stroke={RED} sw={2.5} />
          <T x={325} y={80} anchor="start" size={13} fill={RED} weight={800}>E_net</T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Badge 2 & Parallelogram Resultant ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("FIELD VECTOR RESULTANT FORMULA", "FIELD VECTOR RESULTANT FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 325)">
          <T x={0} y={20} anchor="start" size={18} fill={GREEN} weight={800}>
            E_net = √(E₁² + E₂² + 2 E₁ E₂ cos θ)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Continuous Field Integral ── */}
      <Fade on={beat >= 7} dim={beat >= 8}>
        <G transform="translate(540, 325)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={AMBER_DARK}>
            For Continuous Charge Distribution:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={AMBER_DARK} weight={800}>
            E = ∫ (k dq / r²) r̂
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: E_net = Σ E_i (Vector superposition of electric fields!)",
            "★ VERDICT: E_net = Σ E_i (Vector superposition of electric fields!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch04 · Section 45 — "The nth roots formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the workhorse formula, built live on a generic n=5 example.
 *
 * Beats (board_reveal_at_english [0, 7.08, 20.82, 34.9, 46.59, 59.99, 68.95, 82.43]):
 *  0 subtitle: all n roots of a complex number
 *  1 text: solve w^n=z=r·e^(iθ): match modulus & argument + draw empty roots-circle
 *  2 formula (high): w_k = r^(1/n)·e^(i(θ+2kπ)/n), k=0..n-1 + plot k=0 point
 *  3 text: trig-form restatement + plot k=1 point (step +2π/n)
 *  4 guardrail (red-margin, high): exactly n roots + plot remaining k=2,3,4 (complete pentagon)
 *  5 text: k≥n just repeats — ghost arrow to k=5 landing back on k=0
 *  6 text: method, 4 steps as a flow chip
 *  7 text: the proof sketch, as a chip
 *
 * Layout plan (n=5 pentagon, cx540 cy380 r100, θ0 = 20°, step 72°):
 *  b0 | subtitle (15,amber_dark,w700)   | T mid | x540 y90
 *  b1 | circle outline (muted)          | Draw  | circleD r100
 *  b2 | formula line (16,ink)           | T mid | x540 y120
 *  b2 | point k=0 + arrow + label       | Draw/T|
 *  b3 | trig-form line (14,ink)         | T mid | x540 y152
 *  b3 | point k=1 + small step arc      | Draw/T|
 *  b4 | tally chip (red border)         | Chip  | x540 c, y224..256
 *  b4 | points k=2,3,4                  | Draw/T|
 *  b5 | ghost point "k=5 = w0" (red)    | Draw/T|
 *  b6 | flow chip (method)              | Chip  | x540 c, y498..530
 *  b7 | proof chip                      | Chip  | x540 c, y546..578
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD, angleArcD } from "./math-kit";

const CX = 540, CY = 380, R = 100;
const deg = (d: number) => (d * Math.PI) / 180;
const THETA0 = deg(20);
const STEP = (2 * Math.PI) / 5;

const pts = [0, 1, 2, 3, 4].map((k) => pointOnCircle(CX, CY, R, THETA0 + k * STEP));
const labelPts = [0, 1, 2, 3, 4].map((k) => pointOnCircle(CX, CY, R + 26, THETA0 + k * STEP));

export default function M11Ch04Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The nth Roots Formula", "The nth Roots Formula")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("All n roots of a complex number", "Kisi complex number ke saare n roots")}
        </T>
      </Fade>

      {/* beat 1 — set up: match modulus & argument, draw the empty roots-circle */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={15} fill={INK} anchor="middle">
          {t("Solve w^n = z = r·e^(iθ): match modulus and argument.", "Solve karo w^n = z = r·e^(iθ): modulus aur argument match karo.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={CX} cy={CY} r={3} fill={INK} />
      </Fade>

      {/* beat 2 — the formula + first point k=0 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={14} fill={INK} anchor="middle">
          w_k = r^(1/n)·e^(i(θ+2kπ)/n),&nbsp; k = 0,1,…,n-1
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={arrowD(CX, CY, pts[0].x, pts[0].y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={labelPts[0].x} y={labelPts[0].y} size={13} fill={INK} anchor="middle" weight={700}>w₀</T>
      </Fade>

      {/* beat 3 — trig-form equivalent + second point k=1 stepping by 2π/n */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={665} y={300} size={12} fill={INK} anchor="start">
          = r^(1/n)[cos(..) + i·sin(..)]
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={arrowD(CX, CY, pts[1].x, pts[1].y)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={angleArcD(CX, CY, 40, THETA0, THETA0 + STEP)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={labelPts[1].x} y={labelPts[1].y} size={13} fill={INK} anchor="middle" weight={700}>w₁</T>
      </Fade>

      {/* beat 4 — guardrail: exactly n roots, complete the pentagon */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={340} y={188} w={400} h={32} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          {t("Exactly n = 5 roots: k = 0,1,2,3,4", "Theek n = 5 roots: k = 0,1,2,3,4")}
        </Chip>
      </Fade>
      {[2, 3, 4].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 4} delay={dl(4, 0.5 + i * 0.35)} d={arrowD(CX, CY, pts[k].x, pts[k].y)} stroke={INK} sw={2.2} dur={0.5} />
          <Fade on={beat >= 4} delay={dl(4, 0.9 + i * 0.35)}>
            <T x={labelPts[k].x} y={labelPts[k].y} size={13} fill={INK} anchor="middle" weight={700}>w{k}</T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — k ≥ n just repeats: ghost arrow back to w0 */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Circle cx={pts[0].x} cy={pts[0].y} r={9} fill="none" stroke={RED} strokeWidth={2} />
        <T x={labelPts[0].x + 26} y={labelPts[0].y + 18} size={12} fill={RED} anchor="start" weight={700}>
          k=5 = w₀
        </T>
      </Fade>

      {/* beat 6 — the method, as a flow */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={220} y={498} w={640} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("Euler form → take r^(1/n) → list n angles → convert back", "Euler form → r^(1/n) lo → n angles list karo → wapas convert karo")}
        </Chip>
      </Fade>

      {/* beat 7 — the proof, in one line */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={200} y={558} w={680} h={32} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t("ρ^n·e^(inφ) = r·e^(iθ)  ⇒  ρ = r^(1/n), nφ = θ+2kπ", "ρ^n·e^(inφ) = r·e^(iθ)  ⇒  ρ = r^(1/n), nφ = θ+2kπ")}
        </Chip>
      </Fade>
    </Scene>
  );
}

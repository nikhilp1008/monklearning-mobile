/**
 * M11 Ch04 · Section 46 — "nth roots of unity and the cube-root workhorse"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — introduces the cube-roots-of-unity "workhorse" diagram
 * that later sections (47, 49-52) keep calling back to.
 *
 * Beats (board_reveal_at_english [0, 9.3, 23.13, 37.55, 45.14, 62.98, 81.07, 92.07]):
 *  0 subtitle: roots of unity form a regular n-gon
 *  1 formula: α_k = e^(i2kπ/n) = cos(2kπ/n)+i·sin(2kπ/n) + draw hexagon (n=6) circle, vertex 1
 *  2 text: α = e^(i2π/n), roots are 1,α,α²,…,α^(n-1) — plot remaining hexagon vertices
 *  3 formula (high): 1+α+α²+⋯+α^(n-1)=0 + draw the 6 radius arrows (vectors that cancel)
 *  4 text: proof — geometric series with ratio α≠1, α^n=1, sums to 0 (chip)
 *  5 formula (high): ω=e^(i2π/3)=-1/2+(√3/2)i, ω²=ω̄, ω³=1 — ERASE hexagon, draw triangle (n=3)
 *  6 formula: 1+ω+ω²=0, ω^n=ω^(n mod 3) — draw the 3 radius arrows on the triangle
 *  7 guardrail (red-margin): always reduce an ω exponent mod 3
 *
 * Layout plan (shared diagram box: c(540,380) r100, hexagon beats1-4 then erased, triangle beats5-7):
 *  b0 | subtitle (15,amber_dark,w700)  | T mid | x540 y90
 *  b1 | formula line (15,ink)          | T mid | x540 y120
 *  b1 | hexagon circle + vertex "1"    | Draw/T| c(540,380) r100, θ=0
 *  b2 | text line (14,ink)             | T mid | x540 y152
 *  b2 | vertices α..α⁵ (5 more pts)    | Draw/T|
 *  b3 | chip "sum = 0" (high)          | Chip  | x540 c y224..256
 *  b3 | 6 radius arrows                | Draw  |
 *  b4 | proof chip                     | Chip  | x540 c y498..530
 *  b5 | formula line (14,ink)          | T mid | x540 y152 (replaces b2's, hexagon erased)
 *  b5 | triangle circle + 1,ω,ω²       | Draw/T| c(540,380) r100, θ=0,120,240
 *  b6 | chip "1+ω+ω²=0, ω^n=ω^(n mod3)"| Chip  | x540 c y498..530
 *  b6 | 3 radius arrows                | Draw  |
 *  b7 | red bar + guardrail text       | Draw/T| x60 y546..580 / x76 y566
 */

import React from "react";
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
import { pointOnCircle, circleD, Overline } from "./math-kit";

const CX = 540, CY = 380, R = 100;

// n = 6 hexagon — general roots-of-unity picture (beats 1-4)
const hexPts = [0, 1, 2, 3, 4, 5].map((k) => pointOnCircle(CX, CY, R, k * ((2 * Math.PI) / 6)));
const hexLabelPts = [0, 1, 2, 3, 4, 5].map((k) => pointOnCircle(CX, CY, R + 24, k * ((2 * Math.PI) / 6)));
const hexLabels = ["1", "α", "α²", "α³", "α⁴", "α⁵"];

// n = 3 triangle — the cube-root workhorse (beats 5-7)
const triPts = [0, 1, 2].map((k) => pointOnCircle(CX, CY, R, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(CX, CY, R + 24, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

export default function M11Ch04Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hexOn = beat >= 1 && beat < 5;
  const triOn = beat >= 5;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Roots of Unity and the Cube-Root Workhorse", "Roots of Unity aur Cube-Root Workhorse")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Roots of unity: a regular n-gon", "Roots of unity: ek regular n-gon")}
        </T>
      </Fade>

      {/* beat 1 — the formula + hexagon circle + vertex "1" */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={14} fill={INK} anchor="middle">
          α_k = e^(i2kπ/n) = cos(2kπ/n) + i·sin(2kπ/n)
        </T>
      </Fade>
      <Draw on={hexOn} delay={dl(1, 0.5)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.8} />
      <Draw on={hexOn} delay={dl(1, 1.1)} d={arrowD(CX, CY, hexPts[0].x, hexPts[0].y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={hexOn} delay={dl(1, 1.6)}>
        <T x={hexLabelPts[0].x} y={hexLabelPts[0].y} size={14} fill={INK} anchor="middle" weight={700}>1</T>
      </Fade>

      {/* beat 2 — the remaining n-gon vertices: 1, α, α², ... , α^(n-1) */}
      <Fade on={hexOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={14} fill={INK} anchor="middle">
          {t("α = e^(i2π/n)  ⇒  roots are 1, α, α², … , α^(n-1)", "α = e^(i2π/n)  ⇒  roots hain 1, α, α², … , α^(n-1)")}
        </T>
      </Fade>
      {[1, 2, 3, 4, 5].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={hexOn} delay={dl(2, 0.3 + i * 0.25)} d={arrowD(CX, CY, hexPts[k].x, hexPts[k].y)} stroke={GREEN} sw={2} dur={0.4} />
          <Fade on={hexOn} delay={dl(2, 0.5 + i * 0.25)}>
            <T x={hexLabelPts[k].x} y={hexLabelPts[k].y} size={13} fill={GREEN} anchor="middle" weight={700}>
              {hexLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 3 — the sum-to-zero identity, shown as the vectors closing the loop */}
      <Fade on={hexOn && beat >= 3} delay={dl(3, 0)}>
        <Chip x={410} y={224} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          1+α+α²+⋯+α^(n-1) = 0
        </Chip>
      </Fade>

      {/* beat 4 — the proof, as a chip (vacates when beat 5 pivots to the ω triangle) */}
      <Fade on={hexOn && beat >= 4} delay={dl(4, 0)}>
        <Chip x={210} y={508} w={660} h={32} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          {t(
            "Proof: ratio α≠1, α^n=1 ⇒ geometric series sums to 0 (arrows cancel)",
            "Proof: ratio α≠1, α^n=1 ⇒ geometric series sum 0 hai (arrows cancel)"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — pivot to the cube-root workhorse: ω, ω², triangle replaces hexagon */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={300} y={152} size={14} fill={INK} anchor="start">
          ω = e^(i2π/3) = -1/2 + (√3/2)i,&nbsp; ω² =
        </T>
        <T x={573} y={152} size={14} fill={INK} anchor="start">ω</T>
        <Overline on={beat >= 5} delay={dl(5, 0)} x={573} y={152} size={14} textWidth={11} anchor="start" />
        <T x={588} y={152} size={14} fill={INK} anchor="start">,&nbsp; ω³ = 1</T>
      </Fade>
      <Draw on={triOn} delay={dl(5, 0.5)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.8} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={triOn} delay={dl(5, 1 + i * 0.4)} d={arrowD(CX, CY, triPts[k].x, triPts[k].y)} stroke={k === 0 ? INK : AMBER_DARK} sw={2.2} dur={0.5} />
          <Fade on={triOn} delay={dl(5, 1.3 + i * 0.4)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={15} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 6 — 1+ω+ω²=0 and the mod-3 reduction rule */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={280} y={508} w={520} h={32} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          1 + ω + ω² = 0,&nbsp;&nbsp; ω^n = ω^(n mod 3)
        </Chip>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 546 L 60 580" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={568} size={15} fill={RED} anchor="start" weight={700}>
          {t("Always reduce an ω exponent mod 3.", "ω exponent ko hamesha mod 3 reduce karo.")}
        </T>
      </Fade>
    </Scene>
  );
}

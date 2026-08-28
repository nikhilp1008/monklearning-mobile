/**
 * Ch14 · Section 3 — "Board derivation: wave speed on a string"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.67, 27.45, 44.22, 61.0, 75.48, 88.44, 103.31, 118.18, 126.95]):
 *  0 hook badge: "2–3 mark derivation"
 *  1 goal chip: v depends only on T and μ — not A, not f
 *  2 setup: pulse + highlighted crest element, R, θ, Δl marked
 *  3 the trick: hop into the pulse's frame — string slides backward at v
 *  4 tension tangent at both ends; net resultant points toward centre O
 *  5 equation row 1: 2T sinθ ≈ 2Tθ = T·Δl/R
 *  6 equation row 2: F_cp = μΔl·v²/R
 *  7 equation row 3: set equal — Δl, R cancel on both sides
 *  8 the engine of the proof: T = μv²
 *  9 rearrange → v = √(T/μ), boxed, + the 3 physics read-offs
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (12.5)             | Chip  | x90..310  y100..132
 *  b0 | underline flourish            | Draw  | x100..300 y140
 *  b1 | goal chip (h40)               | Chip  | x290..790 y145..185
 *  b1 | subnote (12,red)              | T mid | x540 bl205            y191..205
 *  b2 | string baseline               | Draw  | x60..700  y380
 *  b2 | pulse curve                   | Draw  | x180..580 y300..380
 *  b2 | amber crest-element highlight | Draw  | x310..450 y300..344
 *  b2 | R dashed lines ×2             | Draw  | O(380,424) → (310,344)/(450,344)
 *  b2 | angle arc at O                | Draw  | c(380,424) r18
 *  b2 | "R" (13,muted)                | T mid | x330 bl378            y365..382
 *  b2 | "θ" (12,ink)                  | T mid | x380 bl404            y393..407
 *  b2 | "Δl" (12,amber-d)             | T mid | x380 bl296            y286..298
 *  b3 | slide arrow (leftward)        | Draw  | x260..560 y410
 *  b3 | "(pulse frame) slides at v"   | T mid | x410 bl428            y417..431
 *  b4 | T arrow (left)                | Draw  | x310..278 y344..368
 *  b4 | T arrow (right)               | Draw  | x450..482 y344..368
 *  b4 | "T" labels ×2 (13,red)        | T mid | x265/495 bl378        y365..382
 *  b4 | resultant arrow (green)       | Draw  | x380 y330..375
 *  b4 | "→ O" (11,green)              | T st  | x395 bl372            y362..374
 *  b5 | eqn row1 (15,ink)             | T st  | x650 bl300            y288..305
 *  b6 | eqn row2 (15,ink)             | T st  | x650 bl335            y323..340
 *  b7 | eqn row3 (15,ink)             | T st  | x650 bl370            y358..375
 *  b7 | cancel note (12,muted)        | T st  | x650 bl392            y382..396
 *  b8 | engine chip (h48, size22)     | Chip  | x650..950 y405..453
 *  b9 | "rearrange:" (12,muted)       | T st  | x60 bl495             y485..499
 *  b9 | final formula chip (h70,s28)  | Chip  | x60..380  y500..570
 *  b9 | 3 read-off facts (13)         | T st  | x420 bl505/525/545    y495..549
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("deriving wave speed: v = √(T/μ)", "wave speed derive karna: v = √(T/μ)")}
        </T>
      </Fade>

      {/* beat 0 — hook badge */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={220} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={12.5}>
          {t("★ 2–3 mark derivation", "★ 2-3 mark ka derivation")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 140 L 300 140" stroke={AMBER} sw={1.8} dur={0.3} />

      {/* beat 1 — the goal */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={290} y={145} w={500} h={40} fill="#fff" stroke={GREEN} textFill={INK} size={15}>
          {t("v depends only on T (tension) and μ (mass/length)", "v sirf T (tension) aur μ (mass/length) pe depend karti")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={205} size={12} fill={RED} script>
          {t("not on amplitude, not on frequency", "amplitude pe nahi, frequency pe nahi")}
        </T>
      </Fade>

      {/* beat 2 — setup: pulse + crest element with R, θ, Δl */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 60 380 L 700 380" stroke={MUTED} sw={1.4} dur={0.6} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 180 380 C 260 300, 500 300, 580 380"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.9)}
        d="M 310 344 Q 380 300 450 344"
        stroke={AMBER}
        sw={3.4}
        dur={0.5}
      />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 380 424 L 310 344" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d="M 380 424 L 450 344" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d="M 362 407 A 18 18 0 0 1 398 407"
        stroke={INK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={330} y={378} size={13} fill={MUTED}>
          R
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={380} y={404} size={12} fill={INK}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={380} y={296} size={12} fill={AMBER_DARK}>
          Δl
        </T>
      </Fade>

      {/* beat 3 — hop into the pulse's frame */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(560, 410, 260, 410)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={410} y={428} size={12} fill={AMBER_DARK} script>
          {t("(pulse frame) string slides at v ←", "(pulse frame) string v se slide ←")}
        </T>
      </Fade>

      {/* beat 4 — tension tangent, resultant toward centre */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(310, 344, 278, 368)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(450, 344, 482, 368)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={265} y={378} size={13} fill={RED}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={495} y={378} size={13} fill={RED}>
          T
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d={arrowD(380, 330, 380, 375)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={395} y={372} size={11} fill={GREEN} anchor="start">
          {t("→ O", "→ O")}
        </T>
      </Fade>

      {/* beat 5 — equation row 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={650} y={300} size={15} fill={INK} anchor="start">
          2T sinθ ≈ 2Tθ = T·Δl/R
        </T>
      </Fade>

      {/* beat 6 — equation row 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={650} y={335} size={15} fill={INK} anchor="start">
          F_cp = μΔl·v²/R
        </T>
      </Fade>

      {/* beat 7 — set equal, Δl and R cancel */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={650} y={370} size={15} fill={INK} anchor="start">
          T·Δl/R = μΔl·v²/R
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={650} y={392} size={12} fill={MUTED} script anchor="start">
          {t("(Δl, R cancel on both sides)", "(Δl, R dono taraf cancel)")}
        </T>
      </Fade>

      {/* beat 8 — the engine of the proof */}
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <Chip x={650} y={405} w={300} h={48} fill={GREEN} textFill="#fff" size={22} script={false}>
          T = μv²
        </Chip>
      </Fade>

      {/* beat 9 — rearrange + the physics read-offs */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={60} y={495} size={12} fill={MUTED} script anchor="start">
          {t("rearrange:", "rearrange karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.8)}>
        <Chip x={60} y={500} w={320} h={70} fill={GREEN} textFill="#fff" size={28} script={false}>
          v = √(T/μ)
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.8)}>
        <T x={420} y={505} size={13} fill={GREEN} anchor="start">
          {t("tighter string → faster wave", "tighter string → fast wave")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.3)}>
        <T x={420} y={525} size={13} fill={AMBER_DARK} anchor="start">
          {t("heavier string → slower wave", "heavier string → slow wave")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.8)}>
        <T x={420} y={545} size={13} fill={RED} anchor="start">
          {t("no A, no f anywhere — the string's property", "kahin A nahi, f nahi — string ki property hai")}
        </T>
      </Fade>
    </Scene>
  );
}

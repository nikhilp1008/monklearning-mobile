/**
 * M11 Ch08 · Section 13 — "Symmetric selection: killing the d's"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — technique
 * derivation, extra eye-check (task brief).
 *
 * Math check: odd count 2r+1 picked symmetrically about a as
 * a-rd,...,a-d,a,a+d,...,a+rd sums to (2r+1)a (every ±kd pair cancels).
 * Even count 2r picked as a-(2r-1)d,...,a-d,a+d,...,a+(2r-1)d (no exact
 * center term) — consecutive PICKED terms differ by 2d, not d, since one
 * step of the underlying AP is skipped at the center. Verified for r=1
 * (3 terms, sum=3a), r=2 (5 terms, sum=5a), and the 4-term even case
 * (a-3d,a-d,a+d,a+3d — consecutive picks differ by 2d).
 *
 * Beats (en [0, 9.9, 25.6, 36.69, 47.1, 66.99, 78.51]):
 *  0 title (always-on)
 *  1 THE DEMO: 3 dots a-d/a/a+d on a line, +d arcs, "sum=3a" caption
 *  2 formula: 3-term case restated
 *  3 formula: 5-term case
 *  4 formula: 4-term (even) case — CD = 2d
 *  5 insight: one-unknown system
 *  6 red-margin: even count uses 2d, not d
 *
 * Layout plan:
 *  b1 | line y110 x300..780 · 3 dots x340/540/740 · labels bl88 · 2 arcs dip140 ·
 *       arc labels bl152 cx440/640 · caption bl182 cx540
 *  b2 | text bl215 cx540
 *  b3 | text bl248 cx540
 *  b4 | text bl281 cx540
 *  b5 | text bl318 cx540
 *  b6 | red bar x76 y345..415 · text bl365/405 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot } from "./math-kit";

function arcD(x1: number, x2: number, y: number, dip: number): string {
  return `M ${x1} ${y} Q ${(x1 + x2) / 2} ${dip} ${x2} ${y}`;
}

export default function M11Ch08Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("When a sum is given, pick terms symmetrically", "Jab sum diya ho, terms symmetrically choose karo")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: 3 symmetric terms, d's cancel */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={axisD(300, 780, 110)} stroke={MUTED} sw={1.4} dur={0.4} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.4)} x={340} y={110} open={false} r={5} stroke={AMBER_DARK} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.6)} x={540} y={110} open={false} r={6} stroke={RED} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.8)} x={740} y={110} open={false} r={5} stroke={AMBER_DARK} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={340} y={88} size={14} fill={AMBER_DARK} anchor="middle">{"a - d"}</T>
        <T x={540} y={84} size={15} fill={RED} anchor="middle" weight={700}>a</T>
        <T x={740} y={88} size={14} fill={AMBER_DARK} anchor="middle">{"a + d"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arcD(350, 530, 110, 140)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arcD(550, 730, 110, 140)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={440} y={152} size={12} fill={MUTED} anchor="middle">+d</T>
        <T x={640} y={152} size={12} fill={MUTED} anchor="middle">+d</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={540} y={182} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("sum = 3a (the d's cancel)", "sum = 3a (d's cancel ho jaate hain)")}
        </T>
      </Fade>

      {/* beat 2 — 3-term case restated */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={215} size={15} fill={INK} anchor="middle">
          {"3 terms: a-d, a, a+d  →  sum = 3a"}
        </T>
      </Fade>

      {/* beat 3 — 5-term case */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={248} size={15} fill={INK} anchor="middle">
          {"5 terms: a-2d, a-d, a, a+d, a+2d  →  sum = 5a"}
        </T>
      </Fade>

      {/* beat 4 — 4-term (even) case */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={281} size={15} fill={INK} anchor="middle">
          {"4 terms: a-3d, a-d, a+d, a+3d  →  CD = 2d"}
        </T>
      </Fade>

      {/* beat 5 — insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={318} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "this turns a two-unknown system into one unknown instantly",
            "isse two-unknown system turant one-unknown ban jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — red-margin: even count uses 2d */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 345 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={365} size={15} fill={RED} anchor="start" script>
          {t("even count uses common difference 2d,", "even count common difference 2d use karta hai,")}
        </T>
        <T x={96} y={405} size={15} fill={RED} anchor="start" script>
          {t("NOT d — a frequent slip", "d NAHI — ek common galti")}
        </T>
      </Fade>
    </Scene>
  );
}

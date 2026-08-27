/**
 * M11 Ch08 · Section 28 — "Symmetric selection for products"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. GP analogue of Sec13.
 *
 * Math check: odd count 2r+1 picked symmetrically about a as a/r^r,...,
 * a/r,a,ar,...,ar^r multiplies to a^(2r+1) (every r^±k pair cancels).
 * Even count (e.g. 4: a/r³,a/r,ar,ar³ — no exact centre term) has
 * consecutive PICKED terms in ratio r² (one step of the underlying GP is
 * skipped at the centre), the GP analogue of the AP's even-count-2d trap.
 *
 * Beats (en [0, 7.85, 21.85, 32.6, 44.97, 68.01, 78.51]):
 *  0 title (always-on)
 *  1 THE DEMO: 3 dots a/r, a, ar on a line, ×r arcs, "product=a³" caption
 *  2 formula: 3-term case restated
 *  3 formula: 5-term case
 *  4 formula: 4-term (even) case — ratio = r²
 *  5 insight: one-unknown system
 *  6 red-margin: even count uses r², not r
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

export default function M11Ch08Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("When a PRODUCT is given, pick terms symmetrically", "Jab PRODUCT diya ho, terms symmetrically choose karo")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: 3 symmetric terms, r's cancel */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={axisD(300, 780, 110)} stroke={MUTED} sw={1.4} dur={0.4} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.4)} x={340} y={110} open={false} r={5} stroke={AMBER_DARK} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.6)} x={540} y={110} open={false} r={6} stroke={RED} />
      <IntervalDot on={beat >= 1} delay={dl(1, 0.8)} x={740} y={110} open={false} r={5} stroke={AMBER_DARK} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={340} y={88} size={14} fill={AMBER_DARK} anchor="middle">{"a/r"}</T>
        <T x={540} y={84} size={15} fill={RED} anchor="middle" weight={700}>a</T>
        <T x={740} y={88} size={14} fill={AMBER_DARK} anchor="middle">{"ar"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arcD(350, 530, 110, 140)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arcD(550, 730, 110, 140)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={440} y={152} size={12} fill={MUTED} anchor="middle">×r</T>
        <T x={640} y={152} size={12} fill={MUTED} anchor="middle">×r</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={540} y={182} size={14} fill={GREEN_DARK} anchor="middle" weight={700} script>
          {t("product = a³ (the r's cancel)", "product = a³ (r's cancel ho jaate hain)")}
        </T>
      </Fade>

      {/* beat 2 — 3-term case restated */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={215} size={15} fill={INK} anchor="middle">
          {"3 terms: a/r, a, ar  →  product = a³"}
        </T>
      </Fade>

      {/* beat 3 — 5-term case */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={248} size={15} fill={INK} anchor="middle">
          {"5 terms: a/r², a/r, a, ar, ar²  →  product = a⁵"}
        </T>
      </Fade>

      {/* beat 4 — 4-term (even) case */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={281} size={15} fill={INK} anchor="middle">
          {"4 terms: a/r³, a/r, ar, ar³  →  ratio = r²"}
        </T>
      </Fade>

      {/* beat 5 — insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={318} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "this collapses two unknowns to one, exactly like the AP's symmetric pick",
            "isse two unknowns one ban jaate hain, AP ke symmetric pick jaisa"
          )}
        </T>
      </Fade>

      {/* beat 6 — red-margin: even count uses r² */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 345 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={365} size={15} fill={RED} anchor="start" script>
          {t("even count uses ratio r²,", "even count ratio r² use karta hai,")}
        </T>
        <T x={96} y={405} size={15} fill={RED} anchor="start" script>
          {t("NOT r — the GP's '2d' trap", "r NAHI — GP ka '2d' trap")}
        </T>
      </Fade>
    </Scene>
  );
}

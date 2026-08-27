/**
 * C11 Ch07 · Section 20 — "Pitfalls & pro-tips: charge check, medium, and equalising electrons"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Closes Subtopic 2 (secs 12-20).
 *
 * Beats (en [0, 8.02, 24.06, 42.58, 58.88, 72.45, 79.79, 96.26]):
 *  0 heading: the four balancing traps
 *  1 pitfall 1 (red): atoms balanced but charge forgotten
 *  2 pitfall 2: wrong medium's ions (#1 examiner trap)
 *  3 pitfall 3: adding halves without equalising electrons
 *  4 pitfall 4: assuming a fixed product regardless of medium
 *  5 heading: PRO-TIP — coefficients fast, base via acid
 *  6 tip: for "find the coefficient", e⁻ count → LCM → balance O,H
 *  7 red-margin tip: basic medium? balance as acidic, then add OH⁻ per H⁺
 *  (everything stays)
 *
 * Layout plan — identical row geometry to Sec 11 (already verified clean):
 *  b1 R1 badge(90,135) line1 bl140 line2 bl164 (red)
 *  b2 R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 R3 badge(90,251) line1 bl256 line2 bl280
 *  b4 R4 badge(90,309) line1 bl314 line2 bl338
 *  b5 heading (sans19 800 amber) x64 bl372
 *  b6 tip line (sans16) x540 bl406
 *  b7 margin bar x64 y432..472, text (script17 red) x80 bl454
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cx, cy, n, color = INK }: { on: boolean; delay: number; cx: number; cy: number; n: string; color?: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 17} ${cy} a 17 17 0 1 0 34 0 a 17 17 0 1 0 -34 0`}
        stroke={color}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.15}>
        <T x={cx} y={cy + 6} size={15} fill={color} weight={800}>
          {n}
        </T>
      </Fade>
    </>
  );
}

function Pitfall({
  on,
  d1,
  d2,
  cy,
  n,
  line1,
  line2,
  color = INK,
}: {
  on: boolean;
  d1: number;
  d2: number;
  cy: number;
  n: string;
  line1: string;
  line2: string;
  color?: string;
}) {
  return (
    <>
      <Badge on={on} delay={d1} cx={90} cy={cy - 5} n={n} color={color} />
      <Fade on={on} delay={d1 + 0.2}>
        <T x={125} y={cy} size={18} fill={color} weight={700} anchor="start">
          {line1}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={125} y={cy + 24} size={14} fill={MUTED} anchor="start">
          {line2}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch07Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("charge check catches almost every slip", "charge check almost har slip pakad leta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the four balancing traps", "balancing ke chaar traps")}
        </T>
      </Fade>

      {/* ===== pitfalls 1-4 ===== */}
      <Pitfall
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1"
        color={RED}
        line1={t("atoms balanced, charge forgotten", "atoms balance, charge bhool gaye")}
        line2={t("every atom can match and it's still wrong — always charge-check", "har atom match ho sakta hai, phir bhi galat — hamesha charge-check")}
      />
      <Pitfall
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("the wrong medium's ions", "galat medium ke ions")}
        line2={t("H⁺ in a basic answer (or vice-versa) — #1 examiner trap", "H⁺ basic answer mein (ya ulta) — #1 examiner trap")}
      />
      <Pitfall
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        line1={t("adding halves without equalising e⁻", "halves add karna e⁻ equalise kiye bina")}
        line2={t("3e⁻ and 2e⁻? scale to a common 6 first", "3e⁻ aur 2e⁻? pehle common 6 pe scale karo")}
      />
      <Pitfall
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={314}
        n="4"
        line1={t("assuming a fixed product", "fixed product maan lena")}
        line2={t("wrong product ⇒ wrong e⁻ count ⇒ everything fails", "galat product ⇒ galat e⁻ count ⇒ sab fail")}
      />

      {/* ===== beat 5 — pro-tip heading ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={372} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          {t("PRO-TIP: coefficients fast, base via acid", "PRO-TIP: coefficients fast, base via acid")}
        </T>
      </Fade>

      {/* ===== beat 6 — coefficient shortcut ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={406} size={16} fill={INK}>
          {t("“find the coefficient”? e⁻ count → LCM → balance O, H — done in 2 lines", "“coefficient chahiye”? e⁻ count → LCM → O, H balance — 2 lines mein done")}
        </T>
      </Fade>

      {/* ===== beat 7 — basic-medium habit ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 432 L 64 472" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={454} size={17} fill={RED} script anchor="start">
          {t("basic medium? balance as acidic, then add OH⁻ per H⁺", "basic medium? acidic maan ke balance, phir har H⁺ pe OH⁻ add")}
        </T>
      </Fade>
    </Scene>
  );
}

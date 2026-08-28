/**
 * Ch10 · Section 10 — "Worked example: a railway rail in the afternoon sun"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.52, 16.81, 27.99, 28.99, 29.99, 30.99] — beats 3-5 only
 * 1s apart, so those Fade delays stay ≤ ~0.2s):
 *  0 hook: putting the linear law to work — a classic board problem
 *  1 setup: 12m steel rail, 18°C morning → 48°C afternoon
 *  2 givens: L₀=12m, ΔT=30°C, α=1.2×10⁻⁵/°C
 *  3 formula: ΔL = α L₀ ΔT
 *  4 substitute: 1.2×10⁻⁵ × 12 × 30
 *  5 answer: 4.32×10⁻³ m = 4.32 mm
 *  6 takeaway: thousands of segments ⇒ expansion gaps non-negotiable
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl100
 *  b1 | sun c(540,150)r13 · rail x200..880 y205..215 ·
 *       labels mid x200/880 bl185 · caption mid x540 bl245
 *  b2 | given st x280 bl290 · st x650 bl290
 *  b3 | formula mid x540 bl330
 *  b4 | substitution mid x540 bl378
 *  b5 | box x400..680 y410..450 · answer mid x540 bl435
 *  b6 | line1 mid x540 bl488 · line2 mid x540 bl520
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("worked example — a railway rail in the afternoon sun", "worked example — railway rail, dopahar ki dhoop mein")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={14} fill={INK} script anchor="middle">
          {t(
            "putting the linear law to work — a classic board problem",
            "linear law ka istemaal — ek classic board problem"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M540 137 v-14 M525 143 l-10 -10 M555 143 l10 -10 M527 150 h-14 M553 150 h14"
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} d="M527 150 A13 13 0 1 1 553 150 A13 13 0 1 1 527 150" stroke={AMBER_DARK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={200} y={185} size={12} fill={MUTED} anchor="middle">{t("18°C, morning", "18°C, subah")}</T>
        <T x={880} y={185} size={12} fill={RED} anchor="middle">{t("48°C, afternoon", "48°C, dopahar")}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M200 210 h680" stroke={AMBER_DARK} sw={6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={540} y={245} size={12} fill={MUTED} script anchor="middle">
          {t("12 m steel rail — how much does it grow?", "12 m steel rail — kitna badhega?")}
        </T>
      </Fade>

      {/* beat 2 — givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={280} y={290} size={13} fill={INK} anchor="start">
          L₀ = 12 m, ΔT = 48−18 = 30°C
        </T>
        <T x={650} y={290} size={13} fill={INK} anchor="start">
          α = 1.2×10⁻⁵ ⁄ °C
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={330} size={20} fill={INK} weight={800} anchor="middle">
          ΔL = α L₀ ΔT
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={378} size={15} fill={INK} script anchor="middle">
          = 1.2×10⁻⁵ × 12 × 30
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M400 410 h280 v40 h-280 z" stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={435} size={16} fill={GREEN} weight={800} anchor="middle">
          = 4.32×10⁻³ m = 4.32 mm
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={488} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "just over 4mm per segment — thousands of segments ⇒",
            "har segment mein 4mm se zyada — hazaaron segments ⇒"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={520} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "expansion gaps are non-negotiable on Indian Railways",
            "Indian Railways pe expansion gaps zaroori hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

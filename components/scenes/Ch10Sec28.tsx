/**
 * Ch10 · Section 28 — "The circuit analogy: thermal resistance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en reveals [0,1,2,3,4,5,6] — ALL beats exactly 1s apart, so
 * every Fade delay below stays ≤ ~0.2s regardless of beat.
 *
 * Beats:
 *  0 hook: treat heat flow like a circuit — scary problems turn easy
 *  1 pipe analogy: ΔT = pressure, H = dQ/dt = flow rate
 *  2 short/wide/smooth ⇒ gush; long/narrow/clogged ⇒ chokes
 *  3 R = L/(KA), H = ΔT/R
 *  4 exactly Ohm's law: ΔT↔V, H↔I, R↔R
 *  5 a rod = a resistor — short, wide, high-K passes heat easily
 *  6 takeaway: turns a scary rod network into circuit arithmetic
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | pipe mid x540 bl115
 *  b2 | note mid x540 bl145
 *  b3 | formula mid x540 bl180
 *  b4 | ohm mid x540 bl210
 *  b5 | zigzag x470..610 y222..248 · note mid x540 bl272
 *  b6 | takeaway mid x540 bl305
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("the circuit analogy — thermal resistance", "circuit analogy — thermal resistance")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.1)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("treat heat flow like a circuit — scary problems turn easy", "heat flow ko circuit jaisa treat karo — mushkil aasaan ban jaate")}
        </T>
      </Fade>

      {/* beat 1 — the pipe analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t("water in a pipe: ΔT = pressure, H = dQ/dt = flow rate", "pipe mein paani: ΔT = pressure, H = dQ/dt = flow rate")}
        </T>
      </Fade>

      {/* beat 2 — the pipe shape matters */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={145} size={12} fill={INK} script anchor="middle">
          {t("short/wide/smooth ⇒ gush; long/narrow/clogged ⇒ chokes", "chhota/chauda/saaf ⇒ gush; lamba/patla/clogged ⇒ choke")}
        </T>
      </Fade>

      {/* beat 3 — thermal resistance */}
      <Fade on={beat >= 3} delay={dl(3, 0.12)}>
        <T x={540} y={180} size={15} fill={INK} weight={700} anchor="middle">
          R = L⁄(KA),  H = ΔT⁄R
        </T>
      </Fade>

      {/* beat 4 — Ohm's law */}
      <Fade on={beat >= 4} delay={dl(4, 0.12)}>
        <T x={540} y={210} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("exactly Ohm's law: ΔT↔V, H↔I, R↔R", "poora Ohm's law hai: ΔT↔V, H↔I, R↔R")}
        </T>
      </Fade>

      {/* beat 5 — a rod is a resistor */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M470 235 L487 222 L504 248 L521 222 L538 248 L555 222 L572 248 L589 222 L610 235"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={272} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("a rod = a resistor — short, wide, high-K passes heat easily", "rod = resistor — chhota, chauda, high-K aasaani se heat deta")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <T x={540} y={305} size={14} fill={INK} script weight={700} anchor="middle">
          {t(
            "a scary rod network becomes ordinary circuit arithmetic",
            "darawana rod network sirf circuit arithmetic ban jaata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

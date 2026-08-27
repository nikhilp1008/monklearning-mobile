/**
 * Ch07 · Section 13 — "Pitfalls and pro-tips for Newton's law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 13.07, 24.5, 34.74, 47.54]):
 *  0 title
 *  1 trap 1: the square (red bar row)
 *  2 trap 2: point formula on extended bodies
 *  3 trap 3: adding magnitudes
 *  4 trap 4: not electrostatics
 *  5 green magic-question box
 *  6 amber pro-tip 1: solve by ratio
 *  7 amber pro-tip 2: far-field check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  trap rows st x84, bars M66: bl112 (bar 92..120) · bl162 · bl212 · bl262
 *  b5 green box x140..940 y300..352 · text cx540 bl332
 *  b6 bar x66 y392..420 · line st x84 bl412
 *  b7 bar x66 y442..470 · line st x84 bl462
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the checklist */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Newton's law — four traps, two time-savers",
            "Newton ka law — chaar traps, do time-savers"
          )}
        </T>
      </Fade>

      {/* beat 1 — the square */}
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 66 94 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — the square: distance ×k → force ×1⁄k² (half → ×4, not ×2)",
            "trap 1 — square: distance ×k → force ×1⁄k² (aadha → ×4, ×2 nahi)"
          )}
        </T>
      </Fade>

      {/* beat 2 — extended bodies */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 66 144 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={162} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — point formula on rods, rings, arcs: they demand INTEGRATION",
            "trap 2 — rod, ring, arc par point formula: unhe INTEGRATION chahiye"
          )}
        </T>
      </Fade>

      {/* beat 3 — magnitudes vs vectors */}
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 66 194 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={212} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 — adding magnitudes: angled pulls can cancel — resolve first",
            "trap 3 — magnitudes jodna: angle wali pulls cancel ho sakti hain — pehle resolve"
          )}
        </T>
      </Fade>

      {/* beat 4 — not electrostatics */}
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 66 244 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={262} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — not electrostatics: no medium effect, no shielding, no repulsion",
            "trap 4 — ye electrostatics nahi: na medium effect, na shielding, na repulsion"
          )}
        </T>
      </Fade>

      {/* beat 5 — the magic question */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 152 300 h 776 q 12 0 12 12 v 28 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={540} y={332} size={14} fill={INK} weight={700}>
          {t(
            "magic question: is EVERY part the same distance away? if not → INTEGRATE",
            "jaadu ka sawaal: kya HAR hissa same distance par hai? nahi → INTEGRATE"
          )}
        </T>
      </Fade>

      {/* beat 6 — solve by ratio */}
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 66 394 v 26" stroke={AMBER_DARK} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={412} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pro-tip 1 — solve by ratio: F ∝ m₁m₂ ⁄ r², multiply the factors in your head",
            "pro-tip 1 — ratio se: F ∝ m₁m₂ ⁄ r², factors dimaag mein multiply karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — far-field check */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 444 v 26" stroke={AMBER_DARK} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={462} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pro-tip 2 — after integrating, the far field must reduce to GMm ⁄ r²",
            "pro-tip 2 — integration ke baad far field GMm ⁄ r² mein simatna chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

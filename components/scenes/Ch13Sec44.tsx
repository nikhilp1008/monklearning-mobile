/**
 * Ch13 · Section 44 — "Common pitfalls and pro-tips" (closes Damped and Forced Oscillations)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.81, 18.57, 30.34, 37.77, 49.84, 58.2, 66.56]):
 *  0 shelf
 *  1 trap 1 (high): light damping barely slows frequency, shift ~b²
 *  2 trap 2: forced steady state = driving freq, never natural
 *  3 trap 3: resonance amplitude finite, not infinite
 *  4 trap 4 (high): E decays 2× faster than A
 *  5 trap 5: critical/overdamped/underdamped classification
 *  6 pro-tip: amplitude-fraction problems use equal-interval property
 *  7 formula: Q = 2π/(fractional E lost per cycle), N ≈ Q/2π
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl112 size14 red weight800
 *  b2 | st x70 bl145 size12 red
 *  b3 | st x70 bl175 size12 red
 *  b4 | st x70 bl210 size13 red weight700
 *  b5 | st x70 bl240 size11 red
 *  b6 | st x70 bl275 size13 green weight700
 *  b7 | box x150..930 y460..535 rx18 · line cx540 bl504 size18
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Five traps in damping and resonance", "Damping aur resonance ke paanch traps")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — trap 1, high emphasis */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={112} size={14} fill={RED} anchor="start" weight={800}>
          {t(
            "✗ light damping barely slows frequency — shift goes as b²",
            "✗ light damping frequency ko mushkil se slow karti hai — shift b² jaisa"
          )}
        </T>
      </Fade>

      {/* beat 2 — trap 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={145} size={12} fill={RED} anchor="start">
          {t(
            "✗ forced steady state = DRIVING freq, never natural (that's transient only)",
            "✗ forced steady state = DRIVING freq, kabhi natural nahi (wo sirf transient hai)"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={175} size={12} fill={RED} anchor="start">
          {t(
            "✗ resonance amplitude is FINITE not infinite — real systems always damp",
            "✗ resonance amplitude FINITE hai infinite nahi — real systems hamesha damp karte hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 4, high emphasis */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={210} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "✗ E decays 2× faster than A: A∝e^(−bt/2m), E∝e^(−bt/m)",
            "✗ E, A se 2× fast decay: A∝e^(−bt/2m), E∝e^(−bt/m)"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={240} size={11} fill={RED} anchor="start">
          {t(
            "✗ critical=fastest no-osc · overdamped=slower non-osc · underdamped=oscillates",
            "✗ critical=fastest no-osc · overdamped=slower non-osc · underdamped=oscillate"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={275} size={13} fill={GREEN} anchor="start" weight={700}>
          {t(
            "✓ amplitude-fraction problems: use equal-interval property",
            "✓ amplitude-fraction problems: equal-interval property use karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the memory hook */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 168 460 h 744 q 18 0 18 18 v 39 q 0 18 -18 18 h -744 q -18 0 -18 -18 v -39 q 0 -18 18 -18"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={504} size={18} fill={INK} weight={800}>
          Q = 2π/(fractional E lost per cycle) , N ≈ Q/2π
        </T>
      </Fade>
    </Scene>
  );
}

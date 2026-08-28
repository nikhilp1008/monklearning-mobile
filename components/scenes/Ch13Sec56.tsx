/**
 * Ch13 · Section 56 — "Common pitfalls and pro-tips" (closes Reference Circle, Superposition and More SHM Systems)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.46, 21.25, 33.18, 43.25, 55.18, 66.74, 82.77]):
 *  0 shelf
 *  1 trap 1 (high): don't add SHM amplitudes arithmetically — use phasor formula
 *  2 trap 2: U-tube L = total column length, not one arm, not displacement
 *  3 trap 3: floating body use equilibrium submerged depth h, not total length
 *  4 trap 4: reference-circle speed constant, shadow's SHM speed isn't
 *  5 trap 5 (high): temperature sign — rise ⇒ slow, drop ⇒ fast
 *  6 pro-tip: unfamiliar system? displace, restoring force, ẍ=-ω²x, read ω
 *  7 formula: period-twins 2π√(L/g), 2π√(h/g), 2π√(R/g)
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl112 size14 red weight800
 *  b2 | st x70 bl145 size12 red
 *  b3 | st x70 bl175 size12 red
 *  b4 | st x70 bl205 size11 red
 *  b5 | st x70 bl235 size13 red weight700
 *  b6 | st x70 bl270 size13 green weight700
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

export default function Ch13Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Five traps in the closing subtopic", "Closing subtopic ke paanch traps")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — trap 1, high emphasis */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={112} size={14} fill={RED} anchor="start" weight={800}>
          {t(
            "✗ don't add SHM amplitudes arithmetically — phasor formula: resultant ∈ [|A₁−A₂|, A₁+A₂]",
            "✗ SHM amplitudes ko arithmetically mat jodo — phasor formula: resultant [|A₁−A₂|, A₁+A₂] mein"
          )}
        </T>
      </Fade>

      {/* beat 2 — trap 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={145} size={12} fill={RED} anchor="start">
          {t(
            "✗ U-tube: L = TOTAL column length, not one arm, not the displacement",
            "✗ U-tube: L = TOTAL column length, ek arm nahi, displacement bhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={175} size={12} fill={RED} anchor="start">
          {t(
            "✗ floating body: equilibrium submerged depth h — not the object's total length",
            "✗ floating body: equilibrium submerged depth h — object ki total length nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={205} size={11} fill={RED} anchor="start">
          {t(
            "✗ reference-circle speed is constant, but shadow's SHM speed isn't — fast at centre, zero at ends",
            "✗ reference-circle speed constant hai, par shadow ki SHM speed nahi — centre par fast, ends par zero"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 5, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={235} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "✗ temperature sign: rise → longer rod → longer T → clock SLOW; drop → FAST",
            "✗ temperature sign: rise → lambi rod → lamba T → clock SLOW; drop → FAST"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={270} size={13} fill={GREEN} anchor="start" weight={700}>
          {t(
            "✓ unfamiliar system? displace, find restoring force, shape into ẍ=-ω²x, read ω",
            "✓ anjaan system? displace karo, restoring force dhoondo, ẍ=-ω²x mein shape karo, ω padho"
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
          period-twins: 2π√(L/g), 2π√(h/g), 2π√(R/g)
        </T>
      </Fade>
    </Scene>
  );
}

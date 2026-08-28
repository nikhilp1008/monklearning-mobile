/**
 * Ch13 · Section 41 — "Worked example (NEET): the resonant driving frequency"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 2.81, 7.1, 13.12, 17.81, 19.81, 24.23, 26.51]):
 *  0 shelf
 *  1 given: f₀=5Hz, small periodic force · find driving f for max amplitude, and its name
 *  2 trap (high): don't grind ωr formula; never guess 2× or ½ of f₀
 *  3 hero: light damping ⇒ f_drive ≈ f₀ = 5 Hz
 *  4 small force ⇒ light damping ⇒ correction term negligible
 *  5 hero (high): max amplitude ALWAYS at f₀ — never at a multiple
 *  6 the phenomenon is called RESONANCE
 *  7 closing: answer ≈5 Hz, RESONANCE
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size13 · st x70 bl135 size12
 *  b2 | st x70 bl175 size13 red weight700
 *  b3 | box x70..460 y200..250 rx14 · line cx265 bl231 size18
 *  b4 | st x70 bl285 size12
 *  b5 | box x70..560 y310..365 rx14 · line cx315 bl343 size15
 *  b6 | st x70 bl400 size13 green weight700
 *  b7 | box x180..900 y425..475 rx16 · line cx540 bl455 size15
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

export default function Ch13Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Maximum amplitude sits at the natural frequency", "Maximum amplitude natural frequency par baithti hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the question */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={13} fill={INK} anchor="start" weight={700}>
          f₀ = 5 Hz, small periodic driving force
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={135} size={12} fill={INK} anchor="start" weight={700}>
          {t(
            "find: driving f for max amplitude, and its name",
            "nikaalo: max amplitude ke liye driving f, aur uska naam"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap, high emphasis */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={175} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "✗ don't grind ωr formula; NEVER guess 2× or ½ of f₀",
            "✗ ωr formula mat ghiso; f₀ ka 2× ya ½ KABHI guess mat karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the hero shortcut */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 200 h 362 q 14 0 14 14 v 22 q 0 14 -14 14 h -362 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={265} y={231} size={18} fill={INK} weight={800}>
          light damping ⇒ f_drive ≈ f₀ = 5 Hz
        </T>
      </Fade>

      {/* beat 4 — why the shortcut works */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={285} size={12} fill={INK} anchor="start">
          {t(
            "small force ⇒ light damping ⇒ correction term negligible",
            "small force ⇒ light damping ⇒ correction term negligible"
          )}
        </T>
      </Fade>

      {/* beat 5 — the principle to lock in, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 74 310 h 476 q 14 0 14 14 v 27 q 0 14 -14 14 h -476 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={315} y={343} size={15} fill={INK} weight={800}>
          {t(
            "max amplitude ALWAYS at (or near) f₀ — NEVER at a multiple",
            "max amplitude HAMESHA f₀ par (ya paas) — kabhi multiple par NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — naming the phenomenon */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={400} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("the phenomenon is called RESONANCE", "is phenomenon ko RESONANCE kehte hain")}
        </T>
      </Fade>

      {/* beat 7 — the compact answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 196 425 h 688 q 16 0 16 16 v 18 q 0 16 -16 16 h -688 q -16 0 -16 -16 v -18 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={540} y={455} size={15} fill={INK} weight={800}>
          {t("answer: ≈5 Hz, RESONANCE", "answer: ≈5 Hz, RESONANCE")}
        </T>
      </Fade>
    </Scene>
  );
}

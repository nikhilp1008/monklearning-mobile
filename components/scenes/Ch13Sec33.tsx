/**
 * Ch13 · Section 33 — "Common pitfalls and pro-tips" (closes Pendulums and Mass-Spring)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.89, 24.0, 38.23, 54.67, 69.79, 82.23, 98.23]):
 *  0 shelf
 *  1 trap 1 (high): T independent of mass & amplitude
 *  2 trap 2: vertical spring = horizontal spring T, independent of g
 *  3 trap 3: parallel stiffer (add k), series softer (add 1/k) — opposite resistors
 *  4 trap 4: cut spring piece stiffer not weaker
 *  5 trap 5 (high): g→g_eff sign convention
 *  6 pro-tip: only x₀ given ⇒ T=2π√(x₀/g)
 *  7 formula: the memory hook
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl112 size14 red weight800
 *  b2 | st x70 bl143 size12 red
 *  b3 | st x70 bl173 size12 red
 *  b4 | st x70 bl203 size12 red
 *  b5 | st x70 bl235 size13 red weight700
 *  b6 | st x70 bl275 size13 green weight700
 *  b7 | box x180..900 y460..550 rx18 · line cx540 bl512 size22
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

export default function Ch13Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Five traps around pendulums and springs", "Pendulums aur springs ke paanch traps")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — trap 1, high emphasis */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={112} size={14} fill={RED} anchor="start" weight={800}>
          {t(
            "✗ pendulum T independent of MASS & amplitude — keep both out of formula",
            "✗ pendulum T mass & amplitude se independent — dono formula se bahar rakho"
          )}
        </T>
      </Fade>

      {/* beat 2 — trap 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={143} size={12} fill={RED} anchor="start">
          {t(
            "✗ vertical spring = horizontal spring T; independent of g entirely",
            "✗ vertical spring = horizontal spring T; g se poori tarah independent"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={173} size={12} fill={RED} anchor="start">
          {t(
            "✗ parallel stiffer (add k) · series softer (add 1/k) — OPPOSITE of resistors",
            "✗ parallel stiffer (k add) · series softer (1/k add) — resistors ka ULTA"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={203} size={12} fill={RED} anchor="start">
          {t(
            "✗ cut spring piece is STIFFER not weaker: n pieces ⇒ each = nk",
            "✗ cut spring piece STIFFER hota hai weak nahi: n pieces ⇒ har ek = nk"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 5, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={235} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "✗ g→g_eff: up ADDS, down SUBTRACTS, horizontal → Pythagoras",
            "✗ g→g_eff: upar ADD, neeche SUBTRACT, horizontal → Pythagoras"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={275} size={13} fill={GREEN} anchor="start" weight={700}>
          {t("✓ only x₀ given? use T = 2π√(x₀/g) directly", "✓ sirf x₀ diya hai? seedha T = 2π√(x₀/g) use karo")}
        </T>
      </Fade>

      {/* beat 7 — the memory hook */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 198 460 h 684 q 18 0 18 18 v 54 q 0 18 -18 18 h -684 q -18 0 -18 -18 v -54 q 0 -18 18 -18"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={512} size={22} fill={INK} weight={800}>
          pendulum feels g_eff ; spring feels only k
        </T>
      </Fade>
    </Scene>
  );
}

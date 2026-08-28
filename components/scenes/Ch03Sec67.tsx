/**
 * Ch03 · Section 67 — "The toolkit: angular kinematics and the linear links"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.0, 23.4, 32.8, 46.0, 53.3, 68.7, 79.1, 91.7]):
 *  0 heading
 *  1 basic definitions: θ = s/r, ω = dθ/dt, α = dω/dt
 *  2 period & frequency header
 *  3 T = 2π/ω = 2πr/v, f = 1/T
 *  4 linear-angular links header
 *  5 v = ωr, a(t) = αr (green box)
 *  6 constant-α header
 *  7 ω = ω₀+αt, θ = ω₀t+½αt²
 *  8 verdict: swap the symbols + mapping row
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 112 / 140 / 164 s14
 *  b2 | header st x84 bl 214 · underline M84 222 h360
 *  b3 | st x84 bl 254 / 282 s14
 *  b4 | header st x560 bl 112 · underline M560 120 h380
 *  b5 | box x560..980 y142..188 text cx770 bl 174 s15
 *  b6 | header st x560 bl 236 · underline M560 244 h380
 *  b7 | st x560 bl 276 / 304 s14
 *  b8 | bar M66 356 v56 · lines st x84 bl 376 / 400 s12 · mapping cx540 bl 440 s13
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("TOOLKIT — the rotational language", "TOOLKIT — rotational bhasha")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the basic definitions */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={14} fill={INK} weight={700} anchor="start">
          θ = s ⁄ r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={84} y={140} size={14} fill={INK} weight={700} anchor="start">
          ω = dθ ⁄ dt
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={164} size={14} fill={INK} weight={700} anchor="start">
          α = dω ⁄ dt
        </T>
      </Fade>

      {/* beat 2 — period & frequency header */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={214} size={13} fill={INK} script anchor="start">
          {t("PERIOD & FREQUENCY — one full revolution", "PERIOD & FREQUENCY — ek poora chakkar")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 84 222 h 360" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — T and f */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={254} size={14} fill={INK} weight={700} anchor="start">
          T = 2π ⁄ ω = 2π r ⁄ v
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={282} size={14} fill={INK} weight={700} anchor="start">
          f = 1 ⁄ T
        </T>
      </Fade>

      {/* beat 4 — the linear links header */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={112} size={13} fill={INK} script anchor="start">
          {t(
            "LINEAR-ANGULAR LINKS — multiply by r",
            "LINEAR-ANGULAR LINKS — r se guna karo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 560 120 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — the link formulas */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 142 h 396 q 12 0 12 12 v 22 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={770} y={174} size={15} fill={INK} weight={800}>
          v = ω r    ·    a(t) = α r
        </T>
      </Fade>

      {/* beat 6 — constant-alpha header */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={560} y={236} size={13} fill={INK} script anchor="start">
          {t(
            "CONSTANT α — mirrors the linear equations exactly",
            "CONSTANT α — bilkul linear equations jaisa"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 560 244 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 7 — the mirrored equations */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={560} y={276} size={14} fill={INK} weight={700} anchor="start">
          ω = ω₀ + α t
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={560} y={304} size={14} fill={INK} weight={700} anchor="start">
          θ = ω₀ t + ½ α t²
        </T>
      </Fade>

      {/* beat 8 — swap the symbols */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 356 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={376} size={12} fill={GREEN} script anchor="start">
          {t(
            "every straight-line kinematics tool has an angular twin",
            "har straight-line kinematics tool ka angular judwa hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={400} size={12} fill={GREEN} script anchor="start">
          {t(
            "swap the symbols and the machinery is identical",
            "symbols badlo, machinery bilkul wahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={540} y={440} size={13} fill={AMBER_DARK} weight={700}>
          x ↔ θ  ·  v ↔ ω  ·  a ↔ α
        </T>
      </Fade>
    </Scene>
  );
}

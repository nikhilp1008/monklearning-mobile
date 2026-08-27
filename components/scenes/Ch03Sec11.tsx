/**
 * Ch03 · Section 11 — "JEE Advanced, part one: the dot product and the angle"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.7, 30.8, 51.2, 76.0, 100.9, 114.1, 138.9, 161.9, 167.8]):
 *  0 heading
 *  1 given vectors + underline
 *  2 (a) header: multiply matching, add
 *  3 three products → A·B = −3 box + scalar warning
 *  4 amber note: sign of dot = sign of cosθ
 *  5 (b) header: magnitudes, 3D Pythagoras
 *  6 |A| = √14 · |B| = √6 + (−1)² slip
 *  7 cos θ ≈ −0.327
 *  8 hero: θ ≈ 109°
 *  9 verdict: predict → compute → confirm
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 48 · underline M340 62 h400
 *  b1 | given cx540 bl 84 s14 · underline M330 96 h420
 *  L col: b2 header st x84 bl 124 · underline M84 132 h360
 *  b3 | rows st x104 bl 164 / 192 / 220 s14 · box x84..420 y240..284 text cx252
 *       bl 270 s15 · red st x84 bl 308 s11
 *  b4 | bar M66 330 v44 · lines st x84 bl 348 / 372 s12
 *  R col: b5 header st x570 bl 124 · underline M570 132 h410
 *  b6 | st x590 bl 164 / 192 s14 · red script st x590 bl 216 s11 · underline M590 226 h240
 *  b7 | st x590 bl 256 s14 · underline M590 266 h300
 *  b8 | box x570..1000 y280..330 text cx785 bl 312 s18
 *  b9 | bar M556 352 v72 · lines st x570 bl 368 / 392 / 416 s12
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

export default function Ch03Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE ADVANCED — a full vector workout, part 1",
            "JEE ADVANCED — poora vector workout, part 1"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the given vectors */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={14} fill={INK} weight={700}>
          {t(
            "A = 2î + 3ĵ − k̂ ,   B = î − ĵ + 2k̂ — find A·B and the angle θ",
            "A = 2î + 3ĵ − k̂ ,   B = î − ĵ + 2k̂ — A·B aur angle θ nikaalo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 330 96 h 420" stroke={MUTED} sw={1.5} dur={0.5} />

      {/* beat 2 — the dot rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={124} size={13} fill={INK} script anchor="start">
          {t(
            "(a) DOT PRODUCT — multiply MATCHING parts, then add",
            "(a) DOT PRODUCT — MATCHING hisse guna karo, phir jodo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d="M 84 132 h 360" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — run it through */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={104} y={164} size={14} fill={INK} weight={700} anchor="start">
          î · î :   2 × 1 = 2
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={104} y={192} size={14} fill={INK} weight={700} anchor="start">
          ĵ · ĵ :   3 × (−1) = −3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={104} y={220} size={14} fill={INK} weight={700} anchor="start">
          k̂ · k̂ :   (−1) × 2 = −2
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d="M 96 240 h 312 q 12 0 12 12 v 20 q 0 12 -12 12 h -312 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={252} y={270} size={15} fill={INK} weight={800}>
          A·B = 2 − 3 − 2 = −3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={84} y={308} size={11} fill={RED} script anchor="start">
          {t(
            "a SCALAR — no î ĵ k̂; writing it as a vector loses the mark",
            "SCALAR hai — koi î ĵ k̂ nahi; vector likha to mark gaya"
          )}
        </T>
      </Fade>

      {/* beat 4 — the sign speaks */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 330 v 44" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={348} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "A·B = AB cosθ, and A, B are always positive →",
            "A·B = AB cosθ, aur A, B hamesha positive hain →"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={84} y={372} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the SIGN of A·B is the sign of cosθ: negative = obtuse, known already",
            "A·B ka SIGN hi cosθ ka sign hai: negative = obtuse, abhi se pata"
          )}
        </T>
      </Fade>

      {/* beat 5 — magnitudes header */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={124} size={13} fill={INK} script anchor="start">
          {t(
            "(b) ANGLE — need both magnitudes (3D Pythagoras)",
            "(b) ANGLE — dono magnitudes chahiye (3D Pythagoras)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 570 132 h 410" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 6 — the two roots */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={590} y={164} size={14} fill={INK} weight={700} anchor="start">
          |A| = √(4 + 9 + 1) = √14
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={590} y={192} size={14} fill={INK} weight={700} anchor="start">
          |B| = √(1 + 1 + 4) = √6
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={590} y={216} size={11} fill={RED} script anchor="start">
          {t(
            "(−1)² = +1 — the classic sign slip lives here",
            "(−1)² = +1 — sabse aam sign slip yahi hota hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 9)} d="M 590 226 h 240" stroke={RED} sw={1.5} dur={0.4} />

      {/* beat 7 — substitute */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={590} y={256} size={14} fill={INK} weight={700} anchor="start">
          cos θ = −3 ⁄ (√14·√6) = −3 ⁄ 2√21 ≈ −0.327
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.2)} d="M 590 266 h 300" stroke={AMBER} sw={1.5} dur={0.4} />

      {/* beat 8 — the angle */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.6)}
        d="M 582 280 h 406 q 12 0 12 12 v 26 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={785} y={312} size={18} fill={INK} weight={800}>
          θ = cos⁻¹(−0.327) ≈ 109°
        </T>
      </Fade>

      {/* beat 9 — predicted, then confirmed */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 556 352 v 72" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={570} y={368} size={12} fill={GREEN} script anchor="start">
          {t(
            "109° is obtuse — exactly what the minus promised, steps ago",
            "109° obtuse hai — wahi jo minus ne pehle hi keh diya tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6)}>
        <T x={570} y={392} size={12} fill={GREEN} script anchor="start">
          {t(
            "the habit: predict from the sign → compute → confirm",
            "aadat banao: sign se predict → compute → confirm"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 11)}>
        <T x={570} y={416} size={12} fill={INK} script anchor="start">
          {t(
            "a disagreement is a free arithmetic-slip detector",
            "disagreement matlab muft ka arithmetic-slip detector"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

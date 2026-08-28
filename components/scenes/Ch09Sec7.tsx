/**
 * Ch09 · Section 7 — "Overhead tank: pressure and force on the base" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 6.83, 17.15, 25.69, 30.21, 38.74, 39.74, 40.74, 41.74]):
 *  0 title (always-on)
 *  1 LEFT: tank drawn (h = 2.5 m water, open top)
 *  2 h-bracket + "A = 0.80 m²" + "P₀" labels
 *  3 RIGHT: "(a) gauge pressure = ρgh"
 *  4 formula: Pg = 1000×10×2.5 = 2.5×10⁴ Pa
 *  5 "(b) absolute = P₀ + gauge"
 *  6 formula: P = 1.0×10⁵ + 0.25×10⁵ = 1.25×10⁵ Pa
 *  7 red-margin note: force on the base uses absolute pressure
 *  8 final formula (green): F = PA = 1.25×10⁵ × 0.80 = 1.0×10⁵ N
 *
 * Layout plan:
 *  b1 | tank walls          | Draw  | x200..340  y260..460
 *  b1 | water line           | Draw  | x200..340  y260
 *  b2 | h-bracket + ticks    | Draw  | x175..185  y262..458
 *  b2 | "h = 2.5 m" (13) end | T end  | x~90..165  y351..377 (bl 364)
 *  b2 | "A = 0.80 m²" (13)   | T mid  | x270  y470..492 (bl 478)
 *  b2 | "P₀" (12) start      | T st   | x210..~230 y240..256 (bl 252)
 *  b3 | "(a)…" (14, muted)   | T st   | x480..~750 y237..252 (bl 248)
 *  b4 | formula1 (18, w700)  | T st   | x480..~890 y268..288 (bl 282)
 *  b5 | "(b)…" (14, muted)   | T st   | x480..~740 y315..330 (bl 326)
 *  b6 | formula2 (18, w700)  | T st   | x480..~960 y348..368 (bl 362)
 *  b7 | margin bar (red)     | Draw   | x460  y390..414
 *  b7 | note (script 14,red) | T st   | x476..~880 y395..410 (bl 406)
 *  b8 | formula3 (20,w800,g) | T st   | x480..~1000 y440..462 (bl 456)
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("CBSE: the overhead tank", "CBSE: overhead tank")}
        </T>
      </Fade>

      {/* beat 1 — the tank */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 200 260 V 460 H 340 V 260" stroke={INK} sw={2.4} dur={0.9} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 200 260 q 17 -8 35 0 q 17 8 35 0 q 17 -8 35 0 q 17 8 35 0"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />

      {/* beat 2 — labelled: depth, base area, surface pressure */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} d="M 180 262 H 185 M 180 458 H 185 M 180 262 V 458" stroke={INK} sw={1.6} dur={0.6} />
        <T x={165} y={364} size={13} fill={INK} script anchor="end">
          h = 2.5 m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={270} y={478} size={13} fill={MUTED} script>
          A = 0.80 m²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={210} y={252} size={12} fill={MUTED} anchor="start">
          P₀
        </T>
      </Fade>

      {/* beat 3 — gauge pressure */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={480} y={248} size={14} fill={MUTED} script anchor="start">
          {t("(a) gauge pressure = ρgh", "(a) gauge pressure = ρgh")}
        </T>
      </Fade>

      {/* beat 4 — gauge pressure computed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={480} y={282} size={18} fill={INK} weight={700} anchor="start">
          P<TSpan fontSize={12} dy={4}>g</TSpan>
          <TSpan dy={-4}> = 1000 × 10 × 2.5 = 2.5×10⁴ Pa</TSpan>
        </T>
      </Fade>

      {/* beat 5 — absolute pressure */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={480} y={326} size={14} fill={MUTED} script anchor="start">
          {t("(b) absolute = P₀ + gauge", "(b) absolute = P₀ + gauge")}
        </T>
      </Fade>

      {/* beat 6 — absolute pressure computed */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={480} y={362} size={18} fill={INK} weight={700} anchor="start">
          P = 1.0×10⁵ + 0.25×10⁵ = 1.25×10⁵ Pa
        </T>
      </Fade>

      {/* beat 7 — force uses absolute pressure */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 390 L 460 414" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={406} size={14} fill={RED} script anchor="start">
          {t("force on the base uses absolute pressure", "base force ke liye absolute pressure use hota")}
        </T>
      </Fade>

      {/* beat 8 — the force */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={480} y={456} size={20} fill={GREEN} weight={800} anchor="start">
          F = PA = 1.25×10⁵ × 0.80 = 1.0×10⁵ N
        </T>
      </Fade>
    </Scene>
  );
}

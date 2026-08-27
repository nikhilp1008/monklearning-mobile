/**
 * Ch04 · Section 5 — "Derivation: the impulse-momentum theorem"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 24.8, 37.8, 50.2, 69.2, 87.2, 103.9]):
 *  0 title
 *  1 line 1: F = dp⁄dt → ×dt → F·dt = dp + "just rearranged" note
 *  2 line 2: ∫F dt = ∫dp with limits
 *  3 labels: left = impulse J · right collapses to difference
 *  4 hero box: J = p_f − pᵢ = m·v_f − m·vᵢ + EXACT note
 *  5 graph: axes, spiky curve, shaded area, ticks, area label,
 *    dashed same-area curve + note (top right)
 *  6 red + green notes under graph
 *  7 red margin: endpoints only
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L col | b1 st x80 bl 112 sz16 · note st x80 bl 140 · b2 st x80 bl 185 sz16 ·
 *    b3 labels st x80 / x290 bl 218 · hero box x80..470 y250..300 bl 282 ·
 *    exact st x80 bl 326
 *  R graph | vaxis (600,325)→(600,112) · haxis (595,320)→(1015,320) ·
 *    spike peak ~(750,130) x620..890 · area fill same closed ·
 *    ticks t₁(620) t₂(890) bl 338 sz11 · area lbl cx770 bl 362 ·
 *    dashed curve peak y250 · same-kick lbl cx920 bl 155 ·
 *    b6 l1 st x600 bl 400 · l2 st x600 bl 424
 *  b7 | bar x66 y470..545 · lines st x84 bl 492 / 518
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const spike =
    "M 620 320 C 660 315, 680 160, 720 140 C 740 130, 760 130, 780 150 C 820 190, 850 310, 890 320";

  return (
    <Scene>
      {/* beat 0 — three lines, that's all */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "CBSE Derivation 2 — the Impulse-Momentum Theorem",
            "CBSE Derivation 2 — Impulse-Momentum Theorem"
          )}
        </T>
      </Fade>

      {/* beat 1 — rearrange */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={80} y={112} size={16} fill={INK} weight={700} anchor="start">
          F = dp⁄dt&nbsp;&nbsp;→ × dt →&nbsp;&nbsp;F·dt = dp
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={80} y={140} size={12} fill={MUTED} script anchor="start">
          {t("nothing clever yet — just rearranged", "abhi koi chalaki nahi — sirf rearrange")}
        </T>
      </Fade>

      {/* beat 2 — integrate both sides */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={80} y={185} size={16} fill={INK} weight={700} anchor="start">
          ∫ F dt (t₁→t₂)&nbsp;&nbsp;=&nbsp;&nbsp;∫ dp (pᵢ→p_f)
        </T>
      </Fade>

      {/* beat 3 — name the two sides */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={80} y={218} size={13} fill={AMBER_DARK} script anchor="start">
          {t("left side = IMPULSE J", "baayi side = IMPULSE J")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={290} y={218} size={13} fill={AMBER_DARK} script anchor="start">
          {t("right side → p_f − pᵢ", "daayi side → p_f − pᵢ")}
        </T>
      </Fade>

      {/* beat 4 — the theorem */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 92 250 h 366 q 12 0 12 12 v 26 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={270} y={282} size={18} fill={INK} weight={800}>
          J = p_f − pᵢ = m·v_f − m·vᵢ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={80} y={326} size={12} fill={GREEN} script anchor="start">
          {t(
            "EXACT — no assumption about the force at all",
            "EXACT — force ke baare mein koi assumption nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the picture NEET loves */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d={arrowD(600, 325, 600, 112)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.2)}
        d={arrowD(595, 320, 1015, 320)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={585} y={128} size={14} fill={INK} weight={700}>
          F
        </T>
        <T x={1024} y={340} size={14} fill={INK} weight={700}>
          t
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2)} d={spike} stroke={RED} sw={2.6} dur={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <Path d={`${spike} Z`} fill={AMBER} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={620} y={338} size={11} fill={INK} weight={600}>
          t₁
        </T>
        <T x={890} y={338} size={11} fill={INK} weight={600}>
          t₂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={770} y={362} size={14} fill={AMBER_DARK} script>
          {t("impulse J = AREA under F–t", "impulse J = F–t ke neeche ka AREA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <Path
          d="M 620 320 C 700 250, 810 250, 890 320"
          fill="none"
          stroke={GREEN}
          strokeWidth={2.2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10.5)}>
        <T x={920} y={155} size={12} fill={GREEN} script>
          {t(
            "different curve, same area — same kick",
            "alag curve, same area — same kick"
          )}
        </T>
      </Fade>

      {/* beat 6 — unknowable force, knowable area */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={600} y={400} size={13} fill={RED} script anchor="start">
          {t(
            "the spiky force: unknowable at each microsecond",
            "spiky force: har microsecond par unknowable"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={600} y={424} size={13} fill={GREEN} script anchor="start">
          {t(
            "but the AREA is knowable — momentum at the endpoints",
            "par AREA pata hai — endpoints par momentum naap lo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the whole power */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={492} size={14} fill={RED} script anchor="start">
          {t(
            "we never needed the messy force — we sidestepped it completely",
            "gandi force ki zaroorat hi nahi padi — poori tarah bypass"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={518} size={14} fill={GREEN} script anchor="start">
          {t(
            "only where momentum STARTED and where it ENDED",
            "sirf ye chahiye: momentum kahan SHURU hua, kahan KHATAM"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

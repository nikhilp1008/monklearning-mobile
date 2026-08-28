/**
 * Ch13 · Section 58 — "Cheat sheet: the memory hooks" (closes the chapter)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.95, 21.07, 34.19, 44.92, 58.04, 73.14, 81.09]):
 *  0 shelf
 *  1 hero (high): MAX at MEAN — speed max at mean, accel max at extremes, a opposes x
 *  2 hero (high): SQUARE THE SWING — energy ∝A², K=U at A/√2 not A/2
 *  3 hero (high): ALLEGIANCES — pendulum feels g_eff, spring feels only k
 *  4 hero (high): DAMPING TRIO — resonance=matching rhythm, E fades 2×, high-Q rings ~Q/2π
 *  5 hero (high): ONE TEST RULES ALL — SHM ⇔ ẍ=-ω²x
 *  6 period-twins: √(L/g), √(h/g), √(R/g) — pendulum, float, planet
 *  7 closing: carry these hooks, the whole chapter stays at your fingertips
 *
 * Layout plan (chip x70 w170 h32, script=false; explanation x260):
 *  b0 | shelf y80 x60..1020
 *  b1 | chip y98 · st x260 bl118 size13
 *  b2 | chip y142 · st x260 bl162 size13
 *  b3 | chip y200 · st x260 bl220 size13
 *  b4 | chip y258 · st x260 bl278 size13
 *  b5 | chip y316 · st x260 bl336 size13
 *  b6 | st x70 bl390 size13
 *  b7 | box x80..1000 y470..530 rx18 · line cx540 bl505 size16
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Hooks to carry into the exam hall", "Exam hall mein le jaane wale hooks")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — MAX at MEAN */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={70} y={98} w={170} h={32} fill={AMBER_DARK} textFill={CREAM} size={12} script={false}>
          MAX at MEAN
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={260} y={118} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "speed max at mean, accel max at extremes — a always opposes x, points home",
            "speed mean par max, accel extremes par max — a hamesha x ke opposite, home ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 2 — SQUARE THE SWING */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={70} y={142} w={170} h={32} fill={GREEN_DARK} textFill={CREAM} size={12} script={false}>
          SQUARE THE SWING
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={260} y={162} size={13} fill={INK} anchor="start" weight={700}>
          energy ∝ A² ; K=U at A/√2, not A/2
        </T>
      </Fade>

      {/* beat 3 — ALLEGIANCES */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={70} y={200} w={170} h={32} fill={AMBER_DARK} textFill={CREAM} size={12} script={false}>
          ALLEGIANCES
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={260} y={220} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "pendulum feels g_eff; spring feels only k — parallel stiffer, series soft",
            "pendulum g_eff mehsoos karta hai; spring sirf k — parallel stiffer, series soft"
          )}
        </T>
      </Fade>

      {/* beat 4 — DAMPING TRIO */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={70} y={258} w={170} h={32} fill={RED} textFill={CREAM} size={12} script={false}>
          DAMPING TRIO
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={260} y={278} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "resonance = matching rhythm; E fades 2× faster than A; high-Q rings ~Q/2π times",
            "resonance = rhythm match; E, A se 2× fast fade hoti; high-Q ~Q/2π baar ring karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — ONE TEST RULES ALL */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={70} y={316} w={170} h={32} fill={INK} textFill={CREAM} size={12} script={false}>
          ONE TEST RULES ALL
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={260} y={336} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "SHM ⇔ ẍ=-ω²x — find that line, the period falls out",
            "SHM ⇔ ẍ=-ω²x — wo line dhoondo, period nikal aata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the period-twins */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={390} size={13} fill={INK} anchor="start" weight={700}>
          period-twins: √(L/g), √(h/g), √(R/g) — pendulum, float, planet
        </T>
      </Fade>

      {/* beat 7 — the closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 98 470 h 884 q 18 0 18 18 v 24 q 0 18 -18 18 h -884 q -18 0 -18 -18 v -24 q 0 -18 18 -18"
          stroke={GREEN}
          sw={2.6}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={505} size={16} fill={INK} weight={800}>
          {t(
            "carry these hooks and the whole Oscillations chapter stays at your fingertips",
            "ye hooks saath rakho aur poora Oscillations chapter tumhari ungliyon par rahega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

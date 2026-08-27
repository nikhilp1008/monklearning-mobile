/**
 * Ch02 · Section 33 — "Derivation 1: v = u + at, from the definition of acceleration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.9, 35.7, 60.5, 70, 94.8, 102.5, 127.3]):
 *  0 title
 *  1 setup card: constant a · u → v over t, displacement s
 *  2 a = dv/dt (a number) ⇒ dv = a dt
 *  3 the integral line
 *  4 evaluate: v − u = at + "came out only because constant"
 *  5 result box v = u + at, double underline
 *  6 mini v-t graph + red note: linear growth, intercept u, slope a
 *  7 green: gains a every second — bookkeeping
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | card x80..1000 y85..145 · line cx540 bl 122
 *  b2 | st x110 bl 190 / 226 · b3 | st x110 bl 268
 *  b4 | st x110 bl 310 · note st x110 bl 340
 *  b5 | box x110..480 y365..425 · formula cx295 bl 402 · underline y412
 *  b6 | axes M660,340 V190 H980 · line (680,320)→(950,215) · "u" end (664,324) ·
 *       "slope = a" cx830 bl 240 · lines st x620 bl 396 / 420
 *  b7 | bar x66 y472..524 · lines st x84 bl 492 / 518
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — derivations, not tricks */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={22} fill={INK} script>
          {t(
            "Derivation 1 — v = u + at, from the definition",
            "Derivation 1 — v = u + at, definition se"
          )}
        </T>
      </Fade>

      {/* beat 1 — the stage, kept for all three */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 92 85 h 896 q 12 0 12 12 v 36 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={122} size={13} fill={AMBER_DARK} script>
          {t(
            "the stage (for all three): constant a · start at u → after time t: velocity v, displacement s",
            "manch (teeno ke liye): constant a · shuruaat u → samay t baad: velocity v, displacement s"
          )}
        </T>
      </Fade>

      {/* beat 2 — start from the definition */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={110} y={190} size={15} fill={INK} anchor="start" weight={700}>
          {t("a = dv⁄dt — and a is fixed, a number", "a = dv⁄dt — aur a pakka hai, ek number")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={110} y={226} size={15} fill={INK} anchor="start" weight={700}>
          ⇒ dv = a dt
        </T>
      </Fade>

      {/* beat 3 — integrate both sides */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={110} y={268} size={15} fill={INK} anchor="start" weight={700}>
          {t("∫ dv from u to v = ∫ a dt from 0 to t", "∫ dv, u se v tak = ∫ a dt, 0 se t tak")}
        </T>
      </Fade>

      {/* beat 4 — where constant a earns its keep */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={110} y={310} size={15} fill={INK} anchor="start" weight={700}>
          v − u = a·t
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={110} y={340} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "a came OUT of the integral only because it is constant — else this collapses",
            "a integral se BAAHAR isliye aaya kyunki constant hai — warna sab girta"
          )}
        </T>
      </Fade>

      {/* beat 5 — two lines, first equation */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 122 365 h 346 q 12 0 12 12 v 36 q 0 12 -12 12 h -346 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={295} y={402} size={24} fill={INK} weight={800}>
          v = u + at
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d="M 210 412 h 170"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />

      {/* beat 6 — the reason, drawn */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 660 190 V 340 H 980"
        stroke={MUTED}
        sw={1.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 680 320 L 950 215"
        stroke={GREEN}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={664} y={324} size={14} fill={GREEN} anchor="end" weight={700}>
          u
        </T>
        <T x={830} y={240} size={12} fill={GREEN} script>
          {t("slope = a", "slope = a")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={620} y={396} size={12} fill={RED} script anchor="start">
          {t(
            "constant rate ⇒ linear growth: a straight v-t line —",
            "constant raftaar ⇒ seedhi badhat: seedhi v-t line —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={620} y={420} size={12} fill={RED} script anchor="start">
          {t(
            "u the intercept · a the slope (sub-topic 2 again)",
            "u intercept hai · a slope (phir wahi sub-topic 2)"
          )}
        </T>
      </Fade>

      {/* beat 7 — bookkeeping */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 472 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={492} size={13} fill={GREEN} script anchor="start">
          {t(
            "the body gains exactly a of velocity every second — after t, it has gained at",
            "body har second theek a velocity paati hai — t ke baad usne at paaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={518} size={13} fill={GREEN} script anchor="start">
          {t(
            "add it to u and you have v — not memorisation, bookkeeping",
            "use u mein jodo aur v mila — ratta nahi, hisaab-kitaab"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

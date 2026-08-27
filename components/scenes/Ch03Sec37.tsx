/**
 * Ch03 · Section 37 — "JEE Main: when is the velocity along the x-axis?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.9, 32.2, 45.2, 58.6, 70.6, 76.0, 90.8]):
 *  0 heading + problem
 *  1 translate: "along x" ⇒ vy = 0
 *  2 track the components
 *  3 (a) t = 2 s
 *  4 (b) speed = 2 m/s
 *  5 ANSWER box
 *  6 bonus: minimum speed + sweep glyph
 *  7 top-of-arc analogy
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 120 s13 · underline M84 130 h440
 *  b2 | st x104 bl 162 / 190 s14
 *  b3 | st x104 bl 230 s14 · caption st x104 bl 254 s11
 *  b4 | st x104 bl 292 s14
 *  b5 | box x104..560 y316..362 text cx332 bl 348 s16
 *  b6 | lines st x620 bl 162 / 186 s12 · glyph tail (700,420): →(736,332) "t=0" ·
 *       →(770,360) "t=1" · →(800,420) green "t=2" lbl st (808,414)
 *  b7 | bar M66 480 v52 · lines st x84 bl 498 / 522 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
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

export default function Ch03Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE MAIN — when does v point along x?",
            "JEE MAIN — v kab x ke saath point karta hai?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "v₀ = 2î + 4ĵ m/s under a = −2ĵ m/s² — (a) when is v purely along x? (b) speed then?",
            "v₀ = 2î + 4ĵ m/s, a = −2ĵ m/s² — (a) v kab poora x ke saath? (b) tab speed?"
          )}
        </T>
      </Fade>

      {/* beat 1 — translate the words */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={120} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "“along the x-axis” translates to ONE condition: vy = 0",
            "“x-axis ke saath” ka matlab EK condition: vy = 0"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 130 h 440" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — track the components */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={104} y={162} size={14} fill={INK} weight={700} anchor="start">
          {t("vx = 2 — constant (no x-acceleration)", "vx = 2 — constant (x-acceleration nahi)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={104} y={190} size={14} fill={INK} weight={700} anchor="start">
          vy = 4 + (−2)t = 4 − 2t
        </T>
      </Fade>

      {/* beat 3 — part (a) */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={104} y={230} size={14} fill={INK} weight={700} anchor="start">
          (a)  4 − 2t = 0  →  t = 2 s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={104} y={254} size={11} fill={MUTED} script anchor="start">
          {t(
            "the instant v swings round to lie flat along x",
            "wahi pal jab v ghoom kar x par seedha let jata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — part (b) */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={104} y={292} size={14} fill={INK} weight={700} anchor="start">
          (b)  at t = 2:  vx = 2, vy = 0  →  speed = 2 m/s
        </T>
      </Fade>

      {/* beat 5 — the answers */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 116 316 h 432 q 12 0 12 12 v 22 q 0 12 -12 12 h -432 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={332} y={348} size={16} fill={INK} weight={800}>
          t = 2 s · speed = 2 m/s
        </T>
      </Fade>

      {/* beat 6 — the bonus insight */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={620} y={162} size={12} fill={GREEN} script anchor="start">
          {t(
            "bonus: this is also the instant of MINIMUM speed",
            "bonus: yahi pal MINIMUM speed ka bhi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={620} y={186} size={12} fill={GREEN} script anchor="start">
          {t(
            "speed = √(4 + (4−2t)²) — smallest exactly when vy dies",
            "speed = √(4 + (4−2t)²) — sabse chhoti tabhi jab vy mare"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 7)} d={arrowD(700, 420, 736, 332)} stroke={MUTED} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        <T x={742} y={328} size={11} fill={MUTED} weight={700} anchor="start">t = 0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 8.4)} d={arrowD(700, 420, 770, 360)} stroke={INK_LIGHT} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={778} y={358} size={11} fill={INK_LIGHT} weight={700} anchor="start">t = 1</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 9.8)} d={arrowD(700, 420, 800, 420)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 10.4)}>
        <T x={808} y={414} size={11} fill={GREEN} weight={700} anchor="start">
          {t("t = 2 — flat", "t = 2 — seedha")}
        </T>
      </Fade>

      {/* beat 7 — the projectile analogy */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 480 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={498} size={12} fill={GREEN} script anchor="start">
          {t(
            "the same logic as a projectile being slowest at the TOP of its arc",
            "wahi logic jaise projectile apne arc ke TOP par sabse dheema hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={522} size={12} fill={INK} script anchor="start">
          {t(
            "vy momentarily zero — only the horizontal part remains",
            "vy pal bhar ke liye zero — sirf horizontal hissa bachta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

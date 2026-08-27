/**
 * Ch06 · Section 30 — "Worked example: bullet embeds in a pivoted rod [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.1, 39.08, 49.41, 66.22, 75.86, 93.44, 102.91]):
 *  0 title + problem subline
 *  1 figure: pivot, rod, bullet arrow at free end, ω arc, zero-arm label + leader
 *  2 setup lines (right)
 *  3 green conserve-about-pivot note
 *  4 L_i = mvL
 *  5 I_f lines
 *  6 green ω result box
 *  7 red KE-not-conserved note (left bottom)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | pivot c(200,220) r10+dot · rod (210,220)→(480,220) sw5 · bullet dot
 *       (480,320) r5 + arrow (480,305)→(480,240) red · "m, v" st(494,280) ·
 *       ω arc M508,200 A45→(478,152) amber · label script12 cx240 bl 300 ·
 *       leader arrowD(185,285,200,236)
 *  b2 | sans14 st x620 bl 150 / bl 180
 *  b3 | green bar x600 y210..280 · L1 st x618 bl 233 · L2 st x618 bl 261
 *  b4 | sans16 st x620 bl 320
 *  b5 | sans15 st x620 bl 360 / bl 395
 *  b6 | green box x620..1010 y420..480 · cx815 bl 456
 *  b7 | red bar x66 y430..500 · L1 st x84 bl 453 · L2 st x84 bl 481
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the collision with rotation */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "bullet embeds in a pivoted rod [JEE Advanced]",
            "pivoted rod mein bullet dhansti hai [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "rod M, L pivoted at one end · bullet m, v embeds at the free end — ω just after?",
            "rod M, L ek sire par pivoted · bullet m, v free end par dhansti — theek baad ω?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the whole insight in one picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 190 220 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0 M 197 220 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0"
        stroke={INK}
        fill="none"
        sw={2.2}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 210 220 H 480" stroke={INK} sw={5} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d="M 475 320 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={arrowD(480, 305, 480, 240)} stroke={RED} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={494} y={280} size={13} fill={RED} anchor="start" weight={700}>
          m, v
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 508 200 A 45 45 0 0 0 478 152 M 490 158 L 478 152 L 481 165"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={240} y={300} size={12} fill={GREEN_DARK} script>
          {t(
            "pivot force: arm 0 ⇒ torque 0 ✓",
            "pivot force: arm 0 ⇒ torque 0 ✓"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 9.5)}
        d={arrowD(185, 285, 200, 236)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />

      {/* beat 2 — the setup */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={620} y={150} size={14} fill={INK} anchor="start" weight={700}>
          {t("rod: M, L — pivoted at one end", "rod: M, L — ek sire par pivoted")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={620} y={180} size={14} fill={INK} anchor="start" weight={700}>
          {t("bullet: m, v ⊥ rod — embeds at the free end", "bullet: m, v ⊥ rod — free end par dhansti")}
        </T>
      </Fade>

      {/* beat 3 — the trick */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 600 210 v 70" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={618} y={233} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "conserve L ABOUT THE PIVOT —",
            "L conserve karo PIVOT KE BAARE MEIN —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={618} y={261} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "the trick: the pivot force has zero torque there",
            "trick: pivot force ka wahan torque zero hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — before */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={620} y={320} size={16} fill={INK} anchor="start" weight={700}>
          L
          <Sub>i</Sub>
          <Up> = m v L</Up>
        </T>
      </Fade>

      {/* beat 5 — after */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={620} y={360} size={15} fill={INK} anchor="start" weight={700}>
          I
          <Sub>f</Sub>
          <Up> = ML²/3 + mL²</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={620} y={395} size={15} fill={INK} anchor="start" weight={700}>
          mvL = (ML²/3 + mL²) ω
        </T>
      </Fade>

      {/* beat 6 — solve */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 632 420 h 366 q 12 0 12 12 v 36 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={815} y={456} size={18} fill={INK} weight={700}>
          ω = 3mv / L(M + 3m)
        </T>
      </Fade>

      {/* beat 7 — why not energy */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 430 v 70" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={453} size={13} fill={RED} script anchor="start">
          {t(
            "kinetic energy is NOT conserved — it sticks",
            "kinetic energy conserved NAHI — chipak jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={481} size={13} fill={RED} script anchor="start">
          {t(
            "sticking collision → reach for conserved L, never energy",
            "chipakne wali collision → conserved L pakdo, energy nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

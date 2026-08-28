/**
 * Ch06 · Section 58 — "Worked example: mass on a string over a pulley [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,18.09,28.59,36.1,52.57,65.11,79.36,89.43] — b7 fast in EN;
 * hi [0,1,2,3,4,5,6,16.58] — b0..b5 fast in HI → b0..b5 and b7 kept ≤0.9 s;
 * b6 has room in both languages):
 *  0 title + subline
 *  1 figure: pulley + hanging block m, T and mg arrows, a=αR note
 *  2 two bodies, two equations
 *  3 block: mg−T=ma · pulley: TR=Iα=(½MR²)α
 *  4 constraint: a = αR (the key link)
 *  5 substitute: T=½Ma, mg−½Ma=ma
 *  6 green box: a = mg/(m+M/2) = 2mg/(2m+M)
 *  7 insight: a<g, M→0 gives free fall
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | pulley c(230,140) r45 · crosshair centre · string (275,140)→(275,210) ·
 *       block x255..295 y210..250 "m" cx275 bl234 · T arrow (275,178)→(275,155)
 *       "T" st(283,168) · mg arrow (275,250)→(275,280) "mg" st(283,272) ·
 *       "a = αR" end(150,140)
 *  b2 | script13 cx540 bl300
 *  b3 | sans13 st x80 bl330 / bl358
 *  b4 | sans14 st x80 bl390
 *  b5 | sans14 st x80 bl420 / bl445
 *  b6 | green box x560..1000 y460..515 cx780 bl492
 *  b7 | script12 cx540 bl545
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the coupled block-and-pulley */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "mass on a string over a pulley [JEE Advanced]",
            "pulley par string se latka mass [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "block m, pulley: disc M, R — find a as the block falls",
            "block m, pulley: disc M, R — girte block ka a nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup, and the non-slip fact */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 185 140 a 45 45 0 1 0 90 0 a 45 45 0 1 0 -90 0"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 230 140 a 4 4 0 1 0 0.1 0 M 224 140 h -6 M 236 140 h 6 M 230 134 v -6 M 230 146 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 275 140 V 210" stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 255 210 h 40 v 40 h -40 z"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={275} y={234} size={14} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(275, 178, 275, 155)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={283} y={168} size={11} fill={INK} anchor="start" weight={700}>
          T
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(275, 250, 275, 280)} stroke={MUTED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.85)}>
        <T x={283} y={272} size={11} fill={MUTED} anchor="start" weight={700}>
          mg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={150} y={140} size={12} fill={GREEN_DARK} anchor="end" weight={700}>
          a = αR
        </T>
      </Fade>

      {/* beat 2 — two bodies, two equations */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={300} size={13} fill={INK} script>
          {t(
            "two bodies ⇒ two equations",
            "do bodies ⇒ do equations"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two Newton laws */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={80} y={330} size={13} fill={INK} anchor="start" weight={700}>
          {t("block: ", "block: ")}mg − T = ma
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={80} y={358} size={13} fill={INK} anchor="start" weight={700}>
          {t("pulley: ", "pulley: ")}TR = Iα = (½MR²)α
        </T>
      </Fade>

      {/* beat 4 — the key link */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={390} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          {t(
            "non-slip constraint: a = αR — marries the two",
            "non-slip constraint: a = αR — dono ko jodta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={80} y={420} size={14} fill={INK} anchor="start" weight={700}>
          T = ½Ma
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={445} size={14} fill={INK} anchor="start" weight={700}>
          mg − ½Ma = ma
        </T>
      </Fade>

      {/* beat 6 — the acceleration */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 572 460 h 416 q 12 0 12 12 v 31 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN_DARK}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={780} y={492} size={17} fill={INK} weight={700}>
          a = mg/(m+M/2) = 2mg/(2m+M)
        </T>
      </Fade>

      {/* beat 7 — the insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={545} size={12} fill={GREEN_DARK} script>
          {t(
            "a < g — the pulley's own inertia holds it back · M→0 recovers free fall ✓",
            "a < g — pulley ki apni inertia rokti hai · M→0 se free fall wapas ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

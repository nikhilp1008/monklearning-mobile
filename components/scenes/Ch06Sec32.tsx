/**
 * Ch06 · Section 32 — "Two conditions for a body to stay still"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.9, 30.46, 40.02, 51.71, 65.62, 66.62, 76.61] — b5 is 1 s in EN):
 *  0 title
 *  1 cupboard demo: rect, top push →, bottom push ←, red topple arc,
 *    "ΣF = 0 yet it topples" label
 *  2 point-particle recall (right top)
 *  3 size → rotation line + couple sub
 *  4 green box 1: ΣF = 0 translational
 *  5 green box 2: Στ = 0 rotational (instant)
 *  6 red cross-case lines
 *  7 green verdict + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | rect x150..300 y130..330 · top arrow (95,150)→(145,150) · bottom arrow
 *       (355,310)→(305,310) · topple arc M320,115 A70→(392,172) red ·
 *       label script13 cx250 bl 370
 *  b2 | dot (600,150) r6 · arrows (540,150)→(588,150)/(660,150)→(612,150) ·
 *       label script12 cx640 bl 190
 *  b3 | script13 st x520 bl 240 · sub script11 st x540 bl 266
 *  b4 | green box x520..1010 y295..355 · sans16 cx765 bl 322 · sub script11 cx765 bl 344
 *  b5 | green box x520..1010 y375..435 · bl 402 · sub bl 424
 *  b6 | red script13 st x520 bl 475 / bl 503
 *  b7 | green script13 st x80 bl 560 · underline y580 x80..620
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the opposite question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t(
            "two conditions to stay perfectly still",
            "bilkul sthir rehne ki do sharten"
          )}
        </T>
      </Fade>

      {/* beat 1 — the cupboard that topples */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 150 130 h 150 v 200 h -150 z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={arrowD(95, 150, 145, 150)} stroke={AMBER} sw={3} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={arrowD(355, 310, 305, 310)} stroke={AMBER} sw={3} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 320 115 A 70 70 0 0 1 392 172 M 388 158 L 392 172 L 378 168"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={250} y={370} size={13} fill={RED} script>
          {t("ΣF = 0 — yet it TOPPLES!", "ΣF = 0 — phir bhi GIRTA hai!")}
        </T>
      </Fade>

      {/* beat 2 — the particle's simple life */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 594 150 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(540, 150, 588, 150)} stroke={MUTED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={arrowD(660, 150, 612, 150)} stroke={MUTED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={640} y={190} size={12} fill={MUTED} script>
          {t(
            "a point particle: ΣF = 0 was the whole story",
            "point particle: ΣF = 0 hi poori kahani thi"
          )}
        </T>
      </Fade>

      {/* beat 3 — size changes everything */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={520} y={240} size={13} fill={INK} script anchor="start">
          {t(
            "a rigid body has SIZE — it can rotate even with ΣF = 0",
            "rigid body ka SIZE hai — ΣF = 0 par bhi ghoom sakti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={540} y={266} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "two equal, opposite pushes = a couple",
            "do barabar, ulte pushes = ek couple"
          )}
        </T>
      </Fade>

      {/* beat 4 — condition 1 */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 532 295 h 466 q 12 0 12 12 v 36 q 0 12 -12 12 h -466 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={765} y={322} size={16} fill={INK} weight={700}>
          {t("1 · ΣF = 0 — translational equilibrium", "1 · ΣF = 0 — translational equilibrium")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={765} y={344} size={11} fill={GREEN_DARK} script>
          {t("the CoM does not accelerate — no drifting", "CoM accelerate nahi karta — koi drift nahi")}
        </T>
      </Fade>

      {/* beat 5 — condition 2 (1 s in EN) */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M 532 375 h 466 q 12 0 12 12 v 36 q 0 12 -12 12 h -466 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={765} y={402} size={16} fill={INK} weight={700}>
          {t("2 · Στ = 0 — rotational equilibrium", "2 · Στ = 0 — rotational equilibrium")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={765} y={424} size={11} fill={GREEN_DARK} script>
          {t("no spinning starts — no topple, no twist", "spin shuru nahi hota — na girna, na mudna")}
        </T>
      </Fade>

      {/* beat 6 — the cross cases */}
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={520} y={475} size={13} fill={RED} script anchor="start">
          {t("forces ✓ but torques ✗ → it SPINS", "forces ✓ par torques ✗ → GHOOMEGI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={520} y={503} size={13} fill={RED} script anchor="start">
          {t("torques ✓ but forces ✗ → it SLIDES", "torques ✓ par forces ✗ → SARKEGI")}
        </T>
      </Fade>

      {/* beat 7 — both must vanish */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={80} y={560} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "BOTH must vanish — truly at rest: every bridge, shelf bracket and seesaw runs on this",
            "DONO gayab hon — tabhi sach mein at rest: har bridge, bracket aur seesaw isi par chalta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5)} d="M 80 580 h 640" stroke={GREEN} sw={2.2} dur={0.7} />
    </Scene>
  );
}

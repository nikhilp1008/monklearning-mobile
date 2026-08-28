/**
 * Ch04 · Section 44 — "Worked Example 3 [JEE Main]: table, pulley and hanging block"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.8, 35.6, 54.1, 78.9, 96.0, 114.9, 131.6, 144.4]):
 *  0 title
 *  1 problem + find
 *  2 figure: table, 3 kg block, pulley, string, 2 kg hanging + shared a/T note
 *  3 the does-it-move check: 20 N vs 6 N → moves
 *  4 hanging-block equation
 *  5 table-block equation (kinetic, because step 1 said sliding)
 *  6 add → a = 2.8 box
 *  7 back-substitute → T = 14.4 box
 *  8 red margin: T < m₂g must hold; T > m₂g means a sign error
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | table top M120 250 H420 + legs · block x220..300 y206..250 "3 kg" cx260 bl 234 ·
 *    string M300 228 H420 · pulley c(428,228) r10 · hang M438 228 V330 ·
 *    block2 x400..476 y330..390 "2 kg" cx438 bl 366 · note cx280 bl 300
 *  R col | b3 st x540 bl 130 / 154 · b4 bl 200 · b5 bl 240 ·
 *    b6 line bl 292 box x780..980 y268..306 bl 292 ·
 *    b7 line bl 344 box x780..980 y320..358 bl 344
 *  b8 | bar x66 y440..545 · lines st x84 bl 460 / 486 / 512 / 536
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

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — the table, the pulley and the hanging block",
            "Example 3 [JEE Main] — table, pulley aur latka block"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "3 kg on a rough table (μ = 0.2) · light string over a frictionless pulley · 2 kg hangs · g = 10",
            "rough table par 3 kg (μ = 0.2) · frictionless pulley par halki string · 2 kg latka · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: the acceleration a and the tension T", "nikaalo: acceleration a aur tension T")}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 120 250 H 420 M 150 250 V 340 M 400 250 V 340"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M 220 206 h 80 v 44 h -80 z"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={260} y={234} size={13} fill={INK} weight={700}>
          3 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.4)}
        d={`M 300 228 H 420 ${circleD(428, 228, 10)} M 438 228 V 330`}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d="M 400 330 h 76 v 60 h -76 z"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={438} y={366} size={13} fill={INK} weight={700}>
          2 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={250} y={300} size={12} fill={AMBER_DARK} script>
          {t(
            "the pulley turns T, it does not change it — one a, one T",
            "pulley T ki disha modti hai, size nahi — ek a, ek T"
          )}
        </T>
      </Fade>

      {/* beat 3 — does it move at all? */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={130} size={13} fill={RED} script anchor="start">
          {t(
            "STEP 1 (never skip): driving = m₂g = 20 N · resisting = μm₁g = 6 N",
            "STEP 1 (kabhi mat chhodo): chalane waali = m₂g = 20 N · rokne waali = μm₁g = 6 N"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={540} y={154} size={13} fill={GREEN} script anchor="start">
          {t(
            "20 > 6 ⇒ it really slides — so kinetic friction applies below",
            "20 > 6 ⇒ sach mein sarkega — to neeche kinetic friction lagegi"
          )}
        </T>
      </Fade>

      {/* beat 4 — hanging block */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={200} size={15} fill={INK} weight={700} anchor="start">
          {t("hanging (down +):  20 − T = 2a", "latka (neeche +):  20 − T = 2a")}
        </T>
      </Fade>

      {/* beat 5 — table block */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={240} size={15} fill={INK} weight={700} anchor="start">
          {t("table (forward +):  T − 6 = 3a", "table (aage +):  T − 6 = 3a")}
        </T>
      </Fade>

      {/* beat 6 — add */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={292} size={14} fill={INK} weight={700} anchor="start">
          {t("add ⇒ T cancels: 20 − 6 = 5a", "jodo ⇒ T cancel: 20 − 6 = 5a")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d="M 792 268 h 176 q 12 0 12 12 v 14 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <T x={880} y={292} size={16} fill={INK} weight={800}>
          a = 2.8 m⁄s²
        </T>
      </Fade>

      {/* beat 7 — back-substitute */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={344} size={14} fill={INK} weight={700} anchor="start">
          T = 6 + 3(2.8)
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 4)}
        d="M 792 320 h 176 q 12 0 12 12 v 14 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={880} y={344} size={16} fill={INK} weight={800}>
          T = 14.4 N
        </T>
      </Fade>

      {/* beat 8 — the free check */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 440 v 106" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={460} size={14} fill={RED} script anchor="start">
          {t(
            "five-second check: T = 14.4 N is LESS than m₂g = 20 N ✓",
            "paanch second ka check: T = 14.4 N, m₂g = 20 N se KAM hai ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={486} size={14} fill={RED} script anchor="start">
          {t(
            "it must be — the hanging block accelerates DOWN, so the upward pull cannot win",
            "hona hi chahiye — latka block NEECHE accelerate karta hai, upar ki khinchai jeet nahi sakti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={84} y={512} size={14} fill={RED} script anchor="start">
          {t(
            "T > m₂g here means a SIGN ERROR — no later arithmetic will fix it",
            "yahan T > m₂g ka matlab SIGN ki galti — aage ki arithmetic use theek nahi karegi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 20)}>
        <T x={84} y={536} size={14} fill={GREEN} script anchor="start">
          {t(
            "if step 1 had failed: nothing moves, a = 0, friction = whatever the string demands",
            "agar step 1 fail hota: kuchh nahi hilta, a = 0, friction utni jitni string maange"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch04 · Section 21 — "Worked Example 3 [JEE Main]: bullet, block and spring"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.7, 32.6, 43.5, 53.0, 68.2, 85.4, 108.8, 109.8]):
 *  0 title
 *  1 problem + find
 *  2 figure: bullet → block — spring — wall, stage labels
 *  3 red margin: inelastic → momentum only, order matters
 *  4 stage-1 numbers → v = 1 m/s box + kind-numbers note
 *  5 stage-2 line: now energy, frictionless
 *  6 stage-2 numbers → x = 5 cm box
 *  7 red margin: energy through collision = wrong with beautiful handwriting
 *  8 slogan chip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | bullet x470..500 y194..206 · arr (505,200)→(600,200) · "200 m⁄s" cx550 bl 182 ·
 *    "10 g" cx485 bl 232 · block x640..760 y170..230 "1.99 kg" cx700 bl 205 ·
 *    spring zigzag 760→876 y200 · wall x880 y160..240 + hatches ·
 *    stage lbls cx520 / cx800 bl 260
 *  b3 | bar x66 y285..340 · lines st x84 bl 305 / 329
 *  b4 line st x120 bl 372 · box x360..560 y348..386 bl 372 · note st x580 bl 372
 *  b5 st x120 bl 416 · b6 line st x120 bl 456 · box x560..760 y432..470 bl 456
 *  b7 | bar x66 y490..545 · lines st x84 bl 510 / 534
 *  b8 chip x310..770 y558..592
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — bullet, block and spring",
            "Example 3 [JEE Main] — bullet, block aur spring"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "bullet 10 g at 200 m⁄s embeds in a 1.99 kg block · frictionless · spring k = 800 N⁄m",
            "bullet 10 g, 200 m⁄s par, 1.99 kg block mein dhansti hai · frictionless · spring k = 800 N⁄m"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: maximum compression of the spring",
            "nikaalo: spring ka maximum compression"
          )}
        </T>
      </Fade>

      {/* beat 2 — two stages */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 470 194 h 30 v 12 h -30 z"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d={arrowD(505, 200, 600, 200)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={550} y={182} size={13} fill={GREEN} script>
          200 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={485} y={232} size={12} fill={INK} script>
          10 g
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d="M 640 170 h 120 v 60 h -120 z"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={700} y={205} size={13} fill={INK} weight={700}>
          1.99 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.2)}
        d="M 760 200 l 12 -12 l 16 24 l 16 -24 l 16 24 l 16 -24 l 16 24 l 12 -12 M 880 160 V 240 M 880 168 l 10 -8 M 880 188 l 10 -8 M 880 208 l 10 -8 M 880 228 l 10 -8"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={520} y={260} size={12} fill={AMBER_DARK} script>
          {t("stage 1: the collision", "stage 1: collision")}
        </T>
        <T x={800} y={260} size={12} fill={AMBER_DARK} script>
          {t("stage 2: the spring", "stage 2: spring")}
        </T>
      </Fade>

      {/* beat 3 — momentum only */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 285 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={305} size={14} fill={RED} script anchor="start">
          {t(
            "bullet EMBEDS → perfectly inelastic → momentum ONLY here",
            "bullet DHANS gayi → perfectly inelastic → yahan sirf momentum"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={329} size={14} fill={RED} script anchor="start">
          {t(
            "two stages, two laws — and the ORDER matters",
            "do stages, do laws — aur KRAM mayne rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — stage 1 numbers */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={120} y={372} size={15} fill={INK} weight={700} anchor="start">
          0.01 × 200 = 2.00 · v
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d="M 372 348 h 176 q 12 0 12 12 v 14 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={460} y={372} size={17} fill={INK} weight={800}>
          v = 1 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={580} y={372} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "total mass exactly 2 kg — kindly chosen numbers",
            "total mass theek 2 kg — meharbaani se chune numbers"
          )}
        </T>
      </Fade>

      {/* beat 5 — now, and only now, energy */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={120} y={416} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "stage 2 — NOW use energy: frictionless, so all KE → spring PE at max squeeze",
            "stage 2 — AB energy lagao: frictionless, to saari KE → max squeeze par spring PE"
          )}
        </T>
      </Fade>

      {/* beat 6 — stage 2 numbers */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={120} y={456} size={15} fill={INK} weight={700} anchor="start">
          ½·2·1² = ½·800·x²&nbsp;&nbsp;⇒&nbsp;&nbsp;x² = 0.0025
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 572 432 h 176 q 12 0 12 12 v 14 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 8.6)}>
        <T x={660} y={456} size={17} fill={INK} weight={800}>
          x = 5 cm
        </T>
      </Fade>

      {/* beat 7 — the critical insight */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 490 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={510} size={14} fill={RED} script anchor="start">
          {t(
            "energy through the collision ✗ — heat, sound and splinters ate some KE",
            "collision ke aar-paar energy ✗ — heat, sound, tooti lakdi KE kha gaye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={84} y={534} size={14} fill={RED} script anchor="start">
          {t(
            "½m_bu² = ½kx² gives a beautifully written WRONG answer",
            "½m_bu² = ½kx² se sundar handwriting mein GALAT answer aata"
          )}
        </T>
      </Fade>

      {/* beat 8 — the slogan */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <Chip x={310} y={558} w={460} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "momentum through the IMPACT · energy through the SPRING",
            "IMPACT ke paar momentum · SPRING ke paar energy"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

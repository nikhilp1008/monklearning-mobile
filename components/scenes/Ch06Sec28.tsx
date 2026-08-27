/**
 * Ch06 · Section 28 — "Worked example: spinning dancer energy ratio [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 9.87, 25.32, 34.28, 49.13, 69.27, 77.37] — b0 is 1 s in EN;
 * hi b2..b4 are ~1 s → short staggers there):
 *  0 title + problem subline
 *  1 trade figure: [I, ω] card → arrow → [2I/5, ω′ = ?] card
 *  2 red trap: KE not conserved, muscles do work
 *  3 conserve-L line
 *  4 ω′ = 2.5ω line + amber underline
 *  5 K = L²/2I ratio line
 *  6 green K ∝ 1/I line
 *  7 green verdict box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | card1 x120..320 y130..194 "I , ω" cx220 bl 168 · arrow (340,162)→(420,162) ·
 *       card2 x440..680 y130..194 "2I/5 , ω′ = ?" cx560 bl 168
 *  b2 | red bar x66 y230..300 · L1 st x84 bl 253 · L2 st x84 bl 281
 *  b3 | sans16 st x80 bl 340
 *  b4 | sans16 st x80 bl 390 · underline y403 x80..420 amber
 *  b5 | sans16 st x80 bl 440
 *  b6 | script13 st x80 bl 480
 *  b7 | green box x120..960 y505..570 · L1 sans17 cx540 bl 532 · L2 script12 cx540 bl 558
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

export default function Ch06Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the trap is about energy */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "spinning dancer — energy ratio [NEET speed trap]",
            "ghoomti dancer — energy ratio [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "arms in: I → 2I/5 — find ω′ and K′/K",
            "baahein andar: I → 2I/5 — ω′ aur K′/K nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the trade */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 132 130 h 176 q 12 0 12 12 v 40 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -40 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={220} y={168} size={18} fill={INK} weight={700}>
          I ,  ω
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(340, 162, 420, 162)} stroke={INK} sw={2.4} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 452 130 h 216 q 12 0 12 12 v 40 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -40 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={560} y={168} size={18} fill={INK} weight={700}>
          2I/5 ,  ω′ = ?
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 230 v 70" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={253} size={13} fill={RED} script anchor="start">
          {t(
            "TRAP: kinetic energy is NOT conserved here",
            "TRAP: kinetic energy yahan conserved NAHI hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={281} size={13} fill={RED} script anchor="start">
          {t(
            "the muscles do work — only L is conserved",
            "muscles work karti hain — sirf L conserved hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — conserve L (short in HI) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={340} size={16} fill={INK} anchor="start" weight={700}>
          {t("conserve L :  I ω = I′ ω′ ,   I′ = 2I/5", "L conserve karo :  I ω = I′ ω′ ,   I′ = 2I/5")}
        </T>
      </Fade>

      {/* beat 4 — the new spin */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={390} size={16} fill={INK} anchor="start" weight={700}>
          Iω = (2I/5) ω′  ⇒  ω′ = (5/2) ω = 2.5 ω
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 80 403 h 340" stroke={AMBER} sw={2.2} dur={0.4} />

      {/* beat 5 — the energy ratio */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={80} y={440} size={16} fill={INK} anchor="start" weight={700}>
          K = L²/2I , L fixed  ⇒  K′/K = I/I′ = 5/2 = 2.5
        </T>
      </Fade>

      {/* beat 6 — in words */}
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={80} y={480} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "L fixed ⇒ K ∝ 1/I — smaller I, bigger energy",
            "L fixed ⇒ K ∝ 1/I — chhota I, badi energy"
          )}
        </T>
      </Fade>

      {/* beat 7 — the verdict */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 132 505 h 816 q 12 0 12 12 v 41 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={532} size={17} fill={INK} weight={700}>
          ω′ = 2.5 ω   ·   K′ = 2.5 K
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={540} y={558} size={12} fill={GREEN_DARK} script>
          {t(
            "the extra energy came from her muscles — not from nowhere ✓",
            "extra energy uski muscles se aayi — kahin se nahi ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch05 · Section 50 — "In every collision, momentum survives"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.5, 44.0, 64.4, 88.2, 106.5, 131.3, 156.2] · dur 173.7;
 *        hi [0, 18.6, 42.7, 64.3, 84.3, 100.1, 124.9, 149.8] · dur 170.6):
 *  0 title + subtitle
 *  1 what a collision is
 *  2 two balls + Newton-III arrows
 *  3 impulses cancel → total p fixed
 *  4 hero equation chip
 *  5 every collision, no exceptions
 *  6 internal vs external precision
 *  7 reflex band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | cx540 bl112 / bl138
 *  b2 | balls (390,230)/(448,230) r29 · arrows (455,195)→(505,195) / (383,195)→(333,195)
 *     | labels st x510 / end x328 bl200 · script cx420 bl300
 *  b3 | cx420 bl336 / bl362
 *  b4 | "before = after" cx810 bl165 · chip x600..1020 y180..226
 *  b5 | cx810 bl268 / bl294 · b6 | cx810 bl336 / bl362
 *  b7 | bar x66 y430..510 · lines st x84 bl450 / bl476
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("In Every Collision, Momentum Survives", "Har Collision mein Momentum Bachta Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the final subtopic — built on a single unshakeable pillar",
            "aakhri subtopic — ek atal sthambh par bana hua"
          )}
        </T>
      </Fade>

      {/* beat 1 — what a collision is */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={112} size={13} fill={INK} script>
          {t(
            "brief + intense: enormous forces, lasting a few milliseconds",
            "brief + intense: vishal forces, bas kuchh milliseconds"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={138} size={12.5} fill={MUTED} script>
          {t(
            "carrom coins · bat & ball · two cars at a crossing",
            "carrom coins · bat aur ball · chaurahe par do cars"
          )}
        </T>
      </Fade>

      {/* beat 2 — Newton III at contact */}
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 361 230 a 29 29 0 1 0 58 0 a 29 29 0 1 0 -58 0" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 419 230 a 29 29 0 1 0 58 0 a 29 29 0 1 0 -58 0" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={390} y={236} size={14} fill={INK} weight={700}>
          1
        </T>
        <T x={448} y={236} size={14} fill={INK} weight={700}>
          2
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.5)} d={arrowD(455, 195, 505, 195)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={514} y={200} size={13} fill={GREEN} anchor="start" weight={700}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6)} d={arrowD(383, 195, 333, 195)} stroke={RED} sw={2.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.7)}>
        <T x={324} y={200} size={13} fill={RED} anchor="end" weight={700}>
          −F
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={420} y={300} size={13} fill={AMBER_DARK} script>
          {t(
            "Newton III: exactly equal & opposite — always",
            "Newton III: bilkul equal aur opposite — hamesha"
          )}
        </T>
      </Fade>

      {/* beat 3 — impulses cancel */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={420} y={336} size={13} fill={INK} script>
          {t(
            "same duration → equal & opposite impulses → they cancel",
            "same avadhi → equal-opposite impulses → cancel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={420} y={362} size={13} fill={GREEN} script>
          {t(
            "whatever one gains, the other loses — total p fixed",
            "jo ek paata hai, doosra utna khota hai — kul p tay"
          )}
        </T>
      </Fade>

      {/* beat 4 — the hero equation */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={810} y={165} size={13} fill={AMBER_DARK} script>
          {t("total before = total after", "kul pehle = kul baad")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Chip x={600} y={180} w={420} h={46} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
        </Chip>
      </Fade>

      {/* beat 5 — no exceptions */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={810} y={268} size={13} fill={INK} script>
          {t(
            "elastic or inelastic · tap or smash · clay or steel",
            "elastic ya inelastic · halka touch ya takkar · clay ya steel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={810} y={294} size={13} fill={GREEN} script>
          {t(
            "momentum is ALWAYS conserved — never ask, it just is",
            "momentum HAMESHA conserve — poochho mat, bas hota hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — internal vs external */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={810} y={336} size={13} fill={INK} script>
          {t(
            "contact forces are INTERNAL — they can't change total p",
            "contact forces INTERNAL hain — kul p nahi badal sakte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={810} y={362} size={12.5} fill={MUTED} script>
          {t(
            "external (gravity, friction)? a few ms is too brief to matter",
            "external (gravity, friction)? kuchh ms bahut chhote hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the reflex */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 430 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={450} size={13} fill={GREEN} script anchor="start">
          {t(
            "reflex: the FIRST equation of any collision = momentum conservation",
            "reflex: kisi bhi collision ki PEHLI equation = momentum conservation"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={476} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "before energy, before classification — write it down",
            "energy se pehle, classify karne se pehle — likh do"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch02 · Section 38 — "Free-fall forms, odd numbers, and stopping distance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.4, 34.7, 59.6, 68.8, 90.8, 102.3, 119.9, 144.7]):
 *  0 title + framing (not a new set)
 *  1 case-1 chip: dropped, down = +
 *  2 three deletion lines → v = gt · h = ½gt² · v² = 2gh
 *  3 case-2 chip: thrown up, a = −g
 *  4 three flight results
 *  5 odd-numbers chip
 *  6 stopping-distance card (quadratic)
 *  7 red note: 2× speed ⇒ 4× distance
 *  8 green: the list regenerates itself
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  chips y105..138: L x80..520 · R x560..1030
 *  L lines st x110 bl 175/210/245 · R lines st x600 bl 175/210/245
 *  b5 chip x80..520 y285..320 · b6 card x560..1030 y285..360 (bl 318 · sub bl 344)
 *  b7 | bar x66 y392..444 · lines st x84 bl 412 / 438
 *  b8 | bar x56 y470..524 · lines st x72 bl 490 / 516
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "free-fall forms — nothing here is new",
            "free-fall ke roop — yahan kuchh naya nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "every line below is the three equations with a → g and a sign convention — regenerate in 10 s",
            "neeche ki har line teen equations hi hain, a → g aur ek convention — 10 s mein dobara banao"
          )}
        </T>
      </Fade>

      {/* beat 1 — case 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={80} y={105} w={440} h={33} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={12}>
          {t(
            "case 1: dropped · down = + (g > 0, u = 0)",
            "case 1: chhoda hua · neeche = + (g > 0, u = 0)"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — three deletions */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={110} y={175} size={14} fill={INK} anchor="start" weight={700}>
          v = u + at&nbsp;&nbsp;→&nbsp;&nbsp;v = gt
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={110} y={210} size={14} fill={INK} anchor="start" weight={700}>
          s = ut + ½at²&nbsp;&nbsp;→&nbsp;&nbsp;h = ½gt²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={110} y={245} size={14} fill={INK} anchor="start" weight={700}>
          v² = u² + 2as&nbsp;&nbsp;→&nbsp;&nbsp;v² = 2gh
        </T>
      </Fade>

      {/* beat 3 — case 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={560} y={105} w={470} h={33} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12}>
          {t(
            "case 2: thrown up at u · up = + (a = −g)",
            "case 2: u se upar phenka · upar = + (a = −g)"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the flight, one line each */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={600} y={175} size={14} fill={INK} anchor="start" weight={700}>
          {t("H_max = u² ⁄ 2g   (v = 0 at the top)", "H_max = u² ⁄ 2g   (choti par v = 0)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={600} y={210} size={14} fill={INK} anchor="start" weight={700}>
          t_up = u ⁄ g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={600} y={245} size={14} fill={INK} anchor="start" weight={700}>
          {t("T_flight = 2u ⁄ g   (symmetry × 2)", "T_flight = 2u ⁄ g   (symmetry × 2)")}
        </T>
      </Fade>

      {/* beat 5 — the odds, filed */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={80} y={285} w={440} h={35} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "odd numbers from rest: 1 : 3 : 5 : 7 …",
            "rest se odd numbers: 1 : 3 : 5 : 7 …"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — stopping distance */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 285 h 446 q 12 0 12 12 v 51 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={795} y={318} size={18} fill={INK} weight={700}>
          d_stop = v₀² ⁄ 2a
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={795} y={344} size={11} fill={RED} script>
          {t("quadratic in v₀ — not linear", "v₀ mein quadratic — linear nahi")}
        </T>
      </Fade>

      {/* beat 7 — the highway consequence */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 392 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={412} size={14} fill={RED} script anchor="start">
          {t(
            "2× the speed ⇒ 4× the stopping distance · 3× ⇒ 9×",
            "speed 2× ⇒ rukne ki doori 4× · 3× ⇒ 9×"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={438} size={13} fill={RED} script anchor="start">
          {t(
            "not an exam trick — small speed rises inflate stopping distance disproportionately",
            "exam ki chaal nahi — thodi si speed badhne par rukne ki doori bezuban badh jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — regenerates itself */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 470 v 54" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={490} size={13} fill={GREEN} script anchor="start">
          {t(
            "nothing new here: the three equations with a → g and a convention applied",
            "kuchh naya nahi: wahi teen equations, a → g aur ek convention ke saath"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={72} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "memorise three, know your convention — this whole list regenerates itself",
            "teen yaad rakho, convention jaano — poori list apne aap ban jaati hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

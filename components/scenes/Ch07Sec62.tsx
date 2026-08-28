/**
 * Ch07 · Section 62 — "Pitfalls and pro-tips for satellites"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.45, 9.45, 10.45, 11.45, 12.45, 13.45, 14.45]):
 *  0 title
 *  1 trap 1: T ∝ r^(3/2), not r
 *  2 trap 2: weightless = shared free fall
 *  3 trap 3: E = −GMm/2r, keep the sign
 *  4 trap 4: ve = √2·vo, only 41%
 *  5 amber: ellipses — let conservation do the work
 *  6 chip: near-surface magic numbers
 *  7 green box: geostationary trio
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  t1 bar y92..118 · t2 bar y138..190 lines bl158/184 ·
 *  t3 bar y210..262 lines bl230/256 · t4 bar y282..334 lines bl302/328
 *  b5 line st x84 bl378
 *  b6 chip x84 y400 w420 h34
 *  b7 green box x540..1000 y400..452(bl432)
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — closing satellites */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Satellites — the traps and the shortcuts",
            "Satellites — traps aur shortcuts"
          )}
        </T>
      </Fade>

      {/* beat 1 — Kepler III exponent */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 66 92 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={84} y={110} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — T ∝ r^(3/2), NOT r: 4× radius → 8× period",
            "trap 1 — T ∝ r^(3/2), r NAHI: 4× radius → 8× period"
          )}
        </T>
      </Fade>

      {/* beat 2 — weightless ≠ no gravity */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 66 138 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={84} y={158} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — \"weightless\" = shared FREE FALL, not no gravity",
            "trap 2 — \"weightless\" = shared FREE FALL, gravity absent nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={84} y={184} size={13} fill={RED} script anchor="start">
          {t(
            "say it that way in exams",
            "exams mein aise hi kaho"
          )}
        </T>
      </Fade>

      {/* beat 3 — keep the sign on E */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 210 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={230} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 — E = −GMm⁄2r: negative, HALF of |U|",
            "trap 3 — E = −GMm⁄2r: negative, |U| ka HALF"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={84} y={256} size={13} fill={RED} script anchor="start">
          {t(
            "writing U instead, or dropping the sign, is costly",
            "U likhna, ya sign giraana, mehnga hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — orbital vs escape */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 66 282 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={84} y={302} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — v(e) = √2·v(o), only ~41% more",
            "trap 4 — v(e) = √2·v(o), sirf ~41% zyada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={84} y={328} size={13} fill={RED} script anchor="start">
          {t(
            "mixing them reverses bound vs escaping",
            "mix karna bound vs escaping palat deta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — let conservation do the work */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={84} y={378} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "ellipses: v(p)r(p) = v(a)r(a), paired with energy conservation",
            "ellipses: v(p)r(p) = v(a)r(a), energy conservation ke saath"
          )}
        </T>
      </Fade>

      {/* beat 6 — near-surface magic numbers */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={84} y={400} w={420} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t(
            "surface: v(o)≈7.9, T≈84min, v(e)≈11.2 km/s",
            "surface: v(o)≈7.9, T≈84min, v(e)≈11.2 km/s"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — geostationary trio */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 552 400 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={780} y={432} size={13} fill={INK} weight={800}>
          {t(
            "geo: T=24h, h≈36000km, v(o)≈3.1 km/s",
            "geo: T=24h, h≈36000km, v(o)≈3.1 km/s"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch05 · Section 58 — "Why the bucket of water stays in"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.3, 39.9, 61.7, 85.0, 109.8, 134.7, 146.9] · dur 168.3;
 *        hi [0, 16.8, 41.6, 60.9, 83.0, 107.9, 132.7, 143.2] · dur 164.4):
 *  0 title + subtitle
 *  1 the fair trick lines
 *  2 circle drawing: both forces down at the top
 *  3 top equation chip
 *  4 string can only pull → slack
 *  5 slack consequence + T = 0 chip
 *  6 intuition note
 *  7 two-tools braid band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80 · b1 cx540 bl112 / bl138
 *  b2 | circle c(230,330) r105 · top dot (230,225) r8
 *     | mg (218,238)→(218,285) · T (242,238)→(242,285) · lbls bl 300
 *     | script cx230 bl465
 *  b3 | chip x520..900 y180..222
 *  b4 | st x520 bl262 / bl290
 *  b5 | st x520 bl330 · chip x520..860 y352..390 · amber cx690 bl416
 *  b6 | muted cx690 bl448
 *  b7 | bar x66 y490..575 · lines st x84 bl510 / bl536
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Why the Bucket of Water Stays In", "Paani ki Balti Girti Kyun Nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the closing application — energy and circular motion, side by side",
            "aakhri application — energy aur circular motion, saath-saath"
          )}
        </T>
      </Fade>

      {/* beat 1 — the fair trick */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={112} size={13} fill={INK} script>
          {t(
            "swing fast: the water stays in, even fully upside down",
            "tez ghumao: paani andar rehta hai, poori ulti balti mein bhi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={138} size={13} fill={RED} script>
          {t(
            "swing slow: it pours on your head — why does SPEED decide?",
            "dheema ghumao: sar par girta hai — SPEED kyun tay karti hai?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the top of the circle */}
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 125 330 a 105 105 0 1 0 210 0 a 105 105 0 1 0 -210 0" stroke={MUTED} sw={1.8} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Circle cx={230} cy={225} r={8} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.5)} d={arrowD(218, 240, 218, 287)} stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={204} y={268} size={13} fill={INK} anchor="end" weight={700}>
          mg
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.5)} d={arrowD(242, 240, 242, 287)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={256} y={268} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={230} y={465} size={13} fill={AMBER_DARK} script>
          {t(
            "at the top, both point DOWN — toward the centre",
            "top par dono NEECHE — centre ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 3 — the top equation */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={520} y={180} w={380} h={42} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          {t("at the top: T + m g = m v² ⁄ R", "top par: T + m g = m v² ⁄ R")}
        </Chip>
      </Fade>

      {/* beat 4 — strings only pull */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={520} y={262} size={13} fill={INK} script anchor="start">
          {t(
            "a string can only PULL — T can never go negative",
            "string sirf KHINCH sakti hai — T kabhi negative nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={520} y={290} size={13} fill={RED} script anchor="start">
          {t(
            "too slow → mv²⁄R < mg → it begs for T < 0 → the string goes SLACK",
            "bahut dheema → mv²⁄R < mg → T < 0 maangta hai → string DHEELI"
          )}
        </T>
      </Fade>

      {/* beat 5 — slack, and the key condition */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={520} y={330} size={13} fill={RED} script anchor="start">
          {t(
            "slack → gravity over-curves it → falls inward, off the circle",
            "dheeli → gravity zyada modti hai → andar girta hai, circle se hatkar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <Chip x={520} y={352} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("minimum speed: T = 0 at the top", "minimum speed: top par T = 0")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={690} y={416} size={13} fill={AMBER_DARK} script>
          {t(
            "the key to every minimum-speed problem",
            "har minimum-speed sawaal ki chaabi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the intuition */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={690} y={448} size={12.5} fill={MUTED} script>
          {t(
            "too slow at the top = water on your head",
            "top par bahut dheema = paani sar par"
          )}
        </T>
      </Fade>

      {/* beat 7 — the braid */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 490 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={510} size={13} fill={GREEN} script anchor="start">
          {t(
            "energy conservation links top ↔ bottom speeds (different heights)",
            "energy conservation top ↔ bottom speeds jodti hai (alag heights)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={536} size={13} fill={GREEN} script anchor="start">
          {t(
            "the centripetal equation gives T at any point — two tools, one problem",
            "centripetal equation kisi bhi point par T deti hai — do tools, ek sawaal"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

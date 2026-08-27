/**
 * Ch07 · Section 18 — "Field of a point mass, and outside any sphere"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.46, 19.88, 29.18, 40.62, 47.27, 57.34, 69.63]):
 *  0 title
 *  1 hero: E_g = F/m₀ · |E_g| = GM/r²
 *  2 diagram: long inner arrows, short outer arrows (1/r² fade) + caption
 *  3 derivation line: F on test mass, divide by m₀
 *  4 green box E_g = GM/r²
 *  5 red note: the test mass cancels
 *  6 dimensions + vectors lines
 *  7 green margin: at the surface E_g = g
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · hero cx540 bl115 (20)
 *  diagram: mass (240,280) r10 · inner arrows r70→r25 (0/90/180/270) sw2.6 ·
 *   outer arrows r130→r105 (45/135/225/315) sw1.6 · caption cx240 bl425
 *  b3 | line st x480 bl180 · b4 | green box x480..830 y210..262, text cx655 bl242
 *  b5 | bar x480 y290..342 · lines st x498 bl310 / 336
 *  b6 | lines st x480 bl380 / 408
 *  b7 | bar x480 y445..497 · lines st x498 bl465 / 491
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const rad = (deg: number) => (deg * Math.PI) / 180;

export default function Ch07Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — numbers on the field */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The field of a point mass",
            "Point mass ka field"
          )}
        </T>
      </Fade>

      {/* beat 1 — definition and magnitude */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={115} size={20} fill={INK} weight={800}>
          E
          <TSpan dy={5} fontSize={13}>
            g
          </TSpan>
          <TSpan dy={-5} fontSize={20}>
            {" "}= F ⁄ m₀ ,   |E
          </TSpan>
          <TSpan dy={5} fontSize={13}>
            g
          </TSpan>
          <TSpan dy={-5} fontSize={20}>
            | = G·M ⁄ r²
          </TSpan>
        </T>
      </Fade>

      {/* beat 2 — strong near, fading far */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={240} cy={280} r={10} fill={INK} />
      </Fade>
      {[0, 90, 180, 270].map((deg, i) => (
        <Draw
          key={`in${deg}`}
          on={beat >= 2}
          delay={dl(2, 0.9 + i * 0.3)}
          d={arrowD(
            240 + 70 * Math.cos(rad(deg)),
            280 + 70 * Math.sin(rad(deg)),
            240 + 25 * Math.cos(rad(deg)),
            280 + 25 * Math.sin(rad(deg))
          )}
          stroke={GREEN}
          sw={2.6}
          dur={0.3}
        />
      ))}
      {[45, 135, 225, 315].map((deg, i) => (
        <Draw
          key={`out${deg}`}
          on={beat >= 2}
          delay={dl(2, 2.4 + i * 0.3)}
          d={arrowD(
            240 + 130 * Math.cos(rad(deg)),
            280 + 130 * Math.sin(rad(deg)),
            240 + 105 * Math.cos(rad(deg)),
            280 + 105 * Math.sin(rad(deg))
          )}
          stroke={GREEN}
          sw={1.6}
          dur={0.3}
        />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={240} y={425} size={12} fill={AMBER_DARK} script>
          {t(
            "strong up close — fading as 1 ⁄ r²",
            "paas strong — door 1 ⁄ r² se faint"
          )}
        </T>
      </Fade>

      {/* beat 3 — the one-line derivation */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={480} y={180} size={14} fill={INK} anchor="start" weight={700}>
          {t("test m₀ at r:", "test m₀, r par:")}  F = G·M·m₀ ⁄ r²  → ÷ m₀
        </T>
      </Fade>

      {/* beat 4 — the result */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.4)}
          d="M 492 210 h 326 q 12 0 12 12 v 28 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={655} y={242} size={16} fill={INK} weight={800}>
          E
          <TSpan dy={4} fontSize={11}>
            g
          </TSpan>
          <TSpan dy={-4} fontSize={16}>
            {" "}= G·M ⁄ r²  {t("(toward M)", "(M ki taraf)")}
          </TSpan>
        </T>
      </Fade>

      {/* beat 5 — the cancellation's message */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 480 290 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={498} y={310} size={13} fill={RED} script anchor="start">
          {t(
            "m₀ cancels — the field belongs to SOURCE and LOCATION",
            "m₀ cancel — field SOURCE aur LOCATION ka hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={498} y={336} size={13} fill={RED} script anchor="start">
          {t(
            "not of the tiny mass probing it",
            "us chhote probe karne wale mass ka nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — dimensions, and vector addition */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={480} y={380} size={13} fill={INK} script anchor="start">
          {t(
            "[E] = LT⁻² — identical to acceleration, as promised",
            "[E] = LT⁻² — acceleration jaisa hi, jaisa vaada tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={480} y={408} size={13} fill={INK} script anchor="start">
          {t(
            "many sources → fields add as VECTORS",
            "kai sources → fields VECTORS ki tarah judte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the anchor */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 445 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={465} size={13} fill={GREEN} script anchor="start">
          {t(
            "at the Earth's surface: E = g",
            "Earth ke surface par: E = g"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={491} size={13} fill={GREEN} script anchor="start">
          {t(
            "field intensity ≡ acceleration due to gravity",
            "field intensity ≡ acceleration due to gravity"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch05 · Section 59 — "The critical speeds, and the three regimes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.6, 35.4, 60.3, 85.1, 95.2, 120.0, 140.5, 165.4] · dur 176.6;
 *        hi [0, 9.6, 34.5, 59.3, 84.1, 93.3, 118.1, 138.6, 163.4] · dur 176.0):
 *  0 title + subtitle
 *  1 T = 0 → v_top = √(gR)
 *  2 energy down → trio of speeds on the circle
 *  3 6mg result chip
 *  4 regimes intro line
 *  5 three regime lines
 *  6 classify-first line
 *  7 rod footnote (bar l1)
 *  8 rod numbers (bar l2)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  circle c(230,270) r100 · dots (230,170)/(330,270)/(230,370)
 *  lbls: cx230 bl145 · st x345 bl275 · cx230 bl405 · b4 amber cx230 bl440
 *  b1 | st x520 bl130 · bl158 · chip x520..830 y178..216
 *  b2 | st x520 bl256 / bl284 · muted bl310
 *  b3 | chip x520..900 y330..368 · script cx710 bl394
 *  b5 | st x520 bl430 / bl456 / bl482 · b6 | st x520 bl508
 *  b7/b8 | bar x66 y540..592 · lines st x84 bl558 / bl582
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Critical Speeds & the Three Regimes", "Critical Speeds & Teen Regimes")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the famous numbers — and what the launch speed decides",
            "mashhoor numbers — aur launch speed kya tay karti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — v_top from T = 0 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={520} y={130} size={13} fill={AMBER_DARK} script anchor="start">
          {t("on the edge of slack: T = 0", "dheeli padne ke kinare: T = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={520} y={158} size={14} fill={INK} anchor="start" weight={700}>
          {t("mg = mv²⁄R — the mass cancels", "mg = mv²⁄R — mass cancel ho jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <Chip x={520} y={178} w={310} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v_top,min = √(g R)
        </Chip>
      </Fade>

      {/* beat 2 — the trio on the circle */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 130 270 a 100 100 0 1 0 200 0 a 100 100 0 1 0 -200 0" stroke={MUTED} sw={1.8} dur={1.2} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <Circle cx={230} cy={170} r={5} fill={AMBER} />
        <Circle cx={330} cy={270} r={5} fill={AMBER} />
        <Circle cx={230} cy={370} r={5} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={230} y={145} size={14} fill={INK} weight={700}>
          √(gR)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={345} y={275} size={14} fill={INK} anchor="start" weight={700}>
          √(3gR)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={230} y={405} size={14} fill={INK} weight={700}>
          √(5gR)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={520} y={256} size={13} fill={INK} script anchor="start">
          {t(
            "top → bottom drop = 2R → K grows by 2mgR",
            "top → bottom girawat = 2R → K, 2mgR se badhti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={520} y={284} size={14} fill={INK} anchor="start" weight={800}>
          v_bottom,min = √(5gR) · side: √(3gR)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={520} y={310} size={12.5} fill={MUTED} script anchor="start">
          {t("three numbers — examined every year", "teen numbers — har saal poochhe jaate")}
        </T>
      </Fade>

      {/* beat 3 — the 6mg gem */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Chip x={520} y={330} w={380} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("T_bottom − T_top = 6mg, always", "T_bottom − T_top = 6mg, hamesha")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={710} y={394} size={12.5} fill={GREEN} script>
          {t(
            "independent of v and R — the examiner favourite",
            "v aur R se aazaad — examiner ka favourite"
          )}
        </T>
      </Fade>

      {/* beat 4 — regimes intro */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={230} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "the launch speed sorts everything into three regimes",
            "launch speed sab kuchh teen regimes mein chhaant deti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the three regimes */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={520} y={430} size={13} fill={GREEN} script anchor="start">
          {t(
            "≥ √(5gR) → the full loop, taut all the way round",
            "≥ √(5gR) → poora loop, poore raaste taut"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={520} y={456} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "≤ √(2gR) → a pendulum — never above the horizontal",
            "≤ √(2gR) → pendulum — horizontal se upar kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 16)}>
        <T x={520} y={482} size={13} fill={RED} script anchor="start">
          {t(
            "between → climbs, goes slack, becomes a projectile",
            "beech mein → chadhta hai, dheela padta hai, projectile ban jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — classify first */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={520} y={508} size={13} fill={GREEN} script anchor="start">
          {t(
            "classify the regime FIRST — it is half of every problem",
            "PEHLE regime classify karo — har sawaal ka aadha yahi hai"
          )}
        </T>
      </Fade>

      {/* beats 7–8 — the rod footnote */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 540 v 52" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={558} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a rigid ROD can push → v_top can be 0 — even a pause at the top",
            "rigid ROD dhakka de sakta hai → v_top 0 ho sakti — top par ruk bhi sakta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={582} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "rod: v_bottom,min = 2√(gR) — keep string vs rod separate",
            "rod: v_bottom,min = 2√(gR) — string vs rod alag rakho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

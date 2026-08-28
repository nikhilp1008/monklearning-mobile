/**
 * Ch06 · Section 62 — "The rolling toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,22.24,33.67] — b0..b4 fast in EN;
 * hi [0,5.46,16.13,24.15,37.38,56.32,57.32,58.32] — b5,b6,b7 fast in HI →
 * ALL beats kept ≤0.9 s):
 *  0 title
 *  1 figure: incline, ball, headline "a = g sinθ / (1+I/MR²)"
 *  2 v_cm = ωR, a_cm = αR
 *  3 K_roll = ½Mv² + ½Iω² = ½Mv²(1+K²/R²)
 *  4 amber box: the star formula, a = g sinθ / (1+I/MR²)
 *  5 v_bottom = √(2gh/(1+K²/R²)) — mass cancels
 *  6 shape-factor chips: ring=1, disc=½, sphere=2/5
 *  7 rule: smaller factor → bigger a — sphere wins
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | base (110,280)→(420,280) · hyp (110,280)→(330,160) · θ arc + "θ"(140,265) ·
 *       ball c(180,238) r22 · "a" arrow (180,238)→(225,266) · caption st(340,150)
 *  b2 | sans15 st x80 bl springs 300
 *  b3 | sans13 st x80 bl springs 330
 *  b4 | amber box x springs 572..1000 y springs 355..405 cx786 bl springs 385
 *  b5 | sans13 st x80 bl springs 440
 *  b6 | chips y springs 465 h34: x springs 120 w270 / x springs 405 w270 / x springs 690 w270
 *  b7 | script13 cx540 bl springs 535
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t("the rolling toolkit", "rolling ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the headline result, previewed */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 110 280 H 420" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 110 280 L 330 160" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.35)}
        d="M 150 280 A 40 40 0 0 0 138 254"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={140} y={265} size={12} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 158 238 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.65)} d={arrowD(180, 238, 225, 266)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={340} y={150} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          a = gsinθ/(1+I/MR²)
        </T>
      </Fade>

      {/* beat 2 — the rolling conditions */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={300} size={15} fill={INK} anchor="start" weight={700}>
          v
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = ωR ,   a</TSpan>
          <TSpan dy={5} fontSize={11}>
            cm
          </TSpan>
          <TSpan dy={-5}> = αR</TSpan>
        </T>
      </Fade>

      {/* beat 3 — the total KE */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={330} size={13} fill={INK} anchor="start" weight={700}>
          K
          <TSpan dy={5} fontSize={10}>
            roll
          </TSpan>
          <TSpan dy={-5}> = ½Mv² + ½Iω² = ½Mv²(1 + K²/R²)</TSpan>
        </T>
      </Fade>

      {/* beat 4 — the star formula */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M 572 355 h 428 q 12 0 12 12 v 26 q 0 12 -12 12 h -428 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={786} y={385} size={17} fill={INK} weight={700}>
          a = gsinθ / (1 + I/MR²)
        </T>
      </Fade>

      {/* beat 5 — the speed at the bottom */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={440} size={13} fill={INK} anchor="start" weight={700}>
          v
          <TSpan dy={5} fontSize={10}>
            bottom
          </TSpan>
          <TSpan dy={-5}> = √(2gh/(1+K²/R²))</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={620} y={440} size={12} fill={MUTED} script anchor="start">
          {t("— mass cancels, it doesn't matter", "— mass cancel, koi farq nahi")}
        </T>
      </Fade>

      {/* beat 6 — the shape factor */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <Chip x={120} y={465} w={270} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("ring: I/MR² = 1", "ring: I/MR² = 1")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.35)}>
        <Chip x={405} y={465} w={270} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("disc: I/MR² = ½", "disc: I/MR² = ½")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={690} y={465} w={270} h={34} fill={CREAM} stroke={GREEN_DARK} textFill={INK} size={14} script={false}>
          {t("sphere: I/MR² = 2/5", "sphere: I/MR² = 2/5")}
        </Chip>
      </Fade>

      {/* beat 7 — the rule that decides every race */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={535} size={13} fill={GREEN_DARK} script>
          {t(
            "smaller I/MR² → bigger a — the solid sphere always wins",
            "chhota I/MR² → bada a — solid sphere hamesha jeetta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

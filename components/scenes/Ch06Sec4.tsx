/**
 * Ch06 · Section 4 — "Two surprises and a subtle cousin"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.79, 18.35, 31.66, 39.34, 50.77, 65.96, 82.26]):
 *  0 title + underline
 *  1 col A: ring (annulus) — CoM dot in the empty centre
 *  2 col A: hollow box with dashed diagonals — surprise 1 line
 *  3 col B: solid axes + blob + CoM dot + dashed drops — property of the body
 *  4 col B: rotated amber dashed axes — numbers change, point does not
 *  5 col C: cousin header + chip CG = CoM ⟺ g uniform
 *  6 col C: tall tower, CoM/CG dashed lines, g weak/strong arrows
 *  7 red exam secret: internal forces can never move the CoM
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 54 · underline y74 x310..770
 *  b1 | ring c(190,180) r62/r42 · dot r4 + crosshair · label script12 cx190 bl 268
 *  b2 | box x145..245 y295..385 · dashed diagonals · dot (195,340) ·
 *       label script12 cx195 bl 412 · surprise script12 cx195 bl 445 (x57..333)
 *  b3 | header script13 cx540 bl 130 · axes o(440,430)→(665,430)/(440,190) ·
 *       blob c(565,300) rx52 ry38 · dot r4.5 · dashed drops
 *  b4 | amber dashed axes o(470,400)→(670,453)/(426,236) · x′/y′ labels ·
 *       msg script12 cx540 bl 478 (x424..656)
 *  b5 | header script13 cx880 bl 130 · chip (740,155) w280 h34
 *  b6 | tower x790..850 y225..465 · CoM line y345 green + label st x862 bl 349 ·
 *       CG line y367 red + label st x862 bl 375 · g arrows x765 (240→268 / 408→452),
 *       labels end x753 bl 258 / 435 · drift label script12 cx880 bl 492
 *  b7 | red bar x66 y520..576 · L1 st x84 bl 545 · L2 st x84 bl 573
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLOB =
  "M 513 300 C 513 265, 540 262, 565 262 C 600 262, 617 280, 617 300 C 617 322, 595 338, 563 338 C 535 338, 513 328, 513 300";

export default function Ch06Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the promise */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t(
            "two surprises, and a subtle cousin",
            "do surprises, aur ek subtle cousin"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4.5)} d="M 310 74 h 460" stroke={AMBER} sw={2.2} dur={0.7} />

      {/* beat 1 — the ring balances on empty air */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 128 180 a 62 62 0 1 0 124 0 a 62 62 0 1 0 -124 0"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.3)}
        d="M 148 180 a 42 42 0 1 0 84 0 a 42 42 0 1 0 -84 0"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d="M 186 180 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M 178 180 h -8 M 212 180 h 8 M 190 168 v -8 M 190 192 v 8"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={190} y={268} size={12} fill={AMBER_DARK} script>
          {t("balance point — empty air!", "balance point — khaali hawa!")}
        </T>
      </Fade>

      {/* beat 2 — hollow box, same story */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 145 295 h 100 v 90 h -100 z"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Path
          d="M 145 295 L 245 385 M 245 295 L 145 385"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 191 340 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={195} y={412} size={12} fill={MUTED} script>
          {t("hollow box — CoM floats inside", "hollow box — CoM andar tairta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={195} y={445} size={12} fill={AMBER_DARK} script>
          {t(
            "surprise 1: mass need not EXIST at the CoM",
            "surprise 1: CoM par mass hona zaroori NAHI"
          )}
        </T>
      </Fade>

      {/* beat 3 — property of the body, not the axes */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={130} size={13} fill={INK} script>
          {t(
            "CoM = property of the BODY, not the axes",
            "CoM = BODY ki property, axes ki nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={`${arrowD(440, 430, 665, 430)} ${arrowD(440, 430, 440, 190)}`}
        stroke={INK}
        sw={2}
        dur={1.1}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={672} y={436} size={13} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={430} y={178} size={13} fill={INK} weight={700}>
          y
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4)} d={BLOB} stroke={INK} sw={2.2} dur={1.1} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.4)}
        d="M 560.5 300 a 4.5 4.5 0 1 0 9 0 a 4.5 4.5 0 1 0 -9 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <Path
          d="M 565 305 V 430 M 560 300 H 440"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.3}
          strokeDasharray="5 5"
        />
      </Fade>

      {/* beat 4 — shift and rotate the axes: nothing happens to the point */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Path
          d={`${arrowD(470, 400, 670, 453)} ${arrowD(470, 400, 426, 236)}`}
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
          strokeDasharray="7 5"
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={676} y={458} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          x′
        </T>
        <T x={416} y={228} size={13} fill={AMBER_DARK} weight={700}>
          y′
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={540} y={478} size={12} fill={AMBER_DARK} script>
          {t(
            "numbers change — the point does not",
            "numbers badalte hain — point nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the subtle cousin */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={880} y={130} size={13} fill={INK} script>
          {t(
            "the subtle cousin: CENTRE OF GRAVITY",
            "subtle cousin: CENTRE OF GRAVITY"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip
          x={740}
          y={155}
          w={280}
          h={34}
          fill={CREAM}
          stroke={GREEN}
          textFill={INK}
          size={14}
          script={false}
        >
          {t("CG = CoM ⟺ g uniform", "CG = CoM ⟺ g uniform ho")}
        </Chip>
      </Fade>

      {/* beat 6 — the kilometre-tall tower */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 790 225 h 60 v 240 h -60 z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Path
          d="M 792 345 h 56"
          fill="none"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 4"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={862} y={349} size={13} fill={GREEN_DARK} anchor="start" weight={700}>
          CoM
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d={arrowD(765, 240, 765, 268)}
        stroke={MUTED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={753} y={258} size={12} fill={MUTED} script anchor="end">
          {t("g weaker", "g kam")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6.8)}
        d={arrowD(765, 408, 765, 452)}
        stroke={INK}
        sw={3.2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.4)}>
        <T x={753} y={435} size={12} fill={INK} script anchor="end">
          {t("g stronger", "g zyada")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <Path
          d="M 792 367 h 56"
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="6 4"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.8)}>
        <T x={862} y={375} size={13} fill={RED} anchor="start" weight={700}>
          {t("CG — just below", "CG — zara neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={880} y={492} size={12} fill={AMBER_DARK} script>
          {t(
            "g varies with height → CG drifts below CoM",
            "g height ke saath badalta → CG neeche khisakta"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam secret */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 520 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={545} size={14} fill={RED} script anchor="start">
          {t(
            "EXAM SECRET: internal forces — however violent — can NEVER move the CoM",
            "EXAM SECRET: internal forces — kitne bhi violent hon — CoM ko kabhi NAHI hila sakte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.5)}>
        <T x={84} y={573} size={14} fill={RED} script anchor="start">
          {t("only EXTERNAL forces can", "sirf EXTERNAL forces hila sakte hain")}
        </T>
      </Fade>
    </Scene>
  );
}

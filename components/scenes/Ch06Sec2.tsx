/**
 * Ch06 · Section 2 — "The three types of motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.01, 20.14, 35.5, 48.21, 63.15, 76.54, 89.17]):
 *  0 title + drawn underline
 *  1 three panel headers + underlines + two divider lines
 *  2 panel 1: two books slide right — same v arrows, parallel dashed paths,
 *    diagonal mark keeps its direction
 *  3 panel 1 verdict: green CoM dot — body = one particle at its CoM
 *  4 panel 2: fixed axis dot, two concentric circles, two particles, arc arrow
 *  5 panel 2: tangent arrows short/long + "v = rω" chip + farther-faster line
 *  6 panel 3: ground, wheel, spoke, rotation arc, glide arrow — rolling
 *  7 master-strategy box: general = CoM translation + rotation about CoM
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 54 · underline y76 x340..740
 *  b1 | headers sans16 bl 105 cx210/540/870 · underlines y115 · dividers x372/x708 y95..440
 *  b2 | book1 x85..175 y170..226 · book2 x235..325 · diag marks · v arrows y158 ·
 *       dashed connectors y170/y226 x177..233 · label script12 cx205 bl 262
 *  b3 | green dot (280,198) r4 · lines script12 cx205 bl 294 / bl 320
 *  b4 | axis dot (540,228) r4 · circles r34/r68 · particles (564,204)/(588,180) r5 ·
 *       arc M606,266 A76 → (540,304) · label script12 cx540 bl 332
 *  b5 | tangent arrows (556,196)→(534,174) / (582,171)→(546,135) amber ·
 *       chip "v = rω" (490,352) w100 h36 · amber line script12 cx540 bl 415
 *  b6 | ground y300 x730..1010 · wheel (830,242) r57 · spoke →(868,280) ·
 *       rot arc M806,222 A30 →(854,222) · v arrow (840,242)→(968,242) ·
 *       glide label st x900 bl 220 (clear of wheel edge x≤886) / spin label bl 327 cx870
 *  b7 | box x150..930 y480..570 · header script14 bl 504 · formula sans16 bl 534 ·
 *       tail script13 bl 561
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

export default function Ch06Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — three kinds, that's all */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t(
            "every rigid-body motion — just three kinds",
            "rigid body ki motion — sirf teen tarah ki"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 5)} d="M 340 76 h 400" stroke={AMBER} sw={2.2} dur={0.7} />

      {/* beat 1 — the three panels */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={210} y={105} size={16} fill={INK} weight={700}>
          {t("1 · TRANSLATION", "1 · TRANSLATION")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 130 115 h 160" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={105} size={16} fill={INK} weight={700}>
          {t("2 · ROTATION", "2 · ROTATION")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d="M 470 115 h 140" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={870} y={105} size={16} fill={INK} weight={700}>
          {t("3 · BOTH", "3 · DONO")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.6)} d="M 810 115 h 120" stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.5)}
        d="M 372 95 v 345 M 708 95 v 345"
        stroke={MUTED}
        sw={1.2}
        dur={0.8}
      />

      {/* beat 2 — sliding book: same v, parallel paths, no turning */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 85 170 h 90 v 56 h -90 z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 95 216 L 165 180" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Path
          d="M 177 170 h 56 M 177 226 h 56"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d="M 235 170 h 90 v 56 h -90 z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d="M 245 216 L 315 180" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 7)} d={arrowD(110, 158, 150, 158)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={arrowD(260, 158, 300, 158)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 9.5)}>
        <T x={205} y={262} size={12} fill={INK} script>
          {t(
            "every particle: same v, parallel paths",
            "har particle: same v, parallel paths"
          )}
        </T>
      </Fade>

      {/* beat 3 — behaves like one particle at the CoM */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 276 198 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={205} y={294} size={12} fill={GREEN_DARK} script>
          {t(
            "no turning → body = one particle",
            "koi turning nahi → body = ek particle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <T x={205} y={320} size={12} fill={GREEN_DARK} script>
          {t(
            "sitting at its CoM — straight-line laws apply ✓",
            "apne CoM par — straight-line laws yahan bhi ✓"
          )}
        </T>
      </Fade>

      {/* beat 4 — pure rotation about a fixed axis */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 536 228 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 506 228 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.5)}
        d="M 472 228 a 68 68 0 1 0 136 0 a 68 68 0 1 0 -136 0"
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.2)}
        d="M 559 204 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 583 180 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 6.5)}
        d="M 606 266 A 76 76 0 0 1 540 304 M 552 296 L 540 304 L 551 310"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={540} y={332} size={12} fill={MUTED} script>
          {t(
            "one fixed axis — fan, potter's wheel",
            "ek fixed axis — ceiling fan, potter's wheel"
          )}
        </T>
      </Fade>

      {/* beat 5 — same ω, farther = faster: v = rω */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={arrowD(556, 196, 534, 174)}
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d={arrowD(582, 171, 546, 135)}
        stroke={AMBER}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <Chip
          x={490}
          y={352}
          w={100}
          h={36}
          fill={CREAM}
          stroke={AMBER}
          textFill={INK}
          size={17}
          script={false}
        >
          v = rω
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.5)}>
        <T x={540} y={415} size={12} fill={AMBER_DARK} script>
          {t(
            "same ω — but farther from axis = faster",
            "same ω — par axis se door = utna tez"
          )}
        </T>
      </Fade>

      {/* beat 6 — rolling: glide + spin at once */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 730 300 h 280" stroke={INK} sw={2.2} dur={0.7} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 773 242 a 57 57 0 1 0 114 0 a 57 57 0 1 0 -114 0"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d="M 830 242 L 868 280" stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 806 222 A 30 30 0 0 1 854 222 M 845 211 L 854 222 L 842 224"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6.5)}
        d={arrowD(840, 242, 968, 242)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.5)}>
        <T x={900} y={220} size={12} fill={GREEN_DARK} script anchor="start">
          {t("centre glides →", "centre glide karta →")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.5)}>
        <T x={870} y={327} size={12} fill={AMBER_DARK} script>
          {t(
            "…while spinning about that centre",
            "…aur usi centre ke baare mein spin"
          )}
        </T>
      </Fade>

      {/* beat 7 — the master strategy of the chapter */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 162 480 h 756 q 12 0 12 12 v 66 q 0 12 -12 12 h -756 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={540} y={504} size={14} fill={RED} script>
          {t(
            "the master strategy of the entire chapter",
            "poore chapter ki master strategy"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={540} y={534} size={16} fill={INK} weight={700}>
          {t(
            "GENERAL  =  translation of CoM  +  rotation about CoM",
            "GENERAL  =  CoM ka translation  +  CoM ke baare mein rotation"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={540} y={561} size={13} fill={MUTED} script>
          {t(
            "handle each with its own laws — then add the results",
            "har hisse ko uske apne laws se — phir results jod do"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

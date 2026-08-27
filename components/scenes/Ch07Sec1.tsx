/**
 * Ch07 · Section 1 — "The pen and the Moon: one force, not two"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.33, 20.65, 29.95, 39.85, 46.85, 55.98, 65.37]):
 *  0 title + falling pen on the left (pen, floor, drop arrow)
 *  1 two-worlds divider: dashed line, heavens/earth labels — then crossed out (dims from b2)
 *  2 Earth + hill + two throws (land 30°, 60° around)
 *  3 the impossibly hard throw — curls far around the globe
 *  4 dashed orbit ring + ball + velocity arrow: perpetual falling
 *  5 Moon arc + Moon: a stone that keeps missing
 *  6 red F arrows on pen and Moon + green result box (left column)
 *  7 red margin verdict: Newton at 23 saw one thing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · pen x150 y138..205 · floor y255 x105..195 · drop arrow y213..248 ·
 *  pen label cx150 bl280 (box 107..193, y264..286)
 *  b1 | divider y120 x250..830 · above cx540 bl100 · below cx540 bl152 · cross x646..714 y107..133 ·
 *      erased label st x735 bl104 (735..880)
 *  b2 | Earth c(620,430) r140 (top 290, bottom 570, left 480, right 760) · "Earth" cx620 bl445 ·
 *      hill peak (570,268) · traj1 → (690,309) · traj2 → (741,360) · label st x855 bl330 (855..1010)
 *  b3 | traj3 cubic → (755,466) · label st x800 bl480 (800..1011)
 *  b4 | orbit ring c(620,430) r170 dashed (top 260, bottom 596-edge ok at 600? r170 → 600 ✗ use r160: bottom 590, top 270, left 460) ·
 *      ball (505,315) r6 (θ135° on r160: 620−113, 430−113) · vel arrow (513,307)→(545,275) ·
 *      label cx240 bl330 (136..344)
 *  b5 | moon arc r205 θ20..80° · Moon (777,298) r11 · label cx880 bl250 (784..976)
 *  b6 | pen red arrow y213..248 · F st (165,232) · moon F arrow (766,308)→(751,321) · F cx768 bl336 ·
 *      green box x70..410 y470..528 · line1 cx240 bl496 · line2 cx240 bl518
 *  b7 | red bar x66 y545..585 · line st x84 bl568 (84..330)
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + the falling pen */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The pen and the Moon — one force, not two",
            "Pen aur Moon — ek hi force, do nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.5)}
        d="M 145 138 h 10 v 52 l -5 14 l -5 -14 v -52 M 150 192 v 12"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 0} delay={dl(0, 4.4)} d="M 105 255 h 90" stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={arrowD(150, 213, 150, 248)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 0} delay={dl(0, 5.8)}>
        <T x={150} y={280} size={12} fill={MUTED} script>
          {t("the falling pen", "girta hua pen")}
        </T>
      </Fade>

      {/* beat 1 — the old split universe, erased (dims once the demo starts) */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)} dim={beat >= 2}>
        <Path
          d="M 250 120 H 830"
          stroke={MUTED}
          strokeWidth={2}
          strokeDasharray="8 7"
          fill="none"
        />
        <T x={540} y={100} size={12} fill={INK} script>
          {t("heavens — their own rules", "heavens — apne alag rules")}
        </T>
        <T x={540} y={152} size={12} fill={INK} script>
          {t("earth — its own rules", "earth — apne alag rules")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.5)} dim={beat >= 2}>
        <Path d={crossD(650, 110, 60, 20)} stroke={RED} strokeWidth={2.6} fill="none" />
        <T x={735} y={104} size={12} fill={GREEN} script anchor="start">
          {t("Newton erased the line", "Newton ne line mita di")}
        </T>
      </Fade>

      {/* beat 2 — Earth, hill, two throws */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.4)}
          d="M 620 290 A 140 140 0 1 1 619.9 290"
          stroke={INK}
          sw={2.6}
          dur={1.1}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={620} y={445} size={13} fill={MUTED}>
          Earth
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.8)}
        d="M 545 293 L 570 268 L 592 290"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d="M 578 272 Q 630 262 688 306"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d="M 578 270 Q 660 240 738 356"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={855} y={330} size={12} fill={AMBER_DARK} script anchor="start">
          {t("throw harder → lands farther", "zor se pheko → aur door")}
        </T>
      </Fade>

      {/* beat 3 — the impossibly hard throw */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 578 268 C 650 230, 760 270, 757 462"
        stroke={RED}
        sw={2}
        dur={1.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={800} y={480} size={12} fill={RED} script anchor="start">
          {t("the Earth curves away beneath it", "Earth neeche se mud jaati hai")}
        </T>
      </Fade>

      {/* beat 4 — the orbit: perpetual falling */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle
          cx={620}
          cy={430}
          r={160}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 8"
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Circle cx={507} cy={317} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d={arrowD(515, 309, 545, 279)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={240} y={330} size={13} fill={AMBER_DARK} script>
          {t("an orbit = falling forever", "orbit = hamesha ke liye girna")}
        </T>
      </Fade>

      {/* beat 5 — the Moon keeps missing */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Path
          d="M 690 237 A 205 205 0 0 1 822 394"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 8"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 1.8)}
          d="M 777 287 A 11 11 0 1 1 776.9 287"
          stroke={INK}
          sw={2.2}
          dur={0.6}
          fill="#F3EAD3"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={880} y={250} size={12} fill={INK} script>
          {t("the Moon just keeps missing", "Moon bas miss karta rehta hai")}
        </T>
      </Fade>

      {/* beat 6 — the same force, top and bottom of the world */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(150, 213, 150, 248)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={165} y={232} size={14} fill={RED} anchor="start" weight={800}>
          F
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.2)}
        d={arrowD(766, 308, 748, 324)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={772} y={340} size={14} fill={RED} weight={800}>
          F
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 4.5)}
          d="M 82 470 h 316 q 12 0 12 12 v 34 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -34 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={240} y={496} size={14} fill={INK} weight={800}>
          {t("the pen's pull = the Moon's pull", "pen ka pull = Moon ka pull")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <T x={240} y={518} size={11} fill={GREEN} script>
          {t("one force, one law — gravity", "ek hi force, ek hi law — gravity")}
        </T>
      </Fade>

      {/* beat 7 — Newton, 23 */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 545 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={568} size={13} fill={RED} script anchor="start">
          {t(
            "Newton, 23 — saw the two as ONE",
            "Newton, 23 saal — dono ko EK dekha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

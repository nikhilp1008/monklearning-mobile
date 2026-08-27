/**
 * Ch04 · Section 24 — "It hangs perfectly still, so the pulls must cancel"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.3, 41.2, 56.5, 67.9, 92.8, 117.6, 135.3]):
 *  0 title
 *  1 signboard on two chains + weight arrow + caption
 *  2 definition lines (right col)
 *  3 hero box Σ F = 0 + one-line note
 *  4 hook with three concurrent cords + particle note
 *  5 triangle law: head-to-tail arrows close + note
 *  6 balance line
 *  7 red margin: translational only, torque caution
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  fig | ceiling M100 100 H360 + hatches · chains (140,100)→(180,200),(320,100)→(280,200)
 *    board x170..290 y200..250 · W arr (230,255)→(230,305) · T₁(150,150) T₂(310,150)
 *    caption cx230 bl 330
 *  b2 | st x500 bl 110 / 134
 *  b3 | box x600..780 y160..212 bl 196 · note cx690 bl 238
 *  b4 | dot (690,310) · arrows out to (617,258)/(763,258)/(690,372) · note cx690 bl 408
 *  b5 | tri arrows (150,470)→(270,470)→(210,390)→(150,470) · note cx250 bl 505
 *  b6 | st x500 bl 448
 *  b7 | bar x66 y540..588 · lines st x84 bl 558 / 582
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "why does the signboard just hang there?",
            "signboard bas latka kyun rehta hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the signboard */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.5)}
        d="M 100 100 H 360 M 130 100 l -10 -10 M 190 100 l -10 -10 M 250 100 l -10 -10 M 310 100 l -10 -10"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d="M 140 100 L 180 200 M 320 100 L 280 200 M 170 200 h 120 v 50 h -120 z"
        stroke={INK}
        sw={2.4}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d={arrowD(230, 255, 230, 305)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={248} y={290} size={13} fill={RED} weight={700} anchor="start">
          W
        </T>
        <T x={140} y={150} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          T₁
        </T>
        <T x={322} y={150} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          T₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={230} y={330} size={13} fill={AMBER_DARK} script>
          {t(
            "perfectly still ⇒ every pull exactly cancels",
            "bilkul sthir ⇒ har khinchai theek-theek cancel"
          )}
        </T>
      </Fade>

      {/* beat 2 — the definition */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={500} y={110} size={13} fill={INK} script anchor="start">
          {t(
            "translational equilibrium: net force = 0 → a = 0",
            "translational equilibrium: net force = 0 → a = 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={500} y={134} size={13} fill={INK} script anchor="start">
          {t(
            "stays at rest — or keeps moving at constant velocity",
            "rest par rahe — ya constant velocity se chalti rahe"
          )}
        </T>
      </Fade>

      {/* beat 3 — the whole condition */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 612 160 h 156 q 12 0 12 12 v 28 q 0 12 -12 12 h -156 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={690} y={196} size={26} fill={INK} weight={800}>
          Σ F = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={690} y={238} size={12} fill={GREEN} script>
          {t(
            "everything else is a clever use of this one line",
            "baaki sab isi ek line ka chalaak istemaal hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — concurrent forces */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Circle cx={690} cy={310} r={4.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d={arrowD(683, 303, 617, 258)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(697, 303, 763, 258)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d={arrowD(690, 318, 690, 372)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={690} y={408} size={12} fill={INK} script>
          {t(
            "all lines of action through ONE point → treat it as a particle",
            "sab lines of action EK point se → use particle maan lo"
          )}
        </T>
      </Fade>

      {/* beat 5 — the triangle law */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={arrowD(150, 470, 270, 470)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d={arrowD(270, 470, 210, 390)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d={arrowD(210, 390, 150, 470)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={250} y={505} size={13} fill={GREEN} script>
          {t(
            "head to tail, no gap: closed triangle = ZERO resultant — the triangle law",
            "head to tail, koi gap nahi: band triangle = ZERO resultant — triangle law"
          )}
        </T>
      </Fade>

      {/* beat 6 — only balance matters */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={500} y={448} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "forces need not be small, nor few — they only have to BALANCE",
            "forces ka chhota ya kam hona zaroori nahi — bas BALANCE hona chahiye"
          )}
        </T>
      </Fade>

      {/* beat 7 — the torque caution */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 540 v 50" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={558} size={13} fill={RED} script anchor="start">
          {t(
            "ΣF = 0 gives only TRANSLATIONAL equilibrium — a couple can still spin the body",
            "ΣF = 0 sirf TRANSLATIONAL equilibrium deta hai — couple body ko ghuma sakta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={582} size={13} fill={RED} script anchor="start">
          {t(
            "rigid bodies also need Στ = 0 · for a particle, force balance alone is enough",
            "rigid body ko Στ = 0 bhi chahiye · particle ke liye force balance kaafi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

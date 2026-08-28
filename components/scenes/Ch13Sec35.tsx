/**
 * Ch13 · Section 35 — "Resonance and the shape of the damping force"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.93, 15.25, 23.15, 27.67, 43.48, 51.67, 65.79]):
 *  0 shelf
 *  1 F_damp = −bv (faster motion ⇒ harder resistance)
 *  2 damping always opposes v ⇒ always negative work ⇒ energy only decreases
 *  3 diagram: three swing positions of growing amplitude (well-timed pushes)
 *  4 random push never climbs; timed push (natural rhythm) adds energy
 *  5 hero: RESONANCE — driving freq = natural freq ⇒ amplitude grows dramatically
 *  6 radio tuner; soldiers break step crossing bridges
 *  7 zero damping (high): infinite amplitude — real damping keeps it large but finite
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13
 *  b2 | st x70 bl148 size12
 *  b3 | pivot(820,90) r3 · string1(dim.35) 820,90→858.8,234.9 + bob1 r7 ·
 *      string2(.6) 820,90→883.4,225.9 + bob2 r9 · string3(full) 820,90→906,212.9 + bob3 r11 ·
 *      growth-arc dashed 858.8,234.9→883,235→906,212.9 · push-arrow 920,200→935,185
 *  b4 | st x70 bl190 size12
 *  b5 | box x70..500 y215..290 rx14 · L1 cx285 bl245 size20 · L2 cx285 bl278 size12
 *  b6 | script12 st x70 bl325
 *  b7 | script13 st x70 bl380 red
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
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("A drag that opposes velocity, a push that builds amplitude", "Velocity ka opposite drag, amplitude badhata push")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the damping force */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          F_damp = −bv  (faster motion ⇒ harder resistance)
        </T>
      </Fade>

      {/* beat 2 — always negative work */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={148} size={12} fill={INK} anchor="start">
          {t(
            "damping always opposes v ⇒ always negative work ⇒ energy only decreases",
            "damping hamesha v ke opposite ⇒ hamesha negative work ⇒ energy sirf ghatti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the swing: well-timed pushes grow the amplitude */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={820} cy={90} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Path d="M 820 90 L 858.8 234.9" stroke={INK} strokeWidth={1.4} strokeDasharray="4 4" opacity={0.35} fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={858.8} cy={234.9} r={7} fill={AMBER} opacity={0.35} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Path d="M 820 90 L 883.4 225.9" stroke={INK} strokeWidth={1.4} strokeDasharray="4 4" opacity={0.6} fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Circle cx={883.4} cy={225.9} r={9} fill={AMBER} opacity={0.6} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 820 90 L 906 212.9" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Circle cx={906} cy={212.9} r={11} fill={AMBER} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <Path d="M 858.8 234.9 Q 883 235 906 212.9" stroke={MUTED} strokeWidth={1.2} strokeDasharray="3 3" fill="none" />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={arrowD(920, 200, 935, 185)} stroke={RED} sw={2.2} dur={0.4} />

      {/* beat 4 — timing is everything */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={190} size={12} fill={INK} anchor="start">
          {t(
            "random push never climbs; timed push (natural rhythm) adds energy",
            "random push kabhi nahi chadhta; timed push (natural rhythm) energy jodta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the hero definition */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 215 h 402 q 14 0 14 14 v 47 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -47 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={285} y={245} size={20} fill={INK} weight={800}>
          RESONANCE
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={285} y={278} size={12} fill={INK} weight={700}>
          {t(
            "driving freq = natural freq ⇒ amplitude grows dramatically",
            "driving freq = natural freq ⇒ amplitude dramatically badhta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — real-world examples */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={325} size={12} fill={INK} script anchor="start">
          {t(
            "radio tuner selects a station; soldiers break step crossing bridges",
            "radio tuner ek station chunta hai; soldiers bridge par break step karte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the subtlety, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={380} size={13} fill={RED} script anchor="start">
          {t(
            "zero damping ⇒ infinite amplitude (unphysical); real damping keeps it large but finite",
            "zero damping ⇒ infinite amplitude (unphysical); real damping ise large par finite rakhti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

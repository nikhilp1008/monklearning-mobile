/**
 * Ch13 · Section 12 — "Energy in SHM changes costume" (opens SHM Energy)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.0, 19.39, 33.24, 43.62, 54.01, 68.55, 77.9]):
 *  0 the bowl (katori) curve
 *  1 marble at the bottom, climb arrow, ghost marble paused at the rim
 *  2 caption: same energy, different costume
 *  3 K label at bottom, U label at rim, "total never changes"
 *  4 hero: E = K + U = ½kA² = constant
 *  5 at x=0: all K, U=0 · at x=±A: all U, K=0
 *  6 conservative note: K and U trade off exactly
 *  7 savings-account analogy chip
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | bowl M180,180 Q540,460 900,180 (visual bottom ≈540,320)
 *  b1 | marble c(540,315) r13 · ghost c(240,185) r13 · climb arrow 525,300→255,197
 *  b2 | script14 cx540 bl110 amber
 *  b3 | "K" cx540 bl345 size16 · "U" cx240 bl222 size16 · script12 cx540 bl375
 *  b4 | box x300..780 y400..450 rx14 · line cx540 bl432 size18
 *  b5 | st x150 bl478 · st x600 bl478 (size13)
 *  b6 | script13 st x150 bl515 amber
 *  b7 | box x140..940 y540..592 rx14 · line cx540 bl571 size13
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Motion becomes position, and position becomes motion", "Motion banta hai position, position banta hai motion")}
        </T>
      </Fade>

      {/* beat 0 — the bowl */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 180 180 Q 540 460 900 180" stroke={INK} sw={2.6} dur={0.9} />

      {/* beat 1 — the marble whizzes at the bottom, freezes at the rim */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Circle cx={540} cy={315} r={13} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(525, 300, 255, 197)} stroke={MUTED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={240} cy={185} r={13} fill={CREAM} stroke={MUTED} strokeWidth={1.6} />
      </Fade>

      {/* beat 2 — the costume change */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={110} size={14} fill={AMBER_DARK} script>
          {t("same energy, different costume: motion ↔ position", "same energy, alag costume: motion ↔ position")}
        </T>
      </Fade>

      {/* beat 3 — K at the bottom, U at the rim */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={345} size={16} fill={AMBER_DARK} weight={800}>
          K
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={240} y={222} size={16} fill={AMBER_DARK} weight={800}>
          U
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={375} size={12} fill={INK} script>
          {t("total never changes", "total kabhi nahi badalta")}
        </T>
      </Fade>

      {/* beat 4 — the hero formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 314 400 h 452 q 14 0 14 14 v 22 q 0 14 -14 14 h -452 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={432} size={18} fill={INK} weight={800}>
          E = K + U = ½kA² = constant
        </T>
      </Fade>

      {/* beat 5 — the two endpoints */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={150} y={478} size={13} fill={INK} anchor="start" weight={700}>
          {t("at x = 0: all K, U = 0", "x = 0 par: sab K, U = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={600} y={478} size={13} fill={INK} anchor="start" weight={700}>
          {t("at x = ±A: all U, K = 0", "x = ±A par: sab U, K = 0")}
        </T>
      </Fade>

      {/* beat 6 — why: conservative force */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={150} y={515} size={13} fill={AMBER_DARK} script anchor="start">
          {t("force is conservative ⇒ K and U trade off exactly", "force conservative hai ⇒ K aur U exactly trade off karte hain")}
        </T>
      </Fade>

      {/* beat 7 — the savings-account picture */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 154 540 h 772 q 14 0 14 14 v 24 q 0 14 -14 14 h -772 q -14 0 -14 -14 v -24 q 0 -14 14 -14"
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={571} size={13} fill={INK} weight={700}>
          {t(
            "like a fixed saving: current a/c (K) ↔ fixed deposit (U), net worth same",
            "jaise fixed saving: current a/c (K) ↔ fixed deposit (U), net worth same rehta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch03 · Section 23 — "Board-level: work done as a dot product"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.7, 31.8, 54.0, 74.9, 87.7, 94.0, 113.0]):
 *  0 heading + problem
 *  1 recognise: work = F·d → scalar
 *  2 diagram: F and d arrows, genuine agreement
 *  3 which form: components → component form
 *  4 multiply matching, add
 *  5 ANSWER: 18 J
 *  6 scalar shape check
 *  7 the quiet point: no angle ever needed
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 48 · underline M340 62 h400 · problem cx540 bl 84 s12
 *  b1 | line st x84 bl 118 s13 · underline M84 128 h430
 *  b2 | dot1 (150,440) F→(246,312) lbl end (180,370) s13 · dot2 (300,440)
 *       d→(390,305) lbl st (400,320) s13 · caption cx270 bl 484 s11
 *  b3 | line st x84 bl 520 s12
 *  b4 | st x580 bl 150 / 178 / 206 s14
 *  b5 | box x580..900 y226..272 text cx740 bl 258 s18
 *  b6 | red st x580 bl 312 / 336 s12
 *  b7 | bar M566 366 v56 · lines st x580 bl 384 / 408 / 432 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("CBSE BOARD LEVEL — work as a dot product", "CBSE BOARD LEVEL — work ek dot product")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "F = (3î + 4ĵ) N moves a body through d = (2î + 3ĵ) m — find the work done",
            "F = (3î + 4ĵ) N ek body ko d = (2î + 3ĵ) m hilata hai — work nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — recognise the operation */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "“work” = F·d — that one identification is most of the marks",
            "“work” = F·d — yahi ek pehchan sabse zyada marks hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 128 h 430" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — see the vectors */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Circle cx={150} cy={440} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(150, 440, 246, 312)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={180} y={370} size={13} fill={INK} weight={700} anchor="end">
          F = 3î + 4ĵ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Circle cx={300} cy={440} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={arrowD(300, 440, 390, 305)} stroke={AMBER_DARK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={400} y={320} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          d = 2î + 3ĵ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={270} y={484} size={11} fill={GREEN} script>
          {t(
            "not parallel, not ⊥ — genuine agreement → W is positive",
            "na parallel, na ⊥ — sachcha agreement → W positive hoga"
          )}
        </T>
      </Fade>

      {/* beat 3 — which form */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={520} size={12} fill={INK} script anchor="start">
          {t(
            "no angle given, components given → component form (cosθ here = wasted effort)",
            "angle diya nahi, components diye hain → component form (yahan cosθ = mehnat barbaad)"
          )}
        </T>
      </Fade>

      {/* beat 4 — multiply matching, add */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={150} size={14} fill={INK} weight={700} anchor="start">
          î :  3 × 2 = 6
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={178} size={14} fill={INK} weight={700} anchor="start">
          ĵ :  4 × 3 = 12
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={580} y={206} size={14} fill={INK} weight={700} anchor="start">
          W = 6 + 12
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 592 226 h 296 q 12 0 12 12 v 22 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={740} y={258} size={18} fill={INK} weight={800}>
          W = 18 J
        </T>
      </Fade>

      {/* beat 6 — the shape of the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={580} y={312} size={12} fill={RED} script anchor="start">
          {t(
            "work is a SCALAR — joules, no direction attached",
            "work SCALAR hai — joule, koi direction nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={580} y={336} size={12} fill={RED} script anchor="start">
          {t(
            "writing 18î + …ĵ contradicts the operation you just used",
            "18î + …ĵ likhna usi operation se takraana hai jo abhi use kiya"
          )}
        </T>
      </Fade>

      {/* beat 7 — the quiet point */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 566 366 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={580} y={384} size={12} fill={GREEN} script anchor="start">
          {t(
            "the dot picked out the along-part AUTOMATICALLY",
            "dot ne saath-wala hissa KHUD chun liya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={580} y={408} size={12} fill={GREEN} script anchor="start">
          {t(
            "no angle computed, nothing resolved — one line from components",
            "na angle nikala, na kuchh resolve kiya — components se ek hi line"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={580} y={432} size={12} fill={INK} script anchor="start">
          {t(
            "which is exactly why work is DEFINED as F·d",
            "isi liye work ki DEFINITION hi F·d hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

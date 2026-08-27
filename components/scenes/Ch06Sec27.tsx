/**
 * Ch06 · Section 27 — "Worked example: torque on a bolt [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 10.19, 16.25, 32.55, 41.94, 45.69] — b0..b1 are 1 s in EN;
 * hi b5..b7 are 1 s → staggers kept short):
 *  0 title + problem subline
 *  1 figure: bolt, spanner, F at 30°, dashed handle extension, θ arc, labels
 *  2 givens line
 *  3 formula chip
 *  4 substitution line
 *  5 red presentation note (right)
 *  6 green answer box
 *  7 F sinθ component on figure + green line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | bolt c(200,260) r13 · spanner x215..480 y251..269 · F (475,252)→(566,199)
 *       "F = 40 N" st(572,192) · ext dash (480,260)→(585,260) · θ arc r35 ·
 *       "30°"(528,242) · "r = 0.25 m" cx340 bl 300 · "bolt" cx200 bl 300
 *  b2 | sans15 st x80 bl 370
 *  b3 | chip x80 y395 w220 h38
 *  b4 | sans16 st x80 bl 475
 *  b5 | script12 st x560 bl 370 / bl 396
 *  b6 | green box x560..900 y420..480 · cx730 bl 458
 *  b7 | F⊥ dash (480,250)→(480,205) green · "F sinθ" st(490,220) ·
 *       line script13 st x80 bl 545 · underline y565 x80..560
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

export default function Ch06Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("torque on a bolt [CBSE board]", "bolt par torque [CBSE board]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "40 N at 30° on a 0.25 m spanner — torque about the bolt?",
            "0.25 m spanner par 30° pe 40 N — bolt ke baare mein torque?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 187 260 a 13 13 0 1 0 26 0 a 13 13 0 1 0 -26 0"
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={200} y={300} size={11} fill={MUTED} script>
          bolt
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 215 251 h 265 v 18 h -265"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Path
          d="M 480 260 H 585"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 5"
        />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(475, 252, 566, 199)} stroke={AMBER} sw={3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={572} y={192} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          F = 40 N
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 510 260 A 35 35 0 0 0 505 243"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={528} y={242} size={12} fill={AMBER_DARK} weight={700}>
          30°
        </T>
        <T x={340} y={300} size={13} fill={INK} weight={700}>
          r = 0.25 m
        </T>
      </Fade>

      {/* beat 2 — givens */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={80} y={370} size={15} fill={INK} anchor="start" weight={700}>
          {t("given:  F = 40 N · r = 0.25 m · θ = 30°", "diya:  F = 40 N · r = 0.25 m · θ = 30°")}
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={80} y={395} w={220} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          τ = r F sinθ
        </Chip>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={80} y={475} size={16} fill={INK} anchor="start" weight={700}>
          τ = (0.25)(40) sin30° = (0.25)(40)(0.5)
        </T>
      </Fade>

      {/* beat 5 — presentation note */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={370} size={12} fill={RED} script anchor="start">
          {t("carry N·m — NEVER joules", "N·m likho — joules KABHI nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={396} size={12} fill={RED} script anchor="start">
          {t("state the sense if asked", "sense poocha ho to zaroor batao")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 572 420 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={730} y={458} size={22} fill={INK} weight={700}>
          τ = 5 N·m
        </T>
      </Fade>

      {/* beat 7 — why the sine */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Path
          d={arrowD(480, 250, 480, 205)}
          fill="none"
          stroke={GREEN}
          strokeWidth={2.2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={490} y={220} size={12} fill={GREEN_DARK} anchor="start" weight={700}>
          F sinθ
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "sinθ picks out the ⊥ component — only that part turns the bolt",
            "sinθ ⊥ component chun leta hai — wahi hissa bolt ghumata hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 80 565 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}

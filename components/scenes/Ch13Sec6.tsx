/**
 * Ch13 · Section 6 — "Derivation: angular frequency from the force law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.2, 17.86, 26.25, 32.74, 44.11, 51.41, 60.34]):
 *  0 wall + dashed equilibrium mark
 *  1 spring + block "m" + red force arrow F=-kx
 *  2 m a = −k x (Newton II)
 *  3 a = −(k/m) x
 *  4 hero: ω = √(k/m) , T = 2π√(m/k)
 *  5 intuition: stiffer spring ⇒ faster / heavier mass ⇒ slower
 *  6 the recipe (3 steps) box
 *  7 closing verdict: same recipe, every system
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | wall x58..74 y150..240 · eq dashed x290 y150..240 · "equilibrium" cx290 bl258
 *  b1 | spring 74,195→350,195 zigzag · block x350..410 y165..225 · "m" cx380 bl202 ·
 *      arrow 342,195→300,195 · "F = −kx" cx321 bl130 script
 *  b2 | st x70 bl275 size17
 *  b3 | st x70 bl312 size16
 *  b4 | box x82..478 y332..390 rx14 · line cx280 bl368 size18
 *  b5 | up-icon x80..90 y410..425 · st x105 bl430 · down-icon x595..605 y410..425 · st x615 bl430
 *  b6 | box x270..810 y460..520 rx12 · line cx540 bl490
 *  b7 | box x260..820 y532..588 rx12 · line cx540 bl564
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Reading ω straight off the restoring force", "Restoring force se seedha ω padhna")}
        </T>
      </Fade>

      {/* beat 0 — wall and the equilibrium mark */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 58 150 h 16 v 90 h -16 z" stroke={INK} sw={1.8} dur={0.5} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Path d="M 290 150 V 240" stroke={GREEN} strokeWidth={1.8} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.5)}>
        <T x={290} y={258} size={11} fill={GREEN} script>
          {t("equilibrium", "equilibrium")}
        </T>
      </Fade>

      {/* beat 1 — spring, block, and the restoring force */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 74 195 L 91 181 L 125 209 L 159 181 L 193 209 L 227 181 L 261 209 L 295 181 L 329 209 L 350 195"
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 1.1)}
          d="M 350 165 h 60 v 60 h -60 z"
          stroke={INK}
          sw={2}
          dur={0.5}
          fill={AMBER}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={380} y={202} size={20} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(342, 195, 300, 195)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={321} y={130} size={12} fill={RED} script>
          F = −kx
        </T>
      </Fade>

      {/* beat 2 — Newton's second law */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={275} size={17} fill={INK} anchor="start" weight={700}>
          m a = −k x
        </T>
      </Fade>

      {/* beat 3 — divide by mass */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={312} size={16} fill={INK} anchor="start" weight={700}>
          a = −(k/m) x
        </T>
      </Fade>

      {/* beat 4 — the hero result */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 96 332 h 368 q 14 0 14 14 v 30 q 0 14 -14 14 h -368 q -14 0 -14 -14 v -30 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={280} y={368} size={18} fill={INK} weight={800}>
          ω = √(k/m) ,  T = 2π√(m/k)
        </T>
      </Fade>

      {/* beat 5 — the intuition */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 85 425 V 410 M 79 416 L 85 410 L 91 416" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={105} y={430} size={13} fill={INK} anchor="start">
          {t("stiffer spring ⇒ faster ω", "spring jitni stiff, utna fast ω")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 600 410 V 425 M 594 419 L 600 425 L 606 419" stroke={MUTED} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={615} y={430} size={13} fill={INK} anchor="start">
          {t("heavier mass ⇒ slower ω", "mass jitna heavy, utna slow ω")}
        </T>
      </Fade>

      {/* beat 6 — the recipe */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 282 460 h 516 q 12 0 12 12 v 36 q 0 12 -12 12 h -516 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
          stroke={AMBER_DARK}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={490} size={13} fill={INK} weight={700}>
          {t(
            "① write net force → ② force it into −(const)·x → ③ read ω² off that constant",
            "① net force likho → ② −(constant)·x shape mein lao → ③ us constant se ω² padho"
          )}
        </T>
      </Fade>

      {/* beat 7 — closing verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 272 532 h 536 q 12 0 12 12 v 32 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -32 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={564} size={13} fill={INK} weight={700}>
          {t(
            "pendulum · floating block · liquid tube · Earth-drop — same 3 lines, every time",
            "pendulum · floating block · tube ka liquid · Earth-drop — wahi 3 lines, hamesha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

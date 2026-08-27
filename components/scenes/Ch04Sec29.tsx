/**
 * Ch04 · Section 29 — "Derivation: tension and normal reaction on a smooth incline"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.0, 26.0, 37.4, 62.2, 85.1, 99.2, 115.8]):
 *  0 title
 *  1 setup + find lines
 *  2 figure: incline, block, T / N / mg arrows, θ
 *  3 axes-choice notes (right col)
 *  4 resolve mg: dashed components + pairing notes
 *  5 box: T = mg sinθ
 *  6 box: N = mg cosθ
 *  7 red margin: θ=0 and θ=90° sanity checks
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  incline M120 400 L520 400 L520 190 Z · θ arc at (120,400), "θ"(175,388) ·
 *  block quad M302 304 L338 286 L324 259 L288 278 Z ·
 *  T arr (344,283)→(415,246) "T"(424,240) · N arr (306,262)→(280,213) "N"(268,206) ·
 *  mg arr (313,290)→(313,370) "mg"(329,352) ·
 *  b4 dashed: sin (313,290)→(251,323) lbl end x246 bl 340 ·
 *    cos (313,290)→(339,339) lbl st x352 bl 360
 *  b3 | st x600 bl 150 / 174 / 198 · b4 notes st x600 bl 240 / 264 / 288
 *  b5 box x600..870 y320..362 bl 348 · b6 box x600..870 y380..422 bl 408
 *  b7 | bar x66 y470..548 · lines st x84 bl 490 / 516 / 540
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

export default function Ch04Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — block on a smooth incline",
            "CBSE Derivation — smooth incline par block"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "mass m on a frictionless incline (angle θ) · light string parallel to the slope",
            "frictionless incline (angle θ) par mass m · halki string slope ke parallel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: tension T and normal reaction N", "nikaalo: tension T aur normal reaction N")}
        </T>
      </Fade>

      {/* beat 2 — the three forces */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 120 400 L 520 400 L 520 190 Z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 302 304 L 338 286 L 324 259 L 288 278 Z"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M 168 400 Q 166 384 154 382"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={180} y={390} size={13} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(344, 283, 415, 246)}
        stroke={AMBER}
        sw={2.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.8)}
        d={arrowD(306, 262, 280, 213)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.6)}
        d={arrowD(313, 290, 313, 370)}
        stroke={RED}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={424} y={240} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          T
        </T>
        <T x={268} y={206} size={14} fill={GREEN} weight={700} anchor="end">
          N
        </T>
        <T x={329} y={352} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>

      {/* beat 3 — choose the axes well */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "choose axes ALONG + PERPENDICULAR to the slope",
            "axes slope ke ALONG + PERPENDICULAR chuno"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={600} y={174} size={13} fill={INK} script anchor="start">
          {t(
            "T and N then need NO resolving at all",
            "phir T aur N ko resolve karna hi nahi padta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={600} y={198} size={13} fill={MUTED} script anchor="start">
          {t(
            "one decision: two lines — or a page of trigonometry",
            "ek faisla: do lines — ya poora panna trigonometry"
          )}
        </T>
      </Fade>

      {/* beat 4 — resolve gravity */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Path
          d="M 313 290 L 258 319"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="6 5"
          fill="none"
        />
        <Path
          d="M 313 290 L 340 341"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="6 5"
          fill="none"
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={246} y={340} size={12} fill={RED} script anchor="end">
          mg·sinθ
        </T>
        <T x={352} y={368} size={12} fill={RED} script anchor="start">
          mg·cosθ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={600} y={240} size={13} fill={INK} script anchor="start">
          {t(
            "only gravity needs resolving:",
            "sirf gravity ko resolve karna hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={600} y={264} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "mg·sinθ down the slope · mg·cosθ into the surface",
            "mg·sinθ slope ke neeche · mg·cosθ surface ke andar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={600} y={288} size={13} fill={GREEN} script anchor="start">
          {t(
            "SINE down the slope · COSINE into the surface — memorize it",
            "SINE slope ke neeche · COSINE surface mein — ratt lo"
          )}
        </T>
      </Fade>

      {/* beat 5 — along the incline */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 612 320 h 246 q 12 0 12 12 v 18 q 0 12 -12 12 h -246 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={735} y={348} size={17} fill={INK} weight={800}>
          {t("along:  T = mg·sinθ", "along:  T = mg·sinθ")}
        </T>
      </Fade>

      {/* beat 6 — perpendicular */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 612 380 h 246 q 12 0 12 12 v 18 q 0 12 -12 12 h -246 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={735} y={408} size={17} fill={INK} weight={800}>
          {t("perp:  N = mg·cosθ", "perp:  N = mg·cosθ")}
        </T>
      </Fade>

      {/* beat 7 — sanity checks */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "θ = 0: T = 0, N = mg — flat ground, the floor carries everything ✓",
            "θ = 0: T = 0, N = mg — samtal zameen, floor sab uthata hai ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "θ = 90°: T = mg, N = 0 — vertical wall, the string carries everything ✓",
            "θ = 90°: T = mg, N = 0 — seedhi deewar, string sab uthati hai ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={540} size={14} fill={GREEN} script anchor="start">
          {t(
            "both extremes match intuition — the result is almost surely right",
            "dono sire intuition se milte hain — result lagbhag pakka sahi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

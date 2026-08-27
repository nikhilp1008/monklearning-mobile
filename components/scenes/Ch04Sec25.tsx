/**
 * Ch04 · Section 25 — "Resolution: splitting one awkward force into two easy ones"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.9, 36.3, 53.3, 76.0, 88.0, 104.5, 129.3]):
 *  0 title
 *  1 left panel: F at angle θ, dashed perpendicular pieces
 *  2 formula box F_x = F cosθ · F_y = F sinθ
 *  3 red notes: cos hugs the angle, sin across
 *  4 line: vector → two scalars
 *  5 green box: ΣFx = 0 · ΣFy = 0
 *  6 right panel: incline + tilted axes + red pro-tip bar
 *  7 equilibrant lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L panel | F arr (170,280)→(330,160) · Fx dash arr (170,280)→(330,280) lbl cx250 bl 302 ·
 *    Fy dash arr (330,280)→(330,160) lbl st x342 bl 225 · θ arc at origin, "θ"(222,270) ·
 *    "F" (238,204)
 *  b2 box x120..420 y330..372 bl 356 · b3 st x84 bl 404 / 428
 *  b4 st x84 bl 464 · b5 box x120..420 y480..524 bl 508
 *  R panel | incline M600 300 L980 300 L980 160 Z · x′ arr (730,252)→(870,200) ·
 *    y′ arr (800,226)→(759,113) · mg arr (800,230)→(800,296)
 *    b6 | bar x560 y360..432 · lines st x578 bl 380 / 404 / 428
 *  b7 | lines st x84 bl 556 / 580
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec25({ currentTime, reveals, language }: SceneProps) {
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
            "resolution — the one trick that solves every equilibrium problem",
            "resolution — wo ek trick jo har equilibrium problem hal karta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — split the awkward force */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={arrowD(170, 280, 330, 160)}
        stroke={AMBER}
        sw={3}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={238} y={204} size={15} fill={AMBER_DARK} weight={700}>
          F
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Path
          d={`${"M 170 280 L 330 280"}`}
          stroke={GREEN}
          strokeWidth={2.2}
          strokeDasharray="6 5"
          fill="none"
        />
        <Path
          d="M 330 280 L 330 160"
          stroke={GREEN}
          strokeWidth={2.2}
          strokeDasharray="6 5"
          fill="none"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d="M 212 280 Q 210 260 199 258"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={224} y={272} size={13} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={250} y={302} size={13} fill={GREEN} script>
          F·cosθ
        </T>
        <T x={342} y={225} size={13} fill={GREEN} script anchor="start">
          F·sinθ
        </T>
      </Fade>

      {/* beat 2 — the components */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 132 330 h 276 q 12 0 12 12 v 18 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={270} y={356} size={16} fill={INK} weight={800}>
          F_x = F·cosθ&nbsp;&nbsp;·&nbsp;&nbsp;F_y = F·sinθ
        </T>
      </Fade>

      {/* beat 3 — where marks leak */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={404} size={13} fill={RED} script anchor="start">
          {t(
            "cos HUGS the angle · sin sits ACROSS from it",
            "cos angle se CHIPKA hota hai · sin uske SAAMNE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={428} size={13} fill={RED} script anchor="start">
          {t(
            "'x always gets cos' breaks when θ is from the vertical",
            "'x ko hamesha cos' wahin toot'ta hai jab θ vertical se napa ho"
          )}
        </T>
      </Fade>

      {/* beat 4 — what resolution buys */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={464} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "once split: one hard vector statement → two easy scalar ones",
            "bant'te hi: ek mushkil vector statement → do aasaan scalar"
          )}
        </T>
      </Fade>

      {/* beat 5 — the whole method */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 132 480 h 276 q 12 0 12 12 v 20 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={270} y={508} size={17} fill={INK} weight={800}>
          Σ Fx = 0&nbsp;&nbsp;·&nbsp;&nbsp;Σ Fy = 0
        </T>
      </Fade>

      {/* beat 6 — tilt the axes */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 600 300 L 980 300 L 980 160 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={arrowD(730, 252, 870, 200)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.6)}
        d={arrowD(800, 226, 759, 113)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.2)}
        d={arrowD(800, 230, 800, 296)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={882} y={198} size={13} fill={GREEN} weight={700} anchor="start">
          x′
        </T>
        <T x={745} y={106} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          y′
        </T>
        <T x={816} y={286} size={12} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5)} d="M 560 360 v 74" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={578} y={380} size={13} fill={RED} script anchor="start">
          {t(
            "on a slope: axes ALONG + PERPENDICULAR to the surface",
            "slope par: axes surface ke ALONG + PERPENDICULAR lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={578} y={404} size={13} fill={RED} script anchor="start">
          {t(
            "two forces already sit on the axes — only gravity resolves",
            "do forces pehle se axes par — sirf gravity resolve hoti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 15)}>
        <T x={578} y={428} size={13} fill={GREEN} script anchor="start">
          {t(
            "the right axes cut the algebra in HALF",
            "sahi axes algebra AADHI kar dete hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — equilibrant */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={556} size={13} fill={INK} script anchor="start">
          {t(
            "equilibrant = the ONE force that balances all the rest = −resultant",
            "equilibrant = wo EK force jo baaki sabko balance kare = −resultant"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={580} size={13} fill={GREEN} script anchor="start">
          {t(
            "resultant: what the forces do to you · equilibrant: what YOU must do to stop them",
            "resultant: forces aapke saath kya karti hain · equilibrant: unhe rokne ko AAP kya karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

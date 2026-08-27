/**
 * Ch03 · Section 40 — "Pro-tip: two 1-D problems sharing a clock"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.3, 16.9, 31.2, 42.8, 53.7, 67.8, 80.0]):
 *  0 heading
 *  1 hero: TWO 1-D problems, ONE clock
 *  2 resolve along smart axes
 *  3 four equations, solve, recombine
 *  4 recognition unlocks the toolkit
 *  5 the two equations, per component
 *  6 same trusted machinery, twice
 *  7 mnemonic hero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x260..820 y88..134 text cx540 bl 118 s15
 *  b2 | st x84 bl 178 s13 · caption st x84 bl 202 s11
 *  b3 | st x84 bl 240 s13 · caption st x84 bl 264 s11
 *  b4 | line st x84 bl 306 s12 · underline M84 316 h440
 *  b5 | boxes: x120..470 y336..380 (cx295 bl 364) · x520..960 y336..380 (cx740 bl 364)
 *  b6 | caption cx540 bl 412 s12
 *  b7 | box x280..800 y450..502 text cx540 bl 482 s16 script
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
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

export default function Ch03Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "PRO-TIP — resolve, solve, recombine",
            "PRO-TIP — resolve, solve, recombine"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the reframe */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 272 88 h 536 q 12 0 12 12 v 22 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={118} size={15} fill={GREEN} weight={800} script>
          {t(
            "every plane problem = TWO 1-D problems sharing a clock",
            "har plane problem = ghadi share karti DO 1-D problems"
          )}
        </T>
      </Fade>

      {/* beat 2 — resolve smartly */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={178} size={13} fill={INK} script anchor="start">
          {t(
            "resolve along convenient ⊥ axes — often along and across the acceleration",
            "sahuliyat waale ⊥ axes chuno — aksar acceleration ke saath aur aar-paar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={202} size={11} fill={MUTED} script anchor="start">
          {t(
            "that puts the physics on one axis and simple uniform motion on the other",
            "isse physics ek axis par aur seedhi uniform motion doosri par aa jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the procedure */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={240} size={13} fill={INK} script anchor="start">
          {t(
            "write the four scalar equations → solve each axis with ordinary kinematics",
            "chaaron scalar equations likho → har axis aam kinematics se solve karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={84} y={264} size={11} fill={MUTED} script anchor="start">
          {t(
            "vector addition happens only at the very end",
            "vector addition sirf sabse aakhir mein hota hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — recognition unlocks */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={306} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "see “constant acceleration in a plane” → a whole toolkit unlocks",
            "“plane mein constant acceleration” dikhe → poora toolkit khul jata hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 84 316 h 440" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — the two equations */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 132 336 h 326 q 12 0 12 12 v 20 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={295} y={364} size={14} fill={INK} weight={800}>
          v = v₀ + a t
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d="M 532 336 h 416 q 12 0 12 12 v 20 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={740} y={364} size={14} fill={INK} weight={800}>
          r = r₀ + v₀t + ½ a t²
        </T>
      </Fade>

      {/* beat 6 — nothing new */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={412} size={12} fill={INK} script>
          {t(
            "the same equations you already trust — the familiar machinery, run twice",
            "wahi equations jin par pehle se bharosa hai — jaani-pehchani machinery, do baar"
          )}
        </T>
      </Fade>

      {/* beat 7 — the mnemonic */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 292 450 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={482} size={16} fill={GREEN} weight={800} script>
          {t(
            "Two motions, one clock — resolve, solve, recombine",
            "Do motions, ek ghadi — resolve, solve, recombine"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

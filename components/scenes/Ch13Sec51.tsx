/**
 * Ch13 · Section 51 — "The universal recipe on three classic systems"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.4, 19.37, 24.22, 40.04, 53.28, 68.78, 81.05]):
 *  0 shelf
 *  1 displace by small amount, find net restoring force, force into ẍ=-ω²x, read ω
 *  2 diagram: U-tube, floating body, Earth tunnel — restoring effect marked
 *  3 U-tube: ÿ=-2g/L·y ⇒ T=2π√(L/2g)
 *  4 Float: ẍ=-g/h·x ⇒ T=2π√(h/g)
 *  5 Tunnel: r̈=-g/R·r ⇒ T=2π√(R/g) (high)
 *  6 fed by: U-tube 2y, float Aρgx, tunnel gr/R — different physics, identical shape
 *  7 hero (high): one method, every system: no memorised formula, just ẍ=-ω²x
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size11
 *  b2 | push-arrow 675,78→675,93 red · U-tube 655,95→695,95 · "U-tube" cx675 bl168 ·
 *      push-arrow 750,90→750,103 red · liquid y125 x715..785 · box x735..765 y105..145 · "float" cx750 bl168 ·
 *      push-arrow 855,95→855,108 red · circle c(855,125) r25 · "tunnel" cx855 bl168
 *  b3 | st x70 bl135 size11
 *  b4 | st x70 bl163 size11
 *  b5 | st x70 bl192 size11 green (high)
 *  b6 | st x70 bl222 size11
 *  b7 | box x70..660 y245..295 rx14 · line cx365 bl276 size17
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
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Displace, restore, and read off omega", "Displace karo, restore, aur omega padho")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the recipe */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={11} fill={INK} anchor="start">
          {t(
            "displace by small amount, find net restoring force, force into ẍ=-ω²x, read ω",
            "thoda displace karo, net restoring force dhoondo, ẍ=-ω²x mein force karo, ω padho"
          )}
        </T>
      </Fade>

      {/* beat 2 — three systems, restoring effect marked */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(675, 78, 675, 93)} stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 655 95 V 128 Q 655 150 675 150 Q 695 150 695 128 V 95" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={675} y={168} size={9} fill={INK}>
          {t("U-tube", "U-tube")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={arrowD(750, 90, 750, 103)} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Path d="M 715 125 H 785" stroke={MUTED} strokeWidth={1.2} fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 735 105 h 30 v 40 h -30 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={750} y={168} size={9} fill={INK}>
          {t("float", "float")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={arrowD(855, 95, 855, 108)} stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d="M 855 100 A 25 25 0 1 1 854.9 100" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={855} y={168} size={9} fill={INK}>
          {t("tunnel", "tunnel")}
        </T>
      </Fade>

      {/* beat 3 — the U-tube formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={135} size={11} fill={INK} anchor="start" weight={700}>
          U-tube: ÿ=-2g/L·y ⇒ T=2π√(L/2g)
        </T>
      </Fade>

      {/* beat 4 — the float formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={163} size={11} fill={INK} anchor="start" weight={700}>
          Float: ẍ=-g/h·x ⇒ T=2π√(h/g)
        </T>
      </Fade>

      {/* beat 5 — the tunnel formula, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={192} size={11} fill={GREEN_DARK} anchor="start" weight={800}>
          Tunnel: r̈=-g/R·r ⇒ T=2π√(R/g)
        </T>
      </Fade>

      {/* beat 6 — what fed each */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={222} size={11} fill={INK} anchor="start">
          fed by: U-tube 2y, float Aρgx, tunnel gr/R — different physics, identical shape
        </T>
      </Fade>

      {/* beat 7 — the payoff, hero */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 245 h 562 q 14 0 14 14 v 22 q 0 14 -14 14 h -562 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={365} y={276} size={17} fill={INK} weight={800}>
          {t(
            "one method, every system: no memorised formula, just ẍ=-ω²x",
            "ek method, har system: koi ratta nahi, bas ẍ=-ω²x"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

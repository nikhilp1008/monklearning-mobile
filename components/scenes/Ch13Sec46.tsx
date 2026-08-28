/**
 * Ch13 · Section 46 — "Superposition and how to certify any SHM"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.95, 33.78, 43.55, 52.91, 63.5, 76.93, 90.36]):
 *  0 shelf
 *  1 displace it, find restoring force/energy · show ẍ = −(positive constant)·x
 *  2 hero: constant = ω² , T = 2π/ω — one method, every system
 *  3 diagram: collinear SHMs add (phasors); perpendicular trace a 2D path
 *  4 collinear SHMs add like phasors ⇒ another SHM, same freq
 *  5 perpendicular SHMs trace a path: line, ellipse, circle, Lissajous
 *  6 caution (high): reference-circle exact only for uniform motion; test only for small x
 *  7 collinear ⇒ clean SHM only if same frequency; different freq ⇒ beats
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size12 · st x70 bl133 size12
 *  b2 | box x70..500 y160..205 rx14 · line cx285 bl187 size14
 *  b3 | panel1: line y150 x650..800 · arrow1(green) 650,150→715,150 · arrow2(amber) 715,150→755,150 ·
 *      resultant(red) 650,172→755,172 · caption cx700 bl205 ·
 *      panel2: x-axis 850..1000 y150 → · y-axis x925 y195..105 ↑ · ellipse c(925,150) rx60 ry45 ·
 *      caption cx925 bl218
 *  b4 | st x70 bl245 size12
 *  b5 | st x70 bl275 size11
 *  b6 | script12 st x70 bl310 amber
 *  b7 | script11 st x70 bl350
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("One test for every system; two ways to combine SHMs", "Har system ke liye ek test; SHMs combine karne ke do tareeke")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the universal recipe */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={12} fill={INK} anchor="start">
          {t("displace it, find restoring force/energy", "isse thoda displace karo, restoring force/energy dhoondo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={133} size={12} fill={INK} anchor="start">
          {t("show: ẍ = −(positive constant)·x", "dikhao: ẍ = −(positive constant)·x")}
        </T>
      </Fade>

      {/* beat 2 — the hero: one method for everything */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.3)}
          d="M 84 160 h 402 q 14 0 14 14 v 17 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={285} y={187} size={14} fill={INK} weight={800}>
          constant = ω² , T = 2π/ω — one method, every system
        </T>
      </Fade>

      {/* beat 3 — the two ways to combine */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Path d="M 650 150 H 800" stroke={MUTED} strokeWidth={1.2} fill="none" />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(650, 150, 715, 150)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={arrowD(715, 150, 755, 150)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={arrowD(650, 172, 755, 172)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={700} y={205} size={10} fill={INK}>
          {t("collinear ⇒ add (phasors)", "collinear ⇒ add (phasors)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={arrowD(850, 150, 1000, 150)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d={arrowD(925, 195, 925, 105)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d="M 865 150 A 60 45 0 1 1 864.9 150" stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 4.1)}>
        <T x={925} y={218} size={10} fill={INK}>
          {t("⊥ ⇒ 2D path", "⊥ ⇒ 2D path")}
        </T>
      </Fade>

      {/* beat 4 — collinear addition */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={245} size={12} fill={INK} anchor="start">
          {t(
            "collinear SHMs add like phasors ⇒ another SHM, same freq",
            "collinear SHMs phasors ki tarah add ⇒ same freq ki ek aur SHM"
          )}
        </T>
      </Fade>

      {/* beat 5 — perpendicular tracing */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={275} size={11} fill={INK} anchor="start">
          {t(
            "perpendicular SHMs trace a path: line, ellipse, circle, Lissajous",
            "perpendicular SHMs ek path banate hain: line, ellipse, circle, Lissajous"
          )}
        </T>
      </Fade>

      {/* beat 6 — the scope cautions, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={310} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "reference-circle: exact only for UNIFORM motion; test only for SMALL x",
            "reference-circle: sirf UNIFORM motion ke liye exact; test sirf SMALL x ke liye"
          )}
        </T>
      </Fade>

      {/* beat 7 — the frequency caveat */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={350} size={11} fill={INK} script anchor="start">
          {t(
            "collinear ⇒ clean SHM only if SAME frequency; different freq ⇒ beats",
            "collinear ⇒ clean SHM sirf jab SAME frequency ho; alag freq ⇒ beats"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

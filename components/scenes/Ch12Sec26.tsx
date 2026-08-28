/**
 * Ch12 · Section 26 — Worked example [JEE Advanced]: a directed, one-dimensional gas
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 13.3, 26.1]):
 *  0 title + problem · 1 THE PICTURE: directed gas (x-walls highlighted, all
 *    arrows along x) vs isotropic gas (all walls plain, random arrows) · 2
 *    part(a): no isotropy ⇒ mean-sq x-vel = full v² · 3 P_x = (Nm/V)v² · 4
 *    part(b): side walls feel zero pressure · 5 part(c): isotropic gives ⅓,
 *    so directed pushes 3× harder · 6 verdict: meaning of ⅓
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 21, red)          | T mid | x230..850 y33..70 (bl60)
 *  b0 | problem (13, ink, script)       | T mid | x540 y88
 *  b1 | directed panel (x-walls red)    | Draw  | x120..460 y130..240
 *  b1 | isotropic panel (all plain)     | Draw  | x620..960 y130..240
 *  b2 | part-a line (14, ink)           | T mid | x540 y270
 *  b3 | P_x formula (15, amber_dark)    | T mid | x540 y298
 *  b4 | part-b line (14, red)           | T mid | x540 y326
 *  b5 | part-c line (14, ink)           | T mid | x540 y354
 *  b6 | verdict (script 15, green) ×2   | T mid | x540 y392 / y416
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ISO_DOTS: [number, number, number, number][] = [
  [680, 162, 710, 147],
  [780, 212, 750, 232],
  [880, 157, 910, 172],
  [720, 222, 695, 197],
  [850, 207, 875, 227],
];

export default function Ch12Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("a directed, one-dimensional gas [JEE Advanced]", "ek directed, one-dimensional gas [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t(
            "N molecules, all along x at speed v — P on x-walls? side walls? vs isotropic?",
            "N molecules, sab x ke saath speed v par — x-walls? side walls? vs isotropic?"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: directed vs isotropic */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={290} y={116} size={14} fill={INK} weight={700}>
          {t("directed (1D)", "directed (1D)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 130 130 V 240" stroke={RED} sw={4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 450 130 V 240" stroke={RED} sw={4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M 130 130 H 450" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 130 240 H 450" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <G>
          {[150, 190, 230, 270, 310].map((x, i) => (
            <Circle key={x} cx={x} cy={152 + (i % 3) * 30} r={5} fill={AMBER_DARK} />
          ))}
        </G>
      </Fade>
      {[
        [150, 152, 185, 152],
        [190, 182, 225, 182],
        [270, 212, 235, 212],
        [310, 152, 345, 152],
      ].map(([x, y, ax, ay], i) => (
        <Draw key={`${x}-${y}`} on={beat >= 1} delay={dl(1, 2.2 + i * 0.15)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      ))}

      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={790} y={116} size={14} fill={INK} weight={700}>
          {t("isotropic (3D)", "isotropic (3D)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d="M 620 130 h 340 v 110 h -340 z" stroke={INK} sw={2.2} dur={0.8} />
      {ISO_DOTS.map(([x, y, ax, ay], i) => (
        <G key={`${x}-${y}`}>
          <Fade on={beat >= 1} delay={dl(1, 4.2 + i * 0.2)}>
            <Circle cx={x} cy={y} r={5} fill={AMBER_DARK} />
          </Fade>
          <Draw on={beat >= 1} delay={dl(1, 4.4 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.6} dur={0.3} />
        </G>
      ))}

      {/* beat 2 — part (a) */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={270} size={14} fill={INK}>
          {t(
            "part (a): no isotropy ⇒ mean-sq x-velocity = full v² (not ⅓)",
            "part (a): koi isotropy nahi ⇒ mean-sq x-velocity = full v² (not ⅓)"
          )}
        </T>
      </Fade>

      {/* beat 3 — P_x formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={298} size={15} fill={AMBER_DARK} weight={700}>
          P_x = (Nm/V)v²
        </T>
      </Fade>

      {/* beat 4 — part (b) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={326} size={14} fill={RED}>
          {t(
            "part (b): no y/z velocity ⇒ side walls feel ZERO pressure",
            "part (b): koi y/z velocity nahi ⇒ side walls par ZERO pressure"
          )}
        </T>
      </Fade>

      {/* beat 5 — part (c) */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={354} size={14} fill={INK}>
          {t(
            "part (c): isotropic gives ⅓(Nm/V)v² ⇒ directed pushes 3× harder",
            "part (c): isotropic ⅓(Nm/V)v² deta ⇒ directed 3× harder push"
          )}
        </T>
      </Fade>

      {/* beat 6 — the meaning of 1/3 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={392} size={15} fill={GREEN} script>
          {t(
            "this IS the meaning of ⅓: energy shared over 3 directions",
            "yehi hai ⅓ ka matlab: energy 3 directions mein baant di jaati"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={416} size={15} fill={GREEN} script>
          {t("strip isotropy, and the factor simply disappears", "isotropy hatao, factor bas gayab ho jata")}
        </T>
      </Fade>
    </Scene>
  );
}

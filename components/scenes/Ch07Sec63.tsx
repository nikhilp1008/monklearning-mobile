/**
 * Ch07 · Section 63 — "Why orbits give only GM, and how Cavendish weighed G"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.56, 27.05, 37.46, 50.86, 61.7, 78.17, 93.18]):
 *  0 title
 *  1 red: orbits give only the PRODUCT GM — glued together
 *  2 amber: must weigh masses in a lab instead
 *  3 red margin: pull ≈ weight of one grain of sand
 *  4 (continues, whisper-in-hurricane note)
 *  5 diagram: torsion fibre, dumbbell, large masses near
 *  6 mirror + light beam → readable swing (optical lever)
 *  7 green margin: amplifier for the weakest force
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  b1 | bar x66 y92..144 lines bl112/138
 *  b2 | line st x84 bl175
 *  b3 | bar x66 y200..252 lines bl220/246
 *  b5 | fibre M300 100 V180 · dumbbell bar M240 180 H360 + balls (240,180)r8/(360,180)r8 ·
 *      large mass dots (200,200)r14 / (400,160)r14 · caption cx300 bl380
 *  b6 | mirror rect (295,175,10,10) · beam line M305 180 → (700,180) → scale mark ·
 *      "optical lever" label cx600 bl420
 *  b7 | bar x66 y460..512 lines bl480/506
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — where does big G come from? */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Where does the number G come from?",
            "Number G kahan se aata hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — orbits give only the product GM */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 66 92 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={84} y={112} size={13} fill={RED} script anchor="start">
          {t(
            "every orbit gives only the PRODUCT GM",
            "har orbit sirf PRODUCT GM deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={84} y={138} size={13} fill={RED} script anchor="start">
          {t(
            "G and M are always glued together",
            "G aur M hamesha chipke hote hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — must weigh masses in a lab */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={175} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "to prise G loose: weigh masses in a LAB",
            "G alag karne ko: masses LAB mein tolo"
          )}
        </T>
      </Fade>

      {/* beat 3 — a grain of sand */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 66 200 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={84} y={220} size={13} fill={RED} script anchor="start">
          {t(
            "gravity so weak: like the weight of ONE grain of sand",
            "gravity itni weak: jaise EK ret ke daane ka weight"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={84} y={246} size={13} fill={RED} script anchor="start">
          {t(
            "a whisper buried in a hurricane",
            "toofan mein dabi ek fusfusahat"
          )}
        </T>
      </Fade>

      {/* beat 5 — the torsion balance */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 300 100 V 180" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.2)}
        d="M 240 180 H 360"
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Circle cx={240} cy={180} r={8} fill={INK} />
        <Circle cx={360} cy={180} r={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Circle cx={200} cy={200} r={14} fill={AMBER_DARK} />
        <Circle cx={400} cy={160} r={14} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={300} y={380} size={12} fill={INK} script>
          {t(
            "a light dumbbell on a fine fibre",
            "ek bareek fibre par halka dumbbell"
          )}
        </T>
      </Fade>

      {/* beat 6 — the optical lever */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Rect x={295} y={175} width={10} height={10} fill={GREEN} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.2)}
        d="M 305 180 L 700 180"
        stroke={GREEN}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Path d="M 700 150 V 210" stroke={INK} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={600} y={420} size={12} fill={GREEN} script>
          {t(
            "twist → light beam → big, readable swing",
            "twist → light beam → bada, padhne laayak swing"
          )}
        </T>
      </Fade>

      {/* beat 7 — an amplifier for the weakest force */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 460 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "an AMPLIFIER for the weakest force in nature",
            "prakriti ke sabse weak force ka AMPLIFIER"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "measuring G then let him weigh the Earth",
            "G naapkar unhone Earth tol li"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

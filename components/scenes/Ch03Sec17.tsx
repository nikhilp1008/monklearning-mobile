/**
 * Ch03 · Section 17 — "The cross product: how much of one vector lies across another"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.3, 36.1, 55.9, 69.0, 93.8, 118.6, 143.5]):
 *  0 heading
 *  1 archetype: torque on a spanner
 *  2 diagram: bolt + spanner, along vs across pushes, τ out of plane
 *  3 formula box: A×B = AB sinθ n̂
 *  4 n̂ by the right-hand rule
 *  5 turning lives around the axis
 *  6 red: the answer is a VECTOR
 *  7 green: parallel → zero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b2 | bolt circle (180,300) r16 · spanner M196 300 H420 sw6 ·
 *       along arrow (505,300)→(438,300) lbl st (445,332) s11 ·
 *       across arrow (400,230)→(400,286) lbl st (412,250) s11 ·
 *       arc M222 300 A42 42 0 0 0 192 262 + head (200,268)→(192,262) ·
 *       τ arrow (180,280)→(180,180) lbl st (192,200) s13 · caption cx260 bl 350 s11
 *  b3 | box x580..1010 y140..192 text cx795 bl 172 s18
 *  b4 | st x580 bl 232 s13 · underline M580 240 h300 · red st x580 bl 262 s11
 *  b5 | st x580 bl 300 s12 · st x580 bl 324 s12
 *  b6 | bar M566 348 v44 · lines st x580 bl 366 / 390 s12
 *  b7 | bar M566 420 v56 · lines st x580 bl 438 / 462 / 486 s12
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

export default function Ch03Sec17({ currentTime, reveals, language }: SceneProps) {
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
            "CROSS PRODUCT — how much lies ACROSS",
            "CROSS PRODUCT — kitna AAR-PAAR hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the archetype */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "archetype: TORQUE — push ALONG a spanner: nothing · push ACROSS it: the bolt turns",
            "archetype: TORQUE — spanner ke SAATH dhakka: kuchh nahi · AAR-PAAR dhakka: bolt ghoomta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 94 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the spanner picture */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={180} cy={300} r={16} fill="none" stroke={INK} strokeWidth={2.6} />
        <Circle cx={180} cy={300} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 196 300 H 420" stroke={INK} sw={6} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(505, 300, 438, 300)} stroke={MUTED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={470} y={332} size={11} fill={MUTED} script>
          {t("push ALONG → nothing", "SAATH dhakka → kuchh nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(400, 230, 400, 286)} stroke={RED} sw={2.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={388} y={250} size={11} fill={RED} script anchor="end">
          {t("push ACROSS → it turns!", "AAR-PAAR dhakka → ghoomta hai!")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7)} d="M 222 300 A 42 42 0 0 0 192 262" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={arrowD(200, 268, 192, 262)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 8.6)} d={arrowD(180, 280, 180, 180)} stroke={GREEN} sw={3} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 9.4)}>
        <T x={192} y={200} size={13} fill={GREEN} weight={800} anchor="start">τ = r × F</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={260} y={350} size={11} fill={AMBER_DARK} script>
          {t(
            "same force — only the ACROSS part turns the bolt",
            "wahi force — sirf AAR-PAAR hissa bolt ghumata hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the definition */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 592 140 h 406 q 12 0 12 12 v 28 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={795} y={172} size={18} fill={INK} weight={800}>
          A × B = A B sinθ · n̂
        </T>
      </Fade>

      {/* beat 4 — the right hand */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={232} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "n̂ ⊥ the plane of A and B — RIGHT-hand rule",
            "n̂ ⊥ A aur B ke plane par — RIGHT-hand rule"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 580 240 h 300" stroke={AMBER} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={580} y={262} size={11} fill={RED} script anchor="start">
          {t(
            "the left hand gives exactly the wrong sign — and it propagates",
            "left hand bilkul galat sign deta hai — aur woh aage tak failta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — where the turning lives */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={580} y={300} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the turning happens AROUND an axis — τ points where the turning lives",
            "ghoomna ek AXIS ke ird-gird hota hai — τ wahi point karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={580} y={324} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "that axis is ⊥ to both the lever arm and the force",
            "woh axis lever arm aur force dono par ⊥ hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — a vector, necessarily */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 566 348 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={580} y={366} size={12} fill={RED} script anchor="start">
          {t(
            "the answer is a VECTOR — it needs a third dimension to point into",
            "jawaab ek VECTOR hai — use point karne ko teesri dimension chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={580} y={390} size={12} fill={RED} script anchor="start">
          {t(
            "in 2D we say “out of the page / into the page” — same admission",
            "2D mein hum kehte hain “page se bahar / andar” — wahi baat hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the zero case */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 566 420 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={580} y={438} size={12} fill={GREEN} script anchor="start">
          {t(
            "parallel → sin 0° = 0 → A×B = 0: nothing lies across",
            "parallel → sin 0° = 0 → A×B = 0: kuchh bhi aar-paar nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={580} y={462} size={12} fill={GREEN} script anchor="start">
          {t(
            "the spanner pushed along its handle: real force, zero torque",
            "spanner ko handle ke saath dhakka: force asli, torque zero"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={580} y={486} size={12} fill={INK} script anchor="start">
          {t(
            "the exact mirror of the dot product's zero",
            "dot product ke zero ka bilkul ulta roop"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

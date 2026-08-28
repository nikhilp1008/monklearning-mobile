/**
 * Ch08 · Section 51 — "The atomic origin of Hooke's law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 6..7 are ~1s apart; hi beats 1..2 are ~1s apart —
 * short delays there.
 *
 * Beats (en [0, 11.43, 21.85, 34.56, 48.98, 66.47, 82.52, 83.52]):
 *  0 title only
 *  1 diagram: U(r) potential well, minimum r₀, local parabola overlay
 *  2 text: atoms rest at r₀ — forces balance at the bottom of the well
 *  3 text: displace it: well acts like a spring, force ∝ displacement
 *  4 boxed formula: U≈U(r₀)+½κ(r-r₀)² ⇒ F=-dU/dr≈-κ(r-r₀)
 *  5 red margin: trillions of bonds summed → macroscopic Hooke's law σ=Yε
 *  6 text: Y large for stiff bonds (metals, diamond), small for floppy (rubber)
 *  7 text: so Hooke's law holds only for small strains — parabola breaks
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y120..340
 *  b1 | well curve          | Draw | (175,150)→(320,330)→(720,280)
 *  b1 | min dot+dash+label  | Draw/T| (320,330) x320 bl354
 *  b1 | parabola overlay    | Fade | dashed arc near (320,330)
 *  b1 | axis labels (10)    | T    | x150 bl108 · x785 bl345
 *  b1 | caption (11)        | T mid| x540 bl360
 *  b2 | tick/text (12)      | T st | x80..428 bl384
 *  b3 | tick/text (12)      | T st | x80..440 bl409
 *  b4 | hero box            | Draw | x60..460 y432..494
 *  b4 | formula (15)        | T st | x80..388 bl468
 *  b5 | margin bar          | Draw | x60 y510..538
 *  b5 | note (13)           | T st | x76..~490 bl528
 *  b6 | tick/text (12)      | T st | x80..458 bl560
 *  b7 | tick/text (12)      | T st | x80..440 bl585
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("why is a solid elastic at all?", "solid elastic hai hi kyun?")}
        </T>
      </Fade>

      {/* beat 1 — the potential well */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 340, 150, 120)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 340, 780, 340)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={150} y={108} size={10} fill={INK}>
          U(r)
        </T>
        <T x={785} y={345} size={10} fill={INK} anchor="start">
          r
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M175 150 C210 280 260 330 320 330 C420 330 580 300 720 280" stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M320 330 A3.5 3.5 0 1 1 319.9 330" stroke={GREEN} sw={1.6} dur={0.2} fill={GREEN} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M320 330 V340" stroke={GREEN} sw={1} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={320} y={354} size={10} fill={GREEN}>
          r₀
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Path d="M270 336 Q320 356 370 336" stroke={RED} strokeWidth={1.6} strokeDasharray="4 3" fill="none" />
        <T x={400} y={318} size={9} fill={RED} anchor="start">
          {t("parabola near r₀", "r₀ ke paas parabola")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={540} y={360} size={11} fill={INK}>
          {t("near the bottom of the well, an atom behaves like a spring", "well ki tali ke paas, atom spring ki tarah behave karta")}
        </T>
      </Fade>

      {/* beat 2 — atoms rest at r₀ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 380 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={384} size={12} fill={INK} weight={600} anchor="start">
          {t("atoms rest at r₀ — forces balance at the well's bottom", "atoms r₀ par baithe — well ki tali par forces balance")}
        </T>
      </Fade>

      {/* beat 3 — displace it, it acts like a spring */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 405 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={409} size={12} fill={INK} weight={600} anchor="start">
          {t("displace it: it acts like a spring, force ∝ displacement", "displace karo: spring jaisa, force ∝ displacement")}
        </T>
      </Fade>

      {/* beat 4 — the boxed formula */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M72 432 h388 q12 0 12 12 v38 q0 12 -12 12 h-388 q-12 0 -12 -12 v-38 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={468} size={15} fill={INK} weight={800} anchor="start">
          U≈U(r₀)+½κ(r-r₀)² ⇒ F=-dU/dr≈-κ(r-r₀)
        </T>
      </Fade>

      {/* beat 5 — the macroscopic Hooke's law */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 510 L60 538" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={528} size={13} fill={RED} script anchor="start">
          {t("trillions of bonds, summed → macroscopic Hooke's law σ=Yε", "trillions bonds, jode → macroscopic Hooke's law σ=Yε")}
        </T>
      </Fade>

      {/* beat 6 — what sets the size of Y */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 556 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={560} size={12} fill={INK} weight={600} anchor="start">
          {t("Y large: stiff bonds (metals, diamond); small: floppy (rubber)", "Y bada: stiff bonds (metals, diamond); chota: floppy (rubber)")}
        </T>
      </Fade>

      {/* beat 7 — the small-strain limit */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M65 581 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={585} size={12} fill={INK} weight={600} anchor="start">
          {t("so Hooke's law holds only for small strains — the parabola breaks", "isliye Hooke's law sirf small strains par — parabola tootta")}
        </T>
      </Fade>
    </Scene>
  );
}

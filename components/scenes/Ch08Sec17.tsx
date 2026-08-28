/**
 * Ch08 · Section 17 — "Equivalent modulus of rods in series"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..2 are ~1s each — short delays there.
 *
 * Diagram (two rods → one combined rod) up top, formula cascade below.
 *
 * Beats (en [0, 9.05, 10.05, 11.05, 21.11, 34.17, 52.26]):
 *  0 title + drawn underline
 *  1 diagram: rod1(Y1,L,A) + rod2(Y2,L,A) → combined rod(Yeq,2L,A)
 *  2 text: same F, total stretch = sum
 *  3 formula: 1/k_eq = 1/k1+1/k2, ki=YiA/L
 *  4 text: combined rod → k_eq = Y_eqA/2L
 *  5 boxed hero: 2/Y_eq = 1/Y1+1/Y2 ⇒ Y_eq = 2Y1Y2/(Y1+Y2)
 *  6 red margin note: NOT the arithmetic mean
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline           | Draw | x480..600 y86..93
 *  b1 | rod1                | Draw | x140..164 y140..205
 *  b1 | label1 (12)         | T st | x175..223 bl175 (y166..179)
 *  b1 | rod2                | Draw | x140..164 y205..270
 *  b1 | label2 (12)         | T st | x175..223 bl240 (y231..244)
 *  b1 | arrow               | Draw | x260..310 y207
 *  b1 | combined rod        | Draw | x360..388 y140..270
 *  b1 | label3 (13)         | T st | x400..472 bl205 (y196..209)
 *  b2 | tick                | Draw | x65..73 y296
 *  b2 | text (14)           | T st | x80..~430 bl300 (y282..307)
 *  b3 | tick                | Draw | x65..73 y326
 *  b3 | formula1 (15)       | T st | x80..350 bl330 (y318..335)
 *  b4 | tick                | Draw | x65..73 y361
 *  b4 | formula2 (14)       | T st | x80..360 bl365 (y354..369)
 *  b5 | hero box            | Draw | x80..700 y390..465
 *  b5 | small line (16)     | T st | x100..~380 bl415 (y403..420)
 *  b5 | big line (24)       | T st | x100..~560 bl450 (y431..457)
 *  b6 | margin bar          | Draw | x60 y495..523
 *  b6 | note (15)           | T st | x76..373 bl515 (y495..522)
 */

import React from "react";
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("equivalent modulus of two rods in series", "series mein do rods ka equivalent modulus")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — two rods joined into one */}
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M140 140 h24 v65 h-24 z" stroke={INK} sw={2.2} dur={0.3} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={175} y={175} size={12} fill={INK} anchor="start">
          Y₁, L, A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M140 205 h24 v65 h-24 z" stroke={AMBER_DARK} sw={2.2} dur={0.3} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={175} y={240} size={12} fill={AMBER_DARK} anchor="start">
          Y₂, L, A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(260, 207, 310, 207)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M360 140 h28 v130 h-28 z" stroke={INK} sw={2.4} dur={0.4} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={400} y={205} size={13} fill={GREEN} anchor="start">
          Y_eq, 2L, A
        </T>
      </Fade>

      {/* beat 2 — same F, stretches add */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 296 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={300} size={14} fill={GREEN} script anchor="start">
          {t("same F throughout, total stretch = sum", "same F poore mein, total stretch = sum")}
        </T>
      </Fade>

      {/* beat 3 — the series stiffness relation */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 326 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={330} size={15} fill={INK} weight={600} anchor="start">
          1/k_eq = 1/k₁ + 1/k₂, k_i = Y_iA/L
        </T>
      </Fade>

      {/* beat 4 — treat the combined rod as one object */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 361 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={365} size={14} fill={AMBER_DARK} weight={600} anchor="start">
          {t("combined: 2L, A, Y_eq → k_eq = Y_eqA/2L", "combined: 2L, A, Y_eq → k_eq = Y_eqA/2L")}
        </T>
      </Fade>

      {/* beat 5 — the hero result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M92 390 h596 q12 0 12 12 v51 q0 12 -12 12 h-596 q-12 0 -12 -12 v-51 q0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={100} y={415} size={16} fill={INK} weight={600} anchor="start">
          2/Y_eq = 1/Y₁ + 1/Y₂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={100} y={450} size={24} fill={INK} weight={800} anchor="start">
          ⇒ Y_eq = 2Y₁Y₂ / (Y₁+Y₂)
        </T>
      </Fade>

      {/* beat 6 — not the arithmetic mean */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 495 L60 523" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={515} size={15} fill={RED} script anchor="start">
          {t("NOT the simple average of Y₁ and Y₂", "Y₁ aur Y₂ ka simple average NAHI hai")}
        </T>
      </Fade>
    </Scene>
  );
}

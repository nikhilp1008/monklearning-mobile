/**
 * Ch03 · Section 26 — "JEE Advanced: the scalar and vector triple products"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.9, 34.5, 59.3, 77.4, 102.2, 124.5, 149.3, 165.2, 188.3]):
 *  0 heading
 *  1 given three vectors
 *  2 (a) collapses to ONE determinant
 *  3 the 3×3 array
 *  4 expand → −10
 *  5 parallelepiped diagram
 *  6 V = 10, NOT coplanar
 *  7 (b) the dare: two determinants
 *  8 BAC−CAB: two dots only
 *  9 result: 9î − 2ĵ + 5k̂
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 96 h480
 *  b2 | st x84 bl 122 s12
 *  b3 | bars M100 140 v96 · M330 140 v96 · rows cx145/215/285 bl 164/196/228 s13
 *  b4 | st x84 bl 268 s14
 *  b5 | base M120 470 L280 470 L320 430 L160 430 Z · top M120 410 .. Z ·
 *       verticals · caption cx220 bl 502 s11 · note st x84 bl 528 s11
 *  b6 | box x84..470 y540..580 text cx277 bl 566 s13
 *  b7 | red st x560 bl 122 / 146 s12
 *  b8 | st x560 bl 186 s14 · st x560 bl 214 s13 · st x560 bl 242 s13
 *  b9 | st x560 bl 282 s13 · box x560..1000 y302..350 text cx780 bl 334 s16 ·
 *       closing st x560 bl 390 s12
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

export default function Ch03Sec26({ currentTime, reveals, language }: SceneProps) {
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
            "JEE ADVANCED — testing whether you can AVOID work",
            "JEE ADVANCED — test yeh ki kaam TAAL sakte ho ya nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} weight={700}>
          {t(
            "A = î+2ĵ−k̂ , B = 2î−ĵ+k̂ , C = 3î+ĵ+2k̂ — (a) A·(B×C), volume, coplanar? (b) A×(B×C)",
            "A = î+2ĵ−k̂ , B = 2î−ĵ+k̂ , C = 3î+ĵ+2k̂ — (a) A·(B×C), volume, coplanar? (b) A×(B×C)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 96 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — one determinant */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={122} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "(a) looks like two operations — it collapses into ONE 3×3 determinant",
            "(a) do operations lagta hai — par yeh EK 3×3 determinant mein simat jata hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the array */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 100 140 v 96" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 330 140 v 96" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={145} y={164} size={13} fill={INK} weight={700}>1</T>
        <T x={215} y={164} size={13} fill={INK} weight={700}>2</T>
        <T x={285} y={164} size={13} fill={INK} weight={700}>−1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={145} y={196} size={13} fill={INK} weight={700}>2</T>
        <T x={215} y={196} size={13} fill={INK} weight={700}>−1</T>
        <T x={285} y={196} size={13} fill={INK} weight={700}>1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={145} y={228} size={13} fill={INK} weight={700}>3</T>
        <T x={215} y={228} size={13} fill={INK} weight={700}>1</T>
        <T x={285} y={228} size={13} fill={INK} weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={360} y={196} size={11} fill={MUTED} script anchor="start">
          {t("A on top, then B, then C", "A upar, phir B, phir C")}
        </T>
      </Fade>

      {/* beat 4 — expand */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={268} size={14} fill={INK} weight={800} anchor="start">
          = −3 − 2 − 5 = −10
        </T>
      </Fade>

      {/* beat 5 — the box */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 120 470 L 280 470 L 320 430 L 160 430 Z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 120 410 L 280 410 L 320 370 L 160 370 Z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.6)}
        d="M 120 470 V 410 M 280 470 V 410 M 320 430 V 370 M 160 430 V 370"
        stroke={INK_LIGHT}
        sw={1.4}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={220} y={502} size={11} fill={INK_LIGHT} script>
          {t("a real, un-squashed box", "asli, bina pichka dabba")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={528} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "the − sign only records handedness — volume is a magnitude",
            "− sign sirf handedness batata hai — volume to magnitude hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — volume and coplanarity */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 96 540 h 362 q 12 0 12 12 v 16 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={277} y={566} size={13} fill={INK} weight={800}>
          {t("V = |−10| = 10 → NOT coplanar", "V = |−10| = 10 → coplanar NAHI")}
        </T>
      </Fade>

      {/* beat 7 — the dare */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={560} y={122} size={12} fill={RED} script anchor="start">
          {t(
            "(b) the obvious route: B×C, then A× that — TWO full determinants",
            "(b) seedha raasta: pehle B×C, phir A× uska — DO poore determinants"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={560} y={146} size={12} fill={RED} script anchor="start">
          {t(
            "that is exactly the work the question is daring you to do",
            "yahi woh kaam hai jiske liye sawaal tumhe ukas raha hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — BAC − CAB */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={560} y={186} size={14} fill={INK} weight={700} anchor="start">
          A×(B×C) = B(A·C) − C(A·B)
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={560} y={214} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "A·C = 3 · A·B = −1   (two dots, zero crosses)",
            "A·C = 3 · A·B = −1   (do dots, zero crosses)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={560} y={242} size={13} fill={INK} weight={800} anchor="start">
          = 3B − (−1)C = 3B + C
        </T>
      </Fade>

      {/* beat 9 — the result */}
      <Fade on={beat >= 9} delay={dl(9, 0.8)}>
        <T x={560} y={282} size={13} fill={INK} weight={700} anchor="start">
          3B = 6î − 3ĵ + 3k̂ ,  + C = 3î + ĵ + 2k̂
        </T>
      </Fade>
      <Draw
        on={beat >= 9}
        delay={dl(9, 5)}
        d="M 572 302 h 416 q 12 0 12 12 v 24 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 9} delay={dl(9, 6)}>
        <T x={780} y={334} size={16} fill={INK} weight={800}>
          A×(B×C) = 9î − 2ĵ + 5k̂
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 12)}>
        <T x={560} y={390} size={12} fill={GREEN} script anchor="start">
          {t(
            "two dot products and one addition — the two saved minutes WERE the question",
            "do dot products aur ek jod — bachaye hue do minute hi asli sawaal the"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

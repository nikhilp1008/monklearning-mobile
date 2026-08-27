/**
 * Ch03 · Section 19 — "Board derivation: the component form of the dot product"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.0, 29.5, 43.8, 59.3, 83.5, 106.5, 118.0, 131.0]):
 *  0 heading
 *  1 the one method
 *  2 bracket × bracket formula
 *  3 nine terms
 *  4 unit-vector products
 *  5 3×3 grid: green diagonal, red zeros
 *  6 six die (cross-outs)
 *  7 hero: AxBx + AyBy + AzBz
 *  8 the examiner's WHY
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 94 h480
 *  b2 | st x84 bl 130 s14
 *  b3 | st x84 bl 162 s12
 *  b4 | st x84 bl 196 / 224 s13
 *  b5 | grid x640..910 y150..360 (cells 90×70) · col lbls cx685/775/865 bl 142 s12 ·
 *       row lbls end x630 bl 195/265/335 s12 · diag "1" green (685,190)(775,260)(865,330) ·
 *       off-diag "0" red
 *  b6 | crossD over six red zeros · caption cx775 bl 392 s11
 *  b7 | box x84..520 y360..410 text cx302 bl 392 s16
 *  b8 | bar M66 440 v56 · lines st x84 bl 458 / 482 / 506 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
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

const COLS = [685, 775, 865];
const ROWS = [190, 260, 330];

export default function Ch03Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const offDiag: [number, number][] = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++) if (r !== c) offDiag.push([COLS[c], ROWS[r]]);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE DERIVATION — dot product in components",
            "CBSE DERIVATION — dot product components mein"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — one method */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "one method, both products: DISTRIBUTE the brackets, then use the unit-vector products",
            "ek method, dono products: brackets DISTRIBUTE karo, phir unit-vector products lagao"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 94 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the brackets */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={130} size={14} fill={INK} weight={700} anchor="start">
          A·B = (Ax î + Ay ĵ + Az k̂) · (Bx î + By ĵ + Bz k̂)
        </T>
      </Fade>

      {/* beat 3 — nine terms */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={162} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "every term meets every term: 3 × 3 = NINE terms — now comes the payback",
            "har term har term se milta hai: 3 × 3 = NAU terms — ab milta hai inaam"
          )}
        </T>
      </Fade>

      {/* beat 4 — what the hats do */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={196} size={13} fill={INK} weight={700} anchor="start">
          î·î = ĵ·ĵ = k̂·k̂ = 1
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={224} size={13} fill={INK} weight={700} anchor="start">
          î·ĵ = ĵ·k̂ = k̂·î = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={84} y={250} size={11} fill={MUTED} script anchor="start">
          {t(
            "parallel to itself → 1 · perpendicular axes → 0",
            "khud ke parallel → 1 · perpendicular axes → 0"
          )}
        </T>
      </Fade>

      {/* beat 5 — the 3×3 grid */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 640 150 h 270 M 640 220 h 270 M 640 290 h 270 M 640 360 h 270 M 640 150 v 210 M 730 150 v 210 M 820 150 v 210 M 910 150 v 210"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={685} y={142} size={12} fill={INK_LIGHT} weight={700}>Bx î</T>
        <T x={775} y={142} size={12} fill={INK_LIGHT} weight={700}>By ĵ</T>
        <T x={865} y={142} size={12} fill={INK_LIGHT} weight={700}>Bz k̂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={630} y={195} size={12} fill={INK_LIGHT} weight={700} anchor="end">Ax î</T>
        <T x={630} y={265} size={12} fill={INK_LIGHT} weight={700} anchor="end">Ay ĵ</T>
        <T x={630} y={335} size={12} fill={INK_LIGHT} weight={700} anchor="end">Az k̂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={685} y={190} size={16} fill={GREEN} weight={800}>1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={775} y={260} size={16} fill={GREEN} weight={800}>1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={865} y={330} size={16} fill={GREEN} weight={800}>1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        {offDiag.map(([x, y]) => (
          <T key={`${x}-${y}`} x={x} y={y} size={14} fill={RED} weight={700}>0</T>
        ))}
      </Fade>

      {/* beat 6 — six die */}
      {offDiag.map(([x, y], i) => (
        <Draw
          key={`c${x}-${y}`}
          on={beat >= 6}
          delay={dl(6, 0.8 + i * 0.4)}
          d={crossD(x - 10, y - 13, 20, 16)}
          stroke={RED}
          sw={1.8}
          dur={0.3}
        />
      ))}
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={775} y={392} size={11} fill={RED} script>
          {t("six die by zero — three survive", "chhe zero se mar gaye — teen bache")}
        </T>
      </Fade>

      {/* beat 7 — the survivor formula */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 96 360 h 412 q 12 0 12 12 v 26 q 0 12 -12 12 h -412 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={302} y={392} size={16} fill={INK} weight={800}>
          A·B = AxBx + AyBy + AzBz
        </T>
      </Fade>

      {/* beat 8 — the WHY */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 440 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={458} size={12} fill={GREEN} script anchor="start">
          {t(
            "the examiner's WHY: perpendicular directions contribute NOTHING to agreement",
            "examiner ka WHY: perpendicular directions agreement mein KUCHH nahi jodti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={482} size={12} fill={GREEN} script anchor="start">
          {t(
            "Ax cannot agree with By — right angles, zero overlap",
            "Ax kabhi By se agree nahi kar sakta — right angle, zero overlap"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={84} y={506} size={12} fill={INK} script anchor="start">
          {t(
            "nine collapsing to three is that one idea, written in algebra",
            "nau ka teen ho jana wahi ek idea hai, algebra mein likha hua"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

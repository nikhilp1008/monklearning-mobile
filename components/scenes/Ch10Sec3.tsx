/**
 * Ch10 · Section 3 — "Thermal expansion: why heated things grow"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.44, 13.14, 14.14, 15.14, 16.14, 30.99]):
 *  0 intro: expansion, the third character — cold lattice box
 *  1 heat it: molecules jiggle harder, push neighbours farther — grows
 *  2 cool it back down — shrinks, most materials, engineers respect it
 *  3 railway track: gaps left for summer heat, or the rail buckles
 *  4 bridge rollers, sagging wires — same reason: room to expand
 *  5 deep idea: every dimension grows by the same fraction (uniform)
 *  6 verdict: regular scaling ⇒ neat linear formulas next
 *
 * Layout plan (strict non-overlapping y-bands, Kalam bl−1.3s..+0.5s):
 *  b0   | cold box x140..210 y110..180 · 3×3 dots · label mid x175 bl200
 *  b1   | arrow x225..255 y145 · hot box x270..380 y90..200 · spread dots ·
 *       |   label mid x325 bl215 · caption st x410 bl150
 *  b2   | reverse-arrow x150..210 y235..255 · caption st x230 bl250
 *  b3   | rails y300 x150..540 (gap 330..370) · ties · gap label mid x350 bl278 ·
 *       |   caption mid x350 bl345
 *  b4   | beam+rollers x150..300 y420..450 · wire+poles x420..620 y380..425 ·
 *       |   caption mid x385 bl480
 *  b5   | square x300..340 y500..540 + dashed x285..355 y493..547 ·
 *       |   label st x400 bl522
 *  b6   | check x330..352 y564..580 · verdict mid x540 bl585
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
  INK_LIGHT,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const dotPath = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const dotsPath = (pts: [number, number][], r: number) =>
  pts.map(([x, y]) => dotPath(x, y, r)).join(" ");
const tiesPath = (xs: number[], y: number, h: number) =>
  xs.map((x) => `M${x} ${y} v${h}`).join(" ");

export default function Ch10Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const coldDots = dotsPath(
    [
      [155, 130], [175, 130], [195, 130],
      [155, 145], [175, 145], [195, 145],
      [155, 160], [175, 160], [195, 160],
    ],
    2.6
  );
  const hotDots = dotsPath(
    [
      [290, 110], [325, 110], [360, 110],
      [290, 145], [325, 145], [360, 145],
      [290, 180], [325, 180], [360, 180],
    ],
    2.8
  );
  const tieXs = [150, 170, 190, 210, 230, 250, 270, 290, 310, 390, 410, 430, 450, 470, 490, 510, 530];

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("thermal expansion — why heated things grow", "thermal expansion — garam hone par kyun badhte hain")}
        </T>
      </Fade>

      {/* beat 0 — cold lattice */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M140 110 h70 v70 h-70 z" stroke={INK_LIGHT} sw={1.8} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 1)} d={coldDots} stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={175} y={200} size={12} fill={INK_LIGHT} script>{t("cold", "thanda")}</T>
      </Fade>

      {/* beat 1 — heat it: grows */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M225 155 q6 -14 0 -28 M235 155 q6 -14 0 -28" stroke={AMBER} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(225, 145, 258, 145)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M270 90 h110 v110 h-110 z" stroke={RED} sw={2.2} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={hotDots} stroke={RED} sw={1.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={325} y={215} size={12} fill={GREEN} script weight={700}>
          {t("hot — grown!", "garam — badh gaya!")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={410} y={150} size={15} fill={INK} script anchor="start">
          {t(
            "heat → molecules jiggle harder → push neighbours farther",
            "heat → molecules zyada jiggle karte → padosi door hate hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — cool down: shrinks */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(210, 245, 150, 245)} stroke={INK_LIGHT} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={230} y={250} size={14} fill={INK} script anchor="start">
          {t(
            "cool it back down → shrinks (most materials)",
            "wapas thanda karo → sikud jaata hai (zyadatar materials)"
          )}
        </T>
      </Fade>

      {/* beat 3 — railway track gap */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M150 300 h170 M370 300 h170" stroke={INK} sw={4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={tiesPath(tieXs, 300, 14)} stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M330 285 v30 h10 M370 285 v30 h-10" stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 1.05)}>
        <T x={350} y={278} size={12} fill={RED} weight={700}>{t("gap", "gap")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={350} y={345} size={14} fill={INK} script>
          {t(
            "gap left for summer heat — or the rail buckles",
            "garmi ke liye gap chhoda — warna rail bukle karti"
          )}
        </T>
      </Fade>

      {/* beat 4 — bridge rollers, sagging wires */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M150 420 h150" stroke={INK} sw={5} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.45)} d="M180 430 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M250 430 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0" stroke={INK_LIGHT} sw={1.8} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.75)} d="M420 380 v45 M620 380 v45" stroke={INK_LIGHT} sw={2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M420 385 Q520 425 620 385" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.35)}>
        <T x={385} y={480} size={13} fill={INK} script>
          {t(
            "bridge rollers, sagging wires — same reason: room to expand",
            "bridge rollers, dhilay taar — wahi wajah: expand ki jagah"
          )}
        </T>
      </Fade>

      {/* beat 5 — uniform scaling */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M300 500 h40 v40 h-40 z" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M285 493 h70 v54 h-70 z" stroke={AMBER} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={400} y={522} size={15} fill={AMBER_DARK} script weight={700} anchor="start">
          {t(
            "every dimension grows by the SAME fraction",
            "har dimension SAME fraction se badhta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M330 572 l8 8 l14 -16" stroke={GREEN} sw={2.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={585} size={14} fill={GREEN} script weight={700}>
          {t(
            "regular scaling ⇒ neat linear formulas next",
            "niyamit scaling ⇒ aage seedhe linear formulas"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch08 · Section 19 — "The four constants are really two"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beat 2 and hi beats 4..6 are ~1s each — short delays there.
 *
 * A network square: Y, B, η, ν at the corners, wired together.
 *
 * Beats (en [0, 10.33, 21.42, 22.42, 36.16, 44.52, 56.81, 72.25]):
 *  0 title + drawn underline
 *  1 diagram: square + diagonals, 4 constants at the corners
 *  2 text: know any 2 → other 2 fixed
 *  3 formula: Y = 2η(1+ν) = 3B(1−2ν)
 *  4 text: eliminate ν → link Y, B, η
 *  5 formula: 9/Y = 1/B + 3/η
 *  6 red margin note: same inter-atomic bonds
 *  7 text: only isotropic materials — wood/composites need more
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline           | Draw | x480..600 y86..93
 *  b1 | square + diagonals  | Draw | x200..400 y140..260
 *  b1 | Y/B/η/ν circles     | Draw | c(200,140)/(400,140)/(200,260)/(400,260) r22
 *  b2 | tick                | Draw | x445..453 y166
 *  b2 | text (14)           | T st | x460..~750 bl170 (y152..178)
 *  b3 | box                 | Draw | x210..390 y296..318
 *  b3 | formula1 (15)       | T mid| x218..383 bl310 (y298..315)
 *  b4 | tick                | Draw | x445..453 y196
 *  b4 | text (14)           | T st | x460..~730 bl200 (y182..207)
 *  b5 | box                 | Draw | x235..365 y328..348
 *  b5 | formula2 (16)       | T mid| x240..360 bl340 (y328..344)
 *  b6 | margin bar          | Draw | x60 y528..556
 *  b6 | note (15)           | T st | x76..~570 bl548 (y528..556)
 *  b7 | underline           | Draw | x180..420 y378..386
 *  b7 | text (13)           | T mid| x114..486 bl370 (y354..377)
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const NODES: [number, number, string, string][] = [
  [200, 140, INK, "Y"],
  [400, 140, GREEN, "B"],
  [200, 260, AMBER_DARK, "η"],
  [400, 260, RED, "ν"],
];

export default function Ch08Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("four constants, only two are independent", "chaar constants, sirf do independent hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — the network of four constants */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M200 140 H400 M200 260 H400 M200 140 V260 M400 140 V260" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M200 140 L400 260 M400 140 L200 260" stroke={MUTED} sw={1.2} dur={0.5} />
      {NODES.map(([cx, cy, fill, label], i) => (
        <React.Fragment key={label}>
          <Fade on={beat >= 1} delay={0}>
            <Draw
              on={beat >= 1}
              delay={dl(1, 1.3 + i * 0.4)}
              d={`M${cx - 22} ${cy} A22 22 0 1 1 ${cx - 21.9} ${cy}`}
              stroke={fill}
              sw={2}
              dur={0.4}
              fill={fill}
            />
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 1.6 + i * 0.4)}>
            <T x={cx} y={cy + 7} size={20} fill="#fff" weight={800}>
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 2 — any two fixes the other two */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M445 166 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={460} y={170} size={14} fill={GREEN} script anchor="start">
          {t("know any 2 → other 2 fixed", "koi 2 pata → baaki 2 fix")}
        </T>
      </Fade>

      {/* beat 3 — the binding relation */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M210 296 h180 v22 h-180 z" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={300} y={310} size={15} fill={INK} weight={700}>
          Y = 2η(1+ν) = 3B(1−2ν)
        </T>
      </Fade>

      {/* beat 4 — eliminate ν */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M445 196 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={460} y={200} size={14} fill={AMBER_DARK} script anchor="start">
          {t("eliminate ν → link Y, B, η", "ν eliminate → Y, B, η jude")}
        </T>
      </Fade>

      {/* beat 5 — the three-way link */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M235 328 h130 v20 h-130 z" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={300} y={342} size={16} fill={INK} weight={800}>
          9/Y = 1/B + 3/η
        </T>
      </Fade>

      {/* beat 6 — why: same bonds */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("same inter-atomic bonds — can't be independent", "same inter-atomic bonds — independent nahi ho sakte")}
        </T>
      </Fade>

      {/* beat 7 — the caveat */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M180 380 Q300 384 420 380" stroke={MUTED} sw={1.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={300} y={370} size={13} fill={MUTED} script>
          {t("only isotropic — wood, composites need more", "sirf isotropic — wood, composites ko aur chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Chemistry Ch05 · Section 1 — "System, surroundings and the three types
 * of system"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,1,2,3,4,5,6,7]):
 *  0 title underline + the imaginary boundary drawn as a circle
 *  1 SYSTEM (inside) / SURROUNDINGS (outside) labels land
 *  2 red-margin note: boundary can be a real wall or purely imaginary
 *  3 new heading "Three types of system" + amber underline
 *  4 OPEN box: matter+energy both cross — kadhai of boiling milk
 *  5 CLOSED box: only energy crosses — sealed pressure cooker
 *  6 ISOLATED box: nothing crosses — chai in a steel thermos (red, emphasis)
 *  7 verdict chip: boundary decides what's allowed to cross
 *
 * Layout plan (boxes are measured-estimate render boxes; longer language counts):
 *  b0 | title (script 26, red)         | T mid  | x?..?      y30..77  (bl 64)
 *  b0 | title underline                | Draw   | y88  x400..680
 *  b0 | boundary circle                | Draw   | c(540,172) r80  y92..252
 *  b1 | "SYSTEM" (20, ink, w800)       | T mid  | x?..?      y168..183 (bl 177)
 *  b1 | "SURROUNDINGS" (15, muted)     | T st   | x250..340  y104..120 (bl 115)
 *  b2 | red margin bar                 | Draw   | x700 y138..178
 *  b2 | note line (14, ink, start)     | T st   | x716..954  y158..172 (bl 164)
 *  b3 | heading (20, w800, ink)        | T mid  | x430..650  y270..306 (bl 286)
 *  b3 | amber underline                | Draw   | y298 x410..670
 *  b4 | OPEN box                       | Draw   | x110..310  y362..480
 *  b4 | typeName/verdict/caption       | T mid  | centered in box
 *  b5 | CLOSED box                     | Draw   | x440..640  y362..480
 *  b5 | typeName/verdict/caption       | T mid  | centered in box
 *  b6 | ISOLATED box (red typeName)    | Draw   | x770..970  y362..480
 *  b6 | typeName/verdict/caption       | T mid  | centered in box
 *  b7 | verdict chip (green)           | Chip   | x150..930  y496..536
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  GREEN,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

function circleD(cx: number, cy: number, r: number): string {
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy}`;
}

const BOXES = [
  { cx: 210, x: 110, key: "open", nameEn: "OPEN", nameHi: "OPEN", color: GREEN,
    verdictEn: "both cross freely", verdictHi: "dono cross karte hain",
    capEn: "boiling milk kadhai", capHi: "khaulta doodh — kadhai" },
  { cx: 540, x: 440, key: "closed", nameEn: "CLOSED", nameHi: "CLOSED", color: AMBER_DARK,
    verdictEn: "only energy crosses", verdictHi: "sirf energy cross hoti hai",
    capEn: "sealed cooker", capHi: "sealed cooker" },
  { cx: 870, x: 770, key: "isolated", nameEn: "ISOLATED", nameHi: "ISOLATED", color: RED,
    verdictEn: "nothing crosses", verdictHi: "kuch cross nahi hota",
    capEn: "chai in thermos", capHi: "thermos wali chai" },
];
const BOX_Y = 362;
const BOX_W = 200;
const BOX_H = 118;

export default function C11Ch05Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on; everything else beat-gated */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("system & surroundings", "system & surroundings")}
        </T>
      </Fade>

      {/* beat 0 — title underline, then the imaginary boundary as a circle */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0)}
        d="M 400 88 C 460 84, 620 84, 680 88"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.5)}
        d={circleD(540, 172, 80)}
        stroke={INK}
        sw={2.2}
        dur={1}
      />

      {/* beat 1 — SYSTEM inside, SURROUNDINGS outside */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={177} size={20} weight={800} fill={INK}>
          {t("SYSTEM", "SYSTEM")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={250} y={115} size={15} weight={600} fill={MUTED} anchor="start">
          {t("SURROUNDINGS", "SURROUNDINGS")}
        </T>
      </Fade>

      {/* beat 2 — red-margin note: boundary real or imaginary */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 700 138 L 700 178" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={716} y={164} size={14} weight={600} fill={INK} anchor="start">
          {t("boundary: real wall OR imaginary", "boundary: real deewar YA imaginary")}
        </T>
      </Fade>

      {/* beat 3 — new heading */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={286} size={20} weight={800} fill={INK}>
          {t("Three types of system", "teen tarah ke system")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 410 298 C 470 294, 610 294, 670 298" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beats 4-6 — the three boxes, one per beat */}
      {BOXES.map((b, i) => {
        const beatIdx = 4 + i;
        return (
          <React.Fragment key={b.key}>
            <Draw
              on={beat >= beatIdx}
              delay={dl(beatIdx, 0)}
              d={`M ${b.x} ${BOX_Y} h ${BOX_W} v ${BOX_H} h ${-BOX_W} z`}
              stroke={INK}
              sw={2.2}
              dur={0.6}
            />
            <Fade on={beat >= beatIdx} delay={dl(beatIdx, 0.5)}>
              <T x={b.cx} y={392} size={19} weight={800} fill={b.key === "isolated" ? RED : INK}>
                {t(b.nameEn, b.nameHi)}
              </T>
            </Fade>
            <Fade on={beat >= beatIdx} delay={dl(beatIdx, 0.8)}>
              <T x={b.cx} y={424} size={15} weight={700} fill={b.color}>
                {t(b.verdictEn, b.verdictHi)}
              </T>
            </Fade>
            <Fade on={beat >= beatIdx} delay={dl(beatIdx, 1.1)}>
              <T x={b.cx} y={462} size={14} fill={MUTED} script>
                {t(b.capEn, b.capHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 7 — verdict chip */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={496} w={780} h={40} fill={GREEN} textFill="#fff" size={18} script>
          {t("boundary decides what's allowed to cross", "boundary hi tay karti hai kya cross hoga")}
        </Chip>
      </Fade>
    </Scene>
  );
}

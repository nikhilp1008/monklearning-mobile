/**
 * Ch09 · Section 3 — "The hydrostatic paradox"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 6.31, 14.25, 18.26, 23.04, 29.53, 30.53, 31.53]):
 *  0 title (always-on)
 *  1 three vessel outlines drawn: narrow-tall, wide-squat, funnel — named
 *  2 dashed water-level line at the SAME height in all three
 *  3 equal-length base arrows under each vessel (same base pressure)
 *  4 CREAM fill shows how different the actual water volumes are
 *  5 red-margin note: base pressure = depth & density only
 *  6 formula P_base = ρgh
 *  7 red-margin note: shape and volume never enter
 *
 * Layout plan (columns at thirds x=210/540/870):
 *  b1 | vessel A outline (narrow)  | Draw  | x185..235  y280..450
 *  b1 | vessel B outline (wide)    | Draw  | x460..620  y320..450
 *  b1 | vessel C outline (funnel)  | Draw  | x805..935  y290..450
 *  b1 | names (script 12, muted)   | T mid  | y246..268 (bl 262) at each column
 *  b2 | water-level line A         | line   | x191..229  y320
 *  b2 | water-level line B         | line   | x466..614  y320
 *  b2 | water-level line C         | line   | x813..927  y320
 *  b3 | base arrows ×3 (ink)       | Draw   | x210/540/870  y452..480
 *  b4 | fill A/B/C (cream, behind) | path   | same footprints as b1, y320..450
 *  b5 | margin bar (red)           | Draw   | x60  y481..505 (bl 500)
 *  b5 | note (script 15, red)      | T st   | x76..~420  y480..508
 *  b6 | formula (28, w800)         | T mid  | x~380..700 y521..554 (bl 545)
 *  b7 | margin bar (red)           | Draw   | x60  y569..593 (bl 588)
 *  b7 | note (script 15, red)      | T st   | x76..~430  y568..596
 */

import React from "react";
import { Line, Path, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const VESSELS: { x: number; name: [string, string] }[] = [
  { x: 210, name: ["narrow-tall", "patla-lamba"] },
  { x: 540, name: ["wide-squat", "chaura-chota"] },
  { x: 870, name: ["funnel", "funnel"] },
];

export default function Ch09Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("the hydrostatic paradox", "hydrostatic paradox")}
        </T>
      </Fade>

      {/* beat 4 — volume fills, drawn first so they sit BEHIND the outlines */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={185} y={320} width={50} height={130} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Rect x={460} y={320} width={160} height={130} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Path d="M 813 320 L 927 320 L 890 450 L 850 450 Z" fill={CREAM} />
      </Fade>

      {/* beat 1 — three shapes, named */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 185 280 V 450 H 235 V 280" stroke={INK} sw={2.4} dur={0.7} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d="M 460 320 V 450 H 620 V 320"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d="M 805 290 L 850 450 L 890 450 L 935 290"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      {VESSELS.map(({ x, name }, i) => (
        <Fade key={x} on={beat >= 1} delay={dl(1, 2.8 + i * 0.3)}>
          <T x={x} y={262} size={12} fill={MUTED} script>
            {t(name[0], name[1])}
          </T>
        </Fade>
      ))}

      {/* beat 2 — same water level in all three */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Line x1={191} y1={320} x2={229} y2={320} stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Line x1={466} y1={320} x2={614} y2={320} stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Line x1={813} y1={320} x2={927} y2={320} stroke={AMBER_DARK} strokeWidth={2} strokeDasharray="5 4" />
      </Fade>

      {/* beat 3 — equal base pressure, equal arrows */}
      {VESSELS.map(({ x }, i) => (
        <Fade key={x} on={beat >= 3} delay={dl(3, 0.5 + i * 0.5)}>
          <Draw on={beat >= 3} d={arrowD(x, 452, x, 480)} stroke={INK} sw={2.4} dur={0.4} />
        </Fade>
      ))}

      {/* beat 5 — base pressure depends only on depth & density */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 481 L 60 505" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={76} y={500} size={15} fill={RED} script anchor="start">
          {t("base pressure: depth & density only", "base pressure: sirf depth & density")}
        </T>
      </Fade>

      {/* beat 6 — the formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={545} size={28} fill={INK} weight={800}>
          P<TSpan fontSize={17} dy={6}>base</TSpan>
          <TSpan dy={-6}> = ρgh</TSpan>
        </T>
      </Fade>

      {/* beat 7 — shape and volume never enter */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 569 L 60 593" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={588} size={15} fill={RED} script anchor="start">
          {t("shape and volume never enter", "shape aur volume kabhi enter nahi hote")}
        </T>
      </Fade>
    </Scene>
  );
}

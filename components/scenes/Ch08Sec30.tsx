/**
 * Ch08 · Section 30 — "Deformation stores energy, and why it is half"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..5 are ~1s each — short delays throughout for English.
 *
 * Force-vs-extension triangle graph (left), text column (right), boxed
 * hero formula below the graph.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 5.0, 13.53]):
 *  0 title only
 *  1 diagram: F vs extension, shaded triangular area
 *  2 text: bow, catapult, trampoline — store & pay back
 *  3 text: stretched wire = same, in miniature
 *  4 red margin: force is NOT constant, grows 0 to F
 *  5 text: average force = F/2, not full F
 *  6 boxed hero: U = ½FΔL
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..680 y140..450
 *  b1 | axis labels (14)    | T    | x115 bl145 / x700 bl455
 *  b1 | line                | Draw | (150,450)→(450,190)
 *  b1 | shaded triangle     | Fade | polygon
 *  b1 | dashed refs         | Fade | x450 y190..450 · y190 x150..450
 *  b1 | value labels (12)   | T    | x138 bl194 / x450 bl470
 *  b2 | tick/text (14)      | T st | x750..~1030 bl195
 *  b3 | tick/text (14)      | T st | x750..~1010 bl230
 *  b4 | margin bar          | Draw | x60 y560..588
 *  b4 | note (15)           | T st | x76..381 bl580
 *  b5 | tick/text (14)      | T st | x750..~1010 bl265
 *  b6 | hero box            | Draw | x180..420 y495..550
 *  b6 | formula (22)        | T mid| x300 bl528
 */

import React from "react";
import { Line, Polygon } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("every deformation quietly stores energy", "har deformation chupke se energy store karta")}
        </T>
      </Fade>

      {/* beat 1 — the force-extension triangle */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 450, 150, 140)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={115} y={145} size={14} fill={INK} weight={700} anchor="end">
          F
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(150, 450, 680, 450)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={700} y={455} size={14} fill={INK} weight={700} anchor="start">
          {t("extension", "extension")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M150 450 L450 190" stroke={INK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Polygon points="150,450 450,450 450,190" fill={GREEN} fillOpacity={0.22} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Line x1={450} y1={190} x2={450} y2={450} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <Line x1={150} y1={190} x2={450} y2={190} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={138} y={194} size={12} fill={MUTED} anchor="end">
          F
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={450} y={470} size={12} fill={MUTED}>
          ΔL
        </T>
      </Fade>

      {/* beat 2 — the everyday examples */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M735 191 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={750} y={195} size={14} fill={GREEN} script anchor="start">
          {t("bow, catapult, trampoline —", "bow, catapult, trampoline —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={750} y={222} size={14} fill={GREEN} script anchor="start">
          {t("store work, pay it back", "work store, wapas dete")}
        </T>
      </Fade>

      {/* beat 3 — the wire in miniature */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M735 261 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={750} y={265} size={14} fill={GREEN} script anchor="start">
          {t("a stretched wire: same, mini", "stretched wire: same, mini")}
        </T>
      </Fade>

      {/* beat 4 — force is not constant */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 560 L60 588" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={580} size={15} fill={RED} script anchor="start">
          {t("force is NOT constant — grows 0 to F", "force constant NAHI — 0 se F tak badhta")}
        </T>
      </Fade>

      {/* beat 5 — use the average force */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M735 296 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={750} y={300} size={14} fill={AMBER_DARK} script anchor="start">
          {t("average force = F/2, not full F", "average force = F/2, poora F nahi")}
        </T>
      </Fade>

      {/* beat 6 — the hero result */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M192 495 h216 q12 0 12 12 v31 q0 12 -12 12 h-216 q-12 0 -12 -12 v-31 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={300} y={528} size={22} fill={INK} weight={800}>
          U = ½FΔL
        </T>
      </Fade>
    </Scene>
  );
}

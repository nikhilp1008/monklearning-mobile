/**
 * Ch08 · Section 5 — "Hooke's law and the modulus of elasticity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: English beats 2..6 are ~1s each (compressed narration timing) —
 * elements there use short delays and settle near-instantly.
 *
 * One diagram builds through the whole scene: a stress–strain graph.
 *
 * Beats (en [0, 6.4, 7.4, 8.4, 9.4, 10.4, 11.4]):
 *  0 axes drawn (σ up, ε right)
 *  1 the straight proportional (elastic) line
 *  2 boxed hero formula: σ ∝ ε ⇒ σ = Eε
 *  3 a rise/run tick on the line + "slope = E (material only)"
 *  4 underline + "unit of E = pascal, same dims as stress"
 *  5 elastic-limit dot on the line + red margin-bar note
 *  6 the curve past the limit: bends, then a fracture ✗
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b0 | y-axis            | Draw | x300 y135..450
 *  b0 | x-axis            | Draw | x300..915 y450
 *  b0 | σ / ε labels (16) | T    | x257..273 bl145 / x935..951 bl468
 *  b1 | elastic line      | Draw | (300,450)→(550,250)
 *  b2 | box               | Draw | x670..930 y145..200
 *  b2 | "σ∝ε⇒σ=Eε" (24)   | T mid| x716..884 bl178 (y159..185)
 *  b3 | rise/run tick     | Draw | x475..512 y280..310
 *  b3 | slope label (13)  | T st | x565..734 bl280 (y270..284)
 *  b4 | underline         | Draw | x400..680 y517..523
 *  b4 | unit line (15)    | T mid| x390..690 bl510 (y498..515)
 *  b5 | dashed + dot      | line | x550 y250..450 · dot c(550,250)
 *  b5 | "elastic limit"(11)| T mid| x511..589 bl230 (y216..234)
 *  b5 | margin bar        | Draw | x60 y528..556
 *  b5 | note (15)         | T st | x76..373 bl548 (y529..556)
 *  b6 | plastic curve     | Draw | (550,250)→(748,272)
 *  b6 | fracture X        | Draw | x724..762 y248..286
 *  b6 | "bends" (11)      | T mid| x616..644 bl175 (y161..174)
 *  b6 | closing tag (12)  | T st | x778..936 bl300 (y284..306)
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("Hooke's law — stress ∝ strain", "Hooke's law — stress ∝ strain")}
        </T>
      </Fade>

      {/* beat 0 — the axes */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d={arrowD(300, 450, 300, 135)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <T x={265} y={145} size={16} fill={INK} weight={800} anchor="end">
          σ
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d={arrowD(300, 450, 915, 450)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={935} y={468} size={16} fill={INK} weight={800} anchor="start">
          ε
        </T>
      </Fade>

      {/* beat 1 — the straight proportional line */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M300 450 L550 250" stroke={GREEN} sw={2.6} dur={0.6} />

      {/* beat 2 — the hero formula */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.05)}
        d="M682 145 h236 q12 0 12 12 v31 q0 12 -12 12 h-236 q-12 0 -12 -12 v-31 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={800} y={178} size={24} fill={INK} weight={800}>
          σ ∝ ε ⇒ σ = Eε
        </T>
      </Fade>

      {/* beat 3 — the slope IS E, a material property */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M475 310 L475 280 L512 280" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={565} y={280} size={13} fill={AMBER_DARK} weight={600} anchor="start">
          {t("slope = E (material only)", "slope = E (sirf material)")}
        </T>
      </Fade>

      {/* beat 4 — unit and dimensions */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M400 520 C450 517, 630 523, 680 519" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={510} size={15} fill={AMBER_DARK} weight={700}>
          {t("unit of E = pascal, same dims as stress", "unit of E = pascal, stress jaisi hi dims")}
        </T>
      </Fade>

      {/* beat 5 — the elastic limit, and the fine print */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Line x1={550} y1={250} x2={550} y2={450} stroke={RED} strokeWidth={1.6} strokeDasharray="5 5" />
        <Circle cx={550} cy={250} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={550} y={230} size={11} fill={RED}>
          {t("elastic limit", "elastic limit")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("holds ONLY within the elastic limit", "sirf elastic limit ke andar chalta hai")}
        </T>
      </Fade>

      {/* beat 6 — past the limit: bends, then fractures */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M550 250 Q650 190 700 215 Q725 230 748 272" stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={crossD(724, 248, 24, 24)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={630} y={170} size={11} fill={AMBER_DARK} weight={700}>
          {t("bends", "mudta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={778} y={300} size={12} fill={RED} script anchor="start">
          {t("permanent set, then fracture ✗", "permanent set, phir fracture ✗")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch08 · Section 40 — "The three material families"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Three overlaid stress-strain curves (ductile, brittle, elastomer).
 *
 * Beats (en [0, 10.58, 21.76, 36.78, 54.02, 66.05, 80.47]):
 *  0 title only
 *  1 diagram: 3 curves — ductile (plateau), brittle (snaps early), elastomer
 *  2 label: ductile → wires
 *  3 label: malleable → sheets
 *  4 red margin: ductility=tension(wires); malleability=compression(sheets)
 *  5 label: brittle → snaps clean
 *  6 text: most ductile = also malleable, but distinct
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y130..470
 *  b1 | ductile curve       | Draw | (150,470)→(500,285)
 *  b1 | brittle curve       | Draw | (150,470)→(270,190)
 *  b1 | elastomer curve     | Draw | (150,470)→(620,260)
 *  b1 | curve labels (10)   | T    | x510 bl280 / x270 bl180 / x630 bl255
 *  b2 | tick/label (13)     | T mid| x230 bl515
 *  b3 | tick/label (13)     | T mid| x460 bl515
 *  b4 | margin bar          | Draw | x60 y565..592
 *  b4 | note (14)           | T st | x76..~500 bl585
 *  b5 | tick/label (13)     | T mid| x670 bl515
 *  b6 | text (12)           | T mid| x328..612 bl548
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("ductile, malleable, brittle: three families", "ductile, malleable, brittle: teen families")}
        </T>
      </Fade>

      {/* beat 1 — three curves, three personalities */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 470, 780, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 470 L240 300 C290 280 400 272 500 285" stroke={GREEN} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={510} y={280} size={10} fill={GREEN} anchor="start">
          {t("ductile", "ductile")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M150 470 L270 190" stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={270} y={180} size={10} fill={RED}>
          {t("brittle", "brittle")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M150 470 C230 465 400 400 620 260" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={630} y={255} size={10} fill={AMBER_DARK} anchor="start">
          {t("elastomer", "elastomer")}
        </T>
      </Fade>

      {/* beat 2 — ductile: wires */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M195 501 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={230} y={515} size={13} fill={GREEN}>
          {t("ductile → wires", "ductile → wires")}
        </T>
      </Fade>

      {/* beat 3 — malleable: sheets */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M415 501 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={460} y={515} size={13} fill={AMBER_DARK}>
          {t("malleable → sheets", "malleable → sheets")}
        </T>
      </Fade>

      {/* beat 4 — tension vs compression */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 565 L60 592" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={585} size={14} fill={RED} script anchor="start">
          {t("ductility=tension(wires); malleability=compression(sheets)", "ductility=tension(wires); malleability=compression(sheets)")}
        </T>
      </Fade>

      {/* beat 5 — brittle: snaps clean */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M635 501 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={670} y={515} size={13} fill={RED}>
          {t("brittle → snaps clean", "brittle → clean snap")}
        </T>
      </Fade>

      {/* beat 6 — the nuance */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={470} y={548} size={12} fill={INK} script>
          {t("most ductile = also malleable, but distinct", "zyadatar ductile = malleable bhi, par alag")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Chemistry Ch04 · Section 13 — "Steric number, hybridisation and the geometry table"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas. Only 7 beats.
 *
 * Beats (en [0, 13.82, 35.16, 55.47, 78.42, 102.31, 124.42]):
 *  0 anchor: everything runs on steric number
 *  1 definition: SN = sigma-bonded atoms + lone pairs
 *  2 formula: H = 1/2(V+M-C+A)
 *  3 table border+headers+SN+Hybridisation columns (5 rows)
 *  4 table Geometry+Ideal-angle columns (same 5 rows)
 *  5 %s character note
 *  6 sigma/pi bond counting
 *
 * Layout plan:
 *  b3-4 | geometry table | Draw/T | x100..980 y155..310 (4 cols × 5 rows)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    { sn: "2", hyb: "sp", geo: t("linear", "linear"), ang: "180°" },
    { sn: "3", hyb: "sp²", geo: t("trigonal planar", "trigonal planar"), ang: "120°" },
    { sn: "4", hyb: "sp³", geo: t("tetrahedral", "tetrahedral"), ang: "109.5°" },
    { sn: "5", hyb: "sp³d", geo: t("trigonal bipyramidal", "trigonal bipyramidal"), ang: t("90° & 120°", "90° & 120°") },
    { sn: "6", hyb: "sp³d²", geo: t("octahedral", "octahedral"), ang: "90°" },
  ];
  const rowY = [197, 222, 247, 272, 297];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("The geometry table", "Geometry table")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 440 80 C 490 76, 590 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("everything runs on ONE count: steric number", "sab kuch EK count par chalta: steric number")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={117} size={12.5} fill={INK}>
          {t(
            "steric number (SN) = σ-bonded atoms + lone pairs (multiple bond = 1 region)",
            "steric number (SN) = σ-bonded atoms + lone pairs (multiple bond = 1 region)"
          )}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={140} size={14} weight={700} fill={INK}>
          H = ½ (V + M − C + A)
        </T>
      </Fade>

      {/* beat 3 — table border, headers, SN + Hybridisation columns */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 100 155 h 880 v 155 h -880 z" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 220 155 V 310 M 460 155 V 310 M 740 155 V 310" stroke={MUTED} sw={1.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 100 182 h 880" stroke={INK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={150} y={172} size={12} weight={800} fill={INK}>
          SN
        </T>
        <T x={340} y={172} size={12} weight={800} fill={INK}>
          {t("Hybridisation", "Hybridisation")}
        </T>
        <T x={600} y={172} size={12} weight={800} fill={INK}>
          {t("Geometry", "Geometry")}
        </T>
        <T x={870} y={172} size={12} weight={800} fill={INK}>
          {t("Ideal angle", "Ideal angle")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        {rows.map((r, i) => (
          <T key={i} x={150} y={rowY[i]} size={12} fill={INK}>
            {r.sn}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        {rows.map((r, i) => (
          <T key={i} x={340} y={rowY[i]} size={12} weight={700} fill={INK}>
            {r.hyb}
          </T>
        ))}
      </Fade>

      {/* beat 4 — Geometry + Ideal-angle columns */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        {rows.map((r, i) => (
          <T key={i} x={600} y={rowY[i]} size={11.5} fill={INK}>
            {r.geo}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        {rows.map((r, i) => (
          <T key={i} x={870} y={rowY[i]} size={11.5} fill={GREEN}>
            {r.ang}
          </T>
        ))}
      </Fade>

      {/* beat 5 — %s character */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={340} size={13} weight={700} fill={INK}>
          % s-character: sp = 50% · sp² = 33.3% · sp³ = 25%
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={362} size={11.5} fill={MUTED}>
          {t(
            "more s-character → bigger angle, shorter & stronger bond",
            "zyada s-character → bada angle, chota & strong bond"
          )}
        </T>
      </Fade>

      {/* beat 6 — sigma/pi bond counting */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={392} size={13} fill={INK}>
          {t("single = 1σ · double = 1σ+1π · triple = 1σ+2π", "single = 1σ · double = 1σ+1π · triple = 1σ+2π")}
        </T>
      </Fade>
    </Scene>
  );
}

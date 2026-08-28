/**
 * Ch08 · Section 12 — "JEE Main: elongation of a series composite"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..2 are compressed to ~1s — short delays there.
 *
 * Diagram (steel+copper in series) on the left, formula cascade on the right.
 *
 * Beats (en [0, 11.35, 22.36, 32.68, 41.39, 59.14, 76.46, 85.93]):
 *  0 title + drawn underline
 *  1 diagram: steel (top) + copper (below), joined, 10 kg load
 *  2 text: series → same tension, total = sum
 *  3 F = Mg = 100 N
 *  4 ΔL_s = ... = 5.0×10⁻⁴ m
 *  5 ΔL_c = ... = 5.0×10⁻⁴ m
 *  6 boxed hero: ΔL_total = ΔL_s+ΔL_c = 1.0×10⁻³ m = 1.0 mm
 *  7 red margin note: equal stretch here is coincidence
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline          | Draw | x480..600 y86..93
 *  b1 | rail (hatched)     | Draw | x100..320 y140
 *  b1 | steel wire         | Draw | x210 y140..260
 *  b1 | "Steel" (13)       | T st | x230..~285 bl200 (y187..205)
 *  b1 | caption (10)       | T st | x230..~310 bl218 (y208..221)
 *  b1 | copper wire        | Draw | x210 y260..380
 *  b1 | "Copper" (13)      | T st | x230..~300 bl320 (y307..325)
 *  b1 | caption (10)       | T st | x230..~320 bl338 (y328..341)
 *  b1 | load chip "10 kg"  | Draw | x190..230 y380..408
 *  b1 | F arrow + label    | Draw | x210 y408..440
 *  b2 | text (15)          | T st | x470..~800 bl170 (y151..178)
 *  b3 | F=Mg=100N (18)     | T st | x470..~700 bl210 (y196..216)
 *  b4 | ΔL_s formula (13)  | T st | x470..782 bl248 (y238..252)
 *  b5 | ΔL_c formula (13)  | T st | x470..782 bl278 (y268..282)
 *  b6 | hero box           | Draw | x470..960 y310..390
 *  b6 | small line (14)    | T mid| x648..782 bl340 (y329..344)
 *  b6 | big result (22)    | T mid| x600..830 bl375 (y358..382)
 *  b7 | margin bar         | Draw | x60 y528..556
 *  b7 | note (15)          | T st | x76..~520 bl548 (y528..556)
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("JEE Main: total elongation of a series composite", "JEE Main: series composite ka total elongation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — steel over copper, joined, loaded */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M100 140 h220" stroke={INK} sw={3} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M210 140 L210 260" stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={230} y={200} size={13} fill={INK} weight={700} anchor="start">
          {t("Steel", "Steel")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={230} y={218} size={10} fill={MUTED} anchor="start">
          L, A, Yₛ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M206 260 A4 4 0 1 1 205.9 260" stroke={INK} sw={1.8} dur={0.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M210 260 L210 380" stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={230} y={320} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("Copper", "Copper")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={230} y={338} size={10} fill={MUTED} anchor="start">
          L, 2A, Y_c
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 3.3)} d="M190 380 h40 v28 h-40 z" stroke={INK} sw={2} dur={0.3} fill={CREAM} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={210} y={398} size={11} fill={INK}>
          {t("10 kg", "10 kg")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={arrowD(210, 408, 210, 440)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={226} y={430} size={13} fill={RED} weight={800} anchor="start">
          F
        </T>
      </Fade>

      {/* beat 2 — series: same tension, total = sum */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={470} y={170} size={15} fill={AMBER_DARK} script anchor="start">
          {t("series → same tension, total ΔL = sum", "series → same tension, total ΔL = sum")}
        </T>
      </Fade>

      {/* beat 3 — the common tension */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={470} y={210} size={18} fill={INK} weight={700} anchor="start">
          F = Mg = 10×10 = 100 N
        </T>
      </Fade>

      {/* beat 4 — steel's stretch */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={470} y={248} size={13} fill={INK} weight={600} anchor="start">
          ΔL_s = 100×1.0 / (1.0e-6)(2.0e11) = 5.0×10⁻⁴ m
        </T>
      </Fade>

      {/* beat 5 — copper's stretch */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={470} y={278} size={13} fill={INK} weight={600} anchor="start">
          ΔL_c = 100×1.0 / (2.0e-6)(1.0e11) = 5.0×10⁻⁴ m
        </T>
      </Fade>

      {/* beat 6 — the total */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M482 310 h466 q12 0 12 12 v56 q0 12 -12 12 h-466 q-12 0 -12 -12 v-56 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={715} y={340} size={14} fill={AMBER_DARK} weight={600}>
          ΔL_total = ΔL_s + ΔL_c
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={715} y={375} size={22} fill={INK} weight={800}>
          = 1.0×10⁻³ m = 1.0 mm
        </T>
      </Fade>

      {/* beat 7 — the coincidence */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("equal stretch here is coincidence, not a rule", "yahan equal stretch coincidence hai, rule nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

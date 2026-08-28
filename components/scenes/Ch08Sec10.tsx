/**
 * Ch08 · Section 10 — "CBSE: Young's modulus of a steel wire"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 3..6 are compressed to ~1s — short delays there.
 *
 * Two columns: GIVEN data box (left), step-by-step cascade (right).
 *
 * Beats (en [0, 4.78, 20.65, 28.59, 35.5, 53.85, 65.37, 76.46]):
 *  0 title only
 *  1 GIVEN box: L, A, ΔL, M, g
 *  2 step ① label — the force
 *  3 F = Mg = 8.0×10 = 80 N (+ check)
 *  4 step ② label — SI units, + conversion text
 *  5 Y = FL/AΔL = 80×3.0 / (2.0e-6)(6.0e-4)
 *  6 boxed hero: Y = 240 / 1.2e-9 = 2.0×10¹¹ Pa
 *  7 red margin note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | GIVEN box         | Draw | x60..380 y140..360
 *  b1 | "GIVEN" (14)      | T st | x80..152 bl165 (y154..169)
 *  b1 | 5 data lines (16) | T st | x80..~220 bl200/232/264/296/328
 *  b2 | bullet            | Draw | x405..415 y160
 *  b2 | "① the force"(13) | T st | x420..~520 bl165 (y155..169)
 *  b3 | F=Mg formula (20) | T st | x420..660 bl195 (y179..201)
 *  b3 | check             | Draw | x670..685 y178..196
 *  b4 | bullet            | Draw | x405..415 y225
 *  b4 | "② SI units" (13) | T st | x420..~530 bl230 (y220..234)
 *  b4 | conversion (14)   | T st | x420..658 bl258 (y254..262)
 *  b5 | "③ substitute"(13)| T st | x420..~540 bl295 (y285..299)
 *  b5 | Y=FL/AΔL (15)     | T st | x420..750 bl325 (y310..330)
 *  b5 | underline         | Draw | x420..580 y336..340
 *  b6 | hero box          | Draw | x420..900 y360..430
 *  b6 | "Y=...=2.0e11 Pa" | T mid| x474..846 bl405 (y387..412)
 *  b7 | margin bar        | Draw | x60 y465..493
 *  b7 | note (15)         | T st | x76..505 bl485 (y466..493)
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const GIVEN: [string, string][] = [
  ["L = 3.0 m", "L = 3.0 m"],
  ["A = 2.0 mm²", "A = 2.0 mm²"],
  ["ΔL = 0.60 mm", "ΔL = 0.60 mm"],
  ["M = 8.0 kg", "M = 8.0 kg"],
  ["g = 10 m/s²", "g = 10 m/s²"],
];

export default function Ch08Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("CBSE: Young's modulus of a steel wire", "CBSE: steel wire ka Young's modulus")}
        </T>
      </Fade>

      {/* beat 1 — the given data */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M72 140 h296 q12 0 12 12 v196 q0 12 -12 12 h-296 q-12 0 -12 -12 v-196 q0 -12 12 -12"
        stroke={MUTED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={165} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("GIVEN", "GIVEN")}
        </T>
      </Fade>
      {GIVEN.map(([en_, hi_], i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.75 + i * 0.2)}>
          <T x={80} y={200 + i * 32} size={16} fill={INK} weight={600} anchor="start">
            {t(en_, hi_)}
          </T>
        </Fade>
      ))}

      {/* beat 2 — step 1: the force */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M405 160 h10" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={420} y={165} size={13} fill={MUTED} weight={600} anchor="start">
          {t("① the force", "① the force")}
        </T>
      </Fade>

      {/* beat 3 — F = Mg = 80 N */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={420} y={195} size={20} fill={INK} weight={700} anchor="start">
          F = Mg = 8.0 × 10 = 80 N
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M670 190 l5 6 l10 -12" stroke={GREEN} sw={2.2} dur={0.3} />

      {/* beat 4 — step 2: SI units */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M405 225 h10" stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={420} y={230} size={13} fill={MUTED} weight={600} anchor="start">
          {t("② SI units", "② SI units")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={420} y={258} size={14} fill={AMBER_DARK} weight={600} anchor="start">
          A = 2.0×10⁻⁶ m² · ΔL = 6.0×10⁻⁴ m
        </T>
      </Fade>

      {/* beat 5 — step 3: substitute */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={420} y={295} size={13} fill={MUTED} weight={600} anchor="start">
          {t("③ substitute", "③ substitute")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={420} y={325} size={15} fill={INK} weight={600} anchor="start">
          Y = FL/AΔL = 80×3.0 / (2.0×10⁻⁶)(6.0×10⁻⁴)
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M420 336 Q500 340 580 336" stroke={AMBER_DARK} sw={1.4} dur={0.3} />

      {/* beat 6 — the hero result */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M432 360 h456 q12 0 12 12 v46 q0 12 -12 12 h-456 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={660} y={405} size={24} fill={INK} weight={800}>
          Y = 240 / 1.2×10⁻⁹ = 2.0×10¹¹ Pa
        </T>
      </Fade>

      {/* beat 7 — matches the textbook value */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 465 L60 493" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={485} size={15} fill={RED} script anchor="start">
          {t("matches the textbook value — always carry the unit", "textbook value se match — unit hamesha saath rakhiye")}
        </T>
      </Fade>
    </Scene>
  );
}

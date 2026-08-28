/**
 * Ch12 · Section 21 — CBSE derivation: pressure of an ideal gas
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.09, 30.81, 45.14, 57.17, 71.51, 85.85, 86.85, 87.85]):
 *  0 title + setup (N molecules, mass m, cube side l) · 1 THE FIGURE: cube,
 *    molecule with vx/vy/vz, shaded wall ⊥ x-axis · 2 elastic bounce: Δp=-2mvx
 *    · 3 time between hits: Δt=2l/vx · 4 force from one molecule · 5 sum over
 *    N · 6 divide by area l² (V=l³) · 7 isotropy ⇒ P=⅓ρv²rms boxed · 8 two
 *    notes: l cancels (any shape), ⅓ = 3D isotropy fingerprint
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 21, red)          | T mid | x290..790 y31..69 (bl58)
 *  b0 | setup (13, ink, script)         | T mid | x540 y96 (bl 79..103)
 *  b1 | cube box                        | Draw  | x360..660 y115..245
 *  b1 | wall (red, thick) + label       | Draw  | x650 y115..245
 *  b1 | molecule + vx/vy/vz arrows      | mix   | (480,185)
 *  b1 | "l" labels ×2 (inside box)      | T     | (510,132) (345,182)
 *  b2 | bounce line (14, ink)           | T mid | x540 y270
 *  b3 | time line (14, ink)             | T mid | x540 y296
 *  b4 | force line (14, ink)            | T mid | x540 y322
 *  b5 | sum line (14, ink)              | T mid | x540 y348
 *  b6 | divide line (14, amber_dark)    | T mid | x540 y374
 *  b7 | isotropy line (13, ink, script) | T mid | x540 y400
 *  b7 | final chip (big, green)          | Chip  | x400..680 y418..460
 *  b8 | note1 (13, green) · note2 (13)  | T mid | x540 y488 / y512
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("deriving P = ⅓ρv²rms [CBSE]", "P = ⅓ρv²rms derive karna [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={96} size={13} fill={INK} script>
          {t("N molecules, mass m, in a cube of side l", "N molecules, mass m, cube side l mein")}
        </T>
      </Fade>

      {/* beat 1 — THE FIGURE: cube, molecule, velocity components */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 360 115 h 300 v 130 h -300 z" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 650 115 V 245" stroke={RED} sw={5} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={665} y={182} size={11} fill={RED} anchor="start">
          {t("wall ⊥ x, area l²", "wall ⊥ x, area l²")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={510} y={132} size={12} fill={INK}>
          l
        </T>
        <T x={345} y={182} size={12} fill={INK} anchor="end">
          l
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={480} cy={185} r={7} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(480, 185, 610, 185)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={545} y={175} size={12} fill={AMBER_DARK}>
          vx
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(480, 185, 480, 135)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={468} y={143} size={12} fill={INK} anchor="end">
          vy
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={arrowD(480, 185, 445, 215)} stroke={MUTED} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={440} y={229} size={12} fill={MUTED} anchor="end">
          vz
        </T>
      </Fade>

      {/* beat 2 — elastic bounce */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={270} size={14} fill={INK}>
          elastic bounce: Δp = −2mvx ⇒ wall gets +2mvx
        </T>
      </Fade>

      {/* beat 3 — time between hits */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={296} size={14} fill={INK}>
          round trip 2l at vx ⇒ Δt = 2l/vx
        </T>
      </Fade>

      {/* beat 4 — force from one molecule */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={322} size={14} fill={INK}>
          F₁ = 2mvx ÷ (2l/vx) = mvx²/l
        </T>
      </Fade>

      {/* beat 5 — sum over N */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={348} size={14} fill={INK}>
          sum over N ⇒ F_total = (m/l)·N⟨vx²⟩
        </T>
      </Fade>

      {/* beat 6 — divide by area */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={374} size={14} fill={AMBER_DARK}>
          ÷ area l² (V=l³) ⇒ P = (mN/V)⟨vx²⟩
        </T>
      </Fade>

      {/* beat 7 — isotropy => final result */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={400} size={13} fill={INK} script>
          {t("isotropy: ⟨vx²⟩ = ⅓⟨v²⟩", "isotropy: ⟨vx²⟩ = ⅓⟨v²⟩")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <Chip x={400} y={418} w={280} h={42} fill={GREEN} textFill="#fff" size={19} script={false}>
          P = ⅓ρ⟨v²rms⟩
        </Chip>
      </Fade>

      {/* beat 8 — two closing notes */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={488} size={13} fill={GREEN} script>
          {t("l cancels ⇒ holds for ANY container shape", "l cancel ⇒ kisi bhi container shape ke liye")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={512} size={13} fill={INK} script>
          {t("⅓ = fingerprint of 3D isotropy", "⅓ = 3D isotropy ka fingerprint")}
        </T>
      </Fade>
    </Scene>
  );
}

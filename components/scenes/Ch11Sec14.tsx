/**
 * Ch11 · Section 14 — "Where the latent heat of boiling goes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 14 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry mirrors already-PASS Sec6 pattern. Re-run once
 * audio lands.
 *
 * Beats (8): 0 hook · 1 liquid→vapor diagram + P · 2 L given, task ·
 *  3 Q=mL=4000J · 4 W=PΔV≈310J · 5 ΔU≈3690J (~92%) · 6 92% bonds / 8%
 *  atmosphere · 7 verdict: why latent heats are large.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)   | T mid | x268..812 y33..77 (bl 64)
 *  b0 | hook (13,script)    | T mid | x540 y98
 *  b1 | liquid box (h40)    | Draw  | x150..220 y170..210
 *  b1 | liquid label (11)   | T mid | x185 y225
 *  b1 | arrow               | Draw  | (225,180)→(345,150)
 *  b1 | vapor box (h130)    | Draw  | x350..530 y110..240
 *  b1 | vapor label (11)    | T mid | x440 y255
 *  b1 | P line (13)         | T st  | x650 y150
 *  b2 | L line (13)         | T st  | x650 y178
 *  b2 | task (13,script)    | T st  | x650 y206
 *  b3 | line (14)           | T mid | x540 y280
 *  b3 | stamp chip (h30)    | Chip  | x460..620 y300..330
 *  b4 | line (13)           | T mid | x540 y365
 *  b4 | stamp chip (h30)    | Chip  | x460..620 y385..415
 *  b5 | line (14)           | T mid | x540 y450
 *  b5 | stamp chip (h32)    | Chip  | x400..680 y470..502
 *  b6 | 2 split lines (13)  | T mid | x540 y525/552
 *  b7 | verdict (13,script) | T mid | x540 y580
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("where the latent heat of boiling goes", "boiling ki latent heat kahan jaati hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("an advanced example — first law meets a phase change", "advanced example — first law aur phase change")}
        </T>
      </Fade>

      {/* beat 1 — liquid becomes vapour, volume explodes */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 170 h 70 v 40 h -70 z" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={185} y={225} size={11} fill={MUTED} script={false}>
          {t("2g liquid, V=2.5 cm³", "2g liquid, V=2.5 cm³")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(225, 180, 345, 150)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 350 110 h 180 v 130 h -180 z" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={440} y={255} size={11} fill={MUTED} script={false}>
          {t("vapour, V=3100 cm³", "vapour, V=3100 cm³")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={650} y={150} size={13} fill={INK} anchor="start" script={false}>
          P = 1.0×10⁵ Pa ({t("constant", "constant")})
        </T>
      </Fade>

      {/* beat 2 — the latent heat, and the task */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={650} y={178} size={13} fill={INK} anchor="start" script={false}>
          L = 2.0×10⁶ J/kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={650} y={206} size={13} fill={MUTED} script anchor="start">
          {t("find: heat supplied?", "find karo: heat supplied?")}
        </T>
      </Fade>

      {/* beat 3 — the heat */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={280} size={14} fill={INK} script={false}>
          Q = mL = (2×10⁻³)(2×10⁶)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={460} y={300} w={160} h={30} fill={INK} textFill={CREAM} size={16} script={false}>
          Q = 4000 J
        </Chip>
      </Fade>

      {/* beat 4 — the work, isobaric */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={365} size={13} fill={INK} script={false}>
          W = PΔV ≈ (10⁵)(3097.5×10⁻⁶)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={460} y={385} w={160} h={30} fill={AMBER} textFill={INK} size={16} script={false}>
          W ≈ 310 J
        </Chip>
      </Fade>

      {/* beat 5 — the internal-energy change */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={450} size={14} fill={INK} script={false}>
          ΔU = 4000 − 310
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={400} y={470} w={280} h={32} fill={INK} textFill={CREAM} size={16} script={false}>
          ΔU ≈ 3690 J (~92%)
        </Chip>
      </Fade>

      {/* beat 6 — where the 92% and 8% go */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={525} size={13} fill={GREEN} script>
          {t("92% → internal energy (breaks bonds)", "92% → internal energy (bonds todta hai)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={552} size={13} fill={AMBER_DARK} script>
          {t("8% → pushes the atmosphere back", "8% → atmosphere ko peeche dhakelta hai")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={580} size={13} fill={INK} weight={700} script={false}>
          {t("bonds are expensive, expansion is cheap", "bonds mehenge hain, expansion sasta hai")}
        </T>
      </Fade>
    </Scene>
  );
}

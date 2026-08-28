/**
 * Ch11 · Section 33 — "The heat engine: pay heat, get work"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 33 not yet uploaded, verify-scene.mjs could
 * not be run. This is the canonical heat-engine diagram, foundational for
 * the rest of the chapter — double-check by eye once verified. Re-run
 * once audio lands.
 *
 * Beats (8): 0 hook · 1 heat→work, cyclically · 2 3-part story (draw the
 *  3 shapes) · 3 the flow: Q1 in, W out, Q2 out · 4 "part of it" note ·
 *  5 cyclic ⇒ W=Q1−Q2 · 6 efficiency η=1−Q2/Q1 (boxed) · 7 salary analogy.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)   | T mid | x283..797 y38..77 (bl 64)
 *  b0 | hook (12,script)    | T mid | x540 y96
 *  b1 | line (12,script)    | T mid | x540 y120
 *  b2 | HOT box (h50)       | Draw  | x380..700 y135..185
 *  b2 | ENGINE circle r58   | Draw  | c(540,270)
 *  b2 | COLD box (h50)      | Draw  | x380..700 y370..420
 *  b3 | Q1 arrow+label      | Draw  | (540,185)→(540,212), label y200
 *  b3 | W arrow+label       | Draw  | (598,270)→(680,270), label x695 y275
 *  b3 | Q2 arrow+label      | Draw  | (540,328)→(540,370), label y352
 *  b4 | note (13,script)    | T mid | x540 y450
 *  b5 | formula (15,w800)   | T mid | x540 y480
 *  b6 | efficiency chip     | Chip  | x360..720 y500..534
 *  b7 | analogy chip        | Chip  | x280..800 y550..580
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

export default function Ch11Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the heat engine: pay heat, get work", "heat engine: heat do, work lo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("the first law doesn't say energy is USEFUL", "first law yeh nahi kehta ki energy USEFUL hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={MUTED} script>
          {t("heat → work, cyclically — every engine, turbine, power plant", "heat → work, cyclically — har engine, turbine, plant")}
        </T>
      </Fade>

      {/* beat 2 — the three-part story */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 388 135 h 304 q 8 0 8 8 v 34 q 0 8 -8 8 h -304 q -8 0 -8 -8 v -34 q 0 -8 8 -8" stroke={INK} sw={2.2} dur={0.7} fill={AMBER} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={164} size={14} fill={INK} weight={700} script={false}>
          {t("HOT RESERVOIR, T₁", "HOT RESERVOIR, T₁")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 482 270 a 58 58 0 1 0 0.01 0" stroke={INK} sw={2.6} dur={0.8} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={540} y={275} size={15} fill={INK} weight={800} script={false}>
          {t("ENGINE", "ENGINE")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 388 370 h 304 q 8 0 8 8 v 34 q 0 8 -8 8 h -304 q -8 0 -8 -8 v -34 q 0 -8 8 -8" stroke={INK} sw={2.2} dur={0.7} fill={MUTED} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={540} y={399} size={14} fill={CREAM} weight={700} script={false}>
          {t("COLD RESERVOIR, T₂", "COLD RESERVOIR, T₂")}
        </T>
      </Fade>

      {/* beat 3 — the flow */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(540, 185, 540, 212)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={565} y={200} size={16} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₁
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(598, 270, 680, 270)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={695} y={275} size={18} fill={GREEN} weight={800} anchor="start" script={false}>
          W
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={arrowD(540, 328, 540, 370)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={565} y={352} size={16} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₂
        </T>
      </Fade>

      {/* beat 4 — you can never convert it all */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={450} size={13} fill={MUTED} script>
          {t("“part of it” — heat MUST be thrown away", "“part of it” — kuch heat FEKNA hi padta hai")}
        </T>
      </Fade>

      {/* beat 5 — the first law, cyclic */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={480} size={15} fill={INK} weight={800} script={false}>
          {t("cyclic ⇒ ΔU=0 ⇒ W = Q₁ − Q₂", "cyclic ⇒ ΔU=0 ⇒ W = Q₁ − Q₂")}
        </T>
      </Fade>

      {/* beat 6 — efficiency */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={360} y={500} w={360} h={34} fill={INK} textFill={CREAM} size={17} script={false}>
          η = W/Q₁ = 1 − Q₂/Q₁
        </Chip>
      </Fade>

      {/* beat 7 — the salary analogy */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={280} y={550} w={520} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("Q₁=salary, W=take-home, Q₂=tax (never zero)", "Q₁=salary, W=take-home, Q₂=tax (kabhi zero nahi)")}
        </Chip>
      </Fade>
    </Scene>
  );
}

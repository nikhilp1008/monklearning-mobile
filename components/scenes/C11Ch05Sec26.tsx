/**
 * C11 Chemistry Ch05 · Section 26 — "Calorimetry: the bomb versus the
 * coffee-cup" (opens subtopic 4)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.98,19.37,34.56,45.65,55.38,68.69,80.55]):
 *  0 heading + underline (anchor)
 *  1 text: trap reaction in insulated vessel, watch ΔT
 *  2 BOMB icon (sealed steel) + statement: no ΔV ⇒ heat = ΔU (amber)
 *  3 red note: recall subtopic 1, qV = ΔU
 *  4 COFFEE-CUP icon (open) + statement: atmospheric P ⇒ heat = ΔH (green)
 *  5 caption: instrument chooses volume-fixed or pressure-fixed
 *  6 formula chip: ΔH = ΔU + Δngas·RT
 *  7 final chip: bomb→ΔU, coffee-cup→ΔH
 *
 * Layout plan:
 *  b0 | heading (18, w800) + underline| y81..100 (bl95); y105
 *  b1 | text1 (14, muted)             | T mid | y114..129 (bl125)
 *  b2 | BOMB icon                     | Draw  | x110..330 y168..288
 *  b2 | BOMB label (14, amber)        | T mid | x220 y150
 *  b2 | statement (13, amber)         | Chip  | x60..380 y298..333
 *  b3 | red note chip (14)            | Chip  | x270..810 y348..383
 *  b4 | CUP icon                      | Draw  | x690..875 y168..288
 *  b4 | CUP label (14, green)         | T mid | x782 y150
 *  b4 | statement (13, green)         | Chip  | x622..942 y298..333
 *  b5 | caption (14, muted)           | T mid | y402..417 (bl413)
 *  b6 | formula chip (17)             | Chip  | x360..680 y428..468
 *  b7 | final chip (15)               | Chip  | x240..840 y481..518
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("calorimetry: bomb vs coffee-cup", "calorimetry: bomb vs coffee-cup")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={18} weight={800} fill={INK}>
          {t("How do we measure the heat of a reaction?", "reaction ka heat kaise measure karte hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 360 105 C 430 102, 650 102, 720 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — anchor */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={125} size={14} fill={MUTED}>
          {t(
            "trap the reaction in an insulated vessel — a calorimeter — watch ΔT",
            "reaction ko insulated vessel mein trap karo — calorimeter — ΔT dekho"
          )}
        </T>
      </Fade>

      {/* beat 2 — bomb icon */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={220} y={150} size={14} weight={800} fill={AMBER_DARK}>
          BOMB
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 118 168 h 204 a 8 8 0 0 1 8 8 v 96 a 8 8 0 0 1 -8 8 h -204 a 8 8 0 0 1 -8 -8 v -96 a 8 8 0 0 1 8 -8 z" stroke={AMBER_DARK} sw={3} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d="M 150 198 h 140 v 60 h -140 z" stroke={AMBER_DARK} sw={1.6} fill="rgba(238,163,31,0.18)" dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={60} y={298} w={320} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("sealed, rigid steel — no ΔV ⇒ heat = ΔU", "sealed, rigid steel — ΔV nahi ⇒ heat = ΔU")}
        </Chip>
      </Fade>

      {/* beat 3 — red note */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={270} y={348} w={540} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("recall (subtopic 1): qV = ΔU at constant volume", "recall (subtopic 1): constant volume par qV = ΔU")}
        </Chip>
      </Fade>

      {/* beat 4 — coffee-cup icon */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={782} y={150} size={14} weight={800} fill={GREEN}>
          COFFEE-CUP
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 690 168 L 705 288 L 875 288 L 860 168" stroke={GREEN} sw={3} fill="rgba(28,155,87,0.12)" dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Chip x={622} y={298} w={320} h={35} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("open, atmospheric P ⇒ heat = ΔH", "open, atmospheric P ⇒ heat = ΔH")}
        </Chip>
      </Fade>

      {/* beat 5 — instrument caption */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={413} size={14} fill={MUTED}>
          {t(
            "the instrument chooses which quantity: volume-fixed or pressure-fixed",
            "instrument hi decide karta hai: volume-fixed ya pressure-fixed"
          )}
        </T>
      </Fade>

      {/* beat 6 — conversion formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={360} y={428} w={320} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔH = ΔU + Δngas·RT
        </Chip>
      </Fade>

      {/* beat 7 — final tying chip */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={240} y={481} w={600} h={37} fill={GREEN} textFill="#fff" size={15} script={false}>
          Bomb (const V) → ΔU   ·   Coffee-cup (const P) → ΔH
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Chemistry Ch05 · Section 3 — "The first law and its sign convention"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.05,10.05,11.05,12.05,13.05,14.05]):
 *  0 the system box is drawn, labelled
 *  1 ΔU lands inside; q (heat) and w (work) arrows enter from left/top
 *  2 hero formula: ΔU = q + w
 *  3 IUPAC/NCERT clarifier line: q = heat TO system, w = work ON system
 *  4 red note: q>0 absorbed / q<0 released (accumulates)
 *  5 red note: w>0 ON system (compression) / w<0 BY system (expansion)
 *  6 caution stamp: heat/work only exist for a PROCESS, never a state
 *
 * Layout plan:
 *  b0 | system box                    | Draw   | x390..690  y140..300
 *  b0 | "SYSTEM" (13, muted, bottom)  | T mid  | x?..?      y274..289 (bl285)
 *  b1 | "ΔU" (32, ink, w800)          | T mid  | x?..?      y229..265 (bl255)
 *  b1 | q arrow (in, from left)       | Draw   | (300,190)→(398,190)
 *  b1 | "q" (18, ink, w800)           | T mid  | x?..?      y161..179 (bl175)
 *  b1 | w arrow (in, from top)        | Draw   | (540,90)→(540,148)
 *  b1 | "w" (18, ink, w800)           | T st   | x560..?    y96..114  (bl110)
 *  b1 | caption (14, muted, script)   | T mid  | x?..?      y310..335 (bl328)
 *  b2 | formula chip ΔU=q+w           | Chip   | x440..640  y345..387
 *  b3 | clarifier line (14, ink)      | T mid  | x351..729  y399..414 (bl410)
 *  b4 | q>0/q<0 rows (15)             | T st   | x200..458  y428..475 (bl440/470)
 *  b5 | w>0/w<0 rows (15)             | T st   | x620..860  y428..475 (bl440/470)
 *  b6 | caution chip (red border)     | Chip   | x170..870  y520..560
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
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("first law: energy conservation", "first law: energy conservation")}
        </T>
      </Fade>

      {/* beat 0 — system box */}
      <Draw on={beat >= 0} delay={dl(0, 0)} d="M 390 140 h 300 v 160 h -300 z" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={540} y={285} size={13} weight={600} fill={MUTED}>
          {t("SYSTEM", "SYSTEM")}
        </T>
      </Fade>

      {/* beat 1 — ΔU lands, q and w arrows enter */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={255} size={32} weight={800} fill={INK}>
          ΔU
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.35)} d={arrowD(300, 190, 398, 190)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={349} y={175} size={18} weight={800} fill={INK}>
          q
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(540, 90, 540, 148)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={560} y={110} size={18} weight={800} fill={INK} anchor="start">
          w
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={328} size={14} fill={MUTED} script>
          {t("in ⇒ ΔU — nothing vanishes, nothing's free", "andar ⇒ ΔU — kuch gayab nahi, kuch free nahi")}
        </T>
      </Fade>

      {/* beat 2 — hero formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={440} y={345} w={200} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={24} script={false}>
          ΔU = q + w
        </Chip>
      </Fade>

      {/* beat 3 — IUPAC/NCERT clarifier */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={410} size={14} weight={600} fill={INK}>
          {t("q = heat supplied TO system · w = work done ON system", "q = system ko mila heat · w = system par hua work")}
        </T>
      </Fade>

      {/* beat 4 — q sign rule (accumulates) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={200} y={440} size={15} weight={700} fill={GREEN} anchor="start">
          {t("q > 0 → heat absorbed", "q > 0 → heat absorb hota hai")}
        </T>
        <T x={200} y={470} size={15} weight={700} fill={RED} anchor="start">
          {t("q < 0 → heat released", "q < 0 → heat release hota hai")}
        </T>
      </Fade>

      {/* beat 5 — w sign rule (accumulates) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={620} y={440} size={15} weight={700} fill={GREEN} anchor="start">
          {t("w > 0 → ON system (compression)", "w > 0 → ON system (compression)")}
        </T>
        <T x={620} y={470} size={15} weight={700} fill={RED} anchor="start">
          {t("w < 0 → BY system (expansion)", "w < 0 → BY system (expansion)")}
        </T>
      </Fade>

      {/* beat 6 — caution stamp */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={170} y={520} w={700} h={40} fill={CREAM} stroke={RED} textFill={RED} size={17} script={false}>
          {t(
            "heat/work exist only for a PROCESS — system stores U, not q or w",
            "heat/work sirf PROCESS mein — system U store karta hai, q/w nahi"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

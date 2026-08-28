/**
 * Ch11 · Section 12 — "A unit-care numerical, and a pure sign trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Two worked examples, side by side (divider at x540) — mirrors Sec5.
 *
 * Beats (8): 0 hook · 1 LEFT given (250cal, 500J) · 2 convert to J ·
 *  3 compute ΔU=+545J · 4 RIGHT given (compressed, releases heat) ·
 *  5 fix the signs (ΔQ=-30, ΔW=-80) · 6 compute ΔU=+50J · 7 sanity check.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)      | Chip  | x80..240 / x610..780  y150..176
 *  b1 | 2 given lines (15)    | T st  | x90/620  y196/221
 *  b2 | convert (14)          | T mid | x285 y255
 *  b3 | compute (14)          | T mid | x285 y285
 *  b3 | stamp chip (h32)      | Chip  | x195..375 y305..337
 *  b3 | note (12,script)      | T mid | x285 y360
 *  b5 | signs (14)            | T mid | x795 y255
 *  b6 | compute (14)          | T mid | x795 y285
 *  b6 | stamp chip (h32)      | Chip  | x705..885 y305..337
 *  b7 | sanity (12,script)    | T mid | x795 y360
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("a unit-care numerical, and a pure sign trap", "unit-care numerical, aur pura sign trap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={102} size={14} fill={MUTED} script>
          {t("first tests unit care — second is all about signs", "pehla unit care test karta hai — doosra sirf signs")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 140 L 540 470" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — unit care ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={80} y={150} w={160} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("UNIT CARE", "UNIT CARE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={196} size={15} fill={INK} anchor="start" script={false}>
          ΔQ = 250 cal ({t("absorbed", "absorbed")})
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={90} y={221} size={15} fill={INK} anchor="start" script={false}>
          ΔW = 500 J ({t("by gas", "by gas")})
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={255} size={14} fill={INK} script={false}>
          250 × 4.18 = 1045 J
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={285} y={285} size={14} fill={INK} script={false}>
          ΔU = 1045 − 500
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={195} y={305} w={180} h={32} fill={INK} textFill={CREAM} size={17} script={false}>
          ΔU = +545 J
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={285} y={360} size={12} fill={MUTED} script>
          {t("convert cal → J FIRST, always", "cal → J pehle convert karo")}
        </T>
      </Fade>

      {/* ===== RIGHT — the sign trap ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={610} y={150} w={170} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("SIGN TRAP", "SIGN TRAP")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={620} y={196} size={15} fill={INK} anchor="start" script={false}>
          {t("compressed: 80 J on gas", "compress: 80 J gas par")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={620} y={221} size={15} fill={INK} anchor="start" script={false}>
          {t("releases 30 J heat", "30 J heat release hoti hai")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={255} size={14} fill={RED} weight={700} script={false}>
          ΔQ = −30, ΔW = −80
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={795} y={285} size={14} fill={INK} script={false}>
          ΔU = −30 − (−80)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={705} y={305} w={180} h={32} fill={INK} textFill={CREAM} size={17} script={false}>
          ΔU = +50 J
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={795} y={360} size={12} fill={GREEN} script>
          {t("squeeze + little heat out ⇒ U rises ✓", "squeeze + thoda heat out ⇒ U badhta hai ✓")}
        </T>
      </Fade>
    </Scene>
  );
}

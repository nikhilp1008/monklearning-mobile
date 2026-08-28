/**
 * Ch11 · Section 34 — "Refrigerators and heat pumps: pay work, move heat"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 34 not yet uploaded, verify-scene.mjs could
 * not be run. Reuses Sec33's 3-box footprint with REVERSED arrows (the
 * "movie backwards" framing). Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 work forces heat unnatural way · 2 draw 3 shapes
 *  (FRIDGE/PUMP) · 3 reversed flow: Q2 in, W in, Q1 out · 4 heat pump =
 *  same machine, different goal · 5 COP definitions (fridge/pump) ·
 *  6 COP can exceed 1 · 7 reservoir definition.
 *
 * Layout plan — identical box footprint to Sec33:
 *  title (script 24, red)  | T mid | x203..877 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | line (12,script)   | T mid | x540 y120
 *  b2 | WARM box (h50)     | Draw  | x380..700 y135..185
 *  b2 | device circle r58  | Draw  | c(540,270)
 *  b2 | COLD box (h50)     | Draw  | x380..700 y370..420
 *  b3 | Q2 in / W in / Q1 out arrows+labels
 *  b4 | note (12,script)   | T mid | x540 y450
 *  b5 | 2 COP chips (h30)  | Chip  | x260..540 / x560..840 y480..510
 *  b6 | warning chip (h30) | Chip  | x340..740 y518..548
 *  b7 | reservoir (12,scr) | T mid | x540 y570
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

export default function Ch11Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("refrigerators and heat pumps: pay work, move heat", "refrigerator aur heat pump: work do, heat move karo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("run the movie backwards — engine in reverse", "movie ulti chalao — engine reverse mein")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={MUTED} script>
          {t("work forces heat the UNNATURAL way: cold → hot", "work heat ko UNNATURAL raaste par bhejta: cold → hot")}
        </T>
      </Fade>

      {/* beat 2 — the same three shapes */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 388 135 h 304 q 8 0 8 8 v 34 q 0 8 -8 8 h -304 q -8 0 -8 -8 v -34 q 0 -8 8 -8" stroke={INK} sw={2.2} dur={0.7} fill={AMBER} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={164} size={14} fill={INK} weight={700} script={false}>
          {t("WARM SIDE, T₁", "WARM SIDE, T₁")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 482 270 a 58 58 0 1 0 0.01 0" stroke={INK} sw={2.6} dur={0.8} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={540} y={275} size={14} fill={INK} weight={800} script={false}>
          {t("FRIDGE / PUMP", "FRIDGE / PUMP")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 388 370 h 304 q 8 0 8 8 v 34 q 0 8 -8 8 h -304 q -8 0 -8 -8 v -34 q 0 -8 8 -8" stroke={INK} sw={2.2} dur={0.7} fill={MUTED} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={540} y={399} size={14} fill={CREAM} weight={700} script={false}>
          {t("COLD SIDE, T₂", "COLD SIDE, T₂")}
        </T>
      </Fade>

      {/* beat 3 — the reversed flow */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(540, 370, 540, 328)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={565} y={352} size={16} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₂
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(680, 270, 598, 270)} stroke={GREEN} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={695} y={275} size={18} fill={GREEN} weight={800} anchor="start" script={false}>
          W
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={arrowD(540, 212, 540, 185)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={565} y={200} size={16} fill={AMBER_DARK} weight={800} anchor="start" script={false}>
          Q₁
        </T>
      </Fade>

      {/* beat 4 — same hardware, different goal */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={450} size={12} fill={MUTED} script>
          {t("heat pump = same machine — you care about Q₁ (warm side)", "heat pump = same machine — Q₁ (warm side) ki fikr")}
        </T>
      </Fade>

      {/* beat 5 — coefficient of performance */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={260} y={480} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("fridge: COP = Q₂/W", "fridge: COP = Q₂/W")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={560} y={480} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("pump: COP = Q₁/W", "pump: COP = Q₁/W")}
        </Chip>
      </Fade>

      {/* beat 6 — COP can exceed 1 */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={340} y={518} w={400} h={30} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("COP can EXCEED 1 — not a percentage!", "COP 1 se ZYADA ho sakta — percentage nahi!")}
        </Chip>
      </Fade>

      {/* beat 7 — what a reservoir is */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={570} size={12} fill={MUTED} script>
          {t("reservoir: so large its temperature doesn't change", "reservoir: itna bada ki temperature badalta nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

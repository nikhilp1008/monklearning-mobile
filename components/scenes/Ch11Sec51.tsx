/**
 * Ch11 · Section 51 — "A clean efficiency, and raising it"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 51 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36/43/44.
 * Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 LEFT given (T1=500,T2=300) · 2 compute η=40% ·
 *  3 RIGHT given (η:50→60%) · 4 invert formula · 5 compute T1 both cases
 *  · 6 verdict: rise=150K, don't scale linearly.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x90..290 / x600..800 y146..172
 *  b1 | given (14/12)      | T st  | x100/610 y192
 *  b2 | stamp chip (h34)   | Chip  | x145..425 y225..259
 *  b4 | formula (12)       | T mid | x795 y220
 *  b5 | compute (11)       | T mid | x795 y245
 *  b6 | stamp chip (h32)   | Chip  | x635..955 y270..302
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("a clean efficiency, and raising it", "ek clean efficiency, aur usse badhana")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("one direct calculation, one inversion test", "ek direct calculation, ek inversion test")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 136 L 540 380" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — clean efficiency ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={90} y={146} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("CLEAN EFFICIENCY", "CLEAN EFFICIENCY")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={100} y={192} size={14} fill={INK} anchor="start" script={false}>
          T₁=500K, T₂=300K
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={145} y={225} w={280} h={34} fill={INK} textFill={CREAM} size={15} script={false}>
          η = 1−300/500 = 40%
        </Chip>
      </Fade>

      {/* ===== RIGHT — raising it ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <Chip x={600} y={146} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("RAISING IT", "RAISING IT")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={610} y={192} size={12} fill={INK} anchor="start" script={false}>
          {t("η: 50%→60%, T₂=300K fixed", "η: 50%→60%, T₂=300K fixed")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={795} y={220} size={12} fill={INK} script={false}>
          {t("invert: T₁ = T₂/(1−η)", "invert: T₁ = T₂/(1−η)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={245} size={11} fill={INK} script={false}>
          T₁(50%)=600K, T₁(60%)=750K
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={635} y={270} w={320} h={32} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("rise = 150K — invert, don't scale!", "rise = 150K — invert karo, scale nahi!")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * Ch11 · Section 52 — "Full numbers, and the Carnot ceiling"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 52 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36/43/44/51.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 LEFT given (400K,300K,1200J) · 2 η=25% ·
 *  3 W=300J,Q2=900J · 4 RIGHT given (600K,300K) · 5 ceiling η=50% ·
 *  6 60% impossible · 7 45% possible but irreversible.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x90..290 / x600..830 y144..170
 *  b1 | given (13/12)      | T st  | x100/610 y188
 *  b2 | stamp1 (h30)       | Chip  | x205..365 y218..248
 *  b3 | stamp2 (h30)       | Chip  | x145..425 y258..288
 *  b5 | ceiling stamp(h30) | Chip  | x645..945 y216..246
 *  b6 | verdict1 (11)      | T mid | x795 y262
 *  b7 | verdict2 (11)      | T mid | x795 y285
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={22} fill={RED} script>
          {t("full numbers, and the Carnot ceiling", "poore numbers, aur Carnot ceiling")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={11} fill={MUTED} script>
          {t("one multi-part numerical, one pure essence of the theorem", "ek multi-part numerical, ek theorem ka pure essence")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 134 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — full numbers ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={90} y={144} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("FULL NUMBERS", "FULL NUMBERS")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={100} y={188} size={13} fill={INK} anchor="start" script={false}>
          T₁=400K, T₂=300K, Q₁=1200J
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={205} y={218} w={160} h={30} fill={INK} textFill={CREAM} size={14} script={false}>
          η = 25%
        </Chip>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={145} y={258} w={280} h={30} fill={INK} textFill={CREAM} size={14} script={false}>
          W=300J, Q₂=900J
        </Chip>
      </Fade>

      {/* ===== RIGHT — the Carnot ceiling ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={600} y={144} w={230} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("THE CARNOT CEILING", "THE CARNOT CEILING")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={610} y={188} size={12} fill={INK} anchor="start" script={false}>
          {t("between 600K and 300K", "600K aur 300K ke beech")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={645} y={216} w={300} h={30} fill={INK} textFill={CREAM} size={13} script={false}>
          η_Carnot = 1−300/600 = 50%
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={795} y={262} size={11} fill={RED} script={false}>
          {t("60%? IMPOSSIBLE ✗ (exceeds ceiling)", "60%? IMPOSSIBLE ✗ (ceiling se zyada)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={795} y={285} size={11} fill={AMBER_DARK} script={false}>
          {t("45%? possible, but MUST be irreversible", "45%? possible, par MUST irreversible ho")}
        </T>
      </Fade>
    </Scene>
  );
}

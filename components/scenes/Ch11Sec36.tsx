/**
 * Ch11 · Section 36 — "An engine, and the fridge-COP trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 36 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 heat-in/work-out/heat-out recap + divider ·
 *  2 LEFT given (Q1=1000,Q2=600) · 3 W=400J, η=40% · 4 RIGHT given
 *  (Q2=200,W=50) · 5 COP=4, Q1=250J · 6 the trap (÷Q1 is wrong) ·
 *  7 verdict: COP>1 normal, ≠ efficiency.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b2 | header chip(h26)   | Chip  | x100..280 y150..176
 *  b2 | given (14)         | T st  | x90 y196
 *  b3 | compute (12)       | T mid | x285 y228
 *  b3 | stamp chip (h32)   | Chip  | x185..385 y248..280
 *  b4 | header chip(h26)   | Chip  | x600..830 y150..176
 *  b4 | given (13)         | T st  | x620 y196
 *  b5 | compute (12)       | T mid | x795 y228
 *  b6 | trap (12,script)   | T mid | x795 y258
 *  b7 | verdict chip(h32)  | Chip  | x290..790 y300..332
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={GREEN} script>
          {t("an engine, and the fridge-COP trap", "ek engine, aur fridge-COP ka trap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={13} fill={MUTED} script>
          {t("one straightforward engine, one denominator trap", "ek seedha engine, ek denominator trap")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={128} size={12} fill={MUTED} script>
          {t("heat in top · work out side · heat out bottom", "heat upar se · work side se · heat neeche se")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 540 140 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — the engine ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Chip x={100} y={150} w={180} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("THE ENGINE", "THE ENGINE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={90} y={196} size={14} fill={INK} anchor="start" script={false}>
          Q₁=1000J, Q₂=600J
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={285} y={228} size={12} fill={INK} script={false}>
          W=Q₁−Q₂=400J
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Chip x={185} y={248} w={200} h={32} fill={INK} textFill={CREAM} size={16} script={false}>
          η = 40%
        </Chip>
      </Fade>

      {/* ===== RIGHT — the fridge trap ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={600} y={150} w={230} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("THE FRIDGE TRAP", "THE FRIDGE TRAP")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={620} y={196} size={13} fill={INK} anchor="start" script={false}>
          {t("Q₂=200J (extracted), W=50J", "Q₂=200J (extracted), W=50J")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={228} size={12} fill={INK} script={false}>
          COP=Q₂/W=4, Q₁=Q₂+W=250J
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={795} y={258} size={12} fill={RED} script>
          {t("✗ Q₂/Q₁=0.8 is WRONG — use W!", "✗ Q₂/Q₁=0.8 GALAT — W use karo!")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={290} y={300} w={500} h={32} fill={INK} textFill={CREAM} size={13} script={false}>
          {t("COP=4 > 1 is normal — never confuse with η (<1)", "COP=4 > 1 normal hai — η (<1) se confuse mat karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}

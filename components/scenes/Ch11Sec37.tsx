/**
 * Ch11 · Section 37 — "Reversing efficiency, and Carnot leverage"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 37 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook+divider · 1 LEFT given (η=25%,W=500J) · 2 Q1=2000J,
 *  Q2=1500J · 3 verdict: wastes 3/4 · 4 RIGHT intro (ideal Carnot device)
 *  · 5 RIGHT given (T2=250K,T1=300K) · 6 COP_fridge=5,COP_pump=6 ·
 *  7 W=200J + verdict (1200J delivered).
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x100..360 / x570..850 y150..176
 *  b1 | given (13)         | T st  | x90/590 y196
 *  b2 | compute (12)       | T mid | x285 y228
 *  b3 | verdict (11,script)| T mid | x285 y255
 *  b5 | given2 (13)        | T st  | x590 y220
 *  b6 | compute (12)       | T mid | x795 y248
 *  b7 | compute2 (12)      | T mid | x795 y275
 *  b7 | verdict (11,script)| T mid | x795 y298
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("reversing efficiency, and Carnot leverage", "efficiency reverse, aur Carnot leverage")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={12} fill={MUTED} script>
          {t("one inverse-efficiency numerical, one Carnot leverage example", "ek inverse-efficiency numerical, ek Carnot leverage example")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 138 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — reverse the efficiency ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={100} y={150} w={260} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("REVERSE THE EFFICIENCY", "REVERSE THE EFFICIENCY")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={196} size={13} fill={INK} anchor="start" script={false}>
          η=25%, W=500J
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={228} size={12} fill={INK} script={false}>
          Q₁=500/0.25=2000J, Q₂=Q₁−W=1500J
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={285} y={255} size={11} fill={MUTED} script>
          {t("wastes 3/4 of the heat it buys", "3/4 heat waste ho jaati hai")}
        </T>
      </Fade>

      {/* ===== RIGHT — Carnot leverage ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={570} y={150} w={280} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("CARNOT LEVERAGE", "CARNOT LEVERAGE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={590} y={196} size={12} fill={MUTED} script anchor="start">
          {t("ideal device, cold ↔ warm surroundings", "ideal device, cold ↔ warm surroundings")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={590} y={220} size={13} fill={INK} anchor="start" script={false}>
          {t("T₂=250K (cold), T₁=300K (warm)", "T₂=250K (cold), T₁=300K (warm)")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={795} y={248} size={12} fill={INK} script={false}>
          COP_fridge=5, COP_pump=6 (=5+1)
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={795} y={275} size={12} fill={INK} script={false}>
          W=Q₂/COP=1000/5=200J
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={795} y={298} size={11} fill={GREEN} script>
          {t("200J moves 1000J — as pump delivers 1200J!", "200J se 1000J move — pump 1200J deta hai!")}
        </T>
      </Fade>
    </Scene>
  );
}

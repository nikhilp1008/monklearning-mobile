/**
 * Ch11 · Section 58 — "Irreversible cooling, and a reversible cycle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 58 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36/43/44/51/52/57.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 LEFT given (2kg block, 400K→300K) · 2 ΔS_block≈−230
 *  · 3 ΔS_lake≈+267 · 4 universe ΔS≈+37 (boxed) · 5 RIGHT given (Carnot
 *  Q1,Q2) · 6 ΔS1,ΔS2=±1.2 · 7 net=0 (boxed).
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x70..300 / x610..830 y142..168
 *  b1/5 | given (11)       | T st  | x80/620 y188
 *  b2/3 | compute (11)     | T mid | x285 y212/234
 *  b4 | verdict chip(h30)  | Chip  | x145..425 y258..288
 *  b6 | compute (12)       | T mid | x795 y216
 *  b7 | verdict chip(h30)  | Chip  | x655..935 y245..275
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={22} fill={RED} script>
          {t("irreversible cooling, and a reversible cycle", "irreversible cooling, aur reversible cycle")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={11} fill={MUTED} script>
          {t("one irreversible creates net S, one reversible creates none", "ek irreversible net S banata, ek reversible kuch nahi")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 132 L 540 380" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — irreversible cooling ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={70} y={142} w={230} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("IRREVERSIBLE COOLING", "IRREVERSIBLE COOLING")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={188} size={11} fill={INK} anchor="start" script={false}>
          {t("2kg block: 400K→300K in lake@300K", "2kg block: 400K→300K, lake@300K")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={212} size={11} fill={INK} script={false}>
          ΔS_block=mc·ln(300/400)≈−230 J/K
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={285} y={234} size={11} fill={INK} script={false}>
          ΔS_lake=+80000/300≈+267 J/K
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={145} y={258} w={280} h={30} fill={INK} textFill={CREAM} size={13} script={false}>
          {t("ΔS_universe=+37 J/K", "ΔS_universe=+37 J/K")}
        </Chip>
      </Fade>

      {/* ===== RIGHT — the reversible check ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Chip x={610} y={142} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("REVERSIBLE CHECK", "REVERSIBLE CHECK")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={620} y={188} size={11} fill={INK} anchor="start" script={false}>
          {t("Carnot: Q₁=600J@500K, Q₂=360J@300K", "Carnot: Q₁=600J@500K, Q₂=360J@300K")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={795} y={216} size={12} fill={INK} script={false}>
          ΔS₁=+1.2, ΔS₂=−1.2
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={655} y={245} w={280} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("net=0 ✓ matches Q₂/Q₁=T₂/T₁", "net=0 ✓ Q₂/Q₁=T₂/T₁ se match")}
        </Chip>
      </Fade>
    </Scene>
  );
}

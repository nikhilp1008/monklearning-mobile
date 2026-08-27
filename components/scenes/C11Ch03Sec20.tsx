/**
 * C11 Chemistry Ch03 · Section 20 — "The two celebrated ionisation-enthalpy reversals"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.37, 28.07, 45.65, 62.21, 80.3, 96.68, 111.27]):
 *  0 title + underline
 *  1 Reversal 1 setup: Be (2s²) vs B (2p¹) orbital boxes, left panel
 *  2 red-margin: Be leaves filled stable 2s² ⇒ harder to remove than B
 *  3 Reversal 2 setup: N (2p³, half-filled) vs O (2p⁴, one pair) boxes, right
 *  4 red-margin: O's 2p⁴ forces pairing ⇒ more repulsion ⇒ leaves more easily
 *  5 bonus: big IE jump ⇒ next e⁻ from a noble-gas-like core
 *  6 electrons before the jump = valence electrons = the group
 *  7 closing green stamp: these dips recur every period (Mg/Al, P/S)
 *
 * Layout plan:
 *  b1 | Be 2s box + B 2p box        | Draw   | x115..390 y125..190
 *  b2 | red margin bar + line       | Draw   | x70  y200..232 (bl 220)
 *  b3 | N 2p³ boxes + O 2p⁴ boxes   | Draw   | x610..974 y125..190
 *  b4 | red margin bar + line       | Draw   | x70  y240..272 (bl 260)
 *  b5 | bonus line (14,ink)         | T mid  | x?..?     y286..301 (bl 300)
 *  b6 | group line (14,w700,amber)  | T mid  | x?..?     y312..327 (bl 326)
 *  b7 | closing stamp (green)       | Chip   | x170..910 y350..390
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { OrbitalBox } from "./chem-kit";

export default function C11Ch03Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the two celebrated IE reversals", "do celebrated IE reversals")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Reversal 1: Be(2s²) vs B(2p¹) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={112} size={13} weight={800} fill={INK}>Be: 2s²</T>
        <T x={370} y={112} size={13} weight={800} fill={INK}>B: 2p¹</T>
      </Fade>
      <OrbitalBox on={beat >= 1} delay={dl(1, 0.6)} x={115} y={125} w={70} h={32} up={1} down={1} label={t("filled, stable", "filled, stable")} />
      <OrbitalBox on={beat >= 1} delay={dl(1, 1)} x={350} y={125} w={40} h={32} up={1} down={0} label={t("higher-energy 2p", "higher-energy 2p")} />

      {/* beat 2 — red-margin: why Be wins */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 200 L 70 232" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={220} size={15} weight={700} fill={INK} anchor="start">
          {t("Be's e⁻ leaves a filled, stable 2s² ⇒ harder to remove than B's", "Be ka e⁻ filled stable 2s² chhodta ⇒ B se hatana mushkil")}
        </T>
      </Fade>

      {/* beat 3 — Reversal 2: N(2p³, half-filled) vs O(2p⁴, forced pair) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={650} y={112} size={13} weight={800} fill={INK}>N: 2p³</T>
        <T x={900} y={112} size={13} weight={800} fill={INK}>O: 2p⁴</T>
      </Fade>
      {[610, 650, 690].map((x, i) => (
        <OrbitalBox key={x} on={beat >= 3} delay={dl(3, 0.5 + i * 0.25)} x={x} y={125} w={34} h={32} up={1} down={0} label={i === 1 ? t("half-filled, symmetric", "half-filled, symmetric") : undefined} />
      ))}
      {[860, 900, 940].map((x, i) => (
        <OrbitalBox key={x} on={beat >= 3} delay={dl(3, 1.3 + i * 0.25)} x={x} y={125} w={34} h={32} up={1} down={i === 0 ? 1 : 0} label={i === 1 ? t("forced pairing", "forced pairing") : undefined} />
      ))}

      {/* beat 4 — red-margin: why O dips below N */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 240 L 70 272" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={94} y={260} size={15} weight={700} fill={INK} anchor="start">
          {t("O's 2p⁴ forces pairing ⇒ more repulsion ⇒ leaves more easily", "O ka 2p⁴ pairing karwata ⇒ zyada repulsion ⇒ aasani se nikalta")}
        </T>
      </Fade>

      {/* beat 5 — bonus: the big-jump signal */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={300} size={14} fill={INK}>
          {t("big jump between IEs ⇒ next e⁻ from a noble-gas-like core", "IEs ke beech bada jump ⇒ next e⁻ noble-gas-like core se")}
        </T>
      </Fade>

      {/* beat 6 — electrons before the jump = group */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={326} size={14} weight={700} fill={AMBER_DARK}>
          {t("electrons before that jump = valence electrons = the GROUP", "us jump se pehle electrons = valence electrons = GROUP")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={170} y={350} w={740} h={40} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("these dips recur every period: Mg vs Al, P vs S too", "ye dips har period mein: Mg vs Al, P vs S bhi")}
        </Chip>
      </Fade>
    </Scene>
  );
}

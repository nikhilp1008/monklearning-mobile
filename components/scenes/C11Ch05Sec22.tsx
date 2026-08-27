/**
 * C11 Chemistry Ch05 · Section 22 — "Entropy, Gibbs, and the equilibrium
 * toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Section type: formulas (accumulating).
 *
 * Beats (board_reveal_at, en [0,6.4,18.94,34.05,41.13,50.69,64.17,80.38]):
 *  0 heading + underline (anchor)
 *  1 formula: ΔS = qrev/T · ΔStrans = ΔHtrans/Ttrans
 *  2 formula: ΔStotal = ΔSsys+ΔSsurr · ΔSsurr = -ΔHsys/T
 *  3 formula: G = H - TS
 *  4 formula: ΔG = ΔH - TΔS
 *  5 red note: criterion (ΔG<0/=0/>0)
 *  6 formula: ΔG° = -RT ln K = -2.303 RT log K
 *  7 formula: Tcrossover = ΔH/ΔS
 *
 * Layout plan (centered x540, accumulating top to bottom):
 *  b0 | heading (17, w800) + underline| y95..114 (bl108); y118
 *  b1 | chip1 (15)                    | Chip | x300..780 y132..166
 *  b2 | chip2 (15)                    | Chip | x260..820 y180..220
 *  b3 | chip3 (18)                    | Chip | x460..620 y234..268
 *  b4 | chip4 (18)                    | Chip | x430..650 y282..316
 *  b5 | red note chip (14)            | Chip | x260..880 y330..368
 *  b6 | chip5 (17)                    | Chip | x300..740 y382..422
 *  b7 | chip6 (17)                    | Chip | x410..670 y436..470
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
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("spontaneity & equilibrium toolkit", "spontaneity & equilibrium toolkit")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={108} size={17} weight={800} fill={INK}>
          {t("Spontaneity toolkit", "Spontaneity toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 118 C 460 115, 620 115, 680 118" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — entropy formulas */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <Chip x={300} y={132} w={480} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ΔS = qrev/T  ·  ΔStrans = ΔHtrans/Ttrans
        </Chip>
      </Fade>

      {/* beat 2 — total entropy */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={260} y={180} w={560} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ΔStotal = ΔSsys + ΔSsurr  ·  ΔSsurr = −ΔHsys/T
        </Chip>
      </Fade>

      {/* beat 3 — G = H - TS */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={460} y={234} w={160} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          G = H − TS
        </Chip>
      </Fade>

      {/* beat 4 — ΔG = ΔH - TΔS */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Chip x={430} y={282} w={220} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          ΔG = ΔH − TΔS
        </Chip>
      </Fade>

      {/* beat 5 — criterion */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <Chip x={260} y={330} w={620} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "criterion: ΔG<0 spontaneous · =0 equilibrium · >0 non-spontaneous",
            "criterion: ΔG<0 spontaneous · =0 equilibrium · >0 non-spontaneous"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — ΔG° = -RT ln K */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={300} y={382} w={440} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔG° = −RT ln K = −2.303 RT log K
        </Chip>
      </Fade>

      {/* beat 7 — crossover temperature */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={410} y={436} w={260} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          Tcrossover = ΔH/ΔS
        </Chip>
      </Fade>
    </Scene>
  );
}

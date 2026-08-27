/**
 * C11 Ch09 · Section 11 — "Preparing alkanes II: the Wurtz reaction"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.76, 16.33, 25.34, 34.35, 45.61, 54.05]):
 *  0 heading: welds two alkyl groups into one longer chain ·
 *  1 two alkyl halides coupled by Na in dry ether · 2 equation ·
 *  3 even-doubled carbon skeleton · 4 RED: different halides -> mixture ·
 *  5 clean only for symmetrical alkanes · 6 mnemonic chip: "Wurtz welds"
 *
 * Layout plan:
 *  b0 | title              | T mid script | x540 y68
 *  b1 | subtitle            | T mid        | x540 y100
 *  b2 | coupling text       | T mid        | x540 y145
 *  b3 | reactant label      | T st         | x175 y210
 *  b3 | reaction arrow      | Draw+T       | x310..480 y205 (over: dry ether)
 *  b3 | product label       | T st         | x500 y210
 *  b4 | skeleton note        | T mid        | x540 y260
 *  b5 | red bar + warning    | Draw+T       | bar x60 y300..344, text bl326
 *  b6 | symmetrical note     | T mid        | x540 y400
 *  b7 | mnemonic chip        | Chip         | x390..690 y440..480
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Draw,
  Chip,
  INK,
  RED,
  GREEN,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("preparing alkanes II: the Wurtz reaction", "alkanes banana II: Wurtz reaction")}
        </T>
      </Fade>

      {/* beat 0 — welds two groups */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={104} size={16} fill={INK} weight={700}>
          {t("welds two alkyl groups into one longer chain", "do alkyl groups ko jodkar ek lambi chain banata hai")}
        </T>
      </Fade>

      {/* beat 1 — coupled by sodium in dry ether */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={150} size={15} fill={INK}>
          {t(
            "two alkyl halide molecules, coupled by sodium metal in dry ether",
            "do alkyl halide molecules, dry ether mein sodium metal se couple"
          )}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={175} y={215} size={17} fill={INK} weight={700} anchor="start">
          2 CH3Br + 2Na
        </T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1.1)} x1={330} x2={480} y={210} over={t("dry ether", "dry ether")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={500} y={215} size={17} fill={INK} weight={700} anchor="start">
          CH3–CH3 + 2 NaBr
        </T>
      </Fade>

      {/* beat 3 — even-doubled carbon skeleton */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={265} size={15} fill={INK}>
          {t(
            "joins two equal alkyl groups ⇒ always an even-numbered carbon skeleton",
            "do equal alkyl groups jode ⇒ hamesha even-numbered carbon skeleton"
          )}
        </T>
      </Fade>

      {/* beat 4 — RED: different halides give a mixture */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 60 302 L 60 348" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={76} y={318} size={16} fill={RED} script anchor="start">
          {t("two DIFFERENT halides", "do ALAG halides")}
        </T>
        <T x={76} y={342} size={16} fill={RED} script anchor="start">
          {t("→ messy mixture of three products", "→ teen products ka messy mixture")}
        </T>
      </Fade>

      {/* beat 5 — clean only for symmetrical alkanes */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={412} size={15} fill={INK}>
          {t(
            "so Wurtz stays clean only for symmetrical, even-carbon targets",
            "isliye Wurtz sirf symmetrical, even-carbon targets ke liye clean hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — mnemonic chip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={365} y={452} w={350} h={46} fill="#EAF7EF" stroke={GREEN} textFill={AMBER_DARK} size={18}>
          {t("“Wurtz Welds” — carbon count doubles", "“Wurtz Welds” — carbon count double")}
        </Chip>
      </Fade>
    </Scene>
  );
}

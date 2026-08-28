/**
 * Ch08 · Section 11 — "NEET speed trap: two wires compared"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..3 are compressed to ~1s — short delays there.
 *
 * Diagram (two wires) on the left, proportionality chain on the right.
 *
 * Beats (en [0, 7.68, 24.66, 36.86, 51.71, 68.1, 86.36]):
 *  0 title + small "compare" double-arrow icon
 *  1 diagram: wire A (thin, L, r) and wire B (thick, 2L, 2r), same load W
 *  2 text: same material → Y cancels
 *  3 formula: ΔL = FL/πr²Y ∝ L/r²
 *  4 boxed hero: ΔL_A / ΔL_B = 2
 *  5 text: B longer ×2 but fatter → area ×4 → net ÷2
 *  6 red margin note: equally elastic, geometry changes stretch only
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | compare icon      | Draw | x510..570 y94..106
 *  b1 | rail              | Draw | x180..520 y140
 *  b1 | wire A + chip     | Draw | x264..296 y140..282
 *  b1 | "A" (15)          | T mid| x273..287 bl305 (y286..312)
 *  b1 | caption A (11)    | T mid| x244..316 bl325 (y309..328)
 *  b1 | wire B + chip     | Draw | x436..484 y140..406
 *  b1 | "B" (15)          | T mid| x454..466 bl430 (y411..437)
 *  b1 | caption B (11)    | T mid| x400..521 bl450 (y434..453)
 *  b2 | text (15)         | T st | x600..847 bl170 (y153..178)
 *  b3 | formula (18)      | T st | x600..780 bl215 (y201..221)
 *  b4 | hero box          | Draw | x600..1020 y250..340
 *  b4 | small line (14)   | T mid| x757..863 bl280 (y269..284)
 *  b4 | "ΔLA/ΔLB=2" (26)  | T mid| x706..914 bl320 (y300..325)
 *  b5 | text (13)         | T st | x600..915 bl375 (y358..372)
 *  b6 | margin bar        | Draw | x60 y528..556
 *  b6 | note (15)         | T st | x76..604 bl548 (y528..556)
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("NEET speed trap: which wire stretches more?", "NEET speed trap: kaunsa wire zyada khinchta hai?")}
        </T>
      </Fade>

      {/* beat 0 — compare icon */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.2)}
        d="M510 100 L570 100 M520 94 L510 100 L520 106 M560 94 L570 100 L560 106"
        stroke={MUTED}
        sw={1.8}
        dur={0.3}
      />

      {/* beat 1 — two wires, same material, same load */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M180 140 h340" stroke={INK} sw={3} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M280 140 L280 260" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Chip x={264} y={260} w={32} h={22} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          W
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={280} y={305} size={15} fill={AMBER_DARK} weight={800}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={280} y={325} size={11} fill={MUTED}>
          {t("length L, radius r", "length L, radius r")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M460 140 L460 380" stroke={GREEN} sw={5} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Chip x={436} y={380} w={48} h={26} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          W
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={460} y={430} size={15} fill={GREEN} weight={800}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={460} y={450} size={11} fill={MUTED}>
          {t("length 2L, radius 2r", "length 2L, radius 2r")}
        </T>
      </Fade>

      {/* beat 2 — same material: Y cancels */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={600} y={170} size={15} fill={GREEN} script anchor="start">
          {t("same material → Y cancels out", "same material → Y cancel ho jata")}
        </T>
      </Fade>

      {/* beat 3 — the proportionality */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={600} y={215} size={18} fill={INK} weight={700} anchor="start">
          ΔL = FL / πr²Y ∝ L / r²
        </T>
      </Fade>

      {/* beat 4 — the hero ratio */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M612 250 h396 q12 0 12 12 v66 q0 12 -12 12 h-396 q-12 0 -12 -12 v-66 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={810} y={280} size={14} fill={AMBER_DARK} weight={600}>
          L/r² ÷ 2L/(2r)²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={810} y={320} size={26} fill={INK} weight={800}>
          ΔL_A / ΔL_B = 2
        </T>
      </Fade>

      {/* beat 5 — the physical picture */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={600} y={375} size={13} fill={AMBER_DARK} script anchor="start">
          {t("B: longer ×2, but fatter → area ×4 → net ÷2", "B: lamba ×2, par mota → area ×4 → net ÷2")}
        </T>
      </Fade>

      {/* beat 6 — the sting: equally elastic */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("same material ⇒ EQUALLY elastic — geometry changes stretch only", "same material ⇒ EQUALLY elastic — geometry sirf stretch badalti")}
        </T>
      </Fade>
    </Scene>
  );
}

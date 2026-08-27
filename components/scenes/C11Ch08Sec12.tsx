/**
 * C11 Ch08 · Section 12 — "Three hybridizations, three geometries"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.02, 15.19, 31.66, 47.45, 59.48, 70.83, 85.33]):
 *  0 title (always-on, seq1) · 1 the three shapes drawn (diagram) · 2 sp3 stats ·
 *  3 sp2 stats · 4 sp stats · 5 red note (%s → electrons closer to nucleus) ·
 *  6 bond-length trend · 7 acidity/EN trend
 *
 * Three columns, centers x=200/540/880. Layout plan:
 *  b1 | sp3 tetrahedral icon (wedge/hash)| Draw  | c(200,140)
 *  b1 | sp2 trigonal icon                | Draw  | c(540,140)
 *  b1 | sp linear icon                   | Draw  | c(880,140)
 *  b2-4 | 5-line stat stack per column   | T mid | y195/217/239/261/283
 *  b5 | margin bar + red note            | Draw+T| x60 y320..350 · x76 y340
 *  b6 | bond-length trend (14, amber)    | T mid | x540 y390
 *  b7 | acidity/EN trend (14, amber)     | T mid | x540 y420
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { wedgeD, hashD } from "./chem-kit";

export default function C11Ch08Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Stats = ({ cx, on, delay, lines }: { cx: number; on: boolean; delay: number; lines: string[] }) => (
    <Fade on={on} delay={delay}>
      {lines.map((l, i) => (
        <T key={i} x={cx} y={195 + i * 22} size={13} fill={i === 0 ? INK : i === 4 ? AMBER_DARK : INK} weight={i === 0 ? 700 : 400}>
          {l}
        </T>
      ))}
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={25} fill={RED} script>
          {t("Three hybridizations, three geometries", "Teen hybridizations, teen geometries")}
        </T>
      </Fade>

      {/* beat 1 — the three shapes, drawn */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 200 140 L 175 110" stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 200 140 L 225 110" stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={wedgeD(200, 140, 175, 170)} stroke={INK} sw={1} fill={INK} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1)} d={hashD(200, 140, 225, 170)} stroke={INK} sw={1.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={200} y={145} size={15} fill={INK} weight={800}>
          C
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 540 140 L 540 105" stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 540 140 L 505 165" stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 540 140 L 575 165" stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={540} y={145} size={15} fill={INK} weight={800}>
          C
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M 880 140 L 845 140" stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M 880 140 L 915 140" stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={880} y={145} size={15} fill={INK} weight={800}>
          C
        </T>
      </Fade>

      {/* beat 2 — sp3 stats */}
      <Stats
        cx={200}
        on={beat >= 2}
        delay={dl(2, 0.2)}
        lines={[
          "sp³ — 4σ, 0π",
          t("tetrahedral", "tetrahedral"),
          "109.5°",
          "25% s",
          t("alkane C", "alkane C"),
        ]}
      />

      {/* beat 3 — sp2 stats */}
      <Stats
        cx={540}
        on={beat >= 3}
        delay={dl(3, 0.2)}
        lines={[
          "sp² — 3σ, 1π",
          t("trigonal planar", "trigonal planar"),
          "120°",
          "33.3% s",
          t("alkene / carbonyl C", "alkene / carbonyl C"),
        ]}
      />

      {/* beat 4 — sp stats */}
      <Stats
        cx={880}
        on={beat >= 4}
        delay={dl(4, 0.2)}
        lines={[
          "sp — 2σ, 2π",
          t("linear", "linear"),
          "180°",
          "50% s",
          t("alkyne / nitrile C", "alkyne / nitrile C"),
        ]}
      />

      {/* beat 5 — the idea behind every trend */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 320 L 60 350" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={340} size={15} fill={RED} script anchor="start">
          {t(
            "higher %s = electrons held closer to the nucleus — drives every trend below",
            "zyada %s = electrons nucleus ke paas — neeche har trend isi se aata"
          )}
        </T>
      </Fade>

      {/* beat 6 — bond length trend */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={390} size={14} fill={AMBER_DARK} weight={700}>
          {t("bond length: sp < sp² < sp³ (more s = shorter, stronger)", "bond length: sp < sp² < sp³ (zyada s = chota, strong)")}
        </T>
      </Fade>

      {/* beat 7 — acidity / electronegativity trend */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={420} size={14} fill={AMBER_DARK} weight={700}>
          {t("acidity & electronegativity: sp > sp² > sp³", "acidity & electronegativity: sp > sp² > sp³")}
        </T>
      </Fade>
    </Scene>
  );
}

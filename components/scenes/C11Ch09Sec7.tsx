/**
 * C11 Ch09 · Section 7 — "The homologous series"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.77, 18.98, 26.21, 33.17, 41.9, 51.1]):
 *  0 staircase outline drawn · 1 "homologous series / homologues" definition
 *  · 2 formulas land on each step (CH4…C5H12) · 3 "differ only in chain
 *  length" · 4 "understand one, understand all" · 5 boiling point rises
 *  (small trend arrow) · 6 RED payoff note
 *
 * Layout plan — 5-step ascending staircase, treads at:
 *  (120,460)-(220,460) (220,420)-(320,420) (320,380)-(420,380)
 *  (420,340)-(520,340) (520,300)-(620,300)
 *  b0 | staircase path         | Draw  | x120..620 y300..460
 *  b1 | definition line        | T mid | y100..118 (bl 108)
 *  b2 | 5 formula labels       | T mid | above each tread, bl tread-10
 *  b3 | "differ only…"         | T mid | y495..510 (bl 505, script)
 *  b4 | "understand one…all"   | T mid | y525..541 (bl 535)
 *  b5 | trend arrow + label    | Draw+T| x650..715 y300→248 · label x760
 *  b6 | margin bar + red note  | Draw+T| bar x60 y555..591 · text bl577
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const STEPS: [number, number, number, string][] = [
  [120, 220, 460, "CH₄"],
  [220, 320, 420, "C₂H₆"],
  [320, 420, 380, "C₃H₈"],
  [420, 520, 340, "C₄H₁₀"],
  [520, 620, 300, "C₅H₁₂"],
];

export default function C11Ch09Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const stairD = "M 120 460 H 220 V 420 H 320 V 380 H 420 V 340 H 520 V 300 H 620";

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("climbing the alkane staircase", "alkane ki staircase chadhna")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={106} size={16} fill={INK}>
          {t("a stepwise family = a homologous series; members = homologues", "stepwise family = homologous series; members = homologues")}
        </T>
      </Fade>

      {/* beat 0 — the staircase */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d={stairD} stroke={INK} sw={2.6} dur={1.4} />

      {/* beat 2 — one formula per step */}
      {STEPS.map(([x1, x2, y, label], i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 0.3 + i * 0.35)}>
          <T x={(x1 + x2) / 2} y={y - 10} size={16} fill={INK} weight={700}>
            {label}
          </T>
        </Fade>
      ))}

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={370} y={505} size={14} fill={MUTED} script>
          {t("members differ only in chain length", "members sirf chain length mein alag hain")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={370} y={535} size={16} fill={INK} weight={700}>
          {t("understand one alkane deeply = understand them all", "ek alkane gehraai se samjho = sabko samajh lo")}
        </T>
      </Fade>

      {/* beat 5 — boiling point rises smoothly */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(660, 300, 715, 248)} stroke={GREEN} sw={2.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={800} y={270} size={14} fill={GREEN} script anchor="start">
          {t("boiling point rises smoothly", "boiling point smoothly badhta hai")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 555 L 60 591" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={577} size={16} fill={RED} script anchor="start">
          {t(
            "payoff of a homologous series: shared chemistry, graded properties",
            "homologous series ka payoff: shared chemistry, graded properties"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

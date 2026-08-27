/**
 * Ch05 · Section 30 — "Deriving conservation, and the modified theorem for friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.1, 21.7, 33.6, 52.8, 77.7, 102.5, 120.5, 145.3] · dur 170.2;
 *        hi [0, 14.3, 21.9, 35.6, 55.5, 80.3, 105.1, 122.3, 143.2] · dur 168.0):
 *  0 title + subtitle
 *  1 D1 header: only conservative forces
 *  2 line 1: W_net = ΔK
 *  3 line 2: W_net = W_cons = −ΔU
 *  4 line 3 → E = K + U constant chip
 *  5 payoff: messy middle drops out
 *  6 D2 header + split W_net
 *  7 substitute → W_nc = ΔE chip
 *  8 plain-words verdict band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  D1: hdr st x80 bl120 · f1 st x90 bl155 · note cx250 bl180
 *   f2 bl215 · note bl240 · f3 bl275 · chip x90..400 y295..335
 *   b5 green cx290 bl370 / bl396 · muted bl422
 *  D2: hdr st x550 bl120 · f st x560 bl155 · note cx770 bl180
 *   f bl215 · chip x560..900 y235..275 · red cx770 bl300
 *  b8 | bar x66 y460..545 · lines st x84 bl480 / bl506
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Deriving Conservation — and the Friction Version", "Conservation ki Derivation — aur Friction Wala Roop")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "two short derivations — the entire energy-accounting toolkit",
            "do chhoti derivations — poora energy-accounting toolkit"
          )}
        </T>
      </Fade>

      {/* beat 1 — D1 header */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={120} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "derivation 1 — only conservative forces at work",
            "derivation 1 — sirf conservative forces kaam par"
          )}
        </T>
      </Fade>

      {/* beat 2 — line 1 */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={90} y={155} size={15} fill={INK} anchor="start" weight={700}>
          W_net = ΔK
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={250} y={180} size={12.5} fill={MUTED} script>
          {t("(the work-energy theorem)", "(work-energy theorem)")}
        </T>
      </Fade>

      {/* beat 3 — line 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={90} y={215} size={15} fill={INK} anchor="start" weight={700}>
          W_net = W_cons = −ΔU
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={250} y={240} size={12.5} fill={MUTED} script>
          {t(
            "the definition of U, read as an equation",
            "U ki definition, equation ki tarah padhi hui"
          )}
        </T>
      </Fade>

      {/* beat 4 — line 3 */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={90} y={275} size={15} fill={INK} anchor="start" weight={700}>
          −ΔU = ΔK → Δ(K + U) = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <Chip x={90} y={295} w={310} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          E = K + U = constant
        </Chip>
      </Fade>

      {/* beat 5 — the payoff */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={290} y={370} size={13} fill={GREEN} script>
          {t(
            "relate two instants — the messy middle drops out",
            "do instants ko jodo — uljha hua beech gir jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={290} y={396} size={13} fill={GREEN} script>
          {t(
            "write E_i = E_f and read off the answer",
            "E_i = E_f likho aur jawab padh lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 17)}>
        <T x={290} y={422} size={12.5} fill={MUTED} script>
          {t(
            "no force-tracking, no step-by-step Newton",
            "na force-tracking, na step-by-step Newton"
          )}
        </T>
      </Fade>

      {/* beat 6 — D2 header + split */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={550} y={120} size={13} fill={RED} script anchor="start">
          {t("derivation 2 — friction in the mix", "derivation 2 — friction mishran mein")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={560} y={155} size={15} fill={INK} anchor="start" weight={700}>
          W_net = W_cons + W_nc = ΔK
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={770} y={180} size={12.5} fill={MUTED} script>
          {t("split the work into its two kinds", "work ko uske do prakaron mein baanto")}
        </T>
      </Fade>

      {/* beat 7 — substitute */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={215} size={15} fill={INK} anchor="start" weight={700}>
          −ΔU + W_nc = ΔK
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <Chip x={560} y={235} w={340} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          W_nc = ΔK + ΔU = ΔE
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={770} y={300} size={13} fill={RED} script>
          {t(
            "friction's work < 0 → E falls by exactly the heat made",
            "friction ka work < 0 → E theek utni girti jitni heat bani"
          )}
        </T>
      </Fade>

      {/* beat 8 — plain words */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "in plain words: E_start = E_end + heat lost to friction",
            "seedhe shabdon mein: E_shuru = E_ant + friction ko gayi heat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={84} y={506} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the books always balance — just include the heat line",
            "kitaben hamesha barabar — bas heat waali line shamil karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

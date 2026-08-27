/**
 * Ch05 · Section 41 — "Pitfalls, and the energy-equivalence anchors" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.0, 34.8, 58.5, 82.1, 106.9, 131.8, 150.4] · dur 175.3;
 *        hi [0, 9.5, 34.3, 59.1, 84.0, 108.8, 133.6, 150.1] · dur 174.9):
 *  0 title · 1 P1 lost→converted · 2 P2 square the c · 3 P3 unit trap
 *  4 P4 measurable = nuclear · 5 two anchor panels · 6 pinned pro-tip
 *  7 three memory aids band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  P1: lbl st x80 bl114 · lines st x90 bl142/168 · P2: bl210 · bl238/264
 *  P3: st x570 bl114 · bl142/168 · P4: bl210 · bl238/264
 *  b5 | boxes y300..400: x80..510 / x570..1040 · titles bl330 · lines bl358/382
 *  b6 | cx540 bl435
 *  b7 | bar x66 y460..570 · lines st x84 bl480/506/532
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Energy-Equivalence Anchors", "Pitfalls & Energy-Equivalence Anchors")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "four vanished marks — then two anchors that make one-liners",
            "chaar gaye marks — phir do anchors jo one-liner bana dein"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — 'lost' or 'used up'", "pitfall 1 — 'lost' ya 'kharch ho gayi'")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={142} size={12.5} fill={INK} script anchor="start">
          {t(
            "energy is never destroyed — it is transformed",
            "energy kabhi nasht nahi hoti — badalti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={90} y={168} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "write 'converted to heat/sound' — full marks vs half",
            "'converted to heat/sound' likho — poore marks vs aadhe"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — forgetting to square c", "pitfall 2 — c ko square karna bhool jaana")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={238} size={12.5} fill={INK} script anchor="start">
          {t(
            "c² = 9×10¹⁶ — not c = 3×10⁸",
            "c² = 9×10¹⁶ — c = 3×10⁸ nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={90} y={264} size={12.5} fill={RED} script anchor="start">
          {t(
            "drop the square → off by 3×10⁸ — the costliest one-symbol slip",
            "square giraya → 3×10⁸ ka fark — sabse mehngi one-symbol slip"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={570} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — the mass-unit trap, again", "pitfall 3 — mass-unit trap, phir se")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={580} y={142} size={12.5} fill={INK} script anchor="start">
          {t(
            "convert g and u to kg BEFORE using SI",
            "g aur u ko kg mein badlo, SI se PEHLE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={580} y={168} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "or better, nuclear: use 931.5 MeV/u directly",
            "ya behtar, nuclear: seedhe 931.5 MeV/u lagao"
          )}
        </T>
      </Fade>

      {/* beat 4 — P4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={570} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — expecting visible mass loss", "pitfall 4 — dikhne wale mass loss ki umeed")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={238} size={12.5} fill={INK} script anchor="start">
          {t(
            "burning fuel changes mass — but undetectably",
            "fuel jalane se mass badalta hai — par pakad se bahar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={580} y={264} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "a detectable mass change ⇒ it's a nuclear question",
            "detectable mass change ⇒ wo nuclear sawaal hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two anchors */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 92 300 h 406 q 12 0 12 12 v 76 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -76 q 0 -12 12 -12" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={295} y={330} size={13.5} fill={AMBER_DARK} script>
          {t("JOULES route", "JOULES waala raasta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={295} y={358} size={13} fill={INK} weight={700}>
          1 kg ↔ 9×10¹⁶ J
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={295} y={382} size={12} fill={MUTED} script>
          {t("convert to kg, scale — and square the c", "kg mein badlo, scale karo — c square karo")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 10)} d="M 582 300 h 446 q 12 0 12 12 v 76 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -76 q 0 -12 12 -12" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 10.8)}>
        <T x={805} y={330} size={13.5} fill={AMBER_DARK} script>
          {t("MeV route (nuclear)", "MeV waala raasta (nuclear)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={805} y={358} size={13} fill={INK} weight={700}>
          1 u ↔ 931.5 MeV
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={805} y={382} size={12} fill={MUTED} script>
          {t("multiply the defect — skip SI entirely", "defect se guna karo — SI bilkul chhodo")}
        </T>
      </Fade>

      {/* beat 6 — the pinned pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={435} size={13} fill={GREEN} script>
          {t(
            "MeV wanted → Δm(u) × 931.5 · joules wanted → 9×10¹⁶ scaled by the kg",
            "MeV chahiye → Δm(u) × 931.5 · joules chahiye → 9×10¹⁶ kg se scale"
          )}
        </T>
      </Fade>

      {/* beat 7 — the memory aids */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 460 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "aid 1: energy changes costume — never quantity",
            "aid 1: energy costume badalti hai — quantity kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t("aid 2: never forget to square the c", "aid 2: c ko square karna kabhi mat bhoolo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={84} y={532} size={13} fill={GREEN} script anchor="start">
          {t(
            "aid 3: measurable mass loss = nuclear",
            "aid 3: measurable mass loss = nuclear"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

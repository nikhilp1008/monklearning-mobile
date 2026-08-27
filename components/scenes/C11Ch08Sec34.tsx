/**
 * C11 Ch08 · Section 34 — "Reagents & the electronic effects behind stability"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.7, 23.72, 38.49, 56.92, 76.8, 91.31, 115.71]):
 *  0 title (always-on, seq1) · 1 nucleophiles list · 2 electrophiles list · 3
 *  inductive (I) · 4 resonance/mesomeric (M) · 5 electromeric (E) · 6 red note
 *  (hyperconjugation) · 7 red closer (M permanent vs E temporary)
 *
 * Two reagent columns (x=270/810, y95-136), then a 3-column I/M/E table
 * (x=200/540/880, y170-214).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Col = ({ cx, title, sub, note }: { cx: number; title: string; sub: string; note: string }) => (
    <>
      <T x={cx} y={170} size={14} fill={INK} weight={700}>
        {title}
      </T>
      <T x={cx} y={192} size={11} fill={MUTED}>
        {sub}
      </T>
      <T x={cx} y={214} size={11} fill={INK}>
        {note}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Reagents & the electronic effects behind stability", "Reagents & stability ke peeche electronic effects")}
        </T>
      </Fade>

      {/* beat 1 — nucleophiles */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={270} y={100} size={14} fill={INK} weight={700}>
          {t("Nucleophiles (Lewis bases)", "Nucleophiles (Lewis bases)")}
        </T>
        <T x={270} y={118} size={12} fill={MUTED}>
          OH⁻, CN⁻, RO⁻, halides, NH₃, H₂O
        </T>
        <T x={270} y={136} size={12} fill={INK}>
          {t("→ attack positive centres", "→ positive centres attack karte")}
        </T>
      </Fade>

      {/* beat 2 — electrophiles */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={810} y={100} size={14} fill={INK} weight={700}>
          {t("Electrophiles (Lewis acids)", "Electrophiles (Lewis acids)")}
        </T>
        <T x={810} y={118} size={12} fill={MUTED}>
          H⁺, NO₂⁺, BF₃, AlCl₃, {t("carbocations", "carbocations")}
        </T>
        <T x={810} y={136} size={12} fill={INK}>
          {t("→ attack electron-rich centres", "→ electron-rich centres attack karte")}
        </T>
      </Fade>

      {/* beat 3 — inductive effect */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Col
          cx={200}
          title={t("Inductive (I)", "Inductive (I)")}
          sub={t("permanent σ shift, fades ~3C", "permanent σ shift, ~3C tak")}
          note={t("+I releases, −I withdraws", "+I releases, −I withdraws")}
        />
      </Fade>

      {/* beat 4 — resonance / mesomeric effect */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Col
          cx={540}
          title={t("Resonance (M)", "Resonance (M)")}
          sub={t("permanent π/lp, via conjugation", "permanent π/lp, conjugation se")}
          note={t("+M donates, −M withdraws", "+M donates, −M withdraws")}
        />
      </Fade>

      {/* beat 5 — electromeric effect */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Col
          cx={880}
          title={t("Electromeric (E)", "Electromeric (E)")}
          sub={t("temporary, reagent-demand", "temporary, reagent-demand pe")}
          note={t("reverses when reagent leaves", "reagent jaate hi reverse")}
        />
      </Fade>

      {/* beat 6 — hyperconjugation */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 245 L 60 275" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={263} size={15} fill={RED} script anchor="start">
          {t(
            "hyperconjugation: σ(C-H) delocalises ('no-bond resonance') — more αC-H = more stable",
            "hyperconjugation: σ(C-H) delocalise hota ('no-bond resonance') — zyada αC-H = zyada stable"
          )}
        </T>
      </Fade>

      {/* beat 7 — M vs E, the key distinction */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 295 L 60 325" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={313} size={15} fill={RED} script anchor="start">
          {t(
            "M is permanent, through conjugation; E is temporary, only on a reagent's demand",
            "M permanent hai, conjugation se; E temporary hai, sirf reagent ki demand pe"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch08 · Section 38 — "Worked example — nucleophile or electrophile? (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.4, 13.91, 21.25, 32.26, 39.34, 46.42, 62.12]):
 *  0 title (always-on, seq1) · 1 task: 4 formulas listed · 2 CN⁻ → nucleophile
 *  · 3 BF3 → electrophile · 4 H2O → nucleophile · 5 NO2⁺ → electrophile · 6 red
 *  note (H2O & BF3 same charge, opposite roles) · 7 closer (judge by density)
 *
 * Four columns, centers x=150/400/650/900.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Verdict = ({ cx, on, delay, reason, label, color }: { cx: number; on: boolean; delay: number; reason: string; label: string; color: string }) => (
    <Fade on={on} delay={delay}>
      <T x={cx} y={165} size={12} fill={MUTED}>
        {reason}
      </T>
      <T x={cx} y={195} size={15} fill={color} weight={800}>
        {label}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Worked example — nucleophile or electrophile? (JEE Main)", "Worked example — nucleophile ya electrophile? (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — the four species */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("classify & justify:", "classify & justify karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={150} y={135} size={18} fill={INK} weight={700}>
          CN⁻
        </T>
        <T x={400} y={135} size={18} fill={INK} weight={700}>
          BF₃
        </T>
        <T x={650} y={135} size={18} fill={INK} weight={700}>
          H₂O
        </T>
        <T x={900} y={135} size={18} fill={INK} weight={700}>
          NO₂⁺
        </T>
      </Fade>

      {/* beat 2 — CN- */}
      <Verdict cx={150} on={beat >= 2} delay={dl(2, 0.2)} reason={t("negative, lone pair on C", "negative, C par lone pair")} label={t("NUCLEOPHILE", "NUCLEOPHILE")} color={GREEN} />

      {/* beat 3 — BF3 */}
      <Verdict cx={400} on={beat >= 3} delay={dl(3, 0.2)} reason={t("neutral, B has empty orbital", "neutral, B ka orbital khaali")} label={t("ELECTROPHILE", "ELECTROPHILE")} color={AMBER_DARK} />

      {/* beat 4 — H2O */}
      <Verdict cx={650} on={beat >= 4} delay={dl(4, 0.2)} reason={t("neutral, 2 lone pairs on O", "neutral, O par 2 lone pairs")} label={t("NUCLEOPHILE", "NUCLEOPHILE")} color={GREEN} />

      {/* beat 5 — NO2+ */}
      <Verdict cx={900} on={beat >= 5} delay={dl(5, 0.2)} reason={t("positive, electron-deficient", "positive, electron-deficient")} label={t("ELECTROPHILE", "ELECTROPHILE")} color={AMBER_DARK} />

      {/* beat 6 — charge is not the criterion */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 220 L 60 250" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={238} size={15} fill={RED} script anchor="start">
          {t(
            "H2O and BF3 share the same (zero) net charge, yet play OPPOSITE roles — charge isn't the test",
            "H2O aur BF3 ka charge same (zero) hai, phir bhi OPPOSITE roles — charge test nahi hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={275} size={14} fill={INK} weight={700}>
          {t("judge by electron density: lone pair/excess → nucleophile; empty/deficient → electrophile", "electron density se judge karo: lone pair → nucleophile; khaali → electrophile")}
        </T>
      </Fade>
    </Scene>
  );
}

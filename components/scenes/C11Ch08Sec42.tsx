/**
 * C11 Ch08 · Section 42 — "One method per property difference"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.87, 17.41, 29.61, 41.22, 66.05, 78.34, 96.34]):
 *  0 title (always-on, seq1) · 1 diagram: PROPERTY | METHOD header · 2 sublimation
 *  · 3 crystallisation · 4 distillation (4 types, 2 lines) · 5 differential
 *  extraction · 6 chromatography (adsorption/partition) · 7 red Rf formula (boxed)
 *
 * Two columns: PROPERTY x=100 (start), METHOD x=580 (start).
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Row = ({ y, on, delay, prop, method }: { y: number; on: boolean; delay: number; prop: string; method: string }) => (
    <Fade on={on} delay={delay}>
      <T x={100} y={y} size={12} fill={INK} anchor="start">
        {prop}
      </T>
      <T x={580} y={y} size={12} fill={INK} weight={700} anchor="start">
        {method}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("One method per property difference", "Har property difference ka apna method")}
        </T>
      </Fade>

      {/* beat 1 — the table header */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={100} y={95} size={12} fill={MUTED} weight={700} anchor="start">
          PROPERTY
        </T>
        <T x={580} y={95} size={12} fill={MUTED} weight={700} anchor="start">
          METHOD
        </T>
      </Fade>

      {/* beat 2 — sublimation */}
      <Row y={130} on={beat >= 2} delay={dl(2, 0.2)} prop={t("solid → vapour, no melting", "solid → vapour, bina melt")} method={t("Sublimation (camphor, naphthalene)", "Sublimation (camphor, naphthalene)")} />

      {/* beat 3 — crystallisation */}
      <Row y={165} on={beat >= 3} delay={dl(3, 0.2)} prop={t("solubility: hot ≫ cold", "solubility: hot ≫ cold")} method={t("Crystallisation (pure crystals; mother liquor)", "Crystallisation (pure crystals; mother liquor)")} />

      {/* beat 4 — distillation, 4 types */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={100} y={200} size={12} fill={INK} anchor="start">
          {t("boiling-point gap", "boiling-point gap")}
        </T>
        <T x={580} y={200} size={12} fill={INK} weight={700} anchor="start">
          {t("Distillation:", "Distillation:")}
        </T>
        <T x={580} y={222} size={11.5} fill={INK} anchor="start">
          {t("simple / fractional / reduced-p / steam", "simple / fractional / reduced-p / steam")}
        </T>
      </Fade>

      {/* beat 5 — differential extraction */}
      <Row y={255} on={beat >= 5} delay={dl(5, 0.2)} prop={t("solubility in 2 immiscible solvents", "2 immiscible solvents mein solubility")} method={t("Extraction (separating funnel)", "Extraction (separating funnel)")} />

      {/* beat 6 — chromatography */}
      <Row y={288} on={beat >= 6} delay={dl(6, 0.2)} prop={t("surface affinity (solid/liquid stationary)", "surface affinity (solid/liquid stationary)")} method={t("Chromatography: adsorption / partition", "Chromatography: adsorption / partition")} />

      {/* beat 7 — the Rf formula */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 315 L 60 350" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Rect x={280} y={310} width={520} height={44} rx={9} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={338} size={16} fill={INK} weight={800}>
          Rf = {t("distance moved by component ÷ distance moved by solvent", "component ki distance ÷ solvent front ki distance")}
        </T>
      </Fade>
    </Scene>
  );
}

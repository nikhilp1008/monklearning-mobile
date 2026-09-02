/**
 * C11 Ch06 · Section 71 — "Formula recap — the whole chapter at a glance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Opens the Recap subtopic (Sec 71-72): a two-column
 * cheat sheet, one formula per beat, in the order the chapter built them.
 *
 * Beats (board_reveal_at_english: [0, 6.3, 15.7, 27.2, 39.6, 51.8, 62, 73.7, 87.7, 95.7]):
 *  0 title + underline
 *  1 (left row1)  Kc = law of mass action
 *  2 (left row2)  Kp = Kc(RT)^Δn bridge
 *  3 (left row3)  ΔG° = −RT ln K, Gibbs bridge
 *  4 (left row4)  van't Hoff: ln(K2/K1) = −ΔH°/R (1/T2 − 1/T1)
 *  5 (left row5)  Kp = α²P/(1−α²) dissociation shortcut
 *  6 (right row1) Kw = [H+][OH-] = 1e-14, pH+pOH=14
 *  7 (right row2) α=√(Ka/c), [H+]=√(Kac), Ka·Kb=Kw
 *  8 (right row3) pH = pKa + log(salt/acid), Henderson
 *  9 (right row4) Ksp: AB s=√Ksp; A2B/AB2 Ksp=4s³; Q vs Ksp
 *
 * Layout plan (two columns, divider at x=540; longer language counts):
 *  b0 | title (script 20, red)        | T mid  | x160..920  y30..88  (bl 64)
 *  —  | vertical divider              | Draw   | x540 y95..560
 *  b1 | row1 label+formula            | T st   | x60..520  y92..126 (bl 100/122)
 *  b2 | row2 label+formula+note       | T st   | x60..520  y184..236 (bl 192/214/232)
 *  b3 | row3 label+formula+note       | T st   | x60..520  y276..328 (bl 284/306/324)
 *  b4 | row4 label+formula            | T st   | x60..520  y368..402 (bl 376/398)
 *  b5 | row5 label+formula+note       | T st   | x60..520  y460..512 (bl 468/490/508)
 *  b6 | row6 label+formula+note       | T st   | x564..1020 y92..144 (bl 100/122/140)
 *  b7 | row7 label+formula+note       | T st   | x564..1020 y202..254 (bl 210/232/250)
 *  b8 | row8 label+formula            | T st   | x564..1020 y312..346 (bl 320/342)
 *  b9 | row9 label+3 lines            | T st   | x564..1020 y422..492 (bl 430/452/470/488)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("formula recap — the whole chapter at a glance", "formula recap — poora chapter ek nazar mein")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 400 84 C 460 80, 620 87, 680 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* vertical divider between the two columns */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 540 95 V 560" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* ---- LEFT COLUMN ---- */}

      {/* row 1 — law of mass action */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={60} y={100} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          1 · LAW OF MASS ACTION
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <SvgText x={60} y={122} textAnchor="start" fontSize={15} fill={INK} fontFamily={ANEK}>
          Kc = [C]<TSpan dy={-7} fontSize={9.3}>c</TSpan>
          <TSpan dy={7}>[D]</TSpan>
          <TSpan dy={-7} fontSize={9.3}>d</TSpan>
          <TSpan dy={7}> / [A]</TSpan>
          <TSpan dy={-7} fontSize={9.3}>a</TSpan>
          <TSpan dy={7}>[B]</TSpan>
          <TSpan dy={-7} fontSize={9.3}>b</TSpan>
        </SvgText>
      </Fade>

      {/* row 2 — Kp–Kc bridge */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={192} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          2 · Kp–Kc BRIDGE
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <SvgText x={60} y={214} textAnchor="start" fontSize={15} fill={INK} fontFamily={ANEK}>
          Kp = Kc(RT)<TSpan dy={-7} fontSize={9.3}>Δn</TSpan>
        </SvgText>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={60} y={232} size={11} fill={MUTED} anchor="start">
          {t("Δn = mol gas products − mol gas reactants", "Δn = gas-mol products − gas-mol reactants")}
        </T>
      </Fade>

      {/* row 3 — Gibbs bridge */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={60} y={284} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          3 · GIBBS BRIDGE
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={60} y={306} size={15} fill={INK} anchor="start">
          ΔG° = −RT ln K
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <SvgText x={60} y={324} textAnchor="start" fontSize={11} fill={MUTED} fontFamily={ANEK}>
          K = e<TSpan dy={-6} fontSize={6.8}>(−ΔG°/RT)</TSpan>
        </SvgText>
      </Fade>

      {/* row 4 — van't Hoff */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={60} y={376} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          4 · VAN&apos;T HOFF
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={60} y={398} size={14} fill={INK} anchor="start">
          ln(K₂/K₁) = −(ΔH°/R)(1/T₂ − 1/T₁)
        </T>
      </Fade>

      {/* row 5 — dissociation shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={60} y={468} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          5 · DISSOCIATION SHORTCUT
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={60} y={490} size={15} fill={INK} anchor="start">
          Kp = α²P / (1−α²)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={60} y={508} size={11} fill={MUTED} anchor="start">
          {t("single reactant → 2 gas moles", "single reactant → 2 gas moles")}
        </T>
      </Fade>

      {/* ---- RIGHT COLUMN ---- */}

      {/* row 6 — water & pH */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={564} y={100} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          6 · WATER &amp; pH
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <SvgText x={564} y={122} textAnchor="start" fontSize={15} fill={INK} fontFamily={ANEK}>
          Kw = [H⁺][OH⁻] = 10<TSpan dy={-7} fontSize={9.3}>−14</TSpan>
        </SvgText>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={564} y={140} size={11} fill={MUTED} anchor="start">
          pH + pOH = 14
        </T>
      </Fade>

      {/* row 7 — weak acids */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={564} y={210} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          7 · WEAK ACIDS
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={564} y={232} size={14} fill={INK} anchor="start">
          α = √(Ka/c), [H⁺] = √(Ka·c)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={564} y={250} size={11} fill={MUTED} anchor="start">
          Ka × Kb = Kw
        </T>
      </Fade>

      {/* row 8 — buffers, Henderson */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={564} y={320} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          8 · BUFFERS (HENDERSON)
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={564} y={342} size={15} fill={INK} anchor="start">
          pH = pKa + log([salt]/[acid])
        </T>
      </Fade>

      {/* row 9 — solubility */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={564} y={430} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          9 · SOLUBILITY (Ksp)
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.5)}>
        <T x={564} y={452} size={14} fill={INK} anchor="start">
          AB: s = √Ksp
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.8)}>
        <T x={564} y={470} size={14} fill={INK} anchor="start">
          A₂B / AB₂: Ksp = 4s³
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.1)}>
        <T x={564} y={488} size={14} fill={INK} anchor="start">
          {t("Q vs Ksp → decides precipitation", "Q vs Ksp → precipitation decide karta")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch07 · Section 7 — Worked example (CBSE): oxidant & reductant in 4Al + 3MnO₂
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.74, 20.65, 33.96, 46.93, 55.72, 62.89, 81.41]):
 *  0 heading: identify oxidised/reduced/oxidant/reductant
 *  1 THE reaction: 4Al(s) + 3MnO₂(s) → 2Al₂O₃(s) + 3Mn(s)
 *  2 LHS O.N.: "0" above Al, derivation MnO₂: x+2(−2)=0⇒Mn=+4, "+4" above Mn
 *  3 RHS O.N.: derivation Al₂O₃: 2x+3(−2)=0⇒Al=+3, "+3" above Al₂, "0" above Mn(s)
 *  4 track Al: 0→+3, increase → OXIDISED
 *  5 track Mn: +4→0, decrease → REDUCED
 *  6 red-margin: Al drives Mn's reduction→Al=REDUCTANT; MnO₂ drives Al's oxidation→MnO₂=OXIDANT
 *  7 answer box (green): Al oxidised (reducing agent); Mn in MnO₂ reduced (oxidising agent)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)     | T mid | x540 bl100
 *  b1 | equation tokens (sans24 800) | T mid | y190, x110/190/250/310/arr370-520/580/650/730/800
 *  b2 | "0"/"+4" annot (sans18)  | T mid | y150 x110/250; derivation (sans17) x64 bl230
 *  b3 | derivation (sans17) x64 bl264; "+3"/"0" annot y150 x580/800
 *  b4 | track row (sans19) x64 bl300
 *  b5 | track row (sans19) x64 bl336
 *  b6 | margin bar x64 y360..420, 2 lines (sans16) x80 bl376/410
 *  b7 | answer box x64..760 y440..510, 2 lines (sans18/17) bl462/496
 */

import React from "react";
import { Rect, TSpan } from 'react-native-svg';
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
import { ReactionArrow } from "./chem-kit";

export default function C11Ch07Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("track the O.N., name the agent", "O.N. track karo, agent naam do")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("identify oxidised, reduced, oxidant, reductant", "oxidised, reduced, oxidant, reductant pehchano")}
        </T>
      </Fade>

      {/* ===== beat 1 — the reaction ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={110} y={190} size={24} fill={INK} weight={800}>
          4Al(s)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={190} y={190} size={22} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={250} y={190} size={24} fill={INK} weight={800}>
          3Mn
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={330} y={190} size={24} fill={INK} weight={800}>
          O₂(s)
        </T>
      </Fade>
      <ReactionArrow on={beat >= 1} delay={dl(1, 1.2)} x1={390} x2={530} y={190} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={590} y={190} size={24} fill={INK} weight={800}>
          2Al₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={660} y={190} size={24} fill={INK} weight={800}>
          O₃(s)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={740} y={190} size={22} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={800} y={190} size={24} fill={INK} weight={800}>
          3Mn(s)
        </T>
      </Fade>

      {/* ===== beat 2 — LHS O.N. ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={110} y={150} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={64} y={230} size={17} fill={INK} anchor="start">
          {t("MnO₂:  x + 2(−2) = 0  ⇒  Mn = +4", "MnO₂:  x + 2(−2) = 0  ⇒  Mn = +4")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={250} y={150} size={18} fill={AMBER_DARK} weight={800}>
          +4
        </T>
      </Fade>

      {/* ===== beat 3 — RHS O.N. ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={64} y={264} size={17} fill={INK} anchor="start">
          {t("Al₂O₃:  2x + 3(−2) = 0  ⇒  Al = +3", "Al₂O₃:  2x + 3(−2) = 0  ⇒  Al = +3")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={590} y={150} size={18} fill={AMBER_DARK} weight={800}>
          +3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={800} y={150} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>

      {/* ===== beat 4 — track Al ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={300} size={19} fill={INK} anchor="start">
          {t("Al:  0 → +3   (increase)   ⇒   ", "Al:  0 → +3   (increase)   ⇒   ")}
          <TSpan fill={GREEN} fontWeight={800}>
            OXIDISED
          </TSpan>
        </T>
      </Fade>

      {/* ===== beat 5 — track Mn ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={336} size={19} fill={INK} anchor="start">
          {t("Mn:  +4 → 0   (decrease)   ⇒   ", "Mn:  +4 → 0   (decrease)   ⇒   ")}
          <TSpan fill={RED} fontWeight={800}>
            REDUCED
          </TSpan>
        </T>
      </Fade>

      {/* ===== beat 6 — naming the agents ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 360 L 64 420" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={376} size={16} fill={RED} script anchor="start">
          {t("Al drives Mn's reduction → Al = REDUCTANT", "Al Mn ka reduction drive karta hai → Al = REDUCTANT")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={80} y={410} size={16} fill={RED} script anchor="start">
          {t("MnO₂ drives Al's oxidation → MnO₂ = OXIDANT", "MnO₂ Al ka oxidation drive karta hai → MnO₂ = OXIDANT")}
        </T>
      </Fade>

      {/* ===== beat 7 — answer box ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={64} y={440} width={760} height={70} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={84} y={465} size={18} fill={GREEN} weight={800} anchor="start">
          {t("Al → oxidised (reducing agent)", "Al → oxidised (reducing agent)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={496} size={17} fill={GREEN} weight={800} anchor="start">
          {t("Mn in MnO₂ → reduced (oxidising agent)", "MnO₂ ka Mn → reduced (oxidising agent)")}
        </T>
      </Fade>
    </Scene>
  );
}

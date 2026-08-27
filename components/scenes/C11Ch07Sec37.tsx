/**
 * C11 Ch07 · Section 37 — "Redox in action: where it runs the world"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.22, 28.59, 44.97, 53.85, 67.16, 81.75, 92.67]):
 *  0 heading: redox is not abstract — it runs the world
 *  1 CORROSION: Fe oxidised by O₂/moisture — galvanisation & cathodic protection
 *  2 COMBUSTION & RESPIRATION: oxidise carbon compounds with O₂, release energy
 *  3 ELECTROCHEMICAL CELLS: dry cells, lead-storage batteries, fuel cells
 *  4 METALLURGY: extract metals by reduction — Fe₂O₃ by CO, Al by electrolysis
 *  5 BLEACHING & DISINFECTION: Cl₂/H₂O₂ oxidise colour; KMnO₄/H₂O₂ antiseptics
 *  6 PHOTOGRAPHY & ELECTROPLATING: Ag⁺ reduced; cathodic reduction deposits metal
 *  7 red-margin closer: spot the redox skeleton → one idea, applied everywhere
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Each row: category
 * (amber, tspan) + description (ink, tspan), single line, anchor start, x=64. Pitch 34.
 *  b1 bl116  b2 bl150  b3 bl184  b4 bl218  b5 bl252  b6 bl286
 *  b7 margin bar x64 y318..352, text (sans16 red) x80 bl338
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the same idea — one skeleton, endless applications", "wahi idea — ek skeleton, anant applications")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("redox is not abstract — it runs the world", "redox abstract nahi hai — yeh duniya chalata hai")}
        </T>
      </Fade>

      {/* ===== beat 1 — corrosion ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={64} y={116} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("CORROSION:", "CORROSION:")}
          </TSpan>{" "}
          {t("Fe oxidised by O₂/moisture — galvanisation & cathodic protection", "Fe oxidise O₂/moisture se — galvanisation & cathodic protection")}
        </T>
      </Fade>

      {/* ===== beat 2 — combustion & respiration ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={64} y={150} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("COMBUSTION & RESPIRATION:", "COMBUSTION & RESPIRATION:")}
          </TSpan>{" "}
          {t("oxidise carbon compounds with O₂, release energy", "carbon compounds O₂ se oxidise, energy release")}
        </T>
      </Fade>

      {/* ===== beat 3 — electrochemical cells ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={64} y={184} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("ELECTROCHEMICAL CELLS:", "ELECTROCHEMICAL CELLS:")}
          </TSpan>{" "}
          {t("dry cells, lead-storage batteries, fuel cells", "dry cells, lead-storage batteries, fuel cells")}
        </T>
      </Fade>

      {/* ===== beat 4 — metallurgy ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={218} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("METALLURGY:", "METALLURGY:")}
          </TSpan>{" "}
          {t("extract metals by reduction — Fe₂O₃ by CO, Al by electrolysis", "reduction se metals nikaalte — Fe₂O₃ CO se, Al electrolysis se")}
        </T>
      </Fade>

      {/* ===== beat 5 — bleaching & disinfection ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={252} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("BLEACHING & DISINFECTION:", "BLEACHING & DISINFECTION:")}
          </TSpan>{" "}
          {t("Cl₂/H₂O₂ oxidise colour; KMnO₄/H₂O₂ as antiseptics", "Cl₂/H₂O₂ colour oxidise; KMnO₄/H₂O₂ antiseptics")}
        </T>
      </Fade>

      {/* ===== beat 6 — photography & electroplating ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={64} y={286} size={15} fill={INK} anchor="start">
          <TSpan fill={AMBER_DARK} fontWeight={800}>
            {t("PHOTOGRAPHY & ELECTROPLATING:", "PHOTOGRAPHY & ELECTROPLATING:")}
          </TSpan>{" "}
          {t("Ag⁺ reduced to Ag; cathodic reduction deposits metal", "Ag⁺ reduce Ag mein; cathodic reduction metal deposit karta")}
        </T>
      </Fade>

      {/* ===== beat 7 — closer ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 318 L 64 352" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={338} size={16} fill={RED} weight={700} anchor="start">
          {t("spot the redox skeleton → one idea, applied everywhere", "redox skeleton dekho → ek idea, har jagah applied")}
        </T>
      </Fade>
    </Scene>
  );
}

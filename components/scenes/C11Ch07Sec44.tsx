/**
 * C11 Ch07 · Section 44 — "Cheat sheet: fast recall for the whole chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * section_type: cheat_sheet — FINAL section of the chapter. Dense one-screen recall, accumulates.
 *
 * Beats (en [0, 6.23, 24.41, 49.24, 65.45, 82.6, 93.61, 109.23]):
 *  0 heading: Redox Reactions — rapid recall
 *  1 three lenses + master rule Σ(O.N.)=net charge
 *  2 O.N. assignment values (Group1/2, Al, F, O, H, fractional)
 *  3 red-margin: agents rule — oxidant REDUCED, reductant OXIDISED, opposite to itself
 *  4 balancing methods + medium tools + basic shortcut
 *  5 MnO₄⁻ electron memory: 5-3-1
 *  6 cells: An Ox/Red Cat, E°cell, ΔG°
 *  7 red-margin: 4 types + reactivity series + disprop vs comprop vs intramolecular + mnemonics
 *  (everything stays — the whole chapter in one breath)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Pitch 27, x=540 centered:
 *  b1 bl128/155  b2 bl182/209  b3(red,margin bar x64 y224..276) bl236/263
 *  b4 bl290/317  b5 bl344  b6 bl371/398  b7(red,margin bar x64 y412..492) bl425/452/479
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("one breath, the whole chapter", "ek saans mein, poora chapter")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("Redox Reactions — rapid recall", "Redox Reactions — rapid recall")}
        </T>
      </Fade>

      {/* ===== beat 1 — three lenses ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={128} size={13} fill={INK}>
          {t(
            "3 lenses: oxidation = +O / −H / −e⁻ / ↑O.N. (reduction = reverse)",
            "3 lenses: oxidation = +O / −H / −e⁻ / ↑O.N. (reduction = ulta)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={155} size={13} fill={INK} weight={700}>
          {t("master rule: Σ(O.N.) = net charge", "master rule: Σ(O.N.) = net charge")}
        </T>
      </Fade>

      {/* ===== beat 2 — O.N. assignment ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={182} size={13} fill={INK}>
          {t("assign: Group1=+1, Group2=+2, Al=+3, F=−1", "assign: Group1=+1, Group2=+2, Al=+3, F=−1")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={209} size={13} fill={INK}>
          {t(
            "O=−2 (peroxide−1, OF₂+2) · H=+1 (hydride−1) · fractional=average only",
            "O=−2 (peroxide−1, OF₂+2) · H=+1 (hydride−1) · fractional=average only"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — agents rule ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 224 L 64 276" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={236} size={13} fill={RED} weight={700}>
          {t("oxidant = REDUCED (gains e⁻) · reductant = OXIDISED (loses e⁻)", "oxidant = REDUCED (e⁻ gain) · reductant = OXIDISED (e⁻ lose)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={263} size={13} fill={RED} weight={700}>
          {t("the agent does the OPPOSITE to itself", "agent khud ke saath ULTA karta hai")}
        </T>
      </Fade>

      {/* ===== beat 4 — balancing ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={290} size={13} fill={INK}>
          {t("balance via O.N. method or ion-electron method", "O.N. method ya ion-electron method se balance karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={317} size={13} fill={INK}>
          {t(
            "acid: H⁺/H₂O · base: OH⁻/H₂O — shortcut: balance acid, then add OH⁻",
            "acid: H⁺/H₂O · base: OH⁻/H₂O — shortcut: acid balance, phir OH⁻ add"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — MnO4 memory ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={344} size={13} fill={INK} weight={700}>
          {t("MnO₄⁻ memory: acid=5, neutral=3, strong base=1 (5-3-1)", "MnO₄⁻ memory: acid=5, neutral=3, strong base=1 (5-3-1)")}
        </T>
      </Fade>

      {/* ===== beat 6 — cells ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={371} size={13} fill={INK}>
          {t("cells: An Ox · Red Cat · E°cell=E°cat−E°an · +ve ⇒ spontaneous", "cells: An Ox · Red Cat · E°cell=E°cat−E°an · +ve ⇒ spontaneous")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={398} size={13} fill={INK} weight={700}>
          ΔG° = −nFE°cell
        </T>
      </Fade>

      {/* ===== beat 7 — types + mnemonics ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 412 L 64 492" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={425} size={13} fill={RED} weight={700}>
          {t("4 types + reactivity series (K…Au)", "4 types + reactivity series (K…Au)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={452} size={13} fill={RED} weight={700}>
          {t(
            "disproportionation (1 element splits) vs comproportionation (reverse) vs intramolecular (2 elements)",
            "disproportionation (1 element split) vs comproportionation (ulta) vs intramolecular (2 elements)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={540} y={479} size={13} fill={RED} weight={700}>
          {t("mnemonics: OIL RIG · count first, confirm with O.N.", "mnemonics: OIL RIG · pehle count, O.N. se confirm")}
        </T>
      </Fade>
    </Scene>
  );
}

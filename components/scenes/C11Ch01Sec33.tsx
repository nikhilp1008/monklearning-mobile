/**
 * C11 Ch01 · Section 33 — "The mole triangle and related relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: formulas — a reference sheet.)
 *
 * Beats (en [0,8.96,29.61,53.68,70.92,84.74,96.6,110.94,129.29]):
 *  0 anchor: every relation, compact
 *  1 the mole triangle, boxed: n = mass/M = N/Nₐ = V/Vm
 *  2 molecular mass vs formula mass
 *  3 elemental gas: M = atomicity × atomic mass
 *  4 average atomic mass formula
 *  5 same pattern for gas mixtures
 *  6 vapour density: M = 2×VD
 *  7 units and dimensions
 *  8 the procedural rule, boxed: identify → moles → target
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | box (dashed amber, w520h40)  | Draw  | x280..800 y110..150
 *  b1 | formula inside (16 bold ink) | T mid | x540  y135
 *  b2 | l (script12 ink)             | T mid | x540  y178
 *  b3 | l (13 bold ink)              | T mid | x540  y203
 *  b4 | l (script12 ink)             | T mid | x540  y228
 *  b5 | l (script12 muted)           | T mid | x540  y253
 *  b6 | l (13 bold ink)              | T mid | x540  y278
 *  b7 | l (script12 muted)           | T mid | x540  y303
 *  b8 | box (dashed amber, w560h44)  | Draw  | x260..820 y330..374
 *  b8 | rule inside (14 bold ink)    | T mid | x540  y357
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("the mole triangle and related relations", "mole triangle aur related relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "every relation of this subtopic, compact — used in every chapter ahead",
            "is subtopic ke saare relations, compact — aage har chapter mein use honge"
          )}
        </T>
      </Fade>

      {/* beat 1 — the mole triangle, boxed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 296 110 h 488 q 16 0 16 16 v 8 q 0 16 -16 16 h -488 q -16 0 -16 -16 v -8 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={135} size={16} fill={INK} weight={700} script={false}>
          n = mass/M = N/Nₐ = V/Vm (Vm = 22.4 L/mol @ STP)
        </T>
      </Fade>

      {/* beat 2 — molecular mass vs formula mass */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={178} size={12} fill={INK} script>
          {t(
            "molecular mass = Σ atomic masses · formula mass = same, for ionic compounds (NaCl: no discrete molecule)",
            "molecular mass = Σ atomic masses · formula mass = same, ionic compounds ke liye (NaCl: no discrete molecule)"
          )}
        </T>
      </Fade>

      {/* beat 3 — elemental gas atomicity */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={203} size={13} fill={INK} weight={700} script={false}>
          elemental gas: M = atomicity × atomic mass — O₂ = 2×16 = 32
        </T>
      </Fade>

      {/* beat 4 — average atomic mass formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={228} size={12} fill={INK} script>
          average atomic mass = Σ(isotopic mass × abundance) / Σabundance (÷100 if %)
        </T>
      </Fade>

      {/* beat 5 — same pattern for gas mixtures */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={253} size={12} fill={MUTED} script>
          {t("same pattern for gas MIXTURES — component M weighted by moles", "same pattern gas MIXTURES ke liye — component M, moles se weighted")}
        </T>
      </Fade>

      {/* beat 6 — vapour density */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={278} size={13} fill={INK} weight={700} script={false}>
          {t(
            "vapour density: M = 2×VD — combine with atomicity×atomic mass for unknown gases",
            "vapour density: M = 2×VD — atomicity×atomic mass ke saath combine karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — units and dimensions */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={303} size={12} fill={MUTED} script>
          {t(
            "units: Nₐ = /mol · M = g/mol (dimension: mass/amount of substance)",
            "units: Nₐ = /mol · M = g/mol (dimension: mass/amount of substance)"
          )}
        </T>
      </Fade>

      {/* beat 8 — the procedural rule, boxed */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.3)}
        d="M 276 330 h 528 q 16 0 16 16 v 12 q 0 16 -16 16 h -528 q -16 0 -16 -16 v -12 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={357} size={14} fill={INK} weight={700} script={false}>
          {t(
            "identify what you HAVE → land on MOLES → convert to the TARGET",
            "jo HAI usse pehchano → MOLES par utro → TARGET tak convert karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

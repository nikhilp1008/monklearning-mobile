/**
 * C11 Ch01 · Section 29 — "Pitfalls and the five-second classification"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,5.72,25.35,41.9,60.08,77.23,102.06,125.19]):
 *  0 anchor: closing with the four pitfalls the chapter flags
 *  1 pitfall 1: open system mistaken for a broken law
 *  2 pitfall 2: comparing wrong quantities in multiple proportions
 *  3 pitfall 3: treating gas volumes as masses
 *  4 pitfall 4: over-applying Dalton's theory
 *  5 the pro-tip: the 5-second classification (boxed)
 *  6 three memory aids
 *  7 closing: next — how many atoms in a gram? the mole concept
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1/l2/l3 (13 amber-drk)  | T mid | x540  y400/424/448
 *  b7 | closing (script14 green)     | T mid | x540  y486
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "open system = broken law?",
    "open system = broken law?",
    "gases ESCAPE (apparent mass loss) — conservation is INTACT",
    "gases ESCAPE hoti (apparent mass loss) — conservation INTACT hai",
  ],
  [
    "comparing wrong quantities in multiple proportions?",
    "multiple proportions mein galat quantities compare karna?",
    "FIX the shared element to the SAME value FIRST",
    "shared element ko SAME value par pehle FIX karo",
  ],
  [
    "treating gas volumes as masses?",
    "gas volumes ko masses samajhna?",
    "volume ratios = MOLECULE ratios (Avogadro), not mass!",
    "volume ratios = MOLECULE ratios (Avogadro), mass nahi!",
  ],
  [
    "over-applying Dalton's theory?",
    "Dalton ki theory zyada lagana?",
    "3 cracks: isotopes, isobars/allotropes, divisible atom",
    "3 cracks: isotopes, isobars/allotropes, divisible atom",
  ],
];

export default function C11Ch01Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("pitfalls and the five-second classification", "pitfalls aur five-second classification")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "closing with the four pitfalls the chapter flags",
            "un chaar pitfalls ke saath band karte hain jo chapter khud flag karta hai"
          )}
        </T>
      </Fade>

      {/* beats 1-4 — the four pitfalls, mistake vs correct rule */}
      {PITFALLS.map(([mEn, mHi, rEn, rHi], i) => {
        const k = i + 1;
        const rowY = [130, 168, 206, 244][i];
        return (
          <React.Fragment key={rowY}>
            <Fade on={beat >= k} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={13} fill={RED} script anchor="start">
                ✗ {t(mEn, mHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 1.2)}>
              <T x={560} y={rowY} size={13} fill={GREEN} script anchor="start">
                ✓ {t(rEn, rHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — the pro-tip: 5-second classification */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 306 290 h 468 q 16 0 16 16 v 58 q 0 16 -16 16 h -468 q -16 0 -16 -16 v -58 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={315} size={15} fill={INK} weight={700} script={false}>
          THE 5-SECOND CLASSIFICATION
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t("count compounds & elements FIRST", "pehle compounds aur elements ginno")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={12} fill={AMBER_DARK} script>
          1 compound=definite · 2 compounds=multiple · 3 elements=reciprocal · gases=combining volumes
        </T>
      </Fade>

      {/* beat 6 — three memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={13} fill={AMBER_DARK} script>
          {t(
            "discoverer date order: Lavoisier→Proust→Dalton = conservation→definite→multiple",
            "discoverer date order: Lavoisier→Proust→Dalton = conservation→definite→multiple"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={424} size={13} fill={AMBER_DARK} script>
          {t("same compound, same recipe = definite proportions", "same compound, same recipe = definite proportions")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={448} size={13} fill={AMBER_DARK} script>
          {t(
            "volumes are VOTES: one molecule, one vote (Avogadro)",
            "volumes are VOTES: ek molecule, ek vote (Avogadro)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={486} size={14} fill={GREEN} script>
          {t(
            "next: how many atoms in a gram? the MOLE CONCEPT — Part 3",
            "aage: ek gram mein kitne atoms? MOLE CONCEPT — Part 3"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

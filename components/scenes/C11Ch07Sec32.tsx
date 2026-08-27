/**
 * C11 Ch07 · Section 32 — "The four families of redox reactions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Opens Subtopic 4 (Types of Redox Reactions & Redox in Action).
 *
 * Beats (en [0, 13.74, 26.37, 41.3, 55.38, 76.89, 85.25, 97.11]):
 *  0 heading: almost every redox reaction is one of four shapes
 *  1 card 1: COMBINATION — 2Mg + O₂ → 2MgO
 *  2 card 2: DECOMPOSITION — 2KClO₃ → 2KCl + 3O₂
 *  3 card 3: DISPLACEMENT — Zn + CuSO₄ → ZnSO₄ + Cu
 *  4 card 4: DISPROPORTIONATION — one element, one O.N. splits, some climb some fall
 *  5 red-margin: spot the family on sight → 2-second classification
 *  6 cricket analogy: 4 strokes, every shot a variation
 *  7 closer: master 4 families, every redox equation becomes recognisable (green)
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). 2×2 card grid:
 *  b1 | card1 box x64..524 y120..200; header bl140; eqn bl168
 *  b2 | card2 box x580..1020 y120..200; header bl140; eqn bl168
 *  b3 | card3 box x64..524 y220..300; header bl240; eqn bl268
 *  b4 | card4 box x580..1020 y220..300; header bl240; 2-line desc bl264/284
 *  b5 | margin bar x64 y320..356, text (sans16 red) x80 bl338
 *  b6 | analogy (sans15)        | T mid | x540 bl390
 *  b7 | closer (sans16 green)   | T mid | x540 bl420
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

export default function C11Ch07Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("four shapes cover almost every redox reaction", "char shapes lagbhag har redox reaction cover karte hain")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("almost every redox reaction is one of four shapes", "lagbhag har redox reaction char shapes mein se ek hai")}
        </T>
      </Fade>

      {/* ===== beat 1 — combination ===== */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 64 120 h 460 v 80 h -460 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={80} y={140} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          1 · {t("COMBINATION", "COMBINATION")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={80} y={168} size={16} fill={INK} anchor="start">
          2Mg + O₂ → 2MgO
        </T>
      </Fade>

      {/* ===== beat 2 — decomposition ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 580 120 h 440 v 80 h -440 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={600} y={140} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          2 · {t("DECOMPOSITION", "DECOMPOSITION")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={600} y={168} size={16} fill={INK} anchor="start">
          2KClO₃ → 2KCl + 3O₂
        </T>
      </Fade>

      {/* ===== beat 3 — displacement ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 220 h 460 v 80 h -460 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={240} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          3 · {t("DISPLACEMENT", "DISPLACEMENT")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={80} y={268} size={16} fill={INK} anchor="start">
          Zn + CuSO₄ → ZnSO₄ + Cu
        </T>
      </Fade>

      {/* ===== beat 4 — disproportionation ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 580 220 h 440 v 80 h -440 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={600} y={240} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          4 · {t("DISPROPORTIONATION", "DISPROPORTIONATION")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={600} y={264} size={14} fill={INK} anchor="start">
          {t("one element, one O.N. splits", "ek element, ek O.N. split hota")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={284} size={14} fill={INK} anchor="start">
          {t("some atoms climb, others fall", "kuch atoms chadhte, kuch girte")}
        </T>
      </Fade>

      {/* ===== beat 5 — the payoff ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 64 320 L 64 356" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={338} size={16} fill={RED} weight={700} anchor="start">
          {t("spot the family on sight → a 2-second classification", "family dekhte hi pehchano → 2-second classification")}
        </T>
      </Fade>

      {/* ===== beat 6 — cricket analogy ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={390} size={15} fill={MUTED} script>
          {t("like cricket shots — cover drive, pull, sweep, cut — 4 strokes, every shot a variation", "cricket shots jaise — cover drive, pull, sweep, cut — 4 strokes, har shot ek variation")}
        </T>
      </Fade>

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={420} size={16} fill={GREEN} weight={700}>
          {t("master these 4 families — every redox equation becomes recognisable", "in 4 families ko master karo — har redox equation pehchanne layak")}
        </T>
      </Fade>
    </Scene>
  );
}

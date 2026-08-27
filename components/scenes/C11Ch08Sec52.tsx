/**
 * C11 Ch08 · Section 52 — "Cheat sheet — Organic Chemistry: Basic Principles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 * FINAL section of the chapter.
 *
 * Beats (board_reveal_at, en [0, 7.34, 24.23, 45.57, 59.82, 77.4, 96.17, 120.23]):
 *  0 title (always-on, seq1) · 1 Foundations · 2 Hybridization · 3 Naming · 4
 *  Isomerism · 5 Mechanisms · 6 Analysis · 7 red closer (5 memory anchors)
 *
 * 2x3 grid of condensed subtopic summaries: col1 x=300, col2 x=800.
 * Rows: 85 / 185 / 285 (title +20, 2 body lines +38/+56).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Cell = ({
    cx,
    y,
    on,
    delay,
    title,
    l1,
    l2,
  }: {
    cx: number;
    y: number;
    on: boolean;
    delay: number;
    title: string;
    l1: string;
    l2: string;
  }) => (
    <Fade on={on} delay={delay}>
      <T x={cx} y={y} size={14} fill={AMBER_DARK} weight={700}>
        {title}
      </T>
      <T x={cx} y={y + 22} size={11} fill={INK}>
        {l1}
      </T>
      <T x={cx} y={y + 40} size={11} fill={MUTED}>
        {l2}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Cheat sheet — Organic Chemistry: Basic Principles", "Cheat sheet — Organic Chemistry: Basic Principles")}
        </T>
      </Fade>

      {/* beat 1 — Foundations */}
      <Cell
        cx={300}
        y={95}
        on={beat >= 1}
        delay={dl(1, 0.2)}
        title={t("Foundations", "Foundations")}
        l1={t("vertex = C, heteroatoms explicit", "vertex = C, heteroatoms explicit")}
        l2={t("acyclic/cyclic → carbo/hetero → group; homologues +CH2", "acyclic/cyclic → carbo/hetero → group; homologues +CH2")}
      />

      {/* beat 2 — Hybridization */}
      <Cell
        cx={800}
        y={95}
        on={beat >= 2}
        delay={dl(2, 0.2)}
        title={t("Hybridization", "Hybridization")}
        l1={t("σ-count(+lp) = 4/3/2 → sp3/sp2/sp", "σ-count(+lp) = 4/3/2 → sp3/sp2/sp")}
        l2={t("109.5°/120°/180° — more %s = shorter, stronger, acidic", "109.5°/120°/180° — zyada %s = chota, strong, acidic")}
      />

      {/* beat 3 — Naming */}
      <Cell
        cx={300}
        y={185}
        on={beat >= 3}
        delay={dl(3, 0.2)}
        title={t("Naming", "Naming")}
        l1={t("suffix(seniority) → longest chain → lowest locant", "suffix(seniority) → longest chain → lowest locant")}
        l2={t("substituents alphabetical; tie-break: first point of diff.", "substituents alphabetical; tie-break: first point of diff.")}
      />

      {/* beat 4 — Isomerism */}
      <Cell
        cx={800}
        y={185}
        on={beat >= 4}
        delay={dl(4, 0.2)}
        title={t("Isomerism", "Isomerism")}
        l1={t("connect first, then arrange", "pehle connect, phir arrange")}
        l2={t("geometrical: 2 diff groups/C; chiral: 4 diff, no symmetry", "geometrical: 2 diff groups/C; chiral: 4 diff, no symmetry")}
      />

      {/* beat 5 — Mechanisms */}
      <Cell
        cx={300}
        y={285}
        on={beat >= 5}
        delay={dl(5, 0.2)}
        title={t("Mechanisms", "Mechanisms")}
        l1={t("homolytic → radicals (fishhook); heterolytic → ions", "homolytic → radicals (fishhook); heterolytic → ions")}
        l2={t("stability: resonance → hyperconj. → induction", "stability: resonance → hyperconj. → induction")}
      />

      {/* beat 6 — Analysis */}
      <Cell
        cx={800}
        y={285}
        on={beat >= 6}
        delay={dl(6, 0.2)}
        title={t("Analysis", "Analysis")}
        l1={t("match method to property; Lassaigne: blue=N, red=N&S", "match method to property; Lassaigne: blue=N, red=N&S")}
        l2={t("Liebig C&H · Dumas/Kjeldahl N · Carius X/S; O by diff.", "Liebig C&H · Dumas/Kjeldahl N · Carius X/S; O by diff.")}
      />

      {/* beat 7 — the five memory anchors */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 375 L 60 425" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={393} size={14} fill={RED} script anchor="start">
          {t(
            "anchors: 'vertex & end are carbon' · 'suffix first' · 'connect, then arrange'",
            "anchors: 'vertex & end carbon hain' · 'suffix pehle' · 'connect, phir arrange'"
          )}
        </T>
        <T x={76} y={415} size={14} fill={RED} script anchor="start">
          {t(
            "'cation planar, anion pyramidal' · 'blue is N, red is N&S'",
            "'cation planar, anion pyramidal' · 'blue is N, red is N&S'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

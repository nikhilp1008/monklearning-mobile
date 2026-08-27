/**
 * M11 Ch01 · Section 22 — "The algebra of sets and the two-set cardinality formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas.
 *
 * Beats (board_reveal_at_english [0, 13.06, 29.53, 43.61, 60.93, 74.15, 89.94]):
 *  0 title (always-on)
 *  1 commutative & associative
 *  2 distributive
 *  3 identity & domination
 *  4 complement laws
 *  5 De Morgan (recap)
 *  6 LAND: n(A∪B) = n(A) + n(B) − n(A∩B) — the bridge formula, boxed
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | header + "A∪B=B∪A, (A∪B)∪C=A∪(B∪C)" | T mid | x540 y120/148
 *  b2 | header + "A∩(B∪C)=(A∩B)∪(A∩C)"      | T mid | x540 y188/216
 *  b3 | header + "A∪∅=A, A∩U=A, A∪U=U, A∩∅=∅"| T mid | x540 y256/284
 *  b4 | header + "A∪A′=U, A∩A′=∅, (A′)′=A"    | T mid | x540 y324/352
 *  b5 | header + "(A∪B)′=A′∩B′, (A∩B)′=A′∪B′" | T mid | x540 y392/420
 *  b6 | boxed cardinality formula              | rect+T | x220..860 y495..575
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, RED, GREEN,
  Scene,
} from '@/components/scenes/kit';

const GROUPS = [
  {
    beat: 1,
    header: "COMMUTATIVE & ASSOCIATIVE",
    formula: "A∪B = B∪A,     (A∪B)∪C = A∪(B∪C)",
    y: 120,
  },
  {
    beat: 2,
    header: "DISTRIBUTIVE",
    formula: "A∩(B∪C) = (A∩B)∪(A∩C)",
    y: 188,
  },
  {
    beat: 3,
    header: "IDENTITY & DOMINATION",
    formula: "A∪∅=A,   A∩U=A,   A∪U=U,   A∩∅=∅",
    y: 256,
  },
  {
    beat: 4,
    header: "COMPLEMENT",
    formula: "A∪A′=U,   A∩A′=∅,   (A′)′=A",
    y: 324,
  },
  {
    beat: 5,
    header: "DE MORGAN",
    formula: "(A∪B)′=A′∩B′,     (A∩B)′=A′∪B′",
    y: 392,
  },
];

export default function M11Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("one toolkit of laws", "laws ka ek toolkit")}
        </T>
      </Fade>

      {GROUPS.map((g) => (
        <React.Fragment key={g.header}>
          <Fade on={beat >= g.beat} delay={dl(g.beat, 0.3)}>
            <T x={540} y={g.y} size={12} fill={AMBER_DARK} weight={700}>
              {g.header}
            </T>
          </Fade>
          <Fade on={beat >= g.beat} delay={dl(g.beat, 1)}>
            <T x={540} y={g.y + 28} size={16} fill={INK} weight={700}>
              {g.formula}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 6 — LAND: the bridge formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={220} y={495} width={640} height={80} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={534} size={22} fill={RED} weight={800}>
          {"n(A ∪ B) = n(A) + n(B) − n(A ∩ B)"}
        </T>
        <T x={540} y={562} size={14} fill={GREEN} script>
          {t("the bridge to every word problem", "har word problem ka pul")}
        </T>
      </Fade>
    </Scene>
  );
}

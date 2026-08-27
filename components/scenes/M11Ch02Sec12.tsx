/**
 * M11 Ch02 · Section 12 — "Relation formulas: domain, range, and the 2^pq count"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a growing formula sheet, one identity landed per beat.
 *
 * Beats (board_reveal_at_english [0, 8.28, 28.16, 39.68, 51.11, 72.02, 90.45]):
 *  0 title (always-on) · 1 Dom(R)={a:(a,b)∈R for some b}⊆A
 *  2 Range(R)={b:(a,b)∈R for some a}⊆B · 3 Codomain(R)=B always; Range⊆Codomain
 *  4 boxed: relations A→B = 2^(n(A)·n(B)) = 2^pq · 5 relations on A, non-empty count
 *  6 insight (red-margin): pairs count pq, relations count 2^pq — power of two
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 26, red)          | T mid | x300..780  y32..72  (bl 64)
 *  b1 | Dom formula (18)                 | T mid | x360..720  y101..121 (bl 115)
 *  b2 | Range formula (18)               | T mid | x355..724  y146..166 (bl 160)
 *  b3 | Codomain line (16)               | T mid | x344..736  y188..205 (bl 200)
 *  b4 | chip relations-count (20,green)  | Chip  | x337..743  y235..282
 *  b5 | on-A / non-empty line (16)       | T mid | x336..744  y308..325 (bl 320)
 *  b6 | margin bar (red)                 | Draw  | x60  y350..385
 *  b6 | insight (15, red)                | T st  | x76..496   y356..373 (bl 368)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} anchor="middle" script>
          {t("Relations — the counting anchors", "Relations — counting ke anchors")}
        </T>
      </Fade>

      {/* beat 1 — domain */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={115} size={18} fill={INK} anchor="middle" weight={700}>
          {"Dom(R) = {a : (a,b)∈R for some b} ⊆ A"}
        </T>
      </Fade>

      {/* beat 2 — range */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={160} size={18} fill={INK} anchor="middle" weight={700}>
          {"Range(R) = {b : (a,b)∈R for some a} ⊆ B"}
        </T>
      </Fade>

      {/* beat 3 — codomain */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={200} size={16} fill={INK} anchor="middle">
          {"Codomain(R) = B always;  Range(R) ⊆ Codomain(R)"}
        </T>
      </Fade>

      {/* beat 4 — the headline count */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={337} y={235} w={406} h={47} fill={GREEN} textFill="#FFFEFB" size={20} script={false}>
          {"relations A→B = 2^(n(A)·n(B)) = 2^pq"}
        </Chip>
      </Fade>

      {/* beat 5 — corollaries */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={320} size={16} fill={INK} anchor="middle" weight={700}>
          {"relations on A = 2^(n(A)²);  non-empty = 2^pq − 1"}
        </T>
      </Fade>

      {/* beat 6 — the chant: always a power of two */}
      <Draw on={beat >= 6} d="M 60 350 L 60 385" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={368} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "pairs count pq; relations count 2^pq — a power of two!",
            "pairs count pq; relations count 2^pq — hamesha power of two!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

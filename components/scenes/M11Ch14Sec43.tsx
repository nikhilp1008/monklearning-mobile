/**
 * M11 Ch14 · Section 43 — "Cheat sheet — which tool when (computing)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: cheat_sheet — second of two,
 * and the LAST section of Class 11 Mathematics. Same red-margin-bar
 * list treatment as Sec42 (its matched pair — both sections' own
 * board_content are entirely type "note" style "red-margin"), framed as
 * a decision cheat sheet ("which tool when") rather than plain facts.
 * No segments_english/hinglish in Supabase (expected); text from
 * board_content directly.
 *
 * Beats (board_reveal_at_english [0,7.08,19.2,27.05,33.37,42.84,53.5]):
 *  0 heading
 *  1 Equally likely? YES → n(E)/n(S). NO → sum sand / given probabilities.
 *  2 (HIGH) Order matters? YES → nPr. NO → nCr. Count top & bottom the same way.
 *  3 "At least one"? → 1−P(none). Don't enumerate.
 *  4 Two events overlap → subtract P(A∩B). Three → singles−pairs+triple.
 *  5 (HIGH) Odds m:n → P=m/(m+n). Probability→odds = P:(1−P).
 *  6 Empirical = f/N; → classical as trials grow.
 *
 * Layout plan (single column, red margin-bar at x=170, text from x=200
 * anchor start; rows y=130/165/202/244/286/328 — identical geometry to
 * Sec42).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const ROWS = [130, 165, 202, 244, 286, 328];

function Row({
  on, delay, y, high, children,
}: { on: boolean; delay: number; y: number; high?: boolean; children: React.ReactNode }) {
  return (
    <>
      <Draw on={on} delay={delay} d={lineD(170, y - 15, 170, y + 5)} stroke={RED} sw={high ? 3.5 : 2.5} dur={0.3} />
      <Fade on={on} delay={delay + 0.2}>
        <T x={200} y={y} size={high ? 17 : 15} fill={high ? RED : INK} anchor="start" weight={high ? 800 : 600}>
          {children}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch14Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the one-pager: which tool, when — the whole chapter", "ek-page: kaunsa tool, kab — poora chapter")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Cheat Sheet — which tool when (computing)", "Cheat Sheet — which tool when (computing)")}
        </T>
      </Fade>

      <Row on={beat >= 1} delay={dl(1, 0.2)} y={ROWS[0]}>
        {"Equally likely? YES → n(E)/n(S).  NO → sum the sand / given probabilities."}
      </Row>

      <Row on={beat >= 2} delay={dl(2, 0.2)} y={ROWS[1]} high>
        {"Order matters? YES → nPr.  NO → nCr.  Count top & bottom the same way."}
      </Row>

      <Row on={beat >= 3} delay={dl(3, 0.2)} y={ROWS[2]}>
        {'"At least one"? → 1 − P(none).  Don\'t enumerate.'}
      </Row>

      <Row on={beat >= 4} delay={dl(4, 0.2)} y={ROWS[3]}>
        {"Two events overlap → subtract P(A∩B).  Three → singles − pairs + triple."}
      </Row>

      <Row on={beat >= 5} delay={dl(5, 0.2)} y={ROWS[4]} high>
        {"Odds m:n → P = m/(m+n).  Probability → odds = P:(1−P)."}
      </Row>

      <Row on={beat >= 6} delay={dl(6, 0.2)} y={ROWS[5]}>
        {"Empirical = f/N;  → classical as trials grow."}
      </Row>
    </Scene>
  );
}

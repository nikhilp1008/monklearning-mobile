/**
 * M11 Ch14 · Section 42 — "Cheat sheet — quick recall (foundations)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: cheat_sheet — first of two.
 * Unlike Sec40/41 (type "formula", boxed-card grid), this section's own
 * board_content is entirely type "note" style "red-margin" — a rapid
 * list of one-line reminders, not multi-line formulas. Rendered as a
 * dense stacked list with a drawn red margin-bar per line (literally
 * matching the data's own "red-margin" style name) instead of full
 * boxed cards, since that's the true "quick recall" register. No
 * segments_english/hinglish in Supabase (expected); text from
 * board_content directly.
 *
 * Beats (board_reveal_at_english [0,9.3,20.48,28.5,38.66,48.98,61.27]):
 *  0 heading
 *  1 Event = subset of S. Outcome = one point. "or"→∪, "and"→∩.
 *  2 n outcomes → n simple events, 2ⁿ total events.
 *  3 ME: A∩B=∅. Exhaustive: ∪=S. Partition = both.
 *  4 (HIGH) Axioms in one breath: P≥0; P(S)=1; disjoint add.
 *  5 Complement P(A′)=1−P(A) — first move on "at least" and "not."
 *  6 (HIGH) Sanity: every probability must land in [0,1]. Outside → error.
 *
 * Layout plan (single column, red margin-bar at x=170, text from x=200
 * anchor start; rows y=130/165/200/240/280/320):
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

export default function M11Ch14Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the one-pager: foundations, at a glance", "ek-page: foundations, ek nazar mein")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Cheat Sheet — quick recall (foundations)", "Cheat Sheet — quick recall (foundations)")}
        </T>
      </Fade>

      <Row on={beat >= 1} delay={dl(1, 0.2)} y={ROWS[0]}>
        {'Event = subset of S. Outcome = one point.  "or" → ∪,  "and" → ∩.'}
      </Row>

      <Row on={beat >= 2} delay={dl(2, 0.2)} y={ROWS[1]}>
        {"n outcomes → n simple events,  2ⁿ total events."}
      </Row>

      <Row on={beat >= 3} delay={dl(3, 0.2)} y={ROWS[2]}>
        {"ME: A∩B=∅.  Exhaustive: ⋃=S.  Partition = both."}
      </Row>

      <Row on={beat >= 4} delay={dl(4, 0.2)} y={ROWS[3]} high>
        {"Axioms in one breath: P≥0;  P(S)=1;  disjoint add."}
      </Row>

      <Row on={beat >= 5} delay={dl(5, 0.2)} y={ROWS[4]}>
        {'Complement P(A′)=1−P(A) — first move on "at least" and "not."'}
      </Row>

      <Row on={beat >= 6} delay={dl(6, 0.2)} y={ROWS[5]} high>
        {"Sanity: every probability lands in [0, 1]. Outside → error."}
      </Row>
    </Scene>
  );
}

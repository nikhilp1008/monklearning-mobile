/**
 * M11 Ch09 · Section 60 — "Formula Recap I: Points, Slope, Equations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — OPENS the final "Chapter Wrap-Up" subtopic (secs 60-62, the
 * closing sections of the whole 62-section chapter). A "notes page" moment per the
 * formula_recap/cheat_sheet contract: every fact here was already taught+verified in its own
 * earlier section (secs 1-4 coordinate foundations / Sec5 toolkit, secs 6-12 slope+angles /
 * Sec13 toolkit, secs 14-21 equations of a line / Sec22 toolkit) — nothing new is taught.
 *
 * CONVENTION: board_content item[0] (heading, reveal_at=0) is the always-on title (Fade
 * on={true}, no beat gating) — this chapter's OWN established convention (Sec1/5/13/22, all
 * 59 already-authored sections), NOT M11Ch04Sec65's older "hardcoded title + beat-0-subtitle"
 * pattern. items[1..8] gate at beat>=1..beat>=8 (9 board_content entries total, reveals[0..8]).
 * reveals_english = [0.0, 7.68, 13.48, 23.55, 32.77, 43.52, 49.83, 56.75, 65.71]; reveals_hinglish
 * = [0.0, 7.34, 11.86, 20.82, 27.48, 37.89, 43.69, 49.66, 58.97].
 *
 * LAYOUT GEOMETRY: reuses M11Ch04Sec65's proven 2-col × 3-row card grid + full-width 7th card
 * structure (COL=[60,560], CARD_W=460, cards 1-6 in a 2×3 grid, card 7 full-width at the
 * bottom of the grid) — the right structural solution for 7 formula cards on one board, per
 * task instruction. Row HEIGHTS are NOT uniform like Ch04Sec65 (whose cards topped out at 2
 * lines): three of these cards need 3 stacked facts (cards 4 and 6, JSON's own multi-fact
 * bundling), so each row's height = whichever of its two cards needs more lines (row0 max 2,
 * row1 max 3, row2 max 3, row3/full-width max 2). This is the "adjust to fit this chapter's
 * own safe margins" instruction — uniform-112 does not fit 7 cards + a closing guardrail in
 * 566px of usable height (30-596), so per-row sizing is used instead.
 *
 * BEAT-GATING CONVENTION for the closing note (beat 8): per this chapter's OWN toolkit-section
 * precedent (Sec5 beat7, Sec13 beat7, Sec22 beat8, NOT Ch04Sec65's card-based closer), the
 * closing red-margin note is a genuine drawn red bar + bold red text pair, NOT a bordered card.
 *
 * EMPHASIS / COLOR: every one of the 7 formula JSON items here is emphasis:"normal" (unlike
 * Sec5/13/22, which each mix HIGH + normal items and render HIGH facts as an AMBER/CREAM Chip).
 * With nothing HIGH, all 7 cards get the SAME AMBER_DARK border + AMBER_DARK title + plain INK
 * fact text — "consistent coloring across the 7 cards" per task instruction, mirroring how
 * Sec5/13/22 already render their own "normal" items (plain bold ink, no highlight). Only the
 * beat-8 closing note breaks from AMBER_DARK, using RED — the same red-margin guardrail color
 * every other toolkit section in this chapter reserves for its own closing note.
 *
 * ============================ NOTATION-CONSISTENCY AUDIT ============================
 * Every symbolic formula below is copied VERBATIM (byte-for-byte, subscripts included) from
 * its own source toolkit section — read directly from the files, not retyped by eye — with
 * two deliberate, documented exceptions:
 *  (1) Card 4 fact 1 merges Sec13's two separate beats ("m = tanθ (θ ≠ 90°)" and
 *      "m = (y2 - y1)/(x2 - x1) (x1 ≠ x2)") into one bundled fact, per this section's own JSON
 *      bundling. The core symbols/spacing are unchanged; the two parenthetical validity
 *      caveats ("θ ≠ 90°", "x1 ≠ x2") are dropped to fit one recap line — a secondary caveat,
 *      not the notation itself, and this is a restated "notes page", not new teaching.
 *  (2) Card 7 fact 2 appends Sec22's general-form slope note ("m = -A/B", the first clause of
 *      its 3-clause guardrail sentence) onto the General-form equation, per this section's own
 *      JSON bundling ("Ax+By+C=0, m=-A/B" as one fact). Sec22's own "-C/A"/"-C/B" clauses
 *      (intercepts a, b) are dropped — out of scope for this recap (a/b already appear via the
 *      separate intercept-form card), core spacing/symbol style otherwise unchanged.
 * A NOTABLE FINDING, not a defect: Sec5 and Sec13 do NOT share one subscript convention with
 * each other — Sec5 (points/section/area) uses real Unicode subscript digits (x₂, x₁, y₂, y₁,
 * x₁₂₃…), Sec13 (slope/angle) uses plain digits (m1, m2, x2, x1, y2, y1), and Sec22 mixes both
 * (Unicode subscripts on point-slope's y₁/x₁, plain digits nowhere in its own recap). Since the
 * consistency contract is "notation-consistent WITH ITS OWN SOURCE toolkit section" (not a
 * forced uniform style across all 7 cards), each card below keeps ITS source's own subscript
 * style rather than normalizing all seven to one convention — cards 1-3 (Sec5-sourced) use
 * Unicode subscripts, cards 4-5 (Sec13-sourced) use plain digits, cards 6-7 (Sec22-sourced) use
 * Unicode subscripts on point-slope only, matching Sec22 exactly. Verified card-by-card:
 *   Card1 <- Sec5 L88  "AB = √((x₂ - x₁)² + (y₂ - y₁)²)"                          [identical]
 *   Card2 <- Sec5 L95  "Internal: ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))"          [identical]
 *          <- Sec5 L116 "Centroid: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)"                  [identical]
 *   Card3 <- Sec5 L123 "Δ = 1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"              [identical]
 *          <- Sec5 L131 "Collinear ⇔ Δ = 0."                                      [identical]
 *   Card4 <- Sec13 L110+L117 merged, caveats dropped (documented exception 1 above)
 *          <- Sec13 L124 "Parallel: m1 = m2"                                      [identical]
 *          <- Sec13 L131 "Perpendicular: m1·m2 = -1"                              [identical]
 *   Card5 <- Sec13 L138 "tanθ = |(m2 - m1)/(1 + m1·m2)|"                          [identical]
 *   Card6 <- Sec22 L126 "Point-slope: y - y₁ = m(x - x₁)"                         [identical]
 *          <- Sec22 L147 "Intercept: x/a + y/b = 1"                               [identical]
 *          <- Sec22 L140 "Slope-intercept: y = mx + c"                            [identical]
 *   Card7 <- Sec22 L154 "Normal: x cosω + y sinω = p (p ≥ 0)"                     [identical]
 *          <- Sec22 L161+L172(clause1) merged (documented exception 2 above)
 * Minus signs are plain hyphens throughout (house convention). "⇔"/"⇒"/"·"/"√"/"Δ"/"ω"/"θ" are
 * all pre-cleared by SCENE_AUTHORING_MATHS.md's font-glyph audits (chapters 1,2,3,9) — safe to
 * use as-is. Formula text is shared across both t() branches (byte-identical, per the maths
 * notation contract that symbolic formulas are language-agnostic); only the title, card titles
 * and the beat-8 closing prose run through t().
 * ======================================================================================
 *
 * WIDTH CHECK (0.50×size×chars, Anek non-script; over-estimate) — every card is CARD_W=460,
 * text starts at cardX+20, so available width = 420 (cards 1-6) / 920 (card 7, w=960):
 *   Card1 fact  "AB = √((x₂ - x₁)² + (y₂ - y₁)²)"                31ch@13 -> 201.5px  (<420 OK)
 *   Card2 fact1 "Internal: ((mx₂ + nx₁)/(m+n)...ny₁)/(m+n))"     48ch@13 -> 312.0px  (<420 OK)
 *   Card2 fact2 "Centroid: ((x₁+x₂+x₃)/3...y₁+y₂+y₃)/3)"         46ch@13 -> 299.0px  (<420 OK)
 *   Card3 fact1 "Δ = 1/2 |x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|"        49ch@13 -> 318.5px  (<420 OK)
 *   Card3 fact2 "Collinear ⇔ Δ = 0."                             18ch@13 -> 117.0px  (<420 OK)
 *   Card4 fact1 "m = tanθ = (y2 - y1)/(x2 - x1)"                 31ch@13 -> 201.5px  (<420 OK)
 *   Card4 fact2 "Parallel: m1 = m2"                               17ch@13 -> 110.5px  (<420 OK)
 *   Card4 fact3 "Perpendicular: m1·m2 = -1"                       25ch@13 -> 162.5px  (<420 OK)
 *   Card5 fact  "tanθ = |(m2 - m1)/(1 + m1·m2)|"                  30ch@13 -> 195.0px  (<420 OK)
 *   Card6 fact1 "Point-slope: y - y₁ = m(x - x₁)"                 31ch@13 -> 201.5px  (<420 OK)
 *   Card6 fact2 "Intercept: x/a + y/b = 1"                        24ch@13 -> 156.0px  (<420 OK)
 *   Card6 fact3 "Slope-intercept: y = mx + c"                     27ch@13 -> 175.5px  (<420 OK)
 *   Card7 fact1 "Normal: x cosω + y sinω = p (p ≥ 0)"             35ch@13 -> 227.5px  (<920 OK)
 *   Card7 fact2 "General: Ax + By + C = 0,   m = -A/B"            37ch@13 -> 240.5px  (<920 OK)
 * Widest is Card3 fact1 at 318.5px, well clear of the 420px column budget. No 2-line wrap needed.
 *
 * LAYOUT PLAN (Anek text box: top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size,
 * bottom=y+0.5×size; card-internal offsets TITLE_DY=20, FACT_DY=[42,64,86] from card top y):
 *  title(always-on) | T mid script size22 RED | x540 y62   | box y33.4..73.0
 *  ROW0 y=98 h=80  | Card1 x60  w460 (1 fact) | Card2 x560 w460 (2 facts)   | bottom 178
 *  ROW1 y=190 h=102| Card3 x60  w460 (2 facts)| Card4 x560 w460 (3 facts)   | bottom 292
 *  ROW2 y=304 h=102| Card5 x60  w460 (1 fact) | Card6 x560 w460 (3 facts)   | bottom 406
 *  ROW3 y=418 h=80 | Card7 x60  w960 full-width (2 facts)                   | bottom 498
 *  guardrail  | Draw bar x434 y522..576 (RED sw4) | T start size15 line1 y544 / line2 y568
 * Vertical gaps: title->ROW0 25px, ROW0->ROW1 12px, ROW1->ROW2 12px, ROW2->ROW3 12px,
 * ROW3->guardrail-bar 24px (group-clearance floor met at every seam); guardrail line2 box
 * bottom 572.65, 23.35px of unused margin above the y596 safe floor. Within every card,
 * title-box-bottom to fact1-box-top ~8.1px and fact-to-fact ~7.8px (tighter than the 14px
 * general-text guideline but the SAME order of magnitude as Ch04Sec65's own proven ~10px
 * card-internal gaps — eye-checked below via FORCE_SHOTS per task instruction, since this is
 * the densest board in the chapter). Card-bottom internal clearance (last fact box bottom to
 * card rect bottom) is ~12px on every card, clearing the 10px text-vs-stroke floor.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const COL = [60, 560];
const CARD_W = 460;
const ROW_Y = [98, 190, 304, 418];
const ROW_H = [80, 102, 102, 80];
const TITLE_DY = 20;
const FACT_DY = [42, 64, 86];

function Card({
  on,
  delay,
  x,
  y,
  w = CARD_W,
  h,
  title,
  facts,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w?: number;
  h: number;
  title: string;
  facts: string[];
}) {
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={w} height={h} rx={14} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 20} y={y + TITLE_DY} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          {title}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 0.5}>
        {facts.map((f, i) => (
          <T key={i} x={x + 20} y={y + FACT_DY[i]} size={13} fill={INK} anchor="start">
            {f}
          </T>
        ))}
      </Fade>
    </>
  );
}

export default function M11Ch09Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Formula Recap I: Points, Slope, Equations", "Formula Recap I: Points, Slope aur Equations")}
        </T>
      </Fade>

      {/* beat 1 — distance between two points (solo) */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={COL[0]}
        y={ROW_Y[0]}
        h={ROW_H[0]}
        title={t("Distance Formula", "Doori ka Formula")}
        facts={["AB = √((x₂ - x₁)² + (y₂ - y₁)²)"]}
      />

      {/* beat 2 — section formula (internal) + centroid (bundle) */}
      <Card
        on={beat >= 2}
        delay={dl(2, 0)}
        x={COL[1]}
        y={ROW_Y[0]}
        h={ROW_H[0]}
        title={t("Section Formula & Centroid", "Section Formula aur Centroid")}
        facts={[
          "Internal: ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))",
          "Centroid: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
        ]}
      />

      {/* beat 3 — area + collinearity (bundle) */}
      <Card
        on={beat >= 3}
        delay={dl(3, 0)}
        x={COL[0]}
        y={ROW_Y[1]}
        h={ROW_H[1]}
        title={t("Area & Collinearity", "Area aur Collinearity")}
        facts={["Δ = 1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|", "Collinear ⇔ Δ = 0."]}
      />

      {/* beat 4 — slope, parallel, perpendicular (bundle) */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0)}
        x={COL[1]}
        y={ROW_Y[1]}
        h={ROW_H[1]}
        title={t("Slope, Parallel & Perpendicular", "Slope, Parallel aur Perpendicular")}
        facts={["m = tanθ = (y2 - y1)/(x2 - x1)", "Parallel: m1 = m2", "Perpendicular: m1·m2 = -1"]}
      />

      {/* beat 5 — angle between two lines (solo) */}
      <Card
        on={beat >= 5}
        delay={dl(5, 0)}
        x={COL[0]}
        y={ROW_Y[2]}
        h={ROW_H[2]}
        title={t("Angle Between Two Lines", "Do Lines ke Beech Angle")}
        facts={["tanθ = |(m2 - m1)/(1 + m1·m2)|"]}
      />

      {/* beat 6 — three equation forms (bundle) */}
      <Card
        on={beat >= 6}
        delay={dl(6, 0)}
        x={COL[1]}
        y={ROW_Y[2]}
        h={ROW_H[2]}
        title={t("Equation Forms I", "Equation Forms I")}
        facts={[
          "Point-slope: y - y₁ = m(x - x₁)",
          "Intercept: x/a + y/b = 1",
          "Slope-intercept: y = mx + c",
        ]}
      />

      {/* beat 7 — normal form + general form/slope (bundle, full width) */}
      <Card
        on={beat >= 7}
        delay={dl(7, 0)}
        x={60}
        y={ROW_Y[3]}
        w={960}
        h={ROW_H[3]}
        title={t("Normal & General Form", "Normal aur General Form")}
        facts={["Normal: x cosω + y sinω = p (p ≥ 0)", "General: Ax + By + C = 0,   m = -A/B"]}
      />

      {/* beat 8 — closing red-margin note (guardrail, NOT a card) */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 434 522 L 434 576" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={450} y={544} size={15} fill={RED} anchor="start" weight={700}>
          {t("Your complete toolkit through Equations of a Line —", "Equations of a Line tak ka aapka poora toolkit —")}
        </T>
        <T x={450} y={568} size={15} fill={RED} anchor="start" weight={700}>
          {t("restated, not re-taught.", "dobara nahi sikhaya, sirf yaad dilaya gaya.")}
        </T>
      </Fade>
    </Scene>
  );
}

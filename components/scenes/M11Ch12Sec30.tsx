/**
 * M11 Ch12 · Section 30 — "Infinity and special-case facts"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — THE master reference card for subtopic 5 (Limits at Infinity &
 * Special Cases): powers-at-infinity, the rational-function degree rule (3-case piecewise
 * result), vertical-asymptote one-sided facts, greatest-integer facts, modulus/signum facts,
 * and the indeterminate-forms checklist. Later worked-example sections (Sec31-33) depend on
 * this table. Closest analogs: Sec18/Sec24 (the two prior master-reference-table "formulas"
 * sections, same dense-grid challenge) — this file copies their card geometry (roundRectD row +
 * TAG_X caps label + CONTENT_X formula line, gap14 between rows) verbatim. Sec28 opened this
 * subtopic with the rational-limit worked example and the greatest-integer staircase diagram;
 * Sec29 gave the three reusable PROCEDURES. This section is the facts these two now compress
 * into a "notes photo".
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  lim(x→∞) 1/x^k = 0, lim(x→∞) x^k = ∞ for k>0 ✓ (standard power-at-infinity facts).
 *  Degree rule: lim(x→∞) (a_m x^m+...)/(b_n x^n+...) — m<n ⇒ 0 (denominator dominates); m=n ⇒
 *   a_m/b_n (ratio of leading coefficients, matches Sec28's own 3x²+5 / 6x²−x → 3/6=1/2 example);
 *   m>n ⇒ ±∞ (numerator dominates, sign from the leading coefficients' signs) ✓.
 *  lim(x→0) 1/x² = +∞ (x² > 0 both sides) ✓. lim(x→0⁺) 1/x = +∞, lim(x→0⁻) 1/x = −∞ (matches
 *   Sec29's own "1/x → +∞ right of 0, −∞ left of 0" caveat) ✓.
 *  Greatest integer: lim(x→n⁻)[x] = n−1, lim(x→n⁺)[x] = n (matches Sec29's own "just below n:
 *   [x]=n−1 / just above n: [x]=n") ⇒ two-sided limit DNE since they disagree ✓.
 *  lim(x→a)|x| = |a| (|x| continuous everywhere) ✓. |x|/x = sign(x) for x≠0 ⇒ RHL=+1, LHL=−1
 *   at x=0 ⇒ limit does not exist ✓.
 *  Indeterminate ∞-forms: ∞/∞, ∞−∞, 0×∞, 0/0 — all four are the standard indeterminate list ✓.
 *  Closing reflex matches Sec29's own Procedure A (divide by highest power) and Procedure B
 *  (rationalise the surd) verbatim ✓.
 *
 * board_reveal_at_english  = [0.0, 8.02, 18.35, 37.12, 54.1, 74.33, 93.27, 109.31] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 6.91, 16.81, 31.32, 44.12, 60.42, 76.54, 93.01].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "Infinity and special-case facts"
 *  1 | row1 seq2 (HIGH, green)      — powers at infinity: 1/x^k → 0, x^k → ∞ (k>0)
 *  2 | row2 seq3 (HIGH, green, TALL)— degree rule, 3-case mini-table (piecewise substitute)
 *  3 | row3 seq4 (normal, amber)   — vertical-asymptote one-sided facts, 3 facts in a row
 *  4 | row4 seq5 (HIGH, green, thick) — greatest-integer facts ⇒ DNE at an integer
 *  5 | row5 seq6 (normal, amber)   — modulus/signum facts
 *  6 | row6 seq7 (normal, unboxed) — indeterminate ∞-forms checklist
 *  7 | row7 seq8 (RED margin, HIGH)— closing reflex stamp, callback to Sec29's own procedures
 *
 * Shared card geometry (rows1-5): BOX_X=54, BOX_W=972 → box spans x54..1026, inside safe
 * x[36,1044] even at the thickest sw=3.2 (+1.6→1027.6<1044; 54-1.6=52.4>36 — same math as
 * Sec18/24). TAG_X=74 (caps label, size12/w800), CONTENT_X=205 (first formula/Limit column) —
 * both reused across every row so the card reads as one grid. Formulas are language-agnostic
 * (byte-identical EN/HI per SCENE_AUTHORING_MATHS convention) — only the title, row6's checklist
 * label, and row7's banner differ per language.
 *
 * A Limit's own bounding box (per math-kit's <Limit>: "lim" at the given size, condition at
 * size×0.5 beneath) is dominated by the 3-char "lim" line (width ≈ 1.5×size) whenever the
 * condition string is ≤6 chars (all of ours are 5-6 chars: "x → ∞", "x → n⁻", "x → 0⁺", ...) —
 * condition width = 0.25×size×chars ≤ 1.5×size in every case here, so every Limit's box is
 * simply [x, x+1.5×size] regardless of which line is checked.
 *
 * Box-width arithmetic (Anek sans width ≈ 0.50×size×chars, over-estimated per SCENE_AUTHORING
 * Step 3 — measure real chars, don't guess):
 *  title (script size24): EN "Infinity and special-case facts" 32ch → 0.55×24×32=422.4w,
 *   half211.2, centered x540 → x328.8..751.2 (safe). HI "Infinity aur special-case facts" 31ch
 *   (shorter) → x335.4..744.6 (safe).
 *  row1 (y90-142,h52, content baseline121): Limit1(x205,size16)→box205..229. Text1 "1/x^k = 0"
 *   (9ch@18=81) x245..326 (gap16 from Limit1). Limit2(x380,size16)→box380..404. Text2 "x^k = ∞"
 *   (7ch@18=63) x420..483 (gap16). Note "(k > 0)" (7ch@14=49, MUTED) x520..569 (gap37). Tag
 *   "POWERS" (6ch@12=36) x74..110, clear of CONTENT_X205 (gap95).
 *  row2 (y156-300,h144, TALL — header + 3-row mini-table): header baseline182. Limit(x205,
 *   size17)→box205..230.5. Expression "(a_m·x^m + ...) / (b_n·x^n + ...)" (33ch@18=297)
 *   x245..542 (gap15 from Limit). "=" (mid,size20) x565. Tag "DEGREE RULE" (11ch@12=66) x74..140,
 *   clear of CONTENT_X205 (gap65).
 *   Mini-table (the \begin{cases} substitute — no brace primitive exists, per notation rules
 *   this renders as a real 2-column×3-row grid instead): outer rect + 2 horizontal + 1 vertical
 *   divider in ONE Draw path, x205..605 (COL1 "condition" x205..375 w170, COL2 "result" x375..605
 *   w230), y205..289 (3 rows × h28). Row baselines 224/252/280 (row_top+19, empirical center-fit
 *   for size15 cells in a 28px row). Cell text: "m < n"/"0", "m = n"/"a_m/b_n", "m > n"/"±∞" —
 *   all ≤9ch@15≤67.5w, comfortably inside their 170w/230w columns. Table right edge605 <<
 *   box interior edge1016.
 *  row3 (y314-366,h52, content baseline344): Limit1(x205,size16)→box205..229. Text1 "1/x² = +∞"
 *   (9ch@18=81) x245..326 (gap16). Limit2(x390,size15)→box390..412.5. Text2 "1/x = +∞" (8ch@18=72)
 *   x450..522 (gap37.5). Limit3(x580,size15)→box580..602.5. Text3 "1/x = −∞" (8ch@18=72)
 *   x640..712 (gap37.5). Tag "ASYMPTOTES" (10ch@12=60) x74..134.
 *  row4 (y380-436,h56, content baseline413, the HIGH/thick row): Limit1(x205,size17)→box
 *   205..230.5. Text1 "[x] = n−1" (9ch@19=85.5) x272..357.5 (gap41.5). Limit2(x395,size16)→
 *   box395..419. Text2 "[x] = n" (7ch@19=66.5) x458..524.5 (gap39). "⇒" (mid,size22) x555
 *   (gap25 from Text2, gap19.5 to Limit3). Limit3(x580,size16)→box580..604. Text3a "[x] ="
 *   (5ch@19=47.5, INK) x635..682.5 (gap31). Text3b "DNE" (3ch@19≈28.5, RED, w800) x698..~726.5
 *   (gap15.5). Tag "GREATEST INTEGER" (17ch@12=102) x74..176, clear of CONTENT_X205 (gap29).
 *  row5 (y450-502,h52, content baseline480): Limit1(x205,size16)→box205..229. Text1 "|x| = |a|"
 *   (9ch@18=81) x260..341 (gap31). Limit2(x380,size16)→box380..404. Text2 "|x|/x does not exist"
 *   (20ch@17=170) x435..605 (gap31). Tag "MODULUS · SIGNUM" (17ch@12=102) x74..176.
 *  row6 (unboxed, y~514-531): dash accent x40..58 y526. Text baseline526, x66.., size16: EN
 *   "Indeterminate ∞-forms: ∞/∞, ∞−∞, 0×∞, 0/0" (41ch@16=328) x66..394. HI (52ch@16=416, longer)
 *   x66..482. Both << safe x1044.
 *  row7 (red margin, bar x60 y545..581, text x76): EN "For x→∞ rationals, divide by the highest
 *   power; for surds, rationalise." (71ch@18=639) x76..715. HI "x→∞ rationals ke liye highest
 *   power se divide; surds ke liye rationalise karo." (78ch@18=702, longer) x76..778. Both <<
 *   safe x1044.
 *
 * Row heights & vertical positions (Anek sans top=y−0.78×size, bottom=y+0.31×size; balanced
 * clearance target ≥10px, tight-but-eye-clean ~9-10px accepted where dense, matching Sec18/24
 * precedent):
 *  title            y58 (band 30-80, script, always-on)
 *  row1  y90..142   (h52)  baseline121 — Limit top108.5(clear12.5), Limit-cond bottom133.4
 *                            (clear8.6)
 *  gap14
 *  row2  y156..300  (h144) header baseline182 — Limit-cond bottom195.2(clear from table top
 *                            205 = 9.8); table y205..289 (3×h28); box-bottom clear = 300-289=11
 *  gap14
 *  row3  y314..366  (h52)  baseline344 — Limit-cond bottom(size15 cond) clear ~9-10 from366
 *  gap14
 *  row4  y380..436  (h56)  baseline413 — Limit-cond bottom426.2(clear9.8 from436)
 *  gap14
 *  row5  y450..502  (h52)  baseline480 — Limit-cond bottom492.4(clear9.6 from502)
 *  gap14
 *  row6  (unboxed)  dash+text baseline526 (clear from row5 box-bottom502 = 11.5 to text top)
 *  gap14
 *  row7  bar y545..581 (clear from row6 text-bottom530.96 = 14.0) — text baseline567
 * Ends y581 (bar) / 572.6 (text), safe bottom596 → 15px+ spare. Every row's box/bar/grid IS
 * the beat's Draw action (row borders + the mini-table's grid lines count, per the brief).
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
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { Limit, roundRectD } from "./math-kit";

const BOX_X = 54;
const BOX_W = 972;
const TAG_X = 74;
const CONTENT_X = 205;

export default function M11Ch12Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Infinity and special-case facts", "Infinity aur special-case facts")}
        </T>
      </Fade>

      {/* beat 1 — row1 seq2: powers at infinity, HIGH (green) */}
      <Draw on={beat >= 1} d={roundRectD(BOX_X, 90, BOX_W, 52, 14)} stroke={GREEN} sw={2.6} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={TAG_X} y={121} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          POWERS
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.6)} x={CONTENT_X} y={121} size={16} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={245} y={121} size={18} fill={INK} anchor="start" weight={700}>
          {"1/x^k = 0"}
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 1.3)} x={380} y={121} size={16} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={420} y={121} size={18} fill={INK} anchor="start" weight={700}>
          {"x^k = ∞"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={520} y={121} size={14} fill={MUTED} anchor="start">
          {"(k > 0)"}
        </T>
      </Fade>

      {/* beat 2 — row2 seq3: degree rule, HIGH (green), TALL — 3-case mini-table */}
      <Draw on={beat >= 2} d={roundRectD(BOX_X, 156, BOX_W, 144, 14)} stroke={GREEN} sw={2.8} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={TAG_X} y={182} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          DEGREE RULE
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.6)} x={CONTENT_X} y={182} size={17} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={245} y={182} size={18} fill={INK} anchor="start" weight={700}>
          {"(a_m·x^m + ...) / (b_n·x^n + ...)"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={565} y={182} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        d="M205 205 L605 205 L605 289 L205 289 L205 205 M205 233 L605 233 M205 261 L605 261 M375 205 L375 289"
        stroke={GREEN_DARK}
        sw={1.8}
        delay={dl(2, 1.6)}
        dur={1.1}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={290} y={224} size={15} fill={INK} anchor="middle" weight={700}>
          {"m < n"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={490} y={224} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={290} y={252} size={15} fill={INK} anchor="middle" weight={700}>
          {"m = n"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={490} y={252} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"a_m/b_n"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={290} y={280} size={15} fill={INK} anchor="middle" weight={700}>
          {"m > n"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={490} y={280} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"±∞"}
        </T>
      </Fade>

      {/* beat 3 — row3 seq4: vertical-asymptote one-sided facts, normal (amber) */}
      <Draw on={beat >= 3} d={roundRectD(BOX_X, 314, BOX_W, 52, 14)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={TAG_X} y={344} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          ASYMPTOTES
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.6)} x={CONTENT_X} y={344} size={16} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={245} y={344} size={18} fill={INK} anchor="start" weight={700}>
          {"1/x² = +∞"}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 1.3)} x={390} y={344} size={15} condition="x → 0⁺" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={450} y={344} size={18} fill={INK} anchor="start" weight={700}>
          {"1/x = +∞"}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 2.0)} x={580} y={344} size={15} condition="x → 0⁻" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={640} y={344} size={18} fill={INK} anchor="start" weight={700}>
          {"1/x = −∞"}
        </T>
      </Fade>

      {/* beat 4 — row4 seq5: greatest-integer facts, HIGH (green, thick) */}
      <Draw on={beat >= 4} d={roundRectD(BOX_X, 380, BOX_W, 56, 14)} stroke={GREEN} sw={3.2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={TAG_X} y={413} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          GREATEST INTEGER
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.6)} x={CONTENT_X} y={413} size={17} condition="x → n⁻" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={272} y={413} size={19} fill={INK} anchor="start" weight={700}>
          {"[x] = n−1"}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 1.3)} x={395} y={413} size={16} condition="x → n⁺" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={458} y={413} size={19} fill={INK} anchor="start" weight={700}>
          {"[x] = n"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={555} y={413} size={22} fill={INK} anchor="middle">
          ⇒
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 2.3)} x={580} y={413} size={16} condition="x → n" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={635} y={413} size={19} fill={INK} anchor="start" weight={700}>
          {"[x] ="}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={698} y={413} size={19} fill={RED} anchor="start" weight={800}>
          DNE
        </T>
      </Fade>

      {/* beat 5 — row5 seq6: modulus/signum facts, normal (amber) */}
      <Draw on={beat >= 5} d={roundRectD(BOX_X, 450, BOX_W, 52, 14)} stroke={AMBER_DARK} sw={2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={TAG_X} y={480} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"MODULUS · SIGNUM"}
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 0.6)} x={CONTENT_X} y={480} size={16} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={260} y={480} size={18} fill={INK} anchor="start" weight={700}>
          {"|x| = |a|"}
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 1.3)} x={380} y={480} size={16} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={435} y={480} size={17} fill={INK} anchor="start" weight={700}>
          {"|x|/x does not exist"}
        </T>
      </Fade>

      {/* beat 6 — row6 seq7: indeterminate ∞-forms checklist, normal, unboxed */}
      <Draw on={beat >= 6} d="M40 526 L58 526" stroke={AMBER_DARK} sw={3} delay={dl(6, 0)} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={66} y={526} size={16} fill={INK} anchor="start" weight={600}>
          {t(
            "Indeterminate ∞-forms: ∞/∞, ∞−∞, 0×∞, 0/0",
            "Indeterminate ∞-forms yeh hain: ∞/∞, ∞−∞, 0×∞, 0/0"
          )}
        </T>
      </Fade>

      {/* beat 7 — row7 seq8: closing reflex stamp, RED margin, HIGH (callback to Sec29) */}
      <Draw on={beat >= 7} d="M60 545 L60 581" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={567} size={18} fill={RED} anchor="start" weight={800}>
          {t(
            "For x→∞ rationals, divide by the highest power; for surds, rationalise.",
            "x→∞ rationals ke liye highest power se divide; surds ke liye rationalise karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

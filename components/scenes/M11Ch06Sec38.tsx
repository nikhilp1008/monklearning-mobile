/**
 * M11 Ch06 · Section 38 — "The applications formula board"
 * FOURTH section of Subtopic 5 "Counting Applications & Advanced Tools"
 * (section 4 of 9). This is a MEGA formula-recap+extension board — NINE
 * formulas, several recapping Sec35-37, several brand new — stated cleanly
 * without deriving anything (full proofs for the new ones land in Sec39/40).
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md ("formulas" flow: build the identity live,
 * assemble term by term where practical — density-managed the same way
 * Sec29 handled its own 8-formula/3-group recap board).
 *
 * NOTATION: nCr symbolic throughout → plain text "nC2"/"aC2" etc, no
 * super/subscript attempt on letter variables (per the maths spec's
 * \binom rule). "∏" (product) is AVOIDED — no scene in this codebase uses
 * it and it is unaudited; instead every product is written the same way
 * Sec36/Sec29 already do it: concrete adjacent factors + "⋯"
 * (e.g. "(a₁+1)(a₂+1)⋯", reused verbatim from Sec36). Σ is used bare/
 * prefix-style (no stacked k≥1 bounds — flattened per the maths spec's
 * "no true 2-D math" rule; the k-range is carried by a plain-text
 * sub-caption instead). Subscripts Dₙ, Dₙ₋₁, Dₙ₋₂, Eₚ, pᵢ, aᵢ are plain
 * Unicode subscript letters/digits (ₙ ₋ ₁ ₂ ₚ ᵢ) — all already proven safe
 * elsewhere in this codebase (Sec37's Dₙ/Eₚ, Ch01Sec35/C11Ch02Sec9's aᵢ,
 * P12Ch02Sec8/Ch06Sec49's ₋). Fractions are flattened inline (a/b) per the
 * maths spec's Chapter-6 convention, matching Sec36/Sec37's own divisor and
 * Legendre formulas.
 *
 * GROUPING (mirrors Sec29's 3-group density pattern):
 *  Group A = geometry (beats 1-3): lines/triangles/collinear recap (Sec35),
 *    diagonals of a convex n-gon (NEW), rectangles from a grid (NEW).
 *  Group B = number theory (beats 4-5): divisor count (recap Sec36) + sum
 *    of divisors (NEW) as one HIGH hero card, sum of all numbers formed
 *    from n distinct digits (NEW).
 *  Group C = advanced counting (beats 6-8): derangements closed form
 *    (recap Sec37) + a new recursion, as one HIGH hero card; Legendre's
 *    formula (recap Sec37) + trailing-zeros application (NEW); rank of a
 *    word (NEW, red-margin guardrail, final).
 * Brand-new formulas get extra visual weight vs pure recaps: bigger font +
 * GREEN (landed-formula) colour + (for the two HIGH items) an amber hero
 * box, plus two small reference icons (diagonalled polygon, grid rectangle)
 * for the two purely-geometric new formulas — matching Sec29's "not every
 * formula needs a diagram, but the standout ones get a tiny one" precedent.
 *
 * Beats (board_reveal_at_english [0,10.15,25.69,36.1,47.87,64.26,78.42,
 * 90.45,104.19], hinglish [0,8.79,24.32,34.47,46.51,60.16,72.19,83.29,
 * 94.04]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  1 recap: lines=nC2/triangles=nC3 baseline + m-collinear correction
 *  2 NEW: diagonals of convex n-gon = nC2−n = n(n-3)/2, tiny pentagon icon
 *  3 NEW: rectangles from a horiz./b vert. grid = aC2·bC2, tiny grid icon
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat 4..5, erased at beat>=6]
 *  4 (HIGH) divisors: count = (a₁+1)(a₂+1)⋯ (recap) + sum = one
 *    geometric-series factor per prime × ⋯ (NEW), boxed
 *  5 NEW: sum of all n-digit numbers formed from n distinct digits
 *  [group B erased at beat>=6]
 *  [group C: cOn = beat>=6, final, never erased]
 *  6 (HIGH) derangements: Dₙ closed form (recap) + Dₙ=(n−1)(Dₙ₋₁+Dₙ₋₂)
 *    recursion (NEW), boxed, verified against D₃..D₅
 *  7 NEW: Legendre's formula (recap) + trailing zeros of n! = E₅(n!)
 *  8 (red-margin guardrail, final, NEW) rank of a word formula
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *  always | title (script 24, red)                                | T mid  | x~260..820 y39..82
 *  b0 | title underline flourish (amber)                           | Draw  | x330..750 y94
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  b1 | label1 "Lines & triangles..." (14,muted)                    | T mid | x~351..729 y88..102
 *  b1 | label1 "Lines & triangles..." (14,muted) — pushed BELOW the title
 *     | underline (y94) to avoid the stroke slicing through the text        | T mid | x~351..729 y112..126
 *  b1 | formula1 "lines = nC2, triangles = nC3" (23,ink,w700)         | T mid | x~362..718 y146..171
 *  b1 | label2 "if m ... collinear:" (13,amber-dk)                    | T mid | x~416..664 y189..203
 *  b1 | formula2 "lines: nC2−mC2+1 triangles: nC3−mC3" (18,ink,w700)   | T mid | x~342..738 y222..242
 *  b2 | label "NEW — diagonals..." (14,amber-dk,w700)                  | T mid | x~418..662 y271..286
 *  b2 | pentagon icon edges (ink) + diagonals (amber)                    | Draw | x124..176 y298..350
 *  b2 | formula "nC2 − n = n(n-3)/2" (26,green,w800)                     | T mid | x~397..683 y309..337
 *  b2 | caption "(nC2 point-pairs minus the n sides)" (13,muted)          | T mid | x~394..686 y354..368
 *  b3 | label "NEW — rectangles..." (14,amber-dk,w700)                    | T mid | x~... y411..425
 *  b3 | grid icon (3h+3v lines, ink) + highlighted cell (amber)             | Draw/Fade | x888..990 y424..484
 *  b3 | formula "aC2 · bC2" (26,green,w800)                                 | T mid | x472..608 y449..477
 *  b3 | caption "(a horiz. + b vert. lines → choose 2 of each)" (13,muted)    | T mid | x~387..693 y494..508
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat 4..5, erased at beat>=6]
 *  b4 | hero box (700×225, amber)                                            | Draw | x190..890 y100..325
 *  b4 | label "Divisors of N=p₁^a₁ p₂^a₂⋯:" (15,ink,w600)                    | T mid | x~330..750 y126..144
 *  b4 | formula1 "number of divisors=(a₁+1)(a₂+1)⋯" (24,green,w800)            | T mid | x289..790 y164..189
 *  b4 | tag1 "(recap — Sec36)" (12,muted)                                       | T mid | x~466..614 y205..218
 *  b4 | formula2 "sum of divisors=[(pᵢ^(aᵢ+1)−1)/(pᵢ−1)]×⋯" (19,green,w800)        | T mid | x264..816 y243..264
 *  b4 | tag2 "(NEW — one geometric-series factor per prime...)" (12,amber-dk)      | T mid | x~354..726 y281..294
 *  b5 | label "Sum of all n-digit numbers..." (15,ink,w600)                        | T mid | x~356..724 y358..375
 *  b5 | formula "(Σd) · (n-1)! · (10ⁿ−1)/9" (26,green,w800)                          | T mid | x~352..728 y398..426
 *  b5 | caption "(Σd=sum of digits; each digit visits each place...)" (13,amber-dk)   | T mid | x~313..768 y445..459
 *  [group B erased at beat>=6]
 *  [group C: cOn = beat>=6, final]
 *  b6 | hero box (620×155, amber)                                                     | Draw | x230..850 y100..255
 *  b6 | label "Derangements Dₙ (recap-Sec37) + new recursion:" (15,ink,w600)             | T mid | x~345..735 y120..140
 *  b6 | formula1 "Dₙ = n! · Σ (−1)ⁱ/i!" (22,green,w800)                                    | T mid | x419..661 y160..185
 *  b6 | formula2 "Dₙ=(n−1)(Dₙ₋₁+Dₙ₋₂)" (24,green,w800)                                      | T mid | x380..700 y203..229
 *  b6 | caption "(faster for small n — e.g. D₅=4(D₄+D₃)=4(9+2)=44)" (12,amber-dk)             | T mid | x~366..714 y242..255
 *  b7 | label "Legendre's formula (recap-Sec37) + trailing zeros:" (15,ink,w600)               | T mid | x~319..761 y302..320
 *  b7 | formula1 "Eₚ(n!) = Σ ⌊n/pᵏ⌋" (23,green,w800)                                             | T mid | x427..653 y344..368
 *  b7 | sublabel "(sum over k=1,2,3,…)" (12,muted)                                                | T mid | x~462..618 y402..415
 *  b7 | formula2 "trailing zeros of n! = E₅(n!)" (21,green,w800)                                   | T mid | x357..723 y418..444
 *  b7 | caption "(n! always has more 2s than 5s ...)" (12,amber-dk)                                  | T mid | x~330..750 y450..464
 *  b8 (red-margin guardrail, final) | card (420×120, red)                                             | Draw | x330..750 y464..584
 *  b8 | circled "#" icon (r13, red)                                                                     | Fade | x527..553 y477..503
 *  b8 | line1 "Rank of a word:" (16,red,w800)                                                            | T mid | x~466..614 y518..538
 *  b8 | line2 "Σ(smaller unused letters) × (remaining)! + 1" (15,ink,w600)                                | T mid | x386..694 y551..567
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** Regular n-gon vertices around (cx,cy) at radius r — local device (same
 * reasoning as Sec35's local triD/Sec37's envelopeD: a one-off tiny
 * reference icon doesn't need a new math-kit primitive). */
function ngonPoints(cx: number, cy: number, r: number, n: number, rot = -Math.PI / 2) {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    const a = rot + (i * 2 * Math.PI) / n;
    pts.push({ x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) });
  }
  return pts;
}
/** Closed polygon outline through the vertices, as one Draw path. */
function polygonEdgesD(pts: { x: number; y: number }[]): string {
  return "M " + pts.map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" L ") + " Z";
}
/** Every non-adjacent vertex pair (the diagonals) as one Draw path — this
 * is literally the beat's own formula (n(n-3)/2 segments) drawn live. */
function polygonDiagonalsD(pts: { x: number; y: number }[]): string {
  const n = pts.length;
  const segs: string[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue; // that pair is the closing edge, not a diagonal
      segs.push(`M ${pts[i].x.toFixed(2)} ${pts[i].y.toFixed(2)} L ${pts[j].x.toFixed(2)} ${pts[j].y.toFixed(2)}`);
    }
  }
  return segs.join(" ");
}

const mult = (weight?: number) => (weight && weight >= 800 ? 0.58 : 0.5);

export default function M11Ch06Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 1-3: geometry — lines/triangles/collinear recap,
  // diagonals, rectangles) is fully erased once Group B (number theory,
  // beat 4) needs the whole board; Group B is in turn erased once Group C
  // (advanced counting, beat 6) lands for good. Each element's own `on` is
  // bounded to its beat window (rather than a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees the erasure too;
  // seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4 && beat < 6;
  const cOn = beat >= 6;

  // ---- beat 2: tiny pentagon-with-diagonals icon (n=5 → 5 diagonals,
  // literally n(n-3)/2 — the icon draws the formula it illustrates) ----
  const pentPts = ngonPoints(150, 324, 26, 5);
  const pentEdgesD = polygonEdgesD(pentPts);
  const pentDiagD = polygonDiagonalsD(pentPts);

  // ---- beat 3: tiny grid icon (3 horiz + 3 vert lines, one cell
  // highlighted = the rectangle picked by 2 horiz + 2 vert lines) ----
  const gridX = [888, 938, 988];
  const gridY = [424, 454, 484];
  const gridLinesD =
    gridY.map((y) => lineD(gridX[0], y, gridX[2], y)).join(" ") +
    " " +
    gridX.map((x) => lineD(x, gridY[0], x, gridY[2])).join(" ");
  const cellD = `M ${gridX[0]} ${gridY[0]} L ${gridX[1]} ${gridY[0]} L ${gridX[1]} ${gridY[1]} L ${gridX[0]} ${gridY[1]} Z`;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Every application formula, one board", "Har application formula, ek hi board par")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(330, 94, 750, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 (geometry) ===================== */}

      {/* beat 1 — recap: lines/triangles baseline + m-collinear correction */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={122} size={14} fill={MUTED} weight={600}>
          {t(
            "Lines & triangles from n points (recap — Sec35):",
            "n points ke lines & triangles (recap — Sec35 wala):"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={164} size={23} fill={INK} weight={700}>
          lines = nC2,   triangles = nC3
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.3)}>
        <T x={540} y={199} size={13} fill={AMBER_DARK} weight={600}>
          {t("if m of those points are collinear:", "agar unme se m points collinear hain:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <T x={540} y={236} size={18} fill={INK} weight={700}>
          lines: nC2 − mC2 + 1    triangles: nC3 − mC3
        </T>
      </Fade>

      {/* beat 2 — NEW: diagonals of a convex n-gon */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={282} size={14} fill={AMBER_DARK} weight={700}>
          {t("NEW — diagonals of a convex n-gon:", "NEW — convex n-gon ke diagonals:")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 2} delay={dl(2, 0.5)} d={pentEdgesD} stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={aOn && beat >= 2} delay={dl(2, 1.1)} d={pentDiagD} stroke={AMBER} sw={1.4} dur={0.6} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={329} size={26} fill={GREEN} weight={800}>
          nC2 − n = n(n-3)/2
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.4)}>
        <T x={540} y={364} size={13} fill={MUTED}>
          {t(
            "(nC2 point-pairs, minus the n polygon sides)",
            "(nC2 point-pairs, minus n polygon ke sides)"
          )}
        </T>
      </Fade>

      {/* beat 3 — NEW: rectangles from a grid of lines */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={422} size={14} fill={AMBER_DARK} weight={700}>
          {t("NEW — rectangles inside a grid of lines:", "NEW — grid ki lines se rectangles:")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 3} delay={dl(3, 0.5)} d={gridLinesD} stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.1)}>
        <Path d={cellD} fill={AMBER} opacity={0.28} />
      </Fade>
      <Draw on={aOn && beat >= 3} delay={dl(3, 1.4)} d={cellD} stroke={AMBER} sw={2.2} dur={0.4} />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={540} y={469} size={26} fill={GREEN} weight={800}>
          aC2 · bC2
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={504} size={13} fill={MUTED}>
          {t(
            "(a horiz. + b vert. lines → choose 2 of each)",
            "(a horiz. + b vert. lines → dono mein se 2-2 chuno)"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-5 (number theory) ===================== */}

      {/* beat 4 (HIGH) — divisor count (recap) + divisor sum (NEW), boxed */}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0)}
        d={roundRectD(190, 100, 700, 225, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={140} size={15} fill={INK} weight={600}>
          {t("Divisors of N = p₁^a₁ p₂^a₂⋯ :", "N = p₁^a₁ p₂^a₂⋯ ke divisors:")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={182} size={24} fill={GREEN} weight={800}>
          number of divisors = (a₁+1)(a₂+1)⋯
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.7)}>
        <T x={540} y={214} size={12} fill={MUTED}>
          {t("(recap — Sec36)", "(recap — Sec36 wala)")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.4)}>
        <T x={540} y={258} size={19} fill={GREEN} weight={800}>
          sum of divisors = [(pᵢ^(aᵢ+1) − 1)/(pᵢ − 1)] × ⋯
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.1)}>
        <T x={540} y={290} size={12} fill={AMBER_DARK} weight={600}>
          {t(
            "(NEW — one geometric-series factor per prime, then multiply)",
            "(NEW — har prime ka geometric-series factor, phir multiply)"
          )}
        </T>
      </Fade>

      {/* beat 5 — NEW: sum of all n-digit numbers formed */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={370} size={15} fill={INK} weight={600}>
          {t(
            "Sum of all n-digit numbers (n distinct digits):",
            "Sabhi n-digit numbers ka sum (n distinct digits):"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={418} size={26} fill={GREEN} weight={800}>
          (Σd) · (n-1)! · (10ⁿ−1)/9
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={455} size={13} fill={AMBER_DARK}>
          {t(
            "(Σd = sum of the digits; each digit visits each place (n-1)! times)",
            "(Σd = digits ka sum; har digit har jagah (n-1)! baar aata hai)"
          )}
        </T>
      </Fade>

      {/* ===================== Group C — beats 6-8 (advanced counting) ===================== */}

      {/* beat 6 (HIGH) — derangements: closed form (recap) + recursion (NEW), boxed */}
      <Draw
        on={cOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(230, 100, 620, 155, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={cOn && beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={126} size={15} fill={INK} weight={600}>
          {t(
            "Derangements Dₙ (recap — Sec37) + a new recursion:",
            "Derangements Dₙ (recap — Sec37 wala) + naya recursion:"
          )}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={164} size={22} fill={GREEN} weight={800}>
          Dₙ = n! · Σ (−1)ⁱ/i!
        </T>
      </Fade>
      <Fade on={cOn && beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={205} size={24} fill={GREEN} weight={800}>
          Dₙ = (n−1)(Dₙ₋₁ + Dₙ₋₂)
        </T>
      </Fade>
      <Fade on={cOn && beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={237} size={12} fill={AMBER_DARK}>
          {t(
            "(faster for small n — e.g. D₅ = 4(D₄+D₃) = 4(9+2) = 44)",
            "(chhote n ke liye fast — jaise D₅ = 4(D₄+D₃) = 4(9+2) = 44)"
          )}
        </T>
      </Fade>

      {/* beat 7 — Legendre's formula (recap) + trailing zeros (NEW) */}
      <Fade on={cOn && beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={293} size={15} fill={INK} weight={600}>
          {t(
            "Legendre's formula (recap — Sec37) + trailing zeros:",
            "Legendre's formula (recap — Sec37 wala) + trailing zeros:"
          )}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={333} size={23} fill={GREEN} weight={800}>
          Eₚ(n!) = Σ ⌊n/pᵏ⌋
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={365} size={12} fill={MUTED}>
          {t("(sum over k = 1, 2, 3, …)", "(k = 1, 2, 3, … ka sum)")}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 2.0)}>
        <T x={540} y={402} size={21} fill={GREEN} weight={800}>
          trailing zeros of n! = E₅(n!)
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 2.6)}>
        <T x={540} y={433} size={12} fill={AMBER_DARK}>
          {t(
            "(n! always has more 2s than 5s — so the 5s decide the zeros)",
            "(n! mein 2s hamesha 5s se zyada — isliye 5s zeros decide karte hain)"
          )}
        </T>
      </Fade>

      {/* beat 8 (red-margin guardrail, final) — rank of a word */}
      <Draw
        on={cOn && beat >= 8}
        delay={dl(8, 0)}
        d={roundRectD(330, 464, 420, 120, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={cOn && beat >= 8} delay={dl(8, 0.5)}>
        <Circle cx={540} cy={490} r={13} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <T x={540} y={495} size={15} fill={RED} weight={800}>
          #
        </T>
      </Fade>
      <Fade on={cOn && beat >= 8} delay={dl(8, 1.0)}>
        <T x={540} y={530} size={16} fill={RED} weight={800}>
          {t("Rank of a word:", "Ek word ka rank:")}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={563} size={15} fill={INK} weight={600}>
          Σ(smaller unused letters) × (remaining)! + 1
        </T>
      </Fade>
    </Scene>
  );
}

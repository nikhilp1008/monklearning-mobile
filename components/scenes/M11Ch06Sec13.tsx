/**
 * M11 Ch06 · Section 13 — "Deriving nPr from the counting principle"
 * FOURTH section of Subtopic 2 "Permutations" — THE central derivation of the
 * whole subtopic (nPr = n!/(n-r)!), the payoff Sec12 assumed without proof.
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. nPr is SYMBOLIC here (n, r variables) → plain
 * text "nPr", no superscript digits.
 *
 * Beats (board_reveal_at_english [0,8.87,25.34,39.51,62.46,75.86,91.05],
 * hinglish [0,7.59,24.41,39.08,60.76,73.9,87.81]):
 *  0 heading (= title, always-on): "Why nPr = n!/(n-r)!"
 *  [group A: aOn = beat 0..3, erased at beat>=4 — the box-filling setup]
 *  1 diagram: r ordered position boxes (Pos1..Pos r) filled left-to-right
 *    with counts n, n-1, n-2, ⋯, n-r+1 (callback to Sec3/Sec5's slot-filling
 *    vocabulary), "×" between them, caption "r ordered positions, each
 *    losing one option."
 *  2 confirm: amber underline sweeps under the row, then the sentence
 *    restating the pattern position-by-position
 *  3 (MILESTONE, not final) formula lands: "nPr = n(n-1)(n-2)⋯(n-r+1)" —
 *    the raw, honest count from the boxes, tagged explicitly as not-yet-final
 *  [group A erased at beat>=4 — full board freed for the algebra]
 *  [group B: bOn = beat >= 4, final, never erased]
 *  4 THE KEY TRICK: milestone formula restated compactly at top, then
 *    "× (n-r)!/(n-r)!" (= 1) appends to it in amber-dark, plus explanation
 *    "Multiply and divide by the missing tail:" + "(n-r)! = (n-r)(n-r-1)⋯1"
 *  5 (CENTERPIECE) the merge: numerator "n(n-1)(n-2)⋯(n-r+1) · (n-r)!"
 *    (falling product + the SAME amber-dark tail from beat4, now attached)
 *    with a drawn bracket collapsing it to "= n!" (green — it's the complete
 *    descending product n down to 1, by definition n!); then the clean final
 *    fraction "nPr = n!/(n-r)!" builds (numerator/bar/denominator, genuinely
 *    stacked) and lands boxed + checked
 *  6 guardrail (red chip): "It's just the counting principle applied to r
 *    ordered slots." — the closing insight, callback to Sec5's box-filling
 *    proof stopped early at r boxes instead of n
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                          | T mid  | x306..774 y39..82 (hinglish wider)
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b1 | subheading "fill r ordered positions..." (18,ink)     | T mid  | x342..738 y96..116 (hinglish wider)
 *  b1 | 5 position boxes (78×70, gap32)                        | Draw  | x281..799 y164..234
 *  b1 | "Pos 1".."Pos r" labels (14,ink) above 4 boxes           | T mid | per-box y134..149
 *  b1 | counts n, n-1, n-2, ⋯, n-r+1 (22,ink/muted,w800) in box   | T mid| per-box y~191..212
 *  b1 | "×" ×4 between boxes (18, muted)                          | T mid | gaps y~191..212
 *  b1 | caption "r ordered positions, each losing one option."     | T mid| x316..764 y255..277 (hinglish wider)
 *  b2 | underline sweep under boxes (amber)                         | Draw | x281..799 y246
 *  b2 | confirming sentence (15,ink)                                 | T mid| x270..810 y296..313
 *  b3 | milestone formula "nPr = n(n-1)..(n-r+1)" (30,ink,w800)       | T mid| x352..728 y357..389
 *  b3 | underline (amber)                                              | Draw | x350..730 y402
 *  b3 | tag "(a milestone — not the final formula yet)" (14,muted)      | T mid| x389..691 y419..434
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final]
 *  b4 | anchor formula restated "nPr = n(n-1)..(n-r+1)" (24,ink,w800)    | T st | x306..606 y131..157
 *  b4 | "× (n-r)!/(n-r)!" appended (24,amber-dk,w800)                    | T st | x612..792 y131..157
 *  b4 | "Multiply and divide by the missing tail:" (18,ink)               | T mid| x351..729 y181..201
 *  b4 | "(n-r)! = (n-r)(n-r-1)⋯1" (19,amber-dk,w800)                       | T mid| x431..649 y213..234
 *  b5 | numerator "n(n-1)..(n-r+1)" (22,ink,w800) + "· (n-r)!" (22,amber-dk)| T st | x380..684 y273..297
 *  b5 | bracket (drawn curve) collapsing numerator                          | Draw | x380..680 y310..342
 *  b5 | stub pointing to label                                              | Draw | x540 y342..352
 *  b5 | "= n!" label (28,green,w800)                                       | T mid| x497..583 y364..395
 *  b5 | "nPr =" (30,green,w800)                                            | T end| x470..545 y445..477
 *  b5 | numerator "n!" (26,green,w800)                                     | T mid| x577..603 y433..460
 *  b5 | fraction bar (green)                                               | Draw | x557..623 y460
 *  b5 | denominator "(n-r)!" (22,green,w800)                               | T mid| x557..623 y465..489
 *  b5 | hero box (green, rounded)                                          | Draw | x450..640 y414..508
 *  b5 | checkmark (green)                                                  | Draw | x652..668 y445..469
 *  b6 | guardrail chip (cream/red, w560 h50)                              | Chip | x260..820 y534..584
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
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: the box-filling setup that lands the raw milestone
  // formula) is erased once group B's algebra (beats 4-6: the multiply-and-
  // divide trick and the final merge into n!/(n-r)!) needs the full board.
  // Each element's own `on` is bounded to its beat window (aOn && beat>=k)
  // rather than a wrapper div's opacity, so the verifier's Fade-opacity
  // visibility check (which walks up to the nearest g.sc-fade, not an
  // arbitrary ancestor) sees the erasure correctly; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat1 position-box geometry ----
  const boxX = [281, 391, 501, 611, 721];
  const boxCenters = [320, 430, 540, 650, 760];
  const gapCenters = [375, 485, 595, 705];
  const posLabels = ["Pos 1", "Pos 2", "Pos 3", "", "Pos r"];
  const countLabels = ["n", "n-1", "n-2", "⋯", "n-r+1"];
  const labelDelays = [1.8, 2.4, 3.0, NaN, 4.2];
  const countDelays = [2.1, 2.7, 3.3, 3.6, 4.5];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Why nPr = n!/(n-r)!", "nPr = n!/(n-r)! kyun hota hai?")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 1-3, the setup ===================== */}

      {/* beat 1 — the r position boxes, built left to right */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.0)}>
        <T x={540} y={110} size={18} fill={INK}>
          {t(
            "Fill r ordered positions, no repeats:",
            "r ordered positions bharo, bina repeat ke:"
          )}
        </T>
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.6)}
        d={boxX.map((x) => roundRectD(x, 164, 78, 70, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />

      {posLabels.map((label, i) =>
        label ? (
          <Fade key={`lab${i}`} on={aOn && beat >= 1} delay={dl(1, labelDelays[i])}>
            <T x={boxCenters[i]} y={145} size={14} fill={INK}>
              {label}
            </T>
          </Fade>
        ) : null
      )}

      {countLabels.map((val, i) => (
        <Fade key={`cnt${i}`} on={aOn && beat >= 1} delay={dl(1, countDelays[i])}>
          <T
            x={boxCenters[i]}
            y={204}
            size={22}
            fill={i === 3 ? MUTED : INK}
            weight={i === 3 ? 600 : 800}
          >
            {val}
          </T>
        </Fade>
      ))}

      <Fade on={aOn && beat >= 1} delay={dl(1, 4.9)}>
        {gapCenters.map((x, i) => (
          <T key={i} x={x} y={204} size={18} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 5.5)}>
        <T x={540} y={272} size={16} fill={INK}>
          {t(
            "r ordered positions, each losing one option.",
            "r ordered positions — har baar ek option kam hota hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — confirm the pattern: sweep, then restate position by position */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0.3)}
        d={lineD(281, 246, 799, 246)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={308} size={15} fill={INK}>
          {t(
            "Position 1: n objects. Position 2: n-1. Position 3: n-2. … Position r: (n-r+1).",
            "Position 1: n objects. Position 2: n-1. Position 3: n-2. … Position r: (n-r+1)."
          )}
        </T>
      </Fade>

      {/* beat 3 — the MILESTONE formula lands (raw count, not yet simplified) */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={380} size={30} fill={INK} weight={800}>
          nPr = n(n-1)(n-2)⋯(n-r+1)
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.2)}
        d={lineD(350, 402, 730, 402)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.7)}>
        <T x={540} y={430} size={14} fill={MUTED}>
          {t(
            "(a milestone — not the final formula yet)",
            "(ek milestone — final formula abhi nahi)"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6, the algebra ===================== */}

      {/* beat 4 — THE KEY TRICK: multiply and divide by the missing tail */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={306} y={150} size={24} fill={INK} weight={800} anchor="start">
          nPr = n(n-1)(n-2)⋯(n-r+1)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.1)}>
        <T x={612} y={150} size={24} fill={AMBER_DARK} weight={800} anchor="start">
          × (n-r)!/(n-r)!
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.1)}>
        <T x={540} y={195} size={18} fill={INK}>
          {t(
            "Multiply and divide by the missing tail:",
            "Missing tail se multiply aur divide karo:"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.7)}>
        <T x={540} y={228} size={19} fill={AMBER_DARK} weight={800}>
          (n-r)! = (n-r)(n-r-1)⋯1
        </T>
      </Fade>

      {/* beat 5 — THE MERGE: numerator collapses to n!, final fraction lands */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={380} y={290} size={22} fill={INK} weight={800} anchor="start">
          n(n-1)(n-2)⋯(n-r+1)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.9)}>
        <T x={596} y={290} size={22} fill={AMBER_DARK} weight={800} anchor="start">
          · (n-r)!
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.8)}
        d={`M380 310 Q540 342 680 310`}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.6)}
        d={lineD(540, 342, 540, 352)}
        stroke={AMBER}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.0)}>
        <T x={540} y={386} size={28} fill={GREEN} weight={800}>
          = n!
        </T>
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 4.0)}>
        <T x={545} y={468} size={30} fill={GREEN} weight={800} anchor="end">
          nPr =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.4)}>
        <T x={590} y={453} size={26} fill={GREEN} weight={800}>
          n!
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 4.8)}
        d={lineD(557, 460, 623, 460)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 5.2)}>
        <T x={590} y={482} size={22} fill={GREEN} weight={800}>
          (n-r)!
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 5.7)}
        d={roundRectD(450, 414, 190, 94, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 6.6)}
        d={checkD(660, 461, 16)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />

      {/* beat 6 — guardrail: this is just the counting principle, stopped at r */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={260} y={534} w={560} h={50} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t(
            "It's just the counting principle applied to r ordered slots.",
            "Yeh bas counting principle hai — r ordered slots pe apply kiya."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

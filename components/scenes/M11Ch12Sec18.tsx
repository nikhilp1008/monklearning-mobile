/**
 * M11 Ch12 · Section 18 — "Definitions, notations, and the standard set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — THE master reference card for the whole derivatives subtopic:
 * both definition forms, all 4 notations, the geometric/physical meaning, AND all 6 standard
 * derivative results (power/exp/log + trig). Later worked-example sections (Sec19-27) depend
 * on students having this table. Closest analog: Sec11 (dense multi-row reference table, same
 * "formulas" section_type). Sec17 just built the x^n/sin x/e^x first-principle results this
 * section restates as a summary table — Sec18 is the payoff "notes photo" for the whole run.
 *
 * board_reveal_at_english  = [0.0, 8.62, 20.48, 33.54, 48.98, 66.13, 79.45, 94.29] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 8.02, 18.52, 30.63, 46.42, 61.61, 73.64, 85.59].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "Definitions, notations, and the standard set"
 *  1 | row1 seq2 (HIGH, green)   — both definition forms, <Limit>+<Frac> side by side
 *  2 | row2 seq3 (normal, amber) — the 4 equivalent notations, chained with "="
 *  3 | row3 seq4 (normal, amber) — geometric (tan ψ) + physical (rate) meaning, 2 tagged lines
 *  4 | row4 seq5 (HIGH, green, thick) — power/exp/log: 4 standard results in a row
 *  5 | row5 seq6 (HIGH, green, thick) — trig: 3 standard results in a row
 *  6 | row6 seq7 (normal, unboxed)    — forward pointer to combination rules, 2 lines + underline
 *  7 | row7 seq8 (RED margin, HIGH)   — closing existence-rule stamp, callback to Sec16
 *
 * Rows are genuinely different shapes (per brief) — NOT forced to a uniform grid:
 * row1 is a two-Limit/Frac formula row (tallest, h66), row2/4/5 are single-line tag+content
 * rows (h56), row3 is a two-line tagged pair (h78), row6 breaks the card pattern entirely
 * (plain text + underline, like Sec15/17's connector beats), row7 is a red-margin bar+text
 * stamp (like Sec15/16's guardrails), not a full box — matching the brief's own wording
 * ("note, red-margin").
 *
 * Shared card geometry (rows 1,2,3,4,5): BOX_X=54, BOX_W=972 → box spans x54..1026, well
 * inside safe x[36,1044] even with sw=3.2 stroke overhang (+1.6 → 1027.6 < 1044; 54-1.6=52.4 >
 * 36). TAG_X=74 (short caps label, size12/w800, shares the row's content baseline).
 *
 * Box-width arithmetic (Anek sans, width ≈ 0.50×size×chars, over-estimated per SCENE_AUTHORING
 * Step 3; Kalam script width ≈ 0.55×size×chars for the title). Formulas are language-agnostic
 * (byte-identical EN/HI per SCENE_AUTHORING_MATHS convention) — only prose (title, row2 note,
 * row6, row7) differs per language, checked against the LONGER string each time:
 *  title: EN "Definitions, notations, and the standard set" = 44 chars, HI (40 chars) shorter.
 *    size24 script: 0.55×24×44 = 580.8w, half 290.4, centered x540 → x249.6..830.4 (safe).
 *  row1 (size19 T / size18 Limit / size19 Frac, content x200..750, box interior to x1016):
 *    "f'(x) =" (7ch@19=66.5) x200..266.5 → Limit "h→0" block x290..~317 → Frac1
 *    "(f(x+h) − f(x))/h" (num 13ch@16.15=105, width param 140) center x420 → x350..490 →
 *    "=" x530..539.5 → Limit "t→x" block x560..~587 → Frac2 "(f(t) − f(x))/(t−x)"
 *    (num 11ch@16.15=88.8, width param 120) center x690 → x630..750. All within box (1016).
 *  row2 (size20, content x205..1016): formula "f'(x) = dy/dx = d/dx[f(x)] = Df" (31ch@20=310)
 *    x205..515; note "(all mean the same)" EN 20ch@13=130 vs HI "(sab same hain)" 16ch@13=104
 *    (EN longer) x545..675. Well under 1016.
 *  row3 (size18, content x160..1016): line1 "f'(a) = tan ψ = slope of tangent" (32ch@18=288)
 *    x160..448; line2 "= instantaneous rate" (20ch@18=180) x160..340. Both languages identical
 *    (symbolic + standard English math terms). Tags "GEOMETRIC"(9ch@12=54)/"PHYSICAL"(8ch@12=48)
 *    at x74, clear of COL_X=160 (gap ≥32).
 *  row4 (size18 w700, content x205..1016, the "4 results" screenshot row): "d/dx x^n = n·x^(n−1)"
 *    (20ch=180) x205..385, "d/dx e^x = e^x" (14ch=126) x452..578 (gap67), "d/dx a^x = a^x·ln a"
 *    (19ch=171) x644..815 (gap66), "d/dx ln x = 1/x" (15ch=135) x880..1015 (gap65, clearance to
 *    box edge 1026 = 11px, meets ≥10 rule). Tag "POWER · EXP · LOG" (17ch@12=102) x74..176,
 *    clear of COL_X=205 (gap29).
 *  row5 (size18 w700, content x205..1016, the "3 results" screenshot row): "d/dx sin x = cos x"
 *    (18ch=162) x205..367, "d/dx cos x = −sin x" (19ch=171) x465..636 (gap98), "d/dx tan x =
 *    sec²x" (18ch=162, ² a real native superscript digit) x735..897 (gap99). Tag "TRIG" x74.
 *  row6 (size15, unboxed, x60..): EN L1 "Provable from first principle." (30ch=225), EN L2
 *    "Combining +, −, ×, ÷ → next subtopic." (38ch=285, longer than HI's "+, −, ×, ÷ combine →
 *    agla subtopic." 35ch=262.5) → underline sized per language (EN to x347, HI to x325).
 *  row7 (size18 w800 RED, red-margin bar at x60, text x76..): EN L1 "Existence: f'(a) exists
 *    ⇔ LHD = RHD." (36ch=324) x76..400; EN L2 "Differentiable ⇒ continuous." (28ch=252) x76..328.
 *    HI L1 "f'(a) tabhi exist ⇔ LHD = RHD." (30ch=270, shorter) x76..346; HI L2 "Differentiable
 *    ⇒ continuous, hamesha." (37ch=333, longer than EN) x76..409. Max end 409 << safe 1044.
 *
 * Row heights & vertical positions (baseline math: Anek sans top = y−0.78×size, bottom =
 * y+0.31×size; text-to-stroke clearance ≥10px checked on every row):
 *  title            y58 (band 30-80, script, always-on)
 *  row1  y92..158   (h66)  baseline130 — Frac top ≈104.1 (clear 12.1 from 92), Limit-condition
 *                            bottom ≈143.95 (clear 14.05 from 158)
 *  gap14
 *  row2  y172..228  (h56)  baseline204 — text top 188.4 (clear16.4), bottom210.2 (clear17.8)
 *  gap14
 *  row3  y240..318  (h78)  baseline1=266, baseline2=296 — line1 top251.96(clear11.96 from240),
 *                            line2 bottom301.58(clear16.42 from318)
 *  gap14
 *  row4  y332..388  (h56)  baseline364 — top349.96(clear17.96), bottom369.58(clear18.42)
 *  gap14
 *  row5  y402..458  (h56)  baseline434 — top419.96(clear17.96), bottom439.58(clear18.42)
 *  gap14
 *  row6  (unboxed)  line1_bl482 (top470.3, clear12.3 from row5's box-bottom 458), line2_bl506,
 *                    underline y522 (clear11.35 from line2 bottom 510.65)
 *  gap14
 *  row7  bar y536..584 (clear14 from underline522) — line1_bl552, line2_bl578, bar_bottom584,
 *        all ≤ safe y596 (12px spare).
 * Every row's box/bar IS the beat's Draw action (row borders count, per the brief).
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
import { Frac, Limit, roundRectD } from "./math-kit";

const BOX_X = 54;
const BOX_W = 972;
const TAG_X = 74;

export default function M11Ch12Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t(
            "Definitions, notations, and the standard set",
            "Definitions, notations, aur standard set"
          )}
        </T>
      </Fade>

      {/* beat 1 — row1 seq2: both definition forms, HIGH (green) */}
      <Draw on={beat >= 1} d={roundRectD(BOX_X, 92, BOX_W, 66, 14)} stroke={GREEN} sw={2.6} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={TAG_X} y={130} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          DEFINITION
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={200} y={130} size={19} fill={INK} anchor="start" weight={700}>
          f&apos;(x) =
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.9)} x={290} y={130} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac
        on={beat >= 1}
        delay={dl(1, 1.2)}
        x={420}
        y={130}
        size={19}
        numerator="f(x+h) − f(x)"
        denominator="h"
        width={140}
        fill={INK}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={530} y={130} size={19} fill={INK} anchor="start" weight={700}>
          =
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 2.0)} x={560} y={130} size={18} condition="t → x" anchor="start" fill={INK} />
      <Frac
        on={beat >= 1}
        delay={dl(1, 2.3)}
        x={690}
        y={130}
        size={19}
        numerator="f(t) − f(x)"
        denominator="t − x"
        width={120}
        fill={INK}
      />

      {/* beat 2 — row2 seq3: the 4 equivalent notations, normal (amber) */}
      <Draw on={beat >= 2} d={roundRectD(BOX_X, 172, BOX_W, 56, 14)} stroke={AMBER_DARK} sw={2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={TAG_X} y={204} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          NOTATIONS
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={205} y={204} size={20} fill={INK} anchor="start" weight={600}>
          {"f'(x) = dy/dx = d/dx[f(x)] = Df"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={545} y={204} size={13} fill={MUTED} anchor="start">
          {t("(all mean the same)", "(sab same hain)")}
        </T>
      </Fade>

      {/* beat 3 — row3 seq4: geometric + physical meaning, normal (amber) */}
      <Draw on={beat >= 3} d={roundRectD(BOX_X, 240, BOX_W, 78, 14)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={TAG_X} y={266} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          GEOMETRIC
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={160} y={266} size={18} fill={INK} anchor="start" weight={700}>
          {"f'(a) = tan ψ = slope of tangent"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={TAG_X} y={296} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          PHYSICAL
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={160} y={296} size={18} fill={INK} anchor="start" weight={700}>
          = instantaneous rate
        </T>
      </Fade>

      {/* beat 4 — row4 seq5: power/exp/log, 4 results, HIGH (green, thick) */}
      <Draw on={beat >= 4} d={roundRectD(BOX_X, 332, BOX_W, 56, 14)} stroke={GREEN} sw={3.2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={TAG_X} y={364} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {"POWER · EXP · LOG"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={205} y={364} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx x^n = n·x^(n−1)"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={452} y={364} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx e^x = e^x"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={644} y={364} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx a^x = a^x·ln a"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={880} y={364} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx ln x = 1/x"}
        </T>
      </Fade>

      {/* beat 5 — row5 seq6: trig, 3 results, HIGH (green, thick) */}
      <Draw on={beat >= 5} d={roundRectD(BOX_X, 402, BOX_W, 56, 14)} stroke={GREEN} sw={3.2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={TAG_X} y={434} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          TRIG
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={205} y={434} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx sin x = cos x"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={465} y={434} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx cos x = −sin x"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={735} y={434} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx tan x = sec²x"}
        </T>
      </Fade>

      {/* beat 6 — row6 seq7: forward pointer, normal, unboxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={482} size={15} fill={INK} anchor="start" weight={600}>
          {t("Provable from first principle.", "First principle se provable hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={60} y={506} size={15} fill={INK} anchor="start" weight={600}>
          {t(
            "Combining +, −, ×, ÷ → next subtopic.",
            "+, −, ×, ÷ combine → agla subtopic."
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        d={en ? "M58 522 L347 522" : "M58 522 L325 522"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(6, 0.9)}
      />

      {/* beat 7 — row7 seq8: closing existence-rule stamp, RED margin, HIGH (callback to Sec16) */}
      <Draw on={beat >= 7} d="M60 536 L60 584" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={76} y={552} size={18} fill={RED} anchor="start" weight={800}>
          {t("Existence: f'(a) exists ⇔ LHD = RHD.", "f'(a) tabhi exist ⇔ LHD = RHD.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={76} y={578} size={18} fill={RED} anchor="start" weight={800}>
          {t("Differentiable ⇒ continuous.", "Differentiable ⇒ continuous, hamesha.")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch12 · Section 4 — "Your limits toolkit — the core rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a reference-card grid (toolkit), not a single derivation.
 *
 * board_reveal_at_english = [0, 6.23, 16.47, 25.86, 33.37, 40.96, 50.94, 59.48] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 5.97, 13.65, 22.53, 30.63, 37.63, 46.59, 55.13].
 * Beats are SHORT (6-10s) — rapid-fire recall cards, 1-2 reveal "chunks" per beat,
 * not the slower multi-element builds of a concept section.
 *
 * Layout: 2-column × 3-row grid of boxed formula cards (cols L x60-510 / R x570-1020,
 * gutter 60px ≥ the 24px group-clearance floor), revealed left-to-right/top-to-bottom
 * as beats 1-6 fire, then a full-width red guardrail banner (beat 7, reusing Sec2's
 * beat-4 boxed-red-rule motif) closes the section. seq7 (star limit, callback to
 * Sec3) gets the bolder GREEN treatment + boxed chip landing, matching its HIGH
 * emphasis. Simple fractions with single-term num/denom (f/g, p(x)/q(x)) flatten
 * inline per notation rules; only seq7's compound (x^n−a^n)/(x−a) uses <Frac>.
 *
 * Beats:
 *  0(title, always-on) | "Your limits toolkit — the core rules"
 *  1 | card seq2 (L, row1) HIGH green — existence test / iff definition
 *  2 | card seq3 (R, row1) normal amber — practical h-notation
 *  3 | card seq4 (L, row2) normal amber — sum/scalar/product rules (2 sub-rows)
 *  4 | card seq5 (R, row2) HIGH green — quotient & power rules
 *  5 | card seq6 (L, row3) normal amber — direct substitution
 *  6 | card seq7 (R, row3) HIGH green, bolder — the star algebraic limit
 *  7 | full-width red banner — indeterminate-forms guardrail
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | card outline roundRectD(60,92,450,112)      | Draw | x60..510  y92..204
 *  b1 | header "The existence test (iff)"            | T st | x78..~230 y112..120 (bl116)
 *  b1 | Limit x→a (20)                                | Limit| x78..108  y146..178 (bl162)
 *  b1 | "f(x) = L" (19,ink,start)                     | T st | x114..190 y146..178
 *  b1 | "⇔" (22,amber,start)                          | T st | x206..217 y146..178
 *  b1 | Limit x→a⁻ (20)                                | Limit| x230..260 y146..178
 *  b1 | "f(x)"/"="/Limit x→a⁺/"f(x)"/"="/"L"            | T/Limit | x266..432 y146..178
 *  b2 | card outline roundRectD(570,92,450,112)      | Draw | x570..1020 y92..204
 *  b2 | header "Practical h-notation"                | T st | x588..~800 y112..120 (bl116)
 *  b2 | Limit h→0 / "f(a − h)"                        | Limit+T | x588..702 y146..178 (bl162)
 *  b2 | "and"                                         | T st | x716..738  y152..167
 *  b2 | Limit h→0 / "f(a + h)"                        | Limit+T | x752..866 y146..178
 *  b3 | card outline roundRectD(60,218,450,140)      | Draw | x60..510  y218..358
 *  b3 | header "Sum, scalar & product rules"          | T st | x78..~290 y238..246 (bl242)
 *  b3 | rowA: Limit x→a + "(f ± g) = L ± M"           | Limit+T | x78..234  y262..294 (bl276)
 *  b3 | rowA: Limit x→a + "(k·f) = k·L"                | Limit+T | x260..384 y262..294
 *  b3 | rowB: Limit x→a + "(f · g) = L · M"            | Limit+T | x78..226  y306..338 (bl320)
 *  b4 | card outline roundRectD(570,218,450,140)     | Draw | x570..1020 y218..358
 *  b4 | header "Quotient & power rules"               | T st | x588..~800 y238..246 (bl242)
 *  b4 | Limit x→a + "(f/g) = L/M (M≠0)"                | Limit+T | x588..808 y278..322 (bl296)
 *  b4 | Limit x→a + "(f)^n = L^n"                      | Limit+T | x812..984 y278..322
 *  b5 | card outline roundRectD(60,372,450,118)      | Draw | x60..510  y372..490
 *  b5 | header "Direct substitution"                 | T st | x78..~230 y392..400 (bl396)
 *  b5 | Limit x→a + "p(x)/q(x) = p(a)/q(a)"           | Limit+T | x78..287  y426..458 (bl442)
 *  b5 | "(q(a) ≠ 0)" (14,muted,start)                 | T st | x303..373 y430..452
 *  b6 | card outline roundRectD(570,372,450,118) GREEN sw3.2 | Draw | x570..1020 y372..490
 *  b6 | header "The star limit — memorise this" (15,green,w800) | T st | x588..~840 y392..401 (bl396)
 *  b6 | Limit x→a (22)                                 | Limit| x584..617 y418..452
 *  b6 | Frac x^n−a^n / x−a (22, width110)              | Frac | x631..741 y418..463 (cx686,bl448)
 *  b6 | "=" (24,ink,mid)                                | T mid| x756..776 y432..461
 *  b6 | boxed Chip "n · a^(n−1)" (19,green)             | Chip | x790..910 y427..465
 *  b6 | "(n ∈ Q)" (14,muted,start)                       | T st | x922..971 y434..456
 *  b7 | banner outline (red rect) x60..1020 y508..572  | Draw | full-width
 *  b7 | guardrail text (18,red,w800,mid)                 | T mid| x~250..830 y530..558 (bl548)
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, roundRectD } from "./math-kit";

export default function M11Ch12Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Your limits toolkit — the core rules", "Aapki limits toolkit — core rules")}
        </T>
      </Fade>

      {/* beat 1 — card seq2: the existence test / iff definition (HIGH, green) */}
      <Draw on={beat >= 1} d={roundRectD(60, 92, 450, 112, 14)} stroke={GREEN} sw={2.4} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={78} y={116} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("The existence test (iff)", "Existence test (iff rule)")}
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.6)} x={78} y={162} size={20} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={114} y={162} size={19} fill={INK} anchor="start">
          f(x) = L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={206} y={162} size={22} fill={AMBER_DARK} anchor="start">
          ⇔
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 1.3)} x={230} y={162} size={20} condition="x → a⁻" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={266} y={162} size={19} fill={INK} anchor="start">
          f(x)
        </T>
        <T x={310} y={162} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 1.3)} x={326} y={162} size={20} condition="x → a⁺" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={362} y={162} size={19} fill={INK} anchor="start">
          f(x)
        </T>
        <T x={406} y={162} size={19} fill={INK} anchor="start">
          =
        </T>
        <T x={422} y={162} size={20} fill={INK} anchor="start" weight={700}>
          L
        </T>
      </Fade>

      {/* beat 2 — card seq3: practical h-notation (normal, amber) */}
      <Draw on={beat >= 2} d={roundRectD(570, 92, 450, 112, 14)} stroke={AMBER_DARK} sw={2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={588} y={116} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("The practical h-notation", "h-notation (practical)")}
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.6)} x={588} y={162} size={20} condition="h → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={626} y={162} size={19} fill={INK} anchor="start">
          f(a − h)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <T x={716} y={162} size={15} fill={MUTED} anchor="start">
          {t("and", "aur")}
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 1.2)} x={752} y={162} size={20} condition="h → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={790} y={162} size={19} fill={INK} anchor="start">
          f(a + h)
        </T>
      </Fade>

      {/* beat 3 — card seq4: sum / scalar / product rules (normal, amber, 2 sub-rows) */}
      <Draw on={beat >= 3} d={roundRectD(60, 218, 450, 140, 14)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={78} y={242} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Sum, scalar & product rules", "Sum, scalar, product rules")}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.6)} x={78} y={276} size={18} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={114} y={276} size={16} fill={INK} anchor="start">
          (f ± g) = L ± M
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.95)} x={260} y={276} size={18} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.95)}>
        <T x={296} y={276} size={16} fill={INK} anchor="start">
          (k·f) = k·L
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 1.3)} x={78} y={320} size={18} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={114} y={320} size={16} fill={INK} anchor="start">
          (f · g) = L · M
        </T>
      </Fade>

      {/* beat 4 — card seq5: quotient & power rules (HIGH, green) */}
      <Draw on={beat >= 4} d={roundRectD(570, 218, 450, 140, 14)} stroke={GREEN} sw={2.4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={588} y={242} size={14} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("Quotient & power rules", "Quotient & power rules")}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.6)} x={588} y={296} size={24} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={638} y={296} size={20} fill={INK} anchor="start">
          (f/g) = L/M (M≠0)
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 1)} x={812} y={296} size={24} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={862} y={296} size={20} fill={INK} anchor="start">
          (f)^n = L^n
        </T>
      </Fade>

      {/* beat 5 — card seq6: direct substitution (normal, amber) */}
      <Draw on={beat >= 5} d={roundRectD(60, 372, 450, 118, 14)} stroke={AMBER_DARK} sw={2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={78} y={396} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Direct substitution", "Direct substitution")}
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 0.6)} x={78} y={442} size={20} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={116} y={442} size={18} fill={INK} anchor="start">
          p(x)/q(x) = p(a)/q(a)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={303} y={442} size={14} fill={MUTED} anchor="start">
          (q(a) ≠ 0)
        </T>
      </Fade>

      {/* beat 6 — card seq7: the star algebraic limit (HIGH, bolder green, callback to Sec3) */}
      <Draw on={beat >= 6} d={roundRectD(570, 372, 450, 118, 14)} stroke={GREEN} sw={3.2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={588} y={396} size={15} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("The star limit — memorise this", "Star limit — yaad rakhiye")}
        </T>
      </Fade>
      <Limit on={beat >= 6} delay={dl(6, 0.6)} x={584} y={448} size={22} condition="x → a" anchor="start" fill={INK} />
      <Frac
        on={beat >= 6}
        delay={dl(6, 0.85)}
        x={686}
        y={448}
        size={22}
        numerator="x^n − a^n"
        denominator="x − a"
        width={110}
        fill={INK}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.15)}>
        <T x={766} y={448} size={24} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={790} y={427} w={120} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={19} script={false}>
          n · a^(n−1)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={922} y={448} size={14} fill={MUTED} anchor="start">
          (n ∈ Q)
        </T>
      </Fade>

      {/* beat 7 — closing guardrail banner (full width, reuses Sec2 beat4's boxed-red-rule motif) */}
      <Draw on={beat >= 7} d="M60 508 L1020 508 L1020 572 L60 572 Z" stroke={RED} sw={2.4} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={548} size={18} fill={RED} anchor="middle" weight={800}>
          {t(
            "0/0, ∞/∞, ∞−∞, 0×∞ are indeterminate — resolve, never guess.",
            "0/0, ∞/∞, ∞−∞, 0×∞ indeterminate hain — algebra se resolve karo, guess mat karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

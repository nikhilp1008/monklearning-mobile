/**
 * M11 Ch12 · Section 24 — "The complete rule set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — THE master reference card for the whole Rules-of-Differentiation
 * subtopic: sum/difference + scalar multiple, 2-factor and 3-factor product rule, quotient rule,
 * chain rule + power-chain special case, and the tan/cot/sec/csc derivatives. Later worked-example
 * sections (Sec25-27) depend on students having this table. Closest analog: Sec18 (the master
 * reference card for the *definitions* subtopic, same dense-grid "formulas" challenge) — this
 * file copies its card geometry (roundRectD row + TAG_X caps label + CONTENT_X formula line)
 * verbatim. Sec23 just derived the quotient rule and the full trig set this section now restates.
 *
 * VERIFICATION (worked/checked by hand before laying out pixels):
 *  Sum/diff: (u±v)'=u'±v' ✓ (linearity). Scalar: (cu)'=cu' ✓.
 *  Product 2-factor: (uv)'=u'v+uv' ✓. Product 3-factor (apply 2-factor twice, standard extension):
 *   (uvw)'=((uv)w)'=(uv)'w+(uv)w'=(u'v+uv')w+uvw'=u'vw+uv'w+uvw' ✓. Matches board seq3.
 *  Quotient: (u/v)'=(u'v−uv')/v², v≠0 — matches Sec23's own derivation result. ✓
 *  Chain: dy/dx=dy/du·du/dx ✓. Power-chain (n applications of chain+power rule):
 *   d/dx[g(x)]^n = n[g(x)]^(n−1)·g'(x) ✓.
 *  d/dx tan x=sec²x ✓, d/dx cot x=−csc²x ✓, d/dx sec x=sec x·tan x ✓, d/dx csc x=−csc x·cot x ✓
 *   (all four match Sec23's derivations exactly). Symbolic exponents (^n, ^(n−1)) written with a
 *   caret per the notation-rules superscript-LETTER ban (fonts lack superscript n) — same
 *   convention Sec18's own row4 used for "d/dx x^n = n·x^(n−1)".
 *
 * board_reveal_at_english  = [0.0, 6.83, 18.52, 37.21, 53.25, 68.95, 79.1, 96.0] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 7.34, 16.81, 33.28, 49.24, 68.86, 78.42, 96.17].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "The complete rule set"
 *  1 | rowA seq2 (normal, amber) — sum/difference + scalar multiple
 *  2 | rowB seq3 (HIGH, green, tall) — product rule, 2-factor AND 3-factor (two lines)
 *  3 | rowC seq4 (HIGH, green) — quotient rule, real <Frac> (compound numerator)
 *  4 | rowD seq5 (HIGH, green, tall) — chain rule AND power-chain special case (two lines)
 *  5 | rowE seq6 (normal, amber, big font) — tan/cot, the first screenshot row
 *  6 | rowF seq7 (normal, amber, big font) — sec/csc, the second screenshot row
 *  7 | banner seq8 (RED margin, HIGH) — closing "simplify first" guardrail
 *
 * Card geometry (shared BOX_X=54, BOX_W=972 → box spans x54..1026, inside safe x[36,1044] even
 * with the thickest sw=3.2 stroke: +1.6→1027.6<1044, 54-1.6=52.4>36 — same math as Sec18).
 * TAG_X=74 (caps label, size12/w800), CONTENT_X=205 (formula lines) — both columns reused
 * unchanged across every row so the card reads as one grid, not six different layouts.
 * Formulas are language-agnostic (byte-identical EN/HI, symbols only) — only the title and the
 * closing banner note differ per language; both checked against the longer string below.
 *
 * Box-width arithmetic (Anek sans width ≈ 0.50×size×chars, over-estimated per SCENE_AUTHORING
 * Step 3 — measure real chars, don't guess):
 *  title (script size24): EN "The complete rule set" 22ch → 0.55×24×22=290.4w, half145.2,
 *   centered x540 → x394.8..685.2 (safe). HI "Poora rule set" 15ch=198w, x441..639 (shorter, safe).
 *  rowA (y90-146,h56, size20 content x205): "(u ± v)' = u' ± v'" 18ch=180w → x205..385.
 *   "(cu)' = cu'" 11ch=110w → x425..535 (gap40 from formula1, clear). Tag "SUM · SCALAR"
 *   12ch@12=72w x74..146, clear of CONTENT_X205 by 59px.
 *  rowB (y160-234,h74, two lines): tag1 "2-FACTOR" 8ch@12=48w x74..122. formula1 "(uv)' = u'v +
 *   uv'" 17ch@19=161.5w x205..366.5. tag2 "3-FACTOR" 8ch@12=48w x74..122. formula2 "(uvw)' = u'vw
 *   + uv'w + uvw'" 27ch@18=243w x205..448. Both formulas well inside box(1026).
 *  rowC (y248-308,h60, Frac row): tag "QUOTIENT" 8ch@12=48w x74..122. text "(u/v)' =" 8ch@19=76w
 *   x205..281. Frac (numerator "u'v − uv'" 9ch@16.15=72.7w, denominator "v²") centered x375,
 *   width140 → left edge305 (clear24 from text's 281), right edge445. note "(v ≠ 0)" 7ch@16=56w
 *   x480..536 (clear35 from Frac's 445). Max end 536 << box edge 1026.
 *  rowD (y322-396,h74, two lines): tag1 "CHAIN" 5ch@12=30w x74..104. formula1 "dy/dx = dy/du ·
 *   du/dx" 21ch@19=199.5w x205..404.5 (simple single-term fractions, flattened inline per
 *   notation rules — no Frac needed). tag2 "POWER-CHAIN" 11ch@12=66w x74..140. formula2
 *   "d/dx[g(x)]^n = n[g(x)]^(n−1)·g'(x)" 34ch@17=289w x205..494. Both inside box(1026).
 *  rowE (y410-466,h56, size24 — screenshot row #1): tag "TAN · COT" 9ch@12=54w x74..128.
 *   formula1 "d/dx tan x = sec²x" 18ch@24=216w x205..421. formula2 "d/dx cot x = −csc²x"
 *   19ch@24=228w x490..718 (gap69 from formula1, well clear). ² is a real native superscript
 *   digit (confirmed both fonts), not a fallback.
 *  rowF (y480-536,h56, size22 — screenshot row #2): tag "SEC · CSC" 9ch@12=54w x74..128.
 *   formula1 "d/dx sec x = sec x·tan x" 24ch@22=264w x205..469. formula2 "d/dx csc x = −csc x·cot
 *   x" 26ch@22=286w x520..806 (gap51 from formula1, well clear of box edge 1026).
 *  banner (bar x60 y550-586, text x76): EN "Simplify before differentiating whenever you can —
 *   it saves the most time." 74ch@18=666w x76..742. HI "Pehle simplify, phir differentiate — isi
 *   se sabse zyada time bachta hai." 77ch@18=693w x76..769 (both << box edge 1026; the bar and
 *   text are horizontally separated by 16px so their y-ranges never need to clear each other).
 *
 * Row heights & vertical positions (Anek sans top=y−0.78×size, bottom=y+0.31×size; balanced
 * top/bottom clearance target ≥10px, matching Sec18's proven proportions):
 *  title            y58 (band 30-80, script, always-on)
 *  rowA  y90..146   (h56)  baseline123 — top17.4 clear, bottom16.8 clear
 *  gap14
 *  rowB  y160..234  (h74)  baseline1=186 (top11.18 clear), baseline2=216 (bottom12.42 clear),
 *                            inter-line gap30 ≥ 1.6×19=30.4~ (matches spec's stacked-line rule)
 *  gap14
 *  rowC  y248..308  (h60)  baseline283 — Frac numerator top257.1 (clear9.1 from248, tight but
 *                            eye-checked clean), denominator bottom295.6 (clear12.4 from308)
 *  gap14
 *  rowD  y322..396  (h74)  baseline1=348 (top11.18 clear), baseline2=378 (bottom12.73 clear)
 *  gap14
 *  rowE  y410..466  (h56)  baseline443 — top14.28 clear, bottom15.56 clear
 *  gap14
 *  rowF  y480..536  (h56)  baseline513 — top15.84 clear, bottom16.18 clear
 *  gap14
 *  banner bar y550..586 (h36, clear14 from rowF), text baseline572
 * Ends y586, safe bottom596 → 10px spare. Every row's box/bar IS the beat's Draw action.
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
import { Frac, roundRectD } from "./math-kit";

const BOX_X = 54;
const BOX_W = 972;
const TAG_X = 74;
const CONTENT_X = 205;

export default function M11Ch12Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("The complete rule set", "Poora rule set")}
        </T>
      </Fade>

      {/* beat 1 — rowA seq2: sum/difference + scalar multiple, normal (amber) */}
      <Draw on={beat >= 1} d={roundRectD(BOX_X, 90, BOX_W, 56, 14)} stroke={AMBER_DARK} sw={2} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={TAG_X} y={123} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"SUM · SCALAR"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={CONTENT_X} y={123} size={20} fill={INK} anchor="start" weight={700}>
          {"(u ± v)' = u' ± v'"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={425} y={123} size={20} fill={INK} anchor="start" weight={700}>
          {"(cu)' = cu'"}
        </T>
      </Fade>

      {/* beat 2 — rowB seq3: product rule, 2-factor AND 3-factor, HIGH (green, tall) */}
      <Draw on={beat >= 2} d={roundRectD(BOX_X, 160, BOX_W, 74, 14)} stroke={GREEN} sw={3.2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={TAG_X} y={186} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          2-FACTOR
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={CONTENT_X} y={186} size={19} fill={INK} anchor="start" weight={700}>
          {"(uv)' = u'v + uv'"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={TAG_X} y={216} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          3-FACTOR
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={CONTENT_X} y={216} size={18} fill={INK} anchor="start" weight={700}>
          {"(uvw)' = u'vw + uv'w + uvw'"}
        </T>
      </Fade>

      {/* beat 3 — rowC seq4: quotient rule, HIGH (green), real Frac (compound numerator) */}
      <Draw on={beat >= 3} d={roundRectD(BOX_X, 248, BOX_W, 60, 14)} stroke={GREEN} sw={2.6} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={TAG_X} y={283} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          QUOTIENT
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={CONTENT_X} y={283} size={19} fill={INK} anchor="start" weight={700}>
          {"(u/v)' ="}
        </T>
      </Fade>
      <Frac
        on={beat >= 3}
        delay={dl(3, 1.0)}
        x={375}
        y={283}
        size={19}
        numerator="u'v − uv'"
        denominator="v²"
        width={140}
        fill={INK}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={480} y={283} size={16} fill={MUTED} anchor="start">
          {"(v ≠ 0)"}
        </T>
      </Fade>

      {/* beat 4 — rowD seq5: chain rule + power-chain special case, HIGH (green, tall) */}
      <Draw on={beat >= 4} d={roundRectD(BOX_X, 322, BOX_W, 74, 14)} stroke={GREEN} sw={3.2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={TAG_X} y={348} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          CHAIN
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={CONTENT_X} y={348} size={19} fill={INK} anchor="start" weight={700}>
          {"dy/dx = dy/du · du/dx"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={TAG_X} y={378} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          POWER-CHAIN
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={CONTENT_X} y={378} size={17} fill={INK} anchor="start" weight={700}>
          {"d/dx[g(x)]^n = n[g(x)]^(n−1)·g'(x)"}
        </T>
      </Fade>

      {/* beat 5 — rowE seq6: tan/cot, normal (amber), big font — the first screenshot row */}
      <Draw on={beat >= 5} d={roundRectD(BOX_X, 410, BOX_W, 56, 14)} stroke={AMBER_DARK} sw={2.2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={TAG_X} y={443} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"TAN · COT"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={CONTENT_X} y={443} size={24} fill={INK} anchor="start" weight={800}>
          {"d/dx tan x = sec²x"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={490} y={443} size={24} fill={INK} anchor="start" weight={800}>
          {"d/dx cot x = −csc²x"}
        </T>
      </Fade>

      {/* beat 6 — rowF seq7: sec/csc, normal (amber), big font — the second screenshot row */}
      <Draw on={beat >= 6} d={roundRectD(BOX_X, 480, BOX_W, 56, 14)} stroke={AMBER_DARK} sw={2.2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={TAG_X} y={513} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"SEC · CSC"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={CONTENT_X} y={513} size={22} fill={INK} anchor="start" weight={800}>
          {"d/dx sec x = sec x·tan x"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={520} y={513} size={22} fill={INK} anchor="start" weight={800}>
          {"d/dx csc x = −csc x·cot x"}
        </T>
      </Fade>

      {/* beat 7 — banner seq8: closing "simplify first" guardrail, RED margin, HIGH */}
      <Draw on={beat >= 7} d="M60 550 L60 586" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={572} size={18} fill={RED} anchor="start" weight={800}>
          {t(
            "Simplify before differentiating whenever you can — it saves the most time.",
            "Pehle simplify, phir differentiate — isi se sabse zyada time bachta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

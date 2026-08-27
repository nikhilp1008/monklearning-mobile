/**
 * M11 Ch06 · Section 9 — "Pitfalls & pro-tips: AND/OR, the repetition fork,
 * and 0!" — the CLOSING section of Subtopic 1 (Sec1-9), a rapid pitfalls/tips
 * recap of everything taught in Sec1-8. Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("tips"
 * section_type: "a rapid sequence of ringed/boxed pitfalls, one per beat,
 * each with a wrong-vs-right pair if the JSON's note implies one").
 *
 * 6 pitfall/tip cards do not fit on the board simultaneously at readable
 * size, so — per the brief's own suggested pattern — they build as TWO
 * groups of 3 stacked "notes page" cards: group A (pitfalls 1-3) builds
 * across beats 1-3, then erases; group B (pitfalls 4-6) builds across beats
 * 4-6 in the same freed row geometry and is the final, persisting group (the
 * "notes page" the student sees at the end). Cards 1-5 are red/warning
 * (mistakes); card 6 (the pro-tip) is green/positive per the brief.
 * Callbacks: card1→Sec1/2/7 (AND/OR), card2→Sec3 vs Sec4 (factorial-shrink
 * vs nʳ-repeat), card3→Sec8 Ex.4 (leading-digit double exclusion, 8 not 9),
 * card4→Sec3/Sec5 (0!=1 proof, exact wrong/right convention reused), card5→
 * Sec2 (VennShade double-count warning), card6→Sec8 Ex.4 (complement count).
 *
 * Beats (board_reveal_at_english [0,13.48,25.26,36.52,43.61,58.54,70.91],
 * hinglish [0,13.48,26.88,37.63,45.4,58.71,72.79]):
 *  0 heading (= title, always-on) + underline flourish (the only beat0 action)
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  1 card1 (row0): Pitfall 1 — confusing AND with OR; mini ×/+ badge icons
 *  2 card2 (row1): Pitfall 2 — assuming "no repeats"; n! crossed / nʳ checked
 *  3 card3 (row2, guardrail): Pitfall 3 — leading digit ≠0 AND ≠9 at once;
 *    "9" crossed (wrong reflex) vs "8" checked (right)
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 card4 (row0): Pitfall 4 — 0!=0 trap; "0! = 0" crossed vs "0! = 1"
 *    checked (exact Sec3/Sec5 wrong/right convention reused)
 *  5 card5 (row1): Pitfall 5 — adding overlapping OR-cases; mini VennShade
 *    red lens (Sec2 callback)
 *  6 card6 (row2, GREEN guardrail, the positive closer): Pro-tip — "at
 *    least one" → Total − none; green Chip
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 * Shared row geometry (both groups reuse identical rows; box x0=60..1020):
 *  row0 top=108 H=140 bottom=248 cy=178 | title y150 detail y193 caption y226
 *  row1 top=272 H=140 bottom=412 cy=342 | title y314 detail y357 caption y390
 *  row2 top=436 H=140 bottom=576 cy=506 | title y478 detail y521 caption y554
 *  (icon column x~90..152, text column x210..~1000 — disjoint by design so
 *  icon glyphs never collide with title/detail/caption text regardless of y)
 *
 *  always | title (script 24, red)                    | T mid  | x283..797 y39..82 (hinglish wider)
 *  b0 | title underline flourish (amber)               | Draw   | x350..730 y94
 *  [group A, aOn = beat 1..3, erased at beat>=4]
 *  b1 | card1 box (960×140)                             | Draw  | x60..1020 y108..248
 *  b1 | ×-badge circle r16 + "×" / +-badge circle r16 + "+"| circ/T | x104..136 y138..170 / y186..218
 *  b1 | title "Confusing AND with OR" (19,red,w800)       | T start| x210..~600 y150
 *  b1 | detail "Translate the sentence first" (16,ink)     | T start| x210..~560 y193
 *  b1 | caption "AND → ×" (14,red) / "OR → +" (14,green)     | T start| x210..266 / x300..342 y226
 *  b2 | card2 box                                            | Draw  | x60..1020 y272..412
 *  b2 | "n!" (16,red,w800) crossed / "nʳ" (16,green,w800) checked| T mid+Draw| x112..128 y318 / y366
 *  b2 | title "Don't assume 'no repeats'" (19,red,w800)         | T start| x210..~610 y314
 *  b2 | detail "Locks, PINs, passwords often repeat" (16,ink)     | T start| x210..~640 y357
 *  b2 | caption "→ often nʳ, not a shrinking product" (14,muted)   | T start| x210..~600 y390
 *  b3 | card3 box (guardrail)                                       | Draw | x60..1020 y436..576
 *  b3 | warning triangle icon (red)                                   | Draw | x104..136 y476..512
 *  b3 | title "Excluded 0 AND 9 at once" (19,red,w800)                 | T start| x210..~590 y478
 *  b3 | "9" (24,red,w800) crossed → "8" (24,green,w800) checked           | T mid+Draw| x244..306 y521
 *  b3 | caption "10 digits − 2 excluded = 8 valid" (14,muted)              | T start| x210..441 y554
 *  [group A erased at beat>=4]
 *  [group B, bOn = beat>=4, final group]
 *  b4 | card4 box                                                          | Draw | x60..1020 y108..248
 *  b4 | "0!" badge circle r18 (muted) + label                                | circ/T| x102..138 y160..196
 *  b4 | title "Treating 0! as zero" (19,red,w800)                            | T start| x210..~560 y150
 *  b4 | "0! = 0" (24,red,w700) crossed → "0! = 1" (24,green,w800) checked       | T mid+Draw| x264..496 y193
 *  b4 | caption "else combination formulas collapse" (14,muted)                  | T start| x210..~590 y226
 *  b5 | card5 box                                                                 | Draw | x60..1020 y272..412
 *  b5 | 2 overlapping circles (r18) + red VennShade lens                            | Draw/Shade | x87..151 y312..372
 *  b5 | title "Adding overlapping OR-cases" (19,red,w800)                            | T start| x210..~610 y314
 *  b5 | detail "The overlap gets counted twice" (16,ink)                              | T start| x210..~560 y357
 *  b5 | caption "Add only when cases are mutually exclusive" (14,muted)                 | T start| x210..~650 y390
 *  b6 | card6 box (GREEN, positive closer)                                               | Draw | x60..1020 y436..576
 *  b6 | green circle r18 + checkmark                                                        | circ/Draw | x102..138 y488..524
 *  b6 | title "Pro-tip: flip the question" (19,green,w800)                                    | T start| x210..~600 y478
 *  b6 | chip "'At least one' → Total − none" (green, w580 h46)                                  | Chip | x210..790 y498..544
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, VennShade, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (pitfalls 1-3) is erased once group B (pitfalls 4-6, the final
  // "notes page") starts at beat 4. Each element's own `on` is bounded to its
  // beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // shared row geometry (see layout-plan header)
  const ROW0 = { top: 108, h: 140, cy: 178, title: 150, detail: 193, caption: 226 };
  const ROW1 = { top: 272, h: 140, cy: 342, title: 314, detail: 357, caption: 390 };
  const ROW2 = { top: 436, h: 140, cy: 506, title: 478, detail: 521, caption: 554 };
  const BOX_X = 60;
  const BOX_W = 960;

  return (
    <Scene>
      {/* title always-on — this IS the JSON's own heading, so beat 0 has no
          separate gated text beyond the underline flourish below */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("The mistakes that cost marks here", "Yahi galtiyan yahan marks katwati hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 ===================== */}

      {/* --- Card 1 (row0): Pitfall 1 — AND vs OR --- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={120} cy={ROW0.cy - 24} r={16} stroke={RED} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <T x={120} y={ROW0.cy - 24 + 5} size={18} fill={RED} weight={800}>
          ×
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={120} cy={ROW0.cy + 24} r={16} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.5)}>
        <T x={120} y={ROW0.cy + 24 + 5} size={18} fill={GREEN} weight={800}>
          +
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Confusing AND with OR", "AND aur OR mein confusion")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.3)}>
        <T x={210} y={ROW0.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("Translate the sentence first", "Pehle sentence translate karo")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.7)}>
        <T x={210} y={ROW0.caption} size={14} fill={RED} weight={700} anchor="start">
          AND → ×
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.9)}>
        <T x={300} y={ROW0.caption} size={14} fill={GREEN} weight={700} anchor="start">
          OR → +
        </T>
      </Fade>

      {/* --- Card 2 (row1): Pitfall 2 — "no repeats" default --- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={120} y={ROW1.cy - 24} size={16} fill={RED} weight={800}>
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.0)}
        d={crossD(112, ROW1.cy - 24 - 0.78 * 16, 16, 17.44)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={120} y={ROW1.cy + 24} size={16} fill={GREEN} weight={800}>
          nʳ
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.8)}
        d={checkD(144, ROW1.cy + 24 - 4, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.2)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Don't assume 'no repeats'", "'No repeat' mat maano")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("Locks, PINs, passwords often repeat", "Locks, PINs, passwords mein repeat chalta hai")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.0)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          {t("→ often nʳ, not a shrinking product", "→ aksar nʳ, ghatta hua product nahi")}
        </T>
      </Fade>

      {/* --- Card 3 (row2, guardrail): Pitfall 3 — two exclusions at once --- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.5)}
        d={`M120 ${ROW2.cy - 30} L104 ${ROW2.cy + 6} L136 ${ROW2.cy + 6} Z M120 ${ROW2.cy - 22} L120 ${ROW2.cy - 7}`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.0)}>
        <Circle cx={120} cy={ROW2.cy + 2} r={1.8} fill={RED} />
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.2)}>
        <T x={210} y={ROW2.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Excluded 0 AND 9 at once", "0 AND 9 dono excluded")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.6)}>
        <T x={250} y={ROW2.detail} size={24} fill={RED} weight={800}>
          9
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 2.0)}
        d={crossD(244, ROW2.detail - 0.78 * 24, 12, 26.16)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.3)}>
        <T x={300} y={ROW2.detail} size={18} fill={MUTED}>
          →
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.6)}>
        <T x={350} y={ROW2.detail} size={24} fill={GREEN} weight={800}>
          8
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 3.0)}
        d={checkD(380, ROW2.detail - 4, 18)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.4)}>
        <T x={210} y={ROW2.caption} size={14} fill={MUTED} anchor="start">
          {t("10 digits − 2 excluded = 8 valid", "10 digits − 2 excluded = 8 valid")}
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6 (final, never erased) ===================== */}

      {/* --- Card 4 (row0): Pitfall 4 — 0!=0 trap --- */}
      <Draw
        on={bOn}
        delay={dl(4, 0)}
        d={roundRectD(BOX_X, ROW0.top, BOX_W, ROW0.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={bOn} delay={dl(4, 0.6)}>
        <Circle cx={120} cy={ROW0.cy} r={18} stroke={MUTED} strokeWidth={1.8} fill="none" />
      </Fade>
      <Fade on={bOn} delay={dl(4, 0.9)}>
        <T x={120} y={ROW0.cy + 5} size={14} fill={INK} weight={700}>
          0!
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.3)}>
        <T x={210} y={ROW0.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Treating 0! as zero", "0! ko zero samajhna")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.7)}>
        <T x={300} y={ROW0.detail} size={24} fill={RED} weight={700}>
          0! = 0
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 2.1)}
        d={crossD(264, ROW0.detail - 0.78 * 24, 72, 26.16)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 2.4)}>
        <T x={380} y={ROW0.detail} size={18} fill={MUTED}>
          →
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.7)}>
        <T x={460} y={ROW0.detail} size={24} fill={GREEN} weight={800}>
          0! = 1
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 3.1)}
        d={checkD(520, ROW0.detail - 4, 18)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 3.5)}>
        <T x={210} y={ROW0.caption} size={14} fill={MUTED} anchor="start">
          {t("else combination formulas collapse", "warna combination formulas collapse ho jaate hain")}
        </T>
      </Fade>

      {/* --- Card 5 (row1): Pitfall 5 — overlapping OR-cases --- */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(BOX_X, ROW1.top, BOX_W, ROW1.h, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0.6)}
        d={circleD(105, ROW1.cy - 12, 18)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.0)}
        d={circleD(133, ROW1.cy + 12, 18)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <VennShade
        on={bOn && beat >= 5}
        delay={dl(5, 1.5)}
        include={[
          { cx: 105, cy: ROW1.cy - 12, r: 18 },
          { cx: 133, cy: ROW1.cy + 12, r: 18 },
        ]}
        x={60}
        y={ROW1.top}
        w={200}
        h={ROW1.h}
        fill={RED}
        opacity={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.0)}>
        <T x={210} y={ROW1.title} size={19} fill={RED} weight={800} anchor="start">
          {t("Adding overlapping OR-cases", "Overlapping OR-cases ko add karna")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.4)}>
        <T x={210} y={ROW1.detail} size={16} fill={INK} weight={600} anchor="start">
          {t("The overlap gets counted twice", "Overlap do baar count ho jata hai")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.8)}>
        <T x={210} y={ROW1.caption} size={14} fill={MUTED} anchor="start">
          {t(
            "Add only when cases are mutually exclusive",
            "Sirf mutually exclusive cases hi add karo"
          )}
        </T>
      </Fade>

      {/* --- Card 6 (row2, GREEN): Pro-tip — the positive closer --- */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(BOX_X, ROW2.top, BOX_W, ROW2.h, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={120} cy={ROW2.cy} r={18} stroke={GREEN} strokeWidth={2} fill="none" />
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 1.0)}
        d={checkD(120, ROW2.cy, 16)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.4)}>
        <T x={210} y={ROW2.title} size={19} fill={GREEN} weight={800} anchor="start">
          {t("Pro-tip: flip the question", "Pro-tip: sawaal palat do")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.9)}>
        <Chip x={210} y={498} w={580} h={46} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("'At least one' → Total − none", "'Kam se kam ek' → Total − none")}
        </Chip>
      </Fade>
    </Scene>
  );
}

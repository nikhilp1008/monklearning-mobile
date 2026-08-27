/**
 * M11 Ch14 · Section 13 — "Worked example: counting events abstractly (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. FLAGGED for
 * extra scrutiny (JEE Advanced abstract-counting derivation) — part (c)
 * is the hardest single result in this subtopic: verified algebraically
 * (3ⁿ total ordered (A,B) assignments to 3 bins, minus A=∅ (2ⁿ), minus
 * B=∅ (2ⁿ), plus the doubly-subtracted A=B=∅ case (1), halved since the
 * pair is unordered — checked at n=2: (9−8+1)/2=1, matches narration).
 *
 * Beats (board_reveal_at_english [0,15.45,24.15,33.79,41.3,46.68,58.2,74.84]):
 *  0 heading
 *  1 (a) n outcomes (n≥2). How many events, incl. ∅ and S?
 *  2 key fact: n-element set → 2ⁿ subsets
 *  3 formula (HIGH, ringed): events = 2ⁿ
 *  4 (b) how many compound?
 *  5 compound = 2ⁿ − n − 1
 *  [group A erased at beat>=6 — part (c) needs the full board]
 *  6 (c) unordered pairs {A,B}: non-empty, mutually exclusive — 3-bin
 *    sorting visual (1 outcome → only A / only B / neither), ×n → 3ⁿ
 *  7 formula (HIGH): staggered derivation to (3ⁿ − 2ⁿ⁺¹ + 1) / 2,
 *    sanity-checked at n=2 → 1
 *
 * Layout plan (Group A compact centered, erased beat>=6; Group B fresh
 * full-canvas for part c; longer language counts):
 *  b1 | "(a) n outcomes.." (16, ink)               | T mid | x220..860 y127..143
 *  b2 | "key fact: n-element.." (15, ink)           | T mid | x260..820 y157..171
 *  b3 | ringed "events = 2ⁿ" (20, green)             | T mid | x420..660 y191..216
 *  b4 | "(b) how many compound?" (16, ink)           | T mid | x340..740 y242..258
 *  b5 | "compound = 2ⁿ − n − 1" (18, ink)             | T mid | x360..720 y271..295
 *  [group A erased beat>=6]
 *  b6 | "(c) unordered pairs.." (17, ink)              | T mid | x180..900 y104..122
 *  b6 | 3-bin diagram: dot + 3 arrows + 3 boxes          | Draw/T| x160..560 y140..270
 *  b6 | "×n outcomes → 3ⁿ assignments" (15,ink)           | T mid | x300..780 y298..312
 *  b7 | derivation lines (16/16/14)                        | T mid | x150..930 y335..405
 *  b7 | ringed boxed final formula (22, green, HIGH)        | T mid | x350..730 y415..462
 *  b7 | sanity stamp (14, green)                             | T mid | x330..750 y490..504
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch14Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 6;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("pure structure, no dice — n outcomes, three sub-questions", "pure structure, dice nahi — n outcomes, teen sub-questions")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-5 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Counting events abstractly (JEE Advanced)", "Events ko abstractly ginna (JEE Advanced)")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={137} size={16} fill={INK} weight={600}>
          {t("(a) n outcomes (n ≥ 2). Events, incl. ∅ and S?", "(a) n outcomes (n ≥ 2). Events, ∅ aur S sameet?")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={166} size={15} fill={MUTED}>
          {t("key fact: n-element set → 2ⁿ subsets", "key fact: n-element set → 2ⁿ subsets")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={206} size={20} fill={GREEN} weight={800}>
          {"events = 2ⁿ"}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 3} delay={dl(3, 1.0)} d={ringD(540, 197, 110, 24)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={253} size={16} fill={INK} weight={600}>
          {t("(b) how many compound?", "(b) kitne compound hain?")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={288} size={18} fill={INK} weight={800}>
          {"compound = 2ⁿ − n − 1"}
        </T>
      </Fade>

      {/* ===================== Group B — beats 6-7, never erased ===================== */}

      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={112} size={17} fill={INK} weight={700}>
          {t("(c) unordered pairs {A, B}: non-empty, mutually exclusive", "(c) unordered pairs {A, B}: non-empty, mutually exclusive")}
        </T>
      </Fade>

      {/* 3-bin sorting diagram */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={200} cy={205} r={7} fill={INK} />
        <T x={200} y={230} size={13} fill={MUTED}>
          {t("1 outcome", "1 outcome")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={arrowD(212, 197, 350, 155)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(212, 205, 350, 205)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d={arrowD(212, 213, 350, 255)} stroke={AMBER_DARK} sw={2} dur={0.4} />

      <Draw on={beat >= 6} delay={dl(6, 2.1)} d={roundRectD(360, 135, 140, 40, 8)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={430} y={160} size={14} fill={INK} weight={700}>
          {t("only A", "sirf A")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d={roundRectD(360, 185, 140, 40, 8)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={430} y={210} size={14} fill={INK} weight={700}>
          {t("only B", "sirf B")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.1)} d={roundRectD(360, 235, 140, 40, 8)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={430} y={260} size={14} fill={INK} weight={700}>
          {t("neither", "koi nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 4.0)}>
        <T x={540} y={305} size={15} fill={INK} weight={700}>
          {t("× n outcomes  →  3ⁿ total assignments", "× n outcomes  →  3ⁿ total assignments")}
        </T>
      </Fade>

      {/* beat 7 — the derivation, staggered */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={342} size={16} fill={INK} weight={600}>
          {"3ⁿ  −  2ⁿ (A=∅)  −  2ⁿ (B=∅)  +  1 (both ∅)"}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={540} y={372} size={16} fill={INK} weight={700}>
          {t("= 3ⁿ − 2·2ⁿ + 1   (ordered pairs)", "= 3ⁿ − 2·2ⁿ + 1   (ordered pairs)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={540} y={398} size={14} fill={MUTED} script>
          {t("÷ 2   →   the pair {A, B} is unordered", "÷ 2   →   pair {A, B} unordered hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.2)} d={roundRectD(340, 420, 400, 48, 8)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 7.0)}>
        <T x={540} y={450} size={21} fill={GREEN} weight={800}>
          {"(3ⁿ − 2ⁿ⁺¹ + 1) / 2"}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8.4)}>
        <T x={540} y={490} size={14} fill={GREEN} weight={700}>
          {t("check n = 2  →  (9 − 8 + 1)/2 = 1 ✓", "check n = 2  →  (9 − 8 + 1)/2 = 1 ✓")}
        </T>
      </Fade>
    </Scene>
  );
}

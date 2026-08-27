/**
 * M11 Ch12 · Section 33 — "Traps: ∞−∞, jump functions, wrong power, ∞ as a number"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — FIFTH and ABSOLUTE LAST section using the "four traps + two pro-tips in
 * 7 beats" shape (after Sec7, Sec14, Sec21, Sec27) — same 2×2 red-margin trap-card grid + green/
 * amber pro-tip banners below, same grid geometry, new content. CLOSES subtopic 5 (Limits at
 * Infinity & Special Cases, secs 28-33) — the last tips section and second-to-last section of
 * the entire chapter, before the two closing recap/cheat-sheet sections (34-35).
 *
 * Only 7 reveal values (beats 0-6): beat0 = seq1 heading (always-on title), beats1-4 = seq2-5
 * (the four traps), beats5-6 = seq6-7 (the two pro-tip reflexes). Distinguishing final touch
 * (small, not forced): HIGH cards this time are the TOP ROW (Trap1 top-left AND Trap2
 * top-right) — a new placement never used before (Sec7/14: top-left only; Sec21: diagonal;
 * Sec27: left column) — a fitting last variation since the closing pro-tip banners already
 * summarize the bottom-row traps. Trap3 is a plain "text" board_content (ink caption, not red —
 * same precedent as every prior section's one ink-caption card).
 *
 * board_reveal_at_english  = [0.0, 7.0, 19.8, 36.1, 48.64, 59.99, 75.61].
 * board_reveal_at_hinglish = [0.0, 6.4, 18.69, 33.96, 45.4, 57.09, 70.91].
 *
 * Grid (identical geometry to Sec7/14/21/27): cols L x60-515 / R x565-1020, gutter 50px; rows
 * y94-210 (bar y102-202) / y234-350 (bar y242-342), 24px row gap. Divider y372. Banner 1
 * (green, HIGH) y396-456. Banner 2 (amber, normal) y480-576.
 *
 * Beats:
 *  0(title, always-on) | "The four infinity-and-jump traps"
 *  1 | TRAP 1 (HIGH, red) — treating ∞−∞ = 0 or ∞/∞ = 1: two mini equations "∞ − ∞ = 0" and
 *      "∞/∞ = 1" side by side (Sec14-Trap4 "vs" comparison motif), the wrong digit crossed in
 *      each. Both crossD targets are bare digits — language-agnostic, no en/hi branching needed.
 *  2 | TRAP 2 (HIGH, red) — substituting into a jump function: Limit x→n "[x]" "=" "n" crossed
 *      (direct substitution attempt) → "LHL, RHL" landing (amber). "n" is language-agnostic.
 *  3 | TRAP 3 (normal, ink caption — plain "text" board_content) — dividing by the wrong power:
 *      the chapter's own running example Frac (3x²+5)/(6x²−x) with "÷x" (wrong power) crossed →
 *      "÷x²" (correct, amber) landing — callback to Sec28/29/30/31's signature fraction.
 *  4 | TRAP 4 (normal, red caption) — treating ∞ as a number: "∞ + 5 = ∞ ⇒ 5 = 0" with the
 *      absurd "5 = 0" crossed — a distinct ∞-arithmetic fallacy from Trap 1's indeterminate forms.
 *  5 | PRO-TIP 1 (HIGH, green banner) — the two reflexes stated crisply, callback to Sec29/30's
 *      own closing banners ("divide by highest power" / "rationalise"); checkD stamp.
 *  6 | PRO-TIP 2 (normal, amber banner + green chip) — the universal split reflex for any
 *      [·]/|·|/signum/piecewise rule, chip lands "→ split into LHL & RHL".
 *
 * Layout plan (x-range × y-range per element; formulas/crossD targets are language-agnostic
 * bare symbols throughout this section — only captions/labels get separate EN/HI boxes, noted
 * where the longer one governs):
 *  title | T mid script (26,red)                     | x304..776(en)/~similar(hi) y26..66 (bl58)
 *  b1 | red bar                                | Draw  | x60  y102..202
 *  b1 | "TRAP 1" badge (14,red,w800,start)     | T st  | x80..~121   bl120
 *  b1 | "∞ − ∞ =" (15,ink,w700,start)          | T st  | x100..152.5 bl165
 *  b1 | "0" (18,red,w700,start)                | T st  | x172..183   bl165
 *  b1 | crossD over "0"                        | Draw  | crossD(170,150,16,20)
 *  b1 | "vs" (13,muted,w600,mid)                | T mid | x206.5..219.5 bl165
 *  b1 | "∞/∞ =" (15,ink,w700,start)             | T st  | x236..273.5 bl165
 *  b1 | "1" (18,red,w700,start)                 | T st  | x292..302.8 bl165
 *  b1 | crossD over "1"                         | Draw  | crossD(290,150,14,20)
 *  b1 | caption (13,red,w800,start)             | T st  | x80..~275(en)/~255.5(hi) bl204
 *  b2 | red bar                                 | Draw  | x565 y102..202
 *  b2 | "TRAP 2" badge (14,red,w800,start)      | T st  | x585..~628 bl120
 *  b2 | Limit x→n (14,ink,start)                | Limit | x585..606  bl165+cond
 *  b2 | "[x]" (15,ink,w700,start)                | T st  | x622..644.5 bl165
 *  b2 | "=" (18,ink,w700,mid)                     | T mid | x660.5..669.5 bl166
 *  b2 | "n" (18,red,w700,start)                    | T st  | x686..696.8 bl165
 *  b2 | crossD over "n"                             | Draw | crossD(684,151,16,20)
 *  b2 | "→" (16,ink,mid)                             | T mid | x717..725  bl165
 *  b2 | "LHL, RHL" (14,amber_dark,w800,start)         | T st | x741..797  bl165
 *  b2 | caption (13,red,w800,start)                    | T st | x585..~832(en)/~929.5(hi) bl204
 *  b3 | red bar                                  | Draw  | x60  y242..342
 *  b3 | "TRAP 3" badge (12,red,w700,start)       | T st  | x80..~118  bl258
 *  b3 | Frac (3x²+5)/(6x²−x) (13,ink,w70)        | Frac  | x105..175  y282.3..308.6 (cx140,bl300)
 *  b3 | "÷x" (16,red,w700,start)                 | T st  | x191..207  bl300
 *  b3 | crossD over "÷x"                          | Draw  | crossD(189,286,20,21)
 *  b3 | "→" (16,ink,mid)                           | T mid | x227..235  bl300
 *  b3 | "÷x²" (16,amber_dark,w800,start)            | T st | x251..275  bl300
 *  b3 | caption (13,ink,w600,start)                  | T st | x80..~340(en)/~398.5(hi) bl336
 *  b4 | red bar                                   | Draw  | x565 y242..342
 *  b4 | "TRAP 4" badge (12,red,w700,start)        | T st  | x585..~623 bl258
 *  b4 | "∞ + 5 = ∞" (15,ink,w700,start)           | T st  | x585..652.5 bl300
 *  b4 | "⇒" (18,ink,mid)                           | T mid | x668.5..677.5 bl301
 *  b4 | "5 = 0" (15,red,w700,start)                 | T st | x694..731.5 bl300
 *  b4 | crossD over "5 = 0"                          | Draw | crossD(692,287,42,20)
 *  b4 | caption (13,red,w700,start)                   | T st | x585..~858(en)/~903.5(hi) bl336
 *  --divider--                                    | Draw  | x100..980 y372
 *  b5 | banner outline (green rect)                | Draw  | x160..920 y396..456
 *  b5 | banner text (17,green_dark,w800,mid)         | T mid | x~264..816(en)/~260..820(hi) bl430
 *  b5 | checkD beside text                            | Draw | checkD(895,430,16)
 *  b6 | banner outline (amber rect)                   | Draw | x160..920 y480..576
 *  b6 | line1 (16,ink,w700,mid)                         | T mid| x~368..712(en)/~368..712(hi) bl504
 *  b6 | Chip "→ split into LHL & RHL" (18,green)         | Chip | x422..658(en)/395..685(hi) y528..566
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
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The four infinity-and-jump traps", "Infinity aur jump ke chaar traps")}
        </T>
      </Fade>

      {/* beat 1 — TRAP 1 (HIGH): treating ∞−∞ = 0 or ∞/∞ = 1 */}
      <Draw on={beat >= 1} d="M60 102 L60 202" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={100} y={165} size={15} fill={INK} anchor="start" weight={700}>
          {"∞ − ∞ ="}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={172} y={165} size={18} fill={RED} anchor="start" weight={700}>
          0
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(170, 150, 16, 20)} stroke={RED} sw={2} delay={dl(1, 1.7)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={213} y={165} size={13} fill={MUTED} anchor="middle" weight={600}>
          vs
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={236} y={165} size={15} fill={INK} anchor="start" weight={700}>
          {"∞/∞ ="}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={292} y={165} size={18} fill={RED} anchor="start" weight={700}>
          1
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(290, 150, 14, 20)} stroke={RED} sw={2} delay={dl(1, 3.0)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={80} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("Both are indeterminate forms.", "Dono hi indeterminate hain.")}
        </T>
      </Fade>

      {/* beat 2 — TRAP 2 (HIGH): substituting into a jump function */}
      <Draw on={beat >= 2} d="M565 102 L565 202" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={585} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 2
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.9)} x={585} y={165} size={14} condition="x → n" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={622} y={165} size={15} fill={INK} anchor="start" weight={700}>
          [x]
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={665} y={166} size={18} fill={INK} anchor="middle" weight={700}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={686} y={165} size={18} fill={RED} anchor="start" weight={700}>
          n
        </T>
      </Fade>
      <Draw on={beat >= 2} d={crossD(684, 151, 16, 20)} stroke={RED} sw={2} delay={dl(2, 2.1)} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={721} y={165} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={741} y={165} size={14} fill={AMBER_DARK} anchor="start" weight={800}>
          LHL, RHL
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={585} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("Never substitute — split LHL and RHL.", "Kabhi substitute mat kijiye — LHL, RHL split kijiye.")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 3 (normal, ink): dividing by the wrong power */}
      <Draw on={beat >= 3} d="M60 242 L60 342" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 3
        </T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 0.9)} x={140} y={300} size={13} numerator="3x²+5" denominator="6x²−x" width={70} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={191} y={300} size={16} fill={RED} anchor="start" weight={700}>
          {"÷x"}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={crossD(189, 286, 20, 21)} stroke={RED} sw={2} delay={dl(3, 1.7)} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={231} y={300} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={251} y={300} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          {"÷x²"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={80} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Always the denominator's highest power.", "Hamesha denominator ki highest power se divide.")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 4 (normal, red): treating ∞ as a number you can add or cancel */}
      <Draw on={beat >= 4} d="M565 242 L565 342" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={585} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 4
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={585} y={300} size={15} fill={INK} anchor="start" weight={700}>
          {"∞ + 5 = ∞"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={673} y={301} size={18} fill={INK} anchor="middle" weight={700}>
          ⇒
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={694} y={300} size={15} fill={RED} anchor="start" weight={700}>
          {"5 = 0"}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(692, 287, 42, 20)} stroke={RED} sw={2} delay={dl(4, 2.0)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={585} y={336} size={13} fill={RED} anchor="start" weight={700}>
          {t("∞ is a behaviour, not a number to cancel.", "∞ behaviour hai, cancel karne wala number nahin.")}
        </T>
      </Fade>

      {/* divider between the traps grid and the pro-tips */}
      <Draw on={beat >= 5} d="M100 372 L980 372" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} dur={0.6} />

      {/* beat 5 — PRO-TIP 1 (HIGH, green): the two reflexes, callback to Sec29/30's closing banners */}
      <Draw
        on={beat >= 5}
        d="M160 396 L920 396 L920 456 L160 456 Z"
        stroke={GREEN}
        sw={2.4}
        delay={dl(5, 0.7)}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={430} size={17} fill={GREEN_DARK} anchor="middle" weight={800}>
          {t(
            "Rational at ∞ → degree rule; surd ∞−∞ → rationalise on sight.",
            "Rational at ∞ → degree rule; surd ∞−∞ → dekhte hi rationalise."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(895, 430, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 2.2)} dur={0.5} />

      {/* beat 6 — PRO-TIP 2 (normal, amber): the universal split reflex */}
      <Draw
        on={beat >= 6}
        d="M160 480 L920 480 L920 576 L160 576 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(6, 0.7)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={504} size={16} fill={INK} anchor="middle" weight={700}>
          {t("See [·], |·|, signum, or a piecewise rule?", "[·], |·|, signum, ya piecewise rule dikhe?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip
          x={en ? 422 : 395}
          y={528}
          w={en ? 236 : 290}
          h={38}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN_DARK}
          size={18}
          script={false}
        >
          {t("→ split into LHL & RHL", "→ LHL, RHL mein split kijiye")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch12 · Section 35 — "Chapter 12 cheat sheet: exam-day recall"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — the FINAL section of the chapter. No narration segments (expected
 * for cheat_sheet/formula_recap, per task brief) — board labels authored fresh, reusing this
 * chapter's own established terminology (junction, star limit, LHL/RHL, first principle).
 *
 * Two halves: TOP is a numbered decision ladder (steps 1 -> 2 -> 3-5) for "how do I evaluate
 * ANY limit", built as a muted spine + colored step badges, growing beat by beat (the spine
 * segment to a step draws just before that step's badge+text, "skeleton-then-colored" motif).
 * BOTTOM is five rapid-fire exam gotchas, one per beat, each its own red-margin-tick line —
 * a denser single-column variant of the chapter's repeated trap-list motif (Sec7/14/21/27/33),
 * appropriate for a final "everything at once" recall pass.
 *
 * board_reveal_at_english = [0, 9.73, 17.66, 30.81, 48.13, 61.53, 76.46, 89.34, 107.35] (9 beats 0-8).
 * board_reveal_at_hinglish = [0, 9.22, 16.55, 31.15, 47.87, 59.48, 74.07, 85.85, 101.55].
 *
 * Beats:
 *  0(title, always-on) | "Chapter 12 cheat sheet: exam-day recall"
 *  1 | STEP 1 badge (ink) + "Substitute. A finite number is the answer."
 *  2 | STEP 2 badge (red, HIGH) + "Got 0/0?" + 3 options line
 *  3 | STEP 3-5 badge (amber) + "Other forms:" + 3 options line
 *  4 | Gotcha 1 (red tick): limit != function value
 *  5 | Gotcha 2 (red tick): radians only, match argument, square k
 *  6 | Gotcha 3 (red tick): e^x-1)/x vs a^x-1)/x
 *  7 | Gotcha 4 (red tick): product rule cross term, chain rule inside kept
 *  8 | Gotcha 5 (red tick): infinity-minus-infinity, jumps, differentiable=>continuous
 *
 * Layout plan:
 *  spine    | vertical muted/colored line segments | x70  y96..248 (grown in 2 segments)
 *  badge1   | circle r13 + "1"                      | (70,110)
 *  b1 text  | single line (15,ink)                  | T st x100 y115
 *  badge2   | circle r13 + "2" (red)                | (70,158)
 *  b2 label | "Got 0/0?" (15,red,w800)               | T st x100 y150
 *  b2 opts  | 3-way options (14,red,w600)            | T st x100 y172
 *  badge3   | circle r13 + "3-5" (amber)             | (70,215)
 *  b3 label | "Other forms:" (14,amber_dark,w700)    | T st x100 y207
 *  b3 opts  | 3-way options (13,amber_dark)          | T st x100 y229
 *  divider  | y255 x60..1020 (amber)
 *  G1..G5   | red tick bar + text (15,red)           | x60 tick, x76 text, y310/356/402/448/494
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch12Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Chapter 12 cheat sheet: exam-day recall", "Chapter 12 cheat sheet: exam-day yaad")}
        </T>
      </Fade>

      {/* beat 1 — Step 1 */}
      <Draw on={beat >= 1} d="M70 96 L70 145" stroke="#9C988C" sw={2} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={70} cy={110} r={13} fill="none" stroke={INK} strokeWidth={2} />
        <T x={70} y={115} size={14} fill={INK} anchor="middle" weight={700}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={100} y={115} size={15} fill={INK} anchor="start" weight={600}>
          {t("Substitute. A finite number is the answer.", "Substitute karein. Finite number mila to wahi answer hai.")}
        </T>
      </Fade>

      {/* beat 2 — Step 2 */}
      <Draw on={beat >= 2} d="M70 123 L70 195" stroke={RED} sw={2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={70} cy={158} r={13} fill="none" stroke={RED} strokeWidth={2.4} />
        <T x={70} y={163} size={14} fill={RED} anchor="middle" weight={700}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={100} y={150} size={15} fill={RED} anchor="start" weight={800}>
          {t("Got 0/0?", "0/0 mila?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={100} y={172} size={14} fill={RED} anchor="start" weight={600}>
          {t(
            "Factor & cancel  ·  Rationalise a surd  ·  Route through a junction",
            "Factor & cancel karein  ·  Surd rationalise karein  ·  Junction se route karein"
          )}
        </T>
      </Fade>

      {/* beat 3 — Steps 3-5 */}
      <Draw on={beat >= 3} d="M70 171 L70 248" stroke={AMBER_DARK} sw={2} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Circle cx={70} cy={215} r={15} fill="none" stroke={AMBER_DARK} strokeWidth={2.2} />
        <T x={70} y={219} size={11} fill={AMBER_DARK} anchor="middle" weight={700}>
          3-5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={100} y={207} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Other forms:", "Baaki forms:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={100} y={229} size={13} fill={AMBER_DARK} anchor="start">
          {"x→∞ → degree rule   ·   1^∞ → e^(lim g(f−1))   ·   jump → LHL vs RHL"}
        </T>
      </Fade>

      <Draw on={beat >= 3} d="M60 255 L1020 255" stroke={AMBER_DARK} sw={1.2} delay={dl(3, 1.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={60} y={278} size={13} fill="#9C988C" anchor="start">
          {t("Five gotchas to lock in:", "Paanch gotchas yaad rakhein:")}
        </T>
      </Fade>

      {/* beat 4 — Gotcha 1 */}
      <Draw on={beat >= 4} d="M60 300 L60 316" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={76} y={310} size={15} fill={RED} anchor="start" weight={600}>
          {t(
            "Limit ≠ function value; 0/0 means resolve, not 'DNE'.",
            "Limit ≠ function value; 0/0 ka matlab resolve karo, 'DNE' nahin."
          )}
        </T>
      </Fade>

      {/* beat 5 — Gotcha 2 */}
      <Draw on={beat >= 5} d="M60 346 L60 362" stroke={RED} sw={3} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={76} y={356} size={15} fill={RED} anchor="start" weight={600}>
          {t(
            "Radians only for sin x/x=1; match the argument; square the k for 1−cos.",
            "sin x/x=1 sirf radians mein; argument match karo; 1−cos ke liye k square karo."
          )}
        </T>
      </Fade>

      {/* beat 6 — Gotcha 3 */}
      <Draw on={beat >= 6} d="M60 392 L60 408" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={76} y={402} size={15} fill={RED} anchor="start" weight={600}>
          {"(e^x−1)/x→1 but (a^x−1)/x→ln a — only base e is clean."}
        </T>
      </Fade>

      {/* beat 7 — Gotcha 4 */}
      <Draw on={beat >= 7} d="M60 438 L60 454" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={76} y={448} size={15} fill={RED} anchor="start" weight={600}>
          {t(
            "Product rule has a cross term; chain rule keeps the inside derivative.",
            "Product rule mein cross term hota hai; chain rule inside ka derivative rakhta hai."
          )}
        </T>
      </Fade>

      {/* beat 8 — Gotcha 5 */}
      <Draw on={beat >= 8} d="M60 484 L60 500" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={76} y={494} size={15} fill={RED} anchor="start" weight={600}>
          {t(
            "∞−∞ ≠ 0; jumps need LHL vs RHL; differentiable ⇒ continuous, not conversely.",
            "∞−∞ ≠ 0; jumps ko LHL vs RHL chahiye; differentiable ⇒ continuous, ulta nahin."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

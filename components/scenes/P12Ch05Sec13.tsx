/**
 * P12Ch05 · Section 13 — "Cutting a magnet in half, and what happens to its period"
 * Subtopic: Bar Magnet, Magnetic Field Lines and Dipole Moment
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: a general cutting table — half of it given
 * over to the LONGITUDINAL cut (T′ = T), which the voice never mentions — and
 * carrying no numbers at all, so the spoken worked example had no board.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: one transverse cut, worked numerically.
 *     T  = 2π √( I / (m B) ),  B unchanged
 *     I′ = ½ × ¼ × I = I/8      (mass halves, length halves and is squared)
 *     m′ = m/2                  (pole strength kept, separation halved)
 *     T′/T = √( (1/8) ÷ (1/2) ) = √(1/4) = 1/2   ⇒  T′ = 1.5 s
 *     trap: tracking I alone gives √(1/8) → 3.0 × 0.354 ≈ 1.06 s, an option.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "two changing quantities at once"      title + underline
 *   1  "picture the cut"                      blade ⊥ to length, kept piece
 *   2  "period was 3.0 s, find the new one"   givens
 *   3  "T = 2π√(I/mB), B does not change"     the governing relation
 *   4  "first the moment of inertia"          I′ = I/8
 *   5  "now the magnetic moment"              m′ = m/2
 *   6  "feed both into the formula"           √(1/4) = ½ ⇒ T′ = 1.5 s
 *   7  "the trap is beautifully set"          1.06 s distractor + the two questions
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Cut the magnet — two things change, not one",
             "Cut the magnet — two things change, not one")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the cut ---------------- */}
      <G transform="translate(50, 84)">
        <Fade on={beat >= 1} delay={dl(1, 0.3)}>
          <Rect x={20} y={40} width={130} height={36} fill={CREAM} stroke={INK} strokeWidth={2} />
          <Rect x={150} y={40} width={130} height={36} fill="#fdece9" stroke={INK} strokeWidth={2} />
          <T x={85} y={64} size={14} fill={INK} weight={800}>S</T>
          <T x={215} y={64} size={14} fill={RED} weight={800}>N</T>
          <T x={150} y={98} size={13} fill={INK} weight={800}>L,  M</T>
        </Fade>

        {/* the blade */}
        <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 150 18 L 150 88" stroke={RED} sw={2.4} dur={0.45} />
        <Fade on={beat >= 1} delay={dl(1, 1.2)}>
          <T x={158} y={26} size={12.5} fill={RED} weight={800} anchor="start">
            {t("cut ⊥ to the length", "cut ⊥ to the length")}
          </T>
        </Fade>

        <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(300, 58, 344, 58)} stroke={INK} sw={2} dur={0.4} />

        {/* the piece we keep */}
        <Fade on={beat >= 1} delay={dl(1, 2.0)}>
          <Rect x={364} y={40} width={65} height={36} fill={CREAM} stroke={INK} strokeWidth={2} />
          <Rect x={429} y={40} width={65} height={36} fill="#fdece9" stroke={INK} strokeWidth={2} />
          <T x={396} y={64} size={13} fill={INK} weight={800}>S</T>
          <T x={461} y={64} size={13} fill={RED} weight={800}>N</T>
          <T x={429} y={98} size={13} fill={GREEN} weight={800}>L/2,  M/2</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 2.5)}>
          <T x={20} y={128} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("the blade comes down perpendicular to the length —",
               "the blade comes down perpendicular to the length —")}
          </T>
        </Fade>
        <Fade on={beat >= 1} delay={dl(1, 2.9)}>
          <T x={20} y={150} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("half the original mass AND half the original length. Both matter.",
               "half the original mass AND half the original length. Both matter.")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 2 & 3 — givens and the relation ---------------- */}
      <G transform="translate(600, 84)">
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("GIVEN", "GIVEN")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={0} y={46} size={14.5} fill={INK} weight={800} anchor="start">
            T = 3.0 s before the cut
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.0)}>
          <T x={0} y={72} size={14.5} fill={INK} weight={800} anchor="start">
            {t("one of the two equal pieces, in the very same field",
               "one of the two equal pieces, in the very same field")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.4)}>
          <T x={0} y={98} size={13} fill={AMBER_DARK} weight={700} anchor="start">
            {t("find the new period T′", "find the new period T′")}
          </T>
        </Fade>

        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={0} y={138} size={14} fill={RED} weight={800} anchor="start">
            {t("THE GOVERNING RELATION", "THE GOVERNING RELATION")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.7)}>
          <T x={0} y={170} size={16} fill={INK} weight={800} anchor="start">
            T = 2π √( I / m B )
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.2)}>
          <T x={0} y={196} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("the field B does not change — so watch only I and m",
               "the field B does not change — so watch only I and m")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beats 4 & 5 — the two changes ---------------- */}
      <G transform="translate(50, 290)">
        <Badge n={1} cx={14} cy={10} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={38} y={15} size={13.5} fill={RED} weight={800} anchor="start">
            {t("THE MOMENT OF INERTIA", "THE MOMENT OF INERTIA")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={38} y={46} size={14} fill={INK} weight={800} anchor="start">I = M L² / 12</T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.3)}>
          <T x={38} y={72} size={13.5} fill={INK} weight={700} anchor="start">
            {t("M → M/2  and  L → L/2, and the length is squared",
               "M → M/2  and  L → L/2, and the length is squared")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.8)}>
          <T x={38} y={100} size={14.5} fill={GREEN} weight={900} anchor="start">
            I′ = ½ × ¼ × I = I / 8
          </T>
        </Fade>

        <Badge n={2} cx={534} cy={10} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={558} y={15} size={13.5} fill={RED} weight={800} anchor="start">
            {t("THE MAGNETIC MOMENT", "THE MAGNETIC MOMENT")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.9)}>
          <T x={558} y={46} size={13.5} fill={INK} weight={700} anchor="start">
            {t("cutting ⊥ to the length keeps the pole strength",
               "cutting ⊥ to the length keeps the pole strength")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.3)}>
          <T x={558} y={72} size={13.5} fill={INK} weight={700} anchor="start">
            {t("but halves the pole separation", "but halves the pole separation")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1.8)}>
          <T x={558} y={100} size={14.5} fill={GREEN} weight={900} anchor="start">
            {t("m′ = m / 2   ← the step people forget", "m′ = m / 2   ← the step people forget")}
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 6 — combine ---------------- */}
      <G transform="translate(50, 402)">
        <Fade on={beat >= 6} delay={dl(6, 0.2)}>
          <T x={0} y={16} size={14} fill={RED} weight={800} anchor="start">
            {t("FEED BOTH INTO THE ROOT", "FEED BOTH INTO THE ROOT")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.7)}>
          <T x={0} y={46} size={15.5} fill={INK} weight={800} anchor="start">
            T′ / T = √( (I′/I) ÷ (m′/m) ) = √( (1/8) ÷ (1/2) ) = √(1/4) = 1/2
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.3)}>
          <T x={0} y={78} size={18} fill={GREEN} weight={900} anchor="start">
            T′ = ½ × 3.0 s = 1.5 s
          </T>
        </Fade>
      </G>

      {/* ---------------- beat 7 — the trap ---------------- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 66 494 v 46" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={84} y={510} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the trap · track the inertia alone and you get √(1/8) → T′ ≈ 1.06 s, and that number is on the option list",
             "the trap · track the inertia alone and you get √(1/8) → T′ ≈ 1.06 s, and that number is on the option list")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={84} y={534} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("whenever a magnet is cut, ask two questions and never one: what happened to I, and what happened to m?",
             "whenever a magnet is cut, ask two questions and never one: what happened to I, and what happened to m?")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={40} y={550} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ I → I/8 · m → m/2 · √(¼) = ½ · T′ = 1.5 s",
             "★ I → I/8 · m → m/2 · √(¼) = ½ · T′ = 1.5 s")}
        </Chip>
      </Fade>
    </Scene>
  );
}

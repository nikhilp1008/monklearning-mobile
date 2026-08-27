/**
 * Ch01 · Section 53 — "Definitions, implied uncertainty, and scientific notation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.6, 29.4, 45.5, 70.3, 82.6, 103.6, 124.7]):
 *  0 title
 *  1 definition box · "FIRST" span in amber, underlined
 *  2 implied-uncertainty chip (± 1 in the last place) + JEE note
 *  3 the ladder: 2.5→±0.1 · 2.50→±0.01 · 2.500→±0.001 · ×10 tighter
 *  4 anatomy: a × 10ᵇ with mantissa / exponent labels + arrows
 *  5 mantissa carries ALL — power carries NONE
 *  6 4500 resolves: 4.5/4.50/4.500 ×10³ rows
 *  7 verdict: the only notation with zero ambiguity
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | box x230..800 y92..142 · spans st x250 / x552 (amber) / x620 bl 122 · underline x550..612 y134
 *  b2 | chip x180..900 y168..204 · sub script 13 mid bl 232
 *  b3 | rows 22 st x300 → ± at x420, bl 292/336/380 · label cx300 bl 415
 *  b4 | "a × 10ᵇ" 40 cx790 bl 300 · labels bl 350 cx680/cx910 + arrows to (740,317)/(835,317)
 *  b5 | green cx790 bl 385 · red cx790 bl 410
 *  b6 | rows 18 st x140 bl 460/492/524 · note cx330 bl 552
 *  b7 | green cx740 bl 500?? → cx740 bl 500 & muted bl 530 (x ≥ 560 zone)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "the definitions that get quoted back",
            "wo definitions jo answers mein wapas likhi jaati hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the definition, FIRST doing the work */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 242 92 h 546 q 12 0 12 12 v 26 q 0 12 -12 12 h -546 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={250} y={122} size={18} fill={INK} weight={700} anchor="start">
          {t("sig figs = reliable digits + the", "sig figs = bharose waale digits +")}
        </T>
        <T x={552} y={122} size={18} fill={AMBER_DARK} weight={800} anchor="start">
          {t("FIRST", "PEHLA")}
        </T>
        <T x={620} y={122} size={18} fill={INK} weight={700} anchor="start">
          {t("uncertain digit", "anischit digit")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8)}
        d="M 550 134 C 568 131, 596 136, 614 132"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />

      {/* beat 2 — implied uncertainty */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={180} y={168} w={720} h={36} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          {t(
            "writing a number claims ± 1 in its LAST place",
            "number likh dena uske AAKHRI sthaan par ± 1 ka daava hai"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={540} y={232} size={13} fill={MUTED} script>
          {t(
            "the silent engine behind half the JEE questions",
            "aadhe JEE sawaalon ka khamosh engine"
          )}
        </T>
      </Fade>

      {/* beat 3 — the ladder */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={300} y={292} size={22} fill={INK} weight={700} anchor="start">2.5</T>
        <T x={420} y={292} size={22} fill={AMBER_DARK} weight={600} anchor="start">± 0.1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={300} y={336} size={22} fill={INK} weight={700} anchor="start">2.50</T>
        <T x={420} y={336} size={22} fill={AMBER_DARK} weight={600} anchor="start">± 0.01</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={300} y={380} size={22} fill={INK} weight={700} anchor="start">2.500</T>
        <T x={420} y={380} size={22} fill={AMBER_DARK} weight={600} anchor="start">± 0.001</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={300} y={415} size={14} fill={AMBER_DARK} script>
          {t(
            "each digit — a ×10 tighter claim",
            "har extra digit — daava ×10 tighter"
          )}
        </T>
      </Fade>

      {/* beat 4 — scientific notation anatomy */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={790} y={300} size={40} fill={INK} weight={700}>a × 10ᵇ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={680} y={350} size={14} fill={AMBER_DARK} script>
          {t("mantissa — 1 ≤ a < 10", "mantissa — 1 ≤ a < 10")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5)}
        d={arrowD(700, 334, 736, 317)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={915} y={350} size={14} fill={MUTED} script>
          {t("the exponent", "power")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8)}
        d={arrowD(900, 334, 848, 315)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />

      {/* beat 5 — who carries the sig figs */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={790} y={388} size={14} fill={GREEN} script>
          {t(
            "the mantissa carries ALL the sig figs",
            "mantissa SAARE sig figs dhota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={790} y={414} size={14} fill={RED} script>
          {t(
            "the power carries NONE — not some",
            "power EK BHI nahi dhoti — kuchh nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — 4500 resolved */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={140} y={460} size={18} fill={INK} weight={600} anchor="start">4.5 × 10³ → 2 sf</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={140} y={492} size={18} fill={INK} weight={600} anchor="start">4.50 × 10³ → 3 sf</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={140} y={524} size={18} fill={INK} weight={600} anchor="start">4.500 × 10³ → 4 sf</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 16)}>
        <T x={330} y={552} size={13} fill={AMBER_DARK} script>
          {t("same value — three promises", "wahi value — teen waade")}
        </T>
      </Fade>

      {/* beat 7 — why it matters */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={740} y={500} size={15} fill={GREEN} script>
          {t(
            "the ONLY notation with zero ambiguity",
            "ambiguity ZERO karne waali akeli notation"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={740} y={530} size={13} fill={MUTED} script>
          {t(
            "a well-posed exam hands you numbers in this form",
            "dhang ka exam number isi roop mein dega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

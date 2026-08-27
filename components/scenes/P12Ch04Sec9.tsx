/**
 * P12Ch04 · Section 9 — "Concept Intuition: The Shortcut Around Integration"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW
 *   Four gates (0, 1, 4, 6) over eight narration segments, so the board froze
 *   through the whole statement of the law, the parikrama analogy and the
 *   sign convention. Four drawn shapes — the title underline and three
 *   rules — and, in a section whose narration explicitly says "look at the
 *   figure", no figure: no Amperian loop, no threading currents, no ⊙/⊗.
 *
 * WHAT THE NARRATION TEACHES
 *   Opens Subtopic Two. Biot–Savart always works but the integrals are
 *   brutal; Ampere's circuital law is the shortcut, the magnetic analogue of
 *   Gauss's law. Walking once around ANY closed loop and totalling B along
 *   the direction of travel gives μ₀ × (current threading the loop) — nothing
 *   else enters. Two intuitions: (1) only enclosed current counts, an outside
 *   current changes the local field but cancels over the full circuit;
 *   (2) the sign comes from the right hand — fingers along the traversal,
 *   thumb positive, so opposed currents subtract.
 *
 * BEAT MAP (n_reveals = 8 · gates 0..7, every beat used)
 *   0  title + underline + the four exam-board chips
 *   1  why we want a shortcut (Biot–Savart the hard way; Gauss analogy)
 *   2  the whole idea in one sentence
 *   3  the law itself, ∮ B · dl = μ₀ I_enc, and what the ring means
 *   4  the parikrama / tailwind picture, incl. the outside current cancelling
 *   5  FIGURE — wiggly Amperian loop, I₁ ⊙ up, I₂ ⊗ down, I₃ outside
 *   6  intuition ① only enclosed, threading current counts
 *   7  intuition ② right-hand sign convention + traversal arrows + I_enc = I₁ − I₂
 *
 * No numeric arithmetic in this section — it is purely conceptual.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

/** The deliberately wiggly Amperian loop of the figure. */
const LOOP_D =
  "M 800 158 C 880 142, 975 165, 1005 215 C 1032 262, 990 315, 915 326 " +
  "C 845 337, 762 328, 716 296 C 676 268, 668 205, 712 175 C 738 158, 772 160, 800 158 Z";

export default function P12Ch04Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title + exam map ──────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Ampere's Circuital Law — the shortcut around integration",
             "Ampere's Circuital Law — the shortcut around integration")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 214 60 C 470 55, 660 65, 866 58" stroke={RED} sw={2.2} dur={0.7} />

      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <Chip x={44} y={76} w={236} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={11} script={false}>
          CBSE · derivation, 3 marks
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <Chip x={296} y={76} w={236} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={11} script={false}>
          JEE Main · thick wire, coax
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <Chip x={548} y={76} w={236} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={11} script={false}>
          JEE Adv · cavity superposition
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 12)}>
        <Chip x={800} y={76} w={240} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={11} script={false}>
          NEET · inside vs outside, I_enc
        </Chip>
      </Fade>

      {/* ═══════════ LEFT COLUMN ═══════════ */}

      {/* beat 1 — why a shortcut */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={138} size={14} fill={RED} weight={800} anchor="start">
          {t("WHY WE WANT A SHORTCUT", "WHY WE WANT A SHORTCUT")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={160} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Subtopic One: chop the wire into elements, apply Biot–Savart, integrate.",
             "Subtopic One: chop the wire into elements, apply Biot–Savart, integrate.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={44} y={180} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Always works — but the integrals are brutal and the clock is running.",
             "Always works — but the integrals are brutal and the clock is running.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={44} y={200} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("Ampere is to magnetism what Gauss was to electrostatics.",
             "Ampere is to magnetism what Gauss was to electrostatics.")}
        </T>
      </Fade>

      {/* beat 2 — the one-sentence idea */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={232} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("THE WHOLE IDEA IN ONE SENTENCE", "THE WHOLE IDEA IN ONE SENTENCE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={44} y={254} size={12.5} fill={INK} weight={700} anchor="start">
          {t("Walk once around any closed loop, keeping a running total of B",
             "Walk once around any closed loop, keeping a running total of B")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={44} y={274} size={12.5} fill={INK} weight={700} anchor="start">
          {t("along your direction of travel. That total depends only on the",
             "along your direction of travel. That total depends only on the")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={44} y={294} size={12.5} fill={INK} weight={700} anchor="start">
          {t("current that pierces the loop. Nothing else.",
             "current that pierces the loop. Nothing else.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={44} y={314} size={12} fill={MUTED} weight={600} anchor="start">
          {t("not the path's shape · not nearby currents · not the distances",
             "not the path's shape · not nearby currents · not the distances")}
        </T>
      </Fade>

      {/* beat 3 — the law */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={44} y={332} w={476} h={54} fill={CREAM} stroke={INK} textFill={INK} size={21}>
          ∮ B · dl = μ₀ I_enclosed
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={44} y={410} size={12.5} fill={RED} weight={700} anchor="start">
          {t("the ring on ∮ is not decoration — the path must close on itself",
             "the ring on ∮ is not decoration — the path must close on itself")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={44} y={430} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("no distance, no angle, no source geometry — all of it swallowed",
             "no distance, no angle, no source geometry — all of it swallowed")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={44} y={450} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("by the act of going all the way around.",
             "by the act of going all the way around.")}
        </T>
      </Fade>

      {/* beat 4 — the parikrama picture */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={482} size={14} fill={GREEN} weight={800} anchor="start">
          {t("THE PARIKRAMA PICTURE", "THE PARIKRAMA PICTURE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={44} y={504} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("A devotee walks one full circuit round the temple, adding up how",
             "A devotee walks one full circuit round the temple, adding up how")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={44} y={524} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("hard the wind pushes them ALONG the path at each step. That total",
             "hard the wind pushes them ALONG the path at each step. That total")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={44} y={544} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("tailwind tells them the enclosed current — however wiggly the walk.",
             "tailwind tells them the enclosed current — however wiggly the walk.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={44} y={568} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("A current outside bends the field at every point of the walk, yet",
             "A current outside bends the field at every point of the walk, yet")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.8)}>
        <T x={44} y={588} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("its pushes cancel perfectly over the full circuit — exactly zero.",
             "its pushes cancel perfectly over the full circuit — exactly zero.")}
        </T>
      </Fade>

      {/* ═══════════ RIGHT COLUMN ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 536 122 L 536 596" stroke={MUTED} sw={1.1} dur={0.7} />

      {/* beat 5 — the figure */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={556} y={134} size={14} fill={RED} weight={800} anchor="start">
          {t("THE ACCOUNTING, MADE CONCRETE", "THE ACCOUNTING, MADE CONCRETE")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={LOOP_D} stroke={MUTED} sw={2.6} dur={1.6} />

      {/* I₁ — threading up, out of the page, inside the loop */}
      <Draw on={beat >= 5} delay={dl(5, 3)} d={circleD(800, 215, 13)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Circle cx={800} cy={215} r={3.4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.7)}>
        <T x={800} y={247} size={11.5} fill={GREEN} weight={800}>I₁  ⊙  up  (+)</T>
      </Fade>

      {/* I₂ — threading down, into the page, inside the loop */}
      <Draw on={beat >= 5} delay={dl(5, 5)} d={circleD(912, 264, 13)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 5.4)} d="M 903 255 L 921 273 M 921 255 L 903 273" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <T x={912} y={296} size={11.5} fill={RED} weight={800}>I₂  ⊗  down  (−)</T>
      </Fade>

      {/* I₃ — entirely outside the loop */}
      <Draw on={beat >= 5} delay={dl(5, 7.2)} d={circleD(608, 236, 13)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 7.6)}>
        <Circle cx={608} cy={236} r={3.4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.9)}>
        <T x={608} y={268} size={11.5} fill={AMBER_DARK} weight={800}>I₃ outside</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.6)}>
        <T x={608} y={286} size={11} fill={MUTED} weight={600}>contributes 0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9.4)}>
        <T x={556} y={352} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("the grey path is deliberately wiggly — its shape is irrelevant",
             "the grey path is deliberately wiggly — its shape is irrelevant")}
        </T>
      </Fade>

      {/* beat 6 — intuition ① */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={556} y={384} size={14} fill={GREEN} weight={800} anchor="start">
          {t("① ONLY ENCLOSED, THREADING CURRENT COUNTS",
             "① ONLY ENCLOSED, THREADING CURRENT COUNTS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={556} y={406} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("An outside wire really does change B at each individual point of",
             "An outside wire really does change B at each individual point of")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={556} y={426} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the loop — a probe there would read a different value.",
             "the loop — a probe there would read a different value.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={556} y={446} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Added up all the way around, those contributions cancel exactly.",
             "Added up all the way around, those contributions cancel exactly.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={556} y={468} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("The local field changes. The total does not.",
             "The local field changes. The total does not.")}
        </T>
      </Fade>

      {/* beat 7 — intuition ② and the traversal arrows on the figure */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={arrowD(742, 168, 796, 157)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={arrowD(846, 333, 788, 325)} stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={556} y={500} size={14} fill={GREEN} weight={800} anchor="start">
          {t("② SIGNS COME FROM THE RIGHT HAND", "② SIGNS COME FROM THE RIGHT HAND")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={556} y={522} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Curl your fingers along the direction you traverse the loop; the",
             "Curl your fingers along the direction you traverse the loop; the")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={556} y={542} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("thumb marks the POSITIVE sense. Opposed currents subtract.",
             "thumb marks the POSITIVE sense. Opposed currents subtract.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <Chip x={556} y={554} w={484} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          I_enclosed = I₁ − I₂    (I₃ contributes nothing)
        </Chip>
      </Fade>
    </Scene>
  );
}

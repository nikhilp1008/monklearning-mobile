/**
 * P12Ch02 · Section 21 — "CBSE level: potential energy of a two-charge system"
 * Subtopic: Potential Energy & External Fields
 *
 * TWO DEFECTS FIXED HERE (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A DIFFERENT PROBLEM FROM THE VOICE. The scene was drawn
 *    for q₁ = +7 µC, q₂ = −2 µC at r = 18 cm giving U = −0.7 J, while the
 *    narration works +3 µC and −5 µC at 0.6 m giving −0.225 J. A student heard
 *    one worked example and watched another. Every quantity on the board now
 *    comes from the narration:
 *        U = k q₁ q₂ / r = 9×10⁹ × (3×10⁻⁶) × (−5×10⁻⁶) / 0.6 = −0.225 J
 *        W_sep = 0 − (−0.225) = +0.225 J
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The summary badge, its heading, its two
 *    lines and the footer chip were all gated on `beat >= 7`, but this section
 *    has 7 narration segments, so useBeat only ever returns 0..6. That content
 *    was invisible in production. Beats now map 1:1 onto the seven segments:
 *
 *      0  "a clean substitution problem…"      title
 *      1  "+3 µC and −5 µC, 0.6 m apart"       charge diagram
 *      2  "substitute directly, keep signs"    formula + substitution
 *      3  "carry the signs through carefully"  the sign warning
 *      4  "gives minus 0.225 joules"           the result
 *      5  "the negative sign is not a mistake" what it means
 *      6  "bound, attractive system"           W_sep + verdict
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 12} ${cy} A 12 12 0 1 1 ${cx + 12} ${cy} A 12 12 0 1 1 ${cx - 12} ${cy}`}
        stroke={RED} sw={2.1} dur={0.38} />
      <Fade on={on} delay={delay + 0.26}>
        <T x={cx} y={cy + 5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch02Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Potential energy of a two-charge system",
             "Potential energy of a two-charge system")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 500 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.65} />

      {/* ---------------- LEFT: the set-up (beat 1) ---------------- */}
      <G transform="translate(40, 84)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("TWO POINT CHARGES IN VACUUM", "TWO POINT CHARGES IN VACUUM")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.8)}>
          {/* q1 = +3 µC */}
          <Circle cx={110} cy={150} r={24} fill="#ffe4e6" stroke={RED} strokeWidth={2.4} />
          <T x={110} y={157} size={15} fill={RED} weight={900}>+3 µC</T>
          <T x={110} y={112} size={12.5} fill={RED} weight={800}>q₁</T>

          {/* separation */}
          <Line x1="136" y1="150" x2="358" y2="150" stroke={INK} strokeWidth={2.2} strokeDasharray="5 5" />
          <T x={247} y={133} size={13.5} fill={INK} weight={800}>r = 0.6 m</T>

          {/* q2 = −5 µC */}
          <Circle cx={384} cy={150} r={24} fill="#dcfce7" stroke={GREEN} strokeWidth={2.4} />
          <T x={384} y={157} size={15} fill={GREEN} weight={900}>−5 µC</T>
          <T x={384} y={112} size={12.5} fill={GREEN} weight={800}>q₂</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 1.3)}>
          <T x={45} y={212} anchor="start" size={13} fill={INK_LIGHT} weight={600}>
            {t("Opposite signs — so expect a negative answer.",
               "Opposite signs — so expect a negative answer.")}
          </T>
        </Fade>
      </G>

      {/* ---------------- RIGHT: the substitution ---------------- */}
      <G transform="translate(560, 84)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("SUBSTITUTE, KEEPING EVERY SIGN", "SUBSTITUTE, KEEPING EVERY SIGN")}
          </T>
        </Fade>

        {/* beat 2 — formula and substitution */}
        <Fade on={beat >= 2} delay={dl(2, 0.8)}>
          <T x={45} y={72} size={15} fill={INK} weight={800} anchor="start">
            U = k q₁ q₂ / r
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.1)}>
          <T x={45} y={108} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            U = 9×10⁹ × (3×10⁻⁶) × (−5×10⁻⁶) / 0.6
          </T>
        </Fade>

        {/* beat 3 — the sign warning */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={45} y={146} size={13} fill={RED} weight={800} anchor="start">
            {t("Carry the signs through — don't fix them at the end.",
               "Carry the signs through — don't fix them at the end.")}
          </T>
        </Fade>

        {/* beat 4 — the result */}
        <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M 45 168 L 448 168" stroke={INK} sw={1.7} dur={0.5} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={200} size={17} fill={GREEN} weight={900} anchor="start">
            U = −0.135 / 0.6 = −0.225 J
          </T>
        </Fade>
      </G>

      {/* ---------------- LOWER: what the sign means ---------------- */}
      <G transform="translate(40, 372)">
        {/* beat 5 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("THE MINUS SIGN IS THE ANSWER TALKING",
               "THE MINUS SIGN IS THE ANSWER TALKING")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={45} y={52} size={13.5} fill={INK} weight={700} anchor="start">
            {t("It is not a slip in the arithmetic — it is telling you something physical.",
               "It is not a slip in the arithmetic — it is telling you something physical.")}
          </T>
        </Fade>

        {/* beat 6 — bound system + the work to separate */}
        <Fade on={beat >= 6} delay={dl(6, 0.2)}>
          <T x={45} y={82} size={14} fill={GREEN} weight={800} anchor="start">
            {t("Negative U ⇒ a bound, attractive system.",
               "Negative U ⇒ a bound, attractive system.")}
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={110} size={14} fill={INK} weight={800} anchor="start">
            W_sep = U(∞) − U = 0 − (−0.225) = +0.225 J
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={136} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("energy must come from outside to pull the charges apart",
               "energy must come from outside to pull the charges apart")}
          </T>
        </Fade>
      </G>

      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Chip x={40} y={548} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ U = −0.225 J · bound and attractive · +0.225 J of work to separate them",
             "★ U = −0.225 J · bound and attractive · +0.225 J of work to separate them")}
        </Chip>
      </Fade>
    </Scene>
  );
}

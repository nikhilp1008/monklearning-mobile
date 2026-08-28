/**
 * M12Ch01 · Section 21 — "The composition and inverse property toolkit"
 * Subtopic: Composition and Inverse of Functions  (closing section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A property round-up is exactly where a board collapses into bullets, so
 * every property here is drawn instead of listed: the A → B → C chain with
 * the range/domain fit is a real three-set diagram, the identity is a real
 * pass-through box that returns x unchanged, inheritance is bracketed, the
 * inverse pair is the same two sets with arrows both ways, and the star
 * property is two machine rows — apply f then g, undo g⁻¹ then f⁻¹ — so
 * the reversal is visible rather than asserted.
 *
 * Grid: one vertical divider at x = 540 splits COMPOSITION (left) from
 * INVERSE (right) for the whole body; the warning gets a full-width band.
 *   header  y 30..100
 *   LEFT    x 40..516   heading y 130 · beat 1 y 148..314
 *                       beat 2 y 328..378 · beat 3 y 404..502
 *   RIGHT   x 564..1044 heading y 130 · beat 4 y 150..310
 *                       beat 5 y 328..398 · beat 6 y 414..502
 *   BOTTOM  y 528..596  beat 7, full width
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "gather the properties"          title, rule, the divider and the two
 *                                      column headings with their underlines
 *  1  "A to C through B"               ① heading, three sets, f and g arrows,
 *                                      the g ∘ f arc, range ⊆ domain condition
 *  2  "the identity is neutral"        f ∘ I = f = I ∘ f + the pass-through box
 *  3  "composition inherits"           injective / surjective / bijective rows
 *                                      braced together
 *  4  "f⁻¹ undoes f on both sides"     the two sets with both arrows +
 *                                      I on A, I on B, iff bijective
 *  5  "two quick ones"                 (f⁻¹)⁻¹ = f and dom f⁻¹ = range f
 *  6  "the star property"              (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹ with the apply
 *                                      row and the undo row drawn out
 *  7  "the constant warning"           f⁻¹ = inverse function, versus the
 *                                      crossed-out f⁻¹(x) = 1 / f(x)
 *
 * Visual vocabulary (shared with Sections 19 and 20):
 *   f — AMBER_DARK · g — BLUE · identities, inverses and results —
 *   GREEN_DARK · headings and warnings — RED · sets, dots and boxes — INK.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** axis-aligned box as a drawable closed path */
const boxD = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;

/** the g ∘ f arc under the three sets, plus its computed head */
const ARC_D = "M 96 262 C 160 306, 380 306, 444 264";
const ARC_HEAD_D = "M 438.5 273.5 L 444 264 L 433.1 265.3";

export default function M12Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing and the two columns ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The composition & inverse toolkit", "Composition aur inverse ka toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 342 62 C 480 58, 640 66, 738 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("the properties you lean on in every problem — composition first, then inverse",
             "wo properties jin par har problem mein bharosa karoge — pehle composition, phir inverse")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 540 118 V 514" stroke={MUTED} sw={1.2} dur={1} />
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <T x={40} y={130} size={15} fill={RED} weight={900} anchor="start">COMPOSITION</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4.8)} d="M 40 142 H 126" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 5.4)}>
        <T x={564} y={130} size={15} fill={RED} weight={900} anchor="start">INVERSE</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 6)} d="M 564 142 H 619" stroke={RED} sw={2} dur={0.4} />

      {/* ═══════════ beat 1 — A to C through B ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={40} y={158} size={13} fill={RED} weight={800} anchor="start">
          {t("①  A to C through B", "①  A se C tak, B ke zariye")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.45)}>
        <T x={110} y={176} size={13} fill={INK} weight={900}>A</T>
        <T x={270} y={176} size={13} fill={INK} weight={900}>B</T>
        <T x={430} y={176} size={13} fill={INK} weight={900}>C</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)}
        d="M 70 222 A 40 40 0 1 1 150 222 A 40 40 0 1 1 70 222" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)}
        d="M 230 222 A 40 40 0 1 1 310 222 A 40 40 0 1 1 230 222" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)}
        d="M 390 222 A 40 40 0 1 1 470 222 A 40 40 0 1 1 390 222" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(154, 216, 226, 216)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={190} y={204} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={arrowD(314, 216, 386, 216)} stroke={BLUE} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={350} y={204} size={14} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d={ARC_D} stroke={GREEN_DARK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 4.9)} d={ARC_HEAD_D} stroke={GREEN_DARK} sw={2.2} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <T x={270} y={278} size={14} fill={GREEN_DARK} weight={900}>g ∘ f</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={40} y={314} size={12.5} fill={INK} weight={700} anchor="start">
          {t("range of f  ⊆  domain of g — or g ∘ f is undefined",
             "range of f  ⊆  domain of g — warna g ∘ f undefined hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the identity is neutral ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={338} size={13} fill={RED} weight={800} anchor="start">
          {t("②  the identity is neutral", "②  identity neutral hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={40} y={372} size={19} fill={GREEN_DARK} weight={900} anchor="start">
          f ∘ I  =  f  =  I ∘ f
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={270} y={366} size={13} fill={INK} weight={900} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={arrowD(284, 362, 308, 362)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 2} delay={dl(2, 4.1)} d={boxD(312, 348, 40, 28)} stroke={MUTED} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={332} y={367} size={15} fill={MUTED} weight={900}>I</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={arrowD(356, 362, 380, 362)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={386} y={366} size={13} fill={INK} weight={900} anchor="start">x</T>
        <T x={410} y={366} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("(nothing changes)", "(kuch nahin badalta)")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — composition inherits good behaviour ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={40} y={414} size={13} fill={RED} weight={800} anchor="start">
          {t("③  composition inherits good behaviour",
             "③  composition achha behaviour inherit karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={44} y={442} size={13.5} fill={INK} weight={700} anchor="start">f, g injective</T>
        <T x={160} y={442} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">⇒ g ∘ f injective</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={44} y={470} size={13.5} fill={INK} weight={700} anchor="start">f, g surjective</T>
        <T x={160} y={470} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">⇒ g ∘ f surjective</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={44} y={498} size={13.5} fill={INK} weight={700} anchor="start">f, g bijective</T>
        <T x={160} y={498} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">⇒ g ∘ f bijective</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5)} d="M 300 430 H 308 V 498 H 300" stroke={GREEN_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 5.8)}>
        <T x={318} y={468} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("all three survive", "teeno survive karte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — f⁻¹ undoes f on both sides ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={564} y={160} size={13} fill={RED} weight={800} anchor="start">
          {t("④  f⁻¹ undoes f — on both sides",
             "④  f⁻¹, f ko undo karta hai — dono taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={650} y={182} size={13} fill={INK} weight={900}>A</T>
        <T x={830} y={182} size={13} fill={INK} weight={900}>B</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)}
        d="M 606 234 A 44 42 0 1 1 694 234 A 44 42 0 1 1 606 234" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)}
        d="M 786 234 A 44 42 0 1 1 874 234 A 44 42 0 1 1 786 234" stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Circle cx={650} cy={234} r={5} fill={INK} />
        <Circle cx={830} cy={234} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={arrowD(658, 226, 822, 226)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={740} y={212} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.7)} d={arrowD(822, 244, 658, 244)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={740} y={268} size={14} fill={GREEN_DARK} weight={900}>f⁻¹</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={564} y={306} size={15} fill={GREEN_DARK} weight={900} anchor="start">f⁻¹ ∘ f = I on A</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={720} y={306} size={15} fill={GREEN_DARK} weight={900} anchor="start">f ∘ f⁻¹ = I on B</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={880} y={306} size={12} fill={RED} weight={800} anchor="start">
          {t("…iff f is bijective", "…tabhi jab f bijective ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — two quick ones ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={564} y={338} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤  two quick ones", "⑤  do aur quick")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={564} y={370} size={17} fill={GREEN_DARK} weight={900} anchor="start">( f⁻¹ )⁻¹  =  f</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={700} y={370} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          {t("domain of f⁻¹ = range of f", "f⁻¹ ka domain = f ka range")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={564} y={394} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("undo the undo → you are back where you began",
             "undo ka undo → wapas wahin pahunch jaate ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the star property, order reversal ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={564} y={424} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥  THE STAR PROPERTY — order reversal",
             "⑥  STAR PROPERTY — order reversal")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={564} y={458} size={20} fill={GREEN_DARK} weight={900} anchor="start">
          ( g ∘ f )⁻¹  =  f⁻¹ ∘ g⁻¹
        </T>
      </Fade>
      {/* the apply row */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={564} y={492} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("apply:", "apply:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={boxD(610, 476, 36, 26)} stroke={AMBER_DARK} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={628} y={495} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.8)} d={arrowD(650, 489, 668, 489)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 4)} d={boxD(672, 476, 36, 26)} stroke={BLUE} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 4.3)}>
        <T x={690} y={495} size={14} fill={BLUE} weight={900}>g</T>
      </Fade>
      {/* the undo row — reversed */}
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={736} y={492} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("undo:", "undo:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.3)} d={boxD(776, 476, 44, 26)} stroke={BLUE} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={798} y={495} size={13} fill={BLUE} weight={900}>g⁻¹</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.8)} d={arrowD(824, 489, 842, 489)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 6} delay={dl(6, 6)} d={boxD(846, 476, 44, 26)} stroke={AMBER_DARK} sw={2} dur={0.3} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 6.3)}>
        <T x={868} y={495} size={13} fill={AMBER_DARK} weight={900}>f⁻¹</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <T x={900} y={494} size={11.5} fill={RED} weight={800} anchor="start">
          {t("last on, first off", "aakhri wala pehle undo")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the constant warning ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 528 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={40} y={552} size={14} fill={RED} weight={900} anchor="start">
          {t("⑦  THE CONSTANT WARNING", "⑦  CONSTANT WARNING")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={boxD(320, 536, 300, 48)} stroke={GREEN_DARK} sw={2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={470} y={566} size={15} fill={GREEN_DARK} weight={900}>
          {t("f⁻¹ = the inverse function", "f⁻¹ = inverse function")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={640} y={566} size={15} fill={MUTED} weight={900}>vs</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d={boxD(660, 536, 300, 48)} stroke={RED} sw={2} dur={0.5} fill={PAPER} />
      <Fade on={beat >= 7} delay={dl(7, 2.9)}>
        <T x={810} y={566} size={15} fill={RED} weight={900}>f⁻¹(x) = 1 / f(x)</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.3)} d={crossD(743, 554, 133, 16)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={976} y={566} size={13} fill={RED} weight={900} anchor="start">
          {t("wrong", "galat")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <T x={40} y={584} size={12} fill={MUTED} weight={700} anchor="start">
          {t("keep these two apart in every question",
             "har question mein in dono ko alag rakho")}
        </T>
      </Fade>
    </Scene>
  );
}

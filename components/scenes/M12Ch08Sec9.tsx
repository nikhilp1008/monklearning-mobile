/**
 * M12Ch08 · Section 9 — "Area under curves: the SLiCE reflex"
 * Subtopic: Area under Simple Curves  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice lists five traps and then one five-second habit, and closes on
 * the mnemonic SLiCE. A summary section is exactly where a board turns into
 * a bulleted list, so every trap here gets its own small but REAL figure —
 * the sign-cancelling wave, the y-axis-walled region with a horizontal
 * strip, the parabola 4 − x² with its roots solved for, the quarter circle
 * that needs the ×4, and the ellipse with its two semi-axes.
 *
 * Grid: three trap panels across the top (y 100–316), two more traps plus
 * the pro-tip across the middle (y 330–486), and the SLiCE band along the
 * bottom (y 494–596). Column gutters are shared by both rows: 40–360,
 * 380–700, 720–1044.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close the subtopic with the traps"       title + underline + subtitle
 *                                               + the full-width rule
 *  1  "trap ①: negative or zero area"           a curve that crosses the
 *                                               axis: hump above shaded
 *                                               green (+), hump below shaded
 *                                               red (−), the three roots
 *                                               ringed, ∫|f| and the split
 *  2  "trap ②: the wrong variable"              y-axis + two horizontal walls
 *                                               + x = g(y); a HORIZONTAL
 *                                               strip of thickness dy; ∫x dy
 *  3  "trap ③: inventing the limits"            y = 4 − x² plotted, region
 *                                               shaded, the roots x = ±2
 *                                               solved for and ringed
 *  4  "trap ④: symmetry without ×4"             a circle with only its first
 *                                               quadrant shaded + the ×4
 *  5  "trap ⑤: mangling πab"                    an ellipse with semi-axes a
 *                                               and b drawn; πab kept, the
 *                                               two wrong forms crossed out
 *  6  "the pro-tip: five seconds first"         the three numbered moves —
 *                                               sketch, mark crossings,
 *                                               check symmetry
 *  7  "hold the mnemonic SLiCE"                 the four lettered chips and
 *                                               the closing line
 *
 * Visual vocabulary shared with Sections 7 and 8:
 *   axes INK with arrowheads · primary curve AMBER_DARK · shaded region a
 *   single AMBER path at low opacity · strips GREEN · boundary lines BLUE ·
 *   results GREEN_DARK · headings and warnings RED.
 *   The one deliberate departure is trap ①, where GREEN and RED shading
 *   carry the SIGN of the raw integral — that is the whole point of the trap.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- trap ① : one hump above the axis, one below ---- */
const WAVE_UP = "M 60 210 C 95 148, 165 148, 200 210";
const WAVE_DN = "C 235 272, 305 272, 340 210";
const WAVE_D = `${WAVE_UP} ${WAVE_DN}`;

/* ---- trap ③ : y = 4 − x² on a frame with origin (885,258) ---- */
const CX3 = 885;
const CY3 = 258;
const SX3 = 54;
const SY3 = 24;
const p3x = (x: number) => CX3 + SX3 * x;
const p3y = (y: number) => CY3 - SY3 * y;
function parabolaPts(x0: number, x1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${p3x(x).toFixed(1)} ${p3y(4 - x * x).toFixed(1)}`);
  }
  return pts;
}
const PAR_D = `M ${parabolaPts(-2.15, 2.15, 40).join(" L ")}`;
const PAR_REGION_D = `M ${parabolaPts(-2, 2, 36).join(" L ")} Z`;

/* ---- trap ⑤ : the ellipse ---- */
const ELL_CX = 466;
const ELL_CY = 396;
const ELL_A = 56;
const ELL_B = 32;
const ELLIPSE_D =
  `M ${ELL_CX - ELL_A} ${ELL_CY} A ${ELL_A} ${ELL_B} 0 1 1 ${ELL_CX + ELL_A} ${ELL_CY}` +
  ` A ${ELL_A} ${ELL_B} 0 1 1 ${ELL_CX - ELL_A} ${ELL_CY}`;

export default function M12Ch08Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Five traps — and the reflex that kills them",
             "Paanch traps — aur wo reflex jo unhe khatam karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 288 62 C 460 58, 660 66, 792 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("closing the subtopic — the mistakes that lose marks in Area under Simple Curves",
             "subtopic band karte hue — Area under Simple Curves mein jo galtiyan marks khaati hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: negative or zero area ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={114} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  a negative or zero area", "①  negative ya zero area")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(50, 210, 356, 210)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={362} y={215} size={12.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={WAVE_D} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Path
        d={`${WAVE_UP} Z`}
        fill={GREEN}
        stroke="none"
        opacity={beat >= 1 ? 0.3 : 0}
      />
      <Path
        d={`M 200 210 ${WAVE_DN} Z`}
        fill={RED}
        stroke="none"
        opacity={beat >= 1 ? 0.26 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={130} y={186} size={20} fill={GREEN_DARK} weight={900}>+</T>
        <T x={270} y={248} size={20} fill={RED} weight={900}>−</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <Circle cx={60} cy={210} r={4.5} fill={GREEN_DARK} />
        <Circle cx={200} cy={210} r={4.5} fill={GREEN_DARK} />
        <Circle cx={340} cy={210} r={4.5} fill={GREEN_DARK} />
        <T x={200} y={232} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("root — split here", "root — yahan split")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={40} y={292} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the raw integral cancels → zero or negative",
             "raw integral cancel ho jaata hai → zero ya negative")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={40} y={310} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("sketch first, then ∫ |f(x)| dx, split at every root",
             "pehle sketch, phir ∫ |f(x)| dx, har root pe split")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the wrong variable ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={380} y={114} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  integrating in the wrong variable", "②  galat variable mein integrate karna")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={arrowD(410, 268, 692, 268)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={arrowD(430, 280, 430, 132)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={698} y={273} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={418} y={132} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d="M 430 150 H 562" stroke={BLUE} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 430 240 H 508" stroke={BLUE} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d="M 505 240 C 530 222, 548 190, 560 150" stroke={AMBER_DARK} sw={2.8} dur={0.7} />
      <Path
        d="M 430 240 L 505 240 C 530 222, 548 190, 560 150 L 430 150 Z"
        fill={AMBER}
        stroke="none"
        opacity={beat >= 2 ? 0.3 : 0}
      />
      <Rect
        x={430} y={190} width={113} height={12}
        fill={GREEN} stroke={GREEN_DARK} strokeWidth={1.5}
        opacity={beat >= 2 ? 0.55 : 0}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={424} y={200} size={12} fill={GREEN_DARK} weight={800} anchor="end">dy</T>
        <T x={424} y={154} size={11.5} fill={BLUE} weight={700} anchor="end">y = d</T>
        <T x={424} y={244} size={11.5} fill={BLUE} weight={700} anchor="end">y = c</T>
        <T x={572} y={158} size={12} fill={AMBER_DARK} weight={800} anchor="start">x = g(y)</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={380} y={292} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("walled by the y-axis and horizontal lines ⇒ ∫ x dy",
             "y-axis aur horizontal lines se walled ⇒ ∫ x dy")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={380} y={310} size={12.5} fill={RED} weight={800} anchor="start">
          {t("forcing dx there creates needless casework",
             "wahan dx force karna bekaar casework banata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: inventing the limits ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={720} y={114} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  inventing the limits", "③  limits khud gadh lena")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={arrowD(748, CY3, 1024, CY3)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={arrowD(CX3, 276, CX3, 150)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={1030} y={263} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={874} y={150} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={PAR_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={CX3 + 62} y={160} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">y = 4 − x²</T>
      </Fade>
      <Path
        d={PAR_REGION_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 3 ? 0.32 : 0}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <Circle cx={p3x(-2)} cy={CY3} r={5} fill={GREEN_DARK} />
        <Circle cx={p3x(2)} cy={CY3} r={5} fill={GREEN_DARK} />
        <T x={p3x(-2)} y={276} size={12.5} fill={GREEN_DARK} weight={800}>−2</T>
        <T x={p3x(2)} y={276} size={12.5} fill={GREEN_DARK} weight={800}>2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={720} y={292} size={12.5} fill={INK} weight={700} anchor="start">
          {t("limits are the boundary lines, or the roots —",
             "limits boundary lines hain, ya roots —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={720} y={310} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("solve 4 − x² = 0  ⇒  x = ±2, never guess",
             "solve 4 − x² = 0  ⇒  x = ±2, guess mat karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: symmetry without the multiply-back ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={338} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  symmetry without the multiply-back", "④  symmetry ke baad multiply-back bhoolna")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)}
        d="M 160 398 A 40 40 0 1 1 240 398 A 40 40 0 1 1 160 398" stroke={AMBER_DARK} sw={2.6} dur={1.1} />
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 150 398 H 250 M 200 352 V 444" stroke={INK} sw={1.8} dur={0.6} />
      <Path
        d="M 200 398 L 240 398 A 40 40 0 0 0 200 358 Z"
        fill={AMBER}
        stroke="none"
        opacity={beat >= 4 ? 0.45 : 0}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={218} y={386} size={12.5} fill={AMBER_DARK} weight={900}>Q1</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d={arrowD(226, 378, 190, 412)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={178} y={424} size={17} fill={GREEN_DARK} weight={900}>× 4</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={200} y={464} size={12.5} fill={INK} weight={700}>
          {t("first-quadrant area × 4 = whole circle",
             "first-quadrant area × 4 = poora circle")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={200} y={482} size={12.5} fill={RED} weight={800}>
          {t("drop the ×4 → you report a quarter",
             "×4 gira diya → sirf ek chauthai report hoga")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — trap ⑤: mangling the ellipse formula ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={380} y={338} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑤  mangling the ellipse formula", "⑤  ellipse formula bigaad dena")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={ELLIPSE_D} stroke={AMBER_DARK} sw={2.6} dur={1.2} />
      <Path
        d={ELLIPSE_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 5 ? 0.28 : 0}
      />
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={`M ${ELL_CX} ${ELL_CY} H ${ELL_CX + ELL_A}`} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={`M ${ELL_CX} ${ELL_CY} V ${ELL_CY - ELL_B}`} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Circle cx={ELL_CX} cy={ELL_CY} r={3.2} fill={INK} />
        <T x={ELL_CX + 28} y={ELL_CY + 18} size={14} fill={GREEN_DARK} weight={900}>a</T>
        <T x={ELL_CX - 13} y={ELL_CY - 14} size={14} fill={GREEN_DARK} weight={900}>b</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={556} y={380} size={19} fill={GREEN_DARK} weight={900} anchor="start">A = π a b</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={556} y={412} size={15} fill={RED} weight={700} anchor="start">π a² b²</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.1)} d={crossD(556, 399, 54, 16)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 6.8)}>
        <T x={556} y={442} size={15} fill={RED} weight={700} anchor="start">π (a + b)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.3)} d={crossD(556, 429, 66, 16)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={540} y={470} size={12} fill={MUTED} weight={700}>
          {t("π a b — the product of the semi-axes, nothing else",
             "π a b — semi-axes ka product, aur kuch nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the five-second reflex ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={720} y={338} size={13.5} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP — five seconds before you integrate",
             "PRO-TIP — integrate se paanch second pehle")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Circle cx={732} cy={369} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={732} y={374} size={12} fill={GREEN_DARK} weight={900}>1</T>
        <T x={752} y={374} size={12.5} fill={INK} weight={700} anchor="start">
          {t("sketch the curve and shade the region",
             "curve sketch karo aur region shade karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <Circle cx={732} cy={408} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={732} y={413} size={12} fill={GREEN_DARK} weight={900}>2</T>
        <T x={752} y={413} size={12.5} fill={INK} weight={700} anchor="start">
          {t("mark every crossing — plan the split",
             "har crossing mark karo — split plan karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <Circle cx={732} cy={447} r={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={732} y={452} size={12} fill={GREEN_DARK} weight={900}>3</T>
        <T x={752} y={452} size={12.5} fill={INK} weight={700} anchor="start">
          {t("check symmetry — integrate the smallest piece",
             "symmetry check karo — chhota piece lo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={752} y={478} size={12} fill={MUTED} weight={700} anchor="start">
          {t("these three kill the three biggest mark-losers",
             "yeh teen sabse bade mark-losers ko khatam karte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the SLiCE band ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 494 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={44} y={538} size={30} fill={RED} script anchor="start">SLiCE</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={168} y={506} w={198} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={16} script={false}>
          S — Sketch
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Chip x={382} y={506} w={198} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={16} script={false}>
          L — Limits &amp; roots
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <Chip x={596} y={506} w={198} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={16} script={false}>
          C — Choose dx / dy
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.8)}>
        <Chip x={810} y={506} w={224} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          E — Evaluate: |f| &amp; symmetry
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.6)} d={arrowD(370, 528, 378, 528)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 7} delay={dl(7, 6.8)} d={arrowD(584, 528, 592, 528)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Draw on={beat >= 7} delay={dl(7, 7)} d={arrowD(798, 528, 806, 528)} stroke={MUTED} sw={1.8} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={576} size={17} fill={RED} script>
          {t("Slice the region right and the integral writes itself.",
             "Region ko sahi slice karo — integral khud likh jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={594} size={12} fill={MUTED} weight={700}>
          {t("sketch → limits → variable → evaluate",
             "sketch → limits → variable → evaluate")}
        </T>
      </Fade>
    </Scene>
  );
}

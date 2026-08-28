/**
 * M12Ch01 · Section 25 — "Order reversal proven two ways"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice inverts ONE composite by two independent routes and watches the
 * two answers land on the same expression. So the board is built as a literal
 * two-column proof: WAY ONE down the left (compose f into g, then invert the
 * composite), WAY TWO down the right (invert each piece, then reverse the
 * order), the two boxed results side by side, two arrows converging into the
 * law itself, and finally the mapping diagram that shows WHY the order flips —
 * forward arrows f then g running left to right, undo arrows g⁻¹ then f⁻¹
 * running back the other way.
 *
 * Layout grid:
 *   y  30–100  title band (title, underline, subtitle, full rule)
 *   y 108–178  the two givens as machine boxes, with in/out arrows
 *   y 182–396  two proof columns, split by a vertical rule at x = 540
 *              left  x 40..524 (accent bar at x 44)
 *              right x 560..1044 (accent bar at x 564)
 *   y 340–382  the two result chips (one per column)
 *   y 406–466  the law banner, fed by two converging arrows
 *   y 476–596  the shoes-and-socks mapping diagram
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "proves the law two independent ways"   title + underline + subtitle + rule
 *  1  "f(x)=x³+2 and g(x)=2x−1 on the reals"  the two machine boxes, input x
 *                                             and output arrows, "defined on ℝ"
 *  2  "way one, direct: build g∘f"            left header + accent, the
 *                                             substitution chain down to 2x³+3
 *  3  "invert that composite"                 y = 2x³+3 solved for x, and the
 *                                             boxed (g∘f)⁻¹(x) = ∛[(x−3)/2]
 *  4  "way two uses the law"                  right header + accent + the
 *                                             invert-each-then-reverse caption
 *  5  "f⁻¹ = ∛(x−2), g⁻¹ = (x+1)/2"           the two piecewise inverses
 *  6  "compose f⁻¹ after g⁻¹"                 the feed-in, the simplification,
 *                                             and the boxed second answer
 *  7  "both routes give the same answer"      the identical cube roots ringed
 *                                             in both chips, then two arrows
 *                                             converge into the banner
 *                                             (g∘f)⁻¹ = f⁻¹∘g⁻¹
 *  8  "the diagram captures it"               three nodes x → x³+2 → 2x³+3,
 *                                             f and g forward, g⁻¹ then f⁻¹ back
 *
 * Visual vocabulary (shared with Sections 26 and 27 of this subtopic):
 *   f and anything f-flavoured  AMBER_DARK
 *   g and anything g-flavoured  BLUE (#0284c7)
 *   inverses and confirmed results  GREEN_DARK
 *   headings, traps and warnings    RED
 *   scaffolding rules and asides    MUTED
 *   boxes/chips are CREAM fills with a coloured stroke, always on empty board.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path (used for the diagram nodes) */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* the three stations of the mapping diagram */
const NA = 230;
const NB = 555;
const NC = 880;
const NCY = 524;
const NRX = 62;
const NRY = 26;

export default function M12Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Order reversal — proved twice",
             "Order reversal — do baar prove kiya")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 322 66 C 470 62, 640 70, 758 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("one inverse, computed two independent ways — and they agree",
             "ek hi inverse, do independent tareeqon se — aur dono agree karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the two givens, as machines ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={160} y={108} w={250} h={42} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={19} script={false}>
          f(x) = x³ + 2
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(96, 129, 152, 129)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(418, 129, 474, 129)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={88} y={134} size={13} fill={INK} weight={800} anchor="end">x</T>
        <T x={482} y={134} size={13} fill={AMBER_DARK} weight={800} anchor="start">x³ + 2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Chip x={660} y={108} w={250} h={42} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={19} script={false}>
          g(x) = 2x − 1
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(596, 129, 652, 129)} stroke={BLUE} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={arrowD(918, 129, 974, 129)} stroke={BLUE} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={588} y={134} size={13} fill={INK} weight={800} anchor="end">x</T>
        <T x={982} y={134} size={13} fill={BLUE} weight={800} anchor="start">2x − 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={540} y={170} size={12.5} fill={MUTED} weight={700}>
          {t("both f and g are defined on all of ℝ",
             "f aur g dono poore ℝ par defined hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — WAY ONE: compose, then invert ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 540 182 L 540 396" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={40} y={192} size={14} fill={RED} weight={800} anchor="start">
          {t("WAY ONE — direct: compose, then invert",
             "WAY ONE — direct: pehle compose, phir invert")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 44 204 L 44 336" stroke={AMBER_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={56} y={214} size={14.5} fill={INK} weight={700} anchor="start">
          (g ∘ f)(x) = g( f(x) )
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={56} y={240} size={14.5} fill={BLUE} weight={700} anchor="start">
          = g(x³ + 2) = 2(x³ + 2) − 1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={56} y={266} size={15.5} fill={INK} weight={900} anchor="start">
          = 2x³ + 3
        </T>
      </Fade>

      {/* ═══════════ beat 3 — invert the composite ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={56} y={292} size={14.5} fill={INK} weight={700} anchor="start">
          {t("put y = 2x³ + 3, so x³ = (y − 3)/2",
             "y = 2x³ + 3 rakho, to x³ = (y − 3)/2")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={56} y={318} size={14.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("so x = ∛[ (y − 3)/2 ]", "to x = ∛[ (y − 3)/2 ]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <Chip x={40} y={340} w={392} h={42} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={17} script={false}>
          (g ∘ f)⁻¹(x) = ∛[ (x − 3)/2 ]
        </Chip>
      </Fade>

      {/* ═══════════ beat 4 — WAY TWO: use the law ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={192} size={14} fill={RED} weight={800} anchor="start">
          {t("WAY TWO — invert each, then reverse",
             "WAY TWO — har piece invert, phir order ulta")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d="M 564 204 L 564 336" stroke={GREEN_DARK} sw={3} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={576} y={214} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("invert each piece separately, then reverse the order",
             "har piece ko alag-alag invert karo, phir order reverse karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the two piece inverses ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={576} y={240} size={14.5} fill={AMBER_DARK} weight={800} anchor="start">
          f⁻¹(x) = ∛(x − 2)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={576} y={266} size={14.5} fill={BLUE} weight={800} anchor="start">
          g⁻¹(x) = (x + 1)/2
        </T>
      </Fade>

      {/* ═══════════ beat 6 — compose f⁻¹ after g⁻¹ ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={576} y={292} size={14.5} fill={INK} weight={700} anchor="start">
          (f⁻¹ ∘ g⁻¹)(x) = f⁻¹[ (x + 1)/2 ]
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={576} y={318} size={14.5} fill={INK} weight={700} anchor="start">
          = ∛[ (x + 1)/2 − 2 ]
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.4)}>
        <Chip x={560} y={340} w={400} h={42} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={17} script={false}>
          (f⁻¹ ∘ g⁻¹)(x) = ∛[ (x − 3)/2 ]
        </Chip>
      </Fade>

      {/* ═══════════ beat 7 — the two routes converge on the law ═══════════ */}
      {/* ring the identical cube roots inside each chip — the two answers agreeing */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={ringD(302, 361, 72, 18)} stroke={RED} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={ringD(834, 361, 72, 18)} stroke={RED} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={arrowD(236, 392, 412, 402)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={arrowD(760, 392, 668, 402)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <Rect x={340} y={408} width={400} height={58} rx={14}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={540} y={432} size={21} fill={GREEN_DARK} weight={900}>
          (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.1)}>
        <T x={540} y={456} size={12.5} fill={INK_LIGHT} weight={700}>
          {t("both routes give the same answer",
             "dono routes same answer dete hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — the shoes-and-socks diagram ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 40 476 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d={ellD(NA, NCY, NRX, NRY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d={ellD(NB, NCY, NRX, NRY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 8} delay={dl(8, 1.1)} d={ellD(NC, NCY, NRX, NRY)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={NA} y={531} size={18} fill={INK} weight={900}>x</T>
        <T x={NB} y={530} size={16} fill={AMBER_DARK} weight={900}>x³ + 2</T>
        <T x={NC} y={530} size={16} fill={BLUE} weight={900}>2x³ + 3</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.2)} d={arrowD(300, 509, 485, 509)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 2.7)} d={arrowD(625, 509, 810, 509)} stroke={BLUE} sw={2.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <T x={392} y={496} size={16} fill={AMBER_DARK} weight={900}>f</T>
        <T x={717} y={496} size={16} fill={BLUE} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 4.2)} d={arrowD(810, 539, 625, 539)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 4.8)} d={arrowD(485, 539, 300, 539)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 5.3)}>
        <T x={717} y={566} size={15} fill={GREEN_DARK} weight={900}>g⁻¹</T>
        <T x={392} y={566} size={15} fill={GREEN_DARK} weight={900}>f⁻¹</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6.6)}>
        <T x={540} y={590} size={13} fill={RED} weight={800}>
          {t("undo the last-applied step first — shoes off before socks",
             "jo step aakhir mein laga use pehle undo karo — shoes pehle, socks baad mein")}
        </T>
      </Fade>
    </Scene>
  );
}

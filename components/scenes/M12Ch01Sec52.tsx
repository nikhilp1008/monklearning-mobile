/**
 * M12Ch01 · Section 52 — "Pitfalls and pro-tips for algebra and functional equations"
 * Subtopic: Algebra of Functions and Functional Equations  (closing section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A traps-and-reflexes section is exactly where a board decays into bullets,
 * so every trap here is an actual construction:
 *   ① the quotient's domain is built on three real number lines — dom f, dom g
 *     with its zeros marked (they belong to dom g), and the intersection that
 *     survives, where those same zeros are punctured out;
 *   ② the four patterns are four real mini graphs — a line, an exponential,
 *     a logarithm and a power — each under the structure that produces it;
 *   ③ the missing partner equation is drawn as a two-box system with the
 *     transformed-x substitution as the arrow that manufactures the second
 *     row (kept generic — the voice names no particular substitution here);
 *   ④ uniqueness-without-continuity is two plots side by side: one clean
 *     continuous solution, and the wild cloud you get with no regularity.
 * Then the reflex band: the five standard patterns with their solutions, and
 * the verification pipeline.
 *
 * Grid
 *   title band          y  30– 94   (rule at y = 94)
 *   trap ① / trap ②     y 100–295   x 40–520 · x 540–1044
 *   trap ③ / trap ④     y 304–455   x 40–520 · x 540–1044
 *   reflex divider      y 466       heading y 490
 *   reflex ① patterns   y 500–557   five cells, x 76–1044
 *   reflex ② verify     y 566–590   the pipeline, x 88–1008
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close with the traps, then reflexes"   title + underline + subtitle + rule
 *  1  "trap ①: dropping the domain"           ( f / g )(x), the two domain
 *                                             lines, the zeros of g marked,
 *                                             and the surviving intersection
 *                                             with those zeros punctured
 *  2  "trap ②: wrong pattern"                 four labelled mini graphs:
 *                                             sum→sum, sum→product,
 *                                             product→sum, product→product
 *  3  "trap ③: no second substitution"        box (I), the transformed-x
 *                                             arrow, box (II), the pair
 *  4  "trap ④: uniqueness w/o continuity"     two plots — the standard
 *                                             continuous solution vs the
 *                                             non-unique scatter
 *  5  "now the reflexes"                      divider + reflex heading
 *  6  "memorise the five patterns"            five pattern → solution columns
 *  7  "always verify by plugging back"        f → original equation → LHS = RHS
 *
 * Visual vocabulary (shared with Sections 53 and 54)
 *   axes and number lines INK with drawn arrowheads · the function or pattern
 *   under discussion AMBER_DARK · surviving sets and correct results
 *   GREEN / GREEN_DARK · hollow PAPER-filled circle = excluded point ·
 *   traps, headings and warnings RED · asides MUTED.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

/* ------------------------------------------------------------------ */
/* the four pattern mini graphs — one frame, four curves               */
/* ------------------------------------------------------------------ */

/** axes for a mini plot with origin (ox, oy) */
const axesD = (ox: number, oy: number) =>
  `${arrowD(ox - 30, oy, ox + 42, oy)} ${arrowD(ox, oy + 14, ox, oy - 54)}`;

/** f(x) = k x — a straight line through the origin (additivity forces f(0) = 0) */
const linD = (ox: number, oy: number) =>
  `M ${ox - 14} ${oy + 14} L ${ox + 38} ${oy - 38}`;

/** f(x) = aˣ — flat on the left, exploding on the right */
const expD = (ox: number, oy: number) =>
  `M ${ox - 28} ${oy - 4} C ${ox - 6} ${oy - 8}, ${ox + 12} ${oy - 20}, ${ox + 30} ${oy - 48}`;

/** f(x) = k log x — steep near 0⁺, then flattening */
const logD = (ox: number, oy: number) =>
  `M ${ox + 4} ${oy + 12} C ${ox + 8} ${oy - 16}, ${ox + 16} ${oy - 26}, ${ox + 38} ${oy - 32}`;

/** f(x) = xⁿ — flat at the origin, then climbing */
const powD = (ox: number, oy: number) =>
  `M ${ox} ${oy} C ${ox + 16} ${oy - 2}, ${ox + 26} ${oy - 16}, ${ox + 34} ${oy - 46}`;

const PATTERN_CX = [603, 729, 855, 981];
const PATTERN_OY = 234;
const CURVES = [linD, expD, logD, powD];

/* ------------------------------------------------------------------ */
/* trap ④ — the cloud of non-unique solutions                          */
/* ------------------------------------------------------------------ */

/* dense in the WHOLE plane — so the cloud straddles both axes of its own
   frame (horizontal axis y = 398, vertical axis x = 862) and stays inside
   the drawn arrows. */
const WILD: [number, number][] = [
  [798, 372], [806, 414], [816, 386], [824, 430], [834, 364],
  [842, 404], [850, 424], [858, 380], [866, 410], [874, 366],
  [882, 428], [890, 390], [898, 418], [906, 374], [914, 402],
  [922, 384], [926, 420], [812, 396], [846, 388], [878, 434],
];

/* ------------------------------------------------------------------ */
/* reflex ① — the five standard patterns                               */
/* ------------------------------------------------------------------ */

const FIVE: [number, string, string][] = [
  [173, "f (x + y) = f (x) + f (y)", "f (x) = k x"],
  [366, "f (x + y) = f (x) · f (y)", "f (x) = aˣ"],
  [560, "f (x y) = f (x) + f (y)", "f (x) = k log x"],
  [754, "f (x y) = f (x) · f (y)", "f (x) = xⁿ"],
  [947, "f (x) · f (1/x) = f (x) + f (1/x)", "f (x) = 1 ± xⁿ"],
];

/* the fifth form is the longest string in the row — it gets its own size so it
   stays inside x ≤ 1044 without crowding the fourth cell */
const FIVE_FORM_SIZE = [11.5, 11.5, 11.5, 11.5, 10.5];

export default function M12Ch01Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const patternWords = [
    t("sum → sum", "sum → sum"),
    t("sum → product", "sum → product"),
    t("product → sum", "product → sum"),
    t("product → product", "product → product"),
  ];
  const patternForms = [
    "f (x+y) = f (x) + f (y)",
    "f (x+y) = f (x) · f (y)",
    "f (x y) = f (x) + f (y)",
    "f (x y) = f (x) · f (y)",
  ];
  const patternNames = [
    t("linear", "linear"),
    t("exponential", "exponential"),
    t("logarithmic", "logarithmic"),
    t("power", "power"),
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("The traps first — then the reflexes",
             "Pehle traps — phir reflexes")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 302 66 C 462 62, 652 70, 782 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("closing the subtopic — the mistakes that lose marks in algebra of functions and functional equations",
             "subtopic band karte hue — algebra of functions aur functional equations mein wo galtiyan jo marks khaati hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: dropping the domain ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={116} size={13.5} fill={RED} weight={800} anchor="start">
          {t("trap ①  dropping the domain in a combination",
             "trap ①  combination mein domain chhod dena")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={44} y={148} size={16} fill={AMBER_DARK} weight={900} anchor="start">
          ( f / g ) ( x )
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={184} y={148} size={12.5} fill={RED} weight={800} anchor="start">
          {t("excludes the zeros of g", "g ke zeros exclude karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={44} y={172} size={12.5} fill={INK} weight={700} anchor="start">
          {t("and respects both original domains",
             "aur dono original domains respect karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={44} y={196} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("⇒ intersect first, then delete the zeros",
             "⇒ pehle intersect, phir zeros delete")}
        </T>
      </Fade>

      {/* dom f */}
      <Draw on={beat >= 1} delay={dl(1, 5.4)} d="M 120 222 H 460" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 5.8)} d="M 160 222 H 390" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 6.1)}>
        <T x={44} y={226} size={12} fill={AMBER_DARK} weight={800} anchor="start">dom f</T>
      </Fade>
      {/* dom g, with its zeros punctured */}
      <Draw on={beat >= 1} delay={dl(1, 6.6)} d="M 120 252 H 460" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 7)} d="M 230 252 H 440" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.3)}>
        <T x={44} y={256} size={12} fill={AMBER_DARK} weight={800} anchor="start">dom g</T>
      </Fade>
      {/* the zeros of g are IN dom g — solid dots here; they are excluded only
          from the quotient's domain, where they become hollow below */}
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <Circle cx={300} cy={252} r={4.6} fill={RED} />
        <Circle cx={360} cy={252} r={4.6} fill={RED} />
        <T x={300} y={274} size={11.5} fill={RED} weight={800}>g = 0</T>
        <T x={360} y={274} size={11.5} fill={RED} weight={800}>g = 0</T>
      </Fade>
      {/* what survives */}
      <Draw on={beat >= 1} delay={dl(1, 9.4)} d="M 120 288 H 460" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 9.8)} d="M 230 288 H 390" stroke={GREEN_DARK} sw={6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        <T x={44} y={292} size={12} fill={GREEN_DARK} weight={900} anchor="start">f / g</T>
        <Circle cx={300} cy={288} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        <Circle cx={360} cy={288} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the wrong pattern ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={544} y={116} size={13.5} fill={RED} weight={800} anchor="start">
          {t("trap ②  matching the wrong pattern",
             "trap ②  galat pattern match karna")}
        </T>
      </Fade>
      {PATTERN_CX.map((cx, i) => (
        <Fade key={`pw${cx}`} on={beat >= 2} delay={dl(2, 1 + i * 0.9)}>
          <T x={cx} y={146} size={12} fill={AMBER_DARK} weight={800}>{patternWords[i]}</T>
          <T x={cx} y={168} size={11} fill={INK} weight={700}>{patternForms[i]}</T>
        </Fade>
      ))}
      {PATTERN_CX.map((cx, i) => (
        <Draw key={`pa${cx}`} on={beat >= 2} delay={dl(2, 1.4 + i * 0.9)}
          d={axesD(cx - 4, PATTERN_OY)} stroke={INK} sw={1.6} dur={0.4} />
      ))}
      {PATTERN_CX.map((cx, i) => (
        <Draw key={`pc${cx}`} on={beat >= 2} delay={dl(2, 1.8 + i * 0.9)}
          d={CURVES[i](cx - 4, PATTERN_OY)} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      ))}
      {PATTERN_CX.map((cx, i) => (
        <Fade key={`pn${cx}`} on={beat >= 2} delay={dl(2, 2.5 + i * 0.9)}>
          <T x={cx} y={270} size={13} fill={GREEN_DARK} weight={900}>{patternNames[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={544} y={292} size={12.5} fill={RED} weight={800} anchor="start">
          {t("read the structure before you solve",
             "solve karne se pehle structure padho")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: the missing partner equation ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={320} size={13.5} fill={RED} weight={800} anchor="start">
          {t("trap ③  forgetting the second substitution",
             "trap ③  second substitution bhoolna")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Rect x={48} y={332} width={250} height={30} rx={8}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={173} y={352} size={12} fill={INK} weight={800}>
          {t("( I )   one relation in  f (x), f (∗)",
             "( I )   f (x), f (∗) ka ek relation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={312} y={352} size={12} fill={RED} weight={800} anchor="start">
          {t("one relation is not enough", "ek relation kaafi nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={arrowD(173, 368, 173, 392)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={188} y={384} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("substitute a transformed x", "transformed x substitute karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <Rect x={48} y={398} width={250} height={30} rx={8}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={173} y={418} size={12} fill={INK} weight={800}>
          {t("( II )  the partner relation", "( II )  partner relation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={312} y={418} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("now there is a pair", "ab ek pair mil gaya")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.4)}>
        <T x={44} y={452} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⇒ never stop at one equation — build the partner",
             "⇒ ek equation par mat ruko — partner banao")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.2)}>
        <T x={388} y={452} size={11} fill={MUTED} weight={700} anchor="start">
          {t("∗ = the transformed x", "∗ = transformed x")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: uniqueness without continuity ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={544} y={320} size={13.5} fill={RED} weight={800} anchor="start">
          {t("trap ④  assuming uniqueness without continuity",
             "trap ④  continuity ke bina uniqueness maan lena")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={544} y={344} size={12.5} fill={INK} weight={700} anchor="start">
          {t("state the regularity assumption, then take the standard continuous solution",
             "regularity assumption bataao, phir standard continuous solution lo")}
        </T>
      </Fade>
      {/* with continuity — one clean solution */}
      <Draw on={beat >= 4} delay={dl(4, 2.6)}
        d={`${arrowD(568, 428, 712, 428)} ${arrowD(576, 436, 576, 364)}`}
        stroke={INK} sw={1.7} dur={0.5} />
      {/* f (x) = k x — slope −1/2 through the frame's origin (576, 428), so the
          drawn solution really does satisfy f (0) = 0 */}
      <Draw on={beat >= 4} delay={dl(4, 3.2)} d="M 568 432 L 700 366" stroke={GREEN_DARK} sw={2.8} dur={0.7} />
      {/* without it — the wild cloud */}
      <Draw on={beat >= 4} delay={dl(4, 4)}
        d={`${arrowD(788, 398, 936, 398)} ${arrowD(862, 436, 862, 356)}`}
        stroke={INK} sw={1.7} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        {WILD.map(([x, y]) => (
          <Circle key={`w${x}-${y}`} cx={x} cy={y} r={2.6} fill={RED} />
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={640} y={452} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("continuity ⇒ the standard solution", "continuity ⇒ standard solution")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={860} y={452} size={11.5} fill={RED} weight={800}>
          {t("no continuity ⇒ not unique", "continuity nahi ⇒ unique nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the reflex band opens ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 466 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={44} y={490} size={18} fill={RED} script anchor="start">
          {t("Now the reflexes that make these quick",
             "Ab wo reflexes jo inhe quick banate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={1044} y={490} size={12} fill={MUTED} weight={700} anchor="end">
          {t("two habits, both cheap", "do habits, dono sasti")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the five standard patterns ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Circle cx={52} cy={528} r={11} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={52} y={533} size={12.5} fill={GREEN_DARK} weight={900}>1</T>
      </Fade>
      {FIVE.map(([cx, form], i) => (
        <Fade key={`f5${cx}`} on={beat >= 6} delay={dl(6, 0.8 + i * 1.4)}>
          <T x={cx} y={514} size={FIVE_FORM_SIZE[i]} fill={INK} weight={800}>{form}</T>
        </Fade>
      ))}
      {FIVE.map(([cx], i) => (
        <Draw key={`f5a${cx}`} on={beat >= 6} delay={dl(6, 1.2 + i * 1.4)}
          d={arrowD(cx, 524, cx, 538)} stroke={AMBER_DARK} sw={2} dur={0.25} />
      ))}
      {FIVE.map(([cx, , sol], i) => (
        <Fade key={`f5s${cx}`} on={beat >= 6} delay={dl(6, 1.5 + i * 1.4)}>
          <T x={cx} y={556} size={13} fill={GREEN_DARK} weight={900}>{sol}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 7 — verify by substituting back ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Circle cx={52} cy={578} r={11} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={52} y={583} size={12.5} fill={GREEN_DARK} weight={900}>2</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Rect x={88} y={566} width={160} height={24} rx={8}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={168} y={583} size={12} fill={AMBER_DARK} weight={800}>
          {t("the f you found", "jo f mila")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={arrowD(254, 578, 290, 578)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <Rect x={296} y={566} width={320} height={24} rx={8}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={456} y={583} size={12} fill={INK} weight={800}>
          {t("put it back into the original equation",
             "original equation mein wapas daalo")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d={arrowD(622, 578, 658, 578)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 2.9)}>
        <Rect x={664} y={566} width={176} height={24} rx={8}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.3)}>
        <T x={752} y={583} size={12.5} fill={GREEN_DARK} weight={900}>LHS = RHS ✓</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={852} y={583} size={12} fill={RED} weight={800} anchor="start">
          {t("catches sign slips", "sign slips pakad leta hai")}
        </T>
      </Fade>
    </Scene>
  );
}

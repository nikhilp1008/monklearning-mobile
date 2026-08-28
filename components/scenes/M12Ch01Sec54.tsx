/**
 * M12Ch01 · Section 54 — "Quick-recall cheat sheet"
 * Subtopic: Chapter Close  (final section of the chapter)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * "One line per idea" is a licence to write a list, so instead every line here
 * is the picture the idea reduces to:
 *   · reflexive is drawn as an actual self-loop on a node, symmetric as two
 *     arrows between two nodes, transitive as the shortcut edge closing a
 *     path, and equivalence as an oval cut into cells;
 *   · one-one, onto and invertible are three real arrow diagrams — the
 *     leftover codomain dot in the first is exactly why it is not onto;
 *   · the domain/codomain warning is the same rule drawn twice, onto once and
 *     not onto once, the only change being the size of the target set;
 *   · composition is a pipeline x → f → f(x) → g → g(f(x));
 *   · the domain checks are three number lines — solid endpoint for ≥,
 *     hollow for >, a puncture for a zero denominator;
 *   · the floor reminder is a negative point walking LEFT to the tick below it;
 *   · even, odd and the halved period are three plotted curves;
 *   · the four functional equations carry the curve each one produces.
 *
 * Grid  (vertical divider x 536, horizontal rules y 232, 358, 486)
 *   title band   y  30– 92
 *   row 1        y 100–232   beat 1 (left)  · beat 2 (right)
 *   row 2        y 238–358   beat 3 (left)  · beat 4 (right)
 *   row 3        y 364–486   beat 5 (left)  · beat 6 (right)
 *   row 4        y 492–596   beat 7 (left)  · beat 8 (right)
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "the quick-recall cheat sheet"      title + underline + subtitle + the
 *                                         whole cheat-sheet grid ruled out
 *  1  "reflexive / symmetric / transitive" four node figures + equivalence oval
 *  2  "one-one / onto / invertible"        three arrow diagrams
 *  3  "the type depends on both sets"      the same rule, two codomains
 *  4  "composition and inverse"            the innermost-first pipeline
 *  5  "root, log, denominator, intersect"  three number lines
 *  6  "floor down · log base below 1"      the leftward floor walk + the flipped
 *                                          inequality
 *  7  "even, odd, and a halved period"     mirror curve, origin-symmetric
 *                                          curve, the flipped hump
 *  8  "the four patterns, then verify"     four patterns with their curves
 *
 * Visual vocabulary (shared with Sections 52 and 53)
 *   axes and number lines INK with drawn arrowheads · the object under
 *   discussion AMBER_DARK · results, survivors and answers GREEN / GREEN_DARK ·
 *   solid endpoint = included, hollow PAPER-filled endpoint = excluded ·
 *   headings and warnings RED · asides MUTED.
 */

import React from "react";
import { Circle, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

/* ---- beat 2 : the three arrow diagrams ---- */
const MAP_CX = [635, 798, 961];
const MAP_SRC: number[][] = [
  [150, 162, 174],
  [144, 156, 170, 182],
  [148, 162, 176],
];
const MAP_DST: number[][] = [
  [144, 156, 170, 182],
  [150, 162, 174],
  [148, 162, 176],
];
/** which destination dot each source dot lands on, per diagram */
const MAP_HIT: number[][] = [
  [0, 1, 2],
  [0, 0, 1, 2],
  [0, 1, 2],
];

/* ---- beat 3 : the same rule against two codomains ---- */
const W_SRC = [318, 330, 342];
const W_DST1 = [318, 330, 342];
const W_DST2 = [314, 324, 336, 346];

/* ---- beat 6 : the floor number line ---- */
const FL_TICKS: [number, string][] = [
  [580, "−3"], [640, "−2"], [700, "−1"], [760, "0"],
];

/* ---- beat 8 : the four patterns ---- */
const FE_CX = [615, 738, 860, 983];
const FE_FORM = [
  "f (x+y) = f (x) + f (y)",
  "f (x+y) = f (x) · f (y)",
  "f (x y) = f (x) + f (y)",
  "f (x y) = f (x) · f (y)",
];
const FE_AXES = (cx: number) =>
  `M ${cx - 30} 568 H ${cx + 30} M ${cx - 22} 572 V 542`;
const FE_CURVE = (cx: number, i: number) => {
  const ox = cx - 22;
  const oy = 568;
  return [
    `M ${ox - 6} ${oy + 4} L ${ox + 42} ${oy - 26}`,
    `M ${ox - 6} ${oy - 2} C ${ox + 12} ${oy - 4}, ${ox + 28} ${oy - 10}, ${ox + 42} ${oy - 26}`,
    `M ${ox + 4} ${oy + 2} C ${ox + 8} ${oy - 14}, ${ox + 16} ${oy - 20}, ${ox + 42} ${oy - 22}`,
    `M ${ox} ${oy} C ${ox + 18} ${oy - 1}, ${ox + 32} ${oy - 8}, ${ox + 42} ${oy - 26}`,
  ][i];
};

export default function M12Ch01Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const relName = [
    t("reflexive", "reflexive"),
    t("symmetric", "symmetric"),
    t("transitive", "transitive"),
    t("equivalence", "equivalence"),
  ];
  const relGloss = [
    t("the self-loop", "khud se related"),
    t("two-way street", "two-way street"),
    t("the shortcut", "shortcut"),
    t("partitions the set", "set ko partition"),
  ];
  const mapName = [
    t("one-one", "one-one"),
    t("onto", "onto"),
    t("both ⇒ invertible", "dono ⇒ invertible"),
  ];
  const mapGloss = [
    t("inputs stay different", "alag inputs alag rehte"),
    t("nothing left out", "kuch bhi nahi chhoota"),
    t("the inverse exists", "inverse exist karta hai"),
  ];
  const feSol = [
    t("a line", "ek line"),
    t("exponential", "exponential"),
    t("logarithmic", "logarithmic"),
    t("a power", "ek power"),
  ];
  const symGloss = [
    t("even — mirror in the y-axis", "even — y-axis pe mirror"),
    t("odd — turn 180° about O", "odd — origin ke about"),
    t("| f | may halve the period", "modulus period aadha kare"),
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the cheat sheet itself ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={24} fill={RED} script>
          {t("Quick-recall cheat sheet — one line per idea",
             "Quick-recall cheat sheet — har idea ek line")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)}
        d="M 302 64 C 462 60, 652 68, 782 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("built from the chapter's own recall boxes — the last glance before you close the book",
             "chapter ke apne recall boxes se banayi — kitaab band karne se pehle aakhri glance")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 3.3)} d="M 536 100 V 592" stroke={MUTED} sw={1} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 40 232 H 1044" stroke={MUTED} sw={1.1} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 4.5)} d="M 40 358 H 1044" stroke={MUTED} sw={1.1} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 5)} d="M 40 486 H 1044" stroke={MUTED} sw={1.1} dur={0.8} />

      {/* ═══════════ beat 1 — relations: the three properties ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("RELATIONS — and all three together", "RELATIONS — aur teeno milkar")}
        </T>
      </Fade>
      {/* ① the self-loop */}
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Circle cx={104} cy={166} r={9} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)}
        d="M 96 159 C 84 132, 124 132, 112 159 M 106 151 L 112 159 L 118 150"
        stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      {/* ② the two-way street */}
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={206} cy={166} r={8} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={242} cy={166} r={8} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(214, 159, 234, 159)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(234, 173, 214, 173)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      {/* ③ the shortcut */}
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Circle cx={318} cy={146} r={7} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={370} cy={146} r={7} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={344} cy={178} r={7} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d={arrowD(326, 146, 362, 146)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 4.7)} d={arrowD(366, 153, 350, 171)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 5.1)} d={arrowD(322, 153, 338, 171)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      {/* ④ the partition */}
      <Draw on={beat >= 1} delay={dl(1, 6.2)}
        d="M 414 162 A 48 22 0 1 1 510 162 A 48 22 0 1 1 414 162" stroke={INK} sw={1.8} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 7)}
        d="M 446 142 C 442 154, 448 170, 444 182 M 480 142 C 484 154, 478 170, 482 182"
        stroke={GREEN_DARK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        {[[428, 154], [432, 172], [462, 151], [458, 173], [494, 156], [498, 172]].map(([x, y]) => (
          <Circle key={`pd${x}-${y}`} cx={x} cy={y} r={3} fill={INK} />
        ))}
      </Fade>
      {[104, 224, 344, 462].map((cx, i) => (
        <Fade key={`rl${cx}`} on={beat >= 1} delay={dl(1, 1.8 + i * 1.8)}>
          <T x={cx} y={200} size={11.5} fill={RED} weight={800}>{relName[i]}</T>
          <T x={cx} y={222} size={11.5} fill={MUTED} weight={700}>{relGloss[i]}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 2 — functions: one-one, onto, invertible ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={554} y={118} size={13} fill={RED} weight={800} anchor="start">
          {t("FUNCTIONS — one-one, onto, invertible",
             "FUNCTIONS — one-one, onto, invertible")}
        </T>
      </Fade>
      {MAP_CX.map((cx, i) => (
        <Draw key={`mo${cx}`} on={beat >= 2} delay={dl(2, 0.8 + i * 1.6)}
          d={`M ${cx - 51} 162 A 17 23 0 1 1 ${cx - 17} 162 A 17 23 0 1 1 ${cx - 51} 162` +
             ` M ${cx + 17} 162 A 17 23 0 1 1 ${cx + 51} 162 A 17 23 0 1 1 ${cx + 17} 162`}
          stroke={INK} sw={1.6} dur={0.8} />
      ))}
      {MAP_CX.map((cx, i) => (
        <Fade key={`md${cx}`} on={beat >= 2} delay={dl(2, 1.4 + i * 1.6)}>
          {MAP_SRC[i].map((y) => (
            <Circle key={`s${y}`} cx={cx - 34} cy={y} r={3.2} fill={INK} />
          ))}
          {MAP_DST[i].map((y) => (
            <Circle key={`d${y}`} cx={cx + 34} cy={y} r={3.2}
              fill={MAP_HIT[i].includes(MAP_DST[i].indexOf(y)) ? INK : PAPER}
              stroke={MAP_HIT[i].includes(MAP_DST[i].indexOf(y)) ? "none" : RED}
              strokeWidth={1.8} />
          ))}
        </Fade>
      ))}
      {MAP_CX.map((cx, i) =>
        MAP_SRC[i].map((y, j) => (
          <Draw key={`ma${cx}-${y}`} on={beat >= 2} delay={dl(2, 1.7 + i * 1.6 + j * 0.15)}
            d={
              i === 2
                ? `${arrowD(cx - 17, y, cx + 17, MAP_DST[i][MAP_HIT[i][j]])} ${arrowD(cx + 17, MAP_DST[i][MAP_HIT[i][j]], cx - 17, y)}`
                : arrowD(cx - 17, y, cx + 17, MAP_DST[i][MAP_HIT[i][j]])
            }
            stroke={i === 2 ? GREEN_DARK : AMBER_DARK} sw={1.7} dur={0.3} />
        ))
      )}
      {MAP_CX.map((cx, i) => (
        <Fade key={`ml${cx}`} on={beat >= 2} delay={dl(2, 2.6 + i * 1.6)}>
          <T x={cx} y={200} size={11.5} fill={RED} weight={800}>{mapName[i]}</T>
          <T x={cx} y={222} size={11.5} fill={MUTED} weight={700}>{mapGloss[i]}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 3 — the recurring warning ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={254} size={13} fill={RED} weight={800} anchor="start">
          {t("THE RECURRING WARNING", "RECURRING WARNING")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={196} y={254} size={12.5} fill={INK} weight={800} anchor="start">
          {t("change the set and you change the answer",
             "set badlo aur answer badal jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={44} y={278} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the type depends on BOTH the domain and the codomain",
             "type domain aur codomain dono pe depend karta hai")}
        </T>
      </Fade>
      {/* the same rule, onto */}
      <Draw on={beat >= 3} delay={dl(3, 3.6)}
        d="M 74 330 A 16 22 0 1 1 106 330 A 16 22 0 1 1 74 330 M 154 330 A 16 22 0 1 1 186 330 A 16 22 0 1 1 154 330"
        stroke={INK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        {W_SRC.map((y) => <Circle key={`w1s${y}`} cx={90} cy={y} r={3.2} fill={INK} />)}
        {W_DST1.map((y) => <Circle key={`w1d${y}`} cx={170} cy={y} r={3.2} fill={INK} />)}
      </Fade>
      {W_SRC.map((y, j) => (
        <Draw key={`w1a${y}`} on={beat >= 3} delay={dl(3, 4.6 + j * 0.15)}
          d={arrowD(106, y, 154, W_DST1[j])} stroke={AMBER_DARK} sw={1.7} dur={0.3} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={130} y={298} size={12} fill={GREEN_DARK} weight={900}>onto ✓</T>
      </Fade>
      {/* the same rule, a bigger codomain */}
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={250} y={334} size={11.5} fill={MUTED} weight={700}>
          {t("same rule", "wahi rule")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 6.6)}
        d="M 314 330 A 16 22 0 1 1 346 330 A 16 22 0 1 1 314 330 M 394 330 A 16 22 0 1 1 426 330 A 16 22 0 1 1 394 330"
        stroke={INK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 7.3)}>
        {W_SRC.map((y) => <Circle key={`w2s${y}`} cx={330} cy={y} r={3.2} fill={INK} />)}
        {W_DST2.map((y, k) => (
          <Circle key={`w2d${y}`} cx={410} cy={y} r={3.2}
            fill={k === 3 ? PAPER : INK} stroke={k === 3 ? RED : "none"} strokeWidth={1.8} />
        ))}
      </Fade>
      {W_SRC.map((y, j) => (
        <Draw key={`w2a${y}`} on={beat >= 3} delay={dl(3, 7.6 + j * 0.15)}
          d={arrowD(346, y, 394, W_DST2[j])} stroke={AMBER_DARK} sw={1.7} dur={0.3} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 8.4)}>
        <T x={370} y={298} size={12} fill={RED} weight={900}>not onto ✗</T>
      </Fade>

      {/* ═══════════ beat 4 — composition and inverse ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={554} y={254} size={13} fill={RED} weight={800} anchor="start">
          {t("COMPOSITION & INVERSE", "COMPOSITION aur INVERSE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={554} y={278} size={13} fill={INK} weight={800} anchor="start">
          ( g ∘ f ) ( x ) = g ( f ( x ) )
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={800} y={278} size={12.5} fill={RED} weight={800} anchor="start">
          f ∘ g ≠ g ∘ f
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={562} y={322} size={13} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={arrowD(574, 316, 602, 316)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <Rect x={606} y={302} width={34} height={28} rx={7} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <T x={623} y={322} size={14} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d={arrowD(646, 316, 674, 316)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={680} y={322} size={12.5} fill={INK} weight={800} anchor="start">f (x)</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.9)} d={arrowD(719, 316, 747, 316)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Rect x={751} y={302} width={34} height={28} rx={7} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <T x={768} y={322} size={14} fill={AMBER_DARK} weight={900}>g</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.6)} d={arrowD(791, 316, 819, 316)} stroke={MUTED} sw={1.8} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 5.9)}>
        <T x={825} y={322} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">g ( f (x) )</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={554} y={348} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("read innermost-first · inverse: swap-and-solve · ( g ∘ f )⁻¹ = f⁻¹ ∘ g⁻¹",
             "innermost-first padho · inverse: swap-and-solve · ( g ∘ f )⁻¹ = f⁻¹ ∘ g⁻¹")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the domain checks ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={378} size={13} fill={RED} weight={800} anchor="start">
          {t("DOMAIN — the three checks, then intersect",
             "DOMAIN — teen checks, phir intersect")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 120 396 H 420" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d="M 240 396 H 420" stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Circle cx={240} cy={396} r={5} fill={GREEN_DARK} />
        <T x={44} y={400} size={12} fill={AMBER_DARK} weight={800} anchor="start">√ ( · )</T>
        <T x={430} y={400} size={11} fill={GREEN_DARK} weight={800} anchor="start">≥ 0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 120 424 H 420" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d="M 270 424 H 420" stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <Circle cx={270} cy={424} r={5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={44} y={428} size={12} fill={AMBER_DARK} weight={800} anchor="start">log ( · )</T>
        <T x={430} y={428} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("> 0", "> 0")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5)} d="M 120 452 H 420" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 5.4)} d="M 120 452 H 420" stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <Circle cx={300} cy={452} r={5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        <T x={44} y={456} size={12} fill={AMBER_DARK} weight={800} anchor="start">1 / ( · )</T>
        <T x={430} y={456} size={11} fill={RED} weight={800} anchor="start">≠ 0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={44} y={476} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⇒ then intersect all the conditions",
             "⇒ phir saari conditions intersect karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — two sharp reminders ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={554} y={378} size={13} fill={RED} weight={800} anchor="start">
          {t("TWO SHARP REMINDERS", "DO SHARP REMINDERS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={554} y={400} size={12} fill={INK} weight={800} anchor="start">
          {t("① the floor rounds DOWN, even for negatives",
             "① floor negatives mein bhi DOWN")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 560 428 H 800" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2)}
        d={FL_TICKS.map(([x]) => `M ${x} 428 V 438`).join(" ")} stroke={INK} sw={1.5} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        {FL_TICKS.map(([x, l]) => (
          <T key={`ft${x}`} x={x} y={453} size={11} fill={MUTED} weight={700}>{l}</T>
        ))}
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <Circle cx={622} cy={428} r={4.5} fill={AMBER_DARK} />
        <T x={632} y={418} size={11} fill={AMBER_DARK} weight={800} anchor="start">x &lt; 0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.4)} d={arrowD(622, 420, 582, 420)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.9)}>
        <Circle cx={580} cy={428} r={4.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={554} y={476} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⌊ x ⌋ — DOWN, never toward zero",
             "⌊ x ⌋ — DOWN, zero ki taraf nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={838} y={400} size={12} fill={INK} weight={800} anchor="start">
          {t("② a log base below 1", "② base one se neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <T x={846} y={428} size={12.5} fill={INK} weight={800} anchor="start">
          {t("x < y", "x < y")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.6)} d={arrowD(890, 424, 926, 424)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={936} y={428} size={12.5} fill={INK} weight={800} anchor="start">
          {t("logₐ x > logₐ y", "logₐ x > logₐ y")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 7.6)} d={ringD(986, 424, 11, 12)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 8.2)}>
        <T x={838} y={456} size={12} fill={RED} weight={800} anchor="start">
          {t("the direction flips", "direction flip ho jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — symmetry ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={44} y={508} size={13} fill={RED} weight={800} anchor="start">
          {t("SYMMETRY — even, odd, period", "SYMMETRY — even, odd, period")}
        </T>
      </Fade>
      {/* even — the mirror */}
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d="M 85 560 H 161" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Line x1={123} y1={520} x2={123} y2={566} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d="M 93 528 C 105 560, 141 560, 153 528" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      {/* odd — turn about the origin */}
      <Draw on={beat >= 7} delay={dl(7, 3)} d="M 242 550 H 322 M 282 570 V 528" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.5)}
        d="M 252 568 C 268 552, 276 550, 282 550 C 288 550, 296 548, 312 532"
        stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <Circle cx={282} cy={550} r={4} fill={GREEN_DARK} />
        <T x={282} y={518} size={11} fill={GREEN_DARK} weight={800}>f (0) = 0</T>
      </Fade>
      {/* the modulus folds the negative hump up */}
      <Draw on={beat >= 7} delay={dl(7, 5.6)} d="M 372 548 H 512" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 5.9)} d="M 376 548 C 384 526, 404 526, 412 548" stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 6.4)}>
        <Path d="M 412 548 C 420 570, 440 570, 448 548" fill="none" stroke={MUTED} strokeWidth={2} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6.8)} d={arrowD(430, 564, 430, 534)} stroke={GREEN_DARK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 7.2)} d="M 412 548 C 420 526, 440 526, 448 548" stroke={GREEN_DARK} sw={2.6} dur={0.5} />
      {[123, 282, 441].map((cx, i) => (
        <Fade key={`sy${cx}`} on={beat >= 7} delay={dl(7, 2.2 + i * 2.6)}>
          <T x={cx} y={586} size={11.5} fill={MUTED} weight={700}>{symGloss[i]}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 8 — the functional equations, then verify ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={554} y={508} size={13} fill={RED} weight={800} anchor="start">
          {t("FUNCTIONAL EQUATIONS — then verify",
             "FUNCTIONAL EQUATIONS — phir verify")}
        </T>
      </Fade>
      {FE_CX.map((cx, i) => (
        <Fade key={`fe${cx}`} on={beat >= 8} delay={dl(8, 0.8 + i * 1.7)}>
          <T x={cx} y={530} size={11} fill={INK} weight={800}>{FE_FORM[i]}</T>
        </Fade>
      ))}
      {FE_CX.map((cx, i) => (
        <Draw key={`fx${cx}`} on={beat >= 8} delay={dl(8, 1.2 + i * 1.7)}
          d={FE_AXES(cx)} stroke={INK} sw={1.3} dur={0.35} />
      ))}
      {FE_CX.map((cx, i) => (
        <Draw key={`fq${cx}`} on={beat >= 8} delay={dl(8, 1.5 + i * 1.7)}
          d={FE_CURVE(cx, i)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      ))}
      {FE_CX.map((cx, i) => (
        <Fade key={`fv${cx}`} on={beat >= 8} delay={dl(8, 2.1 + i * 1.7)}>
          <T x={cx} y={588} size={12.5} fill={GREEN_DARK} weight={900}>{feSol[i]}</T>
        </Fade>
      ))}
    </Scene>
  );
}

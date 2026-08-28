/**
 * M12Ch08 · Section 19 — "Procedures and the diamond theorem"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Three decoding procedures, each given a REAL miniature figure (not a bullet
 * list), then the one catalogue result of the subtopic proved on an actual
 * drawn diamond: |x| + |y| ≤ a, four-fold symmetric, Q1 a right triangle with
 * legs a, hence area 2a² — and the same argument on |x|/p + |y|/q ≤ 1 → 2pq.
 *
 * SHARED VISUAL VOCABULARY (Sections 19 · 20 · 21 of this subtopic):
 *   · axes  — INK, x-axis arrow right, y-axis arrow up, origin marked O
 *   · primary curve / upper boundary — AMBER_DARK
 *   · secondary curve / lower boundary — BLUE
 *   · the piece BEFORE a split point — GREEN fill, opacity ≈ 0.20
 *   · the piece AFTER  a split point — AMBER fill, opacity ≈ 0.26
 *     (an undivided region is plain GREEN)
 *   · limits, corners, switch points, final answers — RED
 *   · prose and captions — MUTED, script face
 *
 * Layout: three procedure cards across y 96..336 (each 328 wide, header +
 * four steps + a 120px figure + a caption), a rule at y 344, then the diamond
 * proof filling y 360..590 — diamond A (|x|+|y| ≤ a) at left, the algebra in
 * the middle column, diamond B (|x|/p + |y|/q ≤ 1) at right.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "three procedures, then prove the one    title + underline + subtitle
 *      catalogue result"
 *  1  "Procedure A — modulus / piecewise"      card A: 4 steps + a |f| figure,
 *                                              corner ringed, dashed split, the
 *                                              two sub-pieces shaded
 *  2  "Procedure B — from inequalities"        card B: 4 steps + two boundaries
 *                                              with the overlap lens shaded, the
 *                                              two intersection dots, a test dot
 *  3  "Procedure C — composite region"         card C: 4 steps + two candidate
 *                                              boundaries crossing at s, dashed
 *                                              switch line, the two slabs shaded
 *  4  "|x|+|y| ≤ a is symmetric in all four    rule + axes + the diamond drawn
 *      quadrants ⇒ 4 × the Q1 part"            and shaded, its four vertices
 *                                              labelled, the symmetry statement
 *  5  "in Q1: x + y ≤ a — right triangle       Q1 triangle picked out, both legs
 *      with both legs a"                       marked a, right-angle mark
 *  6  "4 × ½·a·a = 2a²"                        the four quadrants numbered, the
 *                                              result written large
 *  7  "same argument on |x|/p + |y|/q ≤ 1      diamond B drawn with legs p and q,
 *      gives 2pq"                              its Q1 triangle, Area = 2pq
 */

import React from "react";
import { Circle, G, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- the three procedure cards -------------------------------------- */
const CARD_X = [40, 384, 716];

const STEPS_EN: string[][] = [
  [
    "set the inside of each modulus = 0 → corners",
    "on each sub-interval put +f or −f by its sign",
    "integrate each piece, then add them",
    "use symmetry to shorten a symmetric picture",
  ],
  [
    "decode each inequality → which side",
    "sketch the boundaries, shade the overlap",
    "intersection points give you the limits",
    "integrate top − bottom · test a point",
  ],
  [
    "solve boundary₁ = boundary₂ → switch points",
    "split the range at each switch point",
    "on each slab use the boundary extreme there",
    "then sum the slabs",
  ],
];

const STEPS_HI: string[][] = [
  [
    "har modulus ka inside = 0 rakho → corners",
    "har sub-interval par sign se +f ya −f rakho",
    "har piece integrate karo, phir jodo",
    "symmetric picture ho to symmetry se chhota karo",
  ],
  [
    "har inequality decode karo → kaunsi side",
    "boundaries sketch karke overlap shade karo",
    "intersection points hi tumhaare limits hain",
    "top − bottom integrate karo · point test karo",
  ],
  [
    "boundary₁ = boundary₂ solve karo → switch points",
    "har switch point par range split karo",
    "har slab par wahi boundary jo wahaan extreme hai",
    "phir saare slabs jod do",
  ],
];

export default function M12Ch08Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const steps = en ? STEPS_EN : STEPS_HI;

  const headers: [string, string][] = [
    ["PROCEDURE A — modulus / piecewise curve", "PROCEDURE A — modulus / piecewise curve"],
    ["PROCEDURE B — region from inequalities", "PROCEDURE B — inequalities se region"],
    ["PROCEDURE C — composite region", "PROCEDURE C — composite region"],
  ];

  /* diamond A: |x| + |y| ≤ a  ·  centre (176, 474), radius 86 */
  const AX = 176, AY = 474, AR = 86;
  const diamondA = `M ${AX + AR} ${AY} L ${AX} ${AY - AR} L ${AX - AR} ${AY} L ${AX} ${AY + AR} Z`;

  /* diamond B: |x|/p + |y|/q ≤ 1  ·  centre (877, 462), legs 110 × 58 */
  const BX = 877, BY = 462, BP = 110, BQ = 58;
  const diamondB = `M ${BX + BP} ${BY} L ${BX} ${BY - BQ} L ${BX - BP} ${BY} L ${BX} ${BY + BQ} Z`;

  const quadrants: [number, number, string][] = [
    [AX + 34, AY - 22, "①"], [AX - 34, AY - 22, "②"],
    [AX - 34, AY + 34, "③"], [AX + 34, AY + 34, "④"],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Three decoding procedures — then the diamond",
             "Teen decoding procedures — phir diamond")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 330 62 C 460 58, 640 66, 752 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("lay out the procedures first, then prove the one catalogue result of this subtopic",
             "pehle procedures rakho, phir is subtopic ka ekmaatra catalogue result prove karo")}
        </T>
      </Fade>

      {/* ═══════════ beats 1–3 — the three procedure cards ═══════════ */}
      {CARD_X.map((cx, k) => (
        <G key={`card${k}`}>
          <Fade on={beat >= k + 1} delay={dl(k + 1, 0.2)}>
            <T x={cx} y={106} size={13.5} fill={RED} weight={800} anchor="start">
              {t(headers[k][0], headers[k][1])}
            </T>
          </Fade>
          {steps[k].map((s, i) => (
            <Fade key={`s${k}${i}`} on={beat >= k + 1} delay={dl(k + 1, 1.4 + i * 1.9)}>
              <Circle cx={cx + 5} cy={124 + i * 20} r={2.6} fill={MUTED} />
              <T x={cx + 16} y={129 + i * 20} size={11.5} fill={INK} weight={700} anchor="start">
                {s}
              </T>
            </Fade>
          ))}
        </G>
      ))}

      {/* ---- card A figure: a |f| with its corner ---- */}
      <Draw on={beat >= 1} delay={dl(1, 8.6)} d={arrowD(52, 300, 348, 300)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 9)} d={arrowD(90, 312, 90, 208)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 9.4)} d="M 104 252 L 170 300 L 300 216"
        stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        <Path d="M 104 252 L 170 300 L 104 300 Z" fill={GREEN} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.6)}>
        <Path d="M 170 300 L 300 216 L 300 300 Z" fill={AMBER} opacity={0.26} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <Path d="M 170 300 L 170 214" stroke={RED} strokeWidth={1.8} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 11.4)} d={ringD(170, 300, 17, 12)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={200} y={330} size={11.5} fill={RED} weight={800}>
          {t("split at the corner", "corner par split")}
        </T>
      </Fade>

      {/* ---- card B figure: two boundaries, the overlap lens ---- */}
      <Draw on={beat >= 2} delay={dl(2, 8.6)} d={arrowD(396, 300, 700, 300)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 9)} d={arrowD(430, 312, 430, 208)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 9.4)} d="M 452 286 L 654 224" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 10)} d="M 452 286 Q 553 290 654 224" stroke={BLUE} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 10.6)}>
        <Path d="M 452 286 L 654 224 Q 553 290 452 286 Z" fill={GREEN} opacity={0.24} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <Circle cx={452} cy={286} r={4.6} fill={RED} />
        <Circle cx={654} cy={224} r={4.6} fill={RED} />
        <T x={444} y={276} size={11} fill={RED} weight={800} anchor="end">
          {t("meet", "meet")}
        </T>
        <T x={662} y={218} size={11} fill={RED} weight={800} anchor="start">
          {t("meet", "meet")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11.6)}>
        <Circle cx={553} cy={266} r={4} fill={INK} />
        <T x={562} y={262} size={10.5} fill={INK} weight={800} anchor="start">
          {t("test pt", "test pt")}
        </T>
        <T x={608} y={244} size={11} fill={AMBER_DARK} weight={800} anchor="start">top</T>
        <T x={492} y={300} size={11} fill={BLUE} weight={800} anchor="start">bottom</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12.2)}>
        <T x={548} y={330} size={11.5} fill={MUTED} weight={700}>
          {t("shade the overlap, then test", "overlap shade karo, phir test")}
        </T>
      </Fade>

      {/* ---- card C figure: two candidate boundaries, switch at s ---- */}
      <Draw on={beat >= 3} delay={dl(3, 8.6)} d={arrowD(728, 300, 1032, 300)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 9)} d={arrowD(760, 312, 760, 208)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 9.4)} d="M 776 232 L 1010 282" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 9.9)} d="M 776 278 L 1010 228" stroke={BLUE} sw={2.6} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 10.6)}>
        <Path d="M 776 278 L 884 255 L 884 300 L 776 300 Z" fill={GREEN} opacity={0.24} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <Path d="M 884 255 L 1010 282 L 1010 300 L 884 300 Z" fill={AMBER} opacity={0.28} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11.4)}>
        <Path d="M 884 300 L 884 220" stroke={RED} strokeWidth={1.8} strokeDasharray="6 5" />
        <Circle cx={884} cy={255} r={5} fill={RED} />
        <T x={884} y={214} size={13} fill={RED} weight={900}>s</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={800} y={330} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("slab 1", "slab 1")}
        </T>
        <T x={950} y={330} size={11.5} fill={AMBER_DARK} weight={800}>
          {t("slab 2", "slab 2")}
        </T>
        <T x={880} y={330} size={11.5} fill={MUTED} weight={700}>+</T>
      </Fade>

      {/* ═══════════ beat 4 — the diamond and its four-fold symmetry ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 36 344 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={330} y={374} size={15} fill={RED} weight={800} anchor="start">
          {t("THE DIAMOND THEOREM  —  |x| + |y| ≤ a",
             "DIAMOND THEOREM  —  |x| + |y| ≤ a")}
        </T>
      </Fade>
      {/* axes for diamond A */}
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(70, AY, 302, AY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(AX, 580, AX, 372)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={diamondA} stroke={AMBER_DARK} sw={3} dur={1.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <Path d={diamondA} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={AX + AR + 8} y={AY + 20} size={12} fill={RED} weight={800} anchor="start">(a, 0)</T>
        <T x={AX + 12} y={AY - AR - 8} size={12} fill={RED} weight={800} anchor="start">(0, a)</T>
        <T x={AX - AR - 8} y={AY + 20} size={12} fill={RED} weight={800} anchor="end">(−a, 0)</T>
        <T x={AX + 12} y={AY + AR + 18} size={12} fill={RED} weight={800} anchor="start">(0, −a)</T>
        <T x={AX - 10} y={AY + 18} size={12} fill={INK_LIGHT} anchor="end">O</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={330} y={402} size={12.5} fill={INK} weight={700} anchor="start">
          {t("x → −x  or  y → −y leaves the condition unchanged",
             "x → −x ya y → −y condition ko nahin badalta")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={330} y={424} size={12.5} fill={INK} weight={700} anchor="start">
          {t("⇒ the region is symmetric in all four quadrants",
             "⇒ region chaaron quadrants mein symmetric hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={330} y={448} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⇒ Area = 4 × (first-quadrant part)",
             "⇒ Area = 4 × (first-quadrant part)")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the first-quadrant triangle ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Path d={`M ${AX} ${AY} L ${AX + AR} ${AY} L ${AX} ${AY - AR} Z`} fill={GREEN} opacity={0.34} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)}
        d={`M ${AX} ${AY} L ${AX + AR} ${AY} L ${AX} ${AY - AR} Z`} stroke={GREEN_DARK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Path d={`M ${AX} ${AY - 13} L ${AX + 13} ${AY - 13} L ${AX + 13} ${AY}`}
          stroke={GREEN_DARK} strokeWidth={1.6} fill="none" />
        <T x={AX + AR / 2} y={AY + 20} size={14} fill={GREEN_DARK} weight={900}>a</T>
        <T x={AX - 12} y={AY - AR / 2} size={14} fill={GREEN_DARK} weight={900} anchor="end">a</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={330} y={484} size={13} fill={INK} weight={800} anchor="start">
          {t("in Q1 :  |x| = x  and  |y| = y", "Q1 mein :  |x| = x  aur  |y| = y")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={330} y={508} size={15} fill={AMBER_DARK} weight={900} anchor="start">
          x + y ≤ a,   x ≥ 0,   y ≥ 0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={330} y={530} size={12.5} fill={MUTED} script anchor="start">
          {t("a right triangle with both legs of length a",
             "ek right triangle jiski dono legs ki length a hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — four copies, the result ═══════════ */}
      {quadrants.map(([qx, qy, lab], i) => (
        <Fade key={`q${lab}`} on={beat >= 6} delay={dl(6, 0.2 + i * 0.25)}>
          <T x={qx} y={qy} size={14} fill={GREEN_DARK} weight={900}>{lab}</T>
        </Fade>
      ))}
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={640} y={568} size={12} fill={MUTED} script anchor="start">
          {t("four congruent", "chaar congruent")}
        </T>
        <T x={640} y={586} size={12} fill={MUTED} script anchor="start">
          {t("triangles", "triangles")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Rect x={324} y={542} width={302} height={44} rx={12} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={340} y={573} size={22} fill={GREEN_DARK} weight={900} anchor="start">
          4 · ½ · a · a  =  2a²
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the p, q version ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={BX} y={374} size={15} fill={RED} weight={800}>
          |x| / p  +  |y| / q  ≤  1
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d={arrowD(744, BY, 1024, BY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={arrowD(BX, 534, BX, 392)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.9)} d={diamondB} stroke={AMBER_DARK} sw={3} dur={1.2} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Path d={diamondB} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <Path d={`M ${BX} ${BY} L ${BX + BP} ${BY} L ${BX} ${BY - BQ} Z`} fill={GREEN} opacity={0.34} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.8)}
        d={`M ${BX} ${BY} L ${BX + BP} ${BY} L ${BX} ${BY - BQ} Z`} stroke={GREEN_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={BX + BP / 2} y={BY + 20} size={14} fill={GREEN_DARK} weight={900}>p</T>
        <T x={BX - 12} y={BY - BQ / 2 + 4} size={14} fill={GREEN_DARK} weight={900} anchor="end">q</T>
        <T x={BX + BP + 8} y={BY + 20} size={12} fill={RED} weight={800} anchor="start">(p, 0)</T>
        <T x={BX + 12} y={BY - BQ - 8} size={12} fill={RED} weight={800} anchor="start">(0, q)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={BX} y={552} size={12.5} fill={INK} weight={700}>
          {t("Q1 triangle with legs p and q", "Q1 triangle, legs p aur q")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7.2)}>
        <Rect x={744} y={562} width={266} height={34} rx={11} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={877} y={587} size={20} fill={GREEN_DARK} weight={900}>Area = 2pq</T>
      </Fade>
    </Scene>
  );
}

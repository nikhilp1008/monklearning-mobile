/**
 * M12Ch01 · Section 8 — "JEE Advanced: closeness versus same fractional part"
 * Subtopic: Types of Relations
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two relations on the whole real line, tried side by side, so the board is
 * split down the middle by a rule at x = 538 and every claim is a picture on
 * a real line: the closeness WINDOW [a − 1, a + 1] for R₁, the 0-1-2
 * counterexample with its three measured distances, then for R₂ two reals
 * sitting the same distance past their integer ticks, the class of 0.3 laid
 * out as unit hops, and the label interval [0, 1) with 0 filled and 1 hollow.
 * The closing beat puts all three class systems on ONE line so "never
 * colliding" is something you can see rather than something you are told.
 *
 * Grid
 *   header band       y  30 –  96
 *   definitions       y 104 – 146   (two chips, R₁ left · R₂ right)
 *   LEFT  half  x 36–520, y 156 – 486   R₁ : beats 2, 3, 4
 *   RIGHT half  x 560–1044, y 156 – 486  R₂ : beats 5, 6, 7
 *   closing band      y 492 – 596        beat 8, full width
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "a JEE Advanced pairing"              title + underline + subtitle + rule
 *  1  "define a R₁ b and a R₂ b"            the two definition chips + the
 *                                           vertical divider between the halves
 *  2  "R₁ reflexive ✓ symmetric ✓,          the closeness window around a, with
 *      but transitivity is the problem"     a − 1 and a + 1 marked · three verdicts
 *  3  "take a = 0, b = 1, c = 2"            the three points on ℝ, the two
 *                                           distance-1 arcs, the span bracket
 *                                           measuring |a − c| = 2
 *  4  "closeness breaks transitivity"       the moral, in red, under the figure
 *  5  "R₂: difference a whole number ⇒      two reals with the SAME offset past
 *      same fractional part"                their integer ticks, highlighted
 *  6  "the class of 0.3"                    −0.7, 0.3, 1.3, ⋯ on ℝ joined by
 *                                           unit hops, with [0.3] = {0.3 + k}
 *  7  "labels live in [0, 1)"               the label interval drawn: 0 filled,
 *                                           1 hollow
 *  8  "three colour-coded class systems"    one real line carrying all three
 *                                           evenly spaced families + legend
 *
 * Visual vocabulary shared with Sections 7 and 9 of this subtopic:
 *   number lines INK with a drawn arrowhead and a MUTED ℝ tag · points and
 *   relation arcs AMBER_DARK · a property that HOLDS is GREEN_DARK · a failure
 *   or a trap is RED · shaded regions AMBER at low opacity · highlight strips
 *   GREEN · headings RED, captions MUTED.
 *   Deliberate departure: in beat 8 the three residue-style families must be
 *   told apart, so they carry AMBER_DARK, GREEN_DARK and BLUE as identity
 *   colours rather than as verdicts.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** plain quadratic arc; positive rise bulges UP, negative bulges DOWN */
function arcD(x1: number, y1: number, x2: number, y2: number, rise: number): string {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - rise;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

/** short vertical ticks along a horizontal line, as one path */
const ticksD = (xs: number[], y: number, h: number) =>
  xs.map((x) => `M ${x} ${y - h} V ${y + h}`).join(" ");

/* ---- beat 5 : the integer grid on which a and b sit ---- */
const G5_Y = 246;
const G5_TICKS = [604, 664, 724, 784, 844, 904, 964];
const G5_A = 626;   // a  = (an integer) + 0.37 of a step
const G5_B = 806;   // b  = the same offset, three steps along

/* ---- beat 6 : the class of 0.3, unit = 120px, value 0 at x = 700 ---- */
const G6_Y = 354;
const c6x = (v: number) => 700 + 120 * v;
const G6_CLASS = [-0.7, 0.3, 1.3, 2.3];
const G6_INTS = [-1, 0, 1, 2];

/* ---- beat 8 : three evenly spaced families on one line ---- */
const F_Y = 550;
const F_X0 = 76;
const F_S = 96;
const family = (frac: number) => {
  const out: number[] = [];
  for (let k = 0; k < 11; k++) {
    const x = F_X0 + frac * F_S + k * F_S;
    if (x <= 992) out.push(x);
  }
  return out;
};
const F_INTS = family(0);

export default function M12Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={49} size={24} fill={RED} script>
          {t("Closeness vs. same fractional part",
             "Closeness aur same fractional part")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 336 65 C 480 61, 640 69, 748 63" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("a JEE Advanced pairing — one fake equivalence, one real one, on the whole line ℝ",
             "ek JEE Advanced pairing — ek fake equivalence, ek real, poori line ℝ par")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.9)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the two definitions ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={48} y={104} w={460} h={42} fill={CREAM} stroke={RED}
          textFill={RED} size={18} script={false}>
          {t("R₁ :   | a − b | ≤ 1", "R₁ :   | a − b | ≤ 1")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Chip x={572} y={104} w={464} h={42} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={18} script={false}>
          {t("R₂ :   a − b ∈ ℤ", "R₂ :   a − b ∈ ℤ")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d="M 538 160 V 486" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 2 — R₁ : the closeness window ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={170} size={13.5} fill={RED} weight={800} anchor="start">
          {t("R₁ — CLOSENESS · not an equivalence", "R₁ — CLOSENESS · equivalence nahi")}
        </T>
      </Fade>
      <Rect
        x={174} y={186} width={200} height={24} rx={6}
        fill={AMBER} stroke="none"
        opacity={beat >= 2 ? 0.22 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(48, 198, 496, 198)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={ticksD([174, 374], 198, 8)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={274} cy={198} r={5.5} fill={AMBER_DARK} />
        <T x={506} y={203} size={13} fill={MUTED} weight={700} anchor="start">ℝ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={174} y={228} size={12.5} fill={INK} weight={800}>a − 1</T>
        <T x={274} y={228} size={12.5} fill={INK} weight={900}>a</T>
        <T x={374} y={228} size={12.5} fill={INK} weight={800}>a + 1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={40} y={254} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("✓ reflexive — the distance from a to itself is 0",
             "✓ reflexive — a ki khud se distance 0 hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={40} y={278} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("✓ symmetric — distance ignores the order",
             "✓ symmetric — distance order nahi dekhti")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={40} y={302} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ transitive — this is where R₁ breaks",
             "✗ transitive — yahin R₁ toot jaata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the 0, 1, 2 counterexample ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(48, 364, 496, 364)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={110} cy={364} r={5.5} fill={AMBER_DARK} />
        <Circle cx={250} cy={364} r={5.5} fill={AMBER_DARK} />
        <Circle cx={390} cy={364} r={5.5} fill={AMBER_DARK} />
        <T x={506} y={369} size={13} fill={MUTED} weight={700} anchor="start">ℝ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={110} y={390} size={13} fill={INK} weight={900}>a = 0</T>
        <T x={250} y={390} size={13} fill={INK} weight={900}>b = 1</T>
        <T x={390} y={390} size={13} fill={INK} weight={900}>c = 2</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={arcD(110, 356, 250, 356, 26)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d={arcD(250, 356, 390, 356, 26)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={180} y={326} size={12} fill={GREEN_DARK} weight={900}>| a − b | = 1</T>
        <T x={320} y={326} size={12} fill={GREEN_DARK} weight={900}>| b − c | = 1</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.4)} d="M 110 402 V 410 H 390 V 402" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={250} y={430} size={13} fill={RED} weight={900}>
          {t("| a − c | = 2 — exceeds 1 ✗", "| a − c | = 2 — 1 se zyada ✗")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the moral ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={40} y={456} size={13} fill={RED} weight={800} anchor="start">
          {t("the moral — closeness relations almost always break transitivity",
             "moral — closeness relations lagbhag hamesha transitivity todti hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={40} y={480} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("small gaps quietly accumulate", "chhote gaps chupchaap accumulate ho jaate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — R₂ : the same fractional part ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={170} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("R₂ — SAME FRACTIONAL PART · a real equivalence",
             "R₂ — SAME FRACTIONAL PART · ek real equivalence")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={560} y={192} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a − b ∈ ℤ  ⟺  a and b share the same fractional part",
             "a − b ∈ ℤ  ⟺  a aur b ka fractional part same hai")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(570, G5_Y, 1010, G5_Y)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={ticksD(G5_TICKS, G5_Y, 8)} stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.7)} d={`M 604 ${G5_Y} H ${G5_A}`} stroke={GREEN} sw={5} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4.1)} d={`M 784 ${G5_Y} H ${G5_B}`} stroke={GREEN} sw={5} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <Circle cx={G5_A} cy={G5_Y} r={5.5} fill={AMBER_DARK} />
        <Circle cx={G5_B} cy={G5_Y} r={5.5} fill={AMBER_DARK} />
        <T x={G5_A} y={224} size={13} fill={INK} weight={900}>a</T>
        <T x={G5_B} y={224} size={13} fill={INK} weight={900}>b</T>
        <T x={1020} y={251} size={13} fill={MUTED} weight={700} anchor="start">ℝ</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={1020} y={224} size={12.5} fill={GREEN_DARK} weight={900} anchor="end">b − a ∈ ℤ</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={800} y={272} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("both sit the same distance past an integer tick",
             "dono integer tick se same distance aage hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the class of 0.3 ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={560} y={302} size={14} fill={AMBER_DARK} weight={900} anchor="start">
          {t("[ 0.3 ] = { 0.3 + k :  k ∈ ℤ }", "[ 0.3 ] = { 0.3 + k :  k ∈ ℤ }")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(570, G6_Y, 1010, G6_Y)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)}
        d={ticksD(G6_INTS.map(c6x), G6_Y, 8)} stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        {G6_CLASS.map((v) => (
          <Circle key={`c6${v}`} cx={c6x(v)} cy={G6_Y} r={5.5} fill={AMBER_DARK} />
        ))}
        <T x={1020} y={359} size={13} fill={MUTED} weight={700} anchor="start">ℝ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={c6x(-0.7)} y={334} size={12} fill={AMBER_DARK} weight={900}>−0.7</T>
        <T x={c6x(0.3)} y={334} size={12} fill={AMBER_DARK} weight={900}>0.3</T>
        <T x={c6x(1.3)} y={334} size={12} fill={AMBER_DARK} weight={900}>1.3</T>
        <T x={c6x(2.3)} y={334} size={12} fill={MUTED} weight={900}>⋯</T>
      </Fade>
      {[0, 1, 2].map((i) => (
        <Draw key={`hop6${i}`} on={beat >= 6} delay={dl(6, 4.2 + i * 0.4)}
          d={arcD(c6x(G6_CLASS[i]), 364, c6x(G6_CLASS[i + 1]), 364, -28)}
          stroke={AMBER_DARK} sw={2} dur={0.4} />
      ))}
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        {[0, 1, 2].map((i) => (
          <T key={`hl6${i}`} x={(c6x(G6_CLASS[i]) + c6x(G6_CLASS[i + 1])) / 2} y={402}
            size={12} fill={AMBER_DARK} weight={900}>+ 1</T>
        ))}
      </Fade>

      {/* ═══════════ beat 7 — the labels live in [0, 1) ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={560} y={424} size={12.5} fill={INK} weight={800} anchor="start">
          {t("class labels = the fractional part", "class labels = fractional part")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={448} size={12.5} fill={INK} weight={800} anchor="start">
          {t("always in the interval [ 0, 1 )", "hamesha [ 0, 1 ) interval mein")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d="M 700 478 H 830" stroke={GREEN_DARK} sw={5} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <Circle cx={700} cy={478} r={5.5} fill={GREEN_DARK} />
        <Circle cx={830} cy={478} r={5.5} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={686} y={483} size={12.5} fill={INK} weight={900} anchor="end">0</T>
        <T x={844} y={483} size={12.5} fill={INK} weight={900} anchor="start">1</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={1040} y={483} size={12} fill={MUTED} weight={700} anchor="end">
          {t("0 is in, 1 is out", "0 andar, 1 bahar")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — three class systems on one line ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 40 492 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={540} y={510} size={12.5} fill={INK} weight={800}>
          {t("three class systems, each seeded by its own fractional part — evenly spaced, never colliding",
             "teen class systems, har ek apne fractional part se seeded — evenly spaced, kabhi collide nahi karte")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.4)} d={arrowD(56, F_Y, 1010, F_Y)} stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 8} delay={dl(8, 2.2)} d={ticksD(F_INTS, F_Y, 6)} stroke={MUTED} sw={1.5} dur={0.6} />
      {([
        [0.3, AMBER_DARK],
        [0.55, GREEN_DARK],
        [0.85, BLUE],
      ] as [number, string][]).map(([frac, col], fi) => (
        <Fade key={`fam${frac}`} on={beat >= 8} delay={dl(8, 3 + fi * 0.7)}>
          {family(frac).map((x) => (
            <Circle key={`p${frac}-${x}`} cx={x} cy={F_Y} r={5.5} fill={col} />
          ))}
        </Fade>
      ))}
      {([
        [300, AMBER_DARK, t("class of 0.3", "0.3 ki class")],
        [540, GREEN_DARK, t("class of u", "u ki class")],
        [780, BLUE, t("class of v", "v ki class")],
      ] as [number, string, string][]).map(([cx, col, label], li) => (
        <Fade key={`lg${cx}`} on={beat >= 8} delay={dl(8, 5.4 + li * 0.4)}>
          <Circle cx={cx - 52} cy={576} r={5.5} fill={col} />
          <T x={cx - 38} y={580} size={13} fill={col} weight={900} anchor="start">{label}</T>
        </Fade>
      ))}
      <Fade on={beat >= 8} delay={dl(8, 6.8)}>
        <T x={1040} y={580} size={12} fill={MUTED} weight={700} anchor="end">
          {t("u, v ∈ [ 0, 1 )", "u, v ∈ [ 0, 1 )")}
        </T>
      </Fade>
    </Scene>
  );
}

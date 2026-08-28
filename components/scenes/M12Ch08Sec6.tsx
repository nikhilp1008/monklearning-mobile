/**
 * M12Ch08 · Section 6 — "The sign trap: never integrate across a root"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The counter-example to Section 5. Same layout — one real graph on the left,
 * the argument running down the right column — but now the curve changes sign
 * inside the interval, so the picture has to carry the whole point: two lobes,
 * one under the axis and one over it, equal in size and opposite in sign. The
 * trap — calling ∫₋₂² x³ dx the AREA — is written out and then struck through
 * on the board, because seeing the false STEP crossed out is what makes the
 * rule stick. The implication "x³ odd ⇒ = 0" is deliberately left standing:
 * it is true, it simply is not the area.
 *
 * Shared visual vocabulary with Sections 4 and 5:
 *   axes            INK, drawn with arrowD (head on +x and +y)
 *   the curve       BLUE  #0284c7
 *   area ABOVE      AMBER fill @ 0.24, strips in AMBER_DARK
 *   area BELOW      RED   fill @ 0.18, strips in RED
 *   the answer      GREEN / GREEN_DARK
 *   limits          tick marks on the axis + the value
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "area bounded by y = x³ and the x-axis,  axes, ticks at −2 and 2, the
 *      from x = −2 to x = 2"                   cubic, the two dashed limit
 *                                              lines, the curve label
 *  1  "it dips below on the left, rises above  both lobes shaded (red under,
 *      on the right, crossing at the origin"   amber over), the origin ringed,
 *                                              both lobes labelled
 *  2  "<whisper> the trap: x³ is odd, so the   right column: "Area = ∫₋₂² x³ dx"
 *      integral is 0 — but the region is not   struck through, "odd ⇒ = 0" left
 *      empty; the signed pieces cancelled"     standing as TRUE, ± on the lobes,
 *                                              the cancel arc
 *  3  "the fix — ∫|f|, split at x = 0,         THE FIX block + strips drawn on
 *      the halves are equal by symmetry"       both lobes + the y-axis haloed
 *                                              green — here x = 0 IS the axis
 *  4  "|∫₋₂⁰| + ∫₀² = 2∫₀² x³ dx"              the two-line reduction, and the
 *                                              ×2 mirror note on the graph
 *  5  "x³ → x⁴/4, giving twice sixteen over    = 2 [ x⁴/4 ]₀² = 2 · 16/4
 *      four"
 *  6  "that comes to eight — not zero"         the answer chip + an arrow back
 *                                              to the signed zero
 *  7  "sign change on the interval? split."    divider + the mental shortcut
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- the graph: y = x³ on the board ---------- */

const OX = 300;   // screen x of x = 0
const OY = 348;   // screen y of y = 0
const SX = 95;    // px per unit x
const SY = 28;    // px per unit y

const px = (x: number) => OX + SX * x;
const py = (y: number) => OY - SY * y;
const f = (x: number) => x * x * x;

const poly = (pts: [number, number][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

const curveD = (x0: number, x1: number, n = 44) =>
  poly(
    Array.from({ length: n + 1 }, (_, i) => {
      const x = x0 + ((x1 - x0) * i) / n;
      return [px(x), py(f(x))] as [number, number];
    })
  );

/** the lobe between the curve and the x-axis, x0 → x1 */
const lobeD = (x0: number, x1: number) =>
  `${curveD(x0, x1)} L ${px(x1).toFixed(1)} ${OY} L ${px(x0).toFixed(1)} ${OY} Z`;

/** [ … ] with a lower and an upper evaluation limit */
function Ev({ lo, hi, size }: { lo: string; hi: string; size: number }) {
  return (
    <>
      <TSpan fontSize={size * 0.6} dy={size * 0.32}>{lo}</TSpan>
      <TSpan fontSize={size * 0.6} dy={-size * 0.9}>{hi}</TSpan>
    </>
  );
}

/** ∫ with a lower and an upper limit, then the integrand */
function Lim({
  lo, hi, size, children,
}: {
  lo: string; hi: string; size: number; children: string | number | (string | number)[];
}) {
  return (
    <>
      <TSpan fontSize={size * 1.3}>∫</TSpan>
      <TSpan fontSize={size * 0.6} dy={size * 0.34}>{lo}</TSpan>
      <TSpan fontSize={size * 0.6} dy={-size * 0.92}>{hi}</TSpan>
      <TSpan fontSize={size} dy={size * 0.58}>{children}</TSpan>
    </>
  );
}

export default function M12Ch08Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /* seven strips per lobe — the right ones mirror the left ones exactly */
  const halfStrips = Array.from({ length: 7 }, (_, k) => 0.3 + k * 0.27);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the problem and the picture ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The sign trap — never integrate across a root",
             "Sign trap — kisi root ke across seedhe integrate mat karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 268 62 C 420 58, 660 66, 812 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.1)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t("area bounded by y = x³ and the x-axis, from x = −2 to x = 2",
             "y = x³ aur x-axis se bounded area, x = −2 se x = 2 tak")}
        </T>
      </Fade>

      {/* axes */}
      <Draw on={beat >= 0} delay={dl(0, 3)} d={arrowD(92, OY, 552, OY)} stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d={arrowD(OX, 592, OX, 100)} stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.9)}>
        <T x={562} y={353} size={14} fill={INK} anchor="start">x</T>
        <T x={288} y={108} size={14} fill={INK} anchor="end">y</T>
        <T x={288} y={368} size={12.5} fill={MUTED} anchor="end">O</T>
      </Fade>
      {/* ticks: −2 and 2 on the x-axis, ±8 on the y-axis */}
      <Draw on={beat >= 0} delay={dl(0, 4.1)}
        d={`M ${px(-2)} ${OY - 7} L ${px(-2)} ${OY + 7} M ${px(2)} ${OY - 7} L ${px(2)} ${OY + 7}`}
        stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 4.3)}
        d={`M ${OX - 7} ${py(8)} L ${OX + 7} ${py(8)} M ${OX - 7} ${py(-8)} L ${OX + 7} ${py(-8)}`}
        stroke={INK} sw={2.2} dur={0.3} />
      {/* only the x-limits are numbered: segment 0 says "minus two" and "two"
          and nothing else. A bare "8" here would pre-empt the beat-6 answer. */}
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={px(-2)} y={332} size={13} fill={INK} weight={800}>−2</T>
        <T x={px(2)} y={370} size={13} fill={INK} weight={800}>2</T>
      </Fade>
      {/* the cubic */}
      <Draw on={beat >= 0} delay={dl(0, 4.9)} d={curveD(-2.05, 2.05)} stroke={BLUE} sw={3} dur={1.6} />
      <Fade on={beat >= 0} delay={dl(0, 6.4)}>
        <T x={504} y={134} size={16} fill={BLUE} weight={800} anchor="start">y = x³</T>
      </Fade>
      {/* the two limit lines */}
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <Path d={`M ${px(-2)} ${OY} L ${px(-2)} ${py(-8)}`} stroke={AMBER_DARK} strokeWidth={2.4} strokeDasharray="7 6" fill="none" />
        <Path d={`M ${px(2)} ${OY} L ${px(2)} ${py(8)}`} stroke={AMBER_DARK} strokeWidth={2.4} strokeDasharray="7 6" fill="none" />
      </Fade>

      {/* ═══════════ beat 1 — read the picture ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Path d={lobeD(-2, 0)} fill={RED} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Path d={lobeD(0, 2)} fill={AMBER} opacity={0.24} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={ringD(OX, OY, 22, 17)} stroke={GREEN_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={268} y={306} size={12.5} fill={GREEN_DARK} script anchor="end">
          {t("crosses at the origin", "origin par cross karta hai")}
        </T>
      </Fade>
      {/* head lands INSIDE the red lobe: at x = −1.5 the lobe runs from the
          axis (OY) down to py(f(−1.5)) = py(−3.375), so 55% of the way down
          the ordinate is comfortably within the fill */}
      <Draw on={beat >= 1} delay={dl(1, 3)}
        d={arrowD(196, 496, px(-1.5), py(f(-1.5) * 0.55))} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={202} y={506} size={12.5} fill={RED} script anchor="start">
          {t("left half dips BELOW the axis", "left half axis ke NEECHE jaata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={arrowD(422, 254, 452, 290)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={416} y={246} size={12.5} fill={AMBER_DARK} script anchor="end">
          {t("right half rises ABOVE it", "right half uske UPAR uthta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the trap ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={596} y={118} size={14} fill={RED} weight={800} anchor="start">
          {t("THE TRAP — what a hurried student writes", "THE TRAP — jaldbaaz student kya likhta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={596} y={158} size={20} fill={INK} weight={800} anchor="start">
          {"Area = "}<Lim lo="−2" hi="2" size={20}>{" x³ dx"}</Lim>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={596} y={192} size={15.5} fill={INK} anchor="start">
          {t("x³ is an odd function", "x³ ek odd function hai")}
        </T>
        <T x={794} y={192} size={18} fill={RED} weight={900} anchor="start">⇒   = 0</T>
      </Fade>
      {/* strike the FALSE step — calling that signed integral the area. The
          implication below it is true and must stay unmarked. The box wraps
          the "Area = ∫₋₂² x³ dx" line: x 596→~763, glyph band y ~137→167. */}
      <Draw on={beat >= 2} delay={dl(2, 6)} d={crossD(592, 138, 175, 30)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={596} y={216} size={12.5} fill={GREEN_DARK} script anchor="start">
          {t("true — but 0 is the signed total, not the area",
             "sahi hai — par 0 signed total hai, area nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.6)}>
        <T x={596} y={240} size={13} fill={MUTED} script anchor="start">
          {t("but the region is plainly not empty —", "par region saaf taur par empty nahin hai —")}
        </T>
        <T x={596} y={262} size={13} fill={MUTED} script anchor="start">
          {t("the two signed pieces have simply cancelled", "dono signed pieces bas cancel ho gaye hain")}
        </T>
      </Fade>
      {/* the same story told on the graph */}
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={180} y={404} size={26} fill={RED} weight={900}>−</T>
        <T x={442} y={296} size={26} fill={AMBER_DARK} weight={900}>+</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 8.6)}
        d="M 206 400 C 268 442, 372 400, 428 306" stroke={MUTED} sw={1.8} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 9.6)}>
        <T x={330} y={462} size={12.5} fill={MUTED} script>
          {t("they cancel — signed, not honest", "ye cancel ho jaate hain — signed, honest nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the fix ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={596} y={288} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("THE FIX — take the absolute value", "THE FIX — absolute value lo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={596} y={324} size={19} fill={INK} weight={800} anchor="start">
          {"Area = "}<Lim lo="−2" hi="2" size={19}>{" | x³ | dx"}</Lim>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={596} y={352} size={12.5} fill={INK} script anchor="start">
          {t("split at the crossing x = 0 · the halves are equal by symmetry",
             "crossing x = 0 par split karo · symmetry se dono halves barabar hain")}
        </T>
      </Fade>
      {/* the split line, and matching strips on each lobe */}
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        {/* x = 0 IS the y-axis here, so a dashed line at OX would just overprint
            it and read as a dirty axis. Halo the axis instead: a wide, low-alpha
            green band the black axis sits inside. */}
        <Path d={`M ${OX} ${py(-8.6)} L ${OX} ${py(8.6)}`}
          stroke={GREEN_DARK} strokeWidth={10} strokeOpacity={0.28}
          strokeLinecap="round" fill="none" />
        <T x={314} y={196} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("split at x = 0", "x = 0 par split")}
        </T>
      </Fade>
      {halfStrips.map((x, i) => (
        <Draw key={`sl${i}`} on={beat >= 3} delay={dl(3, 5 + i * 0.1)}
          d={`M ${px(-x).toFixed(1)} ${OY} L ${px(-x).toFixed(1)} ${py(f(-x)).toFixed(1)}`}
          stroke={RED} sw={1.5} dur={0.35} />
      ))}
      {halfStrips.map((x, i) => (
        <Draw key={`sr${i}`} on={beat >= 3} delay={dl(3, 5 + i * 0.1)}
          d={`M ${px(x).toFixed(1)} ${OY} L ${px(x).toFixed(1)} ${py(f(x)).toFixed(1)}`}
          stroke={AMBER_DARK} sw={1.5} dur={0.35} />
      ))}
      {/* both lower captions start right of the haloed axis (x 295–305) and end
          well short of the right column at x = 596 */}
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={316} y={546} size={12.5} fill={GREEN_DARK} script anchor="start">
          {t("strip for strip, the two halves match exactly",
             "strip dar strip, dono halves match karte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — split, then use symmetry ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={620} y={390} size={18} fill={INK} weight={800} anchor="start">
          {"= | "}<Lim lo="−2" hi="0" size={18}>{" x³ dx |   +   "}</Lim>
          <Lim lo="0" hi="2" size={18}>{" x³ dx"}</Lim>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={620} y={422} size={18} fill={GREEN_DARK} weight={800} anchor="start">
          {"=  2 "}<Lim lo="0" hi="2" size={18}>{" x³ dx"}</Lim>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={316} y={574} size={12.5} fill={MUTED} script anchor="start">
          {t("so: measure the right half and double it", "to: right half naapo aur double kar do")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — evaluate ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={620} y={454} size={18} fill={INK} weight={800} anchor="start">
          {"=  2 [ x⁴/4 ]"}<Ev lo="0" hi="2" size={18} />
          <TSpan fontSize={18} dy={10.44}>{"  =  2 · 16/4"}</TSpan>
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the answer, and what it is not ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={596} y={472} w={330} h={46} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          {t("Area = 8 square units", "Area = 8 square units")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={arrowD(956, 300, 872, 200)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={958} y={318} size={14} fill={RED} weight={800} anchor="start">
          {t("not zero", "zero nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3)} d={ringD(761, 495, 178, 30)} stroke={GREEN} sw={2.2} dur={0.9} />

      {/* ═══════════ beat 7 — the mental shortcut ═══════════ */}
      {/* clears the beat-6 answer ring, whose lower sweep reaches y ≈ 535 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 596 542 H 1040" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={596} y={560} size={13.5} fill={RED} weight={800} anchor="start">
          {t("MENTAL SHORTCUT — curve changes sign on the interval?",
             "MENTAL SHORTCUT — interval par curve sign badalta hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={596} y={584} size={13} fill={INK} anchor="start">
          {t("Stop and split. Never integrate straight across a root.",
             "Ruko aur split karo. Root ke across seedhe integrate mat karo.")}
        </T>
      </Fade>
    </Scene>
  );
}

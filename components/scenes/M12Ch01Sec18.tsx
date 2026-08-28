/**
 * M12Ch01 · Section 18 — "Pitfalls and pro-tips for functions"
 * Subtopic: Types of Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A summary section is exactly where a board collapses into bullets, so every
 * trap here carries its own REAL figure: the range sitting strictly inside a
 * codomain B, y = x² and y = sin x each cut twice (and four times) by one
 * horizontal level, an into-map with a codomain element that is genuinely
 * never hit, and the two size bars that decide feasibility. The reflex half
 * gets a monotone curve cut exactly once, and the closing band gets three
 * miniature sketches — an odd-degree sweep, an even-degree floor, and a
 * pigeonhole 5 → 3.
 *
 * Grid: rule at y 92 · row 1 (traps ①②③) y 104..321 in three columns
 *   40..340 / 366..700 / 726..1044 · row 2 y 335..480 split by a vertical
 *   divider at x 516 into trap ④ (left) and the reflex (right) · a full-width
 *   divider at y 488 and the sanity-check band y 496..596.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close with the traps, then reflexes"  title + underline + subtitle + rule
 *  1  "trap ①: onto without a codomain"      A → B with the range drawn as a
 *                                            blob strictly inside B
 *  2  "trap ②: even powers, |x|, trig"       y = x² cut twice and y = sin x
 *                                            cut four times by one level
 *  3  "trap ③: into is not 'not a function'" a valid map with one codomain
 *                                            element left hollow and arrowed
 *  4  "trap ④: counting blunders"            ᵐPₙ kept, mⁿ crossed out, and the
 *                                            two size bars with both gates
 *  5  "now the speed reflexes"               the vertical divider + heading
 *  6  "check monotonicity first"             a strictly increasing curve cut
 *                                            exactly once, f′ > 0
 *  7  "the sanity checks"                    odd-degree sweep ⇒ onto · even
 *                                            degree with its unreachable floor
 *                                            ⇒ into · 5 dots into 3 ⇒ one-one
 *                                            impossible
 *
 * Visual vocabulary (shared with Sections 16 and 17 of this subtopic):
 *   domain object AMBER_DARK · codomain object BLUE · map arrows AMBER_DARK ·
 *   curves AMBER_DARK · the cutting level and every failure RED · results and
 *   the safe verdicts GREEN_DARK · construction MUTED.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* ---- trap ② figure 1 : y = x² on origin (450,250), 26 px / 16 px ---- */
const PAR_D = "M 393 172.6 Q 450 327 507 172.6";

/* ---- trap ② figure 2 : y = sin x from x 545..689, amplitude 24 ---- */
function sinePath(): string {
  const out: string[] = [];
  for (let i = 0; i <= 72; i++) {
    const px = 545 + (144 * i) / 72;
    const th = ((px - 545) / 96) * 2 * Math.PI;
    out.push(`${px.toFixed(1)} ${(250 - 24 * Math.sin(th)).toFixed(1)}`);
  }
  return `M ${out.join(" L ")}`;
}
const SIN_D = sinePath();
const SIN_HITS = [555.3, 582.7, 651.3, 678.7];

/* ---- trap ③ : a valid into-map, the image 190 is never used ---- */
const INTO_MAP: [number, number][] = [
  [175, 165],
  [205, 215],
  [235, 245],
];

/* ---- band block 3 : five inputs crushed into three outputs ---- */
const PIGEON: [number, number][] = [
  [526, 538],
  [541, 538],
  [556, 556],
  [571, 574],
  [586, 574],
];

export default function M12Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Traps, and the reflexes that beat them",
             "Traps, aur wo reflexes jo unhe harate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 62 C 470 58, 640 66, 780 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("closing Types of Functions — the four classification traps, then the exam reflexes",
             "Types of Functions band karte hue — chaar classification traps, phir exam reflexes")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: onto without stating the codomain ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① onto without stating the codomain", "① codomain bataye bina onto kehna")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={ellD(95, 200, 34, 48)} stroke={AMBER_DARK} sw={2.3} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={ellD(235, 200, 44, 62)} stroke={BLUE} sw={2.3} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={53} y={206} size={15} fill={AMBER_DARK} weight={900} anchor="end">A</T>
        <T x={287} y={206} size={15} fill={BLUE} weight={900} anchor="start">B</T>
        {[175, 200, 225].map((y) => <Circle key={`t1a${y}`} cx={95} cy={y} r={4.2} fill={INK} />)}
      </Fade>
      <Path
        d={ellD(235, 214, 28, 30)}
        fill={AMBER} stroke={AMBER_DARK} strokeWidth={2}
        opacity={beat >= 1 ? 0.55 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        {[194, 214, 234].map((y) => <Circle key={`t1b${y}`} cx={235} cy={y} r={4.2} fill={INK} />)}
        {/* an element of B that lies OUTSIDE the range blob and is never hit —
            this is what makes range ⊊ B visible instead of merely asserted */}
        <Circle cx={235} cy={252} r={4.2} fill={INK} />
      </Fade>
      {[[175, 194], [200, 214], [225, 234]].map(([a, b], i) => (
        <Draw key={`t1m${i}`} on={beat >= 1} delay={dl(1, 3.2 + i * 0.35)}
          d={arrowD(133, a, 205, b)} stroke={AMBER_DARK} sw={1.9} dur={0.35} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={235} y={158} size={11.5} fill={AMBER_DARK} weight={800}>
          {t("range f", "range f")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.8)} d="M 235 164 V 182" stroke={AMBER_DARK} sw={1.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={40} y={286} size={12.5} fill={INK} weight={700} anchor="start">
          {t("onto means range = B, nothing else",
             "onto ka matlab range = B, aur kuch nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={40} y={310} size={12.5} fill={RED} weight={800} anchor="start">
          {t("compare with the GIVEN B, not with R",
             "diye gaye B se compare karo, R se nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: even powers, |x|, trig are many-one ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={366} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② even powers, |x|, trig are many-one", "② even powers, |x|, trig many-one hain")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 388 250 H 516 M 450 254 V 168" stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={PAR_D} stroke={AMBER_DARK} sw={2.5} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={450} y={272} size={11.5} fill={AMBER_DARK} weight={800}>y = x²</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d="M 393 214 H 507" stroke={RED} sw={1.7} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Circle cx={411} cy={214} r={4.6} fill={RED} />
        <Circle cx={489} cy={214} r={4.6} fill={RED} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 538 250 H 696 M 545 278 V 222" stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={SIN_D} stroke={AMBER_DARK} sw={2.5} dur={1.1} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={614} y={206} size={11.5} fill={AMBER_DARK} weight={800}>y = sin x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d="M 538 235 H 696" stroke={RED} sw={1.7} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.7)}>
        {SIN_HITS.map((x) => <Circle key={`t2s${x}`} cx={x} cy={235} r={4.6} fill={RED} />)}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <T x={366} y={294} size={12.5} fill={INK} weight={700} anchor="start">
          {t("± symmetry or periodicity kills injectivity",
             "± symmetry ya periodicity injectivity maar deti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={366} y={318} size={12.5} fill={RED} weight={800} anchor="start">
          {t("check it BEFORE any algebra", "algebra se PEHLE check karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: into is a valid function type ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={726} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ into is NOT “not a function”", "③ into ka matlab “not a function” nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={ellD(790, 205, 34, 48)} stroke={AMBER_DARK} sw={2.3} dur={0.8} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={ellD(930, 205, 34, 62)} stroke={BLUE} sw={2.3} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={748} y={211} size={15} fill={AMBER_DARK} weight={900} anchor="end">A</T>
        <T x={972} y={211} size={15} fill={BLUE} weight={900} anchor="start">B</T>
        {[175, 205, 235].map((y) => <Circle key={`t3a${y}`} cx={790} cy={y} r={4.2} fill={INK} />)}
        {[165, 190, 215, 245].map((y) => (
          <Circle key={`t3b${y}`} cx={930} cy={y} r={4.4}
            fill={y === 190 ? CREAM : INK} stroke={y === 190 ? RED : "none"} strokeWidth={1.8} />
        ))}
      </Fade>
      {INTO_MAP.map(([a, b], i) => (
        <Draw key={`t3m${i}`} on={beat >= 3} delay={dl(3, 2.4 + i * 0.4)}
          d={arrowD(828, a, 896, b)} stroke={AMBER_DARK} sw={1.9} dur={0.35} />
      ))}
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={arrowD(975, 232, 940, 196)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={978} y={240} size={11} fill={MUTED} weight={700} anchor="start">
          {t("never hit", "kabhi nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={726} y={294} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("still a perfectly valid function ✓", "yeh phir bhi valid function hai ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.2)}>
        <T x={726} y={318} size={12.5} fill={INK} weight={700} anchor="start">
          {t("into just means not onto — do not reject it",
             "into ka matlab sirf not onto — reject mat karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: counting blunders ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={346} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ counting blunders", "④ counting blunders")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={40} y={380} size={17} fill={GREEN_DARK} weight={900} anchor="start">one-one:  ᵐPₙ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={200} y={380} size={17} fill={RED} weight={700} anchor="start">mⁿ</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={crossD(198, 366, 24, 18)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={238} y={380} size={12.5} fill={RED} weight={800} anchor="start">
          {t("never", "kabhi nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={40} y={412} size={12.5} fill={INK} weight={800} anchor="start">
          {t("and respect the feasibility gates on the sizes:",
             "aur sizes par feasibility gates respect karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={40} y={446} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">|X| = n</T>
        <Rect x={96} y={436} width={110} height={14} rx={4}
          fill={AMBER} fillOpacity={0.5} stroke={AMBER_DARK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.8)}>
        <T x={40} y={474} size={12.5} fill={BLUE} weight={800} anchor="start">|Y| = m</T>
        <Rect x={96} y={464} width={160} height={14} rx={4}
          fill={BLUE} fillOpacity={0.28} stroke={BLUE} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={272} y={446} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("m ≥ n ⇒ one-one possible ✓", "m ≥ n ⇒ one-one possible ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={272} y={474} size={12.5} fill={RED} weight={800} anchor="start">
          {t("m > n ⇒ onto impossible ✗", "m > n ⇒ onto impossible ✗")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the turn to the reflexes ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 516 340 V 476" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={346} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SPEED REFLEXES — what saves real time",
             "SPEED REFLEXES — jo exam mein time bachate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — monotonicity first ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={372} size={12.5} fill={INK} weight={800} anchor="start">
          {t("differentiable? check monotonicity first",
             "differentiable hai? pehle monotonicity check karo")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 560 466 H 720 M 578 476 V 386" stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 582 460 C 620 454, 648 410, 716 390"
        stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={724} y={384} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">f′ &gt; 0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d="M 566 422 H 726" stroke={GREEN_DARK} sw={1.7} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={650} cy={422} r={5} fill={GREEN_DARK} />
        <T x={732} y={426} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("one hit", "ek hit")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={790} y={406} size={12.5} fill={INK} weight={700} anchor="start">
          {t("if f′ keeps ONE sign", "agar f′ ek hi sign rakhe")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={790} y={430} size={12.5} fill={INK} weight={700} anchor="start">
          {t("throughout, f is one-one", "throughout, f one-one hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={790} y={454} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("done — no algebra at all", "khatam — bina kisi algebra ke")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the sanity checks ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 488 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={40} y={536} size={13} fill={RED} weight={800} anchor="start">
          {t("SANITY", "SANITY")}
        </T>
        <T x={40} y={560} size={13} fill={RED} weight={800} anchor="start">
          {t("CHECKS", "CHECKS")}
        </T>
      </Fade>

      {/* odd degree ⇒ onto */}
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d="M 190 556 H 300 M 244 588 V 522" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d="M 196 584 C 232 578, 226 534, 296 524"
        stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={310} y={550} size={12} fill={INK} weight={700} anchor="start">
          {t("odd degree ⇒ ONTO", "odd degree ⇒ ONTO")}
        </T>
      </Fade>

      {/* even degree ⇒ into */}
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d="M 460 556 H 570 M 514 574 V 522" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.9)} d="M 478 526 Q 514 578 550 526"
        stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <Circle cx={514} cy={552} r={4.2} fill={RED} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.8)} d="M 466 570 H 566" stroke={RED} sw={1.7} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 5.3)}>
        <T x={580} y={544} size={12} fill={INK} weight={700} anchor="start">
          {t("even degree ⇒ INTO", "even degree ⇒ INTO")}
        </T>
        <T x={580} y={568} size={11} fill={RED} weight={700} anchor="start">
          {t("below the min: never hit", "min ke neeche: kabhi nahin")}
        </T>
      </Fade>

      {/* |domain| > |codomain| ⇒ one-one impossible */}
      <Draw on={beat >= 7} delay={dl(7, 6.4)} d={ellD(786, 556, 22, 36)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 6.8)} d={ellD(872, 556, 22, 24)} stroke={BLUE} sw={2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 7.3)}>
        <T x={758} y={562} size={12} fill={AMBER_DARK} weight={900} anchor="end">X</T>
        <T x={900} y={562} size={12} fill={BLUE} weight={900} anchor="start">Y</T>
        {[526, 541, 556, 571, 586].map((y) => (
          <Circle key={`pgx${y}`} cx={786} cy={y} r={3.6} fill={INK} />
        ))}
        {[538, 556, 574].map((y) => (
          <Circle key={`pgy${y}`} cx={872} cy={y} r={3.6} fill={INK} />
        ))}
      </Fade>
      {PIGEON.map(([a, b], i) => (
        <Draw key={`pg${i}`} on={beat >= 7} delay={dl(7, 7.8 + i * 0.22)}
          d={arrowD(808, a, 850, b)} stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      ))}
      <Fade on={beat >= 7} delay={dl(7, 9.2)}>
        <T x={918} y={546} size={11.5} fill={INK} weight={700} anchor="start">
          {t("|domain| > |codomain|", "|domain| > |codomain|")}
        </T>
        <T x={918} y={570} size={11.5} fill={RED} weight={800} anchor="start">
          {t("⇒ one-one impossible", "⇒ one-one impossible")}
        </T>
      </Fade>
    </Scene>
  );
}

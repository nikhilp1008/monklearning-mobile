/**
 * M12Ch08 · Section 2 — "Area as the limit of a sum"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Section 1 sold the strip picture; this section makes it rigorous. So the
 * board is ONE honest Riemann-sum diagram that gets built up piece by piece —
 * partition marks, sample points, the n rectangles, and then the red error
 * slivers that shrink away — plus a second, finer partition drawn beside it
 * so the student SEES the slivers vanish rather than being told they do.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "f continuous and non-negative on [a, b]"  title + underline + subtitle;
 *                                                axes, the curve y = f(x), the
 *                                                region a→b shaded, a and b ticked,
 *                                                the two hypotheses annotated
 *  1  "partition into n sub-intervals,           the 9 division ticks x₀ … xₙ on the
 *      Δx = (b − a)/n, points x₀ … xₙ"           axis + the Δx = (b − a)/n chip
 *  2  "width of each piece is Δx, the points     a bracket under every one of the 8
 *      march evenly"                             pieces, each labelled Δx
 *  3  "over the i-th piece pick any ξᵢ; the      the i-th rectangle drawn bold and
 *      strip ≈ rectangle f(ξᵢ) × Δx"             ringed, ξᵢ dotted on the axis, the
 *                                                dashed height up to the curve
 *  4  "summing them gives Sₙ = Σ f(ξᵢ) Δx"       the remaining 7 rectangles + the
 *                                                boxed sum formula
 *  5  "thinner strips ⇒ smaller slivers;         the red error slivers between every
 *      n → ∞, Δx → 0, slivers vanish"            rectangle top and the curve, then the
 *                                                SAME f on the SAME [a, b] redrawn at
 *                                                n = 24 (one similarity transform of the
 *                                                main figure) with its own a/b ticks,
 *                                                region and slivers — so the student sees
 *                                                the red shrink to hairlines
 *  6  "the sum converges: lim = ∫ₐᵇ f(x) dx"     the boxed limit equation
 *  7  "that equality IS the definition of        divider + the Riemann-sum closing
 *      the definite integral"                    lines
 *
 * Visual vocabulary shared with Sections 1 and 3: axes INK + arrowD, primary
 * curve AMBER_DARK, swept region AMBER @ 0.2, strips/rectangles GREEN outline
 * + GREEN fill, limits of integration RED, results GREEN_DARK weight 900.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

/* ── the main Riemann figure ──────────────────────────────────────── */
const AXIS_Y = 430;
const A_X = 168;
const B_X = 584;
const N = 8;
const DX = (B_X - A_X) / N; // 52 px per sub-interval

const gY = (px: number) =>
  350 - 118 * Math.sin((px - 112) / 300) - 26 * Math.sin((px - 112) / 70);

const CURVE = (() => {
  const p: string[] = [];
  for (let px = 120; px <= 640; px += 8) p.push(`${px} ${gY(px).toFixed(1)}`);
  return `M ${p.join(" L ")}`;
})();

const REGION = (() => {
  const p: string[] = [`${A_X} ${AXIS_Y}`];
  for (let px = A_X; px <= B_X; px += 8) p.push(`${px} ${gY(px).toFixed(1)}`);
  p.push(`${B_X} ${AXIS_Y}`);
  return `M ${p.join(" L ")} Z`;
})();

/** rectangle tops: the sample point ξᵢ is taken inside the i-th piece */
const TOPS = Array.from({ length: N }, (_, i) => gY(A_X + i * DX + DX / 2));
const HI = 4; // the piece the voice zooms into on beat 3
const XI_X = A_X + HI * DX + DX / 2; // 402

/** the two-lobed error region between a rectangle top and the true curve */
const sliver = (i: number) => {
  const x0 = A_X + i * DX;
  const x1 = x0 + DX;
  const p: string[] = [`${x0} ${TOPS[i].toFixed(1)}`];
  for (let px = x0; px <= x1; px += 4) p.push(`${px} ${gY(px).toFixed(1)}`);
  p.push(`${x1} ${TOPS[i].toFixed(1)}`);
  return `M ${p.join(" L ")} Z`;
};

/* ── the n = 24 refinement inset (beat 5) ─────────────────────────────
 * The SAME f on the SAME interval [a, b] — the main figure reproduced
 * under one similarity transform (scale I_S about the inset origin), so
 * the ONLY thing that differs between the two pictures is n. Anything
 * else would compare Δx across two different intervals.
 */
const I_AXIS_Y = 430;
const I_S = 0.65; // uniform scale — same shape, same proportions
const I_A_X = 740; // where a lands in the inset
/** main-figure x/y → inset x/y */
const ix = (px: number) => I_A_X + (px - A_X) * I_S;
const iy = (py: number) => I_AXIS_Y - (AXIS_Y - py) * I_S;
const I_B_X = ix(B_X); // 1010.4 — where b lands
const N2 = 24;
const DX2 = (B_X - A_X) / N2; // 17.33 px of main figure per fine piece

const I_CURVE = (() => {
  const p: string[] = [];
  for (let px = A_X - 24; px <= B_X + 24; px += 6)
    p.push(`${ix(px).toFixed(1)} ${iy(gY(px)).toFixed(1)}`);
  return `M ${p.join(" L ")}`;
})();

const I_REGION = (() => {
  const p: string[] = [`${ix(A_X).toFixed(1)} ${I_AXIS_Y}`];
  for (let px = A_X; px <= B_X; px += 8)
    p.push(`${ix(px).toFixed(1)} ${iy(gY(px)).toFixed(1)}`);
  p.push(`${ix(B_X).toFixed(1)} ${I_AXIS_Y}`);
  return `M ${p.join(" L ")} Z`;
})();

const FINE = Array.from({ length: N2 }, (_, i) => {
  const x0 = A_X + i * DX2;
  return {
    x: ix(x0),
    w: DX2 * I_S,
    top: iy(gY(x0 + DX2 / 2)),
  };
});

/** the same two-lobed error region, now over the 24-piece partition */
const iSliver = (i: number) => {
  const x0 = A_X + i * DX2;
  const top = gY(x0 + DX2 / 2);
  const p: string[] = [`${ix(x0).toFixed(1)} ${iy(top).toFixed(1)}`];
  for (let k = 0; k <= 8; k++) {
    const px = x0 + (DX2 * k) / 8;
    p.push(`${ix(px).toFixed(1)} ${iy(gY(px)).toFixed(1)}`);
  }
  p.push(`${ix(x0 + DX2).toFixed(1)} ${iy(top).toFixed(1)}`);
  return `M ${p.join(" L ")} Z`;
};

export default function M12Ch08Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the hypotheses and the region ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Area as the limit of a sum", "Area ek sum ki limit ke roop me")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 386 64 C 480 60, 620 68, 700 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("the theorem that justifies the whole strip method",
             "wahi theorem jo poori strip method ko justify karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={44} y={110} size={14} fill={RED} weight={800} anchor="start">
          {t("① Take f continuous and non-negative on [a, b]",
             "① f ko [a, b] par continuous aur non-negative lo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d={arrowD(96, AXIS_Y, 648, AXIS_Y)} stroke={INK} sw={2.6} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 4)} d={arrowD(112, 452, 112, 150)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={656} y={436} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={102} y={156} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={104} y={448} size={13} fill={INK_LIGHT} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 5)} d={CURVE} stroke={AMBER_DARK} sw={2.8} dur={1.5} />
      <Fade on={beat >= 0} delay={dl(0, 6.4)}>
        <T x={438} y={168} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("continuous — no breaks, no jumps", "continuous — na break, na jump")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <Path d={REGION} fill={AMBER} fillOpacity={0.2} stroke="none" />
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 8)} d={`M ${A_X} 422 L ${A_X} 440`} stroke={RED} sw={2.6} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 8.3)} d={`M ${B_X} 422 L ${B_X} 440`} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 8.7)}>
        <T x={A_X} y={450} size={14} fill={RED} weight={900}>a</T>
        <T x={B_X} y={450} size={14} fill={RED} weight={900}>b</T>
        <T x={218} y={414} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("f ≥ 0 on [a, b]", "f ≥ 0 on [a, b]")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the partition ═══════════ */}
      {Array.from({ length: N + 1 }, (_, i) => A_X + i * DX).map((px, i) => (
        <Draw key={`tk${i}`} on={beat >= 1} delay={dl(1, 0.3 + i * 0.16)}
          d={`M ${px} ${AXIS_Y} L ${px} ${AXIS_Y + 10}`} stroke={INK} sw={1.9} dur={0.2} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        {Array.from({ length: N + 1 }, (_, i) => (
          <T key={`tl${i}`} x={A_X + i * DX} y={466} size={11} fill={INK_LIGHT} weight={700}>
            {i === N ? "xₙ" : `x${"₀₁₂₃₄₅₆₇"[i]}`}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Rect x={690} y={104} width={290} height={46} rx={12}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
        <T x={835} y={136} size={20} fill={AMBER_DARK} weight={900}>Δx = (b − a) / n</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={690} y={172} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("n sub-intervals, division points x₀ up to xₙ",
             "n sub-intervals, division points x₀ se xₙ tak")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={150} y={190} size={12.5} fill={INK} weight={700} anchor="start">
          {t("partition [a, b] into n equal sub-intervals",
             "[a, b] ko n equal sub-intervals me partition karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — every piece has the same width Δx ═══════════ */}
      {Array.from({ length: N }, (_, i) => {
        const x0 = A_X + i * DX;
        return (
          <Draw key={`br${i}`} on={beat >= 2} delay={dl(2, 0.3 + i * 0.22)}
            d={`M ${x0 + 3} 474 L ${x0 + 3} 482 M ${x0 + 3} 482 L ${x0 + DX - 3} 482 M ${x0 + DX - 3} 474 L ${x0 + DX - 3} 482`}
            stroke={GREEN_DARK} sw={1.5} dur={0.25} />
        );
      })}
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        {Array.from({ length: N }, (_, i) => (
          <T key={`bl${i}`} x={A_X + i * DX + DX / 2} y={478} size={9.5} fill={GREEN_DARK} weight={800}>
            Δx
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={376} y={502} size={12} fill={MUTED} script>
          {t("every piece the same width — the division points march evenly across [a, b]",
             "har piece ki same width — division points [a, b] par evenly chalte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the i-th strip is almost a rectangle ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={150} y={212} size={12.5} fill={INK} weight={700} anchor="start">
          {t("over the i-th sub-interval pick ANY sample point ξᵢ",
             "i-th sub-interval par KOI bhi sample point ξᵢ chuno")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Circle cx={XI_X} cy={AXIS_Y} r={4.6} fill={RED} />
        <T x={XI_X} y={446} size={12} fill={RED} weight={900}>ξᵢ</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.9)}
        d={`M ${XI_X} ${AXIS_Y} L ${XI_X} ${TOPS[HI].toFixed(1)}`} stroke={RED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <Rect x={A_X + HI * DX} y={TOPS[HI]} width={DX} height={AXIS_Y - TOPS[HI]}
          fill={GREEN} fillOpacity={0.34} stroke={GREEN_DARK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={ringD(402, 352, 36, 92)} stroke={RED} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        {/* clear of the ring: its apex sits at (402, 262.8), sw 2 → top 261.8 */}
        <T x={XI_X} y={246} size={13.5} fill={GREEN_DARK} weight={900}>f(ξᵢ)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.4)}
        d={`M ${A_X + HI * DX + 3} 410 L ${A_X + HI * DX + 3} 422 M ${A_X + HI * DX + 3} 416 L ${A_X + (HI + 1) * DX - 3} 416 M ${A_X + (HI + 1) * DX - 3} 410 L ${A_X + (HI + 1) * DX - 3} 422`}
        stroke={GREEN_DARK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 4.9)}>
        <T x={XI_X} y={406} size={11.5} fill={GREEN_DARK} weight={900}>Δx</T>
      </Fade>

      {/* ═══════════ beat 4 — sum every rectangle ═══════════ */}
      {TOPS.map((top, i) =>
        i === HI ? null : (
          <Fade key={`rc${i}`} on={beat >= 4} delay={dl(4, 0.3 + i * 0.22)}>
            <Rect x={A_X + i * DX} y={top} width={DX} height={AXIS_Y - top}
              fill={GREEN} fillOpacity={0.16} stroke={GREEN} strokeWidth={1.5} />
          </Fade>
        )
      )}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Rect x={676} y={186} width={334} height={48} rx={12}
          fill={PAPER} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={843} y={218} size={21} fill={GREEN_DARK} weight={900}>Sₙ = Σᵢ₌₁ⁿ f(ξᵢ) · Δx</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={843} y={252} size={12} fill={MUTED} script>
          {t("all n rectangles together — an approximation to the area",
             "saari n rectangles milkar — area ka ek approximation")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the error slivers, and what n → ∞ does ═══════════ */}
      {TOPS.map((_, i) => (
        <Fade key={`sl${i}`} on={beat >= 5} delay={dl(5, 0.3 + i * 0.18)}>
          <Path d={sliver(i)} fill={RED} fillOpacity={0.36} stroke={RED} strokeWidth={0.8} />
        </Fade>
      ))}
      {/* tip recomputed from gY: at x = 582 the 8th sliver runs y 221.1 → 230.1,
          so (582, 226) lands inside the red sliver, not in the green rectangle */}
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d={arrowD(604, 292, 582, 226)} stroke={RED} sw={1.7} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={608} y={300} size={12} fill={RED} weight={800} anchor="start">
          {t("error slivers", "error slivers")}
        </T>
      </Fade>
      {/* the same f on the same [a, b] — re-partitioned 24 ways, so the
          red slivers can be compared directly against the ones at left */}
      <Draw on={beat >= 5} delay={dl(5, 4)} d={arrowD(692, I_AXIS_Y, 1038, I_AXIS_Y)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={arrowD(704, 446, 704, 280)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 4.9)} d={I_CURVE} stroke={AMBER_DARK} sw={2.4} dur={1.1} />
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <Path d={I_REGION} fill={AMBER} fillOpacity={0.2} stroke="none" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.9)} d={`M ${I_A_X} 422 L ${I_A_X} 438`} stroke={RED} sw={2.4} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 6.05)} d={`M ${I_B_X} 422 L ${I_B_X} 438`} stroke={RED} sw={2.4} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <T x={I_A_X} y={450} size={12.5} fill={RED} weight={900}>a</T>
        <T x={I_B_X} y={450} size={12.5} fill={RED} weight={900}>b</T>
      </Fade>
      {FINE.map((f, i) => (
        <Fade key={`fn${i}`} on={beat >= 5} delay={dl(5, 6.4 + i * 0.055)}>
          <Rect x={f.x} y={f.top} width={f.w} height={I_AXIS_Y - f.top}
            fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={0.9} />
        </Fade>
      ))}
      {FINE.map((_, i) => (
        <Fade key={`fs${i}`} on={beat >= 5} delay={dl(5, 7.8 + i * 0.03)}>
          <Path d={iSliver(i)} fill={RED} fillOpacity={0.36} stroke={RED} strokeWidth={0.6} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 8.7)}>
        <T x={868} y={452} size={13} fill={GREEN_DARK} weight={900}>
          {t("n = 24  ⇒  Δx much smaller", "n = 24  ⇒  Δx bahut chhota")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10.5)}>
        <T x={868} y={470} size={12} fill={MUTED} weight={600}>
          {t("the slivers have all but vanished", "slivers lagbhag gayab ho chuki hain")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={868} y={490} size={12} fill={RED} weight={800}>
          {t("let n → ∞, Δx → 0 : they vanish completely",
             "n → ∞ karo, Δx → 0 : ye poori tarah gayab")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the sum converges to the integral ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={284} y={510} width={500} height={52} rx={13}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={320} y={534} size={21} fill={GREEN_DARK} weight={900} anchor="start">
          lim  Σᵢ₌₁ⁿ f(ξᵢ) Δx   =   ∫ₐᵇ f(x) dx
        </T>
        <T x={340} y={557} size={9.5} fill={GREEN_DARK} weight={800}>n → ∞</T>
      </Fade>

      {/* ═══════════ beat 7 — that equality is the definition ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 570 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={44} y={590} size={13.5} fill={RED} weight={800} anchor="start">
          {t("that final equality is no coincidence — it IS the definition of the definite integral, as a Riemann sum",
             "wo final equality koi coincidence nahi — yahi definite integral ki definition hai, ek Riemann sum ke roop me")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={1036} y={590} size={12} fill={GREEN_DARK} script anchor="end">
          {t("strip intuition = integral", "strip intuition = integral")}
        </T>
      </Fade>
    </Scene>
  );
}

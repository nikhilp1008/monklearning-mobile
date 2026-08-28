/**
 * M12Ch08 · Section 14 — "The swap trap: split at the crossing"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Same visual vocabulary as Section 13 (this is the second scene of the
 * subtopic): axes in INK with arrowheads, the CURVE (here the cubic) in
 * BLUE, the LINE in RED, the region as one GREEN path at low opacity,
 * strips as thin AMBER rectangles, limits/answers in GREEN_DARK and the
 * trap in RED. Graph on the left, worked column on the right, a rule band
 * across the bottom.
 *
 * Plot frame: X(x) = 290 + 155x , Y(y) = 330 − 155y
 *   O = (290,330) · (1,1) = (445,175) · (−1,−1) = (135,485)
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "area enclosed between y = x and y = x³ for x from −1 to 1"
 *       title + underline + subtitle, axes, the line (RED) and the cubic
 *       (BLUE) plotted with labels, dashed walls at x = −1 and x = 1 with
 *       their ticks, and BOTH lobes shaded green — the shape we want
 *  1  "the hasty ∫₋₁¹ (x − x³) dx = 0, because the integrand is odd"
 *       THE TRAP block, the wrong integral, the cross-out over the "= 0",
 *       and the ⊕ / ⊖ signed-area discs hugging the two lobes (just outside
 *       them, so the beat-3 ordinates and the beat-4 strips stay legible)
 *  2  "the curves cross at −1, 0, 1 and swap at the origin"
 *       x = x³ ⇒ x(x²−1) = 0, three crossing dots + rings, the SWAP arc
 *       through the origin
 *  3  "on (0,1) x > x³, on (−1,0) x³ > x — the roles flip"
 *       TEST THE HALVES block, dashed ordinates at x = ½ and x = −½ with
 *       their line/cubic dots, and the on-top tags inside each lobe
 *  4  "by symmetry, twice the integral from 0 to 1; antiderivative"
 *       SYMMETRY block with 2∫₀¹(x − x³)dx and x²/2 − x⁴/4, six strips
 *       filling the right lobe, the equal-halves note with its two arrows
 *  5  "twice (½ − ¼), which is one half"
 *       the evaluation line
 *  6  "one half square unit — split the instant curves cross"
 *       the answer chip on the graph + the bottom rule band
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- tiny path builders ---------- */

const poly = (pts: [number, number][]) =>
  pts
    .map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

const sample = (
  a: number,
  b: number,
  n: number,
  P: (t: number) => [number, number]
): [number, number][] => {
  const out: [number, number][] = [];
  for (let i = 0; i <= n; i++) out.push(P(a + ((b - a) * i) / n));
  return out;
};

const curveD = (
  a: number,
  b: number,
  n: number,
  P: (t: number) => [number, number]
) => poly(sample(a, b, n, P));

const bandD = (
  a: number,
  b: number,
  n: number,
  TOP: (t: number) => [number, number],
  BOT: (t: number) => [number, number]
) => poly([...sample(a, b, n, TOP), ...sample(a, b, n, BOT).reverse()]) + " Z";

/* ---------- the plot frame ---------- */

const X = (x: number) => 290 + 155 * x;
const Y = (y: number) => 330 - 155 * y;

const LINE = curveD(-1.1, 1.1, 2, (t) => [X(t), Y(t)]);
const CUBIC = curveD(-1.05, 1.05, 80, (t) => [X(t), Y(t * t * t)]);

/** right lobe: 0 ≤ x ≤ 1, line on top */
const LOBE_R = bandD(
  0,
  1,
  60,
  (t) => [X(t), Y(t)],
  (t) => [X(t), Y(t * t * t)]
);
/** left lobe: −1 ≤ x ≤ 0, cubic on top */
const LOBE_L = bandD(
  -1,
  0,
  60,
  (t) => [X(t), Y(t * t * t)],
  (t) => [X(t), Y(t)]
);

const STRIP_XS = [0.15, 0.3, 0.45, 0.6, 0.75, 0.9];

export default function M12Ch08Sec14({
  currentTime,
  reveals,
  language,
}: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title, axes, curves, the shape ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={24} fill={RED} script>
          {t(
            "The swap trap — split at the crossing",
            "Swap trap — crossing par split karo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.1)}
        d="M 356 60 C 440 56, 630 64, 726 58"
        stroke={RED}
        sw={2.1}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the area enclosed between  y = x  and  y = x³  for x from −1 to 1",
            "y = x  aur  y = x³  ke beech ghiri area, x = −1 se 1 tak"
          )}
        </T>
      </Fade>

      {/* axes */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d={arrowD(70, 330, 512, 330)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.6)}
        d={arrowD(290, 536, 290, 132)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={520} y={336} size={15} fill={INK} anchor="start" weight={800}>
          x
        </T>
        <T x={282} y={128} size={15} fill={INK} anchor="end" weight={800}>
          y
        </T>
        <T x={264} y={318} size={14} fill={MUTED} anchor="end" weight={700}>
          O
        </T>
      </Fade>

      {/* the cubic (BLUE) and the line (RED) */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.4)}
        d={CUBIC}
        stroke={BLUE}
        sw={3}
        dur={1.2}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={446} y={140} size={17} fill={BLUE} anchor="end" weight={800}>
          y = x³
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={LINE}
        stroke={RED}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 5.9)}>
        <T x={474} y={176} size={17} fill={RED} anchor="start" weight={800}>
          y = x
        </T>
      </Fade>

      {/* the two lobes and the interval walls */}
      <Fade on={beat >= 0} delay={dl(0, 6.4)}>
        <Path d={LOBE_R} fill={GREEN} opacity={0.18} stroke="none" />
        <Path d={LOBE_L} fill={GREEN} opacity={0.18} stroke="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7.2)}>
        <Path
          d="M 445 330 L 445 175"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <Path
          d="M 135 330 L 135 485"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <T x={447} y={352} size={14} fill={INK_LIGHT} weight={700}>
          1
        </T>
        <T x={133} y={352} size={14} fill={INK_LIGHT} weight={700}>
          −1
        </T>
      </Fade>

      {/* ═══════════ beat 1 — THE TRAP ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={560} y={114} size={15} fill={RED} anchor="start" weight={800}>
          {t("THE TRAP — the hasty move", "THE TRAP — jaldbaaz move")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={570} y={152} size={22} fill={INK} anchor="start">
          ∫₋₁¹ ( x − x³ ) dx &nbsp;=&nbsp; 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={570} y={184} size={16} fill={MUTED} anchor="start" weight={700}>
          {t(
            "the integrand is odd, so it cancels itself",
            "integrand odd hai, isliye khud ko cancel kar deta hai"
          )}
        </T>
      </Fade>
      {/* the signed halves that produced the fake zero */}
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Circle cx={344} cy={232} r={16} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={344} y={239} size={20} fill={RED} weight={900}>
          +
        </T>
        <Circle cx={236} cy={428} r={16} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={236} y={435} size={20} fill={RED} weight={900}>
          −
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.6)}
        d={crossD(718, 134, 42, 22)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={570} y={214} size={17} fill={RED} anchor="start" weight={800}>
          {t(
            "but the region clearly HAS area",
            "par region mein saaf-saaf area hai"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — three crossings, and the swap ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={560} y={252} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "WHY — the curves cross THREE times",
            "WHY — curves TEEN baar cross karti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={570} y={286} size={20} fill={INK} anchor="start">
          x = x³ &nbsp;⇒&nbsp; x ( x² − 1 ) = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={570} y={314} size={19} fill={GREEN_DARK} anchor="start">
          x = −1, &nbsp; 0, &nbsp; 1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={135} cy={485} r={6} fill={GREEN_DARK} />
        <Circle cx={290} cy={330} r={6} fill={GREEN_DARK} />
        <Circle cx={445} cy={175} r={6} fill={GREEN_DARK} />
      </Fade>
      {([
        [135, 485],
        [290, 330],
        [445, 175],
      ] as [number, number][]).map(([cx, cy], i) => (
        <Draw
          key={`cr${cx}`}
          on={beat >= 2}
          delay={dl(2, 2.6 + i * 0.35)}
          d={ringD(cx, cy, 19, 16)}
          stroke={GREEN_DARK}
          sw={1.9}
          dur={0.6}
        />
      ))}
      {/* the swap marker straddling the origin */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(252, 300, 328, 300)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.7)}
        d={arrowD(328, 362, 252, 362)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={336} y={350} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("SWAP here", "yahin SWAP")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — test the halves ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={560} y={354} size={15} fill={RED} anchor="start" weight={800}>
          {t("TEST THE HALVES", "DONON HALVES TEST KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={570} y={384} size={17} fill={INK} anchor="start">
          0 &lt; x &lt; 1 :&nbsp; x &gt; x³ &nbsp;→&nbsp;{" "}
          {t("line on top", "line upar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={570} y={412} size={17} fill={INK} anchor="start">
          −1 &lt; x &lt; 0 :&nbsp; x³ &gt; x &nbsp;→&nbsp;{" "}
          {t("cubic on top", "cubic upar")}
        </T>
      </Fade>
      {/* sample ordinates at x = ½ and x = −½ */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Path
          d="M 367.5 330 L 367.5 252.5"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <Circle cx={367.5} cy={252.5} r={6} fill={RED} />
        <Circle cx={367.5} cy={310.6} r={6} fill={BLUE} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(450, 322, 376, 288)}
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={456} y={312} size={14} fill={RED} anchor="start" weight={800}>
          {t("line on top", "line upar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <Path
          d="M 212.5 330 L 212.5 407.5"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <Circle cx={212.5} cy={407.5} r={6} fill={RED} />
        <Circle cx={212.5} cy={349.4} r={6} fill={BLUE} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.2)}
        d={arrowD(176, 462, 206, 396)}
        stroke={BLUE}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={166} y={488} size={14} fill={BLUE} anchor="start" weight={800}>
          {t("cubic on top", "cubic upar")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — symmetry, strips, antiderivative ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={450} size={15} fill={RED} anchor="start" weight={800}>
          {t(
            "SYMMETRY — do one half, then double it",
            "SYMMETRY — ek half karo, phir double"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={570} y={484} size={21} fill={INK} anchor="start">
          A = 2 ∫₀¹ ( x − x³ ) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9.5)}>
        <T x={570} y={516} size={21} fill={INK} anchor="start">
          = 2 [ x²⁄2 − x⁴⁄4 ]₀¹
        </T>
      </Fade>
      {STRIP_XS.map((xi, i) => (
        <Fade key={`st${xi}`} on={beat >= 4} delay={dl(4, 3.8 + i * 0.16)}>
          <Rect
            x={X(xi) - 3}
            y={Y(xi)}
            width={6}
            height={Y(xi * xi * xi) - Y(xi)}
            fill={AMBER}
            opacity={0.6}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={78} y={184} size={15} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("the two halves have", "dono halves ki area")}
        </T>
        <T x={78} y={206} size={15} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("EQUAL area", "BARABAR hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.8)}
        d={arrowD(118, 218, 198, 392)}
        stroke={GREEN_DARK}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d={arrowD(232, 208, 356, 276)}
        stroke={GREEN_DARK}
        sw={1.8}
        dur={0.5}
      />

      {/* ═══════════ beat 5 — evaluate ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={570} y={546} size={21} fill={GREEN_DARK} anchor="start">
          = 2 ( ½ − ¼ ) &nbsp;=&nbsp; ½
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the answer and the rule ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip
          x={318}
          y={468}
          w={206}
          h={42}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={20}
          script={false}
        >
          {t("Area = ½ sq unit", "Area = ½ sq unit")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.2)}
        d={arrowD(340, 464, 246, 356)}
        stroke={GREEN_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Rect
          x={60}
          y={556}
          width={960}
          height={38}
          rx={14}
          fill={CREAM}
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={540} y={581} size={17} fill={RED} script>
          {t(
            "the instant two curves cross INSIDE your interval — split. Never integrate straight through a crossing.",
            "jaise hi do curves tumhare interval ke ANDAR cross karein — split karo. Crossing ke aar-paar seedha integrate kabhi mat karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

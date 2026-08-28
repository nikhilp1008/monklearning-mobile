/**
 * M12Ch08 · Section 24 — "A wedge inside a circle, checked by geometry"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 22–24 (see M12Ch08Sec22 header):
 *   axes = four arrowD strokes out of one origin, INK · PRIMARY curve (the
 *   non-linear boundary, here the circle) = AMBER_DARK · straight boundaries
 *   (here the two arms of the V) = BLUE · the region = GREEN fill at 0.16 ·
 *   limits = ticks + dashed droppers + RED point dots · integration strips =
 *   GREEN_DARK hairlines standing inside the region.
 *
 * Layout: the figure owns x 96–512, the algebra column x 520–1044, and the
 * two closing captions sit centred at x 300 under the figure, at y 570 / 592
 * (both baselines chosen so the Kalam glyph band stays inside y ≤ 596 and the
 * longer Hinglish string still starts right of x = 96).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "y ≥ |x| and x² + y² ≤ 2"              title + underline + the two
 *                                            conditions chip + bare axes
 *  1  "decode both: a wedge, and a disc of    the circle of radius √2 with its
 *      radius √2; the slice above the V"      radius arrow, the two V arms,
 *                                            the GREEN slice shaded, 3 decode
 *                                            lines
 *  2  "x² + x² = 2 → x = ±1; symmetric, so    ticks + dashed droppers at ±1,
 *      do 0 to 1 and double"                  RED intersection dots, the RIGHT
 *                                            half over-shaded, the dashed
 *                                            mirror on the y-axis, "× 2"
 *  3  "A = 2∫₀¹ (√(2 − x²) − x) dx"           the thin strips sweep 0 → 1
 *                                            (base y = x, top the circle),
 *                                            both ends labelled + the setup
 *  4  "catalogue antiderivative, a² = 2"      the two catalogue values
 *  5  "2(½ + π/4 − ½) = π/2"                  the halves cancel, the answer
 *  6  "<excited> the wedge subtends 90°, so   the 90° arc at the centre + the
 *      it is a quarter of the disc"           two dashed extensions cutting the
 *                                            disc into 4 equal wedges + the
 *                                            quarter-disc arithmetic
 *  7  "integration and geometry agree"        rings on both π/2 answers, arrows
 *                                            into the "both give π/2" chip
 *
 * Every number on the board is spoken in the segment that reveals it.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- plot frame ---- */
const OX = 290;
const OY = 400;
const S = 96;
const px = (x: number) => OX + x * S;
const py = (y: number) => OY - y * S;

const RT2 = Math.SQRT2;          // the radius, in plot units
const R = RT2 * S;               // the radius, in pixels (≈ 135.8)
const f = (n: number) => n.toFixed(1);

/** the full circle x² + y² = 2 */
const circleD =
  `M ${f(px(-RT2))} ${f(py(0))} A ${f(R)} ${f(R)} 0 1 1 ${f(px(RT2))} ${f(py(0))}` +
  ` A ${f(R)} ${f(R)} 0 1 1 ${f(px(-RT2))} ${f(py(0))}`;

/** the whole slice: arc from (−1,1) over the top to (1,1), then down the V */
const regionD =
  `M ${f(px(-1))} ${f(py(1))} A ${f(R)} ${f(R)} 0 0 1 ${f(px(1))} ${f(py(1))}` +
  ` L ${f(px(0))} ${f(py(0))} Z`;

/** its right half — the piece we actually integrate, then double */
const rightHalfD =
  `M ${f(px(0))} ${f(py(0))} L ${f(px(0))} ${f(py(RT2))}` +
  ` A ${f(R)} ${f(R)} 0 0 1 ${f(px(1))} ${f(py(1))} Z`;

/** a strip at x: base on y = x, top on the circle y = √(2 − x²) */
const stripD = (x: number) =>
  `M ${f(px(x))} ${f(py(x))} V ${f(py(Math.sqrt(2 - x * x)))}`;

const STRIP_XS = [0.12, 0.26, 0.4, 0.54, 0.68, 0.82, 0.94];

/** the arms of the V, drawn a little past the circle */
const ARM = 1.28;

export default function M12Ch08Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the two conditions, and the bare stage ═══════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("A wedge inside a circle, checked by geometry",
             "Circle ke andar ek wedge — geometry se check")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 262 66 C 420 62, 660 70, 818 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={90} size={13} fill={MUTED} script>
          {t("a modulus wedge and a circle — with a beautiful geometry check at the end",
             "ek modulus wedge aur ek circle — ant me ek khoobsurat geometry check")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <Chip x={96} y={104} w={372} h={52} fill={CREAM} stroke={AMBER_DARK}
          textFill={INK} size={20} script={false}>
          y ≥ | x |    and    x² + y² ≤ 2
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.8)}>
        <T x={282} y={182} size={14} fill={GREEN_DARK} script>
          {t("we want the AREA of this region", "hamein is region ki AREA chahiye")}
        </T>
      </Fade>

      {/* bare axes */}
      <Draw on={beat >= 0} delay={dl(0, 4.6)} d={arrowD(OX, OY, 460, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.9)} d={arrowD(OX, OY, 120, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 5.2)} d={arrowD(OX, OY, OX, 248)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 5.5)} d={arrowD(OX, OY, OX, 552)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 6.0)}>
        <T x={470} y={405} size={15} fill={INK} weight={800} anchor="start">x</T>
        <T x={OX} y={238} size={15} fill={INK} weight={800}>y</T>
        <T x={278} y={418} size={12.5} fill={MUTED} weight={700} anchor="end">O</T>
      </Fade>

      {/* ═══════════ beat 1 — decode both conditions ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={circleD} stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)}
        d={`M ${f(px(0))} ${f(py(0))} L ${f(px(ARM))} ${f(py(ARM))}`} stroke={BLUE} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)}
        d={`M ${f(px(0))} ${f(py(0))} L ${f(px(-ARM))} ${f(py(ARM))}`} stroke={BLUE} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={px(ARM) + 9} y={py(ARM) - 2} size={13.5} fill={BLUE} weight={800} anchor="start">y = x</T>
        <T x={px(-ARM) - 9} y={py(ARM) - 2} size={13.5} fill={BLUE} weight={800} anchor="end">y = − x</T>
      </Fade>
      {/* the radius, called out as √2 */}
      <Draw on={beat >= 1} delay={dl(1, 3.0)}
        d={arrowD(px(0), py(0), px(-RT2 * 0.866), py(RT2 * 0.5))} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={196} y={378} size={16} fill={AMBER_DARK} weight={800} anchor="start">√2</T>
      </Fade>
      {/* the region itself */}
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <Path d={regionD} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={520} y={118} size={14.5} fill={BLUE} weight={800} anchor="start">
          {t("y ≥ | x |   →   the WEDGE above y = x and y = − x",
             "y ≥ | x |   →   wo WEDGE jo y = x aur y = − x ke upar hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={520} y={146} size={14.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("x² + y² ≤ 2   →   INSIDE the circle of radius √2",
             "x² + y² ≤ 2   →   radius √2 wale circle ke ANDAR")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.4)}>
        <T x={520} y={176} size={14.5} fill={GREEN_DARK} script anchor="start">
          {t("the region is the slice of the disc sitting above the V",
             "region disc ka wo slice hai jo V ke upar baitha hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — intersections, and the symmetry ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Circle cx={px(1)} cy={py(1)} r={5.6} fill={RED} />
        <Circle cx={px(-1)} cy={py(1)} r={5.6} fill={RED} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={`M ${f(px(1))} 394 V 406`} stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 2} delay={dl(2, 0.75)} d={`M ${f(px(-1))} 394 V 406`} stroke={INK} sw={2} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={px(1)} y={426} size={14} fill={INK} weight={800}>1</T>
        <T x={px(-1)} y={426} size={14} fill={INK} weight={800}>− 1</T>
        <Path d={`M ${f(px(1))} ${f(py(1))} V ${OY}`} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" fill="none" />
        <Path d={`M ${f(px(-1))} ${f(py(1))} V ${OY}`} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={520} y={218} size={14} fill={RED} weight={800} anchor="start">
          {t("① INTERSECTIONS — where the V meets the circle",
             "① INTERSECTIONS — V circle se kahan milta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={530} y={250} size={18} fill={INK} anchor="start">on y = | x | :   x² + x² = 2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.0)}>
        <T x={530} y={280} size={18} fill={GREEN_DARK} anchor="start">x² = 1   ⇒   x = ± 1</T>
      </Fade>
      {/* the right half is the piece we integrate */}
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <Path d={rightHalfD} fill={GREEN} opacity={0.2} />
        <Path d={`M ${f(px(0))} ${f(py(RT2))} V ${OY}`} stroke={RED} strokeWidth={2.2} strokeDasharray="7 6" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={234} y={316} size={21} fill={GREEN_DARK} weight={900} anchor="start">× 2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.8)}>
        <T x={520} y={310} size={13.5} fill={MUTED} script anchor="start">
          {t("symmetric about the y-axis → take the right half, 0 to 1, and double",
             "y-axis ke baare me symmetric → right half lo, 0 se 1, phir double")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the strips, and the setup ═══════════ */}
      {STRIP_XS.map((x, i) => (
        <Draw key={`st${i}`} on={beat >= 3} delay={dl(3, 0.2 + i * 0.16)}
          d={stripD(x)} stroke={GREEN_DARK} sw={4} dur={0.3} />
      ))}
      {/* leader labels for the top and the base of every strip */}
      <Draw on={beat >= 3} delay={dl(3, 1.5)}
        d={arrowD(440, 258, px(0.68), py(Math.sqrt(2 - 0.68 * 0.68)) - 4)}
        stroke={AMBER_DARK} sw={1.7} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={512} y={246} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">
          {t("top: the circle", "top: circle")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.1)}
        d={arrowD(436, 298, px(0.82), py(0.82) + 4)}
        stroke={BLUE} sw={1.7} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={512} y={288} size={12.5} fill={BLUE} weight={800} anchor="end">
          {t("base: y = x", "base: y = x")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={520} y={350} size={14} fill={RED} weight={800} anchor="start">
          {t("② THE INTEGRAL", "② INTEGRAL")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={520} y={388} size={20} fill={INK} anchor="start">A = 2 ∫₀¹ ( √(2 − x²) − x ) dx</T>
      </Fade>

      {/* ═══════════ beat 4 — the catalogue antiderivative ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={520} y={420} size={16} fill={INK_LIGHT} anchor="start">
          ∫₀¹ √(2 − x²) dx = ½ + π/4      ( a² = 2 )
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={520} y={448} size={16} fill={INK_LIGHT} anchor="start">∫₀¹ x dx = ½</T>
      </Fade>

      {/* ═══════════ beat 5 — the halves cancel ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={520} y={476} size={17} fill={INK} anchor="start">A = 2 ( ½ + π/4 − ½ )</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={520} y={508} size={20} fill={GREEN_DARK} anchor="start">= 2 · π/4 = π/2</T>
      </Fade>

      {/* ═══════════ beat 6 — the geometry payoff: a quarter of the disc ═══ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)}
        d={`M ${f(px(0))} ${f(py(0))} L ${f(px(-ARM))} ${f(py(-ARM))}`} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)}
        d={`M ${f(px(0))} ${f(py(0))} L ${f(px(ARM))} ${f(py(-ARM))}`} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.0)}
        d="M 325.4 364.6 A 50 50 0 0 0 254.6 364.6" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={250} y={341} size={15} fill={RED} weight={900} anchor="start">90°</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={300} y={570} size={13} fill={GREEN_DARK} script>
          {t("the V cuts the disc into 4 equal wedges — ours is exactly one",
             "V disc ko 4 barabar wedges me kaatta hai — hamara theek ek hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.0)} d="M 520 532 H 1036" stroke={MUTED} sw={1.3} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={520} y={550} size={13} fill={RED} weight={800} anchor="start">
          {t("GEOMETRY CHECK — 90° at the centre", "GEOMETRY CHECK — centre par 90°")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.0)}>
        <T x={520} y={580} size={18} fill={GREEN_DARK} anchor="start">¼ · π · (√2)² = ¼ · 2π = π/2</T>
      </Fade>

      {/* ═══════════ beat 7 — the two answers agree ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={ringD(617, 503, 24, 12)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={ringD(685, 576, 26, 11)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={arrowD(650, 506, 872, 556)} stroke={RED} sw={1.9} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={arrowD(722, 578, 872, 578)} stroke={RED} sw={1.9} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <Chip x={880} y={548} w={160} h={44} fill={GREEN} stroke={GREEN_DARK}
          textFill={CREAM} size={15} script={false}>
          both give π/2
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={300} y={592} size={13} fill={INK} script>
          {t("integration and elementary geometry give exactly the same answer",
             "integration aur elementary geometry bilkul same answer dete hain")}
        </T>
      </Fade>
    </Scene>
  );
}

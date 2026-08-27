/**
 * M11 Ch06 · Section 35 — "Hard problems in costume: geometry as selection"
 * FIRST section of Subtopic 5 "Counting Applications & Advanced Tools" (the
 * new, final content subtopic — follows the fully-verified Subtopic 4,
 * Sec27-34). Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow: Anchor →
 * Represent → Explain the move → Land the result → Guardrail).
 *
 * Direct visual vocabulary borrowed from M11Ch06Sec19.tsx (the combination
 * intro's 4-point complete-graph diagram: points + edges = pairs), extended
 * here into a full geometric application: n scattered points give lines
 * (2-point choices) and triangles (3-point choices) — then a collinear
 * subset breaks the clean formula and needs a correction.
 *
 * nCr here is SYMBOLIC (n, m variables) → plain text "nC2"/"mC2"/"nC3"/"mC3",
 * per SCENE_AUTHORING_MATHS.md's \binom{n}{r} rule (no super/subscript
 * attempt for letter variables).
 *
 * Beats (board_reveal_at_english [0,13.74,24.92,35.67,42.92,57.6,71.51],
 * hinglish [0,16.04,29.27,39.77,47.53,60.33,74.41]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 1..2, erased at beat>=3 — a temporary illustration
 *   + the clean baseline formulas, both fully vacated once the collinear
 *   correction (which needs the whole board) begins]
 *  1 setup: "through n points, no 3 collinear:" + a 5-point generic-position
 *    mini-diagram — one highlighted edge (amber) labelled "2 points → a
 *    line", one highlighted triangle (green) labelled "3 points → a
 *    triangle"
 *  2 (HIGH) formula lands, boxed: "lines = nC2" / "triangles = nC3" +
 *    caveat "(only if no 3 of the n points are collinear)"
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat>=3, final group, never erased — the whole board is
 *   now free for the collinear correction + its generalization + the two
 *   corrected formulas + the closing mnemonic]
 *  3 diagram: 4 solid points on one drawn straight line (genuinely
 *    collinear) + 3 hollow scattered points off it; captions "4 collinear:
 *    C(4,2) = 6 pairs → 1 line", a crossed-out flat-triangle icon +
 *    "C(4,3) = 4 flat triangles", and "Collinear points need a correction"
 *  4 generalize: "If m points are collinear: pairs → ONE line, triples →
 *    NO triangle" (segment-coloured: green ONE, red NO)
 *  5 formula lands: "lines = nC2 − mC2" + a solid GREEN "+1" badge (ringed)
 *    vs "triangles = nC3 − mC3" + a crossed-out ghost "+1" badge — the two
 *    corrections made visually asymmetric on purpose (lines DO get a term
 *    added back, triangles do NOT)
 *  6 (red-margin guardrail, final) mnemonic: a tiny vertex-icon + red-ringed
 *    chip "Counting shapes = counting the vertices that define them."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *
 *  always | title (script 24, red)                          | T mid  | x~230..850 y39..82
 *  b0 | title underline flourish (amber)                     | Draw   | x350..730 y94
 *  [group A, aOn = beat 1..2, erased at beat>=3]
 *  b1 | lead "through n points, no 3 collinear:" (17,ink)      | T mid | x~336..744 y95..114
 *  b1 | 5-point mini diagram (r5, ink)                          | circle| x255..475 y143..245
 *  b1 | highlighted edge P1-P2 (amber)                            | Draw | x260..420 y148..160
 *  b1 | highlighted triangle P3-P4-P5 outline+fill (green)          | Draw/Fade | x300..470 y194..240
 *  b1 | label "2 points → a line" (15,amber-dk)                      | T st | x560..~725 y150..165
 *  b1 | label "3 points → a triangle" (15,green)                       | T st | x560..~740 y213..230
 *  b2 | box (400×110, amber)                                            | Draw | x340..740 y336..446
 *  b2 | "lines = nC2" (28,green,w800)                                     | T mid| x~440..640 y339..371
 *  b2 | "triangles = nC3" (28,green,w800)                                  | T mid| x~410..670 y388..421
 *  b2 | caveat "(only if no 3 ... collinear)" (14,muted)                     | T mid| x~386..694 y468..478
 *  [group A erased at beat>=3]
 *  [group B, bOn = beat>=3, final group]
 *  b3 | 4 collinear points (r5, solid ink) + 1 drawn line thru them          | circle/Draw | x140..540 y161..255
 *  b3 | 3 scattered points (r5, hollow cream/ink)                             | circle | x215..465 y105..285
 *  b3 | label "+ a few scattered points" (13,muted)                            | T st | x600..~756 y104..119
 *  b3 | caption "4 collinear: C(4,2)=6 pairs → 1 line" (16, ink/green)           | T st | x600..~924 y144..159
 *  b3 | flat-triangle icon (crossed, red) + "C(4,3)=4 flat triangles" (16,ink)     | Draw/Fade/T | x581..858 y194..222
 *  b3 | caption "Collinear points need a correction" (15,red,w700)                  | T st | x600..~862 y243..259
 *  b4 | generalize line, 3 colour segments (16) centered                             | T st | x~203..878 y313..330
 *  b5 | "lines = nC2 − mC2" (28,ink,w800) + GREEN "+1" badge r22 (ringed amber)         | T/Fade/Draw| x210..636 y356..416
 *  b5 | trailing "→ add the 1 real line" (14,green)                                      | T st | x660..~821 y381..390
 *  b5 | "triangles = nC3 − mC3" (28,ink,w800) + crossed ghost "+1" badge r22               | T/Fade/Draw| x210..622 y433..477
 *  b5 | trailing "→ nothing to add back" (14,red)                                            | T st | x660..~800 y458..467
 *  b6 | vertex-icon (3 dots + triangle outline, ink)                                           | circle/Draw| x147..193 y533..565
 *  b6 | red-ringed Chip "Counting shapes = counting the vertices..." (17, w580 h52)                | Chip | x250..830 y520..572
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** Triangle outline/fill path through three points — local device (no
 * dedicated triangle primitive exists in math-kit, same reasoning as
 * Sec34's local starD: a one-off drawn glyph doesn't need a new primitive). */
function triD(
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
): string {
  return `M ${a.x} ${a.y} L ${b.x} ${b.y} L ${c.x} ${c.y} Z`;
}

const mult = (weight: number) => (weight >= 800 ? 0.58 : 0.5);

export default function M11Ch06Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 1-2: the generic "no 3 collinear" setup + baseline
  // nC2/nC3 formulas) is a temporary illustration — it is fully erased once
  // the collinear-correction diagram (beat 3) needs the whole board. Group B
  // (beats 3-6) is the final group, never erased. Each element's own `on` is
  // bounded to its beat window (rather than a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees the erasure too; seeking
  // back into an earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 3;
  const bOn = beat >= 3;

  // ---- beat 1: 5-point generic-position mini-diagram ----
  const gP1 = { x: 260, y: 160 };
  const gP2 = { x: 420, y: 148 };
  const gP3 = { x: 350, y: 215 };
  const gP4 = { x: 470, y: 230 };
  const gP5 = { x: 300, y: 240 };

  // ---- beat 3: 4 collinear points (drawn line) + 3 scattered points ----
  const cP1 = { x: 160, y: 250 };
  const cP2 = { x: 280, y: 222 };
  const cP3 = { x: 400, y: 194 };
  const cP4 = { x: 520, y: 166 };
  const collinearLine = lineD(140, 254.67, 540, 161.33);
  const sP1 = { x: 220, y: 110 };
  const sP2 = { x: 460, y: 110 };
  const sP3 = { x: 340, y: 280 };

  // ---- beat 3 caption A: "4 collinear: C(4,2) = 6 pairs → 1 line" ----
  const capASeg1 = "4 collinear: C(4,2) = 6 pairs → ";
  const capASeg2 = t("1 line", "sirf 1 line");
  const capASize = 16;
  const capASeg1W = mult(600) * capASize * capASeg1.length;
  const capASeg2X = 600 + capASeg1W + 4;

  // ---- beat 3: flat-triangle icon (nearly-zero-height sliver, crossed) ----
  const fA = { x: 583, y: 209 };
  const fB = { x: 633, y: 209 };
  const fC = { x: 608, y: 203 };

  // ---- beat 4: generalize line, 3 colour segments, centered ----
  const genSegs = [
    { text: t("If m points are collinear: ", "Agar m points collinear hain: "), fill: INK, weight: 600 },
    { text: t("pairs → ONE line, ", "pairs → EK line, "), fill: GREEN, weight: 800 },
    { text: t("triples → NO triangle", "triples → KOI triangle nahi"), fill: RED, weight: 800 },
  ];
  const genSize = 16;
  const genWidths = genSegs.map((s) => mult(s.weight) * genSize * s.text.length);
  const genTotalW = genWidths.reduce((a, b) => a + b, 0);
  let genX0 = 540 - genTotalW / 2;
  const genXs = genSegs.map((_, i) => {
    const x = genX0;
    genX0 += genWidths[i];
    return x;
  });

  // ---- beat 5: two corrected formulas, badges carry the asymmetry ----
  const row1Y = 385;
  const row1CenterY = row1Y - 0.24 * 28;
  const row2Y = 462;
  const row2CenterY = row2Y - 0.24 * 28;
  const badgeCx = 600;
  const badgeR = 22;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "See through the costume — it's selection",
            "Costume ke peeche — bas selection hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-2 (temporary) ===================== */}

      {/* beat 1 — setup: 5 generic points, one edge = a line, one triangle = a triangle */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={17} fill={INK} weight={600}>
          {t("Through n points (no 3 collinear):", "n points ke through (koi bhi 3 collinear nahi):")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={gP1.x} cy={gP1.y} r={5} fill={INK} />
        <Circle cx={gP2.x} cy={gP2.y} r={5} fill={INK} />
        <Circle cx={gP3.x} cy={gP3.y} r={5} fill={INK} />
        <Circle cx={gP4.x} cy={gP4.y} r={5} fill={INK} />
        <Circle cx={gP5.x} cy={gP5.y} r={5} fill={INK} />
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 1.4)}
        d={lineD(gP1.x, gP1.y, gP2.x, gP2.y)}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.2)}>
        <T x={560} y={155} size={15} fill={AMBER_DARK} weight={700} anchor="start">
          {t("2 points → a line", "2 points → ek line")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.8)}
        d={triD(gP3, gP4, gP5)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.6)}>
        <Path d={triD(gP3, gP4, gP5)} fill={GREEN} opacity={0.18} />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.0)}>
        <T x={560} y={225} size={15} fill={GREEN} weight={700} anchor="start">
          {t("3 points → a triangle", "3 points → ek triangle")}
        </T>
      </Fade>

      {/* beat 2 (HIGH) — the clean baseline formulas, boxed */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={360} size={28} fill={GREEN} weight={800}>
          lines = nC2
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={410} size={28} fill={GREEN} weight={800}>
          triangles = nC3
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.4)}
        d={roundRectD(340, 336, 400, 110, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.3)}>
        <T x={540} y={478} size={14} fill={MUTED}>
          {t(
            "(only if no 3 of the n points are collinear)",
            "(sirf tab jab koi 3 points collinear na ho)"
          )}
        </T>
      </Fade>

      {/* ===================== Group B — beats 3-6 (final) ===================== */}

      {/* beat 3 — the collinear correction: 4 solid points on one drawn
          line, 3 hollow scattered points off it */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <Circle cx={cP1.x} cy={cP1.y} r={5} fill={INK} />
        <Circle cx={cP2.x} cy={cP2.y} r={5} fill={INK} />
        <Circle cx={cP3.x} cy={cP3.y} r={5} fill={INK} />
        <Circle cx={cP4.x} cy={cP4.y} r={5} fill={INK} />
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 0.6)}
        d={collinearLine}
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.5)}>
        <Circle cx={sP1.x} cy={sP1.y} r={5} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <Circle cx={sP2.x} cy={sP2.y} r={5} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <Circle cx={sP3.x} cy={sP3.y} r={5} fill={CREAM} stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={600} y={115} size={13} fill={MUTED} anchor="start">
          {t("+ a few scattered points", "+ kuch scattered points")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.5)}>
        <T x={600} y={155} size={capASize} fill={INK} weight={600} anchor="start">
          {capASeg1}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.8)}>
        <T x={capASeg2X} y={155} size={capASize} fill={GREEN} weight={800} anchor="start">
          {capASeg2}
        </T>
      </Fade>
      <Draw on={bOn && beat >= 3} delay={dl(3, 3.2)} d={triD(fA, fB, fC)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.6)}>
        <Path d={triD(fA, fB, fC)} fill={RED} opacity={0.2} />
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 4.0)}
        d={crossD(581, 201, 54, 10)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 4.5)}>
        <T x={650} y={210} size={16} fill={INK} weight={600} anchor="start">
          C(4,3) = 4 flat triangles
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 5.0)}>
        <T x={600} y={255} size={15} fill={RED} weight={700} anchor="start">
          {t("Collinear points need a correction", "Collinear points ko correction chahiye")}
        </T>
      </Fade>

      {/* beat 4 — generalize to m collinear points */}
      {genSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 0.2 + i * 0.9)}>
          <T x={genXs[i]} y={325} size={genSize} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* beat 5 — the two corrected formulas: badges carry the asymmetry */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={210} y={row1Y} size={28} fill={INK} weight={800} anchor="start">
          lines = nC2 − mC2
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.8)}>
        <Circle cx={badgeCx} cy={row1CenterY} r={badgeR} fill={GREEN} />
        <T x={badgeCx} y={row1CenterY + 0.34 * 18} size={18} fill="#fff" weight={800}>
          +1
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.5)}
        d={ringD(badgeCx, row1CenterY, 32, 28)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.3)}>
        <T x={660} y={row1Y} size={14} fill={GREEN} weight={600} anchor="start">
          {t("→ add the 1 real line", "→ 1 real line add karo")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 2.9)}>
        <T x={210} y={row2Y} size={28} fill={INK} weight={800} anchor="start">
          triangles = nC3 − mC3
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.6)}>
        <Circle
          cx={badgeCx}
          cy={row2CenterY}
          r={badgeR}
          fill={CREAM}
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="5 4"
        />
        <T x={badgeCx} y={row2CenterY + 0.34 * 18} size={18} fill={MUTED} weight={800}>
          +1
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 4.2)}
        d={crossD(badgeCx - badgeR, row2CenterY - badgeR, badgeR * 2, badgeR * 2)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.9)}>
        <T x={660} y={row2Y} size={14} fill={RED} weight={600} anchor="start">
          {t("→ nothing to add back", "→ kuch bhi add nahi")}
        </T>
      </Fade>

      {/* beat 6 (red-margin guardrail, final) — the closing mnemonic */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <Circle cx={150} cy={536} r={3} fill={INK} />
        <Circle cx={190} cy={536} r={3} fill={INK} />
        <Circle cx={170} cy={562} r={3} fill={INK} />
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0.4)}
        d={triD({ x: 150, y: 536 }, { x: 190, y: 536 }, { x: 170, y: 562 })}
        stroke={INK}
        sw={1.6}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.0)}>
        <Chip x={250} y={520} w={580} h={52} fill={CREAM} stroke={RED} textFill={RED} size={17} script={false}>
          {t(
            "Counting shapes = counting the vertices that define them.",
            "Shape counting = uske vertices counting hai."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

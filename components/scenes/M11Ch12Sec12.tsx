/**
 * M11 Ch12 · Section 12 — "Routing pieces through junctions, and squaring the k"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: route both
 * pieces through junctions") -> always-on title, distinct from the DB title ("Routing pieces
 * through junctions, and squaring the k"). THREE compact examples stacked, all reusing the
 * standard-limit junction table Sec11 built (sin x/x→1, (1−cos kx)/x²→k²/2, (e^x−1)/x→1,
 * generalised for k). No <Frac> needed anywhere — every fraction here is a Sec11-style
 * flattened inline "a/b" (numerator/denominator are each short single terms or the compound
 * numerators Sec11 itself already flattened, e.g. "(1 − cos x)/x²"), matching the exemplar
 * this section directly reuses rather than reaching for the newer stacked-fraction primitive.
 *
 * board_reveal_at_english  = [0.0, 7.17, 24.15, 35.5, 46.76, 61.7, 74.75, 84.91] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 9.39, 24.58, 34.39, 45.06, 59.82, 71.51, 82.01].
 *
 * THREE zones stacked, divided by thin horizontal rules (Sec5's two-example pattern extended
 * to three): Example 1 y~98-215 (route sin5x/sin3x -> 5/3), Example 2 y~241-405 (speed-trap
 * square-the-k on (1-cos4x)/x² -> 8), Example 3 y~435-578 (mixed exp/sine junction -> 2/3).
 * Every beat's Draw requirement is met either by a divider rule, an underline under a fresh
 * heading, the crossD over the speed-trap's wrong answer, or a small checkD stamp beside a
 * landed chip — no element is squeezed into a gap smaller than its own clearance needs.
 *
 * Beats:
 *  0(title, always-on) | "Worked example: route both pieces through junctions"
 *  1 | seq2 (normal) — state lim(x→0) sin5x/sin3x, then reshape into three canonical factors
 *  2 | seq3 (HIGH) — land it: 1 · 1 · 5/3 = boxed 5/3
 *  3 | seq4 (normal) — Example 2 heading "Speed trap: square the k" + state lim(x→0) (1−cos4x)/x²
 *  4 | seq5 (red-margin, HIGH) — stage crossed-out "1/2" beside the correct k²/2 rule + note k=4
 *  5 | seq6 (HIGH) — land it: 4²/2 = 16/2 = boxed 8
 *  6 | seq7 (normal) — Example 3 heading "Mixing an exponential and a trig junction" + state the limit
 *  7 | seq8 (HIGH) — route both factors (→1 annotations under each), land boxed 2/3
 *
 * Layout plan (x-range × y-range per element; Anek sans unless noted):
 *  b1 | Limit x→0 (18,ink,start)              | Limit | x460..487  y98..125.95
 *  b1 | "sin 5x/sin 3x" (18,ink,start)         | T st  | x505..622  y97.96..131
 *  b1 | reshape formula (15,ink,mid)           | T mid | x401..679  y143.3..159.65
 *  b1 | underline                              | Draw  | x401..679 y170
 *  b2 | "1 · 1 · 5/3 =" (19,ink,start)         | T st  | x443..566.5 y183.18..203.89
 *  b2 | Chip "5/3" (20,green)                  | Chip  | x580..636 y181..215
 *  b2 | checkD beside chip                     | Draw  | x642..658 y182..206
 *  --divider1--                                | Draw  | x100..980 y228
 *  b3 | heading "Speed trap..." (17,red,mid)   | T mid | x~434..646(en, wider hi) y241.74..260.27
 *  b3 | underline                              | Draw  | x400..680 y271
 *  b3 | Limit x→0 (18,ink,start)                | Limit | x454..481  y286..313.95
 *  b3 | "(1 − cos 4x)/x²" (18,ink,start)         | T st  | x499..626.5 y286..305.27
 *  b4 | "1/2" (16,red,w700,start)                | T st  | x416..440 y329.52..346.96
 *  b4 | crossD over "1/2"                        | Draw  | x412..464 y326.52..352.4 (crossD box 416,329.52,24,17.44)
 *  b4 | "→" (16,ink,mid)                          | T mid | x466..474 y329.52..346.96
 *  b4 | rule "(1 − cos kx)/x² → k²/2" (16,green_dark,w700,start) | T st | x491..667 y329.52..346.96
 *  b4 | "(k = 4, not x)" (12,red,start)           | T st  | x691..775 y332.28..345.72
 *  b5 | "4²/2 = 16/2 =" (19,ink,start)            | T st  | x451..574.5 y373.18..393.89
 *  b5 | Chip "8" (20,green)                       | Chip  | x588..628 y371..405
 *  b5 | checkD beside chip                         | Draw  | x644..660 y372..396
 *  --divider2--                                    | Draw  | x100..980 y421
 *  b6 | heading "Mixing an exponential..." (17,amber_dark,mid) | T mid | x~374..708(en) y435.74..454.27
 *  b6 | underline                                    | Draw  | x360..720 y465
 *  b6 | Limit x→0 (18,ink,start)                      | Limit | x445..472  y480..507.95
 *  b6 | "(e^2x − 1)/sin 3x" (18,ink,start)             | T st  | x490..634.5 y480..499.27
 *  b7 | F1 "(e^2x − 1)/2x" (16,ink,start)              | T st  | x349..453  y532.52..549.96
 *  b7 | "·" (16,ink,mid)                               | T mid | x469..477  y532.52..549.96
 *  b7 | F2 "3x/sin 3x" (16,ink,start)                  | T st  | x493..565  y532.52..549.96
 *  b7 | "·" (16,ink,mid)                               | T mid | x581..589  y532.52..549.96
 *  b7 | F3 "2x/3x" (16,ink,start)                      | T st  | x605..645  y532.52..549.96
 *  b7 | "=" (16,ink,mid)                               | T mid | x661..669  y532.52..549.96
 *  b7 | Chip "2/3" (18,green)                          | Chip  | x683..731  y529..561
 *  b7 | checkD beside chip                              | Draw  | x739..755 y537..561
 *  b7 | "→ 1" under F1 (11,amber_dark,mid)              | T mid | x393..409  y566.42..578.41
 *  b7 | "→ 1" under F2 (11,amber_dark,mid)              | T mid | x521..537  y566.42..578.41
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { Limit, checkD } from "./math-kit";

export default function M11Ch12Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t(
            "Worked example: route both pieces through junctions",
            "Worked example: dono pieces junctions se route kijiye"
          )}
        </T>
      </Fade>

      {/* ===================== EXAMPLE 1 ===================== */}

      {/* beat 1 — state the limit, reshape into three canonical factors */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={460} y={112} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={505} y={112} size={18} fill={INK} anchor="start">
          sin 5x/sin 3x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={155} size={15} fill={INK} anchor="middle">
          = (sin 5x/5x) · (3x/sin 3x) · (5x/3x)
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M401 170 L679 170" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 1.8)} />

      {/* beat 2 — land it (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={443} y={198} size={19} fill={INK} anchor="start">
          1 · 1 · 5/3 =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={580} y={181} w={56} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          5/3
        </Chip>
      </Fade>
      <Draw on={beat >= 2} d={checkD(650, 198, 16)} stroke={GREEN} sw={2.2} delay={dl(2, 1.1)} />

      {/* divider before Example 2 */}
      <Draw on={beat >= 3} d="M100 228 L980 228" stroke={AMBER_DARK} sw={1} delay={dl(3, 0)} />

      {/* ===================== EXAMPLE 2 (speed trap) ===================== */}

      {/* beat 3 — heading + state the new limit */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={255} size={17} fill={RED} anchor="middle" weight={800}>
          {t("Speed trap: square the k", "Speed trap: k ko square kijiye")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M400 271 L680 271" stroke={RED} sw={1.6} delay={dl(3, 1)} />
      <Limit on={beat >= 3} delay={dl(3, 1.5)} x={454} y={300} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={499} y={300} size={18} fill={INK} anchor="start">
          (1 − cos 4x)/x²
        </T>
      </Fade>

      {/* beat 4 — the trap staged: wrong answer crossed out beside the correct rule (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={416} y={342} size={16} fill={RED} anchor="start" weight={700}>
          1/2
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(416, 329.52, 24, 17.44)} stroke={RED} sw={2.2} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={470} y={342} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={491} y={342} size={16} fill={GREEN_DARK} anchor="start" weight={700}>
          (1 − cos kx)/x² → k²/2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={691} y={342} size={12} fill={RED} anchor="start">
          {t("(k = 4, not x)", "(k = 4, x nahin)")}
        </T>
      </Fade>

      {/* beat 5 — land it (HIGH) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={451} y={388} size={19} fill={INK} anchor="start">
          4²/2 = 16/2 =
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={588} y={371} w={40} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          8
        </Chip>
      </Fade>
      <Draw on={beat >= 5} d={checkD(652, 388, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 1.1)} />

      {/* divider before Example 3 */}
      <Draw on={beat >= 6} d="M100 421 L980 421" stroke={AMBER_DARK} sw={1} delay={dl(6, 0)} />

      {/* ===================== EXAMPLE 3 ===================== */}

      {/* beat 6 — heading + state the limit */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={449} size={17} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("Mixing an exponential and a trig junction", "Exponential aur trig junction ka mix")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M360 465 L720 465" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 1)} />
      <Limit on={beat >= 6} delay={dl(6, 1.5)} x={445} y={494} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={490} y={494} size={18} fill={INK} anchor="start">
          (e^2x − 1)/sin 3x
        </T>
      </Fade>

      {/* beat 7 — route both factors, annotate →1, land it (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={349} y={545} size={16} fill={INK} anchor="start">
          (e^2x − 1)/2x
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={473} y={545} size={16} fill={INK} anchor="middle">
          ·
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={493} y={545} size={16} fill={INK} anchor="start">
          3x/sin 3x
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={585} y={545} size={16} fill={INK} anchor="middle">
          ·
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={605} y={545} size={16} fill={INK} anchor="start">
          2x/3x
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={401} y={575} size={11} fill={AMBER_DARK} anchor="middle">
          → 1
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={529} y={575} size={11} fill={AMBER_DARK} anchor="middle">
          → 1
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={665} y={545} size={16} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <Chip x={683} y={529} w={48} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          2/3
        </Chip>
      </Fade>
      <Draw on={beat >= 7} d={checkD(747, 545, 16)} stroke={GREEN} sw={2.2} delay={dl(7, 3)} />
    </Scene>
  );
}

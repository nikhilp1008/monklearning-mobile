/**
 * P12Ch04 · Section 33 — "Worked Examples Three and Four: Power in the Shunt, and Meter Loading"
 * Subtopic: Galvanometers and Their Conversion
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   Two columns of numbered prose plus a summary block and a footer chip,
 *   with FOUR drawn strokes on the entire board (title underline, two rules,
 *   badge circles) and everything gated on beats 0, 1, 6 and 13. Example 3's
 *   full solution appeared in one go at 19 s and the board then stood still
 *   for the 143 s covering beats 2–5; Example 4's whole solution appeared at
 *   162 s and stood still for the 152 s covering beats 7–12. The narration
 *   says "Look at the figure. The battery is on the left…, the voltmeter,
 *   drawn in red, is bridged across the second resistor" — and no circuit,
 *   no battery, no voltmeter was ever drawn.
 *
 * WHAT THE NARRATION TEACHES
 *   Example 3 (JEE Main): G = 80 Ω, I_g = 2.0 mA, range 5.0 A.
 *     S = I_g G/(I − I_g) = 0.16/4.998 = 0.0320 Ω.
 *     Shunt current I_s = 4.998 A; shunt voltage = coil voltage = I_g G = 0.16 V.
 *     P = I_s V_s = 4.998 × 0.16 = 0.80 W  >  the 0.50 W rating ⇒ it burns out.
 *     (S itself is never needed — I and V were both already known.)
 *   Example 4 (JEE Advanced): 60 V, two 10 kΩ in series, voltmeter R_V = 20 kΩ
 *     across the second resistor.
 *     true  V = 60/2 = 30 V
 *     10 ∥ 20 = (10 × 20)/30 = 6.667 kΩ
 *     read  V = 60 × 6.667/16.667 = 60 × 0.400 = 24 V
 *     error = (30 − 24)/30 = 20%, with a perfectly healthy meter.
 *
 * BEAT MAP (n_reveals = 14, gates 0..13)
 *   0  framing                title + underline + Example 3 heading
 *   1  the setup read out     data, the two asks, and the shunt circuit DRAWN
 *   2  compute the shunt      S = 0.16/4.998 = 0.0320 Ω
 *   3  identify I_s and V_s   the shared-voltage double arrow lands on the figure
 *   4  multiply               P = 4.998 × 0.16 = 0.80 W (+ "S was never needed")
 *   5  compare with rating    the 0.50 W / 0.80 W bar pair + the burn-out verdict
 *   6  Example 4 announced    divider + heading
 *   7  the setup read out     the data lines
 *   8  "look at the figure"   battery + two 10 kΩ + the RED voltmeter bridge DRAWN
 *   9  part (a)               V_true = 60/2 = 30 V
 *  10  part (b) step 1        10 ∥ 20 = 6.667 kΩ + a ring round the loaded element
 *  11  part (b) step 2        6.667/16.667 = 0.400 → V_read = 24 V
 *  12  part (c)               error = 6/30 = 20%, boxed
 *  13  the payoff             R_V ≫ R_circuit chip
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch04Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title + Example 3 heading ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Will the shunt survive? Will the meter tell the truth?",
             "Will the shunt survive? Will the meter tell the truth?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 220 60 C 430 56, 680 64, 860 59" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={44} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 3 · JEE MAIN — A CONVERSION, THEN A RATING",
             "EXAMPLE 3 · JEE MAIN — A CONVERSION, THEN A RATING")}
        </T>
      </Fade>

      {/* ================= LEFT — EXAMPLE 3 ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={122} size={13} fill={INK} weight={700} anchor="start">
          G = 80 Ω · I_g = 2.0 mA · range I = 5.0 A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={44} y={142} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">
          {t("find S — then test it against a 0.50 W component rating",
             "find S — then test it against a 0.50 W component rating")}
        </T>
      </Fade>

      {/* beat 1 — the shunt circuit, DRAWN */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(48, 210, 86, 210)} stroke={GREEN_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={46} y={198} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">I = 5.0 A</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 90 210 V 182 H 234" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d="M 270 182 H 420 V 210" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={252} cy={182} r={18} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={252} y={187} size={13} fill={INK} weight={800}>G</T>
        <T x={252} y={156} size={12.5} fill={INK_LIGHT} weight={700}>80 Ω</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d="M 90 210 V 238 H 200" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d="M 260 238 H 420 V 210" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Rect x={200} y={225} width={60} height={26} rx={4} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={230} y={243} size={13} fill={GREEN_DARK} weight={800}>S</T>
        <Circle cx={90} cy={210} r={4.5} fill={INK} />
        <Circle cx={420} cy={210} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(420, 210, 462, 210)} stroke={GREEN_DARK} sw={2.4} dur={0.35} />

      {/* beat 2 — the shunt value */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={288} size={13} fill={INK} weight={700} anchor="start">
          S = I_g G ⁄ (I − I_g) = (2.0 × 10⁻³ × 80) ⁄ (5.0 − 0.002)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={44} y={312} size={14.5} fill={AMBER_DARK} weight={900} anchor="start">
          = 0.16 ⁄ 4.998 = 0.0320 Ω
        </T>
      </Fade>

      {/* beat 3 — the two quantities the power needs, read off the figure */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)}
        d={`${arrowD(330, 214, 330, 186)} ${arrowD(330, 206, 330, 234)}`} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={322} y={214} size={12.5} fill={RED} weight={800} anchor="end">V_s</T>
        <T x={352} y={172} size={12.5} fill={INK_LIGHT} weight={800}>I_g = 2.0 mA</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={344} y={266} size={12.5} fill={GREEN_DARK} weight={800}>I_s = 4.998 A</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={44} y={340} size={12.5} fill={INK} weight={700} anchor="start">
          {t("through the shunt:  I_s = I − I_g = 4.998 A",
             "through the shunt:  I_s = I − I_g = 4.998 A")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={44} y={362} size={12.5} fill={INK} weight={700} anchor="start">
          {t("across it = across the coil (parallel):  V_s = I_g G = 0.16 V",
             "across it = across the coil (parallel):  V_s = I_g G = 0.16 V")}
        </T>
      </Fade>

      {/* beat 4 — the power */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={394} size={14} fill={INK} weight={900} anchor="start">
          P = I_s V_s = 4.998 × 0.16
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d="M 44 406 H 320" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={44} y={432} size={16} fill={RED} weight={900} anchor="start">P = 0.80 W</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={190} y={432} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("— S itself was never needed", "— S itself was never needed")}
        </T>
      </Fade>

      {/* beat 5 — rating vs reality, drawn as two bars */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={142} y={479} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">rated 0.50 W</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 154 474 H 304" stroke={GREEN} sw={10} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={142} y={505} size={12.5} fill={RED} weight={800} anchor="end">actual 0.80 W</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d="M 154 500 H 394" stroke={RED} sw={10} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={44} y={534} size={12.8} fill={RED} weight={800} anchor="start">
          {t("0.80 W ≫ 0.50 W ⇒ it overheats and burns out — not safe",
             "0.80 W ≫ 0.50 W ⇒ it overheats and burns out — not safe")}
        </T>
      </Fade>

      {/* ================= RIGHT — EXAMPLE 4 ================= */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 528 90 V 534" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={556} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 4 · JEE ADVANCED — THE METER CHANGES THE CIRCUIT",
             "EXAMPLE 4 · JEE ADVANCED — THE METER CHANGES THE CIRCUIT")}
        </T>
      </Fade>

      {/* beat 7 — the data */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={556} y={122} size={13} fill={INK} weight={700} anchor="start">
          {t("60 V, negligible internal resistance · two equal 10 kΩ in series",
             "60 V, negligible internal resistance · two equal 10 kΩ in series")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={556} y={142} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("voltmeter R_V = 20 kΩ bridged across the second resistor",
             "voltmeter R_V = 20 kΩ bridged across the second resistor")}
        </T>
      </Fade>

      {/* beat 8 — the circuit, DRAWN, meter in red */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 600 178 V 224 M 600 258 V 336" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <Rect x={586} y={230} width={28} height={3.4} fill={INK} />
        <Rect x={592} y={247} width={16} height={2.6} fill={INK} />
        <T x={560} y={246} size={12.5} fill={INK} weight={800} anchor="start">60 V</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.9)} d="M 600 178 H 694" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <Rect x={694} y={164} width={72} height={28} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={730} y={184} size={12.5} fill={INK} weight={800}>R₁</T>
        <T x={730} y={154} size={12.5} fill={INK_LIGHT} weight={700}>10 kΩ</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.5)} d="M 766 178 H 866" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 8} delay={dl(8, 1.8)} d="M 866 178 V 224" stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 8} delay={dl(8, 2.0)}>
        <Rect x={852} y={224} width={28} height={72} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={866} y={264} size={12.5} fill={INK} weight={800}>R₂</T>
        <T x={844} y={264} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">10 kΩ</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.3)} d="M 866 296 V 336 H 600" stroke={INK} sw={2.2} dur={0.6} />
      {/* the meter bridge — red */}
      <Draw on={beat >= 8} delay={dl(8, 2.8)} d="M 866 224 H 782 V 250" stroke={RED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 3.1)} d="M 782 288 V 296 H 866" stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <Circle cx={782} cy={269} r={19} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={782} y={275} size={14} fill={RED} weight={800}>V</T>
        <Circle cx={866} cy={224} r={4.5} fill={RED} />
        <Circle cx={866} cy={296} r={4.5} fill={RED} />
        <T x={754} y={274} size={12.5} fill={RED} weight={800} anchor="end">20 kΩ</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.8)}>
        <T x={556} y={364} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the meter is now a second path for current, in parallel with R₂",
             "the meter is now a second path for current, in parallel with R₂")}
        </T>
      </Fade>

      {/* beat 9 — part (a) */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={556} y={394} size={12.8} fill={INK} weight={700} anchor="start">
          {t("(a) meter absent — equal resistors split 60 V equally",
             "(a) meter absent — equal resistors split 60 V equally")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.2)}>
        <T x={556} y={418} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          V_true = 60 ⁄ 2 = 30 V
        </T>
      </Fade>

      {/* beat 10 — part (b), the loaded element */}
      <Draw on={beat >= 10} delay={dl(10, 0.2)} d={ringD(824, 260, 78, 56)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 10} delay={dl(10, 0.8)}>
        <T x={556} y={444} size={12.8} fill={INK} weight={700} anchor="start">
          {t("(b) with the meter on:  10 ∥ 20 = (10 × 20) ⁄ 30 = 6.667 kΩ",
             "(b) with the meter on:  10 ∥ 20 = (10 × 20) ⁄ 30 = 6.667 kΩ")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.8)}>
        <T x={556} y={466} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the measured element has dropped from 10 kΩ to under 7 kΩ",
             "the measured element has dropped from 10 kΩ to under 7 kΩ")}
        </T>
      </Fade>

      {/* beat 11 — redo the divider */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={556} y={492} size={12.8} fill={INK} weight={700} anchor="start">
          6.667 ⁄ (10 + 6.667) = 6.667 ⁄ 16.667 = 0.400
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.2)}>
        <T x={556} y={516} size={15} fill={RED} weight={900} anchor="start">
          V_read = 60 × 0.400 = 24 V
        </T>
      </Fade>

      {/* beat 12 — part (c), boxed */}
      <Draw on={beat >= 12} delay={dl(12, 0.2)} d="M 552 528 H 1040 V 562 H 552 Z" stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 12} delay={dl(12, 0.9)}>
        <T x={566} y={551} size={14} fill={RED} weight={900} anchor="start">
          {t("(c) error = (30 − 24) ⁄ 30 = 6 ⁄ 30 = 20% — and the meter is not faulty",
             "(c) error = (30 − 24) ⁄ 30 = 6 ⁄ 30 = 20% — and the meter is not faulty")}
        </T>
      </Fade>

      {/* beat 13 — the payoff */}
      <Fade on={beat >= 13} delay={dl(13, 0.3)}>
        <Chip x={44} y={572} w={992} h={24} fill={GREEN} textFill="#ffffff" size={13}>
          {t("★ a voltmeter must have R_V ≫ the circuit it measures — a meter resistance in the data is a loading error waiting to be computed",
             "★ a voltmeter must have R_V ≫ the circuit it measures — a meter resistance in the data is a loading error waiting to be computed")}
        </Chip>
      </Fade>
    </Scene>
  );
}

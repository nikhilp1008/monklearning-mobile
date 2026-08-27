/**
 * P12Ch04 · Section 43 — "Cheat Sheet: Quick Recall for the Whole Chapter"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: a blind three-panel template gated on 0/1/7/11 of a
 * 12-beat narration — eight reveals unused, the board frozen through most of
 * the audio — and four drawn shapes in total (a title underline, two rules
 * and a badge circle). Nothing on it was a picture of anything.
 *
 * WHAT THE NARRATION TEACHES: the final-revision pass. Five subtopics, each
 * given as a short fact block immediately followed by its memory aids —
 * ① Biot–Savart (dB ⊥ the plane of I dl and r, the right-hand grip rule, arc
 * as a fraction of a loop / polygon as a sum of finite wires / a segment
 * aimed at the point giving nothing) → "add the swirls, not the numbers";
 * ② Ampère (only enclosed current, loop shape irrelevant, the thick-wire
 * profile, the solenoid, the toroid) → "true for any loop, solvable only for
 * the symmetric few" and "thread it or forget it"; ③ forces and torque (the
 * magnetic force does no work, the period holds no speed, torque maximum when
 * the plane contains B and zero when the plane is ⊥ to it) → "only steers,
 * never speeds", "like currents cuddle", "θ is to the NORMAL"; ④ the two
 * conversions and their ideal resistances → the A/V lettering aid and "shunt
 * is small, multiplier is mighty"; ⑤ the dipole (m = N I A along the normal,
 * the 2 : 1 ratio, both fields ∝ 1 ⁄ r³, the e ⁄ 2m factor of two) → "a baby
 * bar magnet", "moment to momentum is e ⁄ 2m", "axial beats equatorial".
 * It closes on the four habits for the exam hall.
 *
 * THE FIGURE: small inline glyphs beside the facts they belong to — a wire
 * wrapped in its field loop for the grip rule, a segment aimed at a field
 * point crossed out, the thick-wire B-versus-r profile that rises, peaks at
 * the surface and falls, an orbit with B into the page carrying v and an
 * inward force, a loop drawn edge-on with B in its plane (τ maximum) and a
 * second drawn edge-on with B along its normal (τ = 0), the dipole loop with
 * its moment, and a two-bar comparison of the axial and equatorial fields.
 *
 * ARITHMETIC ON THE BOARD (recomputed): the axial/equatorial bars are drawn
 * 48 px and 24 px tall — exactly the 2 : 1 the narration states. μ₀ is quoted
 * as 4π × 10⁻⁷ so that μ₀ ⁄ 4π = 10⁻⁷ exactly.
 *
 * BEAT MAP (n_reveals = 12 — gates 0..11, every beat used):
 *    0 title + underline + subtitle
 *    1 ① BIOT–SAVART facts  + grip glyph + the aimed-segment glyph
 *    2 aid: "add the swirls, not the numbers"
 *    3 ② AMPÈRE facts  + the B-versus-r profile glyph
 *    4 aids: "true for any loop…" and "thread it or forget it"
 *    5 ③ FORCES & TORQUE facts  + orbit glyph + the two torque orientations
 *    6 aids: only steers · like currents cuddle · θ to the NORMAL
 *    7 ④ THE CONVERSIONS facts + the two ideal resistances
 *    8 aids: A → low R, in series · V → very high R, in parallel · sizes
 *    9 ⑤ THE DIPOLE facts  + loop-and-moment glyph + the 2 : 1 bars
 *   10 aids: baby bar magnet · moment to momentum · axial beats equatorial
 *   11 the four habits for the exam hall, and the sign-off
 *
 * Layout: three full-height columns, fact block then aid block in each —
 *   col ① x44..368 (subtopics 1 & 2)
 *   col ② x384..712 (subtopics 3 & 4)
 *   col ③ x728..1044 (subtopic 5, then the exam-hall habits).
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** flat ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};

export default function P12Ch04Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** a fact line */
  const line = (
    k: number,
    x: number,
    y: number,
    d: number,
    tone: string,
    s: string,
    size = 12.6,
    w = 600
  ) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={size} fill={tone} weight={w} anchor="start">
        {s}
      </T>
    </Fade>
  );

  /** a handwritten memory aid */
  const aid = (k: number, x: number, y: number, d: number, tone: string, s: string) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={13} fill={tone} script anchor="start">
        {s}
      </T>
    </Fade>
  );

  /** the amber margin bar that marks an aid block */
  const bar = (k: number, x: number, y1: number, y2: number, d: number) => (
    <Draw
      on={beat >= k}
      delay={dl(k, d)}
      d={`M ${x} ${y1} L ${x} ${y2}`}
      stroke={AMBER_DARK}
      sw={3.4}
      dur={0.45}
    />
  );

  /** a subtopic rule + heading */
  const block = (
    k: number,
    x1: number,
    x2: number,
    yRule: number,
    yHead: number,
    s: string
  ) => (
    <G>
      <Draw
        on={beat >= k}
        delay={dl(k, 0.1)}
        d={`M ${x1} ${yRule} L ${x2} ${yRule}`}
        stroke={RED}
        sw={2.4}
        dur={0.55}
      />
      <Fade on={beat >= k} delay={dl(k, 0.5)}>
        <T x={x1} y={yHead} size={14} fill={RED} weight={800} anchor="start">
          {s}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* ═══════════════ beat 0 — title ═══════════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The Cheat Sheet — one page, five subtopics", "The Cheat Sheet — one page, five subtopics")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 268 60 C 430 56, 640 65, 812 58"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={78} size={12.8} fill={MUTED} script>
          {t(
            "the compressed form of everything we built, with the memory hooks attached",
            "the compressed form of everything we built, with the memory hooks attached"
          )}
        </T>
      </Fade>

      {/* ══════════ COLUMN ① — x44..368 · subtopics 1 & 2 ══════════ */}

      {/* beat 1 — Biot–Savart facts */}
      {block(1, 44, 368, 92, 112, t("① BIOT–SAVART LAW", "① BIOT–SAVART LAW"))}
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(300, 134, 300, 96)} stroke={INK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.35)} d={ellD(300, 110, 22, 7)} stroke={GREEN} sw={1.6} dur={0.6} />
      {line(1, 44, 140, 0.9, INK, t("dB ⊥ the plane of I dl and r", "dB ⊥ the plane of I dl and r"))}
      {line(1, 44, 158, 1.4, INK, t("grip rule: thumb along I,", "grip rule: thumb along I,"))}
      {line(1, 44, 176, 1.8, INK, t("fingers curl the way B loops round", "fingers curl the way B loops round"))}
      {line(1, 44, 196, 2.4, INK, t("arc = a fraction of a full loop", "arc = a fraction of a full loop"))}
      {line(1, 44, 214, 2.9, INK, t("polygon = a sum of finite wires", "polygon = a sum of finite wires"))}
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 276 200 L 322 200" stroke={INK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.65)}>
        <Circle cx={344} cy={200} r={3.4} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={crossD(288, 192, 22, 16)} stroke={RED} sw={1.8} dur={0.3} />
      {line(1, 44, 232, 3.5, RED, t("a segment aimed at the point gives 0", "a segment aimed at the point gives 0"))}

      {/* beat 2 — the aid */}
      {bar(2, 44, 246, 292, 0.2)}
      {aid(2, 58, 264, 0.7, AMBER_DARK, t("\"add the swirls, not the numbers\"", "\"add the swirls, not the numbers\""))}
      {line(2, 58, 284, 1.3, INK_LIGHT, t("the two commonest errors in one phrase", "the two commonest errors in one phrase"), 12.5)}

      {/* beat 3 — Ampère facts */}
      {block(3, 44, 368, 304, 324, t("② AMPÈRE'S LAW", "② AMPÈRE'S LAW"))}
      {line(3, 44, 348, 0.9, INK, t("only enclosed current counts —", "only enclosed current counts —"))}
      {line(3, 44, 366, 1.3, INK, t("the loop's shape is irrelevant", "the loop's shape is irrelevant"))}
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 258 386 L 258 340 M 258 386 L 356 386" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d="M 258 386 L 288 348 C 312 358, 334 374, 356 380"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      {line(3, 44, 384, 1.9, INK, t("thick wire: rises inside,", "thick wire: rises inside,"))}
      {line(3, 44, 402, 2.3, INK, t("peaks at the surface, then falls outside", "peaks at the surface, then falls outside"))}
      {line(3, 44, 420, 2.9, INK, t("solenoid: uniform inside, 0 outside", "solenoid: uniform inside, 0 outside"))}
      {line(3, 44, 438, 3.3, MUTED, t("— it uses turns per unit length", "— it uses turns per unit length"))}
      {line(3, 44, 456, 3.8, INK, t("toroid: 0 in the hole and outside", "toroid: 0 in the hole and outside"))}
      {line(3, 44, 474, 4.2, MUTED, t("— it uses the total number of turns", "— it uses the total number of turns"))}

      {/* beat 4 — two aids */}
      {bar(4, 44, 488, 578, 0.2)}
      {aid(4, 58, 506, 0.7, AMBER_DARK, t("\"true for any loop —", "\"true for any loop —"))}
      {aid(4, 58, 526, 1.0, AMBER_DARK, t("solvable only for the symmetric few\"", "solvable only for the symmetric few\""))}
      {aid(4, 58, 550, 1.6, AMBER_DARK, t("\"thread it or forget it\"", "\"thread it or forget it\""))}
      {line(4, 58, 572, 2.1, INK_LIGHT, t("no threading ⇒ not in your equation", "no threading ⇒ not in your equation"), 12.5)}

      {/* ══════════ COLUMN ② — x384..712 · subtopics 3 & 4 ══════════ */}

      {/* beat 5 — forces and torque facts */}
      {block(5, 384, 712, 92, 112, t("③ FORCES & TORQUE", "③ FORCES & TORQUE"))}
      {line(5, 384, 132, 0.9, INK, t("magnetic force ⊥ v ⇒ it does no work", "magnetic force ⊥ v ⇒ it does no work"))}
      {line(5, 384, 150, 1.3, INK, t("so speed and kinetic energy never change", "so speed and kinetic energy never change"))}
      {line(5, 384, 168, 1.9, INK, t("the period contains no speed —", "the period contains no speed —"))}
      {line(5, 384, 186, 2.3, INK, t("that is exactly what the cyclotron exploits", "that is exactly what the cyclotron exploits"))}
      {line(5, 384, 204, 2.9, INK, t("torque is maximum when the loop's plane", "torque is maximum when the loop's plane"))}
      {line(5, 384, 222, 3.3, INK, t("contains B, and zero when it is ⊥ to B", "contains B, and zero when it is ⊥ to B"))}

      {/* the orbit: B into the page, v tangent, force inward */}
      <Draw on={beat >= 5} delay={dl(5, 3.9)} d={circD(440, 258, 24)} stroke={GREEN} sw={1.8} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d={crossInD(440, 258, 6)} stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4.8)} d={arrowD(424, 234, 458, 234)} stroke={RED} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.05)} d={arrowD(440, 234, 440, 248)} stroke={AMBER_DARK} sw={1.7} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 5.3)}>
        <T x={440} y={298} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("no work", "no work")}
        </T>
      </Fade>

      {/* loop edge-on, B lying in its plane → τ maximum */}
      <Draw on={beat >= 5} delay={dl(5, 5.7)} d="M 534 258 L 586 258" stroke={INK} sw={2.8} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.95)} d={arrowD(530, 276, 590, 276)} stroke={AMBER_DARK} sw={1.7} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <T x={560} y={298} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("τ maximum", "τ maximum")}
        </T>
      </Fade>

      {/* loop edge-on, B along its normal → τ = 0 */}
      <Draw on={beat >= 5} delay={dl(5, 6.5)} d="M 664 234 L 664 282" stroke={INK} sw={2.8} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 6.75)} d={arrowD(634, 258, 694, 258)} stroke={AMBER_DARK} sw={1.7} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 7.0)}>
        <T x={664} y={298} size={12.5} fill={RED} weight={700}>
          τ = 0
        </T>
      </Fade>

      {/* beat 6 — three aids */}
      {bar(6, 384, 308, 400, 0.2)}
      {aid(6, 398, 326, 0.7, AMBER_DARK, t("\"magnetic force only steers, never speeds\"", "\"magnetic force only steers, never speeds\""))}
      {aid(6, 398, 348, 1.3, AMBER_DARK, t("\"like currents cuddle\" — parallel wires attract", "\"like currents cuddle\" — parallel wires attract"))}
      {aid(6, 398, 370, 1.9, RED, t("\"θ is measured to the NORMAL, not the plane\"", "\"θ is measured to the NORMAL, not the plane\""))}
      {line(6, 398, 392, 2.5, MUTED, t("the biggest single mark-loser in the chapter", "the biggest single mark-loser in the chapter"), 12.5)}

      {/* beat 7 — the conversions */}
      {block(7, 384, 712, 410, 430, t("④ THE CONVERSIONS", "④ THE CONVERSIONS"))}
      {line(7, 384, 452, 0.9, INK, t("ammeter: a low R in parallel (the shunt)", "ammeter: a low R in parallel (the shunt)"))}
      {line(7, 384, 470, 1.3, MUTED, t("— the instrument itself goes in series", "— the instrument itself goes in series"))}
      {line(7, 384, 488, 1.9, INK, t("voltmeter: a high R in series (the multiplier)", "voltmeter: a high R in series (the multiplier)"))}
      {line(7, 384, 506, 2.3, MUTED, t("— the instrument itself bridges across", "— the instrument itself bridges across"))}
      {line(7, 384, 524, 2.9, GREEN_DARK, t("ideal ammeter R = 0 · ideal voltmeter R = ∞", "ideal ammeter R = 0 · ideal voltmeter R = ∞"))}

      {/* beat 8 — the lettering aids */}
      {bar(8, 384, 534, 594, 0.2)}
      {line(8, 396, 550, 0.7, AMBER_DARK, t("A → a low resistance, and it goes in series", "A → a low resistance, and it goes in series"))}
      {line(8, 396, 570, 1.3, AMBER_DARK, t("V → a very high resistance, in parallel", "V → a very high resistance, in parallel"))}
      {line(8, 396, 590, 1.9, RED, t("shunt is small, multiplier is mighty", "shunt is small, multiplier is mighty"))}

      {/* ══════════ COLUMN ③ — x728..1044 · subtopic 5, then the habits ══════════ */}

      {/* beat 9 — the dipole facts */}
      {block(9, 728, 1044, 90, 110, t("⑤ THE MAGNETIC DIPOLE", "⑤ THE MAGNETIC DIPOLE"))}
      {line(9, 728, 134, 0.9, INK, t("m = turns × current × area,", "m = turns × current × area,"))}
      {line(9, 728, 152, 1.3, INK, t("along the normal by the right-hand rule", "along the normal by the right-hand rule"))}
      {line(9, 728, 170, 1.9, INK, t("axial : equatorial = 2 : 1,", "axial : equatorial = 2 : 1,"))}
      {line(9, 728, 188, 2.3, INK, t("and both fall away as 1 ⁄ r³", "and both fall away as 1 ⁄ r³"))}
      {line(9, 728, 206, 2.9, INK, t("gyromagnetic ratio = charge ⁄ (2 × mass)", "gyromagnetic ratio = charge ⁄ (2 × mass)"))}
      {line(9, 728, 224, 3.3, RED, t("that factor of 2 is the most-dropped term", "that factor of 2 is the most-dropped term"))}

      {/* the loop with its moment */}
      <Draw on={beat >= 9} delay={dl(9, 3.9)} d={ellD(790, 290, 25, 8)} stroke={GREEN} sw={1.8} dur={0.7} />
      <Draw on={beat >= 9} delay={dl(9, 4.5)} d={arrowD(790, 290, 790, 258)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 4.8)}>
        <T x={798} y={262} size={12.5} fill={RED} weight={800} anchor="start">
          m
        </T>
      </Fade>

      {/* the 2 : 1 comparison — bars drawn 48 px and 24 px tall */}
      <Draw on={beat >= 9} delay={dl(9, 5.1)} d="M 876 300 L 990 300" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 5.4)} d="M 900 300 L 900 252" stroke={RED} sw={7} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 5.7)} d="M 962 300 L 962 276" stroke={GREEN} sw={7} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 6.0)}>
        <T x={900} y={318} size={12.5} fill={RED} weight={700}>
          {t("axial", "axial")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.2)}>
        <T x={962} y={318} size={12.5} fill={GREEN_DARK} weight={700}>
          {t("equatorial", "equatorial")}
        </T>
      </Fade>

      {/* beat 10 — three aids */}
      {bar(10, 728, 330, 418, 0.2)}
      {aid(10, 742, 348, 0.7, AMBER_DARK, t("\"a current loop is a baby bar magnet\"", "\"a current loop is a baby bar magnet\""))}
      {aid(10, 742, 370, 1.3, AMBER_DARK, t("\"moment to momentum is e ⁄ 2m\"", "\"moment to momentum is e ⁄ 2m\""))}
      {aid(10, 742, 392, 1.9, AMBER_DARK, t("\"axial beats equatorial, two to one\"", "\"axial beats equatorial, two to one\""))}
      {line(10, 742, 412, 2.5, MUTED, t("the middle one protects the factor of two", "the middle one protects the factor of two"), 12.5)}

      {/* beat 11 — the four habits for the hall */}
      {block(11, 728, 1044, 430, 450, t("IN THE EXAM HALL — FOUR HABITS", "IN THE EXAM HALL — FOUR HABITS"))}
      {line(11, 728, 474, 0.9, INK, t("1 · convert every length to metres first", "1 · convert every length to metres first"))}
      {line(11, 728, 494, 1.5, INK, t("2 · keep μ₀ = 4π × 10⁻⁷ ⇒ μ₀ ⁄ 4π = 10⁻⁷", "2 · keep μ₀ = 4π × 10⁻⁷ ⇒ μ₀ ⁄ 4π = 10⁻⁷"))}
      {line(11, 728, 514, 2.1, INK, t("3 · add fields as vectors, never as scalars", "3 · add fields as vectors, never as scalars"))}
      {line(11, 728, 532, 2.5, MUTED, t("two equal ones can give 0 up to their sum", "two equal ones can give 0 up to their sum"), 12.5)}
      {line(11, 728, 554, 3.1, INK, t("4 · ask what was held constant: same speed,", "4 · ask what was held constant: same speed,"))}
      {line(11, 728, 572, 3.5, INK, t("same voltage, or same momentum", "same voltage, or same momentum"))}
      <Fade on={beat >= 11} delay={dl(11, 4.2)}>
        <T x={728} y={592} size={13} fill={GREEN_DARK} script anchor="start">
          {t("that is the whole chapter — good luck", "that is the whole chapter — good luck")}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch04 · Section 16 — "Common Pitfalls and Pro-Tips"
 * Subtopic: Ampere's Circuital Law and Its Applications
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: although this file's
 * header already claimed eight beats, every element was gated on 0, 1, 5 or 11
 * — and gate 11 can never fire, since there are only eight beats (0..7), so the
 * closing panel was permanently dead. Four drawn strokes in total, all rules.
 * The narration names two pictures outright ("picture the graph from the
 * formulas section", "use a rectangle with one side along the axis inside") and
 * neither was on the board.
 *
 * What the narration actually teaches: four Ampere-specific errors — no
 * symmetry means no solution; external currents never enter I_enc; n and N are
 * different quantities; the outside formula does not hold inside a thick wire —
 * followed by the method statement for the whole subtopic: pick the loop that
 * matches the symmetry (a circle for wires, cylinders and toroids; a rectangle
 * for solenoids), and the algebra becomes one line.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the four mistakes examiners see most often"  title + underline + labels
 *  1  mistake 1 — no symmetry, no solution          badge + 3 lines
 *  2  mistake 2 — counting external currents        badge + 3 lines
 *  3  mistake 3 — n versus N                        badge + 3 lines
 *  4  mistake 4 — outside formula at an inside point badge + line + THE THICK-
 *                                                    WIRE GRAPH (rising line,
 *                                                    peak at the surface,
 *                                                    falling 1/r curve)
 *  5  "now the pro-tip"                             pro-tip heading
 *  6  choose the loop to match the symmetry         CIRCLE-ROUND-A-WIRE figure
 *                                                    (⊗ wire, dashed loop,
 *                                                    tangential B) and the
 *                                                    SOLENOID-RECTANGLE figure
 *                                                    (winding wall, interior B,
 *                                                    rectangle straddling it)
 *  7  Biot-Savart vs Ampere, and what comes next    rule + closing + chip
 *
 * The board carries no numerals: this section's narration is entirely
 * qualitative, so nothing numeric is invented. The thick-wire graph is drawn to
 * scale — peak height h at r = R, and the outside branch is a genuine h·R/r.
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** dashed circle as a single drawable path */
function dashCircD(cx: number, cy: number, r: number, n = 22): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = a0 + (0.6 / n) * Math.PI * 2;
    p.push(
      `M ${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)} ` +
      `A ${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}`
    );
  }
  return p.join(" ");
}

/* the thick-wire profile, to scale: peak h at r = R, then h·R/r outside */
const PX = 150, PY = 496, PW = 70, PH = 52;
const OUT_D = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.4, 2.8, 3.2, 3.4]
  .map((k, i) => `${i === 0 ? "M" : "L"} ${(PX + PW * k).toFixed(1)} ${(PY - PH / k).toFixed(1)}`)
  .join(" ");

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.1} dur={0.38} />
      <Fade on={on} delay={delay + 0.28}>
        <T x={cx} y={cy + 5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch04Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const coilWall = [610, 628, 646, 664, 682, 700, 718, 736, 754, 772];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Pitfalls & pro-tips — Ampere's circuital law",
             "Pitfalls & pro-tips — Ampere's circuital law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 292 62 C 450 58, 640 66, 788 60" stroke={RED} sw={2.2} dur={0.65} />
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("each of these has its own error tag in the question bank",
             "each of these has its own error tag in the question bank")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={44} y={102} size={13.5} fill={RED} weight={800} anchor="start">
          {t("FOUR MISTAKES THAT COST MARKS", "FOUR MISTAKES THAT COST MARKS")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — no symmetry, no solution ═══════════ */}
      <Badge n={1} cx={58} cy={128} on={beat >= 1} delay={dl(1, 0.2)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={84} y={132} size={13.2} fill={RED} weight={800} anchor="start">
          {t("Using Ampere's law where there is no symmetry",
             "Using Ampere's law where there is no symmetry")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={84} y={152} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the law is ALWAYS true — for any closed loop, in any geometry",
             "the law is ALWAYS true — for any closed loop, in any geometry")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={84} y={170} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("it is only SOLVABLE when a loop exists with B constant and ∥ or ⊥",
             "it is only SOLVABLE when a loop exists with B constant and ∥ or ⊥")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={84} y={188} size={12.3} fill={AMBER_DARK} weight={700} anchor="start">
          {t("probe: B at the centre of one circular loop? No such path exists.",
             "probe: B at the centre of one circular loop? No such path exists.")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — external currents ═══════════ */}
      <Badge n={2} cx={58} cy={220} on={beat >= 2} delay={dl(2, 0.2)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={84} y={224} size={13.2} fill={RED} weight={800} anchor="start">
          {t("Counting external currents in I_enc", "Counting external currents in I_enc")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={84} y={244} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("only currents that THREAD the loop appear on the right-hand side",
             "only currents that THREAD the loop appear on the right-hand side")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={84} y={262} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("a nearby wire does change B at every point on the loop — yet its",
             "a nearby wire does change B at every point on the loop — yet its")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={84} y={280} size={12.3} fill={AMBER_DARK} weight={700} anchor="start">
          {t("contributions add to zero around the closed path",
             "contributions add to zero around the closed path")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — n versus N ═══════════ */}
      <Badge n={3} cx={58} cy={312} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={84} y={316} size={13.2} fill={RED} weight={800} anchor="start">
          {t("Mixing up n with N", "Mixing up n with N")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={84} y={336} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("solenoid uses n, the turns per unit length; toroid uses N / 2πr",
             "solenoid uses n, the turns per unit length; toroid uses N / 2πr")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={84} y={354} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("swap them and the answer is wrong by a factor of hundreds",
             "swap them and the answer is wrong by a factor of hundreds")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={84} y={372} size={12.3} fill={AMBER_DARK} weight={700} anchor="start">
          {t("convert deliberately, in a labelled line of its own",
             "convert deliberately, in a labelled line of its own")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the outside formula at an inside point ═══════════ */}
      <Badge n={4} cx={58} cy={404} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={84} y={408} size={13.2} fill={RED} weight={800} anchor="start">
          {t("Using the outside formula at a point inside a thick wire",
             "Using the outside formula at a point inside a thick wire")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={84} y={428} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("inside, the loop encloses only r² / R² of I  ⇒  B ∝ r, not 1/r",
             "inside, the loop encloses only r² / R² of I  ⇒  B ∝ r, not 1/r")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)}
        d={`M ${PX} 436 L ${PX} ${PY} L 390 ${PY}`} stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={142} y={434} size={11.5} fill={INK} weight={800} anchor="end">B</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={396} y={500} size={11.5} fill={INK} weight={800} anchor="start">r</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={`M ${PX} ${PY} L 220 444`} stroke={BLUE} sw={2.6} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 3.2)} d={OUT_D} stroke={RED} sw={2.6} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={220} y={510} size={11.5} fill={MUTED} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={400} y={458} size={11.8} fill={MUTED} weight={700} anchor="start">
          {t("rising · peak · falling", "rising · peak · falling")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={400} y={478} size={11.8} fill={MUTED} weight={600} anchor="start">
          {t("picture it on sight", "picture it on sight")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the pro-tip ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={590} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("PRO-TIP — the method statement for the whole subtopic",
             "PRO-TIP — the method statement for the whole subtopic")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={590} y={142} size={12.5} fill={INK} weight={700} anchor="start">
          {t("choose the Amperian loop to match the field's symmetry",
             "choose the Amperian loop to match the field's symmetry")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the two loop shapes, drawn ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={590} y={172} size={12.8} fill={AMBER_DARK} weight={800} anchor="start">
          {t("wires · cylinders · toroids → a CIRCLE centred on the axis",
             "wires · cylinders · toroids → a CIRCLE centred on the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Circle cx={656} cy={246} r={9} fill="none" stroke={INK} strokeWidth={1.9} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)}
        d="M 649.6 239.6 L 662.4 252.4 M 662.4 239.6 L 649.6 252.4" stroke={INK} sw={1.7} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={dashCircD(656, 246, 44)} stroke={BLUE} sw={2.1} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(632, 202, 684, 202)} stroke={BLUE} sw={2.4} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={720} y={214} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("B runs tangentially along it,", "B runs tangentially along it,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={720} y={234} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("with constant magnitude", "with constant magnitude")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={720} y={258} size={12} fill={MUTED} weight={700} anchor="start">
          ⇒ ∮ B · dl = B (2πr)
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={590} y={318} size={12.8} fill={AMBER_DARK} weight={800} anchor="start">
          {t("solenoids → a RECTANGLE, one side inside on the axis",
             "solenoids → a RECTANGLE, one side inside on the axis")}
        </T>
      </Fade>
      {coilWall.map((x, i) => (
        <Fade key={`cw${x}`} on={beat >= 6} delay={dl(6, 3.9 + i * 0.05)}>
          <Circle cx={x} cy={372} r={5} fill="none" stroke={INK} strokeWidth={1.7} />
        </Fade>
      ))}
      <Draw on={beat >= 6} delay={dl(6, 4.5)} d={arrowD(620, 396, 764, 396)} stroke={BLUE} sw={2.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 5)} d="M 626 344 H 752 V 398 H 626 Z" stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={760} y={340} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("outside: B vanishes", "outside: B vanishes")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.1)}>
        <T x={772} y={402} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("inside, along the axis", "inside, along the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={590} y={432} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("every segment gives you either B × length, or exactly nothing",
             "every segment gives you either B × length, or exactly nothing")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={590} y={452} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("get the loop right and the algebra is one line",
             "get the loop right and the algebra is one line")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.5)}>
        <T x={590} y={472} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("the struggle is never the algebra — it is the choice of loop",
             "the struggle is never the algebra — it is the choice of loop")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the closing thought ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.15)} d="M 44 520 L 1036 520" stroke={INK} sw={1.6} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={44} y={542} size={13} fill={INK} weight={800} anchor="start">
          {t("Ampere's law and Biot-Savart are two routes to exactly the same physics.",
             "Ampere's law and Biot-Savart are two routes to exactly the same physics.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={44} y={560} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Biot-Savart always works but can be laborious. Ampere is nearly free when the symmetry is there, and no help when it is not.",
             "Biot-Savart always works but can be laborious. Ampere is nearly free when the symmetry is there, and no help when it is not.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <Chip x={44} y={568} w={992} h={28} fill={GREEN} textFill="#ffffff" size={13} script={false}>
          {t("★ Recognise which situation you are in before you start writing — next: what force a field exerts on moving charges and on currents",
             "★ Recognise which situation you are in before you start writing — next: what force a field exerts on moving charges and on currents")}
        </Chip>
      </Fade>
    </Scene>
  );
}

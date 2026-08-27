/**
 * P12Ch04 · Section 1 — "Concept Intuition: Two Sides of One Coin"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: four gates (0,1,4,8)
 * against nine narration segments, four drawn strokes in total (a title
 * underline and two rules), and three columns of bullet text that all snapped
 * in at once. A chapter about magnetic fields with not a single field line on
 * the board, frozen for minutes at a time.
 *
 * What the narration actually teaches: magnetism has a SOURCE side and a PROBE
 * side. A current manufactures B (rings wrapping the wire); B pushes sideways
 * on any other moving charge, F = q(v × B). The source side is answered by the
 * Biot-Savart law, whose trick is to chop the wire into current elements I dl
 * and vector-sum their contributions.
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  exam relevance (JEE Main / Adv / NEET / CBSE)   title + underline + 4 chips
 *  1  "a moving charge produces B, B pushes back"     the central-fact line
 *  2  "on the left the source side… on the right…"    BOTH figures draw:
 *                                                     wire + 3 field rings + ⊙/⊗,
 *                                                     ⊗ grid + q + v + F
 *  3  "the probe side, the force side — a detector"   probe caption (right col)
 *  4  "F = q v × B, defining relation, F ⊥ v"         probe formula + note
 *  5  "the source side — Biot-Savart, Coulomb's twin" source caption (left col)
 *  6  "chop the wire — the train and its bogies"      chopped wire + ticks
 *  7  "each segment is a current element I dl"        the highlighted element
 *  8  "every element throws its own swirl; sum them"  3 elements + 3 rings, B = ∫dB
 *
 * Colour note: the narration says "blue rings" and "blue crosses", so magnetic
 * field uses the corpus blue (#0284c7, already used across P12Ch01); everything
 * else is kit palette.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** clean ellipse as a drawable path (field ring seen in perspective) */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** little chevron marking the circulation sense on a ring */
const chevD = (x: number, y: number) =>
  `M ${x - 8} ${y - 6} L ${x + 2} ${y} L ${x - 8} ${y + 6}`;

export default function P12Ch04Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rings: [number, number, number][] = [
    [240, 78, 18],
    [282, 94, 22],
    [324, 78, 18],
  ];

  return (
    <Scene>
      {/* ─────────── beat 0 — title + where this is examined ─────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Two sides of one coin", "Two sides of one coin")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 348 62 C 480 58, 620 66, 736 60" stroke={RED} sw={2.2} dur={0.6} />

      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <Chip x={90} y={76} w={210} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>
          {t("JEE Main · superposition", "JEE Main · superposition")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <Chip x={320} y={76} w={210} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>
          {t("JEE Adv · multi-wire + arcs", "JEE Adv · multi-wire + arcs")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <Chip x={550} y={76} w={210} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>
          {t("NEET · field at the centre", "NEET · field at the centre")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <Chip x={780} y={76} w={210} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>
          {t("CBSE · axial loop, 3 marks", "CBSE · axial loop, 3 marks")}
        </Chip>
      </Fade>

      {/* ─────────── beat 1 — the central experimental fact ─────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK} weight={800}>
          {t("A moving charge (a current) MAKES a magnetic field — and a field PUSHES BACK on another moving charge",
             "A moving charge (a current) MAKES a magnetic field — and a field PUSHES BACK on another moving charge")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={540} y={154} size={13} fill={MUTED} script>
          {t("both halves involve motion — magnetism is electricity seen moving",
             "both halves involve motion — magnetism is electricity seen moving")}
        </T>
      </Fade>

      {/* ─────────── beat 2 — LEFT: the source picture ─────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={186} size={14} fill={RED} weight={800} anchor="start">
          {t("SOURCE SIDE — a current makes B", "SOURCE SIDE — a current makes B")}
        </T>
      </Fade>

      {/* the wire, current upward */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(215, 352, 215, 208)} stroke={INK} sw={3} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={199} y={222} size={15} fill={INK} weight={900} anchor="end">I</T>
      </Fade>

      {/* three field rings wrapping it, each with its circulation chevron */}
      {rings.map(([cy, rx, ry], i) => (
        <Draw key={`ring${cy}`} on={beat >= 2} delay={dl(2, 1.4 + i * 0.35)}
          d={ellD(215, cy, rx, ry)} stroke={BLUE} sw={2} dur={0.8} />
      ))}
      {rings.map(([cy, , ry], i) => (
        <Draw key={`chev${cy}`} on={beat >= 2} delay={dl(2, 1.9 + i * 0.35)}
          d={chevD(231, cy + ry - 1)} stroke={BLUE} sw={2} dur={0.3} />
      ))}

      {/* out-of-page on the left of the wire, into-page on the right */}
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Circle cx={106} cy={282} r={11} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <Circle cx={106} cy={282} r={2.6} fill={BLUE} />
        <T x={106} y={310} size={11} fill={MUTED} weight={700}>out</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <Circle cx={330} cy={282} r={11} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <T x={330} y={310} size={11} fill={MUTED} weight={700}>in</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.3)}
        d="M 322.2 274.2 L 337.8 289.8 M 337.8 274.2 L 322.2 289.8" stroke={BLUE} sw={1.7} dur={0.3} />

      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={215} y={370} size={12} fill={BLUE} weight={700}>
          {t("B rings wrap the wire", "B rings wrap the wire")}
        </T>
      </Fade>

      {/* ─────────── beat 2 — RIGHT: the probe picture ─────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={580} y={186} size={14} fill={RED} weight={800} anchor="start">
          {t("PROBE SIDE — a field pushes a moving charge", "PROBE SIDE — a field pushes a moving charge")}
        </T>
      </Fade>

      {/* field into the page: a grid of crosses */}
      {[596, 664, 732, 800, 868, 936].map((cx, i) =>
        [230, 278, 326].map((cy, j) => (
          <Draw key={`cx${cx}-${cy}`} on={beat >= 2} delay={dl(2, 0.7 + (i + j) * 0.12)}
            d={`M ${cx - 7} ${cy - 7} L ${cx + 7} ${cy + 7} M ${cx + 7} ${cy - 7} L ${cx - 7} ${cy + 7}`}
            stroke={BLUE} sw={1.7} dur={0.35} />
        ))
      )}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={1010} y={356} size={12} fill={BLUE} weight={700} anchor="end">
          {t("B into the page", "B into the page")}
        </T>
      </Fade>

      {/* the probe charge, its velocity and the sideways force */}
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Circle cx={630} cy={278} r={17} fill={CREAM} stroke={RED} strokeWidth={2.4} />
        <T x={630} y={284} size={15} fill={RED} weight={900}>q</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={arrowD(650, 278, 772, 278)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={714} y={266} size={14} fill={GREEN} weight={900}>v</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={arrowD(630, 258, 630, 208)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={616} y={218} size={14} fill={RED} weight={900} anchor="end">F</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d="M 648 278 L 648 260 L 630 260" stroke={MUTED} sw={1.6} dur={0.3} />

      {/* ─────────── beats 3 & 4 — the probe side in words ─────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={580} y={396} size={13.5} fill={INK} weight={800} anchor="start">
          {t("Side 1 · PROBE: q is only a DETECTOR here", "Side 1 · PROBE: q is only a DETECTOR here")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={580} y={418} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("we are not asking where the field came from", "we are not asking where the field came from")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={580} y={448} size={18} fill={GREEN} weight={900} anchor="start">F = q (v × B)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={580} y={470} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("this DEFINES B · cross product ⇒ F ⊥ v, always",
             "this DEFINES B · cross product ⇒ F ⊥ v, always")}
        </T>
      </Fade>

      {/* ─────────── beat 5 — the source side in words ─────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={396} size={13.5} fill={INK} weight={800} anchor="start">
          {t("Side 2 · SOURCE: what field does a current build?",
             "Side 2 · SOURCE: what field does a current build?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={60} y={418} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("almost all of this subtopic lives on this side", "almost all of this subtopic lives on this side")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={60} y={448} size={18} fill={RED} weight={900} anchor="start">
          {t("the Biot-Savart law", "the Biot-Savart law")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={60} y={470} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("the magnetic counterpart of Coulomb's law", "the magnetic counterpart of Coulomb's law")}
        </T>
      </Fade>

      {/* ─────────── beats 6 & 7 — chop the wire into elements ─────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={60} y={510} size={13.5} fill={RED} weight={800} anchor="start">
          {t("Chop the wire into tiny elements", "Chop the wire into tiny elements")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={arrowD(70, 544, 600, 544)} stroke={INK} sw={3} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)}
        d="M 130 536 v 16 M 190 536 v 16 M 250 536 v 16 M 310 536 v 16 M 370 536 v 16 M 430 536 v 16 M 490 536 v 16 M 550 536 v 16"
        stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={60} y={574} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("a long train — the electrons are the bogies: study one, then add them all",
             "a long train — the electrons are the bogies: study one, then add them all")}
        </T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 310 534 H 372 V 554 H 310 Z"
        stroke={AMBER_DARK} sw={2.4} dur={0.5} fill={CREAM} />
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={arrowD(314, 526, 368, 526)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={396} y={531} size={14} fill={AMBER_DARK} weight={900} anchor="start">I dl</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={60} y={596} size={12.5} fill={INK} weight={700} anchor="start">
          {t("one current element: strength I and direction of flow, bundled into one object",
             "one current element: strength I and direction of flow, bundled into one object")}
        </T>
      </Fade>

      {/* ─────────── beat 8 — every element swirls; add the swirls ─────────── */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={676} y={510} size={13.5} fill={RED} weight={800} anchor="start">
          {t("Each element makes its own swirl", "Each element makes its own swirl")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.9)} d={arrowD(676, 546, 1012, 546)} stroke={INK} sw={2.6} dur={0.7} />
      {[712, 802, 892].map((cx, i) => (
        <Draw key={`el${cx}`} on={beat >= 8} delay={dl(8, 1.4 + i * 0.25)}
          d={`M ${cx - 9} 541 H ${cx + 9} V 551 H ${cx - 9} Z`}
          stroke={AMBER_DARK} sw={2} dur={0.3} fill={CREAM} />
      ))}
      {[712, 802, 892].map((cx, i) => (
        <Draw key={`sw${cx}`} on={beat >= 8} delay={dl(8, 1.8 + i * 0.25)}
          d={ellD(cx, 546, 34, 13)} stroke={BLUE} sw={1.8} dur={0.6} />
      ))}
      <Fade on={beat >= 8} delay={dl(8, 3)}>
        <T x={676} y={578} size={16} fill={GREEN} weight={900} anchor="start">B = ∫ dB</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={790} y={578} size={12.5} fill={RED} weight={800} anchor="start">
          {t("— a VECTOR sum, never a sum of magnitudes",
             "— a VECTOR sum, never a sum of magnitudes")}
        </T>
      </Fade>
    </Scene>
  );
}

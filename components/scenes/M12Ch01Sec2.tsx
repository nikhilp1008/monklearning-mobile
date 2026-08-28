/**
 * M12Ch01 · Section 2 — "The three personality traits of a relation"
 * Subtopic: Types of Relations  (middle section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Reflexive, symmetric and transitive are three SHAPES in a digraph, not
 * three sentences, so each gets its own real digraph on the same set of
 * dots Section 1 used: reflexive is the self-loop, symmetric is the matched
 * pair of reverse arrows, transitive is the chain plus the shortcut that
 * closes it. The antisymmetric look-alike gets its own figure — two reverse
 * arrows collapsing the two nodes into ONE — because the whole point of that
 * beat is that it is a different idea, not the negation of symmetric. The
 * closing beat puts all three signatures on one tiny set {a, b, c}.
 *
 * Grid: header band y30–92 · the void ↔ universal spectrum from Section 1
 * runs at y110 with its labels at y130 · three trait columns at x40–350,
 * x372–700, x722–1044, each laid out identically (header y156, sub y176,
 * figure y190–305, example y324/346, the formal line y372, the fine print
 * y394) · a full-width rule at y408 opens the bottom band, split into the
 * antisymmetric figure (x40–520) and the all-three diagram (x545–1044).
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "the interesting ones live between"  title + underline + subtitle +
 *                                          the extreme ↔ extreme spectrum with
 *                                          the middle stretch lit green
 *                                          (the extremes stay UNNAMED here —
 *                                          segment 0 never speaks ∅ or A × A)
 *  1  "reflexive, the self-loop"           three nodes, three self-loops,
 *                                          the same-class example
 *  2  "formally (a,a) ∈ R for every a"     the formal line + the miss-one
 *                                          warning
 *  3  "symmetric, the two-way street"      two nodes, matched reverse arcs,
 *                                          the neighbour example
 *  4  "formally (a,b) ⇒ (b,a)"             the formal line + note
 *  5  "transitive, the chain or shortcut"  a → b → c drawn amber, the RED
 *                                          shortcut a → c arcing over them
 *  6  "formally (a,b),(b,c) ⇒ (a,c)"       the formal line + note
 *  7  "antisymmetric is a look-alike"      both reverse arrows present, and
 *                                          the two nodes collapse into a = b
 *  8  "all three on one tiny set"          loops + matched arcs + red
 *                                          shortcut on {a, b, c}, with a
 *                                          three-line legend.  EVERY arrow
 *                                          here is drawn with its reverse, so
 *                                          the relation really is reflexive,
 *                                          symmetric AND transitive — a one-
 *                                          way b → c would break symmetry and
 *                                          make the claim false.
 *
 * Visual vocabulary (shared with Sections 1 and 3 of this subtopic):
 *   set outline INK · element nodes CREAM filled, INK stroke, INK letters ·
 *   the relation's arrows AMBER_DARK · self-loops and everything the voice
 *   calls a RESULT in GREEN_DARK · the transitive shortcut, and every trap,
 *   in RED · scaffolding and side notes in MUTED.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, GREEN, GREEN_DARK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const RAD = Math.PI / 180;

/** straight arrow between two node centres, pulled back off both rims */
function edgeA(x1: number, y1: number, x2: number, y2: number, o1: number, o2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return arrowD(
    x1 + o1 * Math.cos(a), y1 + o1 * Math.sin(a),
    x2 - o2 * Math.cos(a), y2 - o2 * Math.sin(a),
  );
}

/** bowed arrow; the head angle is taken from the real tangent at the tip */
function arcA(x1: number, y1: number, x2: number, y2: number, bow: number): string {
  const dx = x2 - x1, dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const px = -dy / L, py = dx / L;
  const cx = (x1 + x2) / 2 + px * bow * 2;
  const cy = (y1 + y2) / 2 + py * bow * 2;
  const a = Math.atan2(y2 - cy, x2 - cx);
  const h = 11;
  return (
    `M ${x1} ${y1} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2} ${y2}` +
    ` M ${(x2 - h * Math.cos(a - 0.46)).toFixed(1)} ${(y2 - h * Math.sin(a - 0.46)).toFixed(1)}` +
    ` L ${x2} ${y2}` +
    ` L ${(x2 - h * Math.cos(a + 0.46)).toFixed(1)} ${(y2 - h * Math.sin(a + 0.46)).toFixed(1)}`
  );
}

/** the point `d` px along the segment from (x1,y1) towards (x2,y2) */
function towards(x1: number, y1: number, x2: number, y2: number, d: number): [number, number] {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return [x1 + d * Math.cos(a), y1 + d * Math.sin(a)];
}

/** self-loop: a small circle riding on the rim of a node */
function loopA(cx: number, cy: number, dist: number, r: number, deg: number): string {
  const a = deg * RAD;
  const lx = cx + dist * Math.cos(a);
  const ly = cy + dist * Math.sin(a);
  return (
    `M ${(lx - r).toFixed(1)} ${ly.toFixed(1)} A ${r} ${r} 0 1 1 ${(lx + r).toFixed(1)} ${ly.toFixed(1)}` +
    ` A ${r} ${r} 0 1 1 ${(lx - r).toFixed(1)} ${ly.toFixed(1)}`
  );
}

/* ---- ① reflexive : the shared triangle, nodes r15 ---- */
const R_TRI: [number, number][] = [[195, 222], [152, 282], [238, 282]];
const R_LOOP: number[] = [-90, 150, 30];

/* ---- ③ transitive : a → b → c with the shortcut over the top ---- */
const TA: [number, number] = [760, 220];
const TB: [number, number] = [883, 286];
const TC: [number, number] = [1006, 220];

/* ---- beat 8 : all three signatures on {a, b, c} ---- */
const EA: [number, number] = [620, 478];
const EB: [number, number] = [780, 478];
const EC: [number, number] = [700, 552];
/* the red a → c shortcut, taken off the real node rims */
const [SCx1, SCy1] = towards(EA[0], EA[1], EC[0], EC[1], 19);
const [SCx2, SCy2] = towards(EC[0], EC[1], EA[0], EA[1], 22);
/* the b ⇄ c pair, taken off the real node rims */
const [BCx1, BCy1] = towards(EB[0], EB[1], EC[0], EC[1], 21);
const [BCx2, BCy2] = towards(EC[0], EC[1], EB[0], EB[1], 21);

export default function M12Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing + the spectrum of extremes ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={24} fill={RED} script>
          {t("The three personality traits of a relation",
             "Relation ke teen personality traits")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 312 64 C 470 60, 640 68, 768 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("Types of Relations — three personality traits we judge a relation by",
             "Types of Relations — teen personality traits jinse hum relation judge karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 40 92 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      {/* the two extremes from Section 1, and the ground between them */}
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 250 110 H 830" stroke={INK} sw={2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 4.2)} d="M 420 110 H 660" stroke={GREEN} sw={7} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 4.8)}>
        <Circle cx={250} cy={110} r={5} fill={RED} />
        <Circle cx={830} cy={110} r={5} fill={RED} />
        <T x={250} y={130} size={11.5} fill={MUTED} weight={700}>
          {t("one extreme", "ek extreme")}
        </T>
        <T x={830} y={130} size={11.5} fill={MUTED} weight={700}>
          {t("the other extreme", "doosra extreme")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.6)}>
        <T x={540} y={130} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("the interesting relations live here",
             "interesting relations yahin rehte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — ① reflexive, the self-loop ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={156} size={14} fill={RED} weight={800} anchor="start">
          {t("① REFLEXIVE — the self-loop", "① REFLEXIVE — self-loop")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={40} y={176} size={12} fill={MUTED} weight={700} anchor="start">
          {t("does every element relate to itself?",
             "kya har element khud se relate karta hai?")}
        </T>
      </Fade>
      {R_TRI.map(([x, y], i) => (
        <Fade key={`rn${i}`} on={beat >= 1} delay={dl(1, 1.8 + i * 0.22)}>
          <Circle cx={x} cy={y} r={15} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 4.6} size={13} fill={INK} weight={800}>{["a", "b", "c"][i]}</T>
        </Fade>
      ))}
      {R_TRI.map(([x, y], i) => (
        <Draw key={`rl${i}`} on={beat >= 1} delay={dl(1, 2.8 + i * 0.35)}
          d={loopA(x, y, 23, 10, R_LOOP[i])} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={40} y={324} size={12.5} fill={INK} weight={700} anchor="start">
          {t("“is in the same class as” passes:",
             "“is in the same class as” pass hota hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={40} y={346} size={12.5} fill={INK} weight={700} anchor="start">
          {t("you are in your own class", "tum khud ki hi class mein ho")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the formal reflexive condition ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={40} y={372} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          (a,a) ∈ R  for every a ∈ A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={40} y={394} size={12} fill={RED} weight={800} anchor="start">
          {t("miss one self-loop → not reflexive",
             "ek bhi self-loop missing → reflexive nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — ② symmetric, the two-way street ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={372} y={156} size={14} fill={RED} weight={800} anchor="start">
          {t("② SYMMETRIC — the two-way street", "② SYMMETRIC — two-way street")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={372} y={176} size={12} fill={MUTED} weight={700} anchor="start">
          {t("if a → b, does b → a come free?", "agar a → b, to kya b → a bhi hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <Circle cx={460} cy={250} r={18} fill={CREAM} stroke={INK} strokeWidth={1.9} />
        <T x={460} y={255.5} size={15} fill={INK} weight={800}>a</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Circle cx={612} cy={250} r={18} fill={CREAM} stroke={INK} strokeWidth={1.9} />
        <T x={612} y={255.5} size={15} fill={INK} weight={800}>b</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arcA(478, 250, 594, 250, 22)}
        stroke={AMBER_DARK} sw={2.5} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={arcA(594, 250, 478, 250, 22)}
        stroke={AMBER_DARK} sw={2.5} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={372} y={324} size={12.5} fill={INK} weight={700} anchor="start">
          {t("“is a neighbour of” is symmetric",
             "“is a neighbour of” symmetric hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={372} y={346} size={12.5} fill={INK} weight={700} anchor="start">
          {t("b is a neighbour of a too", "b bhi a ka neighbour hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the formal symmetric condition ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={372} y={372} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          (a,b) ∈ R  ⇒  (b,a) ∈ R
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={372} y={394} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the reverse pair must be there too",
             "reverse pair bhi hona hi chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — ③ transitive, the chain and the shortcut ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={722} y={156} size={14} fill={RED} weight={800} anchor="start">
          {t("③ TRANSITIVE — the chain or shortcut", "③ TRANSITIVE — chain ya shortcut")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={722} y={176} size={12} fill={MUTED} weight={700} anchor="start">
          {t("a → b and b → c: must a → c exist?",
             "a → b aur b → c: kya a → c zaroori hai?")}
        </T>
      </Fade>
      {[TA, TB, TC].map(([x, y], i) => (
        <Fade key={`tn${i}`} on={beat >= 5} delay={dl(5, 1.8 + i * 0.22)}>
          <Circle cx={x} cy={y} r={17} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{["a", "b", "c"][i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d={edgeA(TA[0], TA[1], TB[0], TB[1], 20, 23)}
        stroke={AMBER_DARK} sw={2.5} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 3.3)} d={edgeA(TB[0], TB[1], TC[0], TC[1], 20, 23)}
        stroke={AMBER_DARK} sw={2.5} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d={arcA(777, 220, 989, 220, -26)}
        stroke={RED} sw={2.8} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={722} y={324} size={12.5} fill={INK} weight={700} anchor="start">
          {t("“lives in the same city as” is transitive",
             "“lives in the same city as” transitive hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.8)}>
        <T x={722} y={346} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the red shortcut a → c must exist",
             "red shortcut a → c hona hi chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the formal transitive condition ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={722} y={372} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          (a,b) ∈ R, (b,c) ∈ R ⇒ (a,c) ∈ R
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={722} y={394} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the chain must close into a shortcut",
             "chain ko shortcut mein band hona hi hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the antisymmetric look-alike ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 408 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={40} y={432} size={14} fill={RED} weight={800} anchor="start">
          {t("LOOK-ALIKE — ANTISYMMETRIC", "LOOK-ALIKE — ANTISYMMETRIC")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Circle cx={120} cy={500} r={18} fill={CREAM} stroke={INK} strokeWidth={1.9} />
        <T x={120} y={505.5} size={15} fill={INK} weight={800}>a</T>
        <Circle cx={250} cy={500} r={18} fill={CREAM} stroke={INK} strokeWidth={1.9} />
        <T x={250} y={505.5} size={15} fill={INK} weight={800}>b</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2)} d={arcA(138, 500, 232, 500, 20)}
        stroke={AMBER_DARK} sw={2.5} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d={arcA(232, 500, 138, 500, 20)}
        stroke={AMBER_DARK} sw={2.5} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={185} y={462} size={12} fill={MUTED} weight={700}>
          {t("both ways present", "dono taraf present")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.6)} d={arrowD(280, 500, 340, 500)}
        stroke={GREEN_DARK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <Circle cx={392} cy={500} r={20} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={392} y={505} size={13} fill={GREEN_DARK} weight={900}>a = b</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={40} y={552} size={12.5} fill={INK} weight={700} anchor="start">
          {t("both (a,b) and (b,a) present ⇒ a = b",
             "dono (a,b) aur (b,a) present ⇒ a = b")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={40} y={576} size={12.5} fill={RED} weight={800} anchor="start">
          {t("a different idea — NOT the opposite of symmetric",
             "bilkul alag idea — symmetric ka ulta nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — all three signatures on one tiny set ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={545} y={432} size={14} fill={RED} weight={800} anchor="start">
          {t("ALL THREE AT ONCE on A = {a, b, c}",
             "TEENON EK SAATH — A = {a, b, c} par")}
        </T>
      </Fade>
      {[EA, EB, EC].map(([x, y], i) => (
        <Fade key={`en${i}`} on={beat >= 8} delay={dl(8, 0.8 + i * 0.2)}>
          <Circle cx={x} cy={y} r={17} fill={CREAM} stroke={INK} strokeWidth={1.9} />
          <T x={x} y={y + 5} size={14} fill={INK} weight={800}>{["a", "b", "c"][i]}</T>
        </Fade>
      ))}
      {/* reflexive: one self-loop on every node */}
      <Draw on={beat >= 8} delay={dl(8, 1.6)} d={loopA(EA[0], EA[1], 25, 11, 180)}
        stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 1.9)} d={loopA(EB[0], EB[1], 25, 11, 0)}
        stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 2.2)} d={loopA(EC[0], EC[1], 25, 11, 90)}
        stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      {/* symmetric: the matched pair of reverse arcs between a and b */}
      <Draw on={beat >= 8} delay={dl(8, 2.8)} d={arcA(637, 478, 763, 478, 16)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 3.2)} d={arcA(763, 478, 637, 478, 16)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      {/* symmetric: the chain b → c carries its matched reverse c → b too */}
      <Draw on={beat >= 8} delay={dl(8, 3.7)} d={arcA(BCx1, BCy1, BCx2, BCy2, 12)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 4)} d={arcA(BCx2, BCy2, BCx1, BCy1, 12)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      {/* the red shortcut a → c that closes the chain, and its matched reverse */}
      <Draw on={beat >= 8} delay={dl(8, 4.3)} d={arcA(SCx1, SCy1, SCx2, SCy2, 20)}
        stroke={RED} sw={2.6} dur={0.6} />
      <Draw on={beat >= 8} delay={dl(8, 4.7)} d={arcA(SCx2, SCy2, SCx1, SCy1, 12)}
        stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 5.2)}>
        <T x={850} y={478} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("self-loops → reflexive", "self-loops → reflexive")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6.2)}>
        <T x={850} y={502} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("matched reverse → symmetric", "matched reverse → symmetric")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7.2)}>
        <T x={850} y={526} size={12.5} fill={RED} weight={800} anchor="start">
          {t("red shortcut → transitive", "red shortcut → transitive")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8.4)}>
        <T x={850} y={552} size={12} fill={MUTED} weight={700} anchor="start">
          {t("one set, all three traits", "ek hi set, teenon traits")}
        </T>
      </Fade>
    </Scene>
  );
}

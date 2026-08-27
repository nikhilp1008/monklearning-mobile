/**
 * P12Ch05 · Section 37 — "Reading a hysteresis loop"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: a Langevin-style derivation of Curie's law —
 * mB against k_B T, the small-x expansion, M = Nm²B/3k_BT and χ = C/T. The
 * voice never mentions any of it here.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: how to READ the B–H loop. Why it is a
 * loop at all (the path out is not the path home), how it is produced, and its
 * four features — saturation, retentivity, coercivity and, the one students
 * miss, the enclosed AREA as energy dissipated per unit volume per cycle. It
 * closes with the rubber-band stress–strain analogy.
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 14.4, 29.2, 48.6, 66.0, 86.6,
 * 102.4, 130.7):
 *   0  "the loop is how we describe it"        title + subtitle
 *   1  "here is the loop … path out ≠ home"    axes + both branches + direction arrows
 *   2  "cycle H up and down and plot B"        the recipe note; history ⇒ hysteresis
 *   3  "saturation is the first"               B_s plateau lines + note
 *   4  "retentivity — B left when H is zero"   B_r point on the B axis + note
 *   5  "coercivity — the reverse field"        H_c point on the H axis + note
 *   6  "the enclosed area"                     the loop is shaded; energy density note
 *   7  "borrow the rubber band analogy"        stress–strain loop + caption
 */

import React from "react";
import { Circle, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- B–H loop frame -------------------------------------------------- */
const CX = 370, CY = 300, HMAX = 250, BS = 130, HC = 50, WD = 45;

const bOf = (h: number, s: 1 | -1) => BS * Math.tanh((h + s * HC) / WD);

function branchD(s: 1 | -1, from: number, to: number, n = 72): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const h = from + ((to - from) * i) / n;
    pts.push(`${i === 0 ? "M" : "L"} ${(CX + h).toFixed(1)} ${(CY - bOf(h, s)).toFixed(1)}`);
  }
  return pts.join(" ");
}

const UPPER = branchD(1, HMAX, -HMAX);    // H decreasing — the way home is higher
const LOWER = branchD(-1, -HMAX, HMAX);   // H increasing — the way out is lower
const LOOP_FILL = `${UPPER} ${branchD(-1, -HMAX, HMAX).replace("M", "L")} Z`;

const BR = CY - bOf(0, 1);                // retentivity point on the B axis

export default function P12Ch05Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Reading the hysteresis loop", "Hysteresis loop kaise padhein")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)}
        d="M 344 58 C 440 54, 620 62, 736 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("a ferromagnet stops being one number — the loop is the description instead",
             "ferromagnet ek number nahi rehta — uski jagah yeh loop hi description hai")}
        </T>
      </Fade>

      {/* ── beat 6 (drawn first so the shading sits UNDER the curves) ── */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Path d={LOOP_FILL} fill={CREAM} stroke="none" />
      </Fade>

      {/* ── beat 1 — axes and the loop itself ──────────────────────── */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} dur={0.7} d={arrowD(100, CY, 664, CY)} stroke={INK} sw={2} />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} dur={0.7} d={arrowD(CX, 466, CX, 146)} stroke={INK} sw={2} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={672} y={322} size={14} fill={INK} weight={800} anchor="start">H</T>
        <T x={382} y={156} size={14} fill={INK} weight={800} anchor="start">B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} dur={1.6} d={UPPER} stroke={RED} sw={2.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} dur={1.6} d={LOWER} stroke={RED} sw={2.8} />
      <Draw on={beat >= 1} delay={dl(1, 4.1)} dur={0.4} d={arrowD(390, 181, 350, 224)} stroke={RED} sw={2.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.3)} dur={0.4} d={arrowD(350, 419, 390, 376)} stroke={RED} sw={2.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.7)}>
        <T x={150} y={492} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the path out is not the path home", "jaate waqt ka raasta wapas ka raasta nahi hai")}
        </T>
      </Fade>

      {/* ── beat 2 — what you actually do ──────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={700} y={110} size={13.5} fill={RED} weight={800} anchor="start">
          {t("HOW THE CURVE IS PRODUCED", "YEH CURVE BANTA KAISE HAI")}
        </T>
        <T x={700} y={130} size={12.5} fill={INK} weight={700} anchor="start">
          {t("cycle H up and down, plot B against it", "H ko upar-neeche cycle karo, B plot karo")}
        </T>
        <T x={700} y={148} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the response depends on history — that is hysteresis",
             "response history par nirbhar hai — yahi hysteresis hai")}
        </T>
      </Fade>

      {/* ── beat 3 — saturation ────────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Line x1={CX} y1={CY - BS} x2={628} y2={CY - BS} stroke={AMBER_DARK} strokeWidth={1.6} strokeDasharray="6 5" />
        <Line x1={CX} y1={CY + BS} x2={112} y2={CY + BS} stroke={AMBER_DARK} strokeWidth={1.6} strokeDasharray="6 5" />
        <T x={540} y={162} size={13} fill={AMBER_DARK} weight={800}>+B_s</T>
        <T x={200} y={450} size={13} fill={AMBER_DARK} weight={800}>−B_s</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={700} y={186} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("① SATURATION  B_s", "① SATURATION  B_s")}
        </T>
        <T x={700} y={206} size={12.5} fill={INK} weight={700} anchor="start">
          {t("B stops climbing with H and levels off", "B, H ke saath badhna band kar deta hai")}
        </T>
        <T x={700} y={224} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("every domain is aligned — nothing left to align",
             "har domain align ho chuka — align karne ko kuch bacha nahi")}
        </T>
      </Fade>

      {/* ── beat 4 — retentivity ───────────────────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={CX} cy={BR} r={6} fill={GREEN_DARK} />
        <T x={356} y={BR - 6} size={13} fill={GREEN_DARK} weight={900} anchor="end">B_r</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={700} y={262} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("② RETENTIVITY  (remanence)", "② RETENTIVITY  (remanence)")}
        </T>
        <T x={700} y={282} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the B left behind when H is back at zero", "H ko zero par laane ke baad bacha hua B")}
        </T>
        <T x={700} y={300} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("cause removed, effect remains — a permanent magnet",
             "kaaran hata, asar baaki — yahi permanent magnet hai")}
        </T>
      </Fade>

      {/* ── beat 5 — coercivity ────────────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={CX - HC} cy={CY} r={6} fill={AMBER_DARK} />
        <Line x1={314} y1={297} x2={266} y2={288} stroke={AMBER_DARK} strokeWidth={1.5} />
        <T x={260} y={292} size={13} fill={AMBER_DARK} weight={900} anchor="end">H_c</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={700} y={338} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("③ COERCIVITY  H_c", "③ COERCIVITY  H_c")}
        </T>
        <T x={700} y={358} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the reverse H that drives B back to zero", "ulta H jo B ko zero par le aata hai")}
        </T>
        <T x={700} y={376} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("how stubbornly it clings to its magnetisation",
             "apni magnetisation ko kitni zid se pakde rehta hai")}
        </T>
      </Fade>

      {/* ── beat 6 — the enclosed area ─────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={CX} y={294} size={13} fill={AMBER_DARK} weight={900}>AREA</T>
        <T x={CX} y={314} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("= heat per cycle", "= har cycle ki heat")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={700} y={414} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ THE ENCLOSED AREA", "④ GHERA HUA AREA")}
        </T>
        <T x={700} y={434} size={12.5} fill={INK} weight={700} anchor="start">
          {t("energy dissipated per unit volume", "har unit volume mein kharch hui energy")}
        </T>
        <T x={700} y={452} size={12.5} fill={INK} weight={700} anchor="start">
          {t("per cycle, lost as heat", "har cycle mein, heat ban kar")}
        </T>
        <T x={700} y={472} size={12.5} fill={RED} weight={800} anchor="start">
          {t("not an intercept (B_r, H_c), not a slope (μ)",
             "na intercept (B_r, H_c), na slope (μ)")}
        </T>
      </Fade>

      {/* ── beat 7 — the rubber band analogy ───────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.5} d={arrowD(120, 586, 286, 586)} stroke={INK_LIGHT} sw={1.8} />
      <Draw on={beat >= 7} delay={dl(7, 0.3)} dur={0.5} d={arrowD(120, 586, 120, 508)} stroke={INK_LIGHT} sw={1.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Path
          d="M 132 578 C 168 552, 206 536, 268 516 C 224 548, 178 566, 132 578 Z"
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={112} y={512} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">stress</T>
        <T x={292} y={590} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">strain</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={360} y={534} size={13} fill={INK} weight={700} anchor="start">
          {t("Stretch a rubber band and let it relax: its stress–strain curve traces a loop too,",
             "Rubber band ko kheencho aur chhodo: uska stress–strain curve bhi loop banata hai,")}
        </T>
        <T x={360} y={558} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("and that area is again energy lost as heat.",
             "aur wahi area phir se heat mein gayi energy hai.")}
        </T>
        <T x={360} y={582} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("Completely different physics underneath — exactly the same bookkeeping.",
             "Andar ki physics bilkul alag — hisaab-kitaab bilkul wahi.")}
        </T>
      </Fade>
    </Scene>
  );
}

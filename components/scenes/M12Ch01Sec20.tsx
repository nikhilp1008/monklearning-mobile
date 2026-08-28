/**
 * M12Ch01 · Section 20 — "Inverse: the undo button"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice opens on control Z, defines f⁻¹ by a ↦ b ↦ a, writes the two
 * identity conditions, then spends three beats on WHY invertibility needs
 * bijectivity (many-one breaks the undo, not-onto leaves an orphan), and
 * closes on the reflection across y = x.
 *
 * So the board draws: a real Ctrl-Z key with a before/after pair and an
 * undo arrow, a real two-set diagram with the forward and backward arrows,
 * the failure of many-one shown with the exact numbers the voice speaks
 * (2, −2, 4), the failure of onto shown as a target dot nothing points at,
 * and a genuine graph — axes, the mirror line y = x, a curve f, its exact
 * point-by-point reflection f⁻¹, and two perpendicular tie-lines whose
 * midpoints land on the mirror.
 *
 * Grid:
 *   header  y 30..100
 *   BAND A  y 108..312   left  x 40..380   the Ctrl-Z picture   (beat 0)
 *                        right x 460..1044 the two sets + the identities
 *                                          (beats 1, 2, 3)
 *   BAND B  y 318..596   left  x 40..660   why bijective        (beats 4,5,6)
 *                        right x 670..1044 the reflection graph (beat 7)
 *
 * Beat map (8 segments, gates 0..7 — every gate used):
 *  0  "press control Z"              key + start/changed cards + undo arrow
 *  1  "f: a ↦ b, f⁻¹: b ↦ a"         sets A and B, the dots a and b, the
 *                                    forward AMBER arrow and the backward
 *                                    GREEN arrow
 *  2  "both composites are identity" f⁻¹ ∘ f = I and f ∘ f⁻¹ = I
 *  3  "composition and inverse meet" the defining sentence, underlined
 *  4  "f must be bijective"          one-one + onto chips ⇒ invertible
 *  5  "many-one breaks the undo"     2 and −2 both mapping to 4, f⁻¹(4) = ?
 *  6  "not onto leaves an orphan"    two sets, a codomain dot with no arrow
 *  7  "mirror across y = x"          axes, y = x, f, f⁻¹ and the tie-lines
 *
 * Visual vocabulary (shared with Sections 19 and 21):
 *   f — AMBER_DARK · f⁻¹ and results — GREEN_DARK · headings and failures —
 *   RED · axes, dots and frames — INK · the mirror line — MUTED.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

/* ---- the graph frame for beat 7: origin (720, 566), 26 px per unit ---- */
const GX0 = 720;
const GY0 = 566;
const GS = 26;
const gx = (u: number) => GX0 + GS * u;
const gy = (v: number) => GY0 - GS * v;
/** a nameless increasing curve sitting above y = x on 0 ≤ u ≤ 4 */
const fv = (u: number) => 1.4 + 2 * Math.sqrt(u);

function polyline(pts: [number, number][]): string {
  return `M ${pts.map(([a, b]) => `${a.toFixed(1)} ${b.toFixed(1)}`).join(" L ")}`;
}
const SAMPLES: number[] = Array.from({ length: 25 }, (_, i) => (i * 4) / 24);
/** f itself */
const F_D = polyline(SAMPLES.map((u) => [gx(u), gy(fv(u))]));
/** its reflection: plotting (v, u) instead of (u, v) IS the mirror in y = x */
const FINV_D = polyline(SAMPLES.map((u) => [gx(fv(u)), gy(u)]));

/** the two tie-lines, each perpendicular to y = x with its midpoint on it */
const TIES: [number, number][] = [2, 4].map((u) => [u, fv(u)]) as [number, number][];

export default function M12Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title and the control-Z picture ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Inverse — the undo button", "Inverse — undo button")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 390 62 C 490 58, 600 66, 690 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("control Z for functions — and it only exists when f is bijective",
             "functions ka control Z — aur yeh tabhi hota hai jab f bijective ho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={40} y={126} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  press control Z — the last action is reversed",
             "①  control Z dabao — last action reverse ho jaata hai")}
        </T>
      </Fade>

      {/* the key */}
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 44 164 H 140 V 206 H 44 Z"
        stroke={INK} sw={2.4} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={92} y={192} size={18} fill={INK} weight={900}>Ctrl Z</T>
      </Fade>

      {/* before / after cards */}
      <Draw on={beat >= 0} delay={dl(0, 5.2)} d="M 176 164 H 252 V 206 H 176 Z"
        stroke={GREEN_DARK} sw={2} dur={0.5} fill={PAPER} />
      <Fade on={beat >= 0} delay={dl(0, 5.7)}>
        <T x={214} y={191} size={13} fill={GREEN_DARK} weight={800}>
          {t("start", "start")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 6.1)} d="M 300 164 H 376 V 206 H 300 Z"
        stroke={AMBER_DARK} sw={2} dur={0.5} fill={PAPER} />
      <Fade on={beat >= 0} delay={dl(0, 6.6)}>
        <T x={338} y={191} size={13} fill={AMBER_DARK} weight={800}>
          {t("changed", "badla hua")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 7)} d={arrowD(256, 176, 296, 176)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 7.3)}>
        <T x={276} y={154} size={11.5} fill={AMBER_DARK} weight={800}>
          {t("action", "action")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 7.7)} d={arrowD(296, 194, 256, 194)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={276} y={222} size={11.5} fill={GREEN_DARK} weight={800}>undo</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8.6)}>
        <T x={40} y={250} size={12.5} fill={INK} weight={700} anchor="start">
          {t("undo reverses it perfectly —",
             "undo use perfectly reverse kar deta hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9.2)}>
        <T x={40} y={274} size={12.5} fill={INK} weight={700} anchor="start">
          {t("you land exactly where you started",
             "tum theek wahin wapas aa jaate ho jahan se shuru kiya tha")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — f: a ↦ b and f⁻¹: b ↦ a ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={460} y={126} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  if f sends a to b, f⁻¹ sends b straight back to a",
             "②  agar f, a ko b pe bhejta hai, to f⁻¹, b ko seedha wapas a pe")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)}
        d="M 508 206 A 52 44 0 1 1 612 206 A 52 44 0 1 1 508 206" stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)}
        d="M 738 206 A 52 44 0 1 1 842 206 A 52 44 0 1 1 738 206" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={560} y={150} size={14} fill={INK} weight={900}>A</T>
        <T x={790} y={150} size={14} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Circle cx={560} cy={206} r={5} fill={INK} />
        <T x={538} y={211} size={14} fill={INK} weight={900} anchor="end">a</T>
        <Circle cx={790} cy={206} r={5} fill={INK} />
        <T x={812} y={211} size={14} fill={INK} weight={900} anchor="start">b</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={arrowD(568, 200, 782, 200)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={675} y={186} size={15} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={arrowD(782, 216, 568, 216)} stroke={GREEN_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.1)}>
        <T x={675} y={240} size={15} fill={GREEN_DARK} weight={900}>f⁻¹</T>
      </Fade>

      {/* ═══════════ beat 2 — the two identity conditions ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={470} y={278} size={17} fill={GREEN_DARK} weight={900} anchor="start">f⁻¹ ∘ f  =  I</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={640} y={278} size={17} fill={GREEN_DARK} weight={900} anchor="start">f ∘ f⁻¹  =  I</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={810} y={278} size={12} fill={MUTED} weight={700} anchor="start">
          {t("I = the do-nothing function", "I = do-nothing function")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — composition and inverse meet here ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={460} y={306} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the inverse is DEFINED as what composes with f to give do-nothing",
             "inverse wahi cheez hai jo f ke saath compose karke do-nothing deti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — f must be bijective ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={40} y={328} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  not every f has an inverse — f must be BIJECTIVE",
             "③  har f ka inverse nahin — f BIJECTIVE hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Chip x={44} y={344} w={168} h={36} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          one-one (injective)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={226} y={368} size={18} fill={GREEN_DARK} weight={900} anchor="start">+</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Chip x={240} y={344} w={178} h={36} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          onto (surjective)
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={436} y={368} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          {t("⇒ f is invertible", "⇒ f invertible hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — many-one breaks the undo ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={40} y={412} size={13} fill={RED} weight={800} anchor="start">
          {t("④  many-one? then f⁻¹(4) cannot decide",
             "④  many-one? to f⁻¹(4) decide nahin kar paata")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Circle cx={100} cy={442} r={5} fill={INK} />
        <T x={86} y={447} size={14} fill={INK} weight={900} anchor="end">2</T>
        <Circle cx={100} cy={478} r={5} fill={INK} />
        <T x={86} y={483} size={14} fill={INK} weight={900} anchor="end">−2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={arrowD(110, 443, 218, 458)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2)} d={arrowD(110, 477, 218, 462)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Circle cx={230} cy={460} r={5} fill={INK} />
        <T x={246} y={465} size={14} fill={INK} weight={900} anchor="start">4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={286} y={452} size={14} fill={RED} weight={900} anchor="start">
          {t("f⁻¹(4) = 2  or  −2 ?", "f⁻¹(4) = 2 ya −2 ?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={286} y={480} size={12} fill={RED} weight={800} anchor="start">
          {t("ambiguous → no undo", "ambiguous → undo nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — not onto leaves an orphan ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={40} y={522} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤  not onto? a target with no input to return to",
             "⑤  onto nahin? kisi target ke paas lautne ko input nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)}
        d="M 68 562 A 42 30 0 1 1 152 562 A 42 30 0 1 1 68 562" stroke={INK} sw={1.9} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)}
        d="M 208 562 A 42 30 0 1 1 292 562 A 42 30 0 1 1 208 562" stroke={INK} sw={1.9} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Circle cx={110} cy={550} r={5} fill={INK} />
        <Circle cx={110} cy={574} r={5} fill={INK} />
        <Circle cx={250} cy={546} r={5} fill={INK} />
        <Circle cx={250} cy={566} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d={arrowD(120, 551, 238, 547)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d={arrowD(120, 573, 238, 567)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <Circle cx={250} cy={584} r={5} fill={RED} />
        <T x={300} y={589} size={11.5} fill={RED} weight={800} anchor="start">
          {t("nothing maps here", "yahan kuch map nahin hota")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={420} y={548} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("f is invertible ⟺ f is bijective", "f invertible hai ⟺ f bijective hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.4)}>
        <T x={420} y={574} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("the bridge from the previous subtopic", "pichhle subtopic se seedha bridge")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the mirror across y = x ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <T x={670} y={328} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑥  f⁻¹ is the mirror image of f across y = x",
             "⑥  f⁻¹, f ka mirror image hai line y = x ke across")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={arrowD(700, GY0, 1020, GY0)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.7)} d={arrowD(GX0, 576, GX0, 350)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={1028} y={571} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={712} y={350} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={`M ${GX0} ${GY0} L ${gx(7.6).toFixed(1)} ${gy(7.6).toFixed(1)}`}
        stroke={MUTED} sw={2} dur={0.45} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={930} y={372} size={12.5} fill={MUTED} weight={800} anchor="start">y = x</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={F_D} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={832} y={416} size={14} fill={AMBER_DARK} weight={900} anchor="start">f</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2)} d={FINV_D} stroke={GREEN_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={868} y={474} size={14} fill={GREEN_DARK} weight={900} anchor="start">f⁻¹</T>
      </Fade>
      {TIES.map(([u, v], i) => (
        <Draw key={`tie${u}`} on={beat >= 7} delay={dl(7, 2.6 + i * 0.2)}
          d={`M ${gx(u).toFixed(1)} ${gy(v).toFixed(1)} L ${gx(v).toFixed(1)} ${gy(u).toFixed(1)}`}
          stroke={MUTED} sw={1.6} dur={0.3} />
      ))}
      {TIES.map(([u, v], i) => (
        <Fade key={`dot${u}`} on={beat >= 7} delay={dl(7, 2.8 + i * 0.2)}>
          <Circle cx={gx(u)} cy={gy(v)} r={4} fill={AMBER_DARK} />
          <Circle cx={gx(v)} cy={gy(u)} r={4} fill={GREEN_DARK} />
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={670} y={592} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("every point (a, b) on f becomes (b, a) on f⁻¹",
             "f ka har point (a, b), f⁻¹ pe (b, a) ban jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}

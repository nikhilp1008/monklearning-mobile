/**
 * P12Ch05 · Section 41 — "Curie's law: susceptibility against temperature"
 * Subtopic: Magnetic Properties of Materials
 *
 * BOARD REWRITTEN (2026-08-21) — VERDICT: DRIFT.
 *
 * WHAT THE BOARD USED TO SHOW: an iron-core solenoid numerical — H = nI = 2000
 * A/m, M = 9.98 × 10⁵ A/m, B = 1.257 T and P_loss = 5.0 W. The voice works a
 * completely different problem and never mentions a solenoid or a power loss.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: a paramagnetic salt with χ₁ = 4.0 × 10⁻³
 * at T₁ = 300 K. (a) χ at 200 K, (b) the T at which χ falls to 2.0 × 10⁻³.
 * Everything printed here is recomputed from those spoken givens:
 *     χ T = constant  ⇒  χ₂ = χ₁ T₁ / T₂ = 4.0 × 10⁻³ × 300/200 = 6.0 × 10⁻³
 *                      ⇒  T₂ = T₁ χ₁ / χ₂ = 300 × 4.0/2.0       = 600 K
 * All three points obey χT = 1.2 K, so they genuinely lie on one hyperbola:
 *     200 × 6.0 = 300 × 4.0 = 600 × 2.0 = 1200 (in 10⁻³ K).
 *
 * BEAT MAP (8 segments → gates 0..7; reveals 0, 14.7, 31.3, 50.7, 68.5, 88.0,
 * 105.7, 124.9):
 *   0  "which way the proportionality runs"    title + subtitle
 *   1  "the curve puts the problem in front"   axes + 1/T hyperbola + 3 markers
 *   2  "4.0 × 10⁻³ at 300 K; find …"           givens box + the known point
 *   3  "chi one T one equals chi two T two"    the law, in its useful form
 *   4  "part a — 4.0e−3 × 300/200 = 6.0e−3"    part (a) + the 200 K point filled
 *   5  "check the direction — colder, higher"  the arrow on the curve
 *   6  "part b — chi halved, T doubles"        part (b) + the 600 K point filled
 *   7  "the common slip is chi ∝ T"            the crossed-out rising line
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- χ–T frame: T = 0 at x 130, 0.7714 px/K · χ = 0 at y 410, 37.5 px per 10⁻³ */
const px = (T: number) => 130 + T * (540 / 700);
const py = (chiMilli: number) => 410 - chiMilli * 37.5;

const CURVE = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const T = 160 + (540 * i) / 80;
    pts.push(`${i === 0 ? "M" : "L"} ${px(T).toFixed(1)} ${py(1200 / T).toFixed(1)}`);
  }
  return pts.join(" ");
})();

export default function P12Ch05Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const P300 = { x: px(300), y: py(4) };
  const P200 = { x: px(200), y: py(6) };
  const P600 = { x: px(600), y: py(2) };

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Curie's law: which way does it run?", "Curie's law: proportionality kis taraf?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 300 58 C 440 54, 640 62, 780 56" stroke={RED} sw={2.2} dur={0.55} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("get the direction right and both parts are one line each",
             "direction sahi pakad lo to dono parts ek-ek line ke hain")}
        </T>
      </Fade>

      {/* ── beat 1 — the curve ─────────────────────────────────────── */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} dur={0.6} d={arrowD(110, 410, 694, 410)} stroke={INK} sw={2} />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} dur={0.6} d={arrowD(130, 430, 130, 100)} stroke={INK} sw={2} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={700} y={432} size={12.5} fill={INK} weight={800} anchor="start">T (K)</T>
        <T x={140} y={110} size={12.5} fill={INK} weight={800} anchor="start">χ  ( × 10⁻³ )</T>
      </Fade>
      {[2, 4, 6].map((c) => (
        <Fade key={c} on={beat >= 1} delay={dl(1, 1.0)}>
          <Line x1={124} y1={py(c)} x2={136} y2={py(c)} stroke={INK_LIGHT} strokeWidth={1.6} />
          <T x={118} y={py(c) + 5} size={12.5} fill={INK_LIGHT} weight={700} anchor="end">{c}.0</T>
        </Fade>
      ))}
      {[200, 300, 600].map((T0) => (
        <Fade key={T0} on={beat >= 1} delay={dl(1, 1.2)}>
          <Line x1={px(T0)} y1={404} x2={px(T0)} y2={416} stroke={INK_LIGHT} strokeWidth={1.6} />
          <T x={px(T0)} y={432} size={12.5} fill={INK_LIGHT} weight={700}>{T0}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.5)} dur={1.6} d={CURVE} stroke={GREEN_DARK} sw={2.8} />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Circle cx={P200.x} cy={P200.y} r={7} fill="#FFFEFB" stroke={AMBER_DARK} strokeWidth={2.2} />
        <Circle cx={P300.x} cy={P300.y} r={7} fill="#FFFEFB" stroke={INK} strokeWidth={2.2} />
        <Circle cx={P600.x} cy={P600.y} r={7} fill="#FFFEFB" stroke={AMBER_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={430} y={150} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("χ falls as T rises — a 1/T hyperbola", "T badhne par χ girta — 1/T hyperbola")}
        </T>
      </Fade>

      {/* ── beat 2 — the givens, and the known point ───────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={716} y={100} width={324} height={112} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <T x={732} y={126} size={13.5} fill={RED} weight={900} anchor="start">GIVEN</T>
        <T x={732} y={150} size={13} fill={INK} weight={700} anchor="start">
          {t("a paramagnetic salt", "ek paramagnetic salt")}
        </T>
        <T x={732} y={174} size={14} fill={INK} weight={900} anchor="start">χ₁ = 4.0 × 10⁻³  at  T₁ = 300 K</T>
        <T x={732} y={198} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("find χ at 200 K, and T where χ = 2.0 × 10⁻³",
             "200 K par χ, aur wo T jahan χ = 2.0 × 10⁻³")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Line x1={130} y1={P300.y} x2={P300.x} y2={P300.y} stroke={INK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Line x1={P300.x} y1={410} x2={P300.x} y2={P300.y} stroke={INK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Circle cx={P300.x} cy={P300.y} r={7} fill={INK} />
        <T x={P300.x + 14} y={P300.y - 10} size={12.5} fill={INK} weight={800} anchor="start">
          300 K · 4.0 × 10⁻³
        </T>
      </Fade>

      {/* ── beat 3 — the law ───────────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={716} y={250} size={13.5} fill={RED} weight={800} anchor="start">
          {t("CURIE'S LAW", "CURIE'S LAW")}
        </T>
        <T x={716} y={276} size={16} fill={INK} weight={900} anchor="start">χ  ∝  1 / T</T>
        <T x={716} y={302} size={16} fill={GREEN_DARK} weight={900} anchor="start">⇒  χ₁ T₁ = χ₂ T₂</T>
      </Fade>

      {/* ── beat 4 — part (a) ──────────────────────────────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={716} y={344} size={14} fill={INK} weight={900} anchor="start">(a)  χ₂ = χ₁ T₁ / T₂</T>
        <T x={716} y={368} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          = 4.0 × 10⁻³ × (300 / 200)
        </T>
        <T x={716} y={392} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          = 4.0 × 10⁻³ × 1.5 = 6.0 × 10⁻³
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Line x1={130} y1={P200.y} x2={P200.x} y2={P200.y} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Line x1={P200.x} y1={410} x2={P200.x} y2={P200.y} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Circle cx={P200.x} cy={P200.y} r={7} fill={AMBER_DARK} />
        <T x={P200.x + 14} y={P200.y - 8} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          200 K · 6.0 × 10⁻³
        </T>
      </Fade>

      {/* ── beat 5 — the direction check ───────────────────────────── */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} dur={0.6}
        d={arrowD(P300.x - 8, P300.y - 8, P200.x + 8, P200.y + 8)} stroke={RED} sw={2.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={186} y={212} size={12.5} fill={RED} weight={800} anchor="start">
          {t("cooled 300 → 200 K and χ went UP ✓", "300 → 200 K thanda kiya aur χ BADHA ✓")}
        </T>
        <T x={186} y={232} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("less thermal jostling ⇒ the field aligns the moments better",
             "kam thermal hulchul ⇒ field moments ko behtar align karta hai")}
        </T>
      </Fade>

      {/* ── beat 6 — part (b) ──────────────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={716} y={422} size={14} fill={INK} weight={900} anchor="start">(b)  T₂ = T₁ χ₁ / χ₂</T>
        <T x={716} y={446} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          = 300 × (4.0 / 2.0)
        </T>
        <T x={716} y={470} size={14} fill={GREEN_DARK} weight={900} anchor="start">= 300 × 2 = 600 K</T>
        <T x={716} y={494} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("χ is halved, so T must double", "χ aadha hua, to T dugna hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Line x1={130} y1={P600.y} x2={P600.x} y2={P600.y} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Line x1={P600.x} y1={410} x2={P600.x} y2={P600.y} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="5 5" />
        <Circle cx={P600.x} cy={P600.y} r={7} fill={AMBER_DARK} />
        <T x={P600.x - 14} y={P600.y + 24} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">
          600 K · 2.0 × 10⁻³
        </T>
      </Fade>

      {/* ── beat 7 — the common slip ───────────────────────────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} dur={0.4} d={arrowD(140, 566, 300, 566)} stroke={INK_LIGHT} sw={1.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.3)} dur={0.4} d={arrowD(140, 566, 140, 486)} stroke={INK_LIGHT} sw={1.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} dur={0.5} d="M 152 558 L 288 496" stroke={MUTED} sw={2.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={134} y={482} size={12} fill={INK_LIGHT} weight={700} anchor="end">χ</T>
        <T x={306} y={570} size={12} fill={INK_LIGHT} weight={700} anchor="start">T</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} dur={0.5} d={crossD(152, 496, 136, 62)} stroke={RED} sw={2.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={200} y={594} size={13} fill={RED} weight={900}>χ ∝ T   ✗</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={356} y={518} size={13} fill={INK} weight={700} anchor="start">
          {t("The common slip is treating χ as proportional to T rather than to 1/T,",
             "Aam galti: χ ko T ke proportional maan lena, 1/T ke bajaye,")}
        </T>
        <T x={356} y={542} size={13} fill={INK} weight={700} anchor="start">
          {t("which would have χ rising as you heat the sample.",
             "jisse sample garam karne par χ badhta dikhega.")}
        </T>
        <T x={356} y={566} size={13} fill={RED} weight={800} anchor="start">
          {t("Physically that is nonsense — heat is what destroys alignment.",
             "Physics ke hisaab se bakwaas — garmi hi to alignment todti hai.")}
        </T>
        <T x={356} y={590} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("Always sanity-check the direction before writing the final line.",
             "Final line likhne se pehle direction hamesha check karo.")}
        </T>
      </Fade>
    </Scene>
  );
}

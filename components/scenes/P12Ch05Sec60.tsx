/**
 * P12Ch05 · Section 60 — "Retentivity, coercivity and the cored solenoid"
 * Subtopic: Permanent Magnets and Electromagnets
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: engineering core selection — laminated
 * soft iron for transformers and AC motors, γ-Fe₂O₃ / CrO₂ for magnetic
 * recording tape, eddy-current lamination. The narration mentions none of
 * transformers, motors, tape or lamination.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: two definitions read off the
 * hysteresis loop — retentivity (the B left when H returns to zero, a flux
 * density in tesla) and coercivity (the reverse H needed to drive B back to
 * zero, a field in A/m) — then the cored-solenoid field B = μ₀ μ_r n I with
 * n = N/L and the N-vs-n warning, the air-core / soft-iron comparison, and
 * the demagnetising current I = H_c / n.
 *
 * BEAT MAP (9 reveals → gates 0..8, nothing above 8):
 *   0  "two definitions and two formulas"       title + framing line
 *   1  "retentivity, or remanence"              B–H loop + B_r marked
 *   2  "coercivity, and note the units"         H_c marked + tesla vs A/m
 *   3  "same coil, only the core differs"       air-cored and iron-cored solenoids
 *   4  "B = μ₀ μ_r n I = μ n I"                 the formula, with n = N/L
 *   5  "capital N versus lowercase n"           the warning
 *   6  "μ_r = 1 versus a soft iron core"        the comparison on the two coils
 *   7  "the demagnetising current"              I = H_c / n
 *   8  "a property becomes a dial setting"      the closing chip
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** A B–H hysteresis loop: half-width w, half-height h, coercivity c, remanence r. */
function loopD(cx: number, cy: number, w: number, h: number, c: number, r: number): string {
  return (
    `M ${cx - w} ${cy + h}` +
    ` Q ${cx - w * 0.5} ${cy + h * 0.98} ${cx} ${cy + r}` +
    ` Q ${cx + c * 0.65} ${cy + r * 0.45} ${cx + c} ${cy}` +
    ` Q ${cx + w * 0.5} ${cy - h * 0.72} ${cx + w} ${cy - h}` +
    ` Q ${cx + w * 0.5} ${cy - h * 0.98} ${cx} ${cy - r}` +
    ` Q ${cx - c * 0.65} ${cy - r * 0.45} ${cx - c} ${cy}` +
    ` Q ${cx - w * 0.5} ${cy + h * 0.72} ${cx - w} ${cy + h}`
  );
}

export default function P12Ch05Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const coil = (cy: number, on: boolean, delay: number) =>
    [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <Draw key={`t${cy}-${i}`} on={on} delay={delay + i * 0.05}
        d={`M ${104 + i * 24} ${cy - 20} A 7 20 0 1 0 ${104 + i * 24} ${cy + 20}`}
        stroke={INK} sw={1.9} dur={0.3} />
    ));

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Retentivity, coercivity and the cored solenoid", "Retentivity, coercivity aur cored solenoid")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 270 62 C 500 58, 660 66, 810 60" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={86} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("Two definitions and two formulas — and the definitions are the ones students most often blur together.",
             "Do definitions aur do formulas — aur definitions wahi hain jo students sabse zyada gadd-madd karte hain.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the loop and B_r ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Line x1={112} y1={216} x2={388} y2={216} stroke={MUTED} strokeWidth={1.5} />
        <Line x1={250} y1={116} x2={250} y2={316} stroke={MUTED} strokeWidth={1.5} />
        <T x={400} y={221} size={12.5} fill={MUTED} weight={800}>H</T>
        <T x={236} y={112} size={12.5} fill={MUTED} weight={800}>B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={loopD(250, 216, 118, 78, 60, 50)} stroke={INK} sw={2.4} dur={1.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={250} cy={166} r={4.5} fill={GREEN} />
        <Line x1={250} y1={166} x2={296} y2={166} stroke={GREEN} strokeWidth={1.4} strokeDasharray="4 4" />
        <T x={302} y={171} size={13} fill={GREEN} weight={900} anchor="start">
          {t("B_r — retentivity", "B_r — retentivity")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — H_c ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={190} cy={216} r={4.5} fill={RED} />
        <Line x1={190} y1={216} x2={190} y2={266} stroke={RED} strokeWidth={1.4} strokeDasharray="4 4" />
        <T x={182} y={284} size={13} fill={RED} weight={900} anchor="end">
          {t("H_c — coercivity", "H_c — coercivity")}
        </T>
      </Fade>

      {/* ---------------- RIGHT: the two definitions ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={440} y={126} size={14} fill={RED} weight={800} anchor="start">
          {t("RETENTIVITY (remanence)", "RETENTIVITY (remanence)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={440} y={152} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the flux density LEFT in the material when the magnetising",
             "material mein bacha hua flux density, jab magnetising")}
        </T>
        <T x={440} y={172} size={12.5} fill={INK} weight={700} anchor="start">
          {t("field is brought back to zero", "field wapas zero par laaya jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={440} y={196} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("asks: how much magnetism does it KEEP once you stop driving it?",
             "poochhta hai: driving band karne par kitna magnetism BACHTA hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={440} y={218} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("unit: tesla — it is a flux density", "unit: tesla — ye ek flux density hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={440} y={256} size={14} fill={RED} weight={800} anchor="start">
          {t("COERCIVITY", "COERCIVITY")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={440} y={282} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the REVERSE magnetising field required to drive the",
             "wo ULTA magnetising field jo material ke field ko")}
        </T>
        <T x={440} y={302} size={12.5} fill={INK} weight={700} anchor="start">
          {t("material's field back to zero", "wapas zero par le aata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={440} y={326} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("asks: how HARD is this material to demagnetise?",
             "poochhta hai: is material ko demagnetise karna kitna MUSHKIL hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={440} y={348} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("unit: ampere per metre — it is a field", "unit: ampere per metre — ye ek field hai")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — same coil, different core ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={382} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("same coil · same current · same number of turns — only the core differs",
             "wahi coil · wahi current · utne hi turns — sirf core alag hai")}
        </T>
      </Fade>
      {coil(414, beat >= 3, dl(3, 0.7))}
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Rect x={96} y={462} width={196} height={20} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      {coil(472, beat >= 3, dl(3, 1.5))}
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={320} y={410} size={12.5} fill={INK} weight={800} anchor="start">
          {t("air core", "air core")}
        </T>
        <T x={320} y={468} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("soft iron core", "soft iron core")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — the formula ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={392} size={14} fill={RED} weight={800} anchor="start">
          {t("FIELD INSIDE A CORED SOLENOID", "CORED SOLENOID KE ANDAR FIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={424} size={18} fill={INK} weight={900} anchor="start">
          B = μ₀ μ_r n I = μ n I
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={560} y={448} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("n = turns per unit length = N / L", "n = turns per unit length = N / L")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — N versus n ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={474} size={12.5} fill={RED} weight={800} anchor="start">
          {t("capital N = total turns · lowercase n = turns per METRE",
             "capital N = kul turns · lowercase n = turns per METRE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={494} size={12.5} fill={RED} weight={800} anchor="start">
          {t("divide by the length before substituting — and keep L in metres",
             "substitute karne se pehle length se bhaag do — aur L metre mein rakho")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — the comparison ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={320} y={430} size={12.5} fill={INK} weight={800} anchor="start">
          μ_r = 1  ⇒  B = μ₀ n I
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={320} y={488} size={12.5} fill={GREEN} weight={900} anchor="start">
          μ_r ≈ 10²–10³  ⇒  B up to ~1000× larger
        </T>
      </Fade>

      {/* ---------------- beat 7 — the demagnetising current ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={60} y={524} size={13} fill={INK} weight={800} anchor="start">
          {t("To demagnetise a sample of known coercivity inside a solenoid:",
             "Kisi known coercivity waale sample ko solenoid ke andar demagnetise karne ke liye:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={560} y={524} size={17} fill={GREEN} weight={900} anchor="start">
          I = H_c / n
        </T>
      </Fade>

      {/* beat 8 */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={40} y={542} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Straight from the definition of magnetic intensity — a property of the material becomes a dial setting",
             "★ Seedha magnetic intensity ki definition se — material ki property ban jaati hai power supply ka dial setting")}
        </Chip>
      </Fade>
    </Scene>
  );
}

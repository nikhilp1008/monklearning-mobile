/**
 * P12Ch05 · Section 55 — "Advanced: two surfaces on one rim"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: the magnetic vector potential B = ∇ × A,
 * Stokes' theorem, and flux quantisation in a superconducting ring
 * (Φ₀ = h/2e ≈ 2.07 × 10⁻¹⁵ Wb). None of that is in the narration, and
 * none of it is class-12 syllabus for this section.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: a JEE-Advanced two-part problem. A
 * flat disc and a hemispherical cap share one circular rim; the disc links
 * 7.0 mWb. (a) The cap links the same 7.0 mWb, by surface independence.
 * (b) Justify it: the pair is one closed surface, Gauss makes the outward
 * fluxes sum to zero, and the opposite outward normals through the rim
 * flip one sign, turning that sum into an equality.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "trivial calculation, rigorous answer"    title + framing line
 *   1  "a flat disc, a cap, one shared rim"      the drawing
 *   2  "the disc measures 7.0 mWb · (a) and (b)" the data and the two parts
 *   3  "part (a) is one line"                    Φ_cap = Φ_disc = 7.0 mWb
 *   4  "stating it earns only partial credit"    where the marks really are
 *   5  "the pair is one closed surface"          shading + outward normals
 *   6  "Gauss: the outward fluxes sum to zero"   Φ_out(cap) + Φ_out(disc) = 0
 *   7  "the step students leave out"             the sign flip + chip
 */

import React from "react";
import { Ellipse, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Advanced: two surfaces on one rim", "Advanced: ek hi rim par do surfaces")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 300 64 C 500 60, 640 68, 790 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("The calculation is trivial — what is being tested is whether you can justify it rigorously.",
             "Calculation aasaan hai — test ye hai ki tum ise rigorously justify kar sakte ho ya nahi.")}
        </T>
      </Fade>

      {/* beat 5 shading sits behind the outlines */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Path d="M 125 300 C 125 150, 415 150, 415 300 Z" fill="#1C1A1614" />
      </Fade>

      {/* ---------------- beat 1 — the geometry ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Ellipse cx={270} cy={300} rx={145} ry={42} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)}
        d="M 125 300 C 125 150, 415 150, 415 300" stroke={INK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)}
        d="M 125 300 A 145 42 0 1 0 415 300 A 145 42 0 1 0 125 300" stroke={RED} sw={3} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={300} y={166} size={13} fill={INK_LIGHT} weight={800} anchor="start">
          {t("S₂ — hemispherical cap", "S₂ — hemispherical cap")}
        </T>
        <T x={270} y={306} size={13} fill={INK_LIGHT} weight={800}>{t("S₁ — flat disc", "S₁ — flat disc")}</T>
        <T x={168} y={352} size={13} fill={RED} weight={800} anchor="end">{t("shared rim C", "shared rim C")}</T>
      </Fade>

      {/* beat 2 — the given flux, on the picture */}
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={270} y={396} size={15} fill={AMBER_DARK} weight={900}>Φ(S₁) = 7.0 mWb  (given)</T>
      </Fade>

      {/* beat 5 — the two outward normals */}
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={arrowD(270, 190, 270, 140)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={arrowD(380, 327, 380, 372)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={284} y={136} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ out of the cap — upward", "n̂ cap se bahar — upar")}
        </T>
        <T x={392} y={364} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ out of the disc", "n̂ disc se bahar")}
        </T>
      </Fade>

      {/* ---------------- RIGHT COLUMN ---------------- */}
      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={14} fill={RED} weight={800} anchor="start">
          {t("WHAT WE ARE TOLD", "HUMEIN KYA DIYA HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={158} size={13} fill={INK} weight={700} anchor="start">
          {t("Both surfaces share the same circular rim, which bounds a region of field.",
             "Dono surfaces ka circular rim ek hi hai, jo field ke region ko ghere hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={540} y={182} size={13} fill={INK} weight={700} anchor="start">
          {t("The flux through the flat disc measures 7.0 mWb.",
             "Flat disc se flux 7.0 mWb naapa gaya hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={206} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("(a) find the flux through the cap    (b) justify it",
             "(a) cap se flux nikaalo    (b) use justify karo")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={252} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("PART (a) · ONE LINE", "PART (a) · EK LINE")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={288} size={19} fill={GREEN} weight={900} anchor="start">
          Φ(S₂) = Φ(S₁) = 7.0 mWb
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={540} y={312} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("same boundary rim ⇒ the two surfaces link the same flux",
             "boundary rim ek hi ⇒ dono surfaces wahi flux link karte hain")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={350} size={13} fill={RED} weight={800} anchor="start">
          {t("Simply stating it earns only partial credit — the question asks",
             "Sirf likh dene se aadhe marks milte hain — sawaal rigour maangta hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={372} size={13} fill={RED} weight={800} anchor="start">
          {t("for rigour, so part (b) is where the marks actually are.",
             "isliye asli marks part (b) mein hain.")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={540} y={412} size={14} fill={RED} weight={800} anchor="start">
          {t("PART (b) · STEP 1", "PART (b) · STEP 1")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={540} y={436} size={13} fill={INK} weight={700} anchor="start">
          {t("Disc and cap, oriented consistently outward, make ONE closed surface.",
             "Disc aur cap, dono outward oriented, milkar EK closed surface bante hain.")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={474} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 2 · APPLY GAUSS'S LAW", "STEP 2 · GAUSS'S LAW LAGAO")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={504} size={15} fill={INK} weight={900} anchor="start">
          Φ_out(S₂) + Φ_out(S₁) = 0
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={60} y={446} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("STEP 3 — the step students leave out:", "STEP 3 — jo step students chhod dete hain:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={472} size={13} fill={INK} weight={700} anchor="start">
          {t("the two outward normals oppose through the rim, so", "dono outward normals rim ke through ulte hain, isliye")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={60} y={496} size={13} fill={INK} weight={700} anchor="start">
          {t("re-orienting both the same way flips one sign:", "dono ko ek hi orientation dene par ek sign palat jaata hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={60} y={524} size={15} fill={GREEN} weight={900} anchor="start">
          0 = Φ(S₂) − Φ(S₁)   ⇒   Φ(S₂) = Φ(S₁)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={40} y={544} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ 7.0 mWb through both — and this is exactly why 'the flux through a circuit' is unambiguous in Induction",
             "★ Dono se 7.0 mWb — aur isiliye Induction mein 'flux through a circuit' ambiguous nahi hota")}
        </Chip>
      </Fade>
    </Scene>
  );
}

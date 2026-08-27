/**
 * P12Ch05 · Section 61 — "Lifting force at a pole face"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: the coercivity stability condition for a
 * permanent magnet — H_demag = N_d M, the requirement H_c > N_d M, and the
 * shape demagnetising factors (needle N_d ≈ 0, short fat magnet N_d ≈ 1/3).
 * None of that is spoken anywhere in this section.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the lifting force at a pole face.
 * F = B²A / 2μ₀ per pole face; a horseshoe grips with TWO faces so the two
 * doublings cancel and F = B²A / μ₀; A is the pole-face area (not the load's);
 * F goes as B², not B; and pole-face areas quoted in cm² convert with 10⁻⁴.
 * The board is now that, drawn as a horseshoe gripping a load across both
 * faces plus an F-versus-B curve.
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "the formula with the most reliable trap"   title + underline
 *   1  "look at the geometry before the algebra"   horseshoe + load, two faces
 *   2  "B² times area over twice mu nought"        single-pole-face formula
 *   3  "A is the pole face, not the load"          what A and B actually mean
 *   4  "doubling gives B²A over mu nought"         the two-face form, 2s cancel
 *   5  "how many pole faces is it gripping with?"  the count-the-faces trap box
 *   6  "the force goes as B squared, not as B"     F ∝ B² curve, ×2 → ×4
 *   7  "cm² converts with ten to the minus four"   the unit warning
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Lifting force at a pole face", "Pole face par lifting force")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 330 64 C 500 60, 650 68, 760 62" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the geometry ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={48} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("LOOK AT THE GEOMETRY FIRST", "PEHLE GEOMETRY DEKHO")}
        </T>
      </Fade>

      {/* the horseshoe core */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)}
        d="M 150 328 L 150 215 A 95 95 0 0 1 340 215 L 340 328"
        stroke={INK_LIGHT} sw={30} dur={1.1} />

      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        {/* the two pole faces */}
        <Rect x={130} y={324} width={40} height={20} rx={3} fill={RED} />
        <Rect x={320} y={324} width={40} height={20} rx={3} fill={GREEN} />
        <T x={150} y={300} size={16} fill={CREAM} weight={900}>N</T>
        <T x={340} y={300} size={16} fill={CREAM} weight={900}>S</T>
        {/* the load, gripped across BOTH faces */}
        <Rect x={108} y={344} width={274} height={36} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={245} y={368} size={14} fill={INK} weight={800}>
          {t("LOAD", "LOAD")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={48} y={404} size={13.5} fill={INK} weight={700} anchor="start">
          {t("Both poles face the same way — the load is gripped across BOTH.",
             "Dono poles ek hi taraf — load DONO ke aar-paar pakda jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={48} y={426} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Two faces in contact, not one.", "Do faces contact mein hain, ek nahi.")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the single-face formula ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={490} y={116} size={14} fill={RED} weight={800} anchor="start">
          {t("FORCE AT ONE POLE FACE", "EK POLE FACE PAR FORCE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={496} y={158} size={21} fill={INK} weight={900} anchor="start">
          F = B² A / (2 μ₀)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={496} y={186} size={13} fill={INK_LIGHT} weight={700} anchor="start">
          {t("“per pole face” is the phrase doing all the work here",
             "“per pole face” — poora kaam yahi phrase kar raha hai")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — what A and B mean ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={48} y={456} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("A = area of the POLE FACE — not the area of the load",
             "A = POLE FACE ka area — load ka area nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(66, 448, 126, 348)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={48} y={478} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("B = the flux density that face carries",
             "B = us face se guzarne wali flux density")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={48} y={499} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("both are properties of the CONTACT — an air gap ruins it",
             "dono CONTACT ki properties hain — air gap sab kharab kar deta hai")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — the two-face form ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={490} y={222} size={14} fill={RED} weight={800} anchor="start">
          {t("HORSESHOE — TWO FACES, EACH OF AREA A", "HORSESHOE — DO FACES, HAR EK KA AREA A")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={496} y={256} size={16} fill={AMBER_DARK} weight={800} anchor="start">
          F = 2 × B² A / (2 μ₀)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 496 268 L 900 268" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={496} y={296} size={20} fill={GREEN} weight={900} anchor="start">
          F = B² A / μ₀
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={496} y={316} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the 2 from the two faces has cancelled the 2 underneath",
             "do faces waala 2 neeche ke 2 ko kaat gaya")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — count the faces ---------------- */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 490 328 H 1040 V 420 H 490 Z" stroke={RED} sw={1.9} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={510} y={352} size={14} fill={RED} weight={800} anchor="start">
          {t("ASK BEFORE YOU SUBSTITUTE: HOW MANY POLE FACES?",
             "SUBSTITUTE SE PEHLE POOCHHO: KITNE POLE FACES?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={510} y={380} size={14} fill={INK} weight={800} anchor="start">
          {t("one face  →  keep the 2:   F = B² A / 2μ₀",
             "ek face  →  2 rehne do:   F = B² A / 2μ₀")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={510} y={406} size={14} fill={INK} weight={800} anchor="start">
          {t("two faces →  the 2 cancels:  F = B² A / μ₀",
             "do faces →  2 kat jaata hai:  F = B² A / μ₀")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — F goes as B² ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={490} y={446} size={14} fill={RED} weight={800} anchor="start">
          {t("F GOES AS B² — NOT AS B", "F, B² KE SAATH BADHTA HAI — B KE SAATH NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={490} y={468} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("double the flux density and the holding force QUADRUPLES",
             "flux density double karo, holding force CHAAR GUNA")}
        </T>
      </Fade>
      {/* axes */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 620 486 V 578 H 950" stroke={INK} sw={1.8} dur={0.6} />
      {/* the quadratic */}
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 620 578 Q 780 578 940 492" stroke={GREEN} sw={2.8} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <Line x1={620} y1={556} x2={780} y2={556} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <Line x1={780} y1={556} x2={780} y2={578} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <Line x1={620} y1={492} x2={940} y2={492} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <Line x1={940} y1={492} x2={940} y2={578} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <T x={612} y={561} size={12.5} fill={INK} anchor="end" weight={800}>F</T>
        <T x={612} y={497} size={12.5} fill={GREEN} anchor="end" weight={900}>4F</T>
        <T x={780} y={594} size={12.5} fill={INK} weight={800}>B</T>
        <T x={940} y={594} size={12.5} fill={GREEN} weight={900}>2B</T>
        <T x={968} y={572} size={12.5} fill={MUTED} anchor="start" weight={700}>
          {t("flux density", "flux density")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — the unit warning ---------------- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 526 v 62" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={62} y={546} size={13.5} fill={RED} weight={800} anchor="start">
          {t("Pole-face areas are quoted in cm² — convert BEFORE substituting.",
             "Pole-face area cm² mein diya hota hai — substitute karne se PEHLE convert karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={62} y={572} size={15} fill={INK} weight={900} anchor="start">
          1 cm² = 10⁻⁴ m²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={62} y={592} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("ten to the minus FOUR, not minus two — area carries the conversion squared",
             "10⁻⁴, 10⁻² nahi — area mein conversion square hota hai")}
        </T>
      </Fade>
    </Scene>
  );
}

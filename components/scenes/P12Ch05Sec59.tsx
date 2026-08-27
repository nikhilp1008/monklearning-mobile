/**
 * P12Ch05 · Section 59 — "Making magnetism, taking it away, and what the formulas assume"
 * Subtopic: Permanent Magnets and Electromagnets
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork covered a third of the lesson
 * and then wandered off.
 *
 * WHAT THE BOARD USED TO TEACH: demagnetisation, and then a magnetic
 * shielding panel (high-μ iron shell, B ≈ 0 in the cavity, the contrast
 * with dielectrics). The voice never mentions shielding here — and the
 * board carried none of the three ways to MAKE a magnet, nor any of the
 * three limiting assumptions the voice spends most of the section on.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: making (solenoid + strong DC,
 * stroking with one pole, tapping along the Earth's field), unmaking
 * (heat past T_C, random hammering, a.c. solenoid with the amplitude taken
 * to zero), and the three quiet assumptions — below the Curie temperature,
 * an unsaturated core, and gap-free pole contact.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "how to make, unmake, and what is assumed"  title + framing line
 *   1  "making and destroying, side by side"       the two panels + domain rows
 *   2  "the solenoid and a strong direct current"  method 1, drawn
 *   3  "stroking, and tapping along the Earth"     methods 2 and 3
 *   4  "to destroy, do the reverse"                the three destroying routes
 *   5  "assumption one: below the Curie point"     card 1
 *   6  "assumption two: an unsaturated core"       card 2
 *   7  "assumption three: gap-free contact"        card 3 + chip
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // aligned domains (make) and scattered domains (destroy)
  const aligned = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const scatterAngles = [22, -140, 95, -35, 160, 70, -95, 10, 130, -60, 180, 45];

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Making magnetism, and taking it away", "Magnetism banana, aur use hataana")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 290 62 C 500 58, 650 66, 800 60" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={86} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("How to make one · how to unmake one · and what the formulas quietly assume.",
             "Kaise banaao · kaise mitaao · aur formulas chupke se kya maan kar chalte hain.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the two panels ---------------- */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 48 100 H 528 V 372 H 48 Z" stroke={GREEN_DARK} sw={2} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 552 100 H 1032 V 372 H 552 Z" stroke={RED} sw={2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={288} y={126} size={14.5} fill={GREEN_DARK} weight={800}>
          {t("MAKING A PERMANENT MAGNET", "PERMANENT MAGNET BANANA")}
        </T>
        <T x={288} y={146} size={11.5} fill={MUTED} weight={700}>
          {t("everything here nudges domains into alignment", "yahan sab kuch domains ko align karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={792} y={126} size={14.5} fill={RED} weight={800}>
          {t("UNMAKING ONE", "USE MITAANA")}
        </T>
        <T x={792} y={146} size={11.5} fill={MUTED} weight={700}>
          {t("everything here scatters that alignment again", "yahan sab kuch us alignment ko bikher deta hai")}
        </T>
      </Fade>
      {/* domain rows */}
      {aligned.map((i) => (
        <Draw key={`a${i}`} on={beat >= 1} delay={dl(1, 1.9 + i * 0.05)}
          d={arrowD(78 + i * 36, 346, 100 + i * 36, 346)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      ))}
      {scatterAngles.map((a, i) => {
        const cx = 582 + i * 36;
        const rad = (a * Math.PI) / 180;
        return (
          <Draw key={`s${i}`} on={beat >= 1} delay={dl(1, 1.9 + i * 0.05)}
            d={arrowD(cx, 346, cx + 16 * Math.cos(rad), 346 + 16 * Math.sin(rad))}
            stroke={RED} sw={2} dur={0.25} />
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={288} y={366} size={11.5} fill={MUTED} weight={700}>{t("domains aligned", "domains aligned")}</T>
        <T x={792} y={366} size={11.5} fill={MUTED} weight={700}>{t("domains random again", "domains phir se random")}</T>
      </Fade>

      {/* ---------------- beat 2 — solenoid + strong DC ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Rect x={74} y={180} width={172} height={22} fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Draw key={`c${i}`} on={beat >= 2} delay={dl(2, 0.6 + i * 0.06)}
          d={`M ${88 + i * 24} 167 A 8 24 0 1 0 ${88 + i * 24} 215`} stroke={INK} sw={1.9} dur={0.3} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={arrowD(64, 226, 64, 200)} stroke={INK} sw={1.8} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={58} y={244} size={11.5} fill={INK} weight={800} anchor="start">{t("strong DC", "strong DC")}</T>
        <T x={160} y={158} size={11.5} fill={AMBER_DARK} weight={800}>{t("steel rod", "steel rod")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={266} y={178} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("1 · solenoid + strong direct current", "1 · solenoid + strong direct current")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={266} y={198} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the coil's intense uniform field", "coil ka tez uniform field")}
        </T>
        <T x={266} y={216} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("aligns the domains, and steel's high", "domains ko align karta hai, aur steel ki")}
        </T>
        <T x={266} y={234} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("coercivity locks them after switch-off", "high coercivity unhe lock kar deti hai")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — the hands-on methods ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={70} y={262} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("2 · stroking with one pole", "2 · ek pole se stroking")}
        </T>
        <T x={82} y={280} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("always the same direction, lifting the magnet clear between strokes",
             "hamesha ek hi direction, har stroke ke beech magnet uthaate hue")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={70} y={300} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("3 · tapping along the Earth's field", "3 · Earth ke field ke along thokna")}
        </T>
        <T x={82} y={318} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("hold the rod along that direction — the shocks let domains settle into line",
             "rod ko us direction mein pakdo — jhatke domains ko line mein bitha dete hain")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — unmaking ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={574} y={182} size={13} fill={RED} weight={800} anchor="start">
          {t("1 · heat it past the Curie temperature", "1 · Curie temperature se upar garam karo")}
        </T>
        <T x={586} y={202} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("thermal chaos scrambles the domains", "thermal chaos domains ko bikher deta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={574} y={234} size={13} fill={RED} weight={800} anchor="start">
          {t("2 · hammer it about in random orientations", "2 · random orientations mein hathoda maaro")}
        </T>
        <T x={586} y={254} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("mechanical shocks knock the alignment apart", "mechanical jhatke alignment tod dete hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={574} y={286} size={13} fill={RED} weight={800} anchor="start">
          {t("3 · a.c. solenoid, amplitude slowly reduced", "3 · a.c. solenoid, amplitude dheere-dheere kam")}
        </T>
        <T x={586} y={306} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("take the alternating current down to zero", "alternating current ko zero tak le jaao")}
        </T>
      </Fade>

      {/* ---------------- beats 5–7 — the three assumptions ---------------- */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 48 394 H 358 V 522 H 48 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={64} y={418} size={12.5} fill={RED} weight={800} anchor="start">
          {t("ASSUMPTION 1 · BELOW T_C", "ASSUMPTION 1 · T_C KE NEECHE")}
        </T>
        <T x={64} y={444} size={11.5} fill={INK} weight={600} anchor="start">
          {t("All of this lives below the Curie point.", "Ye sab Curie point ke neeche hi chalta hai.")}
        </T>
        <T x={64} y={464} size={11.5} fill={INK} weight={600} anchor="start">
          {t("Past T_C a ferromagnet becomes an", "T_C ke aage ferromagnet ek saadharan")}
        </T>
        <T x={64} y={484} size={11.5} fill={INK} weight={600} anchor="start">
          {t("ordinary paramagnet — retentivity and", "paramagnet ban jaata hai — retentivity")}
        </T>
        <T x={64} y={504} size={11.5} fill={INK} weight={600} anchor="start">
          {t("coercivity both vanish at a stroke.", "aur coercivity dono ek jhatke mein gayab.")}
        </T>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 384 394 H 694 V 522 H 384 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={400} y={418} size={12.5} fill={RED} weight={800} anchor="start">
          {t("ASSUMPTION 2 · UNSATURATED CORE", "ASSUMPTION 2 · UNSATURATED CORE")}
        </T>
        <T x={400} y={444} size={11.5} fill={INK} weight={600} anchor="start">
          {t("The cored-solenoid formula assumes the", "Cored-solenoid formula maanta hai ki")}
        </T>
        <T x={400} y={464} size={11.5} fill={INK} weight={600} anchor="start">
          {t("relative permeability is roughly constant.", "relative permeability lagbhag constant hai.")}
        </T>
        <T x={400} y={484} size={11.5} fill={INK} weight={600} anchor="start">
          {t("Push toward saturation and μ_r drops —", "Saturation ki taraf badho toh μ_r girta —")}
        </T>
        <T x={400} y={504} size={11.5} fill={INK} weight={600} anchor="start">
          {t("B stops rising in proportion to I.", "B, I ke anupaat mein badhna band kar deta.")}
        </T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 720 394 H 1032 V 522 H 720 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={736} y={418} size={12.5} fill={RED} weight={800} anchor="start">
          {t("ASSUMPTION 3 · GAP-FREE CONTACT", "ASSUMPTION 3 · GAP-FREE CONTACT")}
        </T>
        <T x={736} y={444} size={11.5} fill={INK} weight={600} anchor="start">
          {t("The lifting-force formula assumes pole", "Lifting-force formula maanta hai ki pole")}
        </T>
        <T x={736} y={464} size={11.5} fill={INK} weight={600} anchor="start">
          {t("face and load are in flush contact.", "face aur load flush contact mein hain.")}
        </T>
        <T x={736} y={484} size={11.5} fill={INK} weight={600} anchor="start">
          {t("Even a thin air gap slashes the force —", "Patla sa air gap bhi force gira deta hai —")}
        </T>
        <T x={736} y={504} size={11.5} fill={INK} weight={600} anchor="start">
          {t("a flat sheet grips far better than a lump.", "flat sheet, uncha-neecha lump se behtar pakadta.")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={40} y={540} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Below T_C · core unsaturated · no air gap — check all three before you trust the formula",
             "★ T_C ke neeche · core unsaturated · koi air gap nahi — formula par bharosa karne se pehle teenon dekho")}
        </Chip>
      </Fade>
    </Scene>
  );
}

/**
 * P12Ch05 · Section 54 — "Flux bookkeeping on a closed cylinder"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught the general contrast,
 * not the worked problem.
 *
 * WHAT THE BOARD USED TO TEACH: open surface vs closed surface in the
 * abstract (Φ_open = B A cos θ can be non-zero, ∮B·dA is always zero) plus
 * a Faraday's-law link the narration never makes here.
 *
 * WHAT THE NARRATION ACTUALLY WORKS: a signed-flux numerical on a closed
 * cylinder. Taking outward as positive:
 *     one flat cap    8.0 mWb entering  →  Φ₁ = −8.0 mWb
 *     the curved side 3.0 mWb leaving   →  Φ_side = +3.0 mWb
 *     Gauss:  Φ₁ + Φ_side + Φ₂ = 0
 *             −8.0 + 3.0 + Φ₂ = 0  ⇒  Φ₂ = +5.0 mWb
 *     positive ⇒ outward, so 5.0 mWb directed OUTWARD through the other cap.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "no integration in it at all, only signs" title + framing line
 *   1  "the three pieces of the surface"         the cylinder, drawn, in/out/?
 *   2  "8.0 mWb in, 3.0 mWb out, find the cap"   the data
 *   3  "fix a convention and commit to it"       outward positive
 *   4  "translate into signed numbers"           −8.0 · +3.0 · unknown
 *   5  "the signed total must vanish"            Φ₁ + Φ_side + Φ₂ = 0
 *   6  "solving gives plus five"                 Φ₂ = +5.0 mWb
 *   7  "read the sign back into physics"         5.0 mWb OUTWARD + chip
 */

import React from "react";
import { Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Flux bookkeeping on a closed cylinder", "Closed cylinder par flux ka hisaab")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 290 64 C 500 60, 650 68, 800 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("The most common numerical in this subtopic — and there is no integration in it at all, only signs.",
             "Is subtopic ka sabse common numerical — isme integration bilkul nahi hai, sirf signs hain.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the three pieces ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Ellipse cx={340} cy={266} rx={22} ry={62} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <Line x1={160} y1={204} x2={340} y2={204} stroke={INK} strokeWidth={2.2} />
        <Line x1={160} y1={328} x2={340} y2={328} stroke={INK} strokeWidth={2.2} />
        <Ellipse cx={160} cy={266} rx={22} ry={62} fill="none" stroke={INK} strokeWidth={2.2} strokeDasharray="6 5" />
      </Fade>
      {/* flux directions on each piece */}
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(80, 266, 132, 266)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(250, 204, 250, 152)} stroke={GREEN_DARK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(368, 266, 428, 266)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={60} y={244} size={12.5} fill={RED} weight={800} anchor="start">
          {t("end cap 1 · flux IN", "end cap 1 · flux ANDAR")}
        </T>
        <T x={264} y={158} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("curved side · flux OUT", "curved side · flux BAHAR")}
        </T>
        <T x={392} y={244} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("end cap 2 · ?", "end cap 2 · ?")}
        </T>
      </Fade>

      {/* beat 2 — the magnitudes on the picture */}
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={106} y={292} size={13} fill={RED} weight={900}>8.0 mWb</T>
        <T x={250} y={140} size={13} fill={GREEN_DARK} weight={900}>3.0 mWb</T>
        <T x={398} y={292} size={13} fill={AMBER_DARK} weight={900} anchor="start">Φ₂ = ?</T>
      </Fade>

      {/* beat 4 — the signed values on the picture */}
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={106} y={314} size={14} fill={RED} weight={900}>− 8.0</T>
        <T x={250} y={122} size={14} fill={GREEN_DARK} weight={900}>+ 3.0</T>
      </Fade>

      {/* ---------------- RIGHT: the working ---------------- */}
      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={530} y={130} size={14} fill={RED} weight={800} anchor="start">
          {t("THE DATA", "DATA")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={530} y={158} size={13.5} fill={INK} weight={700} anchor="start">
          {t("8.0 mWb enters through one flat end cap", "8.0 mWb ek flat end cap se andar aata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={530} y={182} size={13.5} fill={INK} weight={700} anchor="start">
          {t("3.0 mWb leaves through the curved side", "3.0 mWb curved side se bahar jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={530} y={206} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("find the flux through the other end cap", "doosre end cap se flux nikaalo")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={530} y={252} size={14} fill={RED} weight={800} anchor="start">
          {t("FIX A CONVENTION AND COMMIT TO IT", "EK CONVENTION CHUNO AUR USI PAR TIKO")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={530} y={280} size={15} fill={INK} weight={900} anchor="start">
          {t("outward flux = positive", "bahar jaata flux = positive")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={530} y={304} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("the standard choice for a closed surface — apply it to all three pieces",
             "closed surface ke liye standard choice — teenon tukdon par lagao")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={530} y={348} size={14} fill={RED} weight={800} anchor="start">
          {t("TRANSLATE INTO SIGNED NUMBERS", "SIGNED NUMBERS MEIN BADLO")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={530} y={376} size={14} fill={INK} weight={800} anchor="start">
          Φ₁ = − 8.0 mWb   {t("(entering ⇒ inward)", "(andar aata ⇒ inward)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={530} y={402} size={14} fill={INK} weight={800} anchor="start">
          Φ_side = + 3.0 mWb   {t("(leaving ⇒ outward)", "(bahar jaata ⇒ outward)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={530} y={428} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          Φ₂ = {t("the unknown", "unknown")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={530} y={464} size={15} fill={INK} weight={900} anchor="start">
          Φ₁ + Φ_side + Φ₂ = 0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={790} y={464} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("the signed total over the whole closed surface", "poore closed surface ka signed total")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 530 478 L 1000 478" stroke={INK} sw={1.7} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={530} y={508} size={18} fill={GREEN} weight={900} anchor="start">
          − 8.0 + 3.0 + Φ₂ = 0  ⇒  Φ₂ = + 5.0 mWb
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={60} y={400} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("Positive, and we chose outward positive —", "Positive aaya, aur humne outward ko positive chuna tha —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={426} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("so it is 5.0 mWb directed OUTWARD.", "toh ye 5.0 mWb BAHAR ki taraf hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={40} y={540} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ 5.0 mWb outward through the other cap — miss one sign and you get both the number and the direction wrong",
             "★ Doosre cap se 5.0 mWb bahar — ek sign chhoot gaya toh number aur direction dono galat")}
        </Chip>
      </Fade>
    </Scene>
  );
}

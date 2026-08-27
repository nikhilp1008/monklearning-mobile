/**
 * P12Ch05 · Section 66 — "How much weight can a horseshoe hold?"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: a soft-iron-versus-hard-steel hysteresis loop
 * comparison — loop widths, B_r, H_c, transformer cores versus bar magnets.
 * No numerical of any kind, while the voice works one end to end.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the horseshoe lifting-force numerical.
 * Every quantity below is spoken:
 *      B = 1.5 T at each of TWO pole faces, A = 8.0 cm² per face
 *      A = 8.0 cm² = 8.0×10⁻⁴ m²        (10⁻⁴, because area squares it)
 *      two faces ⇒ F = B²A / μ₀          (the 2 has already cancelled)
 *      F = (1.5)²(8.0×10⁻⁴) / (1.2566×10⁻⁶)
 *        = 1.8×10⁻³ / 1.2566×10⁻⁶ ≈ 1.43×10³ N  →  1432 N
 *      m = F/g = 1432 / 9.8 ≈ 146 kg
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "two places to lose marks"                    title + underline
 *   1  "look at the geometry first — two faces"      the horseshoe gripping a load
 *   2  "1.5 T at each face, 8.0 cm² each"            the givens, on the drawing
 *   3  "deal with the area first"                    trap 1, the cm² → m² conversion
 *   4  "since there are two faces, use B²A/μ₀"       trap 2, choosing the form
 *   5  "1.5² is 2.25 … about 1.4×10³ newton"         the substitution and the force
 *   6  "1432 N, divide by g → about 146 kg"          the answer as a mass
 *   7  "this is why scrapyard magnets lift cars"     the perspective + closing chip
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("How much weight can a horseshoe hold?", "Horseshoe kitna wazan pakad sakta hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 300 62 C 480 58, 660 66, 790 60" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the geometry ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={48} y={100} size={14} fill={RED} weight={800} anchor="start">
          {t("THE GEOMETRY SETTLES THE FACTOR OF TWO", "GEOMETRY HI FACTOR OF TWO TAY KARTI HAI")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)}
        d="M 150 328 L 150 215 A 95 95 0 0 1 340 215 L 340 328"
        stroke={INK_LIGHT} sw={30} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Rect x={130} y={324} width={40} height={20} rx={3} fill={RED} />
        <Rect x={320} y={324} width={40} height={20} rx={3} fill={GREEN} />
        <T x={150} y={300} size={16} fill={CREAM} weight={900}>N</T>
        <T x={340} y={300} size={16} fill={CREAM} weight={900}>S</T>
        <Rect x={108} y={344} width={274} height={36} rx={4} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={245} y={368} size={14} fill={INK} weight={800}>
          {t("LOAD", "LOAD")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={48} y={404} size={13.5} fill={INK} weight={700} anchor="start">
          {t("Both poles face the same way — TWO faces in contact, not one.",
             "Dono poles ek hi taraf — DO faces contact mein, ek nahi.")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the givens, written onto the picture ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={245} y={252} size={18} fill={RED} weight={900}>B = 1.5 T</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={245} y={274} size={12.5} fill={MUTED} weight={700}>
          {t("at EACH pole face", "HAR pole face par")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={245} y={306} size={17} fill={AMBER_DARK} weight={900}>A = 8.0 cm²</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={48} y={432} size={13.5} fill={RED} weight={800} anchor="start">
          {t("find: the maximum weight the magnet can support",
             "nikaalo: magnet zyada se zyada kitna wazan pakad sakta hai")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — trap 1, the area ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={520} y={116} size={14} fill={RED} weight={800} anchor="start">
          {t("TRAP 1 · THE AREA CONVERSION", "TRAP 1 · AREA KA CONVERSION")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={526} y={152} size={18} fill={INK} weight={900} anchor="start">
          A = 8.0 cm² = 8.0 × 10⁻⁴ m²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={526} y={178} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("10⁻⁴, not 10⁻² — area carries the conversion squared",
             "10⁻⁴, 10⁻² nahi — area mein conversion square hota hai")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — trap 2, the right form ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={520} y={216} size={14} fill={RED} weight={800} anchor="start">
          {t("TRAP 2 · TWO FACES → PICK THE RIGHT FORM", "TRAP 2 · DO FACES → SAHI FORM CHUNO")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={526} y={252} size={20} fill={GREEN} weight={900} anchor="start">
          F = B² A / μ₀
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={526} y={276} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the doubling for two faces has already cancelled the 2 below",
             "do faces waala doubling neeche ke 2 ko pehle hi kaat chuka hai")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — the substitution ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={520} y={314} size={14} fill={RED} weight={800} anchor="start">
          {t("SUBSTITUTE", "SUBSTITUTE KARO")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={526} y={346} size={15} fill={INK} weight={800} anchor="start">
          F = (1.5)² × 8.0×10⁻⁴ / (1.2566×10⁻⁶)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={526} y={372} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          2.25 × 8.0×10⁻⁴ = 1.8×10⁻³ &nbsp;(the numerator)
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 526 386 L 1010 386" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={526} y={418} size={20} fill={GREEN} weight={900} anchor="start">
          F ≈ 1.4 × 10³ N
        </T>
      </Fade>

      {/* ---------------- beat 6 — express it as a mass ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={520} y={456} size={14} fill={RED} weight={800} anchor="start">
          {t("THE QUESTION ASKS FOR A WEIGHT", "SAWAAL WEIGHT MAANG RAHA HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={526} y={484} size={15} fill={INK} weight={800} anchor="start">
          F ≈ 1432 N &nbsp;⇒&nbsp; m = F / g = 1432 / 9.8
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={526} y={514} size={21} fill={GREEN} weight={900} anchor="start">
          m ≈ 146 kg
        </T>
      </Fade>

      {/* ---------------- beat 7 — feel the number ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={48} y={484} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Pole faces the size of a large postage stamp,",
             "Pole faces ek bade postage stamp jitne,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={48} y={508} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("holding up something heavier than two adults.",
             "aur do aadmiyon se zyada wazan uthaa rahe hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={40} y={548} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ Scale the pole-face area up and the force scales with it — that is how a scrapyard magnet lifts an entire car",
             "★ Pole-face area badhao aur force usi ke saath badhta hai — isi liye scrapyard magnet poori car uthaa leta hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}

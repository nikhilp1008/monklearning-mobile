/**
 * P12Ch05 · Section 51 — "Surface independence: the flux belongs to the loop"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: field-line continuity inside a flux tube,
 * B₁A₁ = B₂A₂ with zero side flux. The narration never mentions a flux
 * tube, a side wall, or B₁A₁ = B₂A₂.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: surface independence. A flat disc
 * and a curved dome stretched across the SAME rim form a closed surface
 * between them; Gauss's law makes their outward fluxes sum to zero; the two
 * outward normals oppose through the rim, so re-orienting flips one sign and
 * the two fluxes are equal. That is what makes "the flux through a circuit"
 * a meaningful phrase in the next chapter.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "not a technicality — do not skim it"     title + framing line
 *   1  "one loop, a flat disc and a dome"        the drawing: rim, disc, dome
 *   2  "S₁ and S₂ share the boundary loop C"     the only condition that matters
 *   3  "together they enclose a volume"          shading + "one closed surface"
 *   4  "the total flux out must be zero"         Φ_out(S₂) + Φ_out(S₁) = 0
 *   5  "the normals oppose ⇒ one sign flips"     outward-normal arrows + Φ₁ = Φ₂
 *   6  "say what it means in words"              the flux linked to a loop
 *   7  "the payoff for induction"                'flux through a circuit' + chip
 */

import React from "react";
import { Ellipse, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch05Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("The flux belongs to the loop", "Flux loop ka hai, surface ka nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 310 64 C 500 60, 640 68, 780 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("Do not skim this one — it is why 'the flux through a circuit' means anything at all.",
             "Isko skip mat karo — 'flux through a circuit' ka matlab isi se banta hai.")}
        </T>
      </Fade>

      {/* ---------------- LEFT: the two surfaces on one rim ---------------- */}
      {/* beat 3 shading sits behind the outlines */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Path d="M 130 330 C 130 170, 430 170, 430 330 Z" fill="#1C1A1614" />
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Ellipse cx={280} cy={330} rx={150} ry={44} fill={CREAM} fillOpacity={0.85} stroke="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)}
        d="M 130 330 C 130 170, 430 170, 430 330" stroke={INK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)}
        d="M 130 330 A 150 44 0 1 0 430 330 A 150 44 0 1 0 130 330" stroke={RED} sw={3} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={280} y={336} size={13} fill={INK_LIGHT} weight={800}>{t("S₁ — flat disc", "S₁ — flat disc")}</T>
        <T x={392} y={240} size={13} fill={INK_LIGHT} weight={800} anchor="start">{t("S₂ — dome", "S₂ — dome")}</T>
        <T x={110} y={326} size={13} fill={RED} weight={800} anchor="end">{t("rim C", "rim C")}</T>
      </Fade>

      {/* beat 3 — the pair is a closed surface */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={280} y={422} size={12.5} fill={MUTED} weight={700}>
          {t("the volume trapped between them", "beech mein phansa hua volume")}
        </T>
      </Fade>

      {/* beat 5 — the two outward normals */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(280, 208, 280, 152)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={arrowD(160, 358, 160, 402)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={294} y={148} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ out of S₂ — upward", "n̂ S₂ se bahar — upar")}
        </T>
        <T x={174} y={400} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ out of S₁ — downward", "n̂ S₁ se bahar — neeche")}
        </T>
      </Fade>

      {/* ---------------- RIGHT COLUMN ---------------- */}
      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={560} y={132} size={14} fill={RED} weight={800} anchor="start">
          {t("TWO SURFACES, ONE BOUNDARY", "DO SURFACES, EK BOUNDARY")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={560} y={160} size={13} fill={INK} weight={700} anchor="start">
          {t("S₁ and S₂ may be any shape at all.", "S₁ aur S₂ kisi bhi shape ke ho sakte hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={560} y={184} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          {t("All that matters is that their edges coincide: ∂S₁ = ∂S₂ = C.",
             "Bas itna zaroori hai ki unke edges milein: ∂S₁ = ∂S₂ = C.")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={560} y={230} size={14} fill={RED} weight={800} anchor="start">
          {t("TOGETHER THEY ARE A CLOSED SURFACE", "MILKAR YE EK CLOSED SURFACE HAIN")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={258} size={13} fill={INK} weight={700} anchor="start">
          {t("The pair traps a volume — so treat S₁ ∪ S₂ as one closed surface.",
             "Jodi ek volume ghere leti hai — S₁ ∪ S₂ ko ek closed surface maano.")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={306} size={13.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("Gauss's law on that closed surface:", "Us closed surface par Gauss's law:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={560} y={336} size={16} fill={INK} weight={900} anchor="start">
          ∮ B · dA = Φ_out(S₂) + Φ_out(S₁) = 0
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={560} y={376} size={12.5} fill={RED} weight={700} anchor="start">
          {t("Re-orient both the same way through the rim and one sign flips:",
             "Dono ko rim ke through ek hi orientation do — ek sign palat jaata hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={560} y={412} size={20} fill={GREEN} weight={900} anchor="start">
          Φ(S₁) = Φ(S₂)
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={452} size={14} fill={RED} weight={800} anchor="start">
          {t("SAY IT IN WORDS", "ISE SHABDON MEIN KAHO")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={560} y={478} size={13} fill={INK} weight={700} anchor="start">
          {t("The magnetic flux linked with a loop is well defined —", "Loop se linked magnetic flux well defined hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={560} y={502} size={13} fill={INK} weight={700} anchor="start">
          {t("any surface you stretch across it gives the same answer.",
             "us par koi bhi surface tano, jawab wahi aayega.")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={60} y={470} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Next chapter you will write 'the flux through a circuit' —", "Agle chapter mein 'flux through a circuit' likhoge —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={496} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("and a circuit is only a loop of wire.", "aur circuit toh sirf taar ka ek loop hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <Chip x={40} y={540} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Without surface independence that phrase would be ambiguous — and induction could not be written down at all",
             "★ Surface independence ke bina wo phrase ambiguous hota — aur induction likha hi nahi ja sakta")}
        </Chip>
      </Fade>
    </Scene>
  );
}

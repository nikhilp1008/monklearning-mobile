/**
 * P12Ch05 · Section 32 — "Cause and effect: the magnetising field, the response, and the total"
 * Subtopic: Magnetic Properties of Materials
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).  Verdict: DRIFT.
 *
 * WHAT THE BOARD USED TO TEACH: ferromagnetic domain theory — exchange
 * coupling, domain-wall motion, and soft-versus-hard materials with Alnico and
 * transformer cores. A different section's material entirely.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the three-symbol chain and its limits.
 *     H — the magnetising field you APPLY, typically with current in a coil
 *     M — the magnetisation, the material's RESPONSE: net dipole moment
 *         per unit volume
 *     B — the TOTAL field inside, the sum of both contributions, B = μ₀(H + M)
 *     warning: this H is not the Earth's horizontal component — which is
 *         exactly why the Earth's one was written B_H
 *     χ = M / H, dimensionless, sorts the three families
 *     M = χH with χ constant is a LINEAR-material statement only (dia, para);
 *         ferromagnets are non-linear and history-dependent → hysteresis
 *     Curie's law needs a paramagnet far from saturation; ferro rules hold
 *         only below the Curie temperature
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "three symbols do that job"           title + underline
 *   1  "follow the chain across the board"   coil → sample → total, labelled
 *   2  "H is what you apply, M is…, B is…"   the three definitions
 *   3  "now a warning that saves marks"      H is not the Earth's B_H
 *   4  "the ratio is the susceptibility"     χ = M/H and the three families
 *   5  "the limiting conditions"             linear materials only (+ line on graph)
 *   6  "ferromagnets are wildly non-linear"  history dependence (+ curve on graph)
 *   7  "two more limits to hold"             Curie's law, Curie temperature + chip
 */

import React from "react";
import { Ellipse, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const COIL = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const DIPOLES = [424, 460, 496, 532, 568, 604];

export default function P12Ch05Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Cause, response, total — three different symbols",
             "Cause, response, total — three different symbols")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 250 62 C 480 58, 660 66, 830 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the chain ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={190} y={96} size={13.5} fill={RED} weight={800}>{t("CAUSE", "CAUSE")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Rect x={80} y={124} width={220} height={34} fill={CREAM} stroke={INK} strokeWidth={2} />
        {COIL.map((i) => (
          <Ellipse key={i} cx={92 + i * 26} cy={141} rx={9} ry={22} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        ))}
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(320, 141, 384, 141)} stroke={INK} sw={2.2} dur={0.4} />

      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={520} y={96} size={13.5} fill={RED} weight={800}>{t("RESPONSE", "RESPONSE")}</T>
        <Rect x={400} y={118} width={240} height={46} rx={6} fill={CREAM} stroke={GREEN} strokeWidth={2} />
        {DIPOLES.map((x) => (
          <Path key={x} d={arrowD(x, 158, x, 124)} fill="none" stroke={GREEN} strokeWidth={2.1} strokeLinecap="round" />
        ))}
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={arrowD(660, 141, 724, 141)} stroke={INK} sw={2.2} dur={0.4} />

      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={865} y={96} size={13.5} fill={RED} weight={800}>{t("TOTAL", "TOTAL")}</T>
        <Rect x={740} y={118} width={250} height={46} rx={6} fill={CREAM} stroke={INK} strokeWidth={2} />
        <Path d={arrowD(754, 128, 976, 128)} fill="none" stroke={GREEN} strokeWidth={2.1} strokeLinecap="round" />
        <Path d={arrowD(754, 141, 976, 141)} fill="none" stroke={GREEN} strokeWidth={2.1} strokeLinecap="round" />
        <Path d={arrowD(754, 154, 976, 154)} fill="none" stroke={GREEN} strokeWidth={2.1} strokeLinecap="round" />
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={190} y={186} size={16} fill={INK} weight={900}>H</T>
        <T x={520} y={186} size={16} fill={INK} weight={900}>M</T>
        <T x={865} y={186} size={16} fill={INK} weight={900}>B</T>
      </Fade>

      {/* ---------------- beat 2 — the three definitions ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={216} size={13.5} fill={INK} weight={700} anchor="start">
          {t("H  ·  the magnetising field — what you apply, typically by running current through a coil",
             "H  ·  the magnetising field — what you apply, typically by running current through a coil")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={60} y={240} size={13.5} fill={INK} weight={700} anchor="start">
          {t("M  ·  the magnetisation — how the material responds: net dipole moment per unit volume",
             "M  ·  the magnetisation — how the material responds: net dipole moment per unit volume")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={60} y={264} size={13.5} fill={GREEN} weight={800} anchor="start">
          {t("B  ·  the total field inside — the sum of both contributions,  B = μ₀ (H + M)",
             "B  ·  the total field inside — the sum of both contributions,  B = μ₀ (H + M)")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — the warning ---------------- */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 66 282 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={300} size={13.5} fill={RED} weight={800} anchor="start">
          {t("warning · this H, the magnetic intensity, has nothing to do with the Earth's horizontal component",
             "warning · this H, the magnetic intensity, has nothing to do with the Earth's horizontal component")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={84} y={324} size={13} fill={INK} weight={700} anchor="start">
          {t("that is exactly why the Earth's one was written B_H — to keep the plain symbol H free for this use",
             "that is exactly why the Earth's one was written B_H — to keep the plain symbol H free for this use")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — susceptibility ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={56} y={356} size={14} fill={RED} weight={800} anchor="start">
          {t("SUSCEPTIBILITY — THE RESPONSE OVER THE CAUSE", "SUSCEPTIBILITY — THE RESPONSE OVER THE CAUSE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={56} y={386} size={15.5} fill={INK} weight={900} anchor="start">
          {t("χ = M / H   —  a single dimensionless number", "χ = M / H   —  a single dimensionless number")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={56} y={410} size={13} fill={INK} weight={700} anchor="start">
          {t("small and negative for diamagnets · small and positive for paramagnets · enormous for ferromagnets",
             "small and negative for diamagnets · small and positive for paramagnets · enormous for ferromagnets")}
        </T>
      </Fade>

      {/* ---------------- beats 5 & 6 — the limits, with an M-against-H sketch ---- */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={56} y={444} size={13} fill={RED} weight={800} anchor="start">
          {t("LIMITING CONDITIONS", "LIMITING CONDITIONS")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={56} y={466} size={13} fill={INK} weight={700} anchor="start">
          {t("M = χ H, with χ a fixed constant, holds only for LINEAR materials",
             "M = χ H, with χ a fixed constant, holds only for LINEAR materials")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={56} y={488} size={13} fill={GREEN} weight={800} anchor="start">
          {t("in practice that means diamagnets and paramagnets, and nothing else",
             "in practice that means diamagnets and paramagnets, and nothing else")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={56} y={518} size={13} fill={INK} weight={700} anchor="start">
          {t("ferromagnets are wildly non-linear — χ depends on how strong the applied field is,",
             "ferromagnets are wildly non-linear — χ depends on how strong the applied field is,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={56} y={540} size={13} fill={INK} weight={700} anchor="start">
          {t("and on the material's past history. That history dependence is called hysteresis.",
             "and on the material's past history. That history dependence is called hysteresis.")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={760} y={344} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("M against H", "M against H")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 760 450 L 1000 450" stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M 760 450 L 760 364" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={1006} y={454} size={12.5} fill={MUTED} weight={800} anchor="start">H</T>
        <T x={752} y={362} size={12.5} fill={MUTED} weight={800} anchor="end">M</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d="M 760 450 L 960 390" stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={966} y={386} size={12.5} fill={GREEN} weight={800} anchor="start">linear</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.3)}
        d="M 760 450 C 796 446, 822 408, 856 394 C 894 378, 928 374, 960 372"
        stroke={RED} sw={2.4} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={966} y={368} size={12.5} fill={RED} weight={800} anchor="start">ferro</T>
      </Fade>

      {/* ---------------- beat 7 — two more limits ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={720} y={486} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Curie's law: paramagnets far from saturation", "Curie's law: paramagnets far from saturation")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={720} y={508} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("ferro rules hold only below the Curie temperature —", "ferro rules hold only below the Curie temperature —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={720} y={530} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("above it, it becomes an ordinary paramagnet", "above it, it becomes an ordinary paramagnet")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Chip x={40} y={554} w={1000} h={40} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ apply H · the material responds with M · the total inside is B = μ₀(H + M) · χ = M/H sorts the families",
             "★ apply H · the material responds with M · the total inside is B = μ₀(H + M) · χ = M/H sorts the families")}
        </Chip>
      </Fade>
    </Scene>
  );
}

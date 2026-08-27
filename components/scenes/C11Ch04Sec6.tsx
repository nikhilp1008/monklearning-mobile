/**
 * C11 Chemistry Ch04 · Section 6 — "The Born-Haber cycle for lattice enthalpy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Fast section: 8 beats @ 8s apart.
 *
 * Beats (en/hi identical [0,8,16,24,32,40,48,56]):
 *  0 can't measure lattice enthalpy directly
 *  1 Hess's law statement (below where the diagram will sit)
 *  2 cycle skeleton: M(s)+½X₂(g), MX(s), direct ΔH_f arrow between them
 *  3 ΔH_sub arrow: M(s) → M(g)
 *  4 ΔH_ie + ½ΔH_diss arrow: → M⁺(g) + X(g) + e⁻
 *  5 ΔH_eg arrow: → M⁺(g) + X⁻(g)
 *  6 ΔH_lattice arrow: → MX(s) (closes the cycle)
 *  7 balance-sheet takeaway + green verdict chip
 *
 * Layout plan:
 *  b2   | TopLeft/MX(s)/direct arrow | T/Draw | x195..305 y120; x814..846 y373
 *  b3-5 | left-column steps + arrows | T/Draw | x195..310 y120..375, x250 col
 *  b6   | lattice arrow (horizontal) | Draw   | x365..755 y373
 *  b0   | intro line                 | T mid  | x?..?     y95
 *  b1   | Hess's law line            | T mid  | x?..?     y420
 *  b7   | takeaway + chip            | T/Chip | x260..820 y455..523
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("The Born-Haber cycle", "Born-Haber cycle")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 430 80 C 480 76, 600 76, 650 80" stroke={RED} sw={2.2} dur={0.5} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("can't measure lattice enthalpy directly", "lattice enthalpy directly nahi maap sakte")}
        </T>
      </Fade>

      {/* beat 2 — cycle skeleton */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={250} y={120} size={14} weight={700} fill={INK}>
          M(s) + ½X₂(g)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={830} y={373} size={16} weight={700} fill={GREEN}>
          MX(s)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={arrowD(310, 116, 795, 358)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={600} y={220} size={12} fill={AMBER_DARK} anchor="start">
          {t("ΔH_f (direct)", "ΔH_f (direct)")}
        </T>
      </Fade>

      {/* beat 3 — sublimation */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(250, 132, 250, 186)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={270} y={162} size={11} fill={INK} anchor="start">
          ΔH_sub
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={250} y={205} size={14} weight={700} fill={INK}>
          M(g) + ½X₂(g)
        </T>
      </Fade>

      {/* beat 4 — ionisation + half dissociation */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(250, 217, 250, 271)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={270} y={238} size={11} fill={INK} anchor="start">
          ΔH_ie
        </T>
        <T x={270} y={258} size={11} fill={INK} anchor="start">
          ½ ΔH_diss
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={250} y={290} size={13} weight={700} fill={INK}>
          M⁺(g) + X(g) + e⁻
        </T>
      </Fade>

      {/* beat 5 — electron gain */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={arrowD(250, 302, 250, 356)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={270} y={330} size={11} fill={INK} anchor="start">
          ΔH_eg
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={250} y={375} size={14} weight={700} fill={INK}>
          M⁺(g) + X⁻(g)
        </T>
      </Fade>

      {/* beat 6 — lattice enthalpy closes the cycle */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(365, 373, 755, 373)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={560} y={358} size={12} weight={700} fill={GREEN}>
          ΔH_lattice
        </T>
      </Fade>

      {/* beat 1 — Hess's law (fresh space below the diagram) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={420} size={12} fill={INK} script>
          {t(
            "Hess's law: same start & end → same total ΔH (any path)",
            "Hess's law: same start & end → same total ΔH (koi bhi path)"
          )}
        </T>
      </Fade>

      {/* beat 7 — takeaway */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={455} size={12} fill={RED}>
          {t(
            "balance sheet: spend on sublimation + ionisation + bond-breaking",
            "balance sheet: sublimation + ionisation + bond-breaking mein kharch"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={477} size={12} fill={GREEN}>
          {t("...return: electron gain + lattice formation", "...wapas: electron gain + lattice formation")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={260} y={495} w={560} h={28} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t(
            "small, highly charged ions → large lattice enthalpy → forms readily",
            "chhote, highly charged ions → badi lattice enthalpy → aasani se banta"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

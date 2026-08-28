/**
 * Ch11 · Section 60 — "The whole chapter on one page"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 60 not yet uploaded, verify-scene.mjs could
 * not be run. The full consolidated formula sheet — dense text-forward
 * rows, one per beat. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 foundation · 2 four processes · 3 capacities ·
 *  4 engines/fridges/pumps · 5 Carnot ceiling · 6 entropy · 7 golden
 *  thread (boxed, 2 lines).
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 22, red)  | T mid | x540 y64
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1..6 | 6 formula rows  | T mid | x540 y115/140/165/190/215/240 (size11)
 *  b7 | box (h60)          | Draw  | x220..860 y270..330
 *  b7 | line1/2 (13,w700)  | T mid | x540 y295/318
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the whole chapter on one page", "poora chapter ek page par")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("every equation, in the order you actually use them", "har equation, jis order mein use karte ho")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={11} fill={INK} script={false}>
          {t("FOUNDATION: PV=nRT · ΔQ=ΔU+ΔW · W=∫PdV · ΔU=nCvΔT (always)", "FOUNDATION: PV=nRT · ΔQ=ΔU+ΔW · W=∫PdV · ΔU=nCvΔT (hamesha)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={140} size={11} fill={INK} script={false}>
          {t("PROCESSES: isochoric W=0 · isobaric W=nRΔT · isothermal nRT·lnV · adiabatic PVᵞ=const", "PROCESSES: isochoric W=0 · isobaric W=nRΔT · isothermal nRT·lnV · adiabatic PVᵞ=const")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={165} size={11} fill={INK} script={false}>
          CAPACITIES: Cp−Cv=R · Cv=f/2·R · γ=1+2/f · Cv=R/(γ−1), Cp=γR/(γ−1)
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={190} size={11} fill={INK} script={false}>
          ENGINES: W=Q₁−Q₂ · η=1−Q₂/Q₁ · COP_fridge=Q₂/W · COP_pump=COP_fridge+1
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={215} size={11} fill={INK} script={false}>
          {t("CARNOT: η=1−T₂/T₁ · Q₂/Q₁=T₂/T₁ · COPs share denom (T₁−T₂)", "CARNOT: η=1−T₂/T₁ · Q₂/Q₁=T₂/T₁ · COPs share denom (T₁−T₂)")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={240} size={11} fill={INK} script={false}>
          {t("ENTROPY: dS=dQrev/T · ΔS_universe≥0 · isothermal:nR·lnV · phase:mL/T", "ENTROPY: dS=dQrev/T · ΔS_universe≥0 · isothermal:nR·lnV · phase:mL/T")}
        </T>
      </Fade>

      {/* beat 7 — the golden thread */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 228 270 h 624 q 8 0 8 8 v 44 q 0 8 -8 8 h -624 q -8 0 -8 -8 v -44 q 0 -8 8 -8" stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={540} y={295} size={13} fill={INK} weight={700} script={false}>
          {t("1st law = bookkeeping (conserves energy)", "1st law = bookkeeping (energy conserve)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={318} size={13} fill={INK} weight={700} script={false}>
          {t("2nd law = direction (entropy never falls)", "2nd law = direction (entropy kabhi nahi girti)")}
        </T>
      </Fade>
    </Scene>
  );
}

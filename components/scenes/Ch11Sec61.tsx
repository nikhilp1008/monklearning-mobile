/**
 * Ch11 · Section 61 — "Rapid recap and memory aids" (FINAL SECTION)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 61 not yet uploaded, verify-scene.mjs could
 * not be run. The chapter's closing section — a numbered one-line-per-
 * idea recap ending in the exam reflex, boxed for emphasis. Re-run once
 * audio lands.
 *
 * Beats (9): 0 hook · 1 state vs path · 2 reading a P-V graph ·
 *  3 capacities in one breath · 4 engines and fridges · 5 second law in
 *  words · 6 Carnot is the crown · 7 entropy quantifies the arrow ·
 *  8 THE exam reflex (boxed, 2 lines).
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 22, red)  | T mid | x540 y64
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1..7 | 7 numbered rows | T mid | x540 y115/138/161/184/207/230/253 (size11)
 *  b8 | box (h70)          | Draw  | x180..900 y280..350
 *  b8 | line1/2 (14,w800)  | T mid | x540 y305/328
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("rapid recap and memory aids", "rapid recap aur memory aids")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("the night-before recap — one crisp line per idea", "night-before recap — har idea ki ek crisp line")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={11} fill={INK} script={false}>
          {t("1. STATE vs PATH: P,V,T,U=state; Q,W=path. ΔU always Cv. Cycle: ΔU=0, Q=W.", "1. STATE vs PATH: P,V,T,U=state; Q,W=path. ΔU hamesha Cv. Cycle: ΔU=0, Q=W.")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={138} size={11} fill={INK} script={false}>
          {t("2. READING P-V: vertical=isochoric, horizontal=isobaric, curve=isothermal/adiabatic (steeper)", "2. READING P-V: vertical=isochoric, horizontal=isobaric, curve=isothermal/adiabatic (steeper)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={161} size={11} fill={INK} script={false}>
          {t("3. CAPACITIES: f=3,5,6 (mono/di/poly). Cv=f/2·R. γ=5/3,7/5,4/3. ΔU never uses Cp.", "3. CAPACITIES: f=3,5,6 (mono/di/poly). Cv=f/2·R. γ=5/3,7/5,4/3. ΔU kabhi Cp nahi.")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={184} size={11} fill={INK} script={false}>
          {t("4. ENGINES: W=Q₁−Q₂. η=take-home fraction. COP denom=ALWAYS work. COP can exceed 1.", "4. ENGINES: W=Q₁−Q₂. η=take-home fraction. COP denom=HAMESHA work. COP 1 se zyada ho sakta.")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={207} size={11} fill={INK} script={false}>
          {t("5. SECOND LAW: KP bans η=1; Clausius bans free cold→hot. Reversible=slow+lossless.", "5. SECOND LAW: KP bans η=1; Clausius free cold→hot bans karta. Reversible=slow+lossless.")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={230} size={11} fill={INK} script={false}>
          {t("6. CARNOT: ceiling η=1−T₂/T₁ (kelvin). Lower T₂ helps MORE than raising T₁.", "6. CARNOT: ceiling η=1−T₂/T₁ (kelvin). T₂ ghatana T₁ badhane se ZYADA madad karta.")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={253} size={11} fill={INK} script={false}>
          {t("7. ENTROPY: dQrev/T. Universe's S never falls. Split system+surroundings, add.", "7. ENTROPY: dQrev/T. Universe ka S kabhi nahi girta. System+surroundings split, add karo.")}
        </T>
      </Fade>

      {/* beat 8 — the one exam reflex above all */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 188 280 h 704 q 8 0 8 8 v 54 q 0 8 -8 8 h -704 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={RED} sw={2.4} dur={0.9} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={305} size={14} fill={INK} weight={800} script={false}>
          {t("name the process → choose the law", "process ko naam do → law choose karo")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={540} y={328} size={14} fill={INK} weight={800} script={false}>
          {t("convert to KELVIN → write signs BEFORE substituting", "KELVIN mein convert karo → substitute se PEHLE signs likho")}
        </T>
      </Fade>
    </Scene>
  );
}

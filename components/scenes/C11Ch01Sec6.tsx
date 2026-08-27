/**
 * C11 Ch01 · Section 6 — "Worked examples: changes and the edge case"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,18.6,31.32,44.46,54.62,69.98,88.15,99.51,118.88]):
 *  0 Example 3 (JEE Main) given: 4 processes to classify (dims at beat 5)
 *  1 camphor sublimation → physical (state change ≠ chemical change)
 *  2 milk souring → chemical (lactose→lactic acid, irreversible)
 *  3 sugar in tea → physical (recoverable, no new substance)
 *  4 digestion → chemical (new, smaller molecules)
 *  5 Example 4 (JEE Advanced) given: is CuSO₄ dissolving just like NaCl?
 *  6 NaCl case: ions disperse, fully recovered → physical, claim holds
 *  7 CuSO₄ case: white → turns BLUE (hydrated), + heat — chemically distinct
 *  8 guardrail: claim not fully correct — colour + heat are warning signs
 *
 * House palette has no blue, so the white→blue fact is carried by the TEXT
 * label ("→ BLUE"), not by literal hue — the hydrated circle uses AMBER as
 * the "something changed here" highlight, same convention as elsewhere.
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script14 ink)         | T st  | x90  y90  [dims@b5]
 *  b1-4 | 4 rows (label/chip/reason) | —     | y130/195/260/325 (as Sec5)
 *  b5 | given 2 (script14 ink)       | T st  | x90  y115
 *  b6 | NaCl crystal (square)        | Draw  | x225..275 y150..190
 *  b6 | label/tag/chip               | T/Chip| cx250 y208/230/250..280
 *  b7 | circle white/blue + arrow    | Draw  | c(700,175) c(800,175) r24
 *  b7 | labels/note/chip             | T/Chip| y163/213/238/262..290
 *  b8 | guardrail l1 (script16 red)  | T mid | x540  y316
 *  b8 | guardrail l2 (13 muted)      | T mid | x540  y340
 *  b8 | guardrail l3 (12 muted)      | T mid | x540  y362
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS_EX3: [string, string, "physical" | "chemical", string, string][] = [
  ["camphor sublimation", "physical", "physical", "solid→vapour, SAME substance — a state change ≠ chemical change", "solid→vapour, SAME substance — state change chemical nahi hota"],
  ["milk souring", "chemical", "chemical", "lactose→lactic acid (NEW substance) — can't un-sour it", "lactose→lactic acid (NAYI substance) — wapas meetha nahi hota"],
  ["sugar in tea", "physical", "physical", "recoverable by evaporation — no new substance", "evaporation se wapas milta — koi nayi substance nahi"],
  ["digestion", "chemical", "chemical", "big molecules → new, smaller ones (reactions)", "bade molecules → naye, chhote molecules (reactions)"],
];

export default function C11Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={RED} script>
          {t("changes and the edge case", "changes aur ek edge case")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given (JEE Main); fully removed (not dimmed) once
          Example 4 takes over the board at beat 5, freeing real space for it */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.4)}>
        <T x={90} y={90} size={14} fill={INK} script anchor="start">
          {t(
            "Example 3 (JEE Main): physical or chemical? — camphor, milk souring, sugar in tea, digestion",
            "Example 3 (JEE Main): physical ya chemical? — camphor, doodh khatta, chai mein sugar, digestion"
          )}
        </T>
      </Fade>

      {ROWS_EX3.map(([label, verdictEn, kind, reasonEn, reasonHi], i) => {
        const k = i + 1;
        const rowY = [130, 195, 260, 325][i];
        const color = kind === "physical" ? GREEN : RED;
        return (
          <React.Fragment key={label}>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={17} fill={INK} weight={700} anchor="start">
                {label}
              </T>
            </Fade>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 1)}>
              <Chip x={380} y={rowY - 25} w={160} h={34} fill={CREAM} stroke={color} textFill={INK} size={15} script={false}>
                {verdictEn}
              </Chip>
            </Fade>
            <Fade on={beat >= k && beat < 5} delay={dl(k, 1.8)}>
              <T x={90} y={rowY + 24} size={12} fill={MUTED} script anchor="start">
                {t(reasonEn, reasonHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — Example 4 given (JEE Advanced edge case) */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={90} y={115} size={14} fill={INK} script anchor="start">
          {t(
            "Example 4 (JEE Advanced): is dissolving CuSO₄ just like dissolving NaCl?",
            "Example 4 (JEE Advanced): CuSO₄ ghulna bhi NaCl jaisa hi physical hai?"
          )}
        </T>
      </Fade>

      {/* beat 6 — NaCl: claim holds */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 225 150 h 50 v 40 h -50 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={250} y={208} size={12} fill={MUTED} script>
          NaCl
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={250} y={230} size={11} fill={MUTED} script>
          {t("ions disperse → fully recovered (evaporation)", "ions bikharte → evaporation se wapas milte hain")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <Chip x={165} y={250} w={170} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("= physical ✓", "= physical ✓")}
        </Chip>
      </Fade>

      {/* beat 7 — CuSO4: white -> BLUE (hydrated), chemically distinct */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 676 175 A 24 24 0 1 1 724 175 A 24 24 0 1 1 676 175" stroke={INK} sw={2} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={700} y={213} size={11} fill={MUTED} script>
          {t("white", "safed")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={749} y={158} size={10} fill={AMBER_DARK} script>
          +H₂O
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={arrowD(728, 175, 772, 175)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 2.3)} d="M 776 175 A 24 24 0 1 1 824 175 A 24 24 0 1 1 776 175" stroke={AMBER_DARK} sw={2} dur={0.6} fill={AMBER} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={800} y={213} size={12} fill={RED} weight={700} script>
          {t("→ BLUE", "→ NEELA")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={750} y={238} size={11} fill={MUTED} script>
          {t(
            "CuSO₄·5H₂O + hydrated Cu²⁺ — chemically distinct + heat released",
            "CuSO₄·5H₂O + hydrated Cu²⁺ — chemically alag + heat nikalti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <Chip x={640} y={262} w={220} h={28} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("≠ physical only!", "sirf physical nahi!")}
        </Chip>
      </Fade>

      {/* beat 8 — guardrail: claim not fully correct */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={316} size={16} fill={RED} script>
          {t("the claim is not fully correct", "claim poori tarah sahi nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={540} y={340} size={13} fill={MUTED} script>
          {t(
            "dissolving = physical, but NEW COLOUR + heat = chemical interaction too",
            "ghulna = physical, par NAYA RANG + heat = chemical interaction bhi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={540} y={362} size={12} fill={MUTED} script>
          {t(
            "warning signs: a new coloured species, an energy change",
            "warning signs: nayi rangeen species, energy change"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

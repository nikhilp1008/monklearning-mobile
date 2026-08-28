/**
 * Ch11 · Section 55 — "Why reversible heat, and why entropy is a state function"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 55 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 trick: reversible path · 2 dS=dQ_rev/T (boxed) ·
 *  3 irreversible ⇒ use any reversible path, same endpoints · 4 guardrail:
 *  kelvin always · 5 system's ΔS can be ±0 · 6 universe's ΔS never
 *  decreases · 7 equality only for reversible (boxed).
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 20, red)  | T mid | x210..870 y44..74 (bl 64)
 *  b0 | hook (11,script)   | T mid | x540 y90
 *  b1 | line (12)          | T mid | x540 y115
 *  b2 | dS chip (h32)      | Chip  | x400..680 y140..172
 *  b3 | line (11)          | T mid | x540 y188
 *  b4 | note (11,script)   | T mid | x540 y213
 *  b5 | line (12)          | T mid | x540 y238
 *  b6 | line (13,w700)     | T mid | x540 y263
 *  b7 | chip (h32)         | Chip  | x300..780 y295..327
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("why reversible heat, and why entropy is a state function", "reversible heat kyun, aur entropy state function kyun")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={90} size={11} fill={MUTED} script>
          {t("S is a state fn, Q a path fn — how do we rescue one from the other?", "S state fn hai, Q path fn — ek se doosra kaise nikalte hain?")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={12} fill={INK} script={false}>
          {t("the trick: insist on the REVERSIBLE path", "trick: REVERSIBLE path par zor do")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={400} y={140} w={280} h={32} fill={INK} textFill={CREAM} size={16} script={false}>
          dS = dQ_rev / T
        </Chip>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={11} fill={INK} script={false}>
          {t("irreversible ⇒ compute ΔS along ANY reversible path, same endpoints", "irreversible ⇒ ΔS kisi bhi reversible path se, same endpoints")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={213} size={11} fill={MUTED} script>
          {t("needs reversible heat AND kelvin, always", "reversible heat AUR kelvin chahiye, hamesha")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={238} size={12} fill={INK} script={false}>
          {t("system's ΔS can be +, −, or 0 — may legitimately FALL", "system ka ΔS +, −, ya 0 ho sakta — legitimately GIR sakta")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={263} size={13} fill={INK} weight={700} script={false}>
          {t("it's the UNIVERSE's ΔS that never decreases", "UNIVERSE ka ΔS hi kabhi nahi ghatta")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={300} y={295} w={480} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("ΔS=0 ONLY for reversible — real processes: STRICTLY positive", "ΔS=0 SIRF reversible ke liye — real: STRICTLY positive")}
        </Chip>
      </Fade>
    </Scene>
  );
}

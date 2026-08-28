/**
 * Ch12 · Section 39 — "Deriving the specific heats and gamma"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.27, 16.27, 17.27, 18.27, 19.27, 33.95, 56.39]):
 *  0 title + intro · 1 step1: U=(f/2)nRT · 2 step2: Cv=f/2 R · 3 step3:
 *    Cp=Cv+R (Mayer's) · 4 step4: γ=Cp/Cv=1+2/f boxed · 5 table: mono/di/poly
 *    γ values · 6 why it matters: γ ⇒ atomicity, more modes ⇒ lower γ · 7
 *    handy inverses Cv, Cp from γ
 *
 * Layout plan (Anek width≈0.5×size×chars):
 *  b0 | title (script 21, red)          | T mid | x270..810 y33..68 (bl56)
 *  b0 | intro (12, ink, script)         | T mid | x540 y82
 *  b1 | step1 (14, ink)                 | T mid | x540 y106
 *  b2 | step2 (14, ink)                 | T mid | x540 y130
 *  b3 | step3 (14, ink)                 | T mid | x540 y154
 *  b4 | boxed γ=1+2/f (big, green)      | Chip  | x400..680 y172..212
 *  b5 | 3 gamma chips                    | Chip  | y232..266 x100/420/740
 *  b6 | why-it-matters lines ×2         | T mid | x540 y300 / y324
 *  b7 | inverses (14, ink, bold)        | T mid | x540 y358
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={21} fill={RED} script>
          {t("deriving the specific heats and gamma", "specific heats aur gamma derive karna")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={82} size={12} fill={INK} script>
          {t(
            "one measured number reveals what the gas is made of",
            "ek measured number gas ka atomicity bata deta"
          )}
        </T>
      </Fade>

      {/* beat 1 — step 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={14} fill={INK}>
          1. U = (f/2)nRT (equipartition)
        </T>
      </Fade>

      {/* beat 2 — step 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={130} size={14} fill={INK}>
          {t("2. Cv = f/2 R (const V: all heat → U, no work)", "2. Cv = f/2 R (const V: saari heat → U, no work)")}
        </T>
      </Fade>

      {/* beat 3 — step 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={154} size={14} fill={INK}>
          {t("3. Cp = Cv + R = (f/2 + 1)R (Mayer's relation)", "3. Cp = Cv + R = (f/2 + 1)R (Mayer's relation)")}
        </T>
      </Fade>

      {/* beat 4 — step 4, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={172} w={280} h={40} fill={GREEN} textFill="#fff" size={19} script={false}>
          4. γ = Cp/Cv = 1 + 2/f
        </Chip>
      </Fade>

      {/* beat 5 — table of standard values */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={100} y={232} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          mono: γ=5/3≈1.67
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={420} y={232} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          diatomic: γ=7/5=1.40
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <Chip x={740} y={232} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          polyatomic: γ=4/3≈1.33
        </Chip>
      </Fade>

      {/* beat 6 — why it matters */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={300} size={14} fill={GREEN} script>
          {t("γ depends only on f ⇒ reveals atomicity at a glance", "γ sirf f par depend ⇒ atomicity ek nazar mein")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={324} size={13} fill={INK} script>
          {t("more modes to store energy ⇒ lower γ", "energy store karne ke jyada modes ⇒ lower γ")}
        </T>
      </Fade>

      {/* beat 7 — handy inverses */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={358} size={14} fill={INK} weight={700}>
          Cv = R/(γ−1), Cp = γR/(γ−1)
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch11 · Section 31 — "The gamma of a gas mixture"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 31 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 given (2mol mono + 4mol di) · 2 prediction:
 *  between the two · 3 Cv_mix=13/6R · 4 Cp_mix=19/6R (Mayer) ·
 *  5 γ_mix=19/13≈1.46 · 6 verdict: pulled toward diatomic · 7 general
 *  recipe.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 26, red)  | T mid | x540 y64
 *  b0 | hook (12,script)   | T mid | x540 y98
 *  b1 | given (13)         | T mid | x540 y126
 *  b2 | prediction (12,scr)| T mid | x540 y152
 *  b3 | Cv line (12)       | T mid | x540 y182
 *  b4 | Cp line (13)       | T mid | x540 y208
 *  b5 | gamma (15,w700)    | T mid | x540 y238
 *  b6 | verdict (12,script)| T mid | x540 y272
 *  b7 | recipe chip (h32)  | Chip  | x290..790 y305..337
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the gamma of a gas mixture", "gas mixture ka gamma")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("blend two gases — find the effective capacities and γ", "do gases mix karo — effective capacities aur γ")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={126} size={13} fill={INK} script={false}>
          {t("2.0 mol monatomic + 4.0 mol diatomic", "2.0 mol monatomic + 4.0 mol diatomic")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={152} size={12} fill={MUTED} script>
          {t("γ_mix lands BETWEEN the two, pulled toward the dominant", "γ_mix dono ke BEECH — dominant ki taraf khichta")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={182} size={12} fill={INK} script={false}>
          Cv_mix = (2×3/2R + 4×5/2R)/6 = 13/6 R ≈ 2.17R
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={208} size={13} fill={INK} script={false}>
          Cp_mix = Cv_mix + R = 19/6 R
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={238} size={15} fill={INK} weight={700} script={false}>
          γ_mix = 19/13 ≈ 1.46
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={272} size={12} fill={GREEN} script>
          {t("between 1.67 (mono) and 1.40 (di) — pulled toward di (4:2)", "1.67 (mono) aur 1.40 (di) ke beech — di ki taraf (4:2)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={290} y={305} w={500} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("recipe: mole-weight → Mayer → ratio = γ", "recipe: mole-weight → Mayer → ratio = γ")}
        </Chip>
      </Fade>
    </Scene>
  );
}

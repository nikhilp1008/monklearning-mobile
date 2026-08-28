/**
 * Ch12 · Section 45 — Worked example [JEE Advanced]: gamma of a gas mixture
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.35, 19.54, 32.51, 42.84, 60.76, 61.76, 62.76]):
 *  0 title + problem · 1 THE PICTURE: 2 He + 3 O2 dots, method note (average
 *    Cv by moles, never γ) · 2 heat capacities add by moles · 3 formula
 *    Cv_mix · 4 substitute ⇒ 2.1R · 5 Cp=3.1R ⇒ γ≈1.48 · 6 verdict: between
 *    mono/di, weighted to O2 · 7 crucial insight: γ not additive
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 20, red)          | T mid | x270..810 y38..74 (bl64)
 *  b0 | problem (12, ink, script)       | T mid | x540 y96
 *  b1 | He dots ×2 · O2 dots ×3         | mix   | x400..460 / x555..610 y113..127
 *  b1 | dot labels (11)                 | T mid | x412/580 y142
 *  b1 | method note (12, red, script)   | T mid | x540 y168
 *  b2 | reasoning (12, ink, script)     | T mid | x540 y198
 *  b3 | formula (14, ink)               | T mid | x540 y224
 *  b4 | substitute (14, ink)            | T mid | x540 y250
 *  b5 | result (16, amber_dark, bold)   | T mid | x540 y280
 *  b6 | verdict (13, green, script)     | T mid | x540 y312
 *  b7 | insight chip (green)             | Chip  | x160..920 y340..380
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("gamma of a gas mixture [JEE Advanced]", "gas mixture ka gamma [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={96} size={12} fill={INK} script>
          {t("2 mol He (mono) + 3 mol O₂ (diatomic) ⇒ γ of mixture?", "2 mol He (mono) + 3 mol O₂ (diatomic) ⇒ γ mixture?")}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: composition + method warning */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Circle cx={400} cy={120} r={7} fill={AMBER_DARK} />
        <Circle cx={425} cy={120} r={7} fill={AMBER_DARK} />
        <Circle cx={555} cy={120} r={7} fill={INK} />
        <Circle cx={580} cy={120} r={7} fill={INK} />
        <Circle cx={605} cy={120} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={412} y={144} size={11} fill={AMBER_DARK}>
          He×2
        </T>
        <T x={580} y={144} size={11} fill={INK}>
          O₂×3
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={170} size={12} fill={RED} script>
          {t("average Cv by moles — NEVER γ directly", "Cv ko moles se average karo — γ SEEDHA nahi")}
        </T>
      </Fade>

      {/* beat 2 — reasoning */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={198} size={12} fill={INK} script>
          {t(
            "heat capacities add by moles (shared T, total U = sum of parts)",
            "heat capacities moles se add hoti (shared T, total U = sum)"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={224} size={14} fill={INK}>
          Cv_mix = (n₁Cv₁ + n₂Cv₂)/(n₁+n₂)
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={14} fill={INK}>
          = (2×1.5R + 3×2.5R)/5 = 2.1R
        </T>
      </Fade>

      {/* beat 5 — gamma result */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={280} size={16} fill={AMBER_DARK} weight={700}>
          Cp = 3.1R ⇒ γ = 3.1/2.1 ≈ 1.48
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={312} size={13} fill={GREEN} script>
          {t(
            "≈1.48 sits between mono (1.67) & di (1.40) — weighted toward O₂",
            "≈1.48 mono (1.67) aur di (1.40) ke beech — O₂ ki taraf jhuka"
          )}
        </T>
      </Fade>

      {/* beat 7 — crucial insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={160} y={340} w={760} h={40} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t(
            "you can't average γ directly (ratio ≠ additive) — average Cv, then form the ratio",
            "γ seedha average nahi kar sakte — Cv average karo, phir ratio banao"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

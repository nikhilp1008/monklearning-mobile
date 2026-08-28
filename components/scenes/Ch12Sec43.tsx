/**
 * Ch12 · Section 43 — Worked example [NEET]: reading atomicity from gamma
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.5, 21.67, 31.15, 40.28, 50.26, 64.34]):
 *  0 title + problem · 1 rearrange f=2/(γ-1) · 2 substitute 2/(1.40-1) · 3
 *    =5 · 4 f=5 ⇒ diatomic, Cv=5/2 R≈20.8 · 5 THE TRAP: f=2/γ struck out · 6
 *    pro move: memorise the trio 1.67/1.40/1.33
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (13, ink, script)       | T mid | x540 y94
 *  b1 | rearrange (16, ink)             | T mid | x540 y126
 *  b2 | substitute (15, ink)            | T mid | x540 y156
 *  b3 | result (18, amber_dark, bold)   | T mid | x540 y188
 *  b4 | verdict chip (green)             | Chip  | x300..780 y210..252
 *  b5 | trap line (15, red) + strike    | T/Draw| x540 y288
 *  b6 | pro-move (script 14, ink)       | T mid | x540 y322
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
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("reading atomicity from gamma [NEET]", "gamma se atomicity padhna [NEET]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={13} fill={INK} script>
          {t("γ = 1.40 for a gas ⇒ atomicity? Cv?", "γ = 1.40 ek gas ke liye ⇒ atomicity? Cv?")}
        </T>
      </Fade>

      {/* beat 1 — rearrange */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={126} size={16} fill={INK} weight={700}>
          f = 2/(γ−1)
        </T>
      </Fade>

      {/* beat 2 — substitute */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={156} size={15} fill={INK}>
          = 2/(1.40 − 1) = 2/0.40
        </T>
      </Fade>

      {/* beat 3 — result */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={188} size={18} fill={AMBER_DARK} weight={700}>
          f = 5
        </T>
      </Fade>

      {/* beat 4 — verdict */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={300} y={210} w={480} h={42} fill={GREEN} textFill="#fff" size={17} script={false}>
          {t("f=5 ⇒ diatomic, Cv = 5/2 R ≈ 20.8 J/mol·K", "f=5 ⇒ diatomic, Cv = 5/2 R ≈ 20.8 J/mol·K")}
        </Chip>
      </Fade>

      {/* beat 5 — THE TRAP */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={288} size={15} fill={RED}>
          {t("trap: f = 2/γ (forgetting the −1)", "trap: f = 2/γ (−1 bhool jaana)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d={crossD(478, 270, 125, 22)} stroke={RED} sw={2.2} dur={0.5} />

      {/* beat 6 — pro move */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={322} size={14} fill={INK} script>
          {t(
            "memorise the trio: γ = 1.67 mono · 1.40 di · 1.33 poly",
            "trio yaad rakho: γ = 1.67 mono · 1.40 di · 1.33 poly"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

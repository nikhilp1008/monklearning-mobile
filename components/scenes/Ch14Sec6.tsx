/**
 * Ch14 · Section 6 — "Worked example: the two-string speed trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.6, 29.14, 34.67, 47.94, 59.38, 68.6, 82.24]):
 *  0 hook badge: NEET classic — looks scary, equals 1
 *  1 the picture: string A (fat, 4T) vs string B (thin, T), same material
 *  2 the question: v_A : v_B = ?
 *  3 the trap: naive √4 = 2 → "2:1" — crossed out
 *  4 the fix: μ = ρA, A ∝ d² → μ ∝ d²
 *  5 μ_A/μ_B = (d_A/d_B)² = 4
 *  6 put together: √(4 × ¼) = √1
 *  7 verdict: v_A : v_B = 1 : 1
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..390  y100..132
 *  b0 | underline                     | Draw  | x100..380 y140
 *  b1 | string A (thick) + T arrows   | Draw  | x120..480 y155
 *  b1 | "A: d_A=2d, T_A=4T" (13)      | T mid | x300 bl178            y168..181
 *  b1 | string B (thin) + T arrows    | Draw  | x580..920 y155
 *  b1 | "B: d_B=d, T_B=T" (13)        | T mid | x750 bl178            y168..181
 *  b1 | "same material → same ρ" (13)| T mid | x540 bl200            y187..206
 *  b2 | question chip (h32)          | Chip  | x390..690 y222..254
 *  b3 | trap text (16,red)            | T st  | x60 bl300             y288..305
 *  b3 | "2 : 1" chip, crossed (h36)   | Chip  | x420..530 y280..316
 *  b3 | subcaption (13,red)           | T st  | x60 bl325             y315..329
 *  b4 | "μ=ρ·A, A∝d²→μ∝d²" (15)      | T st  | x60 bl365             y353..369
 *  b5 | "μ_A/μ_B=(d_A/d_B)²=4" (15)   | T st  | x60 bl400             y388..404
 *  b6 | "v_A/v_B=√(4×¼)=√1" (15)      | T st  | x60 bl435             y423..439
 *  b7 | verdict chip (h56,s24)        | Chip  | x350..730 y500..556
 *  b7 | takeaway (13)                 | T mid | x540 bl578            y561..585
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("worked example: the two-string speed trap", "worked example: do-string speed trap")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={300} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ NEET classic — looks scary, equals 1!", "★ NEET classic — dara hua, one nikalta!")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 140 L 380 140" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the picture: string A (fat, 4T) vs string B (thin, T) */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 155 L 450 155" stroke={INK} sw={6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(150, 155, 120, 155)} stroke={RED} sw={2.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={arrowD(450, 155, 480, 155)} stroke={RED} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={300} y={178} size={13} fill={INK}>
          A: d_A = 2d, T_A = 4T
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 600 155 L 900 155" stroke={INK} sw={2.5} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d={arrowD(600, 155, 580, 155)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(900, 155, 920, 155)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={750} y={178} size={13} fill={INK}>
          B: d_B = d, T_B = T
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.0)}>
        <T x={540} y={200} size={13} fill={MUTED} script>
          {t("same material → same ρ", "same material → same ρ")}
        </T>
      </Fade>

      {/* beat 2 — the question */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={390} y={222} w={300} h={32} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          {t("find: v_A : v_B = ?", "find karo: v_A : v_B = ?")}
        </Chip>
      </Fade>

      {/* beat 3 — the trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={300} size={16} fill={RED} anchor="start">
          naive: √(T_A/T_B) = √4 = 2 →
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <Chip x={420} y={280} w={110} h={36} fill="#fff" stroke={RED} textFill={RED} size={16} script={false}>
          2 : 1
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={crossD(420, 280, 110, 36)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={60} y={325} size={13} fill={RED} script anchor="start">
          {t("(forgot: thicker string is heavier!)", "(bhool gaye: moti string bhaari bhi hai!)")}
        </T>
      </Fade>

      {/* beat 4 — the fix */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={365} size={15} fill={INK} anchor="start">
          μ = ρ·A, and A ∝ d² → μ ∝ d²
        </T>
      </Fade>

      {/* beat 5 — mu ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={400} size={15} fill={INK} anchor="start">
          μ_A/μ_B = (d_A/d_B)² = 2² = 4
        </T>
      </Fade>

      {/* beat 6 — put together */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={435} size={15} fill={INK} anchor="start">
          v_A/v_B = √[(T_A/T_B)·(μ_B/μ_A)] = √[4 × ¼] = √1
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={350} y={500} w={380} h={56} fill={GREEN} textFill="#fff" size={24} script={false}>
          v_A : v_B = 1 : 1
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={578} size={13} fill={GREEN} script>
          {t("extra pull exactly cancels extra weight", "extra khinchav extra vazan ko cancel kar deta")}
        </T>
      </Fade>
    </Scene>
  );
}

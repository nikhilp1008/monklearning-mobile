/**
 * P12Ch05 · Section 70 — "Chapter 5 Closing: Formula Vault & Exam Mastery Roadmap"
 * Subtopic: Electromagnets, Retentivity, Coercivity & Chapter Close
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Chapter 5 Formula Vault & NEET / JEE Exam Roadmap", "Chapter 5 Formula Vault & NEET / JEE Exam Roadmap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Master Formula Vault */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("MASTER FORMULA VAULT RECAP", "MASTER FORMULA VAULT RECAP")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            τ = mB sin θ | U = −mB cos θ | T = 2π √(I/mB)
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            B_H = B_E cos I | tan I = 2 tan λ | cot² δ = cot² δ₁ + cot² δ₂
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Material & Gauss Equations */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("MATERIAL & GAUSS EQUATIONS VAULT", "MATERIAL & GAUSS EQUATIONS VAULT")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={14} fill={INK} weight={800}>
            B = μ₀(H + M) = μ₀ μ_r H | μ_r = 1 + χ | χ = C / T
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={GREEN} weight={800}>
            ∮ B · dA = 0 | ∇ · B = 0 | P_loss = Area × V × f
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Chapter 5 Complete */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("CLASS 12 PHYSICS CHAPTER 5 — 100% COMPLETE!", "CLASS 12 PHYSICS CHAPTER 5 — 100% COMPLETE!")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={18} fill={GREEN} weight={800}>
            🎉 All 70/70 Interactive Visual Scenes for Magnetism & Matter Complete!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Class 12 Physics Chapter 5 Complete (70/70)! Next up: Chapter 6 (Electromagnetic Induction)! ✓",
            "★ Class 12 Physics Chapter 5 Complete (70/70)! Agla target: Chapter 6 (Electromagnetic Induction)! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

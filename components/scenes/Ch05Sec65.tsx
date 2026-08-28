/**
 * Ch05 · Section 65 — "Work, Energy and Power — the whole chapter in formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.49, 39.59, 63.83, 85.59, 109.48, 125.35, 139.86, 154.37] · dur 179.2;
 *        hi [0, 15.96, 36.86, 61.7, 80.98, 105.81, 120.41, 135, 146.43] · dur 171.26):
 *  0 title + subtitle
 *  1 skeleton: four stacked bands + headers + dependency arrows
 *  2 band 1 line 1 — work & KE (W, K, W_net = ΔK)
 *  3 band 1 line 2 — PE & mechanical energy (mgh, ½kx², −Gm₁m₂⁄r, E = K+U)
 *  4 band 2 line 1 — conservation (Kᵢ+Uᵢ=K_f+U_f, W_nc=ΔE, E=mc²)
 *  5 band 2 line 2 — power (P=W/t=F·v, const-power kinematics)
 *  6 band 3 — collisions (momentum always, elastic, restitution)
 *  7 band 4 — vertical circle (√gR, √5gR, 6mg)
 *  8 the whisper: reconstruct each line from its one idea
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  bands x60..1020: y 100/196/292/388, h 84 · headers st x84 bl top+20 ·
 *  b0(2-line) lines cx540 bl top+44 / top+70 · b1(2-line) same ·
 *  b2/b3(1-line) cx540 bl top+50 · arrows x540 between bands
 *  closing cx540 bl 504 / bl 530
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const TOPS = [100, 196, 292, 388];
const BAND_H = 84;
const STROKES = [INK, GREEN, AMBER_DARK, RED];

function band(y: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v 60 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -60 q 0 -12 12 -12`;
}

export default function Ch05Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const headers = [
    t("1 · work & energy", "1 · work & energy"),
    t("2 · conservation & power", "2 · conservation & power"),
    t("3 · collisions", "3 · collisions"),
    t("4 · vertical circle", "4 · vertical circle"),
  ];

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Work, Energy & Power — Six Lines, One Board", "Work, Energy & Power — Chhe Lines, Ek Board")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "every result of the chapter, organised so the pieces show how they connect",
            "chapter ka har result, is tarah sajaya ki tukde dikhaayein kaise jude hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the four-block skeleton */}
      {TOPS.map((y, i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 1.4)}
            d={band(y)}
            stroke={STROKES[i]}
            sw={2}
            dur={0.5}
          />
          <Fade on={beat >= 1} delay={dl(1, 1.1 + i * 1.4)}>
            <T x={84} y={y + 20} size={11} fill={MUTED} script anchor="start">
              {headers[i]}
            </T>
          </Fade>
          {i < TOPS.length - 1 ? (
            <Draw
              on={beat >= 1}
              delay={dl(1, 1.5 + i * 1.4)}
              d={arrowD(540, y + BAND_H, 540, y + BAND_H + 11)}
              stroke={MUTED}
              sw={2}
              dur={0.25}
            />
          ) : null}
        </G>
      ))}

      {/* beat 2 — band 1 line 1: work & KE */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={TOPS[0] + 44} size={13} fill={INK} weight={600}>
          W = F·S = FS cos θ = ∫F dx · K = ½mv² = p²⁄2m · W_net = ΔK
        </T>
      </Fade>

      {/* beat 3 — band 1 line 2: PE & mechanical energy */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={TOPS[0] + 70} size={13} fill={INK} weight={600}>
          U = mgh, ½kx², −Gm₁m₂⁄r · F = −dU⁄dx · E = K + U
        </T>
      </Fade>

      {/* beat 4 — band 2 line 1: conservation */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={TOPS[1] + 44} size={13} fill={INK} weight={600}>
          {t(
            "Kᵢ+Uᵢ = K_f+U_f (no friction) · W_nc = ΔE · E = mc², 1u = 931.5 MeV",
            "Kᵢ+Uᵢ = K_f+U_f (friction nahi) · W_nc = ΔE · E = mc², 1u = 931.5 MeV"
          )}
        </T>
      </Fade>

      {/* beat 5 — band 2 line 2: power */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={TOPS[1] + 70} size={13} fill={INK} weight={600}>
          P = W⁄t = F·v = Fv cos θ · const power: v ∝ √t, x ∝ t^1.5
        </T>
      </Fade>

      {/* beat 6 — band 3: collisions */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={TOPS[2] + 50} size={13} fill={INK} weight={600}>
          {t(
            "momentum: ALWAYS conserved · elastic: u₁−u₂=v₂−v₁ · e = (v₂−v₁)⁄(u₁−u₂)",
            "momentum: HAMESHA conserve · elastic: u₁−u₂=v₂−v₁ · e = (v₂−v₁)⁄(u₁−u₂)"
          )}
        </T>
      </Fade>

      {/* beat 7 — band 4: vertical circle */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={TOPS[3] + 50} size={13} fill={INK} weight={600}>
          {t(
            "top √(gR) · bottom √(5gR) · T_bottom − T_top = 6mg",
            "top √(gR) · bottom √(5gR) · T_bottom − T_top = 6mg"
          )}
        </T>
      </Fade>

      {/* beat 8 — the whisper: one idea per line */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={504} size={13} fill={GREEN} script>
          {t(
            "work-energy from Newton's II · conservation from conservative forces · collisions from momentum always",
            "work-energy Newton ke II se · conservation conservative forces se · collisions momentum hamesha se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={540} y={530} size={13} fill={GREEN} script>
          {t(
            "reconstruct each line from its one idea — that is exam-ready, not memorised",
            "har line ko uske ek idea se dobara banao — yahi exam-ready hai, ratta nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

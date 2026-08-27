/**
 * Ch04 · Section 16 — "Derivation: final velocities in a 1-D elastic collision"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.9, 30.7, 45.7, 61.3, 75.1, 88.1, 110.6, 122.5]):
 *  0 title
 *  1 figure: m₁ u₁→ m₂ u₂→ | elastic | m₁ v₁→ m₂ v₂→ + conserved note
 *  2 eq (i) momentum grouped
 *  3 eq (ii) KE grouped + factored
 *  4 amber note: divide (ii)/(i), factors cancel
 *  5 boxed: u₁+v₁ = v₂+u₂ ⇒ u₁−u₂ = v₂−v₁
 *  6 green prize: approach = separation, e = 1
 *  7 standard pair formulas + side note
 *  8 red margin: equal masses swap — carrom
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  fig | m₁ box x120..168 y96..136 · arr (172,116)→(225,116) "u₁" cx198 bl 100 ·
 *    m₂ box x270..318 · arr (322,116)→(360,116) "u₂" cx341 bl 100 ·
 *    mid arr (420,116)→(500,116) "elastic" cx460 bl 100 ·
 *    m₁' x540..588 arr (592,116)→(630,116) "v₁" cx611 bl 100 ·
 *    m₂' x690..738 arr (742,116)→(800,116) "v₂" cx771 bl 100 ·
 *    conserved cx540 bl 175
 *  eqs st x120: (i) bl 215 · (ii) bl 251 · note bl 285 ·
 *  box x120..560 y300..344 bl 329 · green bl 375 / 399 ·
 *  pair bl 440 / 468 · side note st x560 bl 455
 *  b8 | bar x66 y495..560 · lines st x84 bl 515 / 541
 */

import React from "react";
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const box = (x: number) => `M ${x} 96 h 48 v 40 h -48 z`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — the 1-D elastic collision",
            "CBSE Derivation — 1-D elastic collision"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={`${box(120)} ${box(270)}`} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={144} y={122} size={14} fill={INK} weight={700}>
          m₁
        </T>
        <T x={294} y={122} size={14} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d={`${arrowD(172, 116, 225, 116)} ${arrowD(322, 116, 360, 116)}`}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={198} y={100} size={13} fill={GREEN} weight={700}>
          u₁
        </T>
        <T x={341} y={100} size={13} fill={GREEN} weight={700}>
          u₂
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d={arrowD(420, 116, 500, 116)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={460} y={100} size={12} fill={MUTED} script>
          {t("elastic", "elastic")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d={`${box(540)} ${box(690)}`} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={564} y={122} size={14} fill={INK} weight={700}>
          m₁
        </T>
        <T x={714} y={122} size={14} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.6)}
        d={`${arrowD(592, 116, 630, 116)} ${arrowD(742, 116, 800, 116)}`}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={611} y={100} size={13} fill={AMBER_DARK} weight={700}>
          v₁
        </T>
        <T x={771} y={100} size={13} fill={AMBER_DARK} weight={700}>
          v₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={540} y={175} size={13} fill={AMBER_DARK} script>
          {t(
            "conserved: momentum (always) + KE (because elastic)",
            "conserved: momentum (hamesha) + KE (kyunki elastic)"
          )}
        </T>
      </Fade>

      {/* beat 2 — equation (i) */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={120} y={215} size={16} fill={INK} weight={700} anchor="start">
          (i)&nbsp;&nbsp;m₁(u₁ − v₁) = m₂(v₂ − u₂)
        </T>
      </Fade>

      {/* beat 3 — equation (ii) */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={120} y={251} size={16} fill={INK} weight={700} anchor="start">
          (ii)&nbsp;m₁(u₁ − v₁)(u₁ + v₁) = m₂(v₂ − u₂)(v₂ + u₂)
        </T>
      </Fade>

      {/* beat 4 — the clever step */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={120} y={285} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the clever step: divide (ii) by (i) — mass-and-bracket factors cancel",
            "chalaak step: (ii) ko (i) se divide karo — mass-bracket factors cancel"
          )}
        </T>
      </Fade>

      {/* beat 5 — what survives */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 132 300 h 416 q 12 0 12 12 v 20 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={340} y={329} size={17} fill={INK} weight={800}>
          u₁ + v₁ = v₂ + u₂&nbsp;&nbsp;⇒&nbsp;&nbsp;u₁ − u₂ = v₂ − v₁
        </T>
      </Fade>

      {/* beat 6 — the real prize */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={120} y={375} size={14} fill={GREEN} script anchor="start">
          {t(
            "speed of APPROACH = speed of SEPARATION",
            "speed of APPROACH = speed of SEPARATION"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={120} y={399} size={14} fill={GREEN} script anchor="start">
          {t(
            "they part exactly as fast as they met — restitution e = 1",
            "utni hi tezi se alag hote hain jitni se mile — restitution e = 1"
          )}
        </T>
      </Fade>

      {/* beat 7 — the standard pair */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={120} y={440} size={14} fill={INK} weight={700} anchor="start">
          v₁ = [(m₁−m₂)u₁ + 2m₂u₂] ⁄ (m₁+m₂)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={120} y={468} size={14} fill={INK} weight={700} anchor="start">
          v₂ = [2m₁u₁ + (m₂−m₁)u₂] ⁄ (m₁+m₂)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={560} y={455} size={12} fill={MUTED} script anchor="start">
          {t(
            "know these — but know the boxed line better",
            "ye aane chahiye — par boxed line usse behtar"
          )}
        </T>
      </Fade>

      {/* beat 8 — sanity check */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 495 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={515} size={14} fill={RED} script anchor="start">
          {t(
            "sanity check, m₁ = m₂: v₁ = u₂ and v₂ = u₁ — they simply SWAP",
            "sanity check, m₁ = m₂: v₁ = u₂ aur v₂ = u₁ — bas SWAP kar lete hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={541} size={14} fill={GREEN} script anchor="start">
          {t(
            "exactly what carrom coins do head-on",
            "bilkul wahi jo carrom coins head-on karte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch08 · Section 19 — "Worked example — the alkyne trap (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.34, 25.26, 33.79, 48.04, 63.49, 79.96, 104.79]):
 *  0 title (always-on, seq1) · 1 task · 2 diagram: structure drawn, H-C4≡C3
 *  collinear · 3 suffix (COOH>OH → -oic acid, C1; OH→2-hydroxy-) · 4 chain+name
 *  (2-hydroxybut-3-ynoic acid, boxed) · 5 hybridization tags (sp,sp,sp3,sp2) ·
 *  6 geometry (C3-C4 collinear 180°, C≡C = 1σ+2π) · 7 red trap (wrong numbering
 *  from alkyne end)
 *
 * LEFT: structure x88-430 y140-300. RIGHT: reasoning x480-1020 y140-310.
 * Layout plan:
 *  b1 | task (14, ink)                   | T mid | y98
 *  b2 | H-C4≡C3-C2(OH)-C1(COOH)           | Draw  | y140..240
 *  b2 | numbers 4/3/2/1                   | T mid | y265
 *  b3 | suffix text                       | T st  | x480 y140
 *  b4 | chain text + name box             | T+rect| x480 y175, box y200..240
 *  b5 | sp/sp/sp3/sp2 tags                | T mid | y295
 *  b6 | geometry, 2 lines                 | T st  | x480 y275/305
 *  b7 | margin bar + red trap             | Draw+T| x60 y345..375 · x76 y363
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, tripleBondD } from "./chem-kit";

export default function C11Ch08Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xs = [140, 220, 300, 375]; // C4, C3, C2, C1 (C1 offset near its bent position)

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Worked example — the alkyne trap (JEE Advanced)", "Worked example — alkyne ka trap (JEE Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={98} size={13} fill={INK}>
          HC≡C−CH(OH)−COOH: {t("name, hybridize every C, explain C3-C4 geometry", "naam do, har C hybridize karo, C3-C4 geometry batao")}
        </T>
      </Fade>

      {/* beat 2 — the structure: H-C4≡C3 collinear, then C2, C1 */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={bondD(140, 240, 105, 240)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={90} y={245} size={15} fill={INK} weight={700} anchor="end">
          H
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={tripleBondD(140, 240, 220, 240, 5)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={bondD(220, 240, 300, 240)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d={bondD(300, 240, 270, 205)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={255} y={197} size={15} fill={AMBER_DARK} weight={700} anchor="end">
          OH
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={bondD(300, 240, 360, 200)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.9)}
        d={doubleBondD(360, 200, 360, 155, 3)}
        stroke={INK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={360} y={140} size={15} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={bondD(360, 200, 405, 178)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={420} y={173} size={15} fill={INK} weight={700}>
          OH
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        {xs.map((x, i) => (
          <T key={x} x={x} y={265} size={13} fill={AMBER_DARK} weight={700}>
            {4 - i}
          </T>
        ))}
      </Fade>

      {/* beat 3 — seniority decides the suffix */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={480} y={140} size={13} fill={INK} anchor="start">
          {t("COOH > OH → suffix -oic acid, C1; OH → 2-hydroxy-", "COOH, OH se senior → suffix -oic acid, C1; OH → 2-hydroxy-")}
        </T>
      </Fade>

      {/* beat 4 — chain + name */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={480} y={175} size={13} fill={INK} anchor="start">
          {t("4C chain; triple bond C3-C4 → but-3-ynoic acid", "4C chain; triple bond C3-C4 → but-3-ynoic acid")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Rect x={480} y={200} width={280} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={620} y={226} size={16} fill={INK} weight={800}>
          2-hydroxybut-3-ynoic acid
        </T>
      </Fade>

      {/* beat 5 — hybridization of every carbon */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={xs[0]} y={295} size={13} fill={GREEN} weight={700}>
          sp
        </T>
        <T x={xs[1]} y={295} size={13} fill={GREEN} weight={700}>
          sp
        </T>
        <T x={xs[2]} y={295} size={13} fill={RED} weight={700}>
          sp³
        </T>
        <T x={xs[3]} y={295} size={13} fill={RED} weight={700}>
          sp²
        </T>
      </Fade>

      {/* beat 6 — the geometry */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={480} y={275} size={13} fill={INK} anchor="start">
          {t("C3-C4: both sp, collinear at 180°", "C3-C4: dono sp, 180° par collinear")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={305} size={13} fill={INK} anchor="start">
          {t("C≡C = 1σ + 2π (perpendicular) — cylindrically symmetric", "C≡C = 1σ + 2π (perpendicular) — cylindrically symmetric")}
        </T>
      </Fade>

      {/* beat 7 — the trap: wrong numbering from the alkyne end */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 345 L 60 375" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={363} size={15} fill={RED} script anchor="start">
          {t(
            "trap: numbering from the alkyne end gives 'but-1-ynoic acid' — COOH forces C1 onto the acid",
            "trap: alkyne se number karke 'but-1-ynoic acid' — COOH hi C1 hoga, hamesha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

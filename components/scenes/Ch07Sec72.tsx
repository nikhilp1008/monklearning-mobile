/**
 * Ch07 · Section 72 — "Worked example: the period of a twin-star binary (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 11.36, 20.07, 28, 37.05]):
 *  0 title + problem
 *  1 diagram: two equal stars, midpoint centre, orbit circle
 *  2 ω² formula setup
 *  3 substitute 2M
 *  4 green box: T = 2π√(d³/2GM)
 *  5 red: the factor of 2 lives inside the root
 *  6 red: single-M mistake is wrong by √2
 *  7 red margin: both masses drive the orbit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  star1 c(180,280) r16 · star2 c(380,280) r16 · com dot (280,280) ·
 *   orbit circle r100 dashed · caption cx280 bl410
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..860 y220..272(bl252)
 *  b5 bar x460 y300..352 lines bl320/346
 *  b6 line st x480 bl390
 *  b7 bar x66 y440..492 line bl462
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — twin stars */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — a twin-star binary",
            "Example [JEE Main] — twin-star binary"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "two stars, mass M each, separation d — find the period",
            "do stars, mass M har ek, separation d — period nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the midpoint centre */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle
          cx={280}
          cy={280}
          r={100}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={280} cy={280} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={180} cy={280} r={16} fill={INK} />
        <T x={180} y={320} size={11} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={380} cy={280} r={16} fill={INK} />
        <T x={380} y={320} size={11} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={280} y={410} size={12} fill={INK} script>
          {t(
            "equal masses → centre is exactly the midpoint",
            "barabar masses → centre theek midpoint par"
          )}
        </T>
      </Fade>

      {/* beat 2 — the setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          ω² = G(m₁+m₂) ⁄ d³
        </T>
      </Fade>

      {/* beat 3 — substitute 2M */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          = G(2M) ⁄ d³ = 2GM ⁄ d³
        </T>
      </Fade>

      {/* beat 4 — the period */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 220 h 356 q 12 0 12 12 v 28 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={670} y={252} size={17} fill={INK} weight={800}>
          T = 2π√(d³ ⁄ 2GM)
        </T>
      </Fade>

      {/* beat 5 — the crucial factor of 2 */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 460 300 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={478} y={320} size={13} fill={RED} script anchor="start">
          {t(
            "the factor of 2 lives INSIDE the root",
            "2 ka factor root ke ANDAR rehta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={478} y={346} size={13} fill={RED} script anchor="start">
          {t(
            "it's the TOTAL mass 2M, not a single M",
            "yeh TOTAL mass 2M hai, single M nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the fixed-star mistake */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={390} size={12} fill={RED} script anchor="start">
          {t(
            "treating one star fixed: wrong by a factor of √2",
            "ek star fixed maanna: √2 ke factor se galat"
          )}
        </T>
      </Fade>

      {/* beat 7 — both drive the orbit */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={462} size={13} fill={RED} script anchor="start">
          {t(
            "both masses drive the orbit — always use their SUM",
            "dono masses orbit chalate hain — hamesha SUM use karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

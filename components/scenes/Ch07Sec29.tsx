/**
 * Ch07 · Section 29 — "Surface g: the mass form and the density form"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.91, 26.37, 34.47, 35.47, 36.47, 37.47, 38.47]):
 *  0 title
 *  1 diagram: body on planet, pull arrow, GMm/R² = mg line
 *  2 green box: g = GM/R² (default form)
 *  3 amber: shell theorem assumption
 *  4 density substitution → g = (4/3)πGRρ box
 *  5 comparison line: same ρ → g ∝ R
 *  6 red: dimensions + vector toward centre
 *  7 red margin: independent of the body
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  planet c(230,270) r95 · body square (222..238, 148..164) · pull arrow (230,170)→(230,215) ·
 *   labels "M, R" cx230 bl 275 · caption cx230 bl405
 *  b1 line st x420 bl140: GMm/R² = mg
 *  b2 green box x420..700 y165..217 (bl197)
 *  b3 line st x420 bl255
 *  b4 line st x420 bl300 + green box x420..740 y320..372 (bl352)
 *  b5 line st x420 bl412
 *  b6 bar x66 y450..478 line bl470 (st x84)
 *  b7 bar x66 y500..528 line bl520
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two forms to lock down */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Surface g — the mass form and the density form",
            "Surface g — mass form aur density form"
          )}
        </T>
      </Fade>

      {/* beat 1 — body on a planet */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 0.8)}
          d="M 230 175 A 95 95 0 1 1 229.9 175"
          stroke={INK}
          sw={2.6}
          dur={0.9}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={230} y={278} size={14} fill={INK} weight={700}>
          M, R
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M 222 148 h 16 v 16 h -16 Z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(230, 170, 230, 212)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={420} y={140} size={16} fill={INK} anchor="start" weight={700}>
          G·M·m ⁄ R² = m·g
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={230} y={405} size={12} fill={MUTED} script>
          {t(
            "the pull IS the weight — m cancels",
            "pull hi weight hai — m cancel"
          )}
        </T>
      </Fade>

      {/* beat 2 — the default form */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.6)}
          d="M 432 165 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={560} y={197} size={17} fill={INK} weight={800}>
          g = G·M ⁄ R²
        </T>
      </Fade>

      {/* beat 3 — the assumption */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={420} y={255} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "assumption: shell theorem — all the mass acts at the centre",
            "assumption: shell theorem — saara mass centre par act karta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the density form */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={420} y={300} size={14} fill={INK} anchor="start" weight={700}>
          M = (4⁄3)·π·R³·ρ  →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.8)}
          d="M 432 320 h 296 q 12 0 12 12 v 28 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={580} y={352} size={16} fill={INK} weight={800}>
          g = (4⁄3)·π·G·R·ρ
        </T>
      </Fade>

      {/* beat 5 — comparisons made easy */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={420} y={412} size={13} fill={GREEN} script anchor="start">
          {t(
            "same density → g ∝ R: bigger planet, stronger surface gravity",
            "same density → g ∝ R: bada planet, zyada surface gravity"
          )}
        </T>
      </Fade>

      {/* beat 6 — dimensions, and a vector */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 66 452 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "[g] = LT⁻² · g is a VECTOR — always toward the planet's centre",
            "[g] = LT⁻² · g ek VECTOR hai — hamesha planet ke centre ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 7 — say it for the exam */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 66 502 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "g is independent of the body's mass, size, shape, composition",
            "g body ke mass, size, shape, composition se independent hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

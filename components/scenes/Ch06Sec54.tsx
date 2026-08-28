/**
 * Ch06 · Section 54 — "Deriving the rotational equations of motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,12.29,25.43,35.93,36.93,37.93,38.93,60.26] — b3,b4,b5 fast in
 * EN; hi [0,12.12,23.47,33.62,43.18,56.41,57.41,58.41] — b6,b7 fast in HI →
 * b3..b7 kept ≤0.9 s; b0..b2 have room in both languages):
 *  0 title + subline
 *  1 figure: ω-t graph, straight line from ω₀, shaded trapezium area = θ
 *  2 constant α ⇒ dω/dt fixed, integrate once
 *  3 ω = ω₀ + αt
 *  4 θ = area = rectangle + triangle
 *  5 θ = ω₀t + ½αt² ⇒ ω² = ω₀² + 2αθ
 *  6 work-energy: W = τθ = ½Iω² − ½Iω₀²
 *  7 closing: every step is the linear derivation, symbols swapped
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | axes O(150,300) → t(460,300) "t" st(475,305) · → ω(150,110) "ω" cx150 bl100 ·
 *       trapezium fill (150,260)-(420,150)-(420,300)-(150,300) amber .18 ·
 *       line (150,260)→(420,150) · "ω₀" end(130,258) · "ω" st(430,148) ·
 *       T-tick dashed (420,150)→(420,300) · "T" cx420 bl318 · "θ = area" cx285 bl250
 *  b2 | script13 cx540 bl340
 *  b3 | sans16 cx540 bl370
 *  b4 | script12 cx540 bl400
 *  b5 | sans15 cx540 bl430
 *  b6 | sans14 cx540 bl465
 *  b7 | script13 cx540 bl500 · underline y520 x300..780
 */

import React from "react";
import { Path } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the whole first proof, once you own the pattern */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "deriving the rotational equations of motion",
            "rotational equations of motion ka derivation"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "each derivation: the linear one you know, wearing angular symbols",
            "har derivation: wahi linear wali, angular symbols pehne hue"
          )}
        </T>
      </Fade>

      {/* beat 1 — the ω-t graph, the whole proof in a picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d={`${arrowD(150, 300, 460, 300)} ${arrowD(150, 300, 150, 110)}`}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={475} y={305} size={13} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={150} y={100} size={13} fill={INK} weight={700}>
          ω
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Path
          d="M 150 260 L 420 150 L 420 300 L 150 300 Z"
          fill={AMBER}
          opacity={0.18}
          stroke="none"
        />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 150 260 L 420 150" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={130} y={258} size={12} fill={INK} anchor="end" weight={700}>
          ω₀
        </T>
        <T x={430} y={148} size={12} fill={INK} anchor="start" weight={700}>
          ω
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <Path
          d="M 420 150 V 300"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <T x={420} y={318} size={12} fill={MUTED} weight={700}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={285} y={250} size={13} fill={AMBER_DARK} weight={700}>
          θ = area
        </T>
      </Fade>

      {/* beat 2 — constant α, integrate once */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={340} size={13} fill={INK} script>
          {t(
            "constant α ⇒ dω/dt is fixed — integrate once",
            "constant α ⇒ dω/dt fixed — ek baar integrate karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the first equation (fast) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={370} size={16} fill={INK} weight={700}>
          ω = ω₀ + αt
        </T>
      </Fade>

      {/* beat 4 — θ as rectangle + triangle (fast) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={400} size={12} fill={AMBER_DARK} script>
          {t(
            "θ = area = rectangle ω₀t + triangle ½αt²",
            "θ = area = rectangle ω₀t + triangle ½αt²"
          )}
        </T>
      </Fade>

      {/* beat 5 — the second and third equations (fast) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={430} size={15} fill={INK} weight={700}>
          θ = ω₀t + ½αt²  ⇒  ω² = ω₀² + 2αθ
        </T>
      </Fade>

      {/* beat 6 — work-energy theorem (fast) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={465} size={14} fill={INK} weight={700}>
          W = τθ = ½Iω² − ½Iω₀²
        </T>
      </Fade>

      {/* beat 7 — the pattern, one more time (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={500} size={13} fill={GREEN_DARK} script>
          {t(
            "every step = the linear derivation, angular symbols swapped in",
            "har step = wahi linear derivation, angular symbols ke saath"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 520 h 480" stroke={AMBER} sw={2.2} dur={0.6} />
    </Scene>
  );
}

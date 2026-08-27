/**
 * Ch07 · Section 19 — "Field on the axis of a ring"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.61, 25.34, 35.5, 46.34, 56.75, 67.5, 68.5, 69.5]):
 *  0 title + ring (ellipse), axis, P
 *  1 slant line + √(a²+x²), a and x labels
 *  2 dm element + "every element same distance" (right)
 *  3 dE formula + dE arrow at P
 *  4 opposite element, second arrow, axial resultant, cancel caption
 *  5 axial component formula
 *  6 green box: E = GMx/(a²+x²)^(3/2)
 *  7 end checks: x=0 → 0 · x≫a → GM/x²
 *  8 red margin: max at x = a/√2
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · ring ellipse c(250,250) rx40 ry90 · axis M250 250 H620 dash ·
 *  P (560,250) r5 + label bl236 st x570 · O label (232,272)
 *  slant (250,160)→(560,250) dash · "√(a²+x²)" (400,188) · "a" (236,205) · "x" (405,272)
 *  dm blob (250,160) r5 amber + label (250,142) · opp blob (250,340) r5 + slant2
 *  dE arrows (552,247)→(512,235) / (552,253)→(512,265) · resultant (548,250)→(505,250) ·
 *  θ (528,241) · caption cx350 bl392
 *  right col st x660: b2 line bl140 · b3 formula bl190 · b5 formula bl290 ·
 *  b6 green box x660..1010 y320..372 (text bl352) · b7 lines bl412 / 440
 *  b8 | bar x66 y500..540 · line st x84 bl522
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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

export default function Ch07Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the ring and its axis */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("A uniform ring — field on its axis", "Uniform ring — axis par field")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 250 160 A 40 90 0 1 1 249.9 160"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <Path d="M 250 250 H 620" stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <Circle cx={560} cy={250} r={5} fill={INK} />
        <T x={572} y={240} size={13} fill={INK} anchor="start" weight={700}>
          P
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={236} y={272} size={12} fill={MUTED} weight={700}>
          O
        </T>
      </Fade>

      {/* beat 1 — the one slant distance */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Path d="M 250 160 L 560 250" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={400} y={188} size={13} fill={INK} weight={700}>
          √(a² + x²)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={236} y={205} size={13} fill={INK} weight={700}>
          a
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={405} y={272} size={13} fill={INK} weight={700}>
          x
        </T>
      </Fade>

      {/* beat 2 — split into elements */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={250} cy={160} r={5} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.5} />
        <T x={250} y={142} size={12} fill={AMBER_DARK} weight={700}>
          dm
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={660} y={140} size={13} fill={INK} script anchor="start">
          {t(
            "every element sits at the SAME distance",
            "har element ek hi SAME distance par hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — each element's field */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={660} y={190} size={16} fill={INK} anchor="start" weight={700}>
          dE = G·dm ⁄ (a² + x²)
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={arrowD(552, 247, 512, 235)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={494} y={220} size={11} fill={INK} weight={700}>
          θ
        </T>
      </Fade>

      {/* beat 4 — symmetry: only the axial part survives */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={250} cy={340} r={5} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.5} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Path d="M 250 340 L 560 250" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d={arrowD(552, 253, 512, 265)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={arrowD(548, 250, 505, 250)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={350} y={392} size={12} fill={GREEN} script>
          {t(
            "perpendicular parts cancel — only the axial part survives",
            "perpendicular hisse cancel — sirf axial part bachta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the axial component */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={660} y={290} size={15} fill={INK} anchor="start" weight={700}>
          dE(axis) = dE·cosθ = G·x·dm ⁄ (a²+x²)^(3⁄2)
        </T>
      </Fade>

      {/* beat 6 — integrate dm → M */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.4)}
          d="M 672 320 h 326 q 12 0 12 12 v 28 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={840} y={352} size={16} fill={INK} weight={800}>
          E = G·M·x ⁄ (a²+x²)^(3⁄2)
        </T>
      </Fade>

      {/* beat 7 — check the ends */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={660} y={412} size={13} fill={INK} script anchor="start">
          {t(
            "x = 0 → E = 0 — every pull cancels its opposite",
            "x = 0 → E = 0 — har pull apne opposite se cancel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={660} y={440} size={13} fill={INK} script anchor="start">
          {t(
            "x ≫ a → E ≈ GM ⁄ x² — the ring looks like a point",
            "x ≫ a → E ≈ GM ⁄ x² — ring point jaisa dikhta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the peak */}
      <Draw on={beat >= 8} delay={dl(8, 0.4)} d="M 66 500 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={84} y={522} size={13} fill={RED} script anchor="start">
          {t(
            "dE ⁄ dx = 0 → the field peaks at x = a ⁄ √2",
            "dE ⁄ dx = 0 → field ka peak x = a ⁄ √2 par"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

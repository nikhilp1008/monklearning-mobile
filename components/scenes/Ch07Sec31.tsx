/**
 * Ch07 · Section 31 — "g with depth: only the inner sphere pulls"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 6, 19.4]):
 *  0 title + Earth, digger at depth d, R−d dimension
 *  1 split: inner sphere drawn, shell band above
 *  2 line: distance R−d, only enclosed matter pulls
 *  3 red: the shell above exerts ZERO
 *  4 enclosed mass ratio line
 *  5 acceleration line, simplified
 *  6 green box: g(d) = g(1 − d/R) + centre note
 *  7 red margin: altitude has the 2, depth doesn't → d = 2h
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(230,300) r130 · digger dot (230,205) · inner circle c(230,300) r95 ·
 *   dim M230 172 V296 + "d" (248,196) · "R−d" st (246,262) · caption cx230 bl462
 *  right col st x480: b2 bl150 · b3 bar x460 y175..203 line bl195 ·
 *   b4 bl250 · b5 bl292 · b6 green box x480..940 y320..372 (bl352) + note bl400
 *  b7 bar x66 y500..528 line bl520
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — going down */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("How g falls as you descend", "Neeche utarne par g kaise girta hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 230 170 A 130 130 0 1 1 229.9 170"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <Circle cx={230} cy={205} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Path d="M 230 172 V 197 M 224 172 h 12" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={250} y={192} size={12} fill={INK} anchor="start" weight={700}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <Path d="M 230 213 V 296" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 5" fill="none" />
        <T x={248} y={262} size={12} fill={INK} anchor="start" weight={700}>
          R − d
        </T>
      </Fade>

      {/* beat 1 — split at your level */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d="M 230 205 A 95 95 0 1 1 229.9 205"
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={230} y={340} size={12} fill={GREEN} weight={700}>
          {t("inner sphere", "inner sphere")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={230} y={462} size={12} fill={MUTED} script>
          {t(
            "shell above · inner sphere below",
            "upar shell · neeche inner sphere"
          )}
        </T>
      </Fade>

      {/* beat 2 — only the enclosed matter */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={480} y={150} size={13} fill={INK} script anchor="start">
          {t(
            "distance from centre = R − d · only enclosed matter pulls",
            "centre se doori = R − d · sirf enclosed matter kheenchta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the shell contributes nothing */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 460 175 v 28" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={478} y={195} size={13} fill={RED} script anchor="start">
          {t(
            "shell theorem: the shell ABOVE you exerts ZERO net force",
            "shell theorem: UPAR ka shell ZERO net force lagata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the enclosed mass */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={480} y={250} size={15} fill={INK} anchor="start" weight={700}>
          M(inner) ⁄ M = (R−d)³ ⁄ R³　(uniform ρ)
        </T>
      </Fade>

      {/* beat 5 — the acceleration */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={480} y={292} size={15} fill={INK} anchor="start" weight={700}>
          g(d) = G·M(inner) ⁄ (R−d)² = GM(R−d) ⁄ R³
        </T>
      </Fade>

      {/* beat 6 — the clean result */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.4)}
          d="M 492 320 h 436 q 12 0 12 12 v 28 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={710} y={352} size={17} fill={INK} weight={800}>
          g(d) = g·(1 − d ⁄ R)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={480} y={400} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "at the centre: g = 0 — weightless, though mass and inertia remain",
            "centre par: g = 0 — weightless, par mass aur inertia bane rehte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the contrast with altitude */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 500 v 28" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "altitude carries the factor 2, depth does not — so d = 2h for the same drop",
            "altitude mein 2 ka factor hai, depth mein nahi — isliye same girawat par d = 2h"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

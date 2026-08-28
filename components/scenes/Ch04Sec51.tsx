/**
 * Ch04 · Section 51 — "Derivation: the banking angle on a smooth road"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.7, 41.6, 66.4, 77.7, 98.1, 122.6, 146.4]):
 *  0 title
 *  1 setup + only two forces
 *  2 figure (left col): banked road, car, N tilted, mg down, θ mark
 *  3 amber note (right col): two directions, two different stories
 *  4 vertical equation (1) — right col
 *  5 horizontal equation (2) — right col
 *  6 hero box: tan θ = v²/rg — N and m cancel
 *  7 red margin: mass-independent, same geometry as cyclist / conical pendulum
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  L fig | wedge M100 400 L470 400 L470 360 L130 350 Z · car x250..320 y320..352 ·
 *    N arr (285,320)→(330,240) "N"(338,232 st) · mg arr (285,336)→(285,410) "mg"(298,398 st) ·
 *    dashed guides (285,320)→(285,250) / (285,320)→(360,320) no labels ·
 *    θ arc M148 400 Q146 384 134 382 · "θ"(160,390)
 *  R col x600..1030 | b3 bl 150 · b4 bl 190 · b5 bl 230 ·
 *    b6 box x600..1030 y270..322 bl 304
 *  b7 | bar x66 y415..515 · lines st x84 bl 445 / 471 / 497
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — banking angle, frictionless",
            "CBSE Derivation — banking angle, friction ke bina"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "mass m at speed v on a curve of radius r · smooth road banked at θ",
            "radius r ke curve par speed v se mass m · smooth road θ par banked"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "only two forces: weight mg down · normal N ⊥ to the road",
            "sirf do forces: weight mg neeche · normal N road ke ⊥"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 100 400 L 470 400 L 470 360 L 130 350 Z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 250 320 h 70 v 32 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d="M 148 400 Q 146 384 134 382"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={160} y={390} size={12} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.6)}
        d={arrowD(285, 320, 330, 240)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(285, 336, 285, 410)}
        stroke={RED}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={338} y={232} size={13} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={298} y={398} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <Path
          d="M 285 320 L 285 250"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 5"
          fill="none"
        />
        <Path
          d="M 285 320 L 360 320"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 5"
          fill="none"
        />
      </Fade>

      {/* beat 3 — two directions, two stories */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "two directions, two different stories —",
            "do dishayen, do alag kahaniyan —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={600} y={172} size={12} fill={AMBER_DARK} script anchor="start">
          {t("that reasoning IS the derivation", "yahi tark hi derivation hai")}
        </T>
      </Fade>

      {/* beat 4 — vertical */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={200} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "vertical (no rise/sink): N·cosθ = mg  ...(1)",
            "vertical (na uthe na dhanse): N·cosθ = mg  ...(1)"
          )}
        </T>
      </Fade>

      {/* beat 5 — horizontal */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={600} y={230} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "horizontal (centripetal): N·sinθ = mv²⁄r  ...(2)",
            "horizontal (centripetal): N·sinθ = mv²⁄r  ...(2)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the elegant finish */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 612 270 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={810} y={304} size={17} fill={INK} weight={800}>
          (2)⁄(1): tanθ = v²⁄rg
        </T>
      </Fade>

      {/* beat 7 — mass-independent, shared geometry */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 415 v 100" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={445} size={14} fill={RED} script anchor="start">
          {t(
            "N and m cancel — depends only on v and r, NOT on the vehicle's mass",
            "N aur m cancel — sirf v aur r par, gaadi ke mass par NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={471} size={14} fill={RED} script anchor="start">
          {t(
            "a truck and a scooter need the SAME banked curve at the same speed",
            "truck aur scooter ko same speed par SAME banked curve chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={497} size={14} fill={GREEN} script anchor="start">
          {t(
            "same tanθ = v²⁄rg as a leaning cyclist and a conical pendulum",
            "wahi tanθ = v²⁄rg jhukte cyclist aur conical pendulum mein bhi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

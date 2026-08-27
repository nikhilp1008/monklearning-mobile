/**
 * Ch07 · Section 12 — "Worked example: pull of a rod on a point mass (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.11, 31.15, 42.5, 55.64, 56.64, 57.64, 58.64, 59.64]):
 *  0 title + problem
 *  1 diagram: m, rod (a..a+L), slice dx at distance x, dimension lines
 *  2 red note: no single r
 *  3 λ = M/L, dm = λ dx
 *  4 red pull arrow at m + dF line
 *  5 all pulls align → integrate a → a+L
 *  6 the integral evaluated
 *  7 green box F = GMm/(a(a+L))
 *  8 red margin: far-field sanity check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · sub cx540 bl84
 *  b1 | m (150,180) r7, label bl210 · rod rect x330..730 y168..192 · rod label cx400 bl158 ·
 *      a-dim M157 210 H323 + "a" cx240 bl228 · slice x520/536 v168..192 · "dx" cx528 bl158 ·
 *      x-dim M157 240 H514 + "x" cx335 bl258
 *  b2 | bar x66 y270..322 · lines st x84 bl290 / 316
 *  b3 | line st x100 bl360 · b4 | arrow (162,180)→(200,180) · line st x420 bl360
 *  b5 | line st x100 bl400 · b6 | line st x100 bl445 (→460)
 *  b7 | green box x560..880 y415..470 · text cx720 bl448
 *  b8 | bar x66 y500..556 · lines st x84 bl520 / 546
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — where the shortcut fails */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — the pull of a rod",
            "Example [JEE Advanced] — rod ka pull"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "rod (M, L) on a line · point mass m at distance a from the near end — find F",
            "line par rod (M, L) · near end se distance a par point mass m — F nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup: every slice at a different distance */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={150} cy={180} r={7} fill={INK} />
        <T x={124} y={185} size={13} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 330 168 h 400 v 24 h -400 Z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={400} y={158} size={12} fill={INK} script>
          {t("rod: mass M, length L", "rod: mass M, length L")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Path d="M 157 210 H 323 M 157 204 v 12 M 323 204 v 12" stroke={MUTED} strokeWidth={1.6} fill="none" />
        <T x={240} y={228} size={12} fill={INK} weight={700}>
          a
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 520 168 V 192 M 536 168 V 192"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={528} y={158} size={12} fill={AMBER_DARK} weight={700}>
          dx
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <Path d="M 157 240 H 514 M 157 234 v 12 M 514 234 v 12" stroke={MUTED} strokeWidth={1.6} fill="none" />
        <T x={335} y={258} size={12} fill={INK} weight={700}>
          x
        </T>
      </Fade>

      {/* beat 2 — no single r */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 66 270 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={84} y={290} size={13} fill={RED} script anchor="start">
          {t(
            "cannot write GMm ⁄ r² — there is NO single r",
            "GMm ⁄ r² nahi likh sakte — koi SINGLE r nahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={84} y={316} size={13} fill={RED} script anchor="start">
          {t(
            "parts of the rod sit at genuinely different distances",
            "rod ke hisse sachmuch alag-alag distances par hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — build it from slices */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={100} y={360} size={15} fill={INK} anchor="start" weight={700}>
          λ = M ⁄ L ,   dm = λ·dx
        </T>
      </Fade>

      {/* beat 4 — each slice is a point mass */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.4)}
        d={arrowD(162, 180, 200, 180)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={420} y={360} size={15} fill={INK} anchor="start" weight={700}>
          dF = G·m·dm ⁄ x² = G·m·λ·dx ⁄ x²
        </T>
      </Fade>

      {/* beat 5 — magnitudes add, limits a → a+L */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={100} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "all pulls align — add magnitudes · integrate x from a to a+L",
            "sab pulls ek direction mein — magnitudes jodo · x ko a se a+L tak integrate karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — evaluate */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={100} y={445} size={15} fill={INK} anchor="start" weight={700}>
          F = ∫ₐ⁽ᵃ⁺ᴸ⁾ G·m·λ ⁄ x² dx = G·m·λ·(1⁄a − 1⁄(a+L))
        </T>
      </Fade>

      {/* beat 7 — the closed form */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 572 415 h 296 q 12 0 12 12 v 31 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={720} y={448} size={17} fill={INK} weight={800}>
          F = G·M·m ⁄ a·(a+L)
        </T>
      </Fade>

      {/* beat 8 — the far-field sanity check */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 500 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.3)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "sanity check: a ≫ L → F ≈ GMm ⁄ a² — the rod becomes a point again",
            "sanity check: a ≫ L → F ≈ GMm ⁄ a² — rod phir point ban jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "if your limit fails this test, hunt down the error",
            "limit ye test fail kare, to error dhoondo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

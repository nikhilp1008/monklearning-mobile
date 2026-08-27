/**
 * Ch01 · Section 7 — "The two supplementary units: radian and steradian"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.9, 21.9, 33.9, 54.6, 65.2, 76.8, 91.4]):
 *  0 title + subline + drawn underline
 *  1 dθ = ds/r → rad (formula lands under the left diagram's spot)
 *  2 in words: arc ÷ radius — a length over a length
 *  3 THE PICTURE: circle + radius + arc ds + angle dθ (left), then the
 *    sphere + patch dA one dimension up (right)
 *  4 dΩ = dA/r² → sr
 *  5 area ÷ area
 *  6 centre column: L/L cancels, A/A cancels → M⁰ L⁰ T⁰ — all gone
 *  7 verdict: genuinely dimensionless; treat them as base and you're poisoned
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)     | T mid | x193..886  y30..76 (bl 62)
 *  b0 | subline (script 14, muted) | T mid | x405..675  y91..116 (bl 109) · underline y126
 *  b3 | circle c(250,320) r110     | Draw  | x140..360  y210..430
 *       radii →(−15°)(−50°) · arc ds (red) · angle arc r40 · labels r(299,291)
 *       ds(358,251) dθ(324,273) — all ≥10px off strokes
 *  b3 | sphere c(720,320) r110     | Draw  | x610..830  y210..430 + dashed equator
 *       r-line →(778,258) · patch ellipse c(785,252) · dA(830,228) · r(737,278)
 *  b1 | "dθ = ds/r → rad" (22)     | T mid | x162..338  y461..485 (bl 478)
 *  b4 | "dΩ = dA/r² → sr" (22)     | T mid | x638..803  y461..485 (bl 478)
 *  b2 | note (script 15, green)    | T mid | x131..370  y501..528 (bl 520)
 *  b5 | note (script 15, green)    | T mid | x617..823  y501..528 (bl 520)
 *  b6 | centre column x435..534: "L / L" bl 250 + slashes · "A / A" bl 300 +
 *       slashes · arrow (485,315)→(485,362) · "M⁰ L⁰ T⁰" bl 385 · "all gone!" bl 426
 *  b7 | bar x51 y549..579 · verdict (script 16, red) x62..713 y549..579 (bl 570)
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the two special citizens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "radian & steradian — the two special citizens",
            "radian & steradian — do khaas citizens"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={109} size={14} fill={MUTED} script>
          {t("supplementary · only two · both angles", "supplementary · sirf do · dono angle")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 405 126 C 490 122, 590 129, 675 125"
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />

      {/* beat 1 — the radian's defining relation */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={250} y={478} size={22} fill={INK} weight={800}>
          dθ = ds / r  →  rad
        </T>
      </Fade>

      {/* beat 2 — a length over a length */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={250} y={520} size={15} fill={GREEN} script>
          {t("arc ÷ radius = length ÷ length", "arc ÷ radius = lambai ÷ lambai")}
        </T>
      </Fade>

      {/* beat 3 — the picture: circle (left), sphere (right) */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 140 320 A 110 110 0 1 1 360 320 A 110 110 0 1 1 140 320"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 250 320 L 356.3 291.5"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.3)}
        d="M 250 320 L 320.7 235.7"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.4)}
        d="M 320.7 235.7 A 110 110 0 0 1 356.3 291.5"
        stroke={RED}
        sw={4}
        dur={0.6}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.4)}
        d="M 288.6 309.6 A 40 40 0 0 0 275.7 289.4"
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={299} y={296} size={16} fill={INK} script>
          r
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.8)}>
        <T x={358} y={251} size={16} fill={RED} script>
          ds
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={324} y={278} size={16} fill={AMBER_DARK} script>
          dθ
        </T>
      </Fade>
      {/* sphere */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 9.5)}
        d="M 610 320 A 110 110 0 1 1 830 320 A 110 110 0 1 1 610 320"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 10.5)}>
        <Path
          d="M 610 320 A 110 30 0 0 0 830 320"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 11.5)}
        d="M 720 320 L 778 258"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 12.2)}>
        <T x={737} y={278} size={16} fill={INK} script>
          r
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 12.6)}
        d="M 767 252 a 18 12 -20 1 1 36 0 a 18 12 -20 1 1 -36 0"
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 13.4)}>
        <T x={830} y={228} size={16} fill={RED} script>
          dA
        </T>
      </Fade>

      {/* beat 4 — the steradian */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={720} y={478} size={22} fill={INK} weight={800}>
          dΩ = dA / r²  →  sr
        </T>
      </Fade>

      {/* beat 5 — an area over an area */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={720} y={520} size={15} fill={GREEN} script>
          {t("patch ÷ r² = area ÷ area", "patch ÷ r² = area ÷ area")}
        </T>
      </Fade>

      {/* beat 6 — every dimension cancels */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={485} y={250} size={22} fill={INK} weight={700}>
          L / L
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 455 254 L 477 232 M 493 254 L 515 232"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={485} y={300} size={22} fill={INK} weight={700}>
          A / A
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.5)}
        d="M 455 304 L 477 282 M 493 304 L 515 282"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6.5)}
        d={arrowD(485, 315, 485, 362)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.3)}>
        <T x={485} y={385} size={22} fill={INK} weight={800}>
          M⁰ L⁰ T⁰
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={485} y={426} size={15} fill={RED} script>
          {t("all gone!", "sab gayab!")}
        </T>
      </Fade>

      {/* beat 7 — dimensionless, and the poison warning */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.5)}
        d="M 51 549 L 51 579"
        stroke={RED}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={62} y={570} size={16} fill={RED} script anchor="start">
          {t(
            "dimensionless — but NEVER treat as base, or every analysis is poisoned",
            "dimensionless hain — par base mat maano, warna har analysis zeher ho jaayegi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

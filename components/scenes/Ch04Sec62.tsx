/**
 * Ch04 · Section 62 — "Derivation: springs in series and in parallel"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.3, 41.0, 65.8, 86.0, 107.0, 131.8, 142.6]):
 *  0 title
 *  1 series figure: two springs end-to-end, SAME F throughout
 *  2 series result: 1/k_eq = 1/k1 + 1/k2
 *  3 series insight: reciprocals add → softer
 *  4 parallel figure: two springs side by side, SAME x
 *  5 parallel result: k_eq = k1 + k2
 *  6 opposite results summary line
 *  7 red margin: five-second physical sanity check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L series | zigzag1 x100..220 y150 · zigzag2 x220..340 · F arr (340,150)→(390,150) ·
 *    "F"(400,144 st) · labels k1 cx160 bl 175 / k2 cx280 bl 175 · caption cx220 bl 205
 *  b2 box x84..470 y225..265 bl 251
 *  b3 line cx270 bl 290
 *  R parallel | spring top x620..900 y110 · spring bottom y150 · wall x600 y95..165 ·
 *    block x900..940 y110..150 · F arr (940,130)→(980,130) "F"(988,124 st) · caption cx770 bl 205
 *  b5 box x600..980 y225..265 bl 251
 *  b6 line cx540 bl 320
 *  b7 | bar x66 y360..470 · lines st x84 bl 380 / 406 / 432 / 456
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

export default function Ch04Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const zigzag = (x0: number) =>
    `M ${x0} 150 l 12 -14 l 12 24 l 12 -24 l 12 24 l 12 -24 l 12 24 l 12 -14`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "CBSE Derivation — springs in series and in parallel",
            "CBSE Derivation — springs series aur parallel mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — series figure */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 84 150 H 100" stroke={INK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={zigzag(100)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={zigzag(220)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(340, 150, 390, 150)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={400} y={144} size={13} fill={GREEN} weight={700} anchor="start">
          F
        </T>
        <T x={160} y={175} size={11} fill={INK} script>
          k₁
        </T>
        <T x={280} y={175} size={11} fill={INK} script>
          k₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={220} y={205} size={12} fill={AMBER_DARK} script>
          {t(
            "SERIES: same F transmitted undiminished — extensions add",
            "SERIES: wahi F bina ghate transmit — extensions judte"
          )}
        </T>
      </Fade>

      {/* beat 2 — series result */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 96 225 h 374 q 12 0 12 12 v 16 q 0 12 -12 12 h -374 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={283} y={251} size={14} fill={INK} weight={800}>
          1⁄k_eq = 1⁄k₁ + 1⁄k₂
        </T>
      </Fade>

      {/* beat 3 — softer */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={270} y={290} size={12} fill={RED} script>
          {t(
            "reciprocals add → k_eq is SMALLER — series is SOFTER",
            "reciprocals judte → k_eq CHHOTA — series NARAM"
          )}
        </T>
      </Fade>

      {/* beat 4 — parallel figure */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 600 95 V 165" stroke={INK} sw={2.6} dur={0.5} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.4)}
        d="M 600 110 l 20 -8 l 20 16 l 20 -16 l 20 16 l 20 -16 l 20 16 l 20 -8"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d="M 600 150 l 20 -8 l 20 16 l 20 -16 l 20 16 l 20 -16 l 20 16 l 20 -8"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.4)}
        d="M 900 110 h 30 v 40 h -30 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d={arrowD(930, 130, 970, 130)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={978} y={124} size={13} fill={GREEN} weight={700} anchor="start">
          F
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={770} y={205} size={12} fill={AMBER_DARK} script>
          {t(
            "PARALLEL: same extension x — each spring's force adds",
            "PARALLEL: wahi extension x — har spring ki force judti"
          )}
        </T>
      </Fade>

      {/* beat 5 — parallel result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 612 225 h 356 q 12 0 12 12 v 16 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={790} y={251} size={16} fill={INK} weight={800}>
          k_eq = k₁ + k₂ — STIFFER
        </T>
      </Fade>

      {/* beat 6 — opposite results */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={320} size={13} fill={INK} script>
          {t(
            "series: reciprocals add, softens · parallel: constants add, stiffens",
            "series: reciprocals judte, naram hota · parallel: constants judte, kadak hota"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sanity check */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 360 v 110" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={380} size={14} fill={RED} script anchor="start">
          {t(
            "blank in the exam? picture it — springs side by side must fight harder",
            "exam mein bhool gaye? tasveer dekho — agal-bagal springs zyada ladti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={406} size={14} fill={RED} script anchor="start">
          {t(
            "→ parallel MUST be stiffer · a nose-to-tail chain is floppier",
            "→ parallel KADAK hi hoga · nose-to-tail chain zyada lachili"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={432} size={14} fill={RED} script anchor="start">
          {t(
            "→ series MUST be softer",
            "→ series NARAM hi hoga"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={84} y={456} size={14} fill={GREEN} script anchor="start">
          {t(
            "parallel came out softer? you swapped the rules — five seconds catches it",
            "parallel naram nikla? niyam badal diye — paanch second mein pakda jaata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

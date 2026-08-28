/**
 * Ch03 · Section 74 — "Pro-tip: name the inward force, then resolve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 24.6, 41.4, 45.9, 62.7, 77.7, 91.0]):
 *  0 heading
 *  1 the one question: which real force points inward?
 *  2 name it, set it equal to mv²/r
 *  3 two reliable moves header
 *  4 uniform → radial only · non-uniform → add tangential, Pythagoras
 *  5 banking/conical-pendulum: divide inward by vertical — mass cancels
 *  6 the two core formulas (green box)
 *  7 mnemonic hero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x230..850 y88..134 text cx540 bl 118 s15
 *  b2 | st x84 bl 178 s13
 *  b3 | header st x84 bl 240 · underline M84 248 h300
 *  b4 | box x84..500 y268..314 text cx292 bl 300 s13
 *  b5 | box x560..1010 y268..314 text cx785 bl 296 s13
 *  b6 | box x280..800 y360..412 text cx540 bl 392 s16
 *  b7 | box x260..820 y460..512 text cx540 bl 492 s16 script
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "PRO-TIP — identify the centripetal force FIRST",
            "PRO-TIP — pehle centripetal force PEHCHANO"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the one question */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 232 88 h 616 q 12 0 12 12 v 34 q 0 12 -12 12 h -616 q -12 0 -12 -12 v -34 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={118} size={15} fill={GREEN} weight={800} script>
          {t(
            "which REAL force points inward and holds it on the circle?",
            "kaunsa ASLI force andar taan kar circle par rakhta hai?"
          )}
        </T>
      </Fade>

      {/* beat 2 — name it */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={178} size={13} fill={INK} script anchor="start">
          {t(
            "tension, gravity, friction, or normal — name it, then Fc = m v² ⁄ r",
            "tension, gravity, friction, ya normal — naam lo, phir Fc = m v² ⁄ r"
          )}
        </T>
      </Fade>

      {/* beat 3 — two moves header */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={240} size={13} fill={INK} script anchor="start">
          {t("TWO RELIABLE MOVES", "DO PAKKI CHAALEIN")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 84 248 h 300" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — uniform vs non-uniform */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 268 h 392 q 12 0 12 12 v 22 q 0 12 -12 12 h -392 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={292} y={300} size={13} fill={INK} weight={800}>
          {t(
            "uniform: radial only · non-uniform: + tangential, Pythagoras",
            "uniform: sirf radial · non-uniform: + tangential, Pythagoras"
          )}
        </T>
      </Fade>

      {/* beat 5 — banking / conical pendulum */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 268 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={785} y={296} size={13} fill={INK} weight={800}>
          {t(
            "banking / conical pendulum: divide inward by vertical",
            "banking / conical pendulum: inward ko vertical se bhaago"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={785} y={314} size={11} fill={GREEN} script>
          {t("— mass cancels", "— mass kat jata hai")}
        </T>
      </Fade>

      {/* beat 6 — the two core formulas */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 292 360 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={392} size={16} fill={INK} weight={800}>
          a_c = v² ⁄ r = ω² r    ·    tan θ = v² ⁄ (r g)
        </T>
      </Fade>

      {/* beat 7 — the mnemonic */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 272 460 h 536 q 12 0 12 12 v 32 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -32 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={492} size={16} fill={GREEN} weight={800} script>
          {t(
            "Find the inward force — the circle takes care of itself",
            "Andar wala force dhoondo — circle khud sambhal lega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

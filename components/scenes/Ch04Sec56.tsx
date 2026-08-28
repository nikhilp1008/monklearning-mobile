/**
 * Ch04 · Section 56 — "Worked Example 3 [JEE Main]: banking with friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.9, 34.0, 55.0, 71.7, 96.5, 112.8]):
 *  0 title
 *  1 problem + find
 *  2 given data + gift note (tanθ given directly)
 *  3 bracket evaluation: top, bottom, = 4/3
 *  4 hero box: v_max = √1200 ≈ 34.6 m/s
 *  5 comparison: frictionless design speed 21.2 m/s vs 34.6 m/s
 *  6 red margin: guard the denominator, sanity check rule
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 st x84 bl 150 · note st x84 bl 174
 *  b3 st x84 bl 220 / 250 / 280
 *  b4 box x84..470 y310..360 bl 342
 *  b5 | compare cx770 bl 220 · box x610..950 y240..286 bl 270 ·
 *    arrow (770,300)→(770,330) · gap note cx770 bl 356
 *  b6 | bar x66 y400..475 · lines st x84 bl 420 / 446 / 470
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — banking with friction",
            "Example 3 [JEE Main] — friction ke saath banking"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "circular road r = 90 m · banked with tanθ = 0.5 · μ = 0.5 · g = 10",
            "gol road r = 90 m · tanθ = 0.5 par banked · μ = 0.5 · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: maximum safe speed", "nikaalo: maximum safe speed")}
        </T>
      </Fade>

      {/* beat 2 — the gift */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={84} y={150} size={14} fill={INK} weight={700} anchor="start">
          r = 90 · tanθ = 0.5 · μ = 0.5
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={174} size={13} fill={GREEN} script anchor="start">
          {t(
            "tanθ given directly — no need to find θ itself, take the gift",
            "tanθ seedha diya — θ nikaalne ki zaroorat nahi, tohfa le lo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the bracket, carefully */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={220} size={15} fill={INK} weight={700} anchor="start">
          top: 0.5 + 0.5 = 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={84} y={250} size={15} fill={INK} weight={700} anchor="start">
          bottom: 1 − (0.5)(0.5) = 0.75
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={84} y={280} size={15} fill={AMBER_DARK} weight={700} anchor="start">
          bracket = 1 ÷ 0.75 = 4⁄3
        </T>
      </Fade>

      {/* beat 4 — v_max */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 96 310 h 362 q 12 0 12 12 v 26 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={277} y={342} size={17} fill={INK} weight={800}>
          v_max = √(900 × 4⁄3) = √1200 ≈ 34.6 m⁄s
        </T>
      </Fade>

      {/* beat 5 — comparison */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={770} y={220} size={13} fill={MUTED} script>
          {t(
            "frictionless design speed, same curve:",
            "frictionless design speed, wahi curve:"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d="M 622 240 h 296 q 12 0 12 12 v 22 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
        />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={770} y={270} size={15} fill={INK} weight={700}>
          √(rg·tanθ) = √450 ≈ 21.2 m⁄s
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 7)}
        d={arrowD(770, 300, 770, 330)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={770} y={356} size={13} fill={GREEN} script>
          {t(
            "21.2 → 34.6 m⁄s — friction widened the window dramatically",
            "21.2 → 34.6 m⁄s — friction ne khidki naatakiya roop se badi ki"
          )}
        </T>
      </Fade>

      {/* beat 6 — the denominator trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 400 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={420} size={14} fill={RED} script anchor="start">
          {t(
            "guard (1 − μtanθ): students add there, or drop the μtanθ term",
            "(1 − μtanθ) ki rakhwaali: students wahan jod dete, ya μtanθ chhod dete"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={446} size={14} fill={GREEN} script anchor="start">
          {t(
            "free sanity check: the friction answer must ALWAYS exceed the design speed",
            "muft sanity check: friction waala answer design speed se HAMESHA bada hoga"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

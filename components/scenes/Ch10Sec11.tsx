/**
 * Ch10 · Section 11 — "Speed trap: a fever on the Fahrenheit scale"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 14.05] — beats 0-4 all exactly 1s apart, so
 * every Fade delay in those beats stays ≤ ~0.2s):
 *  0 hook: a trap that catches students every year
 *  1 setup: fever ΔC = 3°C — rise in Fahrenheit?
 *  2 the reflex (WRONG): F=9/5×3+32=37.4 → "rose by 37.4°F" — nonsense
 *  3 a change maps an interval, not a single reading
 *  4 +32 is just an offset — vanishes for a Δ; only degree size matters
 *  5 correct: ΔF = 9/5 ΔC = 9/5×3 = 5.4°F
 *  6 remember: ΔK=ΔC, ΔF=9/5ΔC — never add 32 to a ΔT
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl105
 *  b1 | setup mid x540 bl140
 *  b2 | box x300..780 y168..208 · wrong mid x540 bl193 · cross over box
 *  b3 | note mid x540 bl240
 *  b4 | note mid x540 bl278
 *  b5 | box x350..730 y315..360 · check x360..382 y327..343 · answer mid x540 bl343
 *  b6 | box x280..800 y405..460 · line1 mid x540 bl420 · line2 mid x540 bl452
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("speed trap — a fever on the Fahrenheit scale", "speed trap — fever aur Fahrenheit scale")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={105} size={14} fill={RED} script anchor="middle">
          {t("a trap that catches students every year", "har saal students isme fasate hain")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={140} size={14} fill={INK} script anchor="middle">
          {t("fever: ΔC = 3°C — what's the rise in Fahrenheit?", "fever: ΔC = 3°C — Fahrenheit mein kitna badha?")}
        </T>
      </Fade>

      {/* beat 2 — the wrong reflex */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M300 168 h480 v40 h-480 z" stroke={RED} sw={1.8} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={540} y={193} size={13} fill={RED} anchor="middle">
          F = 9⁄5×3+32 = 37.4 → {t("'rose by 37.4°F'", "'37.4°F badha'")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={crossD(300, 168, 480, 40)} stroke={RED} sw={2} dur={0.35} />

      {/* beat 3 — the key idea */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={240} size={13} fill={INK} script anchor="middle">
          {t("a change maps an INTERVAL, not a single reading", "change ek INTERVAL naapta hai, ek reading nahi")}
        </T>
      </Fade>

      {/* beat 4 — the offset vanishes */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={278} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "+32 is just an offset — vanishes for a Δ; only degree size matters",
            "+32 sirf offset hai — Δ mein gayab; bas degree ka size matter karta"
          )}
        </T>
      </Fade>

      {/* beat 5 — the correct answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 315 h380 v45 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.55)} d="M360 335 l8 8 l14 -16" stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <T x={540} y={343} size={15} fill={GREEN} weight={800} anchor="middle">
          ΔF = 9⁄5 ΔC = 9⁄5×3 = 5.4°F
        </T>
      </Fade>

      {/* beat 6 — remember */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M280 405 h520 v55 h-520 z" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={420} size={13} fill={INK} script anchor="middle">
          ΔK = ΔC, ΔF = 9⁄5 ΔC
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.95)}>
        <T x={540} y={452} size={13} fill={RED} script weight={700} anchor="middle">
          {t("never add 32 to a ΔT!", "ΔT mein kabhi 32 mat jodo!")}
        </T>
      </Fade>
    </Scene>
  );
}

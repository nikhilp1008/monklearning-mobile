/**
 * Ch13 · Section 34 — "Every real oscillation eventually dies" (opens Damped and Forced)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 25.05, 39.19, 48.89, 67.07, 80.4, 95.76]):
 *  0 shelf
 *  1 tabla/jhula: swells then fades, slows and stops
 *  2 forever-constant SHM is a fiction — reality leaks energy
 *  3 diagram: free constant, damped shrinks, forced settles to steady
 *  4 free: one push, no friction ⇒ forever at ω₀=√(k/m)
 *  5 damped: resistive force drains energy ⇒ amplitude shrinks exponentially
 *  6 forced (high): external force ⇒ after transient, marches at driving frequency
 *  7 steady state: energy pumped in = energy damping removes, each cycle
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | script12 st x70 bl110
 *  b2 | script12 st x70 bl148 amber
 *  b3 | row1(free) baseline110 x650..1010 ink · "free" x640 bl114 anchor-end ·
 *      row2(damped) baseline190 decaying humps + dashed envelope · "damped" x640 bl194 anchor-end ·
 *      row3(forced) baseline270 transient(650..770 red)+steady(770..1010 green) + divider x770 ·
 *      "forced" x640 bl274 anchor-end
 *  b4 | st x70 bl180 size12
 *  b5 | st x70 bl210 size11
 *  b6 | st x70 bl245 size12 amber weight700
 *  b7 | script11 st x70 bl280
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Free, damped, forced: three storylines", "Free, damped, forced: teen storylines")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the everyday examples */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={12} fill={INK} script anchor="start">
          {t(
            "tabla note swells then fades; jhula slows and stops",
            "tabla ki note badhti phir fade hoti; jhula slow hokar ruk jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the fiction of forever-constant SHM */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={148} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "forever-constant SHM is a fiction — reality leaks energy",
            "forever-constant SHM ek fiction hai — reality energy leak karti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the three storylines, drawn */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M650 110 C672 85 718 85 740 110 C762 135 808 135 830 110 C852 85 898 85 920 110 C942 135 988 135 1010 110"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={640} y={114} size={12} fill={INK} anchor="end">
          {t("free", "free")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.3)}
        d="M650 190 Q680 158 710 190 Q740 168 770 190 Q800 175 830 190 Q860 180 890 190 Q920 184 950 190 Q980 187 1010 190"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Path d="M650 158 Q830 172 1010 189" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
        <Path d="M650 222 Q830 208 1010 191" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={640} y={194} size={12} fill={AMBER_DARK} anchor="end">
          {t("damped", "damped")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.8)}
        d="M650 270 Q670 255 690 270 Q715 245 735 270 Q755 250 770 270"
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.4)}
        d="M770 270 C792 240 838 240 860 270 C882 300 928 300 950 270 C972 240 1010 240 1010 270"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <Path d="M 770 240 V 300" stroke={MUTED} strokeWidth={1.2} strokeDasharray="3 3" fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={640} y={274} size={12} fill={INK} anchor="end">
          {t("forced", "forced")}
        </T>
      </Fade>

      {/* beat 4 — free oscillation defined */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={180} size={12} fill={INK} anchor="start">
          {t("free: one push, no friction ⇒ forever at ω₀=√(k/m)", "free: ek push, no friction ⇒ hamesha ω₀=√(k/m) par")}
        </T>
      </Fade>

      {/* beat 5 — damped oscillation defined */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={210} size={11} fill={INK} anchor="start">
          {t(
            "damped: resistive force drains energy ⇒ amplitude shrinks exponentially",
            "damped: resistive force energy nikaalti hai ⇒ amplitude exponentially ghatta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — forced oscillation defined, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={245} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          {t(
            "forced: external force ⇒ after transient, marches at driving frequency",
            "forced: external force ⇒ transient ke baad, driving frequency par march karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the steady-state balance */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={280} size={11} fill={INK} script anchor="start">
          {t(
            "steady state: energy pumped in = energy damping removes, each cycle",
            "steady state: har cycle mein pumped energy = damping se nikli energy"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

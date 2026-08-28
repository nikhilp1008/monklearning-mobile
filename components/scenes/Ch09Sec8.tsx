/**
 * Ch09 · Section 8 — "Scuba depth for two atmospheres of gauge" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 8.53, 17.41, 25.17, 26.17, 27.17, 28.17, 29.17]):
 *  0 title (always-on)
 *  1 LEFT: water column drawn, depth scale ticks (10/20/30 m)
 *  2 diver marker placed at depth; RIGHT: given data
 *  3 red-margin note: use gauge, not absolute — no P₀ term
 *  4 formula h = Pg/ρg
 *  5 formula h ≈ 19.4 m + label beside the diver
 *  6 red-margin note: ≈1 atm gauge per 10 m of water
 *  7 closing insight: two atmospheres ⇒ ~20 m, a touch less in seawater
 *
 * Layout plan:
 *  b1 | column walls        | Draw  | x180..320  y150..460
 *  b1 | water line           | Draw   | x180..320  y150
 *  b1 | ticks + "10/20/30m"  | Draw+T | x170..180  y250/350/450
 *  b2 | diver marker (amber) | circle | c(250,344) r9
 *  b2 | given data (14,muted)| T st   | x480..~900 y172..188 (bl 184)
 *  b3 | margin bar (red)     | Draw   | x460  y210..234
 *  b3 | note (script 14,red) | T st   | x476..~840 y214..230 (bl 228)
 *  b4 | formula1 (20,w700)   | T st   | x480..~650 y264..286 (bl 280)
 *  b5 | formula2 (18,w700)   | T st   | x480..~940 y310..328 (bl 326)
 *  b5 | "≈19.4 m" (12,green) | T st   | x270..~340 y336..352 (bl 348)
 *  b6 | margin bar (red)     | Draw   | x460  y356..380
 *  b6 | note (script 14,red) | T st   | x476..~840 y360..376 (bl 374)
 *  b7 | closing (16,script,g)| T st   | x480..~940 y403..423 (bl 420)
 */

import React from "react";
import { Circle, Line, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("NEET speed trap: scuba depth", "NEET speed trap: scuba depth")}
        </T>
      </Fade>

      {/* beat 1 — the water column and its depth scale */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 180 150 V 460 H 320 V 150" stroke={INK} sw={2.4} dur={0.9} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 180 150 q 17 -8 35 0 q 17 8 35 0 q 17 -8 35 0 q 17 8 35 0"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />
      {[
        [250, "10 m"],
        [350, "20 m"],
        [450, "30 m"],
      ].map(([y, label], i) => (
        <Fade key={y} on={beat >= 1} delay={dl(1, 1.8 + i * 0.4)}>
          <Line x1={170} y1={Number(y)} x2={180} y2={Number(y)} stroke={INK} strokeWidth={1.4} />
          <T x={160} y={Number(y) + 4} size={11} fill={MUTED} anchor="end">
            {label}
          </T>
        </Fade>
      ))}

      {/* beat 2 — the diver, and the given data */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={250} cy={344} r={9} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={480} y={184} size={14} fill={MUTED} script anchor="start">
          {t("gauge = 2 atm, ρ (seawater) = 1030 kg/m³", "gauge = 2 atm, ρ (seawater) = 1030 kg/m³")}
        </T>
      </Fade>

      {/* beat 3 — gauge, not absolute */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 210 L 460 234" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={228} size={14} fill={RED} script anchor="start">
          {t("use gauge, not absolute — no P₀ term", "gauge use karo, absolute nahi — P₀ nahi")}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={480} y={280} size={20} fill={INK} weight={700} anchor="start">
          h = P<TSpan fontSize={13} dy={4}>g</TSpan>
          <TSpan dy={-4}> / ρg</TSpan>
        </T>
      </Fade>

      {/* beat 5 — the number */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={480} y={326} size={18} fill={INK} weight={700} anchor="start">
          h = 2.0×10⁵ / (1030 × 10) ≈ 19.4 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={270} y={348} size={12} fill={GREEN} anchor="start">
          ≈19.4 m
        </T>
      </Fade>

      {/* beat 6 — the rule of thumb */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 356 L 460 380" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={374} size={14} fill={RED} script anchor="start">
          {t("≈1 atm of gauge per 10 m of water", "≈1 atm gauge har 10 m water mein")}
        </T>
      </Fade>

      {/* beat 7 — the closing estimate */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={480} y={420} size={16} fill={GREEN} script anchor="start">
          {t(
            "two atmospheres ⇒ ~20 m, a touch less in seawater",
            "do atmosphere ⇒ ~20 m, seawater mein thoda kam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * C11 Ch06 · Section 14 — "Pitfalls and pro-tips for Kc and Kp"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Closes subtopic 1 (Physical & Chemical Equilibrium — Kc/Kp).
 *
 * Beats (board_reveal_at_english: [0, 6.6, 16.6, 27.6, 36.5, 47.4, 55.9, 67.5]):
 *  0 title + underline
 *  1 pitfall 1: never put pure solids/liquids in the K expression
 *  2 pitfall 2: only T changes K
 *  3 pitfall 3: Δn counts gaseous moles only
 *  4 pitfall 4: Q too big ⇒ backward; Q too small ⇒ forward
 *  5 pro-tip 1a: compute Δn in your head first
 *  6 pro-tip 1b: if Δn=0, write Kp=Kc directly
 *  7 pro-tip 2: reuse the α²P/(1−α²) dissociation result
 *
 * Layout plan (two stacked lists, left-aligned x=60/80; longer language counts):
 *  b0 | title (script 26, red)      | T mid  | x220..860  y30..92  (bl 64)
 *  b1 | "✗ PITFALLS" header (14)    | T st   | x60..170  y95..109 (bl 105)
 *  b1 | pitfall 1 (15, ink)         | T st   | x80..520  y121..137 (bl 132)
 *  b2 | pitfall 2 (15, ink)         | T st   | x80..582  y151..167 (bl 162)
 *  b3 | pitfall 3 (15, ink)         | T st   | x80..500  y181..197 (bl 192)
 *  b4 | pitfall 4 (15, ink)         | T st   | x80..430  y211..227 (bl 222)
 *  —  | divider line                | Draw   | x60..1020 y246
 *  b5 | "✓ PRO-TIPS" header (14)    | T st   | x60..175  y261..275 (bl 270)
 *  b5 | tip 1a (15, ink)            | T st   | x80..540  y286..302 (bl 297)
 *  b6 | tip 1b (15, ink)            | T st   | x80..515  y316..332 (bl 327)
 *  b7 | tip 2 (15, ink)             | text   | x80..560  y346..362 (bl 357)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four pitfalls, two pro-tips: Kc and Kp", "chaar pitfalls, do pro-tips: Kc aur Kp")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* pitfalls header */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={60} y={105} size={14} fill={RED} weight={700} anchor="start">
          ✗ PITFALLS
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={132} size={15} fill={INK} anchor="start">
          {t(
            "✗ never put pure solids/liquids in the K expression",
            "✗ pure solids/liquids ko K expression mein kabhi mat daalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={80} y={162} size={15} fill={INK} anchor="start">
          {t(
            "✗ only temperature changes K — not P, conc., inert gas, catalyst",
            "✗ sirf temperature K badalta — P, conc., inert gas, catalyst nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={192} size={15} fill={INK} anchor="start">
          {t(
            "✗ Δn counts GASEOUS moles only — solids/liquids ignored",
            "✗ Δn sirf GASEOUS moles ginta — solids/liquids ignore"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={80} y={222} size={15} fill={INK} anchor="start">
          {t(
            "✗ Q too big ⇒ backward; Q too small ⇒ forward",
            "✗ Q zyada bada ⇒ backward; Q zyada chhota ⇒ forward"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 60 246 H 1020" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* pro-tips header */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={60} y={270} size={14} fill={GREEN_DARK} weight={700} anchor="start">
          ✓ PRO-TIPS
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={297} size={15} fill={INK} anchor="start">
          {t(
            "✓ before any Kp↔Kc calc, work out Δn in your head first",
            "✓ Kp↔Kc calc se pehle Δn dimaag mein nikaal lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={80} y={327} size={15} fill={INK} anchor="start">
          {t(
            "✓ if Δn = 0 → just write Kp = Kc, skip the RT arithmetic",
            "✓ Δn = 0 ho to → seedha Kp = Kc likho, RT arithmetic skip"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <SvgText x={80} y={357} textAnchor="start" fontSize={15} fill={INK} fontFamily={ANEK}>
          {t("✓ dissociation? reuse Kp = α", "✓ dissociation? Kp = α")}
          <TSpan dy={-7} fontSize={9.3}>2</TSpan>
          <TSpan dy={7}>P/(1−α</TSpan>
          <TSpan dy={-7} fontSize={9.3}>2</TSpan>
          <TSpan dy={7}>{t(") instead of rebuilding the table", ") reuse karo, table dobara mat banao")}</TSpan>
        </SvgText>
      </Fade>
    </Scene>
  );
}

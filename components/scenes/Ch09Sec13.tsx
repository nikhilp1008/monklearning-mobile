/**
 * Ch09 · Section 13 — "Archimedes' principle by fluid replacement"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 4.86, 13.91, 14.91, 15.91, 16.91, 17.91, 18.91]):
 *  0 title (always-on)
 *  1 LEFT tank: solid blob = the real submerged body
 *  2 RIGHT tank: dashed blob = same region imagined as fluid, "≡" between
 *  3 text: surrounding fluid holds the blob up
 *  4 red-margin note: fluid doesn't know what's inside the boundary
 *  5 formula F_B = ρ_f V_sub g
 *  6 F_B arrow + centroid dot inside the fluid blob
 *  7 red-margin note: uses fluid density and submerged volume, not the body's
 *
 * Layout plan:
 *  b1 | left tank                | Draw  | x220..460  y150..450
 *  b1 | solid blob (muted)       | ellipse| c(340,300) rx50 ry42
 *  b1 | "the real body" (12)     | T mid  | x~280..400 y127..140 (bl 136)
 *  b2 | right tank               | Draw   | x620..860  y150..450
 *  b2 | dashed blob              | ellipse| c(740,300) rx50 ry42
 *  b2 | "same fluid instead"(12) | T mid  | x~660..820 y127..140 (bl 136)
 *  b2 | "≡" (28, muted)          | T mid  | x520..560  y296..324 (bl 310)
 *  b3 | text (14, muted)         | T mid  | x~700..1044 y459..478 (bl 474)
 *  b4 | margin bar (red)         | Draw   | x460  y490..514
 *  b4 | note (script 14, red)    | T st   | x476.. bl 508
 *  b5 | formula (20, w700)       | T mid  | x~430..650 y529..551 (bl 545)
 *  b6 | F_B arrow + dot (green)  | Draw   | (740,320)→(740,280) · dot c(740,300)
 *  b6 | "F_B" (12, green) start  | T st   | x755..~780 y286..294 (bl 290)
 *  b7 | margin bar (red)         | Draw   | x460  y566..590
 *  b7 | note (script 14, red)    | T st   | x476.. bl 584
 */

import React from "react";
import { Circle, Ellipse, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("Archimedes' principle", "Archimedes ka principle")}
        </T>
      </Fade>

      {/* beat 1 — the real body, submerged */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 220 150 V 450 H 460 V 150" stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 220 150 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0"
        stroke={INK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Ellipse cx={340} cy={300} rx={50} ry={42} fill={MUTED} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={340} y={136} size={12} fill={MUTED} anchor="middle">
          {t("the real body", "asli body")}
        </T>
      </Fade>

      {/* beat 2 — the fluid-replacement thought experiment */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 620 150 V 450 H 860 V 150" stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 620 150 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0"
        stroke={INK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Ellipse cx={740} cy={300} rx={50} ry={42} fill="none" stroke={MUTED} strokeWidth={2} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={740} y={136} size={12} fill={MUTED} anchor="middle">
          {t("same fluid instead", "isi jagah fluid hi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={540} y={310} size={28} fill={MUTED} weight={700} anchor="middle">
          ≡
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={474} size={14} fill={MUTED} script anchor="middle">
          {t("the surrounding fluid holds the blob up", "surrounding fluid blob ko upar rakhta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 490 L 460 514" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={508} size={14} fill={RED} script anchor="start">
          {t("fluid doesn't know what's inside the boundary", "fluid ko pata nahi boundary ke andar kya hai")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={545} size={20} fill={INK} weight={700} anchor="middle">
          F<TSpan fontSize={13} dy={4}>B</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={13} dy={4}>f</TSpan>
          <TSpan dy={-4}> V</TSpan>
          <TSpan fontSize={13} dy={4}>sub</TSpan>
          <TSpan dy={-4}> g</TSpan>
        </T>
      </Fade>

      {/* beat 6 — acts through the centre of the displaced fluid */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw on={beat >= 6} d="M 740 320 L 740 284 M 734 292 L 740 282 L 746 292" stroke={GREEN} sw={2.6} dur={0.5} />
        <Circle cx={740} cy={300} r={3} fill={GREEN} />
        <T x={755} y={290} size={12} fill={GREEN} anchor="start">
          F<TSpan fontSize={9} dy={3}>B</TSpan>
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 566 L 460 590" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={584} size={14} fill={RED} script anchor="start">
          {t(
            "uses fluid density and submerged volume, not the body's",
            "fluid density aur submerged volume use hota, body ka nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

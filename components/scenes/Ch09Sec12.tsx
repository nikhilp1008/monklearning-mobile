/**
 * Ch09 · Section 12 — "Where buoyancy comes from"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 1.0, 2.0, 11.64, 20.77, 28.62, 35.88, 41.59]):
 *  0 title (always-on)
 *  1 tank + submerged cube drawn
 *  2 top arrow (small, P₁A) and bottom arrow (big, P₂A)
 *  3 text: bottom face is deeper ⇒ more pressure
 *  4 formula P = P₀ + ρgh
 *  5 red-margin note: bottom is deeper — the upward push wins
 *  6 net green arrow F_B beside the cube; text: leftover net force = buoyancy
 *  7 red-margin note: no pressure gradient, no buoyancy
 *
 * Layout plan:
 *  b1 | tank walls + water line | Draw  | x300..680  y150..450
 *  b1 | cube (cream)             | rect   | x440..540  y280..380
 *  b2 | top arrow (small)        | Draw   | (490,245)→(490,278)
 *  b2 | "P₁A" (12)               | T mid  | x475..505  y221..233 (bl 228)
 *  b2 | bottom arrow (big, thick)| Draw   | (490,425)→(490,382)
 *  b2 | "P₂A" (13) start         | T st   | x560..~600 y396..410 (bl 406)
 *  b3 | text (14, muted)         | T st   | x720.. bl 200
 *  b4 | formula (20, w700)       | T st   | x720.. bl 250
 *  b5 | margin bar (red)         | Draw   | x700  y280..304
 *  b5 | note (script 14, red)    | T st   | x716.. bl 298
 *  b6 | F_B arrow (green)        | Draw   | (600,380)→(600,300)
 *  b6 | "F_B" (14, green) start  | T st   | x615..~655 y324..338 (bl 330)
 *  b6 | text (15, script, green) | T st   | x720.. bl 350
 *  b7 | margin bar (red)         | Draw   | x700  y390..414
 *  b7 | note (script 14, red)    | T st   | x716.. bl 408
 */

import React from "react";
import { Rect, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("where buoyancy comes from", "buoyancy aati kahan se hai")}
        </T>
      </Fade>

      {/* beat 1 — tank and submerged cube */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 300 150 V 450 H 680 V 150" stroke={INK} sw={2.2} dur={0.9} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 300 150 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0"
        stroke={INK}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Rect x={440} y={280} width={100} height={100} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>

      {/* beat 2 — smaller push on top, bigger push on bottom */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} d={arrowD(490, 245, 490, 278)} stroke={INK} sw={2.2} dur={0.4} />
        <T x={490} y={228} size={12} fill={INK} anchor="middle">
          P₁A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d={arrowD(490, 425, 490, 382)} stroke={INK} sw={3.4} dur={0.4} />
        <T x={560} y={406} size={13} fill={INK} anchor="start">
          P₂A
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={720} y={200} size={14} fill={MUTED} script anchor="start">
          {t("bottom face is deeper ⇒ more pressure", "bottom face zyada deep ⇒ zyada pressure")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={720} y={250} size={20} fill={INK} weight={700} anchor="start">
          P = P₀ + ρgh
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 700 280 L 700 304" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={716} y={298} size={14} fill={RED} script anchor="start">
          {t("bottom is deeper — the upward push wins", "bottom zyada deep — upward push jeetta")}
        </T>
      </Fade>

      {/* beat 6 — the leftover net force */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw on={beat >= 6} d={arrowD(600, 380, 600, 300)} stroke={GREEN} sw={3} dur={0.5} />
        <T x={615} y={330} size={14} fill={GREEN} weight={700} anchor="start">
          F<TSpan fontSize={10} dy={3}>B</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={720} y={350} size={15} fill={GREEN} script anchor="start">
          {t("the leftover net force is buoyancy", "leftover net force hi buoyancy hai")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 700 390 L 700 414" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={716} y={408} size={14} fill={RED} script anchor="start">
          {t("no pressure gradient, no buoyancy", "pressure gradient nahi, toh buoyancy nahi")}
        </T>
      </Fade>
    </Scene>
  );
}

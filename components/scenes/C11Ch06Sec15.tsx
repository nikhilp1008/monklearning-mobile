/**
 * C11 Ch06 · Section 15 — "Why equilibrium stops where it does: the Gibbs valley"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Opens subtopic 2 (Equilibrium Constant, Q & Gibbs Energy).
 *
 * Beats (board_reveal_at_english: [0, 10.9, 16, 25.9, 38.5, 46.3, 55.3, 63.7]):
 *  0 title + underline
 *  1 framing: why does it stop there at all?
 *  2 the rule: a reaction runs downhill in Gibbs energy, G
 *  3 draw the landscape: axes, curve, reactants-left/products-right
 *  4 ball at the top, "rolls downhill" arrow
 *  5 ball settles at the valley floor — not at either end
 *  6 ΔG = 0 marked at the valley floor
 *  7 note: large negative ΔG° ⇒ valley far right ⇒ K huge
 *
 * Layout plan (single wide landscape panel):
 *  b0 | title (script 24, red)      | T mid  | x230..850  y30..88  (bl 64)
 *  b1 | framing (15, muted, script) | T mid  | y96..114  (bl 110)
 *  b2 | rule (16, ink)              | T mid  | y133..150 (bl 145)
 *  b3 | axes (x + y) + curve        | Draw   | x120..960 y140..450
 *  b3 | axis/end labels             | T      | y148..490
 *  b4 | ball@top + arrow + label    | Fade   | x150..280 y172..260
 *  b5 | ball@floor + label          | Fade   | x680..950 y380..418
 *  b6 | ΔG=0 dashed tick + label    | Draw/T | x680  y410..470
 *  b7 | closing note (14, amber)    | T mid  | x312..768 y518..533 (bl 525)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("why equilibrium stops: the Gibbs energy valley", "equilibrium kyun rukta: Gibbs energy valley")}
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

      {/* beat 1 — framing question */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={15} fill={MUTED} script anchor="middle">
          {t("why does it stop there at all?", "wahin kyun rukta hai, bilkul?")}
        </T>
      </Fade>

      {/* beat 2 — the rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={16} fill={INK} weight={600} anchor="middle">
          {t("a reaction runs downhill in Gibbs energy, G", "reaction Gibbs energy G mein downhill chalta hai")}
        </T>
      </Fade>

      {/* beat 3 — the landscape */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(150, 450, 150, 140)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(120, 450, 960, 450)} stroke={INK} sw={2} dur={0.6} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d="M150 180 C 350 280, 550 400, 680 410 C 760 416, 860 360, 930 270"
        stroke={INK}
        sw={2.4}
        dur={1.1}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={130} y={148} size={14} fill={MUTED} anchor="end">G</T>
        <T x={540} y={490} size={13} fill={MUTED} anchor="middle">
          {t("reaction progress", "reaction progress")}
        </T>
        <T x={150} y={470} size={13} fill={MUTED} anchor="middle">
          {t("reactants", "reactants")}
        </T>
        <T x={930} y={470} size={13} fill={MUTED} anchor="middle">
          {t("products", "products")}
        </T>
      </Fade>

      {/* beat 4 — the ball rolls downhill */}
      {beat === 4 && (
        <Fade on={true} delay={dl(4, 0.3)}>
          <Circle cx={150} cy={180} r={8} fill={AMBER} stroke={INK} strokeWidth={1.6} />
        </Fade>
      )}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(180, 210, 300, 300)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={310} y={300} size={13} fill={AMBER_DARK} script anchor="start">
          {t("rolls downhill", "downhill roll hota")}
        </T>
      </Fade>

      {/* beat 5 — settles at the valley floor */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={680} cy={410} r={8} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={760} y={385} size={13} fill={GREEN_DARK} anchor="start">
          {t("settles here — not at either end", "yahin settle — kisi end par nahi")}
        </T>
      </Fade>

      {/* beat 6 — ΔG = 0 at the floor */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 680 410 L 680 450"
        stroke={GREEN_DARK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={680} y={470} size={13} fill={GREEN_DARK} weight={700} anchor="middle">
          ΔG = 0
        </T>
      </Fade>

      {/* beat 7 — the broader principle */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={525} size={14} fill={AMBER_DARK} anchor="middle">
          {t(
            "large negative ΔG° ⇒ valley far right ⇒ products dominate, K huge",
            "bada negative ΔG° ⇒ valley far right ⇒ products dominate, K bahut bada"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

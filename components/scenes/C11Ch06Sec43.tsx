/**
 * C11 Ch06 · Section 43 — "Strength is not concentration"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.3, 13, 18.1, 28.9, 42, 47.9]):
 *  0 title + underline + divider
 *  1 LEFT: STRENGTH — fractional question, what % ionizes?
 *  2 RIGHT: CONCENTRATION — counting question, mol/L?
 *  3 guardrail: dilute STRONG can beat concentrated WEAK in pH
 *  4 polyprotic acids: >1 ionizable proton (H2CO3, H2S, H3PO4)
 *  5 released ONE AT A TIME, never all at once
 *  6 each step HARDER — common-ion effect (coming up)
 *
 * Layout plan (two columns, centers x=270 / 810; longer language counts):
 *  b0 | divider                     | Draw   | x540  y105..200
 *  b1 | "STRENGTH" (18, ink)        | T mid  | y110..126 (bl 115)
 *  b1 | subtitle (13, muted)        | T mid  | y140..154 (bl 145)
 *  b2 | "CONCENTRATION" (18, ink)   | T mid  | y110..126 (bl 115)
 *  b2 | subtitle (13, muted)        | T mid  | y140..154 (bl 145)
 *  b3 | guardrail box (red)         | rect   | x120..960 y185..229
 *  b4 | polyprotic (15, ink)        | T mid  | y241..257 (bl 252)
 *  b5 | one-step (14, green-dark)   | T mid  | y271..287 (bl 282)
 *  b6 | harder (14, amber, script)  | T mid  | y300..318 (bl 318)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("strength is not concentration", "strength, concentration nahi hai")}
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
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d="M 540 105 L 540 200" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* beat 1 — strength */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={270} y={115} size={18} fill={INK} weight={800} anchor="middle">
          {t("STRENGTH", "STRENGTH")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={145} size={13} fill={MUTED} anchor="middle">
          {t("fractional Q: what % ionizes?", "fractional Q: kitna % ionize hota?")}
        </T>
      </Fade>

      {/* beat 2 — concentration */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={810} y={115} size={18} fill={INK} weight={800} anchor="middle">
          {t("CONCENTRATION", "CONCENTRATION")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={810} y={145} size={13} fill={MUTED} anchor="middle">
          {t("counting Q: mol per litre?", "counting Q: mol per litre?")}
        </T>
      </Fade>

      {/* beat 3 — the counter-intuitive guardrail */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={120} y={185} width={840} height={44} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={212} size={15} fill={RED} weight={600} anchor="middle">
          {t(
            "dilute STRONG acid can beat concentrated WEAK acid in pH!",
            "dilute STRONG acid, concentrated WEAK se pH mein aage ho sakta!"
          )}
        </T>
      </Fade>

      {/* beat 4 — polyprotic acids */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={252} size={15} fill={INK} anchor="middle">
          {t(
            "polyprotic acids: >1 ionizable proton (H₂CO₃, H₂S, H₃PO₄)",
            "polyprotic acids: 1 se zyada ionizable proton (H₂CO₃, H₂S, H₃PO₄)"
          )}
        </T>
      </Fade>

      {/* beat 5 — one step at a time */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={282} size={14} fill={GREEN_DARK} anchor="middle">
          {t("released ONE AT A TIME — never all at once", "ek-ek karke release — kabhi ek saath nahi")}
        </T>
      </Fade>

      {/* beat 6 — each step harder */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={318} size={14} fill={AMBER_DARK} script anchor="middle">
          {t(
            "each step HARDER — common-ion effect (coming up!)",
            "har step HARDER — common-ion effect (aage aa raha!)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

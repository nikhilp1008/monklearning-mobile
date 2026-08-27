/**
 * M11 Ch05 · Section 34 — "The factor, endpoint, and multiplicity rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,10.58,23.98,39.94,51.2,61.44,74.84], hi
 * [0,9.3,21.16,36.01,48.04,59.31,71.34]):
 *  0 heading — "RULES" label + underline
 *  1 text: every factor (x-r), positive coefficient on x
 *  2 text: (3-x) = -(x-3) — track the stray minus sign
 *  3 note (red-margin, high): even-multiplicity roots touch-and-bounce, no flip
 *  4 text: denominator zeros are critical points too, but undefined there
 *  5 note (red-margin, high): denominator roots ALWAYS open circles
 *  6 text: numerator root closed only for non-strict (≤,≥)
 *
 * Layout plan:
 *  b0 | "RULES" + underline       | T/Draw | bl 100 / y107
 *  b1 | formula (18,ink,w700)     | T mid  | bl 145
 *  b2 | formula (17,ink,w700)     | T mid  | bl 185
 *  b3 | mini axis, cross vs touch-bounce | Draw/circle | y280, x450/650
 *  b3 | boxed guardrail (14,red)  | Chip   | x160..920 y330..374
 *  b4 | caption (14,ink,scr)      | T mid  | bl 415
 *  b5 | open-circle icon + boxed guardrail | circle/Chip | x160..920 y450..494
 *  b6 | closed-circle icon + caption | circle/T | x160..920 bl 545
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, IntervalDot } from "./math-kit";

export default function M11Ch05Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("one flip per crossing — unless the power is even", "ek flip per crossing — jab tak power even na ho")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          RULES
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(495, 107, 585, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — factor normalization */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={18} fill={INK} weight={700}>
          {t("every factor: (x - r), positive coefficient on x", "har factor: (x - r), x pe coefficient positive")}
        </T>
      </Fade>

      {/* beat 2 — the stray minus sign */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={185} size={17} fill={INK} weight={700}>
          (3 - x) = -(x - 3)
        </T>
      </Fade>

      {/* beat 3 — cross vs touch-and-bounce */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={axisD(300, 800, 280)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={450} cy={280} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d="M 420 255 L 480 305" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={450} y={235} size={12} fill={GREEN}>
          {t("(x-a): crosses", "(x-a): crosses")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Circle cx={650} cy={280} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d="M 615 245 Q 650 285 685 245" stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.0)}>
        <T x={650} y={225} size={12} fill={GREEN}>
          {t("(x-b)²: touches, no flip", "(x-b)²: touches, flip nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <Chip x={160} y={330} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "even-multiplicity roots (squared,...) are touch-and-bounce — the sign does NOT flip there",
            "even-multiplicity roots (squared,...) touch-and-bounce hote hain — sign wahan flip NAHI hota"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — denominator zeros are critical too */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={415} size={14} fill={INK} script>
          {t(
            "denominator zeros are critical points too — but the expression is undefined there",
            "denominator ke zeros bhi critical points hain — par wahan expression undefined hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — denominator roots always open */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <IntervalDot on={beat >= 5} delay={dl(5, 0.3)} x={90} y={472} open={true} r={7} stroke={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={160} y={450} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "denominator roots are ALWAYS open circles, regardless of ≤ or ≥",
            "denominator roots HAMESHA open circles hote hain, ≤ ya ≥ chahe kuch bhi ho"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — numerator roots, closed only when non-strict */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <IntervalDot on={beat >= 6} delay={dl(6, 0.3)} x={90} y={545} open={false} r={7} stroke={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={550} y={550} size={15} fill={INK} script>
          {t(
            "a numerator root may be included only for a non-strict (≤, ≥) inequality",
            "numerator root sirf non-strict (≤, ≥) inequality mein include ho sakta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch05 · Section 27 — "The average and mixture templates"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas. Fractions flattened
 * inline (a/b) — no stacked-fraction primitive exists yet, per notation
 * guide (this is a case where the fraction IS the star, but the primitive
 * simply doesn't exist to render it stacked).
 *
 * Beats (en [0,6.91,16.81,27.9,38.83,52.31,60.5], hi
 * [0,7.51,17.41,28.07,38.49,54.36,62.98]):
 *  0 heading — "FORMULAS" label + underline
 *  1 text: average condition — "average of n quantities ≥ A" becomes:
 *  2 formula (high, boxed): sum/n ≥ A
 *  3 text: mixture condition — concentration = pure / total
 *  4 formula (high, boxed): concentration = ((a/100)V+(b/100)y)/(V+y)
 *  5 text: bound between target % → double inequality in y
 *  6 note (red-margin, high): V+y>0, clearing fractions never flips
 *
 * Layout plan:
 *  b0 | "FORMULAS" + underline    | T/Draw | bl 100 / y107
 *  b1 | caption (15,ink,scr)      | T mid  | bl 145
 *  b2 | boxed formula (20,ink)    | Chip   | x430..650 y170..218
 *  b3 | caption (15,ink,scr)      | T mid  | bl 255
 *  b4 | boxed formula (18,ink)    | Chip   | x290..790 y280..328
 *  b5 | caption (15,ink,scr)      | T mid  | bl 365
 *  b6 | boxed guardrail (15,red)  | Chip   | x150..930 y395..443
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, RED, AMBER, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch05Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("two templates: average and mixture", "do templates: average aur mixture")}
        </T>
      </Fade>

      {/* beat 0 — header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} weight={800}>
          FORMULAS
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(495, 107, 585, 107)} stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — the average condition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={145} size={15} fill={INK} script>
          {t(
            "average of n quantities is at least A becomes:",
            "n quantities ka average kam se kam A becomes:"
          )}
        </T>
      </Fade>

      {/* beat 2 — sum/n ≥ A */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={430} y={170} w={220} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={20} script={false}>
          sum/n ≥ A
        </Chip>
      </Fade>

      {/* beat 3 — the mixture condition */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={255} size={15} fill={INK} script>
          {t(
            "concentration = pure component / total amount",
            "concentration = pure component / total amount"
          )}
        </T>
      </Fade>

      {/* beat 4 — the concentration formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={260} y={280} w={560} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={17} script={false}>
          concentration = ((a/100)V + (b/100)y) / (V + y)
        </Chip>
      </Fade>

      {/* beat 5 — the double inequality */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={365} size={15} fill={INK} script>
          {t(
            "bound it between the target percentages → a double inequality in y",
            "target percentages ke beech bound karo → y mein double inequality"
          )}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={150} y={395} w={780} h={48} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "V+y > 0, so multiplying through to clear fractions never flips the inequality",
            "V+y > 0, isliye fractions clear karne se inequality kabhi flip nahi hoti"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

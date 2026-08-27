/**
 * C11 Ch09 · Section 23 — "Two kinds of glue: sigma and pi"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.36, 18.43, 30.38, 46.17, 61.44, 69.46]):
 *  0 heading · 1 σ: thick bond, "bolt through the middle" · 2 π: dashed
 *  cloud above, "rubber band over the top" · 3 numbers: σ≈397 π≈284
 *  C=C≈681 · 4 compare C-C=348, lengths 134 vs 154pm · 5 poorer lateral
 *  overlap ⇒ π weak/exposed · 6 RED: electrophile trades π for 2 new σ
 *
 * Layout plan:
 *  b1 | σ bond (thick) + labels | Draw+T | x130..230 y225 · label x180 y245
 *  b2 | π dashed cloud + labels | Draw+T | c(180,180) rx55 ry18 · label x180 y155
 *  b3 | numbers line            | T mid  | y270
 *  b4 | compare line            | T mid  | y305
 *  b5 | overlap line            | T mid  | y340
 *  b6 | margin bar + red note   | Draw+T | bar x60 y375..411 · text bl397
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch09Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("two kinds of glue: sigma and pi", "do tarah ke glue: sigma aur pi")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("the double bond is built from two different glues", "double bond do alag glues se bana hai")}
        </T>
      </Fade>

      {/* beat 1 — sigma bond */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={bondD(130, 225, 230, 225)} stroke={INK} sw={5} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={180} y={247} size={16} fill={INK} weight={800}>σ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={250} y={230} size={14} fill={MUTED} script anchor="start">
          {t("a bolt through the middle", "beech se thuka hua bolt")}
        </T>
      </Fade>

      {/* beat 2 — pi bond */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d="M 125 180 A 55 18 0 1 1 234.9 179.9"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={180} y={148} size={16} fill={AMBER_DARK} weight={800}>π</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={250} y={185} size={14} fill={MUTED} script anchor="start">
          {t("a rubber band over the top", "upar se khichi rubber band")}
        </T>
      </Fade>

      {/* beat 3 — the numbers */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={270} size={16} fill={INK} weight={700}>
          σ ≈ 397 · π ≈ 284 · C=C ≈ 681 kJ/mol
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={305} size={15} fill={INK}>
          {t("compare: C–C single = 348 kJ/mol · length C=C 134 pm vs C–C 154 pm", "compare: C–C single = 348 kJ/mol · length C=C 134 pm vs C–C 154 pm")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={340} size={15} fill={INK}>
          {t("poorer lateral overlap ⇒ π is the weak, exposed part", "kamzor lateral overlap ⇒ π hi weak, exposed hissa hai")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 375 L 60 411" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={397} size={16} fill={RED} script anchor="start">
          {t(
            "adding an electrophile trades weak π for two new stronger σ bonds",
            "electrophile add hone se weak π, do naye strong σ bonds mein badalta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * M11 Ch03 · Section 18 — "Long allied-angle products that collapse"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — three examples in three columns, left to right.
 *
 * Beats (board_reveal_at_english [0, 5.72, 20.57, 34.99, 41.56, 52.31, 56.58, 63.32, 75.43]):
 *  0 Ex5 heading: simplify to a constant · 1 the four allied-angle reductions
 *  2 formula: collapses to -1
 *  3 Ex6 heading: prove cos(270°+θ)=sinθ · 4 QIV, n=3 odd ⇒ cos→sin
 *  5 formula: = +sinθ (boxed, green)
 *  6 Ex7 heading: a long product (JEE Advanced) · 7 formula: tan²θ/-tan²θ = -1
 *  8 red-margin (high): products almost always collapse to ±1 - else recheck a sign
 *
 * Layout plan — three columns: Ex5 x60-420, Ex6 x460-720, Ex7 x760-1020:
 *  b0 | "Example 5..." (15,amber,w700)   | T st | x60..322  y104..119 (bl 110)
 *  b1 | 2 reduction lines (13)           | T st | x60..300   y139..174
 *  b2 | chip formula (collapse)          | Chip | x60..420   y195..233
 *  b3 | "Example 6..." (14,amber,w700)   | T st | x460..712 y104..119 (bl 110)
 *  b4 | 2 lines (13)                     | T st | x460..700  y139..174
 *  b5 | chip formula (green, =+sinθ)     | Chip | x460..720   y195..233
 *  b6 | "Example 7..." (13,amber,w700)   | T st | x760..987 y104..119 (bl 110)
 *  b7 | chip formula (=-1)               | Chip | x760..980   y145..183
 *  b8 | margin bar (red)                  | Draw | x60  y280..330
 *  b8 | closer 2 lines (14,red,w700)      | T st | x76..700   y302..324
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Long Allied-Angle Products That Collapse", "Lambe Allied-Angle Products Jo Collapse Hote Hain")}
        </T>
      </Fade>

      {/* beat 0 — Example 5 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — simplify to a constant", "Example 5 — ek constant tak simplify")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 322 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the four reductions */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">
          sin(90°+θ)=cosθ, cos(180°-θ)=-cosθ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={13} fill={INK} anchor="start">
          cos(90°-θ)=sinθ, sin(180°+θ)=-sinθ
        </T>
      </Fade>

      {/* beat 2 — collapses to a constant */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={195} w={360} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          cosθ(-cosθ)+sinθ(-sinθ) = -1
        </Chip>
      </Fade>

      {/* beat 3 — Example 6 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={460} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — prove cos(270°+θ)=sinθ", "Example 6 — prove cos(270°+θ)=sinθ")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 460 118 L 712 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — quadrant + n odd */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={460} y={145} size={13} fill={INK} anchor="start">
          {t("270°+θ in QIV (cos+); n=3 odd", "270°+θ QIV mein (cos+); n=3 odd")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={460} y={168} size={13} fill={INK} anchor="start" weight={700}>
          ⇒ cos → sin
        </T>
      </Fade>

      {/* beat 5 — the result, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={460} y={195} w={260} h={38} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          cos(270°+θ) = +sinθ
        </Chip>
      </Fade>

      {/* beat 6 — Example 7 heading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={760} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 7 — long product (JEE Adv)", "Example 7 — lamba product (JEE Adv)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M 760 118 L 987 118" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.4)} />

      {/* beat 7 — reduces to -1 */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={760} y={145} w={220} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          tan²θ/-tan²θ = -1
        </Chip>
      </Fade>

      {/* beat 8 — red-margin closer */}
      <Draw on={beat >= 8} d="M 60 280 L 60 330" stroke={RED} sw={3} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={76} y={302} size={14} fill={RED} anchor="start" weight={700}>
          {t("Long allied-angle products almost always", "Lambe allied-angle products lagbhag hamesha")}
        </T>
        <T x={76} y={324} size={14} fill={RED} anchor="start" weight={700}>
          {t("collapse to ±1. If yours doesn't, recheck a sign.", "±1 mein collapse hote hain. Nahi ho raha? Sign recheck karo.")}
        </T>
      </Fade>
    </Scene>
  );
}

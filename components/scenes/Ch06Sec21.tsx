/**
 * Ch06 · Section 21 — "Common pitfalls and pro-tips" (Vector Product)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.62, 17.66, 28.5, 37.97, 56.75, 67.58, 77.23]):
 *  0 title + red underline
 *  1 trap 1: anti-commutative + formula
 *  2 red consequence line
 *  3 trap 2: minus on j + "+i −j +k"
 *  4 trap 3: dot vs cross chips
 *  5 trap 4: parallel → zero
 *  6 door mini right: force toward hinge → torque = 0
 *  7 pro-tip green box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | script14 st x80 bl 125 · sans16 st x110 bl 155
 *  b2 | script12 st x110 bl 185
 *  b3 | script14 st x80 bl 235 · sans15 st x110 bl 265
 *  b4 | script14 st x80 bl 315 · chipA x110 y330 w360 h40 · chipB x510 y330 w390 h40
 *  b5 | script14 st x80 bl 425
 *  b6 | hinge dot (770,200) · door (770,200)→(980,200) sw4 · F arrow
 *       (945,186)→(795,186) red · label script12 cx870 bl 160 · "torque = 0!"
 *       cx870 bl 245 · "hinge" end(758,206)
 *  b7 | green box x80..1000 y470..560 · L1 script14 cx540 bl 502 · L2 script12 cx540 bl 534
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "cross-product traps that cost marks",
            "cross product ke marks khaane waale traps"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 300 72 h 480" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — trap 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · not ordinary multiplication — anti-commutative",
            "1 · ordinary multiplication NAHI — anti-commutative"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={110} y={155} size={16} fill={INK} anchor="start" weight={700}>
          A × B = − B × A
        </T>
      </Fade>

      {/* beat 2 — the cost */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={110} y={185} size={12} fill={RED} script anchor="start">
          {t(
            "reverse the order → sign flips → wrong clockwise vs anticlockwise",
            "order ulti → sign palta → clockwise vs anticlockwise galat"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={235} size={14} fill={RED} script anchor="start">
          {t(
            "2 · the determinant's j term carries a MINUS",
            "2 · determinant ke j term par MINUS hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={110} y={265} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          +i    −j    +k
        </T>
      </Fade>

      {/* beat 4 — trap 3: dot vs cross */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={315} size={14} fill={RED} script anchor="start">
          {t("3 · dot vs cross — never mix them", "3 · dot vs cross — kabhi mat milao")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Chip x={110} y={330} w={360} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("DOT: cosθ · scalar · max at ∥", "DOT: cosθ · scalar · max ∥ par")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <Chip x={510} y={330} w={390} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("CROSS: sinθ · vector · max at ⊥", "CROSS: sinθ · vector · max ⊥ par")}
        </Chip>
      </Fade>

      {/* beat 5 — trap 4 */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={80} y={425} size={14} fill={RED} script anchor="start">
          {t(
            "4 · parallel vectors → sinθ = 0 → the product is ZERO",
            "4 · parallel vectors → sinθ = 0 → product ZERO hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the physical face: no torque toward the hinge */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 770 200 H 980" stroke={INK} sw={4} dur={0.7} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.8)}
        d="M 765 200 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={758} y={206} size={11} fill={MUTED} script anchor="end">
          hinge
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.5)}
        d={arrowD(945, 186, 795, 186)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={870} y={160} size={12} fill={RED} script>
          {t("F — straight toward the hinge", "F — seedha hinge ki taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={870} y={245} size={13} fill={RED} script>
          {t("no torque at all!", "bilkul koi torque nahi!")}
        </T>
      </Fade>

      {/* beat 7 — the habit */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 92 470 h 896 q 12 0 12 12 v 66 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={540} y={502} size={14} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: after every cross product — dot the result with an original vector",
            "PRO-TIP: har cross product ke baad — result ko original vector se dot karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={540} y={534} size={12} fill={MUTED} script>
          {t(
            "not zero? arithmetic slipped — redo · 5 seconds spent, whole questions saved",
            "zero nahi? arithmetic phisli — dobara · 5 second lage, poore questions bache"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch03 · Section 15 — "Two ways to multiply, two different physical questions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 30.5, 54.4, 72.2, 92.7, 114.4, 133.1]):
 *  0 heading
 *  1 one way for numbers, TWO for vectors
 *  2 DOT header (agreement / along)
 *  3 CROSS header (disagreement / across)
 *  4 two panels: shadow vs out-of-plane arrow
 *  5 red: scalar vs vector, never swap
 *  6 mirror behaviour rows + ⇄
 *  7 verdict: choose from the physics
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 94 h480
 *  b2 | header st x84 bl 130 s13
 *  b3 | header st x584 bl 130 s13
 *  b4 L | A (120,300)→(400,300) lbl st x412 bl 305 · B (120,300)→(300,190)
 *        lbl end (195,225) · dash (300,190)→(300,300) · shadow (120,300)→(300,300)
 *        amber sw6 · lbl cx210 bl 328 s11
 *  b4 R | A (620,300)→(780,300) lbl st x792 bl 305 · B (620,300)→(700,248)
 *        lbl (676,238) · plane dash M620 300 L780 300 L860 248 L700 248 Z ·
 *        A×B (740,274)→(740,168) lbl st x752 bl 188 · lbl cx740 bl 330 s11
 *  b5 | bar M66 360 v44 · lines st x84 bl 378 / 402 s12
 *  b6 | rows st x84 / x584 bl 448 s12 · arrows (505,444)⇄(565,444)
 *  b7 | bar M66 490 v44 · lines st x84 bl 508 / 532 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "Multiplying vectors — where the marks actually live",
            "Vectors ka guna — jahan asli marks rehte hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — two species */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "numbers have ONE multiplication — vectors have TWO, and they are different species",
            "numbers ka EK guna hota hai — vectors ke DO, aur dono alag species hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 94 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the agreement question */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={130} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "DOT — how much do they AGREE? (along)",
            "DOT — kitna AGREE karte hain? (saath mein)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d="M 84 138 h 330" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — the disagreement question */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={584} y={130} size={13} fill={GREEN} script anchor="start">
          {t(
            "CROSS — how much do they DISAGREE? (across)",
            "CROSS — kitna DISAGREE karte hain? (aar-paar)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 584 138 h 350" stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 4 — the two panels */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(120, 300, 400, 300)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={412} y={305} size={14} fill={INK} weight={700} anchor="start">A</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(120, 300, 300, 190)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={195} y={225} size={14} fill={INK} weight={700} anchor="end">B</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.6)} d="M 300 190 V 300" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.4)} d="M 120 300 H 300" stroke={AMBER} sw={6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={210} y={328} size={11} fill={AMBER_DARK} script>
          {t("B's shadow along A = B cosθ", "A par B ki parchhai = B cosθ")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 7)} d={arrowD(620, 300, 780, 300)} stroke={INK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 7.8)} d={arrowD(620, 300, 700, 248)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 8.4)}>
        <T x={792} y={305} size={14} fill={INK} weight={700} anchor="start">A</T>
        <T x={676} y={238} size={14} fill={INK} weight={700}>B</T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 9.2)}
        d="M 620 300 L 780 300 L 860 248 L 700 248 Z"
        stroke={MUTED}
        sw={1.3}
        dur={0.8}
      />
      <Draw on={beat >= 4} delay={dl(4, 10.4)} d={arrowD(740, 274, 740, 168)} stroke={GREEN} sw={3} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 11.2)}>
        <T x={752} y={188} size={13} fill={GREEN} weight={800} anchor="start">A×B</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12.2)}>
        <T x={740} y={330} size={11} fill={GREEN} script>
          {t(
            "stands out of the plane — a NEW direction",
            "plane se bahar khada — ek NAYI direction"
          )}
        </T>
      </Fade>

      {/* beat 5 — different species of answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 360 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={378} size={12} fill={RED} script anchor="start">
          {t(
            "DOT returns a SCALAR — a plain amount, no direction of its own",
            "DOT deta hai SCALAR — sirf ek amount, apni koi direction nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={84} y={402} size={12} fill={RED} script anchor="start">
          {t(
            "CROSS returns a VECTOR — components and a direction. never write one as the other",
            "CROSS deta hai VECTOR — components aur direction. kabhi ek ko doosra mat likho"
          )}
        </T>
      </Fade>

      {/* beat 6 — mirror images */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={448} size={12} fill={AMBER_DARK} script anchor="start">
          {t("dot: MAX when ∥ · zero when ⊥", "dot: ∥ par MAX · ⊥ par zero")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d={arrowD(505, 444, 565, 444)} stroke={MUTED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={arrowD(565, 452, 505, 452)} stroke={MUTED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={584} y={448} size={12} fill={GREEN} script anchor="start">
          {t("cross: zero when ∥ · MAX when ⊥", "cross: ∥ par zero · ⊥ par MAX")}
        </T>
      </Fade>

      {/* beat 7 — the framing to keep */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 490 v 44" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={508} size={12} fill={GREEN} script anchor="start">
          {t(
            "work asks “how much along” → dot · torque asks “how much across” → cross",
            "work poochhta hai “kitna saath” → dot · torque poochhta hai “kitna aar-paar” → cross"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={532} size={12} fill={GREEN} script anchor="start">
          {t(
            "not two formulas to guess between — two different physical QUESTIONS",
            "do formulas nahi jinme guess karna hai — do alag physical SAWAAL hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

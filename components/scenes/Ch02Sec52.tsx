/**
 * Ch02 · Section 52 — "Working in a relative frame"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.1, 17.3, 18.3, 43.2, 67.6, 85.3, 101.4, 126.2]):
 *  0 title
 *  1 card: v_rel = u_rel + a_rel·t
 *  2 card: s_rel = u_rel·t + ½a_rel·t²
 *  3 why lines: genuine equations, not analogy
 *  4 red note: the stamp travels with the box
 *  5 workhorse card: t = separation/|v_rel| (a_rel = 0)
 *  6 crossing lines: L₁+L₂ vs own L
 *  7 red: free fall ⇒ a_rel = 0 — the cue
 *  8 green: frames change the algebra, not the physics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  cards y90..150: b1 x80..520 (bl 126) · b2 x560..1000 (bl 126)
 *  b3 lines cx540 bl 180 / 204 · b4 bar x66 y225..278, lines st x84 bl 244 / 270
 *  b5 card x180..900 y300..365 (bl 330 · sub bl 352)
 *  b6 lines st x84 bl 396 / 420
 *  b7 | bar x66 y445..498 · lines st x84 bl 464 / 490
 *  b8 | bar x56 y520..576 · lines st x72 bl 540 / 566
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — computing inside the frame */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "working inside a relative frame",
            "relative frame ke andar kaam karna"
          )}
        </T>
      </Fade>

      {/* beat 1 — equation one, relative */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 92 90 h 416 q 12 0 12 12 v 36 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={300} y={126} size={18} fill={INK} weight={800}>
          v_rel = u_rel + a_rel·t
        </T>
      </Fade>

      {/* beat 2 — equation two, relative */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 572 90 h 416 q 12 0 12 12 v 36 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={780} y={126} size={18} fill={INK} weight={800}>
          s_rel = u_rel·t + ½a_rel·t²
        </T>
      </Fade>

      {/* beat 3 — permission, earned */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={180} size={12} fill={AMBER_DARK} script>
          {t(
            "allowed because a difference of two solutions is itself a solution",
            "ijaazat isliye: do solutions ka antar khud ek solution hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={540} y={204} size={12} fill={MUTED} script>
          {t(
            "not an analogy — the genuine equations, applied to the motion B sees",
            "analogy nahi — asli equations, us motion par jo B dekhta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the stamp travels */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 225 v 53" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={244} size={13} fill={RED} script anchor="start">
          {t(
            "the stamp travels with the box: a_rel must be CONSTANT",
            "stamp dabbe ke saath chalti hai: a_rel CONSTANT hona chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={84} y={270} size={13} fill={RED} script anchor="start">
          {t(
            "two messy accelerations may have a non-constant difference — then these are invalid",
            "do uljhe accelerations ka antar constant na ho — to yeh yahan bhi invalid hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the workhorse */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 192 300 h 696 q 12 0 12 12 v 41 q 0 12 -12 12 h -696 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={330} size={16} fill={INK} weight={700}>
          {t(
            "t_meet = initial separation ⁄ |v_rel|   (needs a_rel = 0)",
            "t_meet = shuruaati doori ⁄ |v_rel|   (a_rel = 0 chahiye)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={540} y={352} size={11} fill={MUTED} script>
          {t(
            "no relative acceleration → no t² → just a division",
            "relative acceleration nahi → t² nahi → bas ek bhaag"
          )}
        </T>
      </Fade>

      {/* beat 6 — the crossing formulas */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={84} y={396} size={13} fill={INK} script anchor="start">
          {t(
            "crossing another train: s_rel = L₁ + L₂ · passing a pole: s_rel = L (own length)",
            "doosri train paar karna: s_rel = L₁ + L₂ · khambe ko paar karna: s_rel = L (apni lambaai)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={420} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "read the question, pick the right distance, then divide",
            "sawaal padho, sahi doori chuno, phir bhaag do"
          )}
        </T>
      </Fade>

      {/* beat 7 — the highest-value line */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 445 v 53" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={464} size={14} fill={RED} script anchor="start">
          {t(
            "memorise outright: both in free fall ⇒ a_rel = 0 ⇒ quadratic becomes a division",
            "seedha yaad karo: dono free fall mein ⇒ a_rel = 0 ⇒ quadratic ek bhaag ban jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "two objects under gravity alone — thrown, dropped, whatever — that is your cue",
            "do cheezein sirf gravity ke sahare — phenki, giraayi, kuchh bhi — wahi tumhaara cue hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the art of the sub-topic */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 520 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={540} size={13} fill={GREEN} script anchor="start">
          {t(
            "choosing a frame changes NO physics — every observer agrees on what happened",
            "frame chun-ne se physics NAHI badalti — kya hua, is par sab sehmat hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={72} y={566} size={13} fill={GREEN} script anchor="start">
          {t(
            "it changes how much ALGEBRA you must do — that is the entire art",
            "badalta hai to bas kitna ALGEBRA karna padega — poori kala yahi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

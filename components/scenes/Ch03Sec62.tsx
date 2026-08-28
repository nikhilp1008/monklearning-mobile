/**
 * Ch03 · Section 62 — "The five pitfalls in relative velocity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.9, 19.4, 32.7, 49.3, 63.7, 74.3, 88.5]):
 *  0 heading
 *  1 ① subtraction order wrong
 *  2 read the subscript rule
 *  3 ② adding when should subtract
 *  4 ③ shortest time vs shortest path
 *  5 ④ tilting the wrong way
 *  6 ⑤ forgetting to convert back
 *  7 the one habit that fixes all five
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: circles cx100 r14 · titles st x130
 *  r1 | cy140 title bl 146
 *  r2 | cy180 sub bl 186 / 208
 *  r3 | cy260 title bl 266
 *  r4 | cy320 title bl 326
 *  r5 | cy380 title bl 386
 *  r6 | cy440 title bl 446
 *  b7 | bar M66 500 v52 · lines st x84 bl 518 / 542 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function NumCircle({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${cy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={cy + 4.5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </>
  );
}

export default function Ch03Sec62({ currentTime, reveals, language }: SceneProps) {
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
            "FIVE PITFALLS in relative velocity",
            "Relative velocity ke PAANCH PITFALLS"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① order wrong */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={14} fill={INK} weight={700} anchor="start">
          v(AB) = vA − vB, NEVER vB − vA
        </T>
      </Fade>

      {/* beat 2 — the reading rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={130} y={186} size={12} fill={GREEN} script anchor="start">
          {t(
            "read it as “A relative to B” — first letter moves, second observes",
            "isse padho “A, B ke sapeksh” — pehla akshar chalta hai, doosra dekhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={130} y={208} size={12} fill={RED} script anchor="start">
          {t(
            "flip the order and every sign in the answer flips too",
            "order palto to jawaab ka har sign bhi palat jata hai"
          )}
        </T>
      </Fade>

      {/* ② adding instead of subtracting */}
      <NumCircle on={beat >= 3} delay={dl(3, 0.6)} cy={260} n="2" />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={130} y={266} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "adding when you should subtract — the angle formula needs a MINUS cosine",
            "jodna jab ghatana chahiye tha — angle formula mein MINUS cosine chahiye"
          )}
        </T>
      </Fade>

      {/* ③ time vs path */}
      <NumCircle on={beat >= 4} delay={dl(4, 0.6)} cy={320} n="3" />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={130} y={326} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "shortest TIME ↔ shortest PATH confused — different headings, different answers",
            "shortest TIME ↔ shortest PATH gadbad — alag headings, alag jawaab"
          )}
        </T>
      </Fade>

      {/* ④ wrong tilt */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={380} n="4" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={386} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "tilting the umbrella backward — always tilt INTO the apparent rain",
            "chhata peechhe jhukana — hamesha dikhne wali baarish ki taraf jhukao"
          )}
        </T>
      </Fade>

      {/* ⑤ forgetting to convert back */}
      <NumCircle on={beat >= 6} delay={dl(6, 0.6)} cy={440} n="5" />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={130} y={446} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "forgetting to convert back to the ground frame — subtract to enter, ADD to leave",
            "wapas ground frame mein na aana — ghusne ko ghatao, NIKALNE ko jodo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the one habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "the habit that prevents all five: draw the vector triangle BEFORE touching numbers",
            "yeh aadat sab pitfalls rokti hai: numbers chhoone se PEHLE vector triangle banao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={542} size={12} fill={INK} script anchor="start">
          {t(
            "almost every mistake here is a picture that was never drawn",
            "yahan ki har galti ek tasveer hai jo kabhi banayi hi nahi gayi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

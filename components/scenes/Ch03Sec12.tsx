/**
 * Ch03 · Section 12 — "JEE Advanced, part two: cross product, unit normal, and area"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.5, 37.1, 38.1, 63.0, 73.5, 98.4, 118.3, 143.1, 165.5]):
 *  0 heading
 *  1 given + three tasks
 *  2 determinant array with bars
 *  3 three cofactors
 *  4 assembled result box
 *  5 red: the built-in ĵ minus
 *  6 diagram: normal arrow out of the plane
 *  7 (d) unit normal
 *  8 (e) area = 5√3
 *  9 check via AB sinθ
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b0 | title cx540 bl 48 · underline M340 62 h400
 *  b1 | line cx540 bl 84 s13
 *  b2 | bars M110 128 v96 · M370 128 v96 · rows cx160/240/320 bl 150/180/210 s14 ·
 *       caption cx240 bl 240 s11
 *  b3 | rows st x84 bl 286 / 312 / 338 s13
 *  b4 | box x84..430 y358..402 text cx257 bl 388 s15
 *  b5 | bar M66 422 v44 · lines st x84 bl 440 / 464 s12
 *  b6 | plane path (600,240)(760,240)(820,190)(660,190) · normal (710,215)→(710,110) ·
 *       "A×B" st x722 bl 130 · lbl cx710 bl 262 s11 · amber cx710 bl 286 s11
 *  b7 | st x570 bl 330 s14 · green st x570 bl 354 s11
 *  b8 | st x570 bl 392 s14 · caption st x570 bl 416 s11
 *  b9 | bar M556 440 v56 · lines st x570 bl 458 / 482 / 506 s12
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

export default function Ch03Sec12({ currentTime, reveals, language }: SceneProps) {
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
            "Same A and B — now the CROSS product",
            "Wahi A aur B — ab CROSS product"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — three read-offs */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} weight={700}>
          {t(
            "A = 2î+3ĵ−k̂ , B = î−ĵ+2k̂ — (c) A×B  (d) n̂ ⊥ both  (e) area",
            "A = 2î+3ĵ−k̂ , B = î−ĵ+2k̂ — (c) A×B  (d) n̂ ⊥ dono  (e) area"
          )}
        </T>
      </Fade>

      {/* beat 2 — the determinant */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 110 128 v 96" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 370 128 v 96" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={160} y={150} size={14} fill={INK} weight={700}>î</T>
        <T x={240} y={150} size={14} fill={INK} weight={700}>ĵ</T>
        <T x={320} y={150} size={14} fill={INK} weight={700}>k̂</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={160} y={180} size={14} fill={INK} weight={700}>2</T>
        <T x={240} y={180} size={14} fill={INK} weight={700}>3</T>
        <T x={320} y={180} size={14} fill={INK} weight={700}>−1</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={160} y={210} size={14} fill={INK} weight={700}>1</T>
        <T x={240} y={210} size={14} fill={INK} weight={700}>−1</T>
        <T x={320} y={210} size={14} fill={INK} weight={700}>2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={240} y={240} size={11} fill={AMBER_DARK} script>
          {t(
            "A on top, B below — swap them and the sign flips",
            "A upar, B neeche — palto to sign palat jata hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — expand along the top row */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={286} size={13} fill={INK} weight={700} anchor="start">
          î :  (3)(2) − (−1)(−1) = 5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={84} y={312} size={13} fill={INK} weight={700} anchor="start">
          ĵ :  −[ (2)(2) − (−1)(1) ] = −5
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={84} y={338} size={13} fill={INK} weight={700} anchor="start">
          k̂ :  (2)(−1) − (3)(1) = −5
        </T>
      </Fade>

      {/* beat 4 — assemble */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 358 h 322 q 12 0 12 12 v 20 q 0 12 -12 12 h -322 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={257} y={388} size={15} fill={INK} weight={800}>
          A × B = 5î − 5ĵ − 5k̂
        </T>
      </Fade>

      {/* beat 5 — the built-in minus */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 422 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={440} size={12} fill={RED} script anchor="start">
          {t(
            "the middle ĵ term carries a built-in MINUS — from the determinant",
            "beech wale ĵ term mein built-in MINUS hai — determinant se aata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={464} size={12} fill={RED} script anchor="start">
          {t(
            "write −( ) in front BEFORE computing the ĵ bracket",
            "ĵ bracket compute karne se PEHLE aage −( ) likh do"
          )}
        </T>
      </Fade>

      {/* beat 6 — the geometry */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 600 240 L 760 240 L 820 190 L 660 190 Z"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={0.9}
      />
      <Draw on={beat >= 6} delay={dl(6, 2)} d={arrowD(710, 215, 710, 110)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={722} y={130} size={14} fill={GREEN} weight={800} anchor="start">A×B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={710} y={262} size={11} fill={INK_LIGHT} script>
          {t("the plane A and B define", "A aur B ka banaya plane")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={710} y={286} size={11} fill={AMBER_DARK} script>
          {t("direction → (d) · length → (e)", "direction → (d) · lambai → (e)")}
        </T>
      </Fade>

      {/* beat 7 — unit normal */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={570} y={330} size={14} fill={INK} weight={700} anchor="start">
          (d)  n̂ = (5î−5ĵ−5k̂) ⁄ 5√3 = (î−ĵ−k̂) ⁄ √3
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={570} y={354} size={11} fill={GREEN} script anchor="start">
          {t(
            "|A×B| = √(25+25+25) = 5√3 — the fives cancel cleanly",
            "|A×B| = √(25+25+25) = 5√3 — paanch saaf kat jate hain"
          )}
        </T>
      </Fade>

      {/* beat 8 — the area */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={570} y={392} size={14} fill={INK} weight={700} anchor="start">
          (e)  area = |A×B| = 5√3 ≈ 8.66 sq units
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={570} y={416} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "that's sinθ doing base × height — not a coincidence",
            "yeh sinθ ka base × height hai — koi coincidence nahi"
          )}
        </T>
      </Fade>

      {/* beat 9 — tie it together */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 556 440 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={570} y={458} size={12} fill={GREEN} script anchor="start">
          {t(
            "check: AB sinθ = √14·√6·sin109° ≈ 8.67 ✓",
            "check: AB sinθ = √14·√6·sin109° ≈ 8.67 ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 7)}>
        <T x={570} y={482} size={12} fill={GREEN} script anchor="start">
          {t(
            "agrees to rounding — and it reused part 1's angle",
            "rounding tak same — aur isne part 1 ka angle use kiya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 12)}>
        <T x={570} y={506} size={12} fill={INK} script anchor="start">
          {t(
            "one calculation, three read-offs",
            "ek calculation, teen jawaab"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

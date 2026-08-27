/**
 * Ch03 · Section 27 — "The five pitfalls that cost marks in vector products"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.4, 33.8, 44.6, 69.5, 93.6, 118.4, 128.2, 139.1]):
 *  0 heading
 *  1 ① cos/sin swap
 *  2 ② species mix-up (title)
 *  3 species detail lines
 *  4 ③ anticommutativity
 *  5 ④ determinant middle minus
 *  6 ⑤ two zero conditions (title)
 *  7 the two chips side by side
 *  8 exact opposites — anchor on meaning
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: circles cx100 r14 · titles st x130
 *  r1 | cy140 · title bl 146 s14 · sub bl 172 s12
 *  r2 | cy220 · title bl 226 s14 · subs bl 252 / 274 s12
 *  r3 | cy320 · title bl 326 s14 · tag st x290 bl 326 s12
 *  r4 | cy380 · title bl 386 s14 · sub bl 412 s12
 *  r5 | cy460 · title bl 466 s14
 *  b7 | chips y484 h36: x130 w330 · x480 w330
 *  b8 | lines st x130 bl 548 / 572 s12
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

export default function Ch03Sec27({ currentTime, reveals, language }: SceneProps) {
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
            "FIVE PITFALLS in vector products",
            "Vector products ke PAANCH PITFALLS"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① cos/sin */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={14} fill={INK} weight={700} anchor="start">
          {t("cos ↔ sin swapped — dot takes cos, cross takes sin", "cos ↔ sin ulte — dot mein cos, cross mein sin")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={130} y={172} size={12} fill={RED} script anchor="start">
          {t(
            "the classic: torque with a cosine — the work habit, freshly drilled",
            "classic galti: torque mein cosine — abhi-abhi ratayi work waali aadat"
          )}
        </T>
      </Fade>

      {/* ② species */}
      <NumCircle on={beat >= 2} delay={dl(2, 0.6)} cy={220} n="2" />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={130} y={226} size={14} fill={INK} weight={700} anchor="start">
          {t("dot written as a VECTOR · cross as a SCALAR", "dot ko VECTOR likha · cross ko SCALAR")}
        </T>
      </Fade>

      {/* beat 3 — species detail */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={130} y={252} size={12} fill={RED} script anchor="start">
          {t(
            "an î or ĵ anywhere inside A·B → wrong, regardless of the arithmetic",
            "A·B ke andar kahin bhi î ya ĵ → galat, arithmetic kuchh bhi ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={130} y={274} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "a bare number for A×B loses the mark even with a perfect magnitude",
            "A×B ka jawaab nanga number → mark gaya, chahe magnitude sahi ho"
          )}
        </T>
      </Fade>

      {/* ③ anticommutativity */}
      <NumCircle on={beat >= 4} delay={dl(4, 0.6)} cy={320} n="3" />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={130} y={326} size={14} fill={INK} weight={700} anchor="start">
          A×B = − B×A
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={290} y={326} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "backwards order = inverted PHYSICS, not just a flipped sign",
            "ulta order = ulti PHYSICS, sirf sign nahi palta"
          )}
        </T>
      </Fade>

      {/* ④ the middle minus */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={380} n="4" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={386} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "the determinant's middle ĵ term carries a built-in MINUS",
            "determinant ke beech waale ĵ term mein built-in MINUS hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={130} y={412} size={12} fill={GREEN} script anchor="start">
          {t(
            "write −( ) before computing the bracket — the error becomes impossible",
            "bracket compute karne se pehle −( ) likho — galti namumkin ho jaati hai"
          )}
        </T>
      </Fade>

      {/* ⑤ the zero conditions */}
      <NumCircle on={beat >= 6} delay={dl(6, 0.6)} cy={460} n="5" />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={130} y={466} size={14} fill={INK} weight={700} anchor="start">
          {t("the two ZERO conditions — say them out loud", "dono ZERO conditions — bol kar yaad karo")}
        </T>
      </Fade>

      {/* beat 7 — side by side */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={130} y={484} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          A·B = 0 → ⊥ perpendicular
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={480} y={484} w={330} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          A×B = 0 → ∥ parallel
        </Chip>
      </Fade>

      {/* beat 8 — burn the contrast in */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={130} y={548} size={12} fill={RED} script anchor="start">
          {t(
            "exact opposites — the most reliable trap in the whole sub-topic",
            "bilkul ulte — poore sub-topic ka sabse pakka trap"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={130} y={572} size={12} fill={GREEN} script anchor="start">
          {t(
            "anchor on meaning: nothing ALONG = right angles · nothing ACROSS = in line",
            "matlab par tiko: kuchh SAATH nahi = right angle · kuchh AAR-PAAR nahi = ek line"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

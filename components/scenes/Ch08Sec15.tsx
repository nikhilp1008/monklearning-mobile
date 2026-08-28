/**
 * Ch08 · Section 15 — "A loaded wire is a spring"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 4..5 are ~1s each — short delays there.
 *
 * Wire≡spring diagram on the left, formula cascade on the right.
 *
 * Beats (en [0, 12.37, 21.25, 30.46, 41.3, 42.3, 43.3, 58.06]):
 *  0 title only
 *  1 text: Y=FL/AΔL → rearrange for F
 *  2 F = (YA/L)ΔL
 *  3 diagram: wire ≡ spring, both loaded with F
 *  4 text: the bracket = spring constant
 *  5 boxed hero: k = YA/L, k∝A, k∝1/L
 *  6 text: short and fat = stiff
 *  7 red margin note: every spring rule transfers
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | text (15)          | T st | x550..~830 bl160 (y143..168)
 *  b2 | F=(YA/L)ΔL (20)    | T st | x550..~800 bl210 (y194..216)
 *  b3 | wire rail+line     | Draw | x60..220 y160..264
 *  b3 | "wire: L,A,Y" (12) | T mid| x80..~200 bl288 (y279..292)
 *  b3 | "≡" (26)           | T mid| x256..284 bl210
 *  b3 | spring rail+zigzag | Draw | x320..480 y160..264
 *  b3 | "spring: k" (12)   | T mid| x340..~460 bl288 (y279..292)
 *  b4 | text (14)          | T st | x550..~840 bl270 (y252..277)
 *  b5 | hero box           | Draw | x550..1030 y300..380
 *  b5 | "k = YA/L" (26)    | T st | x570..~760 bl335 (y315..343)
 *  b5 | "k∝A · k∝1/L" (15) | T st | x570..~780 bl365 (y353..370)
 *  b6 | text (14)          | T st | x550..~830 bl420 (y402..427)
 *  b7 | margin bar         | Draw | x60 y528..556
 *  b7 | note (15)          | T st | x76..~560 bl548 (y528..556)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("a loaded wire behaves like a spring", "loaded wire ek spring ki tarah behave karta hai")}
        </T>
      </Fade>

      {/* beat 1 — rearrange Young's modulus */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={550} y={160} size={15} fill={GREEN} script anchor="start">
          {t("Y = FL/AΔL → rearrange for F", "Y = FL/AΔL → F ke liye rearrange")}
        </T>
      </Fade>

      {/* beat 2 — force as a linear function of stretch */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={550} y={210} size={20} fill={INK} weight={700} anchor="start">
          F = (YA/L) ΔL
        </T>
      </Fade>

      {/* beat 3 — the diagram: wire ≡ spring */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M60 160 h160" stroke={INK} sw={3} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M140 160 L140 240" stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={124} y={240} w={32} h={24} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          F
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={140} y={288} size={12} fill={MUTED}>
          {t("wire: L, A, Y", "wire: L, A, Y")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={270} y={218} size={26} fill={AMBER_DARK} weight={700}>
          ≡
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M320 160 h160" stroke={INK} sw={3} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d="M400 160 l-10 8 20 10 -20 10 20 10 -20 10 20 10 -10 8"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <Chip x={384} y={240} w={32} h={24} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          F
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <T x={400} y={288} size={12} fill={MUTED}>
          {t("spring: constant k", "spring: constant k")}
        </T>
      </Fade>

      {/* beat 4 — the bracket IS a spring constant */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={550} y={270} size={14} fill={AMBER_DARK} script anchor="start">
          {t("the bracket = spring constant", "bracket hi spring constant hai")}
        </T>
      </Fade>

      {/* beat 5 — the hero definition */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.1)}
        d="M562 300 h456 q12 0 12 12 v56 q0 12 -12 12 h-456 q-12 0 -12 -12 v-56 q0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={570} y={335} size={26} fill={INK} weight={800} anchor="start">
          k = YA / L
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={365} size={15} fill={AMBER_DARK} weight={600} anchor="start">
          k ∝ A · k ∝ 1/L
        </T>
      </Fade>

      {/* beat 6 — short and fat is stiff */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={550} y={420} size={14} fill={INK} script anchor="start">
          {t("short and fat is stiff", "chota aur mota = stiff")}
        </T>
      </Fade>

      {/* beat 7 — the payoff */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("every spring rule now transfers to wires", "ab har spring rule wires par transfer hota hai")}
        </T>
      </Fade>
    </Scene>
  );
}

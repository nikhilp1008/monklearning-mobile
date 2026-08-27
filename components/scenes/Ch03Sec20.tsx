/**
 * Ch03 · Section 20 — "Board derivation: the cross product and the determinant"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 29.7, 54.5, 71.7, 88.0, 112.8, 123.4, 145.0]):
 *  0 heading
 *  1 same method, new rules
 *  2 unit-vector cross rules
 *  3 the î ĵ k̂ wheel (cycle → plus)
 *  4 against the cycle → minus
 *  5 collected component formula
 *  6 "it's a determinant"
 *  7 determinant array
 *  8 the WHY
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 94 h480
 *  b2 | st x84 bl 128 / 156 s13 · caption st x84 bl 180 s11
 *  b3 | circle C(250,315) r70 · î (250,230) · ĵ (324,366) st · k̂ (176,366) end ·
 *       arcs (−80°→−10°, 40°→140°, 160°→260°) + heads · caption cx250 bl 420 s12
 *  b4 | caption cx250 bl 448 s12
 *  b5 | st x520 bl 240 / 268 / 296 s13 · caption st x520 bl 320 s11
 *  b6 | st x520 bl 356 s12
 *  b7 | bars M560 380 v96 · M800 380 v96 · rows cx610/680/750 bl 402/432/462 ·
 *       caption cx680 bl 500 s11
 *  b8 | bar M66 500 v56 · lines st x84 bl 518 / 542 / 566 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
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

export default function Ch03Sec20({ currentTime, reveals, language }: SceneProps) {
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
            "CBSE DERIVATION — cross product & the determinant",
            "CBSE DERIVATION — cross product aur determinant"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — same method, new rules */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "distribute exactly the same way — only the unit-vector RULES change, and that changes everything",
            "distribute bilkul waise hi karo — sirf unit-vector RULES badalte hain, aur wahi sab kuchh badal deta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 94 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the new rules */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={128} size={13} fill={INK} weight={700} anchor="start">
          î×î = ĵ×ĵ = k̂×k̂ = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={156} size={13} fill={INK} weight={700} anchor="start">
          î×ĵ = k̂ · ĵ×k̂ = î · k̂×î = ĵ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={84} y={180} size={11} fill={MUTED} script anchor="start">
          {t(
            "the self products die now — nothing lies across itself",
            "self products ab marte hain — khud ke aar-paar kuchh nahi hota"
          )}
        </T>
      </Fade>

      {/* beat 3 — the wheel */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={250} cy={315} r={70} fill="none" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 5" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={250} y={230} size={16} fill={INK} weight={800}>î</T>
        <T x={324} y={366} size={16} fill={INK} weight={800} anchor="start">ĵ</T>
        <T x={176} y={366} size={16} fill={INK} weight={800} anchor="end">k̂</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 262.2 246.1 A 70 70 0 0 1 318.9 302.8" stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d={arrowD(317.5, 294, 318.9, 302.8)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d="M 303.6 360 A 70 70 0 0 1 196.4 360" stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4)} d={arrowD(205, 363.5, 196.4, 360)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 4.6)} d="M 184.2 338.9 A 70 70 0 0 1 237.8 246.1" stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 5.2)} d={arrowD(233, 253.5, 237.8, 246.1)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <T x={250} y={420} size={12} fill={GREEN} script>
          {t("follow the cycle → PLUS", "cycle ke saath chalo → PLUS")}
        </T>
      </Fade>

      {/* beat 4 — against the wheel */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={250} y={448} size={12} fill={RED} script>
          {t("against the cycle → MINUS: ĵ×î = −k̂", "cycle ke ulte → MINUS: ĵ×î = −k̂")}
        </T>
      </Fade>

      {/* beat 5 — collect the survivors */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={520} y={240} size={13} fill={INK} weight={700} anchor="start">
          A×B = (AyBz − AzBy) î
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={568} y={268} size={13} fill={INK} weight={700} anchor="start">
          + (AzBx − AxBz) ĵ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={568} y={296} size={13} fill={INK} weight={700} anchor="start">
          + (AxBy − AyBx) k̂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={520} y={320} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "each skips its own axis — and each is a DIFFERENCE",
            "har ek apni axis chhodta hai — aur har ek ek DIFFERENCE hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the gift */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={520} y={356} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "nobody memorises that — it is EXACTLY a determinant expansion",
            "yeh koi nahi ratta — yeh BILKUL determinant ka expansion hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the determinant */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 560 380 v 96" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 800 380 v 96" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={610} y={402} size={13} fill={INK} weight={700}>î</T>
        <T x={680} y={402} size={13} fill={INK} weight={700}>ĵ</T>
        <T x={750} y={402} size={13} fill={INK} weight={700}>k̂</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={610} y={432} size={13} fill={INK} weight={700}>Ax</T>
        <T x={680} y={432} size={13} fill={INK} weight={700}>Ay</T>
        <T x={750} y={432} size={13} fill={INK} weight={700}>Az</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={610} y={462} size={13} fill={INK} weight={700}>Bx</T>
        <T x={680} y={462} size={13} fill={INK} weight={700}>By</T>
        <T x={750} y={462} size={13} fill={INK} weight={700}>Bz</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={680} y={500} size={11} fill={GREEN} script>
          {t(
            "expand the top row — sign for sign the same",
            "top row se expand karo — sign-ba-sign wahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — the WHY */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 500 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "self products vanish: nothing lies across itself",
            "self products gayab: khud ke aar-paar kuchh nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={542} size={12} fill={GREEN} script anchor="start">
          {t(
            "the cyclic signs ARE the determinant's +,−,+ pattern — same algebra",
            "cyclic signs hi determinant ka +,−,+ pattern hain — wahi algebra"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={84} y={566} size={12} fill={RED} script anchor="start">
          {t(
            "and that is why the middle ĵ minus must never be dropped",
            "aur isi liye beech wala ĵ minus kabhi nahi chhootna chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

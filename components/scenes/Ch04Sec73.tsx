/**
 * Ch04 · Section 73 — "Derivation: contact force, and why the pushed end matters"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.37, 28.93, 48.73, 73.56, 91.99, 116.82]):
 *  0 title
 *  1 setup: m1(rear) & m2(front) touching on frictionless floor, F pushes m1
 *  2 diagram: two blocks + F arrow, caption — system first, then front block alone
 *  3 formula box: a = F/(m1+m2)
 *  4 formula box: Nc = m2·a = m2F/(m1+m2)
 *  5 check line: F − Nc = m1·a ✓
 *  6 red margin: push light→Nc large, push heavy→Nc small, interface = share needed ahead
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  b2 diagram: floor y245 · block1(m1) x300..370 y210..245 · block2(m2) x370..430 y210..245 ·
 *    F arr (245,227)→(300,227) lbl (235,221) · m1 lbl cx335 y265 · m2 lbl cx400 y265 ·
 *    caption cx540 bl 288
 *  b3 box x260..820 y310..354 bl 338
 *  b4 box x260..820 y374..418 bl 402
 *  b5 line cx540 bl 442
 *  b6 | bar x66 y470..566 · lines st x84 bl 490 / 516 / 542
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "CBSE Derivation — the internal force between two blocks",
            "CBSE Derivation — do blocks ke beech internal force"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ (rear) & m₂ (front) touch on a frictionless floor — F pushes m₁",
            "m₁ (peechhe) & m₂ (aage) frictionless floor par chhoote — F m₁ ko dhakelta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "both accelerate together — pressed against each other",
            "dono saath accelerate karte — ek-doosre par dabe hue"
          )}
        </T>
      </Fade>

      {/* beat 2 — diagram */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 260 245 H 470" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 300 210 h 70 v 35 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d="M 370 210 h 60 v 35 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d={arrowD(245, 227, 300, 227)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={235} y={221} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          F
        </T>
        <T x={335} y={265} size={12} fill={INK} weight={700}>
          m₁
        </T>
        <T x={400} y={265} size={12} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={540} y={288} size={12} fill={MUTED} script>
          {t(
            "system first for a, then the front block alone for Nc",
            "pehle system se a, phir aage waala block akela Nc ke liye"
          )}
        </T>
      </Fade>

      {/* beat 3 — the acceleration */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 272 310 h 536 q 12 0 12 12 v 20 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={338} size={16} fill={INK} weight={800}>
          a = F ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 4 — the contact force */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 272 374 h 536 q 12 0 12 12 v 20 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={402} size={16} fill={INK} weight={800}>
          Nc = m₂·a = m₂F ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 5 — the check */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={442} size={14} fill={GREEN} script>
          {t(
            "check on the rear: F − Nc = m₁·a ✓",
            "peechhe par check: F − Nc = m₁·a ✓"
          )}
        </T>
      </Fade>

      {/* beat 6 — the exam trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 470 v 96" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "push the LIGHT block to drive the heavy one → Nc is LARGE",
            "HALKA block dhakelo bhaari ko chalvaane ke liye → Nc BADA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "push the HEAVY block to drive the light one → Nc is SMALL",
            "BHAARI block dhakelo halke ko chalvaane ke liye → Nc CHHOTA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={542} size={14} fill={GREEN} script anchor="start">
          {t(
            "the force at any interface = only the share needed to move what's ahead",
            "kisi bhi interface par force = sirf aage jo hai use chalaane laayak hissa"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

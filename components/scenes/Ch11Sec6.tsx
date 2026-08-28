/**
 * Ch11 · Section 6 — "Two gas samples across a fixed conducting partition"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 container+partition setup · 1 two samples (2mol@400K,
 *  3mol@300K) · 2 what's conserved (no work, no heat lost) · 3 U=3/2nRT,
 *  equation, cancel · 4 compute T_f=340K · 5 zeroth law ⇒ one T, but V
 *  differs · 6 compute P_L, P_R · 7 verdict: T equal, P not.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)        | T mid | x204..876 y34..81 (bl 68)
 *  b0 | setup note (12,script)   | T mid | x245..615 y92..108 (bl 108)
 *  b0 | boundary(dashed) + wall  | Draw  | x130..730 y125..270 · wall x415..435
 *  b1 | L/R boxes (h110)         | Draw  | x150..405 / 445..700 y140..250
 *  b1 | L/R labels (18,w800)     | T mid | x277 / x572  y200
 *  b2 | 2 chips (h28)            | Chip  | x150..405 / 445..700 y290..318
 *  b2 | "U_total=constant"(16)   | T mid | x430 y340
 *  b3 | "U=(3/2)nRT"(16,w800)    | T mid | x430 y375
 *  b3 | equation (12)            | T mid | x430 y400
 *  b3 | cancel note (11,script)  | T mid | x430 y424
 *  b4 | working (12)             | T mid | x430 y445
 *  b4 | stamp chip (h32)         | Chip  | x330..530 y460..492
 *  b5 | transition (13,script)   | T mid | x430 y515
 *  b6 | P_L / P_R (14,w700)      | T mid | x277 / x572  y550
 *  b7 | verdict chip (h26)       | Chip  | x290..790 y565..591
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
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("two samples, one fixed conducting partition", "do samples, ek fixed conducting partition")}
        </T>
      </Fade>

      {/* beat 0 — the setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={430} y={108} size={12} fill={MUTED} script>
          {t("rigid, insulated box — fixed conducting partition inside", "rigid, insulated box — andar fixed conducting partition")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.8)} d="M 138 125 h 584 q 8 0 8 8 v 129 q 0 8 -8 8 h -584 q -8 0 -8 -8 v -129 q 0 -8 8 -8" stroke={MUTED} sw={1.6} dur={0.8} />
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d="M 415 125 h 20 v 145 h -20 z" stroke={INK} sw={2} dur={0.5} fill={AMBER} />

      {/* beat 1 — the two samples */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 140 h 255 v 110 h -255 z" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 445 140 h 255 v 110 h -255 z" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={277} y={200} size={18} fill={INK} weight={800} script={false}>
          2.0 mol, 400 K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={572} y={200} size={18} fill={INK} weight={800} script={false}>
          3.0 mol, 300 K
        </T>
      </Fade>

      {/* beat 2 — what's conserved */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={150} y={290} w={255} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("no work (fixed partition)", "no work (fixed partition)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Chip x={445} y={290} w={255} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("no heat lost (insulated)", "no heat lost (insulated)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={430} y={340} size={16} fill={INK} weight={800} script={false}>
          ⇒ U_total = constant
        </T>
      </Fade>

      {/* beat 3 — the equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={430} y={375} size={16} fill={INK} weight={800} script={false}>
          U = (3/2) n R T
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={430} y={400} size={12} fill={INK} script={false}>
          (3/2)(2)R(400) + (3/2)(3)R(300) = (3/2)(5)R(T_f)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={430} y={424} size={11} fill={MUTED} script>
          {t("(3/2)R cancels from every term", "(3/2)R har term se cancel")}
        </T>
      </Fade>

      {/* beat 4 — compute the final temperature */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={430} y={445} size={12} fill={INK} script={false}>
          = (2×400 + 3×300) / 5 = 1700 / 5
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={330} y={460} w={200} h={32} fill={INK} textFill={CREAM} size={18} script={false}>
          T_f = 340 K
        </Chip>
      </Fade>

      {/* beat 5 — zeroth law transition */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={430} y={515} size={13} fill={MUTED} script>
          {t("zeroth law ⇒ one T describes both — but V differs ⇒ P differs", "zeroth law ⇒ ek hi T — par V alag ⇒ P bhi alag")}
        </T>
      </Fade>

      {/* beat 6 — the two pressures */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={277} y={550} size={14} fill={AMBER_DARK} weight={700} script={false}>
          P_L ≈ 5.65×10⁵ Pa
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={572} y={550} size={14} fill={AMBER_DARK} weight={700} script={false}>
          P_R ≈ 8.48×10⁵ Pa
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={290} y={565} w={500} h={26} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("T equalises — P does NOT", "T barabar hota hai — P nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}

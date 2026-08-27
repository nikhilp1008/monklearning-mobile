/**
 * C11 Ch07 · Section 27 — Worked example (CBSE): oxalic acid titrated against KMnO₄
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 17.58, 23.98, 37.97, 47.87, 58.71, 67.67, 77.48]):
 *  0 heading: find the volume of KMnO₄ needed
 *  1 given: 20.0 mL of 0.10 M oxalic acid vs 0.020 M KMnO₄ in dilute H₂SO₄
 *  2 n-factors: oxalate n=2 · KMnO₄ n=5
 *  3 red-margin: endpoint M(KMnO₄)·n·V = M(oxalic)·n·V
 *  4 substitute: (0.020)(5)V = (0.10)(2)(20.0)
 *  5 simplify: 0.10V = 4.0 ⇒ V = 40.0 mL
 *  6 self-indicating note
 *  7 answer box, boxed green: V = 40.0 mL of KMnO₄
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | given (sans16)         | T mid | x540 bl134
 *  b2 | n-factors (sans16)     | T mid | x540 bl168
 *  b3 | margin bar x64 y192..224, text (sans16 red) x80 bl208
 *  b4 | substitute (sans17)    | T mid | x540 bl254
 *  b5 | simplify (sans19 800)  | T mid | x540 bl288
 *  b6 | note (sans14 muted)    | T mid | x540 bl320
 *  b7 | box x300..780 y346..398, answer (sans24 800 grn) bl380
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("read the four numbers, then find the n-factors", "pehle char numbers padho, phir n-factors nikalo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("find the volume of KMnO₄ needed", "KMnO₄ ka volume nikalo")}
        </T>
      </Fade>

      {/* ===== beat 1 — given ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={16} fill={INK}>
          20.0 mL, 0.10 M {t("oxalic acid", "oxalic acid")}   vs   0.020 M KMnO₄   ({t("dilute H₂SO₄", "dilute H₂SO₄")})
        </T>
      </Fade>

      {/* ===== beat 2 — n-factors ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={16} fill={INK}>
          n({t("oxalate", "oxalate")}) = 2   ·   n(KMnO₄) = 5
        </T>
      </Fade>

      {/* ===== beat 3 — endpoint balance ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 192 L 64 224" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={208} size={16} fill={RED} weight={700} anchor="start">
          {t("endpoint: M(KMnO₄) · n · V = M(oxalic) · n · V", "endpoint: M(KMnO₄) · n · V = M(oxalic) · n · V")}
        </T>
      </Fade>

      {/* ===== beat 4 — substitute ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={254} size={17} fill={INK}>
          (0.020)(5) V = (0.10)(2)(20.0)
        </T>
      </Fade>

      {/* ===== beat 5 — simplify ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={288} size={19} fill={INK} weight={800}>
          0.10 V = 4.0   ⇒   V = 40.0 mL
        </T>
      </Fade>

      {/* ===== beat 6 — self-indicating ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={320} size={14} fill={MUTED}>
          {t("self-indicating: first excess drop turns the flask permanent pink", "self-indicating: pehla excess drop flask ko permanent pink kar deta hai")}
        </T>
      </Fade>

      {/* ===== beat 7 — answer box ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={300} y={346} width={480} height={52} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={380} size={24} fill={GREEN} weight={800}>
          V = 40.0 mL KMnO₄
        </T>
      </Fade>
    </Scene>
  );
}

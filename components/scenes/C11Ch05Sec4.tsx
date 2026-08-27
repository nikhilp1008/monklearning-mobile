/**
 * C11 Chemistry Ch05 · Section 4 — "Reversible work, irreversible work and
 * the cyclic process"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,7.51,8.51,9.51,10.51,11.51,12.51,13.51]):
 *  0 P-V axes drawn (anchor)
 *  1 states A, B + irreversible one-step rectangle (area = w, small)
 *  2 reversible smooth curve added, enclosing more area
 *  3 red row: reversible ⇒ MAXIMUM work, |w_rev| > |w_irrev|
 *  4 side panel: free expansion into vacuum ⇒ Pext=0 ⇒ w=0
 *  5 row: cyclic process ⇒ ΔU_cycle = 0
 *  6 hero formula: q(cycle) = −w(cycle)
 *  7 caption lands inside the graph: area under curve = work
 *
 * Layout plan:
 *  b0 | v-axis (Pressure)             | Draw   | x140 y110..460
 *  b0 | h-axis (Volume)               | Draw   | y460 x140..820
 *  b0 | axis labels (13, muted)       | T      | beside each axis
 *  b1 | A dot (220,160) / B dot(700,380) | circle |
 *  b1 | A/B labels (13, ink)          | T      | beside dots
 *  b1 | irreversible rect (fill+outline)| Draw | x220..700 y380..460
 *  b1 | caption (13, muted)           | T mid  | x317..603  y120..134 (bl130)
 *  b2 | reversible curve (stroke)     | Draw   | (220,160)→(700,380)
 *  b2 | "reversible..." (13, green)   | T st   | x250..?    y185..199 (bl195)
 *  b3 | row: reversible=MAX work (red)| T mid  | x?..?      y513..530 (bl525)
 *  b4 | free-expansion panel          | Draw+T | x870..1020 y117..210
 *  b5 | row: cyclic ΔU=0 (amber)      | T mid  | x?..?      y513..530 (bl525)
 *  b6 | formula chip q(cycle)=-w(cycle)| Chip  | x415..665  y552..586
 *  b7 | caption in graph: area=work   | T mid  | x?..?      y224..238 (bl230)
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
  Chip,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("reversible vs irreversible work", "reversible vs irreversible work")}
        </T>
      </Fade>

      {/* beat 0 — P-V axes */}
      <Draw on={beat >= 0} delay={dl(0, 0)} d="M 140 460 L 140 110" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 140 460 L 820 460" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={125} y={120} size={13} fill={MUTED} anchor="end">
          {t("Pressure", "Pressure")}
        </T>
        <T x={820} y={480} size={13} fill={MUTED} anchor="end">
          {t("Volume", "Volume")}
        </T>
      </Fade>

      {/* beat 1 — A, B, irreversible one-step rectangle */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0)}
        d="M 220 380 h 480 v 80 h -480 z"
        stroke={AMBER_DARK}
        sw={2}
        fill="rgba(238,163,31,0.25)"
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={220} cy={160} r={5} fill={INK} />
        <Circle cx={700} cy={380} r={5} fill={INK} />
        <T x={205} y={150} size={13} fill={INK} anchor="end">
          A
        </T>
        <T x={715} y={395} size={13} fill={INK} anchor="start">
          B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={460} y={130} size={13} fill={MUTED}>
          {t("pushes against constant Pext ⇒ w on system < 0", "constant Pext ke against phailta hai ⇒ w negative")}
        </T>
      </Fade>

      {/* beat 2 — reversible curve */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0)}
        d="M 220 160 C 320 165, 420 230, 500 290 C 580 340, 650 365, 700 380"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={250} y={195} size={13} fill={GREEN} anchor="start" script>
          {t("reversible — tiny steps", "reversible — chhote steps")}
        </T>
      </Fade>

      {/* beat 3 — comparison row */}
      <Fade on={beat === 3} delay={dl(3, 0.2)}>
        <T x={540} y={525} size={15} weight={700} fill={RED}>
          {t("reversible ⇒ MAXIMUM work: |w_rev| > |w_irrev|", "reversible ⇒ MAXIMUM work: |w_rev| > |w_irrev|")}
        </T>
      </Fade>

      {/* beat 4 — free expansion side panel */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={945} y={128} size={13} weight={700} fill={INK}>
          {t("free expansion", "free expansion")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 870 140 h 150 v 70 h -150 z" stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={945} y={165} size={12} fill={MUTED}>
          {t("vacuum", "vacuum")}
        </T>
        <T x={945} y={195} size={14} weight={800} fill={GREEN}>
          {t("Pext = 0 ⇒ w = 0", "Pext = 0 ⇒ w = 0")}
        </T>
      </Fade>

      {/* beat 5 — cyclic process row */}
      <Fade on={beat === 5} delay={dl(5, 0.2)}>
        <T x={540} y={525} size={15} weight={700} fill={AMBER_DARK}>
          {t("cyclic: back to start ⇒ ΔU_cycle = 0", "cyclic: wapas start par ⇒ ΔU_cycle = 0")}
        </T>
      </Fade>

      {/* beat 6 — hero formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={415} y={552} w={250} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          {t("q(cycle) = −w(cycle)", "q(cycle) = −w(cycle)")}
        </Chip>
      </Fade>

      {/* beat 7 — synthesis caption inside the graph */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={550} y={230} size={14} fill={INK} script>
          {t("area under curve = work", "curve ke neeche ka area = work")}
        </T>
      </Fade>
    </Scene>
  );
}

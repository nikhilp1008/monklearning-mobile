/**
 * Ch11 · Section 10 — "State versus flow: the exam-deciding distinction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 hook · 1 balance=state, flow=income/spending · 2 U state
 *  fn, Q/W path fns · 3 three routes i→f · 4 ΔU same for all (endpoints
 *  only) · 5 ΔQ−ΔW path-independent · 6 closed cycle ⇒ ΔU=0 · 7 net Q=net W.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)      | T mid | x232..848 y33..77 (bl 64)
 *  b0 | hook (13,script)       | T mid | x540 y98
 *  b1 | 2 chips top-left(h28)  | Chip  | x90..320/90..370  y108..136/142..170
 *  b2 | 2 chips top-right(h28) | Chip  | x710..930/690..930 y108..136/142..170
 *  b3 | i,f points r8          | Draw  | c(250,260)/(650,260)
 *  b3 | 3 curved paths         | Draw  | i→f via y170/250/330 control pts
 *  b3 | "i"/"f" labels (16)    | T mid | x250/650 y285
 *  b4 | endpoints note (15)    | T mid | x540 y360
 *  b5 | path-indep chip (h30)  | Chip  | x380..700 y395..425
 *  b6 | cycle loop             | Draw  | c(540,480) rx100 ry45
 *  b6 | loop labels (14/16)    | T mid | x540 y475/498
 *  b7 | verdict chip (h32)     | Chip  | x330..750 y545..577
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const PATHS: [string, string][] = [
  ["M 250 260 Q 450 170, 650 260", AMBER],
  ["M 250 260 Q 450 250, 650 260", GREEN],
  ["M 250 260 Q 450 330, 650 260", AMBER_DARK],
];

export default function Ch11Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("state versus flow: the exam-deciding distinction", "state vs flow: exam-deciding distinction")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("the distinction that decides exam marks", "yeh distinction hi marks decide karta hai")}
        </T>
      </Fade>

      {/* beat 1 — bank analogy, compact */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={90} y={108} w={230} h={28} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("balance = state", "balance = state")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Chip x={90} y={142} w={280} h={28} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={12} script={false}>
          {t("income/spending = flow", "income/spending = flow")}
        </Chip>
      </Fade>

      {/* beat 2 — U is state, Q/W are path */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={710} y={108} w={220} h={28} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          U {t("= state function", "= state function")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Chip x={690} y={142} w={240} h={28} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={12} script={false}>
          Q, W {t("= path functions", "= path functions")}
        </Chip>
      </Fade>

      {/* beat 3 — three wildly different routes, same endpoints */}
      {PATHS.map(([d, color], i) => (
        <Draw key={i} on={beat >= 3} delay={dl(3, 0.3 + i * 0.6)} d={d} stroke={color} sw={2.4} dur={0.8} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Circle cx={250} cy={260} r={8} fill={CREAM} stroke={INK} strokeWidth={2} />
        <Circle cx={650} cy={260} r={8} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={250} y={285} size={16} fill={INK} weight={800} script={false}>
          i
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={650} y={285} size={16} fill={INK} weight={800} script={false}>
          f
        </T>
      </Fade>

      {/* beat 4 — depends only on endpoints */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={360} size={15} fill={GREEN} weight={700} script={false}>
          {t("ΔU same for all routes ⇒ endpoints only", "ΔU sab routes mein same ⇒ sirf endpoints")}
        </T>
      </Fade>

      {/* beat 5 — path independence */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={380} y={395} w={320} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          ΔQ − ΔW {t("is path-independent", "path-independent hai")}
        </Chip>
      </Fade>

      {/* beat 6 — the closed-cycle corollary */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d="M 440 480 C 440 435, 640 435, 640 480 C 640 525, 440 525, 440 480"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 590 437 l 12 -3 l -2 12" stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={475} size={14} fill={INK} weight={700} script={false}>
          {t("closed cycle", "closed cycle")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={498} size={16} fill={GREEN} weight={800} script={false}>
          ΔU = 0
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={330} y={545} w={420} h={32} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("net heat absorbed = net work done", "net heat absorbed = net work done")}
        </Chip>
      </Fade>
    </Scene>
  );
}

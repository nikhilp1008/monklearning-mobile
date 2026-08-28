/**
 * Ch11 · Section 11 — "Master equation, signs, and four shortcuts"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 hook · 1 master equation (both forms) · 2 sign convention
 *  chips · 3 W=∫PdV, area under P-V curve · 4 ΔU=nCvΔT (every process) ·
 *  5 chemistry sign-flip warning · 6 four-process preview row · 7 dimension
 *  check.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)      | T mid | x232..848 y33..77 (bl 64)
 *  b0 | hook (13,script)       | T mid | x540 y98
 *  b1 | eq (24,w800)           | T mid | x540 y130
 *  b1 | sub-eq (12)            | T mid | x540 y155
 *  b2 | 3 sign chips (h26)     | Chip  | x190/410/630 y170..196 w220
 *  b3 | formula (16,w800)      | T mid | x540 y225
 *  b3 | P-V icon               | Draw  | x150..380 y240..330
 *  b4 | "ΔU=nCvΔT" chip(h30)   | Chip  | x400..680 y365..395
 *  b4 | subnote (11,script)    | T mid | x540 y415
 *  b5 | warning chip (h32)     | Chip  | x240..840 y440..472
 *  b6 | 4 process chips(h26)   | Chip  | x118/333/548/763 y495..521 w200
 *  b7 | dimension chip (h28)   | Chip  | x380..700 y545..573
 */

import React from "react";
import { Path } from 'react-native-svg';
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

const SIGNS: [number, string, string][] = [
  [190, "Q>0: absorbed", GREEN],
  [410, "W>0: by gas", AMBER_DARK],
  [630, "ΔU>0: warms", INK],
];

const PROCS: [number, string][] = [
  [118, "isochoric: W=0"],
  [333, "isobaric: ΔP=0"],
  [548, "isothermal: ΔU=0"],
  [763, "adiabatic: Q=0"],
];

export default function Ch11Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("master equation, signs, and four shortcuts", "master equation, signs, aur chaar shortcuts")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("the compact toolkit for this subtopic", "is subtopic ka compact toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the master equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={24} fill={INK} weight={800} script={false}>
          ΔQ = ΔU + ΔW
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={155} size={12} fill={MUTED} script={false}>
          ⟺ ΔU = ΔQ − ΔW
        </T>
      </Fade>

      {/* beat 2 — sign convention */}
      {SIGNS.map(([x, label, color], i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 0.3 + i * 0.4)}>
          <Chip x={x} y={170} w={220} h={26} fill={CREAM} stroke={color} textFill={color} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — work as area under the P-V curve */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={225} size={16} fill={INK} weight={800} script={false}>
          {t("W = ∫P dV = area under the P-V curve", "W = ∫P dV = P-V curve ke neeche ka area")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 150 240 V 330 M 150 330 H 380" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Path d="M 180 270 Q 265 285, 350 320 L 350 330 L 180 330 Z" fill={AMBER} opacity={0.35} />
        <Path d="M 180 270 Q 265 285, 350 320" stroke={AMBER_DARK} strokeWidth={2.4} fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={138} y={248} size={12} fill={INK} script={false}>
          P
        </T>
        <T x={392} y={335} size={12} fill={INK} script={false}>
          V
        </T>
      </Fade>

      {/* beat 4 — ΔU = n Cv ΔT for every process */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={400} y={365} w={280} h={30} fill={INK} textFill={CREAM} size={17} script={false}>
          ΔU = n C_v ΔT
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={415} size={11} fill={MUTED} script>
          {t("(every process — not just constant volume)", "(har process — sirf constant V nahi)")}
        </T>
      </Fade>

      {/* beat 5 — the chemistry sign-flip warning */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={240} y={440} w={600} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("chemistry flips W: ΔU=ΔQ+ΔW — pick ONE, never mix", "chemistry mein W ulta: ΔU=ΔQ+ΔW — EK hi rakho")}
        </Chip>
      </Fade>

      {/* beat 6 — four-process preview */}
      {PROCS.map(([x, label]) => (
        <Fade key={label} on={beat >= 6} delay={dl(6, 0.3)}>
          <Chip x={x} y={495} w={200} h={26} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 7 — dimension check */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={380} y={545} w={320} h={28} fill={INK} textFill={CREAM} size={13} script={false}>
          {t("Q, W, ΔU — all in JOULES", "Q, W, ΔU — sab JOULES mein")}
        </Chip>
      </Fade>
    </Scene>
  );
}

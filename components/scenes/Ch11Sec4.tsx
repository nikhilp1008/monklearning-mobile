/**
 * Ch11 · Section 4 — "Equation of state and the classifications"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 toolkit hook · 1 PV=nRT · 2 variable chips · 3 PV=NkT
 *  (per-molecule) · 4 constants · 5 zeroth law recap · 6 intensive vs
 *  extensive (box cut in half) · 7 state vs path variables (2 columns).
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 30, red)       | T mid | x226..854 y31..85 (bl 70)
 *  b0 | hook (14,script,muted)  | T mid | x540 y112
 *  b1 | "PV = nRT" (32,w800)    | T mid | x476..604 y150 (bl 150)
 *  b2 | 5 var chips (h30)       | Chip  | y172..202  x112/286/460/634/808 w160
 *  b3 | "PV = N·k_B·T" (24)     | T mid | x540 y255
 *  b3 | note (13,script)        | T mid | x540 y286
 *  b4 | 3 constant chips (h28)  | Chip  | y300..328  x235/445/655 w190
 *  b5 | zeroth-law chip (h34)   | Chip  | x340..740 y340..374
 *  b6 | box(h70) + cut dashed   | Draw  | x340..740 y400..470 · cut x540
 *  b6 | half labels (13)        | T mid | x440 / x640  y490
 *  b7 | STATE chip (h34)        | Chip  | x150..430 y520..554
 *  b7 | PATH chip (h34)         | Chip  | x650..930 y520..554
 *  b7 | sub-notes (11)          | T mid | x290 / x790  y566
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const VARS: [number, string][] = [
  [112, "P — pressure"],
  [286, "V — volume"],
  [460, "n — moles"],
  [634, "T — kelvin"],
  [808, "R — gas const"],
];

const CONSTS: [number, string][] = [
  [235, "R = 8.314 J/mol·K"],
  [445, "k_B = 1.38×10⁻²³"],
  [655, "triple pt = 273.16 K"],
];

export default function Ch11Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={30} fill={RED} script>
          {t("equation of state, and the classifications", "state ka equation, aur classifications")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={14} fill={MUTED} script>
          {t("the toolkit for this subtopic", "is subtopic ka toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the equation of state */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={150} size={32} fill={INK} weight={800}>
          PV = nRT
        </T>
      </Fade>

      {/* beat 2 — what each symbol means */}
      {VARS.map(([x, label], i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 0.3 + i * 0.4)}>
          <Chip x={x} y={172} w={160} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — per-molecule form */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={255} size={24} fill={INK} weight={800}>
          PV = N·k_B·T
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={286} size={13} fill={MUTED} script>
          {t("N = number of molecules (not moles)", "N = molecules ki ginti (moles nahi)")}
        </T>
      </Fade>

      {/* beat 4 — the constants to memorise */}
      {CONSTS.map(([x, label], i) => (
        <Fade key={label} on={beat >= 4} delay={dl(4, 0.3 + i * 0.5)}>
          <Chip x={x} y={300} w={190} h={28} fill={INK} textFill={CREAM} size={13} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 5 — zeroth law, formalised */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={340} y={340} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          T_A=T_C, T_B=T_C ⇒ T_A=T_B
        </Chip>
      </Fade>

      {/* beat 6 — intensive vs extensive: cut the system in half */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 340 400 h 400 v 70 h -400 z" stroke={INK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 540 400 L 540 470" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={440} y={490} size={13} fill={GREEN} script={false}>
          {t("P, T same ⇒ intensive", "P, T same ⇒ intensive")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={640} y={490} size={13} fill={AMBER_DARK} script={false}>
          {t("V, mass half ⇒ extensive", "V, mass aadhi ⇒ extensive")}
        </T>
      </Fade>

      {/* beat 7 — state vs path variables */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={520} w={280} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          STATE: P, V, T, U
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={290} y={566} size={11} fill={MUTED} script={false}>
          {t("depends only on the current state", "sirf abhi ki state par depend karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <Chip x={650} y={520} w={280} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          PATH: Q, W
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={790} y={566} size={11} fill={MUTED} script={false}>
          {t("depends on the route — not stored", "route par depend — stored nahi hota")}
        </T>
      </Fade>
    </Scene>
  );
}

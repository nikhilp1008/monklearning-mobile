/**
 * Ch11 · Section 2 — "The zeroth law: how temperature is born"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 two friends chat (settle) · 1 = thermal equilibrium ·
 *  2 A~C, B~C, A/B insulated · 3 remove insulation — nothing changes ·
 *  4 zeroth law equation · 5 shared T-tag on A,B,C = temperature ·
 *  6 discovered last, numbered first · 7 guardrail: same T ≠ same energy.
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 30, red)        | T mid | x226..854 y31..85 (bl 70)
 *  b0 | 2 circles + wavy chat    | Draw  | c(330,125)/(420,125) r14
 *  b0 | hook label (13,script)   | T mid | x490 y162
 *  b1 | check mark + chip(h26)   | Chip  | x376,125 · x360..600 y176..202
 *  b2 | A/C/B boxes (h100)       | Draw  | x120..260/420..560/720..860 y210..310
 *  b2 | A-C, C-B connectors+✓    | Draw  | y260 · check c(340,245)/(640,245)
 *  b2 | insulated capsule(dash)  | Chip  | x395..585 y340..374
 *  b3 | equilibrium capsule      | Chip  | x300..680 y340..374 (supersedes b2)
 *  b4 | equation (18,w800)       | T mid | x400..580 y400 · underline y412
 *  b5 | T-tags on A/C/B (r14)    | Draw  | c(245,225)/(545,225)/(845,225)
 *  b5 | "same T ⇒ TEMPERATURE"   | Chip  | x360..620 y430..462
 *  b6 | timeline chip (h28)      | Chip  | x330..660 y470..498
 *  b7 | small/big T-boxes        | Draw  | x380..470 y505..555 / x630..800 y505..575
 *  b7 | guardrail note (13)      | T mid | x475..625 y588
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

const ROW: [number, string][] = [
  [120, "A"],
  [420, "C"],
  [720, "B"],
];

export default function Ch11Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={30} fill={RED} script>
          {t("the zeroth law: how temperature is born", "zeroth law: temperature kaise paida hota hai")}
        </T>
      </Fade>

      {/* beat 0 — two friends chat until it settles */}
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d="M 330 111 a 14 14 0 1 0 0.01 0" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 420 111 a 14 14 0 1 0 0.01 0" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1)}>
        <Draw on={beat >= 0} delay={0} d="M 344 122 Q 360 112, 376 122 T 406 122" stroke={AMBER_DARK} sw={2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.6)}>
        <T x={490} y={162} size={13} fill={MUTED} script anchor="start">
          {t("chatting — until it settles", "gossip — jab tak settle na ho jaye")}
        </T>
      </Fade>

      {/* beat 1 — that settled state = thermal equilibrium */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 368 122 l 6 6 l 12 -13" stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={360} y={176} w={240} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("= thermal equilibrium", "= thermal equilibrium")}
        </Chip>
      </Fade>

      {/* beat 2 — A~C, B~C, A/B insulated */}
      {ROW.map(([x, label], i) => (
        <React.Fragment key={label}>
          <Draw on={beat >= 2} delay={dl(2, 0.2 + i * 0.5)} d={`M ${x} 210 h 140 v 100 h -140 z`} stroke={INK} sw={2.4} dur={0.7} />
          <Fade on={beat >= 2} delay={dl(2, 0.6 + i * 0.5)}>
            <T x={x + 70} y={268} size={22} fill={INK} weight={800} script={false}>
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 260 260 L 420 260" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 560 260 L 720 260" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d="M 332 251 l 6 6 l 12 -13" stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d="M 632 251 l 6 6 l 12 -13" stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 4.2)}>
        <Chip x={395} y={340} w={190} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} dashed>
          {t("A ↔ B: insulated ✗", "A ↔ B: insulated ✗")}
        </Chip>
      </Fade>

      {/* beat 3 — remove the insulation, nothing changes */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={300} y={340} w={380} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("insulation removed — still equilibrium ✓", "insulation hataayi — phir bhi equilibrium ✓")}
        </Chip>
      </Fade>

      {/* beat 4 — the zeroth law, formalised */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={490} y={400} size={18} fill={INK} weight={800} script={false}>
          A≈C · B≈C  ⇒  A≈B
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 400 412 C 440 416, 540 408, 580 412" stroke={AMBER} sw={2.4} dur={0.6} />

      {/* beat 5 — the shared number: temperature */}
      {ROW.map(([x], i) => (
        <Fade key={x} on={beat >= 5} delay={dl(5, 0.3 + i * 0.4)}>
          <Circle cx={x + 125} cy={225} r={14} fill={AMBER} stroke={INK} strokeWidth={1.6} />
          <T x={x + 125} y={230} size={13} fill={INK} weight={700} script={false}>
            T
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Chip x={360} y={430} w={260} h={32} fill={INK} textFill={CREAM} size={16} script={false}>
          {t("same T ⇒ same TEMPERATURE", "same T ⇒ same TEMPERATURE")}
        </Chip>
      </Fade>

      {/* beat 6 — discovered last, numbered first */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={330} y={470} w={330} h={28} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("discovered last → numbered first", "discover sabse baad, number sabse pehle")}
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: same T ≠ same energy */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 380 505 h 90 v 50 h -90 z" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 630 505 h 170 v 70 h -170 z" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={400} y={528} size={14} fill={AMBER_DARK} weight={700} script={false}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={650} y={528} size={14} fill={AMBER_DARK} weight={700} script={false}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={425} y={545} size={10} fill={MUTED} script={false}>
          {t("less energy", "kam energy")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={715} y={560} size={10} fill={MUTED} script={false}>
          {t("more energy", "zyada energy")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={550} y={588} size={13} fill={RED} script={false}>
          {t("same T ✗ energy differs", "same T ✗ energy alag")}
        </T>
      </Fade>
    </Scene>
  );
}

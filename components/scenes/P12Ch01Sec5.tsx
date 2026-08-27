/**
 * P12Ch01 · Section 5 — "Charging by Induction — The Four-Step Procedure"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Step 1: Drawn positive rod brought near neutral conductor sphere (electron polarization)
 *  - Step 2: Drawn earthing wire to ground symbol (+ charge repelled to Earth)
 *  - Step 3: Wire cut with rod still near (trapped opposite charge)
 *  - Step 4: Rod removed showing uniform opposite charge distribution
 *
 * Beats (en [0, 6, 16, 32, 48, 64, 78, 90]):
 *  0 Title "charging by induction — the four-step procedure" + drawn underline
 *  1 Hook note: most-tested charging procedure — zero contact whatsoever!
 *  2 Badge 1 & Step 1: Rod brought near → polarization (near side -, far side +)
 *  3 Badge 2 & Step 2: Earth far side → like-sign charge repelled to ground
 *  4 Step 3: Remove earthing first → unlike charge trapped by rod's pull
 *  5 Step 4: Remove rod → induced charge spreads uniformly
 *  6 Key reasoning note: rod never touches, so zero charge lost from rod!
 *  7 Grand Verdict: Induction ⇒ OPPOSITE sign & ZERO rod charge lost!
 */

import React from "react";
import { Circle, G, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "charging by induction — the four-step procedure",
            "induction se charging — four-step procedure"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 340 70 C 440 66, 640 74, 740 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "the most-tested charging procedure — involves zero contact whatsoever!",
            "sabse zyada tested charging procedure — isme koi contact nahi hota!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Step 1 (Rod Brought Near) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: Rod Brought Near (No Contact)", "STEP 1: Rod Paas Laana (No Contact)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Positive Charged Rod */}
          <Rect x={10} y={35} width={100} height={18} rx={4} fill="#ffe4e6" stroke={RED} strokeWidth={1.6} />
          <T x={60} y={48} anchor="middle" size={11} fill={RED} weight={800}>+ Rod</T>

          {/* Conductor Sphere */}
          <Circle cx={200} cy={44} r={32} fill="#f1f5f9" stroke="#475569" strokeWidth={1.8} />
          <T x={180} y={49} anchor="middle" size={16} fill="#0284c7" weight={800}>-</T>
          <T x={220} y={49} anchor="middle" size={16} fill={RED} weight={800}>+</T>

          <T x={200} y={98} anchor="middle" size={12} script={true} fill={INK}>
            {t("Near side -, Far side +", "Paas side -, Door side +")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Step 2 (Earth Far Side) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Earth the Far Side", "STEP 2: Far Side ko Earth karna")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          {/* Positive Charged Rod */}
          <Rect x={10} y={35} width={100} height={18} rx={4} fill="#ffe4e6" stroke={RED} strokeWidth={1.6} />
          <T x={60} y={48} anchor="middle" size={11} fill={RED} weight={800}>+ Rod</T>

          {/* Conductor Sphere */}
          <Circle cx={200} cy={44} r={32} fill="#f1f5f9" stroke="#475569" strokeWidth={1.8} />
          <T x={180} y={49} anchor="middle" size={16} fill="#0284c7" weight={800}>-</T>

          {/* Ground Wire & Earth Symbol */}
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 232 44 h 40 v 35" stroke="#0284c7" sw={2} />
          <G transform="translate(272, 80)">
            <Line x1={-15} y1={0} x2={15} y2={0} stroke="#0284c7" strokeWidth={2.5} />
            <Line x1={-9} y1={4} x2={9} y2={4} stroke="#0284c7" strokeWidth={1.8} />
            <Line x1={-4} y1={8} x2={4} y2={8} stroke="#0284c7" strokeWidth={1.2} />
          </G>

          <T x={200} y={98} anchor="middle" size={12} script={true} fill={GREEN}>
            {t("+ charge repelled to Earth", "+ charge Earth mein chala gaya")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Step 3 (Remove Earthing First) ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 310)">
          <T x={0} y={16} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            {t("STEP 3: Remove Earthing First", "STEP 3: Pehle Earthing Hatana")}
          </T>

          {/* Rod still near, wire cut */}
          <Rect x={10} y={35} width={100} height={18} rx={4} fill="#ffe4e6" stroke={RED} strokeWidth={1.6} />
          <T x={60} y={48} anchor="middle" size={11} fill={RED} weight={800}>+ Rod</T>

          <Circle cx={200} cy={44} r={32} fill="#f1f5f9" stroke="#475569" strokeWidth={1.8} />
          <T x={180} y={49} anchor="middle" size={16} fill="#0284c7" weight={800}>-</T>

          <T x={200} y={98} anchor="middle" size={12} script={true} fill={AMBER_DARK}>
            {t("Only - charge trapped by rod's pull", "Sirf - charge trapped rehta hai")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Step 4 (Remove the Rod) ── */}
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 310)">
          <T x={0} y={16} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("STEP 4: Remove the Rod", "STEP 4: Rod Hatana")}
          </T>

          {/* Rod removed, sphere uniformly negative */}
          <Circle cx={200} cy={44} r={32} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={184} y={36} anchor="middle" size={14} fill={GREEN} weight={800}>-</T>
          <T x={216} y={36} anchor="middle" size={14} fill={GREEN} weight={800}>-</T>
          <T x={200} y={60} anchor="middle" size={14} fill={GREEN} weight={800}>-</T>

          <T x={200} y={98} anchor="middle" size={12} script={true} fill={GREEN}>
            {t("Induced - charge spreads uniformly!", "Induced - charge uniformly spread ho gaya!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Key Reasoning Note ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(60, 445)">
          <T x={480} y={24} anchor="middle" size={14} script={true} fill={AMBER_DARK}>
            {t(
              "Key Reasoning: Because there is no contact, the rod NEVER loses any charge!",
              "Key Reasoning: Contact na hone se rod ka EK BI charge lost nahi hota!"
            )}
          </T>
          <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ringD(480, 20, 450, 16)} stroke={AMBER_DARK} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Induction ⇒ OPPOSITE sign & ZERO rod charge lost!",
            "★ VERDICT: Induction ⇒ OPPOSITE sign & ZERO rod charge lost!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

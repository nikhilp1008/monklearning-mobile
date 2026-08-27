/**
 * C11 Chemistry Ch03 · Section 31 — "Reactivity peaks at both ends of a period"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.89, 10.84, 25.0, 38.91, 50.69, 64.94, 79.62]):
 *  0 title + underline
 *  1 picture a tug-of-war tournament across a period
 *  2 full U-shaped reactivity curve (Na..Cl) + Na ring: reducing agent
 *  3 Cl ring: oxidising agent
 *  4 red-margin: middle (Si) ring — balanced, LEAST reactive
 *  5 mirrors IE/EGE extremes
 *  6 metallic → metalloid → non-metallic gradient bar
 *  7 red-margin: Na2O basic, Al2O3 amphoteric, Cl2O7 acidic
 *
 * Layout plan:
 *  b2 | U-curve, 7 points            | Draw  | x150..930 y115..220
 *  b2 | element labels + Na tag      | T mid | bl245 (labels) / 265 (tags)
 *  b3 | Cl ring + tag                | Draw  | c(930,115)
 *  b4 | Si ring + red margin bar     | Draw  | c(540,220); bar x70 y280..312 (bl 302)
 *  b5 | mirror line (13, muted)      | T mid | x?..?     y330..341 (bl 340)
 *  b6 | gradient bar, 3 segments     | Draw  | x150..930 y365..389
 *  b7 | red margin bar + 3 oxides    | Draw  | x70 y394..426; texts bl 410
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const SYM = ["Na", "Mg", "Al", "Si", "P", "S", "Cl"];
const XS = [150, 280, 410, 540, 670, 800, 930];
const YS = [115, 175, 190, 220, 205, 175, 115];

export default function C11Ch03Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const curveD = "M " + XS.map((x, i) => `${x},${YS[i]}`).join(" L ");

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("reactivity: high at both ends, low in the middle", "reactivity: dono ends pe high, beech mein low")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the tug-of-war picture */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={MUTED} script>
          {t("picture a tug-of-war tournament across a period", "period ke across ek tug-of-war tournament socho")}
        </T>
      </Fade>

      {/* beat 2 — the full curve + Na (alkali metal) */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={curveD} stroke={INK} sw={2} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        {XS.map((x, i) => (
          <React.Fragment key={SYM[i]}>
            <Circle cx={x} cy={YS[i]} r={5} fill={INK} />
            <T x={x} y={245} size={12} fill={MUTED}>{SYM[i]}</T>
          </React.Fragment>
        ))}
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={ringD(150, 115, 25, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={150} y={265} size={11} weight={700} fill={AMBER_DARK}>
          {t("reducing agent", "reducing agent")}
        </T>
      </Fade>

      {/* beat 3 — Cl (halogen) */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={ringD(930, 115, 25, 20)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={930} y={265} size={11} weight={700} fill={RED}>
          {t("oxidising agent", "oxidising agent")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: the balanced middle */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(540, 220, 25, 20)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={265} size={11} weight={700} fill={GREEN}>
          {t("LEAST reactive", "LEAST reactive")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 70 280 L 70 312" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={94} y={302} size={14} weight={700} fill={INK} anchor="start">
          {t("carbon/silicon: balanced ⇒ neither give nor grab easily", "carbon/silicon: balanced ⇒ na dete na grab karte")}
        </T>
      </Fade>

      {/* beat 5 — mirrors the physical extremes */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={340} size={13} fill={MUTED}>
          {t("high at both ends, low in middle ⇒ mirrors IE/EGE", "dono ends pe high, beech mein low ⇒ IE/EGE jaisa")}
        </T>
      </Fade>

      {/* beat 6 — metallic to non-metallic gradient */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={280} y={358} size={11} fill={AMBER_DARK} weight={700}>{t("metallic", "metallic")}</T>
        <T x={540} y={358} size={11} fill={MUTED} weight={700}>{t("metalloid", "metalloid")}</T>
        <T x={800} y={358} size={11} fill={RED} weight={700}>{t("non-metallic", "non-metallic")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Rect x={150} y={365} width={260} height={24} fill={AMBER} fillOpacity={0.4} stroke={AMBER_DARK} strokeWidth={1.6} />
        <Rect x={410} y={365} width={260} height={24} fill={MUTED} fillOpacity={0.3} stroke={MUTED} strokeWidth={1.6} />
        <Rect x={670} y={365} width={260} height={24} fill={RED} fillOpacity={0.28} stroke={RED} strokeWidth={1.6} />
      </Fade>

      {/* beat 7 — red-margin: the three oxides */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 70 394 L 70 426" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={280} y={410} size={12} weight={700} fill={AMBER_DARK}>Na₂O: strongly BASIC</T>
        <T x={540} y={410} size={12} weight={700} fill={INK}>Al₂O₃: AMPHOTERIC</T>
        <T x={800} y={410} size={12} weight={700} fill={RED}>Cl₂O₇: strongly ACIDIC</T>
      </Fade>
    </Scene>
  );
}

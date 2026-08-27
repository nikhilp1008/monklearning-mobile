/**
 * C11 Chemistry Ch03 · Section 26 — "Worked example: most negative electron gain enthalpy?"
 * Canvas 1080×620 · safe x36–1044, y30–596. NEET speed trap.
 *
 * Beats (en [0, 9.13, 18.01, 29.35, 44.63, 57.94, 70.31, 82.26]):
 *  0 title + underline
 *  1 given: S, Cl, F, P option chips
 *  2 red-margin: instinct says F (topmost halogen) — that's the TRAP; ring on F
 *  3 across period 3: EGE more negative ⇒ P < S < Cl
 *  4 Cl vs F: small F circle (over-repels) vs big Cl circle (less repulsion)
 *  5 red-margin: WINNER = chlorine, not fluorine (ring Cl, cross F)
 *  6 habit: F & Cl together ⇒ suspect this anomaly first
 *  7 closing amber stamp: single most-tested EGE fact in NEET
 *
 * Layout plan:
 *  b1 | 4 option chips              | Chip  | x290..790 y100..140
 *  b2 | ring on F + red margin bar  | Draw  | c(605,120); bar x70 y150..182 (bl 170)
 *  b3 | period-3 order (14,w700)    | T mid | x?..?     y194..209 (bl 205)
 *  b4 | F circle r26, Cl circle r38 | Draw  | c(350,290) c(700,290)
 *  b5 | red margin bar + WINNER     | Draw  | x70 y360..392 (bl 382)
 *  b6 | habit line (script 13)      | T mid | x?..?     y396..412 (bl 412)
 *  b7 | closing stamp (amber)       | Chip  | x210..870 y425..461
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const OPTIONS = ["S", "Cl", "F", "P"];
const OPT_W = 110;
const OPT_GAP = 20;
const OPT_X0 = 290;

export default function C11Ch03Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("most negative electron gain enthalpy? (NEET)", "sabse negative electron gain enthalpy? (NEET)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given options */}
      {OPTIONS.map((o, i) => (
        <Fade key={o} on={beat >= 1} delay={dl(1, 0.15 * i)}>
          <Chip x={OPT_X0 + i * (OPT_W + OPT_GAP)} y={100} w={OPT_W} h={40} fill="#FFFEFB" stroke={INK} textFill={INK} size={18} script={false}>
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — the trap: instinct picks F */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={ringD(605, 120, 69, 32)} stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 70 150 L 70 182" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={94} y={170} size={15} weight={700} fill={RED} anchor="start">
          {t("instinct says F (topmost halogen) — that's the TRAP", "instinct kehta F (sabse upar wala halogen) — yehi TRAP hai")}
        </T>
      </Fade>

      {/* beat 3 — the period-3 order */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={205} size={14} weight={700} fill={AMBER_DARK}>
          {"across period 3: EGE more negative ⇒ P < S < Cl"}
        </T>
      </Fade>

      {/* beat 4 — Cl vs F: the real contest */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={350} y={244} size={13} weight={800} fill={INK}>
          {t("F: tiny 2p", "F: tiny 2p")}
        </T>
        <T x={700} y={244} size={13} weight={800} fill={INK}>
          {t("Cl: roomy n=3", "Cl: roomy n=3")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={350} cy={290} r={26} fill={AMBER} fillOpacity={0.35} stroke={AMBER_DARK} strokeWidth={2} />
        <Circle cx={700} cy={290} r={38} fill={GREEN} fillOpacity={0.22} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={350} y={344} size={11} fill={RED}>{t("over-repels", "over-repels")}</T>
        <T x={700} y={344} size={11} fill={GREEN}>{t("less repulsion", "kam repulsion")}</T>
      </Fade>

      {/* beat 5 — the winner */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={735} cy={264} r={13} fill={GREEN} />
        <Path d="M 729 264 L 734 269 L 742 259" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={crossD(324, 264, 52, 52)} stroke={RED} sw={2.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 70 360 L 70 392" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={94} y={382} size={16} weight={700} fill={GREEN} anchor="start">
          {t("WINNER: chlorine, not fluorine!", "WINNER: chlorine, fluorine nahi!")}
        </T>
      </Fade>

      {/* beat 6 — the exam habit */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={412} size={13} fill={MUTED} script>
          {t("F & Cl together? ⇒ suspect this anomaly first", "F aur Cl saath? ⇒ pehle isi anomaly pe shak karo")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={425} w={660} h={36} fill={AMBER} textFill={INK} size={14} script={false}>
          {t("single most-tested EGE fact in NEET", "NEET mein sabse zyada test hone wala EGE fact")}
        </Chip>
      </Fade>
    </Scene>
  );
}

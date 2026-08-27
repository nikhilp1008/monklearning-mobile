/**
 * C11 Ch02 · Section 16 — "Planck's coins: quanta and the ultraviolet catastrophe"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 5.72, 22.44, 37.63, 50.52, 61.27, 75.43, 86.53]):
 *  0 anchor: "energy comes in coins"
 *  1 analogy: whole-rupee coins — never a fractional one
 *  2 represent: black-body graph, wave theory's diverging (WRONG) curve
 *  3 guardrail: the ultraviolet catastrophe
 *  4 land: Planck's actual finite-peak curve, for contrast
 *  5 formula (high, GREEN): E = hν, h = 6.626×10⁻³⁴ J s
 *  6 guardrail (high): whole coins of size hν — birth of quantum theory
 *  7 explain: for N quanta, total energy = Nhν
 *
 * Layout plan (single column, x540 center):
 *  title (always)             | T mid | x540 y52 size15 script red
 *  b0 | anchor caption         | T mid | x540 y78            [dims@b1]
 *  b1 | 3 coins + rejected one | Fade  | cy130  cx280/360/440/560(✗)
 *  b1 | caption                | T mid | x540 y182
 *  b2 | axes                   | Draw  | x150..750 y210..380
 *  b2 | wrong (WAVE) curve     | Draw  | RED, diverges near x210
 *  b2 | axis labels            | T     | y400 / x115 y295
 *  b3 | "UV catastrophe!" lbl  | T sta | x215 y200 (RED)
 *  b4 | Planck curve (GREEN)   | Draw  | hump, x160..750
 *  b4 | Planck label           | T sta | x420 y290
 *  b5 | E=hν box (GREEN)       | Chip  | x330..750 y430..466
 *  b6 | guardrail (RED)        | T mid | x540 y496
 *  b7 | N·hν note              | T mid | x540 y530
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  crossD,
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const COINS: [number, string][] = [
  [280, "₹10"],
  [360, "₹20"],
  [440, "₹30"],
];

export default function C11Ch02Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("Planck's coins: quanta and the ultraviolet catastrophe", "Planck ke coins: quanta aur ultraviolet catastrophe")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={78} size={11} fill={RED} script>
          {t("energy comes in coins", "energy coins mein aati hai")}
        </T>
      </Fade>

      {/* beat 1 — whole-rupee coins, never a fraction */}
      {COINS.map(([x, label], i) => (
        <Fade key={`coin${x}`} on={beat >= 1} delay={dl(1, 0.2 + i * 0.3)}>
          <Circle cx={x} cy={130} r={26} fill={AMBER} stroke={INK} strokeWidth={1.5} />
          <SvgText x={x} y={135} fontSize={13} fill={INK} textAnchor="middle" fontWeight={700}>
            {label}
          </SvgText>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={560} cy={130} r={26} fill={CREAM} stroke={RED} strokeWidth={1.5} />
        <SvgText x={560} y={134} fontSize={11} fill={RED} textAnchor="middle" fontWeight={700}>
          ₹10.47
        </SvgText>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={crossD(534, 104, 52, 52)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={540} y={182} size={12} fill={INK} script>
          {t("energy comes in indivisible units — never a fraction", "energy indivisible units mein aati hai — kabhi fraction nahi")}
        </T>
      </Fade>

      {/* beat 2 — represent: the black-body graph, wave theory's WRONG curve */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 150 210 V 380 H 750" stroke={INK} sw={1.8} dur={0.8} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d="M 750 372 C 500 365, 320 300, 210 215"
        stroke={RED}
        sw={2.2}
        dur={1.2}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={450} y={400} size={11} fill={MUTED}>
          {t("wavelength →", "wavelength →")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={115} y={295} size={10} fill={MUTED}>
          {t("intensity", "intensity")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={175} y={395} size={9} fill={MUTED}>
          (UV)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={700} y={395} size={9} fill={MUTED}>
          {t("(long λ)", "(long λ)")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: the ultraviolet catastrophe */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={215} y={200} size={12} fill={RED} anchor="start" weight={700}>
          {t("ultraviolet catastrophe!", "ultraviolet catastrophe!")}
        </T>
      </Fade>

      {/* beat 4 — land: Planck's actual finite-peak curve */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 160 376 Q 380 260 750 372"
        stroke={GREEN}
        sw={2.2}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={420} y={290} size={11} fill={GREEN} anchor="start">
          {t("Planck's actual curve (finite peak)", "Planck ka asli curve (finite peak)")}
        </T>
      </Fade>

      {/* beat 5 — formula (high emphasis) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={430} w={420} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          E = hν, h = 6.626 × 10⁻³⁴ J s
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high): the birth of quantum theory */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={496} size={13} fill={RED} script>
          {t(
            "whole coins of size hν — the birth of quantum theory",
            "hν size ke whole coins — quantum theory ka janm"
          )}
        </T>
      </Fade>

      {/* beat 7 — explain: N quanta */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={530} size={13} fill={INK} script>
          {t("for N quanta, total energy = N h ν", "N quanta ke liye, total energy = N h ν")}
        </T>
      </Fade>
    </Scene>
  );
}

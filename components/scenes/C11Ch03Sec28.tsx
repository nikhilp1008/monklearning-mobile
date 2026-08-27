/**
 * C11 Chemistry Ch03 · Section 28 — "Worked example: locate and predict the IE reversals"
 * Canvas 1080×620 · safe x36–1044, y30–596. JEE Advanced, closes the worked examples.
 *
 * Beats (en [0, 22.61, 32.51, 37.55, 60.5, 79.87, 100.35, 113.15]):
 *  0 title + underline
 *  1 period-2 row in observed IE order: Li B Be C O N F Ne
 *  2 part (a): two reversals break the simple across-period rule
 *  3 red-margin bracket: Be > B (filled 2s² wins)
 *  4 red-margin bracket: N > O (half-filled 2p³ wins)
 *  5 part (b): period-3 row (Na Al Mg Si S P Cl Ar) + Mg>Al bracket
 *  6 P>S bracket + both predictions OBSERVED
 *  7 closing green stamp: structural, not a coincidence
 *
 * Layout plan:
 *  b1 | period-2 row, 8 chips        | Chip | x88..993  y100..136
 *  b2 | part(a) line                 | T mid| x?..?     y145..159 (bl 155)
 *  b3 | Be-B bracket + label (red)   | Draw | x238..368 y170..176; bl 192
 *  b4 | N-O bracket + label (red)    | Draw | x598..713 y170..176; bl 192
 *  b5 | part(b) line + period-3 row  | T mid/Chip | y216..276
 *  b5 | Al-Mg bracket + label        | Draw | x238..368 y290..296; bl 312
 *  b6 | S-P bracket + label + note   | Draw | x598..713 y290..296; bl 312/336
 *  b7 | closing stamp (green)        | Chip | x210..870 y350..388
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROW_X0 = 88;
const CHIP_W = 100;
const CHIP_GAP = 15;
const STEP = CHIP_W + CHIP_GAP;
const CX = Array.from({ length: 8 }, (_, i) => ROW_X0 + i * STEP + CHIP_W / 2);

const P2 = ["Li", "B", "Be", "C", "O", "N", "F", "Ne"];
const P3 = ["Na", "Al", "Mg", "Si", "S", "P", "Cl", "Ar"];

function Row({ on, delay, y, symbols }: { on: boolean; delay: number; y: number; symbols: string[] }) {
  return (
    <>
      {symbols.map((s, i) => (
        <Fade key={s} on={on} delay={delay + i * 0.1}>
          <Chip x={ROW_X0 + i * STEP} y={y} w={CHIP_W} h={36} fill="#FFFEFB" stroke={INK} textFill={INK} size={15} script={false}>
            {s}
          </Chip>
        </Fade>
      ))}
    </>
  );
}

function Bracket({ on, delay, x1, x2, y, label, color }: { on: boolean; delay: number; x1: number; x2: number; y: number; label: string; color: string }) {
  return (
    <>
      <Draw on={on} delay={delay} d={`M ${x1} ${y + 6} L ${x1} ${y} L ${x2} ${y} L ${x2} ${y + 6}`} stroke={color} sw={1.6} dur={0.5} />
      <Fade on={on} delay={delay + 0.4}>
        <T x={(x1 + x2) / 2} y={y + 22} size={11} weight={700} fill={color}>
          {label}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch03Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("the IE reversals: locate and predict", "IE reversals: locate aur predict")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — period-2 observed order */}
      <Row on={beat >= 1} delay={dl(1, 0.1)} y={100} symbols={P2} />

      {/* beat 2 — part (a) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={155} size={13} weight={700} fill={AMBER_DARK}>
          {t("(a) two reversals break the simple across-period rule", "(a) do reversals simple across-period rule todte")}
        </T>
      </Fade>

      {/* beat 3 — Be > B */}
      <Bracket on={beat >= 3} delay={dl(3, 0.2)} x1={CX[1] - 55} x2={CX[2] + 55} y={170} color={RED} label={t("Be: filled 2s² wins", "Be: filled 2s² wins")} />

      {/* beat 4 — N > O */}
      <Bracket on={beat >= 4} delay={dl(4, 0.2)} x1={CX[4] - 55} x2={CX[5] + 55} y={170} color={RED} label={t("N: half-filled 2p³ wins", "N: half-filled 2p³ wins")} />

      {/* beat 5 — part (b): predict period 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={225} size={13} weight={700} fill={AMBER_DARK}>
          {t("(b) predict period 3: expect Mg > Al", "(b) period 3 predict karo: expect Mg > Al")}
        </T>
      </Fade>
      <Row on={beat >= 5} delay={dl(5, 0.6)} y={240} symbols={P3} />
      <Bracket on={beat >= 5} delay={dl(5, 1.4)} x1={CX[1] - 55} x2={CX[2] + 55} y={290} color={AMBER_DARK} label={t("Mg: filled 3s² wins", "Mg: filled 3s² wins")} />

      {/* beat 6 — P > S, both confirmed */}
      <Bracket on={beat >= 6} delay={dl(6, 0.2)} x1={CX[4] - 55} x2={CX[5] + 55} y={290} color={AMBER_DARK} label={t("P: half-filled 3p³ wins", "P: half-filled 3p³ wins")} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={336} size={13} weight={700} fill={GREEN}>
          {t("both predictions OBSERVED ✓", "dono predictions OBSERVED ✓")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={350} w={660} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("structural, not a coincidence — it repeats every period", "structural, coincidence nahi — har period mein dohrata")}
        </Chip>
      </Fade>
    </Scene>
  );
}

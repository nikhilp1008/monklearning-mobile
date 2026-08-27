/**
 * C11 Ch06 · Section 30 — "The inert-gas trap: constant volume vs constant pressure"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. The chapter's most-tested subtlety.
 *
 * Beats (board_reveal_at_english: [0, 7.2, 19.8, 29.1, 39.9, 49.2, 55.5, 64]):
 *  0 title + underline + column divider
 *  1 LEFT: box (fixed size) + reacting/inert dots — constant volume
 *  2 LEFT: "reacting gas: same crowding"
 *  3 LEFT: conclusion — Q unchanged → NO SHIFT
 *  4 RIGHT: bigger box — constant pressure, volume EXPANDS
 *  5 RIGHT: dots spread out (diluted)
 *  6 RIGHT: conclusion — dilutes → shifts to MORE moles
 *  7 guardrail, full width: THE most common exam trap
 *
 * Layout plan (two columns, centers x=270 / 830; longer language counts):
 *  b0 | divider                     | Draw   | x540  y105..335
 *  b1 | box1 (fixed) c(140..400,140..230) | Draw |
 *  b1 | 6 dots (3 amber, 3 muted)   | Fade   | inside box1
 *  b1 | label (13, muted)           | T mid  | y242..256 (bl 252)
 *  b2 | note (13, green-dark)       | T mid  | y268..282 (bl 278)
 *  b3 | conclusion chip (red)       | Chip   | x150..390 y290..330
 *  b4 | box2 (bigger) x680..980 y110..230 | Draw |
 *  b4 | label (13, muted)           | T mid  | y242..256 (bl 252)
 *  b5 | 6 dots, spread              | Fade   | inside box2
 *  b6 | conclusion chip (green)     | Chip   | x690..950 y290..330
 *  b7 | guardrail box (red)         | rect   | x140..940 y345..395
 *  b7 | guardrail text (16, red)    | T mid  | y365..384 (bl 375)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("the inert-gas trap: const V vs const P", "inert-gas trap: const V vs const P")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d="M 540 105 L 540 335" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* LEFT — constant volume */}
      <Draw on={beat >= 1} d="M 140 140 H 400 V 230 H 140 Z" stroke={INK} sw={2.2} dur={beat > 1 ? 0.3 : 0.9} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle cx={200} cy={175} r={5} fill={AMBER} />
        <Circle cx={260} cy={195} r={5} fill={AMBER} />
        <Circle cx={225} cy={210} r={5} fill={AMBER} />
        <Circle cx={310} cy={180} r={4.5} fill={MUTED} />
        <Circle cx={350} cy={200} r={4.5} fill={MUTED} />
        <Circle cx={320} cy={215} r={4.5} fill={MUTED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={270} y={252} size={13} fill={MUTED} anchor="middle">
          {t("constant volume: box same size", "constant volume: box same size")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={270} y={278} size={13} fill={GREEN_DARK} anchor="middle">
          {t("reacting gas: same crowding", "reacting gas: same crowding")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={150} y={290} w={240} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("Q unchanged → NO SHIFT", "Q unchanged → NO SHIFT")}
        </Chip>
      </Fade>

      {/* RIGHT — constant pressure */}
      <Draw on={beat >= 4} d="M 680 110 H 980 V 230 H 680 Z" stroke={INK} sw={2.2} dur={beat > 4 ? 0.3 : 0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={830} y={252} size={13} fill={MUTED} anchor="middle">
          {t("constant pressure: volume EXPANDS", "constant pressure: volume EXPANDS")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Circle cx={720} cy={150} r={5} fill={AMBER} />
        <Circle cx={820} cy={190} r={5} fill={AMBER} />
        <Circle cx={880} cy={140} r={5} fill={AMBER} />
        <Circle cx={760} cy={210} r={4.5} fill={MUTED} />
        <Circle cx={900} cy={170} r={4.5} fill={MUTED} />
        <Circle cx={950} cy={205} r={4.5} fill={MUTED} />
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={690} y={290} w={260} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14} script={false}>
          {t("dilutes → shifts to MORE moles", "dilutes → ZYADA moles ki taraf shift")}
        </Chip>
      </Fade>

      {/* beat 7 — the guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={140} y={345} width={800} height={50} rx={10} fill={CREAM} stroke={RED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={375} size={16} fill={RED} weight={700} anchor="middle">
          {t("THE most common exam trap — lock this in!", "chapter ka sabse common exam trap — yaad rakho!")}
        </T>
      </Fade>
    </Scene>
  );
}

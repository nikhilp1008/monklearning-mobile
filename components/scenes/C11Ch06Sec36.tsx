/**
 * C11 Ch06 · Section 36 — "Worked example — inert gas on PCl5 dissociation (NEET speed trap)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.2, 18.2, 27.5, 39.4, 49.6, 59.6]):
 *  0 title + underline
 *  1 equilibrium: PCl5(g) ⇌ PCl3(g) + Cl2(g)
 *  2 trap box: "more gas → adding gas shifts it" — WRONG
 *  3 Part a, const V: partial pressures unchanged → NO SHIFT
 *  4 Part b, const P: volume expands → dilutes reacting gases
 *  5 land, ringed: dilution → MORE moles → FORWARD, dissociation ↑
 *  6 speed cue, boxed: const V = nothing; const P = dilution
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 20, red)      | T mid  | x200..880  y30..84  (bl 64)
 *  b1 | equation (18, ink)          | T mid  | x392..688 y95..118 (bl 112)
 *  b2 | trap box (red)              | rect   | x180..900 y140..185
 *  b3 | Part a chip (red)           | Chip   | x230..850 y205..245
 *  b4 | Part b chip (amber)         | Chip   | x210..870 y255..295
 *  b5 | landing statement, ringed   | T mid  | x247..833 y309..336 (bl 330)
 *  b6 | speed-cue chip (green)      | Chip   | x280..800 y370..412
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, AMBER, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("NEET trap: inert gas on PCl5 dissociation", "NEET trap: PCl5 dissociation par inert gas")}
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

      {/* beat 1 — the equilibrium */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={18} fill={INK} weight={700} anchor="middle">
          PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Rect x={180} y={140} width={720} height={45} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={540} y={167} size={15} fill={RED} anchor="middle">
          {t(
            "trap: “more gas ⇒ adding gas shifts it” — WRONG",
            "trap: “zyada gas ⇒ gas add shift karega” — GALAT"
          )}
        </T>
      </Fade>

      {/* beat 3 — part a: constant volume */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={230} y={205} w={620} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t(
            "Part a, const V: partial pressures UNCHANGED → NO SHIFT",
            "Part a, const V: partial pressures UNCHANGED → NO SHIFT"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — part b: constant pressure */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={210} y={255} w={660} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t(
            "Part b, const P: volume expands → dilutes reacting gases",
            "Part b, const P: volume expand hota → gases dilute"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={330} size={18} fill={GREEN} weight={800} anchor="middle">
          {t(
            "dilution → MORE moles (products) → FORWARD, dissociation ↑",
            "dilution → ZYADA moles (products) → FORWARD, dissociation ↑"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 326, 293, 21)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the speed cue */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={280} y={370} w={520} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          {t(
            "const V = nothing; const P = dilution",
            "const V = kuch nahi; const P = dilution"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

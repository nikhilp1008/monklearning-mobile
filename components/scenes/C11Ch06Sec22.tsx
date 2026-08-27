/**
 * C11 Ch06 · Section 22 — "Worked example — ranking K by the sign of ΔG° (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8, 18.4, 24.8, 32.5, 47.2, 54.6]):
 *  0 title + underline
 *  1 GIVEN row: P (+20), Q (0), R (−20) kJ/mol
 *  2 THE TRAP box: start exponentiating all three
 *  3 cross the trap; DON'T — sign alone orders them
 *  4 3 chips: K(P)<1, K(Q)=1, K(R)>1
 *  5 land, ringed: increasing K: P < Q < R
 *  6 speed cue: sign instantly places K relative to 1
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x210..870  y30..88  (bl 64)
 *  b1 | P/Q/R given row (15, ink)   | T mid  | x125..955 y110..120 (bl 115)
 *  b2 | trap box (red dashed)       | rect   | x190..890 y150..200
 *  b2 | trap text (15, red)         | T mid  | x268..812 y175..185 (bl 180)
 *  b3 | cross-out over trap         | Draw   | x190..890 y150..200
 *  b3 | "DON'T…" (16, amber-dark)   | T mid  | x324..756 y213..231 (bl 225)
 *  b4 | 3 K chips                   | Chip   | x250..870 y265..305
 *  b5 | "increasing K: P<Q<R" ring  | T mid  | x378..703 y323..347 (bl 340)
 *  b6 | speed cue (14, muted, scr)  | T mid  | y384..403 (bl 402)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("rank K by the sign of ΔG° (NEET)", "sign of ΔG° se K rank karo (NEET)")}
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

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={200} y={115} size={15} fill={INK} anchor="middle">P: ΔG° = +20 kJ/mol</T>
        <T x={540} y={115} size={15} fill={INK} anchor="middle">Q: ΔG° = 0</T>
        <T x={880} y={115} size={15} fill={INK} anchor="middle">R: ΔG° = −20 kJ/mol</T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={190} y={150} width={700} height={50} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={180} size={15} fill={RED} anchor="middle">
          {t(
            "trap: start exponentiating all three to find K…",
            "trap: teeno ko exponentiate karke K nikalna shuru…"
          )}
        </T>
      </Fade>

      {/* beat 3 — don't; sign alone orders them */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.4)}
        d={crossD(190, 150, 700, 50)}
        stroke={RED}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={225} size={16} fill={AMBER_DARK} weight={700} anchor="middle">
          {t(
            "DON'T — sign alone orders them (more −ΔG° ⇒ bigger K)",
            "MAT KARO — sirf sign order deta (zyada −ΔG° ⇒ bada K)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the three K's */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={250} y={265} w={180} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          K(P) &lt; 1
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Chip x={470} y={265} w={180} h={40} fill={CREAM} stroke={MUTED} textFill={INK} size={16} script={false}>
          K(Q) = 1
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Chip x={690} y={265} w={180} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          K(R) &gt; 1
        </Chip>
      </Fade>

      {/* beat 5 — the ranking, ringed */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={340} size={22} fill={GREEN} weight={800} anchor="middle">
          increasing K:  P &lt; Q &lt; R
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 335, 163, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the speed cue */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={402} size={14} fill={MUTED} script anchor="middle">
          {t(
            "sign of ΔG° instantly places K relative to 1 — compute only if forced",
            "ΔG° ka sign turant K ko 1 ke relative rakh deta — sirf zaroorat par calculate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

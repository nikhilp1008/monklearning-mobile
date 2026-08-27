/**
 * C11 Ch06 · Section 56 — "Three practical questions, and buffers as shock absorbers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Opens subtopic 5 (Buffers, Ksp & Salt Hydrolysis).
 *
 * Beats (board_reveal_at_english: [0, 7, 16.6, 31.2, 45.4, 56.5, 65, 74.2]):
 *  0 title + underline
 *  1 note: buffers/solubility/hydrolysis = same logic, real jobs
 *  2 the three questions, listed
 *  3 bus + bumpy road: buffer = shock absorber
 *  4 the demo graph: buffer nearly flat vs pure water crashes
 *  5 buffer definition chip: large reserve, weak acid + conjugate base
 *  6 mechanism: +acid → base mops up; +base → acid neutralizes
 *  7 land, ringed: your blood is a buffer, pH ≈ 7.4
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | note (14, muted)            | T mid  | y99..114 (bl 105)
 *  b2 | 3 questions (13, ink)       | T mid  | y122..178
 *  b3 | wavy road + level bus       | Draw   | x200..800 y185..230
 *  b3 | label (13, amber-dark)      | T mid  | y245..258 (bl 250)
 *  b4 | axes + buffer/water lines   | Draw   | x230..850 y275..365
 *  b4 | line labels                 | T      | y310..365
 *  b5 | buffer-def chip (amber)     | Chip   | x260..820 y400..440
 *  b6 | mechanism line1 (14, green) | T mid  | y455..470 (bl 460)
 *  b6 | mechanism line2 (14, amber) | T mid  | y477..492 (bl 482)
 *  b7 | landing statement, ringed   | T mid  | x336..744 y508..533 (bl 520)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("buffers: the pH shock absorbers", "buffers: pH ke shock absorbers")}
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

      {/* beat 1 — the reframe */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={105} size={14} fill={MUTED} anchor="middle">
          {t(
            "buffers, solubility, hydrolysis = same logic, real jobs",
            "buffers, solubility, hydrolysis = wahi logic, real jobs"
          )}
        </T>
      </Fade>

      {/* beat 2 — the three questions */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={135} size={13} fill={INK} anchor="middle">
          {t("① stop pH from drifting?", "① pH ko drift hone se kaise roku?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={155} size={13} fill={INK} anchor="middle">
          {t("② when does 'insoluble' salt precipitate?", "② 'insoluble' salt kab precipitate karta?")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={175} size={13} fill={INK} anchor="middle">
          {t("③ why is baking soda basic?", "③ baking soda basic kyun hai?")}
        </T>
      </Fade>

      {/* beat 3 — the bus suspension metaphor */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M 200 230 Q 260 250 320 230 T 440 230 T 560 230 T 680 230 T 800 230"
        stroke={MUTED}
        sw={2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Rect x={470} y={192} width={100} height={28} rx={5} fill={CREAM} stroke={INK} strokeWidth={2} />
        <Circle cx={492} cy={222} r={6} fill={INK} />
        <Circle cx={548} cy={222} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={253} size={13} fill={AMBER_DARK} anchor="middle">
          {t("buffer = shock absorber (bus suspension)", "buffer = shock absorber (bus suspension)")}
        </T>
      </Fade>

      {/* beat 4 — the demo graph */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(230, 365, 850, 365)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={arrowD(230, 365, 230, 275)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={382} size={12} fill={MUTED} anchor="middle">
          {t("acid added →", "acid add hota →")}
        </T>
        <T x={216} y={282} size={12} fill={MUTED} anchor="end">pH</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 250 315 L 820 310" stroke={GREEN} sw={2.4} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d="M 250 295 L 820 358" stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={825} y={314} size={12} fill={GREEN_DARK} anchor="start">
          {t("buffer", "buffer")}
        </T>
        <T x={825} y={361} size={12} fill={RED} anchor="start">
          {t("pure water", "pure water")}
        </T>
      </Fade>

      {/* beat 5 — the buffer definition */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={260} y={400} w={560} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t(
            "large reserve: weak acid + conjugate base",
            "bada reserve: weak acid + conjugate base"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the mechanism */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={460} size={14} fill={GREEN_DARK} anchor="middle">
          {t("+ acid → conjugate base mops it up", "+ acid → conjugate base mop up karta")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={482} size={14} fill={AMBER_DARK} anchor="middle">
          {t("+ base → weak acid neutralizes it", "+ base → weak acid neutralize karta")}
        </T>
      </Fade>

      {/* beat 7 — the payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={520} size={18} fill={GREEN} weight={700} anchor="middle">
          {t("your blood is a buffer, pH ≈ 7.4", "tumhara blood ek buffer hai, pH ≈ 7.4")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 515, 204, 21)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}

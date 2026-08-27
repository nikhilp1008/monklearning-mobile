/**
 * C11 Ch06 · Section 23 — "Worked example — from K to ΔG° (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.7, 13.4, 21.9, 37.6, 48, 54.8]):
 *  0 title + underline
 *  1 GIVEN: K = 10 at 300 K; find ΔG°
 *  2 strategy: use base-10 form — log 10 = 1 exactly
 *  3 compute: ΔG° = −2.303RT log K = −2.303×8.314×300×1
 *  4 land, ringed: ΔG° ≈ −5744 J/mol ≈ −5.74 kJ/mol
 *  5 insight chip: modest value for a 10× preference toward products
 *  6 takeaway: log compresses the whole scale
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 24, red)      | T mid  | x260..820  y30..88  (bl 64)
 *  b1 | "GIVEN" (13, amber-dark)    | T st   | x60..108  y87..103 (bl 100)
 *  b1 | given data (15, ink)        | T st   | x60..280  y110..129 (bl 124)
 *  b2 | strategy (15, ink)          | T st   | x60..380  y142..161 (bl 156)
 *  b3 | compute (17, ink)           | T mid  | x353..727 y187..205 (bl 200)
 *  b4 | answer ringed (24, green)   | T mid  | x328..752 y231..257 (bl 250)
 *  b5 | insight chip (amber)        | Chip   | x330..750 y310..354
 *  b6 | takeaway (14, muted, scr)   | T mid  | y372..390 (bl 390)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("worked example: K → ΔG° (JEE Main)", "worked example: K → ΔG° (JEE Main)")}
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
        <T x={60} y={100} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          GIVEN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={124} size={15} fill={INK} anchor="start">
          K = 10 at 300 K; find ΔG°
        </T>
      </Fade>

      {/* beat 2 — the strategy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={156} size={15} fill={INK} anchor="start">
          {t("use base-10 form — log 10 = 1 exactly", "base-10 form use karo — log 10 = 1 exactly")}
        </T>
      </Fade>

      {/* beat 3 — compute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={17} fill={INK} weight={700} anchor="middle">
          ΔG° = −2.303RT log K = −2.303×8.314×300×1
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={24} fill={GREEN} weight={800} anchor="middle">
          ΔG° ≈ −5744 J/mol ≈ −5.74 kJ/mol
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 244, 212, 25)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — the insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={330} y={310} w={420} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          {t(
            "modest value for a 10× preference toward products",
            "10× products preference ke liye modest value"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={390} size={14} fill={MUTED} script anchor="middle">
          {t("the logarithm compresses the whole scale", "logarithm poore scale ko compress kar deta")}
        </T>
      </Fade>
    </Scene>
  );
}

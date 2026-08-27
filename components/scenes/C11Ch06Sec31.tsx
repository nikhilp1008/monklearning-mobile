/**
 * C11 Ch06 · Section 31 — "Temperature: treat heat as a participant"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 9.4, 18.1, 27.5, 32.6, 38.4, 48.8, 54.9]):
 *  0 title + underline
 *  1 EXOTHERMIC: reactants ⇌ products + heat
 *  2 ↑T → backward: yield↓, K↓
 *  3 ENDOTHERMIC: heat + reactants ⇌ products
 *  4 ↑T → forward: yield↑, K↑
 *  5 exception chip: temperature = the ONLY lever that changes K
 *  6 note: cooling reverses each of these effects
 *  7 land, ringed: hotter helps the ENDO
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x230..850  y30..88  (bl 64)
 *  b1 | "EXOTHERMIC:" (14, red)     | T st   | x170..247 y104..123 (bl 118)
 *  b1 | equation (16, ink)          | T st   | x290..514 y104..123 (bl 118)
 *  b2 | effect (15, red)            | T mid  | y136..153 (bl 148)
 *  b3 | "ENDOTHERMIC:" (14, green)  | T st   | x170..254 y179..198 (bl 193)
 *  b3 | equation (16, ink)          | T st   | x305..529 y179..198 (bl 193)
 *  b4 | effect (15, green)          | T mid  | y211..228 (bl 223)
 *  b5 | exception chip (amber)      | Chip   | x290..790 y260..304
 *  b6 | cooling note (14, muted)    | T mid  | y320..338 (bl 338)
 *  b7 | landing statement, ringed   | T mid  | x405..675 y357..387 (bl 380)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("temperature: heat is a participant", "temperature: heat ek participant hai")}
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

      {/* beat 1 — exothermic equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={170} y={118} size={14} fill={RED} weight={700} anchor="start">
          {t("EXOTHERMIC:", "EXOTHERMIC:")}
        </T>
        <T x={290} y={118} size={16} fill={INK} anchor="start">
          reactants ⇌ products + heat
        </T>
      </Fade>

      {/* beat 2 — raising T for exothermic */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={148} size={15} fill={RED} anchor="middle">
          {t("↑T → backward: yield↓, K↓", "↑T → backward: yield↓, K↓")}
        </T>
      </Fade>

      {/* beat 3 — endothermic equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={170} y={193} size={14} fill={GREEN} weight={700} anchor="start">
          {t("ENDOTHERMIC:", "ENDOTHERMIC:")}
        </T>
        <T x={305} y={193} size={16} fill={INK} anchor="start">
          heat + reactants ⇌ products
        </T>
      </Fade>

      {/* beat 4 — raising T for endothermic */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={223} size={15} fill={GREEN} anchor="middle">
          {t("↑T → forward: yield↑, K↑", "↑T → forward: yield↑, K↑")}
        </T>
      </Fade>

      {/* beat 5 — the exception, reiterated */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={290} y={260} w={500} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t(
            "temperature = the ONLY lever that changes K",
            "temperature = wo AKELA lever jo K badalta"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — cooling reverses */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={338} size={14} fill={MUTED} script anchor="middle">
          {t("cooling reverses each of these effects", "cooling in sab effects ko reverse karta")}
        </T>
      </Fade>

      {/* beat 7 — the memory line */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={380} size={22} fill={GREEN} weight={800} anchor="middle">
          {t("hotter helps the ENDO", "hotter, ENDO ki help karta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 375, 135, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}

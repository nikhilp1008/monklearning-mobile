/**
 * C11 Ch06 · Section 42 — "Conjugate pairs and amphoteric water"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.8, 11.9, 17.7, 28.6, 35.1, 42.6]):
 *  0 title + underline
 *  1 acid −H⁺→ conjugate base
 *  2 base +H⁺→ conjugate acid
 *  3 rule chip: remove H⁺ = conjugate base; add H⁺ = conjugate acid
 *  4 example: NH4⁺ ⇌ NH3 + H⁺
 *  5 note: differ by exactly ONE H⁺
 *  6 land, ringed: stronger acid ⇒ weaker conjugate base
 *
 * Layout plan (centered stack, two-column rows; longer language counts):
 *  b1 | row1 left/mid/right         | T      | x218..442 y100..120 (bl 115)
 *  b2 | row2 left/mid/right         | T      | x218..452 y135..155 (bl 150)
 *  b3 | rule chip (amber)           | Chip   | x190..890 y185..225
 *  b4 | example (19, ink)           | T mid  | y237..258 (bl 252)
 *  b5 | note (14, amber-dark)       | T mid  | y270..287 (bl 285)
 *  b6 | landing statement, ringed   | T mid  | x336..744 y309..336 (bl 330)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("conjugate pairs: partners one proton apart", "conjugate pairs: ek proton door partners")}
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

      {/* beat 1 — acid loses a proton */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={250} y={115} size={16} fill={INK} anchor="end">
          {t("acid", "acid")}
        </T>
        <T x={290} y={112} size={14} fill={GREEN} anchor="middle">
          −H⁺→
        </T>
        <T x={330} y={115} size={16} fill={GREEN} anchor="start">
          {t("conjugate base", "conjugate base")}
        </T>
      </Fade>

      {/* beat 2 — base gains a proton */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={250} y={150} size={16} fill={INK} anchor="end">
          {t("base", "base")}
        </T>
        <T x={290} y={147} size={14} fill={RED} anchor="middle">
          +H⁺→
        </T>
        <T x={330} y={150} size={16} fill={RED} anchor="start">
          {t("conjugate acid", "conjugate acid")}
        </T>
      </Fade>

      {/* beat 3 — the test */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={190} y={185} w={700} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t(
            "remove H⁺ = conjugate base; add H⁺ = conjugate acid",
            "H⁺ hatao = conjugate base; H⁺ jodo = conjugate acid"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the example */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={252} size={19} fill={INK} weight={700} anchor="middle">
          NH₄⁺ ⇌ NH₃ + H⁺
        </T>
      </Fade>

      {/* beat 5 — the difference */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={285} size={14} fill={AMBER_DARK} anchor="middle">
          {t("differ by exactly ONE H⁺", "sirf EK H⁺ ka fark")}
        </T>
      </Fade>

      {/* beat 6 — the deep consequence */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={330} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("stronger acid ⇒ weaker conjugate base", "stronger acid ⇒ weaker conjugate base")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 325, 204, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}

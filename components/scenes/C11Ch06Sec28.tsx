/**
 * C11 Ch06 · Section 28 — "Concentration: consume, replenish, drive to completion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.7, 13.4, 18.5, 27.5, 36.4, 46.2]):
 *  0 title + underline
 *  1 row1: add species → system consumes part of it
 *  2 row2: remove species → system replenishes it
 *  3 the trick, boxed: continuously remove product ⇒ drives to COMPLETION
 *    (+ a small draining-beaker icon)
 *  4 mechanism note: each removal — Q<K → forward restarts
 *  5 guardrail: pure solid/liquid — NO EFFECT (activity constant)
 *  6 land, ringed: drain product → push to completion, rules intact
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x200..880  y30..88  (bl 64)
 *  b1 | row1: left(ink)/right(grn)  | T      | x192..542 y104..120 (bl 115)
 *  b2 | row2: left(ink)/right(grn)  | T      | x168..502 y139..155 (bl 150)
 *  b3 | draining beaker             | Draw   | x100..170 y195..246
 *  b3 | trick chip (amber)          | Chip   | x260..820 y195..240
 *  b4 | mechanism (14, muted)       | T mid  | y257..272 (bl 268)
 *  b5 | guardrail (15, red)         | T mid  | y298..313 (bl 305)
 *  b6 | landing statement, ringed   | T mid  | x301..779 y332..356 (bl 350)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("concentration: consume, replenish, complete", "concentration: consume, replenish, complete")}
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

      {/* beat 1 — add a species */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={280} y={115} size={16} fill={INK} anchor="end">
          {t("add species", "species add karo")}
        </T>
        <T x={310} y={115} size={16} fill={GREEN} anchor="start">
          {t("→ system consumes part of it", "→ system uska hissa consume karta")}
        </T>
      </Fade>

      {/* beat 2 — remove a species */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={280} y={150} size={16} fill={INK} anchor="end">
          {t("remove species", "species hatao")}
        </T>
        <T x={310} y={150} size={16} fill={GREEN} anchor="start">
          {t("→ system replenishes it", "→ system usse replenish karta")}
        </T>
      </Fade>

      {/* beat 3 — the chemist's trick */}
      <Draw on={beat >= 3} d="M 100 195 V 235 H 150 V 195" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={158} cy={240} r={2.4} fill={AMBER} />
        <Circle cx={166} cy={246} r={2.2} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Chip x={260} y={195} w={560} h={45} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t(
            "continuously remove product ⇒ drives to COMPLETION",
            "product continuously hatao ⇒ COMPLETION ki taraf"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the mechanism */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={268} size={14} fill={MUTED} anchor="middle">
          {t("each removal: Q < K → forward restarts", "har removal: Q < K → forward restart hota")}
        </T>
      </Fade>

      {/* beat 5 — the guardrail */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={305} size={15} fill={RED} anchor="middle">
          {t(
            "✗ pure solid/liquid: NO EFFECT — activity is constant",
            "✗ pure solid/liquid: NO EFFECT — activity constant hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — land it */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={350} size={18} fill={GREEN} weight={800} anchor="middle">
          {t(
            "drain product → push to completion, rules intact",
            "product drain karo → completion, rules bhi intact"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.1)}
        d={ringD(540, 346, 239, 22)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}

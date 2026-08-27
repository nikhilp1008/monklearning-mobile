/**
 * C11 Ch06 · Section 40 — "Strong versus weak: complete versus partial ionization"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Opens subtopic 4 (Ionic Equilibrium — Acid-Base, pH,
 * Common-Ion Effect).
 *
 * Beats (board_reveal_at_english: [0, 9.1, 14.1, 25.1, 39.5, 51.9, 62, 70.2]):
 *  0 title + underline + divider
 *  1 setup: picture a crowded Mumbai local at peak hour
 *  2 LEFT train: ALL passengers exit — STRONG ACID, complete ionization
 *  3 RIGHT train: few exit, most stay — WEAK ACID, partial ionization (⇌)
 *  4 note: ionic equilibrium = chemical equilibrium on charged species in water
 *  5 LEFT conclusion: [H+] read straight off concentration
 *  6 RIGHT conclusion: needs its own Ka
 *  7 land, ringed: same machinery — now pointed at ions
 *
 * Layout plan (two columns, centers x=270 / 810; longer language counts):
 *  b0 | divider                     | Draw   | x540  y125..310
 *  b2 | LEFT train + 6 exit dots    | Draw   | x140..400 y140..215
 *  b2 | LEFT label (13)             | T mid  | y225..238 (bl 232)
 *  b3 | RIGHT train + 2 exit/4 in   | Draw   | x680..940 y140..215
 *  b3 | RIGHT label (13)            | T mid  | y225..238 (bl 232)
 *  b4 | note (13, amber-dark)       | T mid  | y251..264 (bl 258)
 *  b5 | LEFT conclusion (14, green) | T mid  | y281..296 (bl 288)
 *  b6 | RIGHT conclusion (14,amber) | T mid  | y281..296 (bl 288)
 *  b7 | landing statement, ringed   | T mid  | x329..751 y319..341 (bl 335)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("strong vs weak: complete vs partial ionization", "strong vs weak: complete vs partial ionization")}
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
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d="M 540 125 L 540 310" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={109} size={15} fill={MUTED} script anchor="middle">
          {t("picture a crowded Mumbai local at peak hour", "socho ek bhari Mumbai local peak hour mein")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: strong acid, everyone exits */}
      <Draw on={beat >= 2} d="M 140 140 H 400 V 190 H 140 Z" stroke={INK} sw={2.2} dur={beat > 2 ? 0.3 : 0.9} />
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 270 140 V 190" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Circle cx={165} cy={210} r={4} fill={AMBER} />
        <Circle cx={205} cy={215} r={4} fill={AMBER} />
        <Circle cx={250} cy={210} r={4} fill={AMBER} />
        <Circle cx={295} cy={215} r={4} fill={AMBER} />
        <Circle cx={335} cy={210} r={4} fill={AMBER} />
        <Circle cx={375} cy={215} r={4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={270} y={232} size={13} fill={INK} weight={700} anchor="middle">
          {t("STRONG: complete ionization", "STRONG: complete ionization")}
        </T>
      </Fade>

      {/* beat 3 — RIGHT: weak acid, only a few exit */}
      <Draw on={beat >= 3} d="M 680 140 H 940 V 190 H 680 Z" stroke={INK} sw={2.2} dur={beat > 3 ? 0.3 : 0.9} />
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 810 140 V 190" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Circle cx={710} cy={165} r={4} fill={MUTED} />
        <Circle cx={750} cy={172} r={4} fill={MUTED} />
        <Circle cx={860} cy={168} r={4} fill={MUTED} />
        <Circle cx={900} cy={175} r={4} fill={MUTED} />
        <Circle cx={770} cy={210} r={4} fill={AMBER} />
        <Circle cx={830} cy={215} r={4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={810} y={232} size={13} fill={INK} weight={700} anchor="middle">
          {t("WEAK: partial ionization (⇌)", "WEAK: partial ionization (⇌)")}
        </T>
      </Fade>

      {/* beat 4 — the reframe */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={258} size={13} fill={AMBER_DARK} anchor="middle">
          {t(
            "ionic equilibrium = chemical equilibrium on charged species in water",
            "ionic equilibrium = charged species par chemical equilibrium, paani mein"
          )}
        </T>
      </Fade>

      {/* beat 5 — strong: [H+] straight off */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={270} y={288} size={14} fill={GREEN_DARK} weight={600} anchor="middle">
          {t("[H⁺] = straight off concentration", "[H⁺] = seedha concentration se")}
        </T>
      </Fade>

      {/* beat 6 — weak: needs its own Ka */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={810} y={288} size={14} fill={AMBER_DARK} weight={600} anchor="middle">
          {t("needs its own Ka", "apna Ka chahiye")}
        </T>
      </Fade>

      {/* beat 7 — land it */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={335} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("same machinery — now pointed at ions", "wahi machinery — ab ions ki taraf")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 330, 221, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}

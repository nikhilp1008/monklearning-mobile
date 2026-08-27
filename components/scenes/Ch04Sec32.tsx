/**
 * Ch04 · Section 32 — "Worked Example 2 [NEET Speed Trap]: five and twelve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.8, 21.5, 46.3, 56.2, 71.4, 86.0, 110.9]):
 *  0 title
 *  1 problem + find
 *  2 red margin: the double trap
 *  3 figure: 5 N east, 12 N north, right-angle mark, perpendicular note
 *  4 nothing-to-resolve line
 *  5 Pythagoras → R = 13 N box + "not 17" + dashed resultant + R label
 *  6 equilibrant arrow (third quadrant) + label + right-col lines
 *  7 red bar (right): triples + equilibrant = −resultant
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..195 · lines st x84 bl 160 / 184
 *  fig | origin (300,360) · east arr →(360,360) "5 N" cx330 bl 384 ·
 *    north arr →(300,216) "12 N" end x290 bl 290 · right-angle M312 360 v-12 h-12 ·
 *    perp note cx460 bl 440 · resultant dash (300,360)→(360,216) ·
 *    "R = 13 N" st x372 bl 212 · equilibrant arr →(240,504) · lbl st x120 bl 534
 *  b4 st x560 bl 250 · b5 eq st x560 bl 292 · box x830..1000 y268..306 bl 292 ·
 *    "13 not 17" st x560 bl 330 · b6 lines st x560 bl 370 / 394
 *  b7 | bar x560 y470..548 · lines st x578 bl 490 / 516 / 540
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — five and twelve",
            "Example 2 [NEET Speed Trap] — paanch aur baarah"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "5 N due east + 12 N due north act on a particle",
            "particle par 5 N east ki taraf + 12 N north ki taraf"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: the ONE force that keeps it in equilibrium",
            "nikaalo: wo EK force jo use equilibrium mein rakhe"
          )}
        </T>
      </Fade>

      {/* beat 2 — the double trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "trap 1: 5 + 12 = 17 ✗ — different directions never add like numbers",
            "trap 1: 5 + 12 = 17 ✗ — alag dishayen numbers ki tarah nahi judti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "trap 2: finding R correctly — then reporting it; the answer points the OTHER way",
            "trap 2: R sahi nikaal kar wahi likh dena; answer ULTI taraf hota hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the figure */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(300, 360, 360, 360)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={330} y={384} size={13} fill={GREEN} weight={700}>
          5 N
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d={arrowD(300, 360, 300, 216)}
        stroke={AMBER}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={290} y={290} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          12 N
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d="M 312 360 v -12 h -12"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={460} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "east ⊥ north — the one detail that matters",
            "east ⊥ north — bas yahi baat mayne rakhti hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — nothing to resolve */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={250} size={13} fill={INK} script anchor="start">
          {t(
            "perpendicular ⇒ NOTHING to resolve — the resultant is a hypotenuse",
            "perpendicular ⇒ resolve karne ko KUCHH nahi — resultant ek hypotenuse hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — Pythagoras */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Path
          d="M 300 360 L 360 216"
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="6 5"
          fill="none"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={372} y={212} size={12} fill={INK} weight={700} anchor="start">
          R
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={560} y={292} size={15} fill={INK} weight={700} anchor="start">
          R = √(5² + 12²) = √169
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 6)}
        d="M 842 268 h 146 q 12 0 12 12 v 14 q 0 12 -12 12 h -146 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={915} y={292} size={17} fill={INK} weight={800}>
          R = 13 N
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={560} y={330} size={12} fill={RED} script anchor="start">
          {t("13 — not 17", "13 — satrah NAHI")}
        </T>
      </Fade>

      {/* beat 6 — the equilibrant */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={370} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "asked: the force FOR equilibrium = the EQUILIBRANT",
            "poocha: equilibrium KE LIYE force = EQUILIBRANT"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d={arrowD(300, 360, 240, 504)}
        stroke={RED}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={120} y={534} size={13} fill={RED} script anchor="start">
          {t("equilibrant: 13 N, south-of-west", "equilibrant: 13 N, west se neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={560} y={394} size={13} fill={GREEN} script anchor="start">
          {t(
            "13 N, exactly OPPOSITE the resultant — third quadrant",
            "13 N, resultant ke theek ULTA — teesra quadrant"
          )}
        </T>
      </Fade>

      {/* beat 7 — bank the shortcut */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 560 470 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={578} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "memorize the triples: (3,4,5) · (5,12,13) · (8,15,17)",
            "triples ratt lo: (3,4,5) · (5,12,13) · (8,15,17)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={578} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "see 5 ⊥ 12 → write 13 and move on",
            "5 ⊥ 12 dikhe → 13 likho aur aage badho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={578} y={540} size={13} fill={GREEN} script anchor="start">
          {t(
            "engrave it: equilibrant = −resultant",
            "god lo: equilibrant = −resultant"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

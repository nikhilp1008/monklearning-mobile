/**
 * Ch12 · Section 10 — "What we mean by an ideal gas"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.71, 41.73, 62.46, 63.46, 64.46, 65.46]):
 *  0 title + underline · 1 THE ANALOGY: packed 9 AM train vs empty 2 PM train
 *    (dots + outward push arrows), "shove on walls = pressure" · 2 ideal-gas
 *    definition line · 3 mental model: elastic bounce marks + "never stick,
 *    never deform" · 4 assumptions row 1 (point masses / forces only in
 *    collisions / perfectly elastic) · 5 assumptions row 2 (straight-line
 *    flight / identical molecules / gravity ignored) · 6 payoff: no
 *    interaction PE ⇒ internal energy is pure KE
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 26, red)          | T mid | x255..825 y37..82 (bl70)
 *  b0 | underline                        | Draw  | y94 x330..750
 *  b1 | panel "9AM—packed" + 16 dots     | Draw  | x150..470 y120..230
 *  b1 | panel "2PM—empty" + 4 dots       | Draw  | x610..930 y120..230
 *  b1 | caption (14, amber_dark)         | T mid | x540 y250
 *  b2 | definition (15, ink, script)     | T mid | x540 y288
 *  b3 | bounce marks + mental-model line | mix   | y322
 *  b4 | chips row1 ×3                    | Chip  | y340..372 x160/390/710
 *  b5 | chips row2 ×3                    | Chip  | y385..417 x165/415/695
 *  b6 | payoff (script 18, green)        | T mid | x540 y470
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} script>
          {t("what we mean by an ideal gas", "ideal gas se hamara matlab kya hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 94 C 420 90, 660 98, 750 92" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — THE ANALOGY: packed vs empty train compartment */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={310} y={112} size={16} fill={INK} weight={700}>
          {t("9 AM — packed", "9 AM — packed")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 150 120 h 320 v 110 h -320 z" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <G>
          {[145, 165, 185, 205].map((y) =>
            [190, 260, 330, 400].map((x) => (
              <Circle key={`${x}-${y}`} cx={x} cy={y} r={6} fill={AMBER_DARK} />
            ))
          )}
        </G>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(150, 150, 130, 150)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(470, 150, 490, 150)} stroke={RED} sw={2.4} dur={0.4} />

      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={770} y={112} size={16} fill={INK} weight={700}>
          {t("2 PM — nearly empty", "2 PM — lagbhag empty")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 610 120 h 320 v 110 h -320 z" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Circle cx={650} cy={150} r={6} fill={AMBER_DARK} />
        <Circle cx={880} cy={170} r={6} fill={AMBER_DARK} />
        <Circle cx={720} cy={200} r={6} fill={AMBER_DARK} />
        <Circle cx={850} cy={140} r={6} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.8)} d={arrowD(610, 175, 598, 175)} stroke={AMBER} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 6)} d={arrowD(930, 175, 942, 175)} stroke={AMBER} sw={1.8} dur={0.3} />

      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={540} y={250} size={14} fill={AMBER_DARK} script>
          {t("the shove on the walls = pressure", "walls par shove hi pressure hai")}
        </T>
      </Fade>

      {/* beat 2 — definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={288} size={15} fill={INK} script>
          {t(
            "ideal gas = point particles, no force except during collisions",
            "ideal gas = point particles, force sirf collisions mein"
          )}
        </T>
      </Fade>

      {/* beat 3 — mental model: elastic bounce, never stick */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 210 120 l 8 -10 l 8 10" stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 350 120 l 8 -10 l 8 10" stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={322} size={14} fill={AMBER_DARK} script>
          {t("smooth marbles — never stick, never deform", "smooth marbles — na chipakte, na deform hote")}
        </T>
      </Fade>

      {/* beat 4 — assumptions row 1 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={160} y={340} w={210} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("point masses", "point masses")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={390} y={340} w={300} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("forces only in collisions", "forces sirf collisions mein")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <Chip x={710} y={340} w={210} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("perfectly elastic", "perfectly elastic")}
        </Chip>
      </Fade>

      {/* beat 5 — assumptions row 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={165} y={385} w={230} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("straight-line flight", "straight-line flight")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={415} y={385} w={260} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("identical molecules", "identical molecules")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <Chip x={695} y={385} w={220} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("gravity ignored", "gravity ignored")}
        </Chip>
      </Fade>

      {/* beat 6 — the payoff */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={470} size={18} fill={GREEN} script weight={700}>
          {t(
            "no interaction PE ⇒ internal energy = pure KE of motion",
            "koi interaction PE nahi ⇒ internal energy = pure KE"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

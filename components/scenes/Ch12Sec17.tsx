/**
 * Ch12 · Section 17 — Worked example [JEE Advanced]: two connected bulbs at different temperatures
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 14.46, 22.48, 35.54, 49.02, 59.77]):
 *  0 title + problem · 1 THE PICTURE: two bulbs joined by a tube, hot bulb
 *    sparse, cool bulb dense — gas drifted to the cooler side · 2 master
 *    move: total moles conserved, initial = final · 3 initial moles formula
 *    · 4 final moles formula · 5 solve for P · 6 substitute ⇒ 8P₀/7 · 7
 *    lesson: heating drives gas to the cooler bulb
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x270..810 y37..74 (bl62)
 *  b0 | problem (13, ink, script)       | T mid | x540 y92
 *  b1 | left bulb (r70) + label + dots  | Draw  | c(250,190)
 *  b1 | tube + drift arrow              | Draw  | x320..760 y190
 *  b1 | right bulb (r70) + label+dots   | Draw  | c(830,190)
 *  b1 | caption (13, amber_dark)        | T mid | x540 y278
 *  b2 | master move (14, ink, script)   | T mid | x540 y304
 *  b3 | n_initial (15, ink)             | T mid | x540 y332
 *  b4 | n_final (15, ink)               | T mid | x540 y360
 *  b5 | solve (15, amber_dark)          | T mid | x540 y390
 *  b6 | answer chip (big, green)        | Chip  | x380..700 y418..460
 *  b7 | lesson (script 15, green)       | T mid | x540 y500
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const LEFT_DOTS: [number, number][] = [
  [220, 170], [270, 210], [230, 220], [280, 160], [250, 195],
];
const RIGHT_DOTS: [number, number][] = [
  [800, 165], [850, 175], [810, 205], [860, 210], [830, 145], [795, 220], [865, 155], [820, 235], [845, 195],
];

export default function Ch12Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("two bulbs, two temperatures [JEE Advanced]", "do bulbs, do temperatures [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={13} fill={INK} script>
          {t(
            "2 bulbs (V each), P₀ @ 300 K → one heated to 400 K ⇒ new common P?",
            "2 bulbs (V), P₀ @ 300 K → ek 400 K tak heat ⇒ naya common P?"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: gas drifts to the cooler bulb */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 180 190 A 70 70 0 1 1 320 190 A 70 70 0 1 1 180 190"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={250} y={108} size={14} fill={RED} weight={700}>
          T₁=400K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <G>
          {LEFT_DOTS.map(([x, y]) => (
            <Circle key={`l-${x}-${y}`} cx={x} cy={y} r={6} fill={RED} />
          ))}
        </G>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 320 190 H 760" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(450, 210, 630, 210)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={540} y={232} size={12} fill={AMBER_DARK} script>
          {t("gas drifts to the cooler bulb", "gas cooler bulb ki taraf drift")}
        </T>
      </Fade>

      <Draw
        on={beat >= 1}
        delay={dl(1, 3.9)}
        d="M 760 190 A 70 70 0 1 1 900 190 A 70 70 0 1 1 760 190"
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={830} y={108} size={14} fill={GREEN} weight={700}>
          T₂=300K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <G>
          {RIGHT_DOTS.map(([x, y]) => (
            <Circle key={`r-${x}-${y}`} cx={x} cy={y} r={6} fill={GREEN} />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={540} y={278} size={13} fill={AMBER_DARK} script>
          {t("total moles conserved — but redistributed", "total moles conserved — bas redistribute")}
        </T>
      </Fade>

      {/* beat 2 — master move */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={304} size={14} fill={INK} script>
          {t(
            "master move: total moles conserved, initial = final",
            "master move: total moles conserved, initial = final"
          )}
        </T>
      </Fade>

      {/* beat 3 — initial moles */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={332} size={15} fill={INK}>
          n_initial = 2P₀V / (RT₀)
        </T>
      </Fade>

      {/* beat 4 — final moles */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={360} size={15} fill={INK}>
          n_final = (PV/R)(1/T₁ + 1/T₂)
        </T>
      </Fade>

      {/* beat 5 — solve */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={390} size={15} fill={AMBER_DARK}>
          cancel V/R ⇒ P = (2P₀/T₀) × T₁T₂/(T₁+T₂)
        </T>
      </Fade>

      {/* beat 6 — substitute */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={380} y={418} w={320} h={42} fill={GREEN} textFill="#fff" size={19} script={false}>
          P = 8P₀/7 ≈ 1.14 P₀
        </Chip>
      </Fade>

      {/* beat 7 — the lesson */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={500} size={15} fill={GREEN} script>
          {t(
            "heating one half drives gas to the cooler bulb — write 'moles conserved' first",
            "ek half heat karna gas ko cooler bulb mein bhejta — 'moles conserved' pehle likho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

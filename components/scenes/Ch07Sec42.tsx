/**
 * Ch07 · Section 42 — "Gravitational potential: per-kilogram energy that adds as a scalar"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 14.84, 22.77, 30.71, 37.28]):
 *  0 title
 *  1 hero: V = U/m = −GM/r, U = mV
 *  2 amber: scalar — just add numbers, no components
 *  3 words line: work per kg from infinity
 *  4 many masses: three dots, V = −G·Σmᵢ/rᵢ
 *  5 red: potential is a scalar, algebraic sum only
 *  6 bridge line: E = −dV/dr
 *  7 amber: field points downhill on the landscape
 *  8 green box: surface anchors V = −GM/R = −gR, [V] = L²T⁻²
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · hero cx540 bl110 (20)
 *  b2 | line cx540 bl150
 *  b3 | line cx540 bl185
 *  b4 | dots (200,260)/(300,300)/(230,340) + P (400,300) ·
 *      formula cx540 bl400 (16)
 *  b5 | bar x66 y430..482 lines bl450/476
 *  b6 | line cx540 bl440
 *  b7 | line cx540 bl475
 *  b8 | green box x300..780 y500..552 (bl532)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — potential, energy's per-kilogram cousin */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Potential — energy's per-kilogram cousin",
            "Potential — energy ka per-kilogram bhai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the definition */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={110} size={20} fill={INK} weight={800}>
          V = U ⁄ m = −GM ⁄ r ,   U = m·V
        </T>
      </Fade>

      {/* beat 2 — a friendly scalar */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={150} size={13} fill={AMBER_DARK} script>
          {t(
            "a SCALAR — from many masses, just add the numbers",
            "ek SCALAR — kai masses se, bas numbers jodo"
          )}
        </T>
      </Fade>

      {/* beat 3 — in words */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={185} size={12} fill={INK} script>
          {t(
            "work per kilogram to bring a test mass in from infinity",
            "test mass ko infinity se laane ka work per kilogram"
          )}
        </T>
      </Fade>

      {/* beat 4 — many masses */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={200} cy={260} r={6} fill={INK} />
        <Circle cx={300} cy={300} r={6} fill={INK} />
        <Circle cx={230} cy={340} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Circle cx={400} cy={300} r={4} fill={AMBER_DARK} />
        <T x={400} y={280} size={11} fill={AMBER_DARK} weight={700}>
          P
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={540} y={400} size={16} fill={INK} weight={800}>
          V = −G·Σᵢ mᵢ ⁄ rᵢ
        </T>
      </Fade>

      {/* beat 5 — algebraic sum only */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Rect x={40} y={430} width={4} height={52} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={58} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "potential is a SCALAR — algebraic sum, with signs",
            "potential ek SCALAR hai — algebraic sum, signs ke saath"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={58} y={476} size={13} fill={RED} script anchor="start">
          {t("NEVER add it as vectors", "isse KABHI vectors ki tarah mat jodo")}
        </T>
      </Fade>

      {/* beat 6 — the bridge to the field */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={440} size={16} fill={INK} weight={800}>
          E(g) = −dV ⁄ dr
        </T>
      </Fade>

      {/* beat 7 — downhill */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={475} size={13} fill={AMBER_DARK} script>
          {t(
            "field points DOWNHILL — high potential to low",
            "field DOWNHILL point karta hai — high se low potential"
          )}
        </T>
      </Fade>

      {/* beat 8 — exam anchors */}
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <Rect
          x={300}
          y={500}
          width={480}
          height={52}
          rx={12}
          fill={CREAM}
          stroke={GREEN}
          strokeWidth={2.4}
        />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={540} y={532} size={15} fill={INK} weight={800}>
          {t(
            "surface: V = −GM⁄R = −gR · [V] = L²T⁻²",
            "surface: V = −GM⁄R = −gR · [V] = L²T⁻²"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

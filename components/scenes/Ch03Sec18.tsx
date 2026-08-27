/**
 * Ch03 · Section 18 — "The seesaw, and the conditions that bound both products"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.9, 26.5, 40.5, 55.4, 80.1, 81.1, 106.0]):
 *  0 heading
 *  1 the seesaw graph: cos falls, sin rises, 0..180
 *  2 parallel markers: dot MAX, cross 0
 *  3 perpendicular markers: dot 0, cross MAX
 *  4 together = complete geometry
 *  5 fine print 1: tail-to-tail 0..180
 *  6 fine print 2: cross is 3D
 *  7 red trap: dot-zero ⊥ vs cross-zero ∥
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | zero line M130 280 H890 · ticks x150/510/870 lbls bl 306 s12 ·
 *       dash M510 170 V390 · cos M150 170 C.. 510 280 .. 870 390 lbl st (160,156) ·
 *       sin M150 280 C.. 510 170 .. 870 280 lbl st (566,158)
 *  b2 | dots (150,170) amber / (150,280) green · tag cx150 bl 340 s11
 *  b3 | dots (510,280) amber / (510,170) green · tag cx510 bl 340 s11
 *  b4 | line cx540 bl 420 s12 · underline M300 430 h480
 *  b5 | st x84 bl 458 s12
 *  b6 | st x84 bl 486 s12
 *  b7 | bar M66 510 v56 · lines st x84 bl 528 / 552 / 576 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("The two products are a SEESAW", "Dono products ek SEESAW hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the sweep */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 130 280 H 890" stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d="M 150 274 v 12 M 510 274 v 12 M 870 274 v 12"
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={150} y={306} size={12} fill={INK_LIGHT}>0°</T>
        <T x={510} y={306} size={12} fill={INK_LIGHT}>90°</T>
        <T x={870} y={306} size={12} fill={INK_LIGHT}>180°</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M 510 170 V 390" stroke={MUTED} sw={1.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 150 170 C 290 190, 400 230, 510 280 C 620 330, 730 370, 870 390"
        stroke={AMBER_DARK}
        sw={2.8}
        dur={1.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={160} y={156} size={12} fill={AMBER_DARK} weight={700} anchor="start">A·B (cos)</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 150 280 C 260 200, 380 170, 510 170 C 640 170, 760 200, 870 280"
        stroke={GREEN}
        sw={2.8}
        dur={1.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={566} y={158} size={12} fill={GREEN} weight={700} anchor="start">A×B (sin)</T>
      </Fade>

      {/* beat 2 — parallel */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={150} cy={170} r={5.5} fill={AMBER} />
        <Circle cx={150} cy={280} r={5.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={150} y={340} size={11} fill={AMBER_DARK} script>
          {t("∥ : dot MAX · cross 0", "∥ : dot MAX · cross 0")}
        </T>
      </Fade>

      {/* beat 3 — perpendicular */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Circle cx={510} cy={280} r={5.5} fill={AMBER} />
        <Circle cx={510} cy={170} r={5.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={510} y={340} size={11} fill={GREEN} script>
          {t("⊥ : dot 0 · cross MAX", "⊥ : dot 0 · cross MAX")}
        </T>
      </Fade>

      {/* beat 4 — complete geometry */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={420} size={12} fill={INK} script>
          {t(
            "together they carry the COMPLETE geometry — nothing about orientation escapes them",
            "dono milkar POORI geometry pakad lete hain — orientation ka kuchh nahi bachta"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d="M 300 430 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 5 — fine print 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={84} y={458} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "fine print 1: θ is TAIL-TO-TAIL, 0° to 180° — head-to-tail? redraw first",
            "fine print 1: θ TAIL-TO-TAIL hai, 0° se 180° — head-to-tail? pehle redraw karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — fine print 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={486} size={12} fill={INK} script anchor="start">
          {t(
            "fine print 2: the cross product lives in 3D — in 2D say “out of / into the page”",
            "fine print 2: cross product 3D ki cheez hai — 2D mein bolo “page se bahar / andar”"
          )}
        </T>
      </Fade>

      {/* beat 7 — the trap, twice */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 510 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={528} size={12} fill={RED} script anchor="start">
          {t(
            "A·B = 0 → PERPENDICULAR   ·   A×B = 0 → PARALLEL (or anti)",
            "A·B = 0 → PERPENDICULAR   ·   A×B = 0 → PARALLEL (ya anti)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={552} size={12} fill={RED} script anchor="start">
          {t(
            "exact opposites — the easiest confusion in the chapter, and questions hunt it",
            "bilkul ulte — chapter ki sabse aasan confusion, aur sawaal isi ka shikaar karte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={576} size={12} fill={GREEN} script anchor="start">
          {t(
            "anchor it: nothing ALONG = right angles · nothing ACROSS = in line",
            "yaad rakho: kuchh SAATH nahi = right angle · kuchh AAR-PAAR nahi = ek line"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

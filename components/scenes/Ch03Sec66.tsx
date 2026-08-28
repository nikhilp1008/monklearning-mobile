/**
 * Ch03 · Section 66 — "Board derivation: centripetal acceleration is v squared over r"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.5, 20.8, 33.4, 34.4, 49.0, 62.8, 76.5]):
 *  0 heading
 *  1 setup: two instants, position turns by a small angle, velocity too
 *  2 diagram: position triangle + velocity triangle, sides labelled r / v
 *  3 both isosceles, same apex angle → SIMILAR (base labels Δr, Δv)
 *  4 proportional sides: Δv/v = Δr/r
 *  5 divide by Δt → a = v²/r (green box)
 *  6 as the interval shrinks, Δv points at the centre
 *  7 a = ω²r (since v = ωr)
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 104 s13 · st x84 bl 128 s13
 *  b2 | Δ1: O1(160,420) P1(110,340) P2(210,340) · Δ2: O2(500,420) V1(450,340) V2(550,340) ·
 *       "r" end(122,380) · "v" end(462,380)
 *  b3 | δθ cx160/500 bl 398 s11 · "Δr" cx160 bl 318 · "Δv" cx500 bl 318 ·
 *       caption cx330 bl 380 s12
 *  b4 | st x600 bl 140 s14
 *  b5 | st x600 bl 170 s14 · st x600 bl 208 s11 · box x600..900 y232..262 text cx750 bl 254 s16
 *  b6 | st x600 bl 300 s13 · st x600 bl 324 s13
 *  b7 | box x600..980 y350..396 text cx790 bl 382 s15
 */

import React from "react";
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

export default function Ch03Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("CBSE DERIVATION — a = v² ⁄ r", "CBSE DERIVATION — a = v² ⁄ r")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={104} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "two instants, a short time apart — position turns by a small angle",
            "do pal, thodi der ke fark se — position ek chhote angle se ghoomti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={128} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "velocity ⊥ the radius, so it turns by the SAME angle",
            "velocity radius ⊥ hai, isliye wahi SAME angle se ghoomti hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two triangles */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 160 420 L 110 340 M 160 420 L 210 340" stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={122} y={380} size={13} fill={INK} weight={700} anchor="end">r</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d="M 500 420 L 450 340 M 500 420 L 550 340" stroke={AMBER_DARK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={462} y={380} size={13} fill={AMBER_DARK} weight={700} anchor="end">v</T>
      </Fade>

      {/* beat 3 — isosceles, same angle, similar */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 110 340 H 210" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={160} y={318} size={12} fill={INK} weight={700}>Δr</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 450 340 H 550" stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={500} y={318} size={12} fill={AMBER_DARK} weight={700}>Δv</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={160} y={398} size={11} fill={MUTED} weight={700}>δθ</T>
        <T x={500} y={398} size={11} fill={MUTED} weight={700}>δθ</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={330} y={380} size={12} fill={GREEN} script>
          {t("same angle, both isosceles →", "same angle, dono isosceles →")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={330} y={404} size={13} fill={GREEN} weight={800}>
          {t("SIMILAR", "SIMILAR")}
        </T>
      </Fade>

      {/* beat 4 — proportional sides */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={600} y={140} size={14} fill={INK} weight={700} anchor="start">
          Δv ⁄ v = Δr ⁄ r
        </T>
      </Fade>

      {/* beat 5 — divide by time, get a = v²/r */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={600} y={170} size={14} fill={INK} weight={700} anchor="start">
          Δv ⁄ Δt = (v ⁄ r)(Δr ⁄ Δt)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={600} y={208} size={11} fill={MUTED} script anchor="start">
          {t("Δr⁄Δt → v as Δt → 0", "Δr⁄Δt → v jab Δt → 0")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 8)}
        d="M 612 232 h 276 q 12 0 12 12 v 18 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={750} y={254} size={16} fill={INK} weight={800}>
          a = v² ⁄ r
        </T>
      </Fade>

      {/* beat 6 — which way it points */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={600} y={300} size={13} fill={RED} script anchor="start">
          {t(
            "as the interval shrinks, Δv swings toward the centre",
            "jaise interval chhota hota hai, Δv kendra ki taraf ghoomta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={600} y={324} size={13} fill={RED} script anchor="start">
          {t(
            "that is why it is called CENTRIPETAL",
            "isi liye ise CENTRIPETAL kehte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the omega form */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 612 350 h 356 q 12 0 12 12 v 22 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={790} y={382} size={15} fill={INK} weight={800}>
          a = ω² r    (v = ω r)
        </T>
      </Fade>
    </Scene>
  );
}

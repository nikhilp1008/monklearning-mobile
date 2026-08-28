/**
 * Ch03 · Section 64 — "Constant speed, yet always accelerating"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 22.5, 33.3, 48.3, 58.1, 73.4, 87.6]):
 *  0 heading
 *  1 the question: stone on a string, steady speed — accelerating?
 *  2 a = dv/dt, and v is a VECTOR (size + direction)
 *  3 the circle: four tangent velocity arrows, same length
 *  4 caption: direction turns every instant
 *  5 red: changing velocity → non-zero acceleration
 *  6 centripetal arrow pointing inward + label
 *  7 cut the string: flies off along the tangent
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 104 s13
 *  b2 | line st x84 bl 138 s13
 *  b3 | circle C(350,320) r140 · four tangent arrows at N/E/S/W cardinal points,
 *       all same length 60, clockwise sense · v lbls near each arrowhead s12
 *  b4 | caption cx350 bl 500 s11
 *  b5 | bar M600 108 v44 · lines st x614 bl 126 / 150 s12
 *  b6 | inward arrow (490,320)→(430,320) green · lbl st (614,200) s13 ·
 *       caption st x614 bl 224 s11
 *  b7 | mini diagram, clear of other columns: arc O(820,380) r60 from A(820,320)
 *       to B(880,380) · crossD at B · tangent arrow B→(880,450) red ·
 *       lbl cx880 bl 490 s11 (centred, fits inside safe x-range)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
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

export default function Ch03Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "The paradox at the heart of circular motion",
            "Circular motion ke dil mein chhupa paradox"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the question */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={104} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a stone on a string, steady speed — IS it accelerating?",
            "dhaage par patthar, sthir speed — KYA yeh accelerate ho raha hai?"
          )}
        </T>
      </Fade>

      {/* beat 2 — a is dv/dt, v is a vector */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={138} size={13} fill={INK} script anchor="start">
          {t(
            "acceleration = dv⁄dt — and velocity is a VECTOR: size AND direction",
            "acceleration = dv⁄dt — aur velocity ek VECTOR hai: size AUR direction"
          )}
        </T>
      </Fade>

      {/* beat 3 — the circle with tangent velocities */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 350 180 A 140 140 0 1 1 349.9 180" stroke={INK_LIGHT} sw={2} dur={1.2} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={arrowD(350, 180, 410, 180)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={410} y={168} size={12} fill={AMBER_DARK} weight={700} anchor="start">v</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={arrowD(490, 320, 490, 380)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={502} y={385} size={12} fill={AMBER_DARK} weight={700} anchor="start">v</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={arrowD(350, 460, 290, 460)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={278} y={478} size={12} fill={AMBER_DARK} weight={700} anchor="end">v</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.6)} d={arrowD(210, 320, 210, 260)} stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={198} y={250} size={12} fill={AMBER_DARK} weight={700} anchor="end">v</T>
      </Fade>

      {/* beat 4 — the caption */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={350} y={520} size={12} fill={AMBER_DARK} script>
          {t(
            "same length everywhere — but the direction turns every instant",
            "har jagah lambai barabar — par direction har pal ghoomti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the crucial idea */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 600 108 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={614} y={126} size={12} fill={RED} script anchor="start">
          {t(
            "constant speed, direction changing → velocity IS changing",
            "speed sthir, direction badalti → velocity BADAL rahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={614} y={150} size={12} fill={RED} script anchor="start">
          {t(
            "a changing velocity means a non-zero acceleration",
            "badalti velocity ka matlab: acceleration non-zero hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the centripetal arrow */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d={arrowD(490, 320, 430, 320)} stroke={GREEN} sw={3} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={614} y={200} size={13} fill={GREEN} weight={800} anchor="start">
          {t("centripetal — “centre-seeking”", "centripetal — “kendra ki taraf”")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={614} y={224} size={11} fill={GREEN} script anchor="start">
          {t(
            "always aimed inward, along the radius",
            "hamesha andar ki taraf, radius ke saath"
          )}
        </T>
      </Fade>

      {/* beat 7 — cut the string (a separate mini diagram, clear of the text columns) */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 820 320 A 60 60 0 0 1 880 380" stroke={INK_LIGHT} sw={2.2} dur={0.7} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={crossD(872, 372, 16, 16)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 2.2)} d={arrowD(880, 380, 880, 450)} stroke={RED} sw={2.8} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={880} y={490} size={11} fill={RED} script>
          {t(
            "cut the string → flies off along the tangent",
            "dhaaga kaato → tangent ke saath uD jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

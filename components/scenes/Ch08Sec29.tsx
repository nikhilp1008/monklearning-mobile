/**
 * Ch08 · Section 29 — "Deriving the volume-change relation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * The sequel to Sec28: that section STATED ΔV/V = (1−2ν)(ΔL/L) (boxed in amber
 * on a number line); this one PROVES it by log-differentiating V = πr²L. The
 * hero box deliberately reuses Sec28's amber rounded-box styling so a student
 * flipping between the two sections recognises the same result landing.
 *
 * ONE persistent cylinder on the left (two cap ellipses + two side lines, all
 * fill="none" — outline only, so nothing is painted before play), annotated
 * with r across the top cap and a double-headed L down the side; a derivation
 * cascade runs down the right, each row left-anchored at x430 with a script
 * annotation at x790 and a short amber arrow pointing back at the row.
 *
 * Pacing: en beats 4..5 are ~1s each and hi beats 0..1 are ~1s each (compressed
 * narration) — those beats use short staggers and settle near-instantly.
 *
 * Beats (en [0, 6.91, 17.75, 29.18, 42.15, 43.15, 44.15] ·
 *        hi [0, 1.0, 2.0, 12.15, 23.67, 34.09, 47.99]):
 *  0 title underline + the goal: "the trick is to differentiate the logarithm"
 *  1 the cylinder gets drawn: caps, walls, radius r, length L, V = πr²L
 *  2 take logs ⇒ ln V = ln π + 2 ln r + ln L (product becomes a sum)
 *  3 ln π crossed out (constant ⇒ 0) ⇒ ΔV/V = 2(Δr/r) + (ΔL/L)
 *  4 the physics enters: Δr/r = −ν(ΔL/L), and the cylinder shows it —
 *    red arrows pinching the waist inward, green ΔL arrow below the base
 *  5 substitute ⇒ boxed hero ΔV/V = (1−2ν)(ΔL/L) + the Sec28 callback
 *  6 red margin note: read the bracket at ν = 0.5 and below it
 *
 * Layout plan — text boxes MEASURED (getBoundingClientRect on the settled
 * frame, converted to viewBox units; the wider of the two languages is shown);
 * strokes are geometric. Every arrow tip stops 5px off its row's measured right
 * edge, so the tips move with the real glyph widths, not the estimates.
 *  title (script 22, red, ALWAYS ON) cx540 bl64 (x293.6..786.4 y40.2..75.3)
 *  b0 | title underline      | Draw | x400..680 y86..92
 *  b0 | goal line (scr 16)   | T mid| cx737 bl122 (x581.7..892.3 y105..129.9)
 *  b1 | top cap ellipse      | Draw | x162..318 y176..224
 *  b1 | side walls           | Draw | x162 & x318, y200..420
 *  b1 | bottom cap ellipse   | Draw | x162..318 y396..444
 *  b1 | r arrow + centre dot | Draw | x237..313 y195..205
 *  b1 | "r" (16)             | T mid| x273.8..280.2 bl162 (y147.3..165.4)
 *  b1 | L dimension (2 head) | Draw | x112..156 y200..420
 *  b1 | "L" (18)             | T end| x96.7..106  bl316 (y300.1..319.4)
 *  b1 | "V = π r² L" (24)    | T mid| x194.1..285.9 bl484 (y462.5..488.5)
 *  b2 | row A (24)           | T st | x430..666.4 bl200 (y178.5..204.5)
 *  b2 | arrow → row A        | Draw | x671..782 y187..197
 *  b2 | "take logs…" (scr15) | T st | x790..944.5 bl200 (y184.1..207.9)
 *  b3 | "ln π" (20, muted)   | T st | x430..463.5 bl240 (y221.9..244.5)
 *  b3 | cross-out            | Draw | x426..468 y219..248
 *  b3 | "constant ⇒ …" (14)  | T st | x490..656.1 bl240 (y227.5..242.7)
 *  b3 | row B (24)           | T st | x429.5..669.2 bl290 (y268.5..294.5)
 *  b3 | arrow → row B        | Draw | x674..782 y277..287
 *  b3 | "now differentiate"  | T st | x790..937.7 bl290 (y274.1..297.9)
 *  b4 | row C (24)           | T st | x429.5..591.2 bl370 (y348.5..374.5)
 *  b4 | arrow → row C        | Draw | x596..782 y357..367
 *  b4 | "Poisson…" (scr15)   | T st | x790..922.1 bl370 (y354.1..377.9)
 *  b4 | waist pinch arrows   | Draw | x172..308 y305..315
 *  b4 | "Δr < 0" (15)        | T mid| x220.5..259.2 bl290 (y276.4..293.4)
 *  b4 | ΔL arrow (green)     | Draw | x113..123 y428..470
 *  b4 | "ΔL > 0" (14)        | T end| x62.4..100 bl452 (y439.5..454.3)
 *  b5 | row D (22)           | T st | x429.5..681.5 bl430 (y410.7..434.5)
 *  b5 | arrow → row D        | Draw | x686..782 y418..428
 *  b5 | "substitute" (scr15) | T st | x790..898.6 bl430 (y414.1..437.9)
 *  b5 | hero box (Sec28 look)| Draw | x520..860 y464..538
 *  b5 | hero formula (30)    | T mid| x560.8..818.5 bl512 (y484.8..517.7)
 *  b5 | Sec28 callback (s14) | T mid| x560.3..819.7 bl570 (y555.3..577.9)
 *  b6 | margin bar           | Draw | x60 y508..566
 *  b6 | ν = 0.5 row (15)     | T st | x75.9..369.4 bl526 (y512.4..529.4)
 *  b6 | ν < 0.5 row (15)     | T st | x75.9..338   bl556 (y542.4..559.4)
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
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t(
            "deriving the volume relation by log-differentiation",
            "volume relation derive — log-differentiation se"
          )}
        </T>
      </Fade>

      {/* beat 0 — the goal and the technique */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M400 89 C480 86, 600 92, 680 88"
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <T x={737} y={122} size={16} fill={AMBER_DARK} script>
          {t(
            "the clean trick: differentiate the logarithm",
            "saaf trick: logarithm ko differentiate kijiye"
          )}
        </T>
      </Fade>

      {/* beat 1 — the cylinder itself (outline only: fill="none" throughout) */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M162 200 A 78 24 0 1 0 318 200 A 78 24 0 1 0 162 200"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M162 200 V420 M318 200 V420"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.0)}
        d="M162 420 A 78 24 0 1 0 318 420 A 78 24 0 1 0 162 420"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(240, 200, 313, 200)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Circle cx={240} cy={200} r={3.2} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={277} y={162} size={16} fill={AMBER_DARK} weight={800}>
          r
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.6)}
        d="M156 200 H118 M156 420 H118 M118 200 V420 M112 206 L118 200 L124 206 M112 414 L118 420 L124 414"
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={106} y={316} size={18} fill={INK} weight={800} anchor="end">
          L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={240} y={484} size={24} fill={INK} weight={800}>
          V = π r² L
        </T>
      </Fade>

      {/* beat 2 — take logs: the product becomes a sum */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={430} y={200} size={24} fill={INK} weight={800} anchor="start">
          ln V = ln π + 2 ln r + ln L
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d={arrowD(782, 192, 671, 192)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={790} y={200} size={15} fill={AMBER_DARK} script anchor="start">
          {t("take logs of both sides", "dono taraf ka log lijiye")}
        </T>
      </Fade>

      {/* beat 3 — differentiate: the constant dies, each term becomes a ratio */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={430} y={240} size={20} fill={MUTED} weight={700} anchor="start">
          ln π
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.3)}
        d={crossD(430, 222, 34, 23)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={490} y={240} size={14} fill={MUTED} anchor="start">
          {t("constant ⇒ no change", "constant ⇒ koi change nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.0)}>
        <T x={430} y={290} size={24} fill={INK} weight={800} anchor="start">
          ΔV/V = 2(Δr/r) + (ΔL/L)
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.6)}
        d={arrowD(782, 282, 674, 282)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.3)}>
        <T x={790} y={290} size={15} fill={AMBER_DARK} script anchor="start">
          {t("now differentiate", "ab differentiate kijiye")}
        </T>
      </Fade>

      {/* beat 4 — Poisson's ratio walks in (short staggers: en beat is ~1s) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={430} y={370} size={24} fill={INK} weight={800} anchor="start">
          Δr/r = −ν (ΔL/L)
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d={arrowD(782, 362, 596, 362)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={790} y={370} size={15} fill={AMBER_DARK} script anchor="start">
          {t("Poisson's definition", "Poisson ki definition")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.9)}
        d={`${arrowD(172, 310, 215, 310)} ${arrowD(308, 310, 265, 310)}`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={240} y={290} size={15} fill={RED} weight={700}>
          Δr &lt; 0
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.9)}
        d={arrowD(118, 428, 118, 470)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={100} y={452} size={14} fill={GREEN} weight={700} anchor="end">
          ΔL &gt; 0
        </T>
      </Fade>

      {/* beat 5 — substitute, collapse, box it (Sec28's amber box, on purpose) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={430} y={430} size={22} fill={INK} weight={800} anchor="start">
          ΔV/V = 2(−ν ΔL/L) + (ΔL/L)
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d={arrowD(782, 423, 686, 423)}
        stroke={AMBER}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={790} y={430} size={15} fill={AMBER_DARK} script anchor="start">
          {t("substitute", "substitute kijiye")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.9)}
        d="M532 464 h316 q12 0 12 12 v50 q0 12 -12 12 h-316 q-12 0 -12 -12 v-50 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <T x={690} y={512} size={30} fill={INK} weight={800}>
          ΔV/V = (1−2ν)(ΔL/L)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={690} y={570} size={14} fill={GREEN} script>
          {t(
            "exactly the result section 28 promised",
            "wahi result jo section 28 ne promise kiya"
          )}
        </T>
      </Fade>

      {/* beat 6 — read the bracket off the board */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M60 508 L60 566" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={76} y={526} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "ν = 0.5 ⇒ 1 − 2ν = 0 ⇒ no volume change",
            "ν = 0.5 ⇒ 1 − 2ν = 0 ⇒ koi volume change nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={76} y={556} size={15} fill={GREEN} weight={700} anchor="start">
          {t(
            "ν < 0.5 ⇒ 1 − 2ν > 0 ⇒ volume grows",
            "ν < 0.5 ⇒ 1 − 2ν > 0 ⇒ volume badhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

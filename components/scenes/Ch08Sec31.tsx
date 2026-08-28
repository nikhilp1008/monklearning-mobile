/**
 * Ch08 · Section 31 — "Deriving elastic energy and energy density"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * The sequel to Sec30: that section STATED U = ½FΔL (from an F-vs-extension
 * triangle) and only argued the ½ by "average force". This one PROVES it by
 * integrating the growing force, then divides by the volume to get the
 * section's own payoff, the energy density u. The U = ½FΔL callback box
 * deliberately reuses Sec30's amber rounded-box styling; the energy-density
 * hero below it is the same box, heavier stroke, so the new result reads as
 * the bigger landing.
 *
 * ONE persistent stress-strain triangle on the left (σ vs ε — the same shape
 * of picture as Sec30's F-vs-extension graph, relabelled, with the line's
 * slope called out as Young's modulus Y). Every stroke is fill="none"; the
 * shaded triangle is a raw <Polygon> inside a <Fade>, never a filled Draw, so
 * nothing is painted on the board before play. The integration cascade runs
 * down the right, rows left-anchored at x460 with a script annotation at x790
 * and a short amber arrow pointing back at each row.
 *
 * Pacing: en beats 4..6 are ~1s each and hi beats 0..1 are ~1s each
 * (compressed narration) — those beats use short staggers and settle
 * near-instantly; the roomy beats (1..3) carry the long choreography.
 *
 * Beats (en [0, 5.55, 13.74, 31.57, 47.96, 48.96, 49.96] ·
 *        hi [0, 1.0, 2.0, 17.02, 32.98, 48.42, 63.53]):
 *  0 title underline + the promise: we don't assume the ½, we integrate it
 *  1 the stress-strain triangle is drawn: axes, line, shaded area, σ/ε refs,
 *    "slope = Y", and the caption "this area = energy per unit volume"
 *  2 at extension l the holding force is F(l) = (YA/L)·l; a further dl
 *    costs dW = F(l)·dl
 *  3 integrate 0 → ΔL: W = ∫(YA/L) l dl = ½(YA/L)(ΔL)², with the hint ∫l dl = ½l²
 *  4 recognise F = (YA/L)ΔL ⇒ boxed callback U = ½FΔL (Sec30's result, proved)
 *  5 divide by the volume AL ⇒ boxed hero u = U/(AL) = ½σε = ½Yε² = σ²/2Y,
 *    and "u" is stamped inside the shaded triangle (the area IS u)
 *  6 red margin: the ½ is the average force at work, 0 → F, not the full F
 *
 * Layout plan — text boxes MEASURED (getBoundingClientRect on the settled
 * frame, converted to viewBox units; the wider of the two languages is shown);
 * strokes are geometric. Every cascade arrow tip stops 5px off its row's
 * MEASURED right edge, so the tips track real glyph widths (the estimate
 * formulas ran ~10% wide here, as they did in Sec29).
 *  title (script 22, red, ALWAYS ON) cx540 bl64 (x327.3..752.2 y40.2..75.3)
 *  b0 | title underline      | Draw | x420..660 y85..92
 *  b0 | promise line (scr16) | T mid| cx540 bl124 (x371.8..708.2 y107..131.9)
 *  b1 | y-axis (arrow)       | Draw | x135..145 y164..401
 *  b1 | "σ (stress)" (13)    | T mid| cx140 bl150 (x113..167 y138.7..152.3)
 *  b1 | x-axis (arrow)       | Draw | x139..401 y395..405
 *  b1 | "ε (strain)" (13)    | T mid| cx420 bl424 (x394.8..445.2 y412.7..426.3)
 *  b1 | σ-ε line             | Draw | (140,400)→(340,196)
 *  b1 | shaded triangle      | Fade | polygon 140,400 340,400 340,196
 *  b1 | dashed refs          | Fade | x340 y196..400 · y196 x140..340
 *  b1 | "σ" value (12 muted) | T end| x121..128 bl200 (y188.7..202.3)
 *  b1 | "ε" value (12 muted) | T mid| x337.5..342.5 bl424 (y412.7..426.3)
 *  b1 | slope arrow          | Draw | x191..234 y271..304 (tip 7px off the line)
 *  b1 | "slope = Y" (15)     | T st | x166..225.1 bl240 (y226.4..243.4)
 *  b1 | "Young's modulus"(12)| T st | x166..253.4 bl260 (y248.7..262.3)
 *  b1 | area caption (scr15) | T mid| cx270 bl468 (x153.3..386.7 y452.1..475.9)
 *  b2 | row A (24)           | T st | x460..609.9 bl180 (y158.5..184.5)
 *  b2 | arrow → row A        | Draw | x615..780 y167..177
 *  b2 | annot A (scr15)      | T st | x790..940 bl180 (y164.1..187.9)
 *  b2 | row A2 (22)          | T st | x460..580 bl232 (y212.7..236.5)
 *  b2 | arrow → row A2       | Draw | x585..780 y220..230
 *  b2 | annot A2 (scr15)     | T st | x790..940.5 bl232 (y216.1..239.9)
 *  b3 | row B (24 + limits)  | T st | x460..644.2 bl300 (y274.7..309.3)
 *  b3 | arrow → row B        | Draw | x649..780 y287..297
 *  b3 | annot B (scr15)      | T st | x790..931.2 bl300 (y284.1..307.9)
 *  b3 | row C (24)           | T st | x484..647.4 bl352 (y330.5..356.5)
 *  b3 | arrow → row C        | Draw | x652..780 y339..349
 *  b3 | hint "∫l dl=½l²"(15) | T st | x789.8..852.5 bl352 (y338.4..355.4)
 *  b4 | row D (22)           | T st | x460..583.6 bl404 (y384.7..408.5)
 *  b4 | arrow → row D        | Draw | x589..780 y392..402
 *  b4 | annot D (scr15)      | T st | x790..930.9 bl404 (y388.1..411.9)
 *  b4 | callback box (Sec30) | Draw | x460..720 y424..484
 *  b4 | "U = ½ F ΔL" (26)    | T mid| cx590 bl462 (x532.9..647.1 y438.2..467.7)
 *  b4 | Sec30 callback (s14) | T st | x744..929.6 bl462 (y447.3..469.9)
 *  b5 | hero box             | Draw | x530..975 y510..582
 *  b5 | hero formula (28)    | T mid| cx752 bl554 (x563.7..940.3 y529.1..559.7)
 *  b5 | "u" in triangle (26) | T mid| cx270 bl340 (x262.5..277.5 y316.2..345.7)
 *  b6 | margin bar           | Draw | x60 y508..566
 *  b6 | note line 1 (15)     | T st | x76..224.1 bl526 (y512.4..529.4)
 *  b6 | note line 2 (15)     | T st | x76..336.4 bl556 (y542.4..559.4)
 *
 * The running extension l is set in italic tspans everywhere it appears in a
 * formula — in Anek the upright lowercase l is a bare vertical stroke and
 * "F(l)" reads as "F(1)".
 */

import React from "react";
import { Line, Polygon, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec31({ currentTime, reveals, language }: SceneProps) {
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
            "proving the half — and the energy density",
            "half ka proof — aur energy density bhi"
          )}
        </T>
      </Fade>

      {/* beat 0 — the promise: the ½ is going to be earned, not assumed */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M420 88 C500 85, 590 92, 660 87"
        stroke={RED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <T x={540} y={124} size={16} fill={AMBER_DARK} script>
          {t(
            "we don't assume the ½ — we integrate it out",
            "½ maante nahi — integrate karke nikalte hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the stress-strain triangle (outline strokes + Fade-gated fill) */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d={arrowD(140, 400, 140, 166)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={140} y={150} size={13} fill={INK} weight={700}>
          σ (stress)
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d={arrowD(140, 400, 400, 400)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={420} y={424} size={13} fill={INK} weight={700}>
          ε (strain)
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M140 400 L340 196"
        stroke={INK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Polygon points="140,400 340,400 340,196" fill={GREEN} fillOpacity={0.22} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Line x1={340} y1={196} x2={340} y2={400} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
        <Line x1={140} y1={196} x2={340} y2={196} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={128} y={200} size={12} fill={MUTED} anchor="end">
          σ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={340} y={424} size={12} fill={MUTED}>
          ε
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.4)}
        d={arrowD(196, 276, 229, 299)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={166} y={240} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          slope = Y
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={166} y={260} size={12} fill={MUTED} anchor="start">
          {t("Young's modulus", "Young's modulus")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.0)}>
        <T x={270} y={468} size={15} fill={GREEN} script>
          {t(
            "this area = energy per unit volume",
            "yeh area = energy per unit volume"
          )}
        </T>
      </Fade>

      {/* beat 2 — the force at a partial extension, and the work of one more dl */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={460} y={180} size={24} fill={INK} weight={800} anchor="start">
          {"F("}
          <TSpan fontStyle="italic">l</TSpan>
          {") = (YA/L) · "}
          <TSpan fontStyle="italic">l</TSpan>
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.0)}
        d={arrowD(780, 172, 615, 172)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={790} y={180} size={15} fill={AMBER_DARK} script anchor="start">
          {t("already stretched by l", "pehle se l khinchi hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={460} y={232} size={22} fill={INK} weight={800} anchor="start">
          {"dW = F("}
          <TSpan fontStyle="italic">l</TSpan>
          {") · d"}
          <TSpan fontStyle="italic">l</TSpan>
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.0)}
        d={arrowD(780, 225, 585, 225)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <T x={790} y={232} size={15} fill={AMBER_DARK} script anchor="start">
          {t("one more dl costs this", "ek aur dl ka kharcha")}
        </T>
      </Fade>

      {/* beat 3 — add up every dl: the integral */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={460} y={300} size={24} fill={INK} weight={800} anchor="start">
          {"W = ∫"}
          <TSpan fontSize={13} dy={7}>
            0
          </TSpan>
          <TSpan fontSize={13} dy={-21}>
            ΔL
          </TSpan>
          <TSpan dy={14}>{" (YA/L) "}</TSpan>
          <TSpan fontStyle="italic">l</TSpan>
          {" d"}
          <TSpan fontStyle="italic">l</TSpan>
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d={arrowD(780, 292, 649, 292)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={790} y={300} size={15} fill={AMBER_DARK} script anchor="start">
          {t("add up every little dl", "har chhota dl jodiye")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={484} y={352} size={24} fill={INK} weight={800} anchor="start">
          = ½ (YA/L) (ΔL)²
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 7.0)}
        d={arrowD(780, 344, 652, 344)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={790} y={352} size={15} fill={MUTED} weight={700} anchor="start">
          {"∫ "}
          <TSpan fontStyle="italic">l</TSpan>
          {" d"}
          <TSpan fontStyle="italic">l</TSpan>
          {" = ½ "}
          <TSpan fontStyle="italic">l</TSpan>
          {"²"}
        </T>
      </Fade>

      {/* beat 4 — recognise the final force ⇒ Sec30's result, now proved */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={460} y={404} size={22} fill={INK} weight={800} anchor="start">
          F = (YA/L) ΔL
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(780, 397, 589, 397)}
        stroke={AMBER}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={790} y={404} size={15} fill={GREEN} script anchor="start">
          {t("that's the final force", "yahi final force hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d="M472 424 h236 q12 0 12 12 v36 q0 12 -12 12 h-236 q-12 0 -12 -12 v-36 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={590} y={462} size={26} fill={INK} weight={800}>
          U = ½ F ΔL
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={744} y={462} size={14} fill={GREEN} script anchor="start">
          {t("section 30's ½ — now proved", "section 30 ka ½ — ab proved")}
        </T>
      </Fade>

      {/* beat 5 — divide by the volume: the section's own hero */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M542 510 h421 q12 0 12 12 v48 q0 12 -12 12 h-421 q-12 0 -12 -12 v-48 q0 -12 12 -12"
        stroke={AMBER}
        sw={3.2}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={752} y={554} size={28} fill={INK} weight={800}>
          u = U/(AL) = ½σε = ½Yε² = σ²/2Y
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={270} y={340} size={26} fill={GREEN} weight={800}>
          u
        </T>
      </Fade>

      {/* beat 6 — what the ½ actually means */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M60 508 L60 566" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={76} y={526} size={15} fill={RED} weight={700} anchor="start">
          {t("the ½ is no mystery", "yeh ½ koi rahasya nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={556} size={15} fill={GREEN} weight={700} anchor="start">
          {t(
            "it's the average force, 0 → F — not full F",
            "average force hai, 0 → F — poora F nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

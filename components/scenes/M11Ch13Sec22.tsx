/**
 * M11 Ch13 · Section 22 — "The step-deviation method for grouped data"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 12.03, 22.78, 37.89, 50.6, 64.17, 80.38]):
 *  0 anchor: heading
 *  1 represent: Step 1 — replace each class by its mid-point x_i
 *  2 represent: Step 2 — assumed mean A, width h; d_i = (x_i-A)/h (Frac)
 *  3 represent: Step 3 — build columns f_i·d_i and f_i·d_i², totals
 *  4 land (boxed, high emphasis): σ² = h²[Σf_id_i²/N - (Σf_id_i/N)²] (2 Fracs)
 *  5 note (red-margin, high emphasis): h², not h — squared because variance
 *    scales by the SQUARE of any factor
 *  6 explain: coding shrinks big mid-points to small integers
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | text (13, ink)                   | T st  | x140 y108
 *  b2 | text (13, ink)                   | T st  | x140 y132
 *  b2 | d_i = Frac(x_i-A,h) (16)         | T+Frac| x140 y168
 *  b3 | text (13, ink)                   | T st  | x140 y205
 *  b4 | boxed formula (2 Fracs, green)   | Draw+Row/Frac | box x140..940 y225..305
 *  b5 | red bar + note (14)              | Draw+T| x60 y325..345 · text y339
 *  b6 | closing text (13, ink)           | T mid | x540 y378
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Frac } from "./math-kit";

export default function M11Ch13Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("The Step-Deviation Method", "Step-Deviation Method")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Coding big mid-points into tiny integers", "Bade mid-points ko chhote integers mein code karna")}
        </T>
      </Fade>

      {/* beat 1 — step 1: mid-points */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={108} size={13} fill={INK} anchor="start">
          {t("Step 1: replace each class by its mid-point x_i.", "Step 1: har class ko uske mid-point x_i se replace karo.")}
        </T>
      </Fade>

      {/* beat 2 — step 2: assumed mean, width, code d_i */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={140} y={132} size={13} fill={INK} anchor="start">
          {t(
            "Step 2: pick an assumed mean A (a central mid-point) and width h.",
            "Step 2: assumed mean A (central mid-point) aur width h chuno."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={140} y={185} size={16} fill={INK} anchor="start" weight={700}>{"d_i ="}</T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 1.3)} x={225} y={185} size={16} numerator="x_i - A" denominator="h" width={80} />

      {/* beat 3 — step 3: the two columns */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={140} y={222} size={13} fill={INK} anchor="start">
          {t(
            "Step 3: build columns f_i·d_i and f_i·d_i², then their totals.",
            "Step 3: columns f_i·d_i aur f_i·d_i² banao, phir totals."
          )}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): the step-deviation formula */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(140, 242, 800, 80)} stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={170} y={288} size={18} fill={INK} anchor="start" weight={700}>{"σ² = h² ["}</T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 1.6)} x={355} y={288} size={18} numerator="Σf_i d_i²" denominator="N" width={95} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={415} y={288} size={18} fill={INK} anchor="start" weight={700}>{"- ("}</T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 2.8)} x={520} y={288} size={18} numerator="Σf_i d_i" denominator="N" width={85} />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={578} y={288} size={18} fill={INK} anchor="start" weight={700}>{")² ]"}</T>
      </Fade>

      {/* beat 5 — note: h² not h */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 325 L 60 345" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={339} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "h² — not h — undoes the coding: variance scales by the SQUARE of any factor.",
            "h² — h nahi — coding undo karta hai: variance kisi bhi factor ke SQUARE se scale hota hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: coding shrinks large mid-points */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={378} size={13} fill={INK} anchor="middle">
          {t(
            "Coding shrinks large mid-points to integers like -2 ... 2, slashing arithmetic error.",
            "Coding bade mid-points ko -2 ... 2 jaise integers mein simeti — arithmetic error kam."
          )}
        </T>
      </Fade>
    </Scene>
  );
}

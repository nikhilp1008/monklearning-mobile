/**
 * M11 Ch05 · Section 17 — "CBSE derivation: why the solution is a whole
 * half-plane" — FLAGGED for extra scrutiny (formal proof + real geometric
 * construction). Canvas 1080×620 · safe x36–1044, y30–596.
 * Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Proof outline (b>0 case): P(α,β) on the line ax+by=c ⇒ aα+bβ=c. Q(α,γ)
 * directly above P ⇒ γ>β ⇒ (b>0) bγ>bβ ⇒ aα+bγ > aα+bβ = c ⇒ Q satisfies
 * ax+by>c. Every point above the line works; the sign of ax+by-c is
 * constant on each side, which is exactly why one test point suffices.
 *
 * Beats (en [0,16.3,31.49,42.67,60.42,71,87.72,103.08,119.13], hi
 * [0,13.65,28.25,40.28,55.47,66.99,86.1,100.69,117.85]) — proof column
 * (left) accumulates in sync with the diagram (right), nothing erased:
 *  0 heading — divider, PROOF/DIAGRAM headers, axes drawn
 *  1 text: claim — ax+by>c (b>0) is a half-plane of ax+by=c — line drawn
 *  2 text: P(α,β) on the line ⇒ aα+bβ=c — P plotted
 *  3 text: Q(α,γ) directly above P ⇒ γ>β ⇒ bγ>bβ — Q plotted + connector
 *  4 formula (high, boxed): aα+bγ > aα+bβ = c
 *  5 text: Q satisfies ax+by>c — every point above works — region II labeled
 *  6 text: converse runs backward — region I labeled
 *  7 note (red-margin, high): sign of ax+by-c constant each side ∎
 *  8 diagram: finished picture (labels settle)
 *
 * Layout plan:
 *  b0 | divider                    | Draw  | x560 y95..570
 *  b0 | "PROOF"/"DIAGRAM" (18,w800)| T mid | x280,115 / x800,115
 *  b0 | axes                       | Draw  | origin(650,470) x600..1020 y150..470
 *  b1 | row1 caption (14,ink,st)   | T st  | x80 bl150
 *  b1 | boundary line + label      | Draw+T| (650,180)-(950,450) · x660 y210
 *  b2 | row2 (14,ink,st)           | T st  | x80 bl208
 *  b2 | P dot + label              | circle/T | (830,342)
 *  b3 | row3 (14,ink,st)           | T st  | x80 bl266 (longer line, HI wraps? no, single line)
 *  b3 | Q dot + label + connector  | circle/T/Draw | (830,252)
 *  b4 | boxed formula (18,ink)     | Chip  | x150..470 y305..347 (bl 324-ish)
 *  b5 | row5 (14,ink,st) + "II"    | T st  | x80 bl390 · x900,200
 *  b6 | row6 (14,ink,st) + "I"     | T st  | x80 bl440 · x680,420
 *  b7 | boxed guardrail (16,red)   | Chip  | x140..940 y505..555 (full width, below axes)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN_DARK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

export default function M11Ch05Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("one algebraic proof, in a picture", "ek algebraic proof, ek picture mein")}
        </T>
      </Fade>

      {/* beat 0 — structure */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d={lineD(560, 95, 560, 570)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={280} y={115} size={18} fill={INK} weight={800}>
          PROOF
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <T x={800} y={115} size={18} fill={INK} weight={800}>
          {t("DIAGRAM", "DIAGRAM")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 0} delay={dl(0, 1.6)} originX={650} originY={470} xLeft={600} xRight={1020} yTop={150} yBottom={470} showTicks={false} />

      {/* beat 1 — the claim */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={150} size={14} fill={INK} anchor="start">
          {t("claim: ax+by>c (b>0) is a half-plane of ax+by=c", "claim: ax+by>c (b>0) ax+by=c ka half-plane hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={lineD(650, 180, 950, 450)} stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={660} y={210} size={13} fill={MUTED} anchor="start">
          ax + by = c
        </T>
      </Fade>

      {/* beat 2 — P(α,β) on the line */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={208} size={14} fill={INK} anchor="start">
          {t("P(α,β) on the line ⇒ aα + bβ = c", "P(α,β) line pe ⇒ aα + bβ = c")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Circle cx={830} cy={342} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={840} y={358} size={13} fill={MUTED} anchor="start">
          P(α,β)
        </T>
      </Fade>

      {/* beat 3 — Q(α,γ) directly above P */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={266} size={14} fill={INK} anchor="start">
          {t("Q(α,γ) directly above P ⇒ γ>β ⇒ bγ>bβ", "Q(α,γ) P ke seedha upar ⇒ γ>β ⇒ bγ>bβ")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={lineD(830, 337, 830, 257)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={830} cy={252} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={840} y={248} size={13} fill={MUTED} anchor="start">
          Q(α,γ)
        </T>
      </Fade>

      {/* beat 4 — the key algebraic step */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={130} y={300} w={360} h={48} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          aα + bγ &gt; aα + bβ = c
        </Chip>
      </Fade>

      {/* beat 5 — every point above works */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={385} size={14} fill={INK} anchor="start">
          {t("⇒ Q satisfies ax+by>c — every point above works", "⇒ Q, ax+by>c satisfy karta hai — upar wala har point works")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={900} y={200} size={16} fill={GREEN_DARK} weight={700}>
          II
        </T>
      </Fade>

      {/* beat 6 — the converse */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={433} size={14} fill={INK} anchor="start">
          {t("converse: any solution point must lie above the line", "converse: koi bhi solution point line ke upar hoga")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={680} y={420} size={16} fill={AMBER_DARK} weight={700}>
          I
        </T>
      </Fade>

      {/* beat 7 — the guardrail conclusion (spans full width, below both columns) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={505} w={800} h={50} fill={CREAM} stroke={RED} textFill={RED} size={16}>
          {t(
            "sign of ax+by-c is constant on each side — one test point suffices. Q.E.D.",
            "ax+by-c ka sign har side pe constant hai — ek hi test point kaafi hai. Q.E.D."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}

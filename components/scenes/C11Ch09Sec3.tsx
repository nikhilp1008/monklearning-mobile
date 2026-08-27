/**
 * C11 Ch09 · Section 3 — "How cycloalkanes react: strain decides"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.62, 18.0, 27.5, 37.46, 45.72, 54.05, 61.22]):
 *  0 heading: reactivity tracks ring strain · 1 small strained rings header +
 *  triangle icon · 2 cyclopropane + H2 --cat.--> propane (ring-opening addition)
 *  · 3 "mimics unsaturation" · 4 strain-free rings header + pentagon icon ·
 *  5 substitution reaction (hv, X2) · 6 RED rule: strained add & open, relaxed
 *  substitute · 7 closing line: 4 sub-topics ahead
 *
 * Layout plan:
 *  b0 | subtitle              | T mid | y91..110  (bl 105)
 *  b1 | "small strained rings"| T mid | y139..155 (bl 150) x230
 *  b1 | triangle icon         | Draw  | c(150,220) r26
 *  b2 | reaction arrow+"cat." | Draw+T| x195..320 y220
 *  b2 | "CH3CH2CH3"           | T mid | x410 y218..231 (bl 225)
 *  b3 | "mimics unsaturation" | T mid | x300 y257..275 (bl 275)
 *  b4 | "strain-free rings…"  | T mid | x230 y309..325 (bl 320)
 *  b4 | pentagon icon         | Draw  | c(150,390) r28
 *  b5 | reaction arrow+"hv,X2"| Draw+T| x195..320 y390
 *  b5 | "R–X (substitution)"  | T mid | x420 y388..401 (bl 395)
 *  b6 | margin bar + red rule | Draw+T| bar x60 y468..506 · text bl490
 *  b7 | closing note (muted)  | T mid | y527..544 (bl 535)
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
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD, ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} script>
          {t("how cycloalkanes react: strain decides", "cycloalkanes kaise react karte: strain decide karta")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={105} size={20} fill={INK} weight={700}>
          {t("reactivity tracks ring strain", "reactivity ring strain ko follow karti hai")}
        </T>
      </Fade>

      {/* beat 1 — small strained rings */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={230} y={150} size={16} fill={AMBER_DARK} weight={700}>
          {t("small strained rings", "small strained rings")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={ringD(150, 220, 26, 3)} stroke={INK} sw={2.2} dur={0.6} />

      {/* beat 2 — ring-opening addition: cyclopropane + H2 -> propane */}
      <ReactionArrow on={beat >= 2} delay={dl(2, 1)} x1={195} x2={320} y={220} over={t("H2, catalyst", "H2, catalyst")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={410} y={225} size={18} fill={INK} weight={700}>
          CH3CH2CH3
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={300} y={275} size={14} fill={AMBER_DARK} script>
          {t("= mimics an unsaturated compound", "= unsaturated compound jaisa behave")}
        </T>
      </Fade>

      {/* beat 4 — strain-free rings */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={230} y={320} size={16} fill={AMBER_DARK} weight={700}>
          {t("strain-free rings (cyclopentane+)", "strain-free rings (cyclopentane+)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={ringD(150, 390, 28, 5)} stroke={INK} sw={2.2} dur={0.6} />

      {/* beat 5 — free-radical substitution */}
      <ReactionArrow on={beat >= 5} delay={dl(5, 0.3)} x1={195} x2={320} y={390} over="hν, X2" color={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={420} y={395} size={18} fill={INK} weight={700}>
          {t("R–X (substitution)", "R–X (substitution)")}
        </T>
      </Fade>

      {/* beat 6 — the rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 468 L 60 506" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={490} size={17} fill={RED} script anchor="start">
          {t(
            "strained rings add and open; relaxed rings substitute",
            "strained rings add aur open karte; relaxed rings substitute karte"
          )}
        </T>
      </Fade>

      {/* beat 7 — what's next */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={535} size={14} fill={MUTED} script>
          {t(
            "next: alkanes, alkenes, alkynes, arenes — one sub-topic each",
            "aage: alkanes, alkenes, alkynes, arenes — ek-ek sub-topic"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

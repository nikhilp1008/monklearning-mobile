/**
 * M11 Ch08 · Section 38 — "An HP is an AP upside-down — reciprocate first"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 4 (HP).
 *
 * Math check (round-trip demo): HM(40,60) = 2·40·60/(40+60) = 4800/100 =
 * 48 — the correct average speed for equal-distance round trips (NOT the
 * arithmetic mean 50), a standard, verified result.
 *
 * Beats (en [0, 12.46, 21.42, 32.85, 43.43, 61.7, 76.63, 90.37]):
 *  0 title (always-on)
 *  1 THE DEMO 1: HP box --reciprocate--> AP box
 *  2 formula: HP ⟺ AP of reciprocals
 *  3 text: rates over a fixed task
 *  4 THE DEMO 2: round-trip speed, HM not AM
 *  5 red-margin: no closed-form sum
 *  6 text: A ≥ G ≥ H
 *  7 closer
 *
 * Layout plan:
 *  b1 | HP box x100..220 y100..140 · arrow x240..380 y120 · AP box x400..560
 *       y100..140 · caption bl185 cx330
 *  b2 | text bl215 cx540
 *  b3 | text bl245 cx540
 *  b4 | home box cx300 y280..306 · town box cx780 y280..306 · 2 arrows ·
 *       caption bl350 cx540 (bold) · subcaption bl372 cx540
 *  b5 | red bar x76 y392..467 · text bl412/452 x96
 *  b6 | text bl497 cx540
 *  b7 | text bl527 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch08Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Harmonic progression: reciprocals form an AP", "Harmonic progression: reciprocals AP banate hain")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO 1: HP -> reciprocate -> AP */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={roundRectD(100, 100, 120, 40)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={160} y={95} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>HP</T>
        <T x={160} y={125} size={13} fill={INK} anchor="middle">{"a₁, a₂, a₃, …"}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(240, 120, 380, 120)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={310} y={108} size={12} fill={AMBER_DARK} anchor="middle">{t("reciprocate", "reciprocate karo")}</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={roundRectD(400, 100, 160, 40)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={480} y={95} size={13} fill={GREEN_DARK} anchor="middle" weight={700}>AP</T>
        <T x={480} y={125} size={13} fill={INK} anchor="middle">{"1/a₁, 1/a₂, 1/a₃, …"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={330} y={185} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("flip → solve as an AP → flip back", "flip karo → AP jaisa solve karo → wapas flip")}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={215} size={14} fill={INK} anchor="middle">
          {"a₁, a₂, a₃, ... in HP ⟺ 1/a₁, 1/a₂, 1/a₃, ... in AP"}
        </T>
      </Fade>

      {/* beat 3 — rates over a fixed task */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={245} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "the maths of rates over a fixed task — where 'average' stops meaning AM",
            "fixed task ke rates ka maths — jahan 'average' ka matlab AM nahi rehta"
          )}
        </T>
      </Fade>

      {/* beat 4 — THE DEMO 2: round-trip speed */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={roundRectD(270, 280, 60, 26, 5)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={300} y={297} size={11} fill={INK} anchor="middle">{t("home", "ghar")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={roundRectD(750, 280, 60, 26, 5)} stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={780} y={297} size={11} fill={INK} anchor="middle">{t("town", "town")}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={arrowD(335, 285, 745, 285)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={275} size={13} fill={RED} anchor="middle">40 km/h</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(745, 306, 335, 306)} stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={540} y={324} size={13} fill={GREEN_DARK} anchor="middle">60 km/h</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={540} y={350} size={16} fill={INK} anchor="middle" weight={700}>
          {t("average speed = HM = 48", "average speed = HM = 48")}
        </T>
        <T x={540} y={372} size={12} fill={MUTED} anchor="middle" script>
          {t("not the arithmetic 50 — rates combine harmonically", "arithmetic 50 nahi — rates harmonically combine hote hain")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: no closed-form sum */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 392 v 75" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={412} size={15} fill={RED} anchor="start" script>
          {t("HP has NO general closed-form sum —", "HP ka koi general closed-form sum nahi —")}
        </T>
        <T x={96} y={452} size={15} fill={RED} anchor="start" script>
          {t("this is a feature, not a gap", "yeh ek feature hai, gap nahi")}
        </T>
      </Fade>

      {/* beat 6 — A ≥ G ≥ H */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={497} size={14} fill={INK} anchor="middle" script>
          {t("the three means line up forever: A ≥ G ≥ H, equal only when all equal", "teeno means hamesha align: A ≥ G ≥ H, equal tabhi jab sab equal")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={527} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "every HP question becomes an AP question the instant you flip the terms",
            "har HP question, AP question ban jaata hai jaise hi terms flip karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

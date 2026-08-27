/**
 * Ch01 · Section 5 — "Procedures B and C: converting, and building a system"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.5, 24.6, 43.3, 66.2, 81.2, 89.5, 111.0]):
 *  0 title (Procedure B) + drawn underline
 *  1 STEP 1: dimensional formula MᵃLᵇTᶜ — "the step everyone skips"
 *  2 STEP 2: the master relation, old/new in every bracket
 *  3 why powers? cube drawn → V = L³ → ratio³ — "exponent is a headcount"
 *  4 STEP 3: direction sanity check (smaller unit ⇒ bigger number)
 *  5 divider + Procedure C header — the trick behind the 2019 SI
 *  6 C: declare c·h fixed (drawn badges) → unit = cˣ hʸ Gᶻ, unknowns on top
 *  7 C: M·L·T → three equations → solved; anchor constants, units follow
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)        | T mid | x263..817  y30..76  (bl 62)
 *  b0 | underline                     | Draw  | y86  x340..740
 *  b1 | STEP chip (h38)               | Chip  | x60..300   y92..130
 *  b1 | "[Q] = Mᵃ Lᵇ Tᶜ" (sans 24)    | T mid | x482..638  y97..124 (bl 116)
 *  b1 | skip-note (script 15, red)    | T st  | x680..878  y96..124 (bl 116)
 *  b2 | STEP chip                     | Chip  | x60..300   y150..188
 *  b2 | master relation (sans 22)     | T mid | x378..742  y159..183 (bl 176)
 *  b2 | bracket-note (script 14)      | T mid | x464..656  y196..221 (bl 214)
 *  b3 | cube                          | Draw  | x80..132   y242..294
 *  b3 | "V = L³" (18) x145 st bl 276 · arrow (218,270)→(268,270) · "(L₁/L₂)³" x275 st
 *  b3 | headcount verdict (script 17) | T st  | x420..635  y254..285 (bl 276)
 *  b4 | STEP chip                     | Chip  | x60..250   y300..338
 *  b4 | direction line (script 17,red)| T st  | x270..691  y308..339 (bl 330)
 *  b4 | underline                     | Draw  | y350 x270..691
 *  b5 | divider                       | Draw  | y362 x60..1020
 *  b5 | C header (script 24)          | T mid | x289..791  y375..418 (bl 406)
 *  b5 | C subline (script 14, muted)  | T mid | x428..651  y433..458 (bl 451)
 *  b6 | "declare fixed:" (script 15)  | T st  | x60..176   bl 494
 *  b6 | c·h badges r22                | Draw  | c(250,488) c(310,488)  y466..510
 *  b6 | arrow (345,488)→(395,488) · "unit = cˣ hʸ Gᶻ" (sans 18) x405..540 bl 494
 *  b6 | "unknowns on top" (script 14) | T st  | x570..693  bl 494
 *  b7 | "M·L·T → 3 equations ✓" (15)  | T st  | x720..878  bl 494
 *  b7 | margin bar                    | Draw  | x51  y556..586
 *  b7 | verdict (script 17, green)    | T st  | x60..677   y553..584 (bl 575)
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Procedure B */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("Procedure B: carry a value across systems", "Procedure B: system badlo, value wahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 340 86 C 460 82, 620 89, 740 85"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — STEP 1: the dimensional formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={92} w={240} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · dimensions", "STEP 1 · dimensions")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={560} y={116} size={24} fill={INK} weight={800}>
          [Q] = Mᵃ Lᵇ Tᶜ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={680} y={116} size={15} fill={RED} script anchor="start">
          {t("the step everyone skips!", "jo step sab skip karte!")}
        </T>
      </Fade>

      {/* beat 2 — STEP 2: the master relation */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Chip x={60} y={150} w={240} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · master relation", "STEP 2 · master relation")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={560} y={176} size={22} fill={INK} weight={700}>
          n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={560} y={214} size={14} fill={AMBER_DARK} script>
          {t("old / new inside every bracket", "har bracket mein old / new")}
        </T>
      </Fade>

      {/* beat 3 — the exponent is a headcount */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.5)}
        d="M 80 254 h 40 v 40 h -40 z M 80 254 l 12 -12 h 40 l -12 12 M 120 254 l 12 -12 v 40 l -12 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={145} y={276} size={18} fill={INK} weight={700} anchor="start">
          V = L³
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={arrowD(218, 270, 268, 270)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={275} y={276} size={18} fill={INK} weight={700} anchor="start">
          (L₁/L₂)³
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={420} y={276} size={17} fill={AMBER_DARK} script anchor="start">
          {t("the exponent is a headcount!", "exponent = headcount!")}
        </T>
      </Fade>

      {/* beat 4 — STEP 3: sanity check the direction */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Chip x={60} y={300} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · direction", "STEP 3 · direction")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={270} y={330} size={17} fill={RED} script anchor="start">
          {t(
            "smaller unit ⇒ bigger number — else flip a ratio",
            "unit choti ⇒ number bada — warna ratio flip karo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6)}
        d="M 270 350 C 380 346, 560 352, 691 348"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 5 — Procedure C */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 60 362 H 1020"
        stroke={MUTED}
        sw={1.4}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={406} size={24} fill={AMBER_DARK} script>
          {t("Procedure C: build a system from scratch", "Procedure C: system zero se banao")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={540} y={451} size={14} fill={MUTED} script>
          {t("the trick behind the 2019 SI", "2019 SI ke peeche yahi trick hai")}
        </T>
      </Fade>

      {/* beat 6 — declare fundamentals, unknowns on top */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={60} y={494} size={15} fill={INK} script anchor="start">
          {t("declare fixed:", "fix karo:")}
        </T>
      </Fade>
      {[
        [250, "c"],
        [310, "h"],
      ].map(([cx, sym], i) => (
        <G key={sym}>
          <Draw
            on={beat >= 6}
            delay={dl(6, 2.5 + i * 0.7)}
            d={`M ${(cx as number) - 22} 488 A 22 22 0 1 1 ${(cx as number) + 22} 488 A 22 22 0 1 1 ${
              (cx as number) - 22
            } 488`}
            stroke={AMBER}
            sw={2.4}
            dur={0.5}
          />
          <Fade on={beat >= 6} delay={dl(6, 2.9 + i * 0.7)}>
            <T x={cx as number} y={495} size={18} fill={INK} weight={800}>
              {sym}
            </T>
          </Fade>
        </G>
      ))}
      <Draw
        on={beat >= 6}
        delay={dl(6, 7)}
        d={arrowD(345, 488, 395, 488)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        <T x={405} y={494} size={18} fill={INK} weight={700} anchor="start">
          unit = cˣ hʸ Gᶻ
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={570} y={494} size={14} fill={AMBER_DARK} script anchor="start">
          {t("unknowns on top", "unknown powers upar")}
        </T>
      </Fade>

      {/* beat 7 — three equations, three unknowns; the philosophy */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={720} y={494} size={15} fill={GREEN} script anchor="start">
          {t("M·L·T → 3 equations ✓", "M·L·T → 3 equations ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 8)}
        d="M 51 556 L 51 586"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 8.6)}>
        <T x={62} y={575} size={17} fill={GREEN} script anchor="start">
          {t(
            "anchor a few constants — every unit follows, in any lab in the cosmos",
            "kuch constants anchor karo — har unit khud follow karti hai, kahin bhi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

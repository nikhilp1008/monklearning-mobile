/**
 * Ch01 · Section 51 — "Procedure 2: rounding off without cheating"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.5, 30, 41, 53.5, 71, 84.8, 105.4]):
 *  0 title
 *  1 the instruction · "6.4|49" with ring on next digit · red cascade crossed · green fix
 *  2 case 1 row: <5 → stays · 6.24 → 6.2
 *  3 case 2 row: >5 → up · 6.27 → 6.3
 *  4 case 3 row: 5+non-zero → up · 14.252 → 14.3
 *  5 case 4 headline: exactly 5 = tie → make it EVEN
 *  6 two tie examples: 6.250 → 6.2 · 6.350 → 6.4
 *  7 bias diagram: all-up arrows drift red vs half-half green
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | instr script 16 st x60 bl 100 · "6.4" 32 st x100 bl 160 · bar x152 · "49" st x158 (ring c(167,152) rx14 ry20)
 *  b1 | red cascade 18 st x420 bl 152 + cross(418,138,168,20) · green script 15 st x420 bl 190
 *  rows bl 250/306/362: cond chip x60..240 h32 · example 20 st x280 · note script 13 st x520
 *  b5 | chip x60..284 y390..426 · script st x320 bl 413
 *  b6 | ex 20 st x100/x560 bl 460 · notes script 13 st x240/x700
 *  b7 | arrows y500..540: red x80.. step30 ×6 · green x560.. step30 ×6 · labels bl 570
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  ringD,
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

export default function Ch01Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const upArrow = (x: number, y: number) => `M ${x} ${y} v -30 M ${x - 6} ${y - 22} L ${x} ${y - 30} L ${x + 6} ${y - 22}`;
  const dnArrow = (x: number, y: number) => `M ${x} ${y - 30} v 30 M ${x - 6} ${y - 8} L ${x} ${y} L ${x + 6} ${y - 8}`;

  const caseRow = (
    k: number,
    bl: number,
    cond: string,
    ex: string,
    note: string,
    noteColor: string
  ) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 1)}>
        <Chip x={60} y={bl - 22} w={180} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {cond}
        </Chip>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 3)}>
        <T x={280} y={bl} size={20} fill={INK} weight={700} anchor="start">{ex}</T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 6)}>
        <T x={520} y={bl} size={13} fill={noteColor} script anchor="start">{note}</T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t("rounding off — without cheating", "rounding off — bina cheating ke")}
        </T>
      </Fade>

      {/* beat 1 — the one instruction */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={60} y={100} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "look ONLY at the digit right after the last one you keep",
            "sirf usi digit ko dekho jo aakhri rakhe digit ke turant baad hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={100} y={160} size={32} fill={INK} weight={700} anchor="start">6.4</T>
        <T x={158} y={160} size={32} fill={MUTED} weight={700} anchor="start">49</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 152 132 v 38" stroke={AMBER} sw={2.4} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d={ringD(167, 152, 14, 20)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={420} y={152} size={18} fill={RED} weight={600} anchor="start">6.449 → 6.45 → 6.5</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 14)}
        d={crossD(418, 138, 168, 20)}
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 17)}>
        <T x={420} y={190} size={15} fill={GREEN} script anchor="start">
          {t("just the next digit: 6.449 → 6.4 ✓", "bas agla digit: 6.449 → 6.4 ✓")}
        </T>
      </Fade>

      {/* beats 2–4 — cases 1–3 */}
      {caseRow(
        2, 250,
        t("less than 5", "5 se kam"),
        "6.24 → 6.2",
        t("4 is below 5 — leave it", "4 paanch se neeche — waise hi chhodo"),
        INK_LIGHT
      )}
      {caseRow(
        3, 306,
        t("more than 5", "5 se zyada"),
        "6.27 → 6.3",
        t("7 is above 5 — raise", "7 paanch se upar — badhao"),
        INK_LIGHT
      )}
      {caseRow(
        4, 362,
        t("5 + non-zero after", "5 + baad mein kuchh"),
        "14.252 → 14.3",
        t("the trailing 2 tips it past halfway", "aakhri 2 use aadhe se aage jhuka deta"),
        AMBER_DARK
      )}

      {/* beat 5 — the tie */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={60} y={390} w={224} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t("exactly 5 — a TIE", "theek 5 — barabari")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={320} y={413} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "round so the digit before becomes EVEN",
            "aise round karo ki pichhla digit EVEN ban jaye"
          )}
        </T>
      </Fade>

      {/* beat 6 — two tie examples */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={100} y={460} size={20} fill={INK} weight={700} anchor="start">6.250 → 6.2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={240} y={460} size={13} fill={GREEN} script anchor="start">
          {t("2 already even — stays", "2 pehle se even — tika")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={560} y={460} size={20} fill={INK} weight={700} anchor="start">6.350 → 6.4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={700} y={460} size={13} fill={GREEN} script anchor="start">
          {t("3 odd — raise to 4", "3 odd — chaar karo")}
        </T>
      </Fade>

      {/* beat 7 — why even: the drift */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 3)}
        d={[80, 110, 140, 170, 200, 230].map((x) => upArrow(x, 540)).join(" ")}
        stroke={RED}
        sw={2.2}
        dur={1.2}
      />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={60} y={570} size={14} fill={RED} script anchor="start">
          {t(
            "always up → everything drifts ↑",
            "hamesha upar → sab upar khisakta ↑"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 12)}
        d={[560, 620, 680].map((x) => upArrow(x, 540)).join(" ") + " " + [590, 650, 710].map((x) => dnArrow(x, 540)).join(" ")}
        stroke={GREEN}
        sw={2.2}
        dur={1.2}
      />
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={750} y={570} size={14} fill={GREEN} script anchor="start">
          {t(
            "half up, half down — bias cancels",
            "aadhe upar, aadhe neeche — bias cut"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

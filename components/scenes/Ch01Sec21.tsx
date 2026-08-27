/**
 * Ch01 · Section 21 — "Procedure 2 (deriving) and Procedure 3 (converting)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.5, 24.7, 41.1, 64.1, 85.9, 95.6, 119.9]):
 *  0 title: derive what you were never taught
 *  1 STEP 1 · assume: Q = C · xᵃ yᵇ zᶜ
 *  2 the load-bearing bet (wrong bet → method fails)
 *  3 steps 2–4 chips: insert dims · equate powers · solve
 *  4 the C caveat box + "+1 mark" chip
 *  5 divider + Procedure 3 header
 *  6 [Q] = MᵃLᵇTᶜ · n₁u₁ = n₂u₂ → master relation
 *  7 the counting: L once in speed, thrice in volume
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)   | T mid | x210..870 bl 62
 *  b1 | chip x60..250 y92..130 · formula (sans 24) (470, bl 118)
 *  b2 | bet note (script 15) x660 st bl 112 · fail note (script 13, red) x660 st bl 146
 *  b3 | chips y170..208: x60..240 / 270..560 / 590..810 · note (script 14) x840 st bl 196
 *  b4 | caveat box x60..770 y230..290 · line (script 15) mid bl 264 · chip x800..930 y235..275
 *  b5 | divider y320 · header (script 20) mid bl 356
 *  b6 | rows bl 400: [Q] x60 st · n₁u₁=n₂u₂ x330 st · arrow (500,394)→(550,394) · master x560 st
 *  b7 | counting (sans 16) x60..470 bl 460 · verdict (script 16, green) x62 st bl 520 · bar x51
 */

import React from "react";
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

export default function Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the reputation-earner */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "Procedure 2 — derive what you were never taught",
            "Procedure 2 — jo kabhi nahi padha, wo derive karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the assumption */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={92} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · assume", "STEP 1 · maano")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={470} y={118} size={24} fill={INK} weight={800}>
          Q = C · xᵃ yᵇ zᶜ
        </T>
      </Fade>

      {/* beat 2 — the load-bearing bet */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={660} y={112} size={15} fill={AMBER_DARK} script anchor="start">
          {t("the load-bearing BET: one power-law", "load uthane wali SHART: ek power-law")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={660} y={146} size={13} fill={RED} script anchor="start">
          {t("wrong bet → the method fails (limitation 3)", "shart galat → method fail (limitation 3)")}
        </T>
      </Fade>

      {/* beat 3 — steps 2 to 4 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={60} y={170} w={180} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("2 · insert dims", "2 · dims daalo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Chip x={270} y={170} w={290} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("3 · equate M · L · T powers", "3 · M · L · T powers barabar karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <Chip x={590} y={170} w={220} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("4 · solve & substitute", "4 · solve & wapas rakho")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 18)}>
        <T x={840} y={196} size={14} fill={GREEN} script anchor="start">
          {t("3 equations — solvable", "3 equations — ban jaata hai")}
        </T>
      </Fade>

      {/* beat 4 — the caveat that earns a mark */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 72 230 h 686 q 12 0 12 12 v 36 q 0 12 -12 12 h -686 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={415} y={264} size={15} fill={INK} script>
          {t(
            "C stays unknown forever — say so explicitly in your answer",
            "C hamesha unknown rahega — answer mein saaf likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <Chip x={800} y={235} w={130} h={40} fill={GREEN} textFill="#fff" size={16}>
          +1 mark
        </Chip>
      </Fade>

      {/* beat 5 — the third pillar */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 60 320 H 1020"
        stroke={MUTED}
        sw={1.4}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={356} size={20} fill={AMBER_DARK} script>
          {t("Procedure 3 — conversion, the third pillar", "Procedure 3 — conversion, teesra pillar")}
        </T>
      </Fade>

      {/* beat 6 — the machinery again */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={400} size={18} fill={INK} weight={700} anchor="start">
          [Q] = Mᵃ Lᵇ Tᶜ
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={330} y={400} size={18} fill={INK} weight={700} anchor="start">
          n₁u₁ = n₂u₂
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 12)}
        d={arrowD(500, 394, 550, 394)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={560} y={400} size={18} fill={INK} weight={700} anchor="start">
          n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ
        </T>
      </Fade>

      {/* beat 7 — the dimension does the counting */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={60} y={460} size={16} fill={INK} weight={600} anchor="start">
          {t(
            "speed: L appears once → power 1 · volume: L appears thrice → power 3",
            "speed: L ek baar → power 1 · volume: L teen baar → power 3"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 11)}
        d="M 51 500 L 51 530"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={62} y={520} size={16} fill={GREEN} script anchor="start">
          {t(
            "the dimension is doing the counting for you",
            "dimension tumhare liye ginti kar raha hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

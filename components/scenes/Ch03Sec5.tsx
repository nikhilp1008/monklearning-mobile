/**
 * Ch03 · Section 5 — "Board derivation, part two: direction, and the three special cases"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.8, 32.2, 55.3, 70.6, 83.8, 84.8, 109.6, 126.7]):
 *  0 title: where does R POINT?
 *  1 right Δ OQS: R along OQ, angle α with A
 *  2 formula box: tan α = B sinθ / (A + B cosθ)
 *  3 red note: both halves, every time
 *  4 header: three special cases from ONE formula
 *  5 θ = 0 → A + B (max)
 *  6 θ = 180 → |A − B| (min)
 *  7 θ = 90 → √(A²+B²)
 *  8 hero band: |A−B| ≤ R ≤ A+B
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | O(90,300) S(450,300) Q(450,140) · base O→S lbl "A + B cosθ" cx270 bl 322 ·
 *       vert S→Q lbl "B sinθ" st x462 bl 225 · hyp O→Q lbl "R" (240,208) ·
 *       right-angle M442 300 v-8 h8 · α arc r45 lbl (185,284) ·
 *       O end x82 bl 306 · S cx450 bl 322?→cx462? S lbl (450,322)→ moved: cx450 bl 322
 *       (base lbl shifted cx250) · Q (450,130) · caption cx270 bl 350
 *  b2 | box x84..470 y364..410 text cx277 bl 394 s16 · caption cx277 bl 432
 *  b3 | bar M66 452 v40 · lines st x84 bl 470 / 492
 *  b4 | header st x580 bl 130 · underline M580 140 h330
 *  b5 | chip x580 y156 w90 h30 · line st x690 bl 176 · tag st x690 bl 200
 *  b6 | chip x580 y226 w100 h30 · line st x690 bl 246 · tag st x690 bl 270
 *  b7 | chip x580 y296 w90 h30 · line st x690 bl 316 · tag st x690 bl 340
 *  b8 | box x580..1030 y380..436 text cx805 bl 416 s19 · caption cx805 bl 462
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
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

export default function Ch03Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t(
            "The magnitude is half the answer — where does R POINT?",
            "Magnitude aadha jawaab hai — R POINT kahan karta hai?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d="M 340 64 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the big right triangle again */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 90 300 H 450" stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 450 300 V 140" stroke={AMBER_DARK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d="M 442 300 v -8 h 8" stroke={AMBER_DARK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={82} y={306} size={13} fill={INK_LIGHT} anchor="end">O</T>
        <T x={450} y={130} size={13} fill={INK_LIGHT}>Q</T>
        <T x={462} y={225} size={13} fill={AMBER_DARK} weight={700} anchor="start">B sinθ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={250} y={322} size={13} fill={INK} weight={700}>A + B cosθ</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.6)} d={arrowD(90, 300, 450, 140)} stroke={GREEN} sw={3} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={240} y={208} size={15} fill={GREEN} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 8)} d="M 135 300 A 45 45 0 0 0 131.1 281.7" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 8.6)}>
        <T x={185} y={284} size={13} fill={AMBER_DARK} weight={700}>α</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={270} y={350} size={12} fill={INK_LIGHT} script>
          {t(
            "R runs along OQ — it makes angle α with A",
            "R OQ ke saath chalta hai — A se angle α banata hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the tangent */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 96 364 h 362 q 12 0 12 12 v 22 q 0 12 -12 12 h -362 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={277} y={394} size={16} fill={INK} weight={800}>
          tan α = B sinθ ⁄ (A + B cosθ)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={277} y={432} size={12} fill={AMBER_DARK} script>
          {t("the direction, measured from A", "direction — A se naapi gayi")}
        </T>
      </Fade>

      {/* beat 3 — both halves */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 452 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "write BOTH halves every time: √ for size, tan for direction",
            "dono hisse har baar likho: √ se size, tan se direction"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={84} y={492} size={13} fill={RED} script anchor="start">
          {t(
            "size-only answer = incomplete — and marked as incomplete",
            "sirf size wala jawaab adhoora — aur adhoora hi cut'ta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — special cases header */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={130} size={14} fill={INK} script anchor="start">
          {t(
            "three special cases — same ONE formula",
            "teen special cases — wahi EK formula"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 580 140 h 330" stroke={AMBER} sw={2} dur={0.5} />

      {/* beat 5 — θ = 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={580} y={156} w={90} h={30} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          θ = 0°
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={690} y={176} size={14} fill={INK} weight={700} anchor="start">
          cos = 1 → R = A + B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={690} y={200} size={12} fill={GREEN} script anchor="start">
          {t("aligned — the MAXIMUM", "ek hi taraf — MAXIMUM")}
        </T>
      </Fade>

      {/* beat 6 — θ = 180 */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={580} y={226} w={100} h={30} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          θ = 180°
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={690} y={246} size={14} fill={INK} weight={700} anchor="start">
          cos = −1 → R = |A − B|
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={690} y={270} size={12} fill={RED} script anchor="start">
          {t("opposed — MINIMUM (modulus!)", "ulti taraf — MINIMUM (modulus!)")}
        </T>
      </Fade>

      {/* beat 7 — θ = 90 */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={580} y={296} w={90} h={30} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          θ = 90°
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={690} y={316} size={14} fill={INK} weight={700} anchor="start">
          cos = 0 → R = √(A² + B²)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={690} y={340} size={12} fill={AMBER_DARK} script anchor="start">
          {t("Pythagoras — the 3-4-5 walk", "Pythagoras — wahi 3-4-5 walk")}
        </T>
      </Fade>

      {/* beat 8 — the band */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.8)}
        d="M 592 380 h 426 q 12 0 12 12 v 32 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -32 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={805} y={416} size={19} fill={INK} weight={800}>
          |A − B|  ≤  R  ≤  A + B
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={805} y={462} size={12} fill={GREEN} script>
          {t(
            "R can never leave this band — it demolishes a NEET question soon",
            "R is band se kabhi bahar nahi — jald hi ek NEET sawaal isi se girega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

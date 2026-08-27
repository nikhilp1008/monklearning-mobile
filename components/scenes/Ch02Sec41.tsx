/**
 * Ch02 · Section 41 — "Example 3 [JEE Main]: thrown up from a 25 m tower"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.8, 45.8, 70.7, 87.2, 112, 136.6, 161.5]):
 *  0 title + problem line
 *  1 picture: tower, up/down shafts past the launch point, ground, +up marker
 *  2 setup card: origin at launch · u = +20 · a = −10 · ground s = −25
 *  3 (a) header: v = 0 at top ⇒ equation ③
 *  4 work: H = 20 above top → 45 m above GROUND (the mark)
 *  5 (b) quadratic → t = 5 s
 *  6 (c) double negative → v = 30 m/s down + sign-slip warning
 *  7 red note: politely decline t = −1
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  tower x140..220 y250..440 · launch dot (235,250) · up (255,245)→(255,155) ·
 *  apex arc M255,155 Q270,138 285,155 · "v = 0" cx270 bl 128 · down (285,155)→(285,435) ·
 *  "u = +20" st (300,200) · ground y440 x100..360 · "ground: s = −25 m" cx230 bl 466 ·
 *  bracket x128 y250..440 · "25 m" end (124,350) · +up arrow (90,330)→(90,260), "+" (90,246)
 *  right col st x436: b2 y105..175 (bl 130/156) · b3 bl 200 · b4 bl 232/262 (+note bl 288) ·
 *  b5 bl 322/352 · b6 bl 386/416 (+note bl 442)
 *  b7 | bar x66 y490..545 · lines st x84 bl 510 / 536
 */

import React from "react";
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

export default function Ch02Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — sign convention becomes the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — thrown up from a 25 m tower",
            "Example 3 [JEE Main] — 25 m ke minar se upar phenka"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "up at 20 m/s from the top — max height above the GROUND, total time, impact speed",
            "upar se 20 m/s — ZAMEEN se max oonchaai, kul samay, takkar ki speed"
          )}
        </T>
      </Fade>

      {/* beat 1 — the geometry is the difficulty */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 140 440 V 250 H 220 V 440"
        stroke={INK}
        sw={2.2}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M 100 440 h 260 M 130 440 l -10 12 M 200 440 l -10 12 M 270 440 l -10 12 M 340 440 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 231 250 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(255, 245, 255, 155)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.2)}
        d="M 255 155 Q 270 138 285 155"
        stroke={MUTED}
        sw={1.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={270} y={128} size={11} fill={MUTED} script>
          v = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.6)}
        d={arrowD(285, 155, 285, 435)}
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={300} y={200} size={12} fill={GREEN} script anchor="start">
          u = +20
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 9.5)}
        d="M 128 250 V 440 M 122 250 h 12 M 122 440 h 12"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 10.3)}>
        <T x={116} y={350} size={12} fill={INK} anchor="end" weight={700}>
          25 m
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 11.5)}
        d={arrowD(90, 330, 90, 260)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 12.3)}>
        <T x={90} y={246} size={15} fill={AMBER_DARK} weight={800}>
          +
        </T>
      </Fade>

      {/* beat 2 — the crucial line */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 432 105 h 596 q 12 0 12 12 v 46 q 0 12 -12 12 h -596 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={436 + 8} y={130} size={12} fill={INK} script anchor="start">
          {t(
            "up = + · origin at the launch point (the tower top)",
            "upar = + · origin launch point par (minar ki choti)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={436 + 8} y={156} size={12} fill={RED} script anchor="start">
          {t(
            "u = +20 · a = −10 · the ground sits at s = −25 (BELOW the origin)",
            "u = +20 · a = −10 · zameen s = −25 par (origin ke NEECHE)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={230} y={466} size={12} fill={RED} script>
          {t("ground: s = −25 m", "zameen: s = −25 m")}
        </T>
      </Fade>

      {/* beat 3 — (a) the tool */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={436} y={200} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "(a) v = 0 at the top · time neither given nor wanted ⇒ equation ③",
            "(a) choti par v = 0 · samay na diya na chahiye ⇒ equation ③"
          )}
        </T>
      </Fade>

      {/* beat 4 — answer the asked question */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={436} y={232} size={14} fill={INK} anchor="start" weight={700}>
          0 = 20² − 2·10·H → H = 20 m above the top
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={436} y={262} size={14} fill={GREEN} anchor="start" weight={700}>
          {t(
            "asked ABOVE THE GROUND: 25 + 20 = 45 m",
            "ZAMEEN se poochha tha: 25 + 20 = 45 m"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8)}
        d="M 436 272 h 300"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={436} y={292} size={11} fill={RED} script anchor="start">
          {t(
            "that final addition is the mark students leave on the table",
            "yahi aakhri jod woh mark hai jo students chhod aate hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — (b) the quadratic */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={436} y={324} size={14} fill={INK} anchor="start" weight={700}>
          (b) −25 = 20t − 5t²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={436} y={354} size={14} fill={INK} anchor="start" weight={700}>
          t² − 4t − 5 = 0 → (t−5)(t+1) = 0 → t = 5 s
        </T>
      </Fade>

      {/* beat 6 — (c) the double negative */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={436} y={388} size={14} fill={INK} anchor="start" weight={700}>
          (c) v² = 400 − 2·10·(−25) = 900
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={436} y={418} size={14} fill={INK} anchor="start" weight={700}>
          {t("v = 30 m/s, downward", "v = 30 m/s, neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={436} y={444} size={11} fill={RED} script anchor="start">
          {t(
            "slip the sign on s ⇒ v² = −100 — the physics yelling that your convention broke",
            "s ka sign phisla ⇒ v² = −100 — physics chilla kar batati hai convention toota"
          )}
        </T>
      </Fade>

      {/* beat 7 — politely decline */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 490 v 55" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={510} size={13} fill={RED} script anchor="start">
          {t(
            "the quadratic honestly offers t = −1 s — the time before launch",
            "quadratic imaandaari se t = −1 s bhi deta hai — launch se pehle ka samay"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={536} size={13} fill={RED} script anchor="start">
          {t(
            "unphysical: the maths politely offers, you politely decline",
            "aphysical: maths vinamrata se deta hai, tum vinamrata se mana karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}

/**
 * Ch02 · Section 39 — "Example 1 [CBSE]: dropped from a 45 m building"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.3, 35.9, 54.2, 74.8, 95, 103.9, 128.7]):
 *  0 title + problem line
 *  1 picture: building, ball, down = + arrow, 45 m bracket, ground
 *  2 data card: 'dropped' ⇒ u = 0 · h = 45 · g = +10
 *  3 (a) which equation — ② (no v)
 *  4 work: 45 = 5t² → t = 3 s
 *  5 (b) equation ①
 *  6 v = 30 m/s downward + feed-forward note
 *  7 red note: reject t = −3
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  building x140..260 y150..440 · ball c(280,160) r8 · arrow (310,180)→(310,300) ·
 *  "+ (down)" st (322,246) · bracket x120 y150..440 · "45 m" end (110,300) · ground y440
 *  b2 card x400..1030 y110..175 (lines st x420 bl 138/164)
 *  b3 card x400..1030 y200..268 (hdr bl 224 · formula bl 254)
 *  b4 st x420 bl 300 / 334 · note bl 360 · b5 st x420 bl 396
 *  b6 st x420 bl 430 · note bl 456
 *  b7 | bar x66 y494..546 · lines st x84 bl 512 / 538
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

export default function Ch02Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the cleanest drop */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE] — dropped from a 45 m building",
            "Example 1 [CBSE] — 45 m ki imaarat se giraya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "dropped from rest, g = 10, no air — find the time to the ground and the impact velocity",
            "rest se giraya, g = 10, hawa nahi — zameen tak ka samay aur takraane ki velocity nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the picture, convention first */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 140 440 V 150 H 260 V 440 M 165 190 h 25 M 220 190 h 25 M 165 250 h 25 M 220 250 h 25 M 165 310 h 25 M 220 310 h 25"
        stroke={INK}
        sw={2}
        dur={1.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.8)}
        d="M 100 440 h 240 M 130 440 l -10 12 M 200 440 l -10 12 M 270 440 l -10 12 M 330 440 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 272 160 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d={arrowD(310, 180, 310, 300)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={322} y={246} size={12} fill={AMBER_DARK} script anchor="start">
          {t("+ (down)", "+ (neeche)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.5)}
        d="M 120 150 V 440 M 114 150 h 12 M 114 440 h 12"
        stroke={MUTED}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={110} y={300} size={13} fill={INK} anchor="end" weight={700}>
          45 m
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 412 110 h 606 q 12 0 12 12 v 41 q 0 12 -12 12 h -606 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={420} y={138} size={13} fill={INK} script anchor="start">
          {t(
            "'dropped' ⇒ u = 0 — that single word is worth a mark",
            "'dropped' ⇒ u = 0 — yeh ek shabd ek mark ka hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={420} y={164} size={13} fill={INK} script anchor="start">
          {t("h = 45 m · g = +10 m/s² (down is +)", "h = 45 m · g = +10 m/s² (neeche +)")}
        </T>
      </Fade>

      {/* beat 3 — pick the equation by absence */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={420} y={224} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "(a) time — v neither given nor asked ⇒ equation ② (the one with no v)",
            "(a) samay — v na diya na poochha ⇒ equation ② (jisme v nahi)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={420} y={254} size={15} fill={INK} anchor="start" weight={700}>
          s = ut + ½at²
        </T>
      </Fade>

      {/* beat 4 — the collapse */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={420} y={300} size={15} fill={INK} anchor="start" weight={700}>
          45 = 0 + ½·10·t² = 5t²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={420} y={334} size={15} fill={INK} anchor="start" weight={700}>
          t² = 9 → t = 3 s
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8)}
        d="M 420 344 h 150"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={420} y={364} size={11} fill={MUTED} script anchor="start">
          {t(
            "u = 0 collapsed the whole equation",
            "u = 0 ne poora equation samet diya"
          )}
        </T>
      </Fade>

      {/* beat 5 — feed t forward */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={420} y={398} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "(b) impact v — t is now known ⇒ equation ①: v = u + gt",
            "(b) takkar ki v — ab t pata hai ⇒ equation ①: v = u + gt"
          )}
        </T>
      </Fade>

      {/* beat 6 — thirty, downward */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={420} y={432} size={16} fill={INK} anchor="start" weight={700}>
          {t("v = 0 + 10·3 = 30 m/s, downward", "v = 0 + 10·3 = 30 m/s, neeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={420} y={458} size={11} fill={MUTED} script anchor="start">
          {t(
            "positive = downward, by our convention · one unknown at a time, fed forward",
            "positive = neeche, apni convention se · ek-ek unknown, aage badhaya"
          )}
        </T>
      </Fade>

      {/* beat 7 — the polite wrong root */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 494 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={512} size={13} fill={RED} script anchor="start">
          {t(
            "t² = 9 also offers t = −3 s — a real root, a nonsense answer (before the drop)",
            "t² = 9 se t = −3 s bhi milta hai — sacha root, bekaar jawaab (girne se pehle ka)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={538} size={13} fill={RED} script anchor="start">
          {t(
            "reject it against the physics — the harder examples will demand this habit",
            "physics se milaakar khaarij karo — mushkil examples yahi aadat maangenge"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
